#!/usr/bin/env node
// SHADOW PROTOCOL — LAN party server. No dependencies (Node 18+), nothing leaves your local network.
//
//  * Serves the game itself (index.html + dist/) so friends just open http://<your-LAN-IP>:<port>/ in a browser.
//  * WebSocket endpoint /ws: parties (rooms) with a short code, up to 4 players, lobby state, ready checks,
//    mission start, and message relay during a mission.
//  * The party leader's game is the authority for the shared simulation (enemies, objectives, damage); this
//    server owns membership, routing and validation: it never trusts a client to speak for another player.
//
// Usage: node server/lan.cjs [--port 8787] [--public]      (npm run lan)
// By default only loopback and private (RFC 1918 / link-local / ULA) addresses may connect.
'use strict';
const http = require('http'), fs = require('fs'), path = require('path'), crypto = require('crypto'), os = require('os');

const args = process.argv.slice(2), arg = (k, d) => { const i = args.indexOf(k); return i >= 0 && args[i + 1] ? args[i + 1] : d; };
const PORT = +arg('--port', process.env.PORT || 8787), PUBLIC = args.includes('--public'), QUIET = args.includes('--quiet');
const ROOT = path.resolve(__dirname, '..');
const MAX_PLAYERS = 4, MAX_ROOMS = 16, MAX_CONN = 64, MAX_MSG = 64 * 1024, CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const log = (...a) => { if (!QUIET) console.log(new Date().toISOString().slice(11, 19), ...a); };

// ---------------------------------------------------------------- network policy
function isLocalAddress(a) {
  if (!a) return false;
  a = a.replace(/^::ffff:/, '');
  if (a === '::1' || a.startsWith('127.')) return true;
  if (/^10\./.test(a) || /^192\.168\./.test(a) || /^169\.254\./.test(a)) return true;
  const m = /^172\.(\d+)\./.exec(a); if (m && +m[1] >= 16 && +m[1] <= 31) return true;
  if (/^(fc|fd)[0-9a-f]{2}:/i.test(a) || /^fe80:/i.test(a)) return true;
  return false;
}
// The machine's adapters. SP_TEST_IFACES (JSON in the os.networkInterfaces() shape) replaces them for tests only.
function systemInterfaces() {
  if (process.env.SP_TEST_IFACES) {
    try { return JSON.parse(process.env.SP_TEST_IFACES); } catch (e) { console.error('SP_TEST_IFACES is not valid JSON; using the real adapters'); }
  }
  return os.networkInterfaces();
}
// External IPv4 addresses friends can reach. Always returns an array.
function lanAddresses(ifaces = systemInterfaces()) {
  const out = [];
  for (const [name, list] of Object.entries(ifaces || {})) {
    for (const i of Array.isArray(list) ? list : []) {
      const ipv4 = i && (i.family === 'IPv4' || i.family === 4); // Node 18.0-18.3 reported the family as the number 4
      if (ipv4 && !i.internal && typeof i.address === 'string' && i.address) {
        out.push({ name, address: i.address });
      }
    }
  }
  return out;
}

// ---------------------------------------------------------------- static files (the game)
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.glb': 'model/gltf-binary', '.md': 'text/plain; charset=utf-8' };
const ALLOWED = [/^\/index\.html$/, /^\/dist\/[\w.-]+$/, /^\/assets\/[\w./-]+$/, /^\/favicon\.ico$/];
function serveStatic(req, res) {
  let p; try { p = decodeURIComponent(new URL(req.url, 'http://x').pathname); } catch (e) { res.writeHead(400); return res.end(); }
  if (p === '/' || p === '') p = '/index.html';
  if (p === '/status') { res.writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-store' }); return res.end(JSON.stringify(statusInfo())); }
  if (!ALLOWED.some((r) => r.test(p)) || p.includes('..')) { res.writeHead(404); return res.end('not found'); }
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT + path.sep)) { res.writeHead(403); return res.end(); }
  fs.stat(f, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); return res.end('not found'); }
    res.writeHead(200, { 'content-type': TYPES[path.extname(f)] || 'application/octet-stream', 'content-length': st.size, 'cache-control': 'no-cache' });
    fs.createReadStream(f).pipe(res);
  });
}

