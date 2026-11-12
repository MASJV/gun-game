// Asset pipeline: downloads the CC0 source models (cached in .asset-cache/), trims them and writes
//   assets/*.glb   - optimised models kept in the repo
//   dist/assets.js - the same files as base64, so index.html works from file:// with no server
// Sources (all CC0 1.0, Quaternius; mirrored at github.com/series-ai/jam-ready-assets):
//   Universal Animation Library 1 + 2  -> assets/soldier.glb (mannequin mesh + selected clips)
//   Ultimate Guns pack                 -> assets/gun_*.glb, assets/acc_*.glb
//   Stylized Nature + Zombie Apocalypse environment/vehicles -> assets/prop_*.glb (textures downscaled to WebP)
// Run: npm run assets
import { NodeIO } from '@gltf-transform/core';
import { prune, dedup, resample, weld, simplify, textureCompress } from '@gltf-transform/functions';
import { EXTTextureWebP } from '@gltf-transform/extensions';
import { MeshoptSimplifier } from 'meshoptimizer';
import sharp from 'sharp';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const BASE = 'https://media.githubusercontent.com/media/series-ai/jam-ready-assets/HEAD/';
const CACHE = '.asset-cache', OUT = 'assets';
fs.mkdirSync(CACHE, { recursive: true }); fs.mkdirSync(OUT, { recursive: true });
function fetchFile(rel, name) {
  const p = `${CACHE}/${name}`;
  if (!fs.existsSync(p) || fs.statSync(p).size < 1000) execFileSync('curl', ['-sSfL', '-m', '180', '-o', p, BASE + rel]);
  return p;
}
const UAL = 'quaternius-universal-animation-library', GUNS = 'quaternius-ultimate-guns/3D/weapons/';
const KEEP1 = ['Idle_Loop', 'Walk_Loop', 'Jog_Fwd_Loop', 'Sprint_Loop', 'Crouch_Idle_Loop', 'Crouch_Fwd_Loop', 'Pistol_Idle_Loop', 'Pistol_Aim_Neutral', 'Pistol_Aim_Up', 'Pistol_Aim_Down',
  'Pistol_Shoot', 'Pistol_Reload', 'Death01', 'Hit_Chest', 'Hit_Head', 'Jump_Start', 'Jump_Loop', 'Jump_Land', 'Roll', 'Interact'];
const KEEP2 = ['ClimbUp_1m', 'OverhandThrow', 'Hit_Knockback', 'Idle_TalkingPhone_Loop'];
const MODELS = {
  gun_ak: 'Guns/AssaultRifle_2', gun_m4: 'Guns/AssaultRifle2_1', gun_dmr: 'Guns/SniperRifle_1', gun_sniper: 'Guns/SniperRifle_3', gun_pistol: 'Guns/Pistol_1', gun_smg: 'Guns/SubmachineGun_2', gun_shotgun: 'Guns/Shotgun_1',
  gun_carbine: 'Guns/AssaultRifle_3', acc_scope: 'Accessories/Scope_1', acc_suppressor: 'Accessories/Silencer_1', acc_grip: 'Accessories/Grip', acc_knife: 'Accessories/Bayonet',
};

const io = new NodeIO().registerExtensions([EXTTextureWebP]);
const a = await io.read(fetchFile(`${UAL}/3D/characters/UAL1_Standard.glb`, 'ual1.glb'));
const b = await io.read(fetchFile(`${UAL}-2/3D/characters/UAL2_Standard.glb`, 'ual2.glb'));
const ra = a.getRoot(), buf = ra.listBuffers()[0];
for (const an of ra.listAnimations()) if (!KEEP1.includes(an.getName())) { an.listChannels().forEach((c) => c.dispose()); an.listSamplers().forEach((m) => m.dispose()); an.dispose(); }
const byName = new Map(ra.listNodes().map((n) => [n.getName(), n]));
const copyAcc = (s) => a.createAccessor().setType(s.getType()).setArray(s.getArray().slice()).setBuffer(buf);
for (const src of b.getRoot().listAnimations()) {
  if (!KEEP2.includes(src.getName())) continue;
  const dst = a.createAnimation(src.getName()), map = new Map();
  for (const ch of src.listChannels()) {
    const node = byName.get(ch.getTargetNode().getName()); if (!node) continue;
    const ss = ch.getSampler();
    if (!map.has(ss)) { const ns = a.createAnimationSampler().setInput(copyAcc(ss.getInput())).setOutput(copyAcc(ss.getOutput())).setInterpolation(ss.getInterpolation()); map.set(ss, ns); dst.addSampler(ns); }
    dst.addChannel(a.createAnimationChannel().setTargetNode(node).setTargetPath(ch.getTargetPath()).setSampler(map.get(ss)));
  }
}
// Fingers: bake the gun-grip pose as the rest pose and drop their animation channels; drop scale
// channels and per-bone translations (bone lengths are constant). Cuts the file by more than half.
const FINGER = /^(index|middle|pinky|ring|thumb)_/;
for (const an of ra.listAnimations()) {
  for (const ch of an.listChannels()) {
    const n = ch.getTargetNode().getName(), path = ch.getTargetPath();
    if (FINGER.test(n) && path === 'rotation' && an.getName() === 'Pistol_Aim_Neutral') ch.getTargetNode().setRotation(Array.from(ch.getSampler().getOutput().getArray().slice(0, 4)));
    if (FINGER.test(n) || path === 'scale' || (path === 'translation' && n !== 'pelvis' && n !== 'root')) { const sm = ch.getSampler(); ch.dispose(); if (sm && !sm.listParents().some((p) => p.propertyType === 'AnimationChannel')) sm.dispose(); }
  }
}
for (const an of ra.listAnimations()) { const live = new Set(an.listChannels().map((c) => c.getSampler())); for (const sm of an.listSamplers()) if (!live.has(sm)) sm.dispose(); }
await a.transform(resample({ tolerance: 0.001 }), prune(), dedup());
await io.write(`${OUT}/soldier.glb`, a);
for (const [name, rel] of Object.entries(MODELS)) fs.copyFileSync(fetchFile(`${GUNS}${rel}.glb`, name + '.glb'), `${OUT}/${name}.glb`);

