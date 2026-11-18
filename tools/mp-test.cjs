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
  // lan.test = this server under a non-localhost name: a plain-HTTP page that is NOT a secure context, like a real LAN host.
  // direct://: no system proxy may intercept that name.
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--proxy-server=direct://', '--host-resolver-rules=MAP lan.test 127.0.0.1'] });
  const errs = (global.__errs = []);
  const client = async (name, url = URL) => {
    const ctx = await b.newContext({ viewport: { width: 480, height: 270 } }); // own storage, own connection
    await ctx.addInitScript(() => { try { localStorage.setItem('sp2_settings', JSON.stringify({ quality: 'low', adaptive: false })); } catch (e) { /* ignore */ } });
    const p = await ctx.newPage(); p.on('pageerror', (e) => errs.push(name + ': ' + e.message + ' @ ' + (e.stack || '').split('\n').slice(1, 3).join(' | ')));
    await p.goto(url); await p.waitForFunction('window.__SP && window.__SP.state === "menu"', null, { timeout: 120000 });
    await p.evaluate(() => { window.__orig = { toast: window.__SP.toast, say: window.__SP.say, onSecurity: window.__SP.onSecurity, onKill: window.__SP.onKill }; });
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
    e.release(); e.set('PATROL'); e.pos.set(40, 0, 6); e.yaw = Math.atan2(-(rp.pos.x - e.pos.x), -(rp.pos.z - e.pos.z)); e.path = null; e.waitT = 1e9; e.percT = 1e9; e.sync(); e.ch.refresh();
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
  // the flag arrives with the host's message; the banner is drawn on the next HUD frame (CI run 12 read it in between)
  await B.waitForFunction(() => /DOWN/.test(document.getElementById('prompt').textContent), null, { timeout: 5000 }).catch(() => {});
  const down =await B.evaluate(() => [window.__SP.player.downed, document.getElementById('prompt').textContent]);
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
    e.release(); e.set('PATROL'); e.pos.set(40, 0, 3); e.path = null; e.waitT = 1e9; e.percT = 1e9; e.evade = () => false; e.sync(); e.ch.refresh();
    return i;
  });
  await wait(500);
  // The frag stops against cover about 7 m from where it was aimed, near the 8 m edge of the blast, so a small drift
  // of the guard left him undamaged (CI run 8). Once the host's frag is resting, the host puts the guard 1.5 m from it
  // with a clear line, so the blast damage this check is about is well inside the radius.
  const placed = A.evaluate(async (i) => {
    const G = window.__SP, e = G.enemies[i], t0 = performance.now();
    while (performance.now() - t0 < 6000) {
      const n = G.gren.list.find((g) => g.type === 'frag' && g.fuse < 1.2);
      if (n) {
        for (let k = 0; k < 8; k++) {
          const a = k * Math.PI / 4, x = n.pos.x + 1.5 * Math.cos(a), z = n.pos.z + 1.5 * Math.sin(a);
          if (G.losB(n.pos.x, n.pos.y + 0.1, n.pos.z, x, 1, z)) { e.pos.set(x, 0, z); e.sync(); e.ch.refresh(); return [+x.toFixed(2), +z.toFixed(2)]; }
        }
        return 'no clear spot';
      }
      await new Promise((r) => setTimeout(r, 16));
    }
    return 'no frag on the host';
  }, nadeTarget);
  const nade = await B.evaluate(async (i) => {
    const G = window.__SP, P = G.player, e = G.enemies[i]; P.pitch = 0.02; P.yaw = Math.atan2(-(e.pos.x - P.pos.x), -(e.pos.z - P.pos.z));
    const inv0 = P.inv.frag; while (P.throwSel !== 'frag') P.cycleThrow(); P.startUse('throw');
    await until(() => G.gren.list.length > 0, 3000); const seen = G.gren.list.length;
    await until(() => e.dead, 8000); await until(() => G.gren.list.length === 0, 4000);
    await until(() => G.mp.lastBoom, 6000); return { inv: inv0 - P.inv.frag, seen, boom: G.mp.lastBoom, dead: e.dead, left: G.gren.list.length };
  }, nadeTarget);
  console.log('host-fatal', await A.evaluate(() => document.getElementById('fatal').textContent), JSON.stringify(errs.slice(0, 3)));
  const guardAt = await placed;
  const nadeHost = await A.evaluate((i) => ({ dead: window.__SP.enemies[i].dead, hp: Math.round(window.__SP.enemies[i].hp), boom: window.__SP.mp.lastBoom, left: window.__SP.gren.list.length }), nadeTarget);
  check('grenade: the client throws a frag — the host simulates it, it explodes at the same spot on both screens, the guard takes blast damage (same alive/dead state everywhere), no copies left', nade.inv === 1 && nade.seen >= 1 && nade.left === 0 && nadeHost.left === 0 && nadeHost.hp < 100 && nade.dead === nadeHost.dead && nade.boom && nadeHost.boom && Math.hypot(nade.boom[0] - nadeHost.boom[0], nade.boom[2] - nadeHost.boom[2]) < 0.05, { client: nade, host: nadeHost, guardAt });

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

  // --------------------------------------------------------------- v2.4.1 regressions (each reproduced against v2.4.0 first)
  const X = await client('X'), Y = await client('Y', `http://lan.test:${PORT}/?test`), Z = await client('Z');
  await X.click('[data-tab="mp"]'); await X.fill('#mpname', 'Xray'); await X.fill('#mpaddr', `127.0.0.1:${PORT}`); await X.click('#mpcreate');
  await X.waitForFunction(() => /^[A-Z0-9]{5}$/.test(document.getElementById('mpcodev').textContent), null, { timeout: 15000 });
  const codeR = await X.evaluate(() => document.getElementById('mpcodev').textContent);
  await Y.click('[data-tab="mp"]'); await Y.fill('#mpname', 'Yankee'); await Y.fill('#mpaddr', `lan.test:${PORT}`); await Y.fill('#mpcode', codeR); await Y.click('#mpjoin');
  await Z.click('[data-tab="mp"]'); await Z.fill('#mpname', 'Zulu'); await Z.fill('#mpaddr', `127.0.0.1:${PORT}`); await Z.fill('#mpcode', codeR); await Z.click('#mpjoin');
  await X.waitForFunction(() => document.querySelectorAll('#mpplayers .mpp').length === 3, null, { timeout: 15000 });
  // E. invitation link: copy reports the truth (localhost secure context, plain-HTTP LAN origin, and a copy that fails)
  const copyOn = async (p, breakIt) => { await p.evaluate((breakIt) => { window.__copied = null; document.addEventListener('copy', () => { window.__copied = document.activeElement && document.activeElement.value; }, { once: true }); if (breakIt) { Object.defineProperty(navigator, 'clipboard', { value: undefined, configurable: true }); document.execCommand = () => false; } }, breakIt); await p.evaluate(() => { document.getElementById('content').scrollTop = 0; }); await p.click('#mpcopy'); await wait(400); return p.evaluate(() => ({ secure: window.isSecureContext, msg: document.getElementById('mpmsg').textContent, copied: window.__copied, link: document.getElementById('mplink').value })); };
  const cx = await copyOn(X, false), cy = await copyOn(Y, false), cz = await copyOn(Z, true);
  check('E. copy invitation link: success only when the link really was copied — localhost, a plain-HTTP LAN origin (no clipboard API), and an honest failure message', cx.secure && /copied/.test(cx.msg) && cx.copied === cx.link && !cy.secure && /copied/.test(cy.msg) && cy.copied === cy.link && /Could not copy/.test(cz.msg), { cx, cy, cz: cz.msg });
  await Y.click('#mpready'); await Z.click('#mpready');
  await X.selectOption('#mps_map', 'warehouse'); await X.selectOption('#mps_mission', 'intel'); await X.selectOption('#mps_length', 'quick');
  await Y.click('#mpready'); await Z.click('#mpready'); // settings changes reset readiness
  await X.waitForFunction(() => !document.getElementById('mpstart').disabled, null, { timeout: 15000 }); await X.click('#mpstart');
  await Promise.all([X, Y, Z].map((p) => p.waitForFunction(() => window.__SP.state === 'playing' && window.__SP.mp && window.__SP.mp.phase === 'live', null, { timeout: 120000 })));
  await X.evaluate(() => { const G = window.__SP; G.mp.trustMoves = true; G.enemies.forEach((e) => { e.percT = 1e9; e.los = false; e.detect = 0; e.waitT = 1e9; }); });
  await Y.evaluate(() => { const P = window.__SP.player; P.pos.set(40, 0, 12); P.vel.set(0, 0, 0); P.yaw = 0; }); await wait(500);
  // A. a guard's lethal round on a CLIENT, inside the same G.player context that hostAI uses
  const ra = await X.evaluate(() => {
    const G = window.__SP, S = G.mp, P0 = S.me(), rp = [...S.players.values()].find((r) => r.name === 'Yankee'), e = G.enemies.find((x) => !x.dead);
    e.release(); e.set('PATROL'); e.pos.set(40, 0, 6); e.yaw = Math.atan2(-(rp.pos.x - e.pos.x), -(rp.pos.z - e.pos.z)); e.path = null; e.sync(); e.ch.refresh();
    const sent = []; const net = G.mpLobby.net, send0 = net.send.bind(net); net.send = (o) => { if (o.t === 'to') sent.push(o.k + ':' + o.id); if (o.t === 'ev') sent.push(...o.l.filter((x) => x.k === 'down').map((x) => 'down:' + x.id)); return send0(o); };
    const hurt0 = G.onHurt; let hostFeedback = 0; G.onHurt = (...a) => { hostFeedback++; return hurt0(...a); };
    rp.hp = 10; const hp0 = P0.hp; let during = null;
    for (let k = 0; k < 40 && !rp.downed; k++) { G.player = rp; during = S.standing().map((p) => (p === P0 ? 'host' : p.name)); e.seeBody = true; e.pd = 6; e.ammo = 30; e.fire(false); G.player = P0; }
    S.flush(); net.send = send0; G.onHurt = hurt0;
    // hostAI restores G.player even when a guard's update throws
    const g = G.enemies.find((x) => !x.dead && x !== e), up = g.update; g.update = () => { throw new Error('test'); }; let threw = false;
    try { S.hostAI(1 / 60); } catch (err) { threw = true; } g.update = up;
    return { during, client: { downed: rp.downed, bleed: rp.bleed, hp: rp.hp }, host: { downed: !!P0.downed, bleed: S.local.bleed, hpChange: P0.hp - hp0, feedback: hostFeedback }, sent, restored: threw && G.player === P0, ids: [S.id, rp.id] };
  });
  await Y.waitForFunction(() => window.__SP.player.downed === true, null, { timeout: 8000 }).catch(() => {});
  const yDown = await Y.evaluate(() => [window.__SP.player.downed, Math.round(window.__SP.mp.local.bleed)]);
  check('A. guard damage reaches the right operator: host listed once in team hit tests, the client (not the host) is downed with the bleed-out timer, no host damage feedback, hurt + down sent for the client, G.player restored after errors',
    JSON.stringify(ra.during) === JSON.stringify(['host', 'Yankee', 'Zulu']) && ra.client.downed && ra.client.bleed > 40 && !ra.host.downed && ra.host.bleed === 0 && ra.host.hpChange === 0 && ra.host.feedback === 0 && ra.sent.includes('hurt:' + ra.ids[1]) && ra.sent.includes('down:' + ra.ids[1]) && !ra.sent.includes('down:' + ra.ids[0]) && ra.restored && yDown[0] && yDown[1] > 30, { ra, yDown });
  // C. a connected downed teammate blocks extraction; once KIA he no longer does
  await X.evaluate(async () => { const G = window.__SP, P = G.player, Mi = G.mission, s = Mi.stage, it = Mi.items.find((x) => x.stage === Mi.i && !x.taken), a = s.anchors[it.k].stand; P.pos.set(a[0], G.world.nav.height(a[0], a[1]), a[1]); P.vel.set(0, 0, 0); await new Promise((r) => setTimeout(r, 300)); key('KeyE', true); window.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyE' })); await until(() => Mi.complete, 8000); key('KeyE', false); });
  const exR = await X.evaluate(() => window.__SP.mission.def.exit.pos);
  for (const [k, p] of [X, Z].entries()) await p.evaluate(([ex, k]) => { const P = window.__SP.player; P.pos.set(ex[0] + k * 1.2, 0, ex[2]); P.vel.set(0, 0, 0); }, [exR, k]);
  await wait(1500);
  const blocked = await X.evaluate(() => [window.__SP.state, window.__SP.mission.complete, document.getElementById('prompt').textContent]);
  await X.evaluate(() => { const rp = [...window.__SP.mp.players.values()].find((r) => r.name === 'Yankee'); rp.bleed = 0.2; });
  await Promise.all([X, Y, Z].map((p) => p.waitForFunction(() => window.__SP.state === 'won', null, { timeout: 10000 }).catch(() => {})));
  const afterKia = await Promise.all([X, Y, Z].map((p) => p.evaluate(() => [window.__SP.state, window.__SP.coopResult && window.__SP.coopResult.players.map((x) => x.status).join(',')])));
  check('C. extraction waits while a connected teammate is downed elsewhere (and says who to revive); after he is KIA the others extract', blocked[0] === 'playing' && blocked[1] && /REVIVE YANKEE/.test(blocked[2]) && afterKia.every((r) => r[0] === 'won' && /KIA/.test(r[1])), { blocked, afterKia });
  // D. back in the lobby the host's shared callbacks are the originals again (no wrappers left behind)
  await Promise.all([X, Y, Z].map((p) => p.evaluate(() => { document.getElementById('content').scrollTop = 0; document.getElementById('emenu').click(); })));
  const unwrapped1 = await X.evaluate(() => { const G = window.__SP, o = window.__orig; return [G.toast === o.toast, G.say === o.say, G.onSecurity === o.onSecurity, G.onKill === o.onKill, G.mp === null, G.localPlayer == null]; });
  // second mission; B. then a client and then the host leave it through the pause menu
  for (const p of [Y, Z]) await p.waitForFunction(() => !document.getElementById('mpready').disabled, null, { timeout: 15000 }).then(() => p.click('#mpready'));
  await X.waitForFunction(() => !document.getElementById('mpstart').disabled, null, { timeout: 15000 }); await X.click('#mpstart');
  await Promise.all([X, Y, Z].map((p) => p.waitForFunction(() => window.__SP.state === 'playing' && window.__SP.mp && window.__SP.mp.phase === 'live', null, { timeout: 120000 })));
  const zLabel = await Z.evaluate(() => { const G = window.__SP; window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' })); const l = [G.state, document.getElementById('pmenu').textContent, getComputedStyle(document.getElementById('prestart')).display]; document.getElementById('pmenu').click(); return l; });
  await wait(1200);
  const leftC = await Promise.all([X.evaluate(() => { const r = [...window.__SP.mp.players.values()].find((x) => x.name === 'Zulu'); return { state: window.__SP.state, zConnected: r.connected, targets: window.__SP.mp.standing().length, lobby: window.__SP.mpLobby.lobby.players.length }; }),
    Y.evaluate(() => ({ state: window.__SP.state, team: document.getElementById('mphud').textContent })),
    Z.evaluate(() => ({ state: window.__SP.state, inParty: window.__SP.mpLobby.inParty(), msg: document.getElementById('mperr').textContent, connect: document.getElementById('mpconn').style.display }))]);
  check('B. a client leaving an active mission is removed from the party; host and the other client carry on without him; he is back at the connect screen, not in a stuck lobby',
    zLabel[0] === 'paused' && /LEAVE MISSION/.test(zLabel[1]) && zLabel[2] === 'none' && leftC[0].state === 'playing' && !leftC[0].zConnected && leftC[0].targets === 2 && leftC[0].lobby === 2 && leftC[1].state === 'playing' && /Zulu\s*LEFT/i.test(leftC[1].team) && leftC[2].state === 'menu' && !leftC[2].inParty && /left the mission/i.test(leftC[2].msg) && leftC[2].connect === 'block', { zLabel, leftC });
  const xLabel = await X.evaluate(() => { const G = window.__SP; window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' })); const l = [G.state, document.getElementById('pmenu').textContent]; document.getElementById('pmenu').click(); return l; });
  await Y.waitForFunction(() => window.__SP.state === 'menu' && /ended/i.test(document.getElementById('mperr').textContent), null, { timeout: 10000 }).catch(() => {});
  const leftH = await Promise.all([X.evaluate(() => ({ state: window.__SP.state, inParty: window.__SP.mpLobby.inParty(), msg: document.getElementById('mperr').textContent })), Y.evaluate(() => ({ state: window.__SP.state, inParty: window.__SP.mpLobby.inParty(), msg: document.getElementById('mperr').textContent }))]);
  check('B. the host leaving an active mission ends it cleanly: the remaining client is told the party ended and nobody is left in a "mission in progress" lobby', xLabel[0] === 'paused' && /END MISSION FOR EVERYONE/.test(xLabel[1]) && leftH.every((r) => r.state === 'menu' && !r.inParty) && /ended/i.test(leftH[1].msg) && /ended the mission/i.test(leftH[0].msg), { xLabel, leftH });
  // D. (continued) after co-op the same tab plays solo: originals in place, nothing reaches the old session
  const solo = await X.evaluate(async () => {
    const G = window.__SP, o = window.__orig; document.querySelector('[data-tab="play"]').click(); G.sel.mode = 'mission'; document.getElementById('start').click();
    const t0 = performance.now(); while (G.state !== 'playing' && performance.now() - t0 < 5000) { if (G.state === 'brief') document.getElementById('brgo').click(); await new Promise((r) => setTimeout(r, 50)); }
    for (let i = 0; i < 30; i++) G.step(1 / 60); G.toast('solo', 1);
    return { state: G.state, mp: G.mp, originals: [G.toast === o.toast, G.say === o.say, G.onSecurity === o.onSecurity, G.onKill === o.onKill] };
  });
  check('D. host callbacks are restored after every co-op session (lobby return and leaving), and a later solo mission runs with the originals and no session', unwrapped1.every(Boolean) && solo.state === 'playing' && solo.mp === null && solo.originals.every(Boolean), { unwrapped1, solo });
  for (const p of [X, Y, Z]) await p.ctx.close().catch(() => {});

  // --------------------------------------------------------------- invitation link from a localhost-created party (LAN adapter present)
  // A second server sees one external adapter at 127.0.0.2 (SP_TEST_IFACES, test-only): like a real LAN address it
  // reaches this machine, so the link it produces can actually be opened by another browser.
  {
    const P2 = PORT + 1, iface = JSON.stringify({ eth0: [{ address: '127.0.0.2', family: 'IPv4', internal: false }], lo: [{ address: '127.0.0.1', family: 'IPv4', internal: true }] });
    const s2 = spawn(process.execPath, [path.join(ROOT, 'server', 'lan.cjs'), '--port', String(P2)], { stdio: ['ignore', 'pipe', 'pipe'], env: { ...process.env, SP_TEST_IFACES: iface } });
    let banner = ''; s2.stdout.on('data', (d) => { banner += d; });
    await new Promise((r) => { const t0 = Date.now(); const tick = () => (banner.includes('Ctrl+C') || Date.now() - t0 > 5000 ? r() : setTimeout(tick, 50)); tick(); });
    const H2 = await client('Invite-host', `http://127.0.0.1:${P2}/?test`);
    await H2.click('[data-tab="mp"]'); await H2.fill('#mpname', 'Host'); await H2.fill('#mpaddr', `127.0.0.1:${P2}`); await H2.click('#mpcreate');
    await H2.waitForFunction(() => /^[A-Z0-9]{5}$/.test(document.getElementById('mpcodev').textContent), null, { timeout: 15000 });
    const inv = await H2.evaluate(() => ({ link: document.getElementById('mplink').value, help: document.getElementById('mplan').textContent, code: document.getElementById('mpcodev').textContent }));
    const G2 = await client('Invite-guest', inv.link.replace('?join=', '?test&join=')); // the guest opens exactly the invitation (plus test mode)
    const pre = await G2.evaluate(() => ({ tab: document.getElementById('t-mp').classList.contains('on'), code: document.getElementById('mpcode').value, addr: document.getElementById('mpaddr').value }));
    await G2.fill('#mpname', 'Guest'); await G2.click('#mpjoin');
    await H2.waitForFunction(() => document.querySelectorAll('#mpplayers .mpp').length === 2, null, { timeout: 15000 }).catch(() => {});
    const joined = await H2.evaluate(() => [...document.querySelectorAll('#mpplayers .n')].map((e) => e.textContent));
    check('invitation: a party created on http://127.0.0.1 invites via the LAN address (banner and link), and a second browser opening that link joins with the code filled in',
      new RegExp(`Your network:\\s+http://127\\.0\\.0\\.2:${P2}/`).test(banner) && inv.link === `http://127.0.0.2:${P2}/?join=${inv.code}` && inv.help.includes(`http://127.0.0.2:${P2}/`) && pre.tab && pre.code === inv.code && pre.addr === `127.0.0.2:${P2}` && joined.some((n) => n.includes('Guest')),
      { link: inv.link, pre, joined, bannerHasLan: banner.includes('127.0.0.2') });
    await H2.ctx.close(); await G2.ctx.close(); s2.kill();
  }

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
