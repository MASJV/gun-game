// SHADOW PROTOCOL V2 - game loop, mission logic, menus and HUD.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildWorld, rayBoxes, rnd, updateLOD } from './world.js';
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

const $ = (id) => document.getElementById(id);
const TEST = location.search.includes('test');
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
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
window.__SP = G;
G.debugRender = () => { // used by the perf probe in tools/: one synchronous frame, GPU flushed
  const t0 = performance.now(), gl = renderer.getContext(); renderer.info.autoReset = false; renderer.info.reset();
  renderer.setViewport(0, 0, innerWidth, innerHeight); renderer.clear(); renderer.render(G.scene, G.camera); renderer.clearDepth(); renderer.render(G.wscene, G.wcam);
  gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4)); 
  return { ms: Math.round(performance.now() - t0), calls: renderer.info.render.calls, tris: renderer.info.render.triangles };
};
try { const s = JSON.parse(localStorage.getItem('sp2_settings') || '{}'); if (s.sens) G.sens = s.sens; if (s.fov) G.fov = s.fov; if (s.quality) G.sel.quality = s.quality; if (s.vol != null) G.vol = s.vol; if (s.adaptive != null) G.adaptive = s.adaptive; if (s.overlay != null) G.overlay = s.overlay; if (s.raw != null) G.rawInput = s.raw; } catch (e) { /* defaults */ }
if (G.adaptive == null) G.adaptive = true; if (G.rawInput == null) G.rawInput = true; G.overlay = !!G.overlay;
const saveSettings = () => { try { localStorage.setItem('sp2_settings', JSON.stringify({ sens: G.sens, fov: G.fov, quality: G.sel.quality, vol: G.vol, adaptive: G.adaptive, overlay: G.overlay, raw: G.rawInput })); } catch (e) { /* ignore */ } };

