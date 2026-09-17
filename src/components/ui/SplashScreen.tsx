'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useOptionalLanguage } from '@/context/LanguageContext';

export function SplashScreen() {
  const pathname = usePathname();
  const langContext = useOptionalLanguage();
  const isArabic = langContext?.locale === 'ar';
  const isHomepage = pathname === '/';


  const [mounted, setMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [phase, setPhase] = useState<'enter' | 'presence' | 'flyToNav' | 'done'>('enter');
  const splashLogoRef = useRef<HTMLDivElement>(null);
  const [navTarget, setNavTarget] = useState<{ x: number; y: number; scale: number }>({
    x: 0,
    y: 0,
    scale: 0.22,
  });

  // Calculate precise coordinates of navbar brand logo
  const calculateNavTarget = useCallback(() => {
    const navLogoEl = document.getElementById('navbar-brand-logo');
    const splashEl = splashLogoRef.current;

    if (navLogoEl && splashEl) {
      const navRect = navLogoEl.getBoundingClientRect();
      const splashRect = splashEl.getBoundingClientRect();

      const navCenterX = navRect.left + navRect.width / 2;
      const navCenterY = navRect.top + navRect.height / 2;

      const splashCenterX = splashRect.left + splashRect.width / 2;
      const splashCenterY = splashRect.top + splashRect.height / 2;

      const scale = navRect.width / splashRect.width;

      setNavTarget({
        x: navCenterX - splashCenterX,
        y: navCenterY - splashCenterY,
        scale: Math.max(0.18, Math.min(0.32, scale || 0.22)),
      });
    } else {
      const screenW = typeof window !== 'undefined' ? window.innerWidth : 1440;
      const screenH = typeof window !== 'undefined' ? window.innerHeight : 900;
      setNavTarget({
        x: -(screenW / 2 - 120),
        y: -(screenH / 2 - 45),
        scale: 0.22,
      });
    }
  }, []);

  useEffect(() => {
    setMounted(true);

    if (!isHomepage) {
      setShowSplash(false);
      return;
    }

    const hasSeen = sessionStorage.getItem('yv-splash-seen');
    const urlParams = new URLSearchParams(window.location.search);
    const forceSplash = urlParams.get('splash') === 'true' || urlParams.get('splash') === '1';

    if (hasSeen && !forceSplash) {
      setShowSplash(false);
      return;
    }

    setShowSplash(true);

    // Initial measurement after short layout stabilization
    const measureTimer = setTimeout(() => {
      calculateNavTarget();
    }, 300);

    // Soothing Luxury Animation Sequence
    const timers = [
      setTimeout(() => setPhase('presence'), 1200),
      setTimeout(() => {
        calculateNavTarget();
        setPhase('flyToNav');
      }, 2600),
      setTimeout(() => {
        setPhase('done');
        setShowSplash(false);
        sessionStorage.setItem('yv-splash-seen', 'true');
      }, 3900),
    ];

    window.addEventListener('resize', calculateNavTarget);

    return () => {
      clearTimeout(measureTimer);
      timers.forEach(clearTimeout);
      window.removeEventListener('resize', calculateNavTarget);
    };
  }, [isHomepage, calculateNavTarget]);

  const handleSkipOrClick = () => {
    if (phase === 'enter' || phase === 'presence') {
      calculateNavTarget();
      setPhase('flyToNav');
      setTimeout(() => {
        setPhase('done');
        setShowSplash(false);
        sessionStorage.setItem('yv-splash-seen', 'true');
      }, 1000);
    }
  };

  if (!mounted || !showSplash) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {showSplash && (
        <motion.div
          key="splash-screen-overlay"
          onClick={handleSkipOrClick}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden select-none cursor-pointer"
          initial={{ opacity: 1 }}
          animate={phase === 'flyToNav' || phase === 'done' ? { opacity: 0 } : { opacity: 1 }}
          transition={{
            duration: 1.1,
            ease: [0.65, 0, 0.35, 1],
          }}
          style={{ backgroundColor: '#FDFBF7' }}
        >
          {/* Subtle luxury geometric texture */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #0F2E23 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Ambient soft glow aura behind logo */}
          <motion.div
            className="absolute pointer-events-none rounded-full blur-3xl"
            style={{
              width: '520px',
              height: '380px',
              background:
                'radial-gradient(ellipse at center, rgba(57,194,125,0.12) 0%, rgba(196,149,106,0.10) 45%, transparent 70%)',
            }}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={
              phase === 'flyToNav' || phase === 'done'
                ? { scale: 0.3, opacity: 0 }
                : { scale: [0.85, 1.05, 1.0], opacity: 1 }
            }
            transition={{
              duration: 1.6,
              ease: 'easeOut',
            }}
          />

          {/* Animated Logo Group */}
          <motion.div
            ref={splashLogoRef}
            className="relative flex flex-col items-center justify-center will-change-transform z-10"
            initial={{ opacity: 0, scale: 0.88, filter: 'blur(10px)', y: 12 }}
            animate={
              phase === 'enter'
                ? { opacity: 1, scale: 1.0, filter: 'blur(0px)', y: 0 }
                : phase === 'presence'
                ? { opacity: 1, scale: 1.0, filter: 'blur(0px)', y: 0 }
                : {
                    x: navTarget.x,
                    y: navTarget.y,
                    scale: navTarget.scale,
                    opacity: 0.95,
                  }
            }
            transition={
              phase === 'flyToNav' || phase === 'done'
                ? { duration: 1.15, ease: [0.65, 0, 0.35, 1] }
                : { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
            }
          >
            {/* Logo Artwork */}
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={isArabic ? "/yalla-voyage-logo-ar-transparent.png" : "/yalla-voyage-logo-transparent.png"}
                alt={isArabic ? "يلا سفر" : "Yalla Voyage"}
                className="w-[340px] sm:w-[440px] md:w-[500px] max-w-[85vw] h-auto object-contain select-none drop-shadow-sm"
              />

              {/* Golden light sweep shimmer during presence phase */}
              <AnimatePresence>
                {phase === 'presence' && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="w-full h-full"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 1.2, ease: 'easeInOut' }}
                      style={{
                        background:
                          'linear-gradient(90deg, transparent 0%, rgba(196,149,106,0.25) 50%, transparent 100%)',
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tagline */}
            <motion.p
              className={`mt-5 text-[11px] sm:text-[13px] uppercase font-sans font-medium text-[#2E6B57] ${
                isArabic ? 'tracking-wider font-bold' : 'tracking-[0.35em]'
              }`}
              initial={{ opacity: 0, y: 8 }}
              animate={
                phase === 'presence'
                  ? { opacity: 1, y: 0 }
                  : phase === 'flyToNav' || phase === 'done'
                  ? { opacity: 0, y: -4, transition: { duration: 0.25 } }
                  : { opacity: 0, y: 8 }
              }
              transition={{ duration: 0.6, ease: 'easeOut', delay: phase === 'presence' ? 0.15 : 0 }}
            >
              {isArabic ? 'اكتشف المزيد · اصنع ذكريات لا تُنسى' : 'Explore More · Create Memories'}
            </motion.p>


            {/* Slender Luxury Progress Bar */}
            <motion.div
              className="mt-4 h-[2px] rounded-full overflow-hidden"
              style={{ width: '160px', backgroundColor: '#EDE8E0' }}
              initial={{ opacity: 0 }}
              animate={
                phase === 'presence'
                  ? { opacity: 1 }
                  : phase === 'flyToNav' || phase === 'done'
                  ? { opacity: 0, transition: { duration: 0.2 } }
                  : { opacity: 0 }
              }
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #39C27D 0%, #C4956A 50%, #2E6B57 100%)',
                }}
                initial={{ width: '0%' }}
                animate={{
                  width:
                    phase === 'flyToNav' || phase === 'done'
                      ? '100%'
                      : phase === 'presence'
                      ? '85%'
                      : '30%',
                }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>

          {/* Bottom Monogram */}
          <motion.div
            className="absolute bottom-7 flex items-center gap-3 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={
              phase === 'flyToNav' || phase === 'done'
                ? { opacity: 0 }
                : { opacity: 0.5 }
            }
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <div className="w-7 h-[1px] bg-[#C4956A]/60" />
            <span className="text-[9px] tracking-[0.25em] uppercase font-sans text-[#0F2E23]/70 font-semibold">
              Curated Travel Mastery
            </span>
            <div className="w-7 h-[1px] bg-[#C4956A]/60" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
