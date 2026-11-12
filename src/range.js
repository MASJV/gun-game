// Training range: a compact map plus reactive targets, built on the normal game systems (same player,
// weapons, ballistics resolver, grenades and HUD as a mission). No mission, no security response.
import * as THREE from 'three';
import { registerMap, wall, sandbags, crate, light } from './world.js';
import { WEAPONS, statsFor } from './weapons.js';

// staggered so that no target hides another from the firing line
const STATIC = [[-8, -10], [-2.5, -10], [5, -10], [-6, -25], [1.2, -25], [-4.4, -50], [2.6, -50], [-7.2, -75], [-0.6, -75], [5.6, -75], [-3.3, -100], [0.4, -100], [3.6, -100]];
const MOVING = [{ x: 8, z: -25, amp: 4, sp: 1.4 }, { x: 8, z: -50, amp: 4, sp: 2.4 }];
const COVERED = [{ x: -11, z: -18, note: 'steel plate' }, { x: -11, z: -32, note: 'chain-link fence' }];
const PIT = [[10, -11.5], [11.6, -13], [9.2, -14.2]];

registerMap('range', (B, W, scene) => {
  B.box('grass', 0x33412b, 0, -1, -50, 90, 1, 160, { col: false, tint: 0 });
  B.box('dirt', 0x4a4033, 0, 0, -50, 28, 0.015, 122, { col: false, tint: 0 });
  B.box('concrete', 0x5a5c5e, 0, 0, 8, 28, 0.03, 7, { col: false, tint: 0 });
  // backstop and side walls
  wall(B, 'concrete', 0x505355, -14.5, -110.5, 14.5, -110.5, 6); wall(B, 'concrete', 0x505355, -14.5, 11.5, 14.5, 11.5, 3.2);
  wall(B, 'concrete', 0x505355, -14.5, -110.5, -14.5, 11.5, 3.2); wall(B, 'concrete', 0x505355, 14.5, -110.5, 14.5, 11.5, 3.2);
  // firing line: bench, shelter roof, distance posts
  for (const x of [-9, -3, 3, 9]) { B.box('wood', 0x5a4a36, x, 0, 4.6, 2.4, 0.9, 0.5); B.box('plain', 0x2a2d31, x - 2.9, 0, 5, 0.12, 3, 0.12, { col: false }); }
  B.box('metal', 0x343a36, 0, 3, 7.5, 28, 0.15, 7.6);
  for (const d of [10, 25, 50, 75, 100]) { B.box('plain', 0xd8d8d0, -13.6, 0, -d, 0.12, 1.6, 0.12, { col: false, tint: 0 }); B.box('emis', 0xe8b04a, -13.6, 1.6, -d, 0.5, 0.22, 0.06, { col: false, tint: 0 }); }
  // collision demonstrations: a steel plate and a fence panel with targets behind them, plus ordinary cover
  B.box('metal', 0x4a5058, -11, 0, -17, 2, 2.2, 0.12); wall(B, 'fence', 0x8a9096, -12.6, -31, -9.4, -31, 2.4, [], 0.1, { sight: false });
  crate(B, -6, -6, 1.1); sandbags(B, 5, -6, 3, true);
  // grenade pit
  sandbags(B, 10.3, -9.4, 4.6, true); sandbags(B, 7.6, -12.6, 5, false); wall(B, 'concrete', 0x585a57, 12.2, -15.5, 14.3, -15.5, 1.6);
  for (const z of [-8, -30, -55, -80, -104]) light(W, scene, 0xfff0d8, z > -20 ? 55 : 85, 44, 0, 7, z);
  return {
    name: 'TRAINING RANGE', range: true, bounds: { x0: -16, x1: 16, z0: -112, z1: 13 }, spawn: { x: 0, z: 7, yaw: 0 },
    env: { fog: [0x0b1017, 0.005], bg: 0x080c12, hemi: [0x93a6c8, 0x2a3024, 3.2], moon: [0xb4c6ea, 3.4, [-30, 60, 25]], viewRange: 40, detect: 1, shotMul: 1, amb: 'forest', ground: 'dirt' },
    objective: { pos: [0, 0, -50] }, extraction: { pos: [0, 0, 9999] }, anchors: [], entries: [{ id: 'line', name: 'firing line', x: 0, z: 7, yaw: 0 }], exits: [], routes: [],
    posts: { objective: [], entrance: [] }, panel: null, guards: 0, reinforce: [], pickups: [['ammo', -12.5, 8.5], ['med', 12.5, 8.5]],
  };
});

