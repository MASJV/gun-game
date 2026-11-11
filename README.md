# SHADOW PROTOCOL

Single-player atmospheric tactical FPS for the browser (Three.js, no backend, no external assets).

## Play

Open `index.html` in a desktop browser (Chrome, Edge or Firefox). No server or install is needed:
the game is pre-bundled into `dist/game.js`.

## Controls

| Key | Action |
| --- | --- |
| W A S D / Mouse | Move / look |
| LMB / RMB | Fire / aim down sights |
| Shift / Space | Sprint / jump |
| C (toggle) or Ctrl (hold) | Crouch |
| R | Reload |
| 1 / 2 / 3 | AK-47 / M4A1 / Pistol |
| E | Interact, pick up |
| N / L | Night vision / laser sight (M4A1) |
| Esc | Pause |

## Develop

```bash
npm install
```

```bash
npm run build
```

Source lives in `src/`: `main.js` (loop, mission, HUD), `world.js` (maps, colliders, nav grid),
`player.js` (movement, weapons), `enemy.js` (AI state machine and the three intelligence profiles),
`fx.js`, `audio.js`.
