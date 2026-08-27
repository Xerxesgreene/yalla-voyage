'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  maxLife: number;
  life: number;
  color: string;
  shape: 'circle' | 'square';
}

interface IncursionRing {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

export function DisintegrationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, lastX: -1000, lastY: -1000, speed: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let rings: IncursionRing[] = [];

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      canvas.style.width = `${parent.clientWidth}px`;
      canvas.style.height = `${parent.clientHeight}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const colors = [
      '#F59E0B', // Amber gold
      '#FCD34D', // Light gold
      '#38BDF8', // Luminous cyan
      '#60A5FA', // Bright electric blue
      '#FFFFFF', // Crisp white spark
    ];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dx = x - mouseRef.current.lastX;
      const dy = y - mouseRef.current.lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      mouseRef.current.x = x;
      mouseRef.current.y = y;
      mouseRef.current.speed = speed;

      // Spawn disintegration particles when moving
      if (speed > 1) {
        const particleCount = Math.min(Math.floor(speed * 0.8) + 2, 12);
        for (let i = 0; i < particleCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const spread = Math.random() * (speed * 0.4);
          const pSpeed = Math.random() * 2.5 + 0.5;

          particles.push({
            x: x + (Math.random() - 0.5) * 15,
            y: y + (Math.random() - 0.5) * 15,
            vx: Math.cos(angle) * pSpeed + dx * 0.1,
            vy: Math.sin(angle) * pSpeed + dy * 0.1 - (Math.random() * 1.2), // upward drift
            size: Math.random() * 3 + 1,
            alpha: Math.random() * 0.8 + 0.2,
            maxLife: Math.random() * 35 + 20,
            life: 0,
            color: colors[Math.floor(Math.random() * colors.length)],
            shape: Math.random() > 0.4 ? 'circle' : 'square',
          });
        }

        // Spawn incursion shockwave ring periodically on fast moves
        if (speed > 12 && Math.random() > 0.6 && rings.length < 5) {
          rings.push({
            x,
            y,
            radius: 4,
            maxRadius: Math.min(speed * 2.5, 90),
            alpha: 0.7,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
      }

      mouseRef.current.lastX = x;
      mouseRef.current.lastY = y;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Animation Loop
    const render = () => {
      const parentEl = canvas.parentElement;
      if (!parentEl) return;
      const width = parentEl.clientWidth;
      const height = parentEl.clientHeight;

      ctx.clearRect(0, 0, width, height);

      // 1. Render & Update Incursion Shockwave Rings
      for (let i = rings.length - 1; i >= 0; i--) {
        const r = rings[i];
        r.radius += 2.5;
        r.alpha -= 0.025;

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          rings.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = r.color;
        ctx.globalAlpha = r.alpha * 0.6;
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 12;
        ctx.shadowColor = r.color;
        ctx.stroke();
        ctx.restore();
      }

      // 2. Render & Update Disintegration Micro Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96; // drag
        p.vy *= 0.96;

        const progress = p.life / p.maxLife;
        const currentAlpha = (1 - progress) * p.alpha;
        const currentSize = (1 - progress * 0.7) * p.size;

        if (p.life >= p.maxLife || currentAlpha <= 0.01) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;

        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(p.x - currentSize / 2, p.y - currentSize / 2, currentSize, currentSize);
        }
        ctx.restore();
      }

      // Cap max particles for performance
      if (particles.length > 250) {
        particles = particles.slice(particles.length - 200);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-15"
    />
  );
}
