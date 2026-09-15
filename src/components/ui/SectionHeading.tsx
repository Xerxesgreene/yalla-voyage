'use client';

import React from 'react';
import Image from 'next/image';
import { Reveal } from './Reveal';

export interface SectionHighlight {
  number?: string;
  text: string;
}

interface SectionHeadingProps {
  badge?: string;
  number?: string;
  subtitle?: string;
  title: string | React.ReactNode;
  titleClassName?: string;
  description?: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  highlights?: (SectionHighlight | string)[];
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  number,
  subtitle,
  title,
  titleClassName,
  description,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) {
  // Determine badge text and strip any leading numbering (e.g. "01 • ", "(01) ")
  const rawBadge = badge || subtitle;
  const badgeLabel = rawBadge ? rawBadge.replace(/^(\d+|\(\d+\))\s*[•\-/|]\s*/, '').trim() : undefined;

  return (
    <div className={`w-full mb-10 md:mb-14 ${className}`}>
      {/* ── Top Bar: Clean Minimal Pill Badge (Left Only) ── */}
      {badgeLabel && (
        <Reveal y={15}>
          <div className="pb-5 mb-6 border-b border-[#0F2E23]/10 flex items-center justify-between">
            <span
              className={`inline-flex items-center gap-3 sm:gap-3.5 px-6 py-3 sm:px-8 sm:py-3.5 md:px-9 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest uppercase transition-all shadow-lg ${
                light
                  ? 'bg-white/15 text-[#F4EFE6] border border-white/25'
                  : 'bg-[#0F2E23] text-[#F4EFE6] border border-[#2E6B57]/60'
              }`}
            >
              <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#39C27D] animate-pulse inline-block shadow-[0_0_14px_#39C27D]" />
              <span>{badgeLabel}</span>
            </span>
          </div>
        </Reveal>
      )}

      {/* ── Main Row: Crisp Headline + Description (Clean Grid Aligned) ── */}
      <Reveal delay={0.08}>
        <div
          className={`flex flex-col ${
            align === 'center' ? 'items-center text-center mx-auto' : 'items-start'
          } max-w-4xl`}
        >
          <h2
            className={`font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight ${
              light ? 'text-[#F4EFE6]' : 'text-[#0F2E23]'
            } ${titleClassName ?? ''}`}
          >
            {title}
          </h2>

          {description && (
            <p
              className={`mt-4 sm:mt-5 text-base sm:text-lg md:text-xl leading-relaxed font-light font-sans ${
                light ? 'text-[#F4EFE6]/80' : 'text-[#0F2E23]/75'
              } ${align === 'center' ? 'mx-auto text-center' : 'max-w-3xl'}`}
            >
              {description}
            </p>
          )}
        </div>
      </Reveal>
    </div>
  );
}