// ---------------------------------------------------------------- minimal RFC 6455 WebSocket (text frames)
const WS_GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
class Conn {
  constructor(sock) {
    this.sock = sock; this.buf = Buffer.alloc(0); this.frag = null; this.open = true; this.id = null; this.room = null;
    this.tokens = 240; this.lastRefill = Date.now(); this.bad = 0; this.rtt = 0; this.pingAt = 0; this.lastPong = Date.now();
    sock.setNoDelay(true);
    sock.on('data', (d) => this.onData(d));
    sock.on('close', () => this.closed());
    sock.on('error', () => this.closed());
  }
  onData(d) {
    this.buf = this.buf.length ? Buffer.concat([this.buf, d]) : d;
    for (;;) {
      const b = this.buf; if (b.length < 2) return;
      const fin = b[0] & 0x80, op = b[0] & 0x0f, masked = b[1] & 0x80; let len = b[1] & 0x7f, o = 2;
      if (!masked) return this.fail(1002); // clients must mask
      if (len === 126) { if (b.length < 4) return; len = b.readUInt16BE(2); o = 4; }
      else if (len === 127) { if (b.length < 10) return; const hi = b.readUInt32BE(2); if (hi) return this.fail(1009); len = b.readUInt32BE(6); o = 10; }
      if (len > MAX_MSG) return this.fail(1009);
      if (b.length < o + 4 + len) return;
      const mask = b.subarray(o, o + 4), data = Buffer.from(b.subarray(o + 4, o + 4 + len));
      for (let i = 0; i < data.length; i++) data[i] ^= mask[i & 3];
      this.buf = b.subarray(o + 4 + len);
      if (op === 0x8) return this.close(1000);
      if (op === 0x9) { this.send(data, 0xa); continue; }
      if (op === 0xa) continue;
      if (op === 0x1 || op === 0x2) { if (fin) this.onMessage(data); else this.frag = [data]; continue; }
      if (op === 0x0) { if (!this.frag) return this.fail(1002); this.frag.push(data); const total = this.frag.reduce((a, x) => a + x.length, 0); if (total > MAX_MSG) return this.fail(1009); if (fin) { const m = Buffer.concat(this.frag); this.frag = null; this.onMessage(m); } continue; }
      return this.fail(1002);
    }
  }
  send(data, op = 0x1) {
    if (!this.open) return;
    const p = Buffer.isBuffer(data) ? data : Buffer.from(data), n = p.length;
    const h = n < 126 ? Buffer.from([0x80 | op, n]) : n < 65536 ? Buffer.from([0x80 | op, 126, n >> 8, n & 255]) : (() => { const x = Buffer.alloc(10); x[0] = 0x80 | op; x[1] = 127; x.writeUInt32BE(0, 2); x.writeUInt32BE(n, 6); return x; })();
    try { this.sock.write(Buffer.concat([h, p])); } catch (e) { this.closed(); }
  }
  json(o) { this.send(JSON.stringify(o)); }
  close(code = 1000) { if (!this.open) return; const c = Buffer.alloc(2); c.writeUInt16BE(code); this.send(c, 0x8); this.open = false; try { this.sock.end(); } catch (e) { /* gone */ } this.closed(); }
  fail(code) { this.close(code); }
  closed() { if (this.dead) return; this.dead = true; this.open = false; try { this.sock.destroy(); } catch (e) { /* gone */ } onClose(this); }
  // token bucket: bursts are fine, a flood is not
  allow(cost = 1) { const now = Date.now(); this.tokens = Math.min(240, this.tokens + ((now - this.lastRefill) / 1000) * 160); this.lastRefill = now; if (this.tokens < cost) return false; this.tokens -= cost; return true; }
  onMessage(buf) {
    if (!this.allow()) { if (++this.bad > 200) this.fail(1008); return; }
    let m; try { m = JSON.parse(buf.toString('utf8')); } catch (e) { if (++this.bad > 20) this.fail(1007); return this.json({ t: 'err', code: 'BAD_MESSAGE', msg: 'Malformed message' }); }
    if (!m || typeof m !== 'object' || Array.isArray(m) || typeof m.t !== 'string' || m.t.length > 12) { if (++this.bad > 20) this.fail(1007); return; }
    try { handle(this, m, buf.length); } catch (e) { log('handler error', e.message); this.json({ t: 'err', code: 'SERVER', msg: 'Server error' }); }
  }
}
const conns = new Set();

