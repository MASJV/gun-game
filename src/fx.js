// Lightweight pooled effects: tracers, particles, bullet decals, muzzle light.
import * as THREE from 'three';

const N = 320;
export class FX {
  constructor(scene) {
    this.tr = [];
    const tg = new THREE.BoxGeometry(0.02, 0.02, 1); tg.translate(0, 0, 0.5);
    for (let i = 0; i < 28; i++) {
      const m = new THREE.Mesh(tg, new THREE.MeshBasicMaterial({ color: 0xffe2a0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
      m.visible = false; m.life = 0; scene.add(m); this.tr.push(m);
    }
    this.ti = 0;
    this.pp = new Float32Array(N * 3).fill(-999); this.pc = new Float32Array(N * 3); this.pv = new Float32Array(N * 3); this.pl = new Float32Array(N);
    const pg = (this.pg = new THREE.BufferGeometry());
    pg.setAttribute('position', new THREE.BufferAttribute(this.pp, 3)); pg.setAttribute('color', new THREE.BufferAttribute(this.pc, 3));
    const pts = new THREE.Points(pg, new THREE.PointsMaterial({ size: 0.07, vertexColors: true, transparent: true, depthWrite: false }));
    pts.frustumCulled = false; scene.add(pts);
    this.pi = 0;
    this.dec = [];
    const dg = new THREE.PlaneGeometry(0.13, 0.13), dm = new THREE.MeshBasicMaterial({ color: 0x08090a, transparent: true, opacity: 0.85, polygonOffset: true, polygonOffsetFactor: -4 });
    for (let i = 0; i < 48; i++) { const m = new THREE.Mesh(dg, dm); m.visible = false; scene.add(m); this.dec.push(m); }
    this.di = 0;
    this.flash = new THREE.PointLight(0xffc070, 0, 16, 1.5); scene.add(this.flash);
    this.boom = new THREE.PointLight(0xffb060, 0, 40, 1.4); scene.add(this.boom);
    // soft smoke sprites (explosions, smoke grenades)
    const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'), gr = x.createRadialGradient(32, 32, 2, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,0.9)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c); this.puffs = [];
    for (let i = 0; i < 48; i++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0, depthWrite: false, color: 0x888888 })); s.visible = false; s.life = 0; scene.add(s); this.puffs.push(s); }
    this.pfi = 0;
    this._v = new THREE.Vector3();
  }
  tracer(a, b, hex = 0xffe2a0) {
    const m = this.tr[this.ti++ % this.tr.length];
    m.position.copy(a); m.lookAt(b); m.scale.z = Math.max(0.1, a.distanceTo(b));
    m.material.color.setHex(hex); m.material.opacity = 0.55; m.visible = true; m.life = 0.07;
  }
  spray(p, n, count, speed, r, g, b, life) {
    for (let k = 0; k < count; k++) {
      const i = this.pi++ % N, j = i * 3;
      this.pp[j] = p.x; this.pp[j + 1] = p.y; this.pp[j + 2] = p.z;
      this.pv[j] = (n.x + (Math.random() - 0.5) * 1.4) * speed * Math.random();
      this.pv[j + 1] = (n.y + (Math.random() - 0.3) * 1.4) * speed * Math.random();
      this.pv[j + 2] = (n.z + (Math.random() - 0.5) * 1.4) * speed * Math.random();
      const v = 0.6 + Math.random() * 0.4;
      this.pc[j] = r * v; this.pc[j + 1] = g * v; this.pc[j + 2] = b * v; this.pl[i] = life * (0.5 + Math.random() * 0.5);
    }
  }
  impact(p, n, mat = 'concrete') { // surface-dependent debris
    if (mat === 'metal') { this.spray(p, n, 6, 7, 1, 0.85, 0.45, 0.22); this.spray(p, n, 2, 2, 0.5, 0.5, 0.5, 0.3); }
    else if (mat === 'wood') { this.spray(p, n, 7, 3, 0.55, 0.38, 0.22, 0.5); this.spray(p, n, 2, 4, 0.75, 0.6, 0.4, 0.3); }
    else if (mat === 'dirt') { this.spray(p, n, 9, 2.6, 0.42, 0.34, 0.25, 0.55); }
    else if (mat === 'plastic') { this.spray(p, n, 5, 3, 0.9, 0.78, 0.2, 0.35); }
    else { this.spray(p, n, 7, 3.2, 0.75, 0.73, 0.68, 0.45); this.spray(p, n, 3, 6, 1, 0.8, 0.4, 0.15); }
    this.lastMat = mat;
    const m = this.dec[this.di++ % this.dec.length];
    m.position.set(p.x + n.x * 0.012, p.y + n.y * 0.012, p.z + n.z * 0.012);
    m.lookAt(this._v.set(p.x + n.x, p.y + n.y, p.z + n.z)); m.rotation.z = Math.random() * 6; m.scale.setScalar(1); m.visible = true;
  }
  blood(p, n) { this.spray(p, n, 10, 2.6, 0.5, 0.04, 0.03, 0.5); }
  muzzle(p, k = 1) { this.flash.position.copy(p); this.flash.intensity = 45 * k; }
  shell(p, d) { this.spray(p, d, 1, 2.6, 0.9, 0.68, 0.25, 0.7); }
  puff(p, size, life, hex = 0x8a8a8a, rise = 0.4, op = 0.5) {
    const s = this.puffs[this.pfi++ % this.puffs.length];
    s.position.copy(p); s.scale.setScalar(size * 0.5); s.size = size; s.life = s.max = life; s.rise = rise; s.op = op; s.material.color.setHex(hex); s.material.rotation = Math.random() * 6; s.visible = true;
  }
  explosion(p) {
    this.boom.position.set(p.x, p.y + 0.6, p.z); this.boom.intensity = 900;
    const up = this._v.set(0, 1, 0);
    this.spray(p, up, 40, 14, 1, 0.7, 0.25, 0.5); this.spray(p, up, 30, 9, 0.35, 0.33, 0.3, 1.1);
    for (let i = 0; i < 6; i++) this.puff(new THREE.Vector3(p.x + (Math.random() - 0.5) * 2, p.y + 0.5 + Math.random(), p.z + (Math.random() - 0.5) * 2), 3 + Math.random() * 2, 2.2 + Math.random(), 0x55504a, 0.9, 0.55);
    const m = this.dec[this.di++ % this.dec.length]; m.position.set(p.x, Math.max(0.02, p.y - 0.04), p.z); m.rotation.set(-Math.PI / 2, 0, Math.random() * 6); m.scale.setScalar(14); m.visible = true;
  }
  update(dt) {
    for (const m of this.tr) if (m.visible) { m.life -= dt; m.material.opacity = Math.max(0, m.life / 0.07) * 0.55; if (m.life <= 0) m.visible = false; }
    const { pp, pv, pl } = this;
    for (let i = 0; i < N; i++) {
      if (pl[i] <= 0) continue;
      const j = i * 3;
      pl[i] -= dt; pv[j + 1] -= 9 * dt;
      pp[j] += pv[j] * dt; pp[j + 1] += pv[j + 1] * dt; pp[j + 2] += pv[j + 2] * dt;
      if (pl[i] <= 0) pp[j + 1] = -999;
    }
    this.pg.attributes.position.needsUpdate = true; this.pg.attributes.color.needsUpdate = true;
    if (this.flash.intensity > 0) this.flash.intensity = Math.max(0, this.flash.intensity - dt * 700);
    if (this.boom.intensity > 0) this.boom.intensity = Math.max(0, this.boom.intensity - dt * 4500);
    for (const s of this.puffs) if (s.visible) {
      s.life -= dt; const k = 1 - s.life / s.max;
      s.scale.setScalar(s.size * (0.5 + k * 0.7)); s.position.y += s.rise * dt; s.material.opacity = s.op * Math.min(1, k * 6) * Math.min(1, (s.life / s.max) * 2.2);
      if (s.life <= 0) s.visible = false;
    }
  }
}
