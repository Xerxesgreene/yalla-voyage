'use client';

import { useEffect, useRef } from 'react';

interface WaterRippleHeroCanvasProps {
  imageSrc: string;
}

export function WaterRippleHeroCanvas({ imageSrc }: WaterRippleHeroCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;

    // Heightmap Grid Dimensions for Smooth Performance
    const width = 256;
    const height = 144;
    const size = width * height;

    let buffer1 = new Float32Array(size);
    let buffer2 = new Float32Array(size);
    let damping = 0.965; // Water surface damping

    // Offscreen Canvas for Original & Displaced Background Image
    const imgCanvas = document.createElement('canvas');
    const imgCtx = imgCanvas.getContext('2d', { willReadFrequently: true });

    let imgData: ImageData | null = null;
    let outData: ImageData | null = null;
    let imageLoaded = false;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;

    const setupImageBuffers = () => {
      if (!imgCtx || !canvas) return;
      const rect = container.getBoundingClientRect();
      const w = Math.floor(rect.width);
      const h = Math.floor(rect.height);

      canvas.width = w;
      canvas.height = h;

      imgCanvas.width = w;
      imgCanvas.height = h;

      // Draw image in cover mode
      const imgAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = w / h;
      let renderW = w;
      let renderH = h;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasAspect > imgAspect) {
        renderH = w / imgAspect;
        offsetY = (h - renderH) / 2;
      } else {
        renderW = h * imgAspect;
        offsetX = (w - renderW) / 2;
      }

      imgCtx.drawImage(img, offsetX, offsetY, renderW, renderH);
      imgData = imgCtx.getImageData(0, 0, w, h);
      outData = ctx.createImageData(w, h);
    };

    img.onload = () => {
      setupImageBuffers();
      imageLoaded = true;
    };

    const handleResize = () => {
      if (imageLoaded) {
        setupImageBuffers();
      }
    };
    window.addEventListener('resize', handleResize);

    // Drop Ripple Disturbance onto Heightmap Grid
    const disturbance = (x: number, y: number, radius: number, strength: number) => {
      const gridX = Math.floor((x / canvas.width) * width);
      const gridY = Math.floor((y / canvas.height) * height);

      for (let rY = -radius; rY <= radius; rY++) {
        for (let rX = -radius; rX <= radius; rX++) {
          const pX = gridX + rX;
          const pY = gridY + rY;

          if (pX >= 0 && pX < width && pY >= 0 && pY < height) {
            const dist = Math.sqrt(rX * rX + rY * rY);
            if (dist <= radius) {
              const index = pY * width + pX;
              const factor = (1 - dist / radius) * strength;
              buffer1[index] += factor;
            }
          }
        }
      }
    };

    // Mouse Tracking for Smooth Ripple Drops
    let prevMouse = { x: -100, y: -100 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dx = x - prevMouse.x;
      const dy = y - prevMouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 4) {
        // Drop soft concentric ripple
        const strength = Math.min(dist * 1.5 + 25, 120);
        disturbance(x, y, 4, strength);
        prevMouse.x = x;
        prevMouse.y = y;
      }
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 🌊 Water Wave Physics Simulation Loop
    const render = () => {
      if (imageLoaded && imgData && outData && ctx) {
        const w = canvas.width;
        const h = canvas.height;

        // 1. Process Water Wave Physics
        for (let y = 1; y < height - 1; y++) {
          const row = y * width;
          for (let x = 1; x < width - 1; x++) {
            const i = row + x;
            const wave = (
              buffer1[i - 1] +
              buffer1[i + 1] +
              buffer1[i - width] +
              buffer1[i + width]
            ) / 2 - buffer2[i];

            buffer2[i] = wave * damping;
          }
        }

        // Swap Heightmap Buffers
        const temp = buffer1;
        buffer1 = buffer2;
        buffer2 = temp;

        // 2. Optical Refraction Displacement Processing
        const inPixels = imgData.data;
        const outPixels = outData.data;

        const scaleX = width / w;
        const scaleY = height / h;

        for (let y = 0; y < h; y++) {
          const gY = Math.floor(y * scaleY);
          const gRow = gY * width;
          const pixelRow = y * w * 4;

          for (let x = 0; x < w; x++) {
            const gX = Math.floor(x * scaleX);
            const gIdx = gRow + gX;

            let dX = 0;
            let dY = 0;

            if (gX > 0 && gX < width - 1 && gY > 0 && gY < height - 1) {
              dX = buffer1[gIdx + 1] - buffer1[gIdx - 1];
              dY = buffer1[gIdx + width] - buffer1[gIdx - width];
            }

            // Refraction Offset
            const sourceX = Math.min(Math.max(Math.round(x + dX * 0.45), 0), w - 1);
            const sourceY = Math.min(Math.max(Math.round(y + dY * 0.45), 0), h - 1);

            const srcIdx = (sourceY * w + sourceX) * 4;
            const destIdx = pixelRow + x * 4;

            outPixels[destIdx]     = inPixels[srcIdx];     // Red
            outPixels[destIdx + 1] = inPixels[srcIdx + 1]; // Green
            outPixels[destIdx + 2] = inPixels[srcIdx + 2]; // Blue
            outPixels[destIdx + 3] = 255;                  // Alpha
          }
        }

        ctx.putImageData(outData, 0, 0);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [imageSrc]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block"
      />
    </div>
  );
}
