// World construction: merged static geometry, AABB colliders, ray tests, nav grid, both maps.
import * as THREE from 'three';

export const rnd = (a = 1, b) => (b === undefined ? Math.random() * a : a + Math.random() * (b - a));
export const pick = (a) => a[Math.floor(Math.random() * a.length)];
function seeded(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------- procedural textures ----------
const texCache = {};
function makeTex(kind) {
  if (texCache[kind]) return texCache[kind];
  const s = 128, c = document.createElement('canvas');
  c.width = c.height = s;
  const g = c.getContext('2d'), r = seeded(kind.length * 977 + 13);
  if (kind === 'fence') {
    g.clearRect(0, 0, s, s); g.strokeStyle = '#c8ccd0'; g.lineWidth = 3;
    for (let i = -s; i < s * 2; i += 16) {
      g.beginPath(); g.moveTo(i, 0); g.lineTo(i + s, s); g.stroke();
      g.beginPath(); g.moveTo(i + s, 0); g.lineTo(i, s); g.stroke();
    }
  } else {
    const img = g.createImageData(s, s);
    for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
      let v;
      if (kind === 'grass') v = 140 + r() * 115;
      else if (kind === 'dirt') v = 165 + r() * 80;
      else if (kind === 'concrete') v = 195 + r() * 45;
      else if (kind === 'metal') v = 180 + Math.sin((x / s) * Math.PI * 16) * 42 + r() * 22;
      else if (kind === 'wood') v = 170 + Math.sin((y / s) * Math.PI * 12 + Math.sin(x * 0.08) * 1.5) * 35 + r() * 35;
      else v = 235 + r() * 20;
      const i = (y * s + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v; img.data[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    if (kind === 'grass' || kind === 'dirt' || kind === 'concrete')
      for (let i = 0; i < 26; i++) {
        g.fillStyle = `rgba(0,0,0,${0.05 + r() * 0.1})`;
        g.beginPath(); g.arc(r() * s, r() * s, 4 + r() * 14, 0, 7); g.fill();
      }
    if (kind === 'wood') { g.fillStyle = 'rgba(0,0,0,.35)'; for (let i = 0; i < 4; i++) g.fillRect(0, i * 32, s, 2); }
    if (kind === 'concrete') { g.strokeStyle = 'rgba(0,0,0,.22)'; g.strokeRect(0.5, 0.5, s - 1, s - 1); }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return (texCache[kind] = t);
}

// ---------- geometry builder ----------
const FACES = [
  [[1, 0, 0], [0, 0, -1], [0, 1, 0]], [[-1, 0, 0], [0, 0, 1], [0, 1, 0]],
  [[0, 1, 0], [1, 0, 0], [0, 0, -1]], [[0, -1, 0], [1, 0, 0], [0, 0, 1]],
  [[0, 0, 1], [1, 0, 0], [0, 1, 0]], [[0, 0, -1], [-1, 0, 0], [0, 1, 0]],
];
const UVS = { grass: 6, dirt: 5, wood: 1.6, concrete: 4, metal: 1.3, plain: 1, fence: 1.1, emis: 1 };
const _q = new THREE.Quaternion(), _e = new THREE.Euler();
function M(x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = sx, sz = sx) {
  _e.set(rx, ry, rz); _q.setFromEuler(_e);
  return new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), _q, new THREE.Vector3(sx, sy, sz));
}

class Builder {
  constructor() { this.b = {}; this.col = []; this.rng = seeded(4242); }
  buf(k) { return this.b[k] || (this.b[k] = { p: [], n: [], u: [], c: [] }); }
  color(hex, tint) {
    const c = new THREE.Color(hex), v = tint === 0 ? 1 : 1 + (this.rng() - 0.5) * (tint ?? 0.14);
    return [c.r * v, c.g * v, c.b * v];
  }
  // box with bottom at y, centred on x/z
  box(k, hex, x, y, z, w, h, d, o = {}) {
    const B = this.buf(k), col = this.color(hex, o.tint), s = UVS[k], hw = w / 2, hh = h / 2, hd = d / 2;
    const cs = Math.cos(o.rot || 0), sn = Math.sin(o.rot || 0), cy = y + hh, ou = this.rng() * 7, ov = this.rng() * 7;
    for (const [n, u, v] of FACES) {
      const ext = (a) => Math.abs(a[0]) * hw + Math.abs(a[1]) * hh + Math.abs(a[2]) * hd;
      const hn = ext(n), hu = ext(u), hv = ext(v);
      const corner = (a, b) => {
        const px = n[0] * hn + u[0] * hu * a + v[0] * hv * b, py = n[1] * hn + u[1] * hu * a + v[1] * hv * b,
          pz = n[2] * hn + u[2] * hu * a + v[2] * hv * b;
        B.p.push(x + px * cs + pz * sn, cy + py, z - px * sn + pz * cs);
        B.n.push(n[0] * cs + n[2] * sn, n[1], -n[0] * sn + n[2] * cs);
        B.u.push((a * hu) / s + ou, (b * hv) / s + ov);
        B.c.push(col[0], col[1], col[2]);
      };
      corner(-1, -1); corner(1, -1); corner(1, 1); corner(-1, -1); corner(1, 1); corner(-1, 1);
    }
    if (o.col !== false) {
      const ex = Math.abs(cs) * hw + Math.abs(sn) * hd, ez = Math.abs(sn) * hw + Math.abs(cs) * hd;
      this.collider(x - ex, y, z - ez, x + ex, y + h, z + ez, o);
    }
    return this;
  }
  collider(x0, y0, z0, x1, y1, z1, o = {}) {
    this.col.push({ x0, x1, y0, y1, z0, z1, solid: o.solid !== false, sight: o.sight !== false, bullet: o.bullet !== false });
  }
  geo(k, hex, g, m, o = {}) {
    const B = this.buf(k), col = this.color(hex, o.tint);
    if (g.index) { const t = g.toNonIndexed(); g.dispose(); g = t; }
    g.applyMatrix4(m);
    const P = g.attributes.position.array, N = g.attributes.normal.array, U = g.attributes.uv && g.attributes.uv.array, s = o.uv || 1;
    for (let i = 0; i < P.length / 3; i++) {
      B.p.push(P[i * 3], P[i * 3 + 1], P[i * 3 + 2]); B.n.push(N[i * 3], N[i * 3 + 1], N[i * 3 + 2]);
      B.u.push(U ? U[i * 2] * s : 0, U ? U[i * 2 + 1] * s : 0); B.c.push(col[0], col[1], col[2]);
    }
    g.dispose();
  }
  finish(scene) {
    const out = [];
    for (const k in this.b) {
      const b = this.b[k], g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(b.p, 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(b.n, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(b.u, 2));
      g.setAttribute('color', new THREE.Float32BufferAttribute(b.c, 3));
      let m;
      if (k === 'emis') m = new THREE.MeshBasicMaterial({ vertexColors: true });
      else if (k === 'fence') m = new THREE.MeshLambertMaterial({ map: makeTex('fence'), vertexColors: true, alphaTest: 0.5, side: THREE.DoubleSide });
      else m = new THREE.MeshLambertMaterial({ map: k === 'plain' ? null : makeTex(k), vertexColors: true });
      const mesh = new THREE.Mesh(g, m);
      mesh.castShadow = k !== 'emis' && k !== 'fence'; mesh.receiveShadow = k !== 'emis';
      mesh.frustumCulled = false;
      scene.add(mesh); out.push(mesh);
    }
    return out;
  }
}

// ---------- ray vs AABB list ----------
export function rayBoxes(cols, ox, oy, oz, dx, dy, dz, maxD, flag) {
  if (dx === 0) dx = 1e-9; if (dy === 0) dy = 1e-9; if (dz === 0) dz = 1e-9;
  const ix = 1 / dx, iy = 1 / dy, iz = 1 / dz;
  let best = maxD, hit = null, axis = 0;
  for (let i = 0; i < cols.length; i++) {
    const c = cols[i];
    if (!c[flag]) continue;
    let t1 = (c.x0 - ox) * ix, t2 = (c.x1 - ox) * ix, tn = t1 < t2 ? t1 : t2, tf = t1 < t2 ? t2 : t1, ax = 0;
    t1 = (c.y0 - oy) * iy; t2 = (c.y1 - oy) * iy;
    let a = t1 < t2 ? t1 : t2, b = t1 < t2 ? t2 : t1;
    if (a > tn) { tn = a; ax = 1; } if (b < tf) tf = b;
    if (tf < tn) continue;
    t1 = (c.z0 - oz) * iz; t2 = (c.z1 - oz) * iz;
    a = t1 < t2 ? t1 : t2; b = t1 < t2 ? t2 : t1;
    if (a > tn) { tn = a; ax = 2; } if (b < tf) tf = b;
    if (tf < tn || tn < 0 || tn >= best) continue; // tn<0: origin inside or box behind
    best = tn; hit = c; axis = ax;
  }
  if (!hit) return null;
  const d = axis === 0 ? dx : axis === 1 ? dy : dz, s = d > 0 ? -1 : 1;
  return { d: best, c: hit, nx: axis === 0 ? s : 0, ny: axis === 1 ? s : 0, nz: axis === 2 ? s : 0 };
}

// ---------- navigation grid (1 m cells, A*, string-pulled) ----------
const DX = [1, -1, 0, 0, 1, 1, -1, -1], DZ = [0, 0, 1, -1, 1, -1, 1, -1];
export class Nav {
  constructor(cols, b) {
    this.x0 = b.x0; this.z0 = b.z0; this.w = Math.ceil(b.x1 - b.x0); this.h = Math.ceil(b.z1 - b.z0);
    const n = this.w * this.h, r = 0.42;
    this.blk = new Uint8Array(n); this.gs = new Float32Array(n); this.pa = new Int32Array(n);
    this.st = new Uint32Array(n); this.cl = new Uint32Array(n); this.stamp = 0; this.hk = []; this.hv = [];
    for (const c of cols) {
      if (!c.solid || c.y0 > 1.5 || c.y1 < 0.35) continue;
      const i0 = Math.max(0, Math.ceil(c.x0 - r - this.x0 - 0.5)), i1 = Math.min(this.w - 1, Math.floor(c.x1 + r - this.x0 - 0.5));
      const j0 = Math.max(0, Math.ceil(c.z0 - r - this.z0 - 0.5)), j1 = Math.min(this.h - 1, Math.floor(c.z1 + r - this.z0 - 0.5));
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) this.blk[j * this.w + i] = 1;
    }
  }
  idx(x, z) {
    const i = Math.floor(x - this.x0), j = Math.floor(z - this.z0);
    return i < 0 || j < 0 || i >= this.w || j >= this.h ? -1 : j * this.w + i;
  }
  blocked(x, z) { const i = this.idx(x, z); return i < 0 || this.blk[i] === 1; }
  center(i) { return { x: this.x0 + (i % this.w) + 0.5, z: this.z0 + ((i / this.w) | 0) + 0.5 }; }
  snap(x, z) { const i = this.idx(x, z); return i < 0 || this.blk[i] ? null : this.center(i); }
  near(x, z) {
    const i = this.idx(x, z);
    if (i >= 0 && !this.blk[i]) return i;
    let best = -1, bd = 1e9;
    for (let r = 1; r <= 8 && best < 0; r++)
      for (let a = -r; a <= r; a++) for (let b = -r; b <= r; b++) {
        if (Math.max(Math.abs(a), Math.abs(b)) !== r) continue;
        const k = this.idx(x + a, z + b);
        if (k >= 0 && !this.blk[k]) { const d = a * a + b * b; if (d < bd) { bd = d; best = k; } }
      }
    return best;
  }
  nearest(x, z) { const i = this.near(x, z); return i < 0 ? null : this.center(i); }
  line(a, b) {
    const dx = b.x - a.x, dz = b.z - a.z, d = Math.hypot(dx, dz);
    if (d < 0.01) return true;
    const n = Math.ceil(d / 0.35), px = (-dz / d) * 0.3, pz = (dx / d) * 0.3;
    for (let k = 0; k <= n; k++) {
      const x = a.x + (dx * k) / n, z = a.z + (dz * k) / n;
      if (this.blocked(x, z) || this.blocked(x + px, z + pz) || this.blocked(x - px, z - pz)) return false;
    }
    return true;
  }
  path(ax, az, bx, bz) {
    const s = this.near(ax, az), g = this.near(bx, bz);
    if (s < 0 || g < 0) return null;
    const W = this.w, H = this.h, blk = this.blk, G = this.gs, Pa = this.pa, St = this.st, Cl = this.cl, stamp = ++this.stamp;
    const hk = this.hk, hv = this.hv; hk.length = hv.length = 0;
    const gx = g % W, gz = (g / W) | 0;
    const hf = (i) => { const dx = Math.abs((i % W) - gx), dz = Math.abs(((i / W) | 0) - gz); return dx + dz - 0.586 * Math.min(dx, dz); };
    const push = (k, v) => {
      let i = hk.length; hk.push(k); hv.push(v);
      while (i > 0) { const p = (i - 1) >> 1; if (hk[p] <= k) break; hk[i] = hk[p]; hv[i] = hv[p]; i = p; }
      hk[i] = k; hv[i] = v;
    };
    const pop = () => {
      const top = hv[0], k = hk.pop(), v = hv.pop(), n = hk.length;
      if (n) {
        let i = 0;
        for (;;) {
          let c = i * 2 + 1; if (c >= n) break;
          if (c + 1 < n && hk[c + 1] < hk[c]) c++;
          if (hk[c] >= k) break;
          hk[i] = hk[c]; hv[i] = hv[c]; i = c;
        }
        hk[i] = k; hv[i] = v;
      }
      return top;
    };
    G[s] = 0; Pa[s] = -1; St[s] = stamp; push(hf(s), s);
    let n = 0, found = s === g;
    while (hk.length && !found) {
      const c = pop();
      if (c === g) { found = true; break; }
      if (Cl[c] === stamp) continue;
      Cl[c] = stamp;
      if (++n > 12000) return null;
      const cx = c % W, cz = (c / W) | 0;
      for (let k = 0; k < 8; k++) {
        const nx = cx + DX[k], nz = cz + DZ[k];
        if (nx < 0 || nz < 0 || nx >= W || nz >= H) continue;
        const ni = nz * W + nx;
        if (blk[ni] || (k > 3 && (blk[cz * W + nx] || blk[nz * W + cx]))) continue;
        const ng = G[c] + (k > 3 ? 1.414 : 1);
        if (St[ni] === stamp && ng >= G[ni]) continue;
        St[ni] = stamp; G[ni] = ng; Pa[ni] = c; push(ng + hf(ni), ni);
      }
    }
    if (!found) return null;
    const pts = [];
    for (let i = g; i !== -1; i = Pa[i]) pts.push(this.center(i));
    pts.reverse();
    if (this.idx(bx, bz) === g) pts[pts.length - 1] = { x: bx, z: bz };
    if (pts.length < 2) return pts;
    const out = [];
    let i = 0;
    while (i < pts.length - 1) {
      let j = Math.min(pts.length - 1, i + 40);
      while (j > i + 1 && !this.line(pts[i], pts[j])) j--;
      out.push(pts[j]); i = j;
    }
    return out;
  }
}

// ---------- prop helpers ----------
function wall(B, tex, hex, ax, az, bx, bz, h, gaps = [], t = 0.3, o = {}) {
  const alongX = az === bz, s = alongX ? ax : az, e = alongX ? bx : bz;
  const seg = (p, q, y0, y1) => {
    if (q - p < 0.02 || y1 - y0 < 0.02) return;
    const mid = (p + q) / 2, len = q - p;
    if (alongX) B.box(tex, hex, mid, y0, az, len, y1 - y0, t, o); else B.box(tex, hex, ax, y0, mid, t, y1 - y0, len, o);
  };
  let cur = s - t / 2;
  for (const g of [...gaps].sort((a, b) => a.a - b.a)) {
    seg(cur, g.a, 0, h);
    if (g.sill) seg(g.a, g.b, 0, g.sill);
    seg(g.a, g.b, g.top ?? 2.3, h);
    cur = g.b;
  }
  seg(cur, e + t / 2, 0, h);
}
function room(B, tex, hex, x0, z0, x1, z1, h, d = {}, t = 0.3) {
  wall(B, tex, hex, x0, z0, x1, z0, h, d.n, t); wall(B, tex, hex, x0, z1, x1, z1, h, d.s, t);
  wall(B, tex, hex, x0, z0, x0, z1, h, d.w, t); wall(B, tex, hex, x1, z0, x1, z1, h, d.e, t);
}
function crate(B, x, z, s = 1, y = 0, hex = 0x5d4c34) { B.box('wood', hex, x, y, z, s, s, s, { rot: 0 }); }
function barrel(B, x, z, hex = 0x4a5a48) {
  B.geo('metal', hex, new THREE.CylinderGeometry(0.33, 0.33, 1, 10), M(x, 0.5, z));
  B.collider(x - 0.33, 0, z - 0.33, x + 0.33, 1, z + 0.33);
}
function sandbags(B, x, z, len, alongX) {
  const w = alongX ? len : 0.75, d = alongX ? 0.75 : len;
  B.box('plain', 0x6a6046, x, 0, z, w, 0.7, d); B.box('plain', 0x5f573f, x, 0.7, z, w * 0.96, 0.35, d * 0.7, { col: false });
  B.collider(x - w / 2, 0.7, z - d / 2, x + w / 2, 1.05, z + d / 2);
}
function container(B, x, z, alongX, hex, stack = 1) {
  const w = alongX ? 6.1 : 2.5, d = alongX ? 2.5 : 6.1;
  for (let i = 0; i < stack; i++) B.box('metal', hex, x + (i ? 0.15 : 0), i * 2.6, z, w, 2.6, d, { tint: 0.2 });
}
function truck(B, x, z, rot, hex = 0x3d4532, cover = 0x4f5340) {
  const cs = Math.cos(rot), sn = Math.sin(rot), L = (lx, lz) => [x + lx * cs + lz * sn, z - lx * sn + lz * cs];
  const part = (k, h, lx, y, lz, w, hh, d) => { const [px, pz] = L(lx, lz); B.box(k, h, px, y, pz, w, hh, d, { rot, col: false }); };
  part('plain', 0x1c1d1f, 0, 0.55, 0, 1.2, 0.35, 6.2);
  part('plain', hex, 0, 0.9, -2.3, 2.3, 1.75, 1.7); part('plain', hex, 0, 0.9, -3.5, 2.1, 0.9, 0.9);
  part('plain', 0x11161a, 0, 1.75, -3.16, 1.9, 0.7, 0.04);
  part('plain', hex, 0, 0.95, 1.0, 2.4, 0.25, 4.3); part('plain', cover, 0, 1.2, 1.0, 2.3, 1.6, 4.2);
  for (const lz of [-2.6, 0.3, 2.2]) for (const lx of [-1.05, 1.05]) {
    const [px, pz] = L(lx, lz);
    B.geo('plain', 0x101112, new THREE.CylinderGeometry(0.5, 0.5, 0.35, 10), M(px, 0.5, pz, 0, rot, Math.PI / 2));
  }
  const ex = Math.abs(cs) * 1.2 + Math.abs(sn) * 3.3, ez = Math.abs(sn) * 1.2 + Math.abs(cs) * 3.3, [cx, cz] = L(0, -0.4);
  B.collider(cx - ex, 0, cz - ez, cx + ex, 2.8, cz + ez);
}
function tree(B, x, z, col = true) {
  const r = B.rng, h = 7 + r() * 5, tr = 0.2 + r() * 0.16;
  B.geo('wood', 0x35291f, new THREE.CylinderGeometry(tr * 0.55, tr, h, 6), M(x, h / 2, z), { uv: 2 });
  if (col) B.collider(x - tr, 0, z - tr, x + tr, h, z + tr);
  if (r() < 0.72) {
    for (let i = 0; i < 3; i++) {
      const y = h * 0.34 + i * h * 0.22, rad = (2.5 - i * 0.65) * (0.8 + r() * 0.4);
      B.geo('grass', 0x1b2d1c, new THREE.ConeGeometry(rad, h * 0.36, 7), M(x, y + h * 0.18, z, 0, r() * 6, 0), { uv: 3 });
    }
  } else
    for (let i = 0; i < 3; i++)
      B.geo('grass', 0x263a20, new THREE.IcosahedronGeometry(1.5 + r() * 0.9, 0), M(x + (r() - 0.5) * 1.8, h * 0.78 + (r() - 0.5) * 1.6, z + (r() - 0.5) * 1.8), { uv: 2 });
}
function rock(B, x, z, s, col = true) {
  const r = B.rng, sx = s * (0.8 + r() * 0.5), sy = s * (0.6 + r() * 0.5), sz = s * (0.8 + r() * 0.5);
  B.geo('concrete', 0x474b4c, new THREE.DodecahedronGeometry(1, 0), M(x, sy * 0.3, z, r() * 3, r() * 3, r() * 3, sx, sy, sz), { uv: 2 });
  if (col) B.collider(x - sx * 0.72, 0, z - sz * 0.72, x + sx * 0.72, sy * 0.95, z + sz * 0.72);
}
function bush(B, x, z) {
  const r = B.rng;
  for (let i = 0; i < 3; i++)
    B.geo('grass', 0x22351f, new THREE.IcosahedronGeometry(0.65 + r() * 0.35, 0), M(x + (r() - 0.5) * 0.9, 0.5 + r() * 0.3, z + (r() - 0.5) * 0.9, r() * 3, r() * 3, 0), { uv: 2 });
  B.collider(x - 0.8, 0, z - 0.8, x + 0.8, 1.3, z + 0.8, { solid: false, bullet: false });
}
function light(W, scene, hex, intensity, dist, x, y, z, dyn) {
  const l = new THREE.PointLight(hex, intensity, dist, 1.6);
  l.position.set(x, y, z); scene.add(l);
  if (dyn) W.dyn.push({ l, base: intensity, kind: dyn });
  return l;
}

// ---------- MAP 1: FOREST OUTPOST ----------
function forest(B, W, scene) {
  const r = B.rng;
  B.box('grass', 0x2f3d27, 0, -1, 0, 180, 1, 180, { col: false, tint: 0 });
  const road = [[-6, 62], [-8, 36], [0, 18], [0, 2]];
  for (let i = 0; i < road.length - 1; i++) {
    const [ax, az] = road[i], [bx, bz] = road[i + 1], dx = bx - ax, dz = bz - az;
    B.box('dirt', 0x493e30, (ax + bx) / 2, 0, (az + bz) / 2, 3.6, 0.02 + i * 0.004, Math.hypot(dx, dz) + 2, { rot: Math.atan2(dx, dz), col: false, tint: 0 });
  }
  B.box('dirt', 0x463c2f, 0, 0, -12, 37, 0.015, 31, { col: false, tint: 0 });
  // perimeter fence with three openings
  const fo = { sight: false, bullet: false }, fence = (ax, az, bx, bz, gaps) => {
    wall(B, 'fence', 0x8a9096, ax, az, bx, bz, 2.4, gaps.map((g) => ({ ...g, top: 99 })), 0.1, fo);
    const alongX = az === bz, n = Math.round((alongX ? bx - ax : bz - az) / 3.7);
    for (let i = 0; i <= n; i++) {
      const p = (alongX ? ax : az) + ((alongX ? bx - ax : bz - az) * i) / n;
      if (gaps.some((g) => p > g.a - 0.2 && p < g.b + 0.2)) continue;
      B.box('plain', 0x3c4044, alongX ? p : ax, 0, alongX ? az : p, 0.12, 2.5, 0.12, { col: false });
    }
  };
  fence(-18.5, 3.5, 18.5, 3.5, [{ a: -3, b: 3 }]); fence(-18.5, -27.5, 18.5, -27.5, [{ a: -14, b: -10 }]);
  fence(-18.5, -27.5, -18.5, 3.5, [{ a: -8, b: -5 }]); fence(18.5, -27.5, 18.5, 3.5, [{ a: -14, b: -10 }]);
  // command hut (objective)
  room(B, 'wood', 0x4b4033, -14.5, -24.5, -5.5, -16.5, 3, { s: [{ a: -11, b: -9 }], w: [{ a: -22, b: -20 }], e: [{ a: -21.5, b: -19.5, sill: 1, top: 2.1 }] });
  B.box('metal', 0x343a36, -10, 3, -20.5, 9.8, 0.18, 8.8);
  B.box('wood', 0x3d3429, -10, 0, -20.5, 9, 0.04, 8, { col: false });
  B.box('wood', 0x5a4a36, -7.3, 0, -23.3, 2, 0.8, 0.9); B.box('wood', 0x443828, -12.6, 0, -23.7, 2.2, 1.9, 0.5);
  B.box('emis', 0xffd9a0, -10, 2.78, -20.5, 0.25, 0.06, 0.25, { col: false, tint: 0 });
  light(W, scene, 0xffc98a, 14, 13, -10, 2.5, -20.5);
  // barracks
  room(B, 'wood', 0x45423a, 5.5, -24.5, 15.5, -17.5, 3, { s: [{ a: 9, b: 11 }], e: [{ a: -22, b: -20 }], w: [{ a: -22.5, b: -20.5, sill: 1, top: 2.1 }] });
  B.box('metal', 0x343a36, 10.5, 3, -21, 10.8, 0.18, 7.8);
  B.box('plain', 0x444a38, 7, 0, -23.4, 0.95, 0.5, 2); B.box('plain', 0x444a38, 14.2, 0, -19.2, 0.95, 0.5, 2);
  // watchtower + searchlight on the gate
  for (const [lx, lz] of [[-1.4, -1.4], [1.4, -1.4], [-1.4, 1.4], [1.4, 1.4]]) {
    B.box('wood', 0x3f3528, 14 + lx, 0, -1 + lz, 0.25, 5, 0.25); B.box('wood', 0x3f3528, 14 + lx, 5.2, -1 + lz, 0.12, 2, 0.12, { col: false });
  }
  B.box('wood', 0x4a3e2e, 14, 5, -1, 3.4, 0.2, 3.4); B.box('metal', 0x343a36, 14, 7.2, -1, 3.9, 0.15, 3.9);
  for (const s of [-1, 1]) { B.box('wood', 0x4a3e2e, 14 + s * 1.65, 5.2, -1, 0.08, 0.9, 3.4, { col: false }); B.box('wood', 0x4a3e2e, 14, 5.2, -1 + s * 1.65, 3.4, 0.9, 0.08, { col: false }); }
  B.box('emis', 0xfff0c8, 12.5, 5.9, 0.6, 0.3, 0.3, 0.3, { col: false, tint: 0 });
  const sl = new THREE.SpotLight(0xffe9c0, 500, 60, 0.42, 0.6, 1.5);
  sl.position.set(12.5, 6, 0.6); sl.target.position.set(1, 0, 11); scene.add(sl, sl.target);
  // vehicles, cover, clutter
  truck(B, -9, -6, 0); truck(B, 5, -10.5, Math.PI / 2);
  crate(B, -2, -20.5, 1.2); crate(B, -0.8, -21.6, 1); crate(B, -2, -20.5, 0.8, 1.2); crate(B, 10, -12, 1.2); crate(B, 11.3, -12.3, 1);
  crate(B, -15, -1, 1.2); crate(B, -15, -2.4, 1); crate(B, 15.5, -8, 1.1);
  sandbags(B, -5.5, 6, 3.4, true); sandbags(B, 5.5, 6, 3.4, true); sandbags(B, -3, -13, 3, false); sandbags(B, 9, 0.5, 3, true);
  barrel(B, 1, -22.5); barrel(B, 1.8, -22.9, 0x5a4034); barrel(B, -16.5, -12); barrel(B, 16.5, -24.5);
  B.box('metal', 0x4b5148, 2.5, 0, -16, 1.8, 1.2, 1); B.box('plain', 0x2c2f31, 3.6, 0, -16, 0.1, 3.6, 0.1, { col: false });
  B.box('emis', 0xffe0a8, 3.6, 3.6, -16, 0.3, 0.12, 0.3, { col: false, tint: 0 });
  light(W, scene, 0xffd49a, 30, 20, 3.6, 3.4, -16);
  B.box('plain', 0x2c2f31, -16, 0, -25, 0.12, 9, 0.12, { col: false });
  // west ruin
  wall(B, 'concrete', 0x585a57, -42.5, 4.5, -34.5, 4.5, 2.6, [{ a: -39, b: -37, top: 99 }]);
  wall(B, 'concrete', 0x585a57, -42.5, 4.5, -42.5, 11.5, 1.4); wall(B, 'concrete', 0x585a57, -34.5, 4.5, -34.5, 9.5, 2.6, [{ a: 6, b: 7.5, sill: 1, top: 2 }]);
  wall(B, 'concrete', 0x585a57, -42.5, 11.5, -39.5, 11.5, 2.2);
  rock(B, -36, 11, 0.8, false); rock(B, -40.5, 2.5, 0.7, false); crate(B, -41, 9.8, 1);
  // east camp
  for (const [tx, tz, ry] of [[32.5, 17.5, 0.9], [38.5, 15.5, 0.4]]) {
    B.geo('plain', 0x4c4f3b, new THREE.CylinderGeometry(0.05, 2, 1.9, 4), M(tx, 0.95, tz, 0, ry, 0)); B.collider(tx - 1.2, 0, tz - 1.2, tx + 1.2, 1.9, tz + 1.2);
  }
  B.geo('wood', 0x2a2019, new THREE.CylinderGeometry(0.12, 0.12, 1, 6), M(35, 0.12, 12, 0, 0.5, Math.PI / 2));
  B.geo('wood', 0x2a2019, new THREE.CylinderGeometry(0.12, 0.12, 1, 6), M(35, 0.14, 12, 0, 2.1, Math.PI / 2));
  B.geo('emis', 0xff8a30, new THREE.ConeGeometry(0.22, 0.5, 5), M(35, 0.4, 12), { tint: 0 });
  light(W, scene, 0xff8a3a, 26, 16, 35, 0.9, 12, 'fire');
  B.geo('wood', 0x35291f, new THREE.CylinderGeometry(0.3, 0.3, 2.6, 7), M(33, 0.3, 10.5, 0, 0.3, Math.PI / 2)); B.collider(31.8, 0, 10.1, 34.2, 0.6, 10.9);
  crate(B, 37.5, 11, 0.9);
  // extraction clearing
  B.box('dirt', 0x4a4033, 44, 0, -46, 9, 0.02, 9, { col: false, tint: 0 });
  crate(B, 48, -50, 1.1); crate(B, 40, -50.5, 0.9);
  // scatter: trees, rocks, logs, bushes
  const clear = [[-6.6, 54, 5], [-38, 8, 7.5], [35, 14, 7.5], [44, -46, 7]];
  const ok = (x, z, m = 0) => {
    if (x > -21 - m && x < 21 + m && z > -30 - m && z < 6 + m) return false;
    for (const [cx, cz, cr] of clear) if (Math.hypot(x - cx, z - cz) < cr + m) return false;
    for (let i = 0; i < road.length - 1; i++) {
      const [ax, az] = road[i], [bx, bz] = road[i + 1], dx = bx - ax, dz = bz - az;
      const t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz)));
      if (Math.hypot(x - ax - dx * t, z - az - dz * t) < 3 + m) return false;
    }
    return true;
  };
  const placed = [];
  for (let i = 0; i < 900 && placed.length < 250; i++) {
    const x = (r() - 0.5) * 114, z = (r() - 0.5) * 114;
    if (!ok(x, z) || placed.some((p) => Math.hypot(p[0] - x, p[1] - z) < 2.6)) continue;
    placed.push([x, z]); tree(B, x, z);
  }
  for (let i = 0; i < 150; i++) { // dense border beyond the playable edge
    const a = (i / 150) * 6.283, rad = 60 + r() * 9, c = Math.cos(a), s = Math.sin(a), k = rad / Math.max(Math.abs(c), Math.abs(s));
    tree(B, c * k, s * k, false);
  }
  for (let i = 0, n = 0; i < 200 && n < 24; i++) { const x = (r() - 0.5) * 108, z = (r() - 0.5) * 108; if (ok(x, z, 1)) { rock(B, x, z, 1 + r() * 1.3); n++; } }
  for (let i = 0, n = 0; i < 200 && n < 10; i++) {
    const x = (r() - 0.5) * 100, z = (r() - 0.5) * 100;
    if (!ok(x, z, 2)) continue;
    const ry = r() * 3.14, len = 4 + r() * 2;
    B.geo('wood', 0x30251c, new THREE.CylinderGeometry(0.36, 0.42, len, 7), M(x, 0.36, z, 0, ry, Math.PI / 2), { uv: 2 });
    const ex = Math.abs(Math.cos(ry)) * len / 2 + 0.3, ez = Math.abs(Math.sin(ry)) * len / 2 + 0.3;
    B.collider(x - ex, 0, z - ez, x + ex, 0.75, z + ez); n++;
  }
  for (let i = 0, n = 0; i < 300 && n < 55; i++) { const x = (r() - 0.5) * 110, z = (r() - 0.5) * 110; if (ok(x, z, 0.5)) { bush(B, x, z); n++; } }
  for (const [x0, z0, x1, z1] of [[-59, -59, 59, -58], [-59, 58, 59, 59], [-59, -59, -58, 59], [58, -59, 59, 59]]) B.collider(x0, 0, z0, x1, 12, z1, { sight: false });
  return {
    name: 'FOREST OUTPOST', bounds: { x0: -60, x1: 60, z0: -60, z1: 60 }, spawn: { x: -6.6, z: 54, yaw: 0 },
    env: { fog: [0x0a1017, 0.021], bg: 0x070b12, hemi: [0x8096c0, 0x1c2416, 1.9], moon: [0xa4b9e6, 2.6, [-35, 60, 30]], viewRange: 40, detect: 0.75, shot: 40, amb: 'forest' },
    objective: { pos: [-7.3, 0.8, -23.3], kind: 'intel', hold: 0, prompt: 'Take intelligence package', text: 'Locate the intelligence package in the outpost command hut', done: 'INTEL SECURED' },
    extraction: { pos: [44, 0, -46], text: 'Reach the extraction flare in the north-east clearing' },
    routes: [
      { p: [[-3, -3], [-3, -14], [8, -14], [8, -3]], must: 1 }, { p: [[0, 7], [3.5, 8]] }, { p: [[-22, 2], [-22, -29], [-10, -31]] },
      { p: [[22, -26], [22, 2], [12, 8]] }, { p: [[-8, 20], [-8, 12], [1, 10]] }, { p: [[-36, 9], [-39, 2], [-32, 2]] },
      { p: [[34, 9], [39, 11], [30, 13]] }, { p: [[10, -36], [30, -40], [36, -30], [20, -31]] }, { p: [[-9, -14], [-3, -18]], must: 1 }, { p: [[25, 35], [40, 30], [30, 23]] },
    ],
    reinforce: [{ x: -30, z: -55, n: 'north treeline' }, { x: -54, z: -18, n: 'western treeline' }, { x: -44, z: 46, n: 'south-west treeline' }],
    pickups: [['med', 12.6, -23.6], ['med', 36.6, 16.4], ['ammo', -40, 6.5], ['ammo', -1, -19]],
  };
}

