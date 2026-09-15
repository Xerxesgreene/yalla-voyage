const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = 'C:/Users/faras/.gemini/antigravity-ide/brain/ac016f63-0976-4904-82cb-758949f05f75/.user_uploaded/media_1789241376351.jpg';
const outputPath = path.join(__dirname, '..', 'public', 'yalla-voyage-logo-transparent.png');

async function processLogo() {
  try {
    const image = sharp(inputPath);
    const { data, info } = await image
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    console.log(`Original: ${info.width}x${info.height}`);

    const pixels = Buffer.from(data);
    const threshold = 245;
    const edgeThreshold = 215;

    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];

      if (r >= threshold && g >= threshold && b >= threshold) {
        pixels[i + 3] = 0; // Transparent
      } else if (r >= edgeThreshold && g >= edgeThreshold && b >= edgeThreshold) {
        const avg = (r + g + b) / 3;
        const factor = (255 - avg) / (255 - edgeThreshold);
        pixels[i + 3] = Math.max(0, Math.min(255, Math.round(factor * 255)));
      }
    }

    // Create intermediate transparent buffer
    const transparentBuffer = await sharp(pixels, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4,
      },
    })
      .png()
      .toBuffer();

    // Now TRIM the transparent padding so it tightly wraps the logo artwork,
    // and extend by 12px for breathing room
    const trimmed = await sharp(transparentBuffer)
      .trim()
      .extend({
        top: 12,
        bottom: 12,
        left: 12,
        right: 12,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png({ quality: 100 })
      .toFile(outputPath);

    console.log('Trimmed logo saved successfully:', trimmed);
  } catch (err) {
    console.error('Error:', err);
  }
}

processLogo();
