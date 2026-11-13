// SHADOW PROTOCOL V2 - game loop, mission logic, menus and HUD.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildWorld, rayBoxes, rnd, updateLOD, RAYSTATS } from './world.js';
import { loadAssets } from './assets.js';
import { Player, THROW_NAME } from './player.js';
import { WEAPONS, OPTICS, KITS, loadLoadout, saveLoadout, statsFor, attText, buildView } from './weapons.js';
import { Enemy, PROFILES } from './enemy.js';
import { Character } from './character.js';
import { Security, LEVELS } from './squad.js';
import { Grenades } from './equipment.js';
import { FX } from './fx.js';
import { makeBallistics } from './ballistics.js';
import { Range } from './range.js';
import { MISSIONS, LENGTHS, Mission, generateMission, deployment, briefing, loadHistory, recordMission, validate } from './missions.js';
import { Audio } from './audio.js';
import { initLobby, createSession } from './mp.js';

const $ = (id) => document.getElementById(id);
const TEST = location.search.includes('test');
const canvas = $('c');
// Optional low-latency canvas ("desynchronized": frames bypass the compositor where the browser supports it; may tear).
// Read before the context exists, so changing it needs a reload.
let LOWLAT = false; try { LOWLAT = !!JSON.parse(localStorage.getItem('sp2_settings') || '{}').lowlat; } catch (e) { /* default */ }
const GLCTX = LOWLAT ? canvas.getContext('webgl2', { antialias: true, alpha: false, desynchronized: true, powerPreference: 'high-performance', stencil: true, depth: true }) : null;
// Visible failure report: a render / simulation failure must never look like a (black) running game.
const fatal = (title, detail, canMenu) => {
  const el = $('fatal'); if (!el) return; el.querySelector('b').textContent = title; el.querySelector('p').textContent = detail || '';
  $('fatalmenu').style.display = canMenu ? '' : 'none'; el.classList.add('on');
};
let renderer;
try { renderer = new THREE.WebGLRenderer({ canvas, context: GLCTX || undefined, antialias: true, powerPreference: 'high-performance' }); }
catch (e) { fatal('WEBGL IS NOT AVAILABLE', 'The browser could not create a WebGL context (' + e.message + '). Enable hardware acceleration or try another browser.', false); throw e; }
renderer.debug.onShaderError = (gl, program, vs, fs) => {
  const log = (gl.getProgramInfoLog(program) || '') + ' ' + (gl.getShaderInfoLog(fs) || '') + ' ' + (gl.getShaderInfoLog(vs) || '');
  console.error('SHADER ERROR', log.trim().slice(0, 800)); G.renderErrors = (G.renderErrors || 0) + 1;
  fatal('GRAPHICS ERROR', 'A shader failed to compile on this GPU: ' + log.trim().slice(0, 220) + ' — try the Low graphics preset.', true);
};
canvas.addEventListener('webglcontextlost', (ev) => { ev.preventDefault(); G.contextLost = true; fatal('GRAPHICS DEVICE LOST', 'The GPU reset the WebGL context (driver reset or out of video memory). Restoring… If this message stays, reload the page or lower the graphics preset.', true); });
canvas.addEventListener('webglcontextrestored', () => { G.contextLost = false; $('fatal').classList.remove('on'); });
renderer.shadowMap.type = THREE.PCFShadowMap; renderer.autoClear = false;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.5;
const ENV = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;

const G = {
  state: 'load', sel: { map: 'forest', ai: 'tactical', quality: 'med', mission: 'intel', length: 'quick', seed: null }, hist: loadHistory(), civs: [], sens: 1, fov: 75, loadout: loadLoadout(),
  inp: { k: {}, mx: 0, my: 0, lmb: false, rmb: false, lmbPressed: false, jump: false, e: false },
  camera: new THREE.PerspectiveCamera(75, 1, 0.08, 600), wcam: new THREE.PerspectiveCamera(50, 1, 0.01, 5),
  audio: new Audio(), enemies: [], stats: {}, nv: false, frame: 0,
  v1: new THREE.Vector3(), v2: new THREE.Vector3(), v3: new THREE.Vector3(), pbox: [{ bullet: true }],
};
G.camera.rotation.order = 'YXZ';
window.__SP = G; window.__rayBoxes = rayBoxes; window.__SPrenderer = renderer;
G.renderer = renderer; // read by tests and tools
G.KITS_DEF = KITS; G.WEAPONS = WEAPONS; G.WEAPONS_DEF = Object.keys(WEAPONS).map((id) => ({ id, slot: WEAPONS[id].slot, melee: !!WEAPONS[id].melee, optics: WEAPONS[id].optics || ['iron'], muzzle: !!WEAPONS[id].muzzle, grip: !!WEAPONS[id].grip, laser: !!WEAPONS[id].laser }));
G.debugRender = () => { // used by the perf probe in tools/: one synchronous frame, GPU flushed
  const t0 = performance.now(), gl = renderer.getContext(); renderer.info.autoReset = false; renderer.info.reset();
  renderer.setViewport(0, 0, innerWidth, innerHeight); renderer.clear(); renderer.render(G.scene, G.camera); renderer.clearDepth(); renderer.render(G.wscene, G.wcam);
  gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4)); 
  return { ms: Math.round(performance.now() - t0), calls: renderer.info.render.calls, tris: renderer.info.render.triangles };
};
try { const s = JSON.parse(localStorage.getItem('sp2_settings') || '{}'); if (s.sens) G.sens = s.sens; if (s.fov) G.fov = s.fov; if (s.quality) G.sel.quality = s.quality; if (s.vol != null) G.vol = s.vol; if (s.adaptive != null) G.adaptive = s.adaptive; if (s.overlay != null) G.overlay = s.overlay; if (s.raw != null) G.rawInput = s.raw; if (s.cam != null) G.camMotion = s.cam; if (s.wsway != null) G.weaponSway = s.wsway; if (s.target) G.fpsTarget = s.target; G.lowLatency = !!s.lowlat; for (const k of ['sensAds', 'sensScope', 'sensY', 'headBob']) if (typeof s[k] === 'number') G[k] = s[k]; if (s.sprintFov === false) G.sprintFov = false; } catch (e) { /* defaults */ }
const CONTROL_DEFAULTS = { sens: 1, sensAds: 1, sensScope: 1, sensY: 1, fov: 75, camMotion: 0.5, headBob: 1, weaponSway: 1, sprintFov: true };
for (const k in CONTROL_DEFAULTS) if (G[k] == null) G[k] = CONTROL_DEFAULTS[k];
if (G.adaptive == null) G.adaptive = true; if (G.camMotion == null) G.camMotion = 0.5; if (G.weaponSway == null) G.weaponSway = 1; if (G.fpsTarget !== 'refresh') G.fpsTarget = '60'; if (G.rawInput == null) G.rawInput = true; G.overlay = !!G.overlay;
const saveSettings = () => { try { localStorage.setItem('sp2_settings', JSON.stringify({ sens: G.sens, fov: G.fov, quality: G.sel.quality, vol: G.vol, adaptive: G.adaptive, overlay: G.overlay, raw: G.rawInput, cam: G.camMotion, wsway: G.weaponSway, target: G.fpsTarget, lowlat: !!G.lowLatency, sensAds: G.sensAds, sensScope: G.sensScope, sensY: G.sensY, headBob: G.headBob, sprintFov: G.sprintFov })); } catch (e) { /* ignore */ } };

