// SHADOW PROTOCOL - game loop, mission logic, menu and HUD.
import * as THREE from 'three';
import { buildWorld, rayBoxes, rnd } from './world.js';
import { Player, WEAPONS } from './player.js';
import { Enemy, PROFILES } from './enemy.js';
import { FX } from './fx.js';
import { Audio } from './audio.js';

const $ = (id) => document.getElementById(id);
const TEST = location.search.includes('test');
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.autoClear = false;

const G = {
  state: 'menu', sel: { map: 'forest', ai: 'smart', weapon: 0 }, sens: 1,
  inp: { k: {}, mx: 0, my: 0, lmb: false, rmb: false, lmbPressed: false, jump: false, e: false },
  camera: new THREE.PerspectiveCamera(75, 1, 0.08, 600), wcam: new THREE.PerspectiveCamera(52, 1, 0.01, 5),
  audio: new Audio(), enemies: [], stats: {}, nv: false,
  v1: new THREE.Vector3(), v2: new THREE.Vector3(), v3: new THREE.Vector3(), pbox: [{ bullet: true }],
};
G.camera.rotation.order = 'YXZ';
window.__SP = G;

// ---------- services used by player / enemies ----------
G.los = (ax, ay, az, bx, by, bz) => {
  const dx = bx - ax, dy = by - ay, dz = bz - az, d = Math.hypot(dx, dy, dz);
  return d < 0.01 || !rayBoxes(G.world.colliders, ax, ay, az, dx / d, dy / d, dz / d, d, 'sight');
};
G.claimed = (c, self) => G.enemies.some((e) => e !== self && !e.dead && e.dest && Math.hypot(e.dest.x - c.x, e.dest.z - c.z) < 2);
G.sound = (pos, radius, kind, src) => {
  for (const e of G.enemies) {
    if (e === src || e.dead) continue;
    const d = Math.hypot(e.pos.x - pos.x, e.pos.z - pos.z);
    if (d < radius * e.pr.hear) e.hear(pos, kind, d);
  }
};
G.shareAlert = (src) => { // spoken call-out: only allies within earshot, with positional error
  for (const e of G.enemies) {
    if (e === src || e.dead) continue;
    if (Math.hypot(e.pos.x - src.pos.x, e.pos.z - src.pos.z) < src.pr.share) e.onAlert(src.lkp.x + rnd(-2.5, 2.5), src.lkp.z + rnd(-2.5, 2.5));
  }
};
G.playerBox = () => {
  const p = G.player.pos, b = G.pbox[0];
  b.x0 = p.x - 0.3; b.x1 = p.x + 0.3; b.z0 = p.z - 0.3; b.z1 = p.z + 0.3; b.y0 = p.y; b.y1 = p.y + G.player.height;
  return G.pbox;
};
const panTo = (x, z) => { const P = G.player, dx = x - P.pos.x, dz = z - P.pos.z, d = Math.hypot(dx, dz) || 1; return (dx * Math.cos(P.yaw) - dz * Math.sin(P.yaw)) / d; };
G.enemyShotSound = (e) => G.audio.enemyShot(e.pd, panTo(e.pos.x, e.pos.z));
G.nearMiss = (ox, oy, oz, dx, dy, dz) => {
  const c = G.camera.position, t = (c.x - ox) * dx + (c.y - oy) * dy + (c.z - oz) * dz;
  if (t > 0 && Math.hypot(ox + dx * t - c.x, oy + dy * t - c.y, oz + dz * t - c.z) < 1.4) G.audio.whiz(panTo(ox, oz));
};
G.playerShot = (o, d, w, muzzle) => {
  const wh = rayBoxes(G.world.colliders, o.x, o.y, o.z, d.x, d.y, d.z, 250, 'bullet');
  let best = wh ? wh.d : 250, hitE = null, head = false;
  for (const e of G.enemies) { if (e.dead) continue; const r = e.rayHit(o, d, best); if (r) { best = r.d; hitE = e; head = r.head; } }
  const end = G.v1.copy(d).multiplyScalar(best).add(o);
  G.fx.tracer(muzzle, end);
  if (hitE) {
    const dmg = w.dmg * (head ? 2.5 : 1) * (w.falloff && best > w.falloff ? 0.7 : 1);
    hitE.damage(dmg, G.player.pos, head); G.fx.blood(end, G.v2.copy(d).negate());
    G.stats.hits++; hitMark(hitE.dead); G.audio.hit(hitE.dead);
  } else if (wh) G.fx.impact(end, G.v2.set(wh.nx, wh.ny, wh.nz));
};
G.onKill = () => { G.stats.kills++; };
G.onHurt = (from) => {
  G.audio.hurt(); vig = Math.min(1, vig + 0.55);
  addInd(from.x, from.z, '#ff4a3a', 1.2);
};

