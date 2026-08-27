'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { PackageCard } from '@/components/packages/PackageCard';
import { PackageModal } from '@/components/packages/PackageModal';
import { packages, TravelPackage } from '@/data/packages';
import { siteConfig } from '@/data/site';

type PackageFilter = 'all' | 'saudi' | 'luxury' | 'adventure' | 'corporate' | 'spiritual';

export default function PackagesPage() {
  const [filter, setFilter] = useState<PackageFilter>('all');
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);

  const filtered = useMemo(() => {
    if (filter === 'all') return packages;
    return packages.filter((pkg) => pkg.category === filter);
  }, [filter]);

  const counts = useMemo(() => {
    return {
      all: packages.length,
      saudi: packages.filter((p) => p.category === 'saudi').length,
      luxury: packages.filter((p) => p.category === 'luxury').length,
      adventure: packages.filter((p) => p.category === 'adventure').length,
      corporate: packages.filter((p) => p.category === 'corporate').length,
      spiritual: packages.filter((p) => p.category === 'spiritual').length,
    };
  }, []);

  // Split filtered packages into left and right columns for the noth.in staggered layout
  const leftColumnPackages = useMemo(() => {
    return filtered.filter((_, idx) => idx % 2 === 0);
  }, [filtered]);

  const rightColumnPackages = useMemo(() => {
    return filtered.filter((_, idx) => idx % 2 !== 0);
  }, [filtered]);

  return (
    <main className="bg-[#081812] text-[#F4EFE6] min-h-screen overflow-hidden">
      {/* ── CINEMATIC PAGE HERO ── */}
      <PageHero
        title="Packages"
        subtitle="Curated journeys designed for those who refuse the ordinary."
        image="/images/header-packages.jpg"
        alt="Signature Travel Packages"
        positionClass="object-center"
      />

      {/* ── NOTH.IN STYLE STAGGERED EDITORIAL SHOWCASE ── */}
      <section className="section-pad bg-[#081812] text-[#F4EFE6]">
        <div className="container-wide">
          
          {/* Top Section Manifesto & Category Tabs */}
          <div className="mb-14 pb-8 border-b border-[#2E6B57]/30">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
              {/* Left Badge & Header */}
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13382B] text-[#39C27D] text-[11px] font-mono font-bold tracking-widest uppercase mb-4 border border-[#39C27D]/30 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39C27D] animate-pulse inline-block" />
                  <span>01 • CURATED EXPEDITIONS</span>
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#F4EFE6] leading-[1.08] tracking-tight max-w-xl">
                  Handcrafted journeys. <span className="text-[#39C27D] italic font-serif">Uncompromised pacing.</span>
                </h2>
              </div>

              {/* Right Manifesto Text (noth.in style) */}
              <div className="max-w-md lg:text-right">
                <p className="text-xl sm:text-2xl text-[#F4EFE6] font-display font-light leading-snug">
                  Ordinary trips follow maps.
                  <br />
                  <span className="text-[#39C27D] font-medium">Great journeys transform you.</span>
                </p>
              </div>
            </div>

            {/* Filter Pills Controls */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { id: 'all', label: 'All Packages', count: counts.all },
                { id: 'saudi', label: 'Saudi Signature', count: counts.saudi },
                { id: 'luxury', label: 'Luxury & Islands', count: counts.luxury },
                { id: 'adventure', label: 'Expedition & Safari', count: counts.adventure },
                { id: 'corporate', label: 'Corporate & MICE', count: counts.corporate },
                { id: 'spiritual', label: 'Spiritual Umrah+', count: counts.spiritual },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as PackageFilter)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    filter === tab.id
                      ? 'bg-[#39C27D] text-[#06150E] shadow-lg scale-102 font-bold'
                      : 'bg-[#13382B]/60 text-[#DAD6CD]/80 hover:bg-[#13382B] hover:text-white border border-[#2E6B57]/40 shadow-xs'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium transition-colors ${
                      filter === tab.id ? 'bg-[#06150E] text-[#39C27D]' : 'bg-white/10 text-white/70'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Asymmetrical Staggered 2-Column Grid (Noth.in Style) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-16 items-start">
            {/* Left Column */}
            <div className="space-y-2">
              {leftColumnPackages.map((pkg, idx) => (
                <Reveal key={pkg.slug} delay={idx * 0.08}>
                  <PackageCard
                    pkg={pkg}
                    index={idx * 2}
                    onSelect={(selected) => setSelectedPackage(selected)}
                  />
                </Reveal>
              ))}
            </div>

            {/* Right Column (Staggered Downwards like noth.in) */}
            <div className="space-y-2 lg:pt-28">
              {rightColumnPackages.map((pkg, idx) => (
                <Reveal key={pkg.slug} delay={idx * 0.08 + 0.1}>
                  <PackageCard
                    pkg={pkg}
                    index={idx * 2 + 1}
                    onSelect={(selected) => setSelectedPackage(selected)}
                  />
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── BESPOKE CONSULTATION BANNER ── */}
          <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-[#0F2E23] text-white border border-[#2E6B57]/40 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#39C27D]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#39C27D] font-semibold block">
                  Private Curations Desk
                </span>
                <h3 className="text-display text-2xl sm:text-3xl lg:text-4xl text-[#F4EFE6] font-light leading-tight">
                  Looking for a custom itinerary built from scratch?
                </h3>
                <p className="text-[#DAD6CD]/80 text-xs sm:text-sm leading-relaxed font-light font-sans max-w-2xl">
                  Connect with our senior Saudi travel designers to architect a confidential, custom-tailored journey with private aviation and palace access.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#39C27D] pt-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Flexible Pacing
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 24/7 Concierge
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Strict Discretion
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-end">
                <MagneticButton
                  href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                    'Hello Yalla Voyage, I would like to design a custom bespoke package with your senior travel curator.'
                  )}`}
                  target="_blank"
                  variant="primary"
                  className="w-full text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" /> Chat With Senior Designer
                </MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-[#F4EFE6] hover:bg-white/10 text-xs font-semibold uppercase tracking-wider transition-all duration-300 font-sans text-center"
                >
                  Inquire Online <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── INTERACTIVE PACKAGE MODAL ── */}
      <PackageModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />
    </main>
  );
}
