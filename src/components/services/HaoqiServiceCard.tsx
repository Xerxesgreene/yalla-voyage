'use client';

import { forwardRef } from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { HomepageService } from '@/data/services';

interface HaoqiServiceCardProps {
  service: HomepageService;
  index: number;
  total: number;
  onOpenModal: (service: HomepageService) => void;
}

export const HaoqiServiceCard = forwardRef<HTMLDivElement, HaoqiServiceCardProps>(
  ({ service, onOpenModal }, ref) => {
    return (
      <div
        ref={ref}
        onClick={() => onOpenModal(service)}
        className="group cursor-pointer relative aspect-[4/3] sm:aspect-[16/11] rounded-[2.25rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-[#0F2E23] border border-[#0F2E23]/10 flex flex-col justify-end"
      >
        {/* ── Full Bleed Background Image ── */}
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* ── Cinematic Bottom Gradient Overlay ── */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-400 group-hover:opacity-90" />

        {/* ── Top Floating Minimal Category Badge ── */}
        <div className="absolute top-5 left-5 z-10">
          <span className="px-3.5 py-1.5 rounded-full text-[10.5px] font-mono font-semibold uppercase tracking-widest bg-black/60 text-white backdrop-blur-md border border-white/15 shadow-sm">
            {service.badge}
          </span>
        </div>

        {/* ── Bottom Overlay: Bold Title, Category & Circular Plus Button ── */}
        <div className="relative z-10 p-5 sm:p-8 md:p-9 flex items-end justify-between gap-3 sm:gap-4">
          <div className="space-y-1 sm:space-y-1.5 max-w-[82%]">
            <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#39C27D] font-semibold">
              {service.category}
            </p>
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-heading font-medium !text-white tracking-tight leading-snug group-hover:!text-[#39C27D] transition-colors duration-300"
              style={{ color: '#FFFFFF' }}
            >
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/75 font-sans font-light line-clamp-1">
              {service.tagline}
            </p>
          </div>

          {/* Clean Floating Circular Plus Button */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#0F2E23] flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-xl group-hover:scale-110 group-hover:bg-[#39C27D] group-hover:text-black">
            <Plus className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-90" />
          </div>
        </div>
      </div>
    );
  }
);

HaoqiServiceCard.displayName = 'HaoqiServiceCard';
