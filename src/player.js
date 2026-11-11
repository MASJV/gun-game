// First-person controller, weapons and view models.
import * as THREE from 'three';

export const WEAPONS = [
  { id: 'ak', name: 'AK-47', auto: true, dmg: 34, rpm: 600, mag: 30, reserve: 90, recoil: 1.5, recoilH: 0.5, hip: 2.1, ads: 0.22, reload: 2.6, adsFov: 52, adsT: 0.22, move: 0.93, kick: 0.07, sightY: 0.06, hipPos: [0.2, -0.21, -0.42] },
  { id: 'm4', name: 'M4A1', auto: true, dmg: 26, rpm: 800, mag: 30, reserve: 120, recoil: 0.8, recoilH: 0.26, hip: 1.5, ads: 0.14, reload: 2.1, adsFov: 48, adsT: 0.17, move: 0.97, kick: 0.045, sightY: 0.0725, hipPos: [0.2, -0.21, -0.42], laser: true },
  { id: 'pistol', name: 'P9 PISTOL', auto: false, dmg: 30, rpm: 420, mag: 12, reserve: 48, recoil: 1.25, recoilH: 0.3, hip: 1.2, ads: 0.3, reload: 1.4, adsFov: 60, adsT: 0.11, move: 1.06, kick: 0.085, sightY: 0.028, hipPos: [0.15, -0.16, -0.4], falloff: 22 },
];

