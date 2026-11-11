// Animated humanoid: skinned CC0 mannequin dressed as a tactical operator.
// - lower body (locomotion) and upper body (weapon handling) are blended independently
// - procedural lean, flinch and left-hand IK are applied on top of the clips
// - hit zones are built from the live bone positions, so what is visibly exposed is what can be hit
import * as THREE from 'three';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';
import { A, makeGun } from './assets.js';

const LOWER = /^(root|pelvis|thigh|calf|foot|ball)/;
const LOCO = { idle: 'Idle_Loop', walk: 'Walk_Loop', jog: 'Jog_Fwd_Loop', sprint: 'Sprint_Loop', cidle: 'Crouch_Idle_Loop', cwalk: 'Crouch_Fwd_Loop' };
const UPPER = { aimN: 'Pistol_Aim_Neutral', aimU: 'Pistol_Aim_Up', aimD: 'Pistol_Aim_Down' };
const UONE = ['Pistol_Reload', 'OverhandThrow', 'Interact', 'Idle_TalkingPhone_Loop', 'Hit_Chest', 'Hit_Head'];
const FONE = ['Death01', 'Hit_Knockback', 'ClimbUp_1m', 'Roll', 'Jump_Start'];
export const PALETTES = {
  guard: { jacket: 0x5d6a4c, pants: 0x4d5640, gear: 0x343a2b, helmet: 0x3f4633 },
  aggressor: { jacket: 0x75604a, pants: 0x5a4c3c, gear: 0x3a3229, helmet: 0x453c30 },
  cautious: { jacket: 0x4c5a66, pants: 0x3f4a54, gear: 0x2a3138, helmet: 0x333c44 },
  elite: { jacket: 0x2b2f34, pants: 0x25282c, gear: 0x17191c, helmet: 0x1c1f22 },
};

let T = null; // template data, built once
const v1 = new THREE.Vector3(), v2 = new THREE.Vector3(), v3 = new THREE.Vector3(), v4 = new THREE.Vector3(), v5 = new THREE.Vector3();
const q1 = new THREE.Quaternion(), q2 = new THREE.Quaternion(), UP = new THREE.Vector3(0, 1, 0);

