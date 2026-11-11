# SHADOW PROTOCOL V2

Single-player tactical FPS for the browser (Three.js). No backend, no accounts, no runtime AI services.

## Play

Open `index.html` in a desktop browser (Chrome, Edge or Firefox). No server is needed: code is bundled in
`dist/game.js` and all models are embedded in `dist/assets.js`.

## Controls

| Key | Action |
| --- | --- |
| W A S D / Mouse | Move / look |
| LMB / RMB | Fire / aim down sights |
| Shift / Space | Sprint / jump (hold Space against a low obstacle to climb it) |
| C (toggle) or Ctrl (hold) | Crouch |
| Q / F | Lean left / right |
| R | Reload |
| 1 / 2 / 3 | Primary / secondary / knife |
| V | Quick melee |
| G / 4 | Throw grenade / cycle frag, flash, smoke |
| H / X | Medkit (slow, +65) / stim (fast, +25) |
| E | Interact, pick up |
| N / L | Night vision / laser sight |
| Esc | Pause |

## What is in the game

- **Maps:** Forest Outpost and Industrial Warehouse, each staffed from the first second with an objective detail,
  door guards and patrols, an alarm panel, an objective and an extraction point.
- **Enemy intelligence:** Recruit, Tactical (default) and Elite Squad. All three share the same senses, movement and
  damage rules; they differ in decisions (cover use, peeking discipline, radio reliability, flanking, bounding, grenades).
- **Cover:** guards take positions generated from the map geometry, lean around edges or rise over low cover,
  and can only see or shoot when their head and muzzle are really clear of it. What leans out can be shot.
- **Security:** NORMAL → SUSPICIOUS → ALERT → LOCKDOWN. Radio calls publish a rough position report, a runner goes for
  the alarm panel, reinforcements are finite and enter from a far map edge. Nobody is told where you are right now.
- **Loadout:** primary (AK-47, M4A1, SR-9 DMR), secondary (pistol, SMG, shotgun), combat knife; optics (iron, red dot,
  holographic, 4x), suppressor, foregrip, laser; equipment kits with frag, flash and smoke grenades, medkits and stims.

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
`npm test` needs Playwright with a Chromium it can launch. Progress notes for contributors: `docs/V2_PROGRESS.md`.

## Credits

3D models and animations: **Quaternius** (Universal Animation Library 1 & 2, Ultimate Guns, Stylized Nature,
Zombie Apocalypse Kit), all **CC0 1.0**, obtained from the mirror `github.com/series-ai/jam-ready-assets`.
Textures on world geometry, audio, UI, soldier equipment, optics and first-person hands are generated in code.
