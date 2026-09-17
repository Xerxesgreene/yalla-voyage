const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function main() {
  const scratchDir = 'C:/Users/faras/.gemini/antigravity-ide/brain/22c813f5-9151-43c3-a761-b3543046129c/scratch';

  // 1. Clean ivory squircle badge
  const logo = await sharp('public/yalla-voyage-logo-transparent.png')
    .resize(430, 264, { fit: 'contain' })
    .toBuffer();

  const svgIvoryBadge = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="16" width="480" height="480" rx="120" fill="#F4EFE6" stroke="#2E6B57" stroke-width="16" stroke-opacity="0.45"/>
    </svg>
  `);

  await sharp(svgIvoryBadge)
    .composite([{ input: logo, gravity: 'center' }])
    .png()
    .toFile(path.join(scratchDir, 'clean_ivory_badge.png'));

  // 2. Dark forest circle badge with crisp white logo
  const svgDarkCircle = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stop-color="#0E382A"/>
          <stop offset="100%" stop-color="#05150E"/>
        </radialGradient>
      </defs>
      <circle cx="256" cy="256" r="246" fill="url(#bg)" stroke="#39C27D" stroke-width="14" stroke-opacity="0.85"/>
    </svg>
  `);

  // Create crisp white silhouette of logo
  const { data, info } = await sharp('public/yalla-voyage-logo-transparent.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  // For every pixel that has alpha > 10, set r=255, g=255, b=255 (keeping alpha intact!)
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] > 0) {
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
    }
  }

  const whiteLogoBuffer = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
    .png()
    .resize(400, 246, { fit: 'contain' })
    .toBuffer();

  await sharp(svgDarkCircle)
    .composite([{ input: whiteLogoBuffer, gravity: 'center' }])
    .png()
    .toFile(path.join(scratchDir, 'clean_dark_circle.png'));

  console.log('Both clean badges created!');
}

main().catch(console.error);
