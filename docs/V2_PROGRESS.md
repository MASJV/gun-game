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
- [ ] M5 map/visual/audio polish, balance, perf

## Verification so far
`npm test` — 48/48 checks pass (headless Chromium, software GL): menu, movement, lean, mantle, all six guns,
attachments, hit zones, knife, frag/flash/smoke, medical, wall/LOS fairness, per-profile fight statistics,
vault/climb traversal, body discovery -> ALERT -> alarm runner -> LOCKDOWN -> reinforcements, both missions, restart/pause.
Not verified: real-GPU frame rate, audio by ear, a full hand-played mission.

## TODO (prioritised)
1. Balance pass: recruit damage output is very low; check elite grenade usage actually triggers in play.
2. M5 visuals: replace primitive trees/props with CC0 GLB props (jam-ready-assets: quaternius-stylized-nature,
   quaternius-zombie-apocalypse/Environment), better materials/lighting, security checkpoint dressing.
3. README rewrite for V2; credits.
4. Audio polish (spatial enemy footsteps, alarm), optional player settings (crouch toggle).
5. Known rough edges: no reload animation beyond weapon tilt + left hand; left-hand IK can look stiff in low-ready;
   enemies do not open fire while moving; corpses are not removed.
