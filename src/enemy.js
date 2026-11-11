// Enemy AI v2: one state machine, three behaviour profiles (RECRUIT / TACTICAL / ELITE SQUAD).
//
// Fairness rules enforced in this file (identical for every profile):
//  * Sight comes from the animated head position through real geometry; a guard tucked behind cover is blind.
//  * Knowledge = what was seen, heard (with positional error), shouted by a nearby ally or radioed as a report.
//  * Shots leave the real weapon muzzle. If the muzzle is still behind the guard's own cover, he cannot fire.
//  * Hit zones follow the animated skeleton: whatever leans out of cover can be shot.
//  * Health, damage and base accuracy never change during a mission.
import * as THREE from 'three';
import { rayBoxes, rnd } from './world.js';
import { Character } from './character.js';

export const PROFILES = {
  recruit: { label: 'RECRUIT', react: [0.8, 1.4], detect: 0.75, spread: 4.3, settle: 1.5, burst: [3, 6], pause: [0.6, 1.3], hold: [1.5, 4], memory: 8, searchPts: [1, 2], searchTime: 10, share: 12, radio: [3, 5.5], radioFail: 0.3, mistake: 0.3, decide: [0.9, 1.6], hear: 0.8,
    hide: [1.8, 4.5], expose: [1.4, 3.2], glance: 0.15, switchSide: 0.1, peeks: [3, 6], flank: 0.05, suppress: 0, bound: false, nades: 0, investigate: 0.6, alarmDelay: [9, 16], alarmChance: 0.5, coverDelay: [1, 3] },
  tactical: { label: 'TACTICAL', react: [0.42, 0.8], detect: 1, spread: 3.4, settle: 1.1, burst: [2, 4], pause: [0.35, 0.8], hold: [1.5, 3.5], memory: 15, searchPts: [3, 4], searchTime: 18, share: 20, radio: [1.4, 2.6], radioFail: 0.05, mistake: 0.1, decide: [0.55, 1], hear: 1,
    hide: [0.8, 2.6], expose: [0.8, 1.8], glance: 0.35, switchSide: 0.3, peeks: [2, 4], flank: 0.35, suppress: 0.25, bound: false, nades: 0, investigate: 0.95, alarmDelay: [4, 8], alarmChance: 0.9, coverDelay: [0.2, 0.8] },
  elite: { label: 'ELITE SQUAD', react: [0.3, 0.65], detect: 1.1, spread: 3.0, settle: 0.85, burst: [2, 4], pause: [0.3, 0.7], hold: [1, 3], memory: 22, searchPts: [4, 5], searchTime: 26, share: 26, radio: [0.8, 1.5], radioFail: 0, mistake: 0.06, decide: [0.4, 0.8], hear: 1.15,
    hide: [0.5, 2.2], expose: [0.6, 1.4], glance: 0.45, switchSide: 0.45, peeks: [1, 3], flank: 0.6, suppress: 0.6, bound: true, nades: 1, investigate: 1, alarmDelay: [2, 4], alarmChance: 1, coverDelay: [0.1, 0.5] },
};
const TYPES = {
  guard: { name: 'Rifleman', aggr: 0.5, caut: 0.5 }, aggressor: { name: 'Pointman', aggr: 0.85, caut: 0.25 }, cautious: { name: 'Marksman', aggr: 0.25, caut: 0.85 },
};
export const DMG = 15; // enemy rifle damage per hit, identical in every mode

const rr = (a) => rnd(a[0], a[1]), ri = (a) => Math.floor(rnd(a[0], a[1] + 1));
const angd = (a, b) => { let d = a - b; while (d > Math.PI) d -= 6.2832; while (d < -Math.PI) d += 6.2832; return d; };
const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) * 1.4;
const yawTo = (dx, dz) => Math.atan2(-dx, -dz);
const V = new THREE.Vector3(), V2 = new THREE.Vector3();