// ---------- MAP 2: INDUSTRIAL WAREHOUSE ----------
function warehouse(B, W, scene) {
  const r = B.rng, H = 8, shell = 0x565d66, part = 0x64665f;
  B.box('concrete', 0x38393b, 0, -1, 0, 120, 1, 80, { col: false, tint: 0 });
  B.box('concrete', 0x5a5c5e, -7.5, 0, 0, 56, 0.02, 51, { col: false, tint: 0 });
  room(B, 'concrete', 0x505355, -47.5, -31.5, 47.5, 31.5, 3.6, {}, 0.4);
  B.box('metal', 0x343a40, 47.2, 0, 0, 0.15, 3.2, 7, { col: false });
  // building shell
  wall(B, 'metal', shell, -35.5, -25.5, 20.5, -25.5, H, [{ a: 4, b: 6, top: 2.4 }], 0.4);
  wall(B, 'metal', shell, -35.5, 25.5, 20.5, 25.5, H, [{ a: -8, b: -6, top: 2.4 }], 0.4);
  wall(B, 'metal', shell, -35.5, -25.5, -35.5, 25.5, H, [{ a: -1, b: 1, top: 2.4 }], 0.4);
  wall(B, 'metal', shell, 20.5, -25.5, 20.5, 25.5, H, [{ a: -13, b: -7, top: 4.6 }, { a: 7, b: 13, top: 4.6 }], 0.4);
  B.box('metal', 0x2c3036, -7.5, H, 0, 57, 0.3, 52);
  for (let x = -31; x <= 17; x += 8) B.box('plain', 0x23262a, x, 7.3, 0, 0.25, 0.5, 51, { col: false });
  // office (objective) and machine room
  wall(B, 'concrete', part, -20.5, -25.5, -20.5, -12.5, 4, [{ a: -20, b: -18 }]);
  wall(B, 'concrete', part, -35.5, -12.5, -20.5, -12.5, 4, [{ a: -29, b: -27 }, { a: -25, b: -22.5, sill: 1, top: 2.2 }]);
  B.box('concrete', 0x55575a, -28, 4, -19, 15.3, 0.25, 13.3);
  crate(B, -24, -16, 1.2, 4.25); crate(B, -30, -21, 1, 4.25, 0x4f5a48);
  B.box('metal', 0x3e444a, -34.3, 0, -22, 1, 0.8, 2.4);
  for (let x = -33; x <= -24; x += 1.5) { B.box('plain', 0x15171a, x, 0, -24.7, 0.9, 2.1, 0.8); B.box('emis', r() < 0.5 ? 0x38ff7a : 0xffb030, x - 0.2, 1.5 + r() * 0.3, -24.28, 0.06, 0.03, 0.02, { col: false, tint: 0 }); }
  B.box('metal', 0x454a50, -26.5, 0, -18, 2.2, 0.8, 1.1);
  wall(B, 'concrete', part, -35.5, 10.5, -20.5, 10.5, H, [{ a: -29, b: -27, top: 2.6 }]);
  wall(B, 'concrete', part, -20.5, 10.5, -20.5, 25.5, H, [{ a: 17, b: 19, top: 2.6 }]);
  B.box('metal', 0x44524b, -31.5, 0, 19, 3, 2.6, 5.5); B.box('metal', 0x3a4640, -31.5, 2.6, 19, 1.6, 1.2, 2, { col: false });
  B.geo('metal', 0x5a5346, new THREE.CylinderGeometry(1.2, 1.2, 3.4, 12), M(-24.5, 1.7, 22.5)); B.collider(-25.6, 0, 21.4, -23.4, 3.4, 23.6);
  B.box('metal', 0x44524b, -25, 0, 13.2, 2.6, 1.5, 1.4); B.box('emis', 0xff9838, -25, 1.1, 13.92, 0.5, 0.2, 0.02, { col: false, tint: 0 });
  B.geo('metal', 0x4a4f55, new THREE.CylinderGeometry(0.16, 0.16, 14, 8), M(-28, 5.2, 24.8, 0, 0, Math.PI / 2));
  // storage racks
  for (const x of [-15, -11, -7]) for (const zc of [-12, 12]) {
    for (const z of [zc - 7.9, zc, zc + 7.9]) for (const s of [-0.55, 0.55]) B.box('plain', 0x2e4a6a, x + s, 0, z, 0.1, 6.9, 0.1, { col: false });
    for (const y of [0.12, 2.3, 4.4, 6.3]) {
      B.box('plain', 0x8a5226, x, y, zc, 1.25, 0.1, 16, { col: false });
      if (y > 6) continue;
      for (let z = zc - 7.8; z < zc + 7.2;) {
        const len = 0.9 + r() * 1.1, h = y < 4 ? 1.75 + r() * 0.3 : 0.6 + r() * 1.1;
        if (y < 4 || r() < 0.7) B.box('wood', r() < 0.5 ? 0x6e5a40 : 0x54503f, x, y + 0.1, z + len / 2, 1.05, h, len, { col: false, tint: 0.3 });
        z += len + (y < 4 ? 0.04 : 0.3);
      }
    }
    B.collider(x - 0.62, 0, zc - 8, x + 0.62, 6.9, zc + 8);
  }
  // shipping containers
  const C = [0x41596a, 0x6e3c34, 0x44604a, 0x7c6a3c, 0x4e5358];
  [[6, -19, 1, 2], [14.5, -18, 0, 1], [8, -12, 1, 1], [3, -4, 0, 1], [11, 0, 1, 2], [5, 9, 1, 1], [13, 15, 0, 2], [4, 19.5, 1, 1],
    [30, -24, 1, 1], [36, -15, 0, 2], [31, 8, 1, 1], [40, 22, 1, 1], [26, -2, 0, 1]].forEach(([x, z, ax, st], i) => container(B, x, z, !!ax, C[i % 5], st));
  // hall clutter
  B.box('plain', 0x8a7420, -24, 0, 5, 1.3, 1.5, 2.2); B.box('plain', 0x1c1d1f, -24, 0, 3.4, 1.1, 2.3, 0.15, { col: false });
  for (const [x, z, s] of [[-31, -8, 1.3], [-29.6, -8.2, 1], [-31, -8, 0.9], [-30, 6.5, 1.2], [-3, 22.5, 1.2], [-1.6, 22.8, 1], [-2.5, -9, 1.2], [16.5, 21.5, 1.3], [17, -3, 1.1], [9.5, 5, 1], [-18.5, -6, 1.1], [-3, 12, 1.2]])
    crate(B, x, z, s, s === 0.9 ? 1.3 : 0, r() < 0.5 ? 0x5d4c34 : 0x4c5440);
  barrel(B, -22, -9.5, 0x35506a); barrel(B, -22.8, -8.8, 0x6a4a34); barrel(B, 18.5, 3, 0x35506a); barrel(B, -4, -23.5, 0x6a4a34); barrel(B, 1, 14, 0x35506a);
  // catwalk and pipes (visual height structure)
  B.box('metal', 0x393e44, -3, 5, -24.3, 32, 0.12, 1.7);
  for (let x = -19; x <= 13; x += 4) { B.box('plain', 0x2a2d31, x, 0, -23.55, 0.12, 5, 0.12, { col: false }); B.box('plain', 0x2a2d31, x, 5.1, -23.5, 0.06, 1, 0.06, { col: false }); }
  B.box('plain', 0x2a2d31, -3, 6.05, -23.5, 32, 0.06, 0.06, { col: false });
  B.geo('metal', 0x5c4a3a, new THREE.CylinderGeometry(0.22, 0.22, 54, 8), M(-7.5, 6.6, 24.6, 0, 0, Math.PI / 2));
  B.geo('metal', 0x49525a, new THREE.CylinderGeometry(0.15, 0.15, 50, 8), M(-34.9, 6.2, 0, Math.PI / 2, 0, 0));
  // lamps
  const lamp = (x, y, z, hex, int, dist, dyn) => {
    B.box('plain', 0x1a1b1d, x, y + 0.1, z, 0.03, 7.25 - y, 0.03, { col: false }); B.box('plain', 0x24272a, x, y + 0.06, z, 0.7, 0.12, 0.7, { col: false });
    B.box('emis', hex, x, y, z, 0.5, 0.06, 0.5, { col: false, tint: 0 }); light(W, scene, hex, int, dist, x, y - 0.3, z, dyn);
  };
  lamp(-3, 6.2, 0, 0xffe2b0, 95, 26); lamp(9, 6.2, -15, 0xffe2b0, 80, 24, 'flicker'); lamp(10, 6.2, 12, 0xffe2b0, 80, 24);
  lamp(-13, 6.2, -22.5, 0xdfe8ff, 50, 20); lamp(-27, 6.2, -1, 0xffe2b0, 70, 22); lamp(-13, 6.2, 22.5, 0xdfe8ff, 36, 18);
  B.box('emis', 0xcfe4ff, -28, 3.94, -19, 1.2, 0.04, 0.3, { col: false, tint: 0 }); light(W, scene, 0xbcd6ff, 20, 14, -28, 3.5, -19);
  light(W, scene, 0xff9a4a, 22, 15, -28, 4, 17);
  for (const [x, z] of [[31, -11], [35, 14]]) {
    B.box('plain', 0x2a2d31, x, 0, z, 0.18, 6, 0.18); B.box('emis', 0xfff0d0, x, 5.9, z + 0.3, 0.3, 0.1, 0.5, { col: false, tint: 0 });
    light(W, scene, 0xffeccc, 70, 26, x, 5.6, z + 0.3);
  }
  B.box('emis', 0xfff0d0, -35.9, 4.4, 4, 0.1, 0.2, 0.5, { col: false, tint: 0 }); light(W, scene, 0xffeccc, 40, 20, -36.6, 4.2, 4);
  // yard, back lot, alleys
  truck(B, 27, 19, Math.PI / 2, 0x3a3f46, 0x2f3338); truck(B, -43.5, -11, 0, 0x2c2f33, 0x2c2f33);
  B.box('metal', 0x35513a, -38, 0, 7.5, 1.4, 1.3, 2.4); B.box('metal', 0x35513a, -12, 0, -30.2, 2.4, 1.3, 1.4); B.box('metal', 0x35513a, 6, 0, 30.2, 2.4, 1.3, 1.4);
  crate(B, -25, 30.3, 1.2); crate(B, 14, -30.3, 1.2); crate(B, -40, 13, 1.1); crate(B, 44, -8, 1.2); crate(B, 23, -27, 1.2); barrel(B, 22.5, 14.5); barrel(B, -45.5, 10);
  sandbags(B, 24.5, -10, 3, false); sandbags(B, 24.5, 10, 3, false);
  B.box('emis', 0x163a20, -43, 0, 4, 3.4, 0.03, 3.4, { col: false, tint: 0 });
  return {
    name: 'INDUSTRIAL WAREHOUSE', bounds: { x0: -48, x1: 48, z0: -32, z1: 32 }, spawn: { x: 44.5, z: 27, yaw: Math.PI / 2 },
    env: { fog: [0x06080b, 0.012], bg: 0x05070a, hemi: [0x5a6680, 0x16181c, 0.75], moon: [0x8fa6d6, 1.5, [30, 60, -22]], viewRange: 44, detect: 1, shot: 36, amb: 'warehouse' },
    objective: { pos: [-34.3, 0.8, -22], kind: 'terminal', hold: 3, prompt: 'Hold to access secured terminal', text: 'Access the secured terminal in the warehouse office', done: 'DATA EXTRACTED' },
    extraction: { pos: [-43, 0, 4], text: 'Exfiltrate through the west back lot' },
    routes: [
      { p: [[-18, 0], [-2, 0], [-2, -22], [-18, -22]] }, { p: [[-18, 2], [-18, 22], [-3, 20], [-2, 3]] }, { p: [[11, -22], [17.5, -22], [17.5, -9], [12, -6]] },
      { p: [[9, 4], [17, 10], [17.5, 22], [9, 22.5]] }, { p: [[-28, -18], [-23.5, -15]], must: 1 }, { p: [[-28, -8], [-28, 5], [-23, -1]], must: 1 },
      { p: [[-28, 14], [-23, 18], [-28, 23]] }, { p: [[24, -20], [34, -20.5], [42, -9], [30, -6]] }, { p: [[-30, -28.5], [15, -28.5]] },
      { p: [[-30, 28.5], [2, 28.5]] }, { p: [[-41, -4], [-41, 13], [-38, 1]] },
    ],
    reinforce: [{ x: 45, z: -1, n: 'east gate' }, { x: 45, z: -28, n: 'north-east service gate' }],
    pickups: [['med', -33.8, 12.2], ['med', -22, -24], ['ammo', -17.6, -2.6], ['ammo', 23, 16]],
  };
}

