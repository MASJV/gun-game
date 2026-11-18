# Controls and movement feel (V2.3)

> **Historical record — v2.3 controls refinement report.** Kept for reference; details (branch names, test counts, file names) describe the project at that time. Current state: [README](../README.md) and [MULTIPLAYER.md](MULTIPLAYER.md).


V2.3 refines how SHADOW PROTOCOL feels to aim and move. Gameplay rules are unchanged. Every number below comes from
`node tools/feel.cjs <label>`. It drives the real game headless at fixed frame rates and writes
`docs/perf/feel-before.json` (v2.2.0) and `docs/perf/feel-after.json` (v2.3.0). These are simulation
measurements. They have not been checked on a real GPU or in a subjective play test.

## What was wrong (measured on v2.2.0)

| Problem | Cause | v2.2 | v2.3 |
|---|---|---|---|
| Aim rate jumps while entering and leaving ADS | Sensitivity used the linear ADS fraction; the camera FOV used an eased curve | rate mismatch during the transition: iron 7 %, red dot 9 %, 4x 42 %, 10x 85 % | 0 % for all optics |
| Camera snaps on stairs | Step-up moved the body and the eye in one frame | 0.172 m camera jump in one frame | 0.054 m |
| Mantle lurches, then stops dead | Linear rise, no exit velocity | 0.114 m per frame peak, 0.57 m/s after | 0.082 m per frame, 3.7 m/s after (W held) |
| Full-speed backpedal | No direction scaling | 4.37 m/s backwards | 3.41 m/s (78 %) |
| Hard velocity corner at top speed | Constant-rate approach | abrupt | acceleration ∝ remaining speed + constant, solved exactly per sub-step |
| Sprint snaps to top speed | Speed switched instantly | instant | builds over 0.35 s, bleeds off over 0.2 s |
| Gun glued to the camera | No inertia model | none | fixed-step springs, heavier weapons lag more |
| Gun clips into walls | No pushback | — | ray along the view pulls the gun back |
| Wheel zoom jumps | Magnification applied instantly | instant | eases in log-magnification (about 0.2 s) |

Start time to 90 % of walk speed went from 0.067 s to 0.083 s (60 Hz). It is still a quick start, and it no longer
hits top speed with a hard corner. Stopping distance went from 0.20 m to 0.18 m.

## Frame-rate independence (v2.3, 30 / 60 / 120 / 144 Hz)

| | 30 | 60 | 120 | 144 |
|---|---|---|---|---|
| walk speed (m/s) | 4.365 | 4.365 | 4.365 | 4.365 |
| sprint speed | 6.693 | 6.693 | 6.693 | 6.693 |
| stop distance (m) | 0.179 | 0.179 | 0.179 | 0.179 |
| jump peak (m) | 1.035 | 1.037 | 1.037 | 1.037 |
| air lateral in 0.5 s (m) | 1.28 | 1.28 | 1.28 | 1.26 |
| crouch time (s) | 0.20 | 0.20 | 0.20 | 0.19 |
| viewmodel turn lag (rad) | 0.091 | 0.091 | 0.091 | 0.091 |

Small differences in time-to-threshold values are frame quantisation: a 30 Hz frame is 33 ms long.

## How it works

- **Mouse look** is applied raw: counts × 0.0022 rad × sensitivity × zoom ratio × mode multiplier. There is no
  smoothing, acceleration or dt scaling. Input is applied before the weapon logic, so a shot in the same frame as a
  flick uses the new view. Right after the pointer is captured, the game ignores mouse movement for 60 ms, because some
  browsers report one bogus jump then.
- **Zoom ratio** is `tan(currentFov/2) / tan(hipFov/2)`. `currentFov` comes from the same eased curve the camera uses,
  so the view moves the same distance on screen per count at every point of a transition and at every magnification.
- **ADS / scope / vertical multipliers** (Settings → Controls) scale from that baseline. The ADS and scope multipliers
  blend in along the same curve, so there is no step when the aim mode changes.
- **Locomotion** runs in fixed sub-steps of at most 1/120 s with exact integration. Diagonals are normalised and
  slightly slower than straight-ahead. Strafing runs at 92 % speed and backpedalling at 78 %. A jump press is
  buffered for 0.12 s, and you can still jump for 0.1 s after walking off a ledge.
- **Weapon motion** runs on spring-dampers integrated at a fixed 240 Hz. The springs are driven by turn rate, strafe
  and forward velocity, and vertical speed, with impulses for jumps, landings, crouching and mantles. Weapon heft
  (pistol 0.6 … sniper 1.3) lowers the spring frequency and raises the lag. All of this moves only the gun, never the
  camera. The motion is reduced 80 % while aiming and scales with the Weapon Sway setting.

## Settings

| Setting | Default | Notes |
|---|---|---|
| Mouse sensitivity | 1.00 | 0.1–3, also shown in degrees per count |
| ADS sensitivity | 1.00× | iron, red dot, holographic |
| Scope sensitivity | 1.00× | 4x and 4–10x scopes |
| Vertical sensitivity | 1.00× | multiplies pitch only |
| Field of view | 75 | |
| Camera motion | 50 % | master control: head bob, landing dip, lean tilt, sprint FOV, shake; 0 % turns them all off |
| Head bob | 100 % | relative to Camera motion |
| Sprint FOV effect | on | |
| Weapon sway | 100 % | gun only |

**Reset controls & comfort to defaults** resets only these. Graphics, audio, frame-rate target, adaptive resolution
and low-latency settings are left alone. Everything is saved in `localStorage` (`sp2_settings`).

## Tests

`npm test` includes 14 controls checks (group `controls`, run alone with `node tools/test.cjs controls`):

- seamless ADS and scope sensitivity, variable zoom, per-mode and vertical multipliers
- weapon-camera alignment after a flick
- locomotion at 30 / 60 / 120 / 144 Hz: start, stop, sprint, backpedal, strafe reversal, diagonal, jump, air control, crouch
- mantle, stairs, jump buffer and coyote time
- viewmodel inertia and wall pushback
- Camera Motion, Head Bob and Sprint FOV switches

The earlier input-latency, movement and comfort checks still pass.

## Performance

`docs/perf/pace-ab-v2.2.json` and `pace-ab-v2.3.json` are an A/B on the same machine with only the player code
swapped. Player update cost is about 0.02 ms per frame in both builds. Allocations per frame are within noise. The
wall-pushback ray adds one ray per frame. Differences in the fight scenarios come from combat randomness and AI
spikes, not from the player code.