// ---------- services used by player / enemies / equipment ----------
const ray = (flag) => (ax, ay, az, bx, by, bz) => {
  const dx = bx - ax, dy = by - ay, dz = bz - az, d = Math.hypot(dx, dy, dz);
  return d < 0.01 || !rayBoxes(G.world.colliders, ax, ay, az, dx / d, dy / d, dz / d, d, flag);
};
G.los = ray('sight'); G.losB = ray('bullet');
G.sound = (pos, radius, kind, src) => {
  if (G.mp && !G.mp.host) return; // multiplayer client: guards are the host's puppets
  for (const e of G.enemies) {
    if (e === src || e.dead) continue;
    const d = Math.hypot(e.pos.x - pos.x, e.pos.z - pos.z);
    if (d < radius * e.pr.hear) e.hear(pos, kind, d);
  }
  if (kind === 'shot' || kind === 'explosion') for (const c of G.civs) if (Math.hypot(c.pos.x - pos.x, c.pos.z - pos.z) < radius * 0.7) c.alarm();
};
G.shout = (src) => { // voice: only allies within earshot, with positional error
  for (const e of G.enemies) {
    if (e === src || e.dead) continue;
    if (Math.hypot(e.pos.x - src.pos.x, e.pos.z - src.pos.z) < src.pr.share) e.onAlert(src.lkp.x + rnd(-2.5, 2.5), src.lkp.z + rnd(-2.5, 2.5));
  }
};
G.say = (e, text) => { // enemy radio traffic the player can overhear when close enough
  const d = Math.hypot(e.pos.x - G.player.pos.x, e.pos.z - G.player.pos.z);
  if (d > 45) return;
  G.audio.radio(); $('subt').innerHTML = `<b>RADIO</b>${text}`; $('subt').style.opacity = 1; subT = 2.8;
};
G.playerBox = () => {
  const P = G.player, p = P.pos, b = G.pbox[0], ox = P.leanX * 0.6, oz = P.leanZ * 0.6;
  b.x0 = p.x + ox - 0.3; b.x1 = p.x + ox + 0.3; b.z0 = p.z + oz - 0.3; b.z1 = p.z + oz + 0.3; b.y0 = p.y; b.y1 = p.y + P.height;
  return G.pbox;
};
const panTo = (x, z) => { const P = G.player, dx = x - P.pos.x, dz = z - P.pos.z, d = Math.hypot(dx, dz) || 1; return (dx * Math.cos(P.yaw) - dz * Math.sin(P.yaw)) / d; };
G.enemyShotSound = (e) => G.audio.enemyShot(e.pd, panTo(e.pos.x, e.pos.z));
G.enemyStep = (e) => G.audio.noise(0.08, { f: 420, f2: 140, vol: (e.moved > 3 ? 0.22 : 0.1) * (1 - e.pd / 16), pan: panTo(e.pos.x, e.pos.z) });
G.nearMiss = (ox, oy, oz, dx, dy, dz) => {
  const c = G.camera.position, t = (c.x - ox) * dx + (c.y - oy) * dy + (c.z - oz) * dz;
  if (t > 0 && Math.hypot(ox + dx * t - c.x, oy + dy * t - c.y, oz + dz * t - c.z) < 1.4) G.audio.whiz(panTo(ox, oz));
};
const BAL = makeBallistics(G); G.trace = BAL.trace; G.playerRound = BAL.playerRound;
G.playerShot = (o, d, w, muzzle, first) => {
  const r = BAL.playerRound(o, d, muzzle), end = G.v1.set(r.from.x + r.dir.x * r.d, r.from.y + r.dir.y * r.d, r.from.z + r.dir.z * r.d);
  if (first || Math.random() < 0.4) G.fx.tracer(muzzle, end);
  if (G.mp) {
    G.mp.addPellet(d, end);
    if (!G.mp.host) { // the host resolves damage; show the impact now so firing feels instant
      if (r.kind === 'enemy' || r.kind === 'civ') G.fx.blood(end, G.v2.copy(d).negate());
      else if (r.kind === 'world') { G.fx.impact(end, G.v2.set(r.wh.nx, r.wh.ny, r.wh.nz), r.wh.c.mat); if (first) G.audio.thud(Math.min(1, 8 / (4 + r.d)), r.wh.c.mat); }
      return;
    }
    G.mp.shooter = G.mp.id;
    if (G.mp.ff) { const h = G.mp.traceTeam(r.from, r.dir, r.d, G.player); if (h) { G.mp.hurt(h.p, w.dmg * 0.6, G.player.pos, { name: 'friendly fire', dist: h.d }); G.mp.shooter = null; return; } }
  }
  if (G.range) G.range.onShot(r, end, w, first);
  if (r.kind === 'enemy') {
    const hitE = r.e; let dmg = w.dmg * (r.part === 'head' ? w.head || 2.5 : r.mult);
    if (w.falloff && r.d > w.falloff[0]) dmg *= 1 - (1 - w.falloff[1]) * Math.min(1, (r.d - w.falloff[0]) / (w.falloff[0] * 1.5));
    hitE.damage(dmg, G.player.pos, r.part); G.fx.blood(end, G.v2.copy(d).negate());
    for (const e of G.enemies) if (!e.dead && e !== hitE && !e.seeing) e.supp = Math.min(1.5, e.supp + (Math.hypot(e.pos.x - end.x, e.pos.z - end.z) < 3 ? 0.35 : 0));
    if (first) G.stats.hits++; if (r.part === 'head') G.stats.heads++; hitMark(hitE.dead, r.part === 'head'); G.audio.hit(hitE.dead, r.part === 'head'); if (G.mp && first) G.mp.shotHit(r.part === 'head');
  } else if (r.kind === 'civ') { r.e.damage(w.dmg * r.mult); G.fx.blood(end, G.v2.copy(d).negate()); hitMark(false); }
  else if (r.kind === 'world') {
    G.fx.impact(end, G.v2.set(r.wh.nx, r.wh.ny, r.wh.nz), r.wh.c.mat); if (first) G.audio.thud(Math.min(1, 8 / (4 + r.d)), r.wh.c.mat);
    for (const e of G.enemies) { // rounds cracking past or into a guard's cover suppress him and tell him he is being shot at
      if (e.dead) continue; const dd = Math.hypot(e.pos.x - end.x, e.pos.z - end.z);
      if (dd < 2.5) { e.supp = Math.min(1.5, e.supp + 0.35); if (first && !e.combat()) e.hear(G.player.pos, 'shot', Math.hypot(e.pos.x - o.x, e.pos.z - o.z)); }
    }
  }
};
G.melee = () => {
  const P = G.player, o = G.camera.position, f = P.fwd, K = WEAPONS.knife;
  if (G.mp && !G.mp.host) { G.mp.request({ k: 'melee', f: [f.x, f.y, f.z] }); return; }
  if (G.mp) G.mp.shooter = G.mp.id;
  let best = null, bd = K.range;
  for (const e of G.enemies) {
    if (e.dead) continue;
    const dx = e.pos.x - o.x, dy = e.pos.y + 1.1 - o.y, dz = e.pos.z - o.z, d = Math.hypot(dx, dy, dz);
    if (d > bd || (dx * f.x + dy * f.y + dz * f.z) / d < 0.72 || !G.losB(o.x, o.y, o.z, e.pos.x, e.pos.y + 1.1, e.pos.z)) continue;
    best = e; bd = d;
  }
  if (!best) { const wh = rayBoxes(G.world.colliders, o.x, o.y, o.z, f.x, f.y, f.z, 1.5, 'bullet'); if (wh) { G.fx.impact(G.v1.copy(f).multiplyScalar(wh.d).add(o), G.v2.set(wh.nx, wh.ny, wh.nz)); G.audio.click(0.4); } return; }
  // lethal against a guard who is unaware of you or facing away
  const behind = Math.cos(best.yaw) * (P.pos.z - best.pos.z) + Math.sin(best.yaw) * (P.pos.x - best.pos.x) > 0.2 * bd;
  const lethal = behind || (!best.seeing && !best.combat()) || best.stun > 0;
  best.damage(lethal ? 999 : K.dmg, P.pos, 'torso'); G.fx.blood(G.v1.set(best.pos.x, best.pos.y + 1.2, best.pos.z), G.v2.copy(f).negate());
  G.audio.stab(best.dead); hitMark(best.dead); if (best.dead) G.stats.knife++;
};
G.spawnGrenade = (type, pos, vel, owner, ownerId, q) => {
  const n = G.gren.spawn(type, pos, vel, owner);
  if (G.mp) { if (G.mp.host) G.mp.onNade(n, owner === 'player' ? G.mp.id : ownerId, q); else if (owner === 'player') G.mp.throwReq(n); }
  return n;
};
G.onKill = () => { G.stats.kills++; };
G.spawnEnemy = (...a) => spawnEnemy(...a);
G.onHurt = (from, d) => { G.audio.hurt(); vig = Math.min(1, vig + 0.3 + d * 0.012); addInd(from.x, from.z, '#ff4a3a', 1.2); };
G.onSecurity = (level, msg) => {
  const el = $('sec'); el.className = 'hp l' + level; el.textContent = 'SECURITY · ' + LEVELS[level];
  if (level > 0) G.audio.alert(level);
  if (level >= 2 && msg) toast(msg, 3.5);
  if (level === 3) { G.audio.siren(true); if (G.panelLight) G.panelLight.intensity = 30; }
};
G.reinforce = () => { // a finite response team walks in from the map edge farthest from the player
  const W = G.world, P = G.player, n = G.sel.ai === 'recruit' ? 2 : 3;
  const s = [...W.reinforce].sort((a, b) => Math.hypot(b.x - P.pos.x, b.z - P.pos.z) - Math.hypot(a.x - P.pos.x, a.z - P.pos.z))[0];
  if (Math.hypot(s.x - P.pos.x, s.z - P.pos.z) < 30) { G.sec.reinAt = G.sec.t + 8; return; } // never appear close to the player
  const R = G.sec.report || { x: W.objective.pos[0], z: W.objective.pos[2] };
  for (let i = 0; i < n; i++) G.spawnQ.push(() => { // one soldier per frame: building a rigged character is the costliest thing the game does mid-mission
    const e = spawnEnemy(s.x + i * 1.6, s.z + (i % 2) * 1.5, [[R.x, R.z]], { duty: 'response' });
    e.alerted = true; e.setOrder(i === 0 ? { type: 'investigate', x: R.x, z: R.z } : { type: 'defend', x: W.posts.objective[i % W.posts.objective.length][0], z: W.posts.objective[i % W.posts.objective.length][1], tx: R.x, tz: R.z });
  });
  G.toast(`RESPONSE TEAM ENTERING FROM THE ${s.n.toUpperCase()}`, 4.5);
};

