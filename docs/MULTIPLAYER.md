# SHADOW PROTOCOL — LAN co-op (v2.4)

Co-op for 2–4 players on the same local network. There are no accounts, no cloud services and no internet
dependency. Single-player is unchanged and never needs the server.

## Playing

**Host (one computer):**

1. In the game folder run:

   ```bash
   npm run lan
   ```

   This needs Node 18 or newer and no `npm install`. The server prints addresses such as
   `http://192.168.1.20:8787/`.
2. Open that address in a browser, choose **MULTIPLAYER → CREATE PARTY**, and share the 5-character code or the
   **invitation link**.
3. Choose the map, mission, length, enemy level and friendly fire. Press **START MISSION** when everyone is ready.
   The leader is ready by definition.

**Friends (their own computers, same Wi-Fi or LAN):**

1. Open the host's *network* address, or simply the invitation link.
2. Choose **MULTIPLAYER**, enter a name and the code (the invitation link fills it in), then **JOIN PARTY**.
3. Set your own weapons and kit in **LOADOUT**, then press **READY**.

**Troubleshooting:**

- *No answer from the host:* the host must allow Node through its firewall (Windows asks the first time). Both
  machines must be on the same network.
- *Guest Wi-Fi:* a guest network that isolates clients blocks all of this.
- *Port in use:* `npm run lan -- --port 8790`.
- *Public addresses:* by default only loopback and private addresses can connect. `--public` lifts that and is not
  recommended.
- *The code alone is not enough:* a party code only identifies a party on that host. It cannot find a computer by
  itself, so friends always need the host's address or the invitation link.

## Rules in co-op

| | |
|---|---|
| Shared | Mission seed and generated layout, guards (one simulation), security level, objectives, crates, grenades, smoke, power, comms and alarm sabotage, hostage / target, extraction, results |
| Per player | Movement, aim, weapons, attachments, ammunition, equipment, health |
| Objectives | Any operator can complete them. The host validates position, stage and item. |
| Downed | At 0 HP an operator is **downed**: no moving or shooting, guards ignore them. They bleed out in **45 s**. |
| Revive | A teammate holds **E** next to them for **3.5 s**. They get up with **35 HP**. |
| KIA | A downed operator who bleeds out is killed in action and spectates a teammate. |
| Extraction | The mission ends when **every standing, connected operator** is at the extraction point, plus the hostage or target if there is one. Downed operators must be revived first or they block extraction. KIA and disconnected operators do not block it. |
| Failure | Any normal mission failure (for example the hostage killed), or no operator left standing. |
| Friendly fire | Off by default. When enabled in the lobby, rounds that hit a teammate do 60 % damage. |
| Disconnects | A dropped client gets 20 s to reconnect automatically and keeps their character. Guards ignore a missing operator. |
| Host leaves | The party ends for everyone with a message. There is no host migration. |
| Pause | Esc releases the mouse and shows the pause menu, but a co-op mission keeps running. |
| After a mission | Everyone sees the same team results (status, kills, accuracy, revives) and returns to the lobby for the next mission. |

## Architecture

```
 browser (leader / HOST)            server/lan.cjs (Node, same machine)         browser (CLIENT) ×1–3
 ─────────────────────────          ───────────────────────────────────          ─────────────────────
 full game + THE shared             HTTP: serves index.html + dist/              full game for own operator
 simulation (guards, civilians,     WS /ws: parties, codes, lobby, ready,        guards / civilians = puppets
 security, grenades, objectives,    start/go, relay, sender stamping,            of host snapshots (interpolated)
 every operator's health)           validation, rate limits, LAN-only           requests: fire, throw, act
            ▲   snap 15 Hz, events, targeted messages │    st 20 Hz / fire / throw / act   ▲
            └──────────────────────────────────────────┴────────────────────────────────────┘
```

**Authority: the party leader's game.** The game's AI, ballistics, hit zones and missions are written for the browser
(Three.js skeletons, animation-driven hit capsules, nav grids). Moving them into Node would have meant forking the
whole simulation. So the shared simulation runs exactly once, in the leader's browser on the machine that also runs
the server. This is the "listen server" model used by most co-op shooters. The Node server owns membership and
routing and never lets a client speak for someone else. Every other browser only simulates its own operator.

**Messages** are JSON over one WebSocket per player:

| Message | From → to | Rate | Content |
|---|---|---|---|
| `st` | every player → everyone | 20 Hz | position, velocity, yaw / pitch, stance and action flags, weapon, lean |
| `fire` | shooter → everyone | per shot | eye and muzzle, pellet directions, end points (for visuals), render time (for lag compensation) |
| `throw`, `act` | client → host | per action | grenade, objective, crate, revive, heal, reload, melee, fall damage |
| `snap` | host → clients | 15 Hz | guards (8 numbers each), civilians, every operator's health and state, security, extraction count, mission state (on change, at least once a second) |
| `ev` | host → clients | per frame, batched | spawns, guard shots, kills, grenades, detonations, toasts, radio, security changes, downs, revives, KIA |
| `to` | host → one player | per event | damage taken, hit or kill confirmation, position correction |
| `end` | host → everyone | once | identical results for everybody |

**Validation on the host:**

- **Fire:** the weapon must be in that player's loadout, and the rate is checked against the weapon's RPM. A
  magazine count is kept and refilled only by reported reloads, limited by reserve. The eye must be within 2.2 m of
  the reported position and the muzzle within 1.3 m of the eye. Pellet count is capped and directions must be finite.
