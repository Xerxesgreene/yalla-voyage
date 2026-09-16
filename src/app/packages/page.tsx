'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { PackageCard } from '@/components/packages/PackageCard';
import { packages, TravelPackage } from '@/data/packages';
import { siteConfig } from '@/data/site';

import { useLanguage } from '@/context/LanguageContext';

type PackageFilter = 'all' | 'top' | 'saudi' | 'special';

export default function PackagesPage() {
  const { t, isRTL } = useLanguage();
  const p = t.packagesPage;
  const [filter, setFilter] = useState<PackageFilter>('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return packages;
    return packages.filter((pkg) => pkg.category === filter);
  }, [filter]);

  const counts = useMemo(() => {
    return {
      all: packages.length,
      top: packages.filter((pkg) => pkg.category === 'top').length,
      saudi: packages.filter((pkg) => pkg.category === 'saudi').length,
      special: packages.filter((pkg) => pkg.category === 'special').length,
    };
  }, []);

  return (
    <main className="bg-[#F4EFE6] text-[#0F2E23] overflow-hidden">
      {/* ── CINEMATIC HERO BANNER ── */}
      <PageHero
        title={p.heroTitle}
        subtitle={p.heroSubtitle}
        image="/images/header-real-packages.jpg"
        alt="Mount Fuji and Chureito Pagoda, Japan"
        positionClass="object-center"
      />

      {/* ── PACKAGES SHOWCASE SECTION ── */}
      <section className="section-pad bg-[#F4EFE6]">
        <div className="container-wide">
          
          {/* Section Heading */}
          <SectionHeading
            badge={p.showcaseBadge}
            title={p.showcaseTitle}
            description={p.showcaseDesc}
          />

          {/* Clean Controls / Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap mb-12 pb-8 border-b border-[#0F2E23]/10">
            {[
              { id: 'all', label: p.filterAll, count: counts.all },
              { id: 'top', label: p.filterTop, count: counts.top },
              { id: 'saudi', label: p.filterSaudi, count: counts.saudi },
              { id: 'special', label: p.filterSpecial, count: counts.special },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as PackageFilter)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#0F2E23] text-[#F4EFE6] shadow-md scale-102 ring-2 ring-[#0F2E23]/20'
                    : 'bg-white text-[#0F2E23]/70 hover:bg-white hover:text-[#0F2E23] border border-[#0F2E23]/10 hover:border-[#2E6B57]/30 shadow-xs'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium transition-colors ${
                    filter === tab.id ? 'bg-[#2E6B57] text-white' : 'bg-[#0F2E23]/6 text-[#0F2E23]/60'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* ── Package Cards Stream (Matching Services Cards Layout) ── */}
          <div className="space-y-10">
            {filtered.map((pkg, idx) => (
              <Reveal key={pkg.slug} delay={idx * 0.05}>
                <PackageCard pkg={pkg} index={idx} />
              </Reveal>
            ))}
          </div>

          {/* ── BESPOKE ITINERARY ARCHITECT BANNER ── */}
          <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-[#0F2E23] text-white border border-[#2E6B57]/40 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#39C27D]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#39C27D] font-semibold block">
                  {p.studioBadge}
                </span>
                <h3 className="text-display text-2xl sm:text-3xl lg:text-4xl text-[#F4EFE6] font-light leading-tight">
                  {p.studioTitle}
                </h3>
                <p className="text-[#F4EFE6]/75 text-xs sm:text-sm leading-relaxed font-light font-sans max-w-2xl">
                  {p.studioDesc}
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#39C27D] pt-1 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {p.studioPill1}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {p.studioPill2}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {p.studioPill3}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-end">
                <MagneticButton
                  href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                    'Hello Yalla Voyage, I would like to design a bespoke private travel package.'
                  )}`}
                  target="_blank"
                  variant="primary"
                  className="w-full text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" /> {p.chatCuratorBtn}
                </MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-[#F4EFE6] hover:bg-white/10 text-xs font-semibold uppercase tracking-wider transition-all duration-300 font-sans text-center"
                >
                  <span>{p.inquireOnlineBtn}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