// ---------- mission lifecycle ----------
function disposeScene() {
  if (!G.world) return;
  for (const m of G.world.meshes || []) { if (m.userData.shared) m.dispose(); else { m.geometry.dispose(); m.material.dispose(); } }
  G.audio.stopAmbient(); G.world = null; G.scene = null;
}
function interactable(kind, x, y, z) {
  const g = new THREE.Group();
  const add = (hex, w, h, d, px, py, pz, em) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), em ? new THREE.MeshBasicMaterial({ color: hex }) : new THREE.MeshLambertMaterial({ color: hex })); m.position.set(px, py, pz); g.add(m); return m; };
  const k = y > 0.5 ? 0.42 : 1; // desk-top unit vs. free-standing console
  if (kind === 'intel') { add(0x1c1f22, 0.5, 0.14, 0.36, 0, 0.07, 0); add(0xffb648, 0.42, 0.02, 0.05, 0, 0.15, 0, true); add(0xffb648, 0.06, 0.06, 0.02, 0, 0.07, 0.19, true); }
  else if (kind === 'terminal') { if (k === 1) add(0x2a2d31, 0.7, 0.8, 0.5, 0, 0.4, 0); const b = k === 1 ? 0.8 : 0; add(0x15171a, 0.08, 0.5, 0.8, 0, b + 0.3, 0); g.screen = add(0x30ff78, 0.02, 0.4, 0.68, 0.05, b + 0.31, 0, true); add(0x1c1f22, 0.3, 0.03, 0.6, 0.3, b + 0.02, 0); }
  else if (kind === 'keycard') { if (k === 1) add(0x2a2d31, 0.4, 0.9, 0.4, 0, 0.45, 0); const b = k === 1 ? 0.9 : 0; add(0xe8e8e0, 0.09, 0.012, 0.14, 0, b + 0.01, 0); add(0x40d8ff, 0.07, 0.014, 0.03, 0, b + 0.012, 0.03, true); }
  else if (kind === 'case') { if (k === 1) add(0x3a3026, 0.7, 0.5, 0.5, 0, 0.25, 0); const b = k === 1 ? 0.5 : 0; add(0x2c2119, 0.46, 0.12, 0.32, 0, b + 0.06, 0); add(0xffb648, 0.05, 0.03, 0.02, 0, b + 0.07, 0.17, true); }
  else if (kind === 'radio') { add(0x30363a, 0.7 * (k < 1 ? 0.8 : 1), 1.15 * k, 0.4, 0, 0.575 * k, 0); add(0x1a1c1e, 0.02, 1.1, 0.02, 0.25, 1.15 * k + 0.55, 0); g.screen = add(0x38ff7a, 0.3, 0.1 , 0.02, 0, 0.9 * k, 0.21, true); add(0xffb030, 0.05, 0.05, 0.02, -0.22, 0.6 * k, 0.21, true); }
  else if (kind === 'secpanel') { add(0x4a5058, 0.75, 1.35 * k, 0.3, 0, 0.675 * k, 0); g.screen = add(0x40a0ff, 0.5, 0.32 * k + 0.05, 0.02, 0, 0.95 * k, 0.16, true); add(0xc02a20, 0.08, 0.08, 0.03, 0.26, 0.45 * k, 0.16, true); }
  else if (kind === 'generator') { add(0x6a5a22, 1.1, 0.85 * k, 0.6, 0, 0.425 * k, 0); add(0x1c1d1f, 0.9, 0.2 * k, 0.5, 0, 0.95 * k, 0); g.screen = add(0x38ff7a, 0.1, 0.1, 0.02, 0.38, 0.6 * k, 0.31, true); }
  else if (kind === 'charge') { add(0x7a6a1e, 0.9, 1.0 * k, 0.9, 0, 0.5 * k, 0); add(0x111214, 0.92, 0.12 * k, 0.92, 0, 0.5 * k, 0); g.screen = add(0x402020, 0.22, 0.12, 0.03, 0, 0.75 * k, 0.46, true); }
  else if (kind === 'med') { add(0xd8dcd8, 0.5, 0.3, 0.34, 0, 0.15, 0); add(0xd43a30, 0.2, 0.06, 0.02, 0, 0.17, 0.18, true); add(0xd43a30, 0.06, 0.2, 0.02, 0, 0.17, 0.18, true); }
  else { add(0x3d4a30, 0.6, 0.32, 0.36, 0, 0.16, 0); add(0xe8b04a, 0.6, 0.05, 0.37, 0, 0.2, 0, true); }
  g.position.set(x, y, z); G.scene.add(g);
  return g;
}
G.makeInteractable = interactable;
G.missionCheck = () => validate(G.world, G.mission.def); // null when every waypoint is reachable in order (used by tests)
G.toast = (m, t) => toast(m, t);
G.setPower = (on) => { // generator sabotage: the site goes dark, guards see less far
  const W = G.world, k = on ? 1 : 0.12; W.powerOff = !on;
  for (const l of W.lights) { if (l.userData.base == null) l.userData.base = l.intensity; l.intensity = l.userData.base * k; }
  for (const d of W.dyn) d.base = d.l.userData.base * k;
  W.env.detect = W.env.detect0 * (on ? 1 : 0.6); W.env.viewRange = W.env.viewRange0 * (on ? 1 : 0.78);
};
let typeBag = [];
function spawnEnemy(x, z, route, o) {
  if (!typeBag.length) typeBag = ['guard', 'guard', 'aggressor', 'cautious', 'guard', 'aggressor', 'cautious', 'guard'].sort(() => Math.random() - 0.5);
  const c = G.world.nav.nearest(x, z) || { x, z };
  const e = new Enemy(G, c.x, c.z, route, typeBag.pop(), PROFILES[G.sel.ai], o);
  G.enemies.push(e); if (G.onSpawnEnemy) G.onSpawnEnemy(e); return e;
}
function basePixelRatio() { const q = G.sel.quality; return q === 'low' ? 1 : Math.min(window.devicePixelRatio || 1, q === 'high' ? 2 : 1.25); }
function applyQuality() {
  G.pacing.scale = 1; renderer.setPixelRatio(basePixelRatio());
  renderer.shadowMap.enabled = G.sel.quality !== 'low'; resize();
}
// ---------- frame pacing: frame-time statistics + adaptive render scale (resolution only, never simulation) ----------
const GL = renderer.getContext(), TQ = GL.getExtension('EXT_disjoint_timer_query_webgl2'); // GPU timing where available
G.pacing = {
  // frame-time history (ms): ring of the last 240 frame intervals
  ring: new Float32Array(240), ri: 0, n: 0, ema: 16.7, worst: 0, scale: 1, min: 0.6, changes: 0, active: !TEST,
  over: 0, ok: 0, ceilT: 0, ceil: 1, refreshMs: 16.7, med: 16.7, stutters: 0, log: [], cpuMs: 0, simMs: 0, renderMs: 0, gpuMs: -1, inputAge: 0,
  q: [], qFree: [], gpuBad: 0, gpuOff: false,
  targetMs() { return G.fpsTarget === 'refresh' ? Math.min(1000 / 60, Math.max(1000 / 240, this.refreshMs)) : 1000 / 60; },
  stats() { // percentiles over the recent window (only computed for the overlay / tests, not every frame)
    const k = Math.min(this.n, this.ring.length), a = Array.from(this.ring.subarray(0, k)).sort((x, y) => x - y), q = (p) => a[Math.min(k - 1, Math.floor(p * k))] || 0;
    return { avg: a.reduce((x, y) => x + y, 0) / (k || 1), p50: q(0.5), p99: q(0.99), max: a[k - 1] || 0, low1: 1000 / (q(0.99) || 1) };
  },
  feed(ms) { // one frame interval sample; returns true when the render scale changed
    if (ms > 250 || ms <= 0) return false; // tab switch / breakpoint: not a real frame
    this.ema += (ms - this.ema) * 0.08; this.ring[this.ri] = ms; this.ri = (this.ri + 1) % this.ring.length; this.n++;
    if (this.n % 30 === 0) { // refresh interval ~ 10th percentile, median for stutter detection (cheap partial sort)
      const k = Math.min(this.n, this.ring.length), a = Array.from(this.ring.subarray(0, k)).sort((x, y) => x - y);
      const p10 = a[Math.floor(k * 0.1)]; this.refreshMs = p10 < this.refreshMs ? p10 : this.refreshMs + (p10 - this.refreshMs) * 0.02; // fast down, slow up: slow game frames do not look like a slow display
      this.med = a[k >> 1]; this.worst = a[k - 1];
    }
    if (ms > Math.max(this.med * 2, this.med + 8) && this.n > 60) { // a stutter: log what the CPU was doing in that frame
      this.stutters++; this.log.unshift({ t: performance.now(), ms, sim: G.prof.total, render: this.renderMs, gpu: this.gpuMs });
      if (this.log.length > 6) this.log.pop();
    }
    if (!G.adaptive) { if (this.scale !== 1) return this.setScale(1); return false; }
    if (!this.active || G.state !== 'playing') { this.over = this.ok = 0; return false; }
    // Adaptive render scale. Works with vsync (frame intervals never drop below the refresh period): it lowers the
    // scale only when frames are clearly late, and raises it again after a sustained on-target period. If raising
    // it makes frames late again, that level becomes a ceiling for 20 s so the scale does not oscillate.
    // Resolution only helps when the GPU is the bottleneck: with GPU timing available, a CPU-bound slowdown does not lower it.
    const T = this.targetMs(), gk = this.gpuMs >= 0, late = this.ema > T * 1.2 && (!gk || this.gpuMs > T * 0.7), good = gk ? this.gpuMs < T * 0.55 && this.ema < T * 1.2 : this.ema < T * 1.06;
    const s = ms / 1000;
    if (late) { this.over += s; this.ok = 0; } else if (good) { this.ok += s; this.over = 0; } else { this.over = Math.max(0, this.over - s); this.ok = 0; }
    if (this.ceilT > 0) { this.ceilT -= s; if (this.ceilT <= 0) this.ceil = 1; }
    if (this.over > 1 && this.scale > this.min) { if (this.recent && performance.now() - this.recent < 6000) { this.ceil = this.scale - 0.1; this.ceilT = 20; } return this.setScale(Math.max(this.min, this.scale - 0.1)); }
    if (this.ok > 4 && this.scale < Math.min(1, this.ceil)) { this.recent = performance.now(); return this.setScale(Math.min(1, this.ceil, this.scale + 0.1)); }
    return false;
  },
  setScale(v) { v = Math.round(v * 10) / 10; if (v === this.scale) return false; this.scale = v; this.changes++; this.over = this.ok = 0; renderer.setPixelRatio(basePixelRatio() * v); resize(); return true; },
  // GPU time of the world + view-model passes via timer queries (results arrive a few frames later)
  gpuBegin() { if (!TQ || this.gpuOff) return null; const q = this.qFree.pop() || GL.createQuery(); GL.beginQuery(TQ.TIME_ELAPSED_EXT, q); return q; },
  gpuEnd(q) { if (!q) return; GL.endQuery(TQ.TIME_ELAPSED_EXT); this.q.push(q); },
  gpuPoll() {
    if (!TQ || this.gpuOff) return; const disjoint = GL.getParameter(TQ.GPU_DISJOINT_EXT);
    while (this.q.length && GL.getQueryParameter(this.q[0], GL.QUERY_RESULT_AVAILABLE)) { const q = this.q.shift(); const ms = GL.getQueryParameter(q, GL.QUERY_RESULT) / 1e6; this.qFree.push(q);
      if (disjoint) continue;
      if (!(ms >= 0 && ms < 250)) { if (++this.gpuBad > 20) { this.gpuOff = true; this.gpuMs = -1; } continue; } // some drivers (e.g. software GL) report garbage: stop trusting it
      this.gpuMs = this.gpuMs < 0 ? ms : this.gpuMs + (ms - this.gpuMs) * 0.1; }
    if (this.q.length > 8) this.q.splice(0, this.q.length - 8).forEach((q) => this.qFree.push(q));
  },
};
function startMission() {
  disposeScene(); applyQuality(); menuClear();
  const scene = (G.scene = new THREE.Scene()), ws = (G.wscene = new THREE.Scene());
  scene.environment = ENV; scene.environmentIntensity = 0.12; ws.environment = ENV; ws.environmentIntensity = 0.2;
  G.wlight = new THREE.HemisphereLight(0xaab8d0, 0x202428, 0.4); ws.add(G.wlight); const wd = new THREE.DirectionalLight(0xfff2e0, 0.75); wd.position.set(-1, 2, 1.5); ws.add(wd);
  const isRange = G.sel.mode === 'range';
  const W = (G.world = buildWorld(isRange ? 'range' : G.sel.map, scene));
  if (G.sel.quality !== 'med') W.moon.shadow.mapSize.setScalar(G.sel.quality === 'high' ? 4096 : 1024);
  if (G.sel.quality === 'low') for (const m of W.meshes) if (m.userData.detail) m.visible = false; // ground clutter off
  W.lodDist = { low: 22, med: 34, high: 52 }[G.sel.quality];
  G.nvLight = new THREE.AmbientLight(0xffffff, 0); scene.add(G.nvLight);
  G.fx = new FX(scene); G.gren = new Grenades(G);
  W.env.detect0 = W.env.detect; W.env.viewRange0 = W.env.viewRange;
  // mission: generated from the map's anchors (seeded, avoids recent layouts); 'classic' is the fixed V2 layout used by tests
  const classic = G.sel.layout === 'classic', L = G.sel.length;
  const def = isRange ? { map: 'range', type: 'range', length: 'quick', seed: 0, plan: [], entry: W.entries[0], exit: { id: '-', name: '-', pos: [0, 0, 9999] }, primary: { id: 'range', name: 'range', at: [0, 0, -50], stand: [0, -50], posts: [] }, fallback: null, stages: [] }
    : classic ? { map: W.id, type: 'intel', length: 'quick', seed: 0, plan: [W.id === 'forest' ? 'retrieve' : 'hack'], entry: W.entries[0], exit: W.exits[0], primary: W.anchors[0], fallback: null,
    stages: [W.id === 'forest' ? { kind: 'retrieve', title: 'Recover the intelligence package', obj: 'intel', hold: 0, prompt: 'Take intelligence package', anchors: [W.anchors[0]], correct: 0 } : { kind: 'hack', title: 'Access the secure terminal', obj: 'terminal', hold: 3, prompt: 'Hold to access secure terminal', anchors: [W.anchors[0]], correct: 0 }] }
    : generateMission(W, { type: G.sel.mission, length: MISSIONS[G.sel.mission].lengths.includes(L) ? L : MISSIONS[G.sel.mission].lengths[0], seed: G.sel.seed }, G.mp ? {} : G.hist); // multiplayer: same seed + no local history = the same mission everywhere
  if (!classic && !isRange && !G.mp) recordMission(G.hist, def);
  G.civs = [];
  G.player = new Player(G, def.entry, G.loadout);
  if (G.mp) spreadSpawn(G.player, def.entry, G.mp.slot, G.mp.count);
  G.enemies = []; typeBag = []; G.spawnQ = [];
  G.sec = new Security(G, PROFILES[G.sel.ai]);
  // the site is staffed from the first second: objective detail, sentries on the other objectives, door guards, patrols
  const nav = W.nav;
  for (const d of isRange || (G.mp && !G.mp.host) ? [] : deployment(W, def, W.guards + LENGTHS[def.length].extra)) { // multiplayer clients get the host's roster
    if (d.route) { const e = spawnEnemy(d.p[0], d.p[1], d.route, { duty: 'patrol' }); e.wi = Math.floor(Math.random() * d.route.length); continue; }
    const a = rnd(6.28), q = nav.snap(d.p[0] + Math.cos(a) * 2.5, d.p[1] + Math.sin(a) * 2.5), c = nav.nearest(d.p[0], d.p[1]);
    spawnEnemy(d.p[0], d.p[1], q && c && nav.line(c, q) ? [[d.p[0], d.p[1]], [q.x, q.z]] : [[d.p[0], d.p[1]]], { duty: d.duty, home: d.p, wait: d.wait });
  }
  // objectives, pick-ups, extraction
  G.mission = new Mission(G, def); G.mission.begin();
  G.range = isRange ? new Range(G) : null;
  G.pickups = W.pickups.map(([kind, x, z]) => ({ kind, x, z, mesh: interactable(kind, x, nav.height(x, z), z) }));
  const ex = def.exit.pos;
  G.exMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.5, 6), new THREE.MeshBasicMaterial({ color: 0x40ff70 })); G.exMesh.position.set(ex[0], 0.25, ex[2]); scene.add(G.exMesh);
  G.exLight = new THREE.PointLight(0x40ff70, 6, 16, 1.5); G.exLight.position.set(ex[0], 1.2, ex[2]); scene.add(G.exLight);
  if (W.panel) { G.panelLight = new THREE.PointLight(0xff2a1a, 0, 22, 1.4); G.panelLight.position.set(W.panel.x, 2.2, W.panel.z); scene.add(G.panelLight); }
  G.laserDot = new THREE.Mesh(new THREE.SphereGeometry(1, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff2020, fog: false, toneMapped: false })); scene.add(G.laserDot);
  const lg = new THREE.BoxGeometry(0.004, 0.004, 1); lg.translate(0, 0, 0.5);
  G.laserBeam = new THREE.Mesh(lg, new THREE.MeshBasicMaterial({ color: 0xff2020, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, fog: false })); scene.add(G.laserBeam);
  G.laserDot.visible = G.laserBeam.visible = false;
  G.time = 0; G.stats = { shots: 0, hits: 0, kills: 0, heads: 0, knife: 0, maxSec: 0 };
  vig = 0; inds.forEach((i) => (i.t = 0)); subT = 0; $('subt').style.opacity = 0;
  setNV(false); G.onSecurity(0, '');
  G.audio.ambient(W.env.amb);
  $('hud').classList.add('on'); hudCache = {};
  // pre-mission briefing: what, where, in which order
  if (isRange) { show(null); G.state = 'playing'; toast('TRAINING RANGE — WEAPONS FREE', 3); if (!TEST) lock(); return; }
  const M2 = MISSIONS[def.type];
  $('brt').textContent = M2.name; $('brs').textContent = `${W.name} · ${LENGTHS[def.length].name} · ENEMY ${PROFILES[G.sel.ai].label}`;
  $('brl').innerHTML = `<div><i>INSERTION</i>${def.entry.name}</div>` + briefing(def).map((l) => `<div>${l}</div>`).join('') + (def.fallbackUsed ? '<div><i>NOTE</i>fallback layout used</div>' : '');
  if (G.mp) { // wait for every operator's game to finish loading; the server then says go
    G.state = 'brief'; show('briefov'); G.player.update(0.016);
    $('brgo').disabled = true; $('brgo').textContent = 'WAITING FOR TEAM…'; $('brback').textContent = 'LEAVE PARTY';
    $('mphud').style.display = 'block'; G.mp.ready(); return;
  }
  $('brgo').disabled = false; $('brgo').textContent = 'BEGIN MISSION'; $('brback').textContent = 'RETURN TO MENU'; $('mphud').style.display = 'none';
  if (TEST || classic) { show(null); G.state = 'playing'; toast(M2.name + ' — ' + def.stages[0].title.toUpperCase(), 4); if (!TEST) lock(); }
  else { G.state = 'brief'; show('briefov'); G.player.update(0.016); }
}
// co-op insertion: operators stand side by side across the insertion heading, on free ground
function spreadSpawn(P, e, slot, n) {
  const off = (slot - (n - 1) / 2) * 1.3, x = e.x + Math.cos(e.yaw) * off, z = e.z - Math.sin(e.yaw) * off;
  if (G.world.nav.snap(x, z) && !P.hits(x, 0, z)) { P.pos.x = x; P.pos.z = z; }
}
function beginMission() { if (G.state !== 'brief') return; show(null); G.state = 'playing'; last = performance.now(); toast(MISSIONS[G.mission.def.type].name + ' — ' + G.mission.def.stages[0].title.toUpperCase(), 4); lock(); }
// Raw (unaccelerated) mouse input where the browser supports it; plain pointer lock otherwise.
// Look gate: while the pointer is being captured, Chromium delivers the cursor's warp to screen centre as one big
// mousemove (seen: -480, -356 counts). It arrives with pointerLockElement already set but BEFORE 'pointerlockchange',
// so it spun the fresh operator about 60 deg and pitched him 45 deg into the black night sky after DEPLOY / RESUME.
// Mouse look is ignored from the lock request until 80 ms after the lock is confirmed.
// Judged by the event's creation time (ev.timeStamp), not when a slow frame finally dispatches it. The first event
// after a lock is also dropped when it is an implausible single jump (> 200 counts): Chrome can attach the warp to the
// user's first real movement, whenever that comes.
const lookGate = (G.lookGate = { pending: false, lockedAt: -1e9, first: false, dropped: 0,
  accept(ev) {
    const t = ev.timeStamp || performance.now();
    if (this.pending || t < this.lockedAt + 80) { this.dropped++; return false; }
    if (this.first) { this.first = false; if (Math.abs(ev.movementX) + Math.abs(ev.movementY) > 200) { this.dropped++; return false; } }
    return true;
  } });
