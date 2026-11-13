// First-person controller: movement, leaning, mantling, three weapon slots, melee, throwables, medical.
import * as THREE from 'three';
import { WEAPONS, KITS, statsFor, buildView } from './weapons.js';
import { queryBoxes, rayBoxes } from './world.js';

const GB = { x: 0, y: 0, z: 0, reach: 0, best: null }, groundTest = (c) => { if (c.solid && c.y1 <= GB.y + 0.001 && c.y1 >= GB.y - GB.reach && GB.x + R > c.x0 && GB.x - R < c.x1 && GB.z + R > c.z0 && GB.z - R < c.z1 && (GB.best === null || c.y1 > GB.best)) GB.best = c.y1; return false; };
const HQ = { x: 0, y: 0, z: 0, h: 0, r: 0 }, hitTest = (c) => c.solid && HQ.x + HQ.r > c.x0 && HQ.x - HQ.r < c.x1 && HQ.z + HQ.r > c.z0 && HQ.z - HQ.r < c.z1 && HQ.y < c.y1 - 0.001 && HQ.y + HQ.h > c.y0;
const damp = (rate, dt) => 1 - Math.exp(-rate * dt); // frame-rate independent exponential smoothing
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const ease = (a) => a * a * (3 - 2 * a); // ADS curve: shared by FOV, sensitivity and weapon position so they always agree
// first-person weapon "weight": lighter guns respond faster with less lag (viewmodel only - never the camera)
const HEFT = { pistol: 0.6, knife: 0.55, smg: 0.75, m4: 0.9, ak: 1.0, shotgun: 1.05, dmr: 1.15, sniper: 1.3 };
const VM_STEP = 1 / 240; // viewmodel springs are integrated in fixed steps: identical at any frame rate
const R = 0.34, THROW = ['frag', 'flash', 'smoke'];
export const THROW_NAME = { frag: 'FRAG', flash: 'FLASH', smoke: 'SMOKE' };

