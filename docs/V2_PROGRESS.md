# SHADOW PROTOCOL V2 — progress log

> **Historical record — V2 development log (branch `v2-overhaul`).** Kept for reference; details (branch names, test counts, file names) describe the project at that time. Current state: [README](../README.md) and [MULTIPLAYER.md](MULTIPLAYER.md).


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
(each pack ships a License.txt there; files are Git LFS, fetched via media.githubusercontent.com). No attribution required; credited in README.
- Universal Animation Library 1 + 2 -> `assets/soldier.glb` (mannequin mesh + 24 selected clips; finger/scale channels stripped).
- Ultimate Guns pack -> `assets/gun_*.glb`, `assets/acc_*.glb`.
- Stylized Nature + Zombie Apocalypse Kit (environment, vehicles) -> `assets/prop_*.glb` (textures 256 px WebP, normal maps dropped).
Everything else (world textures, audio, UI, soldier gear, optics, hands) is procedural.

## Architecture (src/)
- `assets.js` — decodes embedded GLBs, PBR material tuning, gun metadata (`GUN`), `makeGun()`.
- `character.js` — `Character`: skinned soldier, upper/lower body clip blending, procedural lean + recoil, left-hand IK,
  bone-capsule hit zones (`rayHit`), `eye()` / `muzzle()` world queries.
- `world.js` — both maps (merged static geometry + AABB colliders), `Nav` (1 m grid with per-cell floor height and
  vault / climb / drop links), `buildCover()` (cover spots generated from collider faces), map data: `posts`, `panel`, `routes`.
- `weapons.js` — weapon stats, attachments (`statsFor`), loadout persistence, first-person view models (`buildView`).
- `player.js` — movement, lean (Q/F), mantle, 3 weapon slots, quick melee, throw / medkit / stim use states.
- `equipment.js` — `Grenades`: frag / flash / smoke physics and effects, shared by player and enemies.
- `enemy.js` — AI state machine (PATROL, SUSPICIOUS, INVESTIGATE, SEARCH, COMBAT, MOVE, COVER[hide|glance|fire], ALARM),
  `PROFILES` (recruit / tactical / elite). Fairness rules are listed at the top of the file.
- `squad.js` — `Security` (NORMAL/SUSPICIOUS/ALERT/LOCKDOWN, radio reports, alarm runner, reinforcements) and the squad
  coordinator (orders from the last *report*, combat roles, elite bounding via `mayMove`).
- `main.js` — loop, services on `G` (los, sound, shout, say, playerShot, melee...), mission flow, menus, HUD.
- `tools/test.cjs` — headless behaviour tests (`npm test`), drives the bundle through `window.__SP` at `index.html?test`.

## Key design decisions
- Enemy sight uses the animated head bone; shots leave the real muzzle and are refused if the first 1.7 m is blocked.
  A guard tucked behind cover therefore cannot see or shoot, and whatever leans out is hittable (bone capsules).
- Cover spots sit 0.48 m off a collider face, 0.3 m inside a corner; `modesFor()` validates "protected when tucked" and
  "line of fire when leaning / standing" against the current threat position every peek.
- The alert system never distributes the player position: `Security.report` is the last radioed location (noisy), orders derive from it.
- Assets are embedded as base64 (`dist/assets.js`, regenerate with `npm run assets`) so file:// launch keeps working.
- No automatic health regeneration above 20 HP; medkits / stims matter.

## Milestones
- [x] M1 asset pipeline, animated soldier rig, GLB weapons + hands + optics in first person
- [x] M2 cover + lean-peek AI, nav heights + vault/climb links (enemies and player share routes)
- [x] M3 security states, radio, alarm panel, squad coordinator, objective defence, finite reinforcements
- [x] M4 loadouts (primary/secondary/knife), attachments, grenades/flash/smoke, medkit/stim, new menu + HUD
- [~] M5 polish: instanced CC0 props on both maps (trees, rocks, bushes, grass, containers, barrels, truck, barriers,
      water tower), ACES tone mapping, merged soldier gear, quality presets. Remaining items below.

## Performance notes
- `G.debugRender()` (see main.js) renders one synchronous frame and returns ms / draw calls / triangles.
- Forest (medium): ~1.4 M triangles incl. shadow pass, ~350 draw calls. Warehouse: ~0.4 M, ~250.
  Trees are the cost (3.1-3.4 k triangles each, meshopt could not simplify the leaf cards); foliage does not cast shadows,
  a shadow-only cone per tree stands in. Props are instanced per 48 m chunk so they frustum-cull.
- Not measured on a real GPU (the test environment has software GL only).

## Verification so far
`npm test` — 52/52 checks pass (headless Chromium, software GL): menu, movement, lean, mantle, all six guns, attachments,
hit zones, knife, frag/flash/smoke, medical, wall/LOS fairness, per-profile fight statistics, elite grenade and
bounding rules, vault/climb traversal, body discovery -> ALERT -> alarm runner -> LOCKDOWN -> reinforcements,
both missions, restart/pause, repeated missions. Some AI checks are statistical; rerun once before trusting a single failure.
Not verified: real-GPU frame rate, audio by ear, a full hand-played mission.

## TODO (prioritised)
1. Real-hardware playtest: frame rate in the forest, enemy lethality/balance per level, viewmodel feel.
2. If the forest is too heavy: cut interior trees (world.js `placed.length < 150`) or add a low-poly tree LOD.
3. Enemy visuals: the mannequin has no face/cloth detail; gear is box-based. A textured CC0 soldier would be better.
4. Animation gaps: no dedicated reload/vault clips for rifles (pistol clips + procedural), enemies do not fire while moving.
5. Audio: enemy footsteps are not audible to the player; alarm siren is a simple oscillator.
6. Corpses persist (by design for body discovery) but are never cleaned up in very long sessions.
