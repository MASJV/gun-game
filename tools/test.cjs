// Headless behaviour tests for SHADOW PROTOCOL V2. Drives the real game bundle through window.__SP with
// deterministic fixed-step simulation (index.html?test). Usage: npm test   (needs Playwright + Chromium)
const path = require('path');
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { console.error('Playwright is not installed: npm i -D playwright && npx playwright install chromium'); process.exit(2); }
const URL = 'file://' + path.resolve(__dirname, '..', 'index.html') + '?test';
const only = process.argv[2];
const results = [];
const check = (name, ok, info = '') => { results.push({ name, ok: !!ok }); console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${info ? '  — ' + (typeof info === 'string' ? info : JSON.stringify(info)) : ''}`); };

(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1024, height: 576 } });
  const errs = [];
  p.on('pageerror', (e) => errs.push(e.message + ' @ ' + (e.stack || '').split('\n').slice(1, 3).join(' | ')));
  await p.goto(URL);
  await p.waitForFunction('window.__SP && window.__SP.state === "menu"', null, { timeout: 90000 });
  await p.evaluate(() => {
    const G = window.__SP;
    window.sim = (sec, fn) => { const n = Math.round(sec * 60); for (let i = 0; i < n && G.state === 'playing'; i++) { if (fn && fn(i) === false) break; G.step(1 / 60); } };
    window.key = (c, d) => { G.inp.k[c] = d; };
    window.press = (c) => window.dispatchEvent(new KeyboardEvent('keydown', { code: c }));
    window.calm = () => G.enemies.forEach((e) => { e.percT = 1e9; e.los = false; e.detect = 0; }); // freeze perception for isolated mechanics tests
    window.solo = (i = 0) => { const e = G.enemies[i]; G.enemies.forEach((o) => { if (o !== e) { o.dead = true; o.found = true; o.ch.root.visible = false; } }); return e; };
  });
  const start = async (map, ai, load = {}) => {
    await p.evaluate(([map, ai, load]) => {
      const G = window.__SP;
      if (G.state === 'playing') press('Escape');
      if (G.state === 'paused') document.getElementById('pmenu').click(); else if (G.state !== 'menu') document.getElementById('emenu').click();
      G.sel.map = map; G.sel.ai = ai; G.sel.layout = load.mission ? null : 'classic'; G.sel.mission = load.mission || 'intel'; G.sel.length = load.length || 'quick'; G.sel.seed = load.seed ?? null; const L = G.loadout; L.primary = load.primary || 'm4'; L.secondary = load.secondary || 'pistol'; L.kit = load.kit || 'assault';
      for (const id in L.att) Object.assign(L.att[id], { optic: id === 'dmr' ? 'scope' : id === 'sniper' ? 'vscope' : 'iron', muzzle: false, grip: false, laser: false }, (load.att || {})[id] || {});
      document.getElementById('start').click();
    }, [map, ai, load]);
  };
  const run = async (name, fn) => { if (only && !name.includes(only)) return; try { await fn(); } catch (e) { check(name + ' (exception)', false, e.message.split('\n')[0]); } };

  await run('menu', async () => {
    const m = await p.evaluate(() => { document.querySelector('[data-tab="loadout"]').click(); document.querySelector('.opts[data-k="primary"] [data-v="ak"]').click(); document.querySelector('#optic [data-v="holo"]').click(); document.querySelector('#atts [data-v="muzzle"]').click();
      const G = window.__SP; return { tabs: document.querySelectorAll('.nav').length, ai: [...document.querySelectorAll('.opts[data-k="ai"] .opt')].map((o) => o.dataset.v), primary: G.loadout.primary, att: G.loadout.att.ak, sum: document.getElementById('losum').textContent }; });
    check('menu: PLAY / LOADOUT / SETTINGS / CONTROLS tabs', m.tabs === 4);
    check('menu: exactly Recruit / Tactical / Elite Squad', m.ai.join() === 'recruit,tactical,elite');
    check('loadout: weapon + optic + suppressor selection is stored', m.primary === 'ak' && m.att.optic === 'holo' && m.att.muzzle === true, m.sum);
  });

  await run('movement', async () => {
    await start('warehouse', 'tactical');
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, o = {}; calm();
      P.pos.set(30, 0, 0); P.yaw = 0; key('KeyW', true); sim(1); o.walk = +P.speed.toFixed(1); key('ShiftLeft', true); sim(0.6); o.sprint = +P.speed.toFixed(1); key('ShiftLeft', false); key('KeyW', false); sim(0.4);
      key('ControlLeft', true); sim(0.5); o.crouchEye = +P.eye.toFixed(2); key('ControlLeft', false); sim(0.5);
      G.inp.jump = true; let my = 0; sim(1, () => { my = Math.max(my, P.pos.y); }); o.jump = +my.toFixed(2);
      // wall: walk west into the building's east wall (x = 20.5) between the doors
      P.pos.set(23, 0, 0); P.yaw = Math.PI / 2; key('KeyW', true); sim(2); o.wallX = +P.pos.x.toFixed(2); key('KeyW', false);
      // lean right at a corner moves the eye sideways; leaning into a wall is clamped
      P.pos.set(30, 0, 0); P.yaw = 0; sim(0.2); key('KeyF', true); sim(0.6); o.leanOpen = +Math.hypot(P.leanX, P.leanZ).toFixed(2); key('KeyF', false); sim(0.5);
      P.pos.set(21.06, 0, 0); P.yaw = Math.PI; sim(0.2); key('KeyF', true); sim(0.6); o.leanWall = +Math.hypot(P.leanX, P.leanZ).toFixed(2); key('KeyF', false); sim(0.4);
      // mantle onto the 1 m loading dock by holding jump against it
      P.pos.set(12, 0, 18.6); P.yaw = Math.PI; key('KeyW', true); key('Space', true); sim(1.6); o.dockY = +P.pos.y.toFixed(2); key('KeyW', false); key('Space', false);
      // stairs are walkable
      P.pos.set(5, 0, 22.5); P.yaw = -Math.PI / 2; key('KeyW', true); sim(1.6); o.stairY = +P.pos.y.toFixed(2); key('KeyW', false);
      return o;
    });
    check('player: walk / sprint / crouch / jump', o.walk > 4 && o.sprint > 6 && o.crouchEye < 1.05 && o.jump > 0.8, o);
    check('player: walls stop movement', o.wallX > 20.9 && o.wallX < 21.2, o.wallX);
    check('player: lean moves the view, clamped by geometry', o.leanOpen > 0.35 && o.leanWall < 0.25, [o.leanOpen, o.leanWall]);
    check('player: mantles onto the dock and walks up stairs', Math.abs(o.dockY - 1) < 0.05 && Math.abs(o.stairY - 1) < 0.05, [o.dockY, o.stairY]);
  });

  await run('weapons', async () => {
    for (const [prim, sec] of [['ak', 'pistol'], ['m4', 'smg'], ['dmr', 'shotgun']]) {
      await start('warehouse', 'tactical', { primary: prim, secondary: sec, att: { ak: { optic: 'reddot', grip: true }, m4: { muzzle: true, laser: true }, smg: { optic: 'holo' } } });
      const o = await p.evaluate(() => {
        const G = window.__SP, P = G.player, o = {}; calm(); P.pos.set(34, 0, 0); P.yaw = 0; sim(0.3);
        const s0 = P.slots[0]; let mr = 0; G.inp.lmb = true; G.inp.lmbPressed = true; sim(0.5, () => { mr = Math.max(mr, P.rp); }); G.inp.lmb = false; o.fired1 = s0.st.mag - s0.mag; o.recoil = mr > 0.004; sim(0.5);
        P.reload(); o.reloading = P.reloading; sim(3.2); o.mag1 = s0.mag;
        G.inp.rmb = true; sim(0.6); o.ads = P.adsF; o.fov = Math.round(G.camera.fov); o.scoped = P.scoped; G.inp.rmb = false; sim(0.4);
        press('Digit2'); sim(0.6); o.cur = P.cur; const s1 = P.slots[1]; G.inp.lmb = true; G.inp.lmbPressed = true; sim(0.5); G.inp.lmb = false; o.fired2 = s1.st.mag - s1.mag; sim(1.2);
        P.reload(); sim(4); o.mag2 = s1.mag;
        press('Digit3'); sim(0.6); o.knife = P.slot.id; press('Digit1'); sim(0.6);
        o.noise = P.slots[0].st.noise; o.id = [s0.id, s1.id]; o.views = P.slots.map((s) => { let n = 0; s.view.traverse((m) => m.isMesh && n++); return n; });
        return o;
      });
      const exp = { ak: [5, 6], m4: [6, 8], dmr: [1, 1], pistol: [1, 1], smg: [7, 9], shotgun: [1, 1] };
      check(`weapons: ${prim} fires at its own cadence, recoils, reloads`, o.fired1 >= exp[prim][0] && o.fired1 <= exp[prim][1] && o.recoil && o.reloading && o.mag1 === { ak: 30, m4: 30, dmr: 10 }[prim], o);
      check(`weapons: ${sec} fires, reloads, switching and knife slot work`, o.cur === 1 && o.fired2 >= exp[sec][0] && o.fired2 <= exp[sec][1] && o.mag2 === { pistol: 15, smg: 30, shotgun: 6 }[sec] && o.knife === 'knife', [o.fired2, o.mag2, o.knife]);
      check(`weapons: ${prim} ADS zoom matches optic`, o.ads === 1 && o.fov === { ak: 55, m4: 58, dmr: 22 }[prim] && o.scoped === (prim === 'dmr'), [o.fov, o.scoped]);
      if (prim === 'm4') check('attachments: suppressor cuts the noise radius', o.noise < 15, o.noise);
    }
  });

  await run('sniper', async () => {
    await start('warehouse', 'tactical', { primary: 'sniper', secondary: 'shotgun' });
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, o = {}; const e = solo(0); calm(); const s = P.slots[0];
      const put = (x, z) => { e.release(); e.pos.set(x, 0, z); e.yaw = e.baseYaw = 0; e.path = null; e.waitT = 1e9; e.state = 'PATROL'; e.hp = 100; e.dead = false; e.sync(); e.ch.refresh(); };
      const wheel = (dy) => { const ev = new WheelEvent('wheel', { deltaY: dy, cancelable: true }); window.dispatchEvent(ev); return ev.defaultPrevented; };
      P.pos.set(40, 0, 12); P.yaw = 0; P.pitch = 0; put(40, -4); sim(0.4);
      o.id = s.id; o.mag = s.st.mag; o.zoom0 = s.zoom; const thr0 = P.throwSel;
      o.hipWheel = [wheel(-100), s.zoom]; // not aiming: the wheel must not zoom
      G.inp.rmb = true; sim(0.8); o.scoped = P.scoped; o.scopeShown = getComputedStyle(document.getElementById('scope')).display;
      const fovAt = () => +G.camera.fov.toFixed(2), want = (z) => +((2 * Math.atan(Math.tan((G.fov * Math.PI) / 360) / z) * 180) / Math.PI).toFixed(2);
      o.fov4 = [fovAt(), want(4)]; const steps = []; for (let i = 0; i < 4; i++) { o.prevented = wheel(-100); steps.push(s.zoom); } o.steps = steps; sim(0.2); o.fov5 = [fovAt(), want(5)];
      for (let i = 0; i < 40; i++) wheel(-100); o.max = s.zoom; sim(0.2); o.fov10 = [fovAt(), want(10)]; o.hud = document.getElementById('zoomv').textContent;
      // sensitivity scales with magnification
      const y0 = P.yaw; G.inp.mx = 100; sim(0.02); const dz = Math.abs(P.yaw - y0); o.sensRatio = +(dz / (100 * 0.0022 * G.sens)).toFixed(3);
      for (let i = 0; i < 60; i++) wheel(100); o.min = s.zoom;
      // scoped shot: lethal to the body with a clear line, bolt blocks the next round, wall still stops it
      P.yaw = 0; P.pitch = Math.atan2(1.15 - 1.62, 16); P.swT2 = 0; sim(0.05); G.inp.lmb = true; G.inp.lmbPressed = true; sim(0.05); G.inp.lmb = false; o.kill = e.dead; o.magAfter = s.mag; o.bolt = P.boltT > 0.8;
      G.inp.lmb = true; G.inp.lmbPressed = true; sim(0.3); G.inp.lmb = false; o.blockedByBolt = s.mag === o.magAfter; sim(1.2);
      put(19, 0); P.pos.set(26, 0, 0); P.yaw = Math.PI / 2; P.pitch = Math.atan2(1.15 - 1.62, 7); sim(0.3); G.inp.lmb = true; G.inp.lmbPressed = true; sim(0.05); G.inp.lmb = false; sim(0.2); o.wall = 100 - e.hp; G.inp.rmb = false; sim(0.5);
      // staged reload: nothing changes before the magazine goes in; switching away before that leaves the weapon as it was
      const tot0 = s.mag + s.reserve, m0 = s.mag; P.reload(); sim(s.st.reload * 0.4); o.early = [s.mag === m0, s.reserve + s.mag === tot0]; press('Digit2'); sim(0.8); press('Digit1'); sim(0.8); o.cancel = [s.mag === m0, s.mag + s.reserve === tot0];
      P.reload(); sim(s.st.reload * (s.st.ins + 0.05)); o.inserted = s.mag === 5; sim(2); o.done = [!P.reloading, s.mag, s.mag + s.reserve === tot0];
      // shotgun: one shell at a time, firing interrupts after a shell is in
      press('Digit2'); sim(0.8); const g = P.slots[1]; g.mag = 1; const r0 = g.reserve; P.reload(); sim(0.5); o.shell1 = g.mag; sim(0.3); o.shell2 = g.mag; sim(0.5); const m2 = g.mag; G.inp.lmb = true; G.inp.lmbPressed = true; sim(0.1); G.inp.lmb = false; const stopped = !P.reloading, m3 = g.mag; sim(0.6); G.inp.lmbPressed = true; G.inp.lmb = true; sim(0.1); G.inp.lmb = false;
      o.interrupt = [m2, stopped, g.mag === m3 - 1]; o.conserve = g.mag + g.reserve + 1 === 1 + r0;
      return o;
    });
    check('sniper: bolt-action primary with 5 rounds; one scoped body hit is lethal; the bolt gates the next shot', o.id === 'sniper' && o.mag === 5 && o.kill && o.magAfter === 4 && o.bolt && o.blockedByBolt, [o.kill, o.magAfter, o.bolt, o.blockedByBolt]);
    check('optics: wheel zooms only while aiming, in 0.25x steps, clamped to 4-10x', o.hipWheel[1] === 4 && o.steps.join() === '4.25,4.5,4.75,5' && o.max === 10 && o.min === 4 && o.prevented === true, [o.hipWheel, o.steps, o.min, o.max, o.prevented]);
    check('optics: camera FOV follows true magnification and the scope HUD shows it', Math.abs(o.fov4[0] - o.fov4[1]) < 0.3 && Math.abs(o.fov5[0] - o.fov5[1]) < 0.3 && Math.abs(o.fov10[0] - o.fov10[1]) < 0.3 && o.scoped && o.scopeShown === 'block' && /10\.00/.test(o.hud), [o.fov4, o.fov5, o.fov10, o.hud]);
    check('optics: mouse sensitivity is reduced in proportion to zoom; scoped rounds still stop at walls', o.sensRatio < 0.15 && o.wall === 0, [o.sensRatio, o.wall]);
    check('reload: ammunition changes at the insert stage, cancelling earlier changes nothing, totals are conserved', o.early[0] && o.early[1] && o.cancel[0] && o.cancel[1] && o.inserted && o.done[0] && o.done[1] === 5 && o.done[2], [o.early, o.cancel, o.inserted, o.done]);
    check('reload: shotgun loads shell by shell and can be interrupted by firing', o.shell1 === 2 && o.shell2 === 2 && o.interrupt[0] >= 3 && o.interrupt[1] && o.interrupt[2] && o.conserve, [o.shell1, o.shell2, o.interrupt, o.conserve]);
  });

  await run('combat', async () => {
    await start('warehouse', 'tactical', { primary: 'ak' });
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, o = {}; const e = solo(0); calm();
      const place = (x, z, yaw) => { e.pos.set(x, 0, z); e.yaw = e.baseYaw = yaw; e.path = null; e.waitT = 1e9; e.state = 'PATROL'; e.sync(); };
      // body shot vs head shot through the animated hit zones
      P.pos.set(40, 0, 12); P.yaw = 0; P.pitch = 0; place(40, 0, 0); sim(0.5); G.inp.rmb = true; sim(0.5);
      P.pitch = -0.045; sim(0.1); G.inp.lmbPressed = true; G.inp.lmb = true; sim(0.03); G.inp.lmb = false; sim(0.2); o.body = 100 - e.hp;
      e.hp = 100; e.state = 'PATROL'; e.waitT = 1e9; e.release(); place(40, 0, 0); calm(); e.stun = 0; sim(0.6);
      e.ch.refresh(); const h = e.ch.eye(new G.v1.constructor()); P.pitch = Math.atan2(h.y + 0.03 - G.camera.position.y, 12); sim(0.1); G.inp.lmbPressed = true; G.inp.lmb = true; sim(0.03); G.inp.lmb = false; sim(0.1); o.head = e.dead ? 'kill' : 100 - e.hp; G.inp.rmb = false;
      return o;
    });
    check('combat: body hit = base damage, head hit = 2.5x', o.body === 36 && (o.head === 'kill' || o.head === 90), o);
    await start('warehouse', 'tactical');
    const k = await p.evaluate(() => {
      const G = window.__SP, P = G.player, o = {}; const e = solo(0); calm();
      e.pos.set(40, 0, 0); e.yaw = 0; e.baseYaw = 0; e.path = null; e.waitT = 1e9; e.sync(); P.pos.set(40, 0, 1.4); P.yaw = 0; P.pitch = 0; sim(0.3); // directly behind the guard
      press('KeyV'); sim(0.7); o.backstab = e.dead; o.cur = P.cur; o.knifeKills = G.stats.knife;
      return o;
    });
    check('melee: quick knife from behind is a silent takedown', k.backstab && k.cur === 0 && k.knifeKills === 1, k);
  });

  await run('ballistics', async () => {
    await start('forest', 'tactical', { primary: 'dmr', secondary: 'shotgun' });
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, o = {}; const e = solo(0); calm(); P.hp = 100;
      const V = G.v1.constructor, put = (x, z) => { e.release(); e.pos.set(x, 0, z); e.yaw = e.baseYaw = 0; e.path = null; e.waitT = 1e9; e.state = 'PATROL'; e.hp = 100; e.sync(); e.ch.refresh(); };
      const shootAt = (slot, n = 1) => { if (P.cur !== slot) { press('Digit' + (slot + 1)); sim(0.7); } const dx = e.pos.x - P.pos.x, dz = e.pos.z - P.pos.z; P.yaw = Math.atan2(-dx, -dz); P.pitch = Math.atan2(1.1 - 1.62, Math.hypot(dx, dz)); sim(0.2);
        for (let i = 0; i < n; i++) { P.slot.mag = Math.max(P.slot.mag, 1); P.reloading = false; G.inp.lmb = true; G.inp.lmbPressed = true; sim(0.05); G.inp.lmb = false; sim(P.slot.id === 'dmr' ? 0.4 : 1); } return 100 - e.hp; };
      // 1. chain-link fence between shooter and target (fence line z = 3.5, x 3..18.5): visible, but bullets stop
      put(10, 0.5); P.pos.set(10, 0, 8); o.seeThroughFence = G.los(10, 1.6, 8, 10, 1.2, 0.5); o.fenceRifle = shootAt(0, 2); o.fenceShotgun = shootAt(1, 1);
      // 2. hut wall (command hut south wall z = -16.5)
      put(-13, -18.5); P.pos.set(-13, 0, -13); o.wall = shootAt(0, 2); G.inp.rmb = true; sim(0.6); o.scopedWall = shootAt(0, 1); G.inp.rmb = false; sim(0.4);
      // 3. truck and crate as cover
      put(-11.6, -6); P.pos.set(-5, 0, -6); o.truck = shootAt(0, 2);
      put(-2, -22.3); P.pos.set(-2, 0, -17); o.crate = shootAt(1, 1);
      // 4. control: same weapons with a clear line do damage
      put(0, 20); e.hp = 5000; P.pos.set(0, 0, 25); o.clearRifle = 5000 - e.hp > 0; shootAt(0, 3); o.clearRifle = e.hp < 5000; { const r = G.trace(G.camera.position, P.fwd, 60, 'player'); o.dbg = [r.kind, +r.d.toFixed(2), r.wh ? [r.wh.x0, r.wh.x1, r.wh.y0, r.wh.y1, r.wh.z0, r.wh.z1].map((v) => +v.toFixed(1)) : null, P.cur, P.slot.mag, +P.boltT.toFixed(2), P.reloading, e.hp, e.dead]; } put(0, 20); e.stun = 9; e.hp = 5000; P.pos.set(0, 0, 23.5); const sm0 = P.slots[1].mag, sh0 = G.stats.shots; shootAt(1, 2); o.clearShotgun = e.hp < 5000; { const r0 = G.trace(G.camera.position, P.fwd, 60, 'player'), m = P.muzzleW, c = G.camera.position; o.dbg2 = [r0.kind, +r0.d.toFixed(2), r0.part, [m.x - c.x, m.y - c.y, m.z - c.z].map((v) => +v.toFixed(2)), [P.pos.x, P.pos.z, P.yaw, P.pitch].map((v) => +v.toFixed(2)), [e.pos.x, e.pos.z], e.ch.root.position.z]; } o.dbg = [P.cur, sm0, P.slots[1].mag, G.stats.shots - sh0, +P.pumpT.toFixed(2), +P.fireT.toFixed(2), P.reloading, !!P.use, P.swT, e.hp]; e.stun = 0; e.hp = 100;
      // 5. muzzle obstruction: the camera sees past a corner but the muzzle is behind it -> the round hits the corner
      put(0, 20); e.hp = 100; P.pos.set(0, 0, 28); press('Digit1'); sim(0.7); P.yaw = 0; P.pitch = -0.065; sim(0.3);
      const m = P.muzzleW, col = { x0: m.x - 0.06, x1: m.x + 0.5, y0: 0, y1: 3, z0: m.z - 0.5, z1: m.z + 0.12, solid: false, sight: false, bullet: true }; G.world.colliders.push(col);
      const camClear = !G.trace(G.camera.position, P.fwd, 30, 'player').wh; P.slot.mag = 5; G.inp.lmb = true; G.inp.lmbPressed = true; sim(0.05); G.inp.lmb = false; sim(0.5);
      o.muzzleBlocked = { camClear, dmg: 100 - e.hp }; G.world.colliders.splice(G.world.colliders.indexOf(col), 1);
      // 6. enemy rounds obey the same resolver: wall, fence
      const fireAt = () => { e.seeing = true; e.seeBody = true; e.los = true; e.pd = Math.hypot(P.pos.x - e.pos.x, P.pos.z - e.pos.z); e.yaw = Math.atan2(-(P.pos.x - e.pos.x), -(P.pos.z - e.pos.z)); e.sync(); e.ch.aimW = 1; for (let i = 0; i < 20; i++) e.ch.update(1 / 60, { speed: 0, aim: true }); let fired = 0; for (let i = 0; i < 40; i++) { e.ammo = 30; e.seenT = 5; if (e.fire(false)) fired++; } return fired; };
      P.hp = 100; put(-13, -18.5); P.pos.set(-13, 0, -13); o.enemyWall = [fireAt(), 100 - P.hp];
      P.hp = 100; put(10, 0.5); P.pos.set(10, 0, 8); o.enemyFence = [fireAt(), 100 - P.hp];
      P.hp = 1e5; put(0, 20); P.pos.set(0, 0, 25.5); o.enemyClear = [fireAt(), 1e5 - P.hp > 0];
      // direct resolver calls straight through geometry never reach the far side
      const d = new V(0, 0, -1); o.resolver = ['player', e].map((sh) => { const r = G.trace(new V(-13, 1.2, -13), d, 30, sh); return r.kind; });
      return o;
    });
    check('ballistics: chain-link fence is see-through but stops rifle and shotgun rounds', o.seeThroughFence && o.fenceRifle === 0 && o.fenceShotgun === 0, [o.seeThroughFence, o.fenceRifle, o.fenceShotgun]);
    check('ballistics: walls, vehicles and crates stop rounds (also when scoped)', o.wall === 0 && o.scopedWall === 0 && o.truck === 0 && o.crate === 0, [o.wall, o.scopedWall, o.truck, o.crate]);
    check('ballistics: the same weapons hit with a clear line of fire', o.clearRifle && o.clearShotgun, [o.clearRifle, o.clearShotgun, o.dbg, o.dbg2]);
    check('ballistics: an obstructed muzzle cannot shoot past cover the camera sees over', o.muzzleBlocked.camClear && o.muzzleBlocked.dmg === 0, o.muzzleBlocked);
    check('ballistics: enemy fire is refused / stopped by walls and fences, lands when clear', o.enemyWall[0] === 0 && o.enemyWall[1] === 0 && o.enemyFence[0] === 0 && o.enemyFence[1] === 0 && o.enemyClear[0] > 0 && o.enemyClear[1], [o.enemyWall, o.enemyFence, o.enemyClear]);
    check('ballistics: resolver stops at the wall for both player and enemy shooters', o.resolver.every((k) => k === 'world'), o.resolver);
  });

  await run('equipment', async () => {
    await start('warehouse', 'tactical', { kit: 'recon' });
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, o = {}; calm(); const [a, b2, c] = G.enemies; G.enemies.slice(3).forEach((e) => { e.dead = true; e.found = true; e.ch.root.visible = false; });
      const hold = (e, x, z) => { e.pos.set(x, 0, z); e.path = null; e.waitT = 1e9; e.state = 'PATROL'; e.yaw = e.baseYaw = Math.PI; e.sync(); e.ch.refresh(); };
      // frag: a is in the open 3 m from the blast, b is behind a shipping container
      hold(a, 30, -15); a.stun = 6; hold(b2, 39, -15); hold(c, 40, 20); // a is pinned: guards who can move now run from grenades P.pos.set(30, 0, 14); P.hp = 100;
      G.spawnGrenade('frag', new G.v1.constructor(33, 0.2, -15), new G.v1.constructor(0, 0, 0), 'player'); sim(3.2);
      o.fragOpen = a.dead || a.hp < 40; o.fragCovered = b2.hp; o.secAfterBlast = G.sec.level;
      // flash: c faces the flash and is stunned
      hold(c, 40, 20); c.yaw = c.baseYaw = 0; c.sync(); c.ch.refresh(); sim(0.1); G.spawnGrenade('flash', new G.v1.constructor(40, 0.3, 16), new G.v1.constructor(0, 0, 0), 'player'); P.pos.set(30, 0, -20); sim(2.1); o.stun = +c.stun.toFixed(1); o.playerBlind = P.blind;
      // player facing a flash close by is blinded
      P.pos.set(40, 0, 0); P.yaw = 0; sim(0.2); G.spawnGrenade('flash', new G.v1.constructor(40, 0.3, -5), new G.v1.constructor(0, 0, 0), c); sim(2.0); o.blindFacing = +P.blind.toFixed(2); sim(4); o.blindRecovered = P.blind;
      // smoke blocks line of sight both ways
      const before = G.los(40, 1.5, 0, 40, 1.5, -12); G.spawnGrenade('smoke', new G.v1.constructor(40, 0.2, -6), new G.v1.constructor(0, 0, 0), 'player'); sim(2); o.smoke = [before, G.los(40, 1.5, 0, 40, 1.5, -12)];
      // thrown grenade leaves the hand, bounces and uses up inventory
      const n0 = P.inv.flash; P.throwSel = 'flash'; press('KeyG'); sim(0.5); o.thrown = [n0 - P.inv.flash, G.gren.list.length]; sim(2.5);
      // medical: medkit takes time and heals a lot, stim is quick and small; no free regeneration above the floor
      P.hp = 30; P.sinceHit = 99; sim(8); o.noRegen = Math.round(P.hp); press('KeyX'); sim(1); o.stim = Math.round(P.hp); const t0 = G.time; press('KeyH'); sim(1); o.medMid = Math.round(P.hp); sim(1.8); o.med = Math.round(P.hp); o.inv = [P.inv.med, P.inv.stim];
      return o;
    });
    check('frag: kills/wounds in the open, blocked by cover, raises the alert', o.fragOpen && o.fragCovered === 100 && o.secAfterBlast >= 1, o);
    check('flashbang: stuns a facing guard; blinds a facing player; wears off', o.stun > 1.5 && o.playerBlind === 0 && o.blindFacing > 0.8 && o.blindRecovered === 0, [o.stun, o.blindFacing]);
    check('smoke: blocks line of sight', o.smoke[0] === true && o.smoke[1] === false, o.smoke);
    check('throw: uses inventory and spawns a live grenade', o.thrown[0] === 1 && o.thrown[1] === 1, o.thrown);
    check('medical: no regeneration, stim +25 fast, medkit +65 slow', o.noRegen === 30 && o.stim >= 55 && o.stim <= 62 && o.medMid === o.stim || o.medMid <= o.stim + 5 && o.med === 100, [o.noRegen, o.stim, o.medMid, o.med, o.inv]);
  });

  await run('fairness', async () => {
    await start('warehouse', 'elite');
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, o = {}; const e = solo(0); P.hp = 1e6;
      const place = (x, z, yaw) => { e.release(); e.pos.set(x, 0, z); e.yaw = e.baseYaw = yaw; e.path = null; e.waitT = 1e9; e.state = 'PATROL'; e.detect = 0; e.alerted = false; e.hasLkp = false; e.sync(); e.ch.refresh(); };
      // 1. guard inside the hut facing the wall, player right outside it: nothing may be detected
      place(19, 0, -Math.PI / 2); P.pos.set(22.5, 0, 0); let md = 0; sim(6, () => { e.waitT = 1e9; md = Math.max(md, e.detect); }); o.wall = [md, e.state];
      // 2. open ground: detection takes time, the first shot comes after a reaction delay, never without sight
      place(40, 0, Math.PI); P.pos.set(40, 0, 13); let t = 0, tSee = -1, tShot = -1, blind = 0; const hp0 = P.hp;
      sim(20, () => { t += 1 / 60; const a = e.ammo; if (tSee < 0 && e.seeing) tSee = t; G.__a = a; });
      o.open = { tSee: +tSee.toFixed(2), dmg: Math.round(hp0 - P.hp), state: e.state };
      // 3. break line of sight: knowledge must stay at the last seen position
      P.pos.set(-44, 0, 28); sim(10); o.lost = { seeing: e.seeing, err: +Math.hypot(e.lkp.x - P.pos.x, e.lkp.z - P.pos.z).toFixed(0), state: e.state };
      return o;
    });
    check('fair: no detection through a wall', o.wall[0] === 0 && o.wall[1] === 'PATROL', o.wall);
    check('fair: detection and first hit take human time in the open', o.open.tSee > 0.4 && o.open.dmg > 0 && o.open.dmg < 400, o.open);
    check('fair: after losing sight the guard only knows the last seen position', !o.lost.seeing && o.lost.err > 30, o.lost);
  });

  const fight = async (ai) => {
    await start('warehouse', ai);
    return p.evaluate(() => {
      const G = window.__SP, P = G.player; P.hp = 1e6; P.pos.set(-2, 0, 0); P.yaw = 0;
      const st = {}, seen = { vault: 0, lean: 0, noSightShots: 0, shots: 0, nades: 0, supp: 0, maxMoving: 0, exposed: [] };
      const prevAmmo = G.enemies.map(() => 30); let peekStart = new Map();
      sim(75, (i) => {
        if (i % 200 === 0 && i < 1500) G.sound(P.pos, 40, 'shot');
        if (i === 2200) P.pos.set(12, 0, -15.5);
        G.enemies.forEach((e, k) => {
          if (e.dead) return;
          const key = e.state === 'COVER' ? 'COVER' : e.state; st[key] = (st[key] || 0) + 1;
          if (e.trav) seen.vault++;
          if (e.state === 'COVER' && e.phase === 'fire' && Math.abs(e.ch.lean) > 0.5) seen.lean++;
          if (e.ammo < prevAmmo[k]) { seen.shots++; if (!e.seeing) { if (e.suppLeft >= 0 && e.lkpAge < 4.2) seen.supp++; else seen.noSightShots++; } }
          prevAmmo[k] = e.ammo;
          if (e.state === 'COVER' && e.phase !== 'hide') { if (!peekStart.has(e)) peekStart.set(e, i); } else if (peekStart.has(e)) { seen.exposed.push((i - peekStart.get(e)) / 60); peekStart.delete(e); }
        });
        seen.nades = Math.max(seen.nades, G.gren.list.filter((n) => n.owner !== 'player').length);
      });
      const tot = Object.values(st).reduce((a, b) => a + b, 0), pct = {}; for (const k in st) pct[k] = Math.round(st[k] / tot * 100);
      const ex = seen.exposed, mean = ex.reduce((a, b) => a + b, 0) / (ex.length || 1), sd = Math.sqrt(ex.reduce((a, b) => a + (b - mean) ** 2, 0) / (ex.length || 1));
      return { pct, vaultFrames: seen.vault, leanFrames: seen.lean, shots: seen.shots, suppressive: seen.supp, noSightShots: seen.noSightShots, nades: seen.nades, peeks: ex.length, peekMean: +mean.toFixed(2), peekSd: +sd.toFixed(2), dps: +((1e6 - P.hp) / 75).toFixed(1), sec: G.sec.level,
        defenders: G.enemies.filter((e) => !e.dead && e.duty === 'objective' && Math.hypot(e.pos.x - G.world.objective.pos[0], e.pos.z - G.world.objective.pos[2]) < 16).length, alive: G.enemies.filter((e) => !e.dead).length, total: G.enemies.length };
    });
  };
  await run('ai', async () => {
    const R = {};
    for (const ai of ['recruit', 'tactical', 'elite']) { R[ai] = await fight(ai); console.log('   ', ai, JSON.stringify(R[ai])); }
    for (const ai of ['recruit', 'tactical', 'elite']) check(`ai/${ai}: never fires without sight (other than a short suppressive burst)`, R[ai].noSightShots === 0, [R[ai].shots, R[ai].suppressive]);
    check('ai: every level uses cover and lean-peeks', ['recruit', 'tactical', 'elite'].every((a) => R[a].pct.COVER > 5 && R[a].leanFrames > 20), [R.recruit.pct.COVER, R.tactical.pct.COVER, R.elite.pct.COVER]);
    check('ai: tactical and elite spend more time in cover than recruits', R.tactical.pct.COVER > R.recruit.pct.COVER && R.elite.pct.COVER > R.recruit.pct.COVER);
    check('ai: peeks are short (about a second) and irregular, not a fixed rhythm', ['recruit', 'tactical', 'elite'].every((a) => R[a].peekSd > 0.2 && R[a].peekMean < 2.2), [R.recruit.peekMean, R.tactical.peekMean, R.elite.peekMean, R.recruit.peekSd, R.tactical.peekSd, R.elite.peekSd]);
    check('ai: objective stays defended during the fight', R.tactical.defenders >= 2 && R.elite.defenders >= 2, [R.recruit.defenders, R.tactical.defenders, R.elite.defenders]);
    check('ai: security escalates to ALERT or LOCKDOWN', R.tactical.sec >= 2 && R.elite.sec >= 2, [R.recruit.sec, R.tactical.sec, R.elite.sec]);
    check('ai: reinforcements are finite', R.elite.total <= 13 && R.tactical.total <= 13, [R.tactical.total, R.elite.total]);
  });

  await run('elite', async () => {
    await start('warehouse', 'elite');
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, o = {}; P.hp = 1e6; const sq = G.enemies.slice(0, 3); G.enemies.forEach((e) => { if (!sq.includes(e)) { e.dead = true; e.found = true; e.ch.root.visible = false; } });
      sq.forEach((e, i) => { e.release(); e.pos.set(28 + i * 3, 0, -13); e.yaw = e.baseYaw = Math.PI; e.path = null; e.waitT = 1e9; e.state = 'PATROL'; e.nades = 1; e.sync(); e.ch.refresh(); });
      P.pos.set(30, 0, 3); P.yaw = 0; sim(5); o.engaged = sq.filter((e) => e.engaged()).length; o.roles = sq.map((e) => e.tac);
      // grenade: only at a stale last-known position, never with an ally near it, limited stock, shared cooldown
      const e = sq[0], V = G.v1.constructor; sq.forEach((x) => { x.percT = 1e9; x.los = false; x.seeing = false; x.state = 'COVER'; x.phase = 'hide'; x.hideT = 99; x.spot = x.spot || G.world.cover[0]; });
      e.pos.set(30, 0, -13); e.sync(); e.ch.refresh(); e.lkp.set(30, 0, 3); e.hasLkp = true; e.lkpAge = 4; e.unseen = 4; G.sec.nadeCool = 0;
      sq[1].pos.set(30, 0, 0); o.blockedByAlly = !e.tryGrenade(); sq[1].pos.set(34, 0, -13);
      e.lkpAge = 0.5; o.blockedFresh = !e.tryGrenade(); e.lkpAge = 4;
      o.thrown = e.tryGrenade(); let land = null; sim(4.2, () => { const n = G.gren.list.find((g) => g.owner === e); if (n) land = [n.pos.x, n.pos.z]; });
      o.landErr = land ? +Math.hypot(land[0] - 30, land[1] - 3).toFixed(1) : -1; o.nadesLeft = e.nades; e.lkpAge = 4; e.nades = 1; o.cooldown = !e.tryGrenade();
      // bounding rule: a squad member may only break cover while a team-mate is covering
      sq.forEach((x) => { x.hasLkp = true; x.lkpAge = 1; x.state = 'COVER'; }); o.mayMoveCovered = G.sec.mayMove(sq[0]);
      sq[1].state = 'MOVE'; sq[2].state = 'MOVE'; o.mayMoveAlone = G.sec.mayMove(sq[0]);
      return o;
    });
    check('elite: squad members take different roles', new Set(o.roles.filter(Boolean)).size >= 2, o.roles);
    check('elite: grenade only at a stale position, not near allies, lands near the last seen spot', o.blockedByAlly && o.blockedFresh && o.thrown && o.landErr >= 0 && o.landErr < 4.5, [o.blockedByAlly, o.blockedFresh, o.thrown, o.landErr]);
    check('elite: grenades are limited (stock and shared cooldown)', o.nadesLeft === 0 && o.cooldown, [o.nadesLeft, o.cooldown]);
    check('elite: bounding — may move while covered, must wait when nobody covers', o.mayMoveCovered === true && o.mayMoveAlone === false, [o.mayMoveCovered, o.mayMoveAlone]);
  });

  await run('refine', async () => {
    await start('warehouse', 'tactical');
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, o = {}, V = G.v1.constructor; calm(); P.pos.set(44, 0, 28); P.hp = 1e6;
      const [a, b2] = G.enemies; G.enemies.slice(2).forEach((e) => { e.dead = true; e.found = true; });
      [a, b2].forEach((e, i) => { e.release(); e.pos.set(30 + i * 2, 0, -15); e.yaw = e.baseYaw = 0; e.path = null; e.waitT = 1e9; e.state = 'PATROL'; e.sync(); e.ch.refresh(); });
      G.spawnGrenade('frag', new V(31, 1.2, -14.5), new V(0, 0, 0), 'player'); let moved = 0; sim(2.6, () => { if (a.state === 'MOVE' || b2.state === 'MOVE') moved++; });
      o.evadeFrames = moved; sim(1); o.dist = [a, b2].map((e) => +Math.hypot(e.pos.x - 31, e.pos.z + 14.5).toFixed(1)); o.alive = [a, b2].filter((e) => !e.dead).length;
      // a guard in cover with a stale contact does not stay tucked forever
      const e = a.dead ? b2 : a; e.percT = 1e9; e.hasLkp = true; e.lkpAge = 1; e.holdPost = false;
      e.release(); e.pos.set(8, 0, -15.5); e.sync(); e.lkp.set(-3, 0, 2); const ok = e.takeCover('hold'); let t = 0, left = -1; sim(40, () => { t += 1 / 60; e.lkpAge = Math.min(e.lkpAge, 6); if (left < 0 && e.state === 'COVER' && e.phase === 'hide') left = -2; if (left === -2 && (e.state !== 'COVER' || e.phase !== 'hide')) left = t; return left < 0; });
      o.cover = ok; o.leftHideAfter = +left.toFixed(1);
      return o;
    });
    check('ai: guards scatter from a grenade that lands next to them', o.evadeFrames > 30 && o.dist.some((d) => d > 6), o);
    check('ai: a guard does not stay hidden indefinitely', o.cover && o.leftHideAfter > 0 && o.leftHideAfter < 25, [o.cover, o.leftHideAfter]);
  });

  await run('traversal', async () => {
    await start('forest', 'tactical');
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, o = {}; const e = solo(0); calm(); P.pos.set(50, 0, 50);
      // a guard sent across the sandbag wall must vault it rather than get stuck
      e.release(); e.pos.set(-5.5, 0, 8.5); e.sync(); e.goTo(-5.5, 4.2); e.state = 'INVESTIGATE'; e.inv = { x: -5.5, y: 0, z: 4.2 }; let trav = 0, maxY = 0;
      o.link = e.path && e.path.some((q) => q.link); sim(4, () => { if (e.trav) trav++; maxY = Math.max(maxY, e.pos.y); }); o.trav = trav; o.maxY = +maxY.toFixed(2); o.end = [+e.pos.x.toFixed(1), +e.pos.z.toFixed(1)];
      return o;
    });
    check('traversal: guards vault low cover (same route the player can jump)', o.link && o.trav > 20 && o.maxY > 1 && o.end[1] < 5.5, o);
    await start('warehouse', 'tactical');
    const d = await p.evaluate(() => {
      const G = window.__SP, P = G.player; const e = solo(0); calm(); P.pos.set(44, 0, -28);
      const walk = (fn) => { e.state = 'TEST'; sim(14, () => { fn(); return !e.follow(1 / 60, 2.6); }); };
      e.release(); e.pos.set(18, 0, 18.5); e.sync(); e.goTo(15, 23); const types = new Set(); walk(() => { if (e.trav) types.add(e.trav.type); });
      const up = +e.pos.y.toFixed(2); e.goTo(2, 22.5); let viaStairs = false; walk(() => { if (e.pos.y > 0.2 && e.pos.y < 0.8 && e.pos.x < 8) viaStairs = true; });
      return { up, types: [...types], down: +e.pos.y.toFixed(2), viaStairs };
    });
    check('traversal: guards climb onto the dock and walk down its stairs', d.up > 0.97 && d.types.includes('climb') && d.down === 0 && d.viaStairs, d);
  });

  await run('security', async () => {
    await start('warehouse', 'tactical', { att: { m4: { muzzle: true } } });
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, o = {};
      o.start = { n: G.enemies.length, objective: G.enemies.filter((e) => e.duty === 'objective').length, posts: G.enemies.filter((e) => e.duty === 'post').length, patrols: G.enemies.filter((e) => e.duty === 'patrol').length, level: G.sec.level };
      P.pos.set(44, 0, 28); P.crouchToggle = true; calm(); sim(5); o.quiet = G.sec.level;
      // a body found by a patrol is radioed in: ALERT with a report at the body, not at the player
      const [a, b2] = G.enemies.filter((e) => e.duty === 'patrol'); a.pos.set(41, 0, -19); a.sync(); a.damage(999, P.pos, 'torso'); b2.release(); b2.pos.set(41, 0, -12.5); b2.yaw = b2.baseYaw = 0; b2.path = null; b2.waitT = 6; b2.state = 'PATROL'; b2.sync();
      G.enemies.forEach((e) => { if (e !== b2) e.bodyT = 1e9; }); sim(12, () => G.sec.level < 2);
      o.body = { level: G.sec.level, report: G.sec.report && [Math.round(G.sec.report.x), Math.round(G.sec.report.z)], playerErr: G.sec.report ? Math.round(Math.hypot(G.sec.report.x - P.pos.x, G.sec.report.z - P.pos.z)) : -1 };
      o.orders = G.enemies.filter((e) => !e.dead).map((e) => e.duty[0] + ':' + (e.order ? e.order.type : e.state === 'INVESTIGATE' || e.state === 'SUSPICIOUS' ? 'investigate' : e.holdPost ? 'defend' : e.state));
      // nobody outside line of sight knows where the player is
      o.knowPlayer = G.enemies.filter((e) => !e.dead && e.hasLkp && Math.hypot(e.lkp.x - P.pos.x, e.lkp.z - P.pos.z) < 6).length;
      // someone runs for the alarm panel -> LOCKDOWN -> finite reinforcements from a far gate
      G.sec.alarmAt = Math.min(G.sec.alarmAt, G.sec.t + 5); let runner = false; sim(40, () => { if (G.sec.runner) runner = true; return G.sec.level < 3; }); o.runner = runner; o.lock = G.sec.level; const n0 = G.enemies.length;
      sim(22); o.reinforced = G.enemies.length - n0; o.reinDist = Math.round(Math.min(...G.enemies.slice(n0).map((e) => Math.hypot(e.pos.x - P.pos.x, e.pos.z - P.pos.z))));
      sim(40); o.final = G.enemies.length - n0;
      return o;
    });
    check('security: site is staffed from the start (objective detail, door posts, patrols)', o.start.n === 10 && o.start.objective === 3 && o.start.posts >= 2 && o.start.patrols >= 3 && o.start.level === 0, o.start);
    check('security: a discovered body raises ALERT with a report at the body', o.body.level === 2 && o.body.playerErr > 15, o.body);
    check('security: alert gives orders (investigate / defend), not the player position', o.orders.some((s) => s.endsWith('investigate')) && o.orders.filter((s) => s.endsWith('defend')).length >= 3 && o.knowPlayer === 0, [o.orders, o.knowPlayer]);
    check('security: alarm runner triggers LOCKDOWN', o.runner && o.lock === 3, [o.runner, o.lock]);
    check('security: reinforcements are finite and arrive far from the player', o.reinforced === 3 && o.final === 3 && o.reinDist > 30, [o.reinforced, o.final, o.reinDist]);
  });

  await run('mission', async () => {
    // helper living in the page: play a generated mission to the end by walking the objective list
    await p.evaluate(() => {
      const G = window.__SP;
      window.playMission = (opts = {}) => {
        const P = G.player, Mi = G.mission, W = G.world, log = { stages: Mi.def.stages.map((s) => s.kind), zones: Mi.def.stages.map((s) => s.anchors[0].id), entry: Mi.def.entry.id, exit: Mi.def.exit.id, valid: G.missionCheck(), fb: !!Mi.def.fallbackUsed, lines0: Mi.lines().map((l) => l.state).join(',') };
        G.enemies.forEach((e) => { e.dead = true; e.found = true; });
        let guard = 0;
        while (!Mi.complete && G.state === 'playing' && guard++ < 12) {
          const s = Mi.stage;
          if (s.civ) { const c = s.civRef; if (c.state === 'flee') sim(25, () => c.state === 'flee'); P.pos.set(c.pos.x + 1.4, c.pos.y, c.pos.z); P.yaw = Math.PI / 2; sim(0.6); key('KeyE', true); sim(2); key('KeyE', false); log.civ = c.state; }
          else for (const it of Mi.items.filter((x) => x.stage === Mi.i)) { if (Mi.stage !== s) break; const a = s.anchors[it.k].stand; P.pos.set(a[0], W.nav.height(a[0], a[1]), a[1]); sim(0.1); log.prompt = document.getElementById('prompt').textContent; if (s.hold) { key('KeyE', true); sim(s.hold + 0.4); key('KeyE', false); } else { G.inp.e = true; sim(0.1); } }
        }
        log.done = Mi.complete; log.sec = G.sec.level; log.comms = G.sec.commsDown; log.panel = G.sec.panelDown; log.power = !!W.powerOff;
        if (Mi.civ && !opts.noEscort) { // the escort must actually follow over a real route
          const c = Mi.civ, a = Mi.def.stages[0].anchors[0].posts[0]; P.pos.set(a[0], W.nav.height(a[0], a[1]), a[1]); sim(30, () => Math.hypot(c.pos.x - P.pos.x, c.pos.z - P.pos.z) > 3); log.followed = +Math.hypot(c.pos.x - P.pos.x, c.pos.z - P.pos.z).toFixed(1);
          const ex = Mi.def.exit.pos; P.pos.set(ex[0], 0, ex[2]); sim(0.3); log.blockedWithoutCiv = G.state === 'playing'; c.pos.set(ex[0] + 1.5, 0, ex[2]); c.path = null; sim(0.3);
        } else { const ex = Mi.def.exit.pos; P.pos.set(ex[0], 0, ex[2]); sim(0.3); }
        log.state = G.state; log.end = document.getElementById('endt').textContent;
        return log;
      };
    });
    // every mission type x supported length x both maps, several seeds: valid, right number of objectives, completes
    const combos = { intel: ['quick', 'standard', 'extended'], capture: ['quick', 'standard', 'extended'], sabotage: ['quick', 'standard', 'extended'], rescue: ['quick', 'standard', 'extended'], multi: ['standard', 'extended'] };
    const n = { quick: 1, standard: 2, extended: 3 }; let bad = [], count = 0, fb = 0; const kinds = new Set();
    for (const map of ['forest', 'warehouse']) for (const type in combos) for (const length of combos[type]) for (const seed of [11, 202]) {
      await start(map, 'recruit', { mission: type, length, seed });
      const r = await p.evaluate(() => playMission());
      count++; r.stages.forEach((k) => kinds.add(k)); if (r.fb) fb++;
      const ok = r.valid === null && r.stages.length === n[length] && new Set(r.zones).size === r.zones.length && r.done && r.state === 'won' && (!('followed' in r) || (r.followed < 4 && r.blockedWithoutCiv));
      if (!ok) bad.push({ map, type, length, seed, r });
    }
    check(`missions: ${count} generated missions (all types, lengths, both maps) are valid and completable`, bad.length === 0, bad.slice(0, 2));
    check('missions: no fallback layouts needed; every stage kind appears', fb === 0 && ['retrieve', 'hack', 'keycard', 'search', 'sab:comms', 'sab:security', 'sab:power', 'sab:charge', 'capture', 'rescue'].every((k) => kinds.has(k)), [fb, [...kinds]]);
    // only valid type/length combinations are offered
    const menu = await p.evaluate(() => { const G = window.__SP; document.getElementById('emenu').click(); document.querySelector('[data-tab="play"]').click(); document.querySelector('.opts[data-k="mission"] [data-v="multi"]').click(); const a = [...document.querySelectorAll('.opts[data-k="length"] .opt')].map((o) => o.dataset.v); document.querySelector('.opts[data-k="mission"] [data-v="capture"]').click(); return [a, [...document.querySelectorAll('.opts[data-k="length"] .opt')].map((o) => o.dataset.v), document.querySelectorAll('.opts[data-k="mission"] .opt').length]; });
    check('missions: menu offers 5 mission types and only valid lengths', menu[2] === 5 && menu[0].join() === 'standard,extended' && menu[1].join() === 'quick,standard,extended', menu);
    // anti-repetition: same map + mission type replayed with fresh random seeds
    for (const map of ['forest', 'warehouse']) {
      const zones = [], entries = [];
      await p.evaluate(() => { localStorage.removeItem('sp21_history'); window.__SP.hist = {}; });
      for (let i = 0; i < 7; i++) { await start(map, 'recruit', { mission: 'intel', length: 'quick' }); const r = await p.evaluate(() => { const d = window.__SP.mission.def; return [d.primary.id, d.entry.id, d.exit.id]; }); zones.push(r[0]); entries.push(r[1]); }
      const immediate = zones.some((z, i) => i && z === zones[i - 1]), firstRepeat = zones.findIndex((z, i) => zones.indexOf(z) < i), entryRepeat = entries.some((e, i) => i && e === entries[i - 1]);
      check(`missions/${map}: objective zone never repeats back-to-back and rotates through zones`, !immediate && (firstRepeat === -1 || firstRepeat >= 4) && new Set(zones).size >= 4 && !entryRepeat, [zones, entries]);
    }
    // deterministic seeds reproduce the same layout
    const same = [];
    for (let i = 0; i < 2; i++) { await p.evaluate(() => { window.__SP.hist = {}; }); await start('warehouse', 'recruit', { mission: 'multi', length: 'extended', seed: 777 }); same.push(await p.evaluate(() => { const d = window.__SP.mission.def; return d.stages.map((s) => s.kind + '@' + s.anchors.map((a) => a.id).join('+')).join('>') + '|' + d.entry.id + '|' + d.exit.id; })); }
    check('missions: a seed reproduces the same mission', same[0] === same[1], same[0]);
    // HVT: relocates when the site is alerted, surrenders up close, killing him fails the mission
    await start('warehouse', 'recruit', { mission: 'capture', length: 'quick', seed: 5 });
    const hv = await p.evaluate(() => {
      const G = window.__SP, P = G.player, c = G.mission.civ, o = {}; G.enemies.forEach((e) => { e.dead = true; e.found = true; }); P.pos.set(44, 0, 28);
      o.kind = c.kind; o.start = c.state; const p0 = [c.pos.x, c.pos.z]; G.sec.level = 2; sim(30, () => c.state !== 'cower'); o.afterAlert = c.state; o.movedDist = +Math.hypot(c.pos.x - p0[0], c.pos.z - p0[1]).toFixed(0);
      o.markerStillAtOld = Math.hypot(G.mission.focus()[0] - c.pos.x, G.mission.focus()[2] - c.pos.z) > 10; // no live tracking of the target
      P.pos.set(c.pos.x + 1.5, c.pos.y, c.pos.z); sim(0.5); o.near = c.state; c.damage(500); sim(0.2); o.state = G.state; o.sub = document.getElementById('ends').textContent;
      return o;
    });
    check('capture: the target relocates on alert, surrenders up close, and must be taken alive', hv.kind === 'hvt' && hv.start === 'idle' && hv.afterAlert === 'cower' && hv.movedDist > 10 && hv.markerStillAtOld && hv.near === 'surrender' && hv.state === 'dead' && /TARGET WAS KILLED/.test(hv.sub), hv);
    await start('forest', 'recruit', { mission: 'rescue', length: 'quick', seed: 9 });
    const hs = await p.evaluate(() => { const G = window.__SP, c = G.mission.civ, o = { kind: c.kind, start: c.state }; const guards = G.enemies.filter((e) => e.duty === 'objective' && Math.hypot(e.pos.x - c.pos.x, e.pos.z - c.pos.z) < 16).length; o.guards = guards; c.damage(500); sim(0.2); o.state = G.state; o.sub = document.getElementById('ends').textContent; return o; });
    check('rescue: the hostage is guarded from the start and must survive', hs.kind === 'hostage' && hs.start === 'held' && hs.guards >= 2 && hs.state === 'dead' && /HOSTAGE WAS KILLED/.test(hs.sub), hs);
    // mission-aware security: the detail follows a relocating HVT; exits are sealed during the escort
    await start('warehouse', 'tactical', { mission: 'capture', length: 'quick', seed: 21 });
    const ms = await p.evaluate(() => {
      const G = window.__SP, P = G.player, c = G.mission.civ, o = {}; calm(); P.pos.set(G.mission.def.entry.x, 0, G.mission.def.entry.z); P.hp = 1e6;
      const fb = G.mission.def.fallback; G.sec.level = 2; G.enemies.forEach((e) => { e.alerted = true; }); sim(45, () => c.state !== 'cower');
      o.detailNearNewSpot = G.enemies.filter((e) => !e.dead && e.duty === 'objective' && Math.hypot(e.pos.x - fb.at[0], e.pos.z - fb.at[2]) < 16).length; o.civ = c.state;
      P.pos.set(c.pos.x + 1.4, c.pos.y, c.pos.z); sim(0.6); key('KeyE', true); sim(2); key('KeyE', false); o.follow = c.state; sim(25);
      o.exitGuards = G.world.exits.filter((x) => G.enemies.some((e) => !e.dead && Math.hypot(e.pos.x - x.pos[0], e.pos.z - x.pos[2]) < 12)).length; o.exits = G.world.exits.length;
      return o;
    });
    check('security: the protection detail relocates with the HVT and exits are sealed during the escort', ms.civ === 'cower' && ms.detailNearNewSpot >= 2 && ms.follow === 'follow' && ms.exitGuards >= 2, ms);
    // sabotage changes how security works
    await start('warehouse', 'tactical', { mission: 'sabotage', length: 'extended', seed: 3 });
    const sb = await p.evaluate(() => {
      const G = window.__SP, P = G.player, Mi = G.mission, W = G.world, o = { plan: Mi.def.plan }; calm(); const l0 = W.lights[0].intensity, v0 = W.env.viewRange;
      const doStage = () => { const s = Mi.stage, a = s.anchors[0].stand; P.pos.set(a[0], W.nav.height(a[0], a[1]), a[1]); sim(0.1); key('KeyE', true); sim(s.hold + 0.4); key('KeyE', false); return s.kind; };
      P.hp = 1e6; const done = []; while (!Mi.complete) done.push(doStage()); o.done = done;
      const e = G.enemies.find((x) => !x.dead); e.lkp.set(0, 0, 0); G.sec.level = 0; G.sec.radio(e, 'contact', 0, 0); o.levelAfterRadio = G.sec.level; o.comms = G.sec.commsDown;
      o.lights = [l0, W.lights[0].intensity]; o.view = [v0, W.env.viewRange]; o.panel = G.sec.panelDown;
      P.pos.set(44, 0, 28); sim(14); o.secAfterCharge = G.sec.level; o.lines = Mi.lines().map((l) => l.state).join(',');
      return o;
    });
    const hasC = sb.plan.includes('sab:comms'), hasP = sb.plan.includes('sab:power');
    check('sabotage: comms down blocks radio reports; power down darkens the site; charge detonates and alerts', sb.done.length === 3 && (!hasC || (sb.comms && sb.levelAfterRadio === 0)) && (!hasP || (sb.lights[1] < sb.lights[0] * 0.3 && sb.view[1] < sb.view[0])) && sb.secAfterCharge >= 2 && sb.lines === 'done,done,done,now', sb);
    // classic flow: death, restart, pause
    await start('warehouse', 'tactical');
    const d = await p.evaluate(() => {
      const G = window.__SP, P = G.player, o = {}; const e = G.enemies[0];
      o.hud = document.getElementById('objt').textContent.length > 10;
      P.damage(120, e.pos, { name: e.type.name, dist: 12, x: e.pos.x, z: e.pos.z }); sim(0.1); o.state = G.state; o.sub = document.getElementById('ends').textContent;
      document.getElementById('again').click(); o.restart = [G.state, G.player.hp, G.enemies.length];
      press('Escape'); o.paused = G.state; document.getElementById('resume').click(); o.resumed = G.state;
      return o;
    });
    check('mission: death screen explains the cause; restart, pause and resume work', d.hud && d.state === 'dead' && /KILLED BY/.test(d.sub) && d.restart[0] === 'playing' && d.restart[1] === 100 && d.paused === 'paused' && d.resumed === 'playing', d);
  });

  await run('range', async () => {
    await p.evaluate(() => { const G = window.__SP; if (G.state === 'playing') press('Escape'); if (G.state === 'paused') document.getElementById('pmenu').click(); else if (G.state !== 'menu') document.getElementById('emenu').click();
      const L = G.loadout; L.primary = 'm4'; L.secondary = 'pistol'; Object.assign(L.att.m4, { optic: 'iron', muzzle: false, grip: false, laser: false }); document.getElementById('train').click(); });
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, R = G.range, o = {}; const s = R.s;
      o.boot = [G.state, !!R, G.world.name, R.targets.length, G.enemies.length, G.sec.level];
      const aim = (x, z, y) => { const dx = x - P.pos.x, dz = z - P.pos.z; P.yaw = Math.atan2(-dx, -dz); P.pitch = Math.atan2(y - (P.pos.y + 1.62), Math.hypot(dx, dz)); };
      const shot = (x, z, y) => { aim(x, z, y); G.inp.rmb = true; sim(0.5); aim(x, z, y); P.swT2 = 0; sim(0.03); P.slot.mag = Math.max(1, P.slot.mag); G.inp.lmb = true; G.inp.lmbPressed = true; sim(0.04); G.inp.lmb = false; sim(0.3); return R.last && { d: Math.round(R.last.dist), z: R.last.zone, dmg: Math.round(R.last.dmg) }; };
      P.pos.set(-2.5, 0, 6); o.body = shot(-2.5, -10, 1.0); o.afterBody = [s.shots, s.hits, s.heads]; o.head = shot(-2.5, -10, 1.6); o.afterHead = [s.shots, s.hits, s.heads];
      // cover lane: steel plate and fence stop the round, the target behind is untouched
      P.pos.set(-11, 0, 6); const h0 = s.hits; shot(-11, -18, 1.0); shot(-11, -32, 1.0); o.covered = [s.hits - h0, R.targets.filter((t) => t.note && !t.pit).every((t) => t.flash <= 0 && t.dmg === 0)]; G.inp.rmb = false; sim(0.4);
      // weapon bench: cycle to the sniper, zoom in and hit the 100 m target
      let guard = 0; while (P.slots[0].id !== 'sniper' && guard++ < 6) { press('Digit5'); sim(0.7); } o.bench = P.slots[0].id; const z0 = P.slots[0].st.optic.name; press('Digit7'); sim(0.2); press('Digit8'); sim(0.2); o.optic = [z0, P.slots[0].st.optic.name, P.slots[0].st.sup]; press('Digit7'); sim(0.2);
      P.pos.set(0.4, 0, 6); P.crouchToggle = true; sim(0.5); aim(0.4, -100, 1.0); G.inp.rmb = true; sim(0.8); for (let i = 0; i < 24; i++) P.zoomStep(1); o.zoom = P.slot.zoom; const hh = s.hits; const far = shot(0.4, -100, 1.0); o.far = [far, s.hits - hh]; G.inp.rmb = false; P.crouchToggle = false; sim(0.5);
      // moving target really moves, its collision follows
      const mv = R.targets.find((t) => t.move), x0 = mv.x; sim(1.5); o.moving = [Math.abs(mv.x - x0) > 0.5, Math.abs(mv.cols[0].x0 + 0.25 - mv.x) < 1e-6];
      // grenade pit: open targets fall, the one behind the wall stays up
      const V = G.v1.constructor; P.pos.set(0, 0, 6); G.spawnGrenade('frag', new V(10.3, 0.2, -12.8), new V(0, 0, 0), 'player'); sim(3.2); const pit = R.targets.filter((t) => t.pit); o.pit = [pit.filter((t) => !t.note && t.down > 0).length, pit.find((t) => t.note).down > 0, R.msg];
      // unlimited supplies and no way to fail
      P.slots[0].reserve = 0; P.inv.frag = 0; sim(0.2); o.supply = [P.slots[0].reserve > 0, P.inv.frag]; P.damage(500, P.pos, {}); sim(0.2); o.alive = [G.state, P.hp];
      o.dummies = R.dummies.length; const dm = R.dummies[0]; dm.damage(999, P.pos, 'torso'); sim(4); o.respawn = R.dummies.length === 2 && R.dummies.every((d) => !d.dead);
      press('Escape'); document.getElementById('pmenu').click(); o.menu = G.state;
      return o;
    });
    check('range: loads from the menu with targets and passive dummies, no security response', o.boot[0] === 'playing' && o.boot[1] && o.boot[2] === 'TRAINING RANGE' && o.boot[3] >= 19 && o.boot[4] === 2 && o.boot[5] === 0, o.boot);
    check('range: hits register with distance, zone and damage; accuracy readout counts them', o.body && o.body.z === 'body' && o.body.d >= 15 && o.body.d <= 17 && o.body.dmg === 28 && o.head && o.head.z === 'head' && o.head.dmg === 70 && o.afterHead.join() === '2,2,1', [o.body, o.head, o.afterHead]);
    check('range: steel plate and fence stop rounds before the targets behind them', o.covered[0] === 0 && o.covered[1], o.covered);
    check('range: weapon bench cycles weapon, optic and suppressor; 10x sniper shot hits at 100 m', o.bench === 'sniper' && o.optic[0] !== o.optic[1] && o.optic[2] === true && o.zoom === 10 && o.far[1] === 1 && o.far[0].d > 100, [o.bench, o.optic, o.zoom, o.far]);
    check('range: moving targets move with their collision; grenade pit respects cover', o.moving[0] && o.moving[1] && o.pit[0] >= 2 && o.pit[1] === false, [o.moving, o.pit]);
    check('range: unlimited supplies, no failure state, dummies respawn, returns to the menu', o.supply[0] && o.supply[1] === 3 && o.alive[0] === 'playing' && o.alive[1] === 100 && o.respawn && o.menu === 'menu', [o.supply, o.alive, o.respawn, o.menu]);
    await start('warehouse', 'tactical');
    check('range: a normal mission starts afterwards', await p.evaluate(() => { const G = window.__SP; return G.state === 'playing' && !G.range && G.enemies.length === 10; }));
  });

  await run('stability', async () => {
    const mem = [];
    for (let i = 0; i < 4; i++) { await start(i % 2 ? 'forest' : 'warehouse', 'elite'); mem.push(await p.evaluate(() => { const G = window.__SP; sim(3); let ms = 0; const t0 = performance.now(); for (let k = 0; k < 300; k++) G.step(1 / 60); ms = (performance.now() - t0) / 300; return { ms: +ms.toFixed(2), heap: performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1048576) : 0 }; })); }
    check('stability: 4 consecutive missions, simulation step stays cheap', mem.every((m) => m.ms < 6), mem);
  });

  check('no uncaught runtime errors', errs.length === 0, errs.slice(0, 4).join(' || '));
  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
  await b.close(); process.exit(failed.length ? 1 : 0);
})();
