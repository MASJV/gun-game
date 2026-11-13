// Dynamic missions: data-driven templates, objective anchors, seeded variation with anti-repetition,
// validation, and the runtime that tracks stage progression. Map geometry is never regenerated: a mission
// is a choice of entry point, objective anchors (from the map's curated list), stage sequence and exit.
import * as THREE from 'three';
import { rnd } from './world.js';
import { Civ } from './civ.js';

export const MISSIONS = {
  intel: { name: 'INTELLIGENCE RECOVERY', short: 'Intel recovery', desc: 'Obtain classified material and extract', lengths: ['quick', 'standard', 'extended'] },
  capture: { name: 'HIGH-VALUE TARGET CAPTURE', short: 'HVT capture', desc: 'Take the target alive and bring him out', lengths: ['quick', 'standard', 'extended'] },
  sabotage: { name: 'SABOTAGE OPERATION', short: 'Sabotage', desc: 'Disable facility infrastructure', lengths: ['quick', 'standard', 'extended'] },
  rescue: { name: 'HOSTAGE RESCUE', short: 'Hostage rescue', desc: 'Free the hostage and escort them out', lengths: ['quick', 'standard', 'extended'] },
  multi: { name: 'TACTICAL OPERATION', short: 'Tactical operation', desc: 'Linked objectives across the site', lengths: ['standard', 'extended'] },
};
export const LENGTHS = {
  quick: { name: 'QUICK', desc: '1 objective · about 4–8 min', extra: 0 },
  standard: { name: 'STANDARD', desc: '2 linked objectives · about 7–12 min', extra: 1 },
  extended: { name: 'EXTENDED', desc: '3 linked objectives · stronger security', extra: 2 },
};
// stage sequences per type / length; one is picked by the seed
const PLANS = {
  intel: { quick: [['retrieve'], ['hack']], standard: [['keycard', 'hack'], ['search', 'hack']], extended: [['sab:security', 'keycard', 'hack'], ['sab:power', 'search', 'hack']] },
  capture: { quick: [['capture']], standard: [['sab:comms', 'capture'], ['hack', 'capture']], extended: [['sab:comms', 'hack', 'capture'], ['sab:power', 'keycard', 'capture']] },
  sabotage: { quick: [['sab:comms'], ['sab:security'], ['sab:power'], ['sab:charge']], standard: [['sab:comms', 'sab:charge'], ['sab:security', 'sab:power'], ['sab:power', 'sab:charge'], ['sab:comms', 'sab:security']], extended: [['sab:comms', 'sab:security', 'sab:charge'], ['sab:power', 'sab:comms', 'sab:charge']] },
  rescue: { quick: [['rescue']], standard: [['keycard', 'rescue'], ['sab:security', 'rescue']], extended: [['sab:comms', 'keycard', 'rescue'], ['sab:power', 'hack', 'rescue']] },
  multi: { standard: [['sab:security', 'retrieve'], ['sab:comms', 'hack'], ['keycard', 'sab:charge']], extended: [['sab:comms', 'retrieve', 'rescue'], ['sab:security', 'hack', 'capture'], ['keycard', 'hack', 'sab:charge']] },
};
const STAGE = {
  retrieve: { title: 'Recover the intelligence package', obj: 'intel', hold: 0, prompt: 'Take intelligence package', done: 'INTEL SECURED' },
  hack: { title: 'Access the secure terminal', obj: 'terminal', hold: 3, prompt: 'Hold to access secure terminal', done: 'DATA EXTRACTED', indoor: 1 },
  keycard: { title: 'Obtain the access credential', obj: 'keycard', hold: 0, prompt: 'Take access credential', done: 'CREDENTIAL ACQUIRED' },
  search: { title: 'Find the classified file (3 possible locations)', obj: 'case', hold: 1.2, prompt: 'Hold to search document case', done: 'CLASSIFIED FILE FOUND', anchors: 3 },
  'sab:comms': { title: 'Disable the communications relay', obj: 'radio', hold: 2.5, prompt: 'Hold to disable communications', done: 'COMMUNICATIONS DOWN — NO RADIO REPORTS, NO REINFORCEMENTS', indoor: 1 },
  'sab:security': { title: 'Disable the security control system', obj: 'secpanel', hold: 2.5, prompt: 'Hold to disable security control', done: 'SECURITY CONTROL OFFLINE — THE ALARM CANNOT BE RAISED', indoor: 1 },
  'sab:power': { title: 'Shut down the generator', obj: 'generator', hold: 2.5, prompt: 'Hold to shut down generator', done: 'POWER DOWN — THE SITE IS DARK', fixed: { forest: 'generator', warehouse: 'machine' } },
  'sab:charge': { title: 'Plant a demolition charge', obj: 'charge', hold: 3, prompt: 'Hold to plant charge', done: 'CHARGE PLANTED — 12 SECONDS, GET CLEAR' },
  capture: { title: 'Capture the target alive', civ: 'hvt', hold: 1.5, prompt: 'Hold to restrain target', done: 'TARGET IN CUSTODY — ESCORT HIM TO EXTRACTION' },
  rescue: { title: 'Free the hostage', civ: 'hostage', hold: 1.5, prompt: 'Hold to free hostage', done: 'HOSTAGE FREED — ESCORT THEM TO EXTRACTION' },
};

