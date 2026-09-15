'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

/* ─── Cylinder geometry ─────────────────────────────────────────────────
 *  N=8 panels → 45° between each.
 *  Double-sided panels:
 *    - Front face (rotateY(0deg)): faces OUTWARD, seen when in front arc.
 *    - Back face (rotateY(180deg)): faces INWARD, seen through top opening
 *      when at back arc, with inner cylinder shading.
 *  Result: A COMPLETE 360° hollow ring/drum just like Kai Marlow!
 * ────────────────────────────────────────────────────────────────────── */
const N          = 8;
const PANEL_W    = 185;
const PANEL_H    = 235;
const RADIUS     = Math.round((PANEL_W / 2) / Math.tan(Math.PI / N)); // ≈ 223 px
const TILT       = -14;   // deg – downwards perspective showing inside of drum

const AUTO_SPEED  = 0.15;
const DRAG_FACTOR = 0.30;
const FRICTION    = 0.91;

const VW           = 520;
const VH           = 430;
const DRUM_CTR_Y   = Math.round(VH * 0.48); // ≈ 206 px

/* ─── Yalla Voyage Curated Services & Destinations (Fresh Unique Imagery) ── */
interface DrumPanel {
  src: string;
  alt: string;
  title: string;
}

const PANELS: DrumPanel[] = [
  {
    src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=700&q=85',
    alt: 'Vibrant Asian city lights',
    title: 'Asian Wonders',
  },
  {
    src: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=700&q=85',
    alt: 'Traveler exploring charming historic alleyway',
    title: 'Trusted Companion',
  },
  {
    src: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=700&q=85',
    alt: 'Superyacht navigating turquoise waters',
    title: 'Breathtaking Journeys',
  },
  {
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=85',
    alt: 'Pristine ocean reef expeditions',
    title: 'Ocean Expeditions',
  },
  {
    src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=700&q=85',
    alt: 'Mediterranean clifftop coastal beauty',
    title: 'Explore Europe',
  },
  {
    src: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=700&q=85',
    alt: 'Overwater luxury villas on turquoise lagoon',
    title: 'Island Sanctuaries',
  },
  {
    src: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=700&q=85',
    alt: 'Dramatic alpine peaks and tranquil lakes',
    title: 'Tailored Trips',
  },
  {
    src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=700&q=85',
    alt: 'Historic pagoda and tranquil gardens',
    title: 'Curated Luxury',
  },
];

