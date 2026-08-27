'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HaoqiServiceCanvasProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function HaoqiServiceCanvas({ containerRef }: HaoqiServiceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Track scroll velocity & progress
    let scrollProgress = 0;
    let scrollVelocity = 0;

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: containerRef.current || canvas,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        scrollProgress = self.progress;
        scrollVelocity = Math.abs(self.getVelocity()) / 1000;
      },
    });

    // Mouse position tracking
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particle system for space warp starfield
    const numParticles = 120;
    const particles = Array.from({ length: numParticles }, () => ({
      x: (Math.random() - 0.5) * width * 1.5,
      y: (Math.random() - 0.5) * height * 1.5,
      z: Math.random() * 1000 + 1,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
    }));

    // 3D Wireframe Torus/Ring points generator
    const ringsCount = 4;
    const ringRadii = [140, 210, 280, 350];
    const ringSegments = 40;

    let baseRotationX = 0.6;
    let baseRotationY = 0;
    let baseRotationZ = 0;

    // Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth inertia update for velocity
      scrollVelocity *= 0.92;

      // ── 1. Render Space-Warp Starfield Particles ──
      const cx = width / 2;
      const cy = height / 2;
      const warpSpeed = 2 + scrollVelocity * 15;

      ctx.save();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.z -= warpSpeed;
        if (p.z <= 1) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * width * 1.5;
          p.y = (Math.random() - 0.5) * height * 1.5;
        }

        const k = 400 / p.z;
        const px = p.x * k + cx + mouseX * 20;
        const py = p.y * k + cy + mouseY * 20;
        const prevK = 400 / (p.z + warpSpeed * 1.5);
        const prevPx = p.x * prevK + cx + mouseX * 20;
        const prevPy = p.y * prevK + cy + mouseY * 20;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const alpha = (1 - p.z / 1000) * p.opacity;
          ctx.strokeStyle = `rgba(74, 155, 126, ${alpha * 0.4})`;
          ctx.lineWidth = Math.max(0.5, p.size * k);
          ctx.beginPath();
          ctx.moveTo(prevPx, prevPy);
          ctx.lineTo(px, py);
          ctx.stroke();

          // Particle point
          ctx.fillStyle = `rgba(244, 239, 230, ${alpha * 0.6})`;
          ctx.beginPath();
          ctx.arc(px, py, Math.max(0.8, p.size * k * 0.6), 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      // ── 2. Render 3D Rotating Wireframe Torus Rings (Haoqi Philosophy Rings) ──
      baseRotationY += 0.006 + scrollVelocity * 0.03;
      baseRotationX = 0.5 + Math.sin(scrollProgress * Math.PI) * 0.4 + mouseY * 0.3;
      baseRotationZ = Math.cos(scrollProgress * Math.PI) * 0.2 + mouseX * 0.3;

      ctx.save();
      ctx.translate(cx, cy);

      const cosX = Math.cos(baseRotationX);
      const sinX = Math.sin(baseRotationX);
      const cosY = Math.cos(baseRotationY);
      const sinY = Math.sin(baseRotationY);
      const cosZ = Math.cos(baseRotationZ);
      const sinZ = Math.sin(baseRotationZ);

      for (let rIdx = 0; rIdx < ringsCount; rIdx++) {
        const radius = ringRadii[rIdx];
        const ringSpeedMult = (rIdx % 2 === 0 ? 1 : -1) * (0.8 + rIdx * 0.2);
        const ringAngleOffset = baseRotationY * ringSpeedMult;

        ctx.beginPath();
        let firstPoint = true;

        for (let s = 0; s <= ringSegments; s++) {
          const theta = (s / ringSegments) * Math.PI * 2 + ringAngleOffset;
          // Local ring 3D coords
          let x0 = radius * Math.cos(theta);
          let y0 = 0;
          let z0 = radius * Math.sin(theta);

          // Add slight wave distortion on ring
          y0 += Math.sin(theta * 3 + baseRotationY * 2) * 15;

          // Rotate Y
          let x1 = x0 * cosY - z0 * sinY;
          let z1 = x0 * sinY + z0 * cosY;
          let y1 = y0;

          // Rotate X
          let y2 = y1 * cosX - z1 * sinX;
          let z2 = y1 * sinX + z1 * cosX;
          let x2 = x1;

          // Rotate Z
          let x3 = x2 * cosZ - y2 * sinZ;
          let y3 = x2 * sinZ + y2 * cosZ;
          let z3 = z2;

          // 3D Perspective Projection
          const fov = 600;
          const scale = fov / (fov + z3 + 300);
          const projX = x3 * scale;
          const projY = y3 * scale;

          if (firstPoint) {
            ctx.moveTo(projX, projY);
            firstPoint = false;
          } else {
            ctx.lineTo(projX, projY);
          }
        }

        const opacity = Math.max(0.12, 0.4 - rIdx * 0.07);
        ctx.strokeStyle = rIdx === 1 ? `rgba(212, 184, 150, ${opacity * 1.2})` : `rgba(46, 107, 87, ${opacity})`;
        ctx.lineWidth = rIdx === 1 ? 1.5 : 1;
        ctx.setLineDash(rIdx % 2 === 0 ? [] : [4, 6]);
        ctx.stroke();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      scrollTriggerInstance.kill();
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