export function buildWorld(id, scene) {
  const B = new Builder(), W = { id, dyn: [] };
  Object.assign(W, id === 'forest' ? forest(B, W, scene) : warehouse(B, W, scene));
  B.finish(scene);
  W.colliders = B.col; W.nav = new Nav(B.col, W.bounds);
  const e = W.env;
  scene.fog = new THREE.FogExp2(e.fog[0], e.fog[1]); scene.background = new THREE.Color(e.bg);
  W.hemi = new THREE.HemisphereLight(e.hemi[0], e.hemi[1], e.hemi[2]); scene.add(W.hemi);
  const m = (W.moon = new THREE.DirectionalLight(e.moon[0], e.moon[1]));
  W.moonDir = new THREE.Vector3(...e.moon[2]).normalize();
  m.castShadow = true; m.shadow.mapSize.set(2048, 2048);
  const sc = m.shadow.camera; sc.left = sc.bottom = -48; sc.right = sc.top = 48; sc.near = 1; sc.far = 220;
  m.shadow.bias = -0.0006; m.shadow.normalBias = 0.06;
  scene.add(m, m.target);
  // sky
  const sp = [], sr = seeded(7);
  for (let i = 0; i < 500; i++) { const a = sr() * 6.283, y = 0.08 + sr() * 0.9, k = Math.sqrt(1 - y * y); sp.push(Math.cos(a) * k * 380, y * 380, Math.sin(a) * k * 380); }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
  scene.add(new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xaebfe8, size: 1.4, sizeAttenuation: false, fog: false })));
  const moon = new THREE.Mesh(new THREE.CircleGeometry(13, 24), new THREE.MeshBasicMaterial({ color: 0xdfe8ff, fog: false }));
  moon.position.copy(W.moonDir).multiplyScalar(360); moon.lookAt(0, 0, 0); scene.add(moon);
  return W;
}
