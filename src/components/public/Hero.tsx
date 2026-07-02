'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger);

const HERO_SLIDES = [
  {
    name: 'AlUla',
    location: 'Saudi Arabia',
    coords: '26.5° N, 37.9° E',
    img: '/dest-alula.jpg'
  },
  {
    name: 'Maldives',
    location: 'Indian Ocean',
    coords: '4.2° N, 73.5° E',
    img: '/dest-maldives.jpg'
  },
  {
    name: 'Istanbul',
    location: 'Turkey',
    coords: '41.0° N, 28.9° E',
    img: '/dest-istanbul.jpg'
  }
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const heroRef = useRef<HTMLElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const portalInnerRef = useRef<HTMLDivElement>(null);
  const bgTextTopRef = useRef<HTMLDivElement>(null);
  const bgTextBottomRef = useRef<HTMLDivElement>(null);
  const badgeLeftRef = useRef<HTMLDivElement>(null);
  const badgeRightRef = useRef<HTMLDivElement>(null);
  const wordmarkLeftRef = useRef<HTMLDivElement>(null);
  const wordmarkRightRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // Slideshow timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const hero = heroRef.current;
    const portal = portalRef.current;
    const portalInner = portalInnerRef.current;
    const bgTextTop = bgTextTopRef.current;
    const bgTextBottom = bgTextBottomRef.current;
    const badgeLeft = badgeLeftRef.current;
    const badgeRight = badgeRightRef.current;
    const wordmarkLeft = wordmarkLeftRef.current;
    const wordmarkRight = wordmarkRightRef.current;
    const scrollIndicator = scrollIndicatorRef.current;

    if (!hero) return;

    // 1. Initial fade-in reveals
    const tl = gsap.timeline();
    tl.fromTo(
      [bgTextTop, bgTextBottom],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
    )
    .fromTo(
      portal,
      { scale: 0.94, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.4, ease: 'power4.out' },
      '-=0.8'
    )
    .fromTo(
      [wordmarkLeft, wordmarkRight],
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 1.0, stagger: 0.15, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo(
      [badgeLeft, badgeRight],
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.0, stagger: 0.1, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(
      scrollIndicator,
      { opacity: 0 },
      { opacity: 0.75, duration: 0.8, ease: 'power1.out' },
      '-=0.2'
    );

    // 2. Parallax & Fade-out Scroll triggers
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    if (bgTextTop) {
      scrollTl.to(bgTextTop, { y: -30, opacity: 0.12, ease: 'none' }, 0);
    }
    if (bgTextBottom) {
      scrollTl.to(bgTextBottom, { y: -30, opacity: 0.12, ease: 'none' }, 0);
    }
    if (portalInner) {
      scrollTl.to(portalInner, { y: 35, ease: 'none' }, 0);
    }
    if (portal) {
      scrollTl.to(portal, { y: 15, opacity: 0.3, ease: 'none' }, 0);
    }
    if (wordmarkLeft) {
      scrollTl.to(wordmarkLeft, { y: -30, opacity: 0.12, ease: 'none' }, 0);
    }
    if (wordmarkRight) {
      scrollTl.to(wordmarkRight, { y: -30, opacity: 0.12, ease: 'none' }, 0);
    }
    if (badgeLeft) {
      scrollTl.to(badgeLeft, { y: -20, opacity: 0, ease: 'none' }, 0);
    }
    if (badgeRight) {
      scrollTl.to(badgeRight, { y: -20, opacity: 0, ease: 'none' }, 0);
    }
    if (scrollIndicator) {
      scrollTl.to(scrollIndicator, { opacity: 0, ease: 'none' }, 0);
    }

    // 3. Mouse Magnet Effect for Badges
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

      if (badgeLeft) {
        gsap.to(badgeLeft, {
          x: x * 25,
          y: y * 25,
          duration: 0.8,
          ease: 'power2.out'
        });
      }
      if (badgeRight) {
        gsap.to(badgeRight, {
          x: x * -25,
          y: y * -25,
          duration: 0.8,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseLeave = () => {
      if (badgeLeft) gsap.to(badgeLeft, { x: 0, y: 0, duration: 1.0, ease: 'power3.out' });
      if (badgeRight) gsap.to(badgeRight, { x: 0, y: 0, duration: 1.0, ease: 'power3.out' });
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      {/* Background sunset ambient glow */}
      <div className={styles.ambientGlow} />
      <div className={styles.noiseOverlay} />

      {/* Editorial Alignment Grid Lines */}
      <div className={styles.gridOverlay}>
        <div className={styles.gridLineV} style={{ left: '20%' }} />
        <div className={styles.gridLineV} style={{ left: '80%' }} />
        <div className={styles.gridLineH} style={{ top: '35%' }} />
        <div className={styles.gridLineH} style={{ top: '70%' }} />
      </div>

      {/* Main Composition */}
      <div className={styles.composition}>
        
        {/* Left Column (Top of zig-zag) */}
        <div ref={wordmarkLeftRef} className={styles.wordmarkLeft}>
          <div className={styles.logoMobileWrap}>
            <img src="/logo.png" alt="Yalla Voyage" className={styles.logoMobile} />
          </div>
          <div ref={bgTextTopRef} className={`${styles.heroLogoWrap} ${styles.logoYallaWrap}`}>
            <img src="/logo.png" alt="Yalla" className={`${styles.heroLogo} ${styles.logoYalla}`} />
          </div>
          <span className={styles.eyebrowMini}>Bespoke Travel Agency</span>
          <h2 className={styles.taglineLine}>Journeys, Curated</h2>
          <span className={styles.wordmarkLeftArabic}>يلا نسافر</span>
        </div>

        {/* Center Stack - Built as a Grand Archway (Door) */}
        <div className={styles.compositionCenter}>
          {/* Door Frame Container */}
          <div className={styles.doorContainer}>
            {/* Connector Lines to Side Columns */}
            <div className={styles.connectorLeft} />
            <div className={styles.connectorRight} />

            {/* Architectural Keystone */}
            <div className={styles.doorKeystone}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1.5 1.5" opacity="0.4" />
                <path d="M12 8l1.2 2.8 2.8 1.2-2.8 1.2-1.2 2.8-1.2-2.8-2.8-1.2 2.8-1.2L12 8z" fill="currentColor" />
              </svg>
            </div>

            {/* Double Border Frame representing the Doorframe */}
            <div className={styles.doorFrameOuter}>
              <div className={styles.doorFrameInner}>
                
                {/* Arched Portal Window */}
                <div ref={portalRef} className={styles.portal}>
                  <div ref={portalInnerRef} className={styles.portalInner}>
                    {HERO_SLIDES.map((slide, idx) => (
                      <img
                        key={idx}
                        src={slide.img}
                        alt={slide.name}
                        className={`${styles.portalImg} ${idx === activeIndex ? styles.portalImgActive : ''}`}
                      />
                    ))}
                    <div className={styles.portalOverlay} />
                  </div>

                  {/* Arched French Door Glass Panes Overlay */}
                  <div className={styles.doorPanes}>
                    {/* Vertical stiles divide double doors */}
                    <div className={styles.paneLineV} />
                    {/* Horizontal transoms */}
                    <div className={styles.paneLineH} style={{ top: '25%' }} />
                    <div className={styles.paneLineH} style={{ top: '50%' }} />
                    <div className={styles.paneLineH} style={{ top: '75%' }} />
                    {/* Brass Door Handle at horizontal midpoint */}
                    <div className={styles.doorHandle}>
                      <div className={styles.doorHandleKnob} />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Symmetrical Hanging plates/labels */}
            <div ref={badgeLeftRef} className={`${styles.floatingBadge} ${styles.badgeLeft}`}>
              <span className={styles.badgeLabel}>Coordinates</span>
              <span key={`coords-${activeIndex}`} className={styles.badgeValue}>
                {HERO_SLIDES[activeIndex].coords}
              </span>
            </div>

            <div ref={badgeRightRef} className={`${styles.floatingBadge} ${styles.badgeRight}`}>
              <span className={styles.badgeLabel}>Destination</span>
              <span key={`loc-${activeIndex}`} className={styles.badgeValue}>
                {HERO_SLIDES[activeIndex].name}
              </span>
            </div>

            {/* Door Step Base Line */}
            <div className={styles.doorStep} />
          </div>
        </div>

        {/* Right Column (Bottom of zig-zag) */}
        <div ref={wordmarkRightRef} className={styles.wordmarkRight}>
          <span className={styles.eyebrowMini}>Saudi Arabia & GCC</span>
          <h2 className={styles.taglineLine}>Designed With Soul</h2>
          <span className={styles.estLabel}>EST. 2018</span>
          <div ref={bgTextBottomRef} className={`${styles.heroLogoWrap} ${styles.logoVoyageWrap}`}>
            <img src="/logo.png" alt="Voyage" className={`${styles.heroLogo} ${styles.logoVoyage}`} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollIndicatorRef} className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll to Explore</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
}
