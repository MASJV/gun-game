# SHADOW PROTOCOL V2.1 — progress log

> **Historical record — V2.1 development log (branch `v2.1-expansion`).** Kept for reference; details (branch names, test counts, file names) describe the project at that time. Current state: [README](../README.md) and [MULTIPLAYER.md](MULTIPLAYER.md).


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
- [x] Phase 3 — weapons and optics:
      * `sniper` (L96, bolt action, 5 rounds, `bolt` cycle time gates the next shot) from Quaternius SniperRifle_3 (CC0).
      * Optics: `scope` = fixed 4x, `vscope` = 4-10x; `Player.zoomStep()` on the mouse wheel in 0.25x steps while aiming
        (wheel otherwise cycles throwables; the listener is non-passive and prevents page scroll). `Player.adsFov()` uses
        fov = 2*atan(tan(hipFov/2)/zoom); sensitivity scales with the same ratio. Scope sway grows with zoom and movement,
        Shift holds breath (`breath`, `steady`). Scope overlay shows the magnification (`#zoomv`).
      * Reloads are staged per category (`rk`: rifle / pistol / shell / bolt): ammunition changes at fraction `ins` of the
        animation (`relIn`), never before; switching away earlier changes nothing. Left hand travels to the magazine well
        with a magazine / shell prop (`view.magProxy`, `magWell`, `lhRest`); shotgun loads per shell and pumps.
- [x] Phase 4 — AI refinement: guards scatter from grenades landing next to them (`Enemy.evade`, `Grenades.warn`), cover
      hide time capped so nobody stays tucked indefinitely, reloading in the open seeks cover; capture missions move the
      protection detail with the HVT (`Security.relocateDetail`) and seal every exit during the escort (`sealExits`).
      Enemy rifle damage 15.
- [x] Phase 5 — training range (`src/range.js`, `registerMap()` in world.js, `Player.setSlot()`), tree LOD
      (`updateLOD`, 16 m cells, 22 / 34 / 52 m by preset, ~60-triangle stand-in), far soldiers skip shadows, audio
      space tail and varied footsteps, frame pacing (`G.pacing`: EMA / worst, adaptive render scale 0.6-1.0 with
      hysteresis, off in `?test`), performance overlay (F3), raw mouse input with fallback (`G.lock`), surface-tagged
      colliders (`mat`) with surface-specific impacts and sounds, ground-plane impacts, per-weapon muzzle flash,
      headshot cue, low-ammo HUD. Tools: `tools/perf.cjs`, `tools/smoke.cjs`.

## Verification at release (v2.1.0)
- `node tools/test.cjs`: 87/87 checks (headless Chromium, software GL).
- `node tools/perf.cjs` (software-GL counts, not real-GPU frame rates): forest medium 0.43-0.53 M triangles,
  225-343 draw calls (V2 was ~1.4 M); warehouse medium 0.31-0.35 M.
- `node tools/smoke.cjs`: all five mission types reach their briefing and start through the real menu; the range loads;
  no page errors.
- Not verified: real-GPU frame rate and frame pacing on hardware, audio by ear, a full hand-played mission.

## Known limitations
- Soldiers are a faceless CC0 mannequin with box gear; guns are low-poly stylised models.
- Enemies do not fire while moving; enemy reloads reuse the pistol reload clip.
- The training range's dummies are passive soldiers; there is no score table or timed course.
- Two parallel agents started on forest LOD and audio in this phase were stopped by the usage limit before they produced
  anything; both tasks were then done directly on this branch.

## Next steps (if development continues)
1. Hand-play on real hardware: check adaptive scaling thresholds, enemy lethality per level, mission pacing.
2. Firing on the move for Tactical / Elite pointmen; a rifle reload clip for enemies.
3. A timed course and per-weapon stats in the training range.