// ---------- mission lifecycle ----------
function disposeScene() {
  if (!G.scene) return;
  G.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  G.audio.stopAmbient();
}
function interactable(kind, x, y, z) {
  const g = new THREE.Group();
  const add = (hex, w, h, d, px, py, pz, em) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), em ? new THREE.MeshBasicMaterial({ color: hex }) : new THREE.MeshLambertMaterial({ color: hex })); m.position.set(px, py, pz); g.add(m); return m; };
  if (kind === 'intel') { add(0x1c1f22, 0.5, 0.14, 0.36, 0, 0.07, 0); add(0xffb648, 0.42, 0.02, 0.05, 0, 0.15, 0, true); add(0xffb648, 0.06, 0.06, 0.02, 0, 0.07, 0.19, true); }
  else if (kind === 'terminal') { add(0x15171a, 0.08, 0.5, 0.8, 0, 0.3, 0); g.screen = add(0x30ff78, 0.02, 0.4, 0.68, 0.05, 0.31, 0, true); add(0x1c1f22, 0.3, 0.03, 0.6, 0.3, 0.02, 0); }
  else if (kind === 'med') { add(0xd8dcd8, 0.5, 0.3, 0.34, 0, 0.15, 0); add(0xd43a30, 0.2, 0.06, 0.02, 0, 0.17, 0.18, true); add(0xd43a30, 0.06, 0.2, 0.02, 0, 0.17, 0.18, true); }
  else { add(0x3d4a30, 0.6, 0.32, 0.36, 0, 0.16, 0); add(0xe8b04a, 0.6, 0.05, 0.37, 0, 0.2, 0, true); }
  g.position.set(x, y, z); G.scene.add(g);
  return g;
}
function spawnEnemy(x, z, route) {
  const t = Math.random(), type = t < 0.5 ? 'guard' : t < 0.75 ? 'aggressor' : 'cautious';
  const c = G.world.nav.nearest(x, z) || { x, z };
  const e = new Enemy(G, c.x, c.z, route, type, PROFILES[G.sel.ai]);
  G.enemies.push(e); return e;
}
function startMission() {
  disposeScene();
  const scene = (G.scene = new THREE.Scene()), ws = (G.wscene = new THREE.Scene());
  ws.add(new THREE.HemisphereLight(0xaab8d0, 0x202428, 1.5)); const wd = new THREE.DirectionalLight(0xffffff, 1.4); wd.position.set(-1, 2, 1); ws.add(wd);
  G.wlight = ws.children[0];
  const W = (G.world = buildWorld(G.sel.map, scene));
  G.nvLight = new THREE.AmbientLight(0xffffff, 0); scene.add(G.nvLight);
  G.fx = new FX(scene);
  G.player = new Player(G, W.spawn, G.sel.weapon);
  G.enemies = [];
  // randomised encounter: 7 of the map's patrol routes, guaranteed presence near the objective
  const routes = [...W.routes].sort(() => Math.random() - 0.5).sort((a, b) => (b.must || 0) - (a.must || 0));
  const must = routes.filter((r) => r.must), rest = routes.filter((r) => !r.must);
  const chosen = [must[0], ...[...must.slice(1), ...rest].sort(() => Math.random() - 0.5).slice(0, 6)];
  for (const r of chosen) { // start on a random waypoint that is not close to the player's insertion point
    const far = r.p.filter(([x, z]) => Math.hypot(x - W.spawn.x, z - W.spawn.z) > 34), pts = far.length ? far : r.p;
    const e = spawnEnemy(...pts[Math.floor(Math.random() * pts.length)], r.p); e.wi = Math.floor(Math.random() * r.p.length);
  }
  G.total = chosen.length;
  // interactables
  const o = W.objective;
  G.objMesh = interactable(o.kind, ...o.pos);
  G.pickups = W.pickups.map(([kind, x, z]) => ({ kind, x, z, mesh: interactable(kind, x, 0, z) }));
  const ex = W.extraction.pos;
  G.exMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.5, 6), new THREE.MeshBasicMaterial({ color: 0x40ff70 })); G.exMesh.position.set(ex[0], 0.25, ex[2]); scene.add(G.exMesh);
  G.exLight = new THREE.PointLight(0x40ff70, 6, 16, 1.5); G.exLight.position.set(ex[0], 1.2, ex[2]); scene.add(G.exLight);
  // laser
  G.laserDot = new THREE.Mesh(new THREE.SphereGeometry(1, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff2020, fog: false })); scene.add(G.laserDot);
  const lg = new THREE.BoxGeometry(0.004, 0.004, 1); lg.translate(0, 0, 0.5);
  G.laserBeam = new THREE.Mesh(lg, new THREE.MeshBasicMaterial({ color: 0xff2020, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, fog: false })); scene.add(G.laserBeam); G.laserDot.visible = G.laserBeam.visible = false;
  G.stage = 0; G.hack = 0; G.time = 0; G.reinT = -1; G.stats = { shots: 0, hits: 0, kills: 0 };
  vig = 0; inds.forEach((i) => (i.t = 0));
  setNV(false);
  $('objt').textContent = o.text; toast(W.name + ' — ' + o.text.toUpperCase(), 4);
  G.audio.ambient(W.env.amb);
  show(null); $('hud').classList.add('on');
  G.state = 'playing'; hudCache = {};
  if (!TEST) lock();
}
function lock() {
  try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => { $('phint').textContent = 'CLICK RESUME AGAIN TO RE-CAPTURE THE MOUSE'; }); } catch (e) { /* retried by user */ }
}
function show(id) { for (const k of ['menu', 'pause', 'end']) $(k).classList.toggle('on', k === id); }
function pause() { if (G.state !== 'playing') return; G.state = 'paused'; $('phint').textContent = 'MISSION ON HOLD'; show('pause'); G.inp.k = {}; G.inp.lmb = G.inp.rmb = false; }
function resume() { if (G.state !== 'paused') return; if (TEST) { G.state = 'playing'; show(null); } else lock(); }
function toMenu() { G.state = 'menu'; disposeScene(); $('hud').classList.remove('on'); setNV(false); show('menu'); if (document.pointerLockElement) document.exitPointerLock(); }
function endMission(win) {
  G.state = win ? 'won' : 'dead';
  if (document.pointerLockElement) document.exitPointerLock();
  const P = G.player, s = G.stats, t = Math.floor(G.time);
  $('endt').textContent = win ? 'MISSION COMPLETE' : 'OPERATOR DOWN'; $('endt').style.color = win ? 'var(--g)' : '#ff6a5a';
  let sub = win ? 'EXTRACTION SUCCESSFUL' : 'MISSION FAILED';
  if (!win && P.lastHit) { const h = P.lastHit; sub = `KILLED BY ${h.name.toUpperCase()} — RIFLE FIRE FROM THE ${compass(h.x - P.pos.x, h.z - P.pos.z)}, ${Math.round(h.dist)} M`; }
  $('ends').textContent = sub;
  const rows = [['Map', G.world.name], ['Enemy intelligence', PROFILES[G.sel.ai].label], ['Time', `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`],
    ['Hostiles neutralised', `${s.kills} / ${G.enemies.length}`], ['Accuracy', s.shots ? Math.round((s.hits / s.shots) * 100) + '%' : '—'], ['Health remaining', Math.ceil(P.hp)], ['Objective', G.stage ? 'Secured' : 'Not secured']];
  $('endstats').innerHTML = rows.map(([a, b]) => `<span>${a}</span><b>${b}</b>`).join('');
  show('end'); win ? G.audio.win() : G.audio.lose();
}
const compass = (dx, dz) => ['NORTH', 'NORTH-EAST', 'EAST', 'SOUTH-EAST', 'SOUTH', 'SOUTH-WEST', 'WEST', 'NORTH-WEST'][((Math.round(Math.atan2(dx, -dz) / (Math.PI / 4)) % 8) + 8) % 8];