// ---- environment props: fetch .gltf + its buffers/textures, shrink, pack to .glb ----
const NAT = 'quaternius-stylized-nature/3D/nature/', ENVP = 'quaternius-zombie-apocalypse/3D/post-apocalypse/';
const PROPS = [
  ...['Pine_1', 'Pine_2', 'Pine_3', 'CommonTree_1'].map((n) => [NAT, n, { tex: 256, ratio: 0.22, error: 0.08 }]),
  ...['Bush_Common', 'Rock_Medium_1', 'Rock_Medium_2', 'Rock_Medium_3', 'Grass_Common_Short', 'Fern_1'].map((n) => [NAT, n, { tex: 256 }]),
  ...['Container_Green', 'Container_Red', 'Barrel', 'Pallet', 'PlasticBarrier', 'CinderBlock', 'Pipes', 'WaterTower', 'Wheels_Stack', 'TrafficBarrier_1', 'StreetLights'].map((n) => [ENVP + 'Environment/glTF/', n, { tex: 256 }]),
  [ENVP + 'Vehicles/glTF/', 'Vehicle_Truck', { tex: 256, ratio: 0.6 }],
];
await MeshoptSimplifier.ready;
for (const [base, name, o] of PROPS) {
  const dir = `${CACHE}/props`; fs.mkdirSync(dir, { recursive: true });
  const get = (file) => { const p = `${dir}/${file}`; if (!fs.existsSync(p) || fs.statSync(p).size < 200) execFileSync('curl', ['-sSfL', '-m', '180', '-o', p, BASE + encodeURI(base + file)]); return p; };
  const g = get(name + '.gltf'), j = JSON.parse(fs.readFileSync(g, 'utf8'));
  for (const r of [...(j.buffers || []), ...(j.images || [])]) if (r.uri && !r.uri.startsWith('data:')) get(decodeURIComponent(r.uri));
  const d = await io.read(g);
  for (const m of d.getRoot().listMaterials()) m.setNormalTexture(null);
  const steps = [weld()];
  if (o.ratio) steps.push(simplify({ simplifier: MeshoptSimplifier, ratio: o.ratio, error: o.error || 0.02, lockBorder: false }));
  steps.push(prune(), textureCompress({ encoder: sharp, targetFormat: 'webp', resize: [o.tex, o.tex], quality: 82 }), dedup());
  await d.transform(...steps);
  if (name === 'Bush_Common') for (const t of d.getRoot().listTextures()) t.setImage(new Uint8Array(await sharp(Buffer.from(t.getImage())).modulate({ hue: 105, saturation: 0.55, brightness: 0.8 }).webp({ quality: 82 }).toBuffer())); // red shrub -> green
  await io.write(`${OUT}/prop_${name.toLowerCase()}.glb`, d);
}

let js = '// GENERATED by tools/build-assets.mjs - do not edit.\nwindow.SP_ASSETS={\n', total = 0;
for (const f of fs.readdirSync(OUT).filter((f) => f.endsWith('.glb')).sort()) {
  const d = fs.readFileSync(`${OUT}/${f}`); total += d.length;
  js += `${JSON.stringify(f.replace('.glb', ''))}:"${d.toString('base64')}",\n`;
  console.log(f.padEnd(22), (d.length / 1024).toFixed(0) + ' KB');
}
fs.mkdirSync('dist', { recursive: true }); fs.writeFileSync('dist/assets.js', js + '};\n');
console.log('total', (total / 1048576).toFixed(2), 'MB -> dist/assets.js');
