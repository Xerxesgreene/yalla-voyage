'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import {
  Clock,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { TravelPackage } from '@/data/packages';
import { siteConfig } from '@/data/site';

interface PackageCardProps {
  pkg: TravelPackage;
  index?: number;
  onSelect?: (pkg: TravelPackage) => void;
}

export function PackageCard({ pkg, index = 0, onSelect }: PackageCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  // 3D Parallax & Smooth Tilt on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(cardRef.current, {
      rotationY: x * 10,
      rotationX: -y * 10,
      transformPerspective: 1200,
      duration: 0.3,
      ease: 'power2.out',
    });

    if (glareRef.current) {
      gsap.to(glareRef.current, {
        xPercent: x * 60,
        yPercent: y * 60,
        opacity: 0.35,
        duration: 0.3,
      });
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
    if (glareRef.current) {
      gsap.to(glareRef.current, {
        opacity: 0,
        duration: 0.5,
      });
    }
  };

  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello Yalla Voyage, I would like to inquire about the "${pkg.title}" package (${pkg.duration}).`
  )}`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect?.(pkg)}
      className="group relative h-[480px] sm:h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-[#06150E] select-none border border-[#0F2E23]/10"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Full-Bleed Background Image */}
      <Image
        src={pkg.image}
        alt={pkg.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={index < 3}
      />

      {/* Cinematic Vignette & Contrast Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-45% to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent h-28 z-10 pointer-events-none" />

      {/* Dynamic Glare Overlay */}
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 opacity-0 z-20"
        style={{
          background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
        }}
      />

      {/* Top Controls Row */}
      <div className="relative z-20 p-5 sm:p-6 flex items-center justify-between">
        <span className="px-3.5 py-1.5 rounded-full text-[10.5px] font-mono font-bold uppercase tracking-wider bg-white/95 text-[#0F2E23] backdrop-blur-md shadow-xs border border-black/5">
          {pkg.badge}
        </span>

        {/* Hover Arrow Icon */}
        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/25 group-hover:bg-[#39C27D] group-hover:text-[#06150E] group-hover:border-[#39C27D] transition-all duration-300 shadow-sm">
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* Bottom Content Overlay (Clean, Minimal, Editorial) */}
      <div className="absolute bottom-0 inset-x-0 z-20 p-6 sm:p-7 flex flex-col justify-end">
        {/* Line 1: Duration & Price Tag in Uppercase Mono */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#39C27D] font-semibold mb-1.5 drop-shadow-sm">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {pkg.duration}
          </span>
          <span className="text-white/80 font-normal">{pkg.price}</span>
        </div>

        {/* Line 2: Large Serif Title in Pure White */}
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
          }}
          className="text-2xl sm:text-3xl lg:text-[32px] text-white font-normal leading-[1.12] tracking-tight group-hover:text-[#39C27D] transition-colors drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] mb-3"
        >
          {pkg.title}
        </h3>

        {/* Line 3: Compact Highlight Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {pkg.highlights.slice(0, 3).map((h, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-sans font-normal text-white/90 bg-white/15 backdrop-blur-md border border-white/15 shadow-xs"
            >
              <CheckCircle2 className="w-3 h-3 text-[#39C27D]" />
              <span className="line-clamp-1">{h}</span>
            </span>
          ))}
        </div>

        {/* Line 4: Action Bar */}
        <div className="pt-3 border-t border-white/15 flex items-center justify-between">
          <span className="text-xs font-mono text-white/70 group-hover:text-white transition-colors flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#39C27D]" />
            <span>View Itinerary</span>
          </span>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white text-[11px] font-semibold uppercase tracking-wider transition-all font-sans shadow-md"
          >
            <MessageCircle className="w-3 h-3" />
            <span>Inquire</span>
          </a>
        </div>
      </div>
    </div>
  );
}
