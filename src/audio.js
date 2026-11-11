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
  }
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
    s.connect(fl); fl.connect(g); g.connect(this.out(pan)); s.start(t, Math.random()); s.stop(t + dur + 0.02);
  }
  tone(freq, dur, { f2, type = 'sine', vol = 0.3, pan = 0, at = 0 } = {}) {
    const c = this.ctx; if (!c) return;
    const t = c.currentTime + at, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(this.out(pan)); o.start(t); o.stop(t + dur + 0.02);
  }
  shot(kind) {
    if (kind === 'ak') { this.noise(0.26, { f: 2600, f2: 300, vol: 1.0 }); this.tone(130, 0.2, { f2: 38, vol: 0.9, type: 'triangle' }); this.noise(0.05, { f: 5000, type: 'highpass', vol: 0.35 }); }
    else if (kind === 'm4') { this.noise(0.17, { f: 4200, f2: 600, vol: 0.8 }); this.tone(190, 0.12, { f2: 60, vol: 0.55, type: 'triangle' }); this.noise(0.04, { f: 6500, type: 'highpass', vol: 0.4 }); }
    else { this.noise(0.11, { f: 3400, f2: 700, vol: 0.7 }); this.tone(260, 0.09, { f2: 90, vol: 0.5, type: 'square' }); }
  }
  enemyShot(dist, pan) {
    const v = Math.max(0.05, 0.75 / (1 + dist * 0.07));
    this.noise(0.22, { f: Math.max(500, 2600 - dist * 35), f2: 250, vol: v, pan }); this.tone(120, 0.16, { f2: 45, vol: v * 0.7, pan, type: 'triangle' });
  }
  reload(dur) { this.click(0.5); this.noise(0.05, { f: 1800, type: 'bandpass', q: 3, vol: 0.4, at: dur * 0.45 }); this.click(0.6, dur * 0.8); this.click(0.7, dur * 0.92); }
  click(v = 0.5, at = 0) { this.noise(0.035, { f: 3200, type: 'bandpass', q: 5, vol: v, at }); this.tone(900, 0.02, { vol: v * 0.2, type: 'square', at }); }
  step(v = 0.2) { this.noise(0.09, { f: 500 + Math.random() * 250, f2: 150, vol: v }); }
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
    this.amb = []; this.ambGain = null;
  }
}
