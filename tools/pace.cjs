// Frame-pacing harness (CPU side). Runs fixed-step simulations in headless Chromium and reports the
// distribution of simulation time per frame, the worst frames with their subsystem breakdown, raycast load,
// JS allocation rate, and frame-rate (in)dependence of player movement.
// GPU cost is NOT measured here (software GL) - see tools/perf.cjs for draw-call / triangle counts.
// Usage: node tools/pace.cjs [label]   -> also writes docs/perf/pace-<label>.json when a label is given
const path = require('path'), fs = require('fs');
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-precise-memory-info', '--js-flags=--expose-gc --max-semi-space-size=128 --min-semi-space-size=128'] });
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  p.on('pageerror', (e) => console.log('PAGEERR', e.message));
  await p.goto('file://' + path.resolve(__dirname, '..', 'index.html') + '?test');
  await p.waitForFunction('window.__SP && window.__SP.state === "menu"', null, { timeout: 90000 });
  const scen = [
    ['forest-patrol', 'forest', 'tactical', [-6.6, 54, 0], false],
    ['forest-fight', 'forest', 'elite', [0, 12, 0], true],
    ['warehouse-fight', 'warehouse', 'elite', [-2, 0, 0], true],
  ];
  const out = {};
  for (const [name, map, ai, pos, fight] of scen) {
    const r = await p.evaluate(([map, ai, pos, fight]) => {
      const G = window.__SP; if (G.state !== 'menu') { window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' })); document.getElementById('pmenu').click(); }
      G.sel.map = map; G.sel.ai = ai; G.sel.layout = 'classic'; document.getElementById('start').click();
      const P = G.player; P.pos.set(pos[0], 0, pos[1]); P.yaw = pos[2]; P.hp = 1e9; if (!fight) G.inp.k.KeyW = true;
      for (let i = 0; i < 60; i++) G.step(1 / 60); // warm up
      const N = 1800, tot = new Float64Array(N), frames = []; let rays = 0, boxes = 0;
      if (window.gc) window.gc(); const h0 = performance.memory.usedJSHeapSize; const t0 = performance.now();
      for (let i = 0; i < N; i++) {
        if (fight && i % 200 === 0 && i < 1200) G.sound(P.pos, 40, 'shot');
        if (!fight && i % 300 === 0) P.yaw += 1.2;
        G.step(1 / 60); const f = G.prof; tot[i] = f.total; rays += f.rays; boxes += f.boxes;
        frames.push([f.total, f.player, f.ai, f.world, f.mission, f.hud, f.rays]);
      }
      const wall = performance.now() - t0, h1 = performance.memory.usedJSHeapSize; G.inp.k.KeyW = false;
      const s = Array.from(tot).sort((a, b) => a - b), q = (x) => s[Math.min(N - 1, Math.floor(x * N))];
      const worst = frames.map((f, i) => [i, ...f]).sort((a, b) => b[1] - a[1]).slice(0, 4).map((f) => ({ frame: f[0], total: +f[1].toFixed(2), player: +f[2].toFixed(2), ai: +f[3].toFixed(2), world: +f[4].toFixed(2), mission: +f[5].toFixed(2), hud: +f[6].toFixed(2), rays: f[7] }));
      return { mean: +(s.reduce((a, b) => a + b, 0) / N).toFixed(3), playerMs: +(frames.reduce((a, f) => a + f[1], 0) / N).toFixed(4), p50: +q(0.5).toFixed(3), p99: +q(0.99).toFixed(3), max: +s[N - 1].toFixed(2), over4ms: s.filter((v) => v > 4).length, raysPerFrame: Math.round(rays / N), boxTestsPerFrame: Math.round(boxes / N), allocKBperFrame: +((h1 - h0) / N / 1024).toFixed(1), worst, alive: G.enemies.filter((e) => !e.dead).length };
    }, [map, ai, pos, fight]);
    out[name] = r; console.log(name.padEnd(16), JSON.stringify({ ...r, worst: undefined })); console.log('   worst frames:', JSON.stringify(r.worst));
  }
  // control: identical fixed work every frame (~0.3 ms of math). Its spikes come from the machine (scheduling,
  // shared CPU), not from the game - compare the game's outliers against this before blaming game code.
  out.control = await p.evaluate(() => {
    const N = 1800, t = new Float64Array(N); let sink = 0;
    for (let i = 0; i < N; i++) { const a = performance.now(); for (let j = 0; j < 60000; j++) sink += Math.sqrt(j * 1.0001); t[i] = performance.now() - a; }
    const s = Array.from(t).sort((x, y) => x - y); return { p50: +s[N >> 1].toFixed(3), p99: +s[Math.floor(N * 0.99)].toFixed(3), max: +s[N - 1].toFixed(2), over4ms: s.filter((v) => v > 4).length, sink: sink > 0 };
  });
  console.log('control (fixed work)', JSON.stringify(out.control));
  // movement frame-rate independence: same inputs at 30 / 60 / 144 Hz
  const mv = await p.evaluate(() => {
    const G = window.__SP, P = G.player, res = {};
    for (const hz of [30, 60, 144]) {
      const dt = 1 / hz, run = (sec, fn) => { for (let i = 0; i < Math.round(sec * hz); i++) { if (fn) fn(); G.step(dt); } };
      G.enemies.forEach((e) => { e.percT = 1e9; e.los = false; e.detect = 0; });
      P.pos.set(30, 0, 0); P.vel.set(0, 0, 0); P.yaw = 0; P.grounded = true; run(0.3);
      const z0 = P.pos.z; G.inp.k.KeyW = true; run(1); const walk = z0 - P.pos.z; G.inp.k.KeyW = false; const z1 = P.pos.z; run(1); const stop = z1 - P.pos.z;
      P.pos.set(30, 0, 0); P.vel.set(0, 0, 0); run(0.3); G.inp.jump = true; let peak = 0, air = 0; run(1.2, () => { peak = Math.max(peak, P.pos.y); if (P.pos.y > 0) air += dt; });
      res[hz] = { walk1s: +walk.toFixed(3), stopDist: +stop.toFixed(3), jumpPeak: +peak.toFixed(3), airTime: +air.toFixed(3) };
    }
    return res;
  });
  out.movement = mv; console.log('movement', JSON.stringify(mv));
  if (process.argv[2]) fs.writeFileSync(path.join(__dirname, '..', 'docs', 'perf', `pace-${process.argv[2]}.json`), JSON.stringify(out, null, 1));
  await b.close();
})();
