// LAN server protocol and safety checks with raw WebSocket clients (Node 22 built-in WebSocket) against a real
// server process. No browser. Usage: node tools/server-test.cjs
const path = require('path'), http = require('http'), net = require('net'), { spawn } = require('child_process');
const PORT = 19000 + Math.floor(Math.random() * 500);
const results = []; const check = (n, ok, info) => { results.push(ok); console.log(`${ok ? 'PASS' : 'FAIL'}  ${n}${info !== undefined ? '  — ' + JSON.stringify(info) : ''}`); };
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const W = (u = `ws://127.0.0.1:${PORT}/ws`) => new Promise((res, rej) => { const w = new WebSocket(u), q = []; w.onmessage = (e) => q.push(JSON.parse(e.data)); w.onopen = () => res({ w, q, send: (o) => w.send(typeof o === 'string' ? o : JSON.stringify(o)), last: (t) => [...q].reverse().find((m) => m.t === t) }); w.onerror = () => rej(new Error('ws error')); });
const get = (p) => new Promise((res) => { const s = net.connect(PORT, '127.0.0.1', () => s.write(`GET ${p} HTTP/1.1\r\nHost: x\r\nConnection: close\r\n\r\n`)); let d = ''; s.on('data', (x) => { d += x; }); s.on('end', () => res(+(/HTTP\/1\.1 (\d+)/.exec(d) || [])[1])); s.on('error', () => res(0)); });
(async () => {
  const srv = spawn(process.execPath, [path.join(__dirname, '..', 'server', 'lan.cjs'), '--port', String(PORT), '--quiet'], { stdio: 'ignore' });
  await wait(700);
  try {
    const { isLocalAddress } = require('../server/lan.cjs');
    check('address policy: loopback / private / link-local allowed, public refused', ['127.0.0.1', '::1', '10.1.2.3', '172.16.0.9', '172.31.255.1', '192.168.0.4', '169.254.3.3', '::ffff:192.168.1.2', 'fd12:3456::1'].every(isLocalAddress) && !['8.8.8.8', '172.32.0.1', '1.1.1.1', '::ffff:8.8.4.4', '2001:db8::1'].some(isLocalAddress));
    check('static files: game served, everything else (traversal, source, server code) refused', (await get('/')) === 200 && (await get('/dist/game.js')) === 200 && (await get('/../package.json')) === 404 && (await get('/%2e%2e/package.json')) === 404 && (await get('/server/lan.cjs')) === 404 && (await get('/src/main.js')) === 404);
    const a = await W(), b = await W();
    a.send({ t: 'create', name: '<img src=x onerror=alert(1)>Alpha' }); await wait(120);
    const code = a.last('joined').code, nm = a.last('lobby').players[0].name;
    check('names are sanitised (no markup characters)', !/[<>"']/.test(nm), nm);
    b.send({ t: 'join', code: 'AAAAA', name: 'B' }); await wait(80); const bad = b.last('err');
    b.send({ t: 'join', code: code.toLowerCase(), name: 'Bravo' }); await wait(120);
    check('join: unknown code refused with BAD_CODE; code is case-insensitive', bad.code === 'BAD_CODE' && !!b.last('joined'));
    b.send({ t: 'start' }); await wait(60); const nl = b.last('err');
    a.send({ t: 'start' }); await wait(60); const nr = a.last('err');
    check('start: only the leader, only when everyone is ready', nl.code === 'NOT_LEADER' && nr.code === 'NOT_READY');
    b.send({ t: 'settings', settings: { map: 'forest' } }); await wait(60);
    a.send({ t: 'settings', settings: { map: 'nowhere', mission: 'multi', length: 'quick', ai: 'godlike', ff: 'yes' } }); await wait(80);
    const st = a.last('lobby').settings;
    check('settings: members cannot change them; invalid values are ignored; invalid lengths corrected', st.map === 'warehouse' && st.ai === 'tactical' && st.mission === 'multi' && st.length === 'standard' && st.ff === false, st);
    b.send({ t: 'loadout', loadout: { primary: 'railgun', secondary: 'smg', kit: 'x', att: { smg: { optic: 'thermal', muzzle: 1 } } } }); await wait(80);
    const lo = a.last('lobby').players[1].loadout;
    check('loadouts: unknown weapons / optics / kits replaced by defaults', lo.primary === 'm4' && lo.secondary === 'smg' && lo.kit === 'assault' && lo.att.smg.optic === 'iron' && lo.att.smg.muzzle === true, lo);
    const n0 = a.q.length; b.send('{not json'); b.send('[1,2]'); b.send({ t: 'x'.repeat(40) }); b.send({ t: 'snap', e: [] }); await wait(100);
    check('malformed / unknown / out-of-phase messages are rejected, nothing reaches the leader', b.q.some((m) => m.code === 'BAD_MESSAGE') && a.q.slice(n0).every((m) => m.t === 'lobby' || m.t === 'ping'));
    // start a mission and check in-mission routing
    b.send({ t: 'ready', ready: true }); await wait(50); a.send({ t: 'start' }); await wait(80); a.send({ t: 'loaded' }); b.send({ t: 'loaded' }); await wait(100);
    const go = !!b.last('go'); const n1 = a.q.length;
    b.send({ t: 'snap', e: [1, 2, 3] }); b.send({ t: 'end', win: true }); b.send({ t: 'st', x: 1, y: 0, z: 2, from: 99 }); await wait(100);
    const got = a.q.slice(n1).filter((m) => m.t !== 'ping' && m.t !== 'lobby');
    check('in mission: a client cannot send host messages (snapshots, end); its state reaches the host stamped with its real id', go && got.length === 1 && got[0].t === 'st' && got[0].from === b.last('joined').id, got);
    // flood: the token bucket drops the excess, the connection is closed after sustained abuse
    for (let i = 0; i < 2000; i++) b.send({ t: 'st', x: i, y: 0, z: 0 }); await wait(400);
    const relayed = a.q.filter((m) => m.t === 'st').length;
    check('flood protection: 2000 messages in a burst — most are dropped, the abuser is disconnected', relayed < 600 && b.w.readyState !== 1, { relayed, state: b.w.readyState });
    // full party
    const c = await W(), d = await W(), e = await W(), f = await W();
    const code2 = await (async () => { c.send({ t: 'create', name: 'C' }); await wait(80); return c.last('joined').code; })();
    for (const x of [d, e, f]) x.send({ t: 'join', code: code2, name: 'X' }); await wait(120);
    const g = await W(); g.send({ t: 'join', code: code2, name: 'G' }); await wait(80);
    check('party size: 4 players maximum, the fifth gets FULL; duplicate names are made unique', g.last('err').code === 'FULL' && new Set(c.last('lobby').players.map((p) => p.name)).size === 4, c.last('lobby').players.map((p) => p.name));
    // leader leaves -> party closed for everyone
    c.w.close(); await wait(9000);
    check('leader disconnects from the lobby: after a short grace period the party is closed for everyone', [d, e, f].every((x) => x.last('closed') && x.last('closed').reason === 'HOST_LEFT'));
    // reconnect with a token
    const h = await W(); h.send({ t: 'create', name: 'H' }); await wait(80); const tok = h.last('joined').token, code3 = h.last('joined').code;
    const i2 = await W(); i2.send({ t: 'join', code: code3, name: 'I' }); await wait(80); const itok = i2.last('joined').token;
    i2.w.close(); await wait(300); const dropped = !!h.last('drop');
    const i3 = await W(); i3.send({ t: 'resume', token: itok }); await wait(150);
    const i4 = await W(); i4.send({ t: 'resume', token: 'f'.repeat(24) }); await wait(100);
    check('reconnect: a dropped player resumes the same seat with its token; a wrong token is refused', dropped && i3.last('joined') && i3.last('joined').resumed && h.last('back') && i4.last('err').code === 'GONE' && !!tok);
  } catch (err) { console.error(err); results.push(false); }
  srv.kill(); await wait(200);
  const failed = results.filter((r) => !r).length; console.log(`\n${results.length - failed}/${results.length} server checks passed`); process.exit(failed ? 1 : 0);
})();
