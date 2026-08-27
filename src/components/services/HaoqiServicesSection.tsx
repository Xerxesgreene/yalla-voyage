'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { homepageServices, HomepageService } from '@/data/services';
import { CardSwap, Card } from '@/components/ui/CardSwap';
import { HaoqiServiceModal } from './HaoqiServiceModal';

export function HaoqiServicesSection() {
  const [selectedService, setSelectedService] = useState<HomepageService | null>(null);

  return (
    <section
      id="services"
      className="relative bg-[#F4EFE6] text-[#0F2E23] py-20 sm:py-28 overflow-hidden border-t border-[#0F2E23]/10"
    >
      {/* Ambient Lighting Highlights */}
      <div className="pointer-events-none absolute top-1/4 -left-40 w-[36rem] h-[36rem] rounded-full bg-[#2E6B57]/8 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-40 w-[36rem] h-[36rem] rounded-full bg-[#E7E1D8]/40 blur-[140px]" />

      <div className="container max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        
        {/* ── 1. Top Section Badge & Scope ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-10 sm:mb-14 border-b border-[#0F2E23]/8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2E23] text-[#F4EFE6] text-[11px] font-mono font-bold tracking-widest uppercase shadow-2xs w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39C27D] animate-pulse inline-block" />
            <span>05 • SERVICES &amp; CAPABILITIES</span>
          </span>

          <div className="flex items-center gap-3 font-mono text-[11px] text-[#2E6B57] uppercase tracking-widest font-semibold">
            <span>JEDDAH</span>
            <span>•</span>
            <span>RIYADH</span>
            <span>•</span>
            <span>ALULA</span>
            <span>•</span>
            <span>GLOBAL</span>
          </div>
        </div>

        {/* ── 2. Split 2-Column Showcase (Mobile: Stacked Cards Above Text | Desktop: Side-by-Side) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Service Text & Highlights (order-2 on mobile, order-1 on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium text-[#0F2E23] leading-[1.08] tracking-tight">
              Architected services for <span className="text-[#2E6B57]">uncompromising travel.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#0F2E23]/75 font-light leading-relaxed font-sans">
              From private aviation and overwater villas to executive summits and diplomatic fast-track logistics — Yalla Voyage turns complex travel into seamless artistry.
            </p>

            {/* Service Pillars List */}
            <div className="pt-2 space-y-3">
              {homepageServices.map((svc) => (
                <div
                  key={svc.index}
                  onClick={() => setSelectedService(svc)}
                  className="group flex items-center justify-between p-3.5 rounded-2xl bg-white/80 hover:bg-white border border-[#0F2E23]/8 hover:border-[#2E6B57]/40 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#2E6B57] bg-[#2E6B57]/10 px-2.5 py-1 rounded-lg">
                      {svc.index}
                    </span>
                    <span className="text-sm font-sans font-medium text-[#0F2E23] group-hover:text-[#2E6B57] transition-colors">
                      {svc.title}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#0F2E23]/40 group-hover:text-[#2E6B57] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              ))}
            </div>

            {/* CTA Button to Full Services Page */}
            <div className="pt-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0F2E23] hover:bg-[#2E6B57] text-[#F4EFE6] text-xs font-semibold uppercase tracking-wider transition-all shadow-md group font-sans"
              >
                <span>Explore All 06 Service Divisions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#39C27D]" />
              </Link>
            </div>
          </div>

          {/* 3D Interactive CardSwap Stage (order-1 on mobile, order-2 on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-7 relative w-full h-[460px] sm:h-[540px] lg:h-[600px] flex items-center justify-center">
            
            <div className="relative w-full h-full flex items-center justify-center">
              <CardSwap
                width={440}
                height={500}
                cardDistance={45}
                verticalDistance={40}
                delay={4200}
                pauseOnHover={true}
                skewAmount={4}
                easing="smooth"
                onCardClick={(idx) => {
                  if (homepageServices[idx]) {
                    setSelectedService(homepageServices[idx]);
                  }
                }}
              >
                {homepageServices.map((service) => (
                  <Card key={service.index} className="group/card relative w-full h-full select-none">
                    {/* Background Full-Bleed Image */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                        sizes="(max-width: 768px) 320px, 440px"
                      />
                      {/* Dark Atmospheric Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06150E]/95 via-[#06150E]/40 to-transparent" />
                      <div className="absolute inset-0 bg-[#0F2E23]/25 mix-blend-multiply" />
                    </div>

                    {/* Top Header Floating Badges */}
                    <div className="relative z-10 p-6 flex items-center justify-between">
                      <span className="px-3.5 py-1.5 rounded-full text-[10.5px] font-mono font-bold tracking-widest uppercase bg-[#06150E]/80 backdrop-blur-md text-[#39C27D] border border-white/15 shadow-sm">
                        {service.badge}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-[#F4EFE6] font-mono text-xs font-bold flex items-center justify-center border border-white/25">
                        {service.index}
                      </span>
                    </div>

                    {/* Bottom Card Content Info */}
                    <div className="absolute bottom-0 inset-x-0 z-10 p-6 sm:p-7 space-y-3">
                      <h3 className="text-2xl sm:text-[26px] font-display font-light text-[#F4EFE6] leading-tight">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-[13px] text-[#DAD6CD]/90 font-light leading-relaxed font-sans line-clamp-2">
                        {service.tagline}
                      </p>

                      {/* Response Speed & Action Button */}
                      <div className="pt-2 flex items-center justify-between border-t border-white/15">
                        <span className="text-[11px] font-mono text-[#39C27D] font-semibold flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#39C27D]" />
                          <span>{service.responseSpeed}</span>
                        </span>

                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#0F2E23] text-[11px] font-sans font-semibold uppercase tracking-wider group-hover/card:bg-[#39C27D] group-hover/card:text-[#06150E] transition-colors shadow-sm">
                          <span>Discover</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Detail Modal */}
      {selectedService && (
        <HaoqiServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}

export default HaoqiServicesSection;
