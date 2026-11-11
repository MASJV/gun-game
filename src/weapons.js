// Weapon definitions, attachments, loadout persistence and first-person view models.
import * as THREE from 'three';
import { A, makeGun } from './assets.js';

export const WEAPONS = {
  ak: { slot: 'primary', name: 'AK-47', desc: 'Hard hitting, heavy recoil', auto: true, dmg: 36, rpm: 600, mag: 30, reserve: 120, recoil: 1.45, recoilH: 0.5, hip: 2.1, ads: 0.2, reload: 2.6, adsT: 0.24, move: 0.93, kick: 0.07, noise: 44, falloff: [35, 0.75], optics: ['iron', 'reddot', 'holo', 'scope'], muzzle: 1, grip: 1, laser: 1 },
  m4: { slot: 'primary', name: 'M4A1', desc: 'Balanced, controllable', auto: true, dmg: 28, rpm: 780, mag: 30, reserve: 150, recoil: 0.82, recoilH: 0.26, hip: 1.5, ads: 0.13, reload: 2.1, adsT: 0.19, move: 0.97, kick: 0.045, noise: 42, falloff: [40, 0.8], optics: ['iron', 'reddot', 'holo', 'scope'], muzzle: 1, grip: 1, laser: 1 },
  dmr: { slot: 'primary', name: 'SR-9 DMR', desc: 'Semi-auto marksman rifle, 4x scope', auto: false, dmg: 68, rpm: 230, mag: 10, reserve: 50, recoil: 2.7, recoilH: 0.5, hip: 3.4, ads: 0.03, reload: 2.8, adsT: 0.3, move: 0.9, kick: 0.11, noise: 50, optics: ['scope'], muzzle: 1, head: 3 },
  pistol: { slot: 'secondary', name: 'P9 PISTOL', desc: 'Fast handling sidearm', auto: false, dmg: 30, rpm: 420, mag: 15, reserve: 60, recoil: 1.25, recoilH: 0.3, hip: 1.2, ads: 0.3, reload: 1.4, adsT: 0.12, move: 1.06, kick: 0.085, noise: 36, falloff: [20, 0.65], optics: ['iron'], muzzle: 1, laser: 1 },
  smg: { slot: 'secondary', name: 'VK-9 SMG', desc: 'High rate of fire, short range', auto: true, dmg: 21, rpm: 900, mag: 30, reserve: 120, recoil: 0.6, recoilH: 0.36, hip: 1.3, ads: 0.3, reload: 1.9, adsT: 0.14, move: 1.03, kick: 0.035, noise: 38, falloff: [16, 0.6], optics: ['iron', 'reddot', 'holo'], muzzle: 1, grip: 1, laser: 1 },
  shotgun: { slot: 'secondary', name: 'M590 SHOTGUN', desc: '8 pellets, devastating up close', auto: false, pellets: 8, dmg: 15, rpm: 72, mag: 6, reserve: 30, recoil: 4.4, recoilH: 0.8, hip: 3.2, ads: 2.5, reload: 0.5, shells: 1, adsT: 0.2, move: 0.95, kick: 0.15, noise: 48, falloff: [9, 0.35], optics: ['iron', 'reddot'], laser: 1 },
  knife: { slot: 'melee', name: 'COMBAT KNIFE', desc: 'Silent. Lethal from behind', melee: true, dmg: 70, range: 2.1, rate: 0.6, move: 1.1, mag: 0, reserve: 0 },
};
export const OPTICS = {
  iron: { name: 'Iron sights', fov: 58, eye: 0.3 }, reddot: { name: 'Red dot', fov: 55, eye: 0.19, ret: 'dot' }, holo: { name: 'Holographic', fov: 52, eye: 0.19, ret: 'holo' },
  scope: { name: '4x scope', fov: 19, eye: 0.085, ret: 'scope', adsT: 0.06 },
};
export const KITS = {
  assault: { name: 'ASSAULT', desc: '3 frag · 1 flash · 1 medkit · 2 stims', frag: 3, flash: 1, smoke: 0, med: 1, stim: 2 },
  recon: { name: 'RECON', desc: '1 frag · 2 flash · 2 smoke · 2 medkits · 1 stim', frag: 1, flash: 2, smoke: 2, med: 2, stim: 1 },
  medic: { name: 'MEDIC', desc: '1 frag · 1 flash · 1 smoke · 3 medkits · 3 stims', frag: 1, flash: 1, smoke: 1, med: 3, stim: 3 },
};
const defAtt = (id) => ({ optic: WEAPONS[id].optics ? WEAPONS[id].optics[0] : 'iron', muzzle: false, grip: false, laser: id === 'm4' });
export function defaultLoadout() {
  const att = {}; for (const id in WEAPONS) if (!WEAPONS[id].melee) att[id] = defAtt(id);
  return { primary: 'm4', secondary: 'pistol', kit: 'assault', att };
}
export function loadLoadout() {
  const d = defaultLoadout();
  try {
    const s = JSON.parse(localStorage.getItem('sp2_loadout') || 'null');
    if (s && WEAPONS[s.primary] && WEAPONS[s.secondary] && KITS[s.kit]) { d.primary = s.primary; d.secondary = s.secondary; d.kit = s.kit; for (const id in d.att) if (s.att && s.att[id]) Object.assign(d.att[id], s.att[id]); }
  } catch (e) { /* storage unavailable: defaults */ }
  for (const id in d.att) { const w = WEAPONS[id], a = d.att[id]; if (!w.optics.includes(a.optic)) a.optic = w.optics[0]; if (!w.muzzle) a.muzzle = false; if (!w.grip) a.grip = false; if (!w.laser) a.laser = false; }
  return d;
}
export function saveLoadout(l) { try { localStorage.setItem('sp2_loadout', JSON.stringify(l)); } catch (e) { /* ignore */ } }
// Effective stats after attachments.
export function statsFor(id, att = {}) {
  const w = WEAPONS[id], s = { ...w, id, att, sup: !!att.muzzle, optic: OPTICS[att.optic] || OPTICS.iron };
  if (w.melee) return s;
  if (att.muzzle) { s.noise = Math.round(w.noise * 0.3); s.recoil *= 0.92; if (s.falloff) s.falloff = [s.falloff[0] * 0.85, s.falloff[1]]; }
  if (att.grip) { s.recoil *= 0.8; s.recoilH *= 0.8; s.hip *= 0.88; s.adsT *= 1.06; }
  s.adsT += s.optic.adsT || 0;
  return s;
}
export function attText(id, att) {
  if (WEAPONS[id].melee) return '';
  const t = []; if (att.optic && att.optic !== 'iron') t.push(OPTICS[att.optic].name.toUpperCase()); if (att.muzzle) t.push('SUPPRESSOR'); if (att.grip) t.push('FOREGRIP'); if (att.laser) t.push('LASER');
  return t.join(' · ');
}

