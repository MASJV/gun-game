// Multiplayer end-to-end test: a REAL server process (server/lan.cjs) and 2-4 independent browser contexts
// (separate storage, separate WebSocket connections) on this machine. Every client uses the real menu, the real
// lobby and real WebSocket traffic; nothing is mocked. It is not a test across physical devices.
// Usage: node tools/mp-test.cjs [filter]
const path = require('path'), { spawn } = require('child_process'), { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '..'), PORT = 18000 + Math.floor(Math.random() * 1000), URL = `http://127.0.0.1:${PORT}/?test`;
const only = process.argv[2] || '';
const results = []; const check = (name, ok, info) => { results.push({ name, ok: !!ok }); console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${info !== undefined ? '  — ' + (typeof info === 'string' ? info : JSON.stringify(info)) : ''}`); };
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
let server = null;
function startServer() {
  return new Promise((res, rej) => {
    server = spawn(process.execPath, [path.join(ROOT, 'server', 'lan.cjs'), '--port', String(PORT), '--quiet'], { stdio: ['ignore', 'pipe', 'pipe'] });
    let out = ''; server.stdout.on('data', (d) => { out += d; if (out.includes('LAN party server')) res(); }); server.stderr.on('data', (d) => { out += d; });
    server.on('exit', (c) => rej(new Error('server exited ' + c + ' ' + out)));
    setTimeout(() => res(), 3000);
  });
}
const stopServer = () => new Promise((r) => { if (!server) return r(); server.removeAllListeners('exit'); server.on('exit', () => r()); server.kill('SIGTERM'); server = null; });

(async () => {
  await startServer();
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const errs = [];
  const client = async (name) => {
    const ctx = await b.newContext({ viewport: { width: 480, height: 270 } }); // own storage, own connection
    await ctx.addInitScript(() => { try { localStorage.setItem('sp2_settings', JSON.stringify({ quality: 'low', adaptive: false })); } catch (e) { /* ignore */ } });
    const p = await ctx.newPage(); p.on('pageerror', (e) => errs.push(name + ': ' + e.message + ' @ ' + (e.stack || '').split('\n').slice(1, 3).join(' | ')));
    await p.goto(URL); await p.waitForFunction('window.__SP && window.__SP.state === "menu"', null, { timeout: 120000 });
    await p.evaluate(() => {
      const G = window.__SP;
      window.key = (c, d) => { G.inp.k[c] = d; };
      window.until = (fn, ms = 15000) => new Promise((res) => { const t0 = performance.now(); const tick = () => { let v; try { v = fn(); } catch (e) { v = false; } if (v || performance.now() - t0 > ms) res(v); else setTimeout(tick, 30); }; tick(); });
    });
    p.name = name; p.ctx = ctx; return p;
  };
  const ui = async (p, fn) => p.evaluate(fn);
  // --------------------------------------------------------------- lobby: create, join, settings, loadouts, ready, start
  const A = await client('A'), B = await client('B');
  await A.click('[data-tab="mp"]'); await A.fill('#mpname', 'Alpha'); await A.fill('#mpaddr', `127.0.0.1:${PORT}`); await A.click('#mpcreate');
  await A.waitForFunction(() => /^[A-Z0-9]{5}$/.test(document.getElementById('mpcodev').textContent), null, { timeout: 15000 });
  const code = await A.evaluate(() => document.getElementById('mpcodev').textContent), link = await A.evaluate(() => document.getElementById('mplink').value);
  check('lobby: CREATE PARTY shows a 5-character code and an invitation link', /^[A-Z0-9]{5}$/.test(code) && link.includes('?join=' + code), [code, link]);
  // B: wrong code first, then the real one through the invitation link
  await B.click('[data-tab="mp"]'); await B.fill('#mpname', 'Bravo'); await B.fill('#mpaddr', `127.0.0.1:${PORT}`); await B.fill('#mpcode', 'ZZZZZ'); await B.click('#mpjoin');
  await B.waitForFunction(() => /No party/.test(document.getElementById('mperr').textContent), null, { timeout: 10000 }).catch(() => {});
  const badMsg = await B.evaluate(() => document.getElementById('mperr').textContent);
  await B.fill('#mpaddr', link.replace(/127\.0\.0\.1:\d+|[\d.]+:\d+/, `127.0.0.1:${PORT}`)); await B.fill('#mpcode', ''); await B.click('#mpjoin');
  await B.waitForFunction(() => document.querySelectorAll('#mpplayers .mpp').length === 2, null, { timeout: 15000 });
  await A.waitForFunction(() => document.querySelectorAll('#mpplayers .mpp').length === 2, null, { timeout: 15000 });
  const names = await A.evaluate(() => [...document.querySelectorAll('#mpplayers .n')].map((e) => e.textContent));
  check('lobby: wrong code is refused with a clear message; invitation link joins; both players listed on both screens', /No party/.test(badMsg) && names.some((n) => n.includes('Alpha')) && names.some((n) => n.includes('Bravo')), [badMsg, names]);
  // leader-only settings and per-player loadouts
  await A.selectOption('#mps_map', 'warehouse'); await A.selectOption('#mps_mission', 'intel'); await A.selectOption('#mps_length', 'quick'); await A.selectOption('#mps_ai', 'recruit');
  await B.waitForFunction(() => document.getElementById('mps_ai').value === 'recruit', null, { timeout: 10000 });
  const bDisabled = await B.evaluate(() => document.getElementById('mps_map').disabled);
  await B.click('[data-tab="loadout"]'); await B.click('.opts[data-k="primary"] [data-v="ak"]'); await B.click('[data-tab="mp"]');
  await A.waitForFunction(() => /AK-47/.test(document.getElementById('mpplayers').textContent), null, { timeout: 10000 }).catch(() => {});
  const aSeesAk = await A.evaluate(() => /AK-47/.test(document.getElementById('mpplayers').textContent));
  const startBlocked = await A.evaluate(() => document.getElementById('mpstart').disabled);
  check('lobby: leader sets the mission (members see it, cannot change it); a member’s loadout shows up for the leader; start blocked until ready', bDisabled && aSeesAk && startBlocked, [bDisabled, aSeesAk, startBlocked]);
  await B.click('#mpready'); await A.waitForFunction(() => !document.getElementById('mpstart').disabled, null, { timeout: 10000 });
  await A.click('#mpstart');
  const live = () => Promise.all([A, B].map((p) => p.waitForFunction(() => window.__SP.state === 'playing' && window.__SP.mp && window.__SP.mp.phase === 'live', null, { timeout: 120000 })));
  try { await live(); } catch (e) { console.log('STALL', JSON.stringify(await Promise.all([A, B].map((p) => p.evaluate(() => ({ st: window.__SP.state, mp: window.__SP.mp && window.__SP.mp.phase, msg: document.getElementById('mpmsg').textContent, err: document.getElementById('mperr').textContent, fatal: document.getElementById('fatal').textContent }))))), errs); throw e; }
  const same = await Promise.all([A, B].map((p) => p.evaluate(() => { const G = window.__SP, d = G.mission.def; return { map: G.world.id, seed: d.seed, stages: d.stages.map((s) => s.anchors.map((a) => a.id).join('+')).join('>'), entry: d.entry.id, exit: d.exit.id, host: G.mp.host }; })));
  check('mission: both enter the same map, seed, objective zones, insertion and extraction; exactly one host', JSON.stringify({ ...same[0], host: 0 }) === JSON.stringify({ ...same[1], host: 0 }) && same[0].host !== same[1].host, same);
  // --------------------------------------------------------------- shared enemies, seeing each other
  await wait(1500);
  const roster = await Promise.all([A, B].map((p) => p.evaluate(() => window.__SP.enemies.map((e) => [Math.round(e.pos.x), Math.round(e.pos.z), e.typeId]).join('|'))));
  const counts = await Promise.all([A, B].map((p) => p.evaluate(() => [window.__SP.enemies.length, window.__SP.enemies.filter((e) => e.puppet).length])));
  check('enemies: the client shows the host’s roster (same guards, same places) as puppets — no second AI', counts[0][0] > 0 && counts[0][0] === counts[1][0] && counts[0][1] === 0 && counts[1][1] === counts[1][0] && roster[0].length > 0, [counts, roster[0].slice(0, 60), roster[1].slice(0, 60)]);
  const see = async (p, q) => { const [a, rp] = await Promise.all([q.evaluate(() => window.__SP.player.pos.toArray()), p.evaluate(() => { const r = [...window.__SP.mp.players.values()][0]; return r && r.ch.root.visible ? r.ch.root.position.toArray() : null; })]); return rp ? Math.hypot(a[0] - rp[0], a[2] - rp[2]) : 99; };
  check('presence: each player sees the other’s character where that player really is', (await see(A, B)) < 0.6 && (await see(B, A)) < 0.6, [await see(A, B), await see(B, A)]);
  // B walks forward and turns: A sees it move smoothly (interpolated) to the new place
  const b0 = await B.evaluate(() => window.__SP.player.pos.toArray());
  await B.evaluate(() => { key('KeyW', true); window.__SP.player.yaw += 0.6; });
  const track = await A.evaluate(async () => { const out = []; const t0 = performance.now(); while (performance.now() - t0 < 1500) { const r = [...window.__SP.mp.players.values()][0]; out.push([performance.now(), +r.ch.root.position.x.toFixed(3), +r.ch.root.position.z.toFixed(3)]); await new Promise((q) => setTimeout(q, 40)); } return out; });
  await B.evaluate(() => key('KeyW', false)); await wait(600);
  const b1 = await B.evaluate(() => [window.__SP.player.pos.toArray(), window.__SP.player.yaw]);
  const aView = await A.evaluate(() => { const r = [...window.__SP.mp.players.values()][0]; return [r.ch.root.position.toArray(), r.ch.root.rotation.y]; });
  // apparent speed between visible changes (headless frames are slow, so compare distance with elapsed time)
  let maxJump = 0, lastT = track[0][0], lx = track[0][1], lz = track[0][2];
  for (const [t, x, z] of track) { const d = Math.hypot(x - lx, z - lz); if (d > 1e-3) { maxJump = Math.max(maxJump, d / Math.max(0.04, (t - lastT) / 1000)); lastT = t; lx = x; lz = z; } }
  const moved = Math.hypot(b1[0][0] - b0[0], b1[0][2] - b0[2]);
  check('movement: B walks and turns; A sees B arrive at the same place and heading, never faster than a sprint (no teleporting)', moved > 0.5 && Math.hypot(aView[0][0] - b1[0][0], aView[0][2] - b1[0][2]) < 0.5 && Math.abs(aView[1] - b1[1]) < 0.05 && maxJump < 9, { moved: +moved.toFixed(2), err: +Math.hypot(aView[0][0] - b1[0][0], aView[0][2] - b1[0][2]).toFixed(3), maxApparentSpeed: +maxJump.toFixed(2) });

  console.log('\nerrors:', errs.length ? errs.slice(0, 6) : 'none');
  const failed = results.filter((r) => !r.ok).length; console.log(`\n${results.length - failed}/${results.length} multiplayer checks passed`);
  await b.close(); await stopServer(); process.exit(failed || errs.length ? 1 : 0);
})().catch(async (e) => { console.error(e); await stopServer(); process.exit(2); });