// ---------- services used by player / enemies / equipment ----------
const ray = (flag) => (ax, ay, az, bx, by, bz) => {
  const dx = bx - ax, dy = by - ay, dz = bz - az, d = Math.hypot(dx, dy, dz);
  return d < 0.01 || !rayBoxes(G.world.colliders, ax, ay, az, dx / d, dy / d, dz / d, d, flag);
};
G.los = ray('sight'); G.losB = ray('bullet');
G.sound = (pos, radius, kind, src) => {
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
const BAL = makeBallistics(G); G.trace = BAL.trace;
G.playerShot = (o, d, w, muzzle, first) => {
  const r = BAL.playerRound(o, d, muzzle), end = G.v1.set(r.from.x + r.dir.x * r.d, r.from.y + r.dir.y * r.d, r.from.z + r.dir.z * r.d);
  if (first || Math.random() < 0.4) G.fx.tracer(muzzle, end);
  if (G.range) G.range.onShot(r, end, w, first);
  if (r.kind === 'enemy') {
    const hitE = r.e; let dmg = w.dmg * (r.part === 'head' ? w.head || 2.5 : r.mult);
    if (w.falloff && r.d > w.falloff[0]) dmg *= 1 - (1 - w.falloff[1]) * Math.min(1, (r.d - w.falloff[0]) / (w.falloff[0] * 1.5));
    hitE.damage(dmg, G.player.pos, r.part); G.fx.blood(end, G.v2.copy(d).negate());
    for (const e of G.enemies) if (!e.dead && e !== hitE && !e.seeing) e.supp = Math.min(1.5, e.supp + (Math.hypot(e.pos.x - end.x, e.pos.z - end.z) < 3 ? 0.35 : 0));
    if (first) G.stats.hits++; if (r.part === 'head') G.stats.heads++; hitMark(hitE.dead, r.part === 'head'); G.audio.hit(hitE.dead, r.part === 'head');
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
G.spawnGrenade = (type, pos, vel, owner) => G.gren.spawn(type, pos, vel, owner);
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
  for (let i = 0; i < n; i++) {
    const e = spawnEnemy(s.x + i * 1.6, s.z + (i % 2) * 1.5, [[R.x, R.z]], { duty: 'response' });
    e.alerted = true; e.setOrder(i === 0 ? { type: 'investigate', x: R.x, z: R.z } : { type: 'defend', x: W.posts.objective[i % W.posts.objective.length][0], z: W.posts.objective[i % W.posts.objective.length][1], tx: R.x, tz: R.z });
  }
  toast(`RESPONSE TEAM ENTERING FROM THE ${s.n.toUpperCase()}`, 4.5);
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
  G.enemies.push(e); return e;
}
function basePixelRatio() { const q = G.sel.quality; return q === 'low' ? 1 : Math.min(window.devicePixelRatio || 1, q === 'high' ? 2 : 1.25); }
function applyQuality() {
  G.pacing.scale = 1; renderer.setPixelRatio(basePixelRatio());
  renderer.shadowMap.enabled = G.sel.quality !== 'low'; resize();
}
// ---------- frame pacing: frame-time statistics + adaptive render scale (resolution only, never simulation) ----------
G.pacing = {
  ema: 16.7, worst: 0, scale: 1, min: 0.6, hi: 0, lo: 0, ring: new Float32Array(90), ri: 0, active: !TEST, changes: 0,
  feed(ms) { // one frame time sample; returns true when the render scale changed
    if (ms > 250) return false; // tab switch / breakpoint: not a real frame
    this.ema += (ms - this.ema) * 0.08; this.ring[this.ri++ % this.ring.length] = ms;
    let w = 0; for (const v of this.ring) if (v > w) w = v; this.worst = w;
    if (!G.adaptive && this.scale !== 1) { this.scale = 1; renderer.setPixelRatio(basePixelRatio()); resize(); return true; }
    if (!this.active || !G.adaptive || G.state !== 'playing') { this.hi = this.lo = 0; return false; }
    const s = ms / 1000;
    if (this.ema > 20) { this.hi += s; this.lo = 0; } else if (this.ema < 13) { this.lo += s; this.hi = 0; } else this.hi = this.lo = 0;
    let ns = this.scale;
    if (this.hi > 1 && this.scale > this.min) { ns = Math.max(this.min, Math.round((this.scale - 0.1) * 10) / 10); this.hi = 0; }
    else if (this.lo > 2 && this.scale < 1) { ns = Math.min(1, Math.round((this.scale + 0.1) * 10) / 10); this.lo = 0; }
    if (ns === this.scale) return false;
    this.scale = ns; this.changes++; renderer.setPixelRatio(basePixelRatio() * ns); resize(); return true;
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
    : generateMission(W, { type: G.sel.mission, length: MISSIONS[G.sel.mission].lengths.includes(L) ? L : MISSIONS[G.sel.mission].lengths[0], seed: G.sel.seed }, G.hist);
  if (!classic && !isRange) recordMission(G.hist, def);
  G.civs = [];
  G.player = new Player(G, def.entry, G.loadout);
  G.enemies = []; typeBag = [];
  G.sec = new Security(G, PROFILES[G.sel.ai]);
  // the site is staffed from the first second: objective detail, sentries on the other objectives, door guards, patrols
  const nav = W.nav;
  for (const d of isRange ? [] : deployment(W, def, W.guards + LENGTHS[def.length].extra)) {
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
  if (TEST || classic) { show(null); G.state = 'playing'; toast(M2.name + ' — ' + def.stages[0].title.toUpperCase(), 4); if (!TEST) lock(); }
  else { G.state = 'brief'; show('briefov'); G.player.update(0.016); }
}
function beginMission() { if (G.state !== 'brief') return; show(null); G.state = 'playing'; last = performance.now(); toast(MISSIONS[G.mission.def.type].name + ' — ' + G.mission.def.stages[0].title.toUpperCase(), 4); lock(); }
// Raw (unaccelerated) mouse input where the browser supports it; plain pointer lock otherwise.
function lock() {
  const fail = () => { $('phint').textContent = 'CLICK RESUME AGAIN TO RE-CAPTURE THE MOUSE'; };
  const plain = () => { try { const q = canvas.requestPointerLock(); if (q && q.catch) q.catch(fail); } catch (e) { fail(); } };
  if (!G.rawInput) return plain();
  try { const p = canvas.requestPointerLock({ unadjustedMovement: true }); if (p && p.catch) p.catch(plain); } catch (e) { plain(); }
}
G.lock = lock;
function show(id) { for (const k of ['menu', 'pause', 'end', 'load', 'briefov']) $(k).classList.toggle('on', k === id); }
function pause() { if (G.state !== 'playing') return; G.state = 'paused'; $('phint').textContent = 'MISSION ON HOLD'; show('pause'); G.inp.k = {}; G.inp.lmb = G.inp.rmb = false; }
function resume() { if (G.state !== 'paused') return; if (TEST) { G.state = 'playing'; show(null); } else lock(); }
function toMenu() {
  G.state = 'menu'; disposeScene(); $('hud').classList.remove('on'); setNV(false); $('scope').style.display = 'none'; $('flashov').style.opacity = 0;
  show('menu'); if (document.pointerLockElement) document.exitPointerLock(); menuRefresh();
}
function endMission(win, reason) {
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
function updateHUD(dt) {
  const P = G.player, s = P.slot, w = s.st, W = G.world;
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

function updateMission(dt) {
  const P = G.player, W = G.world, inp = G.inp;
  G.time += dt; G.stats.maxSec = Math.max(G.stats.maxSec, G.sec.level);
  const near = (x, z, r) => Math.hypot(x - P.pos.x, z - P.pos.z) < r, Mi = G.mission, ex = Mi.def.exit.pos;
  let prompt = Mi.update(dt, inp);
  if (Mi.failed) return endMission(false, Mi.failed);
  if (Mi.complete && near(ex[0], ex[2], 3.2)) { if (Mi.civNear()) return endMission(true); prompt = `Wait for the ${Mi.civ.kind === 'hvt' ? 'target' : 'hostage'} to reach you`; }
  for (const pk of G.pickups) {
    if (pk.taken || !near(pk.x, pk.z, 1.9)) continue;
    const med = pk.kind === 'med';
    prompt = prompt || `<b>E</b>${med ? 'Take medical supplies' : 'Take ammunition and grenades'}`;
    if (inp.e && !prompt.includes(Mi.stage ? Mi.stage.prompt : '\u0000')) {
      pk.taken = true; G.scene.remove(pk.mesh); G.audio.pickup();
      if (med) { P.inv.med = Math.min(4, P.inv.med + 1); P.inv.stim = Math.min(4, P.inv.stim + 1); }
      else { for (const s of P.slots) if (!s.st.melee) s.reserve = Math.min(s.st.reserve * 2, s.reserve + s.st.mag * 2); P.inv.frag = Math.min(4, P.inv.frag + 1); P.inv.flash = Math.min(4, P.inv.flash + 1); }
      toast(med ? '+1 MEDKIT  +1 STIM' : 'AMMUNITION RESUPPLIED  +1 FRAG  +1 FLASH', 1.8);
    }
  }
  inp.e = false;
  const pe = $('prompt'); if (hudCache.pr !== prompt) { hudCache.pr = prompt; pe.innerHTML = prompt; pe.style.display = prompt ? 'block' : 'none'; }
  const med = P.use && P.use.type === 'med', hk = Mi.hold > 0 || med;
  setStyle('hack', 'display', hk ? 'block' : 'none'); if (hk) $('hackf').style.width = (med ? P.use.t / P.use.dur : Mi.hold / ((Mi.stage && Mi.stage.hold) || 1)) * 100 + '%';
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
  const m = W.moon; m.target.position.set(P.pos.x, 0, P.pos.z); m.position.copy(W.moonDir).multiplyScalar(110).add(m.target.position);
}

// ---------- loop ----------
function step(dt) {
  G.frame++;
  G.player.update(dt);
  G.inp.mx = G.inp.my = 0;
  for (const e of G.enemies) e.update(dt);
  for (const c of G.civs) c.update(dt);
  if (G.range) G.range.update(dt);
  if (G.frame % 6 === 0) updateLOD(G.world, G.camera.position);
  G.sec.update(dt); G.gren.update(dt);
  G.fx.update(dt);
  updateMission(dt);
  if (G.state !== 'playing') return;
  if (G.player.dead) return endMission(false);
  updateHUD(dt);
}
G.step = step;
let last = performance.now();
renderer.info.autoReset = false; // counted per frame (world + view model), reset below
let ovT = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const ms = now - last, dt = Math.min(0.05, ms / 1000); last = now;
  G.pacing.feed(ms);
  if (G.state === 'playing') step(dt); // mouse look is applied per event delta, independent of dt
  renderer.info.reset();
  if (G.state === 'menu') menuRender(dt);
  else if (G.scene) {
    renderer.setViewport(0, 0, innerWidth, innerHeight);
    renderer.clear(); renderer.render(G.scene, G.camera);
    renderer.clearDepth(); renderer.render(G.wscene, G.wcam);
  }
  if (G.overlay && (ovT -= ms) <= 0) { // performance overlay (Settings or F3), refreshed 4x per second
    ovT = 250; const P = G.pacing, i = renderer.info.render;
    $('perfov').innerHTML = `${Math.round(1000 / P.ema)} FPS · ${P.ema.toFixed(1)} ms<br>WORST ${P.worst.toFixed(1)} ms<br>SCALE ${Math.round(P.scale * 100)}%${G.adaptive ? '' : ' (FIXED)'}<br>${i.calls} CALLS · ${Math.round(i.triangles / 1000)}K TRIS`;
  }
}
function setOverlay(on) { G.overlay = on; $('perfov').style.display = on ? 'block' : 'none'; $('ovchk').checked = on; saveSettings(); }
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
addEventListener('mousemove', (ev) => { if (G.state === 'playing' && (document.pointerLockElement === canvas || TEST)) { G.inp.mx += ev.movementX; G.inp.my += ev.movementY; } });
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
document.addEventListener('pointerlockchange', () => {
  if (document.pointerLockElement === canvas) { if (G.state === 'paused') { G.state = 'playing'; show(null); last = performance.now(); } }
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
  saveLoadout(L); menuRefresh();
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
slider('sens', 'sens', (v) => v.toFixed(2)); slider('fov', 'fov', (v) => v); slider('vol', 'vol', (v) => Math.round(v * 100), () => { if (G.audio.master) G.audio.master.gain.value = G.vol; });
const chk = (id, key, after) => { const el = $(id); el.checked = !!G[key]; el.addEventListener('change', () => { G[key] = el.checked; saveSettings(); if (after) after(); }); };
chk('adchk', 'adaptive', () => { if (!G.adaptive) { G.pacing.scale = 1; renderer.setPixelRatio(basePixelRatio()); resize(); } }); chk('ovchk', 'overlay', () => setOverlay(G.overlay)); chk('rawchk', 'rawInput');
setOverlay(G.overlay);
document.querySelectorAll('.opts[data-k="quality"] .opt').forEach((o) => o.classList.toggle('sel', o.dataset.v === G.sel.quality));
const begin = () => { G.audio.init(); if (G.audio.master) G.audio.master.gain.value = G.vol; startMission(); };
$('start').onclick = () => { G.sel.mode = 'mission'; begin(); }; $('train').onclick = () => { G.sel.mode = 'range'; begin(); }; $('again').onclick = begin; $('prestart').onclick = begin;
$('brgo').onclick = beginMission; $('brback').onclick = toMenu;
$('resume').onclick = resume; $('pmenu').onclick = toMenu; $('emenu').onclick = toMenu;
// night-vision grain
{ const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'), im = g.createImageData(128, 128);
  for (let i = 0; i < im.data.length; i += 4) { im.data[i] = im.data[i + 1] = im.data[i + 2] = Math.random() * 255; im.data[i + 3] = 255; }
  g.putImageData(im, 0, 0); $('nvn').style.background = `url(${c.toDataURL()})`; }
applyQuality();
loadAssets((p) => { $('loadf').style.width = p * 100 + '%'; }).then(() => { G.state = 'menu'; show('menu'); menuBuild(); }).catch((e) => { $('load').firstElementChild.textContent = 'FAILED TO LOAD ASSETS: ' + e.message; });
requestAnimationFrame(frame);
