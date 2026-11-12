// Non-combatants: the hostage (rescue missions) and the high-value target (capture missions).
// Deliberately simple and robust: they stand/kneel, the HVT may run to a fallback zone when the site is
// alerted, and once secured they follow the player along the nav grid (same routes and links as guards).
import * as THREE from 'three';
import { Character } from './character.js';

const yawTo = (dx, dz) => Math.atan2(-dx, -dz);

export class Civ {
  constructor(G, kind, x, z, fallback) {
    this.g = G; this.kind = kind; this.fallback = fallback; this.hp = 100; this.dead = false; this.deadT = 0;
    this.pos = new THREE.Vector3(x, G.world.nav.height(x, z), z); this.yaw = Math.random() * 6.28;
    this.state = kind === 'hostage' ? 'held' : 'idle'; this.path = null; this.pi = 0; this.trav = null; this.rep = 0; this.moved = false; this.reachedHint = false; this.seenByPlayer = false; this.speed = 0; this.t = Math.random() * 9;
    this.ch = new Character(kind, null); G.scene.add(this.ch.root); this.sync(); this.ch.refresh();
  }
  sync() { this.ch.root.position.copy(this.pos); this.ch.root.rotation.y = this.yaw; }
  canSecure() { return !this.dead && (this.state === 'held' || this.state === 'surrender'); }
  secure() { this.state = 'follow'; this.rep = 0; this.g.audio.pickup(); }
  alarm() { // the HVT bolts for his fallback position once, when the site is alerted or he is threatened
    if (this.kind !== 'hvt' || this.state !== 'idle' || !this.fallback) return;
    const f = this.fallback.stand; this.path = this.g.world.nav.path(this.pos.x, this.pos.z, f[0], f[1]); this.pi = 0;
    if (this.path) { this.state = 'flee'; this.moved = true; this.g.sec.relocateDetail(this.fallback); }
  }
  damage(d) { if (this.dead) return; this.hp -= d; if (this.hp <= 0) { this.dead = true; this.ch.die(); } else if (this.kind === 'hvt' && this.state === 'idle') this.alarm(); }
  follow(dt, speed) {
    const p = this.pos, nav = this.g.world.nav;
    if (this.trav) { const tr = this.trav; tr.t += dt / 0.8; const t = Math.min(1, tr.t); p.x = tr.x0 + (tr.x1 - tr.x0) * t; p.z = tr.z0 + (tr.z1 - tr.z0) * t; p.y = tr.y0 + (tr.y1 - tr.y0) * t + Math.sin(Math.PI * t) * (tr.h - Math.min(tr.y0, tr.y1) + 0.1) * (tr.vault ? 1 : 0.3); if (t >= 1) { this.trav = null; this.pi++; } this.speed = 2; return false; }
    if (!this.path || this.pi >= this.path.length) return true;
    const t = this.path[this.pi];
    if (t.link) { this.trav = { x0: p.x, z0: p.z, y0: p.y, x1: t.x, z1: t.z, y1: t.y, h: t.link.h, vault: t.link.type === 'vault', t: 0 }; if (t.link.type !== 'drop') this.ch.playFull('ClimbUp_1m', { speed: 2.3 }); return false; }
    const dx = t.x - p.x, dz = t.z - p.z, d = Math.hypot(dx, dz);
    if (d < 0.25) { this.pi++; return this.pi >= this.path.length; }
    const st = Math.min(d, speed * dt); p.x += (dx / d) * st; p.z += (dz / d) * st; p.y += (nav.height(p.x, p.z) - p.y) * Math.min(1, dt * 10);
    this.yaw = yawTo(dx, dz); this.speed = speed;
    return false;
  }
  update(dt) {
    const G = this.g, P = G.player;
    if (this.dead) { if (this.deadT < 4) { this.deadT += dt; this.ch.update(dt, { speed: 0 }); } return; }
    this.t += dt; this.speed = 0;
    const dx = P.pos.x - this.pos.x, dz = P.pos.z - this.pos.z, d = Math.hypot(dx, dz);
    const sees = d < 40 && G.los(this.pos.x, this.pos.y + 1.5, this.pos.z, P.eyePos.x, P.eyePos.y, P.eyePos.z);
    this.vis = sees && d < 35; if (this.vis) { this.seenByPlayer = true; this.lastSeen = [this.pos.x, this.pos.y, this.pos.z]; }
    let crouch = false;
    if (this.state === 'held') { crouch = true; if (d < 6) this.yaw = yawTo(dx, dz); }
    else if (this.state === 'idle') { // paces a little; runs if the site is alerted or the operator shows up
      this.yaw += Math.sin(this.t * 0.4) * dt * 0.3;
      if (G.sec.level >= 2 || (sees && d < 13)) this.alarm();
      if (sees && d < 4.5) this.state = 'surrender';
    } else if (this.state === 'flee') {
      if (this.follow(dt, 4.6)) this.state = 'cower';
      if (sees && d < 3.2) { this.state = 'surrender'; this.path = null; }
    } else if (this.state === 'cower') { crouch = true; if (sees && d < 5) this.state = 'surrender'; }
    else if (this.state === 'surrender') { crouch = true; this.yaw = yawTo(dx, dz); }
    else if (this.state === 'follow') { // stay within a couple of metres of the operator
      if ((this.rep -= dt) <= 0) { this.rep = 0.45; if (d > 2.6 && !this.trav) { const pth = G.world.nav.path(this.pos.x, this.pos.z, P.pos.x, P.pos.z, 400); if (pth) { this.path = pth; this.pi = 0; } } else if (d <= 2.6) this.path = null; }
      if (d > 2.2) this.follow(dt, d > 7 ? 5.6 : 3.8); else if (!this.trav) this.yaw = yawTo(dx, dz);
      crouch = P.crouch && this.speed === 0;
    }
    if (this.moved && this.fallback && !this.reachedHint && Math.hypot(P.pos.x - this.g.mission.stage?.anchors[0].at[0], P.pos.z - this.g.mission.stage?.anchors[0].at[2]) < 7) this.reachedHint = true; // the operator finds the first location empty
    this.ch.update(dt, { speed: this.trav ? 0 : this.speed, crouch, aim: false, lean: 0 });
    this.sync();
  }
}
