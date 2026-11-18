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
  const helpers = () => p.evaluate(() => {
    const G = window.__SP;
    window.sim = (sec, fn) => { const n = Math.round(sec * 60); for (let i = 0; i < n && G.state === 'playing'; i++) { if (fn && fn(i) === false) break; G.step(1 / 60); } };
    window.key = (c, d) => { G.inp.k[c] = d; };
    window.press = (c) => window.dispatchEvent(new KeyboardEvent('keydown', { code: c }));
    window.calm = () => G.enemies.forEach((e) => { e.percT = 1e9; e.los = false; e.detect = 0; }); // freeze perception for isolated mechanics tests
    window.solo = (i = 0) => { const e = G.enemies[i]; G.enemies.forEach((o) => { if (o !== e) { o.dead = true; o.found = true; o.ch.root.visible = false; } }); return e; };
  });
  await helpers();
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
    check('menu: PLAY / LOADOUT / MULTIPLAYER / TRAINING / SETTINGS / CONTROLS tabs', m.tabs === 6);
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
      e.hp = 100; e.set('PATROL'); e.wantCrouch = false; e.waitT = 1e9; e.release(); place(40, 0, 0); calm(); e.stun = 0; sim(0.6);
      // aim and fire in the same frame: the guard's idle / flinch animation moves his head
      sim(0.8); e.ch.refresh(); const h = e.ch.eye(new G.v1.constructor()), c = G.camera.position; P.pitch = Math.atan2(h.y + 0.02 - c.y, Math.hypot(h.x - c.x, h.z - c.z)); P.yaw = Math.atan2(-(h.x - c.x), -(h.z - c.z)); P.ry = P.rp = 0; G.inp.lmbPressed = true; G.inp.lmb = true; G.step(1 / 60); G.inp.lmb = false; sim(0.1); o.head = e.dead ? 'kill' : 100 - e.hp; G.inp.rmb = false;
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
      put(0, 20); e.hp = 5000; P.pos.set(0, 0, 25); o.clearRifle = 5000 - e.hp > 0; shootAt(0, 3); o.clearRifle = e.hp < 5000; put(0, 20); e.stun = 9; e.hp = 5000; P.pos.set(0, 0, 23.5); const sm0 = P.slots[1].mag, sh0 = G.stats.shots; shootAt(1, 2); o.clearShotgun = e.hp < 5000; { const r0 = G.trace(G.camera.position, P.fwd, 60, 'player'), m = P.muzzleW, c = G.camera.position; o.dbg2 = [r0.kind, +r0.d.toFixed(2), r0.part, [m.x - c.x, m.y - c.y, m.z - c.z].map((v) => +v.toFixed(2)), [P.pos.x, P.pos.z, P.yaw, P.pitch].map((v) => +v.toFixed(2)), [e.pos.x, e.pos.z], e.ch.root.position.z]; } o.dbg = [P.cur, sm0, P.slots[1].mag, G.stats.shots - sh0, +P.pumpT.toFixed(2), +P.fireT.toFixed(2), P.reloading, !!P.use, P.swT, e.hp]; e.stun = 0; e.hp = 100;
      // 5. muzzle obstruction: the camera sees past a corner but the muzzle is behind it -> the round hits the corner
      put(0, 20); e.hp = 100; P.pos.set(0, 0, 28); press('Digit1'); sim(0.7); P.yaw = 0; P.pitch = -0.065; sim(0.3);
      const m = P.muzzleW, col = { x0: m.x - 0.06, x1: m.x + 0.5, y0: 0, y1: 3, z0: m.z - 0.5, z1: m.z + 0.12, solid: false, sight: false, bullet: true }; G.world.colliders.push(col);
      const ct = G.trace(G.camera.position, P.fwd, 30, 'player'), camClear = ct.kind === 'enemy' || !ct.wh || !!ct.wh.c.ground; P.slot.mag = 5; G.inp.lmb = true; G.inp.lmbPressed = true; sim(0.05); G.inp.lmb = false; sim(0.5);
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
      const [a, b2] = G.enemies.filter((e) => e.duty === 'patrol'); a.pos.set(41, 0, -19); a.sync(); a.damage(999, P.pos, 'torso'); b2.release(); b2.pos.set(41, 0, -12.5); b2.yaw = b2.baseYaw = 0; b2.path = null; b2.waitT = 6; b2.state = 'PATROL'; b2.sync(); b2.ch.refresh();
      b2.pr = { ...b2.pr, radioFail: 0 }; // Tactical radio calls fail 5 % of the time by design; this check is about the report path, so the roll is pinned (it made the suite fail ~1 run in 20)
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

  await run('grid', async () => {
    for (const map of ['forest', 'warehouse']) {
      await start(map, 'tactical');
      const o = await p.evaluate(() => {
        const G = window.__SP, W = G.world, cols = W.colliders, flat = cols.slice(), b = W.bounds; let s = 12345;
        const rnd = () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff), ray = window.__rayBoxes;
        let n = 0, bad = 0, hits = 0, ties = 0; window.__gbad = null; const flags = ['sight', 'bullet', 'solid'];
        for (let i = 0; i < 20000; i++) {
          const ox = b.x0 - 5 + rnd() * (b.x1 - b.x0 + 10), oz = b.z0 - 5 + rnd() * (b.z1 - b.z0 + 10), oy = rnd() * 6;
          let dx = rnd() * 2 - 1, dy = (rnd() * 2 - 1) * 0.4, dz = rnd() * 2 - 1; if (i % 50 === 0) { dx = 0; dz = 0; dy = -1; } const l = Math.hypot(dx, dy, dz); dx /= l; dy /= l; dz /= l;
          const max = rnd() < 0.3 ? 200 : 1 + rnd() * 40, f = flags[i % 3];
          const a = ray(cols, ox, oy, oz, dx, dy, dz, max, f), c = ray(flat, ox, oy, oz, dx, dy, dz, max, f); n++;
          if (!!a !== !!c || (a && Math.abs(a.d - c.d) > 1e-9)) { bad++; if (!window.__gbad) window.__gbad = { o: [ox, oy, oz], d: [dx, dy, dz], max, f, a: a && [a.d, a.c.x0, a.c.z0], c: c && [c.d, c.c.x0, c.c.z0] }; } else if (a && a.c !== c.c) ties++; if (c) hits++; // equal distance on two boxes = the same impact point
        }
        // dynamic tail still works: a box added after the grid was built
        const extra = { x0: 0, x1: 1, y0: 0, y1: 3, z0: 30, z1: 31, solid: true, sight: true, bullet: true }; cols.push(extra);
        let tail = true; for (let i = 0; i < 400; i++) { const ox = b.x0 + rnd() * (b.x1 - b.x0), oz = b.z0 + rnd() * (b.z1 - b.z0), A = Math.atan2(0.5 - ox, 30.5 - oz); const r1 = ray(cols, ox, 1, oz, Math.sin(A), 0, Math.cos(A), 120, 'bullet'), r2 = ray(cols.slice(), ox, 1, oz, Math.sin(A), 0, Math.cos(A), 120, 'bullet'); if ((r1 && r1.d) !== (r2 && r2.d)) tail = false; } cols.splice(cols.indexOf(extra), 1);
        // the player collision query agrees with brute force
        let qbad = 0; for (let i = 0; i < 4000; i++) { const x = b.x0 + rnd() * (b.x1 - b.x0), z = b.z0 + rnd() * (b.z1 - b.z0), y = rnd() * 2; const h1 = G.player.hits(x, y, z), h2 = flat.find((c) => c.solid && x + 0.34 > c.x0 && x - 0.34 < c.x1 && z + 0.34 > c.z0 && z - 0.34 < c.z1 && y < c.y1 - 0.001 && y + G.player.height > c.y0) || null; if (!!h1 !== !!h2) qbad++; }
        const t0 = performance.now(); for (let i = 0; i < 20000; i++) ray(cols, rnd() * 80 - 40, 1.5, rnd() * 80 - 40, Math.sin(i), 0, Math.cos(i), 40, 'sight'); const tg = performance.now() - t0;
        const t1 = performance.now(); for (let i = 0; i < 20000; i++) ray(flat, rnd() * 80 - 40, 1.5, rnd() * 80 - 40, Math.sin(i), 0, Math.cos(i), 40, 'sight'); const tb = performance.now() - t1;
        return { n, bad, ties, hits, tail, qbad, speedup: +(tb / tg).toFixed(1), first: window.__gbad };
      });
      check(`grid/${map}: grid raycasts and collision queries are identical to brute force, and faster`, o.bad === 0 && o.hits > 2000 && o.tail && o.qbad === 0 && o.speedup > 1.5, o);
    }
  });

  await run('pacing', async () => {
    await start('forest', 'tactical');
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, pc = G.pacing, o = {}; calm();
      o.inactiveInTests = !pc.active; pc.active = true; G.adaptive = true; G.fpsTarget = '60'; pc.setScale(1); pc.gpuMs = -1; pc.refreshMs = 16.7; pc.ceil = 1; pc.ceilT = 0; pc.recent = 0; const s0 = pc.scale; const gpu0 = pc.gpuMs;
      const feed = (ms, n) => { for (let i = 0; i < n; i++) pc.feed(ms); };
      feed(16.7, 300); o.vsync60 = pc.scale; // a healthy vsync-locked 60 Hz display: nothing changes
      feed(33, 120); o.down = pc.scale; o.ema = +pc.ema.toFixed(1);
      feed(16.7, 600); o.recoveredOnVsync = pc.scale; // the V2.1 controller could never recover here (needed < 13 ms)
      feed(80, 600); o.floor = pc.scale; feed(900, 60); o.ignoresHitches = pc.ema < 100;
      feed(16.7, 1500); o.restored = pc.scale;
      // oscillation guard: raising the scale makes frames late again -> that level becomes a ceiling for a while
      feed(16.7, 10); pc.setScale(0.8); feed(16.7, 300); const up = pc.scale; feed(30, 45); const back = pc.scale; feed(16.7, 400); o.ceiling = [up, back, pc.scale, +pc.ceil.toFixed(1)];
      // high-refresh target follows the display estimate
      pc.refreshMs = 16.7; feed(6.94, 400); G.fpsTarget = 'refresh'; o.refreshTarget = +pc.targetMs().toFixed(2); o.refreshHz = Math.round(1000 / pc.refreshMs); G.fpsTarget = '60';
      // a slow game must not be mistaken for a slow display
      feed(33, 600); o.slowDisplayEst = +pc.refreshMs.toFixed(1);
      // CPU-bound: frames are late but the GPU has headroom -> resolution stays (it would not help)
      pc.setScale(1); pc.ceil = 1; pc.gpuMs = 4; feed(33, 300); o.cpuBound = pc.scale; pc.gpuMs = 15; feed(33, 120); o.gpuBound = pc.scale; pc.gpuMs = gpu0; pc.setScale(1);
      G.adaptive = false; pc.feed(40); o.offRespected = pc.scale === 1; G.adaptive = true; pc.active = false; o.s0 = s0;
      // stutter detection and log
      const n0 = pc.stutters; feed(16.7, 120); pc.feed(70); o.stutter = [pc.stutters - n0, pc.log[0] && Math.round(pc.log[0].ms)];
      const st = pc.stats(); o.stats = [Math.round(st.avg), Math.round(st.max), Math.round(st.low1)];
      // mouse look does not depend on the frame time
      const look = (dt) => { P.yaw = 0; G.inp.mx = 200; G.step(dt); return P.yaw; }; o.look = [look(0.05), look(0.005)].map((v) => +v.toFixed(5));
      // overlay toggle with F3 and content
      press('F3'); o.overlay = getComputedStyle(document.getElementById('perfov')).display; o.ovText = document.getElementById('perfov').textContent; press('F3'); o.overlayOff = getComputedStyle(document.getElementById('perfov')).display;
      // raw-input pointer lock falls back when the browser rejects the option
      const c = document.getElementById('c'), orig = c.requestPointerLock, calls = []; G.rawInput = true;
      c.requestPointerLock = (opt) => { calls.push(opt ? 'raw' : 'plain'); return opt ? Promise.reject(new DOMException('no', 'NotSupportedError')) : Promise.resolve(); };
      G.lock(); return new Promise((res) => setTimeout(() => { c.requestPointerLock = orig; o.lockCalls = calls; res(o); }, 50));
    });
    const src = require('fs').readFileSync(require('path').resolve(__dirname, '..', 'src', 'character.js'), 'utf8'), body = src.slice(src.indexOf('  update(dt, s) {'), src.indexOf('  // world-space queries'));
    check('pacing: steady at vsync, drops under load, recovers on a vsync-locked display, never below 60 %, ignores hitches', o.inactiveInTests && o.s0 === 1 && o.vsync60 === 1 && o.down < 1 && o.recoveredOnVsync > o.down && o.floor === 0.6 && o.restored === 1 && o.ignoresHitches && o.offRespected, o);
    check('pacing: oscillation guard, refresh-rate target, slow game not a slow display, CPU-bound slowdowns keep full resolution', o.ceiling[0] === 0.9 && o.ceiling[1] === 0.8 && o.ceiling[2] === 0.8 && o.ceiling[3] === 0.8 && o.refreshTarget < 7.5 && o.refreshHz >= 140 && o.slowDisplayEst < 20 && o.cpuBound === 1 && o.gpuBound < 1, [o.ceiling, o.refreshTarget, o.refreshHz, o.slowDisplayEst, o.cpuBound, o.gpuBound]);
    check('pacing: stutters detected and logged; stats and F3 overlay show frame times, CPU split and resolution', o.stutter[0] === 1 && o.stutter[1] === 70 && o.overlay === 'block' && o.overlayOff === 'none' && /p99/.test(o.ovText) && /CPU ms/.test(o.ovText) && /GPU ms/.test(o.ovText) && /RES \d+×\d+/.test(o.ovText) && /STUTTERS/.test(o.ovText), [o.stutter, o.stats, o.ovText.slice(0, 200)]);
    check('input: mouse look is independent of frame time; raw input falls back to plain pointer lock', o.look[0] === o.look[1] && o.look[0] !== 0 && o.lockCalls.join() === 'raw,plain', [o.look, o.lockCalls]);
    check('pacing: no per-frame allocations in Character.update()', !/new THREE\./.test(body) && !/= \{\}|\[\.\.\./.test(body), body.match(/new THREE\.\w+/g));
  });

  await run('latency', async () => {
    await start('warehouse', 'tactical', { primary: 'ak' });
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, o = {}; const e = solo(0); calm();
      e.release(); e.pos.set(40, 0, 0); e.yaw = e.baseYaw = 0; e.path = null; e.waitT = 1e9; e.set('PATROL'); e.sync(); e.ch.refresh();
      P.pos.set(40, 0, 12); P.yaw = 1.2; P.pitch = 0; G.inp.rmb = true; for (let i = 0; i < 40; i++) G.step(1 / 60); // aiming well away from the target
      // in ONE frame: the mouse turns onto the target and the trigger is pulled. The round must go where the view now points.
      const c = G.camera.position, want = Math.atan2(-(e.pos.x - c.x), -(e.pos.z - c.z)), sens = 0.0022 * G.sens * (Math.tan((P.adsFov() * Math.PI) / 360) / Math.tan((G.fov * Math.PI) / 360));
      G.inp.mx = -(want - P.yaw) / sens; P.pitch = Math.atan2(1.0 - c.y, 12); P.ry = P.rp = 0;
      G.inp.lmb = true; G.inp.lmbPressed = true; G.step(1 / 60); G.inp.lmb = false; G.inp.rmb = false;
      o.hit = 100 - e.hp; o.yawErr = +Math.abs(P.yaw - want).toFixed(4);
      return o;
    });
    check('input latency: a shot fired in the same frame as a mouse flick uses the new view direction', o.hit > 0 && o.yawErr < 0.01, o);
  });

  await run('comfort', async () => {
    await start('warehouse', 'tactical');
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, cam = G.camera, o = {}; calm();
      // movement is the same at 30 / 60 / 144 Hz (sub-stepped, exact integration)
      const mv = {};
      for (const hz of [30, 60, 144]) {
        const dt = 1 / hz, run = (sec, fn) => { for (let i = 0; i < Math.round(sec * hz); i++) { if (fn) fn(); G.step(dt); } };
        P.pos.set(34, 0, 0); P.vel.set(0, 0, 0); P.yaw = 0; run(0.3); const z0 = P.pos.z; G.inp.k.KeyW = true; run(1); const walk = z0 - P.pos.z; G.inp.k.KeyW = false; const z1 = P.pos.z; run(1); const stop = z1 - P.pos.z;
        P.pos.set(34, 0, 0); P.vel.set(0, 0, 0); run(0.3); G.inp.jump = true; let peak = 0; run(1.2, () => { peak = Math.max(peak, P.pos.y); });
        mv[hz] = [+walk.toFixed(3), +stop.toFixed(3), +peak.toFixed(3)];
      }
      o.mv = mv;
      // camera motion setting: walking with 0 % keeps the camera height steady; default has a small bob; never lateral
      const walkCam = (cmo) => { G.camMotion = cmo; P.pos.set(34, 0, 0); P.yaw = 0; G.inp.k.KeyW = true; let ymin = 9, ymax = -9, lat = 0; for (let i = 0; i < 120; i++) { G.step(1 / 60); if (i > 30) { const y = cam.position.y; ymin = Math.min(ymin, y); ymax = Math.max(ymax, y); lat = Math.max(lat, Math.abs(cam.position.x - P.pos.x - P.leanX)); } } G.inp.k.KeyW = false; G.step(0.3); return [+(ymax - ymin).toFixed(4), +lat.toFixed(4)]; };
      o.off = walkCam(0); o.def = walkCam(0.5); o.full = walkCam(1);
      // sprint FOV kick scales; aiming FOV does not
      const sprintFov = (cmo) => { G.camMotion = cmo; P.pos.set(34, 0, 0); P.yaw = 0; G.inp.k.KeyW = true; G.inp.k.ShiftLeft = true; for (let i = 0; i < 60; i++) G.step(1 / 60); const f = cam.fov; G.inp.k.KeyW = G.inp.k.ShiftLeft = false; G.step(0.5); return +(f - G.fov).toFixed(2); };
      o.sprint = [sprintFov(0), sprintFov(1)]; G.camMotion = 0.5;
      // the camera never smooths mouse look: rotation equals the integrated input immediately
      P.yaw = 0; P.pitch = 0; G.inp.mx = 137; G.step(1 / 60); o.lookExact = Math.abs(cam.rotation.y - P.yaw - P.ry) < 1e-9 && Math.abs(P.yaw + 137 * 0.0022 * G.sens) < 1e-9;
      // shadow frustum is texel-snapped (stable shadow edges)
      const L = G.world.moon, sc = L.shadow.camera, texel = (sc.right - sc.left) / L.shadow.mapSize.x; G.followShadow(L, G.world.moonDir, { x: 3.123, z: -7.77 });
      const F = G.world.moonDir.clone().negate(), R = new F.constructor(0, 1, 0).cross(F).normalize(), U = F.clone().cross(R).normalize(), tp = L.target.position;
      o.snap = [Math.abs(tp.dot(R) / texel - Math.round(tp.dot(R) / texel)) < 1e-4, Math.abs(tp.dot(U) / texel - Math.round(tp.dot(U) / texel)) < 1e-4];
      return o;
    });
    const m = o.mv; const same = (i, tol) => Math.max(m[30][i], m[60][i], m[144][i]) - Math.min(m[30][i], m[60][i], m[144][i]) <= tol;
    check('movement: walk distance, stopping distance and jump height are the same at 30 / 60 / 144 Hz', same(0, 0.002) && same(1, 0.002) && same(2, 0.01) && Math.abs(m[60][2] - 1.037) < 0.01, m);
    check('comfort: camera motion 0 % removes head bob; default bob is small; the camera never sways sideways', o.off[0] < 0.002 && o.def[0] > 0.01 && o.def[0] < o.full[0] && o.full[1] < 0.001 && o.def[1] < 0.001, [o.off, o.def, o.full]);
    check('comfort: sprint FOV kick follows the setting; mouse look is applied unsmoothed', o.sprint[0] === 0 && o.sprint[1] > 3 && o.lookExact, [o.sprint, o.lookExact]);
    check('rendering: shadow frustum is snapped to whole shadow-map texels', o.snap[0] && o.snap[1], o.snap);
  });

  await run('controls', async () => {
    // ---- aim: hip / ADS / scope sensitivity, transitions, multipliers, vertical, variable zoom, weapon-camera alignment
    await start('warehouse', 'tactical', { primary: 'sniper', secondary: 'pistol' });
    const a = await p.evaluate(() => {
      const G = window.__SP, P = G.player, cam = G.camera, o = {}; calm(); G.enemies.forEach((e) => { e.dead = true; e.ch.root.visible = false; });
      const halfTan = () => Math.tan((cam.fov * Math.PI) / 360);
      // degrees turned per count, normalised by the on-screen scale: constant on every frame of an ADS transition
      const transition = (frames) => { const r = []; for (let i = 0; i < frames; i++) { const y0 = P.yaw; G.inp.mx = 10; G.step(1 / 60); r.push((y0 - P.yaw) / 10 / halfTan()); } return r; };
      const spread = (r) => (Math.max(...r) - Math.min(...r)) / Math.max(...r);
      P.pos.set(34, 0, 0); P.yaw = 0; P.pitch = 0; sim(0.3);
      G.inp.rmb = true; const inS = transition(30); G.inp.rmb = false; const outS = transition(30);
      o.scopeMismatch = +Math.max(spread(inS), spread(outS)).toFixed(5);
      // 10x vs 4x: same normalised rate (sensitivity follows magnification); wheel steps ease, never jump
      G.inp.rmb = true; sim(0.6); for (let i = 0; i < 40; i++) P.zoomStep(-1); sim(0.5); const r4 = transition(3)[2];
      const f0 = cam.fov; for (let i = 0; i < 40; i++) P.zoomStep(1); let maxJump = 0, last = cam.fov; for (let i = 0; i < 30; i++) { G.step(1 / 60); maxJump = Math.max(maxJump, Math.abs(cam.fov - last)); last = cam.fov; } const r10 = transition(3)[2];
      o.zoom = [+(r4 / r10).toFixed(4), +(maxJump / Math.abs(f0 - cam.fov)).toFixed(3), +(last - 2 * Math.atan(Math.tan((G.fov * Math.PI) / 360) / 10) * 180 / Math.PI).toFixed(3)];
      // scoped multiplier only affects scoped aim; vertical multiplier only affects pitch
      G.sensScope = 0.5; const half = transition(3)[2]; G.sensScope = 1; o.scopeMult = +(half / r10).toFixed(4);
      G.inp.rmb = false; sim(0.6); const hip = transition(3)[2]; G.sensScope = 0.5; const hip2 = transition(3)[2]; G.sensScope = 1; o.hipUnaffected = Math.abs(hip - hip2) < 1e-9;
      G.sensY = 0.5; P.pitch = 0; G.inp.my = 100; const yaw0 = P.yaw; G.step(1 / 60); o.vert = [+(-P.pitch / (100 * 0.0022 * G.sens)).toFixed(4), P.yaw === yaw0]; G.sensY = 1; P.pitch = 0;
      // ADS (iron sights, pistol) uses the ADS multiplier, and its transition is seamless too
      P.switchTo(1); sim(0.8); G.inp.rmb = true; const inI = transition(20); o.ironMismatch = +spread(inI).toFixed(5); const full = transition(3)[2]; G.sensAds = 1.5; const fast = transition(3)[2]; G.sensAds = 1; o.adsMult = +(fast / full).toFixed(4);
      // weapon-camera alignment: aimed down sights after a flick, the bullet direction equals the camera axis
      G.inp.mx = 250; G.inp.my = -80; G.step(1 / 60); const d = new cam.position.constructor(); cam.getWorldDirection(d); o.align = +(1 - d.dot(P.fwd)).toExponential(2); G.inp.rmb = false; sim(0.4);
      return o;
    });
    check('aim: sensitivity is seamless through ADS / scope transitions (rate follows the eased FOV exactly)', a.scopeMismatch < 1e-3 && a.ironMismatch < 1e-3, [a.scopeMismatch, a.ironMismatch]);
    check('aim: variable 4-10x scope keeps the same on-screen rate; wheel steps ease without jumps and settle on true magnification', Math.abs(a.zoom[0] - 1) < 0.01 && a.zoom[1] < 0.4 && Math.abs(a.zoom[2]) < 0.05, a.zoom);
    check('aim: ADS and scoped multipliers apply only to their mode; vertical multiplier only to pitch', Math.abs(a.scopeMult - 0.5) < 0.01 && a.hipUnaffected && Math.abs(a.adsMult - 1.5) < 0.01 && Math.abs(a.vert[0] - 0.5) < 0.01 && a.vert[1], a);
    check('aim: after a flick while aiming, the shot direction is the camera axis', a.align < 1e-6, a.align);

    // ---- locomotion at 30 / 60 / 120 / 144 Hz
    await start('warehouse', 'tactical', { primary: 'm4' });
    const L = await p.evaluate(() => {
      const G = window.__SP, P = G.player, K = G.inp.k, cam = G.camera, R = {}; calm(); G.enemies.forEach((e) => { e.dead = true; e.ch.root.visible = false; });
      const keys = (o) => { for (const c of ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ShiftLeft', 'ControlLeft', 'Space']) K[c] = !!o[c]; };
      const reset = (x, z, yaw = 0, y = 0) => { keys({}); P.pos.set(x, y, z); P.vel.set(0, 0, 0); P.yaw = yaw; P.pitch = 0; P.crouchToggle = false; P.mantle = null; for (let i = 0; i < 30; i++) G.step(1 / 60); };
      const walkV = 4.5 * P.w.move;
      for (const hz of [30, 60, 120, 144]) {
        const dt = 1 / hz, run = (sec, fn) => { for (let i = 0; i < Math.round(sec * hz); i++) { if (fn && fn(i * dt) === false) break; G.step(dt); } }, r = {};
        reset(34, 0); keys({ KeyW: 1 }); let t90 = -1; run(1, (t) => { if (t90 < 0 && P.speed >= 0.9 * walkV) t90 = t + dt; }); r.t90 = t90; r.walk = P.speed;
        keys({}); const z0 = P.pos.z; let tS = -1; run(1, (t) => { if (tS < 0 && P.speed < 0.05) tS = t; }); r.stop = z0 - P.pos.z; r.tStop = tS;
        reset(34, 0); keys({ KeyW: 1, ShiftLeft: 1 }); let ts = -1; run(1.2, (t) => { if (ts < 0 && P.speed > 6.0) ts = t; }); r.sprint = P.speed; r.tSprint = ts; keys({ KeyW: 1 }); run(0.6); r.sprintOff = P.speed;
        reset(34, 0, Math.PI); keys({ KeyS: 1 }); run(1); r.back = P.speed;
        reset(34, 0); keys({ KeyD: 1 }); run(0.6); keys({ KeyA: 1 }); let tr = -1; const sg = Math.sign(P.vel.x); run(0.6, (t) => { if (tr < 0 && Math.sign(P.vel.x) === -sg && P.speed > 0.85 * walkV * 0.92) tr = t; }); r.strafeRev = tr;
        reset(34, 0); keys({ KeyW: 1, KeyD: 1 }); run(1); r.diag = P.speed;
        reset(34, 0); G.inp.jump = true; let pk = 0; run(1.2, () => { pk = Math.max(pk, P.pos.y); }); r.jump = pk;
        reset(34, 0); G.inp.jump = true; keys({ KeyD: 1 }); run(0.5); r.air = Math.abs(P.pos.x - 34); keys({});
        reset(34, 0); keys({ ControlLeft: 1 }); let tc = -1; run(0.6, (t) => { if (tc < 0 && P.eye < 1.062) tc = t; }); r.crouch = tc; keys({}); run(0.6); r.stand = P.eye;
        // viewmodel inertia from a turn, then back to rest
        reset(34, 0); let sw = 0; run(0.25, () => { sw = Math.max(sw, Math.abs(P.vm.ry)); G.inp.mx = 3600 * dt; }); run(1, () => { G.inp.mx = 0; }); r.sway = sw; r.swayRest = Math.abs(P.vm.ry);
        // mantle onto the 1 m dock: duration, smooth camera, keeps moving
        reset(12, 18.6, Math.PI); keys({ KeyW: 1, Space: 1 }); let st = -1, tm = -1, mx = 0, ex = -1; const lc = cam.position.clone(); run(2, (t) => { if (st < 0 && P.mantle) st = t; if (tm >= 0 && ex < 0) ex = P.speed; if (st >= 0 && tm < 0 && !P.mantle) tm = t - st; const c = cam.position; if (st >= 0 && tm < 0) mx = Math.max(mx, c.distanceTo(lc) * hz / 60); lc.copy(c); }); r.mantle = [tm, P.pos.y, ex, mx]; keys({});
        for (const k in r) r[k] = Array.isArray(r[k]) ? r[k].map((v) => +v.toFixed(3)) : +r[k].toFixed(3);
        R[hz] = r;
      }
      // stairs: the camera rises smoothly while the body steps up
      reset(4.6, 22.5, -Math.PI / 2); keys({ KeyW: 1 }); let ms = 0, ly = cam.position.y; for (let i = 0; i < 150; i++) { G.step(1 / 60); ms = Math.max(ms, Math.abs(cam.position.y - ly)); ly = cam.position.y; } keys({}); R.stairs = [+ms.toFixed(3), +P.pos.y.toFixed(2)];
      // jump buffer: Space pressed just before landing still jumps; coyote time: just after walking off a ledge too
      reset(34, 0); G.inp.jump = true; let pressed = false, second = 0, down = false; for (let i = 0; i < 120; i++) { G.step(1 / 60); if (P.vel.y < 0) down = true; if (down && !pressed && P.pos.y < 0.25) { G.inp.jump = true; pressed = true; } if (pressed && P.vel.y > 4) second = 1; } R.buffer = second;
      const ledge = (delay) => { reset(12, 20.5, 0, 1.2); const onTop = P.pos.y; keys({ KeyW: 1 }); let off = -1; for (let i = 0; i < 120; i++) { G.step(1 / 60); if (off < 0 && !P.grounded) off = i; if (off >= 0 && i === off + delay) { G.inp.jump = true; keys({}); } if (off >= 0 && i === off + delay + 3) return [+onTop.toFixed(2), P.vel.y > 2 ? 1 : 0]; } keys({}); return [+onTop.toFixed(2), -1]; };
      R.coyote = [ledge(3), ledge(14)];
      // wall pushback: the gun pulls back against a wall, not in the open
      reset(34, 0); R.open = +P.wallPush.toFixed(3); reset(22, 0, Math.PI / 2); keys({ KeyW: 1 }); for (let i = 0; i < 90; i++) G.step(1 / 60); keys({}); R.wall = +P.wallPush.toFixed(3);
      return R;
    });
    const hzs = [30, 60, 120, 144], col = (k, i) => hzs.map((h) => (i == null ? L[h][k] : L[h][k][i])), rng = (v) => Math.max(...v) - Math.min(...v);
    const l60 = L[60];
    check('locomotion: quick start (~0.1 s to 90 %) and short, soft stop at every frame rate', col('t90').every((t) => t > 0 && t <= 0.14) && l60.t90 <= 0.11 && rng(col('stop')) < 0.01 && l60.stop > 0.12 && l60.stop < 0.3 && col('tStop').every((t) => t > 0 && t < 0.2), hzs.map((h) => [L[h].t90, L[h].stop, L[h].tStop]));
    check('locomotion: walk / sprint / backpedal / diagonal speeds identical across 30-144 Hz; backpedal slower, no diagonal boost', rng(col('walk')) < 0.01 && rng(col('sprint')) < 0.01 && rng(col('back')) < 0.01 && l60.back < 0.85 * l60.walk && l60.back > 0.65 * l60.walk && l60.diag <= l60.walk + 1e-3 && rng(col('diag')) < 0.01, hzs.map((h) => [L[h].walk, L[h].sprint, L[h].back, L[h].diag]));
    check('locomotion: sprint ramps in and out smoothly; strafe reversal is quick', col('tSprint').every((t) => t > 0.15 && t < 0.6) && rng(col('tSprint')) < 0.04 && Math.abs(l60.sprintOff - l60.walk) < 0.05 && col('strafeRev').every((t) => t > 0 && t < 0.2), hzs.map((h) => [L[h].tSprint, L[h].sprintOff, L[h].strafeRev]));
    check('locomotion: jump height and air control match across frame rates', rng(col('jump')) < 0.01 && Math.abs(l60.jump - 1.037) < 0.02 && rng(col('air')) < 0.05 && l60.air > 0.5 && l60.air < 2, hzs.map((h) => [L[h].jump, L[h].air]));
    check('locomotion: crouch transition takes the same time at every frame rate and stands back up', rng(col('crouch')) < 0.04 && col('stand').every((e) => e > 1.6), hzs.map((h) => [L[h].crouch, L[h].stand]));
    check('mantle: same duration at every frame rate, smooth camera, keeps forward momentum', col('mantle', 0).every((t) => t > 0.3 && t < 0.6) && rng(col('mantle', 0)) < 0.04 && col('mantle', 1).every((y) => Math.abs(y - 1) < 0.05) && col('mantle', 2).every((v) => v > 2) && col('mantle', 3).every((m) => m < 0.1), hzs.map((h) => L[h].mantle));
    check('stairs: camera rises smoothly (no per-step snap)', L.stairs[0] < 0.08 && L.stairs[1] > 0.5, L.stairs);
    check('jump: buffered press before landing and coyote time after a ledge both jump; late press does not', L.buffer === 1 && L.coyote[0][1] === 1 && L.coyote[1][1] !== 1 && L.coyote[0][0] > 0.9, [L.buffer, L.coyote]);
    check('viewmodel: turn inertia is frame-rate independent, bounded and returns to rest; gun pulls back at walls', rng(col('sway')) < 0.15 * l60.sway && l60.sway > 0.02 && l60.sway < 0.15 && col('swayRest').every((v) => v < 0.005) && L.open < 0.01 && L.wall > 0.3, [col('sway'), L.open, L.wall]);

    // ---- comfort: Camera Motion 0 removes bob, landing dip and sprint FOV; head bob and sprint FOV have their own switches
    const c = await p.evaluate(() => {
      const G = window.__SP, P = G.player, cam = G.camera, K = G.inp.k, o = {};
      const walkBob = () => { P.pos.set(34, 0, 0); P.vel.set(0, 0, 0); P.yaw = 0; K.KeyW = true; let lo = 9, hi = -9; for (let i = 0; i < 120; i++) { G.step(1 / 60); if (i > 30) { lo = Math.min(lo, cam.position.y); hi = Math.max(hi, cam.position.y); } } K.KeyW = false; G.step(0.4); return +(hi - lo).toFixed(4); };
      const land = () => { P.pos.set(34, 3, 0); P.vel.set(0, 0, 0); let lo = 9; for (let i = 0; i < 90; i++) { G.step(1 / 60); if (P.grounded) lo = Math.min(lo, cam.position.y - P.pos.y); } return +(P.eye - lo).toFixed(4); };
      const sprint = () => { P.pos.set(34, 0, 0); P.yaw = 0; K.KeyW = K.ShiftLeft = true; for (let i = 0; i < 60; i++) G.step(1 / 60); const f = cam.fov - G.fov; K.KeyW = K.ShiftLeft = false; G.step(0.5); return +f.toFixed(2); };
      G.camMotion = 0; o.off = [walkBob(), land(), sprint()];
      G.camMotion = 1; o.on = [walkBob(), land(), sprint()];
      G.headBob = 0; G.sprintFov = false; o.indiv = [walkBob(), sprint()]; G.headBob = 1; G.sprintFov = true; G.camMotion = 0.5;
      return o;
    });
    check('comfort: Camera Motion 0 % removes bob, landing dip and sprint FOV; head bob and sprint FOV switch off individually', c.off.every((v) => Math.abs(v) < 0.002) && c.on.every((v) => v > 0.005) && c.indiv[0] < 0.002 && c.indiv[1] === 0, c);
  });

  await run('feedback', async () => {
    await start('warehouse', 'tactical', { primary: 'ak' });
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, o = {}, V = G.v1.constructor; calm(); G.enemies.forEach((e) => { e.dead = true; e.ch.root.visible = false; });
      const hitMat = (from, to) => { const d = new V().subVectors(to, from).normalize(); const r = G.trace(from, d, 80, 'player'); return r.wh && r.wh.c.mat; };
      o.container = hitMat(new V(10, 1.2, -6), new V(11, 1.2, 0)); o.crate = hitMat(new V(-3, 0.5, 18), new V(-3, 0.5, 22.5)); o.ground = hitMat(new V(30, 1.6, 0), new V(30, 0, -5)); o.wall = hitMat(new V(23, 1.5, 0), new V(20, 1.5, 0));
      // firing at the ground produces an impact on the ground plane (not a tracer into infinity)
      P.pos.set(30, 0, 0); P.yaw = 0; P.pitch = -0.5; sim(0.3); G.fx.lastMat = null; G.inp.lmb = true; G.inp.lmbPressed = true; sim(0.04); G.inp.lmb = false; o.groundImpact = G.fx.lastMat;
      // low-ammo HUD
      const s = P.slots[0]; s.mag = 30; sim(0.1); const c0 = document.getElementById('am').style.color; s.mag = 7; sim(0.1); const c1 = document.getElementById('am').style.color; o.hint1 = document.getElementById('ammohint').textContent; s.mag = 0; sim(0.1); o.hint0 = document.getElementById('ammohint').textContent; o.colors = [c0, c1];
      o.flash = P.slots.map((x) => x.st.flash);
      return o;
    });
    check('feedback: surface tags on metal containers and wall cladding, wooden crates and the concrete floor', o.container === 'metal' && o.crate === 'wood' && o.ground === 'concrete' && o.wall === 'metal' && o.groundImpact === 'concrete', o);
    check('feedback: low-ammo colour and RELOAD prompt; per-weapon muzzle flash', o.colors[0] === '' && o.colors[1] !== '' && o.hint1 === 'LOW AMMO' && o.hint0 === 'RELOAD [R]' && o.flash[0] === 0.9 && o.flash[1] === 0.55, [o.colors, o.hint1, o.hint0, o.flash]);
  });

  await run('aisoak', async () => {
    // each intelligence profile, one minute of live combat against an exposed operator who does not shoot back:
    // they must notice, raise security, fire, reload, move along the nav grid, stay out of walls and keep valid state
    const out = {};
    for (const ai of ['recruit', 'tactical', 'elite']) {
      await start('warehouse', ai, { mission: 'intel', length: 'standard', seed: 21 });
      out[ai] = await p.evaluate(() => {
        const G = window.__SP, P = G.player, nav = G.world.nav, o = { state0: G.state, n0: G.enemies.length, maxSec: 0, dmg: 0, shots: 0, reloads: 0, inWall: 0, nan: 0, nades: 0 };
        // a guard's core (r 0.15 m, knees to shoulders) overlapping a solid collider = walked into geometry
        // (more than 0.1 m deep; grazing an edge with the body radius is not clipping)
        const insideSolid = (q) => G.world.colliders.some((c) => c.solid && q.x - 0.1 > c.x0 && q.x + 0.1 < c.x1 && q.z - 0.1 > c.z0 && q.z + 0.1 < c.z1 && q.y + 0.4 < c.y1 && q.y + 1.5 > c.y0);
        const start = new Map(G.enemies.map((e) => [e, e.pos.clone()])), wasRel = new Map(), nadeSeen = new Set(), ammo = new Map(G.enemies.map((e) => [e, e.ammo]));
        // the operator stands in the open east yard; one patrol walks into view 12 m away (positions are random per run,
        // so this makes first contact deterministic; everything after it is the AI's own doing)
        P.pos.set(40, 0, 12); P.yaw = 0; const sp = G.enemies.find((e) => e.duty === 'patrol') || G.enemies[0];
        sp.release(); sp.pos.set(40, 0, 0); sp.yaw = sp.baseYaw = Math.PI; sp.path = null; sp.waitT = 1e9; sp.set('PATROL'); sp.sync(); sp.ch.refresh(); // on watch facing the yard until contact
        // sim() steps without rendering; the real loop's render refreshes every world matrix (soldiers' eye bones) each frame
        o.steps = 0; sim(60, () => {
          G.scene.updateMatrixWorld(); o.steps++; o.dmg += Math.max(0, 100 - P.hp); P.hp = 100; P.dead = false;
          o.maxSec = Math.max(o.maxSec, G.sec.level);
          for (const e of G.enemies) {
            if (e.dead) continue;
            if (!Number.isFinite(e.pos.x + e.pos.y + e.pos.z)) o.nan++;
            if (!e.trav && insideSolid(e.pos)) { o.inWall++; if (!o.wallAt) o.wallAt = [+e.pos.x.toFixed(2), +e.pos.y.toFixed(2), +e.pos.z.toFixed(2), e.state, e.duty]; }
            const a = ammo.get(e) ?? 30; if (e.ammo < a) o.shots += a - e.ammo; ammo.set(e, e.ammo);
            if (e.reloading && !wasRel.get(e)) o.reloads++; wasRel.set(e, e.reloading);
          }
          for (const g of G.gren.list) if (g.owner !== 'player' && !nadeSeen.has(g)) { nadeSeen.add(g); o.nades++; }
        });
        o.state1 = G.state; o.endt = document.getElementById('endt').textContent; o.spDist = +sp.pos.distanceTo(P.pos).toFixed(1); o.spState = [sp.state, sp.dead, +sp.detect.toFixed(2)];
        o.n1 = G.enemies.length; o.reinforced = G.sec.reinforced; o.moved = G.enemies.filter((e) => start.has(e) && !e.dead && e.pos.distanceTo(start.get(e)) > 2).length; o.alive = G.enemies.filter((e) => !e.dead).length;
        // damage registration: the operator returns fire at the nearest guard that has a clear line
        // damage registration: a guard standing in the open 12 m away, held in place, is shot until he falls
        const c = G.camera.position, target = G.enemies.find((e) => !e.dead); o.target = !!target;
        if (target) { P.pos.set(40, 0, 12); target.release(); target.pos.set(40, 0, 0); target.yaw = target.baseYaw = 0; target.path = null; target.waitT = 1e9; target.set('PATROL'); target.percT = 1e9; target.sync(); target.ch.refresh(); G.step(1 / 60);
          const hp0 = target.hp, k0 = G.stats.kills, hold = target.pos.clone(); for (let i = 0; i < 300 && !target.dead; i++) { P.hp = 100; target.pos.copy(hold); const t = target.pos; P.yaw = Math.atan2(-(t.x - c.x), -(t.z - c.z)); P.pitch = Math.atan2(t.y + 1.2 - c.y, Math.hypot(t.x - c.x, t.z - c.z)); P.ry = P.rp = 0; G.inp.lmb = true; G.inp.lmbPressed = i % 6 === 0; if (P.slot.mag === 0) P.slot.mag = 30; G.step(1 / 60); } G.inp.lmb = false; o.kill = [hp0, +target.hp.toFixed(0), target.dead, G.stats.kills - k0]; }
        return o;
      });
    }
    const ok = (r) => r.maxSec >= 2 && r.shots > 20 && r.dmg > 0 && r.moved >= 2 && r.inWall === 0 && r.nan === 0 && r.target && r.kill[2] && r.kill[3] === 1;
    const prof = ['recruit', 'tactical', 'elite'];
    check('ai: recruit, tactical and elite all detect, raise security, fire, move and stay out of walls; kills register; guards reload', prof.every((k) => ok(out[k])) && prof.reduce((a, k) => a + out[k].reloads, 0) >= 2, out);
  });

  await run('loadouts', async () => {
    // every weapon x every optic it offers, with every attachment it accepts: visible, on screen, fires, reloads, switches
    const defs = await p.evaluate(() => { const G = window.__SP; return G.WEAPONS_DEF; });
    const bad = [], seen = [];
    for (const d of defs.filter((x) => !x.melee)) for (const optic of d.optics) {
      const att = { optic, muzzle: !!d.muzzle, grip: !!d.grip, laser: !!d.laser };
      const load = d.slot === 'primary' ? { primary: d.id, att: { [d.id]: att } } : { secondary: d.id, att: { [d.id]: att } };
      await start(d.slot === 'primary' ? 'warehouse' : 'forest', 'tactical', load);
      const r = await p.evaluate(([slotI, id, att]) => {
        const G = window.__SP, P = G.player, o = { id, optic: att.optic }; calm(); G.enemies.forEach((e) => { e.dead = true; e.ch.root.visible = false; });
        P.pos.set(G.mission.def.entry.x, 0, G.mission.def.entry.z); P.yaw = G.mission.def.entry.yaw; P.pitch = 0.05;
        if (slotI) { press('Digit2'); sim(0.7); }
        const s = P.slot; o.slotOk = s.id === id && P.cur === slotI; o.only = P.slots.every((x, i) => x.view.visible === (i === slotI));
        // the gun is drawn: real geometry, inside the view-model camera's frustum
        let meshes = 0, onScreen = 0; const V = G.v1.constructor, v = new V(); G.wcam.updateMatrixWorld();
        s.view.updateMatrixWorld(true); s.view.traverse((m) => { if (!m.isMesh || !m.visible || !m.geometry.attributes.position) return; meshes++; m.geometry.computeBoundingSphere(); v.copy(m.geometry.boundingSphere.center).applyMatrix4(m.matrixWorld).project(G.wcam); if (Math.abs(v.x) < 1.1 && Math.abs(v.y) < 1.1 && v.z < 1) onScreen++; });
        o.meshes = meshes; o.onScreen = onScreen;
        // attachments reach the weapon stats
        o.stats = { noise: s.st.noise, base: G.WEAPONS[id].noise, recoil: s.st.recoil, baseRecoil: G.WEAPONS[id].recoil, laser: !!s.st.laser, optic: s.st.optic ? s.st.optic.name : null };
        // aim: full ADS, FOV matches the optic, shot follows the camera axis
        G.inp.rmb = true; sim(0.8); o.adsF = +P.adsF.toFixed(2); o.fovOk = Math.abs(G.camera.fov - P.adsFov()) < 0.6;
        const d = new V(); G.camera.getWorldDirection(d); o.align = +(1 - d.dot(P.fwd)).toExponential(1);
        // fire once
        const m0 = s.mag, sh0 = G.stats.shots; G.inp.lmb = true; G.inp.lmbPressed = true; sim(0.05); G.inp.lmb = false; sim(0.6); o.fired = [m0 - s.mag, G.stats.shots - sh0];
        G.inp.rmb = false; sim(0.4);
        // reload from a partly empty magazine
        s.mag = 1; const res0 = s.reserve; press('KeyR'); sim(6, () => P.reloading || P.relIn || false); sim(4); o.reload = [s.mag, s.st.mag, res0 - s.reserve];
        // switch through every slot and back
        press(slotI ? 'Digit1' : 'Digit2'); sim(0.7); const other = P.cur; press('Digit3'); sim(0.7); const knife = P.slot.id; G.inp.lmb = true; G.inp.lmbPressed = true; sim(0.05); G.inp.lmb = false; sim(0.7);
        press(slotI ? 'Digit2' : 'Digit1'); sim(0.7); o.switch = [other, knife, P.cur, P.slots.filter((x) => x.view.visible).length];
        return o;
      }, [d.slot === 'primary' ? 0 : 1, d.id, att]);
      seen.push(`${d.id}/${optic}`);
      const st = r.stats, ok = r.slotOk && r.only && r.meshes > 0 && r.onScreen > 0 && (!att.muzzle || st.noise < st.base) && (!att.grip || st.recoil < st.baseRecoil) && r.adsF === 1 && r.fovOk && +r.align < 1e-6 && r.fired[0] === 1 && r.fired[1] >= 1 && r.reload[0] === r.reload[1] && r.reload[2] > 0 && r.switch[1] === 'knife' && r.switch[2] === (d.slot === 'primary' ? 0 : 1) && r.switch[3] === 1;
      if (!ok) bad.push(r);
    }
    check(`loadouts: ${seen.length} weapon/optic combinations with all compatible attachments are visible, on screen, aim on axis, fire, reload and switch`, bad.length === 0 && seen.length >= 10, bad.length ? bad.slice(0, 2) : seen);
    // kits: inventory matches, every grenade type throws a live grenade, medkit and stim heal
    const kits = {};
    for (const kit of ['assault', 'recon', 'medic']) {
      await start('warehouse', 'tactical', { kit });
      kits[kit] = await p.evaluate((kit) => {
        const G = window.__SP, P = G.player, o = {}; calm(); G.enemies.forEach((e) => { e.dead = true; e.ch.root.visible = false; });
        P.pos.set(34, 0, 0); P.yaw = 0; P.pitch = 0.2; sim(0.3); o.inv = { ...P.inv }; o.thrown = {};
        for (const t of ['frag', 'flash', 'smoke']) { if (!P.inv[t]) continue; let guard = 0; while (P.throwSel !== t && guard++ < 4) { press('Digit4'); sim(0.05); } const n0 = G.gren.list.length, i0 = P.inv[t]; press('KeyG'); sim(1.2); o.thrown[t] = [i0 - P.inv[t], G.gren.list.length > n0 || G.gren.list.some((g) => g.type === t || g.kind === t)]; sim(4); }
        P.hp = 40; const m0 = P.inv.med; press('KeyH'); sim(8); o.med = [m0 - P.inv.med, P.hp];
        P.hp = 40; const s0 = P.inv.stim; press('KeyX'); sim(3); o.stim = [s0 - P.inv.stim, P.hp];
        return o;
      }, kit);
    }
    const K = await p.evaluate(() => window.__SP.KITS_DEF);
    const kitOk = Object.keys(kits).every((k) => { const r = kits[k], d = K[k]; return ['frag', 'flash', 'smoke', 'med', 'stim'].every((t) => r.inv[t] === d[t]) && Object.values(r.thrown).every((x) => x[0] === 1 && x[1]) && Object.keys(r.thrown).length === ['frag', 'flash', 'smoke'].filter((t) => d[t] > 0).length && r.med[0] === 1 && r.med[1] > 90 && r.stim[0] === 1 && r.stim[1] >= 60; });
    check('loadouts: each kit carries its inventory; frag, flash and smoke throw; medkit and stim heal', kitOk, kits);
  });

  await run('settings', async () => {
    // every control in Settings, driven through its UI element, has its functional effect, persists, and resets
    await start('warehouse', 'tactical', { primary: 'm4' });
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, cam = G.camera, $ = (id) => document.getElementById(id), o = {}; calm(); G.enemies.forEach((e) => { e.dead = true; e.ch.root.visible = false; });
      const setRange = (id, v) => { const el = $(id); el.value = v; el.dispatchEvent(new Event('input')); }, setChk = (id, v) => { const el = $(id); el.checked = v; el.dispatchEvent(new Event('change')); };
      const yawPer = (n = 50) => { P.pitch = 0; const y = P.yaw; G.inp.mx = n; G.step(1 / 60); return (y - P.yaw) / n; };
      const pitchPer = () => { P.pitch = 0; G.inp.my = -50; G.step(1 / 60); const r = P.pitch / 50; P.pitch = 0; return r; };
      P.pos.set(34, 0, 0); P.yaw = 0; sim(0.3);
      const base = yawPer(); setRange('sens', 2); o.sens = [G.sens, +(yawPer() / base).toFixed(3), $('sensv').textContent]; setRange('sens', 1);
      const pb = pitchPer(); setRange('sensY', 1.5); o.sensY = [G.sensY, +(pitchPer() / pb).toFixed(3), +(yawPer() / base).toFixed(3)]; setRange('sensY', 1);
      G.inp.rmb = true; sim(0.5); const ads = yawPer(); setRange('sensAds', 0.5); o.sensAds = [G.sensAds, +(yawPer() / ads).toFixed(3)]; setRange('sensAds', 1); G.inp.rmb = false; sim(0.5);
      o.hipAfterAds = +(yawPer() / base).toFixed(3);
      setRange('fov', 90); sim(0.2); o.fov = [G.fov, +cam.fov.toFixed(1)]; setRange('fov', 75); sim(0.2);
      setRange('vol', 0.3); o.vol = [G.vol, G.audio.master ? +G.audio.master.gain.value.toFixed(2) : 'no-audio']; setRange('vol', 0.75);
      setRange('wsway', 0); P.yaw = 0; let sw = 0; for (let i = 0; i < 20; i++) { G.inp.mx = 40; G.step(1 / 60); sw = Math.max(sw, Math.abs(P.vm.ry)); } o.wsway0 = +sw.toFixed(4); setRange('wsway', 1); sim(1);
      setRange('cammo', 0); o.cammo = G.camMotion; setRange('headBob', 0.4); o.headBob = G.headBob; setChk('sfovchk', false); o.sfov = G.sprintFov;
      setChk('ovchk', true); o.overlay = [G.overlay, $('perfov').style.display]; setChk('ovchk', false);
      setChk('adchk', false); o.adaptive = [G.adaptive, G.pacing.scale]; setChk('adchk', true);
      setChk('rawchk', false); o.raw = G.rawInput; setChk('rawchk', true);
      setChk('llchk', true); o.lowlat = [G.lowLatency, $('llnote').style.display]; setChk('llchk', false);
      const t = $('fpstarget'); t.value = 'refresh'; t.dispatchEvent(new Event('change')); o.target = [G.fpsTarget, +G.pacing.targetMs().toFixed(2)]; t.value = '60'; t.dispatchEvent(new Event('change'));
      // set a recognisable state to persist
      setRange('sens', 1.37); setRange('sensScope', 0.65); setRange('sensY', 0.8); setRange('wsway', 0.5); setRange('cammo', 0.2); setRange('headBob', 0.4); setChk('sfovchk', false);
      document.querySelector('.opts[data-k="quality"] [data-v="low"]').click(); o.quality = G.sel.quality;
      o.saved = JSON.parse(localStorage.getItem('sp2_settings'));
      return o;
    });
    check('settings: sensitivity, vertical and ADS multipliers change look rate only where they should', o.sens[1] === 2 && /2\.00/.test(o.sens[2]) && o.sensY[1] === 1.5 && o.sensY[2] === 1 && o.sensAds[1] === 0.5 && o.hipAfterAds === 1, o);
    check('settings: FOV, volume, weapon sway 0, camera motion, head bob, sprint FOV, overlay, adaptive, raw input, low latency, FPS target all apply', o.fov[1] === 90 && o.vol[0] === 0.3 && (o.vol[1] === 'no-audio' || o.vol[1] === 0.3) && o.wsway0 < 1e-4 && o.cammo === 0 && o.headBob === 0.4 && o.sfov === false && o.overlay[0] === true && o.overlay[1] === 'block' && o.adaptive[0] === false && o.adaptive[1] === 1 && o.raw === false && o.lowlat[0] === true && o.lowlat[1] === 'inline' && o.target[0] === 'refresh', o);
    const sv = o.saved;
    // graphics presets change what is rendered (shadows, resolution, shadow-map size, ground clutter)
    const q = {};
    for (const lv of ['low', 'med', 'high']) {
      await p.evaluate((lv) => { document.querySelector(`.opts[data-k="quality"] [data-v="${lv}"]`).click(); }, lv);
      await start('forest', 'tactical');
      q[lv] = await p.evaluate(() => { const G = window.__SP, R = G.renderer, W = G.world; sim(0.2); return [R.shadowMap.enabled, +R.getPixelRatio().toFixed(2), W.moon.shadow.mapSize.x, W.meshes.filter((m) => m.userData.detail && m.visible).length, W.lodDist]; });
    }
    check('settings: Low / Medium / High presets change shadows, resolution, shadow-map size and detail', q.low[0] === false && q.med[0] && q.high[0] && q.low[1] === 1 && q.low[3] === 0 && q.med[3] > 0 && q.high[2] > q.med[2] && q.med[2] > q.low[2] && q.low[4] < q.med[4] && q.med[4] < q.high[4], q);
    await p.evaluate(() => { document.querySelector('.opts[data-k="quality"] [data-v="low"]').click(); });
    check('settings: everything is written to storage', sv.sens === 1.37 && sv.sensScope === 0.65 && sv.sensY === 0.8 && sv.wsway === 0.5 && sv.cam === 0.2 && sv.headBob === 0.4 && sv.sprintFov === false && sv.quality === 'low', sv);
    // reload in the same browser context: values come back, in the model and in the UI
    const p2 = p; await p.reload(); await p.waitForFunction('window.__SP && window.__SP.state === "menu"', null, { timeout: 90000 }); await helpers();
    const r = await p2.evaluate(() => { const G = window.__SP, $ = (id) => document.getElementById(id); return { model: [G.sens, G.sensScope, G.sensY, G.weaponSway, G.camMotion, G.headBob, G.sprintFov, G.sel.quality], ui: [+$('sens').value, +$('sensScope').value, +$('sensY').value, +$('wsway').value, +$('cammo').value, +$('headBob').value, $('sfovchk').checked, document.querySelector('.opts[data-k="quality"] .sel').dataset.v] }; });
    check('settings: persist across a reload (model and UI)', JSON.stringify(r.model) === JSON.stringify([1.37, 0.65, 0.8, 0.5, 0.2, 0.4, false, 'low']) && JSON.stringify(r.ui) === JSON.stringify(r.model), r);
    const rs = await p2.evaluate(() => { const G = window.__SP, $ = (id) => document.getElementById(id); $('resetctl').click(); return { model: [G.sens, G.sensAds, G.sensScope, G.sensY, G.fov, G.camMotion, G.headBob, G.weaponSway, G.sprintFov], ui: [+$('sens').value, +$('sensScope').value, $('sfovchk').checked], kept: G.sel.quality, saved: JSON.parse(localStorage.getItem('sp2_settings')) }; });
    check('settings: reset restores control and comfort defaults, leaves graphics alone, and saves', JSON.stringify(rs.model) === JSON.stringify([1, 1, 1, 1, 75, 0.5, 1, 1, true]) && rs.ui[0] === 1 && rs.ui[1] === 1 && rs.ui[2] === true && rs.kept === 'low' && rs.saved.sens === 1 && rs.saved.quality === 'low', rs);
    await p.evaluate(() => { localStorage.removeItem('sp2_settings'); }); await p.reload(); await p.waitForFunction('window.__SP && window.__SP.state === "menu"', null, { timeout: 90000 }); await helpers();
  });

  await run('robustness', async () => {
    // an exception inside the frame loop stops the mission with a visible message (never a frozen / black game)
    await start('warehouse', 'tactical', { mission: 'rescue', length: 'quick', seed: 5 });
    await p.evaluate(() => { const G = window.__SP; G.mission.__u = G.mission.update; G.mission.update = () => { throw new Error('qa-forced failure'); }; });
    const nErr = errs.length;
    await p.waitForFunction('window.__SP.state === "error"', null, { timeout: 30000 }).catch(() => {});
    const f = await p.evaluate(() => { const el = document.getElementById('fatal'); return { state: window.__SP.state, shown: getComputedStyle(el).display, text: el.textContent }; });
    await p.waitForTimeout(300); const thrown = errs.slice(nErr).filter((m) => m.includes('qa-forced failure')).length; errs.splice(nErr, errs.length - nErr, ...errs.slice(nErr).filter((m) => !m.includes('qa-forced failure')));
    await p.click('#fatalmenu'); const back = await p.evaluate(() => [window.__SP.state, getComputedStyle(document.getElementById('fatal')).display]);
    check('robustness: a frame-loop exception stops the mission and shows a visible error with a way back to the menu', f.state === 'error' && f.shown === 'block' && /SIMULATION ERROR/.test(f.text) && /qa-forced failure/.test(f.text) && thrown === 1 && back[0] === 'menu' && back[1] === 'none', [f, thrown, back]);
    // the next mission after a failure renders and runs normally
    await start('forest', 'tactical', { mission: 'rescue', length: 'quick', seed: 6 });
    const ok = await p.evaluate(() => { const G = window.__SP; sim(0.5); return [G.state, !!G.mission.civ, G.scene.children.length > 50]; });
    check('robustness: a mission started after a failure plays normally', ok[0] === 'playing' && ok[1] && ok[2], ok);
    // losing the WebGL context says so and recovers when the context comes back
    const lost = await p.evaluate(async () => {
      const G = window.__SP, ext = document.getElementById('c').getContext('webgl2').getExtension('WEBGL_lose_context'); if (!ext) return null;
      ext.loseContext(); await new Promise((r) => setTimeout(r, 300)); const a = [G.contextLost, getComputedStyle(document.getElementById('fatal')).display, document.querySelector('#fatal b').textContent];
      ext.restoreContext(); await new Promise((r) => setTimeout(r, 600)); return [a, [G.contextLost, getComputedStyle(document.getElementById('fatal')).display]];
    });
    const fr = await p.evaluate(() => window.__SP.frames); await p.waitForTimeout(800); const fr2 = await p.evaluate(() => window.__SP.frames);
    check('robustness: WebGL context loss shows a message, restoring the context clears it and frames continue', lost && lost[0][0] === true && lost[0][1] === 'block' && /DEVICE LOST/.test(lost[0][2]) && lost[1][0] === false && lost[1][1] === 'none' && fr2 > fr, [lost, fr2 - fr]);
  });

  await run('resources', async () => {
    // v2.4.1: returning to the menu used to leave ~30 geometries and ~11 textures per mission on the GPU
    await start('warehouse', 'tactical'); await p.evaluate(() => { document.getElementById('pmenu').click(); });
    const r = await p.evaluate(async () => {
      const G = window.__SP, frame = () => new Promise((res) => requestAnimationFrame(() => requestAnimationFrame(res))), out = [];
      await frame(); const base = { ...G.renderer.info.memory };
      for (let i = 0; i < 4; i++) {
        Object.assign(G.sel, { map: i % 2 ? 'warehouse' : 'forest', mission: i % 2 ? 'rescue' : 'capture', length: 'standard', layout: null, mode: 'mission', seed: 40 + i });
        document.getElementById('start').click(); for (let k = 0; k < 20; k++) G.step(1 / 60); await frame(); const inMission = { ...G.renderer.info.memory };
        if (G.state === 'playing') G.state = 'paused'; document.getElementById('pmenu').click(); await frame(); out.push([inMission, { ...G.renderer.info.memory }]);
      }
      return { base, out };
    });
    const menu = r.out.map((x) => x[1]), mis = r.out.map((x) => x[0]);
    check('resources: GPU geometries and textures are released when a mission ends (no growth over repeated missions)', menu.every((m) => m.geometries <= r.base.geometries + 2 && m.textures <= r.base.textures + 2) && mis[2].geometries <= mis[0].geometries + 5 && mis[3].geometries <= mis[1].geometries + 5 && mis[2].textures <= mis[0].textures + 3, r);
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
