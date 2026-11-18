# SHADOW PROTOCOL — remaining implementation plan (V2.1 release)

> **Historical record — V2.1 implementation plan (completed).** Kept for reference; details (branch names, test counts, file names) describe the project at that time. Current state: [README](README.md) and [docs/MULTIPLAYER.md](docs/MULTIPLAYER.md).


**Status: complete — T1–T4 implemented and all release gates passed (see `docs/V2_1_PROGRESS.md`).**

Branch: `v2.1-expansion` (base for all tasks). Release target: merge into `main` once every gate in §4 passes.
History / architecture: `docs/V2_PROGRESS.md`, `docs/V2_1_PROGRESS.md`. This file lists only what is still open.

## 1. Status at the time of planning (commit 374d478)

| V2.1 phase | State |
| --- | --- |
| 0 Merge V2, branch | done (`main` = b9951b6) |
| 1 Shared ballistics | done, tested |
| 2 Dynamic missions | done, tested (56 generated missions completed) |
| 3 Sniper, variable zoom, staged reloads | done, tested |
| 4 AI refinement, mission-aware security | done, tested |
| 5 Training range | done, tested |
| 5 Forest performance (tree LOD, shadow culling) | done; ~1.4 M → ~0.5 M triangles/frame on medium (software-GL counts) |
| 5 Audio | partially done (space tail, varied footsteps) |
| 5 Frame pacing, input latency, weapon feedback, HUD polish | **open** |
| 5 Docs, full verification, release to `main` | **open** |

## 2. Remaining tasks

### T1 — Frame pacing and adaptive resolution (priority 1)
Goal: steady frame times on mid-range GPUs without the player tuning anything.
- Measure frame time in the rAF loop (exponential moving average + recent worst frame).
- Adaptive render scale: when the EMA stays above ~20 ms for ~1 s, lower the renderer pixel ratio in steps (floor 0.6 × the preset's ratio); raise it again after ~3 s below ~13 ms. Hysteresis so it never oscillates. Off in `?test` mode so tests stay deterministic. A Settings toggle ("Adaptive resolution", default on).
- Remove per-frame allocations in hot paths: `Character.update()` left-hand IK allocates two `Vector3` per soldier per frame; HUD crosshair writes four element styles every frame even when unchanged.
- Optional performance overlay (Settings toggle, also F3): FPS, frame ms (avg / worst), render scale, draw calls, triangles.
- Dependencies: none. Files: `src/main.js`, `src/character.js`, `index.html`.
- Acceptance: overlay shows live numbers; render scale drops under synthetic load and recovers; no `new THREE.Vector3` left in `Character.update()`; the HUD skips unchanged style writes.

### T2 — Input responsiveness (priority 1)
- Request raw mouse input (`requestPointerLock({ unadjustedMovement: true })`) with a fallback to normal pointer lock when the browser rejects it (Safari / older Chrome / Firefox).
- Mouse deltas are consumed in the same frame they arrive (already true); verify that nothing delays look input when the frame rate drops (clamped `dt` must not scale mouse look).
- Dependencies: none. Files: `src/main.js`.
- Acceptance: pointer lock still works when raw input is unsupported; mouse look is independent of `dt`.

### T3 — Weapon and impact feedback (priority 2)
- Muzzle flash size and light intensity per weapon (pistol small, shotgun / sniper large, suppressed none — suppressed already done).
- Surface-aware impacts: colliders get a material tag from the builder texture kind (`metal`, `wood`, `concrete`, `dirt/grass`, `fence`); impacts spawn sparks on metal, splinters on wood, dust on concrete / ground; impact sound varies by surface.
- Headshot confirmation: distinct hit-marker colour exists; add a distinct short sound.
- Low-ammo cue: magazine count turns amber at ≤ 25 % and the HUD shows "RELOAD" when empty.
- Dependencies: T3 touches `world.js` (collider tag), `fx.js`, `main.js`, `audio.js`, `index.html`.
- Acceptance: a test fires at a container, a crate and the ground and gets three different surface tags; low-ammo HUD state toggles at the threshold.

### T4 — Documentation and release (priority 1, last)
- Update `docs/V2_1_PROGRESS.md` (Phases 4–5, perf numbers, known limitations), `README.md` (V2.1 features, controls incl. Q/F lean, wheel zoom, Shift breath, 5–8 range keys, training range), credits.
- Full verification (§3), then merge `v2.1-expansion` into `main` with a non-fast-forward merge commit, push. No force-push. Tag pushes are rejected by the environment's proxy — record the release in the merge commit message.
- Dependencies: T1–T3 complete and green.

## 3. Testing requirements

| Area | How it is verified |
| --- | --- |
| Regression | `node tools/test.cjs` — every existing check must pass (currently 80+ checks incl. ballistics, missions, sniper, range). Statistical AI checks: a single failure is re-run once; two failures block. |
| T1 frame pacing | new `perf` checks in `tools/test.cjs`: (a) `G.pacing` exists and reports EMA / worst; (b) forcing a synthetic slow frame series lowers render scale, fast series restores it; (c) adaptive scaling is inactive in `?test` unless explicitly enabled by the test. |
| T1 allocations | static check: no `new THREE.` inside `Character.update()` (grep in the test). |
| T2 input | test stubs `canvas.requestPointerLock` to reject the raw-input request and confirms the fallback call; mouse look applied with dt = 0.05 and dt = 0.005 yields the same yaw change. |
| T3 feedback | surface tags on representative colliders; impact particle colour differs per surface; low-ammo HUD class at threshold. |
| Rendering cost | `node tools/perf.cjs` — triangles / draw calls per map, preset, viewpoint. Forest medium must stay ≤ 0.6 M triangles. Reported as software-GL numbers only. |
| Visual | screenshots of both maps, the range, scoped view and a reload stage — inspected, not just generated. |
| Not verifiable here | real-GPU frame rate, audio by ear, hand-played enjoyment. These are reported as unverified, never as passed. |

## 4. Release gates (all required before merging to `main`)
1. `npm run build` succeeds; `node tools/test.cjs` fully green (with the re-run rule above).
2. `node tools/perf.cjs` within the budget in §3.
3. Browser smoke: menu → each mission type starts and shows a briefing; training range loads; no page errors.
4. Docs updated (README, V2_1_PROGRESS, this plan marked complete).
5. Working tree clean, branch pushed.
