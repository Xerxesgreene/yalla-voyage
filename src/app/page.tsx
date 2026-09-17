'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Globe, Compass, Sparkles, Award, ShieldCheck, Star, BookOpen } from 'lucide-react';
import { HeroScene } from '@/components/hero/HeroScene';
import { Reveal, StaggerReveal } from '@/components/ui/Reveal';
import { BlurReveal } from '@/components/ui/BlurReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { siteConfig } from '@/data/site';
import { journalArticles } from '@/data/journal';
import { HaoqiServicesSection } from '@/components/services/HaoqiServicesSection';
import { DriftWallDestinations } from '@/components/destinations/DriftWallDestinations';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { AccordionGallery } from '@/components/ui/AccordionGallery';
import { TraveloProcessSection } from '@/components/home/TraveloProcessSection';
import { CylinderGallery } from '@/components/home/CylinderGallery';

import { useLanguage } from '@/context/LanguageContext';

/* ── Section: Who We Are (Warm Ivory #F4EFE6) ── */
function WhoWeAre() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#F4EFE6] text-[#0F2E23] border-t border-[#0F2E23]/10 relative py-20">
      <div className="container-wide relative z-10">
        {/* Heading badge matching other sections */}
        <Reveal y={15}>
          <div className="pb-5 mb-8 border-b border-[#0F2E23]/10 flex items-center justify-between">
            <span className="inline-flex items-center gap-3 sm:gap-3.5 px-6 py-3 sm:px-8 sm:py-3.5 md:px-9 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest uppercase transition-all shadow-lg bg-[#0F2E23] text-[#F4EFE6] border border-[#2E6B57]/60">
              <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#39C27D] animate-pulse inline-block shadow-[0_0_14px_#39C27D]" />
              <span>{t.whoWeAre.badge}</span>
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: heading + body text */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal delay={0.05}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#0F2E23] font-heading font-medium tracking-tight leading-tight">
                {t.whoWeAre.title}
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-[#0F2E23]/85 text-base sm:text-lg leading-relaxed font-normal font-sans">
                {t.whoWeAre.para1Prefix}
                <strong className="font-semibold text-[#0F2E23]">{t.whoWeAre.brandName}</strong>
                {t.whoWeAre.para1Suffix}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-[#0F2E23]/85 text-base sm:text-lg leading-relaxed font-normal font-sans">
                {t.whoWeAre.para2}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="pt-2 flex items-center gap-4">
                <MagneticButton href="/about" variant="primary">
                  {t.whoWeAre.philosophyBtn} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          {/* Right: drum — no Reveal wrapper so no translateY offset */}
          <div className="lg:col-span-6 flex items-start justify-center overflow-hidden">
            <CylinderGallery />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section: What Sets Us Apart (With Profile Text & 20+ Years Experience) ── */
function WhatSetsUsApart() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: t.whatSetsUsApart.pillar1Title,
      description: t.whatSetsUsApart.pillar1Desc,
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: t.whatSetsUsApart.pillar2Title,
      description: t.whatSetsUsApart.pillar2Desc,
    },
    {
      icon: <Compass className="w-5 h-5" />,
      title: t.whatSetsUsApart.pillar3Title,
      description: t.whatSetsUsApart.pillar3Desc,
    },
  ];

  return (
    <section className="section-pad bg-white text-[#0F2E23] border-t border-[#0F2E23]/10 relative">
      <div className="container-wide">
        <SectionHeading
          badge={t.whatSetsUsApart.badge}
          title={t.whatSetsUsApart.title}
          description={t.whatSetsUsApart.subtitle}
        />

        {/* Narrative Split: Brand Profile Narrative + Feature Highlight Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch mb-14">
          {/* Left Text Column: Official Profile Narrative */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-3 sm:gap-3.5 px-6 py-3 sm:px-8 sm:py-3.5 md:px-9 md:py-4 rounded-full bg-[#0F2E23] text-[#F4EFE6] text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest uppercase shadow-lg border border-[#2E6B57]/60 w-fit">
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#39C27D] animate-pulse inline-block shadow-[0_0_14px_#39C27D]" />
                <span>{t.whatSetsUsApart.expBadge}</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-lg sm:text-xl md:text-2xl text-[#0F2E23] font-heading font-medium leading-relaxed">
                {t.whatSetsUsApart.narrative1}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-[#0F2E23]/75 text-sm sm:text-base leading-relaxed font-light font-sans">
                {t.whatSetsUsApart.narrative2}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-[#0F2E23]/75 text-sm sm:text-base leading-relaxed font-light font-sans">
                {t.whatSetsUsApart.narrative3Prefix}
                <strong className="font-semibold text-[#0F2E23]">{t.whoWeAre.brandName}</strong>
                {t.whatSetsUsApart.narrative3Suffix}
              </p>
            </Reveal>
          </div>

          {/* Right Highlight Box: Luxury Legacy Card */}
          <div className="lg:col-span-5 flex">
            <Reveal delay={0.2} className="w-full">
              <div className="h-full bg-[#0F2E23] text-[#F4EFE6] rounded-3xl p-8 sm:p-10 border border-[#2E6B57]/50 shadow-xl flex flex-col justify-between relative overflow-hidden">
                {/* Atmospheric ambient glow */}
                <div className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#39C27D]/15 blur-3xl" />

                <div className="space-y-6 relative z-10">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#39C27D] font-semibold block">
                    {t.whatSetsUsApart.standardBadge}
                  </span>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#13382B] border border-[#2E6B57]/60 flex items-center justify-center text-[#39C27D] flex-shrink-0 mt-0.5">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading text-lg font-medium text-[#F4EFE6]">{t.whatSetsUsApart.masteryTitle}</h4>
                        <p className="text-xs text-[#DAD6CD]/75 font-sans font-light mt-0.5">{t.whatSetsUsApart.masteryDesc}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#13382B] border border-[#2E6B57]/60 flex items-center justify-center text-[#39C27D] flex-shrink-0 mt-0.5">
                        <Star className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading text-lg font-medium text-[#F4EFE6]">{t.whatSetsUsApart.accessTitle}</h4>
                        <p className="text-xs text-[#DAD6CD]/75 font-sans font-light mt-0.5">{t.whatSetsUsApart.accessDesc}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#13382B] border border-[#2E6B57]/60 flex items-center justify-center text-[#39C27D] flex-shrink-0 mt-0.5">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading text-lg font-medium text-[#F4EFE6]">{t.whatSetsUsApart.legacyTitle}</h4>
                        <p className="text-xs text-[#DAD6CD]/75 font-sans font-light mt-0.5">{t.whatSetsUsApart.legacyDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#2E6B57]/40 flex items-center justify-between relative z-10">
                  <span className="text-xs font-mono text-[#DAD6CD]/60">{t.whatSetsUsApart.conciergeLabel}</span>
                  <Link
                    href="/contact"
                    className="text-xs font-mono font-semibold uppercase tracking-wider text-[#39C27D] hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{t.whatSetsUsApart.inquireNow}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-90" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.08}>
          {pillars.map((item) => (
            <div
              key={item.title}
              className="group bg-[#0F2E23] text-[#F4EFE6] rounded-2xl p-7 border border-[#2E6B57]/40 hover:border-[#39C27D] hover:shadow-2xl transition-all duration-400 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#13382B] border border-[#2E6B57]/60 flex items-center justify-center text-[#39C27D] mb-5 group-hover:bg-[#2E6B57] group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl mb-2 text-[#F4EFE6] font-heading font-medium tracking-tight group-hover:text-[#39C27D] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#DAD6CD]/80 text-sm leading-relaxed font-light font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

/* ── Explore Saudi: Discover Saudi Like Never Before, From Ancient Wonders to Modern Marvels ── */
function ExploreSaudi() {
  const { t } = useLanguage();

  const saudiAccordionDestinations = [
    {
      image: '/images/saudi-alula-proper.png',
      label: t.exploreSaudi.destinations.alula.label,
      sublabel: t.exploreSaudi.destinations.alula.sublabel,
      link: '/explore-saudi',
    },
    {
      image: '/images/saudi-jeddah-proper.png',
      label: t.exploreSaudi.destinations.jeddah.label,
      sublabel: t.exploreSaudi.destinations.jeddah.sublabel,
      link: '/explore-saudi',
    },
    {
      image: '/images/saudi-diriyah.png',
      label: t.exploreSaudi.destinations.riyadh.label,
      sublabel: t.exploreSaudi.destinations.riyadh.sublabel,
      link: '/explore-saudi',
    },
    {
      image: '/images/saudi-madinah-proper.png',
      label: t.exploreSaudi.destinations.madinah.label,
      sublabel: t.exploreSaudi.destinations.madinah.sublabel,
      link: '/explore-saudi',
    },
    {
      image: '/images/saudi-disah.png',
      label: t.exploreSaudi.destinations.disah.label,
      sublabel: t.exploreSaudi.destinations.disah.sublabel,
      link: '/explore-saudi',
    },
  ];

  return (
    <section className="section-pad bg-[#081812] text-[#F4EFE6] border-t border-[#2E6B57]/30 relative overflow-hidden">
      {/* Ambient Lighting Glows */}
      <div className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-[#39C27D]/8 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full bg-[#2E6B57]/12 blur-[150px]" />

      <div className="container-wide relative z-10">
        <BlurReveal delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-3 sm:gap-3.5 px-6 py-3 sm:px-8 sm:py-3.5 md:px-9 md:py-4 rounded-full bg-[#13382B] text-[#F4EFE6] text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest uppercase mb-6 border border-[#39C27D]/40 shadow-lg">
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#39C27D] animate-pulse inline-block shadow-[0_0_14px_#39C27D]" />
                <span>{t.exploreSaudi.badge}</span>
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight leading-[1.08] text-[#F4EFE6]">
                {t.exploreSaudi.title}
              </h2>
              <p className="mt-3 text-base sm:text-lg lg:text-xl text-[#DAD6CD]/80 font-light leading-relaxed font-sans max-w-2xl">
                {t.exploreSaudi.subtitle}
              </p>
            </div>

            <Link
              href="/explore-saudi"
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#13382B] border border-[#2E6B57]/50 text-xs font-mono font-semibold uppercase tracking-wider text-[#F4EFE6] hover:border-[#39C27D] hover:bg-[#2E6B57] transition-all self-start md:self-auto flex-shrink-0 font-sans shadow-md"
            >
              <span>{t.exploreSaudi.seeAll}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#39C27D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90 transition-transform" />
            </Link>
          </div>
        </BlurReveal>

        {/* Interactive ReactBits GSAP Accordion Gallery */}
        <BlurReveal delay={0.15}>
          <AccordionGallery
            items={saudiAccordionDestinations}
            defaultIndex={0}
            expandRatio={0.46}
            trigger="hover"
            accentColor="#39C27D"
            overlayColor="#0F2E23"
            textColor="#F4EFE6"
            grayscale={true}
            showLabels={true}
            duration={0.65}
            ease="power3.out"
            parallax={0.5}
            tilt={6}
            stagger={0.06}
            height={480}
            gap={12}
            radius={20}
            orientation="horizontal"
          />
        </BlurReveal>

        <BlurReveal delay={0.25}>
          <div className="text-center mt-12">
            <MagneticButton href="/explore-saudi" variant="primary">
              {t.exploreSaudi.discoverBtn} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </MagneticButton>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}

/* ── Section: Travel Journal ── */
function TravelJournal() {
  const { t } = useLanguage();
  const featuredArticle =
    journalArticles.find((a) => a.slug === 'guide-to-alula') || journalArticles[0];

  return (
    <section className="section-pad bg-white text-[#0F2E23] border-t border-[#0F2E23]/10">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-3 sm:gap-3.5 px-6 py-3 sm:px-8 sm:py-3.5 md:px-9 md:py-4 rounded-full bg-[#0F2E23] text-[#F4EFE6] text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest uppercase shadow-lg border border-[#2E6B57]/60 w-fit mb-4">
              <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#39C27D] animate-pulse inline-block shadow-[0_0_14px_#39C27D]" />
              <span>{t.journal.badge}</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium tracking-tight text-[#0F2E23] leading-tight">
              {t.journal.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#0F2E23]/70 font-light max-w-2xl font-sans">
              {t.journal.subtitle}
            </p>
          </div>

          <Link
            href="/travel-journal"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#13382B] border border-[#2E6B57]/50 text-xs font-mono font-semibold uppercase tracking-wider text-[#F4EFE6] hover:border-[#39C27D] hover:bg-[#2E6B57] transition-all self-start md:self-auto flex-shrink-0 font-sans shadow-md"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#39C27D]" />
            <span>{t.journal.exploreBtn}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#39C27D] group-hover:translate-x-1 rtl:rotate-180 transition-transform" />
          </Link>
        </div>

        {/* Featured Journal Dispatch in Horizontal Split Layout */}
        <Reveal>
          <div className="bg-[#F4EFE6] rounded-3xl overflow-hidden border border-[#0F2E23]/10 hover:border-[#2E6B57]/40 shadow-sm hover:shadow-xl transition-all duration-500 text-[#0F2E23] mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Image Column */}
              <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[340px] lg:min-h-[400px] overflow-hidden bg-[#0F2E23]/5">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full text-[10.5px] font-mono font-semibold uppercase tracking-widest bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-xs">
                    {t.journal.featuredBadge}
                  </span>
                </div>
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-xs font-mono text-[#2E6B57] font-semibold">
                    <span className="uppercase tracking-wider">{featuredArticle.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#0F2E23]/50">
                      {t.journal.readTime}
                    </span>
                  </div>

                  <Link href={`/travel-journal/${featuredArticle.slug}`}>
                    <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#0F2E23] mb-4 leading-tight hover:text-[#2E6B57] transition-colors tracking-tight cursor-pointer">
                      {t.journal.featuredTitle}
                    </h3>
                  </Link>

                  <p className="text-[#0F2E23]/70 text-sm sm:text-base leading-relaxed mb-6 font-light font-sans">
                    {t.journal.featuredExcerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#0F2E23]/8 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#0F2E23]/50">
                    {t.journal.editorialLabel}
                  </span>
                  <Link
                    href={`/travel-journal/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2E6B57] hover:text-[#0F2E23] transition-colors font-sans group"
                  >
                    <span>{t.journal.readMore}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:rotate-180 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="text-center mt-8">
            <Link
              href="/travel-journal"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0F2E23] text-[#F4EFE6] hover:bg-[#2E6B57] hover:text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] font-sans group"
            >
              <BookOpen className="w-4 h-4 text-[#39C27D]" />
              <span>{t.journal.exploreBtn}</span>
              <ArrowRight className="w-4 h-4 text-[#39C27D] group-hover:translate-x-1 rtl:rotate-180 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Main Home Page Component ── */
/* Services section goes ABOVE Saudi section in homepage */
export default function HomePage() {
  return (
    <main className="w-full relative overflow-visible bg-[#F4EFE6]">
      <HeroScene />
      <WhoWeAre />
      <WhatSetsUsApart />
      <HaoqiServicesSection />
      <ExploreSaudi />
      <DriftWallDestinations />
      <TestimonialsSection />
      <TraveloProcessSection />
      <TravelJournal />
    </main>
  );
}