const mats = {};
const mat = (hex, em) => mats[hex + (em ? 'e' : '')] || (mats[hex + (em ? 'e' : '')] = em ? new THREE.MeshBasicMaterial({ color: hex }) : new THREE.MeshLambertMaterial({ color: hex }));
function bx(g, hex, w, h, d, x, y, z, rx = 0, ry = 0, em) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(hex, em));
  m.position.set(x, y, z); m.rotation.set(rx, ry, 0); g.add(m); return m;
}
const METAL = 0x1d1f22, WOOD = 0x6b4426, BLACK = 0x121315, GREY = 0x33373b, SLEEVE = 0x3f4a35, GLOVE = 0x1a1a1a;
function arms(g, pistol) {
  if (pistol) {
    bx(g, SLEEVE, 0.075, 0.075, 0.45, 0.07, -0.2, 0.27, 0.5, 0.3); bx(g, SLEEVE, 0.075, 0.075, 0.5, -0.11, -0.21, 0.25, 0.528, -0.467);
    bx(g, GLOVE, 0.06, 0.09, 0.07, 0, -0.085, 0.06);
  } else {
    bx(g, SLEEVE, 0.08, 0.08, 0.5, 0.069, -0.21, 0.3, 0.528, 0.28); bx(g, GLOVE, 0.055, 0.08, 0.07, 0.005, -0.075, 0.09, 0.3);
    bx(g, SLEEVE, 0.08, 0.08, 0.55, -0.153, -0.2, -0.043, 0.635, -0.535); bx(g, GLOVE, 0.07, 0.05, 0.09, -0.005, -0.045, -0.24);
  }
}
function buildModel(id) {
  const g = new THREE.Group();
  if (id === 'ak') {
    bx(g, METAL, 0.05, 0.065, 0.3, 0, 0, 0); bx(g, GREY, 0.046, 0.02, 0.24, 0, 0.04, 0);
    bx(g, WOOD, 0.054, 0.056, 0.2, 0, -0.005, -0.25); bx(g, METAL, 0.022, 0.022, 0.2, 0, 0.035, -0.26);
    bx(g, METAL, 0.018, 0.018, 0.3, 0, 0.005, -0.48); bx(g, METAL, 0.012, 0.05, 0.015, 0, 0.035, -0.6); bx(g, METAL, 0.026, 0.026, 0.05, 0, 0.005, -0.65);
    for (const s of [-1, 1]) bx(g, METAL, 0.008, 0.016, 0.02, s * 0.013, 0.057, -0.1);
    bx(g, WOOD, 0.04, 0.075, 0.26, 0, -0.022, 0.28, 0.08); bx(g, WOOD, 0.035, 0.09, 0.04, 0, -0.07, 0.09, 0.3);
    bx(g, 0x2a2420, 0.03, 0.11, 0.055, 0, -0.08, -0.06, -0.25); bx(g, 0x2a2420, 0.03, 0.08, 0.05, 0, -0.16, -0.098, -0.6);
    g.muzzle = new THREE.Vector3(0, 0.005, -0.7);
  } else if (id === 'm4') {
    bx(g, BLACK, 0.048, 0.075, 0.22, 0, 0, 0); bx(g, GREY, 0.03, 0.012, 0.34, 0, 0.044, -0.1);
    bx(g, GREY, 0.056, 0.056, 0.26, 0, 0.005, -0.24); bx(g, METAL, 0.016, 0.016, 0.22, 0, 0.005, -0.48); bx(g, METAL, 0.024, 0.024, 0.04, 0, 0.005, -0.6);
    bx(g, BLACK, 0.012, 0.045, 0.02, 0, 0.05, -0.4);
    for (const s of [-1, 1]) bx(g, BLACK, 0.008, 0.022, 0.02, s * 0.013, 0.066, 0.03);
    bx(g, METAL, 0.026, 0.026, 0.2, 0, 0.01, 0.2); bx(g, BLACK, 0.04, 0.085, 0.12, 0, -0.012, 0.3);
    bx(g, BLACK, 0.032, 0.085, 0.04, 0, -0.07, 0.07, 0.25); bx(g, 0x3c4044, 0.028, 0.14, 0.058, 0, -0.1, -0.05, -0.1);
    bx(g, 0x25282b, 0.028, 0.03, 0.08, 0.043, 0.005, -0.3); bx(g, 0xff2a2a, 0.012, 0.012, 0.004, 0.043, 0.005, -0.342, 0, 0, true);
    g.muzzle = new THREE.Vector3(0, 0.005, -0.63); g.laser = new THREE.Vector3(0.043, 0.005, -0.345);
  } else {
    bx(g, 0x2a2d30, 0.03, 0.036, 0.19, 0, 0, -0.02); bx(g, BLACK, 0.028, 0.02, 0.15, 0, -0.026, -0.01);
    bx(g, BLACK, 0.03, 0.1, 0.048, 0, -0.08, 0.055, 0.2); bx(g, BLACK, 0.01, 0.01, 0.05, 0, -0.05, -0.012);
    bx(g, BLACK, 0.006, 0.01, 0.01, 0, 0.023, -0.105);
    for (const s of [-1, 1]) bx(g, BLACK, 0.006, 0.012, 0.01, s * 0.009, 0.024, 0.065);
    g.muzzle = new THREE.Vector3(0, 0, -0.125);
  }
  arms(g, id === 'pistol');
  return g;
}
function flashTex() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'), gr = g.createRadialGradient(32, 32, 2, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,230,1)'); gr.addColorStop(0.3, 'rgba(255,200,90,.8)'); gr.addColorStop(1, 'rgba(255,120,20,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const R = 0.34;

export class Player {
  constructor(G, spawn, startWeapon) {
    this.g = G;
    this.pos = new THREE.Vector3(spawn.x, 0, spawn.z); this.vel = new THREE.Vector3();
    this.yaw = spawn.yaw; this.pitch = 0; this.eye = 1.62; this.height = 1.8;
    this.hp = 100; this.dead = false; this.grounded = true; this.crouch = false; this.crouchToggle = false;
    this.speed = 0; this.bob = 0; this.dip = 0; this.sinceHit = 99; this.noSprint = 0; this.sprintF = 0;
    this.ammo = WEAPONS.map((w) => ({ mag: w.mag, reserve: w.reserve }));
    this.cur = startWeapon; this.next = -1; this.swT = 0; this.relT = 0; this.reloading = false; this.fireT = 0; this.adsF = 0;
    this.rp = 0; this.ry = 0; this.kick = 0; this.burst = 0; this.laserOn = true; this.spread = 1; this.swayX = 0; this.swayY = 0;
    this.models = WEAPONS.map((w) => { const m = buildModel(w.id); m.visible = false; G.wscene.add(m); return m; });
    this.models[this.cur].visible = true;
    this.flash = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.22), new THREE.MeshBasicMaterial({ map: flashTex(), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.flash.visible = false; this.flashT = 0; G.wscene.add(this.flash);
    this.fwd = new THREE.Vector3(); this._v = new THREE.Vector3(); this.muzzleW = new THREE.Vector3();
  }
  get w() { return WEAPONS[this.cur]; }
  hits(x, y, z) {
    const cols = this.g.world.colliders, h = this.height;
    for (let i = 0; i < cols.length; i++) {
      const c = cols[i];
      if (c.solid && x + R > c.x0 && x - R < c.x1 && z + R > c.z0 && z - R < c.z1 && y < c.y1 - 0.001 && y + h > c.y0) return c;
    }
    return null;
  }
  switchTo(i) { if (i === this.cur || this.swT > 0 || this.dead) return; this.next = i; this.swT = 0.38; this.reloading = false; this.g.audio.click(0.35); }
  reload() {
    const a = this.ammo[this.cur];
    if (this.reloading || this.swT > 0 || a.mag >= this.w.mag || a.reserve <= 0) return;
    this.reloading = true; this.relT = this.w.reload; this.g.audio.reload(this.w.reload);
  }
  damage(d, from, info) {
    if (this.dead) return;
    this.hp -= d; this.sinceHit = 0; this.lastHit = info; this.g.onHurt(from);
    if (this.hp <= 0) { this.hp = 0; this.dead = true; }
  }
  update(dt) {
    const G = this.g, inp = G.inp, k = inp.k, w = this.w, a = this.ammo[this.cur];
    // look
    const sens = 0.0022 * G.sens * (1 - 0.45 * this.adsF);
    this.yaw -= inp.mx * sens; this.pitch = clamp(this.pitch - inp.my * sens, -1.5, 1.5);
    this.swayX += (clamp(-inp.mx * 0.0005, -0.03, 0.03) - this.swayX) * Math.min(1, dt * 10);
    this.swayY += (clamp(inp.my * 0.0005, -0.03, 0.03) - this.swayY) * Math.min(1, dt * 10);
    // stance
    const wantCrouch = !!(k.ControlLeft || k.ControlRight) || this.crouchToggle;
    if (wantCrouch) { this.crouch = true; this.height = 1.2; }
    else if (this.crouch) { this.height = 1.8; if (this.hits(this.pos.x, this.pos.y, this.pos.z)) this.height = 1.2; else this.crouch = false; }
    this.eye += ((this.crouch ? 1.0 : 1.62) - this.eye) * Math.min(1, dt * 12);
    // movement
    let f = (k.KeyW ? 1 : 0) - (k.KeyS ? 1 : 0), s = (k.KeyD ? 1 : 0) - (k.KeyA ? 1 : 0);
    const l = Math.hypot(f, s) || 1; f /= l; s /= l;
    this.noSprint -= dt;
    const sprint = (k.ShiftLeft || k.ShiftRight) && f > 0 && !this.crouch && this.noSprint <= 0 && !inp.rmb && this.grounded;
    this.sprinting = sprint;
    this.sprintF += ((sprint ? 1 : 0) - this.sprintF) * Math.min(1, dt * 9);
    const sp = (this.crouch ? 2.3 : sprint ? 6.9 : 4.5) * w.move * (1 - 0.42 * this.adsF);
    const sy = Math.sin(this.yaw), cy = Math.cos(this.yaw), wx = (-sy * f + cy * s) * sp, wz = (-cy * f - sy * s) * sp;
    const acc = (this.grounded ? (f || s ? 60 : 48) : 9) * dt, dvx = wx - this.vel.x, dvz = wz - this.vel.z, dl = Math.hypot(dvx, dvz);
    if (dl > acc) { this.vel.x += (dvx / dl) * acc; this.vel.z += (dvz / dl) * acc; } else { this.vel.x = wx; this.vel.z = wz; }
    if (inp.jump && this.grounded) { this.vel.y = this.crouch ? 5.2 : 6.6; this.grounded = false; G.audio.step(0.25); }
    inp.jump = false;
    this.vel.y -= 21 * dt;
    const p = this.pos, wasG = this.grounded;
    const axis = (ax) => {
      const n = ax === 'x' ? p.x + this.vel.x * dt : p.z + this.vel.z * dt;
      const tx = ax === 'x' ? n : p.x, tz = ax === 'x' ? p.z : n, c = this.hits(tx, p.y, tz);
      if (!c) { p[ax] = n; return; }
      if (wasG && c.y1 - p.y <= 0.45 && !this.hits(tx, c.y1, tz)) { p[ax] = n; p.y = c.y1; return; }
      this.vel[ax] = 0;
    };
    axis('x'); axis('z');
    const fall = this.vel.y;
    let ny = p.y + this.vel.y * dt;
    this.grounded = false;
    if (ny <= 0) { ny = 0; this.grounded = true; this.vel.y = 0; }
    else { const c = this.hits(p.x, ny, p.z); if (c) { if (this.vel.y <= 0) { ny = c.y1; this.grounded = true; } else ny = p.y; this.vel.y = 0; } }
    p.y = ny;
    if (this.grounded && !wasG && fall < -4) { this.dip = Math.min(0.16, -fall * 0.014); G.audio.land(); G.sound(p, 9, 'step'); }
    this.dip += (0 - this.dip) * Math.min(1, dt * 9);
    this.speed = Math.hypot(this.vel.x, this.vel.z);
    if (this.grounded && this.speed > 0.6) {
      const prev = this.bob; this.bob += this.speed * dt * 1.75;
      if (Math.floor(prev / Math.PI) !== Math.floor(this.bob / Math.PI)) {
        G.audio.step(this.crouch ? 0.06 : sprint ? 0.26 : 0.15);
        if (!this.crouch) G.sound(p, sprint ? 13 : 6.5, 'step');
      }
    }
    // health regen (to 50) after 6 s without damage
    this.sinceHit += dt;
    if (this.sinceHit > 6 && this.hp < 50) this.hp = Math.min(50, this.hp + 5 * dt);
    // weapon state
    if (this.swT > 0) {
      this.swT -= dt;
      if (this.swT <= 0.19 && this.next >= 0) { this.models[this.cur].visible = false; this.cur = this.next; this.next = -1; this.models[this.cur].visible = true; }
    }
    if (this.reloading) {
      this.relT -= dt;
      if (this.relT <= 0) { const n = Math.min(this.w.mag - a.mag, a.reserve); a.mag += n; a.reserve -= n; this.reloading = false; }
    }
    const ads = inp.rmb && !sprint && this.swT <= 0 && !this.reloading;
    this.adsF = clamp(this.adsF + ((ads ? 1 : -1) * dt) / w.adsT, 0, 1);
    this.fireT -= dt;
    if (this.fireT < -0.22) this.burst = 0;
    const trig = w.auto ? inp.lmb : inp.lmbPressed;
    if (trig && this.fireT <= 0 && !this.reloading && this.swT <= 0) {
      if (a.mag > 0) this.shoot();
      else { if (inp.lmbPressed) G.audio.click(0.5); this.reload(); }
    }
    inp.lmbPressed = false;
    const mv = this.speed / 4.5;
    this.spread = (w.hip * (1 + mv * 0.9 + (this.grounded ? 0 : 2)) * (this.crouch ? 0.75 : 1) * (w.laser && this.laserOn ? 0.55 : 1)) * (1 - this.adsF) + w.ads * (1 + mv * 0.6) * this.adsF + this.burst * 0.03;
    // recoil recovery
    const rc = Math.min(1, dt * 7); this.rp -= this.rp * rc; this.ry -= this.ry * rc; this.kick -= this.kick * Math.min(1, dt * 14);
    // camera
    const cam = G.camera, bobY = Math.sin(this.bob * 2) * 0.028 * Math.min(1, mv) * (1 - this.adsF * 0.6), bobX = Math.cos(this.bob) * 0.02 * Math.min(1, mv);
    cam.position.set(p.x + cy * bobX, p.y + this.eye + bobY - this.dip, p.z - sy * bobX);
    cam.rotation.set(this.pitch + this.rp, this.yaw + this.ry, 0);
    const fov = 75 + (w.adsFov - 75) * this.adsF + this.sprintF * 4;
    if (Math.abs(cam.fov - fov) > 0.01) { cam.fov = fov; cam.updateProjectionMatrix(); }
    cam.updateMatrixWorld();
    cam.getWorldDirection(this.fwd);
    this.animate(dt, bobX, bobY);
  }
  shoot() {
    const G = this.g, w = this.w, a = this.ammo[this.cur], cam = G.camera;
    a.mag--; this.fireT = 60 / w.rpm; this.noSprint = 0.3; this.burst++;
    const sp = (this.spread * Math.PI) / 180, ang = Math.random() * 6.283, rad = Math.sqrt(Math.random()) * sp;
    const d = this._v.set(Math.cos(ang) * Math.tan(rad), Math.sin(ang) * Math.tan(rad), -1).normalize().applyQuaternion(cam.quaternion);
    G.playerShot(cam.position, d, w, this.muzzleW);
    // recoil: vertical climb plus weapon-specific horizontal drift
    const ar = 1 - this.adsF * 0.25, n = this.burst;
    this.rp += ((w.recoil * (n < 3 ? 1.15 : 0.85)) * Math.PI) / 180 * ar * (this.crouch ? 0.85 : 1);
    const hz = w.id === 'ak' && n > 4 ? Math.sin(n * 0.8) * 1.5 + (Math.random() - 0.5) : (Math.random() - 0.5) * 2;
    this.ry += ((hz * w.recoilH) * Math.PI) / 180 * ar;
    this.kick = Math.min(0.12, this.kick + w.kick);
    this.flashT = 0.045; this.flash.rotation.z = Math.random() * 6; this.flash.scale.setScalar(0.7 + Math.random() * 0.6);
    G.audio.shot(w.id); G.fx.muzzle(cam.position); G.sound(this.pos, G.world.env.shot, 'shot'); G.stats.shots++;
  }
  animate(dt, bobX, bobY) {
    const G = this.g, w = this.w, m = this.models[this.cur], A = this.adsF, h = w.hipPos;
    let x = h[0] + (0 - h[0]) * A, y = h[1] + (-w.sightY - h[1]) * A, z = h[2] + ((w.auto ? -0.36 : -0.42) - h[2]) * A;
    let rx = 0, ry = 0.035 * (1 - A), rz = 0;
    const k = 1 - A * 0.85;
    x += this.swayX * k + bobX * 0.5 * k; y += this.swayY * k + bobY * 0.45 * k - this.dip * 0.4;
    z += this.kick * (1 - A * 0.4); rx += this.kick * 1.1 * (1 - A * 0.6);
    if (this.swT > 0) { const t = Math.sin((1 - this.swT / 0.38) * Math.PI); y -= t * 0.28; rx -= t * 0.7; }
    if (this.reloading) { const t = Math.sin(Math.min(1, (1 - this.relT / w.reload) * 1.08) * Math.PI); y -= t * 0.13; rx += t * 0.55; rz += t * 0.5; x -= t * 0.03; }
    const s = this.sprintF; y -= s * 0.05; ry += s * 0.55; rx -= s * 0.2; x -= s * 0.05;
    m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
    m.updateMatrixWorld();
    // muzzle in main-scene space (for tracers and laser origin)
    const lm = this._v.copy(w.laser ? m.laser : m.muzzle).applyMatrix4(m.matrixWorld);
    this.muzzleW.copy(lm).applyQuaternion(G.camera.quaternion).add(G.camera.position);
    if (this.flashT > 0) {
      this.flashT -= dt; this.flash.visible = true;
      this.flash.position.copy(m.muzzle).applyMatrix4(m.matrixWorld); this.flash.position.z -= 0.03;
    } else this.flash.visible = false;
  }
}
