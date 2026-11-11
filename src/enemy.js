// Enemy AI: one finite-state machine, three behaviour profiles.
// Fairness rules enforced here: enemies only know what they see (line of sight + view cone),
// hear (sound events with positional error) or are told by a nearby ally after a delay.
// They only fire while they actually see the player, with angular aim error. Health, damage
// and accuracy never change during a mission.
import * as THREE from 'three';
import { rayBoxes, rnd } from './world.js';

export const PROFILES = {
  easy: { label: 'EASY', react: [0.9, 1.5], detect: 0.7, spread: 4.6, settle: 1.6, burst: [2, 3], pause: [0.9, 1.7], cover: 0.2, flank: 0, push: 0.3, retreat: 0, hold: [1, 2.5], memory: 6, searchPts: [1, 2], searchTime: 9, share: 11, callout: 2.6, coord: 0, mistake: 0.3, decide: [0.9, 1.5], hear: 0.75, peek: [2.5, 4.5], investigate: 0.5 },
  smart: { label: 'SMART', react: [0.45, 0.85], detect: 1, spread: 3.4, settle: 1.1, burst: [2, 4], pause: [0.6, 1.2], cover: 0.7, flank: 0.3, push: 0.35, retreat: 0.35, hold: [1.5, 3.5], memory: 14, searchPts: [2, 3], searchTime: 16, share: 20, callout: 1.3, coord: 0.4, mistake: 0.1, decide: [0.6, 1.0], hear: 1, peek: [1.2, 3], investigate: 0.9 },
  human: { label: 'HUMAN-LIKE', react: [0.32, 0.8], detect: 1.1, spread: 3.0, settle: 0.9, burst: [1, 5], pause: [0.4, 1.4], cover: 0.85, flank: 0.6, push: 0.45, retreat: 0.6, hold: [1, 4.5], memory: 20, searchPts: [3, 5], searchTime: 24, share: 26, callout: 0.9, coord: 0.7, mistake: 0.08, decide: [0.4, 0.9], hear: 1.15, peek: [0.8, 3.5], investigate: 1 },
};
const TYPES = {
  guard: { name: 'Patrol guard', aggr: 0.5, caut: 0.5, uni: 0x3a4133, vest: 0x2a2e26 },
  aggressor: { name: 'Assault trooper', aggr: 0.85, caut: 0.25, uni: 0x43352c, vest: 0x2b2420 },
  cautious: { name: 'Marksman', aggr: 0.25, caut: 0.85, uni: 0x2f373e, vest: 0x22282d },
};
export const DMG = 15; // enemy rifle damage per hit, identical in every mode

const rr = (a) => rnd(a[0], a[1]), ri = (a) => Math.floor(rnd(a[0], a[1] + 1));
const angd = (a, b) => { let d = a - b; while (d > Math.PI) d -= 6.2832; while (d < -Math.PI) d += 6.2832; return d; };
const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) * 1.4;
const yawTo = (dx, dz) => Math.atan2(-dx, -dz);
const N8 = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1], [2, 0], [-2, 0], [0, 2], [0, -2]];

const GEO = {}, MAT = {};
const geo = (w, h, d) => GEO[w + '_' + h + '_' + d] || (GEO[w + '_' + h + '_' + d] = new THREE.BoxGeometry(w, h, d));
const mat = (hex, em) => MAT[hex + (em ? 'e' : '')] || (MAT[hex + (em ? 'e' : '')] = em ? new THREE.MeshBasicMaterial({ color: hex }) : new THREE.MeshLambertMaterial({ color: hex }));
function part(parent, hex, w, h, d, x, y, z, em) {
  const m = new THREE.Mesh(geo(w, h, d), mat(hex, em)); m.position.set(x, y, z); m.castShadow = !em; parent.add(m); return m;
}

