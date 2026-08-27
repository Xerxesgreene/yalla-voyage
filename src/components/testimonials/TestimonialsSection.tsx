'use client';

import React from 'react';
import { Star, MessageCircle, ShieldCheck } from 'lucide-react';
import { BlurReveal } from '@/components/ui/BlurReveal';
import { testimonials, clientTrustMetrics } from '@/data/testimonials';
import { siteConfig } from '@/data/site';

export function TestimonialsSection() {
  // Duplicated set for truly seamless 0% -> -50% CSS infinite loop
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section
      className="section-pad bg-[#0A1A14] text-[#F4EFE6] border-t border-[#2E6B57]/30 relative overflow-hidden"
      aria-label="Client Stories & Testimonials"
    >
      {/* Ambient Lighting Glow Orbs */}
      <div className="pointer-events-none absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-[#39C27D]/10 blur-[130px] z-0" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 w-[500px] h-[500px] rounded-full bg-[#2E6B57]/15 blur-[130px] z-0" />

      <div className="container-wide relative z-10 mb-10">
        {/* ── Section Header ── */}
        <BlurReveal delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13382B] text-[#F4EFE6] text-[11px] font-mono font-bold tracking-widest uppercase mb-4 border border-[#39C27D]/30 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39C27D] animate-pulse inline-block" />
                <span>10 YEARS EXPERIENCE • CLIENT STORIES</span>
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium tracking-tight leading-[1.08] text-[#F4EFE6]">
                Trusted by discerning travelers{' '}
                <span className="text-[#DAD6CD]/50 block sm:inline">across the globe.</span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                  'Hello Yalla Voyage, I would like to consult with a senior travel curator regarding a bespoke itinerary.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#13382B] border border-[#2E6B57]/50 text-xs font-mono font-semibold uppercase tracking-wider text-[#F4EFE6] hover:border-[#39C27D] hover:bg-[#2E6B57] transition-all self-start md:self-auto flex-shrink-0 font-sans shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#39C27D]" />
                <span>Talk to Concierge</span>
              </a>
            </div>
          </div>
        </BlurReveal>
      </div>

      {/* ── Continuous Infinite Motion Stream ── */}
      <div className="relative w-full overflow-hidden select-none py-4">
        {/* Soft edge masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#0A1A14] via-[#0A1A14]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#0A1A14] via-[#0A1A14]/80 to-transparent z-20" />

        {/* Endless Marquee Track */}
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] active:[animation-play-state:paused]">
          {marqueeItems.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="flex-shrink-0 w-[280px] sm:w-[360px] lg:w-[400px] mx-2.5 sm:mx-3.5 flex flex-col justify-between p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#0F2E23]/75 backdrop-blur-xl border border-[#2E6B57]/40 hover:border-[#39C27D]/80 hover:bg-[#0F2E23] transition-all duration-300 shadow-xl group cursor-pointer"
            >
              {/* Top: Stars & Category Badge */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#39C27D]" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[10.5px] font-mono uppercase tracking-wider text-[#39C27D] bg-[#13382B] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-[#39C27D]/30">
                    {t.category}
                  </span>
                </div>

                {/* Minimal Elegant Quote */}
                <p className="text-[13.5px] sm:text-[15.5px] font-sans font-light leading-relaxed text-[#F4EFE6] text-balance">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Bottom: Luxury Verified Client Dispatch */}
              <div className="pt-4 sm:pt-5 mt-4 sm:mt-6 border-t border-[#2E6B57]/30 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#13382B] border border-[#39C27D]/40 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#39C27D]" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10.5px] sm:text-[11px] font-semibold text-[#F4EFE6] truncate">
                      {t.clientType}
                    </p>
                    <p className="font-sans text-[10px] sm:text-[10.5px] text-[#DAD6CD]/60 truncate font-light">
                      {t.highlightTag}
                    </p>
                  </div>
                </div>

                <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-widest text-[#39C27D] bg-[#0A1A14]/70 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-[#2E6B57]/40 flex-shrink-0">
                  {t.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 10 Years Experience & Trust Metrics ── */}
      <div className="container-wide relative z-10 mt-10">
        <BlurReveal delay={0.25}>
          <div className="pt-8 border-t border-[#2E6B57]/30 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {clientTrustMetrics.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <span className="block text-xl sm:text-2xl md:text-3xl font-heading font-medium text-[#39C27D]">
                  {stat.value}
                </span>
                <span className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-[#DAD6CD]/80 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}

export default TestimonialsSection;

