const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function createIco(pngBuffers) {
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
  const scratchDir = 'C:/Users/faras/.gemini/antigravity-ide/brain/22c813f5-9151-43c3-a761-b3543046129c/scratch';

  // 1. Create a 512x512 White Circle Icon with the authentic Yalla Voyage brand logo
  const resizedLogo = await sharp(path.join(scratchDir, 'extracted_clean_logo.png'))
    .resize(380, 230, { fit: 'contain' })
    .toBuffer();

  const svgWhiteCircle = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <circle cx="256" cy="256" r="250" fill="#FFFFFF" stroke="#2E6B57" stroke-width="8" stroke-opacity="0.25"/>
    </svg>
  `);

  const master512 = await sharp(svgWhiteCircle)
    .composite([{ input: resizedLogo, gravity: 'center' }])
    .png()
    .toBuffer();

  // Save preview
  await sharp(master512).toFile(path.join(scratchDir, 'final_white_favicon_512.png'));

  // 2. Generate required sizes
  const s16 = await sharp(master512).resize(16, 16).png().toBuffer();
  const s32 = await sharp(master512).resize(32, 32).png().toBuffer();
  const s48 = await sharp(master512).resize(48, 48).png().toBuffer();
  const s180 = await sharp(master512).resize(180, 180).png().toBuffer();
  const s192 = await sharp(master512).resize(192, 192).png().toBuffer();
  const s512 = await sharp(master512).resize(512, 512).png().toBuffer();

  // 3. Build multi-resolution ICO file (16, 32, 48)
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: s16 },
    { width: 32, height: 32, buffer: s32 },
    { width: 48, height: 48, buffer: s48 },
  ]);

  // 4. Overwrite in src/app and public
  fs.writeFileSync('src/app/favicon.ico', icoBuffer);
  fs.writeFileSync('public/favicon.ico', icoBuffer);

  fs.writeFileSync('src/app/icon.png', s32);
  fs.writeFileSync('public/icon.png', s32);

  fs.writeFileSync('src/app/apple-icon.png', s180);
  fs.writeFileSync('public/apple-touch-icon.png', s180);
  fs.writeFileSync('public/apple-icon.png', s180);

  fs.writeFileSync('public/icon-192.png', s192);
  fs.writeFileSync('public/icon-512.png', s512);

  console.log('White favicon assets generated successfully!');
}

main().catch(console.error);