// ---------------------------------------------------------------- parties
const rooms = new Map(); // code -> room
let nextId = 1;
const newCode = () => { for (;;) { let c = ''; for (let i = 0; i < 5; i++) c += CODE_CHARS[crypto.randomInt(CODE_CHARS.length)]; if (!rooms.has(c)) return c; } };
const cleanName = (s) => String(s || '').replace(/[<>&"'`\\\u0000-\u001f\u007f]/g, '').trim().slice(0, 16) || 'Operator';
const MAPS = ['forest', 'warehouse'], MISSIONS = ['intel', 'capture', 'sabotage', 'rescue', 'multi'], LENGTHS = ['quick', 'standard', 'extended'], AIS = ['recruit', 'tactical', 'elite'];
const LEN_OK = { multi: ['standard', 'extended'] };
const WEAP = { primary: ['ak', 'm4', 'dmr', 'sniper'], secondary: ['pistol', 'smg', 'shotgun'] }, KITS = ['assault', 'recon', 'medic'], OPT = ['iron', 'reddot', 'holo', 'scope', 'vscope'];
function cleanLoadout(l) {
  if (!l || typeof l !== 'object') return null;
  const out = { primary: WEAP.primary.includes(l.primary) ? l.primary : 'm4', secondary: WEAP.secondary.includes(l.secondary) ? l.secondary : 'pistol', kit: KITS.includes(l.kit) ? l.kit : 'assault', att: {} };
  for (const id of [out.primary, out.secondary]) { const a = (l.att && l.att[id]) || {}; out.att[id] = { optic: OPT.includes(a.optic) ? a.optic : 'iron', muzzle: !!a.muzzle, grip: !!a.grip, laser: !!a.laser }; }
  return out;
}
function cleanSettings(s, cur) {
  const o = { ...cur };
  if (MAPS.includes(s.map)) o.map = s.map;
  if (MISSIONS.includes(s.mission)) o.mission = s.mission;
  if (LENGTHS.includes(s.length)) o.length = s.length;
  if (AIS.includes(s.ai)) o.ai = s.ai;
  if (typeof s.ff === 'boolean') o.ff = s.ff;
  if (LEN_OK[o.mission] && !LEN_OK[o.mission].includes(o.length)) o.length = LEN_OK[o.mission][0];
  return o;
}
const lobbyView = (r) => ({ t: 'lobby', code: r.code, leader: r.leader, phase: r.phase, settings: r.settings, mission: r.missionNo,
  players: r.players.map((p) => ({ id: p.id, name: p.name, ready: p.ready, loadout: p.loadout, ping: p.conn ? Math.round(p.conn.rtt) : -1, connected: !!p.conn, loaded: p.loaded, slot: p.slot })) });
const bcast = (r, o, except) => { const s = JSON.stringify(o); for (const p of r.players) if (p.conn && p !== except) p.conn.send(s); };
const sendLobby = (r) => bcast(r, lobbyView(r));
function closeRoom(r, reason, msg) {
  for (const p of r.players) if (p.conn) { p.conn.json({ t: 'closed', reason, msg }); p.conn.room = null; }
  rooms.delete(r.code); log(`party ${r.code} closed: ${reason}`);
}
function removePlayer(r, p, why) {
  const i = r.players.indexOf(p); if (i < 0) return;
  r.players.splice(i, 1); if (p.conn) p.conn.room = null;
  if (p.id === r.leader) return closeRoom(r, 'HOST_LEFT', 'The party leader left. The party has ended.');
  if (!r.players.length) return closeRoom(r, 'EMPTY', 'Party empty');
  bcast(r, { t: 'left', id: p.id, name: p.name, why });
  if (r.phase === 'loading') maybeGo(r);
  sendLobby(r); log(`party ${r.code}: ${p.name} left (${why})`);
}
function maybeGo(r) {
  if (r.phase !== 'loading' || !r.players.every((p) => p.loaded)) return;
  r.phase = 'mission'; clearTimeout(r.loadTimer); bcast(r, { t: 'go', at: Date.now() }); sendLobby(r);
}

// ---------------------------------------------------------------- message handling
const num = (v) => typeof v === 'number' && Number.isFinite(v);
const GAME = { // in-mission message types and who may send them
  st: 'any', fire: 'any', act: 'any', throw: 'any', // client -> host (st and fire are also shown to teammates)
  snap: 'host', ev: 'host', to: 'host', end: 'host',
};
function handle(c, m, size) {
  const r = c.room, me = r && r.players.find((p) => p.id === c.id);
  switch (m.t) {
    case 'hello': return c.json({ t: 'hello', v: 1, lan: lanAddresses(), port: PORT, maxPlayers: MAX_PLAYERS });
    case 'pong': c.lastPong = Date.now(); if (num(m.s) && m.s === c.pingAt) c.rtt = Date.now() - c.pingAt; return;
    case 'create': {
      if (r) return c.json({ t: 'err', code: 'IN_PARTY', msg: 'Already in a party' });
      if (rooms.size >= MAX_ROOMS) return c.json({ t: 'err', code: 'SERVER_FULL', msg: 'This server already hosts the maximum number of parties' });
      const code = newCode(), p = { id: nextId++, name: cleanName(m.name), ready: false, loadout: cleanLoadout(m.loadout), conn: c, token: crypto.randomBytes(12).toString('hex'), loaded: false, slot: 0 };
      const room = { code, leader: p.id, players: [p], phase: 'lobby', settings: cleanSettings(m.settings || {}, { map: 'warehouse', mission: 'intel', length: 'quick', ai: 'tactical', ff: false }), missionNo: 0 };
      rooms.set(code, room); c.room = room; c.id = p.id;
      c.json({ t: 'joined', id: p.id, token: p.token, code, leader: true, lan: lanAddresses(), port: PORT });
      sendLobby(room); log(`party ${code} created by ${p.name}`); return;
    }
    case 'join': {
      if (r) return c.json({ t: 'err', code: 'IN_PARTY', msg: 'Already in a party' });
      const code = String(m.code || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
      const room = rooms.get(code);
      if (!room) return c.json({ t: 'err', code: 'BAD_CODE', msg: `No party with code ${code || '(empty)'} on this host` });
      if (room.players.length >= MAX_PLAYERS) return c.json({ t: 'err', code: 'FULL', msg: 'That party is full (4 players)' });
      if (room.phase !== 'lobby') return c.json({ t: 'err', code: 'IN_MISSION', msg: 'That party is on a mission — join when they are back in the lobby' });
      const used = new Set(room.players.map((p) => p.slot)); let slot = 0; while (used.has(slot)) slot++;
      let name = cleanName(m.name); if (room.players.some((p) => p.name === name)) name = (name.slice(0, 13) + ' ' + (slot + 1)).trim();
      const p = { id: nextId++, name, ready: false, loadout: cleanLoadout(m.loadout), conn: c, token: crypto.randomBytes(12).toString('hex'), loaded: false, slot };
      room.players.push(p); c.room = room; c.id = p.id;
      c.json({ t: 'joined', id: p.id, token: p.token, code, leader: false, lan: lanAddresses(), port: PORT });
      bcast(room, { t: 'joinedp', id: p.id, name: p.name }, p); sendLobby(room); log(`party ${code}: ${p.name} joined`); return;
    }
    case 'resume': { // reconnect after a dropped connection (same page, same token)
      for (const room of rooms.values()) { const p = room.players.find((x) => x.token === m.token && typeof m.token === 'string'); if (!p) continue;
        if (p.conn && p.conn !== c) { p.conn.room = null; p.conn.close(4000); }
        clearTimeout(p.dropTimer); p.conn = c; c.room = room; c.id = p.id;
        c.json({ t: 'joined', id: p.id, token: p.token, code: room.code, leader: room.leader === p.id, lan: lanAddresses(), port: PORT, resumed: true, phase: room.phase });
        bcast(room, { t: 'back', id: p.id }, p); sendLobby(room); log(`party ${room.code}: ${p.name} reconnected`); return; }
      return c.json({ t: 'err', code: 'GONE', msg: 'That party no longer exists (the host may have restarted)' });
    }
  }
  if (!r || !me) return c.json({ t: 'err', code: 'NO_PARTY', msg: 'Not in a party' });
  const leader = me.id === r.leader;
  switch (m.t) {
    case 'leave': return removePlayer(r, me, 'left');
    case 'ready': if (r.phase !== 'lobby') return; me.ready = !!m.ready; return sendLobby(r);
    case 'loadout': { const l = cleanLoadout(m.loadout); if (l && r.phase === 'lobby') { me.loadout = l; sendLobby(r); } return; }
    case 'settings': if (!leader || r.phase !== 'lobby' || !m.settings || typeof m.settings !== 'object') return; r.settings = cleanSettings(m.settings, r.settings); for (const p of r.players) if (p.id !== r.leader) p.ready = false; return sendLobby(r);
    case 'kick': { if (!leader) return; const p = r.players.find((x) => x.id === m.id && x.id !== r.leader); if (p) { if (p.conn) p.conn.json({ t: 'closed', reason: 'KICKED', msg: 'You were removed from the party by the leader' }); removePlayer(r, p, 'kicked'); } return; }
    case 'start': {
      if (!leader) return c.json({ t: 'err', code: 'NOT_LEADER', msg: 'Only the party leader can start the mission' });
      if (r.phase !== 'lobby') return;
      const notReady = r.players.filter((p) => p.id !== r.leader && !p.ready);
      if (notReady.length) return c.json({ t: 'err', code: 'NOT_READY', msg: `Waiting for ${notReady.map((p) => p.name).join(', ')} to be ready` });
      if (r.players.some((p) => !p.conn)) return c.json({ t: 'err', code: 'RECONNECTING', msg: 'A player is reconnecting' });
      r.phase = 'loading'; r.missionNo++; for (const p of r.players) { p.loaded = false; if (!p.loadout) p.loadout = cleanLoadout({}); }
      const seed = crypto.randomInt(1, 2 ** 31);
      bcast(r, { t: 'start', seed, settings: r.settings, host: r.leader, missionNo: r.missionNo, players: r.players.map((p) => ({ id: p.id, name: p.name, slot: p.slot, loadout: p.loadout })) });
      r.loadTimer = setTimeout(() => { if (r.phase !== 'loading') return; for (const p of r.players.filter((x) => !x.loaded)) { if (p.conn) p.conn.json({ t: 'closed', reason: 'LOAD_TIMEOUT', msg: 'Your game did not finish loading in time' }); removePlayer(r, p, 'load timeout'); } }, 60000);
      sendLobby(r); log(`party ${r.code}: mission ${r.missionNo} starting (${r.settings.map}/${r.settings.mission}/${r.settings.length}, seed ${seed})`); return;
    }
    case 'loaded': if (r.phase === 'loading') { me.loaded = true; maybeGo(r); } return;
    case 'lobbyret': // the leader (authority) ends the mission for everybody
      if (!leader) return; r.phase = 'lobby'; for (const p of r.players) { p.ready = false; p.loaded = false; } bcast(r, { t: 'lobbyret' }); return sendLobby(r);
  }
  // in-mission traffic
  const who = GAME[m.t];
  if (!who) return c.json({ t: 'err', code: 'BAD_TYPE', msg: 'Unknown message' });
  if (r.phase !== 'mission') return;
  if (who === 'host' && !leader) { if (++c.bad > 20) c.fail(1008); return; }
  m.from = me.id; // the server stamps the sender; a client cannot claim to be someone else
  const host = r.players.find((p) => p.id === r.leader);
  if (m.t === 'st' || m.t === 'fire') return bcast(r, m, me); // everyone renders teammates directly (lower latency); the host also validates fire
  if (m.t === 'to') { const p = r.players.find((x) => x.id === m.id); if (p && p.conn) p.conn.json(m); return; } // host -> one player
  if (who === 'any') { if (host && host.conn && host !== me) host.conn.json(m); else if (host === me) c.json(m); return; } // client -> host
  if (m.t === 'end') { r.phase = 'ended'; }
  bcast(r, m, me); // host -> everyone else
}
function onClose(c) {
  conns.delete(c);
  const r = c.room; if (!r) return;
  const p = r.players.find((x) => x.conn === c); if (!p) return;
  p.conn = null;
  if (p.id === r.leader && r.phase !== 'lobby') return closeRoom(r, 'HOST_LEFT', 'The party leader disconnected. The party has ended.');
  bcast(r, { t: 'drop', id: p.id, name: p.name });
  sendLobby(r);
  p.dropTimer = setTimeout(() => removePlayer(r, p, 'disconnected'), p.id === r.leader ? 8000 : 20000); // a short grace period to reconnect
}
function statusInfo() { return { ok: true, game: 'SHADOW PROTOCOL', port: PORT, parties: rooms.size, players: [...rooms.values()].reduce((a, r) => a + r.players.length, 0), lan: lanAddresses() }; }

// ---------------------------------------------------------------- server (only when run directly; tests require() the helpers)
function main() {
const server = http.createServer(serveStatic);
server.on('upgrade', (req, sock) => {
  const ra = sock.remoteAddress;
  if (!PUBLIC && !isLocalAddress(ra)) { sock.end('HTTP/1.1 403 Forbidden\r\n\r\n'); return; }
  if (new URL(req.url, 'http://x').pathname !== '/ws' || (req.headers.upgrade || '').toLowerCase() !== 'websocket' || !req.headers['sec-websocket-key']) { sock.end('HTTP/1.1 400 Bad Request\r\n\r\n'); return; }
  if (conns.size >= MAX_CONN) { sock.end('HTTP/1.1 503 Service Unavailable\r\n\r\n'); return; }
  const accept = crypto.createHash('sha1').update(req.headers['sec-websocket-key'] + WS_GUID).digest('base64');
  sock.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ${accept}\r\n\r\n`);
  const c = new Conn(sock); conns.add(c);
});
server.on('connection', (sock) => { if (!PUBLIC && !isLocalAddress(sock.remoteAddress)) sock.destroy(); });
setInterval(() => { // latency measurement + dead connection sweep
  const now = Date.now();
  for (const c of conns) { if (now - c.lastPong > 20000) { c.close(1001); continue; } c.pingAt = now; c.json({ t: 'ping', s: now }); } // a browser tab in the background still answers
}, 2000);
server.listen(PORT, '0.0.0.0', () => { // all interfaces, but see the address policy above
  const lan = lanAddresses();
  console.log('\n  SHADOW PROTOCOL — LAN party server\n');
  console.log(`  This computer:    http://localhost:${PORT}/`);
  for (const a of lan) console.log(`  Your network:     http://${a.address}:${PORT}/   (${a.name})`);
  if (!lan.length) console.log('  (no network adapter found — only this computer can join)');
  console.log(`\n  1. Open one of the addresses above, MULTIPLAYER → CREATE PARTY.`);
  console.log(`  2. Friends on the same Wi-Fi / LAN open "Your network" address, MULTIPLAYER → JOIN, enter the party code.`);
  console.log(`  ${PUBLIC ? 'WARNING: --public: any address may connect.' : 'Only local-network addresses can connect. Allow Node through your firewall if friends cannot reach it.'}`);
  console.log('  Ctrl+C stops the server (and ends every party).\n');
});
server.on('error', (e) => { console.error(e.code === 'EADDRINUSE' ? `Port ${PORT} is already in use — try: npm run lan -- --port ${PORT + 1}` : e.message); process.exit(1); });
}
if (require.main === module) main();
module.exports = { isLocalAddress, lanAddresses };
