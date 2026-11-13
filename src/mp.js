// LAN co-op (2-4 players). Roles:
//  * HOST (the party leader's game): the one authoritative simulation. Enemies, civilians, security, grenades,
//    objectives, extraction, every player's health. Teammates' shots, throws, interactions and revives arrive as
//    requests and are validated here (position, rate, magazine, inventory, distance) before they change anything.
//  * CLIENTS: simulate and render only their own operator (full local responsiveness), show enemies / civilians
//    as interpolated puppets of the host's snapshots, and apply the host's mission state and events.
//  * The Node server (server/lan.cjs) owns membership and routing; it stamps every message with its real sender.
import * as THREE from 'three';
import { Net, parseAddress } from './net.js';
import { Character } from './character.js';
import { Enemy, PROFILES } from './enemy.js';
import { WEAPONS, KITS, statsFor, attText } from './weapons.js';
import { MISSIONS, LENGTHS } from './missions.js';
import { rayBoxes } from './world.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const r2 = (v) => Math.round(v * 100) / 100, r3 = (v) => Math.round(v * 1000) / 1000;
const fin = (...a) => a.every((v) => typeof v === 'number' && Number.isFinite(v));
const v3ok = (a) => Array.isArray(a) && a.length === 3 && fin(a[0], a[1], a[2]) && Math.abs(a[0]) < 500 && Math.abs(a[1]) < 100 && Math.abs(a[2]) < 500;
const wrap = (a) => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };
const lerpA = (a, b, t) => a + wrap(b - a) * t;
const now = () => performance.now();

export const MP_CONST = { INTERP: 100, SEND_ST: 50, SEND_SNAP: 66, BLEED: 45, REVIVE_T: 3.5, REVIVE_HP: 35, EXTRACT_R: 4, REWIND_MAX: 0.35 };
const C = MP_CONST;
const F = { crouch: 1, ads: 2, sprint: 4, reload: 8, ground: 16, mantle: 32, use: 64, jump: 128 };
const EF = { crouch: 1, aim: 2, dead: 4, stun: 8, reload: 16, trav: 32, knock: 64 };
const CIV_STATES = ['held', 'idle', 'flee', 'cower', 'surrender', 'follow'];
const ST = { ok: 0, down: 1, kia: 2, gone: 3 };

// ===================================================================================== remote operator
class RemotePlayer {
  constructor(G, info) {
    this.g = G; this.id = info.id; this.name = info.name; this.slot = info.slot; this.loadout = info.loadout;
    this.ch = new Character('ally', info.loadout.primary); G.scene.add(this.ch.root);
    this.buf = []; this.pos = new THREE.Vector3(); this.vel = new THREE.Vector3(); this.eyePos = new THREE.Vector3(); this.view = new THREE.Vector3();
    this.yaw = 0; this.pitch = 0; this.speed = 0; this.crouch = false; this.leanX = 0; this.leanZ = 0; this.lean = 0; this.flags = 0; this.w = info.loadout.primary;
    this.hp = 100; this.downed = false; this.kia = false; this.connected = true; this.bleed = 0; this.have = false;
    this.fireT = 0; this.lastRel = false; this.lastSt = 0; this.stepT = 0; this.as = { speed: 0, crouch: false, aim: false, pitch: 0, lean: 0 };
    // what the host knows about this operator's gear (authoritative for validation)
    const k = KITS[info.loadout.kit] || KITS.assault; this.inv = { frag: k.frag, flash: k.flash, smoke: k.smoke, med: k.med, stim: k.stim };
    this.stats = {}; this.mag = {}; this.reserve = {}; this.lastFire = {};
    for (const id of [info.loadout.primary, info.loadout.secondary]) { const st = statsFor(id, info.loadout.att[id] || {}); this.stats[id] = st; this.mag[id] = st.mag; this.reserve[id] = st.reserve; this.lastFire[id] = -1e9; }
    this.score = { kills: 0, shots: 0, hits: 0, heads: 0, revives: 0, downs: 0 };
    const tag = (this.tag = document.createElement('div')); tag.className = 'mptag'; tag.innerHTML = `<b></b><i><u></u></i>`; $('mptags').appendChild(tag); tag.querySelector('b').textContent = this.name;
  }
  get height() { return this.crouch ? 1.15 : 1.78; }
  get dead() { return this.downed || this.kia || !this.connected || !this.have; } // what the AI may target (Enemy code reads P.dead)
  damage(d, from, info) { if (this.g.mp) this.g.mp.hurt(this, d, from, info); } // host only: enemy rounds and blasts
  // latest state, straight from the wire (the host's AI and validation use this; rendering uses the buffer)
  apply(m) {
    this.pos.set(m.x, m.y, m.z); this.vel.set(m.vx || 0, 0, m.vz || 0); this.yaw = m.yw; this.pitch = m.pt; this.speed = m.sp; this.flags = m.f | 0; this.crouch = !!(this.flags & F.crouch);
    this.lean = m.ln || 0; this.leanX = Math.cos(this.yaw) * this.lean * 0.35; this.leanZ = -Math.sin(this.yaw) * this.lean * 0.35;
    this.eyePos.set(this.pos.x + this.leanX, this.pos.y + (this.crouch ? 1.05 : 1.62), this.pos.z + this.leanZ); this.have = true;
  }
  push(m) { this.buf.push({ t: now(), x: m.x, y: m.y, z: m.z, yw: m.yw, pt: m.pt, sp: m.sp, f: m.f | 0, ln: m.ln || 0, w: m.w }); if (this.buf.length > 30) this.buf.shift(); }
  // render state: C.INTERP ms in the past, interpolated between the two packets around it
  sample() {
    const b = this.buf; if (!b.length) return null;
    const rt = now() - C.INTERP;
    let i = b.length - 1; while (i > 0 && b[i - 1].t > rt) i--;
    const a = b[Math.max(0, i - 1)], c = b[i];
    if (a === c || c.t <= a.t) return c;
    const k = Math.max(0, Math.min(1.15, (rt - a.t) / (c.t - a.t)));
    return { x: a.x + (c.x - a.x) * k, y: a.y + (c.y - a.y) * k, z: a.z + (c.z - a.z) * k, yw: lerpA(a.yw, c.yw, k), pt: a.pt + (c.pt - a.pt) * k, sp: c.sp, f: c.f, ln: a.ln + (c.ln - a.ln) * k, w: c.w };
  }
  render(dt, cam) {
    const s = this.sample(), ch = this.ch;
    if (!s) { ch.root.visible = false; this.tag.style.display = 'none'; return; }
    ch.root.visible = this.connected || this.kia;
    ch.root.position.set(s.x, s.y, s.z); ch.root.rotation.y = s.yw;
    this.view.set(s.x, s.y + ((s.f & F.crouch) ? 1.05 : 1.62), s.z); this.renderYaw = s.yw; this.renderPitch = s.pt;
    if (s.w && s.w !== ch.gunId && s.w !== 'knife' && WEAPONS[s.w]) ch.setGun(s.w);
    if (ch.gun) ch.gun.visible = s.w !== 'knife';
    const rel = !!(s.f & F.reload); if (rel && !this.lastRel && !this.downed) ch.playUpper('Pistol_Reload', { speed: 0.9 }); this.lastRel = rel;
    if ((s.f & F.mantle) && !this.lastMantle) ch.playFull('ClimbUp_1m', { speed: 2.3 }); this.lastMantle = !!(s.f & F.mantle);
    this.fireT -= dt;
    const as = this.as; as.speed = this.downed || this.kia ? 0 : s.sp; as.crouch = !!(s.f & F.crouch); as.aim = !this.downed && ((s.f & F.ads) !== 0 || this.fireT > 0); as.pitch = s.pt; as.lean = s.ln;
    ch.tick(dt, as, 1);
    // name tag
    const tag = this.tag, p = this.view.set(s.x, s.y + 2.05, s.z).project(cam), dist = cam.position.distanceTo(ch.root.position);
    if (p.z > 1 || dist > 90 || !ch.root.visible) tag.style.display = 'none';
    else {
      tag.style.display = 'block'; tag.style.left = ((p.x + 1) / 2) * innerWidth + 'px'; tag.style.top = ((1 - p.y) / 2) * innerHeight + 'px';
      tag.className = 'mptag' + (this.kia ? ' kia' : this.downed ? ' down' : !this.connected ? ' gone' : '');
      tag.querySelector('u').style.width = Math.max(0, this.hp) + '%';
      tag.querySelector('b').textContent = this.name + (this.kia ? ' — KIA' : this.downed ? ` — DOWN ${Math.ceil(this.bleed)}s` : !this.connected ? ' — LINK LOST' : '');
    }
    this.view.set(s.x, s.y + ((s.f & F.crouch) ? 1.05 : 1.62), s.z);
  }
  setStatus(st, hp, bleed) {
    const was = this.downed || this.kia;
    this.hp = hp; this.bleed = bleed; this.downed = st === ST.down; this.kia = st === ST.kia;
    if (st === ST.gone) this.connected = false; else if (st !== ST.gone && !this.connected && st === ST.ok) this.connected = true;
    const ch = this.ch;
    if ((this.downed || this.kia) && !was) ch.playFull(this.kia ? 'Death01' : 'Hit_Knockback', { hold: true, speed: 1.1 });
    else if (!this.downed && !this.kia && was && ch.fOne) ch.fOne.dur = ch.fOne.t + 0.3; // revived: get up
  }
  dispose() { this.g.scene && this.g.scene.remove(this.ch.root); this.tag.remove(); }
}

