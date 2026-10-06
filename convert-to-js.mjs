import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const srcDir = path.join(root, 'src');
const esbuildBin = path.join(root, 'node_modules', 'esbuild', 'bin', 'esbuild');
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      files.push(full);
    }
  }
}

walk(srcDir);

for (const file of files) {
  const outFile = file.replace(/\.tsx$/, '.jsx').replace(/\.ts$/, '.js');
  execFileSync(process.execPath, [esbuildBin, file, '--loader:.tsx=tsx', '--loader:.ts=ts', '--format=esm', '--jsx=automatic', '--outfile', outFile, '--log-level=warning'], { stdio: 'inherit' });
  fs.unlinkSync(file);
}

for (const entry of fs.readdirSync(srcDir, { recursive: true })) {
  const filePath = path.join(srcDir, entry);
  if (typeof entry !== 'string' || !/\.(js|jsx)$/.test(entry)) continue;
  const text = fs.readFileSync(filePath, 'utf8');
  const cleaned = text
    .replace(/\.tsx(?=['"])/g, '')
    .replace(/\.ts(?=['"])/g, '')
    .replace("import App from './App.tsx';", "import App from './App';")
    .replace('import App from "./App.tsx";', 'import App from "./App";');
  fs.writeFileSync(filePath, cleaned, 'utf8');
}

const htmlPath = path.join(root, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');
fs.writeFileSync(htmlPath, html.replace('/src/main.tsx', '/src/main.js'), 'utf8');

console.log(`Converted ${files.length} source files to JS/JSX.`);
