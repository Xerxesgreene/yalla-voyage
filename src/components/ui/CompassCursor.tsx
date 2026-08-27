'use client';

import { useEffect, useRef } from 'react';

export function CompassCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const needleRef = useRef<HTMLDivElement>(null);
  const dialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const cursor = cursorRef.current;
    const needle = needleRef.current;
    const dial = dialRef.current;
    if (!cursor || !needle) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;

    // Movement velocity & acceleration for inertia physics
    let prevMouseX = -100;
    let prevMouseY = -100;
    let vx = 0;
    let vy = 0;

    // Compass needle physics state (damped harmonic oscillator)
    let needleAngle = 0; // current angle in degrees
    let needleAngularVelocity = 0; // rotational speed (deg/frame)
    const targetNorthAngle = 0; // Magnetic North is straight up (0 deg)

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
        currentX = mouseX;
        currentY = mouseY;
        prevMouseX = mouseX;
        prevMouseY = mouseY;
      }

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-cursor-hover]'
      );

      if (interactive !== isHovering) {
        isHovering = interactive;
        if (dial) {
          dial.style.borderColor = isHovering
            ? 'rgba(46, 107, 87, 0.7)'
            : 'rgba(212, 184, 150, 0.5)';
          dial.style.boxShadow = isHovering
            ? '0 0 14px rgba(46, 107, 87, 0.35)'
            : '0 4px 10px rgba(15, 46, 35, 0.15)';
        }
        // Magnetic snap kick on hover
        needleAngularVelocity += isHovering ? 25 : -15;
      }
    };

    const onMouseDown = () => {
      isClicking = true;
      needleAngularVelocity += (Math.random() - 0.5) * 40; // Magnetic impulse on click
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      cursor.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      cursor.style.opacity = '1';
    };

    // Physics Animation Loop (Real Liquid-Damped Magnetic Compass Simulator)
    let time = 0;
    const render = () => {
      time += 0.03;

      // 1. Snappy tracking of cursor position
      const lerp = 0.55;
      currentX += (mouseX - currentX) * lerp;
      currentY += (mouseY - currentY) * lerp;

      // 2. Compute velocity & inertia impulse
      vx = mouseX - prevMouseX;
      vy = mouseY - prevMouseY;
      prevMouseX = mouseX;
      prevMouseY = mouseY;

      const speed = Math.hypot(vx, vy);

      // Inertia torque: when moving left/right or up/down, physical inertia acts perpendicular to the needle
      const inertiaTorque = (-vx * 1.6 + vy * 0.4) * Math.min(speed * 0.15, 3.5);

      // Subtle natural liquid-damped magnetic drift wobble when idle
      const ambientFloat = Math.sin(time * 1.8) * 2.2 + Math.cos(time * 0.9) * 1.5;

      // 3. Magnetic restoring force toward North (Spring-Damper system)
      const springK = isHovering ? 0.085 : 0.055; // Magnetic pull strength
      const damping = 0.91; // Fluid resistance dampening

      // Restoring force pulling needle back to North (0 deg)
      const springTorque = -springK * (needleAngle - targetNorthAngle);

      // Update angular velocity and angle
      needleAngularVelocity += springTorque + inertiaTorque * 0.08;
      needleAngularVelocity *= damping;
      needleAngle += needleAngularVelocity;

      // Add ambient micro-float for lifelike compass behavior
      const displayAngle = needleAngle + (speed < 0.5 ? ambientFloat : 0);

      // 4. Direct DOM hardware-accelerated transforms
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      const scale = isClicking ? 0.88 : isHovering ? 1.22 : 1;
      needle.style.transform = `rotate(${displayAngle}deg) scale(${scale})`;

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
      className="fixed top-0 left-0 pointer-events-none z-[999999] opacity-0 transition-opacity duration-200 will-change-transform select-none"
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      aria-hidden="true"
    >
      {/* Precision Anchor Point: Center aligned on cursor tip */}
      <div className="relative -top-3.5 -left-3.5 flex items-center justify-center w-8 h-8">
        
        {/* ── 1. Outer Compass Brass Dial / Bezel ── */}
        <div
          ref={dialRef}
          className="absolute inset-0 rounded-full border border-[#D4B896]/60 bg-white/35 backdrop-blur-[2px] transition-all duration-200 pointer-events-none flex items-center justify-center shadow-xs"
          style={{ width: '30px', height: '30px' }}
        >
          {/* Compass Dial Cardinal Tick Marks (N, S, E, W) */}
          <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#2E6B57] rounded-full" />
          <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#D4B896] rounded-full" />
          <div className="absolute left-0.5 top-1/2 -translate-y-1/2 h-0.5 w-1 bg-[#D4B896] rounded-full" />
          <div className="absolute right-0.5 top-1/2 -translate-y-1/2 h-0.5 w-1 bg-[#D4B896] rounded-full" />
          
          {/* Subtle North Indicator Letter */}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] font-mono font-bold text-[#2E6B57] tracking-tighter opacity-85">
            N
          </span>
        </div>

        {/* ── 2. Realistic Dynamic Magnetic Needle (Moving) ── */}
        <div
          ref={needleRef}
          className="relative flex items-center justify-center pointer-events-none will-change-transform"
          style={{
            width: '28px',
            height: '28px',
            filter: 'drop-shadow(0 2px 4px rgba(15, 46, 35, 0.4))',
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            <defs>
              {/* North Needle Active Pole Gradient (Illuminated Facet) */}
              <linearGradient id="northFacetLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4ADE80" />
                <stop offset="45%" stopColor="#2E6B57" />
                <stop offset="100%" stopColor="#1B4D3E" />
              </linearGradient>

              {/* North Needle Active Pole Gradient (Shaded Facet) */}
              <linearGradient id="northFacetDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2E6B57" />
                <stop offset="50%" stopColor="#0F2E23" />
                <stop offset="100%" stopColor="#081A14" />
              </linearGradient>

              {/* South Needle Ground Pole Gradient (Illuminated Gold) */}
              <linearGradient id="southFacetLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="40%" stopColor="#E5C79E" />
                <stop offset="100%" stopColor="#C9A36A" />
              </linearGradient>

              {/* South Needle Ground Pole Gradient (Shaded Gold) */}
              <linearGradient id="southFacetDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C9A36A" />
                <stop offset="60%" stopColor="#9C773E" />
                <stop offset="100%" stopColor="#6E5124" />
              </linearGradient>
            </defs>

            {/* ── North Magnetic Needle (Pointing to 16, 2) ── */}
            {/* Left Beveled Facet */}
            <polygon
              points="16,16 16,2 13,16"
              fill="url(#northFacetLight)"
              stroke="#0F2E23"
              strokeWidth="0.3"
            />
            {/* Right Beveled Facet */}
            <polygon
              points="16,16 16,2 19,16"
              fill="url(#northFacetDark)"
              stroke="#0F2E23"
              strokeWidth="0.3"
            />

            {/* ── South Magnetic Needle (Pointing to 16, 30) ── */}
            {/* Left Beveled Facet */}
            <polygon
              points="16,16 16,30 13,16"
              fill="url(#southFacetLight)"
              stroke="#8C7350"
              strokeWidth="0.3"
            />
            {/* Right Beveled Facet */}
            <polygon
              points="16,16 16,30 19,16"
              fill="url(#southFacetDark)"
              stroke="#8C7350"
              strokeWidth="0.3"
            />

            {/* ── Center Brass Jewel Pivot Cap ── */}
            <circle cx="16" cy="16" r="2.8" fill="#0F2E23" stroke="#D4B896" strokeWidth="0.8" />
            <circle cx="16" cy="16" r="1.3" fill="#D4B896" />

            {/* ── Luminous Emerald North Needle Tip ── */}
            <circle cx="16" cy="2" r="1" fill="#4ADE80" stroke="#0F2E23" strokeWidth="0.3" />
          </svg>
        </div>

      </div>
    </div>
  );
}
