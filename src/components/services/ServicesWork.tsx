'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { homepageServices } from '@/data/services';

gsap.registerPlugin(ScrollTrigger);

// 3D Origami Paper Plane Component with lit facets and ambient glow
function PaperPlane3DIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="planeWingLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="planeWingRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#94A3B8" />
        </linearGradient>
        <linearGradient id="planeUnder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <filter id="planeGlow3d" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.5" />
          <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="#2E6B57" floodOpacity="0.8" />
        </filter>
      </defs>

      <g filter="url(#planeGlow3d)">
        {/* Underbody Fold Shadow */}
        <path d="M50 10 L50 90 L24 64 Z" fill="url(#planeUnder)" />
        {/* Left Wing Facet (Bright Highlight) */}
        <path d="M50 10 L8 52 L50 66 Z" fill="url(#planeWingLeft)" />
        {/* Right Wing Facet (Shaded Surface) */}
        <path d="M50 10 L92 52 L50 66 Z" fill="url(#planeWingRight)" />
        {/* Center Spine Crease */}
        <path d="M50 10 L50 90 L50 66 Z" fill="#FFFFFF" fillOpacity="0.95" />
      </g>
    </svg>
  );
}

interface ServicesWorkProps {
  headingNumber?: string;
  headingSubtitle?: string;
  headingTitle?: string;
  headingDescription?: string;
  className?: string;
}

