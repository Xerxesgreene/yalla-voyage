'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Sparkles, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
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

  return (
    <main className="bg-[#F4EFE6] text-[#0F2E23] overflow-hidden">
      {/* ── CINEMATIC HERO BANNER ── */}
      <PageHero
        title="Packages"
        subtitle="Handcrafted luxury itineraries across Saudi Arabia and iconic global horizons."
        image="/images/header-packages.jpg"
        alt="Signature Travel Packages"
        positionClass="object-center"
      />

      {/* ── PACKAGES SHOWCASE SECTION ── */}
      <section className="section-pad bg-[#F4EFE6]">
        <div className="container-wide">
          
          {/* Standard Left-Aligned Section Heading */}
          <SectionHeading
            badge="01 • CURATED ITINERARIES"
            title="Journeys Designed Without Compromise."
            description="From royal desert sanctuaries in AlUla to private Mediterranean coastlines and spiritual retreats — explore our hand-tailored expedition itineraries."
          />

          {/* Clean Controls / Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap mb-12 pb-8 border-b border-[#0F2E23]/10">
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

          {/* ── Large Horizontal Editorial Itinerary Cards List ── */}
          <div className="space-y-8 sm:space-y-10">
            {filtered.map((pkg, idx) => (
              <Reveal key={pkg.slug} delay={idx * 0.05}>
                <PackageCard
                  pkg={pkg}
                  index={idx}
                  onSelect={(selected) => setSelectedPackage(selected)}
                />
              </Reveal>
            ))}
          </div>

          {/* ── BESPOKE ITINERARY ARCHITECT BANNER ── */}
          <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-[#0F2E23] text-white border border-[#2E6B57]/40 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#39C27D]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#39C27D] font-semibold block">
                  Bespoke Itinerary Studio
                </span>
                <h3 className="text-display text-2xl sm:text-3xl lg:text-4xl text-[#F4EFE6] font-light leading-tight">
                  Need a fully customized itinerary for your dates?
                </h3>
                <p className="text-[#F4EFE6]/75 text-xs sm:text-sm leading-relaxed font-light font-sans max-w-2xl">
                  Every package can be tailored to your exact pace, group size, and preferred accommodations — from private aviation connections to VIP palace dinners.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#39C27D] pt-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Flexible Dates
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 24/7 Concierge
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Private Transfers
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
