# Manual LAN co-op checklist (separate devices)

The automated co-op tests run several browser contexts on **one machine** over 127.0.0.1. They do not exercise
real Wi-Fi, a second physical computer, firewalls or packet loss. Use this list on real hardware.

## Setup

- Computer **H** (host) and computer **C** (client) on the same Wi-Fi / LAN. Not a guest network with client
  isolation.
- On H, from the project folder, run `npm run lan` (Node 18+). Note the "Your network" address it prints.
- If C cannot connect, allow Node through H's firewall.

## Checks

| # | Step | Expected |
|---|---|---|
| 1 | **Join.** H opens the address, MULTIPLAYER → CREATE PARTY. C opens the invitation link (or the network address), enters a name and the code, then JOIN. | Both names are in both lobbies. Pings are shown. |
| 2 | **Lobby.** H changes the mission. C changes their loadout, then READY. H presses START. | C sees the mission change. H sees C's loadout. Both enter the same map at the same insertion point. |
| 3 | **Movement.** Both walk, sprint, crouch, jump and mantle while watching each other. | The teammate moves smoothly, faces the right way and has a name tag. No teleporting. |
| 4 | **Combat.** C shoots a guard. Both look at the same guard. | The hit marker appears on C. The guard reacts and dies on both screens. |
| 5 | **Enemy fire.** Let a guard engage C. | C's health drops. The TEAM panel on H shows the same value. |
| 6 | **Down and revive.** Let C reach 0 HP. H holds E next to C. | C is DOWN with a bleed-out timer on both screens. After 3.5 s C is up with 35 HP. |
| 7 | **Objectives.** C completes an objective. | The objective list advances on both screens. |
| 8 | **Extraction.** H waits at the exit while C is DOWN elsewhere. Then revive C and have both go to the exit. | Extraction is blocked ("REVIVE … BEFORE EXTRACTION"). When both are there, both see the same results. |
| 9 | **Second mission.** RETURN TO LOBBY, ready, start again. | A new mission starts for both. |
| 10 | **Disconnect / reconnect.** Turn off C's Wi-Fi for about 5 s, then back on. | H shows C as LINK LOST, then RECONNECTED. C keeps playing. |
| 11 | **Client leaves.** C: Esc → LEAVE MISSION. | H carries on. C is back at the connect screen. |
| 12 | **Host leaves.** Start again, then H: Esc → END MISSION FOR EVERYONE (or close the tab). | C is told the party ended and is back at the connect screen. |
| 13 | **Background tab.** H switches to another tab for about 10 s during a mission. | Expected limitation: the shared world may slow down or stutter while the host tab is in the background. |

Record the browser, OS, network type and any failure step when reporting results.
