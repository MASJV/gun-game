// Multiplayer transport: one WebSocket to the LAN party server (server/lan.cjs), JSON messages.
// Handles address parsing (host:port or an invitation link), connect timeouts with readable errors,
// keep-alive replies and a short automatic reconnect (same page, same party token) after a dropped link.

// "192.168.1.20", "192.168.1.20:8787", "http://192.168.1.20:8787/?join=K7QX2" -> { host, code }
export function parseAddress(input, fallback) {
  let s = String(input || '').trim(), code = '';
  if (!s) return { host: fallback || '', code };
  const m = /[?&#]join=([A-Za-z0-9]{4,8})/.exec(s); if (m) code = m[1].toUpperCase();
  s = s.replace(/^(https?|wss?):\/\//i, '').replace(/[/?#].*$/, '');
  if (!/^[A-Za-z0-9.\-[\]:]+$/.test(s)) return { host: '', code, error: 'That does not look like a network address' };
  if (!/:\d+$/.test(s) && !/^\[.*\]$/.test(s)) s += ':8787';
  return { host: s, code };
}

export class Net {
  constructor(onMessage, onStatus) {
    this.onMessage = onMessage; this.onStatus = onStatus || (() => {});
    this.ws = null; this.host = ''; this.token = null; this.wanted = false; this.retryUntil = 0; this.rtt = 0; this.sent = 0; this.recv = 0; this.bytesOut = 0; this.bytesIn = 0;
  }
  get connected() { return !!this.ws && this.ws.readyState === 1; }
  connect(host, timeout = 5000) {
    this.close(); this.host = host; this.wanted = true;
    return new Promise((resolve, reject) => {
      let ws; const proto = location.protocol === 'https:' ? 'wss' : 'ws';
      try { ws = new WebSocket(`${proto}://${host}/ws`); } catch (e) { return reject(new Error(`Invalid address "${host}"`)); }
      const t = setTimeout(() => { try { ws.close(); } catch (e) { /* ignore */ } reject(new Error(`No answer from ${host} — is "npm run lan" running there, and are you on the same network?`)); }, timeout);
      ws.onopen = () => { clearTimeout(t); this.attach(ws); resolve(); };
      ws.onerror = () => { clearTimeout(t); reject(new Error(`Could not connect to ${host} — check the address, that the host is running "npm run lan", and that its firewall allows Node`)); };
    });
  }
  attach(ws) {
    this.ws = ws;
    ws.onmessage = (e) => {
      this.recv++; this.bytesIn += e.data.length;
      let m; try { m = JSON.parse(e.data); } catch (err) { return; }
      if (!m || typeof m.t !== 'string') return;
      if (m.t === 'ping') { this.send({ t: 'pong', s: m.s }); return; }
      this.onMessage(m);
    };
    ws.onclose = () => { if (this.ws !== ws) return; this.ws = null; if (this.wanted && this.token) this.reconnect(); else this.onStatus('closed'); };
    ws.onerror = () => {};
  }
  // the page is still alive and in a party: try to get back in for a few seconds
  async reconnect() {
    this.onStatus('reconnecting'); this.retryUntil = performance.now() + 15000;
    while (this.wanted && this.token && performance.now() < this.retryUntil) {
      await new Promise((r) => setTimeout(r, 1000));
      if (!this.wanted) return;
      try {
        await new Promise((resolve, reject) => {
          const proto = location.protocol === 'https:' ? 'wss' : 'ws', ws = new WebSocket(`${proto}://${this.host}/ws`);
          const t = setTimeout(() => { try { ws.close(); } catch (e) { /* ignore */ } reject(new Error('timeout')); }, 2500);
          ws.onopen = () => { clearTimeout(t); this.attach(ws); ws.send(JSON.stringify({ t: 'resume', token: this.token })); resolve(); };
          ws.onerror = () => { clearTimeout(t); reject(new Error('refused')); };
        });
        this.onStatus('resumed'); return;
      } catch (e) { /* keep trying */ }
    }
    if (this.wanted) { this.wanted = false; this.onStatus('lost'); }
  }
  send(o) {
    if (!this.connected) return false;
    const s = JSON.stringify(o); this.ws.send(s); this.sent++; this.bytesOut += s.length; return true;
  }
  close() { this.wanted = false; this.token = null; const ws = this.ws; this.ws = null; if (ws) try { ws.close(); } catch (e) { /* ignore */ } }
}
