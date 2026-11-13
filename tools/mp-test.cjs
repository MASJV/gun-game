// Multiplayer end-to-end test: a REAL server process (server/lan.cjs) and 2-4 independent browser contexts
// (separate storage, separate WebSocket connections) on this machine. Every client uses the real menu, the real
// lobby and real WebSocket traffic; nothing is mocked. It is not a test across physical devices.
// Usage: node tools/mp-test.cjs [filter]
const path = require('path'), { spawn } = require('child_process'), { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '..'), PORT = 18000 + Math.floor(Math.random() * 1000), URL = `http://127.0.0.1:${PORT}/?test`;
const only = process.argv[2] || '';
let PAGES = []; const loopErrs = async () => { const out = []; for (const p of PAGES) { try { const e = await p.evaluate(() => window.__SP && window.__SP.lastError); if (e) out.push(p.name + ': ' + e); } catch (x) { /* closed */ } } return out; };
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
  const errs = (global.__errs = []);
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
    p.name = name; p.ctx = ctx; PAGES.push(p); return p;
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
  console.log('host-fatal', await A.evaluate(() => document.getElementById('fatal').textContent), JSON.stringify(errs.slice(0, 3)));
  const nadeHost = await A.evaluate((i) => ({ dead: window.__SP.enemies[i].dead, hp: Math.round(window.__SP.enemies[i].hp), boom: window.__SP.mp.lastBoom, left: window.__SP.gren.list.length }), nadeTarget);
  check('grenade: the client throws a frag — the host simulates it, it explodes at the same spot on both screens, the guard takes blast damage (same alive/dead state everywhere), no copies left', nade.inv === 1 && nade.seen >= 1 && nade.left === 0 && nadeHost.left === 0 && nadeHost.hp < 100 && nade.dead === nadeHost.dead && nade.boom && nadeHost.boom && Math.hypot(nade.boom[0] - nadeHost.boom[0], nade.boom[2] - nadeHost.boom[2]) < 0.05, { client: nade, host: nadeHost });

  // --------------------------------------------------------------- shared objectives, extraction, synchronized results
  await A.evaluate(() => { window.__SP.enemies.forEach((e) => { if (!e.dead) { e.percT = 1e9; e.los = false; e.detect = 0; e.waitT = 1e9; } }); }); // keep the guards out of the paperwork
  const obj = await B.evaluate(async () => {
    const G = window.__SP, P = G.player, Mi = G.mission, s = Mi.stage, it = Mi.items.find((x) => x.stage === Mi.i && !x.taken);
    const a = s.anchors[it.k].stand; P.pos.set(a[0], G.world.nav.height(a[0], a[1]), a[1]); P.vel.set(0, 0, 0); P.yaw = Math.atan2(-(it.pos[0] - P.pos.x), -(it.pos[2] - P.pos.z));
    await new Promise((r) => setTimeout(r, 400)); const prompt = document.getElementById('prompt').textContent;
    key('KeyE', true); window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyE' })); await until(() => Mi.complete, (s.hold || 0) * 1000 + 6000); key('KeyE', false);
    return { kind: s.kind, prompt, complete: Mi.complete, i: Mi.i, taken: Mi.items.map((x) => x.taken) };
  });
  await A.waitForFunction(() => window.__SP.mission.complete, null, { timeout: 8000 }).catch(() => {});
  const objA = await A.evaluate(() => ({ complete: window.__SP.mission.complete, i: window.__SP.mission.i, taken: window.__SP.mission.items.map((x) => x.taken), lines: window.__SP.mission.lines().map((l) => l.state).join(',') }));
  const linesB = await B.evaluate(() => window.__SP.mission.lines().map((l) => l.state).join(','));
  check('objective: the client completes the objective — the host validates it and both screens show the same mission progress', obj.complete && objA.complete && JSON.stringify(obj.taken) === JSON.stringify(objA.taken) && objA.lines === linesB && /Hold|Take/.test(obj.prompt), { client: obj, host: objA, linesB });
  // extraction: only when every standing operator is at the extraction point
  const exit = await A.evaluate(() => window.__SP.mission.def.exit.pos);
  await A.evaluate((ex) => { const P = window.__SP.player; P.pos.set(ex[0], 0, ex[2]); P.vel.set(0, 0, 0); }, exit);
  await wait(800);
  const waitingFor = await A.evaluate(() => [window.__SP.state, document.getElementById('prompt').textContent]);
  await B.evaluate((ex) => { const P = window.__SP.player; P.pos.set(ex[0] + 1, 0, ex[2]); P.vel.set(0, 0, 0); }, exit);
  await Promise.all([A, B].map((p) => p.waitForFunction(() => window.__SP.state === 'won', null, { timeout: 15000 }).catch(() => {})));
  const res = await Promise.all([A, B].map((p) => p.evaluate(() => ({ state: window.__SP.state, title: document.getElementById('endt').textContent, team: document.querySelector('#endstats .team') ? document.querySelector('#endstats .team').textContent : '', btn: document.getElementById('emenu').textContent, data: window.__SP.coopResult && JSON.stringify(window.__SP.coopResult.players) }))));
  check('extraction: one operator at the exit is not enough; when both are there the mission ends as a win on both screens', waitingFor[0] === 'playing' && /1 \/ 2/.test(waitingFor[1]) && res.every((r) => r.state === 'won' && r.title === 'MISSION COMPLETE'), { waitingFor, states: res.map((r) => r.state) });
  check('results: both screens show the same team results (per-operator kills, accuracy, status) and offer RETURN TO LOBBY', res[0].data && res[0].data === res[1].data && /Bravo/.test(res[0].team) && /Alpha/.test(res[1].team) && res.every((r) => r.btn === 'RETURN TO LOBBY'), res.map((r) => r.data));
  // back to the lobby and a second mission with the same party
  const vis = await Promise.all([A, B].map((p) => p.evaluate(() => { const e = document.getElementById('emenu'), r = e.getBoundingClientRect(), top = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2); return { endOn: document.getElementById('end').classList.contains('on'), rect: [r.x, r.y, r.width, r.height].map(Math.round), top: top && (top.id || top.className), state: window.__SP.state, ov: [...document.querySelectorAll('.ov.on')].map((o) => o.id) }; })));
  console.log('end-screen', JSON.stringify(vis));
  await Promise.all([A, B].map((p) => p.click('#emenu', { timeout: 8000 })));
  await Promise.all([A, B].map((p) => p.waitForFunction(() => window.__SP.state === 'menu' && document.getElementById('mplobby').style.display === 'block' && !document.getElementById('mpready').disabled, null, { timeout: 15000 }).catch(() => {})));
  const lobbyBack = await Promise.all([A, B].map((p) => p.evaluate(() => [window.__SP.state, document.getElementById('t-mp').classList.contains('on'), document.querySelectorAll('#mpplayers .mpp').length, !!window.__SP.mp])));
  await A.selectOption('#mps_mission', 'rescue'); await B.waitForFunction(() => document.getElementById('mps_mission').value === 'rescue', null, { timeout: 8000 });
  await B.click('#mpready'); await A.waitForFunction(() => !document.getElementById('mpstart').disabled, null, { timeout: 10000 }); await A.click('#mpstart');
  await Promise.all([A, B].map((p) => p.waitForFunction(() => window.__SP.state === 'playing' && window.__SP.mp && window.__SP.mp.phase === 'live', null, { timeout: 120000 })));
  const m2 = await Promise.all([A, B].map((p) => p.evaluate(() => [window.__SP.mission.def.type, window.__SP.mission.def.seed, window.__SP.mp.players.size, !!window.__SP.mission.civ])));
  check('lobby again: both return to the party lobby; a second mission (hostage rescue) starts for both with a new seed', lobbyBack.every((l) => l[0] === 'menu' && l[1] && l[2] === 2 && !l[3]) && m2[0][0] === 'rescue' && m2[0][1] === m2[1][1] && m2[0][1] !== same[0].seed && m2.every((m) => m[2] === 1 && m[3]), { lobbyBack, m2 });
  // a client drops mid-mission: the host keeps playing, the teammate is marked and ignored by extraction
  await B.ctx.close();
  await A.waitForFunction(() => { const r = [...window.__SP.mp.players.values()][0]; return r && !r.connected; }, null, { timeout: 10000 }).catch(() => {});
  await wait(500);
  const dropped = await A.evaluate(() => { const r = [...window.__SP.mp.players.values()][0]; return { connected: r.connected, state: window.__SP.state, team: document.getElementById('mphud').textContent, targets: window.__SP.mp.standing().length }; });
  check('disconnect: when a client’s browser closes, the host keeps playing, shows LINK LOST and the guards stop targeting the missing operator', !dropped.connected && dropped.state === 'playing' && /LINK LOST/.test(dropped.team) && dropped.targets === 1, dropped);
  await A.evaluate(() => { const P = window.__SP.player; P.damage(500, P.pos, { name: 'test' }); });
  await A.waitForFunction(() => window.__SP.state === 'dead', null, { timeout: 8000 }).catch(() => {});
  const wipe = await A.evaluate(() => [window.__SP.state, document.getElementById('endt').textContent, document.getElementById('ends').textContent]);
  check('team wipe: when no operator is left standing the mission fails for the team', wipe[0] === 'dead' && /FAILED/.test(wipe[1]) && /DOWN/.test(wipe[2]), wipe);
  await A.evaluate(() => { document.getElementById('emenu').click(); }); await wait(300);
  await A.evaluate(() => { if (window.__SP.mpLobby) window.__SP.mpLobby.leave(); }); // leave the party
  await A.waitForFunction(() => window.__SP.state === 'menu', null, { timeout: 10000 }).catch(() => {});
  await A.ctx.close();

  // --------------------------------------------------------------- four operators
  const H = await client('H'), C = [await client('C1'), await client('C2'), await client('C3')];
  await H.click('[data-tab="mp"]'); await H.fill('#mpname', 'Hotel'); await H.fill('#mpaddr', `127.0.0.1:${PORT}`); await H.click('#mpcreate');
  await H.waitForFunction(() => /^[A-Z0-9]{5}$/.test(document.getElementById('mpcodev').textContent), null, { timeout: 15000 });
  const code4 = await H.evaluate(() => document.getElementById('mpcodev').textContent);
  await H.selectOption('#mps_map', 'forest'); await H.selectOption('#mps_mission', 'intel'); await H.selectOption('#mps_length', 'quick');
  for (const [k, c] of C.entries()) { await c.click('[data-tab="mp"]'); await c.fill('#mpname', 'Charlie' + (k + 1)); await c.fill('#mpaddr', `127.0.0.1:${PORT}`); await c.fill('#mpcode', code4); await c.click('#mpjoin'); await c.waitForFunction(() => document.getElementById('mplobby').style.display === 'block', null, { timeout: 15000 }); }
  // a fifth player is refused
  const E5 = await client('E5'); await E5.click('[data-tab="mp"]'); await E5.fill('#mpname', 'Echo'); await E5.fill('#mpaddr', `127.0.0.1:${PORT}`); await E5.fill('#mpcode', code4); await E5.click('#mpjoin');
  await E5.waitForFunction(() => /full/i.test(document.getElementById('mperr').textContent), null, { timeout: 10000 }).catch(() => {});
  const full = await E5.evaluate(() => document.getElementById('mperr').textContent); await E5.ctx.close();
  for (const c of C) await c.click('#mpready');
  await H.waitForFunction(() => !document.getElementById('mpstart').disabled, null, { timeout: 15000 }); await H.click('#mpstart');
  const all = [H, ...C];
  await Promise.all(all.map((p) => p.waitForFunction(() => window.__SP.state === 'playing' && window.__SP.mp && window.__SP.mp.phase === 'live', null, { timeout: 180000 })));
  await wait(1500);
  const four = await Promise.all(all.map((p) => p.evaluate(() => ({ rps: window.__SP.mp.players.size, visible: [...window.__SP.mp.players.values()].filter((r) => r.ch.root.visible && r.buf.length).length, seed: window.__SP.mission.def.seed, enemies: window.__SP.enemies.length }))));
  check('four players: a fifth is refused (party full); all four start the same mission and each sees the other three', /full/i.test(full) && four.every((f) => f.rps === 3 && f.visible === 3 && f.seed === four[0].seed && f.enemies === four[0].enemies), { full, four });
  // every client fires once; everyone else sees and hears it (the shooter's tracer and muzzle flash)
  await H.evaluate(() => { window.__SP.mp.trustMoves = true; window.__SP.enemies.forEach((e) => { e.percT = 1e9; e.los = false; e.detect = 0; e.waitT = 1e9; }); });
  for (const c of C) await c.evaluate(() => { const G = window.__SP; G.inp.lmb = true; G.inp.lmbPressed = true; setTimeout(() => { G.inp.lmb = false; }, 80); });
  await wait(600);
  const fireSeen = await H.evaluate(() => [...window.__SP.mp.scores.entries()].filter(([id]) => id !== window.__SP.mp.id).map(([, s]) => s.shots));
  check('four players: shots from all three clients reach the host and are accepted', fireSeen.length === 3 && fireSeen.every((n) => n >= 1), fireSeen);
  // bandwidth: what one client receives and sends during a live four-player mission
  const bw = await C[0].evaluate(async () => { const n = window.__SP.mpLobby.net, i0 = n.bytesIn, o0 = n.bytesOut, r0 = n.recv, t0 = performance.now(); await new Promise((r) => setTimeout(r, 3000)); const s = (performance.now() - t0) / 1000; return { inKBs: +((n.bytesIn - i0) / 1024 / s).toFixed(1), outKBs: +((n.bytesOut - o0) / 1024 / s).toFixed(1), msgsPerSec: Math.round((n.recv - r0) / s) }; });
  check('bandwidth: a client in a four-player mission receives well under 100 KB/s and sends under 10 KB/s', bw.inKBs < 100 && bw.outKBs < 10, bw);
  // C3 goes down and bleeds out: killed in action on every screen, C3 now watches a teammate
  await H.evaluate(() => { const G = window.__SP, rp = [...G.mp.players.values()][2]; rp.damage(500, rp.pos, { name: 'test' }); setTimeout(() => { rp.bleed = 0.2; }, 300); });
  await C[2].waitForFunction(() => window.__SP.player.kia === true, null, { timeout: 10000 }).catch(() => {});
  const kia = await C[2].evaluate(() => { const G = window.__SP, c = G.camera.position, near = [...G.mp.players.values()].some((r) => r.view && Math.hypot(r.view.x - c.x, r.view.z - c.z) < 1); return [G.player.kia, near]; });
  const kiaSeen = await Promise.all([H, C[0]].map((p) => p.evaluate(() => [...window.__SP.mp.players.values()].some((r) => r.kia))));
  check('bleed-out: a downed operator who is not revived in time is KIA on every screen and spectates a teammate', kia[0] && kia[1] && kiaSeen.every(Boolean), { kia, kiaSeen });
  // C2 completes the objective, everyone extracts, everyone sees the same result
  const it = await C[1].evaluate(async () => {
    const G = window.__SP, P = G.player, Mi = G.mission, s = Mi.stage, it = Mi.items.find((x) => x.stage === Mi.i && !x.taken), a = s.anchors[it.k].stand;
    P.pos.set(a[0], G.world.nav.height(a[0], a[1]), a[1]); P.vel.set(0, 0, 0); await new Promise((r) => setTimeout(r, 400));
    key('KeyE', true); window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyE' })); await until(() => Mi.complete, (s.hold || 0) * 1000 + 6000); key('KeyE', false); return Mi.complete;
  });
  const ex4 = await H.evaluate(() => window.__SP.mission.def.exit.pos);
  for (const [k, p] of all.entries()) if (k !== 3) await p.evaluate(([ex, k]) => { const P = window.__SP.player; P.pos.set(ex[0] + (k % 2) * 1.2, 0, ex[2] + (k > 1 ? 1.2 : 0)); P.vel.set(0, 0, 0); }, [ex4, k]);
  await Promise.all(all.map((p) => p.waitForFunction(() => window.__SP.state === 'won', null, { timeout: 15000 }).catch(() => {})));
  const r4 = await Promise.all(all.map((p) => p.evaluate(() => [window.__SP.state, window.__SP.coopResult && JSON.stringify(window.__SP.coopResult.players)])));
  check('four players: a client completes the objective, the three survivors extract, all four see the identical result (KIA recorded)', it && r4.every((r) => r[0] === 'won' && r[1] === r4[0][1]) && /KIA/.test(r4[0][1]), r4.map((r) => r[0]));
  // the host closes the game: every client is told the party ended and lands back in the menu
  await all[0].evaluate(() => document.getElementById('emenu').click());
  for (const c of C) await c.evaluate(() => document.getElementById('emenu').click());
  await H.ctx.close();
  await Promise.all(C.map((c) => c.waitForFunction(() => window.__SP.state === 'menu' && /ended|left|disconnected/i.test(document.getElementById('mperr').textContent), null, { timeout: 15000 }).catch(() => {})));
  const ended = await Promise.all(C.map((c) => c.evaluate(() => [window.__SP.state, document.getElementById('mperr').textContent, document.getElementById('mpconn').style.display])));
  check('host leaves: every client is told the party has ended and is back at the connect screen', ended.every((e) => e[0] === 'menu' && /ended|left|disconnected/i.test(e[1]) && e[2] === 'block'), ended);

  // --------------------------------------------------------------- server restart
  const R = C[0];
  await R.evaluate(() => { document.getElementById('content').scrollTop = 0; }); // the tiny test viewport left the menu scrolled down
  await R.fill('#mpname', 'Romeo'); await R.click('#mpcreate'); await R.waitForFunction(() => document.getElementById('mplobby').style.display === 'block', null, { timeout: 10000 });
  await stopServer();
  await R.waitForFunction(() => /RECONNECTING/.test(document.getElementById('mplink_status').textContent) && document.getElementById('mplink_status').style.display === 'block', null, { timeout: 10000 }).catch(() => {});
  const recon = await R.evaluate(() => document.getElementById('mplink_status').style.display);
  await startServer();
  await R.waitForFunction(() => document.getElementById('mpconn').style.display === 'block', null, { timeout: 30000 }).catch(() => {});
  const after = await R.evaluate(() => [document.getElementById('mpconn').style.display, document.getElementById('mperr').textContent]);
  await R.click('#mpcreate'); await R.waitForFunction(() => document.getElementById('mplobby').style.display === 'block', null, { timeout: 10000 }).catch(() => {});
  const fresh = await R.evaluate(() => [document.getElementById('mplobby').style.display, document.getElementById('mpcodev').textContent]);
  check('server restart: the client shows that it is reconnecting, then that the party is gone (the new server has no memory of it), and can create a new party', recon === 'block' && after[0] === 'block' && /no longer exists|Lost the connection/i.test(after[1]) && fresh[0] === 'block' && /^[A-Z0-9]{5}$/.test(fresh[1]), { recon, after, fresh });

  const le = await loopErrs(); if (le.length) { console.log('LOOP ERRORS', le); errs.push(...le); }
  console.log('\nerrors:', errs.length ? errs.slice(0, 6) : 'none');
  const failed = results.filter((r) => !r.ok).length; console.log(`\n${results.length - failed}/${results.length} multiplayer checks passed`);
  await b.close(); await stopServer(); process.exit(failed || errs.length ? 1 : 0);
})().catch(async (e) => { console.error(e); console.log('page errors:', JSON.stringify(global.__errs || [])); await stopServer(); process.exit(2); });