function setNV(on) {
  G.nv = on; $('nv').classList.toggle('on', on);
  canvas.style.filter = on ? 'grayscale(1) contrast(1.15) brightness(1.3)' : '';
  if (!G.world) return;
  const e = G.world.env;
  G.nvLight.intensity = on ? 3.2 : 0; G.scene.fog.density = e.fog[1] * (on ? 0.5 : 1); G.wlight.intensity = on ? 3 : 1.5;
}
function completeObjective() {
  const W = G.world;
  G.stage = 1; G.hack = 0; G.audio.objective();
  if (G.objMesh.screen) G.objMesh.screen.material.color.setHex(0xffb648); else G.scene.remove(G.objMesh);
  $('objt').textContent = W.extraction.text; toast(W.objective.done + ' — ' + W.extraction.text.toUpperCase(), 4);
  G.reinT = 5;
}
function reinforce() { // a response team walks in from the map edge farthest from the player
  const W = G.world, P = G.player;
  const pts = [...W.reinforce].sort((a, b) => Math.hypot(b.x - P.pos.x, b.z - P.pos.z) - Math.hypot(a.x - P.pos.x, a.z - P.pos.z));
  const s = pts[0];
  if (Math.hypot(s.x - P.pos.x, s.z - P.pos.z) < 30) return; // never appear close to the player
  for (let i = 0; i < 2; i++) {
    const e = spawnEnemy(s.x + i * 2, s.z + i, W.routes[0].p);
    e.alerted = true; e.lkp.set(W.objective.pos[0], 0, W.objective.pos[2]); e.hasLkp = true; e.lkpAge = 5;
    e.goInvestigate(W.objective.pos[0] + rnd(-3, 3), W.objective.pos[2] + rnd(-3, 3));
  }
  toast(`ALARM RAISED — RESPONSE TEAM ENTERING FROM THE ${s.n.toUpperCase()}`, 5);
}