// ---------- view models ----------
const M = {};
const std = (hex, r = 0.6, m = 0.2, extra) => { const k = hex + '_' + r + '_' + m; return M[k] || (M[k] = new THREE.MeshStandardMaterial({ color: hex, roughness: r, metalness: m, ...extra })); };
const GLOVE = () => std(0x1b1c1e, 0.85, 0), SLEEVE = () => std(0x47513c, 0.95, 0), DARK = () => std(0x15171a, 0.5, 0.6);
function mesh(parent, geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); parent.add(m); return m; }
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d), cap = (r, l) => new THREE.CapsuleGeometry(r, l, 3, 8);
// a limb segment between two points
function limb(parent, a, b, r, mat) {
  const d = new THREE.Vector3().subVectors(b, a), m = new THREE.Mesh(cap(r, Math.max(0.01, d.length() - r)), mat);
  m.position.copy(a).addScaledVector(d, 0.5); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); parent.add(m); return m;
}
function hand(parent, at, elbow, side, wrapAxis) {
  // at: palm centre; elbow: where the forearm goes off-screen; side: +1 right hand, -1 left hand
  const g = new THREE.Group(); parent.add(g);
  const V = (x, y, z) => new THREE.Vector3(at.x + x, at.y + y, at.z + z);
  const wrist = V(0, 0, 0).lerp(elbow, 0.2);
  limb(g, V(0, 0, 0), wrist, 0.034, GLOVE()); limb(g, wrist, elbow, 0.043, SLEEVE());
  mesh(g, box(0.05, 0.022, 0.022), DARK(), wrist.x, wrist.y, wrist.z).lookAt(elbow); // strap
  for (let i = 0; i < 4; i++) { // fingers curl around the grip / handguard
    const o = (i - 1.5) * 0.021;
    if (wrapAxis === 'y') limb(g, V(-side * 0.012, o * 0.95, -0.012), V(side * 0.03, o * 0.95, -0.042), 0.0098, GLOVE());
    else limb(g, V(-side * 0.02, -0.005, o), V(-side * 0.036, 0.04, o), 0.0098, GLOVE());
  }
  limb(g, V(side * 0.022, 0.02, 0.008), V(side * 0.03, 0.036, -0.03), 0.011, GLOVE()); // thumb
  return g;
}
function opticMesh(kind) {
  const g = new THREE.Group();
  if (kind === 'reddot') {
    mesh(g, box(0.03, 0.012, 0.05), DARK(), 0, 0.006, 0); mesh(g, new THREE.CylinderGeometry(0.017, 0.017, 0.045, 14, 1, true), std(0x17191b, 0.5, 0.6, { side: THREE.DoubleSide }), 0, 0.03, 0, Math.PI / 2);
    mesh(g, new THREE.TorusGeometry(0.017, 0.0028, 6, 16), DARK(), 0, 0.03, -0.022); mesh(g, new THREE.TorusGeometry(0.017, 0.0028, 6, 16), DARK(), 0, 0.03, 0.022);
    mesh(g, box(0.012, 0.012, 0.012), DARK(), 0.022, 0.03, 0); g.center = 0.03;
  } else {
    mesh(g, box(0.038, 0.016, 0.075), DARK(), 0, 0.008, 0); mesh(g, box(0.038, 0.02, 0.03), DARK(), 0, 0.022, 0.028);
    for (const s of [-1, 1]) mesh(g, box(0.004, 0.036, 0.03), DARK(), s * 0.019, 0.034, -0.02);
    mesh(g, box(0.042, 0.004, 0.03), DARK(), 0, 0.053, -0.02); g.center = 0.034;
  }
  const glass = new THREE.MeshBasicMaterial({ color: 0x6fb0c0, transparent: true, opacity: 0.1, depthWrite: false });
  mesh(g, new THREE.PlaneGeometry(0.03, 0.03), glass, 0, g.center, kind === 'reddot' ? 0 : -0.02);
  return g;
}

