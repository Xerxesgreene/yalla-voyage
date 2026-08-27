'use client';

import Image from 'next/image';
import { ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react';
import { TravelPackage } from '@/data/packages';

interface PackageCardProps {
  pkg: TravelPackage;
  index: number;
  onSelect: (pkg: TravelPackage) => void;
}

export function PackageCard({ pkg, index, onSelect }: PackageCardProps) {
  return (
    <div
      onClick={() => onSelect(pkg)}
      className="group cursor-pointer block select-none mb-12 sm:mb-16 lg:mb-20"
    >
      {/* ── Top Metadata Kicker ── */}
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-[#39C27D] font-semibold mb-2">
        <span>{pkg.badge}</span>
        <span className="text-[#DAD6CD]/50 font-normal">{pkg.duration}</span>
      </div>

      {/* ── Headline Tagline Directly Above Image (like noth.in) ── */}
      <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-display font-light text-[#F4EFE6] leading-tight tracking-tight mb-4 group-hover:text-[#39C27D] transition-colors">
        {pkg.title}
      </h3>

      {/* ── Large Visual Framed Card ── */}
      <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full rounded-3xl overflow-hidden bg-[#0A261D] border border-white/10 group-hover:border-[#39C27D]/50 shadow-2xl group-hover:shadow-[0_20px_50px_rgba(57,194,125,0.15)] transition-all duration-500">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index < 2}
        />

        {/* Subtle dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />

        {/* ── Centered Floating 'EXPLORE →' Pill (Noth.in Style) ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-widest shadow-2xl opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-300 transform">
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* ── Bottom Corner Info Tags (Route & Price) ── */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none text-xs font-mono">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[#F4EFE6]">
            {pkg.route?.[0] ? `Via ${pkg.route[0]}` : 'Bespoke Route'}
          </span>
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[#39C27D] font-semibold">
            {pkg.price}
          </span>
        </div>
      </div>
    </div>
  );
}
