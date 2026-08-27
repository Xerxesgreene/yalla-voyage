'use client';

import { useEffect, useRef } from 'react';

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
  lineWidth: number;
}

export function RippleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, lastX: -1000, lastY: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let ripples: Ripple[] = [];

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

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dx = x - mouseRef.current.lastX;
      const dy = y - mouseRef.current.lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Spawn ripple when mouse moves sufficiently
      if (speed > 2) {
        if (Math.random() > 0.35 || speed > 15) {
          ripples.push({
            x,
            y,
            radius: 2,
            maxRadius: Math.min(speed * 3.5 + 40, 140),
            alpha: Math.min(0.5, speed * 0.02 + 0.25),
            speed: Math.min(1.8 + speed * 0.04, 3.5),
            lineWidth: Math.max(1, 2.5 - speed * 0.02),
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

      // Render & Update Fluid Water Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        
        // Calculate progress for smooth fade out
        const progress = r.radius / r.maxRadius;
        r.alpha = (1 - progress) * 0.45;

        if (r.radius >= r.maxRadius || r.alpha <= 0.01) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();

        // Secondary inner echo ring
        if (r.radius > 15) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius * 0.65, 0, Math.PI * 2);
          ctx.strokeStyle = '#0F2E23';
          ctx.globalAlpha = r.alpha * 0.35;
          ctx.lineWidth = r.lineWidth * 0.6;
          ctx.stroke();
        }

        // Primary outer water wave ring
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = '#2E6B57';
        ctx.globalAlpha = r.alpha;
        ctx.lineWidth = r.lineWidth;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(46, 107, 87, 0.3)';
        ctx.stroke();

        ctx.restore();
      }

      // Limit max ripples for optimal performance
      if (ripples.length > 40) {
        ripples = ripples.slice(ripples.length - 30);
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