// ===================================================================================== lobby (menu tab)
export function initLobby(G, H) {
  const L = { id: 0, code: '', leader: false, lobby: null, lan: [], port: 8787, host: '', status: 'idle' };
  const net = (L.net = new Net(onMsg, onStatus));
  const nameEl = $('mpname'), addrEl = $('mpaddr'), codeEl = $('mpcode');
  try { nameEl.value = localStorage.getItem('sp_mpname') || ''; addrEl.value = localStorage.getItem('sp_mpaddr') || ''; } catch (e) { /* storage off */ }
  const served = /^https?:$/.test(location.protocol);
  if (served) { addrEl.value = location.host; addrEl.placeholder = location.host; }
  const q = /[?&]join=([A-Za-z0-9]{4,8})/.exec(location.search);
  if (q) { codeEl.value = q[1].toUpperCase(); H.openTab('mp'); }
  const msg = (t, bad) => { const e = L.code ? $('mpmsg') : $('mperr'); e.textContent = t || ''; e.style.color = bad ? '#ff7a6a' : '#9fe8b0'; };
  L.msg = msg;
  const view = () => { $('mpconn').style.display = L.code ? 'none' : 'block'; $('mplobby').style.display = L.code ? 'block' : 'none'; $('mpnavbadge').textContent = L.code ? ` · ${L.code}` : ''; };
  const busy = (b) => { $('mpcreate').disabled = $('mpjoin').disabled = b; };
  async function connect() {
    const name = nameEl.value.trim(); if (!name) { msg('Enter a display name first', true); nameEl.focus(); return false; }
    const a = parseAddress(addrEl.value, served ? location.host : '');
    if (a.error || !a.host) { msg(a.error || 'Enter the host address shown by "npm run lan" (for example 192.168.1.20:8787)', true); addrEl.focus(); return false; }
    if (a.code && !codeEl.value) codeEl.value = a.code;
    try { localStorage.setItem('sp_mpname', name); localStorage.setItem('sp_mpaddr', addrEl.value.trim()); } catch (e) { /* ignore */ }
    msg(`Connecting to ${a.host}…`); busy(true);
    try { await net.connect(a.host); L.host = a.host; net.send({ t: 'hello' }); return true; } catch (e) { msg(e.message, true); return false; } finally { busy(false); }
  }
  $('mpcreate').onclick = async () => { if (await connect()) net.send({ t: 'create', name: nameEl.value, loadout: G.loadout, settings: { map: G.sel.map, mission: G.sel.mission, length: G.sel.length, ai: G.sel.ai, ff: false } }); };
  $('mpjoin').onclick = async () => {
    const a = parseAddress(addrEl.value, served ? location.host : ''), code = (codeEl.value || a.code || '').trim().toUpperCase();
    if (!/^[A-Z0-9]{5}$/.test(code)) { msg('Enter the 5-character party code from the host’s screen', true); codeEl.focus(); return; }
    if (await connect()) net.send({ t: 'join', code, name: nameEl.value, loadout: G.loadout });
  };
  $('mpleave').onclick = () => L.leave();
  $('mpready').onclick = () => { const me = L.me(); if (me) net.send({ t: 'ready', ready: !me.ready }); };
  $('mpstart').onclick = () => net.send({ t: 'start' });
  $('mpcopy').onclick = () => { const el = $('mplink'); el.select(); try { navigator.clipboard.writeText(el.value); msg('Invitation link copied'); } catch (e) { document.execCommand && document.execCommand('copy'); } };
  for (const k of ['map', 'mission', 'length', 'ai', 'ff']) $('mps_' + k).addEventListener('change', (ev) => { if (!L.leader) return; const s = { ...L.lobby.settings }; s[k] = k === 'ff' ? ev.target.checked : ev.target.value; net.send({ t: 'settings', settings: s }); });
  L.me = () => L.lobby && L.lobby.players.find((p) => p.id === L.id);
  L.inParty = () => !!L.code;
  L.loadoutChanged = () => { if (L.code && L.lobby && L.lobby.phase === 'lobby') net.send({ t: 'loadout', loadout: G.loadout }); };
  L.leave = (silent) => { if (net.connected) net.send({ t: 'leave' }); net.close(); L.code = ''; L.lobby = null; L.leader = false; view(); if (!silent) msg('Left the party'); if (G.mp) G.mp.abort('You left the party'); };
  L.ended = (text) => { net.close(); L.code = ''; L.lobby = null; L.leader = false; view(); msg(text, true); };
  function render() {
    const lb = L.lobby; if (!lb) return;
    L.leader = lb.leader === L.id;
    $('mpcodev').textContent = lb.code;
    const hostPart = served ? location.host : L.host, lanHost = L.lan.length ? `${L.lan[0].address}:${L.port}` : hostPart;
    const isLoopback = /^(localhost|127\.)/.test(hostPart.split(':')[0]);
    $('mplink').value = `http://${isLoopback ? lanHost : hostPart}/?join=${lb.code}`;
    $('mplan').innerHTML = L.lan.length ? 'Friends on your network open: ' + L.lan.map((a) => `<b>http://${esc(a.address)}:${L.port}/</b>`).join(' or ') + ` then MULTIPLAYER → JOIN with code <b>${esc(lb.code)}</b>.` : 'No network adapter was found on the host — only this computer can join.';
    $('mpcount').textContent = `${lb.players.length} / 4`;
    $('mpplayers').innerHTML = lb.players.map((p) => {
      const l = p.loadout || {}, pw = WEAPONS[l.primary], sw = WEAPONS[l.secondary], kit = KITS[l.kit];
      return `<div class="mpp${p.id === L.id ? ' me' : ''}"><span class="n">${esc(p.name)}${p.id === lb.leader ? ' <em>LEADER</em>' : ''}${p.id === L.id ? ' <em class="you">YOU</em>' : ''}</span>` +
        `<span class="lo">${pw ? esc(pw.name) : '?'} <small>${l.att && pw ? esc(attText(l.primary, l.att[l.primary])) : ''}</small> · ${sw ? esc(sw.name) : '?'} · ${kit ? esc(kit.name) : ''}</span>` +
        `<span class="st ${p.connected ? (p.ready || p.id === lb.leader ? 'ok' : '') : 'bad'}">${!p.connected ? 'RECONNECTING' : p.id === lb.leader ? 'LEADER' : p.ready ? 'READY' : 'NOT READY'}</span><span class="pg">${p.ping >= 0 ? p.ping + ' ms' : ''}</span></div>`;
    }).join('');
    const s = lb.settings;
    for (const k of ['map', 'mission', 'length', 'ai']) { const el = $('mps_' + k); el.disabled = !L.leader || lb.phase !== 'lobby'; }
    $('mps_ff').disabled = !L.leader || lb.phase !== 'lobby';
    $('mps_length').innerHTML = MISSIONS[s.mission].lengths.map((k) => `<option value="${k}">${LENGTHS[k].name}</option>`).join('');
    $('mps_map').value = s.map; $('mps_mission').value = s.mission; $('mps_length').value = s.length; $('mps_ai').value = s.ai; $('mps_ff').checked = !!s.ff;
    const me = L.me(), others = lb.players.filter((p) => p.id !== lb.leader), allReady = others.every((p) => p.ready && p.connected);
    $('mpready').style.display = L.leader ? 'none' : ''; $('mpready').textContent = me && me.ready ? 'NOT READY' : 'READY';
    $('mpstart').style.display = L.leader ? '' : 'none'; $('mpstart').disabled = !allReady || lb.phase !== 'lobby';
    $('mpstart').textContent = lb.phase !== 'lobby' ? 'MISSION IN PROGRESS' : allReady ? (lb.players.length > 1 ? 'START MISSION' : 'START (SOLO PARTY)') : 'WAITING FOR TEAM';
    $('mpready').disabled = lb.phase !== 'lobby';
  }
  // the selects are filled once
  $('mps_map').innerHTML = '<option value="forest">Forest Outpost</option><option value="warehouse">Industrial Warehouse</option>';
  $('mps_mission').innerHTML = Object.keys(MISSIONS).map((k) => `<option value="${k}">${MISSIONS[k].name}</option>`).join('');
  $('mps_ai').innerHTML = Object.keys(PROFILES).map((k) => `<option value="${k}">${PROFILES[k].label}</option>`).join('');
  function onMsg(m) {
    switch (m.t) {
      case 'hello': L.lan = m.lan || []; L.port = m.port || L.port; return;
      case 'joined': L.id = m.id; L.code = m.code; L.leader = m.leader; net.token = m.token; if (m.lan) L.lan = m.lan; if (m.port) L.port = m.port; view(); msg(m.resumed ? 'Reconnected' : L.leader ? 'Party created — share the code or the link below' : 'Joined the party'); return;
      case 'lobby': L.lobby = m; render(); return;
      case 'err': if (m.code === 'GONE') { const t = m.msg || 'The party no longer exists'; if (G.mp) G.mp.abort(t); L.ended(t); return; } msg(m.msg || m.code, true); return;
      case 'closed': { const text = m.msg || 'The party has ended'; if (G.mp) G.mp.abort(text); L.ended(text); return; }
      case 'start': return H.startCoop(m, L);
      case 'joinedp': H.toast(`${m.name} JOINED THE PARTY`, 2.5); return;
      case 'left': H.toast(`${m.name} LEFT THE PARTY`, 2.5); if (G.mp) G.mp.onLeft(m.id); return;
      case 'drop': if (G.mp) G.mp.onDrop(m.id, false); return;
      case 'back': if (G.mp) G.mp.onDrop(m.id, true); return;
      case 'lobbyret': return;
      case 'go': if (G.mp && G.mp.phase === 'loading') G.mp.go(); return;
      default: if (G.mp) G.mp.onNet(m);
    }
  }
  function onStatus(s) {
    L.status = s;
    const el = $('mplink_status');
    if (s === 'reconnecting') { el.textContent = 'CONNECTION LOST — RECONNECTING…'; el.style.display = 'block'; }
    else if (s === 'resumed') el.style.display = 'none';
    else if (s === 'lost') { el.style.display = 'none'; const t = 'Lost the connection to the party host'; if (G.mp) G.mp.abort(t); L.ended(t); }
  }
  view();
  return L;
}