- **Throws:** inventory counts and origin are checked.
- **Objectives and crates:** current stage, item, position within 3.2 m and height.
- **Revives:** both players' states and a distance of 2.4 m.
- **Heals:** inventory counts.
- **Movement:** a teleport or speed hack gets a position correction. Damage is never taken from a client, apart from
  its own fall damage.

The server additionally checks:

- message size (64 KB)
- JSON shape and type whitelist
- who may send what (only the leader may send `snap`, `ev`, `to`, `end`)
- a token-bucket rate limit (abusers are disconnected)
- names, settings and loadouts against whitelists
- a 4-player cap, 16 parties and 64 connections

Static files are limited to a whitelist, so `src/`, `server/` and path traversal return 404.

**Responsiveness:**

- Each player's own movement, aiming and firing are local, so V2.3 controls are untouched.
- A client's hit effects (impact or blood) appear immediately. The host's verdict (hit marker, kill) arrives one
  round trip later, a few milliseconds on a LAN.
- Remote operators and guards are rendered 100 ms in the past, interpolated between packets.
- The host **lag-compensates** shots by moving guards back to where the shooter saw them, up to 350 ms. This is
  position only: the current pose is kept.
- Measured in the automated 4-player test: one client receives about **11 KB/s** and sends about **2 KB/s**, at about
  64 messages per second.

**Guards and several players:**

- Each guard engages one operator at a time: whoever he can actually see, nearest first, re-evaluated at his normal
  perception rate.
- The rest of the AI (cover, flanking, radio reports, last known positions) is unchanged, so teammates who split up
  really are dealt with separately.
- No guard is told where an unseen operator is.
- Teammates' gunfire and footsteps reach the guards exactly like the host's own.
- Encounter size is not scaled per player.

## Code map

| File | Role |
|---|---|
| `server/lan.cjs` | Zero-dependency HTTP and WebSocket (RFC 6455) server, parties, validation, relay |
| `src/net.js` | WebSocket client, address and invitation parsing, keep-alive, automatic resume |
| `src/mp.js` | Lobby UI (`initLobby`); co-op session (`createSession`): remote operators, host authority, client puppets, revive, extraction, results |
| `src/main.js` | Hooks: co-op mission start and spawn spread, step (host AI or client puppets), shots, melee, grenades, crates, prompts, team HUD, results, pause behaviour |
| `src/player.js` | Downed and KIA view, host-routed damage, heal / reload / shot reports |
| `src/ballistics.js`, `src/enemy.js`, `src/equipment.js`, `src/missions.js` | Multi-operator hit tests, guard-shot events, host-only grenade effects, `Mission.interact()` for validated remote completion |

## Tests

| Command | What it does |
|---|---|
| `npm run servertest` | 13 protocol and safety checks against a real server process with raw WebSocket clients |
| `npm run mptest` | 24 checks with a real server and 2, then 4, independent Chromium contexts. Each has its own storage and its own WebSocket connection, and uses the real menu and lobby. See below. |
| `npm test` | The single-player suite (121 checks), unchanged |

The 24 `mptest` checks cover:

- **Lobby:** create, wrong code, invitation link, leader-only settings, loadouts, ready
- **Mission start and presence:** identical mission and guard roster, each player seeing the other, movement and
  heading sync
- **Combat:** client shooting with host damage and kill credit, guard fire hitting a client, downed and revive,
  grenades exploding at the same spot
- **Mission flow:** shared objective, extraction rule, identical results, return to lobby and a second mission
- **Failure and connection handling:** client disconnect, team wipe, a fifth player refused, four-player mission with
  bleed-out, KIA and spectate, bandwidth, host leaving, server restart

**What was not tested:**

- Everything ran on **one machine**: several browser contexts on 127.0.0.1, not separate physical devices on a real
  network. Wi-Fi latency, packet loss and firewalls were not exercised.
- `mptest` skips 3D rendering in its tabs for speed (`G.skipRender`, test mode only). Rendering of teammates was
  checked separately in screenshots, and the single-player e2e suite checks rendered pixels.

## Bugs found and fixed while building this

- **Resume after a server restart:** the new server correctly answered "party gone", but the client stayed in a dead
  lobby. It now ends the party and returns to the connect screen.
- **Results screen:** with the co-op team table, the buttons fell off the bottom of short windows. Overlay boxes now
  scroll.
- **Guard AI, single-player too:** a guard sent to the alarm panel released its cover spot *before* checking that
  the panel was reachable. If it was not, the guard stayed in COVER with no spot, and the next update threw. The
  route is now checked first, and COVER recovers if its spot is ever missing. The `mptest` runs exposed this as an
  intermittent host-loop error, which the V2.3.1 error panel caught.

## Known limitations

- **No host migration**, and the authority lives in the leader's browser tab. If the leader's tab is in the
  background, the browser may throttle it and slow the shared world for everyone. Keep the host's game window in the
  foreground.
- **No joining a mission in progress.** New players wait in the lobby. Reloading the page mid-mission means
  rejoining after that mission.
- **Lag compensation is position-only.** Pose and crouch are not rewound, which matters little on a LAN.
- **Visual details:** teammates' grenades are shown from the host's spawn event, and their weapon model changes with
  their current weapon. Teammates' laser dots and night vision are not shown to others.
- **Encounter size** is not scaled for larger parties.

## Continuing development

1. `npm run lan` and open `http://localhost:8787/` in two browser windows. Use a second browser profile or a private
   window so each window has its own storage.
2. Run `npm run servertest`, `npm run mptest` and `npm test` before pushing.
3. Natural next steps:
   - host migration
   - joining a mission in progress, with a snapshot of the full world state
   - pose-accurate lag compensation
   - encounter scaling per party size
   - showing teammates' laser dots