function lock() {
  lookGate.pending = true; G.inp.mx = G.inp.my = 0;
  const fail = () => { $('phint').textContent = 'CLICK RESUME AGAIN TO RE-CAPTURE THE MOUSE'; };
  const plain = () => { lookGate.pending = true; try { const q = canvas.requestPointerLock(); if (q && q.catch) q.catch(fail); } catch (e) { fail(); } };
  if (!G.rawInput) return plain();
  try { const p = canvas.requestPointerLock({ unadjustedMovement: true }); if (p && p.catch) p.catch(plain); } catch (e) { plain(); }
}
G.lock = lock;
// animation update rate by distance and visibility (see Character.tick); staggered per soldier
const FRUST = new THREE.Frustum(), PV = new THREE.Matrix4(), SPH = new THREE.Sphere(new THREE.Vector3(), 1.3);
G.animEvery = (pos) => {
  const c = G.camera.position, d = Math.hypot(pos.x - c.x, pos.z - c.z);
  if (d < 22) return 1;
  SPH.center.set(pos.x, pos.y + 0.9, pos.z);
  if (!FRUST.intersectsSphere(SPH)) return d < 40 ? 2 : 4;
  return d < 45 ? 1 : d < 75 ? 2 : 3;
};
function show(id) { for (const k of ['menu', 'pause', 'end', 'load', 'briefov']) $(k).classList.toggle('on', k === id); }
function pause() { if (G.state !== 'playing') return; G.state = 'paused'; $('phint').textContent = G.mp ? 'CO-OP MISSION — THE GAME KEEPS RUNNING' : 'MISSION ON HOLD'; show('pause'); G.inp.k = {}; G.inp.lmb = G.inp.rmb = false; }
function resume() { if (G.state !== 'paused') return; if (TEST) { G.state = 'playing'; show(null); } else lock(); }
function toMenu() {
  if (G.mp) { G.mp.dispose(); G.mp = null; $('mphud').style.display = 'none'; if (G.mpLobby && G.mpLobby.inParty()) M.tab = 'mp'; }
  G.state = 'menu'; disposeScene(); $('hud').classList.remove('on'); setNV(false); $('scope').style.display = 'none'; $('flashov').style.opacity = 0;
  show('menu'); if (document.pointerLockElement) document.exitPointerLock(); menuRefresh();
  if (G.mpLobby && G.mpLobby.inParty()) openTab('mp');
}
function endMission(win, reason) {
  $('again').style.display = ''; $('emenu').textContent = 'RETURN TO MENU';
  G.state = win ? 'won' : 'dead';
  if (document.pointerLockElement) document.exitPointerLock();
  G.audio.siren(false); $('scope').style.display = 'none'; $('flashov').style.opacity = 0;
  const P = G.player, s = G.stats, t = Math.floor(G.time);
  $('endt').textContent = win ? 'MISSION COMPLETE' : 'OPERATOR DOWN'; $('endt').style.color = win ? 'var(--g)' : '#ff6a5a';
  $('endt').textContent = win ? 'MISSION COMPLETE' : reason ? 'MISSION FAILED' : 'OPERATOR DOWN';
  let sub = win ? 'EXTRACTION SUCCESSFUL' : reason || 'MISSION FAILED';
  if (!win && !reason && P.lastHit) { const h = P.lastHit; sub = h.fall ? 'KILLED BY A FALL' : h.blast ? `KILLED BY ${h.name.toUpperCase()}` : `KILLED BY ${h.name.toUpperCase()} — RIFLE FIRE FROM THE ${compass(h.x - P.pos.x, h.z - P.pos.z)}, ${Math.round(h.dist)} M`; }
  $('ends').textContent = sub;
  const md = G.mission.def;
  const rows = [['Mission', MISSIONS[md.type].short + ' · ' + LENGTHS[md.length].name], ['Map', G.world.name], ['Enemy intelligence', PROFILES[G.sel.ai].label], ['Time', `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`],
    ['Hostiles neutralised', `${s.kills} / ${G.enemies.length}`], ['Headshots / knife kills', `${s.heads} / ${s.knife}`], ['Accuracy', s.shots ? Math.round((s.hits / s.shots) * 100) + '%' : '—'],
    ['Highest security level', LEVELS[s.maxSec]], ['Health remaining', Math.ceil(P.hp)], ['Objectives completed', `${Math.min(G.mission.i, md.stages.length)} / ${md.stages.length}`]];
  $('endstats').innerHTML = rows.map(([a, b]) => `<span>${a}</span><b>${b}</b>`).join('');
  show('end'); win ? G.audio.win() : G.audio.lose();
}
// co-op results (identical on every operator's screen: the host sends them)
function endCoop(m) {
  G.state = m.win ? 'won' : 'dead';
  if (document.pointerLockElement) document.exitPointerLock();
  G.audio.siren(false); $('scope').style.display = 'none'; $('flashov').style.opacity = 0;
  $('endt').textContent = m.win ? 'MISSION COMPLETE' : 'MISSION FAILED'; $('endt').style.color = m.win ? 'var(--g)' : '#ff6a5a';
  $('ends').textContent = m.win ? 'TEAM EXTRACTED' : m.reason || 'MISSION FAILED';
  const md = G.mission.def, t = m.time | 0;
  const rows = [['Mission', MISSIONS[md.type].short + ' · ' + LENGTHS[md.length].name], ['Map', G.world.name], ['Enemy intelligence', PROFILES[G.sel.ai].label], ['Time', `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`],
    ['Hostiles neutralised', `${m.killed} / ${m.total}`], ['Objectives completed', `${m.objectives[0]} / ${m.objectives[1]}`], ['Highest security level', LEVELS[m.maxSec | 0] || '—']];
  $('endstats').innerHTML = rows.map(([a, b]) => `<span>${a}</span><b>${b}</b>`).join('') +
    `<div class="team"><div class="h"><span>OPERATOR</span><span>STATUS</span><span>KILLS</span><span>ACCURACY</span><span>REVIVES</span></div>` +
    (m.players || []).map((p) => `<div><span>${esc(p.name)}</span><span>${esc(p.status)}</span><span>${p.kills | 0}</span><span>${p.shots ? Math.round(((p.hits | 0) / p.shots) * 100) + '%' : '—'}</span><span>${p.revives | 0}</span></div>`).join('') + '</div>';
  $('again').style.display = 'none'; $('emenu').textContent = 'RETURN TO LOBBY';
  G.coopResult = m; show('end'); m.win ? G.audio.win() : G.audio.lose();
}
const compass = (dx, dz) => ['NORTH', 'NORTH-EAST', 'EAST', 'SOUTH-EAST', 'SOUTH', 'SOUTH-WEST', 'WEST', 'NORTH-WEST'][((Math.round(Math.atan2(dx, -dz) / (Math.PI / 4)) % 8) + 8) % 8];