// Returns a weapon-space group (grip at origin, barrel along -Z) with attachments and hands,
// plus the reference points the player controller needs.
export function buildView(id, att = {}, noHands) {
  const w = WEAPONS[id], g = new THREE.Group();
  if (w.melee) {
    const k = A.models.acc_knife.clone(true); k.scale.setScalar(0.24); k.rotation.y = Math.PI / 2; g.add(k); // blade toward -Z
    if (!noHands) hand(g, new THREE.Vector3(0.0, -0.005, 0.0), new THREE.Vector3(0.1, -0.2, 0.4), 1, 'y');
    g.hip = new THREE.Vector3(0.2, -0.17, -0.42); g.adsPos = g.hip.clone(); g.muzzle = new THREE.Vector3(0, 0, -0.25); g.eject = g.muzzle; g.fov = 75; g.melee = true;
    return g;
  }
  const gun = makeGun(id), d = gun.def; g.add(gun);
  let sightY = (d.sight - d.grip[1]) * d.s, sightZ = d.rail ? gun.pt(d.rail).z + 0.02 : 0.02, eye = OPTICS[att.optic || 'iron'].eye;
  const o = att.optic;
  if (id === 'dmr') { const p = gun.pt(d.scope); sightY = p.y; sightZ = p.z; }
  else if (o === 'reddot' || o === 'holo') { const m = opticMesh(o), p = gun.pt(d.rail); m.position.copy(p); g.add(m); sightY = p.y + m.center; sightZ = p.z; }
  else if (o === 'scope') {
    const m = A.models.acc_scope.clone(true), p = gun.pt(d.rail); m.scale.setScalar(0.115); m.rotation.y = Math.PI / 2; m.position.set(0, p.y + 0.006, p.z - 0.02); g.add(m);
    sightY = p.y + 0.006 + 0.19 * 0.115; sightZ = p.z - 0.02 + 1.09 * 0.115;
  }
  g.muzzle = gun.muzzle.clone();
  if (att.muzzle) { const m = A.models.acc_suppressor.clone(true); m.scale.setScalar(0.115); m.rotation.y = Math.PI / 2; m.position.copy(g.muzzle).z += 0.012; g.add(m); g.muzzle.z -= 0.19; }
  const hg = gun.pt(d.hand); let left = hg.clone(); left.y -= 0.03;
  if (att.grip) { const m = A.models.acc_grip.clone(true); m.scale.setScalar(0.12); m.position.set(0, hg.y - 0.42 * 0.12, hg.z - 0.03); g.add(m); left = new THREE.Vector3(0, hg.y - 0.055, hg.z - 0.03); }
  if (att.laser) {
    const lz = id === 'pistol' ? -0.06 : hg.z - 0.05, ly = id === 'pistol' ? (d.muzzle[1] - d.grip[1]) * d.s - 0.022 : hg.y + 0.035, lx = id === 'pistol' ? 0 : 0.028;
    mesh(g, box(0.02, 0.022, 0.06), DARK(), lx, ly, lz); mesh(g, box(0.008, 0.008, 0.003), new THREE.MeshBasicMaterial({ color: 0xff2a2a }), lx, ly, lz - 0.031);
    g.laser = new THREE.Vector3(lx, ly, lz - 0.033);
  }
  // hands
  g.lh = new THREE.Group(); g.add(g.lh);
  if (noHands) { /* showcase model */ } else if (id === 'pistol') hand(g.lh, new THREE.Vector3(-0.012, -0.035, 0.0), new THREE.Vector3(-0.2, -0.25, 0.38), -1, 'y');
  else hand(g.lh, left, new THREE.Vector3(-0.26, -0.3, left.z + 0.42), -1, att.grip ? 'y' : 'z');
  if (!noHands) g.rh = hand(g, new THREE.Vector3(0, -0.02, 0.012), new THREE.Vector3(0.13, -0.26, 0.42), 1, 'y');
  g.gun = gun; g.eject = gun.pt(d.eject, 0.5);
  g.hip = id === 'pistol' ? new THREE.Vector3(0.13, -0.14, -0.42) : new THREE.Vector3(0.16, -0.165, -0.37);
  g.adsPos = new THREE.Vector3(0, -sightY, -eye - sightZ);
  g.sightY = sightY;
  return g;
}
