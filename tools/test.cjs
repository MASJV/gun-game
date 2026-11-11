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
      G.sel.map = map; G.sel.ai = ai; const L = G.loadout; L.primary = load.primary || 'm4'; L.secondary = load.secondary || 'pistol'; L.kit = load.kit || 'assault';
      for (const id in L.att) Object.assign(L.att[id], { optic: id === 'dmr' ? 'scope' : 'iron', muzzle: false, grip: false, laser: false }, (load.att || {})[id] || {});
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
      check(`weapons: ${prim} ADS zoom matches optic`, o.ads === 1 && o.fov === { ak: 55, m4: 58, dmr: 19 }[prim] && o.scoped === (prim === 'dmr'), [o.fov, o.scoped]);
      if (prim === 'm4') check('attachments: suppressor cuts the noise radius', o.noise < 15, o.noise);
    }
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
      e.ch.refresh(); const h = e.ch.eye(new G.v1.constructor()); P.pitch = Math.atan2(h.y - 0.02 - G.camera.position.y, 12); sim(0.1); G.inp.lmbPressed = true; G.inp.lmb = true; sim(0.03); G.inp.lmb = false; sim(0.1); o.head = e.dead ? 'kill' : 100 - e.hp; G.inp.rmb = false;
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

  await run('equipment', async () => {
    await start('warehouse', 'tactical', { kit: 'recon' });
    const o = await p.evaluate(() => {
      const G = window.__SP, P = G.player, o = {}; calm(); const [a, b2, c] = G.enemies; G.enemies.slice(3).forEach((e) => { e.dead = true; e.found = true; e.ch.root.visible = false; });
      const hold = (e, x, z) => { e.pos.set(x, 0, z); e.path = null; e.waitT = 1e9; e.state = 'PATROL'; e.yaw = e.baseYaw = Math.PI; e.sync(); e.ch.refresh(); };
      // frag: a is in the open 3 m from the blast, b is behind a shipping container
      hold(a, 30, -15); hold(b2, 39, -15); hold(c, 40, 20); P.pos.set(30, 0, 14); P.hp = 100;
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
    check('ai: peeks are short and irregular for tactical/elite, longer for recruits', R.recruit.peekMean > R.tactical.peekMean && R.tactical.peekSd > 0.2 && R.elite.peekSd > 0.2, [R.recruit.peekMean, R.tactical.peekMean, R.elite.peekMean]);
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
      const [a, b2] = G.enemies.filter((e) => e.duty === 'patrol'); a.pos.set(30, 0, -18); a.sync(); a.damage(999, P.pos, 'torso'); b2.release(); b2.pos.set(30, 0, -12); b2.yaw = b2.baseYaw = 0; b2.path = null; b2.waitT = 6; b2.state = 'PATROL'; b2.sync();
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
    for (const map of ['forest', 'warehouse']) {
      await start(map, 'recruit');
      const o = await p.evaluate(() => {
        const G = window.__SP, P = G.player, W = G.world, o = {}; G.enemies.forEach((e) => { e.dead = true; }); const n0 = G.enemies.length;
        const ob = W.objective.pos; P.pos.set(ob[0] + (W.id === 'forest' ? 0 : 1.3), 0, ob[2] + (W.id === 'forest' ? 1.3 : 0)); sim(0.1);
        o.prompt = document.getElementById('prompt').textContent;
        if (W.objective.hold) { key('KeyE', true); sim(3.2); key('KeyE', false); } else { G.inp.e = true; sim(0.1); }
        o.stage = G.stage; o.sec = G.sec.level; sim(20); o.rein = G.enemies.length - n0;
        const ex = W.extraction.pos; P.pos.set(ex[0], 0, ex[2]); sim(0.2); o.state = G.state; o.end = document.getElementById('endt').textContent;
        return o;
      });
      check(`mission/${map}: objective -> lockdown -> extraction completes`, o.stage === 1 && o.sec === 3 && o.rein === 2 && o.state === 'won', o);
    }
    await start('warehouse', 'tactical');
    const d = await p.evaluate(() => {
      const G = window.__SP, P = G.player, o = {}; const e = G.enemies[0];
      P.damage(120, e.pos, { name: e.type.name, dist: 12, x: e.pos.x, z: e.pos.z }); sim(0.1); o.state = G.state; o.sub = document.getElementById('ends').textContent;
      document.getElementById('again').click(); o.restart = [G.state, G.player.hp, G.enemies.length];
      press('Escape'); o.paused = G.state; document.getElementById('resume').click(); o.resumed = G.state;
      return o;
    });
    check('mission: death screen explains the cause; restart, pause and resume work', d.state === 'dead' && /KILLED BY/.test(d.sub) && d.restart[0] === 'playing' && d.restart[1] === 100 && d.paused === 'paused' && d.resumed === 'playing', d);
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
