// Release smoke test: the real menu flow (no ?test), every mission type reaches its briefing and starts,
// the training range loads, no page errors. Usage: node tools/smoke.cjs [screenshot-dir]
const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  const errs = []; p.on('pageerror', (e) => errs.push(e.message)); p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
  await p.goto('file://' + path.resolve(__dirname, '..', 'index.html'));
  await p.waitForFunction('window.__SP && window.__SP.state === "menu"', null, { timeout: 90000 });
  const out = [], shot = async (n) => { if (process.argv[2]) { await p.waitForTimeout(3000); await p.screenshot({ path: path.join(process.argv[2], n + '.png'), timeout: 240000 }); } };
  await shot('menu');
  const plan = [['forest', 'intel', 'quick'], ['warehouse', 'capture', 'standard'], ['forest', 'sabotage', 'extended'], ['warehouse', 'rescue', 'quick'], ['forest', 'multi', 'extended']];
  for (const [map, type, len] of plan) {
    await p.click(`[data-tab="play"]`); await p.click(`[data-v="${map}"]`); await p.click(`.opts[data-k="mission"] [data-v="${type}"]`); await p.click(`.opts[data-k="length"] [data-v="${len}"]`); await p.click('#start');
    await p.waitForFunction('window.__SP.state === "brief"', null, { timeout: 60000 });
    const brief = await p.evaluate(() => [document.getElementById('brt').textContent, document.querySelectorAll('#brl div').length]);
    if (type === 'capture') await shot('briefing');
    await p.click('#brgo'); await p.waitForTimeout(400);
    const r = await p.evaluate(() => { const G = window.__SP; for (let i = 0; i < 120; i++) G.step(1 / 60); return { state: G.state, guards: G.enemies.length, stages: G.mission.def.stages.length, objective: document.getElementById('objt').textContent.slice(0, 60) }; });
    out.push(`${map}/${type}/${len}: briefing "${brief[0]}" (${brief[1]} lines) -> ${r.state}, ${r.guards} guards, ${r.stages} objectives — ${r.objective}`);
    await p.evaluate(() => { document.exitPointerLock && document.exitPointerLock(); const G = window.__SP; G.state = 'paused'; document.getElementById('pmenu').click(); });
  }
  await p.click('[data-tab="training"]'); await p.click('#train'); await p.waitForTimeout(500);
  out.push('training: ' + JSON.stringify(await p.evaluate(() => { const G = window.__SP; for (let i = 0; i < 60; i++) G.step(1 / 60); return [G.state, G.world.name, G.range.targets.length]; })));
  await shot('range');
  console.log(out.join('\n')); console.log(errs.length ? 'ERRORS: ' + errs.join(' | ') : 'no page errors');
  await b.close(); process.exit(errs.length ? 1 : 0);
})();
