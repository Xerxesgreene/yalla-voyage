'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { DriftWall, DriftWallItem } from '@/components/ui/DriftWall';

const destinationsData: DriftWallItem[] = [
  { image: '/images/saudi-hegra.png', title: 'AlUla Hegra • Saudi', href: '/explore-saudi' },
  { image: '/images/dest-paris.png', title: 'Paris Sanctuary • France', href: '/destinations' },
  { image: '/images/dest-maldives.jpg', title: 'Maldives Overwater Lagoon', href: '/destinations' },
  { image: '/images/dest-japan.jpg', title: 'Kyoto & Tokyo • Japan', href: '/destinations' },
  { image: '/images/saudi-disah.png', title: 'Wadi Al Disah • Tabuk', href: '/explore-saudi' },
  { image: '/images/saudi-diriyah.png', title: 'Diriyah & Turaif • Riyadh', href: '/explore-saudi' },
  { image: '/images/saudi-jeddah.jpg', title: 'Historic Al-Balad • Jeddah', href: '/explore-saudi' },
  { image: '/images/dest-turkey.jpg', title: 'Cappadocia • Turkey', href: '/destinations' },
  { image: '/images/dest-uae.jpg', title: 'Dubai Dunes & Skyline', href: '/destinations' },
  { image: '/images/dest-europe.jpg', title: 'Amalfi & Swiss Alps', href: '/destinations' },
  { image: '/images/dest-asia.jpg', title: 'Bali Sanctuaries', href: '/destinations' },
  { image: '/images/saudi-redsea.jpg', title: 'Red Sea Archipelago', href: '/explore-saudi' },
  { image: '/images/alula-luxury-sanctuary.jpg', title: 'AlUla Desert Oasis Resort', href: '/explore-saudi' },
  { image: '/images/saudi-madinah.jpg', title: 'Madinah Heritage', href: '/explore-saudi' },
  { image: '/images/red-sea-archipelago.jpg', title: 'Red Sea Yachting Expeditions', href: '/explore-saudi' },
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
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#2E6B57]">
                <span className="text-[#2E6B57]">&mdash;</span>
                <span>04 • CURATED EXPEDITIONS</span>
                <span className="text-[#2E6B57]">&mdash;</span>
              </div>
            </Reveal>

            {/* Title */}
            <Reveal delay={0.06}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0F2E23] leading-[1.12]">
                Where Sanctuaries Meet the Horizon
              </h2>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={0.12}>
              <p className="text-xs sm:text-sm lg:text-base text-[#0F2E23]/70 font-light max-w-xl leading-relaxed font-sans">
                Explore our signature portfolio of bespoke journeys across Saudi Arabia and the world&apos;s most breathtaking destinations.
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