// ===================================================================================== mission session
export function createSession(G, H, L, start) {
  const meId = L.id, host = start.host === meId, ff = !!start.settings.ff;
  const S = { host, id: meId, ff, players: new Map(), phase: 'loading', seed: start.seed, start, ev: [], mv: 0, miSent: -1, miT: 0, sec: 0,
    stT: 0, snapT: 0, seq: 0, snaps: [], renderHt: 0, shooter: null, pellets: [], ends: [], nadeSeq: 0, nadeId: 1, local: { st: ST.ok, bleed: 0 }, reviveT: 0, reviveId: 0,
    scores: new Map(), endSent: false, extract: [0, 0], debug: { corrections: 0, rejected: 0, rewinds: 0 } };
  const net = L.net, send = (o) => net.send(o);
  const others = start.players.filter((p) => p.id !== meId), myInfo = start.players.find((p) => p.id === meId);
  S.slot = myInfo ? myInfo.slot : 0; S.count = start.players.length;
  S.name = (id) => (id === meId ? (myInfo ? myInfo.name : 'You') : S.players.get(id) ? S.players.get(id).name : '?');
  const score = (id) => { if (!S.scores.has(id)) S.scores.set(id, { kills: 0, shots: 0, hits: 0, heads: 0, revives: 0, downs: 0 }); return S.scores.get(id); };
  for (const p of start.players) score(p.id);

  // called by startMission once the scene exists
  S.ready = () => {
    for (const p of others) S.players.set(p.id, new RemotePlayer(G, p));
    if (host) wrapHost();
    send({ t: 'loaded' });
  };
  S.go = () => {
    S.phase = 'live';
    if (host) { // everything the clients need to build the same enemy roster
      G.enemies.forEach((e, i) => queue({ k: 'sp', i, x: r2(e.pos.x), z: r2(e.pos.z), ty: e.typeId, d: e.duty }));
      S.flush(); sendSnap();
    }
    H.go();
  };
  S.abort = (text) => { if (S.phase === 'over') return; S.phase = 'over'; H.partyEnded(text); };
  S.request = (o) => { if (host) handleAct(meId, o); else send({ t: 'act', ...o }); };
  const queue = (e) => { S.ev.push(e); };
  S.flush = () => { if (S.ev.length) { send({ t: 'ev', l: S.ev }); S.ev = []; } };

  // ------------------------------------------------------------------ AI targets (host)
  const local = () => G.player;
  const standing = () => { const out = []; const P = local(); if (!P.downed && !P.kia) out.push(P); for (const rp of S.players.values()) if (!rp.dead) out.push(rp); return out; };
  S.standing = standing;
  const DEAD = { dead: true, pos: new THREE.Vector3(0, -50, 0), eyePos: new THREE.Vector3(0, -50, 0), vel: new THREE.Vector3(), height: 1.7, crouch: false, speed: 0, leanX: 0, leanZ: 0, damage() {} };
  // Each guard engages one operator at a time: whoever he can actually see (nearest first), re-evaluated at his
  // own perception rate. No guard is told where an unseen operator is.
  S.focusFor = (e, list, dt) => {
    if (!list.length) return DEAD;
    if (list.length === 1) return (e.focus = list[0]);
    let f = list.includes(e.focus) ? e.focus : null;
    if (!f || e.percT - dt <= 0) {
      let best = null, bd = 1e9, keep = false;
      for (const p of list) { G.player = p; const vis = e.canSee(); const d = Math.hypot(p.pos.x - e.pos.x, p.pos.z - e.pos.z); if (vis) { if (p === f) keep = true; if (d < bd) { bd = d; best = p; } } }
      if (!keep) f = best || f || list.reduce((a, p) => (Math.hypot(p.pos.x - e.pos.x, p.pos.z - e.pos.z) < Math.hypot(a.pos.x - e.pos.x, a.pos.z - e.pos.z) ? p : a), list[0]);
    }
    return (e.focus = f);
  };
  S.hostAI = (dt) => {
    const P = local(), list = standing();
    for (const e of G.enemies) { if (!e.dead) G.player = S.focusFor(e, list, dt); e.update(dt); recordHist(e); }
    for (const c of G.civs) { G.player = civTarget(c, list) || P; c.update(dt); }
    G.player = P;
    // footsteps of teammates reach the guards like the host's own
    for (const rp of S.players.values()) { if (rp.dead || rp.crouch) continue; if (rp.speed > 2.5 && (rp.stepT += dt * rp.speed) > 2.2) { rp.stepT = 0; G.sound(rp.pos, rp.speed > 5.5 ? 13 : 6.5, 'step'); } }
  };
  function civTarget(c, list) {
    if (c.state === 'follow' && c.leaderP && list.includes(c.leaderP)) return c.leaderP;
    let best = null, bd = 1e9; for (const p of list) { const d = Math.hypot(p.pos.x - c.pos.x, p.pos.z - c.pos.z); if (d < bd) { bd = d; best = p; } }
    if (c.state === 'follow') c.leaderP = best; return best;
  }
  // a short position history per guard, for lag-compensated hit checks
  function recordHist(e) { const h = e.hist || (e.hist = { t: new Float64Array(32), x: new Float32Array(32), y: new Float32Array(32), z: new Float32Array(32), i: 0, n: 0 }); h.t[h.i] = G.time; h.x[h.i] = e.pos.x; h.y[h.i] = e.pos.y; h.z[h.i] = e.pos.z; h.i = (h.i + 1) % 32; h.n = Math.min(32, h.n + 1); }
  function posAt(e, t, out) {
    const h = e.hist; if (!h || !h.n) return null;
    let b = -1, a = -1;
    for (let k = 0; k < h.n; k++) { const i = (h.i - 1 - k + 64) % 32; if (h.t[i] <= t) { a = i; break; } b = i; }
    if (a < 0) return null; if (b < 0) return out.set(h.x[a], h.y[a], h.z[a]);
    const u = (t - h.t[a]) / Math.max(1e-6, h.t[b] - h.t[a]); return out.set(h.x[a] + (h.x[b] - h.x[a]) * u, h.y[a] + (h.y[b] - h.y[a]) * u, h.z[a] + (h.z[b] - h.z[a]) * u);
  }
  const RW = new THREE.Vector3(), saved = [];
  // run fn with every guard moved back to where the shooter saw him (position only, current pose)
  function rewound(rt, fn) {
    const t = Math.max(G.time - C.REWIND_MAX, Math.min(G.time, fin(rt) ? rt : G.time));
    if (G.time - t < 0.005) return fn();
    saved.length = 0; S.debug.rewinds++;
    for (const e of G.enemies) { if (e.dead || !posAt(e, t, RW)) continue; saved.push(e, e.pos.x, e.pos.y, e.pos.z); e.pos.copy(RW); e.ch.root.position.copy(RW); e.ch.zoneFrame = -1; }
    try { return fn(); } finally { for (let i = 0; i < saved.length; i += 4) { const e = saved[i]; e.pos.set(saved[i + 1], saved[i + 2], saved[i + 3]); e.ch.root.position.copy(e.pos); e.ch.zoneFrame = -1; } }
  }
  // enemy rounds vs every standing operator (called by the ballistic resolver on the host)
  const box = [{ x0: 0, x1: 0, y0: 0, y1: 0, z0: 0, z1: 0, solid: true, bullet: true, sight: true }];
  const boxOf = (p) => { const b = box[0], ox = p.leanX * 0.6, oz = p.leanZ * 0.6; b.x0 = p.pos.x + ox - 0.3; b.x1 = p.pos.x + ox + 0.3; b.z0 = p.pos.z + oz - 0.3; b.z1 = p.pos.z + oz + 0.3; b.y0 = p.pos.y; b.y1 = p.pos.y + p.height; return box; };
  S.traceTeam = (o, d, max, except) => {
    let best = null;
    for (const p of standing()) { if (p === except) continue; const h = rayBoxes(boxOf(p), o.x, o.y, o.z, d.x, d.y, d.z, best ? best.d : max, 'bullet'); if (h) best = { d: h.d, p }; }
    return best;
  };

  // ------------------------------------------------------------------ damage to operators (host)
  S.hurt = (p, d, from, info) => {
    if (S.phase !== 'live') return;
    if (p === local()) { const P = local(); if (P.downed || P.kia) return; P.hp -= d; P.sinceHit = 0; P.lastHit = info; G.onHurt(from, d); if (P.hp <= 0) setDown(meId); return; }
    if (p.dead) return;
    p.hp = Math.max(0, p.hp - d);
    if (!info || !info.self) send({ t: 'to', id: p.id, k: 'hurt', d: r2(d), hp: r2(p.hp), x: r2(from.x), z: r2(from.z), n: info && info.name, bl: !!(info && info.blast), ds: info && info.dist ? Math.round(info.dist) : 0 });
    if (p.hp <= 0) setDown(p.id);
  };
  function setDown(id) {
    const P = local();
    if (id === meId) { if (P.downed || P.kia) return; P.downed = true; P.hp = 0; S.local.st = ST.down; S.local.bleed = C.BLEED; }
    else { const rp = S.players.get(id); if (!rp || rp.downed || rp.kia) return; rp.downed = true; rp.hp = 0; rp.bleed = C.BLEED; rp.setStatus(ST.down, 0, C.BLEED); }
    score(id).downs++; queue({ k: 'down', id }); H.toast(`${S.name(id).toUpperCase()} IS DOWN`, 3);
  }
  function setKia(id) {
    const P = local();
    if (id === meId) { P.kia = true; P.downed = false; S.local.st = ST.kia; }
    else { const rp = S.players.get(id); if (rp) { rp.kia = true; rp.downed = false; rp.setStatus(ST.kia, 0, 0); } }
    queue({ k: 'kia', id }); H.toast(`${S.name(id).toUpperCase()} — KILLED IN ACTION`, 3.5);
  }
  function revive(id, by) {
    const P = local();
    if (id === meId) { if (!P.downed) return false; P.downed = false; P.hp = C.REVIVE_HP; S.local.st = ST.ok; }
    else { const rp = S.players.get(id); if (!rp || !rp.downed) return false; rp.downed = false; rp.hp = C.REVIVE_HP; rp.setStatus(ST.ok, C.REVIVE_HP, 0); }
    score(by).revives++; queue({ k: 'rev', id, by }); H.toast(`${S.name(id).toUpperCase()} REVIVED BY ${S.name(by).toUpperCase()}`, 3); return true;
  }
  // frag damage to teammates (equipment.js computes the local player itself)
  S.blast = (blast, p, n) => {
    for (const rp of S.players.values()) { if (rp.dead) continue; const d = blast(rp.pos.x, rp.pos.y, rp.pos.z, rp.height); if (d > 1) S.hurt(rp, d, p, { name: n.owner === 'charge' ? 'a demolition charge' : n.ownerId ? `${S.name(n.ownerId)}'s grenade` : 'a fragmentation grenade', dist: Math.hypot(rp.pos.x - p.x, rp.pos.z - p.z), blast: true }); }
  };
  S.localZero = () => { if (host) setDown(meId); }; // the host's own operator reached 0 HP

  // ------------------------------------------------------------------ host: wrap shared services so clients hear about them
  function wrapHost() {
    const toast0 = G.toast, say0 = G.say, sec0 = G.onSecurity, kill0 = G.onKill;
    G.toast = (m, t) => { toast0(m, t); queue({ k: 'toast', m, d: t }); };
    G.say = (e, text) => { say0(e, text); queue({ k: 'say', x: r2(e.pos.x), z: r2(e.pos.z), m: text }); };
    G.onSecurity = (level, m) => { sec0(level, m); queue({ k: 'sec', l: level, m: m || '' }); };
    G.onKill = (e) => { kill0(e); const by = S.shooter; if (by != null) score(by).kills++; queue({ k: 'kill', i: G.enemies.indexOf(e), by: by == null ? -1 : by }); };
    G.onSpawnEnemy = (e) => { if (S.phase === 'live') queue({ k: 'sp', i: G.enemies.indexOf(e), x: r2(e.pos.x), z: r2(e.pos.z), ty: e.typeId, d: e.duty }); };
  }
  S.enemyFired = (e, a, b, r) => { queue({ k: 'ef', i: G.enemies.indexOf(e), a: [r2(a.x), r2(a.y), r2(a.z)], b: [r2(b.x), r2(b.y), r2(b.z)], h: r.kind === 'world' ? 0 : r.kind === 'player' ? 1 : 2, n: r.wh ? [r.wh.nx, r.wh.ny, r.wh.nz] : null, m: r.wh && r.wh.c ? r.wh.c.mat : null }); };
  S.onBoom = (n) => { S.lastBoom = [n.pos.x, n.pos.y, n.pos.z]; queue({ k: 'boom', id: n.id || -1, ty: n.type, p: [r2(n.pos.x), r2(n.pos.y), r2(n.pos.z)], by: n.ownerId == null ? -1 : n.ownerId }); };
  S.onNade = (n, by, q) => { n.id = S.nadeId++; n.ownerId = by; queue({ k: 'nade', id: n.id, ty: n.type, o: [r2(n.pos.x), r2(n.pos.y), r2(n.pos.z)], v: [r2(n.vel.x), r2(n.vel.y), r2(n.vel.z)], by, q }); };

  // ------------------------------------------------------------------ local shots (both roles)
  S.addPellet = (d, end) => { S.pellets.push([r3(d.x), r3(d.y), r3(d.z)]); S.ends.push([r2(end.x), r2(end.y), r2(end.z)]); };
  S.shotDone = (w, eye, muzzle) => {
    const m = { t: 'fire', w: w.id, o: [r2(eye.x), r2(eye.y), r2(eye.z)], m: [r2(muzzle.x), r2(muzzle.y), r2(muzzle.z)], ds: S.pellets, e: S.ends, rt: r3(S.renderHt || G.time), sup: !!w.sup };
    S.pellets = []; S.ends = []; score(meId).shots++;
    send(m); // clients: the host resolves it; host: teammates just see and hear it
  };
  S.throwReq = (n) => { n.visual = true; n.q = ++S.nadeSeq; send({ t: 'throw', ty: n.type, o: [r2(n.pos.x), r2(n.pos.y), r2(n.pos.z)], v: [r2(n.vel.x), r2(n.vel.y), r2(n.vel.z)], q: n.q }); };
  S.shotHit = (head) => { score(meId).hits++; if (head) score(meId).heads++; };

  // ------------------------------------------------------------------ host: validated teammate actions
  const BAL = () => G.playerRound;
  function onFire(rp, m) {
    if (!host) return;
    const w = m.w, st = rp.stats[w];
    const reject = (why) => { S.debug.rejected++; S.debug.last = why; };
    if (!st || rp.dead || !v3ok(m.o) || !v3ok(m.m) || !Array.isArray(m.ds) || !m.ds.length) return reject('bad fire');
    const t = now(), interval = (60 / st.rpm) * 1000;
    if (t - rp.lastFire[w] < interval * 0.5) return reject('rate');
    if (rp.mag[w] <= 0) return reject('empty');
    const o = new THREE.Vector3(...m.o), mz = new THREE.Vector3(...m.m);
    if (o.distanceTo(rp.eyePos) > 2.2 || mz.distanceTo(o) > 1.3) return reject('origin');
    rp.lastFire[w] = t; rp.mag[w]--; score(rp.id).shots++;
    G.sound(rp.pos, st.noise * G.world.env.shotMul, 'shot');
    const n = Math.min(m.ds.length, st.pellets || 1); let hitAny = false, killed = false, head = false;
    S.shooter = rp.id;
    for (let i = 0; i < n; i++) {
      const dv = m.ds[i]; if (!v3ok(dv)) continue;
      const d = new THREE.Vector3(...dv); if (d.lengthSq() < 0.5) continue; d.normalize();
      const r = rewound(m.rt, () => BAL()(o, d, mz));
      const end = new THREE.Vector3(r.from.x + r.dir.x * r.d, r.from.y + r.dir.y * r.d, r.from.z + r.dir.z * r.d);
      if (ff) { const h = S.traceTeam(r.from, r.dir, r.d, rp); if (h) { S.hurt(h.p, st.dmg * 0.6, rp.pos, { name: rp.name + ' (friendly fire)', dist: h.d }); continue; } }
      if (r.kind === 'enemy') {
        const e = r.e; let dmg = st.dmg * (r.part === 'head' ? st.head || 2.5 : r.mult);
        if (st.falloff && r.d > st.falloff[0]) dmg *= 1 - (1 - st.falloff[1]) * Math.min(1, (r.d - st.falloff[0]) / (st.falloff[0] * 1.5));
        e.damage(dmg, rp.pos, r.part); hitAny = true; if (r.part === 'head') head = true; if (e.dead) killed = true;
        G.fx.blood(end, d.clone().negate());
        for (const x of G.enemies) if (!x.dead && x !== e && !x.seeing) x.supp = Math.min(1.5, x.supp + (Math.hypot(x.pos.x - end.x, x.pos.z - end.z) < 3 ? 0.35 : 0));
      } else if (r.kind === 'civ') { r.e.damage(st.dmg * r.mult); hitAny = true; }
      else if (r.kind === 'world') for (const x of G.enemies) { if (x.dead) continue; const dd = Math.hypot(x.pos.x - end.x, x.pos.z - end.z); if (dd < 2.5) { x.supp = Math.min(1.5, x.supp + 0.35); if (i === 0 && !x.combat()) x.hear(rp.pos, 'shot', Math.hypot(x.pos.x - o.x, x.pos.z - o.z)); } }
    }
    S.shooter = null;
    if (hitAny) { score(rp.id).hits++; if (head) score(rp.id).heads++; send({ t: 'to', id: rp.id, k: 'hit', dead: killed, head }); }
  }
  function onThrow(rp, m) {
    if (!host || rp.dead || !['frag', 'flash', 'smoke'].includes(m.ty) || !v3ok(m.o) || !v3ok(m.v)) return;
    if (rp.inv[m.ty] <= 0 || new THREE.Vector3(...m.o).distanceTo(rp.eyePos) > 2.5 || Math.hypot(...m.v) > 25) { S.debug.rejected++; return; }
    rp.inv[m.ty]--;
    G.spawnGrenade(m.ty, new THREE.Vector3(...m.o), new THREE.Vector3(...m.v), rp, rp.id, m.q);
  }
  function handleAct(from, m) {
    const isMe = from === meId, rp = isMe ? null : S.players.get(from), P = local();
    const who = isMe ? P : rp; if (!who) return;
    const Mi = G.mission;
    switch (m.k) {
      case 'obj': { // complete the current objective at a validated position
        if (who.dead && !isMe) return; if (isMe && (P.downed || P.kia)) return;
        const s = Mi.stage; if (!s || m.stage !== Mi.i) return;
        const pos = who.pos; let target = null;
        if (s.civ) { const c = s.civRef; if (c && Math.hypot(c.pos.x - pos.x, c.pos.z - pos.z) < 3.2) target = c; if (target) target.leaderP = who; }
        else { const it = Mi.items[m.item]; if (it && it.stage === Mi.i && !it.taken && Math.hypot(it.pos[0] - pos.x, it.pos[2] - pos.z) < 3.2 && Math.abs(it.pos[1] - pos.y) < 2.4) target = it; }
        if (target && Mi.interact(target)) S.mv++; else S.debug.rejected++;
        return;
      }
      case 'pick': {
        const pk = G.pickups[m.i]; if (!pk || pk.taken || Math.hypot(pk.x - who.pos.x, pk.z - who.pos.z) > 2.6) return;
        pk.taken = true; G.scene.remove(pk.mesh); queue({ k: 'pick', i: m.i, by: from });
        if (isMe) H.applyPickup(pk); else { const med = pk.kind === 'med'; if (med) { rp.inv.med = Math.min(4, rp.inv.med + 1); rp.inv.stim = Math.min(4, rp.inv.stim + 1); } else { for (const id in rp.stats) rp.reserve[id] = Math.min(rp.stats[id].reserve * 2, rp.reserve[id] + rp.stats[id].mag * 2); rp.inv.frag = Math.min(4, rp.inv.frag + 1); rp.inv.flash = Math.min(4, rp.inv.flash + 1); } }
        return;
      }
      case 'revive': {
        const target = m.id === meId ? P : S.players.get(m.id); if (!target || target === who) return;
        const standingWho = isMe ? !P.downed && !P.kia : !rp.dead; if (!standingWho) return;
        if (Math.hypot(target.pos.x - who.pos.x, target.pos.z - who.pos.z) > 2.4) return;
        revive(m.id, from); return;
      }
      case 'heal': if (isMe) return; { const it = m.item === 'stim' ? 'stim' : 'med'; if (rp.dead || rp.inv[it] <= 0) return; rp.inv[it]--; rp.hp = Math.min(100, rp.hp + (it === 'med' ? 65 : 25)); } return;
      case 'selfdmg': if (isMe || !fin(m.d) || m.d <= 0 || m.d > 200) return; S.hurt(rp, m.d, rp.pos, { name: 'a fall', fall: true, self: true }); return;
      case 'rl': { if (isMe || !rp.stats[m.w] || !fin(m.mag)) return; const st = rp.stats[m.w], want = Math.max(0, Math.min(st.mag, Math.floor(m.mag))), add = want - rp.mag[m.w]; if (add > 0) { const take = Math.min(add, rp.reserve[m.w]); rp.mag[m.w] += take; rp.reserve[m.w] -= take; } return; }
      case 'melee': { if (isMe || rp.dead || !v3ok(m.f)) return; remoteMelee(rp, new THREE.Vector3(...m.f).normalize()); return; }
    }
  }
  function remoteMelee(rp, f) {
    const o = rp.eyePos, K = WEAPONS.knife; let best = null, bd = K.range + 0.4;
    for (const e of G.enemies) {
      if (e.dead) continue; const dx = e.pos.x - o.x, dy = e.pos.y + 1.1 - o.y, dz = e.pos.z - o.z, d = Math.hypot(dx, dy, dz);
      if (d > bd || (dx * f.x + dy * f.y + dz * f.z) / d < 0.6 || !G.losB(o.x, o.y, o.z, e.pos.x, e.pos.y + 1.1, e.pos.z)) continue; best = e; bd = d;
    }
    if (!best) return;
    const behind = Math.cos(best.yaw) * (rp.pos.z - best.pos.z) + Math.sin(best.yaw) * (rp.pos.x - best.pos.x) > 0.2 * bd;
    S.shooter = rp.id; best.damage(behind || (!best.seeing && !best.combat()) || best.stun > 0 ? 999 : K.dmg, rp.pos, 'torso'); S.shooter = null;
    send({ t: 'to', id: rp.id, k: 'hit', dead: best.dead, head: false, knife: true });
  }

  // ------------------------------------------------------------------ incoming
  const spawnPuppet = (s) => {
    if (G.enemies[s.i]) return;
    const e = new Enemy(G, s.x, s.z, [[s.x, s.z]], s.ty, PROFILES[G.sel.ai], { duty: s.d || 'post' });
    e.puppet = true; G.enemies[s.i] = e;
  };
  S.onNet = (m) => {
    const from = m.from, rp = S.players.get(from);
    switch (m.t) {
      case 'st': {
        if (!rp || !fin(m.x, m.y, m.z, m.yw, m.pt, m.sp)) return;
        if (host && rp.have && !S.trustMoves) { // the host refuses impossible movement (speed hacks, teleports)
          const dt = Math.max(0.02, (now() - rp.lastSt) / 1000), d = Math.hypot(m.x - rp.pos.x, m.z - rp.pos.z);
          if (d > 2 + dt * 12) { S.debug.corrections++; send({ t: 'to', id: rp.id, k: 'pos', x: r2(rp.pos.x), y: r2(rp.pos.y), z: r2(rp.pos.z) }); return; }
        }
        rp.lastSt = now(); rp.apply(m); rp.push(m); return;
      }
      case 'fire': {
        if (rp) { rp.fireT = 0.7; if (!rp.downed) rp.ch.fire(); const a = rp.ch.gun ? rp.ch.muzzle(new THREE.Vector3()) : rp.view; const e = Array.isArray(m.e) && v3ok(m.e[0]) ? new THREE.Vector3(...m.e[0]) : null;
          if (e) { G.fx.tracer(a, e); if (m.e.length) for (const x of m.e.slice(0, 3)) if (v3ok(x)) G.fx.impact(new THREE.Vector3(...x), new THREE.Vector3(0, 1, 0)); }
          const P = local(), dist = Math.hypot(rp.pos.x - P.pos.x, rp.pos.z - P.pos.z); G.audio.enemyShot(dist * (m.sup ? 2.2 : 1), 0); }
        if (rp) onFire(rp, m); return;
      }
      case 'throw': if (rp) onThrow(rp, m); return;
      case 'act': if (host && rp) handleAct(from, m); return;
      case 'snap': if (!host) onSnap(m); return;
      case 'ev': if (!host && Array.isArray(m.l)) for (const e of m.l) onEvent(e); return;
      case 'to': if (m.id === meId) onTo(m); return;
      case 'end': if (!host) { S.phase = 'over'; H.endCoop(m); } return;
    }
  };
  function onTo(m) {
    const P = local();
    if (m.k === 'hurt') { if (P.downed || P.kia) return; P.hp = m.hp; P.sinceHit = 0; P.lastHit = { name: m.n || 'enemy fire', blast: m.bl, dist: m.ds, x: m.x, z: m.z }; G.onHurt({ x: m.x, z: m.z }, m.d); }
    else if (m.k === 'hit') { H.hitMark(m.dead, m.head); G.audio.hit(m.dead, m.head); if (m.dead) G.stats.kills++; G.stats.hits++; if (m.head) G.stats.heads++; if (m.knife) G.audio.stab(m.dead); }
    else if (m.k === 'pos') { P.pos.set(m.x, m.y, m.z); P.vel.set(0, 0, 0); }
  }
  function onSnap(m) {
    S.snaps.push({ t: now(), ht: m.ht, e: m.e, c: m.c }); if (S.snaps.length > 20) S.snaps.shift();
    if (Array.isArray(m.p)) for (const [id, hp, st, bleed] of m.p) {
      if (id === meId) applyLocalStatus(st, hp, bleed);
      else { const rp = S.players.get(id); if (rp) rp.setStatus(st, hp, bleed); }
    }
    if (fin(m.sec) && m.sec !== G.sec.level) { G.sec.level = m.sec; }
    if (m.mi) applyMission(m.mi);
    if (m.ex) S.extract = m.ex;
  }
  function applyLocalStatus(st, hp, bleed) {
    const P = local();
    if (st === ST.down) { if (!P.downed) { P.downed = true; } P.hp = 0; S.local.bleed = bleed; }
    else if (st === ST.kia) { P.kia = true; P.downed = false; P.hp = 0; }
    else { if (P.downed) { P.downed = false; } if (Math.abs(P.hp - hp) > 0.5) P.hp = hp; }
    S.local.st = st;
  }
  function applyMission(mi) {
    const Mi = G.mission; if (!Mi) return;
    const tk = String(mi.tk || ''); Mi.items.forEach((it, j) => { if (tk[j] === '1' && !it.taken) Mi.takeItem(it); });
    if (mi.i > Mi.i) { for (let k = Mi.i; k < mi.i && k < Mi.def.stages.length; k++) Mi.def.stages[k].done = true; Mi.i = mi.i; Mi.hold = 0; Mi.refocus(); G.audio.objective(); }
    Mi.hasKey = !!mi.hk; G.sec.commsDown = !!mi.cm; G.sec.panelDown = !!mi.pn;
    if (!!mi.pw !== !!G.world.powerOff) G.setPower(!mi.pw);
  }
  function onEvent(e) {
    switch (e.k) {
      case 'sp': spawnPuppet(e); return;
      case 'ef': { const x = G.enemies[e.i]; if (!x || !v3ok(e.a) || !v3ok(e.b)) return; const a = new THREE.Vector3(...e.a), b = new THREE.Vector3(...e.b);
        G.fx.tracer(a, b, 0xffb070); if (!x.dead) x.ch.fire();
        if (e.h === 0 && e.n) G.fx.impact(b, new THREE.Vector3(...e.n), e.m);
        const P = local(); x.pd = Math.hypot(x.pos.x - P.pos.x, x.pos.z - P.pos.z); G.enemyShotSound(x); if (e.h !== 1) { const d = b.clone().sub(a).normalize(); G.nearMiss(a.x, a.y, a.z, d.x, d.y, d.z); } return; }
      case 'kill': { const x = G.enemies[e.i]; if (x && !x.dead) { x.dead = true; x.ch.die(false); } return; }
      case 'nade': if (e.by === meId) { const n = G.gren.list.find((g) => g.q === e.q && g.visual && !g.id); if (n) n.id = e.id; } else if (v3ok(e.o) && v3ok(e.v)) { G.gren.spawn(e.ty, new THREE.Vector3(...e.o), new THREE.Vector3(...e.v), 'remote'); const n = G.gren.list[G.gren.list.length - 1]; n.visual = true; n.id = e.id; } return;
      case 'boom': { if (!v3ok(e.p)) return; S.lastBoom = e.p; const n = G.gren.list.find((g) => g.id === e.id && e.id > 0); if (n) { G.scene.remove(n.mesh); G.gren.list.splice(G.gren.list.indexOf(n), 1); }
        G.gren.detonate({ type: e.ty, pos: new THREE.Vector3(...e.p), owner: e.by === meId ? 'player' : 'remote' }); return; }
      case 'toast': H.toast(e.m, e.d || 3); return;
      case 'say': { const P = local(); if (Math.hypot(e.x - P.pos.x, e.z - P.pos.z) <= 45) H.radio(e.m); return; }
      case 'sec': G.sec.level = e.l; G.onSecurity(e.l, e.m); return;
      case 'pick': { const pk = G.pickups[e.i]; if (!pk || pk.taken) return; pk.taken = true; G.scene.remove(pk.mesh); if (e.by === meId) H.applyPickup(pk); return; }
      case 'down': case 'rev': case 'kia': { const t = e.k === 'down' ? 'IS DOWN' : e.k === 'kia' ? '— KILLED IN ACTION' : `REVIVED BY ${S.name(e.by).toUpperCase()}`; H.toast(`${e.id === meId ? 'YOU ARE' : S.name(e.id).toUpperCase()} ${e.id === meId && e.k === 'down' ? 'DOWN' : t}`.replace('YOU ARE —', 'YOU WERE'), 3); return; }
    }
  }
  S.onDrop = (id, back) => { const rp = S.players.get(id); if (!rp) return; rp.connected = back; H.toast(`${rp.name.toUpperCase()} ${back ? 'RECONNECTED' : 'LOST CONNECTION'}`, 3); };
  S.onLeft = (id) => { const rp = S.players.get(id); if (!rp) return; rp.connected = false; rp.left = true; rp.ch.root.visible = false; rp.tag.style.display = 'none'; };

  // ------------------------------------------------------------------ host snapshot
  function missionState() {
    const Mi = G.mission;
    return { i: Mi.i, tk: Mi.items.map((it) => (it.taken ? '1' : '0')).join(''), hk: Mi.hasKey ? 1 : 0, cm: G.sec.commsDown ? 1 : 0, pn: G.sec.panelDown ? 1 : 0, pw: G.world.powerOff ? 1 : 0 };
  }
  function sendSnap() {
    const e = [], c = [], p = [];
    for (const x of G.enemies) {
      const as = x.as || {}, f = (x.crouch ? EF.crouch : 0) | (as.aim ? EF.aim : 0) | (x.dead ? EF.dead : 0) | (x.stun > 0 ? EF.stun : 0) | (x.reloading ? EF.reload : 0) | (x.trav ? EF.trav : 0);
      e.push(r2(x.pos.x), r2(x.pos.y), r2(x.pos.z), r3(x.yaw), r2(as.speed || 0), f, r2(as.pitch || 0), r2(as.lean || 0));
    }
    for (const x of G.civs) c.push(r2(x.pos.x), r2(x.pos.y), r2(x.pos.z), r3(x.yaw), r2(x.speed || 0), x.as && x.as.crouch ? 1 : 0, CIV_STATES.indexOf(x.state), x.dead ? 1 : 0, x.moved ? 1 : 0, x.vis ? 1 : 0);
    const P = local();
    p.push([meId, r2(P.hp), S.local.st, Math.round(S.local.bleed)]);
    for (const rp of S.players.values()) p.push([rp.id, r2(rp.hp), rp.kia ? ST.kia : rp.downed ? ST.down : !rp.connected ? ST.gone : ST.ok, Math.round(rp.bleed)]);
    const m = { t: 'snap', ht: r3(G.time), e, c, p, sec: G.sec.level, ex: S.extract };
    const ms = missionState(), key = JSON.stringify(ms);
    if (key !== S.miKey || (S.miT -= C.SEND_SNAP / 1000) <= 0) { m.mi = ms; S.miKey = key; S.miT = 1; }
    send(m);
  }

  // ------------------------------------------------------------------ client puppets
  function samplePuppets(dt) {
    const sn = S.snaps; if (!sn.length) return;
    const rt = now() - C.INTERP; let i = sn.length - 1; while (i > 0 && sn[i - 1].t > rt) i--;
    const a = sn[Math.max(0, i - 1)], b = sn[i], k = a === b || b.t <= a.t ? 1 : Math.max(0, Math.min(1.1, (rt - a.t) / (b.t - a.t)));
    S.renderHt = a.ht + (b.ht - a.ht) * k;
    const P = local();
    for (let j = 0; j < G.enemies.length; j++) {
      const x = G.enemies[j]; if (!x) continue; const o = j * 8; if (o + 7 >= b.e.length) continue;
      const A = a.e.length > o + 7 ? a.e : b.e, f = b.e[o + 5];
      x.pos.set(A[o] + (b.e[o] - A[o]) * k, A[o + 1] + (b.e[o + 1] - A[o + 1]) * k, A[o + 2] + (b.e[o + 2] - A[o + 2]) * k); x.yaw = lerpA(A[o + 3], b.e[o + 3], k);
      x.crouch = !!(f & EF.crouch); x.pd = Math.hypot(x.pos.x - P.pos.x, x.pos.z - P.pos.z);
      if (f & EF.dead) { if (!x.dead) { x.dead = true; x.ch.die(false); } }
      const rel = !!(f & EF.reload); if (rel && !x.relSeen && !x.dead) x.ch.playUpper('Pistol_Reload', { speed: 0.9 }); x.relSeen = rel;
      const as = x.as || (x.as = {}); as.speed = b.e[o + 4]; as.crouch = x.crouch && as.speed < 0.2; as.aim = !!(f & EF.aim); as.pitch = b.e[o + 6]; as.lean = b.e[o + 7];
      x.ch.tick(dt, as, x.dead ? G.animEvery(x.pos) : 1); x.sync();
    }
    for (let j = 0; j < G.civs.length; j++) {
      const x = G.civs[j], o = j * 10; if (o + 9 >= b.c.length) continue; const A = a.c.length > o + 9 ? a.c : b.c;
      x.pos.set(A[o] + (b.c[o] - A[o]) * k, A[o + 1] + (b.c[o + 1] - A[o + 1]) * k, A[o + 2] + (b.c[o + 2] - A[o + 2]) * k); x.yaw = lerpA(A[o + 3], b.c[o + 3], k);
      x.speed = b.c[o + 4]; x.state = CIV_STATES[b.c[o + 6]] || x.state; x.moved = !!b.c[o + 8]; x.vis = !!b.c[o + 9]; if (x.vis) { x.seenByPlayer = true; x.lastSeen = [x.pos.x, x.pos.y, x.pos.z]; }
      if (b.c[o + 7] && !x.dead) { x.dead = true; x.ch.die(); }
      const as = x.as || (x.as = { aim: false, lean: 0 }); as.speed = x.speed; as.crouch = !!b.c[o + 5]; x.ch.tick(dt, as, 1); x.sync();
    }
  }

  // ------------------------------------------------------------------ per frame
  S.update = (dt) => {
    if (S.phase === 'over') return;
    const P = local(), t = now();
    // local operator state at 20 Hz
    if (t - S.stT >= C.SEND_ST) {
      S.stT = t;
      const f = (P.crouch ? F.crouch : 0) | (P.adsF > 0.5 ? F.ads : 0) | (P.sprinting ? F.sprint : 0) | (P.reloading ? F.reload : 0) | (P.grounded ? F.ground : 0) | (P.mantle ? F.mantle : 0) | (P.use ? F.use : 0);
      send({ t: 'st', s: ++S.seq, x: r2(P.pos.x), y: r2(P.pos.y), z: r2(P.pos.z), yw: r3(P.yaw), pt: r3(P.pitch), sp: r2(P.speed), vx: r2(P.vel.x), vz: r2(P.vel.z), f, w: P.slot.id, ln: r2(P.lean || 0) });
    }
    if (host && S.phase === 'live') {
      // bleeding out, extraction, failure
      const tick = (o, id) => { if ((o.bleed -= dt) <= 0) setKia(id); };
      if (P.downed) tick(S.local, meId); for (const rp of S.players.values()) if (rp.downed) tick(rp, rp.id);
      if (t - S.snapT >= C.SEND_SNAP) { S.snapT = t; sendSnap(); }
    }
    if (!host) samplePuppets(dt);
    for (const rp of S.players.values()) if (!rp.left) rp.render(dt, G.camera);
    reviveLogic(dt);
    S.flush();
  };
  // revive: hold E next to a downed teammate (the host validates distance and state)
  function reviveLogic(dt) {
    const P = local(); S.revivePrompt = '';
    if (P.downed || P.kia) { S.reviveT = 0; return; }
    let target = null, bd = 1.9;
    for (const rp of S.players.values()) { if (!rp.downed || !rp.connected) continue; const d = Math.hypot(rp.pos.x - P.pos.x, rp.pos.z - P.pos.z); if (d < bd) { bd = d; target = rp; } }
    if (!target) { S.reviveT = 0; return; }
    S.revivePrompt = `<b>E</b>Hold to revive ${esc(target.name)}`;
    if (G.inp.k.KeyE) { if (S.reviveId !== target.id) { S.reviveId = target.id; S.reviveT = 0; } S.reviveT += dt; if (S.reviveT >= C.REVIVE_T) { S.reviveT = 0; S.request({ k: 'revive', id: target.id }); } }
    else S.reviveT = Math.max(0, S.reviveT - dt * 2);
  }
  // extraction / failure rules (host). Called from updateMission.
  S.checkEnd = () => {
    if (!host || S.phase !== 'live') return null;
    const Mi = G.mission, ex = Mi.def.exit.pos, team = standing();
    if (Mi.failed) return { win: false, reason: Mi.failed };
    if (!team.length) return { win: false, reason: 'ALL OPERATORS DOWN' };
    const at = team.filter((p) => Math.hypot(p.pos.x - ex[0], p.pos.z - ex[2]) < C.EXTRACT_R);
    S.extract = [at.length, team.length];
    if (Mi.complete && at.length === team.length && Mi.civNear()) return { win: true };
    return null;
  };
  S.finish = (win, reason) => {
    if (S.endSent) return; S.endSent = true; S.phase = 'over';
    const all = [{ id: meId, name: S.name(meId), status: local().kia ? 'KIA' : local().downed ? 'DOWN' : 'OK', hp: Math.ceil(local().hp) }];
    for (const rp of S.players.values()) all.push({ id: rp.id, name: rp.name, status: rp.left ? 'LEFT' : rp.kia ? 'KIA' : rp.downed ? 'DOWN' : !rp.connected ? 'DISCONNECTED' : 'OK', hp: Math.ceil(rp.hp) });
    for (const p of all) Object.assign(p, score(p.id));
    const Mi = G.mission;
    const m = { t: 'end', win, reason: reason || '', time: Math.floor(G.time), players: all, killed: G.enemies.filter((e) => e.dead).length, total: G.enemies.length, objectives: [Math.min(Mi.i, Mi.def.stages.length), Mi.def.stages.length], maxSec: G.stats.maxSec };
    S.flush(); send(m); H.endCoop(m);
    setTimeout(() => send({ t: 'lobbyret' }), 400);
  };
  // killed in action: watch a teammate who is still in the fight
  S.spectate = (cam) => {
    let rp = S.players.get(S.specId); if (!rp || rp.dead || !rp.buf.length) { rp = [...S.players.values()].find((x) => !x.dead && x.buf.length); S.specId = rp ? rp.id : 0; }
    if (!rp) return false;
    cam.position.set(rp.view.x - Math.sin(rp.renderYaw || 0) * -0.25, rp.view.y + 0.25, rp.view.z - Math.cos(rp.renderYaw || 0) * -0.25); cam.rotation.set(rp.renderPitch || 0, rp.renderYaw || 0, 0);
    return true;
  };
  S.dispose = () => { for (const rp of S.players.values()) rp.dispose(); S.players.clear(); };
  return S;
}
