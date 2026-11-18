// Fails if a relative link or image in any Markdown file under <dir> points to a file that does not exist there.
// Used on the release folder so README / docs links also work inside the ZIP.  Usage: node tools/check-links.cjs <dir>
const fs = require('fs'), path = require('path');
const root = path.resolve(process.argv[2] || '.'), bad = [];
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.name === 'node_modules' || e.name.startsWith('.') ? [] : e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const files = walk(root).filter((f) => f.endsWith('.md'));
for (const f of files) {
  const text = fs.readFileSync(f, 'utf8').replace(/```[\s\S]*?```/g, '');
  for (const m of text.matchAll(/!?\[[^\]]*\]\(([^)\s]+)\)/g)) {
    const target = m[1].split('#')[0];
    if (!target || /^[a-z]+:/i.test(target)) continue; // external or in-page
    if (!fs.existsSync(path.resolve(path.dirname(f), decodeURI(target)))) bad.push(`${path.relative(root, f)} -> ${m[1]}`);
  }
}
console.log(`checked ${files.length} Markdown files in ${root}`);
if (bad.length) { console.error('broken relative links:\n  ' + bad.join('\n  ')); process.exit(1); }
console.log('all relative links resolve');
