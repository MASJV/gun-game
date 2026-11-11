# SHADOW PROTOCOL V2 — progress log

Single source of truth for resuming V2 work. Read this first, then `git log --oneline`.

## Branches
- `v1-stable` — untouched V1 (commit a82a727). Never push V2 work here.
- `v2-overhaul` — all V2 work.

## How to run / build
- Play: open `index.html` (works from file://; models are embedded in `dist/assets.js`).
- `npm install`, then `npm run build` (bundles `src/` to `dist/game.js`).
- `npm run assets` regenerates `assets/*.glb` + `dist/assets.js` from the CC0 sources (needs network; only when assets change).
- `npm test` runs the headless Playwright checks in `tools/test.mjs` (needs a Chromium that Playwright can launch).

## Assets and licences
All third-party art is **CC0 1.0** by Quaternius, fetched from the mirror `github.com/series-ai/jam-ready-assets`
(each pack ships a License.txt there). No attribution is required; credit is given in README anyway.
- Universal Animation Library 1 + 2 → `assets/soldier.glb` (mannequin mesh + 24 selected clips; finger/scale channels stripped).
- Ultimate Guns pack → `assets/gun_*.glb`, `assets/acc_*.glb`.
Everything else (textures, audio, UI, gear on the soldiers, optics, hands) is procedural.

## Architecture (src/)
- `assets.js` — decodes embedded GLBs, PBR material tuning, gun metadata (`GUN`), `makeGun()`.
- `character.js` — `Character`: skinned soldier, upper/lower body clip blending, procedural lean + recoil, left-hand IK,
  bone-capsule hit zones (`rayHit`), `eye()` / `muzzle()` world queries.
- remaining modules: see milestone notes below.

## Milestones
- [x] M1a asset pipeline, animated soldier rig (this commit)
- [ ] M1b weapons/viewmodels from GLB guns, soldiers in game
- [ ] M2 cover + lean-peek AI, nav heights + vault/climb links
- [ ] M3 security states, radio, squad coordinator, objective defence
- [ ] M4 loadouts, attachments, knife, grenades/flash/smoke, medkit/stim
- [ ] M5 map/visual/audio polish, balance, perf

## TODO / next steps
See the bottom of this file; it is rewritten at every checkpoint.
