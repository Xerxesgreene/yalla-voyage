'use client';

import React from 'react';
import { Star, MessageCircle, CheckCircle2, MapPin } from 'lucide-react';
import { BlurReveal } from '@/components/ui/BlurReveal';
import { testimonials, clientTrustMetrics } from '@/data/testimonials';
import { siteConfig } from '@/data/site';

export function TestimonialsSection() {
  // Duplicated set for seamless CSS marquee scroll
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section
      className="section-pad bg-[#0A1A14] text-[#F4EFE6] border-t border-[#2E6B57]/30 relative overflow-hidden"
      aria-label="Traveler Stories & Reviews"
    >
      {/* Ambient Lighting Glow Orbs */}
      <div className="pointer-events-none absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-[#39C27D]/10 blur-[130px] z-0" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 w-[500px] h-[500px] rounded-full bg-[#2E6B57]/15 blur-[130px] z-0" />

      <div className="container-wide relative z-10 mb-10">
        {/* ── Section Header ── */}
        <BlurReveal delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-3 sm:gap-3.5 px-6 py-3 sm:px-8 sm:py-3.5 md:px-9 md:py-4 rounded-full bg-[#13382B] text-[#F4EFE6] text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest uppercase mb-6 border border-[#39C27D]/40 shadow-lg">
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#39C27D] animate-pulse inline-block shadow-[0_0_14px_#39C27D]" />
                <span>20+ YEARS EXPERIENCE • TRAVELER STORIES</span>
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-medium tracking-tight leading-[1.08] text-[#F4EFE6]">
                Real Journeys. <span className="text-[#DAD6CD]/60 block sm:inline">Heartfelt Memories.</span>
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#DAD6CD]/80 font-light leading-relaxed font-sans max-w-2xl">
                Genuine stories and reviews from families, couples, and travelers whose dream holidays were brought to life by Yalla Voyage.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                  'Hello Yalla Voyage, I would like to consult with a travel specialist regarding planning our upcoming trip.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#13382B] border border-[#2E6B57]/50 text-xs font-mono font-semibold uppercase tracking-wider text-[#F4EFE6] hover:border-[#39C27D] hover:bg-[#2E6B57] transition-all self-start md:self-auto flex-shrink-0 font-sans shadow-md cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#39C27D]" />
                <span>Talk to a Specialist</span>
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
              className="flex-shrink-0 w-[300px] sm:w-[380px] lg:w-[420px] mx-2.5 sm:mx-3.5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#0F2E23]/80 backdrop-blur-xl border border-[#2E6B57]/40 hover:border-[#39C27D]/80 hover:bg-[#0F2E23] transition-all duration-300 shadow-xl group cursor-pointer"
            >
              {/* Top: Stars, Category & Destination */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#39C27D]" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#39C27D] bg-[#13382B] px-3 py-1 rounded-full border border-[#39C27D]/30">
                    {t.category}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-[13.5px] sm:text-[14.5px] font-sans font-light leading-relaxed text-[#F4EFE6]/90">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              {/* Bottom: Real Traveler Details */}
              <div className="pt-4 mt-5 border-t border-[#2E6B57]/30 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3 min-w-0">
                  {/* Initials Avatar */}
                  <div className="w-8 h-8 rounded-full bg-[#13382B] border border-[#39C27D]/40 flex items-center justify-center font-mono font-bold text-[11px] text-[#39C27D] flex-shrink-0">
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-heading text-sm font-medium text-white truncate">
                      {t.author}
                    </p>
                    <p className="font-sans text-[11px] text-[#39C27D] truncate flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#39C27D] flex-shrink-0" />
                      <span>{t.destination}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0A1A14]/70 border border-[#2E6B57]/40 text-[10px] font-mono text-[#39C27D] flex-shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-[#39C27D]" />
                  <span>{t.verifiedText}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 20+ Years Experience & Trust Metrics ── */}
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
