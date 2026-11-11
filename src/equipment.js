// Throwable equipment: fragmentation grenades, flashbangs, smoke. Used by the player and (Elite) enemies
// through the same code path, so both sides obey the same fuse, bounce, blast and cover rules.
import * as THREE from 'three';
import { rayBoxes } from './world.js';

const FUSE = { frag: 2.8, flash: 1.9, smoke: 1.6 }, GRAV = 14;
const geo = { frag: new THREE.SphereGeometry(0.045, 10, 8), flash: new THREE.CylinderGeometry(0.03, 0.03, 0.11, 10), smoke: new THREE.CylinderGeometry(0.033, 0.033, 0.13, 10) };
const mat = { frag: new THREE.MeshStandardMaterial({ color: 0x2f3a26, roughness: 0.6, metalness: 0.3 }), flash: new THREE.MeshStandardMaterial({ color: 0x8a8f94, roughness: 0.4, metalness: 0.7 }), smoke: new THREE.MeshStandardMaterial({ color: 0x5b6470, roughness: 0.5, metalness: 0.5 }) };

export class Grenades {
  constructor(G) { this.g = G; this.list = []; this.smokes = []; this._v = new THREE.Vector3(); }
  spawn(type, pos, vel, owner) {
    const m = new THREE.Mesh(geo[type], mat[type]); m.position.copy(pos); m.castShadow = true; this.g.scene.add(m);
    this.list.push({ type, pos, vel, owner, fuse: FUSE[type], mesh: m, rest: false });
    this.g.audio.swish();
  }
  update(dt) {
    const G = this.g, cols = G.world.colliders;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const n = this.list[i], p = n.pos, v = n.vel;
      n.fuse -= dt;
      if (!n.rest) {
        v.y -= GRAV * dt;
        const sp = v.length(), step = sp * dt;
        const h = step > 1e-4 ? rayBoxes(cols, p.x, p.y, p.z, v.x / sp, v.y / sp, v.z / sp, step + 0.05, 'solid') : null;
        if (h) { // bounce off geometry
          const dot = v.x * h.nx + v.y * h.ny + v.z * h.nz;
          p.addScaledVector(v, Math.max(0, (h.d - 0.05) / sp)); v.x -= 1.35 * dot * h.nx; v.y -= 1.35 * dot * h.ny; v.z -= 1.35 * dot * h.nz; v.multiplyScalar(0.72);
          if (sp > 2.5) { G.audio.bounce(Math.min(0.3, sp * 0.03)); if (n.owner === 'player') G.sound(p, 7, 'step'); }
        } else p.addScaledVector(v, dt);
        if (p.y < 0.05) { p.y = 0.05; if (Math.abs(v.y) > 1.5) G.audio.bounce(0.15); v.y *= -0.3; v.x *= 0.6; v.z *= 0.6; }
        if (v.lengthSq() < 0.09 && p.y < 0.08) n.rest = true;
        n.mesh.position.copy(p); n.mesh.rotation.x += dt * sp * 2; n.mesh.rotation.z += dt * sp;
      }
      if (n.fuse <= 0) { this.detonate(n); G.scene.remove(n.mesh); this.list.splice(i, 1); }
    }
    for (let i = this.smokes.length - 1; i >= 0; i--) {
      const s = this.smokes[i]; s.t -= dt;
      if ((s.puff -= dt) <= 0 && s.t > 2.5) { s.puff = 0.22; G.fx.puff(this._v.set(s.x + (Math.random() - 0.5) * 4, s.y + 0.4 + Math.random() * 2, s.z + (Math.random() - 0.5) * 4), 3.2 + Math.random() * 1.6, 3.6, 0x9aa0a4, 0.12, 0.6); }
      if (s.t <= 0) { const k = cols.indexOf(s.col); if (k >= 0) cols.splice(k, 1); this.smokes.splice(i, 1); }
    }
  }
  detonate(n) {
    const G = this.g, P = G.player, p = n.pos, by = p.y + 0.35, dp = Math.hypot(P.pos.x - p.x, P.pos.z - p.z);
    if (n.type === 'frag') {
      G.fx.explosion(p); G.audio.explosion(dp); G.sound(p, 70, 'explosion');
      const blast = (x, y, z, h) => { // damage 0..150, blocked by solid cover
        const d = Math.hypot(x - p.x, y + h * 0.5 - by, z - p.z); if (d > 8) return 0;
        const ex = G.losB(p.x, by, p.z, x, y + h * 0.55, z) ? 1 : G.losB(p.x, by, p.z, x, y + h * 0.9, z) ? 0.45 : 0;
        return 150 * Math.pow(1 - d / 8, 1.3) * ex;
      };
      for (const e of G.enemies) { if (e.dead) continue; const d = blast(e.pos.x, e.pos.y, e.pos.z, e.crouch ? 1.1 : 1.75); if (d > 1) { e.damage(d, p, 'blast'); if (!e.dead) e.supp = 1.5; } }
      const d = blast(P.pos.x, P.pos.y, P.pos.z, P.height);
      if (d > 1) P.damage(d, p, { name: n.owner === 'player' ? 'your own grenade' : 'a fragmentation grenade', dist: dp, x: p.x, z: p.z, blast: true });
      if (dp < 25) P.shake = Math.max(P.shake, 1.2 * (1 - dp / 25));
    } else if (n.type === 'flash') {
      G.fx.boom.position.set(p.x, by, p.z); G.fx.boom.intensity = 2500; G.sound(p, 40, 'explosion');
      for (const e of G.enemies) {
        if (e.dead) continue;
        const d = Math.hypot(e.pos.x - p.x, e.pos.z - p.z); if (d > 17) continue;
        const eye = e.ch.eye(this._v); if (!G.los(p.x, by, p.z, eye.x, eye.y, eye.z)) continue;
        let a = Math.atan2(-(p.x - e.pos.x), -(p.z - e.pos.z)) - e.yaw; while (a > Math.PI) a -= 6.2832; while (a < -Math.PI) a += 6.2832;
        const dur = 5 * (1 - d / 19) * (Math.abs(a) < 1.7 ? 1 : 0.4);
        if (dur > 0.6) e.flashbang(dur);
      }
      let amt = 0;
      if (dp < 22 && G.los(p.x, by, p.z, P.eyePos.x, P.eyePos.y, P.eyePos.z)) {
        const dot = (P.fwd.x * (p.x - P.eyePos.x) + P.fwd.y * (by - P.eyePos.y) + P.fwd.z * (p.z - P.eyePos.z)) / (Math.hypot(p.x - P.eyePos.x, by - P.eyePos.y, p.z - P.eyePos.z) || 1);
        amt = 2.8 * (1 - dp / 24) * (dot > 0.2 ? 1 : dot > -0.3 ? 0.55 : 0.25); P.blind = Math.max(P.blind, amt);
      }
      G.audio.flashbang(amt);
    } else {
      const col = { x0: p.x - 2.8, x1: p.x + 2.8, y0: 0, y1: p.y + 3.4, z0: p.z - 2.8, z1: p.z + 2.8, solid: false, bullet: false, sight: true, smoke: true };
      G.world.colliders.push(col); this.smokes.push({ x: p.x, y: p.y, z: p.z, t: 15, puff: 0, col }); G.audio.noise(1.2, { f: 3000, f2: 800, type: 'bandpass', q: 1, vol: 0.2 });
      for (let i = 0; i < 10; i++) G.fx.puff(this._v.set(p.x + (Math.random() - 0.5) * 3.5, p.y + 0.4 + Math.random() * 2, p.z + (Math.random() - 0.5) * 3.5), 3.5, 4, 0x9aa0a4, 0.12, 0.6);
    }
  }
}