// ---------- HUD ----------
let vig = 0, toastT = 0, hitT = 0, hudCache = {};
const inds = [];
for (let i = 0; i < 8; i++) { const el = document.createElement('div'); el.className = 'ind'; $('inds').appendChild(el); inds.push({ el, t: 0, x: 0, z: 0, life: 1 }); }
function addInd(x, z, color, life) { const i = inds.find((n) => n.t <= 0) || inds[0]; i.x = x; i.z = z; i.t = i.life = life; i.el.style.color = color; }
function toast(msg, t) { $('toast').textContent = msg; $('toast').style.opacity = 1; toastT = t; }
function hitMark(kill) { hitT = kill ? 0.3 : 0.14; $('hitm').className = kill ? 'k' : ''; }
function setText(id, v) { if (hudCache[id] !== v) { hudCache[id] = v; $(id).innerHTML = v; } }
function updateHUD(dt) {
  const P = G.player, w = P.w, a = P.ammo[P.cur], W = G.world;
  setText('hpn', Math.ceil(P.hp));
  const hw = Math.round(P.hp) + '%'; if (hudCache.hw !== hw) { hudCache.hw = hw; $('hpf').style.width = hw; $('hpf').style.background = P.hp < 35 ? '#ff5a4a' : P.hp < 60 ? '#e8b04a' : 'var(--g)'; }
  setText('wn', w.name + (P.reloading ? ' — RELOADING' : ''));
  setText('am', `${a.mag}<span> / ${a.reserve}</span>`);
  setText('slots', WEAPONS.map((x, i) => (i === P.cur ? `<b>${i + 1} ${x.name}</b>` : `${i + 1} ${x.name}`)).join(' · '));
  setText('stat', `ENEMY AI <b>${PROFILES[G.sel.ai].label}</b><br>NIGHT VISION <b class="${G.nv ? '' : 'off'}">${G.nv ? 'ON' : 'OFF'}</b>` + (w.laser ? `<br>LASER <b class="${P.laserOn ? '' : 'off'}">${P.laserOn ? 'ON' : 'OFF'}</b>` : '') + `<br>HOSTILES <b>${G.enemies.filter((e) => !e.dead).length}</b>`);
  // crosshair
  const gap = 5 + P.spread * 5.5, op = P.adsF > 0.6 || P.sprintF > 0.6 ? 0 : 1, L = 8;
  const cs = [[-1, -gap - L, 2, L], [-1, gap, 2, L], [-gap - L, -1, L, 2], [gap, -1, L, 2]];
  for (let i = 0; i < 4; i++) { const s = $('c' + i).style; s.left = cs[i][0] + 'px'; s.top = cs[i][1] + 'px'; s.width = cs[i][2] + 'px'; s.height = cs[i][3] + 'px'; s.opacity = op; }
  if (hitT > 0) { hitT -= dt; $('hitm').style.opacity = Math.min(1, hitT * 8); } else $('hitm').style.opacity = 0;
  vig = Math.max(0, vig - dt * 1.3); $('vig').style.opacity = Math.max(vig, P.hp < 30 ? 0.35 : 0);
  if (toastT > 0 && (toastT -= dt) <= 0) $('toast').style.opacity = 0;
  // direction indicators: damage (red) + enemies that are noticing you (amber)
  for (const e of G.enemies) {
    if (e.dead || e.seeing || e.detect < 0.15 || !e.los) continue;
    let slot = inds.find((n) => n.src === e && n.t > 0);
    if (!slot) { slot = inds.find((n) => n.t <= 0); if (!slot) continue; slot.src = e; slot.el.style.color = '#e8b04a'; }
    slot.x = e.pos.x; slot.z = e.pos.z; slot.t = 0.25; slot.life = 0.25 / Math.max(0.2, e.detect);
  }
  for (const n of inds) {
    if (n.t <= 0) { if (n.on) { n.el.style.opacity = 0; n.on = false; n.src = null; } continue; }
    n.t -= dt; n.on = true;
    const ang = Math.atan2(n.x - P.pos.x, -(n.z - P.pos.z)) + P.yaw;
    n.el.style.transform = `rotate(${ang}rad)`; n.el.style.opacity = Math.min(1, n.t / n.life);
  }
  // objective marker
  const t = G.stage === 0 ? W.objective.pos : W.extraction.pos, v = G.v3.set(t[0], t[1] + 1, t[2]), d = Math.hypot(t[0] - P.pos.x, t[2] - P.pos.z);
  v.project(G.camera);
  let sx = v.x, sy = v.y;
  if (v.z > 1) { sx = -sx; sy = -1; }
  const m = Math.max(Math.abs(sx), Math.abs(sy)); if (m > 0.9 || v.z > 1) { const k = 0.9 / (m || 1); sx *= k; sy *= k; }
  const ms = $('mark').style; ms.left = ((sx + 1) / 2) * innerWidth + 'px'; ms.top = ((1 - sy) / 2) * innerHeight + 'px';
  setText('mark', (G.stage === 0 ? 'OBJECTIVE ' : 'EXTRACT ') + Math.round(d) + ' M');
}

