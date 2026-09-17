const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function createIco(pngBuffers) {
  // Each element in pngBuffers is { width, height, buffer }
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const entrySize = 16;
  let offset = headerSize + numImages * entrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(numImages, 4);

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // Image size in bytes
    entry.writeUInt32LE(offset, 12); // Offset in file
    entries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([
    header,
    ...entries,
    ...pngBuffers.map((p) => p.buffer),
  ]);
}

async function main() {
  const masterPath = 'C:/Users/faras/.gemini/antigravity-ide/brain/22c813f5-9151-43c3-a761-b3543046129c/scratch/clean_dark_circle.png';
  const master = sharp(masterPath);

  // 1. Generate sizes
  const s16 = await sharp(masterPath).resize(16, 16).png().toBuffer();
  const s32 = await sharp(masterPath).resize(32, 32).png().toBuffer();
  const s48 = await sharp(masterPath).resize(48, 48).png().toBuffer();
  const s180 = await sharp(masterPath).resize(180, 180).png().toBuffer();
  const s192 = await sharp(masterPath).resize(192, 192).png().toBuffer();
  const s512 = await sharp(masterPath).resize(512, 512).png().toBuffer();

  // 2. Build multi-resolution ICO file (16, 32, 48)
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: s16 },
    { width: 32, height: 32, buffer: s32 },
    { width: 48, height: 48, buffer: s48 },
  ]);

  // 3. Write to src/app and public
  fs.writeFileSync('src/app/favicon.ico', icoBuffer);
  fs.writeFileSync('public/favicon.ico', icoBuffer);

  fs.writeFileSync('src/app/icon.png', s32);
  fs.writeFileSync('public/icon.png', s32);

  fs.writeFileSync('src/app/apple-icon.png', s180);
  fs.writeFileSync('public/apple-touch-icon.png', s180);
  fs.writeFileSync('public/apple-icon.png', s180);

  fs.writeFileSync('public/icon-192.png', s192);
  fs.writeFileSync('public/icon-512.png', s512);

  console.log('All favicons and app icons generated successfully!');
}

main().catch(console.error);
