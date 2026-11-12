# Smoothness, input responsiveness and visual comfort (v2.2)

Branch `smoothness`, merged into `main`. This documents what was measured, what was actually wrong, what changed,
and what could **not** be verified here.

## Test environment and its limits
- Headless Chromium with **software GL (SwiftShader)**. No real GPU, no display, no audio output.
- So: CPU-side simulation timings, allocation rates, draw calls and triangle counts are real measurements.
  **GPU frame times, real FPS, display latency and the feel on screen were not measured** and are not claimed.
- The machine is a shared container. A fixed-work control loop (`tools/pace.cjs`, "control") shows its own
  scheduling noise: p99 0.2 ms, max 2.9 ms for identical work each frame.

Tools: `node tools/pace.cjs [label]` (simulation timing, worst frames by subsystem, allocation, movement at
30/60/144 Hz), `node tools/perf.cjs` (draw calls / triangles per map, preset, viewpoint), F3 overlay in game.
Raw before/after records: `docs/perf/pace-before.json`, `docs/perf/pace-after.json`.

## What was actually wrong (root causes)
| # | Finding | Effect a player would notice |
| --- | --- | --- |
| 1 | **Shots used the previous frame's view.** `Player.update` fired the weapon before placing the camera, so a shot fired in the same frame as a mouse movement left along last frame's direction. | Flick-shots land behind the crosshair; aiming feels a frame late. |
| 2 | **Frame-rate-dependent movement.** Euler integration and `min(1, k·dt)` smoothing: jump height 0.93 m at 30 Hz vs 1.01 m at 144 Hz, stopping distance 0.13 vs 0.18 m. | Movement weight changes with frame rate; inconsistent feel during frame drops. |
| 3 | **Adaptive resolution could never recover on a vsync-locked 60 Hz display.** It only raised the scale when the frame interval fell below 13 ms, which vsync at 60 Hz never produces. It also lowered resolution when the CPU (not the GPU) was the bottleneck. | After any brief slowdown the game stayed blurry for the rest of the session. |
| 4 | **Camera motion.** Lateral camera bob at step frequency, random per-frame explosion jitter, sprint FOV kick, lean roll and landing dip with no way to turn them down. | Classic eye-strain triggers; "the scene sways behind my movements". |
| 5 | **Shadow shimmer.** The moon's shadow frustum followed the player continuously, so shadow edges were re-rasterised at sub-texel offsets every frame. | Crawling / flickering shadow edges while moving. |
| 6 | **Simulation spikes (5–10 ms).** Three.js bound animation clips lazily the first time a soldier played one (first reload, climb, death); every soldier evaluated ~15 animation actions per frame including zero-weight ones; raycasts and player collision tested every collider (380–1100 box tests per frame). | Hitches in firefights, especially at 120/144 Hz where the frame budget is 7–8 ms. |
| 7 | **Draw calls.** Each soldier was ~14 draw calls (body, joint mesh, 6 gear meshes, 4 gun parts, flash) and was drawn even when off screen. | CPU render overhead in busy scenes. |

