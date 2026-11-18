# Working on SHADOW PROTOCOL

## Branches and releases

- `main` is the repository's default branch and the release integration branch.
- Never make a temporary, experimental or generated `claude/*` branch the GitHub default.
- Start new work from an up-to-date `main` unless another base is explicitly requested.
- Prefer descriptive feature or fix branches (for example `fix/coop-extraction`, `release/v2.4.1-public`) where the
  environment allows them.
- Generated session branches are temporary working branches. Integration always targets `main`.
- Run the relevant checks before integrating changes (see below).
- For a requested release, verify that the intended changes are published on `main`, and that GitHub still uses
  `main` as the default branch.
- Publish a release by pushing a `v<version>` tag, or by running Actions → Release → Run workflow on `main`. The
  manual run tags the `main` commit with the `package.json` version. Either way, the workflow builds the ZIP.
- Report the branch, the commit, the actual test results and the merge / release status.
- Never discard unique work, and never force-push `main`, during cleanup. Check a branch for unique commits and open
  pull requests before deleting it. Keep `v1-stable`.

For future new repositories: initialise and push `main` first, set it as GitHub's default branch, and verify that
setting before creating any temporary branches.

## Checks

| Command | What it runs |
|---|---|
| `npm run build` | Rebuilds `dist/game.js`. It is committed and must match `src/`. |
| `npm test` | Single-player suite. |
| `npm run servertest` | LAN server checks. Needs Node 22+. |
| `npm run mptest` | Multi-browser co-op through the real server. |
| `npm run smoke` | Real menu flow. |
| `npm run e2e` | Full end-to-end matrix, about an hour. `node tools/e2e.cjs <filter>` runs a subset. |

Tests need `npm ci` and `npx playwright install chromium`.

Report honestly what ran:
- Rendering is software WebGL in headless Chromium.
- Co-op tests use several browser contexts on one machine, not separate devices.
- `mptest` skips rendering.