function setNV(on) {
  G.nv = on; $('nv').classList.toggle('on', on);
  canvas.style.filter = on ? 'grayscale(1) contrast(1.15) brightness(1.3)' : '';
  if (!G.world) return;
  G.nvLight.intensity = on ? 2.6 : 0; G.scene.fog.density = G.world.env.fog[1] * (on ? 0.5 : 1); G.wlight.intensity = on ? 1.6 : 0.4; G.scene.environmentIntensity = on ? 0.7 : 0.12;
}
// ---------- HUD ----------
let vig = 0, toastT = 0, hitT = 0, subT = 0, hudCache = {};
const inds = [];
for (let i = 0; i < 8; i++) { const el = document.createElement('div'); el.className = 'ind'; $('inds').appendChild(el); inds.push({ el, t: 0, x: 0, z: 0, life: 1 }); }
function addInd(x, z, color, life) { const i = inds.find((n) => n.t <= 0) || inds[0]; i.x = x; i.z = z; i.t = i.life = life; i.src = null; i.el.style.color = color; }
function toast(msg, t) { $('toast').textContent = msg; $('toast').style.opacity = 1; toastT = t; }
function hitMark(kill, head) { hitT = kill ? 0.3 : head ? 0.2 : 0.14; $('hitm').className = kill ? 'k' : head ? 'h' : ''; }
function setText(id, v) { if (hudCache[id] !== v) { hudCache[id] = v; $(id).innerHTML = v; } }
function setStyle(id, prop, v) { const k = id + prop; if (hudCache[k] !== v) { hudCache[k] = v; $(id).style[prop] = v; } }
let mphudT = 0;
function updateMPHUD() { // teammates: health, state, link
  const S = G.mp, el = $('mphud'); if (!S) return;
  const rows = [`<div class="me"><b>${esc(G.mpLobby.me() ? G.mpLobby.me().name : 'YOU')}</b><span>${G.player.kia ? 'KIA' : G.player.downed ? 'DOWN' : Math.ceil(G.player.hp)}</span><i>${G.mpLobby.net.connected ? (G.mpLobby.me() ? G.mpLobby.me().ping : 0) + ' ms' : 'OFFLINE'}</i></div>`];
  for (const rp of S.players.values()) rows.push(`<div class="${rp.kia ? 'kia' : rp.downed ? 'down' : !rp.connected ? 'gone' : ''}"><b>${esc(rp.name)}</b><span>${rp.left ? 'LEFT' : !rp.connected ? 'LINK LOST' : rp.kia ? 'KIA' : rp.downed ? 'DOWN ' + Math.ceil(rp.bleed) + 's' : Math.ceil(rp.hp)}</span><i class="bar"><u style="width:${Math.max(0, rp.hp)}%"></u></i></div>`);
  el.innerHTML = '<label>TEAM</label>' + rows.join('');
}
const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
function updateHUD(dt) {
  const P = G.player, s = P.slot, w = s.st, W = G.world;
  if (G.mp && (mphudT -= dt) <= 0) { mphudT = 0.25; updateMPHUD(); }
  setText('hpn', Math.ceil(P.hp));
  const hw = Math.round(P.hp) + '%'; if (hudCache.hw !== hw) { hudCache.hw = hw; $('hpf').style.width = hw; $('hpf').style.background = P.hp < 35 ? '#ff5a4a' : P.hp < 60 ? '#e8b04a' : 'var(--g)'; }
  const u = P.use;
  setText('medi', u && u.type === 'med' ? 'APPLYING MEDKIT…' : `MEDKIT <b>${P.inv.med}</b> [H] · STIM <b>${P.inv.stim}</b> [X]`);
  setText('wn', w.name + (P.reloading ? ' — RELOADING' : ''));
  setText('am', w.melee ? '—' : `${s.mag}<span> / ${s.reserve}</span>`);
  const lowA = !w.melee && !P.reloading && s.mag <= Math.max(1, Math.floor(w.mag * 0.25)); setStyle('am', 'color', lowA ? (s.mag === 0 ? '#ff5a4a' : '#e8b04a') : '');
  setText('ammohint', w.melee || P.reloading ? '' : s.mag === 0 ? (s.reserve > 0 ? 'RELOAD [R]' : 'NO AMMO') : lowA ? 'LOW AMMO' : '');
  setText('watt', attText(s.id, w.att || {}));
  setText('slots', P.slots.map((x, i) => (i === P.cur ? `<b>${i + 1} ${x.st.name}</b>` : `${i + 1} ${x.st.name}`)).join(' · '));
  setText('equip', ['frag', 'flash', 'smoke'].map((t) => `<span class="${P.throwSel === t ? 's' : ''}">${THROW_NAME[t]} <b>${P.inv[t]}</b></span>`).join('<br>') + '<br>[G] THROW · [4] CYCLE');
  setText('stat', `ENEMY AI <b>${PROFILES[G.sel.ai].label}</b><br>NIGHT VISION <b class="${G.nv ? '' : 'off'}">${G.nv ? 'ON' : 'OFF'}</b>` + (w.att && w.att.laser ? `<br>LASER <b class="${P.laserOn ? '' : 'off'}">${P.laserOn ? 'ON' : 'OFF'}</b>` : '') + `<br>HOSTILES <b>${G.enemies.filter((e) => !e.dead).length}</b>`);
  // crosshair / optic reticle / scope
  const ret = !w.melee && P.adsF > 0.85 ? w.optic.ret : null, gap = 5 + P.spread * 5.5, op = P.adsF > 0.6 || P.sprintF > 0.6 || w.melee ? 0 : 1, L = 8;
  const ck = Math.round(gap * 2) + '|' + op;
  if (hudCache.cross !== ck) { hudCache.cross = ck; const cs = [[-1, -gap - L, 2, L], [-1, gap, 2, L], [-gap - L, -1, L, 2], [gap, -1, L, 2]];
  for (let i = 0; i < 4; i++) { const st = $('c' + i).style; st.left = cs[i][0] + 'px'; st.top = cs[i][1] + 'px'; st.width = cs[i][2] + 'px'; st.height = cs[i][3] + 'px'; st.opacity = op; } }
  setStyle('ret', 'display', ret === 'dot' || ret === 'holo' ? 'block' : 'none'); if (ret && ret !== 'scope' && hudCache.retc !== ret) { hudCache.retc = ret; $('ret').className = ret; }
  setStyle('scope', 'display', P.scoped ? 'block' : 'none');
  if (P.scoped) setText('zoomv', `${s.zoom.toFixed(2)}&times;` + (w.optic.zoom[1] > w.optic.zoom[0] ? ' <i>WHEEL</i>' : '') + (P.steady ? ' <i>STEADY</i>' : P.breath > 1 ? ' <i>SHIFT: HOLD BREATH</i>' : ''));
  setStyle('flashov', 'opacity', Math.min(1, P.blind).toFixed(2));
  setStyle('stimv', 'opacity', P.stimT > 0 ? '1' : '0');
  if (hitT > 0) { hitT -= dt; $('hitm').style.opacity = Math.min(1, hitT * 8); } else setStyle('hitm', 'opacity', '0');
  vig = Math.max(0, vig - dt * 1.3); $('vig').style.opacity = Math.max(vig, P.hp < 30 ? 0.35 : 0);
  if (toastT > 0 && (toastT -= dt) <= 0) $('toast').style.opacity = 0;
  if (subT > 0 && (subT -= dt) <= 0) $('subt').style.opacity = 0;
  // direction indicators: damage (red), guards noticing you (amber), live enemy grenades (orange)
  for (const e of G.enemies) {
    if (e.dead || e.seeing || e.detect < 0.15 || !e.los) continue;
    let slot = inds.find((n) => n.src === e && n.t > 0);
    if (!slot) { slot = inds.find((n) => n.t <= 0); if (!slot) continue; slot.src = e; slot.el.style.color = '#e8b04a'; }
    slot.x = e.pos.x; slot.z = e.pos.z; slot.t = 0.25; slot.life = 0.25 / Math.max(0.2, e.detect);
  }
  let warn = false;
  for (const n of G.gren.list) {
    if (n.type === 'smoke' || n.owner === 'player' || Math.hypot(n.pos.x - P.pos.x, n.pos.z - P.pos.z) > 13) continue;
    warn = true; let slot = inds.find((x) => x.src === n && x.t > 0);
    if (!slot) { slot = inds.find((x) => x.t <= 0); if (!slot) continue; slot.src = n; slot.el.style.color = '#ff9a30'; }
    slot.x = n.pos.x; slot.z = n.pos.z; slot.t = slot.life = 0.2;
  }
  setStyle('warn', 'display', warn ? 'block' : 'none');
  for (const n of inds) {
    if (n.t <= 0) { if (n.on) { n.el.style.opacity = 0; n.on = false; n.src = null; } continue; }
    n.t -= dt; n.on = true;
    const ang = Math.atan2(n.x - P.pos.x, -(n.z - P.pos.z)) + P.yaw;
    n.el.style.transform = `rotate(${ang}rad)`; n.el.style.opacity = Math.min(1, n.t / n.life);
  }
  // objective marker (points at the reported location of the current objective, or the extraction point)
  const t = G.mission.focus(), v = G.v3.set(t[0], t[1] + 1, t[2]), d = Math.hypot(t[0] - P.pos.x, t[2] - P.pos.z);
  v.project(G.camera);
  let sx = v.x, sy = v.y;
  if (v.z > 1) { sx = -sx; sy = -1; }
  const m = Math.max(Math.abs(sx), Math.abs(sy)); if (m > 0.9 || v.z > 1) { const k = 0.9 / (m || 1); sx *= k; sy *= k; }
  const ms = $('mark').style; ms.left = ((sx + 1) / 2) * innerWidth + 'px'; ms.top = ((1 - sy) / 2) * innerHeight + 'px'; ms.opacity = P.scoped ? 0 : 1;
  if (G.range) { setText('objt', G.range.hud()); ms.opacity = 0; }
  else setText('objt', G.mission.lines().map((l) => `<div class="o-${l.state}">${l.state === 'done' ? '&#10003;' : l.state === 'now' ? '&#9656;' : '&middot;'} ${l.t}</div>`).join(''));
  setText('mark', G.range ? '' : (G.mission.complete ? 'EXTRACT ' : 'OBJECTIVE ') + Math.round(d) + ' M');
}

