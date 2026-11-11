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
- [ ] Phase 2 — dynamic missions
- [ ] Phase 3 — sniper rifle, variable zoom, reload overhaul
- [ ] Phase 4 — AI refinement
- [ ] Phase 5 — training range, performance, polish, release to main

## Next steps
See the end of this file (rewritten at each checkpoint).