function updateMission(dt) {
  const P = G.player, W = G.world, inp = G.inp;
  G.time += dt;
  let prompt = '';
  const near = (x, z, r) => Math.hypot(x - P.pos.x, z - P.pos.z) < r;
  if (G.stage === 0) {
    const o = W.objective;
    if (near(o.pos[0], o.pos[2], 2.5)) {
      prompt = `<b>E</b>${o.prompt}`;
      if (o.hold) { if (inp.k.KeyE) { G.hack += dt; if (G.hack >= o.hold) completeObjective(); } else G.hack = Math.max(0, G.hack - dt * 2); }
      else if (inp.e) completeObjective();
    } else G.hack = 0;
  } else if (near(W.extraction.pos[0], W.extraction.pos[2], 3.2)) return endMission(true);
  for (const pk of G.pickups) {
    if (pk.taken || !near(pk.x, pk.z, 1.9)) continue;
    const med = pk.kind === 'med';
    if (med && P.hp >= 100) { prompt = prompt || 'Health full'; continue; }
    prompt = prompt || `<b>E</b>${med ? 'Use medkit' : 'Take ammunition'}`;
    if (inp.e && !(G.stage === 0 && near(W.objective.pos[0], W.objective.pos[2], 2.5))) {
      pk.taken = true; G.scene.remove(pk.mesh); G.audio.pickup();
      if (med) P.hp = Math.min(100, P.hp + 60); else P.ammo.forEach((a, i) => (a.reserve = Math.min(WEAPONS[i].reserve * 2, a.reserve + WEAPONS[i].mag * 2)));
      toast(med ? 'MEDKIT USED' : 'AMMUNITION RESUPPLIED', 1.6);
    }
  }
  inp.e = false;
  const pe = $('prompt'); if (hudCache.pr !== prompt) { hudCache.pr = prompt; pe.innerHTML = prompt; pe.style.display = prompt ? 'block' : 'none'; }
  const hk = G.stage === 0 && G.hack > 0; $('hack').style.display = hk ? 'block' : 'none'; if (hk) $('hackf').style.width = (G.hack / W.objective.hold) * 100 + '%';
  if (G.reinT > 0 && (G.reinT -= dt) <= 0) reinforce();
  // ambient light animation
  for (const d of W.dyn) d.l.intensity = d.base * (d.kind === 'fire' ? 0.75 + Math.sin(G.time * 11) * 0.12 + Math.random() * 0.2 : Math.sin(G.time * 31) > 0.86 || Math.random() < 0.02 ? 0.25 : 1);
  G.exLight.intensity = G.stage ? 14 + Math.sin(G.time * 4) * 5 : 4;
  // laser
  const on = P.w.laser && P.laserOn && P.swT <= 0 && !P.reloading && P.sprintF < 0.5;
  G.laserDot.visible = G.laserBeam.visible = on;
  if (on) {
    const o = G.camera.position, d = P.fwd, wh = rayBoxes(W.colliders, o.x, o.y, o.z, d.x, d.y, d.z, 150, 'bullet');
    let best = wh ? wh.d : 150;
    for (const e of G.enemies) { if (e.dead) continue; const r = e.rayHit(o, d, best); if (r) best = r.d; }
    G.laserDot.position.copy(d).multiplyScalar(best - 0.02).add(o); G.laserDot.scale.setScalar(0.006 + best * 0.0022);
    G.laserBeam.position.copy(P.muzzleW); G.laserBeam.lookAt(G.laserDot.position); G.laserBeam.scale.z = P.muzzleW.distanceTo(G.laserDot.position);
  }
  // moon shadow frustum follows the player
  const m = W.moon; m.target.position.set(P.pos.x, 0, P.pos.z); m.position.copy(W.moonDir).multiplyScalar(110).add(m.target.position);
}