const NOINP = { k: {}, e: false };
function applyPickup(pk) {
  const P = G.player, med = pk.kind === 'med'; G.audio.pickup();
  if (med) { P.inv.med = Math.min(4, P.inv.med + 1); P.inv.stim = Math.min(4, P.inv.stim + 1); }
  else { for (const s of P.slots) if (!s.st.melee) s.reserve = Math.min(s.st.reserve * 2, s.reserve + s.st.mag * 2); P.inv.frag = Math.min(4, P.inv.frag + 1); P.inv.flash = Math.min(4, P.inv.flash + 1); }
  toast(med ? '+1 MEDKIT  +1 STIM' : 'AMMUNITION RESUPPLIED  +1 FRAG  +1 FLASH', 1.8);
}
function updateMission(dt) {
  const P = G.player, W = G.world, inp = G.inp;
  G.time += dt; G.stats.maxSec = Math.max(G.stats.maxSec, G.sec.level);
  const near = (x, z, r) => Math.hypot(x - P.pos.x, z - P.pos.z) < r, Mi = G.mission, ex = Mi.def.exit.pos;
  const out = P.downed || P.kia; // a downed operator cannot interact (the mission timers still run on the host)
  let prompt = Mi.update(dt, out ? NOINP : inp);
  if (G.mp) {
    if (G.mp.host) { const r = G.mp.checkEnd(); if (r) return G.mp.finish(r.win, r.reason); }
    if (G.mp.revivePrompt) prompt = G.mp.revivePrompt;
    if (Mi.complete && near(ex[0], ex[2], 4.5) && !out) { const [a, b] = G.mp.extract; prompt = prompt || (Mi.civNear() ? `EXTRACTION — ${a} / ${b} OPERATORS IN POSITION` : `Wait for the ${Mi.civ.kind === 'hvt' ? 'target' : 'hostage'} to reach you`); }
    if (out) prompt = P.kia ? '' : `YOU ARE DOWN — ${Math.ceil(G.mp.local.bleed)} s · A TEAMMATE CAN REVIVE YOU`;
  } else {
    if (Mi.failed) return endMission(false, Mi.failed);
    if (Mi.complete && near(ex[0], ex[2], 3.2)) { if (Mi.civNear()) return endMission(true); prompt = `Wait for the ${Mi.civ.kind === 'hvt' ? 'target' : 'hostage'} to reach you`; }
  }
  for (let pi = 0; pi < G.pickups.length && !out; pi++) {
    const pk = G.pickups[pi];
    if (pk.taken || !near(pk.x, pk.z, 1.9)) continue;
    const med = pk.kind === 'med';
    prompt = prompt || `<b>E</b>${med ? 'Take medical supplies' : 'Take ammunition and grenades'}`;
    if (inp.e && !prompt.includes(Mi.stage ? Mi.stage.prompt : '\u0000')) {
      if (G.mp) G.mp.request({ k: 'pick', i: pi }); // shared crates: the host hands them out
      else { pk.taken = true; G.scene.remove(pk.mesh); applyPickup(pk); }
    }
  }
  inp.e = false;
  const pe = $('prompt'); if (hudCache.pr !== prompt) { hudCache.pr = prompt; pe.innerHTML = prompt; pe.style.display = prompt ? 'block' : 'none'; }
  const med = P.use && P.use.type === 'med', rv = G.mp && G.mp.reviveT > 0, hk = Mi.hold > 0 || med || rv;
  setStyle('hack', 'display', hk ? 'block' : 'none'); if (hk) $('hackf').style.width = (rv ? G.mp.reviveT / 3.5 : med ? P.use.t / P.use.dur : Mi.hold / ((Mi.stage && Mi.stage.hold) || 1)) * 100 + '%';
  // ambient light animation
  for (const d of W.dyn) d.l.intensity = d.base * (d.kind === 'fire' ? 0.75 + Math.sin(G.time * 11) * 0.12 + Math.random() * 0.2 : Math.sin(G.time * 31) > 0.86 || Math.random() < 0.02 ? 0.25 : 1);
  G.exLight.intensity = Mi.complete ? 14 + Math.sin(G.time * 4) * 5 : 3;
  if (G.panelLight && G.sec.level === 3) G.panelLight.intensity = 18 + Math.sin(G.time * 7) * 16;
  // laser: from the attachment, stops at the first surface or body
  const w = P.w, on = !w.melee && w.att.laser && P.laserOn && P.swT <= 0 && !P.reloading && !P.use && P.sprintF < 0.5 && !P.scoped;
  G.laserDot.visible = G.laserBeam.visible = on;
  if (on) {
    const o = G.camera.position, d = P.fwd, wh = rayBoxes(W.colliders, o.x, o.y, o.z, d.x, d.y, d.z, 150, 'bullet');
    let best = wh ? wh.d : 150;
    for (const e of G.enemies) { if (e.dead) continue; const r = e.rayHit(o, d, best); if (r) best = r.d; }
    G.laserDot.position.copy(d).multiplyScalar(best - 0.02).add(o); G.laserDot.scale.setScalar(0.006 + best * 0.0022);
    G.laserBeam.position.copy(P.laserW); G.laserBeam.lookAt(G.laserDot.position); G.laserBeam.scale.z = P.laserW.distanceTo(G.laserDot.position);
  }
  followShadow(W.moon, W.moonDir, P.pos);
}

// The sun/moon shadow frustum follows the player, snapped to whole shadow-map texels in light space. Without the
// snap every small movement re-rasterises shadow edges at sub-texel offsets, which reads as crawling / shimmering.
const SH_R = new THREE.Vector3(), SH_U = new THREE.Vector3(), SH_F = new THREE.Vector3(), SH_T = new THREE.Vector3();
function followShadow(light, dir, at) {
  const cam = light.shadow.camera, texel = (cam.right - cam.left) / light.shadow.mapSize.x;
  SH_F.copy(dir).negate(); SH_R.set(0, 1, 0).cross(SH_F).normalize(); SH_U.copy(SH_F).cross(SH_R).normalize();
  SH_T.set(at.x, 0, at.z); const a = SH_T.dot(SH_R), b = SH_T.dot(SH_U);
  SH_T.addScaledVector(SH_R, Math.round(a / texel) * texel - a).addScaledVector(SH_U, Math.round(b / texel) * texel - b);
  light.target.position.copy(SH_T); light.position.copy(dir).multiplyScalar(110).add(SH_T);
  light.target.updateMatrixWorld();
}
G.followShadow = followShadow;
// ---------- loop ----------
// Simulation step. Each subsystem is timed (performance.now is cheap) so the F3 overlay and the
// profiling harness can show where CPU time goes and which subsystem caused a spike.
const PROF = (G.prof = { player: 0, ai: 0, world: 0, mission: 0, hud: 0, total: 0, rays: 0, boxes: 0 });
function step(dt) {
  G.frame++;
  const t0 = performance.now(); RAYSTATS.rays = RAYSTATS.boxes = 0;
  G.player.update(dt);
  G.inp.mx = G.inp.my = 0;
  FRUST.setFromProjectionMatrix(PV.multiplyMatrices(G.camera.projectionMatrix, G.camera.matrixWorldInverse));
  const t1 = performance.now();
  if (!G.mp) { for (const e of G.enemies) e.update(dt); for (const c of G.civs) c.update(dt); }
  else if (G.mp.host) { G.mp.shooter = null; G.mp.hostAI(dt); }
  if (!G.mp || G.mp.host) { G.sec.update(dt); if (G.spawnQ.length) G.spawnQ.shift()(); }
  const t2 = performance.now();
  G.gren.update(dt);
  if (G.range) G.range.update(dt);
  if (G.frame % 6 === 0) updateLOD(G.world, G.camera.position);
  G.fx.update(dt);
  const t3 = performance.now();
  updateMission(dt);
  if (G.mp) G.mp.update(dt);
  const t4 = performance.now();
  if (G.state === 'playing' && !G.player.dead) updateHUD(dt);
  const t5 = performance.now();
  PROF.player = t1 - t0; PROF.ai = t2 - t1; PROF.world = t3 - t2; PROF.mission = t4 - t3; PROF.hud = t5 - t4; PROF.total = t5 - t0; PROF.rays = RAYSTATS.rays; PROF.boxes = RAYSTATS.boxes;
  if (G.state !== 'playing' || G.mp) return;
  if (G.player.dead) return endMission(false);
}
G.step = step;
let last = performance.now();
renderer.info.autoReset = false; // counted per frame (world + view model), reset below
let ovT = 0, inFirst = 0;
// a failure inside the frame loop stops the mission and says so (once), instead of leaving a frozen / black screen
function loopFailed(kind, e) {
  if (G.state === 'playing' || G.state === 'brief') { G.state = 'error'; if (document.pointerLockElement) document.exitPointerLock(); }
  G.loopErrors = (G.loopErrors || 0) + 1; G.lastError = e && e.stack ? String(e.stack).slice(0, 1200) : String(e);
  if (G.loopErrors === 1 || !$('fatal').classList.contains('on')) { fatal(kind, (e && e.message ? e.message : String(e)) + ' — the mission was stopped. Return to the menu to continue.', true); setTimeout(() => { throw e; }); }
}
function frame(now) {
  requestAnimationFrame(frame);
  G.frames = (G.frames || 0) + 1; // real presented frames (end-to-end tests check the loop is alive)
  const P = G.pacing, ms = now - last, dt = Math.min(0.05, ms / 1000); last = now;
  const f0 = performance.now();
  P.feed(ms); P.gpuPoll();
  if (G.state === 'playing' || (G.mp && G.state === 'paused')) {
    if (inFirst) { const age = f0 - inFirst; if (age >= 0 && age < 500) { P.inputAge = P.inputT && f0 - P.inputT < 2000 ? P.inputAge + (age - P.inputAge) * 0.1 : age; P.inputT = f0; } inFirst = 0; } // oldest unconsumed mouse event -> this frame
    try { step(dt); } // mouse look is applied per event delta, independent of dt
    catch (e) { return loopFailed('SIMULATION ERROR', e); }
  }
  const f1 = performance.now();
  renderer.info.reset();
  try {
    if (G.state === 'menu') menuRender(dt);
    else if (G.scene && !G.contextLost && !(TEST && G.skipRender)) { // skipRender: test-only, lets several headless clients run at full rate
      const q = P.gpuBegin();
      renderer.setViewport(0, 0, innerWidth, innerHeight);
      renderer.clear(); renderer.render(G.scene, G.camera);
      renderer.clearDepth(); renderer.render(G.wscene, G.wcam);
      P.gpuEnd(q);
    }
  } catch (e) { return loopFailed('RENDER ERROR', e); }
  const f2 = performance.now();
  P.simMs = f1 - f0; P.renderMs = f2 - f1; P.cpuMs += (f2 - f0 - P.cpuMs) * 0.1;
  if (G.overlay && (ovT -= ms) <= 0) { ovT = 250; drawOverlay(); }
}
// F3 performance overlay: frame-time graph (last 240 frames, red = stutter), percentiles, CPU split, GPU time,
// render resolution and the last stutters with what was running when they happened.
let ovCanvas = null;
function drawOverlay() {
  const P = G.pacing, st = P.stats(), i = renderer.info.render, pr = renderer.getPixelRatio(), pf = G.prof, el = $('perfov');
  if (!ovCanvas) { ovCanvas = document.createElement('canvas'); ovCanvas.width = 240; ovCanvas.height = 56; ovCanvas.style.cssText = 'display:block;margin-top:5px;width:240px;height:56px'; }
  const g = ovCanvas.getContext('2d'), k = Math.min(P.n, P.ring.length), T = P.targetMs(), sc = 56 / Math.max(T * 2.5, 34);
  g.clearRect(0, 0, 240, 56); g.fillStyle = 'rgba(255,255,255,.15)'; g.fillRect(0, 56 - T * sc, 240, 1); g.fillRect(0, 56 - 33.3 * sc, 240, 1);
  for (let j = 0; j < k; j++) { const v = P.ring[(P.ri - k + j + P.ring.length) % P.ring.length]; g.fillStyle = v > Math.max(P.med * 2, P.med + 8) ? '#ff5a4a' : v > T * 1.2 ? '#e8b04a' : '#9fe8b0'; const h = Math.min(56, v * sc); g.fillRect(240 - k + j, 56 - h, 1, h); }
  const ago = (t) => ((performance.now() - t) / 1000).toFixed(0) + 's';
  el.innerHTML = `<b>${Math.round(1000 / st.avg)} FPS</b> · 1% LOW ${Math.round(st.low1)} · DISPLAY ~${Math.round(1000 / P.refreshMs)} HZ<br>` +
    `FRAME ms  avg ${st.avg.toFixed(1)}  p50 ${st.p50.toFixed(1)}  p99 ${st.p99.toFixed(1)}  max ${st.max.toFixed(1)}<br>` +
    `CPU ms  sim ${pf.total.toFixed(2)} (ai ${pf.ai.toFixed(2)} · player ${pf.player.toFixed(2)} · hud ${pf.hud.toFixed(2)})  render ${P.renderMs.toFixed(2)}<br>` +
    `GPU ms  ${P.gpuMs >= 0 ? P.gpuMs.toFixed(2) : P.gpuOff ? 'n/a (driver reports invalid timings)' : 'n/a (no timer query in this browser)'}  · INPUT AGE ${P.inputT && performance.now() - P.inputT < 2000 ? P.inputAge.toFixed(1) + ' ms' : '— (move the mouse)'}<br>` +
    `RES ${renderer.domElement.width}×${renderer.domElement.height} · SCALE ${Math.round(P.scale * 100)}%${G.adaptive ? '' : ' fixed'} · DPR ${pr.toFixed(2)}${LOWLAT ? ' · LOW-LATENCY' : ''}<br>` +
    `${i.calls} CALLS · ${Math.round(i.triangles / 1000)}K TRIS · RAYS ${pf.rays}/frame · STUTTERS ${P.stutters}` +
    (P.log.length ? '<br>' + P.log.slice(0, 3).map((s) => `<span style="color:#ff8a7a">${s.ms.toFixed(0)} ms ${ago(s.t)} ago — sim ${s.sim.toFixed(1)} render ${s.render.toFixed(1)}${s.gpu >= 0 ? ' gpu ' + s.gpu.toFixed(1) : ''}${s.sim + s.render < s.ms * 0.4 ? ' (outside the game loop: GC / browser / GPU)' : ''}</span>`).join('<br>') : '');
  el.appendChild(ovCanvas);
}
function setOverlay(on) { G.overlay = on; $('perfov').style.display = on ? 'block' : 'none'; if (on) { ovT = 250; drawOverlay(); } $('ovchk').checked = on; saveSettings(); }
function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  G.camera.aspect = G.wcam.aspect = innerWidth / innerHeight; G.camera.updateProjectionMatrix(); G.wcam.updateProjectionMatrix();
}
addEventListener('resize', resize);

