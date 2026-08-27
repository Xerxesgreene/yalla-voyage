'use client';

import { useEffect, useRef } from 'react';
import styles from './BeeCursor.module.css';

export default function BeeCursor() {
  const beeRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const cur = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // Check if touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (beeRef.current) {
        beeRef.current.style.opacity = '1';
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        pos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        if (beeRef.current) {
          beeRef.current.style.opacity = '1';
        }
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        pos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        if (beeRef.current) {
          beeRef.current.style.opacity = '1';
        }
      }
    };

    let touchTimeout: NodeJS.Timeout;
    const onTouchEnd = () => {
      // Fade out after 1.2s of touch inactivity
      touchTimeout = setTimeout(() => {
        if (beeRef.current) {
          beeRef.current.style.opacity = '0';
        }
      }, 1200);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    // Set initial opacity and styling transitions
    if (beeRef.current) {
      beeRef.current.style.opacity = isTouch ? '0' : '1';
      beeRef.current.style.transition = 'opacity 0.4s ease, transform 0.12s cubic-bezier(0.25, 1, 0.5, 1)';
    }

    const animate = () => {
      cur.current.x += (pos.current.x - cur.current.x) * 0.10;
      cur.current.y += (pos.current.y - cur.current.y) * 0.10;

      if (beeRef.current) {
        beeRef.current.style.transform =
          `translate(${cur.current.x - 22}px, ${cur.current.y - 25}px)`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      clearTimeout(touchTimeout);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div ref={beeRef} className={styles.beeWrap} aria-hidden="true">
      <svg
        viewBox="0 0 80 90"
        width="44"
        height="50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Abdomen gradient — dark maroon */}
          <radialGradient id="abdGrad" cx="45%" cy="35%" r="60%">
            <stop offset="0%"   stopColor="#7a2535" />
            <stop offset="55%"  stopColor="#4d1220" />
            <stop offset="100%" stopColor="#2a0810" />
          </radialGradient>

          {/* Thorax gradient — very dark brown */}
          <radialGradient id="thorGrad" cx="40%" cy="35%" r="55%">
            <stop offset="0%"   stopColor="#3d1a10" />
            <stop offset="100%" stopColor="#1a0808" />
          </radialGradient>

          {/* Wing gradient — large pinkish translucent */}
          <radialGradient id="wingL" cx="60%" cy="40%" r="65%">
            <stop offset="0%"   stopColor="rgba(255,210,220,0.85)" />
            <stop offset="60%"  stopColor="rgba(230,170,185,0.60)" />
            <stop offset="100%" stopColor="rgba(200,140,160,0.20)" />
          </radialGradient>
          <radialGradient id="wingR" cx="40%" cy="40%" r="65%">
            <stop offset="0%"   stopColor="rgba(255,210,220,0.85)" />
            <stop offset="60%"  stopColor="rgba(230,170,185,0.60)" />
            <stop offset="100%" stopColor="rgba(200,140,160,0.20)" />
          </radialGradient>

          {/* Stripe gradient */}
          <linearGradient id="stripeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#1a0808" stopOpacity="0" />
            <stop offset="20%"  stopColor="#1a0808" stopOpacity="0.9" />
            <stop offset="80%"  stopColor="#1a0808" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1a0808" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ═══ LEFT WING ═══ */}
        {/* Pivots from the thorax center ~(40,38) */}
        <g className={styles.wingLeft}>
          <ellipse
            cx="18" cy="28"
            rx="22" ry="11"
            fill="url(#wingL)"
            stroke="rgba(200,150,170,0.45)"
            strokeWidth="0.6"
          />
        </g>

        {/* ═══ RIGHT WING ═══ */}
        <g className={styles.wingRight}>
          <ellipse
            cx="62" cy="28"
            rx="22" ry="11"
            fill="url(#wingR)"
            stroke="rgba(200,150,170,0.45)"
            strokeWidth="0.6"
          />
        </g>

        {/* ═══ ABDOMEN ═══ */}
        {/* Main body — tall rounded teardrop */}
        <ellipse cx="40" cy="60" rx="14" ry="21" fill="url(#abdGrad)" />

        {/* Stripes — 3 bands */}
        <ellipse cx="40" cy="49" rx="13.5" ry="2.8" fill="url(#stripeGrad)" />
        <ellipse cx="40" cy="57" rx="13.8" ry="2.8" fill="url(#stripeGrad)" />
        <ellipse cx="40" cy="65" rx="12.5" ry="2.5" fill="url(#stripeGrad)" />

        {/* Pink fuzzy band at top of abdomen (where it meets thorax) */}
        <ellipse cx="40" cy="41" rx="12" ry="4" fill="#b04060" opacity="0.55" />

        {/* Abdomen highlight */}
        <ellipse cx="36" cy="50" rx="5" ry="9" fill="rgba(255,160,180,0.12)" />

        {/* ═══ THORAX ═══ */}
        <ellipse cx="40" cy="36" rx="12" ry="11" fill="url(#thorGrad)" />
        {/* Pink fuzzy sides on thorax */}
        <ellipse cx="29" cy="37" rx="5" ry="7" fill="#9b3050" opacity="0.40" />
        <ellipse cx="51" cy="37" rx="5" ry="7" fill="#9b3050" opacity="0.40" />
        {/* Thorax highlight */}
        <ellipse cx="37" cy="31" rx="4" ry="3" fill="rgba(255,200,210,0.18)" />

        {/* ═══ HEAD ═══ */}
        <circle cx="40" cy="22" r="10" fill="url(#thorGrad)" />
        {/* Pink cheeks */}
        <ellipse cx="32" cy="24" rx="4.5" ry="3.5" fill="#9b3050" opacity="0.35" />
        <ellipse cx="48" cy="24" rx="4.5" ry="3.5" fill="#9b3050" opacity="0.35" />
        {/* Head highlight */}
        <ellipse cx="37.5" cy="18.5" rx="3.5" ry="2.5" fill="rgba(255,200,210,0.20)" />

        {/* Eyes */}
        <ellipse cx="36" cy="22" rx="2.8" ry="3" fill="#0d0408" />
        <ellipse cx="44" cy="22" rx="2.8" ry="3" fill="#0d0408" />
        {/* Eye shine */}
        <circle cx="35.2" cy="20.8" r="0.9" fill="rgba(255,255,255,0.6)" />
        <circle cx="43.2" cy="20.8" r="0.9" fill="rgba(255,255,255,0.6)" />

        {/* ═══ ANTENNAE ═══ */}
        <path d="M36 13 C34 9 30 6 27 3" stroke="#2a0810" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <circle cx="27" cy="3" r="2.2" fill="#6a2030" />

        <path d="M44 13 C46 9 50 6 53 3" stroke="#2a0810" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <circle cx="53" cy="3" r="2.2" fill="#6a2030" />

        {/* ═══ STINGER ═══ */}
        <path d="M40 81 L37.5 86 L42.5 86 Z" fill="#2a0810" opacity="0.55" />
      </svg>
    </div>
  );
}
