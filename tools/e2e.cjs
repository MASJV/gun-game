// End-to-end check through the REAL game page (no ?test): menu clicks, briefing, real animation frames, rendered
// pixels, real keyboard input, then each mission is played through its objective sequence by walking nav routes with
// key input (walk / jump-mantle / hold E), escorting civilians, extracting, restarting and switching maps.
// Usage: node tools/e2e.cjs [filter] [--shots dir] [--profile low|high|lowlat]
// Honest limits: headless Chromium + SwiftShader (software GL). Guards are neutralised after the spawn check so a
// run measures mission flow, not combat luck. Where the walker is stuck >4 s it is moved to the next route point and
// that is counted as an "assist" in the report.
const path = require('path'), fs = require('fs');
const { chromium } = require('playwright');
const args = process.argv.slice(2), opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const filter = args[0] && !args[0].startsWith('--') ? args[0] : '', shots = opt('--shots'), profile = opt('--profile') || 'default';
const SEEDS = (opt('--seeds') || '7,1234').split(',').map(Number);
const PROFILES = { default: {}, low: { quality: 'low', adaptive: false }, high: { quality: 'high', target: 'refresh', cam: 0, sensAds: 0.7, sprintFov: false }, lowlat: { lowlat: true, quality: 'med' } };

(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const ctx = await b.newContext({ viewport: { width: 640, height: 360 } });
  await ctx.addInitScript((s) => { try { if (!sessionStorage.getItem('e2e')) { localStorage.setItem('sp2_settings', JSON.stringify(s)); sessionStorage.setItem('e2e', '1'); } } catch (e) { /* storage blocked */ } }, PROFILES[profile]);
  const p = await ctx.newPage();
  const errs = []; p.on('pageerror', (e) => errs.push('pageerror: ' + e.message)); p.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text().slice(0, 300)); });
  await p.goto('file://' + path.resolve(__dirname, '..', 'index.html'));
  await p.waitForFunction('window.__SP && window.__SP.state === "menu"', null, { timeout: 120000 });
  const results = []; let pass = 0, fail = 0;
  const check = (name, ok, info) => { results.push({ name, ok: !!ok, info }); ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${info !== undefined ? '  — ' + JSON.stringify(info) : ''}`); };

  // rendered scene: hide all HTML layers, wait for real frames, grab the page pixels and measure them
  const sceneStats = async (label) => {
    const f0 = await p.evaluate(() => { document.body.classList.add('e2e-nohud'); return window.__SP.frames; });
    await p.waitForFunction((f) => window.__SP.frames >= f + 3, f0, { timeout: 60000 });
    const buf = await p.screenshot({ timeout: 240000 });
    if (shots) { fs.mkdirSync(shots, { recursive: true }); fs.writeFileSync(path.join(shots, label + '.png'), buf); }
    const st = await p.evaluate(async (b64) => {
      document.body.classList.remove('e2e-nohud');
      const img = new Image(); img.src = 'data:image/png;base64,' + b64; await img.decode();
      const c = document.createElement('canvas'); c.width = 192; c.height = 108; const x = c.getContext('2d'); x.drawImage(img, 0, 0, 192, 108);
      const d = x.getImageData(0, 0, 192, 108).data, set = new Set(); let sum = 0, lit = 0;
      for (let i = 0; i < d.length; i += 4) { const l = 0.3 * d[i] + 0.59 * d[i + 1] + 0.11 * d[i + 2]; sum += l; if (l > 12) lit++; set.add((d[i] >> 3) * 1024 + (d[i + 1] >> 3) * 32 + (d[i + 2] >> 3)); }
      const n = d.length / 4; return { mean: +(sum / n).toFixed(1), lit: +(lit / n).toFixed(3), colors: set.size };
    }, buf.toString('base64'));
    return st;
  };
  await p.addStyleTag({ content: 'body.e2e-nohud #hud, body.e2e-nohud .ov, body.e2e-nohud #toast, body.e2e-nohud #scope, body.e2e-nohud #perfov { visibility: hidden !important; }' });
  const visible = (st) => st.lit > 0.05 && st.colors > 25; // black screen / sky-only: lit ~0, a handful of colours

  // page-side mission walker
  await p.evaluate(() => {
    const G = window.__SP, K = () => G.inp.k;
    const press = (code, down) => window.dispatchEvent(new KeyboardEvent(down ? 'keydown' : 'keyup', { code, bubbles: true }));
    const step = (sec, fn) => { const n = Math.round(sec * 60); for (let i = 0; i < n && G.state === 'playing'; i++) { if (fn && fn(i) === false) return false; G.step(1 / 60); } return true; };
    // walk along nav routes to (tx, tz) using W + mouse-equivalent yaw; Space at mantle/vault links
    const walkTo = (tx, tz, R, within = 1.1, maxSec = 90) => {
      const P = G.player, nav = G.world.nav; let pathPts = nav.path(P.pos.x, P.pos.z, tx, tz) || [{ x: tx, z: tz }], i = 0, stuck = 0, best = 1e9, t = 0;
      press('KeyW', true);
      while (G.state === 'playing' && t < maxSec) {
        const dEnd = Math.hypot(tx - P.pos.x, tz - P.pos.z); if (dEnd < within) break;
        while (i < pathPts.length - 1 && Math.hypot(pathPts[i].x - P.pos.x, pathPts[i].z - P.pos.z) < 0.6) i++;
        const w = pathPts[i]; P.yaw = Math.atan2(-(w.x - P.pos.x), -(w.z - P.pos.z)); P.pitch = 0;
        if (w.link && Math.hypot(w.x - P.pos.x, w.z - P.pos.z) < 2.2 && w.link.type !== 'drop' && P.grounded && !P.mantle) G.inp.jump = true;
        G.step(1 / 60); t += 1 / 60;
        const d = Math.hypot(w.x - P.pos.x, w.z - P.pos.z) + (pathPts.length - i) * 0.01;
        if (d < best - 0.05) { best = d; stuck = 0; } else if ((stuck += 1 / 60) > 4) { R.assists++; P.pos.set(w.x, w.y ?? nav.height(w.x, w.z), w.z); P.vel.set(0, 0, 0); i = Math.min(i + 1, pathPts.length - 1); best = 1e9; stuck = 0; }
        if (t % 6 < 1 / 60) { const np = nav.path(P.pos.x, P.pos.z, tx, tz); if (np) { pathPts = np; i = 0; best = 1e9; } }
      }
      press('KeyW', false); step(0.3);
      return Math.hypot(tx - P.pos.x, tz - P.pos.z) < within + 0.6;
    };
    window.e2ePlay = () => {
      const P = G.player, Mi = G.mission, R = { stages: Mi.def.stages.map((s) => s.kind), assists: 0, prompts: [], reached: [], log: [] };
      R.enemies = G.enemies.filter((e) => !e.dead).length; R.civ = Mi.civ ? Mi.civ.kind : null;
      const p0 = P.pos.clone(); press('KeyW', true); step(0.8); press('KeyW', false); step(0.4); R.moved = +p0.distanceTo(P.pos).toFixed(2); // real key input moves the operator
      G.enemies.forEach((e) => { e.dead = true; e.found = true; e.ch.root.visible = false; });
      let guard = 0;
      while (!Mi.complete && G.state === 'playing' && guard++ < 14) {
        const s = Mi.stage, si = Mi.i;
        if (s.civ) {
          const c = s.civRef; if (c.state === 'flee') step(25, () => c.state === 'flee');
          R.reached.push(walkTo(c.pos.x, c.pos.z, R, 1.6));
          P.yaw = Math.atan2(-(c.pos.x - P.pos.x), -(c.pos.z - P.pos.z)); step(0.3); R.prompts.push(document.getElementById('prompt').textContent);
          press('KeyE', true); step((s.hold || 0) + 0.6); press('KeyE', false); step(0.2); R.log.push(s.kind + ':' + c.state);
        } else {
          for (const it of Mi.items.filter((x) => x.stage === si && !x.taken)) {
            if (Mi.i !== si) break;
            const a = s.anchors[it.k].stand; R.reached.push(walkTo(a[0], a[1], R, 0.9));
            P.yaw = Math.atan2(-(it.pos[0] - P.pos.x), -(it.pos[2] - P.pos.z)); P.pitch = -0.3; step(0.3); R.prompts.push(document.getElementById('prompt').textContent);
            press('KeyE', true); step((s.hold || 0) + 0.6); press('KeyE', false); step(0.2); R.log.push(s.kind + (Mi.i !== si ? ':done' : ':open'));
          }
        }
      }
      R.complete = Mi.complete;
      const ex = Mi.def.exit.pos; R.reached.push(walkTo(ex[0], ex[2], R, 1.0, 150));
      if (G.state === 'playing' && Mi.civ) { step(8, () => G.state === 'playing'); R.log.push('waited for escort ' + Mi.civ.state); }
      R.state = G.state; R.end = document.getElementById('endt').textContent; R.civFollow = Mi.civ ? +Math.hypot(Mi.civ.pos.x - P.pos.x, Mi.civ.pos.z - P.pos.z).toFixed(1) : null;
      return R;
    };
  });

  const combos = { intel: ['quick', 'standard', 'extended'], capture: ['quick', 'standard', 'extended'], sabotage: ['quick', 'standard', 'extended'], rescue: ['quick', 'standard', 'extended'], multi: ['standard', 'extended'] };
  const totals = { combos: 0, completed: 0, assists: 0 };
  for (const map of ['warehouse', 'forest']) for (const type in combos) for (const len of combos[type]) for (const seed of SEEDS) {
    const id = `${map}/${type}/${len}/${seed}`; if (filter && !id.includes(filter)) continue;
    totals.combos++; const e0 = errs.length;
    // real menu: Play tab, map, mission, length, DEPLOY; then the briefing's GO button
    await p.click('[data-tab="play"]'); await p.click(`.opts[data-k="map"] [data-v="${map}"]`); await p.click(`.opts[data-k="mission"] [data-v="${type}"]`); await p.click(`.opts[data-k="length"] [data-v="${len}"]`);
    await p.evaluate((s) => { window.__SP.sel.seed = s; }, seed); // deterministic seed (the menu itself always rolls a random one)
    await p.click('#start'); await p.waitForFunction('window.__SP.state === "brief"', null, { timeout: 60000 });
    const brief = await sceneStats(id.replace(/\//g, '_') + '_brief');
    await p.click('#brgo'); await p.waitForFunction('window.__SP.state === "playing"', null, { timeout: 30000 });
    const st = await sceneStats(id.replace(/\//g, '_') + '_spawn');
    const cam = await p.evaluate(() => { const G = window.__SP, c = G.camera, P = G.player, e = G.mission.def.entry; return { view: [+(P.yaw - e.yaw).toFixed(3), +P.pitch.toFixed(3)], gateDropped: G.lookGate.dropped, finite: c.position.toArray().every(Number.isFinite) && Number.isFinite(c.fov), eyeOk: Math.abs(c.position.y - P.pos.y - P.eye) < 0.3, inScene: G.scene.children.length, hud: getComputedStyle(document.getElementById('hud')).display }; });
    // real keyboard: hold W for half a second of real frames
    const k0 = await p.evaluate(() => window.__SP.player.pos.toArray()); const fr = await p.evaluate(() => window.__SP.frames); await p.keyboard.down('KeyW'); await p.waitForFunction((f) => window.__SP.frames >= f + 6, fr, { timeout: 60000 }); await p.keyboard.up('KeyW');
    const k1 = await p.evaluate(() => window.__SP.player.pos.toArray()); const realMove = Math.hypot(k1[0] - k0[0], k1[2] - k0[2]);
    check(`${id}: briefing + spawn render a visible scene, camera level on the insertion heading, real W key moves`, visible(brief) && visible(st) && cam.finite && cam.eyeOk && Math.abs(cam.view[0]) < 1e-3 && Math.abs(cam.view[1]) < 1e-3 && realMove > 0.2, { brief, spawn: st, cam, realMove: +realMove.toFixed(2) });
    const R = await p.evaluate(() => window.e2ePlay());
    totals.assists += R.assists; if (R.state === 'won') totals.completed++;
    const promptsOk = R.prompts.every((t) => t && t.length > 3);
    check(`${id}: objective sequence [${R.stages.join(' → ')}] completed on foot, extraction won`, R.enemies > 0 && R.moved > 0.5 && promptsOk && R.complete && R.state === 'won' && /COMPLETE/.test(R.end) && (R.civ == null || R.civFollow < 9), { enemies: R.enemies, moved: R.moved, prompts: R.prompts, log: R.log, reached: R.reached, assists: R.assists, state: R.state, civFollow: R.civFollow });
    // end screen -> restart (same settings) renders again -> back to the menu
    if (R.state === 'won') {
      const endVisible = await p.evaluate(() => getComputedStyle(document.getElementById('endov') || document.getElementById('end') || document.body).display !== 'none');
      await p.click('#again'); await p.waitForFunction('["brief","playing"].includes(window.__SP.state)', null, { timeout: 60000 });
      if (await p.evaluate(() => window.__SP.state === 'brief')) await p.click('#brgo');
      const again = await sceneStats(id.replace(/\//g, '_') + '_restart');
      check(`${id}: restart renders a visible scene`, endVisible && visible(again), again);
      await p.evaluate(() => { const G = window.__SP; G.state = 'paused'; }); await p.click('#pmenu').catch(async () => { await p.evaluate(() => document.getElementById('pmenu').click()); });
    } else { await p.evaluate(() => { const G = window.__SP; if (G.state === 'playing') G.state = 'paused'; (G.state === 'paused' ? document.getElementById('pmenu') : document.getElementById('emenu')).click(); }); }
    await p.waitForFunction('window.__SP.state === "menu"', null, { timeout: 30000 });
    if (errs.length > e0) check(`${id}: no runtime errors`, false, errs.slice(e0, e0 + 3));
  }
  console.log(`\nE2E (${profile}): ${pass} passed, ${fail} failed · ${totals.completed}/${totals.combos} missions completed on foot · ${totals.assists} walker assists · page errors: ${errs.length}`);
  fs.mkdirSync(path.join(__dirname, '..', 'docs', 'qa'), { recursive: true });
  if (!filter) fs.writeFileSync(path.join(__dirname, '..', 'docs', 'qa', `e2e-${profile}.json`), JSON.stringify({ profile, pass, fail, totals, errors: errs.slice(0, 20), results }, null, 1));
  await b.close(); process.exit(fail || errs.length ? 1 : 0);
})();
