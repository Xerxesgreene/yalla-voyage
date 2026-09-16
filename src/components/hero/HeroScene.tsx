'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FluidDistortionCanvas } from './FluidDistortionCanvas';

import { useLanguage } from '@/context/LanguageContext';

export function HeroScene() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll('.hero-anim');
        gsap.fromTo(
          items,
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, delay: 0.15, ease: 'power3.out' }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#F4EFE6] text-[#0F2E23] select-none flex flex-col justify-start sm:justify-center"
      aria-label="Yalla Voyage Sanctuary Hero"
    >
      {/* ── Base Hero Background Image (62% X frames the Arab traveler on the right and open sky on the left) ── */}
      <img
        src="/images/yalla-alula-user-hero.jpg"
        alt="AlUla Landscape Sanctuary"
        className="absolute inset-0 w-full h-full object-cover object-[62%_center] sm:object-[78%_center] lg:object-center pointer-events-none z-0"
      />

      {/* ── Multi-Drop Concentric Liquid Water Ripple Canvas (Interactive WebGL Refraction) ── */}
      <FluidDistortionCanvas imageSrc="/images/yalla-alula-user-hero.jpg" />

      {/* ── Soft Ambient Top & Bottom Vignette ── */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F4EFE6]/70 via-[#F4EFE6]/25 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none z-10" />

      {/* ── Main Hero Content Stack (Placed in open sky on top-left) ── */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-5 sm:px-12 lg:px-16 xl:px-20 pt-32 sm:pt-38 md:pt-44 pb-8 sm:pb-16 pointer-events-none">
        {/* Left-Aligned Typographic Group in Open Sky */}
        <div
          ref={contentRef}
          className="max-w-[280px] sm:max-w-md lg:max-w-lg mr-auto text-left pointer-events-auto space-y-2.5 sm:space-y-5"
        >
          {/* Main Headline */}
          <h1 className="hero-anim text-[24px] sm:text-4xl md:text-5xl lg:text-[60px] font-heading font-medium text-[#0F2E23] tracking-tight leading-[1.1]">
            {t.hero.titleLine1} <br className="sm:hidden" />
            {t.hero.titleLine2} <span className="italic font-serif text-[#2E6B57]">{t.hero.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-anim text-[11px] sm:text-sm md:text-base text-[#0F2E23]/90 font-light leading-relaxed font-sans max-w-[240px] sm:max-w-md">
            {t.hero.subtitle}
          </p>

          {/* Action Button: Single Begin Your Voyage button */}
          <div className="hero-anim pt-1 flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-3.5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 sm:px-6 sm:py-3 rounded-full bg-[#0F2E23] hover:bg-[#2E6B57] text-[#F4EFE6] text-[10.5px] sm:text-sm font-sans font-medium uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <span>{t.hero.beginVoyage}</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