export class Player {
  constructor(G, spawn, loadout) {
    this.g = G;
    this.pos = new THREE.Vector3(spawn.x, 0, spawn.z); this.vel = new THREE.Vector3();
    this.yaw = spawn.yaw; this.pitch = 0; this.eye = 1.62; this.height = 1.8;
    this.hp = 100; this.dead = false; this.grounded = true; this.crouch = false; this.crouchToggle = false;
    this.speed = 0; this.bob = 0; this.dip = 0; this.sinceHit = 99; this.noSprint = 0; this.sprintF = 0; this.sprinting = false; this.sprintR = 0;
    this.lean = 0; this.leanX = 0; this.leanZ = 0; this.mantle = null; this.stimT = 0; this.blind = 0; this.shake = 0;
    const ids = [loadout.primary, loadout.secondary, 'knife'];
    this.slots = ids.map((id) => {
      const att = loadout.att[id] || {}, st = statsFor(id, att), view = buildView(id, att);
      view.visible = false; G.wscene.add(view);
      return { id, st, view, mag: st.mag, reserve: st.reserve, zoom: st.optic && st.optic.zoom ? st.optic.zoom[0] : 0, zoomV: st.optic && st.optic.zoom ? st.optic.zoom[0] : 0 };
    });
    this.cur = 0; this.slots[0].view.visible = true; this.shown = 0;
    this.next = -1; this.swT = 0; this.relT = 0; this.reloading = false; this.fireT = 0; this.adsF = 0;
    this.rp = 0; this.ry = 0; this.kick = 0; this.burst = 0; this.laserOn = true; this.spread = 1; this.swayX = 0; this.swayY = 0; this.scoped = false;
    const k = KITS[loadout.kit]; this.inv = { frag: k.frag, flash: k.flash, smoke: k.smoke, med: k.med, stim: k.stim };
    this.throwSel = THROW.find((t) => this.inv[t] > 0) || 'frag'; this.use = null;
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d'), gr = x.createRadialGradient(32, 32, 2, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,230,1)'); gr.addColorStop(0.3, 'rgba(255,200,90,.8)'); gr.addColorStop(1, 'rgba(255,120,20,0)'); x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
    this.flash = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.2), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.flash.visible = false; this.flashT = 0; G.wscene.add(this.flash);
    this.boltT = 0; this.relDur = 1; this.relIn = false; this.pumpT = 0; this.breath = 4; this.steady = false; this.swT2 = 0;
    this.stepOff = 0; this.coyote = 0; this.jumpBuf = 0; this.mantleF = 0; this.mantleDip = 0; this.wallPush = 0; this.yawRate = 0; this.pitchRate = 0; this.vmAcc = 0;
    this.vm = { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0, vx: 0, vy: 0, vz: 0, vrx: 0, vry: 0, vrz: 0 }; // viewmodel spring state
    this.fwd = new THREE.Vector3(); this._v = new THREE.Vector3(); this._v2 = new THREE.Vector3(); this.muzzleW = new THREE.Vector3(); this.laserW = new THREE.Vector3(); this.eyePos = new THREE.Vector3();
  }
  setSlot(i, id, att) { // replace the weapon in a slot (training range bench)
    const G = this.g, old = this.slots[i], st = statsFor(id, att), view = buildView(id, att);
    G.wscene.remove(old.view); view.visible = this.shown === i; G.wscene.add(view);
    this.slots[i] = { id, st, view, mag: st.mag, reserve: st.reserve, zoom: st.optic && st.optic.zoom ? st.optic.zoom[0] : 0, zoomV: st.optic && st.optic.zoom ? st.optic.zoom[0] : 0 };
    this.reloading = false; this.boltT = 0; this.pumpT = 0; this.fireT = 0; this.adsF = 0;
  }
  get slot() { return this.slots[this.cur]; }
  get w() { return this.slots[this.cur].st; }
  busy() { return this.swT > 0 || this.reloading || !!this.use || !!this.mantle; }
  hits(x, y, z, h = this.height, r = R) {
    HQ.x = x; HQ.y = y; HQ.z = z; HQ.h = h; HQ.r = r;
    return queryBoxes(this.g.world.colliders, x - r, x + r, z - r, z + r, hitTest);
  }
  switchTo(i) { if (i === this.cur || this.swT > 0 || this.dead || this.use || !this.slots[i]) return; this.next = i; this.swT = 0.4; this.reloading = false; this.g.audio.click(0.35); }
  reload() {
    const s = this.slot;
    if (this.busy() || s.st.melee || s.mag >= s.st.mag || s.reserve <= 0) return;
    this.reloading = true; this.relT = this.relDur = s.st.reload; this.relIn = false; this.g.audio.reload(s.st.reload, s.st.rk, s.st.ins);
  }
  damage(d, from, info) {
    if (this.dead) return;
    this.hp -= d; this.sinceHit = 0; this.lastHit = info; this.g.onHurt(from, d);
    if (this.hp <= 0) { this.hp = 0; this.dead = true; }
  }
  // mouse wheel while aiming through a variable scope: 0.25x steps inside the optic's range
  zoomStep(dir) {
    const s = this.slot, o = s.st.optic;
    if (s.st.melee || !o || !o.zoom || o.zoom[1] <= o.zoom[0] || this.adsF < 0.5) return false;
    s.zoom = clamp(Math.round((s.zoom + dir * 0.25) * 4) / 4, o.zoom[0], o.zoom[1]); return true;
  }
  adsFov() { const s = this.slot, o = s.st.optic; return o.zoom ? (2 * Math.atan(Math.tan((this.g.fov * Math.PI) / 360) / (s.zoomV || s.zoom)) * 180) / Math.PI : o.fov; } // true optical magnification (zoomV eases between wheel steps)
  // the field of view the camera shows this frame for aiming (sprint FOV is cosmetic and excluded)
  aimFov() { const w = this.w; return w.melee ? this.g.fov : this.g.fov + (this.adsFov() - this.g.fov) * ease(this.adsF); }
  cycleThrow() {
    const i = THROW.indexOf(this.throwSel);
    for (let k = 1; k <= 3; k++) { const t = THROW[(i + k) % 3]; if (this.inv[t] > 0) { this.throwSel = t; break; } }
    this.g.audio.click(0.3);
  }
  startUse(type) {
    if (this.busy() || this.dead) return;
    const G = this.g;
    if (type === 'throw') { if (this.inv[this.throwSel] <= 0) { this.cycleThrow(); if (this.inv[this.throwSel] <= 0) return; } this.use = { type, t: 0, dur: 0.6, at: 0.3 }; }
    else if (type === 'med') { if (this.inv.med <= 0 || this.hp >= 100) return; this.use = { type, t: 0, dur: 2.4, at: 2.3 }; G.audio.medkit(); }
    else if (type === 'stim') { if (this.inv.stim <= 0) return; this.use = { type, t: 0, dur: 0.75, at: 0.45 }; }
    else if (type === 'melee') { this.use = { type, t: 0, dur: WEAPONS.knife.rate, at: 0.16 }; this.show(2); G.audio.swish(); }
    this.adsF = Math.min(this.adsF, 0.5);
  }
  show(i) { if (this.shown === i) return; this.slots[this.shown].view.visible = false; this.slots[i].view.visible = true; this.shown = i; }
  finishUse(u) {
    const G = this.g, cam = G.camera;
    if (u.type === 'throw') {
      const t = this.throwSel, right = this._v.set(1, 0, 0).applyQuaternion(cam.quaternion), o = this._v2.copy(cam.position).addScaledVector(this.fwd, 0.45).addScaledVector(right, 0.18);
      o.y -= 0.08;
      const v = new THREE.Vector3().copy(this.fwd).multiplyScalar(this.crouch ? 11 : 15); v.y += 3.6; v.x += this.vel.x * 0.5; v.z += this.vel.z * 0.5;
      G.spawnGrenade(t, o.clone(), v, 'player'); this.inv[t]--; if (this.inv[t] <= 0) this.cycleThrow();
    } else if (u.type === 'med') { this.inv.med--; this.hp = Math.min(100, this.hp + 65); G.audio.pickup(); }
    else if (u.type === 'stim') { this.inv.stim--; this.hp = Math.min(100, this.hp + 25); this.stimT = 8; G.audio.stim(); }
    else if (u.type === 'melee') G.melee();
  }
  // one physics sub-step of length dt (see update)
  moveStep(dt, k, inp, w) {
    const G = this.g, p = this.pos, sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
    let f = (k.KeyW ? 1 : 0) - (k.KeyS ? 1 : 0), sd = (k.KeyD ? 1 : 0) - (k.KeyA ? 1 : 0);
    const l = Math.hypot(f, sd) || 1; f /= l; sd /= l; // diagonals are normalised: no diagonal speed boost
    this.noSprint -= dt;
    const sprint = (k.ShiftLeft || k.ShiftRight) && f > 0.5 && !this.crouch && this.noSprint <= 0 && !inp.rmb && this.grounded && !this.use;
    this.sprinting = sprint;
    this.sprintR = clamp((this.sprintR || 0) + (sprint ? dt / 0.35 : -dt / 0.2), 0, 1); // sprint speed builds up / bleeds off instead of jumping
    // direction-dependent top speed: full forward, slightly slower strafing, noticeably slower backpedal
    const dirMul = sprint ? 1 : f >= 0 ? f * f + 0.92 * sd * sd : 0.78 * f * f + 0.92 * sd * sd;
    const sp = (this.crouch ? 2.3 : 4.5 + 2.4 * ease(this.sprintR)) * dirMul * w.move * (1 - 0.42 * this.adsF) * (this.use && this.use.type === 'med' ? 0.55 : 1) * (this.stimT > 0 ? 1.12 : 1) * (1 - Math.abs(this.lean) * 0.5);
    const wx = (-sy * f + cy * sd) * sp, wz = (-cy * f - sy * sd) * sp;
    const vx0 = this.vel.x, vz0 = this.vel.z;
    // Velocity approaches the wanted velocity with acceleration k*|dv| + c (solved exactly per step):
    // a strong push at the start, a soft arrival at top speed (no hard "corner"), quick reversals when strafing.
    const has = f !== 0 || sd !== 0, kk = this.grounded ? 11 : 1.6, cc = this.grounded ? (has ? 30 : 24) : 5;
    const dvx = wx - this.vel.x, dvz = wz - this.vel.z, dl = Math.hypot(dvx, dvz);
    if (dl > 1e-6) { const m = Math.max(0, (dl + cc / kk) * Math.exp(-kk * dt) - cc / kk) / dl; this.vel.x = wx - dvx * m; this.vel.z = wz - dvz * m; }
    // jump: buffered (pressed shortly before landing still counts) and with a short grace period after leaving a ledge
    this.jumpBuf -= dt; this.coyote = this.grounded ? 0.1 : this.coyote - dt;
    if (this.jumpBuf > 0 && (this.grounded || this.coyote > 0) && !this.use) {
      this.jumpBuf = 0;
      if (!(f > 0.3 && this.tryMantle(-sy, -cy))) { this.vel.y = this.crouch ? 5.2 : 6.6; this.grounded = false; this.coyote = 0; this.jumped = true; G.audio.step(0.25); this.vmKick(0, 0.35, 0); }
      if (this.mantle) return;
    }
    const vy0 = this.vel.y; this.vel.y -= 21 * dt;
    const wasG = this.grounded, mx0 = (vx0 + this.vel.x) * 0.5 * dt, mz0 = (vz0 + this.vel.z) * 0.5 * dt; // average velocity = exact for constant acceleration
    for (let ai = 0; ai < 2; ai++) {
      const ax = ai ? 'z' : 'x', n = ai ? p.z + mz0 : p.x + mx0, tx = ai ? p.x : n, tz = ai ? n : p.z, c = this.hits(tx, p.y, tz);
      if (!c) { p[ax] = n; continue; }
      const rise = c.y1 - p.y;
      if (wasG && rise <= 0.45 && !this.hits(tx, c.y1, tz)) { p[ax] = n; p.y = c.y1; this.stepOff = Math.max(-0.45, this.stepOff - rise); continue; } // step up: the camera eases up instead of snapping
      if (k.Space && rise > 0.45 && rise <= 1.4 && !this.mantle && !this.use) { const dir = Math.sign(this.vel[ax]) || 1; if (this.tryMantle(ai ? 0 : dir, ai ? dir : 0)) return; }
      this.vel[ax] = 0;
    }
    const fall = this.vel.y;
    let ny = p.y + (vy0 + this.vel.y) * 0.5 * dt; // exact parabola
    this.grounded = false;
    if (ny <= 0) { ny = 0; this.grounded = true; this.vel.y = 0; }
    else { const c = this.hits(p.x, ny, p.z); if (c) { if (this.vel.y <= 0) { ny = c.y1; this.grounded = true; } else ny = p.y; this.vel.y = 0; } }
    if (!this.grounded && wasG && !this.jumped && this.vel.y <= 0) { // walking down steps / off small ledges: stay on the ground and ease the camera down
      const g = this.groundBelow(p.x, p.y, p.z, 0.46);
      if (g !== null) { this.stepOff = Math.min(0.45, this.stepOff + (p.y - g)); ny = g; this.grounded = true; this.vel.y = 0; }
    }
    if (this.grounded) this.jumped = false;
    if (!this.mantle) p.y = ny;
    if (this.grounded && !wasG && fall < -4) { this.dip = Math.min(0.16, -fall * 0.014); this.vmKick(0, fall * 0.06, 0); G.audio.land(); G.sound(p, 9, 'step'); if (fall < -13) this.damage((-fall - 13) * 6, p, { name: 'a fall', dist: 0, x: p.x, z: p.z, fall: true }); }
    this.speed = Math.hypot(this.vel.x, this.vel.z);
    if (this.grounded && this.speed > 0.6) {
      const prev = this.bob; this.bob += this.speed * dt * 1.75;
      if (Math.floor(prev / Math.PI) !== Math.floor(this.bob / Math.PI)) {
        G.audio.step(this.crouch ? 0.06 : sprint ? 0.26 : 0.15);
        if (!this.crouch) G.sound(p, sprint ? 13 : 6.5, 'step');
      }
    }
  }
  // highest walkable surface within `reach` below y at (x, z), or null
  groundBelow(x, y, z, reach) {
    let best = y - reach <= 0 ? 0 : null; GB.y = y; GB.reach = reach; GB.best = best; GB.x = x; GB.z = z;
    queryBoxes(this.g.world.colliders, x - R, x + R, z - R, z + R, groundTest);
    return GB.best;
  }
  // Vault / mantle onto a ledge 0.45-1.4 m high in direction (dx, dz). Checks head room on the way up and room on top.
  tryMantle(dx, dz) {
    const p = this.pos, c = this.hits(p.x + dx * 0.5, p.y, p.z + dz * 0.5, 1.45);
    if (!c) return false;
    const rise = c.y1 - p.y; if (rise <= 0.45 || rise > 1.4) return false;
    const tx = p.x + dx * 0.85, tz = p.z + dz * 0.85;
    if (this.hits(tx, c.y1 + 0.02, tz, 1.15) || this.hits(p.x, p.y + 0.05, p.z, rise + 1.15)) return false;
    this.mantle = { t: 0, dur: 0.3 + 0.17 * rise, x0: p.x, z0: p.z, y0: p.y, x1: tx, z1: tz, y1: c.y1, dx, dz, crouchEnd: !!this.hits(tx, c.y1 + 0.02, tz, 1.8) };
    this.vel.set(0, 0, 0); this.g.audio.step(0.3); return true;
  }
  // add velocity to the weapon's springs (landing, jump, crouch, recoil)
  vmKick(x, y, z) { const v = this.vm, s = (this.g.weaponSway ?? 1) * (1 - 0.8 * ease(this.adsF)); v.vx += x * s; v.vy += y * s; v.vz += z * s; }
  // Place the camera from the current look angles. Called before the weapon logic (so a shot fired this frame
  // uses this frame's mouse input, not last frame's view) and again at the end of update (recoil, sway, FOV).
  placeCamera(off, w) {
    const G = this.g, p = this.pos, sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
    // Camera comfort: everything below that is not gameplay information is scaled by the CAMERA MOTION setting
    // (0 = off). The camera never moves sideways with footsteps (a common cause of eye strain); that sway lives
    // on the weapon only. Explosion shake is a smooth low-frequency wobble, not per-frame random jitter.
    // Head bob is vertical only and follows the footstep phase; HEAD BOB scales it relative to CAMERA MOTION.
    // The horizon stays level (roll only while leaning). Step / stair and mantle offsets are real movement, eased.
    const cam = G.camera, cmo = G.camMotion ?? 0.5, gait = Math.min(1, this.speed / 4.5), t = this.swT2;
    const bobY = Math.sin(this.bob * 2) * 0.028 * gait * (1 - ease(this.adsF) * 0.7) * cmo * (G.headBob ?? 1);
    const sh = this.shake * 0.05 * cmo, shx = sh * (Math.sin(t * 31) + Math.sin(t * 47) * 0.5), shy = sh * (Math.sin(t * 37 + 1) + Math.sin(t * 53) * 0.5);
    cam.position.set(p.x + this.leanX + shx * cy, p.y + this.eye + this.stepOff - this.mantleDip + bobY - this.dip * cmo - Math.abs(off) * 0.08 + shy, p.z + this.leanZ - shx * sy);
    cam.rotation.set(this.pitch + this.rp + (this.scopeY || 0), this.yaw + this.ry + (this.scopeX || 0), -off * 0.3 * cmo);
    const fov = this.aimFov() + (G.sprintFov === false ? 0 : this.sprintF * 3.5 * Math.min(1, cmo * 2));
    if (Math.abs(cam.fov - fov) > 0.01) { cam.fov = fov; cam.updateProjectionMatrix(); }
    cam.updateMatrixWorld();
    cam.getWorldDirection(this.fwd); this.eyePos.copy(cam.position);
  }
  update(dt) {
    const G = this.g, inp = G.inp, k = inp.k, s = this.slot, w = s.st;
    // aim state first, so this frame's sensitivity matches the field of view this frame displays
    const ads = inp.rmb && !this.sprinting && this.swT <= 0 && !this.reloading && !this.use && !w.melee && !this.mantle;
    this.adsF = clamp(this.adsF + ((ads ? 1 : -1) * dt) / (w.adsT || 0.15), 0, 1);
    if (s.zoom) s.zoomV *= Math.pow(s.zoom / s.zoomV, damp(18, dt)); // wheel steps glide (in log-magnification, so every step feels the same size)
    // Look: raw counts -> angle, never smoothed and never scaled by dt. Sensitivity scales with the tangent of the
    // displayed half-FOV (a pixel moves the same on screen at any zoom), times the player's ADS / scope multiplier.
    const e = w.melee ? 0 : ease(this.adsF), ratio = Math.tan((this.aimFov() * Math.PI) / 360) / Math.tan((G.fov * Math.PI) / 360);
    const mode = w.melee ? 1 : 1 + ((w.optic.ret === 'scope' ? G.sensScope ?? 1 : G.sensAds ?? 1) - 1) * e, sens = 0.0022 * G.sens * ratio * mode;
    const dYaw = -inp.mx * sens, dPitch = -inp.my * sens * (G.sensY ?? 1);
    this.yaw += dYaw; this.pitch = clamp(this.pitch + dPitch, -1.5, 1.5);
    const ir = 1 / Math.max(dt, 1e-3); this.yawRate = dYaw * ir; this.pitchRate = dPitch * ir; // rad/s, drives the weapon's look sway
    if (inp.jump) { this.jumpBuf = 0.12; inp.jump = false; }
    const p = this.pos, sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
    // stance
    const wantCrouch = !!(k.ControlLeft || k.ControlRight) || this.crouchToggle;
    if (wantCrouch) { if (!this.crouch) this.vmKick(0, -0.25, 0); this.crouch = true; this.height = 1.2; }
    else if (this.crouch) { this.height = 1.8; if (this.hits(p.x, p.y, p.z)) this.height = 1.2; else this.crouch = false; }
    this.eye += ((this.crouch ? 1.0 : 1.62) - this.eye) * damp(12, dt);
    this.stimT = Math.max(0, this.stimT - dt);
    if (this.mantle) { // climbing onto an obstacle: rise first, then roll forward over the edge, keep moving
      const m = this.mantle; m.t += dt / m.dur; const u = Math.min(1, m.t), up = ease(Math.min(1, u / 0.72)), fw = ease(clamp((u - 0.28) / 0.72, 0, 1));
      p.y = m.y0 + (m.y1 - m.y0) * up; p.x = m.x0 + (m.x1 - m.x0) * fw; p.z = m.z0 + (m.z1 - m.z0) * fw;
      this.mantleDip = Math.sin(u * Math.PI) * 0.12; this.vel.set(0, 0, 0); this.grounded = true; this.speed = 0;
      if (u >= 1) { this.mantle = null; this.mantleDip = 0; if (m.crouchEnd) this.crouchToggle = true; if (k.KeyW) { this.vel.x = m.dx * 3; this.vel.z = m.dz * 3; } this.vmKick(0, -0.2, 0); }
    } else {
      // fixed sub-steps (<= 1/120 s) with exact constant-acceleration integration: movement, jumps and
      // collisions come out the same at 30, 60 or 144+ frames per second
      const n = Math.max(1, Math.ceil(dt * 120 - 1e-6)), h = dt / n;
      for (let i = 0; i < n && !this.mantle; i++) this.moveStep(h, k, inp, w);
    }
    this.dip += (0 - this.dip) * damp(9, dt); this.stepOff *= Math.exp(-16 * dt);
    this.sprintF += ((this.sprinting ? 1 : 0) - this.sprintF) * damp(inp.rmb ? 20 : 10, dt); // aiming out of a sprint drops the sprint pose fast
    this.mantleF += ((this.mantle ? 1 : 0) - this.mantleF) * damp(12, dt);
    // lean (Q / F): camera and upper body move sideways, clamped by geometry
    const wantLean = this.sprinting || this.mantle ? 0 : (k.KeyF ? 1 : 0) - (k.KeyQ ? 1 : 0);
    this.lean += (wantLean - this.lean) * damp(9, dt);
    let off = this.lean * 0.46;
    for (let i = 0; i < 4 && Math.abs(off) > 0.02; i++) { if (!this.hits(p.x + cy * off, p.y + this.eye - 0.25, p.z - sy * off, 0.4, 0.14)) break; off *= 0.6; if (i === 3) off = 0; }
    this.leanX = cy * off; this.leanZ = -sy * off;
    // survival: only a small emergency regeneration; real healing needs medkits / stims
    this.sinceHit += dt;
    if (this.sinceHit > 5 && this.hp < 20) this.hp = Math.min(20, this.hp + 4 * dt);
    if (this.stimT > 2) this.hp = Math.min(100, this.hp + 2.5 * dt);
    this.blind = Math.max(0, this.blind - dt * (this.blind > 1 ? 1 : 0.55)); this.shake = Math.max(0, this.shake - dt * 2.5);
    this.placeCamera(off, w); // up-to-date view before anything can fire
    // equipment / weapon state
    if (this.use) {
      const u = this.use; u.t += dt;
      if (!u.done && u.t >= u.at) { u.done = true; this.finishUse(u); }
      if (u.t >= u.dur) { this.use = null; this.show(this.cur); }
    }
    if (this.swT > 0) {
      this.swT -= dt;
      if (this.swT <= 0.2 && this.next >= 0) { this.cur = this.next; this.next = -1; this.show(this.cur); }
    }
    if (this.reloading) { // ammunition changes at the insert stage of the animation, not before
      this.relT -= dt; const prog = 1 - this.relT / this.relDur;
      if (!this.relIn && prog >= w.ins) {
        this.relIn = true;
        if (w.shells) { s.mag++; s.reserve--; } else { const n = Math.min(w.mag - s.mag, s.reserve); s.mag += n; s.reserve -= n; }
      }
      if (this.relT <= 0) {
        if (w.shells && s.mag < w.mag && s.reserve > 0 && !inp.lmb) { this.relT = this.relDur = w.reload; this.relIn = false; G.audio.reload(w.reload, 'shell', w.ins); }
        else { this.reloading = false; if (w.shells) { this.pumpT = 0.45; G.audio.pump(); } }
      }
    }
    if (this.pumpT > 0) this.pumpT -= dt;
    if (this.boltT > 0) this.boltT -= dt;
    this.scoped = !w.melee && w.optic.ret === 'scope' && this.adsF > 0.9;
    // scope sway grows with magnification and movement; hold Shift to steady your breath for a few seconds
    this.steady = this.scoped && !!(k.ShiftLeft || k.ShiftRight) && this.breath > 0;
    this.breath = clamp(this.breath + (this.steady ? -dt : dt * 0.6), 0, 4); this.swT2 += dt;
    const sa = this.scoped ? 0.00085 * s.zoomV * (this.crouch ? 0.55 : 1) * (1 + this.speed * 0.9) * (this.steady ? 0.18 : 1) : 0;
    this.scopeX = Math.sin(this.swT2 * 1.07) * sa + Math.sin(this.swT2 * 2.3) * sa * 0.3; this.scopeY = Math.sin(this.swT2 * 0.81 + 1.3) * sa * 0.8;
    this.fireT -= dt;
    if (this.fireT < -0.22) this.burst = 0;
    const trig = w.auto ? inp.lmb : inp.lmbPressed;
    if (trig && this.fireT <= 0 && this.boltT <= 0 && this.pumpT <= 0 && this.swT <= 0 && !this.use && !this.mantle) {
      if (w.melee) this.startUse('melee');
      else if (this.reloading) { if (w.shells && s.mag > 0) { this.reloading = false; this.pumpT = 0.4; G.audio.pump(); } } // firing interrupts shell loading
      else if (s.mag > 0) this.shoot();
      else { if (inp.lmbPressed) G.audio.click(0.5); this.reload(); }
    }
    inp.lmbPressed = false;
    const mv = this.speed / 4.5;
    if (!w.melee) this.spread = (w.hip * (1 + mv * 0.9 + (this.grounded ? 0 : 2)) * (this.crouch ? 0.75 : 1) * (w.att.laser && this.laserOn ? 0.6 : 1)) * (1 - this.adsF) + w.ads * (1 + mv * 0.6) * this.adsF + this.burst * 0.03;
    const rc = damp(7, dt); this.rp -= this.rp * rc; this.ry -= this.ry * rc; this.kick -= this.kick * damp(14, dt);
    // keep the weapon out of walls: pull it back and tilt it when something solid is right in front of the camera
    const cp = G.camera.position, wh = rayBoxes(G.world.colliders, cp.x, cp.y, cp.z, this.fwd.x, this.fwd.y, this.fwd.z, 0.95, 'solid');
    this.wallPush += (clamp(wh ? (0.95 - wh.d) / 0.6 : 0, 0, 1) - this.wallPush) * damp(14, dt);
    // camera (final placement for rendering, including this frame's recoil and sway)
    this.placeCamera(off, w);
    this.animate(dt);
  }
  shoot() {
    const G = this.g, s = this.slot, w = s.st, cam = G.camera;
    s.mag--; this.fireT = Math.max(this.fireT, -0.02) + 60 / w.rpm; this.noSprint = 0.3; this.burst++;
    if (w.bolt && s.mag > 0) { this.boltT = w.bolt; G.audio.bolt(); } else if (w.pellets && s.mag > 0) { this.pumpT = 0.5; G.audio.pump(0.12); }
    const sp = (this.spread * Math.PI) / 180;
    for (let i = 0; i < (w.pellets || 1); i++) {
      const ang = Math.random() * 6.283, rad = Math.sqrt(Math.random()) * sp;
      const d = this._v.set(Math.cos(ang) * Math.tan(rad), Math.sin(ang) * Math.tan(rad), -1).normalize().applyQuaternion(cam.quaternion);
      G.playerShot(cam.position, d, w, this.muzzleW, i === 0);
    }
    const ar = 1 - this.adsF * 0.25, n = this.burst;
    this.rp += ((w.recoil * (n < 3 ? 1.15 : 0.85)) * Math.PI) / 180 * ar * (this.crouch ? 0.85 : 1);
    const hz = w.id === 'ak' && n > 4 ? Math.sin(n * 0.8) * 1.5 + (Math.random() - 0.5) : (Math.random() - 0.5) * 2;
    this.ry += ((hz * w.recoilH) * Math.PI) / 180 * ar;
    this.kick = Math.min(0.13, this.kick + w.kick);
    if (!w.sup) { this.flashT = 0.045; this.flash.rotation.z = Math.random() * 6; this.flash.scale.setScalar(w.flash * (0.8 + Math.random() * 0.45)); G.fx.muzzle(cam.position, w.flash); }
    G.audio.shot(w.id, w.sup); G.sound(this.pos, w.noise * G.world.env.shotMul, 'shot'); G.stats.shots++;
    const v = s.view; G.fx.shell(this._v.copy(v.eject).applyMatrix4(v.matrixWorld).applyQuaternion(cam.quaternion).add(cam.position), this._v2.set(1, 0.6, 0).applyQuaternion(cam.quaternion));
  }
  // Weapon springs: targets come from look rate (the gun trails the view slightly), body velocity (it hangs back
  // when you set off, swings forward when you stop, rolls into strafes) and vertical speed (jumps / falls); impulses
  // come from landing, jumping, crouching. Heavier weapons use softer springs. None of this touches the camera.
  springs(dt, w) {
    const v = this.vm, heft = HEFT[w.id] || 1, sw = (this.g.weaponSway ?? 1) * (1 - 0.82 * ease(w.melee ? 0 : this.adsF)), om = 2 * Math.PI * (3.4 / Math.sqrt(heft)), z2 = 2 * 0.78 * om, o2 = om * om;
    const sy = Math.sin(this.yaw), cy = Math.cos(this.yaw), vl = this.vel.x * cy - this.vel.z * sy, vf = -this.vel.x * sy - this.vel.z * cy;
    const T = { x: clamp(-vl * 0.0035 * heft, -0.02, 0.02) * sw, y: clamp(-this.vel.y * 0.003 * heft, -0.03, 0.03) * sw, z: clamp(vf * 0.003 * heft, -0.02, 0.025) * sw,
      rx: clamp(-this.pitchRate * 0.02 * heft, -0.07, 0.07) * sw, ry: clamp(-this.yawRate * 0.02 * heft, -0.09, 0.09) * sw, rz: clamp(-vl * 0.011 * heft, -0.06, 0.06) * sw };
    this.vmAcc = Math.min(this.vmAcc + dt, 0.1);
    while (this.vmAcc >= VM_STEP) { // fixed-step semi-implicit integration
      this.vmAcc -= VM_STEP;
      v.vx += ((T.x - v.x) * o2 - v.vx * z2) * VM_STEP; v.x += v.vx * VM_STEP; v.vy += ((T.y - v.y) * o2 - v.vy * z2) * VM_STEP; v.y += v.vy * VM_STEP;
      v.vz += ((T.z - v.z) * o2 - v.vz * z2) * VM_STEP; v.z += v.vz * VM_STEP; v.vrx += ((T.rx - v.rx) * o2 - v.vrx * z2) * VM_STEP; v.rx += v.vrx * VM_STEP;
      v.vry += ((T.ry - v.ry) * o2 - v.vry * z2) * VM_STEP; v.ry += v.vry * VM_STEP; v.vrz += ((T.rz - v.rz) * o2 - v.vrz * z2) * VM_STEP; v.rz += v.vrz * VM_STEP;
    }
  }
  animate(dt) {
    const G = this.g, v = this.slots[this.shown].view, w = this.slots[this.shown].st, A = w.melee ? 0 : ease(this.adsF), h = v.hip, a = v.adsPos, vm = this.vm;
    this.springs(dt, w);
    let x = h.x + (a.x - h.x) * A + vm.x, y = h.y + (a.y - h.y) * A + vm.y, z = h.z + (a.z - h.z) * A + vm.z;
    let rx = vm.rx, ry = 0.03 * (1 - A) + vm.ry, rz = -this.lean * 0.12 * (1 - A * 0.5) + vm.rz;
    // walking bob on the weapon: a figure-eight that grows with speed (bigger when sprinting), almost gone in ADS
    const k = 1 - A * 0.9, ws = G.weaponSway ?? 1, gait = Math.min(1.6, this.speed / 4.5) * (this.grounded ? 1 : 0.3), bb = this.bob, br = Math.sin(this.swT2 * 1.6) * 0.0022 * k;
    x += Math.cos(bb) * 0.011 * gait * k * ws; y += Math.sin(bb * 2) * 0.009 * gait * k * ws - this.dip * 0.4 + br;
    rz += Math.cos(bb) * 0.018 * gait * k * ws; rx += Math.sin(bb * 2) * 0.008 * gait * k * ws;
    z += this.kick * (1 - A * 0.35); rx += this.kick * 1.0 * (1 - A * 0.65);
    const wp = this.wallPush * (1 - A * 0.5); z += wp * 0.2; y -= wp * 0.05; rx += wp * 0.45; x += wp * 0.02; // blocked by a wall: muzzle up, gun pulled in
    if (this.swT > 0) { const t = Math.sin((1 - this.swT / 0.4) * Math.PI); y -= t * 0.3; rx -= t * 0.7; }
    let lhX = 0, lhY = 0, lhZ = 0, magOn = false;
    if (this.reloading) { // staged reload: hand to magazine, old one out, new one in, back to the fore-end, charge
      const u = clamp(1 - this.relT / this.relDur, 0, 1), k = w.rk, tilt = Math.sin(Math.min(1, u * 1.04) * Math.PI), W = v.magWell, R = v.lhRest;
      if (k === 'shell') { y += 0.01; rx += 0.1; rz += 0.3; x -= 0.03; } else if (k === 'pistol') { y += tilt * 0.03; rx += tilt * 0.28; rz += tilt * 0.3; x -= tilt * 0.04; } else { y += tilt * 0.015; rx += tilt * 0.12; rz += tilt * 0.42; x -= tilt * 0.05; }
      const dx = W.x - R.x, dy = W.y - R.y, dz = W.z - R.z, ins = w.ins, sm = (t) => t * t * (3 - 2 * t);
      if (k === 'shell') { const t = u < ins ? sm(u / ins) : 1 - sm((u - ins) / (1 - ins)); lhX = dx * t; lhY = dy * t - (1 - t) * 0.1 * Math.sin(u * Math.PI); lhZ = dz * t; magOn = u < ins; }
      else {
        const t1 = ins * 0.3, t2 = ins * 0.55, t3 = ins * 0.72, t5 = Math.min(0.97, ins + 0.2), low = k === 'pistol' ? 0.16 : 0.22;
        let a = 0, d = 0; // a: 0 = rest .. 1 = at the magazine well; d: how far the hand has dropped below it
        if (u < t1) a = sm(u / t1); else if (u < t2) { a = 1; d = sm((u - t1) / (t2 - t1)); magOn = true; } else if (u < t3) { a = 1; d = 1; magOn = u > (t2 + t3) / 2; }
        else if (u < ins) { a = 1; d = 1 - sm((u - t3) / (ins - t3)); magOn = true; } else if (u < t5) a = 1 - sm((u - ins) / (t5 - ins));
        lhX = dx * a - d * 0.03; lhY = dy * a - d * low; lhZ = dz * a + d * 0.06;
        if (u > t5 && k !== 'pistol') { const c = Math.sin(clamp((u - t5) / (1 - t5), 0, 1) * Math.PI); z += c * 0.03; rz -= c * 0.25; } // rack the action
        if (u > ins && k === 'pistol') { const c = Math.sin(clamp((u - ins) / (1 - ins), 0, 1) * Math.PI); z -= c * 0.02; rx -= c * 0.15; } // slide forward
      }
    }
    if (this.boltT > 0 && w.bolt) { const b = 1 - this.boltT / w.bolt, c = Math.sin(clamp((b - 0.15) / 0.7, 0, 1) * Math.PI); rz += c * 0.2; rx += c * 0.07; z += Math.sin(clamp((b - 0.3) / 0.4, 0, 1) * Math.PI) * 0.04; y -= c * 0.015; }
    if (this.pumpT > 0) { const c = Math.sin(clamp(1 - this.pumpT / 0.45, 0, 1) * Math.PI); lhZ += c * 0.07; rx += c * 0.05; }
    if (v.magProxy) v.magProxy.visible = magOn;
    const u = this.use;
    if (u) {
      const t = Math.sin(clamp(u.t / u.dur, 0, 1) * Math.PI);
      if (u.type === 'melee') { const q = clamp(u.t / 0.22, 0, 1), o = Math.sin(q * Math.PI); z -= o * 0.32; x -= o * 0.16; ry += 0.5 - q * 1.1; rx += 0.25 - o * 0.5; rz += 0.6; }
      else { y -= t * 0.34; rx -= t * 0.8; }
    }
    const mf = this.mantleF; y -= mf * 0.22; rx -= mf * 0.5; rz += mf * 0.25; // lowered while climbing
    const s = this.sprintF * (w.melee ? 0.4 : 1); y -= s * 0.05; ry += s * 0.5; rx -= s * 0.18; x -= s * 0.04;
    v.position.set(x, y, z); v.rotation.set(rx, ry, rz);
    if (v.lh) v.lh.position.set(lhX, lhY, lhZ);
    v.visible = !this.scoped;
    v.updateMatrixWorld();
    const q = G.camera.quaternion, cp = G.camera.position;
    this.muzzleW.copy(v.muzzle).applyMatrix4(v.matrixWorld).applyQuaternion(q).add(cp);
    if (v.laser) this.laserW.copy(v.laser).applyMatrix4(v.matrixWorld).applyQuaternion(q).add(cp);
    if (this.flashT > 0 && !this.scoped) { this.flashT -= dt; this.flash.visible = true; this.flash.position.copy(v.muzzle).applyMatrix4(v.matrixWorld); this.flash.position.z -= 0.03; }
    else { this.flash.visible = false; this.flashT = 0; }
  }
}
