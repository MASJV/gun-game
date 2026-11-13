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
      G.skipRender = true; // software GL in several tabs would crawl; rendering itself is covered by tools/e2e.cjs
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
  const fps = await Promise.all([A, B].map((p) => p.evaluate(async () => { const f0 = window.__SP.frames; await new Promise((r) => setTimeout(r, 1000)); return window.__SP.frames - f0; })));
  console.log('client frame rates (headless):', fps);
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

  // --------------------------------------------------------------- shared combat (B is a client, A the host)
  await A.evaluate(() => { window.__SP.mp.trustMoves = true; }); // the test places operators by hand
  // stage the fights in the open east yard of the warehouse: B at (40, 12) facing north
  const placeB = () => B.evaluate(() => { const P = window.__SP.player; P.pos.set(40, 0, 12); P.vel.set(0, 0, 0); P.yaw = 0; P.pitch = 0; });
  await placeB(); await wait(400);
  // host: park one guard in the open, unaware, 9 m in front of B
  const target = await A.evaluate(() => {
    const G = window.__SP, rp = [...G.mp.players.values()][0], i = G.enemies.findIndex((e) => !e.dead), e = G.enemies[i];
    G.enemies.forEach((x, j) => { if (j !== i && !x.dead) { x.percT = 1e9; x.los = false; x.detect = 0; } });
    e.release(); e.pos.set(40, 0, 3); e.yaw = e.baseYaw = Math.PI; e.path = null; e.waitT = 1e9; e.set('PATROL'); e.percT = 1e9; e.sync(); e.ch.refresh();
    return i;
  });
  await wait(700);
  const shot = await B.evaluate(async (i) => {
    const G = window.__SP, P = G.player, e = G.enemies[i], h0 = G.stats.hits;
    for (let k = 0; k < 40 && !e.dead; k++) {
      const c = G.camera.position; P.yaw = Math.atan2(-(e.pos.x - c.x), -(e.pos.z - c.z)); P.pitch = Math.atan2(e.pos.y + 1.25 - c.y, Math.hypot(e.pos.x - c.x, e.pos.z - c.z)); P.rp = P.ry = 0;
      G.inp.lmb = true; G.inp.lmbPressed = true; await new Promise((r) => setTimeout(r, 60)); G.inp.lmb = false; await new Promise((r) => setTimeout(r, 120));
      if (P.slot.mag < 2) { P.reload(); await until(() => !P.reloading, 4000); }
    }
    await until(() => e.dead, 5000);
    return { dead: e.dead, hits: G.stats.hits - h0, kills: G.stats.kills };
  }, target);
  const hostSide = await A.evaluate((i) => { const G = window.__SP, e = G.enemies[i]; return { dead: e.dead, hp: Math.round(e.hp), rej: G.mp.debug.rejected, last: G.mp.debug.last, rw: G.mp.debug.rewinds, kills: [...G.mp.scores.entries()] }; }, target);
  check('combat: the client shoots a shared guard — the host applies the damage, the guard dies on both screens, the shooter gets the hit and the kill', shot.dead && hostSide.dead && shot.hits > 0 && shot.kills >= 1, { client: shot, host: hostSide });
  // enemy rounds hit the client: the host's guard fires at B through the shared ballistic resolver
  const hurt = await A.evaluate(async () => {
    const G = window.__SP, rp = [...G.mp.players.values()][0], P0 = G.player, e = G.enemies.find((x) => !x.dead);
    e.release(); e.pos.set(40, 0, 6); e.yaw = Math.atan2(-(rp.pos.x - e.pos.x), -(rp.pos.z - e.pos.z)); e.path = null; e.waitT = 1e9; e.percT = 1e9; e.sync(); e.ch.refresh();
    const hp0 = rp.hp; let shots = 0;
    for (let k = 0; k < 30 && rp.hp > hp0 - 30; k++) { G.player = rp; e.seeBody = true; e.pd = 5; e.ammo = 30; if (e.fire(false)) shots++; G.player = P0; await new Promise((r) => setTimeout(r, 30)); }
    e.dead = true; e.hp = 0; e.ch.die(false); // out of the way for the next steps
    return { hp0, hp: rp.hp, shots };
  });
  await wait(500);
  const bHp = await B.evaluate(() => [window.__SP.player.hp, document.getElementById('hpn').textContent]);
  check('combat: a guard’s rounds hit the client — the client’s health drops by exactly what the host recorded', hurt.hp < hurt.hp0 && Math.abs(bHp[0] - hurt.hp) < 0.6, { host: hurt, client: bHp });
  // downed and revived: the host deals lethal damage; A walks up and holds E
  await placeB(); await wait(300);
  await A.evaluate(() => { const G = window.__SP, rp = [...G.mp.players.values()][0]; rp.damage(500, rp.pos, { name: 'test' }); });
  await B.waitForFunction(() => window.__SP.player.downed === true, null, { timeout: 10000 }).catch(() => {});
  const down = await B.evaluate(() => [window.__SP.player.downed, document.getElementById('prompt').textContent]);
  const rev = await A.evaluate(async () => {
    const G = window.__SP, rp = [...G.mp.players.values()][0], P = G.player; P.pos.set(rp.pos.x + 0.8, rp.pos.y, rp.pos.z); P.vel.set(0, 0, 0);
    await new Promise((r) => setTimeout(r, 300)); const prompt = document.getElementById('prompt').textContent;
    key('KeyE', true); await until(() => !rp.downed, 9000); key('KeyE', false);
    return { prompt, downed: rp.downed, hp: rp.hp };
  });
  await B.waitForFunction(() => window.__SP.player.downed === false, null, { timeout: 10000 }).catch(() => {});
  const up = await B.evaluate(() => [window.__SP.player.downed, Math.round(window.__SP.player.hp)]);
  check('revive: lethal damage downs the client (not dead); a teammate holding E next to them revives them on both screens', down[0] && /DOWN/.test(down[1]) && /revive/i.test(rev.prompt) && !rev.downed && up[0] === false && up[1] === 35, { down, rev, up });
  // grenade: B throws a frag at a guard; the host's explosion kills him on both screens
  const nadeTarget = await A.evaluate(() => {
    const G = window.__SP, rp = [...G.mp.players.values()][0], i = G.enemies.findIndex((e) => !e.dead), e = G.enemies[i];
    e.release(); e.pos.set(40, 0, 3); e.path = null; e.waitT = 1e9; e.percT = 1e9; e.evade = () => false; e.sync(); e.ch.refresh();
    return i;
  });
  await wait(500);
  const nade = await B.evaluate(async (i) => {
    const G = window.__SP, P = G.player, e = G.enemies[i]; P.pitch = 0.02; P.yaw = Math.atan2(-(e.pos.x - P.pos.x), -(e.pos.z - P.pos.z));
    const inv0 = P.inv.frag; while (P.throwSel !== 'frag') P.cycleThrow(); P.startUse('throw');
    await until(() => G.gren.list.length > 0, 3000); const seen = G.gren.list.length;
    await until(() => e.dead, 8000); await until(() => G.gren.list.length === 0, 4000);
    await until(() => G.mp.lastBoom, 6000); return { inv: inv0 - P.inv.frag, seen, boom: G.mp.lastBoom, dead: e.dead, left: G.gren.list.length };
  }, nadeTarget);
  const nadeHost = await A.evaluate((i) => ({ dead: window.__SP.enemies[i].dead, hp: Math.round(window.__SP.enemies[i].hp), boom: window.__SP.mp.lastBoom, left: window.__SP.gren.list.length }), nadeTarget);
  check('grenade: the client throws a frag — the host simulates it, it explodes at the same spot on both screens, the guard takes blast damage (same alive/dead state everywhere), no copies left', nade.inv === 1 && nade.seen >= 1 && nade.left === 0 && nadeHost.left === 0 && nadeHost.hp < 100 && nade.dead === nadeHost.dead && nade.boom && nadeHost.boom && Math.hypot(nade.boom[0] - nadeHost.boom[0], nade.boom[2] - nadeHost.boom[2]) < 0.05, { client: nade, host: nadeHost });

  console.log('\nerrors:', errs.length ? errs.slice(0, 6) : 'none');
  const failed = results.filter((r) => !r.ok).length; console.log(`\n${results.length - failed}/${results.length} multiplayer checks passed`);
  await b.close(); await stopServer(); process.exit(failed || errs.length ? 1 : 0);
})().catch(async (e) => { console.error(e); await stopServer(); process.exit(2); });