## Changes
- **Input:** camera transform placed before the weapon logic (fixes #1; regression test "input latency"). Mouse look
  remains unsmoothed and per-event; raw pointer lock with fallback (unchanged). Optional *low-latency canvas*
  (`desynchronized` WebGL context, experimental, may tear, needs reload).
- **Movement:** player physics in fixed sub-steps ≤ 1/120 s with exact constant-acceleration integration (average
  velocity) and an exact jump parabola; all smoothing uses `1 − e^(−k·dt)`. Weapon sway follows the look *rate*.
- **Comfort settings (Settings → Comfort):** CAMERA MOTION 0–100 % (default 50 %) scales head bob, landing dip,
  lean tilt, sprint FOV and explosion shake; 0 turns them off. WEAPON SWAY 0–100 %. The camera never bobs
  sideways; explosion shake is a smooth wobble. Gameplay information (recoil, scope sway) is not affected.
- **Adaptive resolution (rewritten):** target "at least 60 FPS" (default) or "match display refresh"; lowers the
  scale only when frames are late *and* the GPU is (or may be) the bottleneck (GPU timer queries when the browser
  offers them, with a plausibility filter); raises it after a sustained on-target period, which works under vsync;
  oscillation guard (a level that just failed becomes a 20 s ceiling); floor 60 %.
- **Rendering:** shadow frustum snapped to whole shadow-map texels (#5). Soldier body + joints + gear merged into one
  skinned mesh (gear rigidly skinned to its bone) and the rifle into one mesh: ~14 → 2 draw calls per soldier, and
  soldiers are now frustum-culled with conservative bounds.
- **Simulation:** uniform 4 m collider grid for raycasts and player collision (results identical to brute force,
  tested on 20 000 random rays per map; ~6× faster); animation clips pre-bound at spawn; only weighted actions run;
  distant / off-screen soldiers animate at ½–¼ rate (render and hit zones share the pose, so what you see is what
  you hit; a peeking guard is always full rate); allocation-free blend; reinforcements built one per frame.
- **Diagnostics (F3):** FPS, 1 % low, frame time avg / p50 / p99 / max, live frame-time graph (amber = late, red =
  stutter), CPU split (simulation by subsystem, render submission), GPU time where available, input age, render
  resolution / scale / DPR, draw calls, triangles, raycasts, stutter counter and the last stutters with a hint
  whether the time was spent inside the game loop or outside it (GC / browser / GPU).

## Before / after (CPU side, SwiftShader container — not GPU frame rates)
Simulation time per frame, 1800 frames each:

| Scenario | mean | p99 | max | frames > 4 ms | collider tests / frame |
| --- | --- | --- | --- | --- | --- |
| forest patrol | 0.245 → 0.164 ms | 0.8 → 1.2 ms | 2.3 → 4.6 ms | 0 → 1 | 381 → 6 |
| forest firefight (Elite) | 0.442 → 0.309 ms | 2.5 → 1.5 ms | 10.1 → 7.0 ms | 11 → 5 | 1095 → 15 |
| warehouse firefight (Elite) | 0.430 → 0.239 ms | 2.3 → 1.1 ms | 6.0 → 6.3 ms | 9 → 5 | 452 → 17 |

The remaining isolated outliers land in different, normally cheap calls (audio node creation, a single path search)
and are comparable to the machine's own noise floor; they are not GC (the young generation in the harness is
larger than everything the run allocates). Allocation in a firefight: ~64 → ~54 KB/frame; the remainder is
mostly inside three.js's animation mixer.

Movement (same inputs):

| | walk 1 s | stopping distance | jump peak |
| --- | --- | --- | --- |
| before 30 / 60 / 144 Hz | 4.274 / 4.241 / 4.221 m | 0.131 / 0.164 / 0.183 m | 0.930 / 0.983 / 1.014 m |
| after 30 / 60 / 144 Hz | 4.206 / 4.206 / 4.206 m | 0.199 / 0.199 / 0.199 m | 1.035 / 1.037 / 1.037 m |

Draw calls per frame, medium preset, three viewpoints (main + shadow pass):

| Map | before | after |
| --- | --- | --- |
| forest | 343 / 245 / 225 | 230 / 156 / 136 |
| warehouse | 235 / 204 / 165 | 125 / 99 / 76 |

Triangles changed little (forest medium 0.43–0.53 M → 0.32–0.52 M); visual quality and presets are unchanged.

## Not verified / open
- Real-GPU frame rate and frame pacing on hardware, actual display latency, the low-latency canvas option, and
  whether default comfort values feel right. Use F3 on real hardware to check: the graph should be flat, p99 close
  to the average, stutters rare and attributed.
- GPU timer queries could not be exercised (SwiftShader returns invalid values, which the filter now rejects).
- three.js's animation mixer still allocates ~0.75 KB per running action per update; removing that would need a
  patched mixer.
