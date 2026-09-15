'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { TravelPackage } from '@/data/packages';

interface PackageCardProps {
  pkg: TravelPackage;
  index: number;
}

export function PackageCard({ pkg, index }: PackageCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      id={pkg.slug}
      className="scroll-mt-24 bg-white rounded-3xl overflow-hidden border border-[#0F2E23]/10 shadow-lg hover:shadow-2xl transition-shadow duration-500 text-[#0F2E23]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Media Side (6 cols) */}
        <div
          className={`lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] overflow-hidden group bg-[#0F2E23] ${
            !isEven ? 'lg:order-2' : ''
          }`}
        >
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index < 2}
          />
          {/* Subtle Atmospheric Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23]/60 via-transparent to-transparent pointer-events-none" />

          {/* Clean Duration Pill (No white blobs, no bespoke/concierge writings) */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3.5 py-1.5 rounded-full text-[11px] font-mono font-medium bg-[#0F2E23]/80 text-[#39C27D] backdrop-blur-md border border-white/10 shadow-xs">
              {pkg.duration}
            </span>
          </div>
        </div>

        {/* Content Side (6 cols) */}
        <div
          className={`lg:col-span-6 p-7 sm:p-9 lg:p-10 flex flex-col justify-center ${
            !isEven ? 'lg:order-1' : ''
          }`}
        >
          {/* Header Kicker (Category label, no Chapter 01 numbering) */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#2E6B57] font-semibold mb-2.5 uppercase tracking-wider">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#39C27D]" />
            <span>{pkg.categoryLabel}</span>
          </div>

          {/* Simple One-Line Destination Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-display font-light text-[#0F2E23] mb-2 leading-tight tracking-tight">
            {pkg.title}
          </h2>

          {/* Clean Short Tagline */}
          <p className="text-[#2E6B57] font-serif italic text-sm sm:text-base mb-4">
            &ldquo;{pkg.tagline}&rdquo;
          </p>

          {/* Highlights / Features Pills */}
          <div className="flex flex-wrap gap-2">
            {pkg.highlights.map((highlight, hIdx) => (
              <span
                key={hIdx}
                className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] text-[#0F2E23]/80 text-xs font-medium border border-[#0F2E23]/8 flex items-center gap-1.5 font-sans hover:bg-[#EAE3D5] transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B57] flex-shrink-0" />
                <span>{highlight}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
