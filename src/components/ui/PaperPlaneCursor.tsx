'use client';

import { useEffect, useRef } from 'react';

export function PaperPlaneCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Only enable custom cursor for desktop pointer devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const cursor = cursorRef.current;
    const plane = planeRef.current;
    if (!cursor || !plane) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let isHovering = false;
    let isClicking = false;
    let isVisible = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        cursor.style.opacity = '1';
      }

      // Check if hovering an interactive element
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-cursor-hover]'
      );

      if (interactive !== isHovering) {
        isHovering = interactive;
        updatePlaneTransform();
      }
    };

    const onMouseDown = () => {
      isClicking = true;
      updatePlaneTransform();
    };

    const onMouseUp = () => {
      isClicking = false;
      updatePlaneTransform();
    };

    const onMouseLeave = () => {
      isVisible = false;
      cursor.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      cursor.style.opacity = '1';
    };

    const updatePlaneTransform = () => {
      if (!plane) return;
      const scale = isClicking ? 0.85 : isHovering ? 1.2 : 1;
      // Fixed stable elegant paper plane angle: pointing top-left/forward naturally like a luxury cursor
      const baseRotation = -15; // Stable 15 degree angle
      plane.style.transform = `scale(${scale}) rotate(${baseRotation}deg)`;
      
      if (isHovering) {
        plane.classList.add('cursor-hover-glow');
      } else {
        plane.classList.remove('cursor-hover-glow');
      }
    };

    // Smooth 60/120fps hardware-accelerated position tracking without any React state updates
    const render = () => {
      // High responsiveness lerp for snappy zero-lag movement
      const lerp = 0.45;
      currentX += (mouseX - currentX) * lerp;
      currentY += (mouseY - currentY) * lerp;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[999999] opacity-0 transition-opacity duration-200 will-change-transform"
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      aria-hidden="true"
    >
      {/* 3D Paper Plane Container (Tip pinned exactly at 0,0) */}
      <div
        ref={planeRef}
        className="relative transition-transform duration-150 ease-out origin-top-left -top-1 -left-1"
        style={{
          transform: 'rotate(-15deg) scale(1)',
          filter: 'drop-shadow(1px 4px 6px rgba(15, 46, 35, 0.35))',
        }}
      >
        {/* 3D Origami Paper Plane (Clean, Sharp & Visible on all light/dark backgrounds) */}
        <svg
          width="26"
          height="26"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible select-none"
        >
          <defs>
            {/* Top Wing Illuminated Gradient */}
            <linearGradient id="ppTopWing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F9F6F0" />
              <stop offset="100%" stopColor="#EAE3D5" />
            </linearGradient>

            {/* Bottom Wing Shaded Gradient */}
            <linearGradient id="ppBottomWing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F0EBE1" />
              <stop offset="60%" stopColor="#DDD5C7" />
              <stop offset="100%" stopColor="#C8BEAD" />
            </linearGradient>

            {/* Inner Keel Fold 3D Shadow (Left) */}
            <linearGradient id="ppKeelL" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E6B57" />
              <stop offset="100%" stopColor="#0F2E23" />
            </linearGradient>

            {/* Inner Keel Fold 3D Shadow (Right) */}
            <linearGradient id="ppKeelR" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4B896" />
              <stop offset="100%" stopColor="#8C7350" />
            </linearGradient>
          </defs>

          <g>
            {/* 1. Left Keel Underbelly */}
            <polygon
              points="2,2 32,15 16,20"
              fill="url(#ppKeelL)"
              stroke="#0F2E23"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />

            {/* 2. Right Keel Underbelly */}
            <polygon
              points="2,2 20,16 15,32"
              fill="url(#ppKeelR)"
              stroke="#8C7350"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />

            {/* 3. Main Top Left Wing (Bright Face) */}
            <polygon
              points="2,2 34,6 16,20"
              fill="url(#ppTopWing)"
              stroke="#0F2E23"
              strokeOpacity="0.3"
              strokeWidth="0.6"
              strokeLinejoin="round"
            />

            {/* 4. Main Top Right Wing (Shaded Face) */}
            <polygon
              points="2,2 20,16 6,34"
              fill="url(#ppBottomWing)"
              stroke="#0F2E23"
              strokeOpacity="0.3"
              strokeWidth="0.6"
              strokeLinejoin="round"
            />

            {/* 5. Center Origami Fold Spine */}
            <line
              x1="2"
              y1="2"
              x2="18"
              y2="18"
              stroke="#0F2E23"
              strokeWidth="0.8"
              strokeLinecap="round"
            />

            {/* 6. Sharp Emerald Point Tip (Nose at 2,2) */}
            <circle cx="2" cy="2" r="1.5" fill="#2E6B57" stroke="#0F2E23" strokeWidth="0.4" />
            {/* Wingtip Accent Dots */}
            <circle cx="34" cy="6" r="1" fill="#D4B896" />
            <circle cx="6" cy="34" r="1" fill="#2E6B57" />
          </g>
        </svg>
      </div>
    </div>
  );
}
