# SHADOW PROTOCOL V2.1

Single-player tactical FPS for the browser (Three.js). No backend, no accounts, no runtime AI services.

## Play

Open `index.html` in a desktop browser (Chrome, Edge or Firefox). No server is needed: code is bundled in
`dist/game.js` and all models are embedded in `dist/assets.js`.

## Controls

| Key | Action |
| --- | --- |
| W A S D / Mouse | Move / look |
| LMB / RMB | Fire / aim down sights |
| Mouse wheel | While aiming a variable scope: zoom 4–10x in 0.25x steps · otherwise: cycle grenades |
| Shift | Sprint · while scoped: hold breath |
| Space | Jump (hold against a low obstacle to climb it) |
| C (toggle) or Ctrl (hold) | Crouch |
| Q / F | Lean left / right |
| R | Reload |
| 1 / 2 / 3 | Primary / secondary / knife |
| V | Quick melee |
| G / 4 | Throw grenade / cycle frag, flash, smoke |
| H / X | Medkit (slow, +65) / stim (fast, +25) |
| E | Interact, pick up (hold for terminals, sabotage, restraining) |
| N / L | Night vision / laser sight |
| F3 | Performance overlay: FPS, frame-time graph and percentiles, stutter log, CPU / GPU split, resolution |
| 5 / 6 / 7 / 8 | Training range only: cycle primary / secondary / optic, toggle suppressor |
| Esc | Pause |

## What is in the game

- **Missions:** choose Intelligence Recovery, High-Value Target Capture, Sabotage, Hostage Rescue or a multi-stage
  Tactical Operation, in Quick (1 objective), Standard (2) or Extended (3) length. Objective zones, insertion and
  extraction points rotate between runs (seeded, remembered locally) and every generated mission is validated as
  reachable. A briefing lists the objective sequence before you deploy.
- **Maps:** Forest Outpost and Industrial Warehouse, each staffed from the first second (objective detail, sentries,
  door guards, patrols), with an alarm panel and several objective zones. Plus a 100 m **training range**.
- **Enemy intelligence:** Recruit, Tactical (default) and Elite Squad. Same senses, movement and damage for all three;
  they differ in decisions: cover use and lean-peeking, radio discipline, flanking, bounding, suppression, grenades.
- **Security:** NORMAL → SUSPICIOUS → ALERT → LOCKDOWN. Radio calls publish a rough position report, a runner goes for
  the alarm panel, reinforcements are finite. Sabotage changes this: no relay means no radio and no reinforcements,
  no security control means no alarm, no power means a dark site. Nobody is ever told where you are right now.
- **Shooting:** one ballistic resolver for every gun, player and enemy. Walls, fences, crates, vehicles and rocks stop
  rounds; a round leaves the muzzle, so you cannot shoot past cover only your eyes can see over.
- **Loadout:** primary (AK-47, M4A1, SR-9 DMR, L96 bolt-action sniper), secondary (pistol, SMG, shotgun), combat knife;
  red dot, holographic, fixed 4x, variable 4–10x, suppressor, foregrip, laser; equipment kits.
- **Performance & comfort:** Low / Medium / High presets, distance-based tree and animation detail, GPU-aware adaptive
  render scale (60 FPS or display-refresh target), raw mouse input, frame-rate-independent movement, and Comfort
  settings for camera motion (head bob, sprint FOV, shake; 0 % = off) and weapon sway. See `docs/SMOOTHNESS.md`.
- **Controls (V2.3):** unsmoothed, unaccelerated mouse look; aim sensitivity follows the zoom exactly through every
  ADS / scope transition; separate ADS, scope and vertical multipliers; smooth 4–10x wheel zoom; weighted weapon
  inertia per weapon class (gun only, never the camera); soft acceleration and stops, slower backpedal, jump
  buffering, smooth stairs and mantles. Settings → Controls has a reset button. See `docs/CONTROLS.md`.

## Develop

```bash
npm install
```

```bash
npm run build
```

```bash
npm test
```

`npm run assets` rebuilds `assets/*.glb` and `dist/assets.js` from the source packs (network needed).
`npm test` needs Playwright with a Chromium it can launch. `npm run perf` prints triangles and draw calls per map and
preset (software GL in CI-like environments, so not a real-GPU frame rate); `npm run smoke` runs the real menu flow; `npm run pace` measures simulation frame times, allocation and
frame-rate independence of movement; `npm run e2e` drives the real page end to end (menu → briefing → rendered-pixel check → missions played on foot → extraction →
replay → menu, every map / mission / length; see `docs/QA_V2_3_1.md`); `node tools/feel.cjs <label>` measures controls feel (acceleration, stops, aim
sensitivity through transitions, stairs, mantle) at 30 / 60 / 120 / 144 Hz. Progress notes for contributors: `docs/V2_PROGRESS.md`, `docs/V2_1_PROGRESS.md`, `GAME_PLAN.md`.

## Credits

3D models and animations: **Quaternius** (Universal Animation Library 1 & 2, Ultimate Guns, Stylized Nature,
Zombie Apocalypse Kit), all **CC0 1.0**, obtained from the mirror `github.com/series-ai/jam-ready-assets`.
Textures on world geometry, audio, UI, soldier equipment, optics and first-person hands are generated in code.