export function CylinderGallery() {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const drumRef     = useRef<HTMLDivElement>(null);
  const angleRef    = useRef(0);
  const velocityRef = useRef(AUTO_SPEED);
  const isDragging  = useRef(false);
  const lastX       = useRef(0);
  const rafId       = useRef(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const drum    = drumRef.current;
    if (!wrapper || !drum) return;

    /* ── animation loop ─────────────────────────────────────────── */
    const tick = () => {
      if (!isDragging.current) {
        if (Math.abs(velocityRef.current) > AUTO_SPEED + 0.04) {
          velocityRef.current *= FRICTION;
        } else {
          velocityRef.current += (AUTO_SPEED - velocityRef.current) * 0.028;
        }
        angleRef.current += velocityRef.current;
      }
      drum.style.transform = `rotateX(${TILT}deg) rotateY(${angleRef.current}deg)`;
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    /* ── mouse ──────────────────────────────────────────────────── */
    const onDown = (e: MouseEvent) => {
      isDragging.current   = true;
      lastX.current        = e.clientX;
      velocityRef.current  = 0;
      wrapper.style.cursor = 'grabbing';
    };
    const onMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const dx = e.clientX - lastX.current;
      velocityRef.current = dx * DRAG_FACTOR;
      angleRef.current   += dx * DRAG_FACTOR;
      lastX.current       = e.clientX;
    };
    const onUp = () => {
      if (!isDragging.current) return;
      isDragging.current   = false;
      wrapper.style.cursor = 'grab';
    };

    /* ── touch ──────────────────────────────────────────────────── */
    const onTouchStart = (e: TouchEvent) => {
      isDragging.current  = true;
      lastX.current       = e.touches[0].clientX;
      velocityRef.current = 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const dx = e.touches[0].clientX - lastX.current;
      velocityRef.current = dx * DRAG_FACTOR;
      angleRef.current   += dx * DRAG_FACTOR;
      lastX.current       = e.touches[0].clientX;
    };
    const onTouchEnd = () => { isDragging.current = false; };

    wrapper.addEventListener('mousedown',  onDown);
    window .addEventListener('mousemove',  onMove);
    window .addEventListener('mouseup',    onUp);
    wrapper.addEventListener('touchstart', onTouchStart, { passive: true });
    window .addEventListener('touchmove',  onTouchMove,  { passive: true });
    window .addEventListener('touchend',   onTouchEnd);

    return () => {
      cancelAnimationFrame(rafId.current);
      wrapper.removeEventListener('mousedown',  onDown);
      window .removeEventListener('mousemove',  onMove);
      window .removeEventListener('mouseup',    onUp);
      wrapper.removeEventListener('touchstart', onTouchStart);
      window .removeEventListener('touchmove',  onTouchMove);
      window .removeEventListener('touchend',   onTouchEnd);
    };
  }, []);

  return (
    <div
      style={{
        perspective:       '1200px',
        perspectiveOrigin: '50% 50%',
        width:             `${VW}px`,
        height:            `${VH}px`,
        overflow:          'visible',
        position:          'relative',
        userSelect:        'none',
        WebkitUserSelect:  'none',
      }}
    >
      <div
        ref={wrapperRef}
        style={{ position: 'absolute', inset: 0, cursor: 'grab' }}
      >
        <div
          style={{
            position:       'absolute',
            top:            `${DRUM_CTR_Y}px`,
            left:           '50%',
            width:          `${PANEL_W}px`,
            height:         `${PANEL_H}px`,
            marginLeft:     `-${PANEL_W / 2}px`,
            marginTop:      `-${PANEL_H / 2}px`,
            transformStyle: 'preserve-3d',
            transform:      `rotateX(${TILT}deg) rotateY(0deg)`,
            willChange:     'transform',
          }}
          ref={drumRef}
        >
          {PANELS.map((panel, i) => {
            const yAngle = (360 / N) * i;
            return (
              <div
                key={i}
                style={{
                  position:       'absolute',
                  inset:          0,
                  transform:      `rotateY(${yAngle}deg) translateZ(${RADIUS}px)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* ── FRONT FACE: Seen when panel is on front arc ── */}
                <div
                  style={{
                    position:                 'absolute',
                    inset:                    0,
                    backfaceVisibility:       'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    overflow:                 'hidden',
                    boxShadow:                'inset 0 0 0 1px rgba(255,255,255,0.14)',
                  }}
                >
                  <Image
                    src={panel.src}
                    alt={panel.alt}
                    fill
                    sizes={`${PANEL_W}px`}
                    className="object-cover pointer-events-none select-none"
                    draggable={false}
                  />

                  {/* Subtle edge highlight */}
                  <div
                    style={{
                      position:      'absolute',
                      inset:         0,
                      boxShadow:     'inset 0 1px 0 rgba(255,255,255,0.25)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Minimalist Bottom Title Overlay */}
                  <div
                    style={{
                      position:      'absolute',
                      bottom:        0,
                      left:          0,
                      right:         0,
                      padding:       '28px 8px 10px',
                      background:    'linear-gradient(to top, rgba(15,46,35,0.85) 0%, rgba(15,46,35,0.38) 55%, transparent 100%)',
                      color:         '#F4EFE6',
                      textAlign:     'center',
                    }}
                  >
                    <span
                      style={{
                        fontSize:      '10px',
                        fontFamily:    'var(--font-heading, serif)',
                        fontWeight:    700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color:         '#F4EFE6',
                        lineHeight:    1.2,
                        display:       'block',
                      }}
                    >
                      {panel.title}
                    </span>
                  </div>
                </div>

                {/* ── BACK FACE: Inside wall seen through top opening ── */}
                <div
                  style={{
                    position:                 'absolute',
                    inset:                    0,
                    transform:                'rotateY(180deg)',
                    backfaceVisibility:       'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    overflow:                 'hidden',
                  }}
                >
                  <Image
                    src={panel.src}
                    alt={panel.alt}
                    fill
                    sizes={`${PANEL_W}px`}
                    className="object-cover pointer-events-none select-none"
                    draggable={false}
                  />

                  {/* Inner cylinder shading & ambient occlusion */}
                  <div
                    style={{
                      position:      'absolute',
                      inset:         0,
                      background:    'linear-gradient(to bottom, rgba(15,38,30,0.35) 0%, rgba(15,38,30,0.2) 45%, rgba(15,38,30,0.6) 100%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Minimalist Inner Title Overlay */}
                  <div
                    style={{
                      position:      'absolute',
                      bottom:        0,
                      left:          0,
                      right:         0,
                      padding:       '24px 8px 10px',
                      background:    'linear-gradient(to top, rgba(15,46,35,0.8) 0%, transparent 100%)',
                      color:         '#F4EFE6',
                      textAlign:     'center',
                    }}
                  >
                    <span
                      style={{
                        fontSize:      '9.5px',
                        fontFamily:    'var(--font-heading, serif)',
                        fontWeight:    700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color:         'rgba(244,239,230,0.85)',
                        lineHeight:    1.2,
                        display:       'block',
                      }}
                    >
                      {panel.title}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