// ---------- input ----------
addEventListener('keydown', (ev) => {
  if (G.state === 'paused' && ev.code === 'Escape') return resume();
  if (G.state !== 'playing') return;
  if (['Space', 'Tab', 'KeyS', 'KeyD', 'KeyA', 'KeyR', 'KeyN', 'KeyL', 'KeyE', 'KeyC', 'KeyQ', 'KeyF', 'KeyG', 'KeyH', 'KeyX', 'KeyV'].includes(ev.code) || ev.ctrlKey) ev.preventDefault();
  if (ev.repeat) return;
  const P = G.player; G.inp.k[ev.code] = true;
  if (ev.code === 'Space') G.inp.jump = true;
  else if (ev.code === 'KeyR') P.reload();
  else if (ev.code === 'KeyE') G.inp.e = true;
  else if (ev.code === 'KeyC') P.crouchToggle = !P.crouchToggle;
  else if (ev.code === 'KeyN') { setNV(!G.nv); G.audio.beep(G.nv); }
  else if (ev.code === 'KeyL') { P.laserOn = !P.laserOn; G.audio.beep(P.laserOn); }
  else if (ev.code === 'KeyG') P.startUse('throw');
  else if (ev.code === 'KeyH') P.startUse('med');
  else if (ev.code === 'KeyX') P.startUse('stim');
  else if (ev.code === 'KeyV') P.startUse('melee');
  else if (ev.code === 'Digit4') P.cycleThrow();
  else if (ev.code === 'F3') { ev.preventDefault(); setOverlay(!G.overlay); }
  else if (G.range && /^Digit[5678]$/.test(ev.code)) G.range.key(ev.code);
  else if (/^Digit[123]$/.test(ev.code)) P.switchTo(+ev.code[5] - 1);
  else if (ev.code === 'Escape' && TEST) pause();
});
addEventListener('keyup', (ev) => { G.inp.k[ev.code] = false; });
addEventListener('blur', () => { G.inp.k = {}; G.inp.lmb = G.inp.rmb = false; });
addEventListener('mousemove', (ev) => { if (G.state === 'playing' && (document.pointerLockElement === canvas || TEST)) {
  if (!TEST && !lookGate.accept(ev)) return;
  if (!inFirst) inFirst = ev.timeStamp || performance.now(); G.inp.mx += ev.movementX; G.inp.my += ev.movementY; } });
addEventListener('mousedown', (ev) => {
  if (G.state !== 'playing') return;
  if (!TEST && document.pointerLockElement !== canvas) return lock();
  if (ev.button === 0) { G.inp.lmb = true; G.inp.lmbPressed = true; } else if (ev.button === 2) G.inp.rmb = true;
});
addEventListener('mouseup', (ev) => { if (ev.button === 0) G.inp.lmb = false; else if (ev.button === 2) G.inp.rmb = false; });
addEventListener('wheel', (ev) => { // scoped: adjust magnification; otherwise cycle throwables. Never scroll the page.
  if (G.state !== 'playing') return; ev.preventDefault();
  if (!G.player.zoomStep(ev.deltaY < 0 ? 1 : -1)) G.player.cycleThrow();
}, { passive: false });
addEventListener('contextmenu', (ev) => ev.preventDefault());
document.addEventListener('pointerlockerror', () => { lookGate.pending = false; });
document.addEventListener('pointerlockchange', (ev) => {
  lookGate.pending = false;
  if (document.pointerLockElement === canvas) { lookGate.lockedAt = ev.timeStamp || performance.now(); lookGate.first = true; G.inp.mx = G.inp.my = 0; if (G.state === 'paused') { G.state = 'playing'; show(null); last = performance.now(); } }
  else if (G.state === 'playing' && !TEST) pause();
});

