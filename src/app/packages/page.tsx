'use client';

import { useState, useMemo } from 'react';
import { Sparkles, MessageCircle, Phone } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal, StaggerReveal } from '@/components/ui/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { PackageCard } from '@/components/packages/PackageCard';
import { packages } from '@/data/packages';
import { siteConfig } from '@/data/site';

type PackageFilter = 'all' | 'saudi' | 'luxury' | 'adventure' | 'corporate' | 'spiritual';

export default function PackagesPage() {
  const [filter, setFilter] = useState<PackageFilter>('all');

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
      <PageHero
        title="Packages"
        subtitle="Curated journeys for every traveler, every dream."
        image="/images/header-packages.jpg"
        alt="Signature Travel Packages"
        positionClass="object-center"
      />

      <section className="section-pad bg-[#F4EFE6]">
        <div className="container-wide">
          {/* Category Filter Pills */}
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
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  filter === tab.id
                    ? 'bg-[#0F2E23] text-[#F4EFE6] shadow-md scale-102'
                    : 'bg-white text-[#0F2E23]/70 hover:bg-white hover:text-[#0F2E23] border border-[#0F2E23]/8'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    filter === tab.id ? 'bg-[#2E6B57] text-white font-bold' : 'bg-[#0F2E23]/6 text-[#0F2E23]/60'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* ── High-Fidelity 3D Card Flipping Grid ── */}
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10" stagger={0.08}>
            {filtered.map((pkg, idx) => (
              <PackageCard key={pkg.slug} pkg={pkg} index={idx} />
            ))}
          </StaggerReveal>
        </div>
      </section>
    </main>
  );
}
