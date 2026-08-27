'use client';

import Image from 'next/image';
import {
  Clock,
  MessageCircle,
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  Calendar,
  ShieldCheck,
} from 'lucide-react';
import { TravelPackage } from '@/data/packages';
import { siteConfig } from '@/data/site';

interface PackageCardProps {
  pkg: TravelPackage;
  index?: number;
  onSelect?: (pkg: TravelPackage) => void;
}

export function PackageCard({ pkg, index = 0, onSelect }: PackageCardProps) {
  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello Yalla Voyage, I would like to inquire about the "${pkg.title}" package itinerary (${pkg.duration}).`
  )}`;

  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-[#0F2E23]/10 hover:border-[#2E6B57]/40 shadow-md hover:shadow-2xl transition-all duration-500 text-[#0F2E23]">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[380px] lg:min-h-[420px]">
        
        {/* ── Left Column: Cinematic Visual & Badges (5 cols) ── */}
        <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden bg-[#0F2E23]">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority={index < 2}
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23]/80 via-transparent to-black/30 pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="px-3.5 py-1.5 rounded-full text-[10.5px] font-mono font-bold uppercase tracking-wider bg-white/95 text-[#0F2E23] shadow-sm backdrop-blur-md">
              {pkg.badge}
            </span>
            <span className="px-3 py-1.5 rounded-full text-[11px] font-mono font-medium bg-[#0F2E23]/85 text-[#39C27D] backdrop-blur-md border border-white/15 flex items-center gap-1.5 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-[#39C27D]" />
              {pkg.duration}
            </span>
          </div>

          {/* Bottom Price Pill Overlay */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
            <span className="px-3.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-[#F4EFE6] text-xs font-mono font-medium shadow-sm">
              {pkg.price}
            </span>
            <span className="text-[11px] font-mono text-white/80 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#39C27D]" /> Bespoke
            </span>
          </div>
        </div>

        {/* ── Right Column: Editorial Itinerary & Route Stops (7 cols) ── */}
        <div className="lg:col-span-7 p-7 sm:p-9 lg:p-10 flex flex-col justify-between bg-white">
          <div>
            {/* Kicker Tag */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#2E6B57] font-semibold mb-2 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39C27D]" />
              <span>{pkg.regionLabel}</span>
              <span>•</span>
              <span className="text-[#0F2E23]/50">Curated Expedition {String(index + 1).padStart(2, '0')}</span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              }}
              className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0F2E23] leading-[1.12] tracking-tight group-hover:text-[#2E6B57] transition-colors mb-4"
            >
              {pkg.title}
            </h3>

            {/* ── Visual Itinerary Route Chain ── */}
            {pkg.route && pkg.route.length > 0 && (
              <div className="mb-4 pb-4 border-b border-[#0F2E23]/8">
                <p className="text-[10.5px] font-mono uppercase tracking-widest text-[#2E6B57] font-bold mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#39C27D]" /> Itinerary Route:
                </p>
                <div className="flex items-center gap-2 flex-wrap text-xs font-sans text-[#0F2E23]/90">
                  {pkg.route.map((stop, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-lg bg-[#F4EFE6] border border-[#0F2E23]/8 font-medium text-xs text-[#0F2E23]">
                        {stop}
                      </span>
                      {sIdx < pkg.route.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-[#2E6B57]/60 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Short Narrative Description */}
            <p className="text-sm text-[#0F2E23]/75 font-light leading-relaxed font-sans mb-5">
              {pkg.description}
            </p>

            {/* Inclusions / Highlights Checklist (2-Column Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {pkg.highlights.slice(0, 4).map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2 text-xs text-[#0F2E23]/85 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6B57] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-5 border-t border-[#0F2E23]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5">
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
