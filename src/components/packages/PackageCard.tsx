'use client';

import Image from 'next/image';
import {
  Clock,
  MessageCircle,
  ArrowRight,
  Sparkles,
  MapPin,
  Check,
  Compass,
} from 'lucide-react';
import { TravelPackage } from '@/data/packages';
import { siteConfig } from '@/data/site';

interface PackageCardProps {
  pkg: TravelPackage;
  index: number;
  onSelect?: (pkg: TravelPackage) => void;
}

export function PackageCard({ pkg, index, onSelect }: PackageCardProps) {
  const isEven = index % 2 === 0;
  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello Yalla Voyage, I am interested in ${pkg.chapter}: "${pkg.title}" (${pkg.duration}).`
  )}`;

  return (
    <article className="group relative bg-white rounded-3xl overflow-hidden border border-[#0F2E23]/10 hover:border-[#2E6B57]/40 shadow-sm hover:shadow-2xl transition-all duration-500 text-[#0F2E23]">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[380px] lg:min-h-[420px]">
        
        {/* ── Visual Media Column (5 cols) ── */}
        <div
          className={`lg:col-span-5 relative min-h-[300px] sm:min-h-[350px] lg:min-h-full overflow-hidden bg-[#0F2E23] ${
            !isEven ? 'lg:order-2' : ''
          }`}
        >
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority={index < 2}
          />
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23]/75 via-transparent to-black/25 pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-white/95 text-[#0F2E23] backdrop-blur-md shadow-xs border border-black/5">
              {pkg.badge}
            </span>
            <span className="px-3 py-1.5 rounded-full text-[11px] font-mono font-medium bg-[#0F2E23]/85 text-[#39C27D] backdrop-blur-md border border-white/15 flex items-center gap-1.5 shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#39C27D]" />
              {pkg.duration}
            </span>
          </div>

          {/* Bottom Floating Price Tag */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
            <span className="px-3.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-[#F4EFE6] text-xs font-mono font-semibold shadow-sm">
              {pkg.price}
            </span>
            <span className="text-[11px] font-mono text-[#F4EFE6]/90 flex items-center gap-1">
              <Compass className="w-3 h-3 text-[#39C27D]" /> Bespoke Journey
            </span>
          </div>
        </div>

        {/* ── Storyline Content Column (7 cols) ── */}
        <div
          className={`lg:col-span-7 p-7 sm:p-9 lg:p-10 flex flex-col justify-between bg-white ${
            !isEven ? 'lg:order-1' : ''
          }`}
        >
          <div>
            {/* Chapter & Region Kicker */}
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#2E6B57] font-semibold mb-2 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#39C27D] animate-pulse" />
              <span>{pkg.chapter}</span>
              <span>•</span>
              <span className="text-[#0F2E23]/60">{pkg.regionLabel}</span>
            </div>

            {/* Serif Title */}
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              }}
              className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0F2E23] leading-[1.12] tracking-tight group-hover:text-[#2E6B57] transition-colors mb-2.5"
            >
              {pkg.title}
            </h3>

            {/* Poetic Narrative Storyline */}
            <p className="text-sm sm:text-[15px] text-[#2E6B57] font-serif italic leading-relaxed mb-5">
              &ldquo;{pkg.tagline}&rdquo;
            </p>

            {/* Minimal Route Stepper */}
            {pkg.route && pkg.route.length > 0 && (
              <div className="mb-5 pb-4 border-b border-[#0F2E23]/8">
                <div className="flex items-center gap-2 flex-wrap text-xs font-sans">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#0F2E23]/50 font-semibold mr-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#39C27D]" /> Route:
                  </span>
                  {pkg.route.map((stop, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-[#F4EFE6] border border-[#0F2E23]/6 text-xs text-[#0F2E23] font-medium">
                        {stop}
                      </span>
                      {sIdx < pkg.route.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-[#2E6B57]/50 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Clean Minimal Tag Chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {pkg.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans bg-[#F4EFE6]/80 text-[#0F2E23] border border-[#0F2E23]/8 hover:bg-[#F4EFE6] transition-colors"
                >
                  <Check className="w-3 h-3 text-[#2E6B57]" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#0F2E23]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onSelect?.(pkg)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#0F2E23]/15 text-[#0F2E23] hover:bg-[#0F2E23] hover:text-[#F4EFE6] text-xs font-semibold uppercase tracking-wider transition-all duration-300 font-sans cursor-pointer shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#2E6B57]" /> View Full Itinerary
            </button>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md font-sans hover:scale-102"
            >
              <MessageCircle className="w-4 h-4" /> Inquire on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </article>
  );
}