const BODY = new THREE.BoxGeometry(0.5, 0.95, 0.04), HEAD = new THREE.BoxGeometry(0.26, 0.3, 0.04), POST = new THREE.BoxGeometry(0.06, 0.5, 0.06), RING = new THREE.BoxGeometry(0.16, 0.16, 0.045);
export class Range {
  constructor(G) {
    this.g = G; this.targets = []; this.t = 0; this.s = { shots: 0, hits: 0, heads: 0 }; this.last = null; this.msg = ''; this.att = JSON.parse(JSON.stringify(G.loadout.att)); this.dummies = [];
    const mk = (x, z, o = {}) => {
      const g = new THREE.Group(), body = new THREE.MeshLambertMaterial({ color: 0xa89468 }), add = (geo, m, y) => { const k = new THREE.Mesh(geo, m); k.position.y = y; k.castShadow = true; g.add(k); return k; };
      add(POST, new THREE.MeshLambertMaterial({ color: 0x2a2d31 }), 0.25); add(BODY, body, 0.975); add(HEAD, body, 1.6); add(RING, new THREE.MeshBasicMaterial({ color: 0xd8d0c0 }), 1.05);
      g.position.set(x, 0, z); G.scene.add(g);
      const c = (y0, y1, hw, zone) => { const col = { x0: x - hw, x1: x + hw, y0, y1, z0: z - 0.03, z1: z + 0.03, solid: false, sight: false, bullet: true, zone }; G.world.colliders.push(col); return col; };
      const t = { g, body, x, z, cols: [c(0.5, 1.45, 0.25, 'body'), c(1.45, 1.75, 0.13, 'head')], down: 0, flash: 0, dmg: 0, ...o }; t.cols.forEach((k) => (k.target = t)); this.targets.push(t); return t;
    };
    STATIC.forEach(([x, z]) => mk(x, z)); MOVING.forEach((m) => mk(m.x, m.z, { move: m })); COVERED.forEach((c) => mk(c.x, c.z, { note: c.note })); PIT.forEach(([x, z]) => mk(x, z, { pit: true })); mk(13.2, -17, { pit: true, note: 'behind the wall' });
    this.spawnDummies();
  }
  spawnDummies() { // two live soldier models that never fight back: for checking hit zones and stopping power
    const G = this.g;
    for (const [x, z] of [[-10.5, -8.5], [11, -40]]) {
      if (this.dummies.some((d) => !d.dead && d.pos.x === x)) continue;
      const e = G.spawnEnemy(x, z, [[x, z]], { duty: 'post', wait: [1e9, 1e9] }); e.pos.set(x, 0, z); e.yaw = e.baseYaw = Math.PI; e.waitT = 1e9; e.passive = true;
      e.hear = () => {}; e.onAlert = () => {}; e.engage = () => {}; e.evade = () => false; e.sync(); this.dummies.push(e);
    }
  }
  falloff(w, d) { return w.falloff && d > w.falloff[0] ? 1 - (1 - w.falloff[1]) * Math.min(1, (d - w.falloff[0]) / (w.falloff[0] * 1.5)) : 1; }
  onShot(r, end, w, first) {
    if (first) { this.s.shots++; this.cur = null; }
    const tgt = r.kind === 'world' && r.wh.c.target, zone = tgt ? r.wh.c.zone : r.kind === 'enemy' ? r.part : null;
    if (!zone) return;
    const dist = Math.hypot(end.x - this.g.player.pos.x, end.z - this.g.player.pos.z), dmg = w.dmg * (zone === 'head' ? w.head || 2.5 : tgt ? 1 : r.mult) * this.falloff(w, r.d);
    if (!this.cur) { this.s.hits++; if (zone === 'head') this.s.heads++; this.cur = this.last = { dist, zone, dmg: 0, n: 0 }; }
    this.cur.dmg += dmg; this.cur.n++; if (zone === 'head') this.cur.zone = 'head';
    if (tgt) { tgt.flash = 0.18; tgt.dmg += dmg; tgt.body.color.setHex(zone === 'head' ? 0xff5a4a : 0xffd060); if (tgt.dmg >= 100) this.drop(tgt); this.g.audio.tone(zone === 'head' ? 1900 : 1300, 0.07, { vol: 0.12, type: 'triangle' }); }
  }
  drop(t) { t.down = 1.8; t.dmg = 0; t.cols.forEach((c) => (c.bullet = false)); }
  onBlast(p) {
    let n = 0;
    for (const t of this.targets) { if (t.down > 0 || Math.hypot(t.x - p.x, t.z - p.z) > 7 || !this.g.losB(p.x, p.y + 0.35, p.z, t.x, 1.1, t.z + 0.06)) continue; this.drop(t); n++; }
    this.msg = `GRENADE: ${n} target${n === 1 ? '' : 's'} knocked down`; this.msgT = 5;
  }
  key(code) { // weapon bench: swap what is in each slot without leaving the range
    const P = this.g.player, cyc = (list, cur) => list[(list.indexOf(cur) + 1) % list.length];
    if (P.busy() || P.adsF > 0.1) return;
    const ids = (slot) => Object.keys(WEAPONS).filter((k) => WEAPONS[k].slot === slot);
    if (code === 'Digit5' || code === 'Digit6') { const i = code === 'Digit5' ? 0 : 1, id = cyc(ids(i ? 'secondary' : 'primary'), P.slots[i].id); P.setSlot(i, id, this.att[id]); P.switchTo(i); }
    else if (P.cur < 2) { const id = P.slot.id, a = this.att[id], w = WEAPONS[id]; if (code === 'Digit7') a.optic = cyc(w.optics, a.optic); else if (code === 'Digit8' && w.muzzle) a.muzzle = !a.muzzle; else return; P.setSlot(P.cur, id, a); }
    this.g.audio.click(0.4);
  }
  update(dt) {
    const G = this.g, P = G.player; this.t += dt;
    for (const t of this.targets) {
      if (t.move) { const x = t.move.x + Math.sin((this.t * t.move.sp) / t.move.amp) * t.move.amp; t.x = x; t.g.position.x = x; t.cols[0].x0 = x - 0.25; t.cols[0].x1 = x + 0.25; t.cols[1].x0 = x - 0.13; t.cols[1].x1 = x + 0.13; }
      if (t.flash > 0 && (t.flash -= dt) <= 0) t.body.color.setHex(0xa89468);
      if (t.down > 0) { t.down -= dt; t.g.rotation.x += ((t.down > 0.3 ? -1.45 : 0) - t.g.rotation.x) * Math.min(1, dt * 12); if (t.down <= 0) { t.g.rotation.x = 0; t.cols.forEach((c) => (c.bullet = true)); } }
    }
    for (const e of this.dummies) { e.percT = 1e9; e.los = false; e.detect = 0; e.waitT = 1e9; if (e.dead && !e.gone && e.deadT > 2.5) { e.gone = true; G.scene.remove(e.ch.root); G.enemies.splice(G.enemies.indexOf(e), 1); } }
    if (this.dummies.some((e) => e.gone)) { this.dummies = this.dummies.filter((e) => !e.gone); this.spawnDummies(); }
    for (const s of P.slots) if (!s.st.melee && s.reserve < s.st.mag) s.reserve = s.st.reserve; // the range never runs dry
    for (const k of ['frag', 'flash', 'smoke']) if (P.inv[k] <= 0 && !G.gren.list.length) P.inv[k] = 3;
    if (P.dead) { P.dead = false; P.hp = 100; P.pos.set(0, 0, 7); P.vel.set(0, 0, 0); }
    if (this.msgT > 0 && (this.msgT -= dt) <= 0) this.msg = '';
  }
  hud() {
    const s = this.s, l = this.last, acc = s.shots ? Math.round((s.hits / s.shots) * 100) : 0;
    return `<div class="o-now">SHOTS ${s.shots} · HITS ${s.hits} · HEAD ${s.heads} · ${acc}%</div>` +
      `<div class="o-now">${l ? `LAST HIT ${l.dist.toFixed(0)} M · ${l.zone.toUpperCase()} · ${Math.round(l.dmg)} DMG${l.n > 1 ? ' (' + l.n + ' pellets)' : ''}` : 'LAST HIT —'}</div>` +
      (this.msg ? `<div class="o-now">${this.msg}</div>` : '') +
      '<div class="o-todo">[5] primary · [6] secondary · [7] optic · [8] suppressor</div><div class="o-todo">Targets at 10 / 25 / 50 / 75 / 100 m · two moving · two behind cover · grenade pit right</div>';
  }
}
