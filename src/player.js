// First-person controller: movement, leaning, mantling, three weapon slots, melee, throwables, medical.
import * as THREE from 'three';
import { WEAPONS, KITS, statsFor, buildView } from './weapons.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const R = 0.34, THROW = ['frag', 'flash', 'smoke'];
export const THROW_NAME = { frag: 'FRAG', flash: 'FLASH', smoke: 'SMOKE' };

export class Player {
  constructor(G, spawn, loadout) {
    this.g = G;
    this.pos = new THREE.Vector3(spawn.x, 0, spawn.z); this.vel = new THREE.Vector3();
    this.yaw = spawn.yaw; this.pitch = 0; this.eye = 1.62; this.height = 1.8;
    this.hp = 100; this.dead = false; this.grounded = true; this.crouch = false; this.crouchToggle = false;
    this.speed = 0; this.bob = 0; this.dip = 0; this.sinceHit = 99; this.noSprint = 0; this.sprintF = 0; this.sprinting = false;
    this.lean = 0; this.leanX = 0; this.leanZ = 0; this.mantle = null; this.stimT = 0; this.blind = 0; this.shake = 0;
    const ids = [loadout.primary, loadout.secondary, 'knife'];
    this.slots = ids.map((id) => {
      const att = loadout.att[id] || {}, st = statsFor(id, att), view = buildView(id, att);
      view.visible = false; G.wscene.add(view);
      return { id, st, view, mag: st.mag, reserve: st.reserve };
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
    this.fwd = new THREE.Vector3(); this._v = new THREE.Vector3(); this._v2 = new THREE.Vector3(); this.muzzleW = new THREE.Vector3(); this.laserW = new THREE.Vector3(); this.eyePos = new THREE.Vector3();
  }
  get slot() { return this.slots[this.cur]; }
  get w() { return this.slots[this.cur].st; }
  busy() { return this.swT > 0 || this.reloading || !!this.use || !!this.mantle; }
  hits(x, y, z, h = this.height, r = R) {
    const cols = this.g.world.colliders;
    for (let i = 0; i < cols.length; i++) {
      const c = cols[i];
      if (c.solid && x + r > c.x0 && x - r < c.x1 && z + r > c.z0 && z - r < c.z1 && y < c.y1 - 0.001 && y + h > c.y0) return c;
    }
    return null;
  }
  switchTo(i) { if (i === this.cur || this.swT > 0 || this.dead || this.use || !this.slots[i]) return; this.next = i; this.swT = 0.4; this.reloading = false; this.g.audio.click(0.35); }
  reload() {
    const s = this.slot;
    if (this.busy() || s.st.melee || s.mag >= s.st.mag || s.reserve <= 0) return;
    this.reloading = true; this.relT = s.st.reload; this.g.audio.reload(s.st.reload, s.st.shells);
  }
  damage(d, from, info) {
    if (this.dead) return;
    this.hp -= d; this.sinceHit = 0; this.lastHit = info; this.g.onHurt(from, d);
    if (this.hp <= 0) { this.hp = 0; this.dead = true; }
  }
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
  update(dt) {
    const G = this.g, inp = G.inp, k = inp.k, s = this.slot, w = s.st;
    // look
    const zoom = 1 + (w.optic ? w.optic.fov / 75 - 1 : 0) * this.adsF, sens = 0.0022 * G.sens * (w.melee ? 1 : zoom);
    this.yaw -= inp.mx * sens; this.pitch = clamp(this.pitch - inp.my * sens, -1.5, 1.5);
    this.swayX += (clamp(-inp.mx * 0.0005, -0.03, 0.03) - this.swayX) * Math.min(1, dt * 10);
    this.swayY += (clamp(inp.my * 0.0005, -0.03, 0.03) - this.swayY) * Math.min(1, dt * 10);
    const p = this.pos, sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
    // stance
    const wantCrouch = !!(k.ControlLeft || k.ControlRight) || this.crouchToggle;
    if (wantCrouch) { this.crouch = true; this.height = 1.2; }
    else if (this.crouch) { this.height = 1.8; if (this.hits(p.x, p.y, p.z)) this.height = 1.2; else this.crouch = false; }
    this.eye += ((this.crouch ? 1.0 : 1.62) - this.eye) * Math.min(1, dt * 12);
    this.stimT = Math.max(0, this.stimT - dt);
    if (this.mantle) { // climbing onto an obstacle
      const m = this.mantle; m.t += dt / 0.42; const t = Math.min(1, m.t), e = t * t * (3 - 2 * t);
      p.y = m.y0 + (m.y1 - m.y0) * Math.min(1, e * 1.5); p.x = m.x0 + (m.x1 - m.x0) * Math.max(0, e * 1.6 - 0.6); p.z = m.z0 + (m.z1 - m.z0) * Math.max(0, e * 1.6 - 0.6);
      this.vel.set(0, 0, 0); this.grounded = true; if (t >= 1) this.mantle = null;
    } else {
      let f = (k.KeyW ? 1 : 0) - (k.KeyS ? 1 : 0), sd = (k.KeyD ? 1 : 0) - (k.KeyA ? 1 : 0);
      const l = Math.hypot(f, sd) || 1; f /= l; sd /= l;
      this.noSprint -= dt;
      const sprint = (k.ShiftLeft || k.ShiftRight) && f > 0 && !this.crouch && this.noSprint <= 0 && !inp.rmb && this.grounded && !this.use;
      this.sprinting = sprint;
      const sp = (this.crouch ? 2.3 : sprint ? 6.9 : 4.5) * w.move * (1 - 0.42 * this.adsF) * (this.use && this.use.type === 'med' ? 0.55 : 1) * (this.stimT > 0 ? 1.12 : 1) * (1 - Math.abs(this.lean) * 0.5);
      const wx = (-sy * f + cy * sd) * sp, wz = (-cy * f - sy * sd) * sp;
      const acc = (this.grounded ? (f || sd ? 60 : 48) : 9) * dt, dvx = wx - this.vel.x, dvz = wz - this.vel.z, dl = Math.hypot(dvx, dvz);
      if (dl > acc) { this.vel.x += (dvx / dl) * acc; this.vel.z += (dvz / dl) * acc; } else { this.vel.x = wx; this.vel.z = wz; }
      if (inp.jump && this.grounded) { this.vel.y = this.crouch ? 5.2 : 6.6; this.grounded = false; G.audio.step(0.25); }
      inp.jump = false;
      this.vel.y -= 21 * dt;
      const wasG = this.grounded;
      const axis = (ax) => {
        const n = ax === 'x' ? p.x + this.vel.x * dt : p.z + this.vel.z * dt;
        const tx = ax === 'x' ? n : p.x, tz = ax === 'x' ? p.z : n, c = this.hits(tx, p.y, tz);
        if (!c) { p[ax] = n; return; }
        const rise = c.y1 - p.y;
        if (wasG && rise <= 0.45 && !this.hits(tx, c.y1, tz)) { p[ax] = n; p.y = c.y1; return; }
        if (k.Space && rise > 0.45 && rise <= 1.4 && !this.mantle && !this.use) { // mantle: pull up onto the obstacle
          const dir = Math.sign(this.vel[ax]) || 1, mx = ax === 'x' ? p.x + dir * 0.75 : p.x, mz = ax === 'x' ? p.z : p.z + dir * 0.75;
          if (!this.hits(mx, c.y1 + 0.02, mz, 1.2)) { this.mantle = { t: 0, x0: p.x, z0: p.z, y0: p.y, x1: mx, z1: mz, y1: c.y1 }; this.crouchToggle = this.crouchToggle || !!this.hits(mx, c.y1 + 0.02, mz, 1.8); G.audio.step(0.3); }
        }
        this.vel[ax] = 0;
      };
      axis('x'); axis('z');
      const fall = this.vel.y;
      let ny = p.y + this.vel.y * dt;
      this.grounded = false;
      if (ny <= 0) { ny = 0; this.grounded = true; this.vel.y = 0; }
      else { const c = this.hits(p.x, ny, p.z); if (c) { if (this.vel.y <= 0) { ny = c.y1; this.grounded = true; } else ny = p.y; this.vel.y = 0; } }
      if (!this.mantle) p.y = ny;
      if (this.grounded && !wasG && fall < -4) { this.dip = Math.min(0.16, -fall * 0.014); G.audio.land(); G.sound(p, 9, 'step'); if (fall < -13) this.damage((-fall - 13) * 6, p, { name: 'a fall', dist: 0, x: p.x, z: p.z, fall: true }); }
      this.speed = Math.hypot(this.vel.x, this.vel.z);
      if (this.grounded && this.speed > 0.6) {
        const prev = this.bob; this.bob += this.speed * dt * 1.75;
        if (Math.floor(prev / Math.PI) !== Math.floor(this.bob / Math.PI)) {
          G.audio.step(this.crouch ? 0.06 : sprint ? 0.26 : 0.15);
          if (!this.crouch) G.sound(p, sprint ? 13 : 6.5, 'step');
        }
      }
    }
    this.dip += (0 - this.dip) * Math.min(1, dt * 9);
    this.sprintF += ((this.sprinting ? 1 : 0) - this.sprintF) * Math.min(1, dt * 9);
    // lean (Q / F): camera and upper body move sideways, clamped by geometry
    const wantLean = this.sprinting || this.mantle ? 0 : (k.KeyF ? 1 : 0) - (k.KeyQ ? 1 : 0);
    this.lean += (wantLean - this.lean) * Math.min(1, dt * 9);
    let off = this.lean * 0.46;
    for (let i = 0; i < 4 && Math.abs(off) > 0.02; i++) { if (!this.hits(p.x + cy * off, p.y + this.eye - 0.25, p.z - sy * off, 0.4, 0.14)) break; off *= 0.6; if (i === 3) off = 0; }
    this.leanX = cy * off; this.leanZ = -sy * off;
    // survival: only a small emergency regeneration; real healing needs medkits / stims
    this.sinceHit += dt;
    if (this.sinceHit > 5 && this.hp < 20) this.hp = Math.min(20, this.hp + 4 * dt);
    if (this.stimT > 2) this.hp = Math.min(100, this.hp + 2.5 * dt);
    this.blind = Math.max(0, this.blind - dt * (this.blind > 1 ? 1 : 0.55)); this.shake = Math.max(0, this.shake - dt * 2.5);
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
    if (this.reloading) {
      this.relT -= dt;
      if (this.relT <= 0) {
        if (w.shells) { s.mag++; s.reserve--; if (s.mag < w.mag && s.reserve > 0 && !inp.lmb) { this.relT = w.reload; G.audio.click(0.45); } else this.reloading = false; }
        else { const n = Math.min(w.mag - s.mag, s.reserve); s.mag += n; s.reserve -= n; this.reloading = false; }
      }
    }
    const ads = inp.rmb && !this.sprinting && this.swT <= 0 && !this.reloading && !this.use && !w.melee && !this.mantle;
    this.adsF = clamp(this.adsF + ((ads ? 1 : -1) * dt) / (w.adsT || 0.15), 0, 1);
    this.scoped = !w.melee && w.optic.ret === 'scope' && this.adsF > 0.9;
    this.fireT -= dt;
    if (this.fireT < -0.22) this.burst = 0;
    const trig = w.auto ? inp.lmb : inp.lmbPressed;
    if (trig && this.fireT <= 0 && this.swT <= 0 && !this.use && !this.mantle) {
      if (w.melee) this.startUse('melee');
      else if (this.reloading) { if (w.shells && s.mag > 0) this.reloading = false; }
      else if (s.mag > 0) this.shoot();
      else { if (inp.lmbPressed) G.audio.click(0.5); this.reload(); }
    }
    inp.lmbPressed = false;
    const mv = this.speed / 4.5;
    if (!w.melee) this.spread = (w.hip * (1 + mv * 0.9 + (this.grounded ? 0 : 2)) * (this.crouch ? 0.75 : 1) * (w.att.laser && this.laserOn ? 0.6 : 1)) * (1 - this.adsF) + w.ads * (1 + mv * 0.6) * this.adsF + this.burst * 0.03;
    const rc = Math.min(1, dt * 7); this.rp -= this.rp * rc; this.ry -= this.ry * rc; this.kick -= this.kick * Math.min(1, dt * 14);
    // camera
    const cam = G.camera, bobY = Math.sin(this.bob * 2) * 0.028 * Math.min(1, mv) * (1 - this.adsF * 0.6), bobX = Math.cos(this.bob) * 0.02 * Math.min(1, mv);
    const sh = this.shake * 0.05;
    cam.position.set(p.x + cy * bobX + this.leanX + (Math.random() - 0.5) * sh, p.y + this.eye + bobY - this.dip - Math.abs(off) * 0.08 + (Math.random() - 0.5) * sh, p.z - sy * bobX + this.leanZ);
    cam.rotation.set(this.pitch + this.rp, this.yaw + this.ry, -off * 0.3);
    const fov = G.fov + ((w.melee ? G.fov : w.optic.fov) - G.fov) * this.adsF + this.sprintF * 4;
    if (Math.abs(cam.fov - fov) > 0.01) { cam.fov = fov; cam.updateProjectionMatrix(); }
    cam.updateMatrixWorld();
    cam.getWorldDirection(this.fwd); this.eyePos.copy(cam.position);
    this.animate(dt, bobX, bobY);
  }
  shoot() {
    const G = this.g, s = this.slot, w = s.st, cam = G.camera;
    s.mag--; this.fireT = Math.max(this.fireT, -0.02) + 60 / w.rpm; this.noSprint = 0.3; this.burst++;
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
    if (!w.sup) { this.flashT = 0.045; this.flash.rotation.z = Math.random() * 6; this.flash.scale.setScalar((w.pellets ? 1.3 : 0.7) + Math.random() * 0.6); G.fx.muzzle(cam.position); }
    G.audio.shot(w.id, w.sup); G.sound(this.pos, w.noise * G.world.env.shotMul, 'shot'); G.stats.shots++;
    const v = s.view; G.fx.shell(this._v.copy(v.eject).applyMatrix4(v.matrixWorld).applyQuaternion(cam.quaternion).add(cam.position), this._v2.set(1, 0.6, 0).applyQuaternion(cam.quaternion));
  }
  animate(dt, bobX, bobY) {
    const G = this.g, v = this.slots[this.shown].view, w = this.slots[this.shown].st, A = w.melee ? 0 : this.adsF, h = v.hip, a = v.adsPos;
    let x = h.x + (a.x - h.x) * A, y = h.y + (a.y - h.y) * A, z = h.z + (a.z - h.z) * A;
    let rx = 0, ry = 0.03 * (1 - A), rz = -this.lean * 0.12 * (1 - A * 0.5);
    const k = 1 - A * 0.88, br = Math.sin(performance.now() * 0.0016) * 0.0025 * k;
    x += this.swayX * k + bobX * 0.5 * k; y += this.swayY * k + bobY * 0.45 * k - this.dip * 0.4 + br;
    z += this.kick * (1 - A * 0.35); rx += this.kick * 1.0 * (1 - A * 0.65);
    if (this.swT > 0) { const t = Math.sin((1 - this.swT / 0.4) * Math.PI); y -= t * 0.3; rx -= t * 0.7; }
    let lhY = 0, lhZ = 0;
    if (this.reloading) {
      const t = w.shells ? 0.6 + 0.4 * Math.sin((1 - this.relT / w.reload) * Math.PI) : Math.sin(Math.min(1, (1 - this.relT / w.reload) * 1.08) * Math.PI);
      y -= t * 0.07; rx += t * 0.42; rz += t * 0.45; x -= t * 0.03;
      const m = w.shells ? Math.sin((1 - this.relT / w.reload) * Math.PI) : Math.sin(clamp((1 - this.relT / w.reload - 0.12) / 0.6, 0, 1) * Math.PI);
      lhY = -m * 0.2; lhZ = m * 0.12;
    }
    const u = this.use;
    if (u) {
      const t = Math.sin(clamp(u.t / u.dur, 0, 1) * Math.PI);
      if (u.type === 'melee') { const q = clamp(u.t / 0.22, 0, 1), o = Math.sin(q * Math.PI); z -= o * 0.32; x -= o * 0.16; ry += 0.5 - q * 1.1; rx += 0.25 - o * 0.5; rz += 0.6; }
      else { y -= t * 0.34; rx -= t * 0.8; }
    }
    if (this.mantle) { y -= 0.3; rx -= 0.6; }
    const s = this.sprintF * (w.melee ? 0.4 : 1); y -= s * 0.05; ry += s * 0.5; rx -= s * 0.18; x -= s * 0.04;
    v.position.set(x, y, z); v.rotation.set(rx, ry, rz);
    if (v.lh) v.lh.position.set(0, lhY, lhZ);
    v.visible = !this.scoped;
    v.updateMatrixWorld();
    const q = G.camera.quaternion, cp = G.camera.position;
    this.muzzleW.copy(v.muzzle).applyMatrix4(v.matrixWorld).applyQuaternion(q).add(cp);
    if (v.laser) this.laserW.copy(v.laser).applyMatrix4(v.matrixWorld).applyQuaternion(q).add(cp);
    if (this.flashT > 0 && !this.scoped) { this.flashT -= dt; this.flash.visible = true; this.flash.position.copy(v.muzzle).applyMatrix4(v.matrixWorld); this.flash.position.z -= 0.03; }
    else { this.flash.visible = false; this.flashT = 0; }
  }
}