// ---------- loop ----------
function step(dt) {
  G.player.update(dt);
  G.inp.mx = G.inp.my = 0;
  for (const e of G.enemies) e.update(dt);
  G.fx.update(dt);
  updateMission(dt);
  if (G.state !== 'playing') return;
  if (G.player.dead) return endMission(false);
  updateHUD(dt);
}
G.step = step;
let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (G.state === 'playing') step(dt);
  if (G.state !== 'menu' && G.scene) {
    renderer.clear(); renderer.render(G.scene, G.camera);
    renderer.clearDepth(); renderer.render(G.wscene, G.wcam);
  }
}
function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  G.camera.aspect = G.wcam.aspect = innerWidth / innerHeight; G.camera.updateProjectionMatrix(); G.wcam.updateProjectionMatrix();
}
addEventListener('resize', resize); resize();

// ---------- input ----------
addEventListener('keydown', (ev) => {
  if (G.state === 'paused' && ev.code === 'Escape') return resume();
  if (G.state !== 'playing') return;
  if (['Space', 'Tab', 'KeyS', 'KeyD', 'KeyA', 'KeyR', 'KeyN', 'KeyL', 'KeyE', 'KeyC'].includes(ev.code) || ev.ctrlKey) ev.preventDefault();
  if (ev.repeat) return;
  const P = G.player; G.inp.k[ev.code] = true;
  if (ev.code === 'Space') G.inp.jump = true;
  else if (ev.code === 'KeyR') P.reload();
  else if (ev.code === 'KeyE') G.inp.e = true;
  else if (ev.code === 'KeyC') P.crouchToggle = !P.crouchToggle;
  else if (ev.code === 'KeyN') { setNV(!G.nv); G.audio.beep(G.nv); }
  else if (ev.code === 'KeyL') { P.laserOn = !P.laserOn; G.audio.beep(P.laserOn); }
  else if (/^Digit[123]$/.test(ev.code)) P.switchTo(+ev.code[5] - 1);
  else if (ev.code === 'Escape' && TEST) pause();
});
addEventListener('keyup', (ev) => { G.inp.k[ev.code] = false; });
addEventListener('blur', () => { G.inp.k = {}; G.inp.lmb = G.inp.rmb = false; });
addEventListener('mousemove', (ev) => { if (G.state === 'playing' && (document.pointerLockElement === canvas || TEST)) { G.inp.mx += ev.movementX; G.inp.my += ev.movementY; } });
addEventListener('mousedown', (ev) => {
  if (G.state !== 'playing') return;
  if (!TEST && document.pointerLockElement !== canvas) return lock();
  if (ev.button === 0) { G.inp.lmb = true; G.inp.lmbPressed = true; } else if (ev.button === 2) G.inp.rmb = true;
});
addEventListener('mouseup', (ev) => { if (ev.button === 0) G.inp.lmb = false; else if (ev.button === 2) G.inp.rmb = false; });
addEventListener('contextmenu', (ev) => ev.preventDefault());
document.addEventListener('pointerlockchange', () => {
  if (document.pointerLockElement === canvas) { if (G.state === 'paused') { G.state = 'playing'; show(null); last = performance.now(); } }
  else if (G.state === 'playing' && !TEST) pause();
});

