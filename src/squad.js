// Facility security state + lightweight squad coordinator.
// Information only moves the way the facility could move it: shouts reach nearby guards, radio calls
// publish a (noisy) position report, the alarm panel raises a lockdown. Nobody receives the player's
// live position from here - orders are built from the last *report*.
import { rnd } from './world.js';

export const LEVELS = ['NORMAL', 'SUSPICIOUS', 'ALERT', 'LOCKDOWN'];
const rr = (a) => rnd(a[0], a[1]);

export class Security {
  constructor(G, profile) {
    this.g = G; this.pr = profile; this.level = 0; this.t = 0; this.calm = 0; this.report = null; this.tick = 0;
    this.commsDown = false; this.panelDown = false; // set by sabotage objectives
    this.sector = new Float32Array(8); this.runner = null; this.alarmAt = -1; this.nadeCool = 6; this.reinforced = false; this.reinAt = -1; this.assigned = -1;
  }
  raise(level, msg) {
    this.calm = 0;
    if (level <= this.level) return false;
    this.level = level; this.g.onSecurity(level, msg);
    if (level >= 2) for (const e of this.g.enemies) if (!e.dead) e.alerted = true; // everyone is told *that* there is a threat
    return true;
  }
  sectorOf(x, z) { const o = this.g.world.objective.pos; return ((Math.round(Math.atan2(x - o[0], z - o[2]) / (Math.PI / 4)) % 8) + 8) % 8; }
  hotSector() { let b = -1, v = 1.5; for (let i = 0; i < 8; i++) if (this.sector[i] > v) { v = this.sector[i]; b = i; } return b; }
  setReport(x, z, by, kind) {
    const n = kind === 'body' ? 0 : 3.5;
    this.report = { x: x + rnd(-n, n), z: z + rnd(-n, n), t: this.t, by, kind };
    this.sector[this.sectorOf(x, z)] += 1;
    this.assign();
  }
  // a guard gets a radio call out ("contact" / "man down")
  radio(e, kind, x, z) {
    if (this.commsDown) { this.g.say(e, 'Radio is dead — no signal!'); this.g.shout(e); return; } // sabotaged relay: word of mouth only
    const first = this.raise(2, kind === 'body' ? 'MAN DOWN REPORTED' : 'INTRUDER REPORTED');
    this.setReport(x, z, e, kind);
    this.g.say(e, kind === 'body' ? 'Man down! Sweep the area!' : first ? 'Contact! Intruder on site!' : 'Contact, updating position!');
    if (first && this.g.world.panel) this.alarmAt = Math.random() < this.pr.alarmChance ? this.t + rr(this.pr.alarmDelay) : Infinity;
  }
  suspicious() { this.raise(1, ''); }
  // a sabotaged / emptied objective is eventually noticed: the nearest free guard is sent to look at it
  discover(anchor) {
    const G = this.g, c = G.enemies.filter((e) => !e.dead && !e.engaged() && e.stun <= 0 && e.state !== 'ALARM').sort((a, b) => Math.hypot(a.pos.x - anchor.at[0], a.pos.z - anchor.at[2]) - Math.hypot(b.pos.x - anchor.at[0], b.pos.z - anchor.at[2]))[0];
    if (!c) return;
    this.raise(1, ''); c.alerted = true; c.setOrder({ type: 'investigate', x: anchor.stand[0], z: anchor.stand[1] }); G.say(c, `Checking the ${anchor.name}.`);
  }
  lockdown(msg) {
    if (!this.raise(3, msg)) return;
    if (!this.reinforced && !this.commsDown) { this.reinforced = true; this.reinAt = this.t + rnd(12, 18); } // no relay, nobody to call
    this.assign(true);
  }
  // may this (elite) squad member break cover to move right now? Someone else must be covering.
  mayMove(e) {
    if (!this.pr.bound) return true;
    const eng = this.g.enemies.filter((o) => !o.dead && o !== e && o.engaged());
    if (!eng.length) return true;
    const moving = eng.filter((o) => o.state === 'MOVE').length, covering = eng.filter((o) => o.state === 'COVER' || o.seeing).length;
    return covering >= 1 && moving < Math.ceil((eng.length + 1) / 2);
  }
  // Orders for guards that are not in contact, built from the last report only.
  assign(force) {
    const G = this.g, R = this.report, W = G.world;
    if (!R || this.level < 2) return;
    this.assigned = R.t;
    const free = G.enemies.filter((e) => !e.dead && !e.engaged() && e !== this.runner && e.stun <= 0 && e.state !== 'ALARM');
    const d2 = (e, x, z) => Math.hypot(e.pos.x - x, e.pos.z - z);
    const defenders = G.enemies.filter((e) => !e.dead && e.duty === 'objective');
    for (const e of free) if (e.duty === 'objective') e.setOrder({ type: 'defend', x: e.home[0], z: e.home[1], tx: R.x, tz: R.z });
    const rest = free.filter((e) => e.duty !== 'objective').sort((a, b) => d2(a, R.x, R.z) - d2(b, R.x, R.z));
    const nInv = this.level === 3 ? 1 : 2, o = W.objective.pos;
    rest.splice(0, nInv).forEach((e, i) => e.setOrder({ type: 'investigate', x: R.x + (i ? rnd(-5, 5) : 0), z: R.z + (i ? rnd(-5, 5) : 0), flank: i > 0 && this.pr.flank > 0.3 }));
    if (this.pr === undefined || this.pr.label === 'RECRUIT') return; // recruits: the rest just stay alert on their rounds
    if (defenders.length < 2 && rest.length) { const e = rest.shift(), p = W.posts.objective[0]; e.duty = 'objective'; e.home = p; e.setOrder({ type: 'defend', x: p[0], z: p[1], tx: R.x, tz: R.z }); }
    // remaining guards secure the approaches between the report and the objective, favouring a repeatedly used approach
    const hot = this.hotSector(), used = new Set();
    for (const e of rest) {
      let best = null, bs = 1e9;
      W.posts.entrance.forEach((p, i) => {
        if (used.has(i)) return;
        let s = Math.hypot(p[0] - R.x, p[1] - R.z) + Math.hypot(p[0] - o[0], p[1] - o[2]) * 0.6 + d2(e, p[0], p[1]) * 0.3;
        if (hot >= 0 && this.sectorOf(p[0], p[1]) === hot) s -= 8;
        if (s < bs) { bs = s; best = i; }
      });
      if (best === null) break;
      used.add(best); const p = W.posts.entrance[best];
      e.setOrder({ type: 'defend', x: p[0], z: p[1], tx: R.x, tz: R.z, name: p[2] });
    }
  }
  update(dt) {
    const G = this.g; this.t += dt; this.calm += dt; this.nadeCool -= dt;
    const alive = G.enemies.filter((e) => !e.dead), engaged = alive.filter((e) => e.engaged());
    if (engaged.length) this.calm = 0;
    if (this.level === 1 && this.calm > 30) { this.level = 0; G.onSecurity(0, ''); }
    if (this.level === 2 && this.calm > 80) { this.level = 1; this.calm = 0; G.onSecurity(1, 'SEARCH CALLED OFF'); for (const e of alive) e.order = null; }
    if (this.reinAt > 0 && this.t >= this.reinAt) { this.reinAt = -1; G.reinforce(); }
    if ((this.tick -= dt) > 0) return;
    this.tick = 0.6;
    // combat roles among guards that share a contact
    if (this.pr.label !== 'RECRUIT') {
      let i = 0;
      for (const e of engaged) {
        if (e.duty === 'objective') { e.tac = 'hold'; continue; }
        if (this.pr.bound) e.tac = e.aggr > 0.65 ? 'push' : e.caut > 0.65 ? 'overwatch' : i % 2 ? 'flank' : 'suppress';
        else e.tac = ['hold', 'flank', 'hold', 'push'][i % 4];
        i++;
      }
      if (this.pr.bound && engaged.length > 1 && !engaged.some((e) => e.tac === 'suppress' || e.tac === 'overwatch')) engaged[0].tac = 'suppress';
    }
    // someone runs for the alarm panel once an alert is confirmed
    if (this.runner && (this.runner.dead || this.runner.state !== 'ALARM')) { if (this.level < 3 && this.runner.dead) this.alarmAt = this.t + rr(this.pr.alarmDelay); this.runner = null; }
    if (this.level === 2 && G.world.panel && !this.panelDown && !this.runner && this.alarmAt >= 0 && this.t >= this.alarmAt) {
      const P = G.world.panel, c = alive.filter((e) => !e.engaged() && e.stun <= 0).sort((a, b) => Math.hypot(a.pos.x - P.x, a.pos.z - P.z) - Math.hypot(b.pos.x - P.x, b.pos.z - P.z))[0];
      if (c && c.goAlarm()) { this.runner = c; G.say(c, 'Going for the alarm!'); } else this.alarmAt = this.t + 3;
    }
    if (this.level >= 2 && this.report && this.assigned !== this.report.t) this.assign();
  }
}
