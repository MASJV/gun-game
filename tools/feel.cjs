// Controls-feel harness: measurable properties of movement, camera and aiming, at several frame rates.
// Runs the real game code headless (fixed-step G.step). Usage: node tools/feel.cjs [label] -> docs/perf/feel-<label>.json
const path = require('path'), fs = require('fs');
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  p.on('pageerror', (e) => console.log('PAGEERR', e.message));
  await p.goto('file://' + path.resolve(__dirname, '..', 'index.html') + '?test');
  await p.waitForFunction('window.__SP && window.__SP.state === "menu"', null, { timeout: 90000 });
  const out = await p.evaluate(() => {
    const G = window.__SP, start = (map, prim, att) => {
      if (G.state !== 'menu') { window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' })); document.getElementById('pmenu').click(); }
      G.sel.map = map; G.sel.layout = 'classic'; G.sel.mode = 'mission'; const L = G.loadout; L.primary = prim; L.secondary = 'pistol';
      Object.assign(L.att[prim], { optic: 'iron', muzzle: false, grip: false, laser: false }, att || {}); document.getElementById('start').click();
      G.enemies.forEach((e) => { e.dead = true; e.found = true; e.ch.root.visible = false; });
    };
    const R = {}, K = G.inp.k, keys = (o) => { for (const c of ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ShiftLeft', 'ControlLeft', 'Space']) K[c] = !!o[c]; };
    start('warehouse', 'm4');
    const P = G.player, reset = (x, z, yaw = 0) => { keys({}); P.pos.set(x, 0, z); P.vel.set(0, 0, 0); P.yaw = yaw; P.pitch = 0; P.crouchToggle = false; P.mantle = null; for (let i = 0; i < 30; i++) G.step(1 / 60); };
    // ---- locomotion at several frame rates
    R.loco = {};
    for (const hz of [30, 60, 120, 144]) {
      const dt = 1 / hz, run = (sec, fn) => { for (let i = 0; i < Math.round(sec * hz); i++) { if (fn && fn(i * dt) === false) break; G.step(dt); } }, r = {};
      reset(34, 0); keys({ KeyW: 1 }); let t90 = -1; run(1, (t) => { if (t90 < 0 && P.speed >= 0.9 * 4.5 * P.w.move) t90 = t; }); r.t90 = +t90.toFixed(3); r.walk = +P.speed.toFixed(3);
      keys({}); const z0 = P.pos.z; let tStop = -1; run(1, (t) => { if (tStop < 0 && P.speed < 0.05) tStop = t; }); r.stopDist = +(z0 - P.pos.z).toFixed(3); r.tStop = +tStop.toFixed(3);
      reset(34, 0); keys({ KeyW: 1, ShiftLeft: 1 }); run(1.2); r.sprint = +P.speed.toFixed(3); keys({});
      reset(34, 0, Math.PI); keys({ KeyS: 1 }); run(1); r.back = +P.speed.toFixed(3);
      reset(34, 0); keys({ KeyD: 1 }); run(0.6); keys({ KeyA: 1 }); let tRev = -1; const sgn = Math.sign(P.vel.x); run(0.6, (t) => { if (tRev < 0 && Math.sign(P.vel.x) === -sgn && P.speed > 0.9 * 4.5 * P.w.move * 0.92) tRev = t; }); r.strafeRev = +tRev.toFixed(3);
      reset(34, 0); keys({ KeyW: 1, KeyD: 1 }); run(1); r.diag = +P.speed.toFixed(3);
      reset(34, 0); G.inp.jump = true; let peak = 0; run(1.2, () => { peak = Math.max(peak, P.pos.y); }); r.jump = +peak.toFixed(3);
      reset(34, 0); G.inp.jump = true; keys({ KeyD: 1 }); run(0.5); r.airLat = +Math.abs(P.pos.x - 34).toFixed(3); keys({});
      reset(34, 0); keys({ ControlLeft: 1 }); let tc = -1; run(0.6, (t) => { if (tc < 0 && P.eye < 1.062) tc = t; }); r.crouchT = +tc.toFixed(3); keys({}); run(0.6);
      // weapon sway response to the same mouse motion (60 counts per 1/60 s for 0.25 s)
      reset(34, 0); let sw = 0; run(0.25, () => { sw = Math.max(sw, Math.abs(P.vm ? P.vm.ry : P.swayX)); G.inp.mx = 60 * 60 * dt; }); sw = Math.max(sw, Math.abs(P.vm ? P.vm.ry : P.swayX)); run(0.4, () => { G.inp.mx = 0; }); r.swayPeak = +sw.toFixed(4);
      R.loco[hz] = r;
    }
    // ---- camera on stairs (dock stairs, warehouse) at 60 Hz: largest per-frame camera height change
    reset(4.6, 22.5, -Math.PI / 2); keys({ KeyW: 1 }); let maxStep = 0, last = G.camera.position.y; for (let i = 0; i < 90; i++) { G.step(1 / 60); const y = G.camera.position.y; maxStep = Math.max(maxStep, Math.abs(y - last)); last = y; } keys({});
    R.stairs = { maxCamStepPerFrame: +maxStep.toFixed(3), endY: +P.pos.y.toFixed(2) };
    // ---- mantle onto the 1 m dock: duration, largest camera move per frame, speed right after
    reset(12, 18.6, Math.PI); keys({ KeyW: 1, Space: 1 }); let tM = -1, exitV = 0, mx = 0, lc = G.camera.position.clone(), started = -1; const T0 = performance.now();
    for (let i = 0; i < 120; i++) { G.step(1 / 60); const c = G.camera.position; mx = Math.max(mx, c.distanceTo(lc)); lc.copy(c); if (started < 0 && P.mantle) started = i; if (started >= 0 && tM < 0 && !P.mantle) { tM = (i - started) / 60; G.step(1 / 60); exitV = P.speed; lc.copy(G.camera.position); } }
    keys({ KeyW: 1 }); R.mantle = { duration: +tM.toFixed(3), maxCamMovePerFrame: +mx.toFixed(3), onTop: +P.pos.y.toFixed(2) }; G.step(1 / 60); R.mantle.speedAfter = +exitV.toFixed(2); keys({});
    // ---- aiming sensitivity: degrees of view rotation per 100 mouse counts, and consistency during the ADS transition
    const deg = (r) => (r * 180) / Math.PI;
    const sensTest = (prim, att, zoom) => {
      start('warehouse', prim, att); const P = G.player; reset(34, 0); if (zoom) { G.inp.rmb = true; for (let i = 0; i < 40; i++) G.step(1 / 60); for (let i = 0; i < 40; i++) P.zoomStep(zoom > 4 ? 1 : -1); }
      G.inp.rmb = false; for (let i = 0; i < 60; i++) G.step(1 / 60);
      const per100 = () => { const y0 = P.yaw; G.inp.mx = 100; G.step(1 / 60); return deg(y0 - P.yaw); };
      const hip = per100(); G.inp.rmb = true;
      // during the transition: compare rotation per count with the angular size of a pixel at the *displayed* FOV
      let worst = 0; for (let i = 0; i < 40; i++) { const f0 = G.camera.fov; const d = per100(); const f1 = G.camera.fov; const fov = f1 - P.sprintF * 4 * (G.camMotion ?? 0.5); const ideal = hip * Math.tan((fov * Math.PI) / 360) / Math.tan((G.fov * Math.PI) / 360); if (P.adsF > 0.05 && P.adsF < 0.95) worst = Math.max(worst, Math.abs(d / ideal - 1)); }
      const ads = per100(); G.inp.rmb = false; for (let i = 0; i < 40; i++) G.step(1 / 60);
      return { hipDegPer100: +hip.toFixed(3), adsDegPer100: +ads.toFixed(4), ratio: +(ads / hip).toFixed(4), fov: +G.camera.fov.toFixed(2), transitionMismatch: +worst.toFixed(3) };
    };
    R.aim = { iron: sensTest('m4', { optic: 'iron' }), reddot: sensTest('m4', { optic: 'reddot' }), scope4: sensTest('m4', { optic: 'scope' }), scope10: sensTest('sniper', { optic: 'vscope' }, 10) };
    return R;
  });
  console.log(JSON.stringify(out, null, 1));
  if (process.argv[2]) fs.writeFileSync(path.join(__dirname, '..', 'docs', 'perf', `feel-${process.argv[2]}.json`), JSON.stringify(out, null, 1));
  await b.close();
})();