function seeded(seed) { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const d2 = (a, b) => Math.hypot(a[0] - b[0], a[a.length - 1] - b[b.length - 1]);
const KEY = 'sp21_history';
export function loadHistory() { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; } }
export function saveHistory(h) { try { localStorage.setItem(KEY, JSON.stringify(h)); } catch (e) { /* ignore */ } }
export function recordMission(h, m) { // remember recent layouts per map so the next run goes somewhere else
  const r = h[m.map] || (h[m.map] = { zones: [], entry: null, exit: null, plan: null });
  r.zones = [m.primary.id, ...r.zones.filter((z) => z !== m.primary.id)].slice(0, 5); r.entry = m.entry.id; r.exit = m.exit.id; r.plan = m.plan.join('>');
  saveHistory(h);
}

function build(W, o, seed, hist, relax) {
  const rng = seeded(seed), pick = (a) => a[Math.floor(rng() * a.length)], H = hist[W.id] || { zones: [] };
  let plans = PLANS[o.type][o.length]; const fresh = plans.filter((p) => p.join('>') !== H.plan); if (fresh.length) plans = fresh;
  const plan = pick(plans);
  const entries = W.entries.filter((e) => e.id !== H.entry || W.entries.length === 1 || relax), entry = pick(entries.length ? entries : W.entries);
  const ep = [entry.x, entry.z], used = new Set(), stages = [];
  const lastPrimary = W.anchors.find((a) => a.id === H.zones[0]);
  const choose = (kind, primary) => {
    const S = STAGE[kind];
    if (S.fixed) { const a = W.anchors.find((x) => x.id === S.fixed[W.id]); if (a && !used.has(a.id)) return a; }
    let best = null, bs = -1e9;
    for (const a of W.anchors) {
      if (used.has(a.id) || d2(a.at, ep) < (relax ? 14 : 24)) continue;
      if ((S.indoor || S.civ) && !a.indoor && !relax) continue;
      const rec = H.zones.indexOf(a.id);
      let s = rng() * 2;
      if (rec >= 0) s -= primary ? 6 - rec : 1.5;                              // rotate through zones before repeating
      if (primary && lastPrimary && a !== lastPrimary && d2(a.at, lastPrimary.at) < 16) s -= 2; // not right next door either
      for (const st of stages) for (const b of st.anchors) if (d2(a.at, b.at) < 12) s -= 1.5;    // spread the objectives out
      if (s > bs) { bs = s; best = a; }
    }
    return best;
  };
  for (let i = 0; i < plan.length; i++) {
    const kind = plan[i], S = STAGE[kind], n = S.anchors || 1, as = [];
    for (let k = 0; k < n; k++) { const a = choose(kind, i === plan.length - 1 && k === 0); if (!a) return null; used.add(a.id); as.push(a); }
    stages.push({ kind, ...S, anchors: as, correct: Math.floor(rng() * n), done: false });
  }
  const primary = stages[stages.length - 1].anchors[0];
  let fallback = null; // where a threatened HVT runs to
  if (stages.some((s) => s.civ === 'hvt')) { const c = W.anchors.filter((a) => !used.has(a.id) && d2(a.at, primary.at) > 14 && d2(a.at, primary.at) < 60); fallback = c.length ? pick(c) : null; }
  let exits = W.exits.filter((x) => d2(x.pos, primary.at) > 18 && d2(x.pos, ep) > 12); if (!exits.length) exits = W.exits;
  const ex2 = exits.filter((x) => x.id !== H.exit); const exit = pick(ex2.length ? ex2 : exits);
  return { map: W.id, type: o.type, length: o.length, seed, plan, entry, stages, primary, fallback, exit };
}
// every generated mission must be physically completable: all waypoints stand on free cells and are connected in order
export function validate(W, m) {
  const nav = W.nav, pts = [[m.entry.x, m.entry.z]];
  for (const s of m.stages) for (const a of s.anchors) {
    const c = nav.nearest(a.stand[0], a.stand[1]);
    if (!c || Math.hypot(c.x - a.stand[0], c.z - a.stand[1]) > 1.3 || Math.hypot(c.x - a.at[0], c.z - a.at[2]) > 2.3 || Math.abs(c.y - (a.at[1] > 0.5 && !a.indoor ? 0 : c.y)) > 2) return `anchor ${a.id} not standable`;
    pts.push([c.x, c.z]);
  }
  if (m.fallback) pts.splice(pts.length, 0, m.fallback.stand);
  pts.push([m.exit.pos[0], m.exit.pos[2]]);
  if (nav.blocked(m.entry.x, m.entry.z)) return 'entry blocked';
  for (let i = 0; i < pts.length - 1; i++) if (!nav.path(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1])) return `no route between waypoint ${i} and ${i + 1}`;
  return null;
}
export function generateMission(W, o, hist = {}) {
  const base = o.seed != null ? o.seed >>> 0 : (Math.random() * 4294967296) >>> 0;
  for (let i = 0; i < 28; i++) { const m = build(W, o, (base + i * 7919) >>> 0, hist, i > 14); if (m && !validate(W, m)) return m; }
  // safe fallback: the classic layout of this map with a single objective
  const kind = o.type === 'capture' ? 'capture' : o.type === 'rescue' ? 'rescue' : o.type === 'sabotage' ? 'sab:comms' : 'retrieve', a = W.anchors[0];
  return { map: W.id, type: o.type, length: 'quick', seed: base, plan: [kind], entry: W.entries[0], stages: [{ kind, ...STAGE[kind], anchors: [a], correct: 0, done: false }], primary: a, fallback: null, exit: W.exits[0], fallbackUsed: true };
}
export function briefing(m) {
  const lines = m.stages.map((s, i) => `${i + 1}. ${s.title}${s.civ || s.kind === 'search' ? '' : ' — ' + s.anchors[0].name}`);
  lines.push(`${m.stages.length + 1}. Extract via the ${m.exit.name}`);
  return lines;
}
// guard deployment for this mission: objective detail on the primary zone, a sentry on each other objective
export function deployment(W, m, total) {
  const ep = [m.entry.x, m.entry.z], out = [], far = (p, r = 26) => d2(p, ep) > r, sh = (a) => [...a].sort(() => Math.random() - 0.5);
  sh(m.primary.posts).filter((p) => far(p)).slice(0, 3).forEach((p) => out.push({ p, duty: 'objective', wait: [5, 12] }));
  for (const s of m.stages) for (const a of s.anchors) if (a !== m.primary) sh(a.posts).filter((p) => far(p)).slice(0, s.kind === 'search' ? 1 : 2).forEach((p, i) => i < (m.stages.length > 2 ? 1 : 2) && out.push({ p, duty: 'post', wait: [6, 14] }));
  const taken = (p) => out.some((o) => d2(o.p, p) < 3);
  for (const p of sh(W.posts.entrance.map((q) => [q[0], q[1]]))) { if (out.length >= total - 3) break; if (far(p, 30) && !taken(p)) out.push({ p, duty: 'post', wait: [6, 14] }); }
  for (const r of sh(W.routes)) { if (out.length >= total) break; const pts = r.p.filter((p) => far(p, 30)); if (pts.length) out.push({ p: pts[Math.floor(Math.random() * pts.length)], duty: 'patrol', route: r.p }); }
  return out;
}

