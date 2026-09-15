'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { DriftWall, DriftWallItem } from '@/components/ui/DriftWall';

const destinationsData: DriftWallItem[] = [
  { image: '/images/saudi-hegra.png', title: 'AlUla Hegra • Saudi', href: '/explore-saudi' },
  { image: '/images/dest-paris.png', title: 'Paris, France', href: '/destinations' },
  { image: '/images/dest-mauritius.jpg', title: 'Mauritius • Indian Ocean', href: '/destinations' },
  { image: '/images/pkg-egypt.jpg', title: 'Giza & Nile • Egypt', href: '/destinations' },
  { image: '/images/dest-italy.jpg', title: 'Amalfi Coast • Italy', href: '/destinations' },
  { image: '/images/dest-switzerland.jpg', title: 'Swiss Alps • Switzerland', href: '/destinations' },
  { image: '/images/dest-uae.jpg', title: 'Dubai & Abu Dhabi • UAE', href: '/destinations' },
  { image: '/images/dest-maldives.jpg', title: 'Maldives Overwater Lagoon', href: '/destinations' },
  { image: '/images/dest-japan.jpg', title: 'Kyoto & Tokyo • Japan', href: '/destinations' },
  { image: '/images/saudi-disah.png', title: 'Wadi Al Disah • Desert Oasis', href: '/explore-saudi' },
  { image: '/images/saudi-diriyah.png', title: 'Diriyah & Turaif • Riyadh', href: '/explore-saudi' },
  { image: '/images/saudi-albalad.png', title: 'Historic Al-Balad • Jeddah', href: '/explore-saudi' },
  { image: '/images/dest-turkey.jpg', title: 'Cappadocia • Turkey', href: '/destinations' },
  { image: '/images/dest-asia.jpg', title: 'Bali & Komodo • Indonesia', href: '/destinations' },
  { image: '/images/saudi-redsea.jpg', title: 'Red Sea Archipelago', href: '/explore-saudi' },
  { image: '/images/real-kaec.jpg', title: 'King Abdullah Economic City', href: '/explore-saudi' },
  { image: '/images/real-yanbu.jpg', title: 'Historic Yanbu & Marina', href: '/explore-saudi' },
  { image: '/images/place-prophetsmosque.jpg', title: 'Madinah Heritage', href: '/explore-saudi' },
];

export function DriftWallDestinations() {
  return (
    <section className="relative bg-[#F4EFE6] text-[#0F2E23] py-16 sm:py-24 border-t border-[#0F2E23]/10 overflow-hidden">
      <div className="container-wide mb-8 sm:mb-12">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            {/* Badge */}
            <Reveal>
              <span className="inline-flex items-center gap-3 sm:gap-3.5 px-6 py-3 sm:px-8 sm:py-3.5 md:px-9 md:py-4 rounded-full bg-[#0F2E23] text-[#F4EFE6] text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest uppercase shadow-lg border border-[#2E6B57]/60 w-fit mb-3">
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#39C27D] animate-pulse inline-block shadow-[0_0_14px_#39C27D]" />
                <span>TOP DESTINATIONS</span>
              </span>
            </Reveal>

            {/* Title */}
            <Reveal delay={0.06}>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0F2E23] leading-[1.08]">
                Iconic Sanctuaries Across the World&apos;s Horizons.
              </h2>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={0.12}>
              <p className="text-base sm:text-lg lg:text-xl text-[#0F2E23]/75 font-light max-w-xl leading-relaxed font-sans">
                Where timeless heritage meets rare seclusion — hand-curated private retreats across Saudi Arabia and legendary global destinations.
              </p>
            </Reveal>
          </div>

          {/* Browse All Destinations CTA */}
          <Reveal delay={0.15}>
            <Link
              href="/destinations"
              className="group inline-flex items-center justify-between gap-3.5 pl-5 pr-2 py-2 rounded-full bg-white text-[#0F2E23] border border-[#0F2E23]/15 hover:border-[#2E6B57] hover:bg-[#0F2E23] hover:text-[#F4EFE6] transition-all duration-300 shadow-xs text-xs font-medium self-start lg:self-auto font-sans"
            >
              <span>Browse All Destinations</span>
              <span className="w-7 h-7 rounded-full bg-[#0F2E23] text-white group-hover:bg-[#39C27D] group-hover:text-[#0F2E23] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>

      {/* ── 3D DriftWall Canvas Container with Balanced Top & Bottom Fades ── */}
      <div className="relative w-full h-[540px] sm:h-[620px] lg:h-[680px] overflow-hidden select-none">
        {/* Equal atmospheric gradient fades on top and bottom */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F4EFE6] via-[#F4EFE6]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F4EFE6] via-[#F4EFE6]/80 to-transparent z-10" />

        <DriftWall
          items={destinationsData}
          columns={6}
          tileWidth={220}
          tileHeight={148}
          gap={16}
          radius={16}
          tilt={14}
          turn={-11}
          perspective={1250}
          depth={90}
          speed={32}
          direction="up"
          variance={0.4}
          parallax={0.55}
          lift={58}
          fade={0.45}
          dim={0.82}
          overlayColor="#081812"
          grayscale={false}
          pauseOnHover={false}
          className="w-full h-full"
        />
      </div>

      {/* Interactive Helper Cue */}
      <div className="text-center mt-4">
        <p className="text-[11px] font-mono text-[#0F2E23]/50 uppercase tracking-widest">
          ✦ Move cursor to steer perspective • Hover &amp; click any destination
        </p>
      </div>
    </section>
  );
}