function subclip(name, lower) { const c = A.clips[name]; return new THREE.AnimationClip(name + (lower ? '_L' : '_U'), c.duration, c.tracks.filter((t) => LOWER.test(t.name) === lower)); }
function init() {
  const scene = A.models.soldier; scene.updateMatrixWorld(true);
  const meshes = []; scene.traverse((o) => o.isSkinnedMesh && meshes.push(o));
  const body = meshes.find((m) => m.material.name === 'M_Main') || meshes[0];
  const bones = body.skeleton.bones, g = body.geometry, n = g.attributes.position.count, region = new Uint8Array(n), si = g.attributes.skinIndex, sw = g.attributes.skinWeight;
  for (let i = 0; i < n; i++) {
    let b = 0, w = -1; for (let k = 0; k < 4; k++) if (sw.getComponent(i, k) > w) { w = sw.getComponent(i, k); b = si.getComponent(i, k); }
    const nm = bones[b].name;
    region[i] = /^(Head|neck)/.test(nm) ? 2 : /^(hand|index|middle|ring|pinky|thumb)/.test(nm) ? 3 : /^(foot|ball)/.test(nm) ? 4 : /^(thigh|calf|pelvis)/.test(nm) ? 1 : 0;
  }
  const rest = {}; for (const b of bones) rest[b.name] = b.getWorldPosition(new THREE.Vector3());
  const F = Math.sign(rest.ball_l.z - rest.foot_l.z) || 1; // which way the model faces along Z
  T = { body, meshes, region, rest, F, geos: {}, clips: {}, mats: {} };
  for (const k in LOCO) { T.clips[k] = subclip(LOCO[k], true); T.clips[k + 'U'] = subclip(LOCO[k], false); }
  for (const k in UPPER) T.clips[k] = subclip(UPPER[k], false);
  for (const k of UONE) T.clips[k] = subclip(k, false);
  for (const k of FONE) T.clips[k] = A.clips[k];
  // weapon grip calibration: sample the aim pose once and solve the hand-local transform that points the barrel forward
  const rig = SkeletonUtils.clone(scene), mx = new THREE.AnimationMixer(rig);
  mx.clipAction(A.clips.Pistol_Aim_Neutral).play(); mx.setTime(0.01); rig.updateMatrixWorld(true);
  const hand = rig.getObjectByName('hand_r'), hq = hand.getWorldQuaternion(new THREE.Quaternion()).invert();
  const want = new THREE.Quaternion().setFromAxisAngle(UP, F > 0 ? Math.PI : 0);
  T.gunQuat = hq.clone().multiply(want);
  T.gunPos = new THREE.Vector3(0, -0.035, 0.075 * F).applyQuaternion(hq);
  T.mats.joint = new THREE.MeshStandardMaterial({ color: 0x141517, roughness: 0.95, metalness: 0 });
  T.mats.body = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0 });
  T.mats.glass = new THREE.MeshStandardMaterial({ color: 0x0b0f12, roughness: 0.15, metalness: 0.8 });
  T.mats.flash = new THREE.MeshBasicMaterial({ color: 0xffd890, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
  T.geo = { helmet: new THREE.SphereGeometry(0.128, 14, 10, 0, 6.283, 0, 1.75), box: new THREE.BoxGeometry(1, 1, 1), flash: new THREE.OctahedronGeometry(0.09, 0) };
}
function bodyGeo(pal) {
  if (T.geos[pal]) return T.geos[pal];
  const P = PALETTES[pal], src = T.body.geometry, g = new THREE.BufferGeometry(), n = src.attributes.position.count, col = new Float32Array(n * 3);
  for (const k in src.attributes) g.setAttribute(k, src.attributes[k]);
  g.setIndex(src.index); g.boundingSphere = src.boundingSphere; g.boundingBox = src.boundingBox;
  const c = [P.jacket, P.pants, 0x17191b, 0x0e0f10, 0x0c0c0d].map((h) => new THREE.Color(h));
  for (let i = 0; i < n; i++) { const k = c[T.region[i]]; col[i * 3] = k.r; col[i * 3 + 1] = k.g; col[i * 3 + 2] = k.b; }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return (T.geos[pal] = g);
}
const gearMat = (hex) => T.mats['g' + hex] || (T.mats['g' + hex] = new THREE.MeshStandardMaterial({ color: hex, roughness: 0.85, metalness: 0.05 }));

// rotate a bone by a world-space delta rotation
function rotWorld(bone, q) {
  bone.parent.getWorldQuaternion(q2);
  bone.quaternion.premultiply(q2).premultiply(q).premultiply(q2.invert());
}
function ik2(upper, lower, hand, target, pole) {
  upper.updateWorldMatrix(true, false); lower.updateWorldMatrix(false, false); hand.updateWorldMatrix(false, false);
  const S = v1.setFromMatrixPosition(upper.matrixWorld), E = v2.setFromMatrixPosition(lower.matrixWorld), H = v3.setFromMatrixPosition(hand.matrixWorld);
  const l1 = E.distanceTo(S), l2 = H.distanceTo(E), dir = v4.copy(target).sub(S), d = THREE.MathUtils.clamp(dir.length(), Math.abs(l1 - l2) + 0.01, l1 + l2 - 0.004);
  dir.normalize();
  const a = (l1 * l1 - l2 * l2 + d * d) / (2 * d), h = Math.sqrt(Math.max(0, l1 * l1 - a * a));
  const perp = v5.copy(pole).addScaledVector(dir, -pole.dot(dir)).normalize();
  const E2 = perp.multiplyScalar(h).addScaledVector(dir, a).add(S); // desired elbow
  rotWorld(upper, q1.setFromUnitVectors(E.sub(S).normalize(), v4.copy(E2).sub(S).normalize()));
  upper.updateWorldMatrix(false, false); lower.updateWorldMatrix(false, false); hand.updateWorldMatrix(false, false);
  E.setFromMatrixPosition(lower.matrixWorld); H.setFromMatrixPosition(hand.matrixWorld);
  rotWorld(lower, q1.setFromUnitVectors(H.sub(E).normalize(), v4.copy(target).sub(E).normalize()));
}

export class Character {
  constructor(palette = 'guard', gunId = 'carbine') {
    if (!T) init();
    const root = (this.root = new THREE.Group()), inner = (this.inner = SkeletonUtils.clone(A.models.soldier));
    root.rotation.order = 'YXZ'; inner.rotation.y = T.F > 0 ? Math.PI : 0; root.add(inner);
    this.bones = {};
    inner.traverse((o) => {
      if (o.isBone) this.bones[o.name] = o;
      if (o.isSkinnedMesh) { const main = o.geometry === T.body.geometry; o.geometry = main ? bodyGeo(palette) : o.geometry; o.material = main ? T.mats.body : T.mats.joint; o.castShadow = true; o.frustumCulled = false; }
    });
    inner.updateMatrixWorld(true);
    this.dress(PALETTES[palette]);
    // weapon in the right hand
    const gun = (this.gun = makeGun(gunId)); gun.quaternion.copy(T.gunQuat); gun.position.copy(T.gunPos); this.bones.hand_r.add(gun);
    this.flash = new THREE.Mesh(T.geo.flash, T.mats.flash); this.flash.position.copy(gun.muzzle).z -= 0.08; this.flash.scale.set(1, 1, 2.2); this.flash.visible = false; gun.add(this.flash);
    this.gripL = gun.pt(gun.def.hand); this.gripL.y -= 0.035; this.gripL.z += 0.03;
    // animation
    const mx = (this.mixer = new THREE.AnimationMixer(inner));
    this.act = {};
    for (const k in T.clips) { const a = (this.act[k] = mx.clipAction(T.clips[k])); a.setEffectiveWeight(0); if (LOCO[k] || LOCO[k.slice(0, -1)] || UPPER[k]) a.play(); }
    for (const k in LOCO) this.act[k + 'U'].syncWith(this.act[k]);
    this.w = {}; for (const k in this.act) this.w[k] = 0;
    this.act.idle.setEffectiveWeight(1); this.w.idle = 1;
    this.uOne = null; this.fOne = null; this.dead = false; this.lean = 0; this.kick = 0; this.flashT = 0; this.aimW = 0; this.crouchW = 0; this.ikW = 0; this.zones = null; this.zoneFrame = -1;
    mx.update(0.01);
  }
  dress(P) {
    const R = T.rest, F = T.F, add = (bone, geo, mat, x, y, z, sx, sy, sz, rx = 0) => {
      const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z * F); m.scale.set(sx, sy, sz); m.rotation.x = rx * F; m.castShadow = true;
      this.inner.add(m); m.updateMatrixWorld(true); this.bones[bone].attach(m); return m;
    };
    const B = T.geo.box, gm = gearMat(P.gear), hm = gearMat(P.helmet), dk = gearMat(0x0d0e0f), h = R.Head, c = R.spine_03, p = R.pelvis;
    add('Head', T.geo.helmet, hm, h.x, h.y + 0.105, h.z + 0.005, 1, 1.02, 1.12);                 // helmet shell
    add('Head', B, hm, h.x, h.y + 0.085, h.z + 0.118, 0.2, 0.025, 0.07);                          // brim
    add('Head', B, T.mats.glass, h.x, h.y + 0.062, h.z + 0.108, 0.17, 0.05, 0.03);                // goggles
    add('Head', B, dk, h.x, h.y + 0.165, h.z + 0.11, 0.05, 0.05, 0.05);                           // NVG mount
    for (const s of [-1, 1]) add('Head', B, dk, h.x + s * 0.118, h.y + 0.06, h.z + 0.0, 0.035, 0.08, 0.07); // ear protection
    add('spine_03', B, gm, c.x, c.y - 0.02, c.z + 0.085, 0.33, 0.36, 0.09);                       // front plate
    add('spine_03', B, gm, c.x, c.y - 0.02, c.z - 0.105, 0.32, 0.36, 0.08);                       // back plate
    for (const s of [-1, 1]) add('spine_03', B, gm, c.x + s * 0.13, c.y + 0.17, c.z - 0.01, 0.06, 0.03, 0.2); // shoulder straps
    for (const s of [-1, 0, 1]) add('spine_03', B, dk, c.x + s * 0.095, c.y - 0.11, c.z + 0.145, 0.075, 0.15, 0.05); // magazine pouches
    add('spine_03', B, dk, c.x - 0.09, c.y + 0.05, c.z - 0.165, 0.11, 0.17, 0.06);                // radio
    add('spine_03', B, dk, c.x - 0.09, c.y + 0.2, c.z - 0.165, 0.012, 0.16, 0.012);               // antenna
    add('pelvis', B, dk, p.x, p.y + 0.06, p.z, 0.37, 0.06, 0.25);                                  // belt
    add('thigh_r', B, dk, R.thigh_r.x + 0.085 * Math.sign(R.thigh_r.x), R.thigh_r.y - 0.14, R.thigh_r.z, 0.05, 0.17, 0.1); // holster
    for (const s of ['l', 'r']) add('calf_' + s, B, dk, R['calf_' + s].x, R['calf_' + s].y - 0.02, R['calf_' + s].z + 0.055, 0.105, 0.13, 0.05); // knee pads
  }
  // one-shot helpers -------------------------------------------------------------------------
  playUpper(name, { loop = false, speed = 1, fade = 0.15 } = {}) {
    if (this.dead) return 0;
    const a = this.act[name]; a.reset(); a.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, loop ? Infinity : 1); a.clampWhenFinished = true; a.timeScale = speed; a.play();
    if (this.uOne && this.uOne.a !== a) this.uOne.old = true;
    this.uOne = { a, name, t: 0, dur: loop ? Infinity : a.getClip().duration / speed, fade, w: 0 };
    return this.uOne.dur;
  }
  stopUpper() { if (this.uOne) this.uOne.dur = Math.min(this.uOne.dur, this.uOne.t); }
  playFull(name, { speed = 1, fade = 0.12, hold = false } = {}) {
    const a = this.act[name]; a.reset(); a.setLoop(THREE.LoopOnce, 1); a.clampWhenFinished = true; a.timeScale = speed; a.play();
    this.fOne = { a, name, t: 0, dur: hold ? Infinity : a.getClip().duration / speed, fade, w: 0 };
    return a.getClip().duration / speed;
  }
  die(knock) { if (this.dead) return; this.dead = true; this.uOne = null; this.flash.visible = false; this.playFull(knock ? 'Hit_Knockback' : 'Death01', { hold: true, speed: 1.15 }); if (knock) this.root.userData.knock = 1; }
  fire() { this.kick = 1; this.flashT = 0.05; this.flash.visible = true; this.flash.rotation.z = Math.random() * 6; }
  // per-frame ---------------------------------------------------------------------------------
  // s: { speed (m/s), crouch, aim (bool), pitch (rad, + = up), lean (-1..1, + = to the character's right) }
  update(dt, s) {
    const w = this.w, k = Math.min(1, dt * 9), tgt = {};
    for (const n in w) tgt[n] = 0;
    let fw = 0, uw = 0;
    if (this.fOne) { const f = this.fOne; f.t += dt; f.w = f.t > f.dur - f.fade ? Math.max(0, (f.dur - f.t) / f.fade) : Math.min(1, f.t / f.fade); if (this.dead) f.w = Math.min(1, f.t / 0.08); fw = f.w; f.a.setEffectiveWeight(fw); if (f.t >= f.dur) { f.a.stop(); this.fOne = null; } }
    if (this.uOne) { const u = this.uOne; u.t += dt; u.w = u.t > u.dur - u.fade ? Math.max(0, (u.dur - u.t) / u.fade) : Math.min(1, u.t / u.fade); uw = u.w * (1 - fw); u.a.setEffectiveWeight(uw); if (u.t >= u.dur) { u.a.stop(); this.uOne = null; } }
    if (!this.dead) {
      // lower body from speed / stance
      this.crouchW += ((s.crouch ? 1 : 0) - this.crouchW) * k;
      const sp = s.speed, c = this.crouchW;
      let lo;
      if (sp < 0.15) lo = { idle: 1 }; else if (sp < 1.9) lo = { idle: Math.max(0, 1 - sp / 0.9), walk: Math.min(1, sp / 0.9) };
      else if (sp < 3.6) { const t = (sp - 1.9) / 1.7; lo = { walk: 1 - t, jog: t }; } else { const t = Math.min(1, (sp - 3.6) / 1.4); lo = { jog: 1 - t, sprint: t }; }
      const cm = Math.min(1, sp / 0.8);
      for (const n in lo) tgt[n] = lo[n] * (1 - c);
      tgt.cidle = c * (1 - cm); tgt.cwalk = c * cm;
      this.act.walk.timeScale = this.act.walkU.timeScale = sp < 1.9 ? THREE.MathUtils.clamp(sp / 1.45, 0.6, 1.5) : 1.2;
      this.act.cwalk.timeScale = this.act.cwalkU.timeScale = THREE.MathUtils.clamp(sp / 1.3, 0.6, 1.6);
      // upper body: weapon up when aiming, low-ready otherwise
      this.aimW += ((s.aim ? 1 : 0) - this.aimW) * Math.min(1, dt * 7);
      const a = this.aimW, pt = THREE.MathUtils.clamp((s.pitch || 0) / 0.7, -1, 1);
      tgt.aimN = a * (1 - Math.abs(pt)); tgt.aimU = a * Math.max(0, pt); tgt.aimD = a * Math.max(0, -pt) + (1 - a) * 0.55; tgt.aimN += (1 - a) * 0.45; // not aiming = muzzle-down low ready
      for (const n of ['aimN', 'aimU', 'aimD']) tgt[n] *= 1 - uw;
    }
    const base = 1 - fw;
    for (const n in LOCO) { w[n] += (tgt[n] - w[n]) * k; this.act[n].setEffectiveWeight(w[n] * base); this.act[n + 'U'].setEffectiveWeight(0); }
    for (const n in UPPER) { w[n] += (tgt[n] - w[n]) * k; this.act[n].setEffectiveWeight(w[n] * base); }
    this.mixer.update(dt);
    if (this.dead) return;
    // procedural layer
    this.lean += ((s.lean || 0) - this.lean) * Math.min(1, dt * 6);
    this.kick = Math.max(0, this.kick - dt * 9);
    if (this.flashT > 0 && (this.flashT -= dt) <= 0) this.flash.visible = false;
    const B = this.bones, L = this.lean;
    this.inner.position.x = -L * 0.2; // hips shift toward the lean side (inner is rotated to face -Z)
    if (Math.abs(L) > 0.01 || this.kick > 0.01) {
      this.root.getWorldQuaternion(q1); const fwd = v1.set(0, 0, -1).applyQuaternion(q1), right = v2.set(1, 0, 0).applyQuaternion(q1);
      if (Math.abs(L) > 0.01) {
        rotWorld(B.spine_01, q1.setFromAxisAngle(fwd, L * 0.2)); rotWorld(B.spine_02, q1.setFromAxisAngle(fwd, L * 0.14)); rotWorld(B.spine_03, q1.setFromAxisAngle(fwd, L * 0.1));
        rotWorld(B.Head, q1.setFromAxisAngle(fwd, -L * 0.22));
      }
      if (this.kick > 0.01) rotWorld(B.spine_03, q1.setFromAxisAngle(right, this.kick * 0.035));
    }
    // left hand onto the handguard whenever the weapon is up (or held at low ready)
    const wantIK = this.uOne || this.fOne ? 0 : 1; this.ikW += (wantIK - this.ikW) * Math.min(1, dt * 8);
    if (this.ikW > 0.5) {
      this.gun.updateWorldMatrix(true, false);
      const t = v3.copy(this.gripL).applyMatrix4(this.gun.matrixWorld); const tx = t.x, ty = t.y, tz = t.z;
      this.root.getWorldQuaternion(q1); const pole = new THREE.Vector3(-0.55, -0.8, 0.2).applyQuaternion(q1);
      ik2(B.upperarm_l, B.lowerarm_l, B.hand_l, new THREE.Vector3(tx, ty, tz), pole);
    }
  }
  // world-space queries ------------------------------------------------------------------------
  refresh() { this.root.updateWorldMatrix(true, true); }
  muzzle(out) { return out.copy(this.gun.muzzle).applyMatrix4(this.gun.matrixWorld); }
  eye(out) { return out.setFromMatrixPosition(this.bones.Head.matrixWorld).setY(out.y + 0.07); }
  bone(name, out) { return out.setFromMatrixPosition(this.bones[name].matrixWorld); }
  // ray vs. bone capsules. Returns { d, part, mult } for the nearest hit, or null.
  rayHit(o, d, max, frame) {
    if (this.zoneFrame !== frame) {
      this.refresh(); this.zoneFrame = frame; const P = (n) => new THREE.Vector3().setFromMatrixPosition(this.bones[n].matrixWorld);
      const head = P('Head'); head.y += 0.075;
      this.zones = [
        [head, head, 0.125, 'head', 2.5], [P('neck_01'), P('spine_02'), 0.185, 'torso', 1], [P('spine_02'), P('pelvis'), 0.175, 'torso', 1],
        [P('upperarm_l'), P('lowerarm_l'), 0.058, 'arm', 0.6], [P('lowerarm_l'), P('hand_l'), 0.05, 'arm', 0.6], [P('upperarm_r'), P('lowerarm_r'), 0.058, 'arm', 0.6], [P('lowerarm_r'), P('hand_r'), 0.05, 'arm', 0.6],
        [P('thigh_l'), P('calf_l'), 0.088, 'leg', 0.7], [P('calf_l'), P('foot_l'), 0.068, 'leg', 0.7], [P('thigh_r'), P('calf_r'), 0.088, 'leg', 0.7], [P('calf_r'), P('foot_r'), 0.068, 'leg', 0.7],
      ];
    }
    let best = null;
    for (const z of this.zones) {
      const a = z[0], b = z[1], r = z[2];
      // closest approach between the ray (o + d t) and segment a-b
      const ux = b.x - a.x, uy = b.y - a.y, uz = b.z - a.z, wx = o.x - a.x, wy = o.y - a.y, wz = o.z - a.z;
      const A_ = ux * ux + uy * uy + uz * uz, Bq = ux * d.x + uy * d.y + uz * d.z, D = ux * wx + uy * wy + uz * wz, E = d.x * wx + d.y * wy + d.z * wz;
      const den = A_ - Bq * Bq;
      let s = den > 1e-9 ? THREE.MathUtils.clamp((D - Bq * E) / den, 0, 1) : 0;
      if (A_ < 1e-9) s = 0;
      let t = Bq * s - E; if (t < 0) continue;
      const px = a.x + ux * s - (o.x + d.x * t), py = a.y + uy * s - (o.y + d.y * t), pz = a.z + uz * s - (o.z + d.z * t), dist2 = px * px + py * py + pz * pz;
      if (dist2 > r * r) continue;
      t -= Math.sqrt(r * r - dist2);
      if (t < max && (!best || t < best.d)) best = { d: Math.max(0, t), part: z[3], mult: z[4] };
    }
    return best;
  }
}
