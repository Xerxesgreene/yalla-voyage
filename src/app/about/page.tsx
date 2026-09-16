'use client';

import Image from 'next/image';
import { ArrowRight, Compass, Shield, Heart, Award } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal, StaggerReveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { siteConfig } from '@/data/site';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t, isRTL } = useLanguage();
  const a = t.aboutPage;

  return (
    <main className="bg-[#F4EFE6] text-[#0F2E23] overflow-hidden">
      <PageHero
        title={a.heroTitle}
        subtitle={a.heroSubtitle}
        image="/images/header-real-about.jpg"
        alt="Oia Santorini Cliffside Caldera, Greece"
        positionClass="object-center"
      />

      {/* ── SECTION 1: Brand Philosophy & Story ── */}
      <section className="section-pad bg-[#F4EFE6]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2E6B57] font-semibold block mb-2">
                  {a.genesisBadge}
                </span>
                <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl text-[#0F2E23] leading-tight font-light">
                  {a.genesisTitle}
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-xl sm:text-2xl text-[#0F2E23] font-display font-light leading-snug">
                  {a.genesisQuote}
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-[#0F2E23]/70 text-sm sm:text-base leading-relaxed font-light font-sans">
                  {a.genesisDesc}
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="pt-2">
                  <MagneticButton
                    href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                      'Hello Yalla Voyage, I would love to learn more about your private travel philosophy.'
                    )}`}
                    target="_blank"
                    variant="primary"
                  >
                    <span>{a.curatorBtn}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#0F2E23]/10 group bg-white">
                  <Image
                    src="/images/alula-luxury-sanctuary.jpg"
                    alt="Yalla Voyage AlUla Expedition"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white backdrop-blur-md bg-[#0F2E23]/80 p-5 rounded-2xl border border-white/10">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#39C27D] mb-1">{a.standardBadge}</p>
                    <p className="text-sm font-light font-sans text-[#F4EFE6]">
                      {a.standardQuote}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Core Values Grid (Concise) ── */}
      <section className="section-pad bg-white border-t border-b border-[#0F2E23]/10">
        <div className="container-wide">
          <SectionHeading
            badge={a.pillarsBadge}
            title={a.pillarsTitle}
            description={a.pillarsDesc}
          />

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
            <div className="p-6 rounded-2xl bg-[#F4EFE6]/60 border border-[#0F2E23]/8 hover:border-[#2E6B57]/30 hover:bg-[#F4EFE6] transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#0F2E23] text-[#39C27D] flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#0F2E23] mb-1.5">{a.pillar1Title}</h3>
                <p className="text-xs sm:text-sm text-[#0F2E23]/65 font-light leading-relaxed font-sans">
                  {a.pillar1Desc}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F4EFE6]/60 border border-[#0F2E23]/8 hover:border-[#2E6B57]/30 hover:bg-[#F4EFE6] transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#0F2E23] text-[#39C27D] flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#0F2E23] mb-1.5">{a.pillar2Title}</h3>
                <p className="text-xs sm:text-sm text-[#0F2E23]/65 font-light leading-relaxed font-sans">
                  {a.pillar2Desc}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F4EFE6]/60 border border-[#0F2E23]/8 hover:border-[#2E6B57]/30 hover:bg-[#F4EFE6] transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#0F2E23] text-[#39C27D] flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#0F2E23] mb-1.5">{a.pillar3Title}</h3>
                <p className="text-xs sm:text-sm text-[#0F2E23]/65 font-light leading-relaxed font-sans">
                  {a.pillar3Desc}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F4EFE6]/60 border border-[#0F2E23]/8 hover:border-[#2E6B57]/30 hover:bg-[#F4EFE6] transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#0F2E23] text-[#39C27D] flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#0F2E23] mb-1.5">{a.pillar4Title}</h3>
                <p className="text-xs sm:text-sm text-[#0F2E23]/65 font-light leading-relaxed font-sans">
                  {a.pillar4Desc}
                </p>
              </div>
            </div>
          </StaggerReveal>
        </div>
      </section>

    </main>
  );
}