// ---------- menu ----------
const BRIEF = {
  forest: 'A hostile patrol holds an abandoned outpost deep in the forest. Slip through the treeline, take the intelligence package from the command hut and reach the extraction flare in the north-east clearing. It is dark out there — use night vision.',
  warehouse: 'A secured terminal sits in the office of a guarded warehouse. Enter from the loading yard, access the terminal and exfiltrate through the west back lot. Side doors and the outer alleys let you bypass the main hall.',
};
document.querySelectorAll('.opts').forEach((row) => row.addEventListener('click', (ev) => {
  const b = ev.target.closest('.opt'); if (!b) return;
  row.querySelectorAll('.opt').forEach((o) => o.classList.toggle('sel', o === b));
  const k = row.dataset.k; G.sel[k] = k === 'weapon' ? +b.dataset.v : b.dataset.v;
  $('brief').textContent = BRIEF[G.sel.map];
}));
$('brief').textContent = BRIEF.forest;
$('sens').addEventListener('input', (ev) => { G.sens = +ev.target.value; $('sensv').textContent = G.sens.toFixed(2); });
const begin = () => { G.audio.init(); startMission(); };
$('start').onclick = begin; $('again').onclick = begin; $('prestart').onclick = begin;
$('resume').onclick = resume; $('pmenu').onclick = toMenu; $('emenu').onclick = toMenu;
// night-vision grain
{ const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'), im = g.createImageData(128, 128);
  for (let i = 0; i < im.data.length; i += 4) { im.data[i] = im.data[i + 1] = im.data[i + 2] = Math.random() * 255; im.data[i + 3] = 255; }
  g.putImageData(im, 0, 0); $('nvn').style.background = `url(${c.toDataURL()})`; }
requestAnimationFrame(frame);
