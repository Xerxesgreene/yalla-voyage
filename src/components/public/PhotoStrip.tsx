'use client';

import { useEffect, useRef } from 'react';
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
  { src: '/dest-alula.jpg',    label: 'AlUla',    coords: '26.5° N, 37.9° E', desc: 'Ancient Nabataean tombs standing silent in the golden desert dawn.' },
  { src: '/dest-dubai.jpg',    label: 'Dubai',    coords: '25.2° N, 55.3° E', desc: 'A futuristic city silhouette soaring against the Arabian gulf.' },
  { src: '/dest-maldives.jpg', label: 'Maldives', coords: '4.2° N, 73.5° E',  desc: 'Overwater bungalows floating on pure, quiet turquoise glass.' },
  { src: '/dest-istanbul.jpg', label: 'Istanbul', coords: '41.0° N, 28.9° E', desc: 'Historic minarets rising through the soft Bosphorus morning mist.' },
  { src: '/dest-muscat.jpg',   label: 'Muscat',   coords: '23.6° N, 58.6° E', desc: 'White-washed palaces nestled between rugged, desert mountains.' },
  { src: '/dest-paris.jpg',    label: 'Paris',    coords: '48.9° N, 2.3° E',  desc: 'Wrought-iron balconies framing the classic Eiffel silhouette.' },
];

export default function PhotoStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Slide track from right-offset to left-offset as the user scrolls
    const anim = gsap.fromTo(track,
      { x: '8%' },
      {
        x: '-38%',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      }
    );

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.stripSection} aria-label="Destinations Slideshow">
      {/* Background Sunset Ambient Glow */}
      <div className={styles.ambientGlow} />
      
      {/* Editorial Grid Lines */}
      <div className={styles.gridOverlay}>
        <div className={styles.gridLineV} style={{ left: '15%' }} />
        <div className={styles.gridLineV} style={{ left: '50%' }} />
        <div className={styles.gridLineV} style={{ left: '85%' }} />
      </div>

      {/* Editorial Header */}
      <div className={styles.sectionHeader}>
        <span className="eyebrow">Visual Log</span>
        <h3 className={styles.sectionTitle}>Moments Caught in Time</h3>
        <div className={styles.dividerLine} />
      </div>

      {/* Parallax Horizontal Track */}
      <div className={styles.stripOuter}>
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
                  <img src={p.src} alt={p.label} className={styles.cardImg} />
                  <div className={styles.cardOverlay} />
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
    </section>
  );
}
