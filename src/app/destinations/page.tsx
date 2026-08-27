'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Calendar,
  Search,
  MessageCircle,
  Phone,
  Compass,
  MapPin,
  Globe2,
  CheckCircle2,
} from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal, StaggerReveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { destinations } from '@/data/destinations';
import { saudiDestinations } from '@/data/saudi';
import { siteConfig } from '@/data/site';

type RegionFilter = 'all' | 'saudi' | 'middle-east' | 'europe' | 'asia-islands';

export default function DestinationsPage() {
  const [filter, setFilter] = useState<RegionFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Merge and structure all destinations with rich luxury presentation
  const allDestinations = useMemo(() => {
    const saudiMapped = saudiDestinations.map((d) => {
      let saudiTags = ['UNESCO Heritage', 'Desert Oasis'];
      if (d.slug === 'alula') saudiTags = ['UNESCO Nabataean', 'Desert Oasis', 'Stargazing'];
      else if (d.slug === 'jeddah') saudiTags = ['Historic Al-Balad', 'Red Sea Waterfront', 'Art Scene'];
      else if (d.slug === 'riyadh') saudiTags = ['Kingdom Tower', 'Palace Dining', 'High-Octane Luxury'];
      else if (d.slug === 'diriyah') saudiTags = ['At-Turaif UNESCO', 'Najdi Heritage', 'Bujairi Terrace'];
      else if (d.slug === 'redsea') saudiTags = ['St. Regis Atoll', 'Pristine Coral Reefs', 'Yacht Charters'];
      else if (d.slug === 'disah') saudiTags = ['Canyon Springs', 'Palm Groves', '4x4 Expedition'];

      return {
        slug: d.slug,
        name: d.name,
        arabicName: d.arabicName,
        country: 'Saudi Arabia',
        tagline: d.tagline,
        description: d.description,
        image: d.image,
        href: `/explore-saudi#${d.slug}`,
        region: 'saudi' as const,
        bestSeason: 'Oct – Apr',
        tags: saudiTags,
      };
    });

    const intlMapped = destinations.map((d) => {
      let regionKey: 'middle-east' | 'europe' | 'asia-islands' = 'europe';
      if (d.slug.includes('uae') || d.slug.includes('qatar') || d.slug.includes('oman') || d.slug.includes('turkey')) {
        regionKey = 'middle-east';
      } else if (d.slug.includes('maldives') || d.slug.includes('japan') || d.slug.includes('asia') || d.slug.includes('bali')) {
        regionKey = 'asia-islands';
      }
      return {
        slug: d.slug,
        name: d.name,
        arabicName: '',
        country: d.country || (regionKey === 'middle-east' ? 'Middle East' : regionKey === 'asia-islands' ? 'Asia' : 'Europe'),
        tagline: d.tagline,
        description: d.description,
        image: d.image,
        href: d.href || `/contact`,
        region: regionKey,
        bestSeason: d.bestSeason || 'Year-Round',
        tags: d.tags || ['Private Sanctuary', 'Luxury Escapes'],
      };
    });

    return [...saudiMapped, ...intlMapped];
  }, []);

  const filtered = useMemo(() => {
    return allDestinations.filter((d) => {
      const matchesFilter =
        filter === 'all'
          ? true
          : filter === 'saudi'
          ? d.region === 'saudi'
          : filter === 'middle-east'
          ? d.region === 'middle-east'
          : filter === 'europe'
          ? d.region === 'europe'
          : d.region === 'asia-islands';

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        d.name.toLowerCase().includes(query) ||
        d.country.toLowerCase().includes(query) ||
        d.tagline.toLowerCase().includes(query) ||
        (d.arabicName && d.arabicName.includes(query)) ||
        d.tags.some((t) => t.toLowerCase().includes(query));

      return matchesFilter && matchesSearch;
    });
  }, [allDestinations, filter, searchQuery]);

  const counts = useMemo(() => {
    return {
      all: allDestinations.length,
      saudi: allDestinations.filter((d) => d.region === 'saudi').length,
      'middle-east': allDestinations.filter((d) => d.region === 'middle-east').length,
      europe: allDestinations.filter((d) => d.region === 'europe').length,
      'asia-islands': allDestinations.filter((d) => d.region === 'asia-islands').length,
    };
  }, [allDestinations]);

  return (
    <main className="bg-[#F4EFE6] text-[#0F2E23] overflow-hidden">
      {/* ── CINEMATIC PAGE HERO BANNER ── */}
      <PageHero
        title="Destinations"
        subtitle="Explore our breathtaking destinations carefully selected for unforgettable adventures."
        image="/images/header-destinations.jpg"
        alt="Extraordinary Global Destinations"
        positionClass="object-center"
      />

      {/* ── DESTINATION EXPLORER SECTION ── */}
      <section className="section-pad bg-[#F4EFE6]">
        <div className="container-wide">
          
          {/* Section Introduction Heading */}
          <SectionHeading
            badge="01 • WORLD SANCTUARIES & EXPEDITIONS"
            title="Extraordinary Global Horizons."
            description="From the ancient sandstone sanctuaries of Saudi Arabia to remote Mediterranean coastlines and Zen temples, discover hand-tailored destinations designed for the discerning traveler."
          />

          {/* Controls Bar: Filter Pills & Search */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 pb-8 border-b border-[#0F2E23]/10">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { id: 'all', label: 'All Destinations', count: counts.all },
                { id: 'saudi', label: 'Saudi Arabia', count: counts.saudi },
                { id: 'middle-east', label: 'Middle East & Gulf', count: counts['middle-east'] },
                { id: 'europe', label: 'Europe & Med', count: counts.europe },
                { id: 'asia-islands', label: 'Islands & Asia', count: counts['asia-islands'] },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as RegionFilter)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    filter === tab.id
                      ? 'bg-[#0F2E23] text-[#F4EFE6] shadow-lg scale-102 ring-2 ring-[#0F2E23]/20'
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

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-[#0F2E23]/40 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by city, country, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white border border-[#0F2E23]/15 text-xs text-[#0F2E23] placeholder-[#0F2E23]/45 focus:outline-none focus:border-[#2E6B57] focus:ring-2 focus:ring-[#2E6B57]/20 shadow-xs transition-all font-sans"
              />
            </div>
          </div>

          {/* Clean, Elevated Destination Cards Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-[#0F2E23]/10 shadow-sm max-w-xl mx-auto px-6">
              <div className="w-12 h-12 rounded-full bg-[#0F2E23]/5 text-[#2E6B57] flex items-center justify-center mx-auto mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <p className="text-xl font-display text-[#0F2E23] font-normal mb-2">No destinations found</p>
              <p className="text-xs text-[#0F2E23]/60 font-sans font-light mb-6">
                We couldn&apos;t find any destination matching &ldquo;{searchQuery}&rdquo;. Try another search term or reset filters.
              </p>
              <button
                onClick={() => {
                  setFilter('all');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 rounded-full bg-[#0F2E23] text-[#F4EFE6] text-xs font-semibold uppercase tracking-wider hover:bg-[#2E6B57] transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.06}>
              {filtered.map((dest) => (
                <Link
                  key={dest.slug}
                  href={dest.href}
                  className="group relative block aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#06150E] cursor-pointer"
                >
                  {/* Full-Bleed Background Image */}
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Dark Vignette & Bottom Text Contrast Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-40% to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent h-24 z-10 pointer-events-none" />

                  {/* Top Right Floating Hover Arrow */}
                  <div className="relative z-20 p-5 sm:p-6 flex items-center justify-end">
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/25 group-hover:bg-[#39C27D] group-hover:text-[#06150E] group-hover:border-[#39C27D] transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom Text Overlay (Accoutrement Tours Style: Date/Season on top, Big White Serif Title, Subtitle) */}
                  <div className="absolute bottom-0 inset-x-0 z-20 p-6 sm:p-8">
                    {/* Line 1: Best Season / Country in Uppercase Mono */}
                    <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] !text-white/90 font-semibold block mb-1 drop-shadow-sm">
                      {dest.bestSeason ? `${dest.bestSeason} • ${dest.country}` : dest.country}
                    </span>

                    {/* Line 2: Large Serif Destination Title in Pure White */}
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                        color: '#FFFFFF',
                      }}
                      className="text-3xl sm:text-4xl lg:text-[38px] !text-white font-normal leading-[1.08] tracking-tight group-hover:text-[#39C27D] transition-colors drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                    >
                      {dest.name}
                    </h3>

                    {/* Line 3: Subtitle / Curator Experience Tagline in Clean White */}
                    <p
                      style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                      className="text-xs sm:text-[13.5px] font-sans !text-white/85 font-light leading-snug mt-2 line-clamp-1 drop-shadow-sm"
                    >
                      {dest.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </StaggerReveal>
          )}

          {/* ── BESPOKE DESTINATION CONSULTATION BANNER ── */}
          <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-[#0F2E23] text-white border border-[#2E6B57]/40 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#39C27D]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#39C27D] font-semibold block">
                  Private Global Portfolio
                </span>
                <h3 className="text-display text-2xl sm:text-3xl lg:text-4xl text-[#F4EFE6] font-light leading-tight">
                  Seeking an unlisted private sanctuary?
                </h3>
                <p className="text-[#F4EFE6]/75 text-xs sm:text-sm leading-relaxed font-light font-sans max-w-2xl">
                  Beyond our featured destinations, Yalla Voyage architects confidential journeys, private island buyouts, and remote superyacht charters across 60+ countries under strict NDA protocols.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#39C27D] pt-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Strict Discretion
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 24/7 Concierge
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Private Jet Access
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-end">
                <MagneticButton
                  href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                    'Hello Yalla Voyage, I would like to consult with a Senior Travel Designer regarding a private custom destination.'
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
                  Submit Bespoke Request <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}


