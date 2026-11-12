// Procedural Web Audio: no external files. Created after the first user gesture.
export class Audio {
  init() {
    if (this.ctx) { this.ctx.resume(); return; }
    const C = window.AudioContext || window.webkitAudioContext;
    if (!C) return;
    const c = (this.ctx = new C());
    const comp = c.createDynamicsCompressor();
    this.master = c.createGain(); this.master.gain.value = 0.75;
    this.master.connect(comp); comp.connect(c.destination);
    const len = c.sampleRate * 2, buf = (this.nb = c.createBuffer(1, len, c.sampleRate)), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.amb = [];
    // shared space tail: two cross-fed delays through a low-pass, so shots and blasts are not bone dry.
    // ambient() retunes it per map (longer indoors).
    const tin = (this.tailIn = c.createGain()), d1 = c.createDelay(0.5), d2 = c.createDelay(0.5), lp = c.createBiquadFilter(), fb = (this.tailFb = c.createGain()), wet = c.createGain();
    d1.delayTime.value = 0.083; d2.delayTime.value = 0.137; lp.type = 'lowpass'; lp.frequency.value = 1700; fb.gain.value = 0.32; wet.gain.value = 0.55;
    tin.connect(d1); tin.connect(d2); d1.connect(lp); d2.connect(lp); lp.connect(wet); lp.connect(fb); fb.connect(d1); fb.connect(d2); wet.connect(this.master);
    this._rev = 0;
  }
  send(g) { if (this._rev > 0 && this.tailIn) { const r = this.ctx.createGain(); r.gain.value = this._rev; g.connect(r); r.connect(this.tailIn); } }
  out(pan) {
    if (!pan || !this.ctx.createStereoPanner) return this.master;
    const p = this.ctx.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); p.connect(this.master); return p;
  }
  noise(dur, { f = 2000, f2, q = 0.7, type = 'lowpass', vol = 1, pan = 0, at = 0 } = {}) {
    const c = this.ctx; if (!c) return;
    const t = c.currentTime + at, s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain();
    s.buffer = this.nb; s.loop = true; fl.type = type; fl.Q.value = q;
    fl.frequency.setValueAtTime(f, t); if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(fl); fl.connect(g); g.connect(this.out(pan)); this.send(g); s.start(t, Math.random()); s.stop(t + dur + 0.02);
  }
  tone(freq, dur, { f2, type = 'sine', vol = 0.3, pan = 0, at = 0 } = {}) {
    const c = this.ctx; if (!c) return;
    const t = c.currentTime + at, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(this.out(pan)); o.start(t); o.stop(t + dur + 0.02);
  }
  shot(kind, sup) {
    this._rev = sup ? 0.06 : 0.3; this._shot(kind, sup); this._rev = 0;
  }
  _shot(kind, sup) {
    if (sup) { this.noise(0.09, { f: 1700, f2: 500, q: 1.2, type: 'bandpass', vol: kind === 'dmr' ? 0.5 : 0.36 }); this.tone(170, 0.05, { f2: 70, vol: 0.2, type: 'triangle' }); this.click(0.22); return; }
    if (kind === 'ak') { this.noise(0.26, { f: 2600, f2: 300, vol: 1.0 }); this.tone(130, 0.2, { f2: 38, vol: 0.9, type: 'triangle' }); this.noise(0.05, { f: 5000, type: 'highpass', vol: 0.35 }); }
    else if (kind === 'm4') { this.noise(0.17, { f: 4200, f2: 600, vol: 0.8 }); this.tone(190, 0.12, { f2: 60, vol: 0.55, type: 'triangle' }); this.noise(0.04, { f: 6500, type: 'highpass', vol: 0.4 }); }
    else if (kind === 'sniper') { this.noise(0.55, { f: 1800, f2: 120, vol: 1.3 }); this.tone(80, 0.45, { f2: 24, vol: 1.2, type: 'triangle' }); this.noise(0.07, { f: 4000, type: 'highpass', vol: 0.45 }); this.noise(1.1, { f: 420, f2: 90, vol: 0.28, at: 0.1 }); }
    else if (kind === 'dmr') { this.noise(0.4, { f: 2200, f2: 180, vol: 1.1 }); this.tone(95, 0.32, { f2: 30, vol: 1, type: 'triangle' }); this.noise(0.06, { f: 4500, type: 'highpass', vol: 0.4 }); this.noise(0.7, { f: 500, f2: 120, vol: 0.2, at: 0.08 }); }
    else if (kind === 'shotgun') { this.noise(0.36, { f: 1500, f2: 160, vol: 1.2 }); this.tone(85, 0.3, { f2: 28, vol: 1.1, type: 'triangle' }); }
    else if (kind === 'smg') { this.noise(0.1, { f: 3800, f2: 900, vol: 0.6 }); this.tone(240, 0.07, { f2: 100, vol: 0.4, type: 'triangle' }); }
    else { this.noise(0.11, { f: 3400, f2: 700, vol: 0.7 }); this.tone(260, 0.09, { f2: 90, vol: 0.5, type: 'square' }); }
  }
  enemyShot(dist, pan) {
    this._rev = 0.4; this._enemyShot(dist, pan); this._rev = 0;
  }
  _enemyShot(dist, pan) {
    const v = Math.max(0.05, 0.75 / (1 + dist * 0.07));
    this.noise(0.22, { f: Math.max(500, 2600 - dist * 35), f2: 250, vol: v, pan }); this.tone(120, 0.16, { f2: 45, vol: v * 0.7, pan, type: 'triangle' });
  }
  // staged reload: magazine out, magazine in (at the moment the ammunition changes), action racked
  reload(dur, kind = 'rifle', ins = 0.6) {
    if (kind === 'shell') { this.noise(0.05, { f: 1500, type: 'bandpass', q: 3, vol: 0.4, at: dur * ins }); this.tone(520, 0.03, { vol: 0.08, type: 'square', at: dur * ins }); return; }
    this.noise(0.05, { f: kind === 'pistol' ? 2600 : 1700, type: 'bandpass', q: 4, vol: 0.4, at: dur * ins * 0.32 }); this.tone(300, 0.04, { f2: 150, vol: 0.12, at: dur * ins * 0.34 });
    this.noise(0.06, { f: kind === 'pistol' ? 2200 : 1300, type: 'bandpass', q: 3, vol: 0.55, at: dur * ins }); this.tone(190, 0.05, { f2: 90, vol: 0.2, type: 'triangle', at: dur * ins });
    const r = dur * Math.min(0.97, ins + (kind === 'pistol' ? 0.28 : 0.3)); this.click(0.6, r); this.noise(0.07, { f: 3000, f2: 1200, type: 'bandpass', q: 2, vol: 0.4, at: r + 0.07 });
  }
  bolt() { this.click(0.5, 0.28); this.noise(0.08, { f: 2400, f2: 900, type: 'bandpass', q: 2, vol: 0.35, at: 0.36 }); this.noise(0.08, { f: 900, f2: 2600, type: 'bandpass', q: 2, vol: 0.35, at: 0.78 }); this.click(0.6, 0.92); }
  pump(at = 0) { this.noise(0.07, { f: 1100, f2: 500, type: 'bandpass', q: 2, vol: 0.5, at }); this.noise(0.07, { f: 600, f2: 1300, type: 'bandpass', q: 2, vol: 0.5, at: at + 0.16 }); }
  thud(v = 0.5) { this.noise(0.05, { f: 900, f2: 300, type: 'bandpass', q: 1.5, vol: 0.16 * v }); }
  swish() { this.noise(0.16, { f: 900, f2: 3200, type: 'bandpass', q: 2, vol: 0.3 }); }
  stab(kill) { this.noise(0.12, { f: 500, f2: 150, vol: 0.6 }); this.tone(kill ? 110 : 180, 0.12, { f2: 60, vol: 0.4 }); }
  medkit() { for (let i = 0; i < 5; i++) this.noise(0.12, { f: 1200 + i * 200, type: 'bandpass', q: 2, vol: 0.14, at: i * 0.42 }); }
  stim() { this.noise(0.25, { f: 5000, f2: 1500, type: 'highpass', vol: 0.2 }); this.tone(440, 0.3, { f2: 880, vol: 0.12, type: 'sine', at: 0.1 }); }
  bounce(v = 0.3) { this.tone(900, 0.04, { f2: 500, vol: v, type: 'square' }); this.noise(0.03, { f: 2500, type: 'bandpass', q: 4, vol: v }); }
  explosion(dist) {
    this._rev = 0.6; this._explosion(dist); this._rev = 0;
  }
  _explosion(dist) {
    const v = Math.max(0.15, 1.4 / (1 + dist * 0.05));
    this.noise(0.9, { f: 900, f2: 60, vol: v }); this.tone(70, 0.7, { f2: 22, vol: v, type: 'triangle' }); this.noise(1.6, { f: 300, f2: 60, vol: v * 0.35, at: 0.15 });
  }
  flashbang(amount) { this.noise(0.25, { f: 6000, type: 'highpass', vol: 0.9 }); this.tone(140, 0.25, { f2: 50, vol: 0.7 }); if (amount > 0.3) this.tone(3400, 1.2 + amount * 1.6, { vol: 0.09 * Math.min(1.5, amount), type: 'sine', at: 0.05 }); }
  radio() { this.noise(0.07, { f: 2400, type: 'bandpass', q: 3, vol: 0.22 }); this.tone(1250, 0.06, { vol: 0.07, type: 'square', at: 0.07 }); this.noise(0.05, { f: 2400, type: 'bandpass', q: 3, vol: 0.18, at: 0.5 }); }
  alert(level) { const f = level >= 3 ? [660, 880, 660, 880] : level === 2 ? [440, 587] : [392]; f.forEach((x, i) => this.tone(x, 0.22, { vol: 0.16, type: 'sawtooth', at: i * 0.2 })); }
  siren(on) {
    const c = this.ctx; if (!c) return;
    if (this.sir) { try { this.sir[0].stop(); this.sir[1].stop(); } catch (e) { /* stopped */ } this.sir = null; }
    if (!on) return;
    const o = c.createOscillator(), l = c.createOscillator(), lg = c.createGain(), g = c.createGain();
    o.type = 'sawtooth'; o.frequency.value = 620; l.frequency.value = 0.45; lg.gain.value = 140; g.gain.value = 0.035; l.connect(lg); lg.connect(o.frequency); o.connect(g); g.connect(this.master); o.start(); l.start();
    g.gain.setValueAtTime(0.035, c.currentTime + 14); g.gain.linearRampToValueAtTime(0.012, c.currentTime + 20); this.sir = [o, l];
  }
  click(v = 0.5, at = 0) { this.noise(0.035, { f: 3200, type: 'bandpass', q: 5, vol: v, at }); this.tone(900, 0.02, { vol: v * 0.2, type: 'square', at }); }
  step(v = 0.2) { const k = 0.8 + Math.random() * 0.4; this.noise(0.07 + Math.random() * 0.04, { f: (420 + Math.random() * 330) * k, f2: 120 + Math.random() * 60, vol: v * k }); if (Math.random() < 0.4) this.noise(0.03, { f: 2200, type: 'bandpass', q: 2, vol: v * 0.25, at: 0.02 }); } // never two identical steps
  land() { this.noise(0.16, { f: 420, f2: 90, vol: 0.45 }); }
  hit(kill) { this.tone(kill ? 520 : 1500, kill ? 0.16 : 0.05, { f2: kill ? 240 : 1100, vol: 0.22, type: 'square' }); }
  hurt() { this.noise(0.18, { f: 700, f2: 120, vol: 0.7 }); this.tone(90, 0.2, { f2: 50, vol: 0.5 }); }
  whiz(pan) { this.noise(0.09, { f: 2500, f2: 6000, type: 'bandpass', q: 6, vol: 0.18, pan }); }
  pickup() { this.tone(660, 0.08, { vol: 0.2, type: 'triangle' }); this.tone(990, 0.12, { vol: 0.2, type: 'triangle', at: 0.08 }); }
  beep(up) { this.tone(up ? 700 : 1100, 0.07, { f2: up ? 1300 : 600, vol: 0.14, type: 'square' }); }
  objective() { [523, 659, 784].forEach((f, i) => this.tone(f, 0.18, { vol: 0.2, type: 'triangle', at: i * 0.11 })); }
  win() { [392, 523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.5, { vol: 0.22, type: 'triangle', at: i * 0.16 })); }
  lose() { [330, 262, 196, 131].forEach((f, i) => this.tone(f, 0.6, { vol: 0.25, type: 'sawtooth', at: i * 0.22 })); }
  ambient(kind) {
    const c = this.ctx; if (!c) return;
    if (this.tailFb) this.tailFb.gain.value = kind === 'warehouse' ? 0.5 : 0.26; // hall rings longer than open woodland
    this.stopAmbient();
    const g = c.createGain(); g.gain.value = 0; g.gain.linearRampToValueAtTime(1, c.currentTime + 2); g.connect(this.master);
    const s = c.createBufferSource(), f = c.createBiquadFilter(), ng = c.createGain(), lfo = c.createOscillator(), lg = c.createGain();
    s.buffer = this.nb; s.loop = true; f.type = 'lowpass'; f.frequency.value = kind === 'forest' ? 520 : 180;
    ng.gain.value = kind === 'forest' ? 0.16 : 0.22; lfo.frequency.value = 0.11; lg.gain.value = kind === 'forest' ? 0.09 : 0.03;
    lfo.connect(lg); lg.connect(ng.gain); s.connect(f); f.connect(ng); ng.connect(g); s.start(); lfo.start();
    this.amb = [s, lfo];
    if (kind === 'warehouse') for (const [fr, v] of [[50, 0.05], [100, 0.02]]) {
      const o = c.createOscillator(), og = c.createGain(); o.frequency.value = fr; og.gain.value = v; o.connect(og); og.connect(g); o.start(); this.amb.push(o);
    }
    this.ambGain = g;
    this.ambTimer = setInterval(() => {
      if (c.state !== 'running') return;
      const pan = Math.random() * 1.6 - 0.8;
      if (kind === 'forest') { if (Math.random() < 0.7) for (let i = 0; i < 3; i++) this.tone(4100 + Math.random() * 300, 0.04, { vol: 0.018, pan, at: i * 0.07 }); else this.tone(380, 0.5, { f2: 300, vol: 0.02, pan }); }
      else if (Math.random() < 0.5) this.tone(1400 + Math.random() * 900, 0.5, { vol: 0.02, pan, type: 'triangle' });
    }, 1700);
  }
  stopAmbient() {
    clearInterval(this.ambTimer);
    for (const n of this.amb || []) try { n.stop(); } catch (e) { /* already stopped */ }
    if (this.ambGain) this.ambGain.disconnect();
    this.amb = []; this.ambGain = null; this.siren(false);
  }
}
