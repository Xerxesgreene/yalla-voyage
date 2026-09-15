// Script to remove white background from logo image using sharp
const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '..', 'public', 'yalla-voyage-logo.png');
const outputPath = path.join(__dirname, '..', 'public', 'yalla-voyage-logo-transparent.png');

async function removeWhiteBackground() {
  try {
    // Read the image
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`Input image: ${metadata.width}x${metadata.height}, format: ${metadata.format}`);
    
    // Get raw pixel data
    const { data, info } = await image
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    console.log(`Processing ${info.width}x${info.height} pixels, channels: ${info.channels}`);
    
    // Process each pixel - make white/near-white pixels transparent
    const pixels = Buffer.from(data);
    const threshold = 240; // Pixels with R, G, B all above this are considered "white"
    const edgeThreshold = 220; // Softer threshold for anti-aliasing
    
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      
      // Pure white or near-white - make fully transparent
      if (r >= threshold && g >= threshold && b >= threshold) {
        pixels[i + 3] = 0; // Set alpha to 0
      }
      // Semi-white (anti-aliasing edges) - make partially transparent
      else if (r >= edgeThreshold && g >= edgeThreshold && b >= edgeThreshold) {
        const avg = (r + g + b) / 3;
        const factor = (255 - avg) / (255 - edgeThreshold);
        pixels[i + 3] = Math.round(factor * 255);
      }
    }
    
    // Save the processed image
    await sharp(pixels, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4,
      },
    })
      .png()
      .toFile(outputPath);
    
    console.log(`✅ Transparent logo saved to: ${outputPath}`);
    
    // Also overwrite the original for seamless integration
    await sharp(pixels, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4,
      },
    })
      .png()
      .toFile(inputPath.replace('.png', '-backup.png'));
    
    // Copy transparent version as the main logo
    const fs = require('fs');
    fs.copyFileSync(outputPath, inputPath);
    console.log(`✅ Main logo overwritten with transparent version`);
    
  } catch (err) {
    console.error('Error processing image:', err);
    process.exit(1);
  }
}

removeWhiteBackground();
