'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Shield, Clock, Award, Sparkles, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal, StaggerReveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { services, Service } from '@/data/services';
import { siteConfig } from '@/data/site';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<Service>(services[0]);

  return (
    <main className="bg-[#F4EFE6] text-[#0F2E23] overflow-hidden">
      <PageHero
        title="Services"
        subtitle="Seamless travel with care, comfort and trust."
        image="/images/header-services.jpg"
        alt="Bespoke Travel Services"
        positionClass="object-center"
      />

      {/* ── Interactive Service Explorer Section with Sticky Live Showcase ── */}
      <section className="section-pad bg-[#F4EFE6]">
        <div className="container-wide">
          <SectionHeading
            badge="01 • ECOSYSTEM"
            title="Tailored around your lifestyle."
            description="Explore our dedicated travel divisions crafted for private collectors, executives, and families."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">

            {/* ── Left: Interactive Animated Service Navigation List ── */}
            <div className="lg:col-span-5 space-y-3.5">
              {services.map((s, idx) => {
                const isActive = activeService.slug === s.slug;
                return (
                  <div
                    key={s.slug}
                    onMouseEnter={() => setActiveService(s)}
                    onClick={() => setActiveService(s)}
                    className={`group cursor-pointer w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${isActive
                        ? 'bg-white text-[#0F2E23] border-[#2E6B57] shadow-xl translate-x-2'
                        : 'bg-white/70 text-[#0F2E23]/70 border-[#0F2E23]/8 hover:bg-white hover:text-[#0F2E23] hover:border-[#2E6B57]/40 hover:translate-x-1'
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Number Badge */}
                      <span
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-mono font-bold transition-colors ${isActive
                            ? 'bg-[#0F2E23] text-[#F4EFE6]'
                            : 'bg-[#0F2E23]/8 text-[#0F2E23]/60 group-hover:bg-[#2E6B57] group-hover:text-white'
                          }`}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <div>
                        <p
                          className={`font-heading font-medium text-sm sm:text-base leading-tight transition-colors ${isActive ? 'text-[#0F2E23] font-semibold' : 'text-[#0F2E23]/80 group-hover:text-[#0F2E23]'
                            }`}
                        >
                          {s.title}
                        </p>
                        <p className="text-[11px] text-[#2E6B57] font-mono mt-0.5 font-medium">
                          {s.categoryLabel}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#39C27D] animate-ping" />
                      )}
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${isActive ? 'text-[#2E6B57] translate-x-1' : 'text-[#0F2E23]/20 group-hover:text-[#2E6B57]'
                          }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── Right: Pinned Sticky Live Showcase (Always Visible & Animated) ── */}
            <div className="lg:col-span-7 lg:sticky lg:top-28">
              <div
                key={activeService.slug}
                className="bg-white rounded-3xl p-7 sm:p-9 border border-[#0F2E23]/10 shadow-2xl space-y-7 transition-all duration-500 animate-blur-in text-[#0F2E23]"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0F2E23]/5 shadow-md">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23]/85 via-transparent to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full text-[10.5px] uppercase font-mono font-bold tracking-widest bg-[#2E6B57] text-[#F4EFE6] shadow-sm">
                      {activeService.badge}
                    </span>
                  </div>

                  {/* Bottom Header Text */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[#39C27D] text-xs font-mono uppercase tracking-wider font-semibold mb-1">
                      {activeService.categoryLabel}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-heading font-medium text-white leading-tight tracking-tight">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                {/* Description & Narrative */}
                <div>
                  <p className="text-sm sm:text-base text-[#0F2E23]/80 font-sans font-light leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                {/* Included Features List */}
                <div className="space-y-3 pt-3 border-t border-[#0F2E23]/8">
                  <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-[#2E6B57]">
                    Core Capabilities &amp; Inclusions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.highlights.map((feat: string, i: number) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F4EFE6]/70 border border-[#0F2E23]/6 text-xs text-[#0F2E23] font-sans"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#2E6B57] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Row */}
                <div className="pt-4 border-t border-[#0F2E23]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#0F2E23]/60">
                    <Clock className="w-4 h-4 text-[#2E6B57]" />
                    <span>24/7 Dedicated Concierge Response</span>
                  </div>

                  <a
                    href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                      `Hello Yalla Voyage, I would like to inquire about the ${activeService.title} service.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md font-sans"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SLA & Excellence Badges ── */}
      <section className="py-16 bg-white border-t border-b border-[#0F2E23]/10">
        <div className="container-wide">
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.08}>
            <div className="p-6 rounded-2xl bg-[#F4EFE6]/60 border border-[#0F2E23]/8 flex items-start gap-4 text-[#0F2E23]">
              <div className="w-12 h-12 rounded-xl bg-[#0F2E23] text-[#F4EFE6] flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#39C27D]" />
              </div>
              <div>
                <h4 className="font-heading text-lg text-[#0F2E23] font-semibold mb-1">VIP Confidentiality</h4>
                <p className="text-xs sm:text-sm text-[#0F2E23]/65 font-light leading-relaxed font-sans">
                  Strict non-disclosure standards for high-profile individuals, diplomats, and executive leadership.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F4EFE6]/60 border border-[#0F2E23]/8 flex items-start gap-4 text-[#0F2E23]">
              <div className="w-12 h-12 rounded-xl bg-[#0F2E23] text-[#F4EFE6] flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-[#39C27D]" />
              </div>
              <div>
                <h4 className="font-heading text-lg text-[#0F2E23] font-semibold mb-1">Guaranteed SLA</h4>
                <p className="text-xs sm:text-sm text-[#0F2E23]/65 font-light leading-relaxed font-sans">
                  Private jet charter manifests and tailored itineraries delivered within guaranteed response windows.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F4EFE6]/60 border border-[#0F2E23]/8 flex items-start gap-4 text-[#0F2E23]">
              <div className="w-12 h-12 rounded-xl bg-[#0F2E23] text-[#F4EFE6] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-[#39C27D]" />
              </div>
              <div>
                <h4 className="font-heading text-lg text-[#0F2E23] font-semibold mb-1">White-Glove Delivery</h4>
                <p className="text-xs sm:text-sm text-[#0F2E23]/65 font-light leading-relaxed font-sans">
                  Every journey managed by a dedicated senior travel designer on-ground from departure to return.
                </p>
              </div>
            </div>
          </StaggerReveal>
        </div>
      </section>
    </main>
  );
}