export class Enemy {
  constructor(G, x, z, route, typeId, profile) {
    this.g = G; this.pr = profile; this.type = TYPES[typeId];
    const j = profile === PROFILES.human ? 0.22 : 0.08; // individual personality spread
    this.aggr = Math.max(0.05, Math.min(1, this.type.aggr + rnd(-j, j))); this.caut = Math.max(0.05, Math.min(1, this.type.caut + rnd(-j, j)));
    this.pos = new THREE.Vector3(x, 0, z); this.yaw = rnd(6.28); this.hp = 100; this.dead = false; this.deathT = 0;
    this.route = route; this.wi = 0; this.dir = Math.random() < 0.5 ? 1 : -1; this.waitT = rnd(0, 3);
    this.state = 'PATROL'; this.stateT = 0; this.phase = ''; this.t = rnd(10);
    this.path = null; this.pi = 0; this.dest = null;
    this.lkp = new THREE.Vector3(); this.lkpVel = new THREE.Vector3(); this.hasLkp = false; this.lkpAge = 99;
    this.detect = 0; this.los = false; this.seeing = false; this.seenT = 0; this.unseen = 99; this.pd = 99; this.percT = rnd(0.15);
    this.react = 0; this.burst = 0; this.shotT = 0; this.ammo = 30; this.reloading = false; this.reloadT = 0;
    this.decT = 0; this.holdT = 0; this.waited = 0; this.flinch = 0; this.coverCool = 0; this.flankCool = 0; this.calloutT = 0; this.calloutCool = 0;
    this.alerted = false; this.crouch = false; this.crouchF = 0; this.walk = 0; this.moved = 0; this.flashT = 0;
    this.sus = new THREE.Vector3(); this.susT = 0; this.after = 'check'; this.search = []; this.searchEnd = 0;
    this.hb = [{ bullet: true }, { bullet: true }];
    this.build();
  }
  build() {
    const T = this.type, root = (this.root = new THREE.Group()); root.rotation.order = 'YXZ';
    const body = (this.body = new THREE.Group()); root.add(body);
    const up = (this.up = new THREE.Group()); up.position.y = 0.85; body.add(up);
    part(up, T.uni, 0.46, 0.62, 0.26, 0, 0.31, 0); part(up, T.vest, 0.5, 0.38, 0.31, 0, 0.38, 0);
    part(up, 0x7d6352, 0.22, 0.24, 0.22, 0, 0.75, 0); part(up, T.vest, 0.27, 0.14, 0.27, 0, 0.89, 0); part(up, 0x9a5a28, 0.17, 0.035, 0.02, 0, 0.79, -0.115, true);
    const arms = (this.arms = new THREE.Group()); arms.position.set(0, 0.5, 0); up.add(arms);
    part(arms, T.uni, 0.11, 0.11, 0.46, 0.23, -0.06, -0.2); const la = part(arms, T.uni, 0.11, 0.11, 0.5, -0.17, -0.06, -0.26); la.rotation.y = -0.45;
    part(arms, 0x131517, 0.06, 0.09, 0.8, 0.1, -0.02, -0.45); part(arms, 0x131517, 0.04, 0.16, 0.06, 0.1, -0.12, -0.4);
    this.flash = part(arms, 0xffd070, 0.2, 0.2, 0.2, 0.1, -0.02, -0.95, true); this.flash.visible = false;
    this.legs = [-1, 1].map((s) => { const p = new THREE.Group(); p.position.set(s * 0.12, 0.85, 0); body.add(p); part(p, T.uni, 0.18, 0.85, 0.2, 0, -0.425, 0); return p; });
    this.g.scene.add(root); this.sync();
  }
  sync() { this.root.position.set(this.pos.x, this.dead ? 0.12 * this.deathT : 0, this.pos.z); this.root.rotation.y = this.yaw; }
  eyeY() { return this.crouch ? 1.1 : 1.6; }
  combat() { const s = this.state; return s === 'ENGAGE' || s === 'SEEK_COVER' || s === 'REPOSITION' || s === 'RETREAT'; }
  set(s, phase = '') { this.state = s; this.stateT = 0; this.phase = phase; if (s !== 'SEEK_COVER' && s !== 'RETREAT' && s !== 'ENGAGE') this.crouch = false; }
  goTo(x, z) {
    this.path = this.g.world.nav.path(this.pos.x, this.pos.z, x, z); this.pi = 0;
    this.dest = this.path && this.path.length ? this.path[this.path.length - 1] : null;
    return !!this.path;
  }
  follow(dt, speed) {
    if (!this.path || this.pi >= this.path.length) return true;
    const t = this.path[this.pi], dx = t.x - this.pos.x, dz = t.z - this.pos.z, d = Math.hypot(dx, dz);
    if (d < 0.2) { this.pi++; return this.pi >= this.path.length; }
    const st = Math.min(d, speed * dt);
    this.pos.x += (dx / d) * st; this.pos.z += (dz / d) * st; this.moved = speed; this.moveYaw = yawTo(dx, dz);
    return false;
  }
  // ---- perception ----
  canSee() {
    const G = this.g, P = G.player, dx = P.pos.x - this.pos.x, dz = P.pos.z - this.pos.z, d = Math.hypot(dx, dz);
    if (P.dead || d > G.world.env.viewRange) return false;
    const half = this.alerted || this.combat() ? 1.85 : 1.05;
    if (d > 2 && Math.abs(angd(yawTo(dx, dz), this.yaw)) > half) return false;
    const ey = this.eyeY(), py = P.pos.y;
    return G.los(this.pos.x, ey, this.pos.z, P.pos.x, py + P.height * 0.9, P.pos.z) || G.los(this.pos.x, ey, this.pos.z, P.pos.x, py + P.height * 0.45, P.pos.z);
  }
  hear(pos, kind, d) {
    if (this.dead || this.seeing) return;
    const n = kind === 'step' ? 1.5 : 1 + d * 0.12, px = pos.x + rnd(-n, n), pz = pos.z + rnd(-n, n);
    const idle = !this.combat(), calm = this.state === 'PATROL' || this.state === 'SEARCH';
    if (kind === 'ally') { if (calm) { this.alerted = true; this.suspect(px, pz, 'investigate', rnd(0.5, 1.5)); } return; }
    if (kind === 'shot') {
      this.alerted = true;
      if (this.lkpAge > 1.5 || !this.hasLkp) { this.lkp.set(px, 0, pz); this.lkpVel.set(0, 0, 0); this.lkpAge = 0.5; this.hasLkp = true; }
      if (calm) this.suspect(px, pz, 'investigate', rnd(0.4, 1.2) / this.pr.detect);
      else if (this.state === 'SUSPICIOUS') { this.sus.set(px, 0, pz); this.after = 'investigate'; }
      else if (this.state === 'INVESTIGATE' && Math.hypot(px - this.inv.x, pz - this.inv.z) > 8) this.goInvestigate(px, pz);
    } else if (calm) this.suspect(px, pz, 'check', rnd(1, 2));
    else if (!idle && this.lkpAge > 2) { this.lkp.set(px, 0, pz); this.lkpAge = 1; }
  }
  suspect(x, z, after, t) { this.sus.set(x, 0, z); this.after = after; this.susT = t; this.set('SUSPICIOUS'); this.path = null; }
  onAlert(x, z) { // told by an ally: second-hand, noisy position
    if (this.dead || this.seeing) return;
    this.alerted = true;
    if (this.lkpAge > 2 || !this.hasLkp) { this.lkp.set(x, 0, z); this.lkpVel.set(0, 0, 0); this.lkpAge = 1; this.hasLkp = true; }
    if (!this.combat()) this.suspect(x, z, Math.random() < this.pr.coord ? 'flank' : 'investigate', rnd(0.3, 1.2));
  }
  damage(d, from, head) {
    if (this.dead) return;
    this.hp -= d; this.flinch = 0.35;
    if (this.hp <= 0) { this.dead = true; this.crouch = false; this.flash.visible = false; this.dest = null; this.g.onKill(this); return; }
    if (!this.seeing) { // shot from an unseen position: rough idea of the direction only
      const dist = Math.hypot(from.x - this.pos.x, from.z - this.pos.z), n = 3 + dist * 0.1;
      this.alerted = true; this.detect = Math.max(this.detect, 0.6);
      this.lkp.set(from.x + rnd(-n, n), 0, from.z + rnd(-n, n)); this.lkpAge = 0.5; this.hasLkp = true;
      this.react = rr(this.pr.react) * 0.6;
      if (this.state !== 'SEEK_COVER' && this.state !== 'RETREAT') { if (Math.random() < this.pr.cover + 0.2) this.goCover(); else this.engage(); }
    }
  }
  rayHit(o, d, max) {
    const p = this.pos, c = this.crouchF > 0.5, b = this.hb[0], h = this.hb[1], top = c ? 1.0 : 1.45;
    b.x0 = p.x - 0.3; b.x1 = p.x + 0.3; b.z0 = p.z - 0.3; b.z1 = p.z + 0.3; b.y0 = 0; b.y1 = top;
    h.x0 = p.x - 0.16; h.x1 = p.x + 0.16; h.z0 = p.z - 0.16; h.z1 = p.z + 0.16; h.y0 = top; h.y1 = top + 0.34;
    const r = rayBoxes(this.hb, o.x, o.y, o.z, d.x, d.y, d.z, max, 'bullet');
    return r ? { d: r.d, head: r.c === h } : null;
  }
  // ---- tactical helpers ----
  findCover(minT, maxR, far) {
    const G = this.g, nav = G.world.nav, T = this.lkp;
    let best = null, bs = -1e9;
    for (let i = 0; i < 40; i++) {
      const a = rnd(6.283), r = rnd(1.5, maxR), c = nav.snap(this.pos.x + Math.cos(a) * r, this.pos.z + Math.sin(a) * r);
      if (!c) continue;
      const dT = Math.hypot(c.x - T.x, c.z - T.z);
      if (dT < minT || G.los(c.x, 0.8, c.z, T.x, 1.5, T.z) || G.claimed(c, this)) continue;
      let peek = null;
      for (const [ox, oz] of N8) { const q = nav.snap(c.x + ox, c.z + oz); if (q && G.los(q.x, 1.5, q.z, T.x, 1.4, T.z) && nav.line(c, q)) { peek = q; break; } }
      const s = -Math.hypot(c.x - this.pos.x, c.z - this.pos.z) + (peek ? 4 : 0) - Math.abs(dT - 16) * 0.25 + (far ? dT * 0.8 : 0) - (dT < this.pd - 3 ? 3 : 0);
      if (s > bs) { bs = s; best = { x: c.x, z: c.z, peek }; }
    }
    return best;
  }
  engage() { this.set('ENGAGE'); this.path = null; this.holdT = rr(this.pr.hold); this.unseen = Math.min(this.unseen, 0); this.waited = 0; this.decT = rr(this.pr.decide); this.wantCrouch = Math.random() < 0.3 * this.caut + 0.1; }
  goCover() {
    const c = this.findCover(5, 14, false);
    if (!c || !this.goTo(c.x, c.z)) { this.engage(); this.wantCrouch = true; return; }
    this.peekAt = c.peek; this.coverCool = 6; this.set('SEEK_COVER', 'move');
  }
  goRetreat() {
    const c = this.findCover(Math.min(this.pd + 6, 30), 22, true);
    if (!c || !this.goTo(c.x, c.z)) return this.goCover();
    this.peekAt = null; this.coverCool = 8; this.set('RETREAT', 'move');
  }
  goFlank() {
    const G = this.g, nav = G.world.nav, L = this.lkp, base = Math.atan2(this.pos.z - L.z, this.pos.x - L.x);
    for (let i = 0; i < 8; i++) {
      const a = base + (Math.random() < 0.5 ? -1 : 1) * rnd(1.0, 1.9), r = rnd(8, 16), c = nav.snap(L.x + Math.cos(a) * r, L.z + Math.sin(a) * r);
      if (c && !G.claimed(c, this) && this.goTo(c.x, c.z)) { this.flankCool = 10; this.set('REPOSITION'); return; }
    }
    this.goInvestigate(L.x, L.z);
  }
  goPush() { // close the distance, stopping short of the last known position
    if (!this.goTo(this.lkp.x, this.lkp.z)) return this.engage();
    const L = this.lkp; let n = this.path.length;
    while (n > 1 && Math.hypot(this.path[n - 1].x - L.x, this.path[n - 1].z - L.z) < 11) n--;
    this.path.length = n; this.dest = this.path[n - 1]; this.set('REPOSITION');
  }
  goInvestigate(x, z) {
    const c = this.g.world.nav.nearest(x, z);
    if (!c || !this.goTo(c.x, c.z)) return this.startSearch(this.pos.x, this.pos.z);
    this.inv = c; this.set('INVESTIGATE');
  }
  startSearch(x, z) {
    const G = this.g, nav = G.world.nav, pr = this.pr, n = ri(pr.searchPts), wrong = Math.random() < pr.mistake;
    this.search = [];
    const v = this.lkpVel, vl = Math.hypot(v.x, v.z);
    for (let i = 0; i < n; i++) {
      let best = null;
      for (let k = 0; k < (pr === PROFILES.human ? 5 : 2); k++) {
        let a = rnd(6.283), r = wrong ? rnd(9, 17) : rnd(3, 11), cx = x + Math.cos(a) * r, cz = z + Math.sin(a) * r;
        // first guess: the direction the player was last SEEN moving (not their real position)
        if (i === 0 && vl > 1.5 && pr !== PROFILES.easy) { cx = x + (v.x / vl) * rnd(5, 10) + rnd(-2, 2); cz = z + (v.z / vl) * rnd(5, 10) + rnd(-2, 2); }
        const c = nav.snap(cx, cz);
        if (!c) continue;
        if (!best) best = c;
        if (!G.los(c.x, 1.2, c.z, x, 1.4, z)) { best = c; break; } // prefer hidden corners
      }
      if (best) this.search.push(best);
    }
    this.searchEnd = this.t + pr.searchTime; this.waitT = rnd(0.5, 1.5); this.path = null; this.set('SEARCH');
  }
  resumePatrol() { this.alerted = false; this.set('PATROL'); const w = this.route[this.wi]; this.goTo(w[0], w[1]); this.waitT = 0; }
  decide() {
    const pr = this.pr, d = this.pd, low = this.hp < 40;
    const choose = (w) => { let t = 0; for (const k in w) t += w[k]; let r = Math.random() * t; for (const k in w) { r -= w[k]; if (r <= 0) return k; } return 'hold'; };
    if (this.seeing) {
      const c = choose({
        hold: 1 + pr.mistake * 4,
        cover: pr.cover * (0.5 + this.caut) * (low ? 2 : 1) * (this.reloading || this.ammo < 6 ? 2.5 : 1) * (this.coverCool > 0 ? 0.15 : 1),
        flank: d > 9 ? pr.flank * (0.4 + this.aggr) * (this.flankCool > 0 ? 0.2 : 1) : 0,
        push: d > 22 ? pr.push * (0.4 + this.aggr) : 0,
        retreat: low ? pr.retreat * (0.4 + this.caut) * 1.5 : 0,
      });
      if (c === 'cover') this.goCover(); else if (c === 'flank') this.goFlank(); else if (c === 'push') this.goPush(); else if (c === 'retreat') this.goRetreat();
      else this.wantCrouch = Math.random() < 0.25 + this.caut * 0.3;
    } else {
      if (this.unseen < this.holdT) return; // keep watching where the player disappeared
      if (this.lkpAge > pr.memory) return this.startSearch(this.lkp.x, this.lkp.z);
      const c = choose({
        push: 0.3 + this.aggr, flank: pr.flank * (0.5 + this.aggr) * 1.2 * (this.flankCool > 0 ? 0.3 : 1),
        wait: (0.2 + this.caut) * 0.8 * (this.waited < 2 ? 1 : 0.15), cover: this.coverCool > 0 ? 0 : pr.cover * this.caut * 0.6,
      });
      if (c === 'push') this.goInvestigate(this.lkp.x, this.lkp.z); else if (c === 'flank') this.goFlank(); else if (c === 'cover') this.goCover();
      else { this.holdT = this.unseen + rr(pr.hold); this.waited++; }
    }
  }
  fire() {
    const G = this.g, P = G.player, pr = this.pr;
    this.ammo--;
    const sy = Math.sin(this.yaw), cy = Math.cos(this.yaw), ox = this.pos.x - sy * 0.55, oy = this.eyeY() - 0.12, oz = this.pos.z - cy * 0.55;
    let dx = P.pos.x - ox, dy = P.pos.y + P.height * 0.6 - oy, dz = P.pos.z - oz;
    const sp = (pr.spread * (1 + this.pd / 40) * (1 + (Math.min(P.speed, 7) / 7) * 0.8) * (1 + Math.max(0, 1 - this.seenT / pr.settle) * 0.9) * (this.flinch > 0 ? 1.6 : 1) * (P.crouch ? 1.15 : 1) * Math.PI) / 180;
    const yaw = Math.atan2(dx, dz) + gauss() * sp, pit = Math.atan2(dy, Math.hypot(dx, dz)) + gauss() * sp * 0.7, cp = Math.cos(pit);
    dx = Math.sin(yaw) * cp; dy = Math.sin(pit); dz = Math.cos(yaw) * cp;
    const wh = rayBoxes(G.world.colliders, ox, oy, oz, dx, dy, dz, 120, 'bullet'), wd = wh ? wh.d : 120;
    const pb = G.playerBox(), ph = rayBoxes(pb, ox, oy, oz, dx, dy, dz, wd, 'bullet');
    const d = ph ? ph.d : wd, a = G.v1.set(ox, oy, oz), b = G.v2.set(ox + dx * d, oy + dy * d, oz + dz * d);
    G.fx.tracer(a, b, 0xffb070);
    if (ph) P.damage(DMG, this.pos, { name: this.type.name, dist: this.pd, x: this.pos.x, z: this.pos.z });
    else { if (wh) G.fx.impact(b, G.v3.set(wh.nx, wh.ny, wh.nz)); G.nearMiss(ox, oy, oz, dx, dy, dz); }
    this.flash.visible = true; this.flashT = 0.05;
    G.enemyShotSound(this); G.sound(this.pos, 30, 'ally', this);
  }
  // ---- main update ----
  update(dt) {
    const G = this.g, P = G.player, pr = this.pr;
    if (this.dead) { if (this.deathT < 1) { this.deathT = Math.min(1, this.deathT + dt * 2.4); this.root.rotation.x = this.deathT * 1.45; this.sync(); } return; }
    this.t += dt; this.stateT += dt; this.moved = 0;
    this.flinch -= dt; this.coverCool -= dt; this.flankCool -= dt; this.calloutCool -= dt;
    if ((this.percT -= dt) <= 0) { this.percT = 0.1 + Math.random() * 0.05; this.los = this.canSee(); }
    const dxp = P.pos.x - this.pos.x, dzp = P.pos.z - this.pos.z; this.pd = Math.hypot(dxp, dzp);
    if (this.los) {
      let rate = pr.detect * G.world.env.detect * (2.2 * (1 - this.pd / G.world.env.viewRange) + 0.25);
      if (this.pd < 6) rate *= 3; if (P.crouch) rate *= 0.55; if (P.speed > 5.5) rate *= 1.4; else if (P.speed < 0.5) rate *= 0.8;
      if (this.alerted) rate *= 3;
      this.detect = Math.min(1, this.detect + rate * dt);
    } else this.detect = Math.max(0, this.detect - 0.3 * dt);
    const was = this.seeing;
    this.seeing = this.los && this.detect >= 1;
    if (this.seeing) {
      this.lkp.copy(P.pos); this.lkpVel.copy(P.vel); this.lkpAge = 0; this.hasLkp = true; this.unseen = 0; this.seenT += dt;
      if (!was) { // acquisition: human-scale reaction delay before the first shot
        this.react = rr(pr.react) * (this.combat() ? 0.45 : 1) + (Math.random() < pr.mistake ? rnd(0.5, 1.2) : 0);
        this.alerted = true;
        if (!this.combat()) this.engage();
        if (this.calloutCool <= 0) { this.calloutT = pr.callout; this.calloutCool = 8; }
      }
    } else {
      this.lkpAge += dt; this.unseen += dt; this.seenT = 0;
      if (was) { this.holdT = rr(pr.hold); this.waited = 0; }
    }
    if (this.calloutT > 0 && (this.calloutT -= dt) <= 0 && this.lkpAge < 3) G.shareAlert(this);
    if (this.reloading && (this.reloadT -= dt) <= 0) { this.reloading = false; this.ammo = 30; }
    if (this.ammo <= 0 && !this.reloading) { this.reloading = true; this.reloadT = 2.4; }

    let face = null; // yaw to look at; defaults to movement direction
    const lookAt = (v) => yawTo(v.x - this.pos.x, v.z - this.pos.z);
    switch (this.state) {
      case 'PATROL':
        if (this.waitT > 0) { this.waitT -= dt; face = (this.baseYaw ?? this.yaw) + Math.sin(this.t * 0.7) * 0.9; }
        else if (this.follow(dt, 1.5)) {
          this.wi = (this.wi + this.dir + this.route.length) % this.route.length;
          const w = this.route[this.wi]; this.goTo(w[0], w[1]); this.waitT = Math.random() < 0.6 ? rnd(1, 4.5) : 0; this.baseYaw = this.yaw;
        }
        if (this.los && this.detect > 0.35) this.suspect(P.pos.x + rnd(-2, 2), P.pos.z + rnd(-2, 2), 'check', rnd(1.2, 2.5));
        break;
      case 'SUSPICIOUS':
        face = lookAt(this.sus);
        if ((this.susT -= dt) <= 0) {
          if (this.after === 'flank' && this.hasLkp) this.goFlank();
          else if (this.after === 'investigate' || Math.random() < pr.investigate) this.goInvestigate(this.sus.x, this.sus.z);
          else this.resumePatrol();
        }
        break;
      case 'INVESTIGATE': {
        const arrived = this.follow(dt, this.alerted ? 3.1 : 2.3), di = Math.hypot(this.inv.x - this.pos.x, this.inv.z - this.pos.z);
        if (di < 6) face = lookAt(this.inv);
        if (arrived || this.stateT > 30 || (di < 5 && this.stateT > 1 && G.los(this.pos.x, 1.5, this.pos.z, this.inv.x, 1, this.inv.z))) this.startSearch(this.inv.x, this.inv.z);
        break;
      }
      case 'SEARCH':
        if (this.waitT > 0) { this.waitT -= dt; face = (this.baseYaw ?? this.yaw) + Math.sin(this.t * 1.3) * 1.3; }
        else if (this.follow(dt, 2.2)) {
          this.baseYaw = this.yaw;
          if (this.t > this.searchEnd || !this.search.length) this.resumePatrol();
          else { const s = this.search.shift(); this.goTo(s.x, s.z); this.waitT = rnd(1, 2.5); }
        }
        break;
      case 'ENGAGE':
        face = lookAt(this.lkp); this.crouch = !!this.wantCrouch;
        if ((this.decT -= dt) <= 0) { this.decT = rr(pr.decide); this.decide(); }
        break;
      case 'SEEK_COVER':
      case 'RETREAT':
        if (this.phase === 'move') {
          if (this.follow(dt, this.state === 'RETREAT' ? 4.6 : 4.3)) { this.phase = 'hide'; this.crouch = true; this.hideT = this.state === 'RETREAT' ? rnd(5, 9) : rr(pr.peek); if (this.ammo < 15 && !this.reloading) { this.reloading = true; this.reloadT = 2.4; } }
        } else if (this.phase === 'hide') {
          face = lookAt(this.lkp);
          if ((this.hideT -= dt) <= 0 && !this.reloading) {
            if (this.peekAt && !this.seeing && this.goTo(this.peekAt.x, this.peekAt.z)) this.phase = 'peek'; else this.engage();
          }
        } else if (this.follow(dt, 2.6)) this.engage();
        break;
      case 'REPOSITION':
        if (this.seeing && this.pd < 14 && this.stateT > 0.8) this.engage();
        else if (this.follow(dt, 4.2)) { if (this.seeing || this.unseen < 2) this.engage(); else this.goInvestigate(this.lkp.x, this.lkp.z); }
        break;
    }
    // shooting: only while the player is actually visible, after the reaction delay
    if (this.seeing) {
      face = this.moved > 3 ? face : yawTo(dxp, dzp);
      if (this.react > 0) this.react -= dt;
      const can = !this.reloading && this.moved < 3 && (this.state === 'ENGAGE' || this.phase === 'hide' || this.phase === 'peek');
      if (can && this.react <= 0 && Math.abs(angd(yawTo(dxp, dzp), this.yaw)) < 0.3 && (this.shotT -= dt) <= 0) {
        if (this.burst <= 0) this.burst = ri(pr.burst);
        this.fire(); this.burst--; this.shotT = this.burst > 0 ? 0.115 : rr(pr.pause);
      }
    }
    // facing (turn-rate limited) and animation
    const target = face ?? (this.moved ? this.moveYaw : this.yaw), turn = (this.combat() ? 7 : 3.5) * dt, da = angd(target, this.yaw);
    this.yaw += Math.max(-turn, Math.min(turn, da));
    this.crouchF += ((this.crouch && !this.moved ? 1 : 0) - this.crouchF) * Math.min(1, dt * 8);
    this.body.position.y = -0.42 * this.crouchF;
    this.walk += this.moved * dt * 3.2;
    const sw = this.moved ? Math.sin(this.walk) * 0.55 : 0;
    this.legs[0].rotation.x = sw - this.crouchF * 0.9; this.legs[1].rotation.x = -sw + this.crouchF * 0.5;
    this.legs[0].scale.y = this.legs[1].scale.y = 1 - 0.45 * this.crouchF;
    const low = this.alerted || this.state !== 'PATROL' ? 0 : 0.55;
    this.arms.rotation.x += (-low - this.arms.rotation.x) * Math.min(1, dt * 6);
    this.up.rotation.x = this.flinch > 0 ? 0.25 : this.moved > 3 ? -0.2 : 0;
    if (this.flashT > 0 && (this.flashT -= dt) <= 0) this.flash.visible = false;
    this.sync();
  }
}
