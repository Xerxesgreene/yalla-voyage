'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface DiagonalWipeSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function DiagonalWipeSection({
  children,
  id,
  className = '',
}: DiagonalWipeSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const wipe = wipeRef.current;
    if (!container || !wipe) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      // Fuel Framer progressive tilt mechanic:
      // - At start (top bottom): 100% horizontal clipPath (polygon(0 0vw, 100% 0vw, 100% 100%, 0% 100%))
      // - As section scrolls up over preceding section: top-left corner dips down progressively based on scroll progress
      // - At completion (top top): reaches max diagonal slant tilt (polygon(0 12vw, 100% 0vw, 100% 100%, 0% 100%))
      // - On undo scroll: top-left corner raises back up smoothly to 100% horizontal!
      gsap.fromTo(
        wipe,
        {
          y: '50vh',
          clipPath: 'polygon(0 0vw, 100% 0vw, 100% 100%, 0% 100%)',
        },
        {
          y: '0vh',
          clipPath: 'polygon(0 12vw, 100% 0vw, 100% 100%, 0% 100%)',
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative w-full z-20 ${className}`}
      style={{ marginTop: '-35vh' }}
    >
      <div
        ref={wipeRef}
        className="relative w-full z-20 overflow-hidden"
        style={{
          clipPath: 'polygon(0 0vw, 100% 0vw, 100% 100%, 0% 100%)',
          WebkitClipPath: 'polygon(0 0vw, 100% 0vw, 100% 100%, 0% 100%)',
          willChange: 'transform, clip-path',
        }}
      >
        {children}
      </div>
    </div>
  );
}
