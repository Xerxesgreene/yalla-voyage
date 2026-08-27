'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import {
  Clock,
  Sparkles,
  MessageCircle,
  RotateCw,
  RotateCcw,
  Check,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Calendar,
  Compass,
} from 'lucide-react';
import { TravelPackage } from '@/data/packages';
import { siteConfig } from '@/data/site';

interface PackageCardProps {
  pkg: TravelPackage;
  index?: number;
}

export function PackageCard({ pkg, index = 0 }: PackageCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isFlippedRef = useRef(false);
  isFlippedRef.current = isFlipped;

  const containerRef = useRef<HTMLDivElement>(null);
  const cardInnerRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const glareFrontRef = useRef<HTMLDivElement>(null);
  const glareBackRef = useRef<HTMLDivElement>(null);
  const backContentRef = useRef<HTMLDivElement>(null);

  // GSAP quickTo / persistent timeline handlers
  const flipTlRef = useRef<gsap.core.Timeline | null>(null);

  // ── GSAP Flip Animation ──
  const animateFlip = useCallback((toFlipped: boolean) => {
    if (!cardInnerRef.current || !shadowRef.current) return;

    // Kill any existing flip animation
    if (flipTlRef.current) {
      flipTlRef.current.kill();
    }

    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
    });
    flipTlRef.current = tl;

    if (toFlipped) {
      // ── FLIP TO BACK (0° -> 180°) ──
      // Phase 1: Card lifts towards camera, rotates Y, ground shadow expands & softens
      tl.to(
        cardInnerRef.current,
        {
          rotationY: 180,
          rotationX: 0,
          duration: 0.85,
          ease: 'power3.inOut',
        },
        0
      )
        // Dynamic Z elevation arc (lifts off the surface at midpoint, lands at 180°)
        .to(
          cardInnerRef.current,
          {
            z: 60,
            scale: 1.03,
            duration: 0.4,
            ease: 'power2.out',
          },
          0
        )
        .to(
          cardInnerRef.current,
          {
            z: 0,
            scale: 1,
            duration: 0.45,
            ease: 'power2.in',
          },
          0.4
        )
        // Shadow diffusion during mid-air rotation
        .to(
          shadowRef.current,
          {
            scale: 1.2,
            opacity: 0.85,
            y: 10,
            filter: 'blur(16px)',
            duration: 0.4,
            ease: 'power2.out',
          },
          0
        )
        .to(
          shadowRef.current,
          {
            scale: 1.02,
            opacity: 0.55,
            y: 4,
            filter: 'blur(10px)',
            duration: 0.45,
            ease: 'power2.in',
          },
          0.4
        );

      // Light Glare Sweep across the front face
      if (glareFrontRef.current) {
        tl.fromTo(
          glareFrontRef.current,
          { xPercent: -100, opacity: 0 },
          { xPercent: 100, opacity: 0.6, duration: 0.5, ease: 'power1.in' },
          0
        );
      }

      // Back Face Content Stagger Unveil
      if (backContentRef.current) {
        const backElements = backContentRef.current.querySelectorAll('.back-stagger-item');
        if (backElements.length > 0) {
          tl.fromTo(
            backElements,
            { y: 14, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.04,
              duration: 0.4,
              ease: 'power2.out',
            },
            0.42
          );
        }
      }
    } else {
      // ── FLIP TO FRONT (180° -> 0°) ──
      tl.to(
        cardInnerRef.current,
        {
          rotationY: 0,
          rotationX: 0,
          duration: 0.8,
          ease: 'power3.inOut',
        },
        0
      )
        // Dynamic Z elevation arc
        .to(
          cardInnerRef.current,
          {
            z: 60,
            scale: 1.03,
            duration: 0.38,
            ease: 'power2.out',
          },
          0
        )
        .to(
          cardInnerRef.current,
          {
            z: 0,
            scale: 1,
            duration: 0.42,
            ease: 'power2.in',
          },
          0.38
        )
        // Shadow diffusion
        .to(
          shadowRef.current,
          {
            scale: 1.2,
            opacity: 0.8,
            y: 10,
            filter: 'blur(16px)',
            duration: 0.38,
            ease: 'power2.out',
          },
          0
        )
        .to(
          shadowRef.current,
          {
            scale: 0.95,
            opacity: 0.35,
            y: 0,
            filter: 'blur(8px)',
            duration: 0.42,
            ease: 'power2.in',
          },
          0.38
        );

      // Light Glare Sweep on reverse
      if (glareBackRef.current) {
        tl.fromTo(
          glareBackRef.current,
          { xPercent: 100, opacity: 0.6 },
          { xPercent: -100, opacity: 0, duration: 0.45, ease: 'power1.in' },
          0
        );
      }
    }
  }, []);

  // Synchronize state changes with GSAP
  const toggleFlip = useCallback(
    (targetState?: boolean) => {
      setIsFlipped((prev) => {
        const next = typeof targetState === 'boolean' ? targetState : !prev;
        animateFlip(next);
        return next;
      });
    },
    [animateFlip]
  );

  // ── 3D Interactive Mouse Tilt / Parallax (Desktop) ──
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFlippedRef.current || !containerRef.current || !cardInnerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Subtle 3D tilt
    gsap.to(cardInnerRef.current, {
      rotationY: x * 16,
      rotationX: -y * 16,
      duration: 0.25,
      ease: 'power1.out',
      overwrite: 'auto',
    });

    // Parallax ground shadow
    if (shadowRef.current) {
      gsap.to(shadowRef.current, {
        x: -x * 20,
        y: -y * 10 + 2,
        opacity: 0.6,
        duration: 0.25,
        ease: 'power1.out',
        overwrite: 'auto',
      });
    }

    // Dynamic glare position
    if (glareFrontRef.current) {
      gsap.to(glareFrontRef.current, {
        xPercent: x * 80,
        yPercent: y * 80,
        opacity: 0.25,
        duration: 0.25,
        overwrite: 'auto',
      });
    }
  };

  const handleMouseLeave = () => {
    if (isFlippedRef.current || !cardInnerRef.current) return;

    // Smooth reset
    gsap.to(cardInnerRef.current, {
      rotationY: 0,
      rotationX: 0,
      z: 0,
      scale: 1,
      duration: 0.6,
      ease: 'power2.out',
      overwrite: 'auto',
    });

    if (shadowRef.current) {
      gsap.to(shadowRef.current, {
        x: 0,
        y: 0,
        scale: 0.95,
        opacity: 0.35,
        filter: 'blur(8px)',
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }

    if (glareFrontRef.current) {
      gsap.to(glareFrontRef.current, {
        opacity: 0,
        duration: 0.4,
        overwrite: 'auto',
      });
    }
  };

  // Cleanup GSAP on unmount
  useEffect(() => {
    return () => {
      if (flipTlRef.current) {
        flipTlRef.current.kill();
      }
    };
  }, []);

  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello Yalla Voyage Concierge, I would like to inquire about the "${pkg.title}" package itinerary (${pkg.duration}).`
  )}`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[530px] sm:h-[550px] select-none"
      style={{ perspective: '1600px' }}
    >
      {/* ── GSAP-Driven Dynamic Ambient Ground Shadow ── */}
      <div
        ref={shadowRef}
        className="absolute -bottom-4 left-6 right-6 h-8 rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(15, 46, 35, 0.4) 0%, rgba(15, 46, 35, 0) 75%)',
          opacity: 0.35,
          filter: 'blur(8px)',
          transform: 'scale(0.95)',
          willChange: 'transform, opacity, filter',
        }}
      />

      {/* ── 3D Card Inner (Rotated via GSAP Matrix/3D Transforms) ── */}
      <div
        ref={cardInnerRef}
        onClick={() => toggleFlip()}
        className="relative w-full h-full cursor-pointer"
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: '50% 50%',
          willChange: 'transform',
        }}
      >
        {/* ══════════════════════════════════════════════════════════════════
            FRONT FACE (0deg)
            ══════════════════════════════════════════════════════════════════ */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden bg-white border border-[#0F2E23]/10 shadow-md flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg) translateZ(1px)',
          }}
        >
          {/* Top Image Box */}
          <div className="relative h-[55%] w-full overflow-hidden bg-[#0F2E23]/5">
            <Image
              src={pkg.image}
              alt={pkg.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 3}
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23]/75 via-transparent to-black/20" />

            {/* Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="px-3.5 py-1 rounded-full text-[10.5px] uppercase tracking-wider font-semibold bg-white/95 backdrop-blur-md text-[#0F2E23] shadow-xs font-mono border border-black/5">
                {pkg.badge}
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#0F2E23]/85 text-[#39C27D] backdrop-blur-md border border-white/15 flex items-center gap-1.5 shadow-xs">
                <Clock className="w-3.5 h-3.5 text-[#39C27D]" />
                {pkg.duration}
              </span>
            </div>

            {/* Bottom Photo Pill */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-[11px] font-mono">
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-black/40 backdrop-blur-md border border-white/10">
                <MapPin className="w-3 h-3 text-[#39C27D]" />
                Private Route
              </span>
              <span className="text-[#DAD6CD]/90 font-light flex items-center gap-1">
                <Compass className="w-3 h-3 text-[#39C27D]" /> Bespoke
              </span>
            </div>

            {/* Glare Sheen Layer */}
            <div
              ref={glareFrontRef}
              className="pointer-events-none absolute inset-0 opacity-0"
              style={{
                background: 'linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.45) 50%, transparent 65%)',
                willChange: 'transform, opacity',
              }}
            />
          </div>

          {/* Front Content Details */}
          <div className="p-6 pt-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#2E6B57] uppercase">
                  ITINERARY BLUEPRINT
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-medium text-[#0F2E23] tracking-tight leading-snug">
                {pkg.title}
              </h3>
              <p className="text-xs text-[#0F2E23]/65 font-sans font-light mt-1.5 line-clamp-2 leading-relaxed">
                {pkg.description}
              </p>
            </div>

            {/* Inclusion preview tags */}
            <div className="flex flex-wrap gap-1.5 my-2">
              {pkg.highlights.slice(0, 2).map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#F4EFE6] text-[#0F2E23]/80 text-[11px] font-sans border border-[#0F2E23]/8"
                >
                  <Check className="w-3 h-3 text-[#2E6B57]" />
                  <span className="line-clamp-1">{item}</span>
                </span>
              ))}
            </div>

            {/* Front Flip Trigger CTA Bar */}
            <div className="pt-3 border-t border-[#0F2E23]/8 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#2E6B57]">
                <span className="w-6 h-6 rounded-full bg-[#2E6B57]/10 flex items-center justify-center text-[#2E6B57] shadow-xs">
                  <RotateCw className="w-3.5 h-3.5" />
                </span>
                <span>Click to View Highlights</span>
              </span>

              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0F2E23]/80 px-3 py-1 rounded-full bg-[#0F2E23]/6 hover:bg-[#2E6B57] hover:text-white transition-all flex items-center gap-1">
                Explore <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            BACK FACE (180deg) — Deep Forest Luxury & Staggered Reveal
            ══════════════════════════════════════════════════════════════════ */}
        <div
          ref={backContentRef}
          className="absolute inset-0 w-full h-full rounded-[2rem] p-7 bg-[#0F2E23] text-[#F4EFE6] border border-[#39C27D]/40 shadow-2xl flex flex-col justify-between overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg) translateZ(1px)',
            background: 'radial-gradient(circle at 80% 20%, rgba(46, 107, 87, 0.5) 0%, #0F2E23 70%, #081B14 100%)',
          }}
        >
          {/* Ambient Lighting Accents */}
          <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#39C27D]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#2E6B57]/30 blur-3xl" />

          {/* Glare Sheen Layer for Back */}
          <div
            ref={glareBackRef}
            className="pointer-events-none absolute inset-0 opacity-0"
            style={{
              background: 'linear-gradient(115deg, transparent 35%, rgba(57,194,125,0.2) 50%, transparent 65%)',
              willChange: 'transform, opacity',
            }}
          />

          {/* Back Top Header */}
          <div className="relative z-10">
            <div className="flex items-center justify-between pb-3 border-b border-[#2E6B57]/40 mb-3.5 back-stagger-item">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E6B57]/50 border border-[#39C27D]/30 text-[#39C27D] text-[10.5px] font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#39C27D]" />
                {pkg.badge}
              </span>

              {/* Explicit Flip Back Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFlip(false);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-[#DAD6CD] hover:text-white text-[11px] font-mono transition-all border border-white/15 shadow-xs"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Flip Back</span>
              </button>
            </div>

            <h4 className="text-xl sm:text-2xl font-heading font-medium text-[#F4EFE6] leading-tight tracking-tight mb-2 back-stagger-item">
              {pkg.title}
            </h4>

            <div className="flex items-center gap-4 text-xs font-mono text-[#39C27D] mb-3 back-stagger-item">
              <span className="flex items-center gap-1 text-[#DAD6CD]/90">
                <Calendar className="w-3.5 h-3.5 text-[#39C27D]" />
                {pkg.duration}
              </span>
              <span>•</span>
              <span className="text-[#39C27D] font-semibold">100% Bespoke</span>
            </div>

            {/* Inclusions & Highlights Checklist with Stagger Items */}
            <div className="space-y-2.5 pt-3 border-t border-[#2E6B57]/35 back-stagger-item">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#39C27D] font-bold">
                CURATED INCLUSIONS & HIGHLIGHTS:
              </p>
              <div className="space-y-2">
                {pkg.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F4EFE6]/90 font-sans back-stagger-item">
                    <span className="w-4 h-4 rounded-full bg-[#39C27D]/15 flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#39C27D]/30">
                      <Check className="w-2.5 h-2.5 text-[#39C27D]" />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Back Action Bar */}
          <div className="relative z-10 pt-4 mt-auto border-t border-[#2E6B57]/40 space-y-2.5 back-stagger-item">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5C] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#25D366]/20 font-sans hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire This Package on WhatsApp</span>
            </a>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#DAD6CD]/60 px-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#39C27D]" />
                Direct Concierge Protocol
              </span>
              <span>24/7 Senior Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