// ---------- runtime ----------
export class Mission {
  constructor(G, def) { this.g = G; this.def = def; this.i = 0; this.hold = 0; this.items = []; this.civ = null; this.failed = null; this.timers = []; this.t = 0; this.hasKey = false; }
  get stage() { return this.def.stages[this.i] || null; }
  get complete() { return this.i >= this.def.stages.length; }
  begin() {
    const G = this.g;
    this.def.stages.forEach((s, si) => {
      if (s.civ) { const a = s.anchors[0]; this.civ = new Civ(G, s.civ, a.stand[0], a.stand[1], this.def.fallback); s.civRef = this.civ; G.civs.push(this.civ); return; }
      s.anchors.forEach((a, k) => this.items.push({ stage: si, k, kind: s.obj, pos: a.at, mesh: G.makeInteractable(s.obj, a.at[0], a.at[1], a.at[2]), taken: false }));
    });
    this.refocus();
  }
  // where the current objective is believed to be (drives the HUD marker and what security protects)
  focus() {
    const s = this.stage;
    if (!s) return this.def.exit.pos;
    if (s.civ) { const c = s.civRef; return c.state === 'follow' || c.vis ? [c.pos.x, c.pos.y, c.pos.z] : c.lastSeen ? c.lastSeen : c.moved && c.reachedHint ? this.def.fallback.at : s.anchors[0].at; } // last known, never live tracking
    if (s.kind === 'search') { const it = this.items.find((x) => x.stage === this.i && !x.taken); return it ? it.pos : s.anchors[0].at; }
    return s.anchors[0].at;
  }
  refocus() { const W = this.g.world, s = this.stage, a = s ? s.anchors[0] : this.def.primary; W.objective.pos = a.at; W.posts.objective = a.posts; }
  lines() { // HUD objective list
    const out = this.def.stages.map((s, i) => ({ t: s.title + (s.civ && s.civRef.moved && i === this.i && s.civRef.state !== 'follow' ? ' — he has moved' : ''), state: i < this.i ? 'done' : i === this.i ? 'now' : 'todo' }));
    out.push({ t: `Extract — ${this.def.exit.name}` + (this.civ && this.complete && !this.civNear() ? ' (bring ' + (this.civ.kind === 'hvt' ? 'the target' : 'the hostage') + ')' : ''), state: this.complete ? 'now' : 'locked' });
    return out;
  }
  civNear() { const c = this.civ, e = this.def.exit.pos; return !c || (!c.dead && Math.hypot(c.pos.x - e[0], c.pos.z - e[2]) < 8); }
  fail(reason) { if (!this.failed) this.failed = reason; }
  finish(s) {
    const G = this.g, sec = G.sec, a = s.anchors[0], last = this.i === this.def.stages.length - 1;
    s.done = true; this.i++; this.hold = 0; G.audio.objective(); G.toast(s.done2 || STAGE[s.kind].done, 4);
    if (s.civ && !sec.commsDown) this.timers.push({ t: 4, fn: () => { if (sec.sealExits()) G.say(G.enemies.find((e) => !e.dead) || { pos: G.player.pos }, 'Seal the exits! Nobody leaves!'); } });
    if (s.kind === 'keycard') this.hasKey = true;
    else if (s.kind === 'sab:comms') sec.commsDown = true;
    else if (s.kind === 'sab:security') sec.panelDown = true;
    else if (s.kind === 'sab:power') G.setPower(false);
    else if (s.kind === 'sab:charge') this.timers.push({ t: 12, fn: () => { G.gren.detonate({ type: 'frag', pos: new THREE.Vector3(a.at[0], a.at[1] + 0.3, a.at[2]), owner: 'charge' }); sec.raise(2, 'EXPLOSION ON SITE'); sec.setReport(a.at[0], a.at[2], null, 'body'); } });
    // security consequences: nothing here tells the guards where the operator is - only which system was touched
    if (last && s.kind !== 'sab:charge') {
      if (sec.panelDown) G.toast(STAGE[s.kind].done + ' — NO ALARM: SECURITY CONTROL IS OFFLINE', 4);
      else { sec.report = { x: a.at[0], z: a.at[2], t: sec.t, kind: 'alarm' }; sec.lockdown(s.civ ? 'SITE LOCKDOWN — THEY KNOW' : 'SILENT ALARM — LOCKDOWN'); }
    } else if (!last) this.timers.push({ t: rnd(25, 45), fn: () => sec.discover(a) }); // sooner or later someone checks the damaged system
    this.refocus();
  }
  // per-frame: interaction with the current objective. Returns the prompt text (or '').
  update(dt, inp) {
    const G = this.g, P = G.player, s = this.stage; this.t += dt;
    if (!G.mp || G.mp.host) for (let i = this.timers.length - 1; i >= 0; i--) if ((this.timers[i].t -= dt) <= 0) { const f = this.timers[i].fn; this.timers.splice(i, 1); f(); }
    if (this.civ && this.civ.dead && (!G.mp || G.mp.host)) this.fail(this.civ.kind === 'hvt' ? 'THE TARGET WAS KILLED' : 'THE HOSTAGE WAS KILLED');
    if (!s) return '';
    const near = (p, r = 2.5) => Math.hypot(p[0] - P.pos.x, p[2] - P.pos.z) < r && Math.abs(p[1] - P.pos.y) < 2.2;
    let target = null, prompt = '';
    if (s.civ) { const c = s.civRef; if (c.canSecure() && near([c.pos.x, c.pos.y, c.pos.z], 2.4)) target = c; else if (!c.dead && c.kind === 'hvt' && c.state !== 'surrender' && near([c.pos.x, c.pos.y, c.pos.z], 9) && c.seenByPlayer) prompt = 'Get close — he will give up'; }
    else target = this.items.find((it) => it.stage === this.i && !it.taken && near(it.pos));
    if (!target) { this.hold = Math.max(0, this.hold - dt * 2); return prompt; }
    prompt = `<b>E</b>${s.prompt}`;
    const need = s.hold;
    if (need ? inp.k.KeyE : inp.e) {
      this.hold += dt;
      if (!need || this.hold >= need) {
        this.hold = 0;
        // multiplayer client: the host decides; ask once and wait for its mission state
        if (G.mp && !G.mp.host) { if (!(this.asked > this.t)) { this.asked = this.t + 1; G.mp.request({ k: 'obj', stage: this.i, item: s.civ ? -1 : this.items.indexOf(target) }); } }
        else this.interact(target);
      }
    } else this.hold = Math.max(0, this.hold - dt * 2);
    return prompt;
  }
  // completes the current objective at target (an item, or the civilian) - the local player or, on a multiplayer
  // host, a teammate's validated request
  interact(target) {
    const G = this.g, s = this.stage; if (!s) return false;
    if (s.civ) { if (!target.canSecure()) return false; target.secure(); this.finish(s); return true; }
    if (target.stage !== this.i || target.taken) return false;
    if (s.kind === 'search' && target.k !== s.correct && this.items.filter((it) => it.stage === this.i && !it.taken).length > 1) { this.takeItem(target); G.toast('NOTHING HERE — CHECK THE NEXT LOCATION', 2.5); G.audio.click(0.5); return true; }
    this.takeItem(target); for (const it of this.items) if (it.stage === this.i && !it.taken && s.kind === 'search') this.takeItem(it);
    this.finish(s); return true;
  }
  takeItem(it) { // also used by multiplayer clients when the host's mission state arrives
    if (it.taken) return; it.taken = true; const s = this.def.stages[it.stage];
    if (it.mesh.screen) it.mesh.screen.material.color.setHex(0xffb648); else if (s.kind !== 'sab:charge') this.g.scene.remove(it.mesh);
  }
}
