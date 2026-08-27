'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export interface StackedDestinationItem {
  number: string;
  title: string;
  category: string;
  year: string;
  image: string;
  href: string;
  tagline: string;
}

const stackedItems: StackedDestinationItem[] = [
  {
    number: '(01)',
    title: 'AlUla Hegra',
    category: 'Saudi Arabia • UNESCO Heritage',
    year: '© 2026',
    image: '/images/saudi-hegra.png',
    href: '/explore-saudi',
    tagline: 'Where ancient stories meet quiet desert skies',
  },
  {
    number: '(02)',
    title: 'Paris Sanctuary',
    category: 'France • City of Light & Artistry',
    year: '© 2026',
    image: '/images/dest-paris.png',
    href: '/destinations',
    tagline: 'Timeless romance along the Seine',
  },
  {
    number: '(03)',
    title: 'Maldives Sanctuary',
    category: 'Indian Ocean • Sustainable Luxury',
    year: '© 2026',
    image: '/images/dest-maldives.jpg',
    href: '/destinations',
    tagline: 'Pristine barrier reefs & overwater villas',
  },
  {
    number: '(04)',
    title: 'Kyoto & Tokyo',
    category: 'Japan • Heritage & Innovation',
    year: '© 2026',
    image: '/images/dest-japan.jpg',
    href: '/destinations',
    tagline: 'Timeless tradition meets neon horizons',
  },
  {
    number: '(05)',
    title: 'Wadi Al Disah',
    category: 'Saudi Arabia • Rose Sandstone Canyon',
    year: '© 2026',
    image: '/images/saudi-disah.png',
    href: '/explore-saudi',
    tagline: 'Where nature slows everything down',
  },
  {
    number: '(06)',
    title: 'Diriyah & Turaif',
    category: 'Riyadh • Birthplace of Saudi',
    year: '© 2026',
    image: '/images/saudi-diriyah.png',
    href: '/explore-saudi',
    tagline: 'Royal mud-brick palaces & heritage',
  },
];

export function StackedDestinations() {
  return (
    <section className="relative bg-[#F4EFE6] text-[#0F2E23] py-20 md:py-28 border-t border-[#0F2E23]/10">
      <div className="container-wide">
        {/* ── Top Bar: Capsule Pill ── */}
        <div className="pb-6 mb-10 border-b border-[#0F2E23]/8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2E23] text-[#F4EFE6] text-[11px] font-mono font-bold tracking-widest uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39C27D] animate-pulse inline-block" />
            <span>04 • CURATED EXPEDITIONS</span>
          </span>
        </div>

        {/* 3-column Grid Layout (4-col Left Header | 6-col Card Deck Stack | 2-col Quick Nav) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative">
          
          {/* ── LEFT COLUMN: Sticky Section Header ── */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5 z-20 lg:pr-8">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-12 rounded-xl overflow-hidden shadow-xs flex-shrink-0 border border-[#0F2E23]/10">
                <Image
                  src="/images/dest-paris.png"
                  alt="Destinations Thumbnail"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light tracking-tight text-[#0F2E23] leading-tight">
                Destinations
              </h2>
            </div>

            <p className="text-[#0F2E23]/70 text-sm leading-relaxed max-w-xs font-light font-sans">
              From the ancient sandstone tombs of Saudi Arabia to Paris boulevards and turquoise Maldives lagoons.
            </p>

            <div className="pt-2">
              <Link
                href="/destinations"
                className="text-xs font-semibold uppercase tracking-wider text-[#2E6B57] hover:text-[#0F2E23] transition-colors inline-flex items-center gap-1.5 group font-sans"
              >
                <span>Browse All Destinations</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* ── CENTER COLUMN: Card Deck Stack (Layered Photo Stack) ── */}
          <div className="lg:col-span-8 xl:col-span-7 relative space-y-8 sm:space-y-12 pb-16">
            {stackedItems.map((item, index) => (
              <div
                key={item.title}
                className="sticky"
                style={{
                  top: `calc(70px + ${index * 16}px)`,
                  zIndex: index + 10,
                }}
              >
                <Link
                  href={item.href}
                  className="group block relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform-gpu border border-[#0F2E23]/10"
                >
                  {/* Top Full-Bleed Media Container in Sand Beige #E7E1D8 */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#E7E1D8]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover scale-105 filter blur-[6px] opacity-90 transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Center Focus Photo Box */}
                    <div className="relative z-10 w-[76%] sm:w-[68%] md:w-[66%] aspect-[16/9.5] rounded-lg md:rounded-xl overflow-hidden shadow-2xl border border-white/60 group-hover:scale-[1.02] transition-transform duration-500">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 80vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Card Footer Bar in Crisp White */}
                  <div className="py-3.5 px-4 sm:px-6 bg-white border-t border-[#0F2E23]/8 flex items-center justify-between text-[#0F2E23]">
                    {/* Left: Number */}
                    <span className="text-xs sm:text-sm font-mono text-[#0F2E23]/60 font-medium">
                      {item.number}
                    </span>

                    {/* Center: Title & Subtitle */}
                    <div className="text-center px-2">
                      <h3 className="text-sm sm:text-base font-display font-semibold tracking-tight text-[#0F2E23] group-hover:text-[#2E6B57] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-[#0F2E23]/55 font-sans mt-0.5">
                        {item.category}
                      </p>
                    </div>

                    {/* Right: Year */}
                    <span className="text-xs sm:text-sm font-mono text-[#0F2E23]/50">
                      {item.year}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
