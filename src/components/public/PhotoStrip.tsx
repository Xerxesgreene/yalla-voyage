'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './PhotoStrip.module.css';

gsap.registerPlugin(ScrollTrigger);

const PHOTO_STRIP = [
  { src: '/dest-alula.jpg',    label: 'AlUla',    coords: '26.5° N, 37.9° E', desc: 'Ancient Nabataean tombs standing silent in the golden desert dawn.' },
  { src: '/dest-dubai.jpg',    label: 'Dubai',    coords: '25.2° N, 55.3° E', desc: 'A futuristic city silhouette soaring against the Arabian gulf.' },
  { src: '/dest-maldives.jpg', label: 'Maldives', coords: '4.2° N, 73.5° E',  desc: 'Overwater bungalows floating on pure, quiet turquoise glass.' },
  { src: '/dest-istanbul.jpg', label: 'Istanbul', coords: '41.0° N, 28.9° E', desc: 'Historic minarets rising through the soft Bosphorus morning mist.' },
  { src: '/dest-muscat.jpg',   label: 'Muscat',   coords: '23.6° N, 58.6° E', desc: 'White-washed palaces nestled between rugged, desert mountains.' },
  { src: '/dest-paris.jpg',    label: 'Paris',    coords: '48.9° N, 2.3° E',  desc: 'Wrought-iron balconies framing the classic Eiffel silhouette.' },
];

export default function PhotoStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef     = useRef<HTMLDivElement>(null);
  const outerRef     = useRef<HTMLDivElement>(null);

  // Drag / touch state refs (not state — no re-render needed)
  const isDragging   = useRef(false);
  const dragStartX   = useRef(0);
  const scrollStart  = useRef(0);

  // Progress bar
  const [progress, setProgress] = useState(0);

  // ── Update progress ──────────────────────────────────────────────────────
  const updateProgress = useCallback(() => {
    const outer = outerRef.current;
    if (!outer) return;
    const max = outer.scrollWidth - outer.clientWidth;
    if (max > 0) setProgress(outer.scrollLeft / max);
  }, []);

  // ── GSAP Scroll-parallax auto-scroll (works on ALL screen sizes) ─────────
  useEffect(() => {
    const container = containerRef.current;
    const track     = trackRef.current;
    if (!container || !track) return;

    const anim = gsap.fromTo(track,
      { x: '5%' },
      {
        x: '-35%',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
          onUpdate: (self) => setProgress(self.progress),
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  // ── Pointer drag (desktop) ───────────────────────────────────────────────
  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;

    const onPointerDown = (e: PointerEvent) => {
      isDragging.current  = true;
      dragStartX.current  = e.clientX;
      scrollStart.current = outer.scrollLeft;
      outer.setPointerCapture(e.pointerId);
      outer.style.cursor  = 'grabbing';
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      outer.scrollLeft = scrollStart.current + (dragStartX.current - e.clientX);
      updateProgress();
    };

    const stopDrag = () => {
      isDragging.current  = false;
      outer.style.cursor  = '';
    };

    outer.addEventListener('pointerdown',   onPointerDown);
    outer.addEventListener('pointermove',   onPointerMove);
    outer.addEventListener('pointerup',     stopDrag);
    outer.addEventListener('pointercancel', stopDrag);

    return () => {
      outer.removeEventListener('pointerdown',   onPointerDown);
      outer.removeEventListener('pointermove',   onPointerMove);
      outer.removeEventListener('pointerup',     stopDrag);
      outer.removeEventListener('pointercancel', stopDrag);
    };
  }, [updateProgress]);

  // ── Touch swipe (mobile) ─────────────────────────────────────────────────
  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;

    let startX = 0;
    let startScroll = 0;

    const onTouchStart = (e: TouchEvent) => {
      startX      = e.touches[0].clientX;
      startScroll = outer.scrollLeft;
    };

    const onTouchMove = (e: TouchEvent) => {
      const delta = startX - e.touches[0].clientX;
      outer.scrollLeft = startScroll + delta;
      updateProgress();
      if (Math.abs(delta) > 8) e.preventDefault();
    };

    outer.addEventListener('touchstart', onTouchStart, { passive: true });
    outer.addEventListener('touchmove',  onTouchMove,  { passive: false });
    outer.addEventListener('scroll',     updateProgress, { passive: true });

    return () => {
      outer.removeEventListener('touchstart', onTouchStart);
      outer.removeEventListener('touchmove',  onTouchMove);
      outer.removeEventListener('scroll',     updateProgress);
    };
  }, [updateProgress]);

  // ── Arrow navigation ─────────────────────────────────────────────────────
  const scrollBy = (dir: 'left' | 'right') => {
    const outer = outerRef.current;
    if (!outer) return;
    const step = Math.max(320, outer.clientWidth * 0.5);
    outer.scrollBy({ left: dir === 'right' ? step : -step, behavior: 'smooth' });
    setTimeout(updateProgress, 400);
  };

  return (
    <section ref={containerRef} className={styles.stripSection} aria-label="Destinations Slideshow">
      {/* Ambient glow */}
      <div className={styles.ambientGlow} />

      {/* Editorial grid lines */}
      <div className={styles.gridOverlay}>
        <div className={styles.gridLineV} style={{ left: '15%' }} />
        <div className={styles.gridLineV} style={{ left: '50%' }} />
        <div className={styles.gridLineV} style={{ left: '85%' }} />
      </div>

      {/* Section Header */}
      <div className={styles.sectionHeader}>
        <span className="eyebrow">Visual Log</span>
        <h3 className={styles.sectionTitle}>Moments <em>Caught in Time</em></h3>
        <div className={styles.dividerLine} />
      </div>

      {/* Controls: drag hint + arrow nav */}
      <div className={styles.controlsRow}>
        <span className={styles.dragHint}>
          {/* Horizontal scroll icon */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
            <path d="M4 12h16M16 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Drag or swipe to explore
        </span>

        <div className={styles.navArrows} role="group" aria-label="Scroll gallery">
          <button
            className={styles.arrowBtn}
            onClick={() => scrollBy('left')}
            aria-label="Scroll gallery left"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className={styles.arrowBtn}
            onClick={() => scrollBy('right')}
            aria-label="Scroll gallery right"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable container — drag/touch on desktop, native on mobile */}
      <div ref={outerRef} className={styles.stripOuter}>
        {/* GSAP parallax track */}
        <div ref={trackRef} className={styles.strip}>
          {PHOTO_STRIP.map((p, i) => {
            const serial = String((i % 6) + 1).padStart(2, '0');
            return (
              <div key={i} className={styles.stripCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardNum}>{serial}</span>
                  <span className={styles.cardCoords}>{p.coords}</span>
                </div>
                <div className={styles.cardImageContainer}>
                  <Image
                    src={p.src}
                    alt={p.label}
                    fill
                    sizes="(max-width: 900px) 80vw, 30vw"
                    className={styles.cardImg}
                    draggable={false}
                    priority={false}
                  />
                  <div className={styles.cardOverlay} />
                  <div className={styles.cardLabelOverlay}>{p.label}</div>
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.cardLabel}>{p.label}</span>
                  <p className={styles.cardDesc}>{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress bar */}
      <div className={styles.progressBar} role="progressbar" aria-valuenow={Math.round(progress * 100)} aria-valuemin={0} aria-valuemax={100}>
        <div
          className={styles.progressFill}
          style={{ width: `${Math.max(8, Math.round(progress * 100))}%` }}
        />
      </div>
    </section>
  );
}
