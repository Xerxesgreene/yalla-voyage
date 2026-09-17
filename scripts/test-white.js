const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function testOptions() {
  const scratchDir = 'C:/Users/faras/.gemini/antigravity-ide/brain/22c813f5-9151-43c3-a761-b3543046129c/scratch';

  // 1. Pure White Circle Badge (512x512)
  const resizedForCircle = await sharp(scratchDir + '/extracted_clean_logo.png')
    .resize(380, 230, { fit: 'contain' })
    .toBuffer();

  const svgCircle = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <circle cx="256" cy="256" r="256" fill="#FFFFFF"/>
    </svg>
  `);

  await sharp(svgCircle)
    .composite([{ input: resizedForCircle, gravity: 'center' }])
    .png()
    .toFile(path.join(scratchDir, 'white_circle_option.png'));

  // 2. Pure White Square with rounded corners (512x512)
  const svgSquircle = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="512" height="512" rx="115" fill="#FFFFFF"/>
    </svg>
  `);

  const resizedForSquircle = await sharp(scratchDir + '/extracted_clean_logo.png')
    .resize(410, 248, { fit: 'contain' })
    .toBuffer();

  await sharp(svgSquircle)
    .composite([{ input: resizedForSquircle, gravity: 'center' }])
    .png()
    .toFile(path.join(scratchDir, 'white_squircle_option.png'));

  // 3. Full white square
  await sharp({
    create: { width: 512, height: 512, channels: 3, background: { r: 255, g: 255, b: 255 } }
  })
    .composite([{ input: resizedForSquircle, gravity: 'center' }])
    .png()
    .toFile(path.join(scratchDir, 'white_square_option.png'));

  console.log('All white options created!');
}

testOptions().catch(console.error);
