# Release notes

## v2.4.1

A polish and fix release of the v2.4 LAN co-op, prepared for public sharing. No new gameplay features.

**Co-op fixes.** Each was reproduced against v2.4.0 first and now has a regression check:

- **Damage went to the wrong operator.** A guard's round on a client could down the *host*: the down event, the
  bleed-out timer and the damage feedback went to the host. Team hit tests listed the client twice and left out the
  host.
- **Leaving a live mission.** A client who leaves now leaves the party, and the others carry on. A host who leaves
  ends the mission and the party for everyone. Before, players stayed in a stuck "mission in progress" lobby.
- **Extraction.** A connected teammate who is downed elsewhere now blocks extraction until he is revived or killed
  in action, as documented.
- **Callbacks after a session.** The host's session callbacks are restored afterwards. Later sessions and solo play
  no longer feed events into old sessions.
- **"Copy link".** It now reports success only when the link was really copied, with a working fallback on
  plain-HTTP LAN pages.
- **LAN address discovery.** The server now always finds and lists the host's network addresses, including on Node
  18.0–18.3, which reports the address family as a number. A defect introduced while preparing this release had
  stopped any address from being collected; it was caught in review and fixed before release. Regression checks
  include the invitation link from a party created on localhost.

**Other fixes:**

- **GPU memory across missions.** Every mission left about 30 geometries and 11 textures allocated after returning to
  the menu, so long sessions kept growing GPU memory. Everything a mission allocated is now released, and a
  regression check confirms the renderer returns to its menu baseline.

**Project:**

- Playwright is a pinned dev dependency.
- New GitHub Actions workflows: CI (build check, servertest, test, mptest, smoke, an e2e sample), Pages (the static
  solo demo) and Release (this ZIP).
- New README with real gameplay screenshots and an accurate account of how the game was made.
- `docs/LAN_CHECKLIST.md` for testing on real devices.
- Old progress reports are marked as historical.

**The ZIP** contains the ready-to-run game: `index.html` and `dist/` for solo play, and `server/lan.cjs` with
`package.json` for LAN hosting (`node server/lan.cjs`, Node 18+), plus the docs. It has no `node_modules`.

**Verification, all automated** (headless Chromium, software WebGL, one machine):

E2E_LINE
- `npm test` 122/122, `npm run servertest` 18/18, `npm run mptest` 31/31 and `npm run smoke` all passed.
- Co-op was tested with 2–4 independent browser contexts on 127.0.0.1, not on separate devices or real Wi-Fi.

**Known limitations:**

- no host migration
- keep the host's tab in the foreground
- no joining a mission in progress
- the original code has no license file yet
