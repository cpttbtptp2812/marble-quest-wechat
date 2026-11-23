#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const root = path.resolve(__dirname, '..');
const packedDir = path.join(root, 'src', 'packed');

// Keep chunks in their exact byte order. Segment 004/005 were normalized
// after the initial upload; the assembled output is the canonical game.js.
const segments = [
  'game.js.deflate.b64.001',
  'game.js.deflate.b64.002',
  'game.js.deflate.b64.003',
  'game.js.deflate.b64.004',
  'game.js.deflate.b64.005',
  'game.js.deflate.b64.006',
  'game.js.deflate.b64.007'
];

try {
  const encoded = segments
    .map((name) => {
      const file = path.join(packedDir, name);
      if (!fs.existsSync(file)) {
        throw new Error(`Missing source segment: ${path.relative(root, file)}`);
      }
      return fs.readFileSync(file, 'utf8').trim();
    })
    .join('');

  const compressed = Buffer.from(encoded, 'base64');
  const source = zlib.inflateRawSync(compressed);
  if (!source.length) throw new Error('Restored game.js is empty');

  const output = path.join(root, 'game.js');
  fs.writeFileSync(output, source);
  console.log(`Restored game.js (${source.length.toLocaleString()} bytes)`);
} catch (error) {
  console.error('Build failed:', error.message);
  process.exitCode = 1;
}
