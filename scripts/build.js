#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const root = path.resolve(__dirname, '..');
const packedDir = path.join(root, 'src', 'packed');
const chunkSize = 6500;

// The first uploaded segment contains 9,000 chars because its final 2,500
// chars overlap the beginning of segment 002. Trim it to the canonical
// 6,500-char boundary before concatenating.
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
  const encoded = segments.map((name, index) => {
    const file = path.join(packedDir, name);
    if (!fs.existsSync(file)) {
      throw new Error(`Missing source segment: ${path.relative(root, file)}`);
    }
    const part = fs.readFileSync(file, 'utf8').trim();
    if (index === 0) {
      if (part.length < chunkSize) throw new Error('Segment 001 is unexpectedly short');
      return part.slice(0, chunkSize);
    }
    return part;
  }).join('');

  if (encoded.length !== 44172) {
    throw new Error(`Unexpected base64 length: ${encoded.length} (expected 44172)`);
  }

  const source = zlib.inflateRawSync(Buffer.from(encoded, 'base64'));
  if (source.length !== 101001) {
    throw new Error(`Unexpected game.js size: ${source.length} (expected 101001)`);
  }

  const output = path.join(root, 'game.js');
  fs.writeFileSync(output, source);
  console.log(`Restored game.js (${source.length.toLocaleString()} bytes)`);
} catch (error) {
  console.error('Build failed:', error.message);
  process.exitCode = 1;
}