export class Enemy {
  constructor(G, x, z, route, typeId, profile, o = {}) {
    this.g = G; this.pr = profile; this.type = TYPES[typeId]; this.typeId = typeId;
    const j = profile.bound ? 0.2 : 0.1;
    this.aggr = THREE.MathUtils.clamp(this.type.aggr + rnd(-j, j), 0.05, 1); this.caut = THREE.MathUtils.clamp(this.type.caut + rnd(-j, j), 0.05, 1);
    this.pos = new THREE.Vector3(x, G.world.nav.height(x, z), z); this.yaw = rnd(6.28); this.hp = 100; this.dead = false; this.deadT = 0;
    this.baseYaw = this.yaw; this.route = route; this.wi = 0; this.dir = Math.random() < 0.5 ? 1 : -1; this.waitT = rnd(0, 3); this.waitR = o.wait || [1, 4.5];
    this.duty = o.duty || 'patrol'; this.home = o.home || route[0]; this.order = null; this.holdPost = false; this.tac = null;
    this.state = 'PATROL'; this.stateT = 0; this.phase = ''; this.t = rnd(10);
    this.path = null; this.pi = 0; this.trav = null; this.approach = null;
    this.lkp = new THREE.Vector3(); this.lkpVel = new THREE.Vector3(); this.hasLkp = false; this.lkpAge = 99;
    this.detect = 0; this.los = false; this.seeBody = false; this.seeing = false; this.seenT = 0; this.unseen = 99; this.pd = 99; this.percT = rnd(0.15); this.bodyT = rnd(1);
    this.react = 0; this.burst = 0; this.shotT = 0; this.ammo = 30; this.reloading = false; this.reloadT = 0; this.blockT = 0; this.blindT = 0;
    this.decT = 0; this.holdT = 0; this.waited = 0; this.supp = 0; this.stun = 0; this.shoutT = 0; this.radioT = 0; this.radioCool = 0; this.openT = 0;
    this.alerted = false; this.crouch = false; this.moved = 0; this.leanW = 0; this.suppLeft = 0; this.nades = profile.nades && (typeId !== 'cautious' || Math.random() < 0.5) ? 1 : 0; this.throwT = 0;
    this.sus = new THREE.Vector3(); this.susT = 0; this.after = 'check'; this.search = []; this.searchEnd = 0;
    this.spot = null; this.modes = []; this.mode = null; this.peeks = 0; this.maxPeeks = 3; this.hideT = 0; this.phaseT = 0; this.bad = new Set(); this.wasHit = false;
    this.ch = new Character(profile.bound ? 'elite' : typeId, 'carbine');
    G.scene.add(this.ch.root); this.sync(); this.ch.refresh();
  }
  sync() { const r = this.ch.root; r.position.copy(this.pos); r.rotation.y = this.yaw; }
  engaged() { return !this.dead && this.hasLkp && this.lkpAge < 10 && (this.state === 'COMBAT' || this.state === 'COVER' || this.state === 'MOVE'); }
  combat() { return this.state === 'COMBAT' || this.state === 'COVER' || this.state === 'MOVE'; }
  set(s, phase = '') { this.state = s; this.stateT = 0; this.phase = phase; if (s !== 'COVER') this.crouch = false; }
  release() { if (this.spot) { if (this.spot.user === this) this.spot.user = null; this.spot = null; } this.approach = null; }
  // ---------- movement ----------
  goTo(x, z) { this.path = this.g.world.nav.path(this.pos.x, this.pos.z, x, z); this.pi = 0; this.approach = null; return !!this.path; }
  follow(dt, speed) {
    const p = this.pos;
    if (this.trav) { // vault / climb / drop traversal
      const tr = this.trav; tr.t += dt / tr.dur; const t = Math.min(1, tr.t), e = t * t * (3 - 2 * t);
      p.x = tr.x0 + (tr.x1 - tr.x0) * e; p.z = tr.z0 + (tr.z1 - tr.z0) * e;
      p.y = tr.type === 'vault' ? tr.y0 + (tr.y1 - tr.y0) * e + (tr.h - Math.min(tr.y0, tr.y1) + 0.1) * Math.sin(Math.PI * t) : tr.type === 'climb' ? tr.y0 + (tr.y1 - tr.y0) * Math.min(1, t * 1.7) : tr.y0 + (tr.y1 - tr.y0) * t * t;
      this.moved = 2; this.moveYaw = yawTo(tr.x1 - tr.x0, tr.z1 - tr.z0);
      if (t >= 1) { this.trav = null; this.pi++; }
      return false;
    }
    if (this.path && this.pi < this.path.length) {
      const t = this.path[this.pi];
      if (t.link) {
        const dur = t.link.type === 'vault' ? 0.9 : t.link.type === 'climb' ? 1.05 : 0.55;
        this.trav = { x0: p.x, z0: p.z, y0: p.y, x1: t.x, z1: t.z, y1: t.y, h: t.link.h, type: t.link.type, t: 0, dur };
        if (t.link.type !== 'drop') this.ch.playFull('ClimbUp_1m', { speed: 1.9 / dur, fade: 0.12 });
        return false;
      }
      const dx = t.x - p.x, dz = t.z - p.z, d = Math.hypot(dx, dz);
      if (d < 0.2) { this.pi++; return this.pi >= this.path.length && !this.approach; }
      const st = Math.min(d, speed * dt);
      p.x += (dx / d) * st; p.z += (dz / d) * st; this.moved = speed; this.moveYaw = yawTo(dx, dz);
      const h = this.g.world.nav.height(p.x, p.z); p.y += (h - p.y) * Math.min(1, dt * 10);
      return false;
    }
    if (this.approach) { // last step from the nav cell to the exact cover position
      const a = this.approach, dx = a.x - p.x, dz = a.z - p.z, d = Math.hypot(dx, dz);
      if (d < 0.08) { this.approach = null; return true; }
      const st = Math.min(d, Math.min(speed, 2.2) * dt); p.x += (dx / d) * st; p.z += (dz / d) * st; this.moved = 1.6; this.moveYaw = yawTo(dx, dz);
      return false;
    }
    return true;
  }
  // ---------- perception ----------
  canSee() {
    const G = this.g, P = G.player;
    if (P.dead || this.stun > 0) return false;
    const e = this.ch.eye(V), dx = P.pos.x - e.x, dz = P.pos.z - e.z, d = Math.hypot(dx, dz);
    if (d > G.world.env.viewRange) return false;
    const half = this.alerted || this.combat() ? 1.85 : 1.05;
    if (d > 2 && Math.abs(angd(yawTo(dx, dz), this.yaw)) > half) return false;
    this.seeBody = G.los(e.x, e.y, e.z, P.pos.x + P.leanX * 0.4, P.pos.y + P.height * 0.5, P.pos.z + P.leanZ * 0.4);
    return this.seeBody || G.los(e.x, e.y, e.z, P.eyePos.x, P.eyePos.y, P.eyePos.z);
  }
  hear(pos, kind, d) {
    if (this.dead || this.seeing || this.stun > 0) return;
    const n = kind === 'step' ? 1.5 : 1 + d * 0.12, px = pos.x + rnd(-n, n), pz = pos.z + rnd(-n, n);
    const calm = this.state === 'PATROL' || this.state === 'SEARCH';
    if (kind === 'ally') { if (calm && !this.holdPost) { this.alerted = true; this.suspect(px, pz, 'investigate', rnd(0.5, 1.5)); } return; }
    if (kind === 'shot' || kind === 'explosion') {
      this.alerted = true; this.g.sec.suspicious();
      if (this.lkpAge > 1.5 || !this.hasLkp) { this.lkp.set(px, 0, pz); this.lkpVel.set(0, 0, 0); this.lkpAge = 0.5; this.hasLkp = true; }
      if (this.holdPost && this.state === 'COVER') return; // defenders keep their post but now watch that direction
      if (calm) this.suspect(px, pz, this.duty === 'objective' ? 'defend' : 'investigate', rnd(0.4, 1.2) / this.pr.detect);
      else if (this.state === 'SUSPICIOUS') { this.sus.set(px, 0, pz); if (this.after === 'check') this.after = 'investigate'; }
      else if (this.state === 'INVESTIGATE' && Math.hypot(px - this.inv.x, pz - this.inv.z) > 8) this.goInvestigate(px, pz);
    } else if (calm) this.suspect(px, pz, 'check', rnd(1, 2));
    else if (this.combat() && this.lkpAge > 2) { this.lkp.set(px, 0, pz); this.lkpAge = 1; }
  }
  suspect(x, z, after, t) { this.release(); this.sus.set(x, 0, z); this.after = after; this.susT = t; this.set('SUSPICIOUS'); this.path = null; }
  onAlert(x, z) { // shouted by an ally within earshot: second-hand, noisy
    if (this.dead || this.seeing || this.stun > 0) return;
    this.alerted = true;
    if (this.lkpAge > 2 || !this.hasLkp) { this.lkp.set(x, 0, z); this.lkpVel.set(0, 0, 0); this.lkpAge = 1; this.hasLkp = true; }
    if (this.state === 'PATROL' || this.state === 'SEARCH') this.suspect(x, z, this.duty === 'objective' ? 'defend' : Math.random() < this.pr.flank ? 'flank' : 'investigate', rnd(0.3, 1.2));
  }
  flashbang(dur) { if (this.dead) return; this.stun = Math.max(this.stun, dur); this.detect = 0; this.seeing = false; this.los = false; this.ch.playUpper('Hit_Head', { speed: 0.5 }); this.trav || (this.path = null); }
  damage(d, from, part) {
    if (this.dead) return;
    this.hp -= d; this.supp = Math.min(1.5, this.supp + 0.6); this.wasHit = true;
    if (this.hp <= 0) { this.dead = true; this.release(); this.ch.die(part === 'blast'); this.g.onKill(this); return; }
    if (this.stun <= 0) this.ch.playUpper(part === 'head' ? 'Hit_Head' : 'Hit_Chest', { speed: 1.7, fade: 0.08 });
    if (this.state === 'COVER' && this.phase !== 'hide') this.toHide();
    if (!this.seeing) { // shot from an unseen position: only a rough idea of the direction
      const dist = Math.hypot(from.x - this.pos.x, from.z - this.pos.z), n = 3 + dist * 0.1;
      this.alerted = true; this.detect = Math.max(this.detect, 0.6);
      this.lkp.set(from.x + rnd(-n, n), 0, from.z + rnd(-n, n)); this.lkpAge = 0.5; this.hasLkp = true;
      this.react = rr(this.pr.react) * 0.6;
      if (!this.combat() && this.state !== 'ALARM') this.engage();
    }
  }
  rayHit(o, d, max) {
    const p = this.pos, t = (p.x - o.x) * d.x + (p.y + 0.9 - o.y) * d.y + (p.z - o.z) * d.z;
    if (t < -1.5 || t > max + 1.5) return null;
    const cx = o.x + d.x * t - p.x, cy = o.y + d.y * t - p.y - 0.9, cz = o.z + d.z * t - p.z;
    if (cx * cx + cy * cy + cz * cz > 2.2) return null;
    return this.ch.rayHit(o, d, max, this.g.frame);
  }
  // ---------- cover ----------
  modesFor(s, T) { // which exposures of this spot give a line of fire to T, and is the tucked position protected?
    const G = this.g, ty = T.y + 1.45;
    if (G.los(s.x, s.y + (s.high ? 1.35 : 0.7), s.z, T.x, ty, T.z)) return null;
    const m = [];
    for (const sd of s.sides) if (G.los(s.x + s.tx * sd * 0.5, s.y + (s.high ? 1.5 : 1.0), s.z + s.tz * sd * 0.5, T.x, ty, T.z)) m.push({ type: 'side', side: sd });
    if (s.over && G.los(s.x, s.y + 1.55, s.z, T.x, ty, T.z)) m.push({ type: 'over' });
    return m;
  }
  pickCover(intent, T, around, radius) {
    const G = this.g, W = G.world, cx = around ? around.x : this.pos.x, cz = around ? around.z : this.pos.z, R = radius || (intent === 'retreat' ? 26 : 18);
    const mates = G.enemies.filter((e) => e !== this && !e.dead && e.engaged()).map((e) => Math.atan2(e.pos.z - T.z, e.pos.x - T.x));
    const o = W.objective.pos, cand = [];
    for (const s of W.cover) {
      if ((s.user && s.user !== this && !s.user.dead) || this.bad.has(s.id) || (this.spot === s && intent !== 'defend')) continue;
      const dm = Math.hypot(s.x - cx, s.z - cz); if (dm > R) continue;
      const dT = Math.hypot(s.x - T.x, s.z - T.z); if (dT < 5 || dT > 46) continue;
      if (((T.x - s.x) * -s.nx + (T.z - s.z) * -s.nz) / dT < 0.3) continue; // the cover must lie between the spot and the threat
      let sc = -Math.hypot(s.x - this.pos.x, s.z - this.pos.z) * 0.55 + (s.high ? 1.5 : 0) + s.sides.length * 0.6 + rnd(0, 2.5);
      if (intent === 'hold') sc -= Math.abs(dT - 17) * 0.15;
      else if (intent === 'push') sc -= dT * 0.55;
      else if (intent === 'retreat') { if (dT < this.pd + 4) continue; sc += dT * 0.4; }
      else if (intent === 'flank') { let sep = 3.14; const a = Math.atan2(s.z - T.z, s.x - T.x); for (const m of mates) sep = Math.min(sep, Math.abs(angd(a, m))); sc += Math.min(sep, 1.9) * 4.5 - Math.abs(dT - 14) * 0.2; }
      else if (intent === 'defend') sc -= dm * 1.2 + Math.hypot(s.x - o[0], s.z - o[2]) * 0.15;
      cand.push([sc, s]);
    }
    cand.sort((a, b) => b[0] - a[0]);
    for (let i = 0; i < Math.min(cand.length, 12); i++) {
      const s = cand[i][1], m = this.modesFor(s, T);
      if (m && (m.length || intent === 'retreat' || intent === 'defend')) return { s, modes: m };
    }
    return null;
  }
  takeCover(intent, T = this.lkp, around, radius) {
    const c = this.pickCover(intent, T, around, radius);
    if (!c || !this.goTo(c.s.cell.x, c.s.cell.z)) return false;
    this.release(); this.spot = c.s; c.s.user = this; this.modes = c.modes; this.approach = { x: c.s.x, z: c.s.z };
    this.set('MOVE', intent); this.peeks = 0; this.maxPeeks = ri(this.pr.peeks); this.wasHit = false;
    return true;
  }
  toHide(extra = 0) {
    this.phase = 'hide'; this.hideT = rr(this.pr.hide) + extra; this.suppLeft = 0;
    if ((this.peeks >= this.maxPeeks || this.wasHit) && !this.holdPost && this.g.sec.mayMove(this)) { // used up this position: relocate
      const tac = this.tac; this.takeCover(tac === 'flank' ? 'flank' : tac === 'push' ? 'push' : this.hp < 40 ? 'retreat' : 'hold');
    }
  }
  afterHide() {
    const G = this.g, pr = this.pr, s = this.spot;
    if (!this.hasLkp) { // defender watching an approach: glance now and then
      this.modes = s.sides.map((sd) => ({ type: 'side', side: sd })); if (s.over) this.modes.push({ type: 'over' });
      if (!this.modes.length) { this.hideT = 3; return; }
      this.mode = this.modes[Math.floor(Math.random() * this.modes.length)]; this.phase = 'glance'; this.phaseT = rnd(0.7, 1.6); return;
    }
    if (this.lkpAge > pr.memory) { if (this.holdPost) { this.hasLkp = false; this.hideT = rnd(1, 3); } else this.startSearch(this.lkp.x, this.lkp.z); return; }
    const m = this.modesFor(s, this.lkp);
    if (!m) { this.bad.add(s.id); if (!this.takeCover(this.hp < 40 ? 'retreat' : 'hold')) this.engage(true); return; } // flanked: this cover no longer protects
    this.modes = m;
    if (this.unseen > this.holdT && !this.holdPost && this.nextMove()) return;
    if (this.tryGrenade()) { this.hideT = 1.6; return; }
    if (!m.length) { this.hideT = rnd(0.8, 1.6); this.waited++; if (this.waited > 2 && !this.holdPost && !this.takeCover('hold')) this.goInvestigate(this.lkp.x, this.lkp.z); return; }
    if (pr.mistake > 0.2 && Math.random() < pr.mistake * 0.4 && this.unseen < 3) { this.engage(true); this.openT = rnd(2, 4); return; } // recruits sometimes just step out
    let pick = m[Math.floor(Math.random() * m.length)];
    if (this.mode && m.length > 1 && Math.random() < pr.switchSide) pick = m.find((x) => x.type !== this.mode.type || x.side !== this.mode.side) || pick;
    else if (this.mode && Math.random() > pr.switchSide) pick = m.find((x) => x.type === this.mode.type && x.side === this.mode.side) || pick;
    this.mode = pick; this.blockT = 0; this.blindT = 0;
    if (Math.random() < pr.glance && this.unseen > 1.2) { this.phase = 'glance'; this.phaseT = rnd(0.35, 0.9); }
    else { this.phase = 'fire'; this.phaseT = rr(pr.expose); this.peeks++; this.shotT = Math.min(this.shotT, 0.12); this.burst = 0; this.suppLeft = Math.random() < pr.suppress || this.tac === 'suppress' ? ri([1, 2]) : 0; }
  }
  nextMove() { // the player has been out of sight for a while: what now?
    const G = this.g, pr = this.pr, tac = this.tac, r = Math.random(), dL = Math.hypot(this.lkp.x - this.pos.x, this.lkp.z - this.pos.z);
    if (!G.sec.mayMove(this)) { this.hideT = rnd(0.6, 1.4); return true; } // bounding: wait until a team-mate covers
    let c;
    if (tac === 'flank') c = r < 0.75 ? 'flank' : 'push'; else if (tac === 'push') c = r < 0.7 ? 'push' : 'flank';
    else if (tac) c = this.waited < 3 ? 'wait' : 'push';
    else { const wp = 0.3 + this.aggr, wf = pr.flank * (0.5 + this.aggr), ww = (0.3 + this.caut) * (this.waited < 2 ? 1 : 0.2), x = r * (wp + wf + ww); c = x < wp ? 'push' : x < wp + wf ? 'flank' : 'wait'; }
    if (c === 'wait') { this.holdT = this.unseen + rr(pr.hold); this.waited++; this.hideT = rr(pr.hide); return true; }
    this.waited = 0;
    if (c === 'push' && dL < 10) { this.goInvestigate(this.lkp.x, this.lkp.z); return true; }
    if (this.takeCover(c)) return true;
    this.goInvestigate(this.lkp.x, this.lkp.z); return true;
  }
  tryGrenade() {
    const G = this.g, L = this.lkp;
    if (this.nades <= 0 || G.sec.nadeCool > 0 || this.seeing || this.lkpAge < 2.5 || this.lkpAge > 9) return false;
    const e = this.ch.eye(V), d = Math.hypot(L.x - e.x, L.z - e.z);
    if (d < 9 || d > 26) return false;
    if (G.enemies.some((o) => !o.dead && Math.hypot(o.pos.x - L.x, o.pos.z - L.z) < 7.5)) return false; // never onto a team-mate
    const mx = (e.x + L.x) / 2, mz = (e.z + L.z) / 2, my = e.y + 1.2 + d * 0.16;
    if (!G.los(e.x, e.y + 0.3, e.z, mx, my, mz) || !G.los(mx, my, mz, L.x, L.y + 0.4, L.z)) return false; // the throwing arc must be clear
    const flash = this.tac === 'push' || G.enemies.some((o) => !o.dead && o.tac === 'push' && o.engaged()) ? Math.random() < 0.7 : Math.random() < 0.3;
    this.nades--; G.sec.nadeCool = 14; this.throwT = 0.5; this.throwKind = flash ? 'flash' : 'frag';
    this.throwAt = { x: L.x + rnd(-1.5, 1.5), y: L.y, z: L.z + rnd(-1.5, 1.5), d };
    this.ch.playUpper('OverhandThrow', { speed: 1.5 }); G.say(this, flash ? 'Flash out!' : 'Frag out!');
    return true;
  }
  // ---------- higher level transitions ----------
  engage(open) {
    this.holdPost = this.holdPost && this.duty === 'objective';
    this.holdT = rr(this.pr.hold); this.waited = 0; this.decT = rr(this.pr.decide); this.wantCrouch = Math.random() < 0.3 * this.caut + 0.1;
    if (this.state === 'COVER' && !open) return;
    this.release(); this.path = null; this.set('COMBAT'); this.openT = rr(this.pr.coverDelay);
  }
  goInvestigate(x, z) {
    this.release();
    const c = this.g.world.nav.nearest(x, z);
    if (!c || !this.goTo(c.x, c.z)) return this.startSearch(this.pos.x, this.pos.z);
    this.inv = c; this.set('INVESTIGATE');
  }
  startSearch(x, z) {
    const G = this.g, nav = G.world.nav, pr = this.pr, n = ri(pr.searchPts), wrong = Math.random() < pr.mistake;
    this.release(); this.search = [];
    const v = this.lkpVel, vl = Math.hypot(v.x, v.z);
    for (let i = 0; i < n; i++) {
      let best = null;
      for (let k = 0; k < (pr.bound ? 5 : 2); k++) {
        const a = rnd(6.283), r = wrong ? rnd(9, 17) : rnd(3, 11); let cx = x + Math.cos(a) * r, cz = z + Math.sin(a) * r;
        // first guess: the direction the player was last SEEN moving (not their real position)
        if (i === 0 && vl > 1.5 && pr.label !== 'RECRUIT') { cx = x + (v.x / vl) * rnd(5, 10) + rnd(-2, 2); cz = z + (v.z / vl) * rnd(5, 10) + rnd(-2, 2); }
        const c = nav.snap(cx, cz);
        if (!c) continue;
        if (!best) best = c;
        if (!G.los(c.x, c.y + 1.2, c.z, x, c.y + 1.4, z)) { best = c; break; } // prefer corners hidden from the last known position
      }
      if (best) this.search.push(best);
    }
    this.searchEnd = this.t + pr.searchTime; this.waitT = rnd(0.5, 1.5); this.path = null; this.set('SEARCH');
  }
  resume() { // back to duty: outstanding order first, otherwise the patrol route / post
    this.release(); this.hasLkp = false;
    if (this.order && this.doOrder()) return;
    this.holdPost = false; this.set('PATROL'); const w = this.route[this.wi]; this.goTo(w[0], w[1]); this.waitT = 0;
    if (this.g.sec.level < 2) this.alerted = false;
  }
  setOrder(o) { this.order = o; if (this.state === 'PATROL' || this.state === 'SEARCH' || (this.state === 'COVER' && this.holdPost && !this.hasLkp)) this.doOrder(); }
  doOrder() {
    const o = this.order; if (!o) return false;
    this.alerted = true;
    if (o.type === 'investigate') { this.order = null; this.holdPost = false; this.goInvestigate(o.x, o.z); return true; }
    // defend: hold a covered position near (x, z) watching toward the reported threat
    this.holdPost = true; this.hasLkp = false; this.lkp.set(o.tx, 0, o.tz);
    if (this.spot && this.state === 'COVER' && Math.hypot(this.spot.x - o.x, this.spot.z - o.z) < 7 && this.modesFor(this.spot, this.lkp)) return true;
    if (this.takeCover('defend', this.lkp, o, 7)) return true;
    this.release(); this.route = [[o.x, o.z]]; this.wi = 0; this.waitR = [4, 9]; this.goTo(o.x, o.z); this.set('PATROL'); return true;
  }
  goAlarm() { const P = this.g.world.panel; this.release(); if (!this.goTo(P.x, P.z)) return false; this.holdPost = false; this.set('ALARM', 'run'); return true; }
  // ---------- shooting ----------
  fire(suppress) {
    const G = this.g, P = G.player, pr = this.pr, ch = this.ch;
    ch.refresh();
    const m = ch.muzzle(V), ox = m.x, oy = m.y, oz = m.z;
    let tx, ty, tz;
    if (suppress) { tx = this.lkp.x; ty = this.lkp.y + 1.1; tz = this.lkp.z; }
    else if (this.seeBody) { tx = P.pos.x + P.leanX * 0.5; ty = P.pos.y + P.height * 0.58; tz = P.pos.z + P.leanZ * 0.5; }
    else { tx = P.eyePos.x; ty = P.eyePos.y - 0.06; tz = P.eyePos.z; }
    let dx = tx - ox, dy = ty - oy, dz = tz - oz; const dist = Math.hypot(dx, dy, dz);
    // the muzzle must have a real line of fire: no shooting through the cover the guard is hiding behind
    if (rayBoxes(G.world.colliders, ox, oy, oz, dx / dist, dy / dist, dz / dist, Math.min(dist, 1.7), 'bullet')) { this.blockT += 0.3; return false; }
    this.ammo--;
    const sp = (pr.spread * (1 + this.pd / 40) * (1 + (Math.min(P.speed, 7) / 7) * 0.8) * (1 + Math.max(0, 1 - (this.seenT + (this.state === 'COVER' ? pr.settle * 0.4 : 0)) / pr.settle) * 0.9) * (this.supp > 0.5 ? 1.35 : 1) * (suppress ? 1.7 : 1) * (P.crouch ? 1.15 : 1) * Math.PI) / 180;
    const yaw = Math.atan2(dx, dz) + gauss() * sp, pit = Math.atan2(dy, Math.hypot(dx, dz)) + gauss() * sp * 0.7, cp = Math.cos(pit);
    dx = Math.sin(yaw) * cp; dy = Math.sin(pit); dz = Math.cos(yaw) * cp;
    const wh = rayBoxes(G.world.colliders, ox, oy, oz, dx, dy, dz, 120, 'bullet'), wd = wh ? wh.d : 120;
    const ph = rayBoxes(G.playerBox(), ox, oy, oz, dx, dy, dz, wd, 'bullet');
    const d = ph ? ph.d : wd, a = G.v1.set(ox, oy, oz), b = G.v2.set(ox + dx * d, oy + dy * d, oz + dz * d);
    G.fx.tracer(a, b, 0xffb070);
    if (ph) P.damage(DMG, this.pos, { name: this.type.name, dist: this.pd, x: this.pos.x, z: this.pos.z });
    else { if (wh) G.fx.impact(b, G.v3.set(wh.nx, wh.ny, wh.nz)); G.nearMiss(ox, oy, oz, dx, dy, dz); }
    ch.fire(); G.enemyShotSound(this); G.sound(this.pos, 30, 'ally', this);
    return true;
  }
  // ---------- main update ----------
  update(dt) {
    const G = this.g, P = G.player, pr = this.pr, ch = this.ch;
    if (this.dead) { if (this.deadT < 4) { this.deadT += dt; ch.update(dt, { speed: 0 }); if (this.pos.y > G.world.nav.height(this.pos.x, this.pos.z) + 0.02) { this.pos.y = Math.max(G.world.nav.height(this.pos.x, this.pos.z), this.pos.y - dt * 4); this.sync(); } } return; }
    this.t += dt; this.stateT += dt; this.moved = 0;
    this.supp = Math.max(0, this.supp - dt * 0.25); this.radioCool -= dt;
    if (this.stun > 0) { // flashed: blind, cannot act, recovers into cover or a search
      this.stun -= dt; this.crouch = true; this.seeing = false; this.los = false; this.lkpAge += dt * 2; this.unseen += dt;
      if (this.trav) this.follow(dt, 0);
      ch.update(dt, { speed: 0, crouch: true, aim: false, lean: 0 }); this.sync();
      if (this.stun <= 0) { ch.stopUpper(); this.react = rr(pr.react) + 0.4; if (this.state !== 'COVER') { if (this.hasLkp && !this.takeCover('hold')) this.startSearch(this.pos.x, this.pos.z); } else this.toHide(); }
      return;
    }
    // perception
    if ((this.percT -= dt) <= 0) { this.percT = 0.1 + Math.random() * 0.05; this.los = this.canSee(); }
    const dxp = P.pos.x - this.pos.x, dzp = P.pos.z - this.pos.z; this.pd = Math.hypot(dxp, dzp);
    if (this.los) {
      let rate = pr.detect * G.world.env.detect * (2.2 * (1 - this.pd / G.world.env.viewRange) + 0.25);
      if (this.pd < 6) rate *= 3; if (P.crouch) rate *= 0.55; if (P.speed > 5.5) rate *= 1.4; else if (P.speed < 0.5) rate *= 0.8;
      if (!this.seeBody) rate *= 0.6; // only a head showing is harder to notice
      if (this.alerted) rate *= 3;
      this.detect = Math.min(1, this.detect + rate * dt);
    } else this.detect = Math.max(0, this.detect - 0.3 * dt);
    const was = this.seeing;
    this.seeing = this.los && this.detect >= 1;
    if (this.seeing) {
      this.lkp.copy(P.pos); this.lkpVel.copy(P.vel); this.lkpAge = 0; this.hasLkp = true; this.unseen = 0; this.seenT += dt;
      if (!was) {
        this.react = Math.max(this.react, rr(pr.react) * (this.combat() ? (this.unseen < 5 ? 0.25 : 0.5) : 1) + (Math.random() < pr.mistake * 0.5 ? rnd(0.4, 1) : 0));
        this.alerted = true;
        if (this.state === 'ALARM' ? this.pd < 12 : !this.combat()) this.engage();
        if (this.shoutT <= 0) this.shoutT = 0.7;
        if (this.radioCool <= 0 && this.radioT <= 0) this.radioT = rr(pr.radio);
      }
    } else {
      this.lkpAge += dt; this.unseen += dt; this.seenT = 0;
      if (was) { this.holdT = rr(pr.hold); this.waited = 0; }
    }
    // communication: a shout reaches nearby allies; a radio call (needs a moment out of the fight) informs the facility
    if (this.shoutT > 0 && (this.shoutT -= dt) <= 0 && this.lkpAge < 3) G.shout(this);
    if (this.radioT > 0) {
      this.radioT -= dt * (this.seeing && this.state !== 'COVER' ? 0.5 : 1);
      if (this.radioT <= 0) { this.radioCool = 7; if (Math.random() >= pr.radioFail && this.lkpAge < 6) { G.sec.radio(this, 'contact', this.lkp.x, this.lkp.z); if (!this.seeing) ch.playUpper('Idle_TalkingPhone_Loop', { speed: 1, fade: 0.2, loop: false }); } }
    }
    // a dead colleague in view is a reason to call it in
    if (!this.combat() && this.state !== 'ALARM' && (this.bodyT -= dt) <= 0) {
      this.bodyT = 0.8;
      for (const o of G.enemies) {
        if (!o.dead || o.found || Math.hypot(o.pos.x - this.pos.x, o.pos.z - this.pos.z) > 16) continue;
        if (Math.abs(angd(yawTo(o.pos.x - this.pos.x, o.pos.z - this.pos.z), this.yaw)) > 1.1 || !G.los(this.pos.x, this.pos.y + 1.6, this.pos.z, o.pos.x, o.pos.y + 0.4, o.pos.z)) continue;
        o.found = true; this.alerted = true; this.suspect(o.pos.x, o.pos.z, 'investigate', rnd(1, 2)); this.bodyCall = { x: o.pos.x, z: o.pos.z, t: rr(pr.radio) + 1 }; break;
      }
    }
    if (this.bodyCall && (this.bodyCall.t -= dt) <= 0) { if (Math.random() >= pr.radioFail) G.sec.radio(this, 'body', this.bodyCall.x, this.bodyCall.z); this.bodyCall = null; }
    if (this.reloading && (this.reloadT -= dt) <= 0) { this.reloading = false; this.ammo = 30; }
    if (this.ammo <= 0 && !this.reloading) { this.reloading = true; this.reloadT = 2.3; ch.playUpper('Pistol_Reload', { speed: 0.9 }); }
    if (this.throwT > 0 && (this.throwT -= dt) <= 0) { // release the grenade prepared in tryGrenade()
      ch.refresh(); const h = ch.bone('hand_r', V2), a = this.throwAt, T = 1.0 + a.d / 20, g = 14;
      G.spawnGrenade(this.throwKind, h.clone(), new THREE.Vector3((a.x - h.x) / T, (a.y + 0.2 - h.y + 0.5 * g * T * T) / T, (a.z - h.z) / T), this);
    }

    let face = null, lean = 0, aim = this.alerted || this.state !== 'PATROL', suppress = false;
    const lookAt = (v) => yawTo(v.x - this.pos.x, v.z - this.pos.z);
    switch (this.state) {
      case 'PATROL':
        if (this.waitT > 0) { this.waitT -= dt; face = (this.baseYaw ?? this.yaw) + Math.sin(this.t * 0.6) * 0.9; }
        else if (this.follow(dt, this.alerted ? 2.2 : 1.45)) {
          this.wi = (this.wi + this.dir + this.route.length) % this.route.length;
          const w = this.route[this.wi]; this.goTo(w[0], w[1]); this.waitT = this.route.length < 3 || Math.random() < 0.6 ? rr(this.waitR) : 0; this.baseYaw = this.yaw;
        }
        if (this.los && this.detect > 0.35) { G.sec.suspicious(); this.suspect(P.pos.x + rnd(-2, 2), P.pos.z + rnd(-2, 2), 'check', rnd(1.2, 2.5)); }
        aim = false;
        break;
      case 'SUSPICIOUS':
        face = lookAt(this.sus);
        if ((this.susT -= dt) <= 0) {
          if (this.after === 'defend') { this.order = this.order || { type: 'defend', x: this.home[0], z: this.home[1], tx: this.sus.x, tz: this.sus.z }; this.doOrder(); }
          else if (this.after === 'flank' && this.hasLkp && this.takeCover('flank')) { /* moving to a flanking position */ }
          else if (this.after !== 'check' || Math.random() < pr.investigate) this.goInvestigate(this.sus.x, this.sus.z);
          else this.resume();
        }
        break;
      case 'INVESTIGATE': {
        const arrived = this.follow(dt, this.alerted ? 3.1 : 2.3), di = Math.hypot(this.inv.x - this.pos.x, this.inv.z - this.pos.z);
        if (di < 6) face = lookAt(this.inv);
        if (arrived || this.stateT > 35 || (di < 5 && this.stateT > 1 && G.los(this.pos.x, this.pos.y + 1.5, this.pos.z, this.inv.x, this.inv.y + 1, this.inv.z))) this.startSearch(this.inv.x, this.inv.z);
        break;
      }
      case 'SEARCH':
        if (this.waitT > 0) { this.waitT -= dt; face = (this.baseYaw ?? this.yaw) + Math.sin(this.t * 1.3) * 1.3; }
        else if (this.follow(dt, 2.2)) {
          this.baseYaw = this.yaw;
          if (this.t > this.searchEnd || !this.search.length) this.resume();
          else { const s = this.search.shift(); this.goTo(s.x, s.z); this.waitT = rnd(1, 2.5); }
        }
        break;
      case 'ALARM':
        if (this.phase === 'run') { if (this.follow(dt, 4.4)) { this.phase = 'press'; this.phaseT = 1.1; ch.playUpper('Interact', { speed: 1.3 }); } }
        else { const pf = G.world.panel.face; face = yawTo(pf[0], pf[1]); if ((this.phaseT -= dt) <= 0) { G.sec.lockdown('ALARM TRIGGERED'); this.resume(); } }
        break;
      case 'COMBAT': // in the open: fight for a moment, then get to cover
        face = lookAt(this.lkp); this.crouch = !!this.wantCrouch && !this.moved;
        if (this.path && this.pi < this.path.length) this.follow(dt, 1.7);
        if ((this.openT -= dt) <= 0 && (this.decT -= dt) <= 0) {
          this.decT = rr(pr.decide);
          const hurt = this.hp < 40 && Math.random() < 0.5 + this.caut * 0.5;
          if (this.takeCover(hurt ? 'retreat' : this.tac === 'flank' ? 'flank' : 'hold')) break;
          if (!this.seeing && this.unseen > this.holdT) { if (this.lkpAge > pr.memory) this.startSearch(this.lkp.x, this.lkp.z); else this.goInvestigate(this.lkp.x, this.lkp.z); break; }
          this.wantCrouch = Math.random() < 0.3 + this.caut * 0.3;
          if (Math.random() < 0.5) { const a = this.yaw + (Math.random() < 0.5 ? 1.57 : -1.57), c = G.world.nav.snap(this.pos.x - Math.sin(a) * 2.2, this.pos.z - Math.cos(a) * 2.2); if (c) this.goTo(c.x, c.z); } // sidestep
        }
        break;
      case 'MOVE': {
        const hot = this.phase !== 'defend' && this.seeing && this.pd < 7 && this.stateT > 0.6;
        if (hot) { this.engage(true); this.openT = rnd(0.8, 1.6); break; }
        if (this.follow(dt, this.phase === 'retreat' ? 4.6 : this.phase === 'defend' ? 3.4 : 4.3)) {
          if (!this.spot) { this.engage(true); break; }
          this.set('COVER', 'hide'); this.hideT = rnd(0.3, 1); this.mode = null;
          if (this.ammo < 15 && !this.reloading) { this.reloading = true; this.reloadT = 2.3; ch.playUpper('Pistol_Reload', { speed: 0.9 }); }
        }
        break;
      }
      case 'COVER': {
        const s = this.spot, m = this.mode;
        face = lookAt(this.hasLkp || this.holdPost ? this.lkp : V.set(s.x - s.nx * 5, 0, s.z - s.nz * 5));
        if (this.phase === 'hide') {
          this.crouch = !s.high;
          this.hideT -= dt * (this.supp > 0.6 ? 0.3 : 1);
          if (this.hideT <= 0 && !this.reloading && this.throwT <= 0) this.afterHide();
        } else {
          const amt = this.phase === 'glance' ? 0.75 : 1 + Math.min(0.3, this.blockT);
          if (m.type === 'side') { this.crouch = !s.high; lean = (s.tx * m.side * Math.cos(this.yaw) - s.tz * m.side * Math.sin(this.yaw)) * amt; } else this.crouch = false;
          this.phaseT -= dt;
          if (this.phase === 'glance') { if (this.phaseT <= 0) { if (this.seeing && this.hasLkp) { this.phase = 'fire'; this.phaseT = rr(pr.expose); this.peeks++; this.shotT = Math.min(this.shotT, 0.12); this.burst = 0; } else this.toHide(this.hasLkp ? 0 : rnd(1, 3)); } }
          else {
            if (this.seeing) this.blindT = 0; else { this.blindT += dt; suppress = this.suppLeft > 0 && this.lkpAge < 4 && this.blindT > 0.3; }
            if (this.blockT > 0.9) { this.modes = this.modes.filter((x) => x !== m); if (!this.modes.length) this.bad.add(s.id); this.peeks = 99; this.toHide(); } // no line of fire from here
            else if (this.phaseT <= 0 || this.ammo <= 0 || (this.blindT > 0.7 && !suppress)) this.toHide();
          }
        }
        break;
      }
    }
    // shooting: only at a visible player (or a short suppressive burst at the last seen position), after the reaction delay
    if (this.seeing || suppress) {
      const tyaw = this.seeing ? yawTo(dxp, dzp) : lookAt(this.lkp);
      if (this.moved < 3) face = tyaw;
      if (this.react > 0) this.react -= dt;
      const posed = this.state !== 'COVER' || (this.phase === 'fire' && Math.abs(ch.lean - lean) < 0.3 && ch.crouchW < (this.crouch ? 1.1 : 0.35));
      const can = !this.reloading && !this.trav && this.throwT <= 0 && this.moved < 2.5 && posed && (this.state === 'COMBAT' || this.state === 'COVER');
      if (can && this.react <= 0 && Math.abs(angd(tyaw, this.yaw)) < 0.3 && ch.aimW > 0.8 && (this.shotT -= dt) <= 0) {
        if (this.burst <= 0) { this.burst = ri(pr.burst); if (suppress) this.suppLeft--; }
        if (this.fire(suppress)) { this.burst--; this.shotT = this.burst > 0 ? 0.115 : rr(pr.pause); } else this.shotT = 0.15;
      }
    }
    const target = face ?? (this.moved ? this.moveYaw : this.yaw), turn = (this.combat() ? 7 : 3.5) * dt, da = angd(target, this.yaw);
    this.yaw += Math.max(-turn, Math.min(turn, da));
    const pitch = this.seeing ? Math.atan2(P.pos.y + P.height * 0.6 - (this.pos.y + 1.4), Math.max(1, this.pd)) : 0;
    ch.update(dt, { speed: this.trav ? 0 : this.moved, crouch: this.crouch && !this.moved, aim: aim && this.moved < 3.5 && !this.trav, pitch, lean });
    this.sync();
  }
}