export function ServicesWork({
  headingNumber = '05',
  headingSubtitle = 'Ecosystem & Offerings',
  headingTitle = 'Good journeys inspire. Great journeys stay with you.',
  headingDescription = 'From private jet charters and bespoke desert expeditions to corporate MICE and global visa concierge — we unite every aspect of your voyage into one seamless experience.',
  className = '',
}: ServicesWorkProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCount, setActiveCount] = useState(1);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const pathEl = pathRef.current;
      const planeEl = planeRef.current;
      const gridEl = gridRef.current;

      if (!pathEl || !planeEl || !gridEl) return;

      const pathLength = pathEl.getTotalLength();

      // Initial SVG path state
      gsap.set(pathEl, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      // 1. Scrub 3D Paper Plane along winding flight path on scroll
      ScrollTrigger.create({
        trigger: gridEl,
        start: 'top 75%',
        end: 'bottom 80%',
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          const drawLength = pathLength * progress;

          // Draw the glowing path behind plane
          gsap.set(pathEl, { strokeDashoffset: pathLength - drawLength });

          // Calculate 2D point & 3D tangent rotation
          const point = pathEl.getPointAtLength(drawLength);
          const nextPoint = pathEl.getPointAtLength(Math.min(pathLength, drawLength + 8));
          const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);

          // Dynamic 3D tilt simulation based on flight direction
          const tiltX = Math.sin(progress * Math.PI * 4) * 15;
          const tiltY = Math.cos(progress * Math.PI * 4) * 15;

          gsap.set(planeEl, {
            x: point.x,
            y: point.y,
            rotation: angle + 45,
            rotationX: tiltX,
            rotationY: tiltY,
            transformOrigin: '50% 50%',
            opacity: progress > 0.01 && progress < 0.99 ? 1 : 0,
          });
        },
      });

      // 2. Small Card 3D Spring Pop-Up Animations on Scroll
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const isEven = index % 2 === 0;

        gsap.set(card, {
          opacity: 0,
          y: 70,
          scale: 0.8,
          rotationX: 18,
          rotationY: isEven ? -12 : 12,
          transformPerspective: 1000,
        });

        ScrollTrigger.create({
          trigger: card,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationX: 0,
              rotationY: 0,
              duration: 1.1,
              ease: 'back.out(1.6)', // 3D Spring Pop Effect
            });
          },
        });

        // Active index tracker
        ScrollTrigger.create({
          trigger: card,
          start: 'top 50%',
          end: 'bottom 50%',
          onToggle: (self) => {
            if (self.isActive) {
              setActiveCount(index + 1);
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`section works relative bg-[#0F2E23] text-[#F4EFE6] py-24 sm:py-32 overflow-hidden ${className}`}
    >
      {/* Ambient Lighting Highlights */}
      <div className="pointer-events-none absolute top-1/4 -left-40 w-[30rem] h-[30rem] rounded-full bg-[#2E6B57]/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-40 w-[30rem] h-[30rem] rounded-full bg-[#6D8377]/15 blur-[100px]" />

      <div className="container max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* ── 1. Top Compact Header ── */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 sm:mb-24 gap-6 border-b border-white/12 pb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#163A2D] border border-[#2E6B57]/40 text-xs font-mono uppercase tracking-widest text-[#E7E1D8] mb-3 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-[#2E6B57] animate-pulse" />
              <span>({headingNumber}) • {headingSubtitle}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-[#F4EFE6] leading-tight tracking-tight">
              Good journeys inspire.<br />
              <span className="font-normal text-[#2E6B57]">Great journeys stay with you.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#F4EFE6]/70 text-xs sm:text-sm font-light leading-relaxed mb-3">
              {headingDescription}
            </p>
            <div className="flex items-center gap-3 font-mono text-[11px] text-[#2E6B57] uppercase tracking-widest font-semibold">
              <span>Jeddah</span>
              <span>•</span>
              <span>Riyadh</span>
              <span>•</span>
              <span>AlUla</span>
              <span>•</span>
              <span>Global Concierge</span>
            </div>
          </div>
        </div>

        {/* ── 2. Flight Path Container & 3D Paper Plane ── */}
        <div ref={gridRef} className="relative">

          {/* Winding Flight Path across 3-column compact grid */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block overflow-visible z-0"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <path
              d="M 150 0 C 450 150, 850 150, 850 400 C 850 650, 150 650, 150 850 C 150 950, 500 950, 850 1000"
              fill="none"
              stroke="#F4EFE6"
              strokeOpacity="0.08"
              strokeWidth="2"
              strokeDasharray="5 7"
            />
            <path
              ref={pathRef}
              d="M 150 0 C 450 150, 850 150, 850 400 C 850 650, 150 650, 150 850 C 150 950, 500 950, 850 1000"
              fill="none"
              stroke="url(#flightGradient3d)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="flightGradient3d" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2E6B57" />
                <stop offset="50%" stopColor="#F4EFE6" />
                <stop offset="100%" stopColor="#E7E1D8" />
              </linearGradient>
            </defs>
          </svg>

          {/* 3D Paper Plane Element */}
          <div
            ref={planeRef}
            className="absolute top-0 left-0 -ml-5 -mt-5 pointer-events-none z-20 hidden lg:block"
          >
            <PaperPlane3DIcon className="w-12 h-12" />
          </div>

          {/* ── 3. Small Compact Card Grid (3 Columns on Desktop) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {homepageServices.map((service, index) => (
              <div
                key={service.index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group relative flex flex-col justify-between"
              >
                {/* Small Sleek Glass Card Shell */}
                <div className="bg-[#13352A]/90 backdrop-blur-xl border border-white/12 rounded-2xl p-5 hover:border-[#2E6B57] transition-all duration-400 shadow-xl hover:shadow-[0_20px_40px_rgba(46,107,87,0.22)] flex flex-col justify-between h-full">

                  <div>
                    {/* Top Row Index & Title */}
                    <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-light text-xl text-[#2E6B57]">
                          {service.index}
                        </span>
                        <span className="w-4 h-px bg-[#2E6B57]/40" />
                        <span className="font-mono text-[11px] uppercase tracking-widest text-[#E7E1D8]/80 font-semibold truncate max-w-[160px]">
                          {service.title}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-[#F4EFE6]/40">
                        [{String(index + 1).padStart(2, '0')}/06]
                      </span>
                    </div>

                    {/* Tagline */}
                    <h3 className="text-xl font-display font-normal text-[#F4EFE6] group-hover:text-[#2E6B57] transition-colors duration-300 leading-snug mb-2.5">
                      {service.tagline}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#F4EFE6]/65 leading-relaxed font-sans mb-4 line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Compact Card Image Container */}
                  <Link
                    href={service.href}
                    aria-label={`Explore ${service.title}`}
                    className="block relative overflow-hidden rounded-xl group/link shadow-md mt-2"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#0F2E23] border border-white/10">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover/link:scale-108"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23]/80 via-[#0F2E23]/20 to-transparent opacity-70 group-hover/link:opacity-40 transition-opacity duration-500 pointer-events-none" />

                      {/* Floating "EXPLORE →" Badge on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-[#F4EFE6] text-[#0F2E23] px-4 py-2 rounded-full font-mono text-[11px] uppercase font-bold tracking-widest flex items-center gap-1.5 shadow-2xl opacity-0 scale-75 group-hover/link:opacity-100 group-hover/link:scale-100 transition-all duration-300 ease-out border border-white/20">
                          <span>EXPLORE</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#0F2E23] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </Link>

                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="h-16 sm:h-24" />

        {/* ── 4. Bottom View All Bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/15 gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#F4EFE6] text-[#0F2E23] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#2E6B57] hover:text-[#F4EFE6] transition-all duration-300 shadow-xl group"
            >
              <span>Browse All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="https://wa.me/966500000000?text=Hello%20Yalla%20Voyage%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#163A2D] text-[#F4EFE6] border border-white/15 text-xs font-mono uppercase tracking-widest hover:border-[#2E6B57] transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#2E6B57]" />
              <span>Talk to a Designer</span>
            </a>
          </div>

          <div className="font-mono text-xs sm:text-sm font-semibold text-[#2E6B57]">
            Services Count: ( {String(activeCount).padStart(2, '0')} / 06 )
          </div>
        </div>

      </div>
    </section>
  );
}
