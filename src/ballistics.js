// Shared ballistic resolver. Every firearm round in the game - player or enemy, any weapon, hip or scoped -
// goes through trace(): the nearest thing along the ray wins, and solid geometry always stops the round.
// There is no penetration. Chain-link fences count as solid for bullets (you can still see through them).
import { rayBoxes } from './world.js';

export function makeBallistics(G) {
  // o, d: origin and unit direction. shooter: 'player' or an Enemy (never hits itself).
  // Returns { d, kind: 'world' | 'enemy' | 'player' | null, wh, e, part, mult }.
  function trace(o, d, max, shooter) {
    const wh = rayBoxes(G.world.colliders, o.x, o.y, o.z, d.x, d.y, d.z, max, 'bullet');
    let w = wh;
    if (d.y < -1e-4) { const tg = -o.y / d.y; if (tg > 0 && tg < (w ? w.d : max)) w = { d: tg, c: { mat: G.world.env.ground || 'dirt', ground: true }, nx: 0, ny: 1, nz: 0 }; } // the ground plane
    const r = { d: w ? w.d : max, kind: w ? 'world' : null, wh: w, e: null, part: null, mult: 1 };
    for (const e of G.enemies) {
      if (e.dead || e === shooter) continue;
      const h = e.rayHit(o, d, r.d);
      if (h) { r.d = h.d; r.kind = 'enemy'; r.e = e; r.part = h.part; r.mult = h.mult; }
    }
    for (const c of G.civs || []) { // hostages / capture targets can be hit too
      if (c.dead) continue;
      const h = c.ch.rayHit(o, d, r.d, G.frame);
      if (h) { r.d = h.d; r.kind = 'civ'; r.e = c; r.part = h.part; r.mult = h.mult; }
    }
    if (shooter !== 'player' && G.mp && G.mp.host) { // co-op host: every standing operator can be hit
      const ph = G.mp.traceTeam(o, d, r.d, null);
      if (ph) { r.d = ph.d; r.kind = 'player'; r.e = null; r.player = ph.p; }
    } else if (shooter !== 'player' && !G.player.dead) {
      const ph = rayBoxes(G.playerBox(), o.x, o.y, o.z, d.x, d.y, d.z, r.d, 'bullet');
      if (ph) { r.d = ph.d; r.kind = 'player'; r.e = null; }
    }
    return r;
  }
  // Player rounds: the sights define the aim point, but the round leaves the muzzle. Anything between the
  // eye and the muzzle, or between the muzzle and the aim point, stops it - no shooting "through" cover
  // that only the camera can see past.
  const T = { x: 0, y: 0, z: 0 }, D = { x: 0, y: 0, z: 0 };
  function playerRound(eye, dir, muzzle) {
    const aim = trace(eye, dir, 250, 'player');
    T.x = eye.x + dir.x * aim.d; T.y = eye.y + dir.y * aim.d; T.z = eye.z + dir.z * aim.d;
    let mx = muzzle.x - eye.x, my = muzzle.y - eye.y, mz = muzzle.z - eye.z; const ml = Math.hypot(mx, my, mz);
    if (ml > 0.05) {
      const b = rayBoxes(G.world.colliders, eye.x, eye.y, eye.z, mx / ml, my / ml, mz / ml, ml, 'bullet');
      if (b) return { d: b.d, kind: 'world', wh: b, from: eye, dir: { x: mx / ml, y: my / ml, z: mz / ml }, blocked: true };
    }
    D.x = T.x - muzzle.x; D.y = T.y - muzzle.y; D.z = T.z - muzzle.z; const dl = Math.hypot(D.x, D.y, D.z) || 1;
    D.x /= dl; D.y /= dl; D.z /= dl;
    const r = trace(muzzle, D, aim.kind ? dl + 0.6 : 250, 'player');
    r.from = muzzle; r.dir = D;
    return r;
  }
  return { trace, playerRound };
}
