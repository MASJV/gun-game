// Rendering cost probe: triangles and draw calls per frame (main pass + shadow pass + view model) for each map,
// quality preset and a few camera positions. Runs on software GL, so the millisecond column only shows
// relative cost - it is NOT a real-GPU frame time. Usage: node tools/perf.cjs [screenshot-dir]
const path = require('path');
const { chromium } = require('playwright');
const VIEWS = { forest: [[-6.6, 54, 0], [0, -8, 2.2], [30, 20, -1]], warehouse: [[44.5, 27, 1.57], [-2, 0, 0], [-28, -18, 1]] };
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  p.on('pageerror', (e) => console.log('PAGEERR', e.message));
  await p.goto('file://' + path.resolve(__dirname, '..', 'index.html') + '?test');
  await p.waitForFunction('window.__SP && window.__SP.state === "menu"', null, { timeout: 90000 });
  for (const map of ['forest', 'warehouse']) for (const q of ['low', 'med', 'high']) {
    const r = await p.evaluate(([map, q, views]) => {
      const G = window.__SP; if (G.state !== 'menu') { window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' })); document.getElementById('pmenu').click(); }
      G.sel.map = map; G.sel.quality = q; G.sel.layout = 'classic'; document.getElementById('start').click();
      return views.map(([x, z, yaw]) => { G.player.pos.set(x, 0, z); G.player.yaw = yaw; for (let i = 0; i < 8; i++) G.step(1 / 60); G.debugRender(); const d = G.debugRender(); return `${Math.round(d.tris / 1000)}k tris / ${d.calls} calls / ${d.ms} ms`; });
    }, [map, q, VIEWS[map]]);
    console.log(map.padEnd(10), q.padEnd(5), r.join('   |   '));
    if (process.argv[2] && q === 'med') { await p.evaluate(() => { window.__SP.state = 'paused'; document.getElementById('pause').classList.remove('on'); }); await p.waitForTimeout(4000); await p.screenshot({ path: path.join(process.argv[2], map + '_' + q + '.png'), timeout: 240000 }); await p.evaluate(() => { window.__SP.state = 'playing'; }); }
  }
  await b.close();
})();