// ---------- menu ----------
const BRIEF = {
  forest: 'FOREST OUTPOST — a fenced compound, a remote bunker, a ruin and a camp spread through dark woodland. Night vision recommended.',
  warehouse: 'INDUSTRIAL WAREHOUSE — main hall, office, machine room, raised dock, yards and service alleys. Close quarters, many routes.',
};
const AI_NOTE = { recruit: 'RECRUIT — inexperienced guards: slow decisions, long clumsy exposures, unreliable radio calls.', tactical: 'TACTICAL — trained guards: use cover properly, lean to fire, flank, radio contacts and defend the objective.', elite: 'ELITE SQUAD — a coordinated team: bounding movement, suppressive fire, multiple angles, grenades and flashbangs.' };
const M = { tab: 'play', edit: 'primary', scene: null, obj: null, spin: 0 };
function menuClear() { if (M.obj && M.scene) M.scene.remove(M.obj); M.obj = null; if (M.ch) { M.scene.remove(M.ch.root); M.ch = null; } }
function menuScene() {
  if (M.scene) return M.scene;
  const s = (M.scene = new THREE.Scene()); s.environment = ENV; s.environmentIntensity = 0.55;
  const k = new THREE.DirectionalLight(0xfff0dc, 2.6); k.position.set(2, 3, 3); s.add(k); const r = new THREE.DirectionalLight(0x7fb0ff, 1.6); r.position.set(-3, 2, -3); s.add(r); s.add(new THREE.HemisphereLight(0x8090a0, 0x101418, 0.5));
  M.cam = new THREE.PerspectiveCamera(30, 1, 0.05, 50);
  return s;
}
function menuRefresh() { // rebuild the 3D preview for the current tab
  if (G.state !== 'menu') return;
  const s = menuScene(); menuClear();
  if (M.tab === 'loadout') { const id = G.loadout[M.edit]; M.obj = buildView(id, G.loadout.att[id], true); s.add(M.obj); }
  else { M.ch = new Character(G.sel.ai === 'elite' ? 'elite' : G.sel.ai === 'recruit' ? 'guard' : 'cautious', 'carbine'); s.add(M.ch.root); M.ch.root.rotation.y = Math.PI + 0.5; }
}
function menuRender(dt) {
  if (!M.scene) return;
  const vx = $('side').offsetWidth + $('content').offsetWidth, w = innerWidth - vx;
  renderer.setViewport(0, 0, innerWidth, innerHeight); renderer.setClearColor(0x06090c); renderer.clear();
  if (w < 260) return; // no room beside the menu on narrow windows
  renderer.setViewport(vx, 0, w, innerHeight); M.cam.aspect = w / innerHeight;
  M.spin += dt;
  if (M.obj) {
    const b = new THREE.Box3().setFromObject(M.obj), c = b.getCenter(G.v1), sz = b.getSize(G.v2).length();
    M.obj.rotation.y = Math.PI / 2 + Math.sin(M.spin * 0.5) * 0.55; M.cam.position.set(c.x, c.y + sz * 0.12, c.z + sz * 2.3 * Math.max(1, 1.25 / M.cam.aspect)); M.cam.lookAt(c.x, c.y, c.z);
  } else if (M.ch) { M.ch.update(dt, { speed: 0, aim: Math.sin(M.spin * 0.35) > 0, crouch: Math.sin(M.spin * 0.22) < -0.6 }); M.cam.position.set(0, 1.25, 5.2 * Math.max(1, 0.75 / M.cam.aspect)); M.cam.lookAt(0, 0.95, 0); }
  M.cam.updateProjectionMatrix(); renderer.render(M.scene, M.cam);
}
function optHTML(v, title, sub, sel, cls = '') { return `<button class="opt ${cls} ${sel ? 'sel' : ''}" data-v="${v}">${title}${sub ? `<small>${sub}</small>` : ''}</button>`; }
function menuBuild() {
  const L = G.loadout, q = (k) => document.querySelector(`.opts[data-k="${k}"]`);
  if (!MISSIONS[G.sel.mission].lengths.includes(G.sel.length)) G.sel.length = MISSIONS[G.sel.mission].lengths[0]; // only valid combinations
  q('mission').innerHTML = Object.keys(MISSIONS).map((k) => optHTML(k, MISSIONS[k].short, MISSIONS[k].desc, G.sel.mission === k)).join('');
  q('length').innerHTML = MISSIONS[G.sel.mission].lengths.map((k) => optHTML(k, LENGTHS[k].name[0] + LENGTHS[k].name.slice(1).toLowerCase(), LENGTHS[k].desc, G.sel.length === k)).join('');
  for (const slot of ['primary', 'secondary']) q(slot).innerHTML = Object.keys(WEAPONS).filter((id) => WEAPONS[id].slot === slot).map((id) => optHTML(id, WEAPONS[id].name, WEAPONS[id].desc, L[slot] === id)).join('');
  q('kit').innerHTML = Object.keys(KITS).map((k) => optHTML(k, KITS[k].name, KITS[k].desc, L.kit === k)).join('');
  const id = L[M.edit], w = WEAPONS[id], a = L.att[id];
  $('attl').textContent = 'ATTACHMENTS — ' + w.name;
  $('edit').innerHTML = optHTML('primary', 'Edit primary', '', M.edit === 'primary', 'sm') + optHTML('secondary', 'Edit secondary', '', M.edit === 'secondary', 'sm');
  $('optic').innerHTML = w.optics.map((o) => optHTML(o, OPTICS[o].name, OPTICS[o].desc || (o === 'iron' ? 'no zoom' : o === 'reddot' ? '1x, clean dot' : '1x, ring reticle'), a.optic === o, 'sm')).join('');
  $('atts').innerHTML = [['muzzle', 'Suppressor', 'quiet: guards hear it only at close range'], ['grip', 'Foregrip', '-20% recoil, steadier hip fire'], ['laser', 'Laser sight', 'tighter hip fire (L toggles)']].map(([k, n, d]) => optHTML(k, n, d, a[k], w[k] ? '' : 'off')).join('');
  const st = statsFor(id, a), bar = (n, v) => `<span>${n}</span><i><b style="width:${Math.round(Math.max(4, Math.min(100, v)))}%"></b></i>`;
  $('bars').innerHTML = bar('DAMAGE', (st.dmg * (st.pellets || 1)) / 1.2) + bar('FIRE RATE', st.rpm / 9) + bar('CONTROL', 100 - st.recoil * 20) + bar('HANDLING', 100 - st.adsT * 230) + bar('STEALTH', 100 - st.noise * 1.9);
  $('losum').innerHTML = `${WEAPONS[L.primary].name} <span style="color:var(--a)">${attText(L.primary, L.att[L.primary])}</span><br>${WEAPONS[L.secondary].name} <span style="color:var(--a)">${attText(L.secondary, L.att[L.secondary])}</span><br>Combat knife · ${KITS[L.kit].name} kit — ${KITS[L.kit].desc}`;
  $('brief').innerHTML = `<b style="color:#fff">${MISSIONS[G.sel.mission].name}</b> — ${MISSIONS[G.sel.mission].desc}. ${LENGTHS[G.sel.length].desc}.<br>${BRIEF[G.sel.map]}<br>${AI_NOTE[G.sel.ai]}<br><span style="color:#74838a">Insertion point, objective locations and extraction change from run to run; the exact sequence is shown before you begin.</span>`;
  saveLoadout(L); menuRefresh(); if (G.mpLobby) G.mpLobby.loadoutChanged();
}
document.querySelectorAll('.nav').forEach((b) => b.addEventListener('click', () => {
  M.tab = b.dataset.tab; document.querySelectorAll('.nav').forEach((x) => x.classList.toggle('sel', x === b));
  document.querySelectorAll('.tab').forEach((t) => t.classList.toggle('on', t.id === 't-' + M.tab)); menuRefresh();
}));
$('content').addEventListener('click', (ev) => {
  const b = ev.target.closest('.opt'); if (!b || !b.dataset.v) return;
  const row = b.parentElement, k = row.dataset.k, v = b.dataset.v, L = G.loadout;
  if (k === 'mission' || k === 'length') G.sel[k] = v;
  else if (k === 'map' || k === 'ai' || k === 'quality') { G.sel[k] = v; row.querySelectorAll('.opt').forEach((o) => o.classList.toggle('sel', o === b)); if (k === 'quality') { saveSettings(); applyQuality(); } }
  else if (k === 'primary' || k === 'secondary') { L[k] = v; M.edit = k; }
  else if (k === 'kit') L.kit = v;
  else if (row.id === 'edit') M.edit = v;
  else if (row.id === 'optic') L.att[L[M.edit]].optic = v;
  else if (row.id === 'atts') L.att[L[M.edit]][v] = !L.att[L[M.edit]][v];
  menuBuild();
});
const slider = (id, key, fmt, apply) => { const el = $(id); el.value = G[key]; $(id + 'v').textContent = fmt(G[key]); el.addEventListener('input', () => { G[key] = +el.value; $(id + 'v').textContent = fmt(G[key]); saveSettings(); if (apply) apply(); }); };
if (G.vol == null) G.vol = 0.75;
const pct = (v) => Math.round(v * 100) + '%', mult = (v) => v.toFixed(2) + '×';
slider('sens', 'sens', (v) => v.toFixed(2) + ` (${((0.0022 * v * 180) / Math.PI).toFixed(3)}°/count)`); slider('sensAds', 'sensAds', mult); slider('sensScope', 'sensScope', mult); slider('sensY', 'sensY', mult); slider('headBob', 'headBob', (v) => (v ? pct(v) : 'OFF')); slider('cammo', 'camMotion', (v) => (v ? Math.round(v * 100) + '%' : 'OFF')); slider('wsway', 'weaponSway', (v) => (v ? Math.round(v * 100) + '%' : 'OFF')); slider('fov', 'fov', (v) => v); slider('vol', 'vol', (v) => Math.round(v * 100), () => { if (G.audio.master) G.audio.master.gain.value = G.vol; });
const chk = (id, key, after) => { const el = $(id); el.checked = !!G[key]; el.addEventListener('change', () => { G[key] = el.checked; saveSettings(); if (after) after(); }); };
chk('sfovchk', 'sprintFov');
$('resetctl').addEventListener('click', () => { // controls + comfort back to defaults (graphics / audio untouched)
  for (const k in CONTROL_DEFAULTS) G[k] = CONTROL_DEFAULTS[k];
  for (const [id, key] of [['sens', 'sens'], ['sensAds', 'sensAds'], ['sensScope', 'sensScope'], ['sensY', 'sensY'], ['fov', 'fov'], ['cammo', 'camMotion'], ['headBob', 'headBob'], ['wsway', 'weaponSway']]) { $(id).value = G[key]; $(id).dispatchEvent(new Event('input')); }
  $('sfovchk').checked = true; saveSettings();
});
chk('adchk', 'adaptive', () => { if (!G.adaptive) { G.pacing.scale = 1; renderer.setPixelRatio(basePixelRatio()); resize(); } }); chk('ovchk', 'overlay', () => setOverlay(G.overlay)); chk('rawchk', 'rawInput'); chk('llchk', 'lowLatency', () => { $('llnote').style.display = G.lowLatency !== LOWLAT ? 'inline' : 'none'; });
$('fpstarget').value = G.fpsTarget; $('fpstarget').addEventListener('change', (ev) => { G.fpsTarget = ev.target.value; saveSettings(); });
setOverlay(G.overlay);
document.querySelectorAll('.opts[data-k="quality"] .opt').forEach((o) => o.classList.toggle('sel', o.dataset.v === G.sel.quality));
const begin = () => { G.audio.init(); if (G.audio.master) G.audio.master.gain.value = G.vol; startMission(); };
$('start').onclick = () => { G.sel.mode = 'mission'; begin(); }; $('train').onclick = () => { G.sel.mode = 'range'; begin(); }; $('again').onclick = begin; $('prestart').onclick = begin;
$('brgo').onclick = () => { if (G.mp) { if (G.state === 'playing') { show(null); if (!TEST) lock(); } return; } beginMission(); };
$('brback').onclick = () => { if (G.mp && G.mpLobby) G.mpLobby.leave(); toMenu(); };
const openTab = (t) => { const b = document.querySelector(`.nav[data-tab="${t}"]`); if (b) b.click(); };
G.mpLobby = initLobby(G, {
  openTab, toast: (m, t) => toast(m, t), hitMark: (d, h) => hitMark(d, h), applyPickup,
  radio: (text) => { G.audio.radio(); $('subt').innerHTML = `<b>RADIO</b>${esc(text)}`; $('subt').style.opacity = 1; subT = 2.8; },
  // the leader started a mission: build it with the shared seed, then tell the server we are loaded
  startCoop: (m, L) => {
    const st = m.settings; Object.assign(G.sel, { map: st.map, mission: st.mission, length: st.length, ai: st.ai, seed: m.seed, layout: null, mode: 'mission' });
    const mine = m.players.find((p) => p.id === L.id); if (mine && mine.loadout) { G.loadout.primary = mine.loadout.primary; G.loadout.secondary = mine.loadout.secondary; G.loadout.kit = mine.loadout.kit; Object.assign(G.loadout.att, mine.loadout.att); }
    if (G.mp) { G.mp.dispose(); G.mp = null; }
    G.mp = createSession(G, G.mpHooks, L, m);
    G.audio.init(); if (G.audio.master) G.audio.master.gain.value = G.vol;
    startMission();
  },
});
G.mpHooks = {
  toast: (m, t) => toast(m, t), hitMark: (d, h) => hitMark(d, h), applyPickup,
  radio: (text) => { G.audio.radio(); $('subt').innerHTML = `<b>RADIO</b>${esc(text)}`; $('subt').style.opacity = 1; subT = 2.8; },
  go: () => { // every operator has loaded: the mission is live for everyone at once
    G.state = 'playing'; last = performance.now(); show(null);
    toast(MISSIONS[G.mission.def.type].name + ' — ' + G.mission.def.stages[0].title.toUpperCase() + (TEST ? '' : ' · CLICK TO TAKE CONTROL'), 4);
  },
  endCoop,
  partyEnded: (text) => { if (G.state !== 'menu') toMenu(); openTab('mp'); toast(text.toUpperCase(), 5); },
};
$('fatalmenu').onclick = () => { $('fatal').classList.remove('on'); G.loopErrors = 0; if (G.state !== 'menu') toMenu(); };
$('resume').onclick = resume; $('pmenu').onclick = toMenu; $('emenu').onclick = toMenu;
// night-vision grain
{ const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'), im = g.createImageData(128, 128);
  for (let i = 0; i < im.data.length; i += 4) { im.data[i] = im.data[i + 1] = im.data[i + 2] = Math.random() * 255; im.data[i + 3] = 255; }
  g.putImageData(im, 0, 0); $('nvn').style.background = `url(${c.toDataURL()})`; }
applyQuality();
loadAssets((p) => { $('loadf').style.width = p * 100 + '%'; }).then(() => { G.state = 'menu'; show('menu'); menuBuild(); }).catch((e) => { $('load').firstElementChild.textContent = 'FAILED TO LOAD ASSETS: ' + e.message; });
requestAnimationFrame(frame);
