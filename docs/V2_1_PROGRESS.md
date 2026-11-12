# SHADOW PROTOCOL V2.1 — progress log

Read this first when resuming, then `git log --oneline`. V2 background: `docs/V2_PROGRESS.md`.

## Branches
- `main` — verified releases. Created from V2 commit b9951b6 (the remote had no main before).
- `v1-stable`, `v2-overhaul` — history, do not touch.
- `v2.1-expansion` — all V2.1 work.
- Note: `git push` of tags is rejected by this environment's git proxy; releases are marked by branch only.

## Phases
- [x] Phase 0 — V2 verified (52/52), `main` created, `v2.1-expansion` branched.
- [x] Phase 1 — shared ballistic resolver (`src/ballistics.js`): player and enemy rounds use `G.trace`; the player's round
      leaves the muzzle (eye->muzzle and muzzle->aim point are both traced); fences and road barriers stop bullets;
      enemies need a bullet line of fire, not just sight; rock colliders enlarged; tests in `tools/test.cjs` ("ballistics").
- [x] Phase 2 — dynamic missions (`src/missions.js`, `src/civ.js`):
      * 5 mission types x Quick/Standard/Extended (`MISSIONS`, `LENGTHS`, `PLANS`); only valid combinations are offered.
      * Stage kinds (`STAGE`): retrieve, hack, keycard, search (3 cases), sab:comms / security / power / charge, capture, rescue.
      * Map data in `world.js`: `anchors` (objective zones with guard posts), `entries`, `exits`; forest gained a remote bunker.
      * `generateMission()` is seeded; history in localStorage (`sp21_history`) rotates objective zone, entry, exit and plan.
        `validate()` checks every waypoint is standable and connected in order; 28 attempts, then a classic fallback.
      * `Mission` runtime: sequential stages, HUD objective list, marker at the *reported* location (HVT is never live-tracked).
      * `Civ`: hostage (held -> follow) and HVT (idle -> flee to a fallback zone on alert -> surrender up close -> follow).
        Killing either fails the mission; extraction needs them within 8 m.
      * Security hooks in `squad.js`: `commsDown` (no radio reports, no reinforcements), `panelDown` (no alarm / lockdown),
        `discover()` (a guard is sent to check a sabotaged system), power-off dims lights and shortens guard sight.
      * `G.sel.layout = 'classic'` (tests only) keeps the fixed V2 layout. Pre-mission briefing overlay (`#briefov`).
- [ ] Phase 3 — sniper rifle, variable zoom, reload overhaul
- [ ] Phase 4 — AI refinement
- [ ] Phase 5 — training range, performance, polish, release to main

## Next steps
See the end of this file (rewritten at each checkpoint).
