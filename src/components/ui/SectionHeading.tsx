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
  // Determine badge text
  const badgeLabel = badge || subtitle || (number ? `${number} / SECTION` : undefined);

  return (
    <div className={`w-full mb-10 md:mb-14 ${className}`}>
      {/* ── Top Bar: Clean Minimal Pill Badge (Left Only) ── */}
      {badgeLabel && (
        <Reveal y={15}>
          <div className="pb-5 mb-6 border-b border-[#0F2E23]/10 flex items-center justify-between">
            <span
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase transition-all shadow-2xs ${
                light
                  ? 'bg-white/10 text-[#F4EFE6] border border-white/15'
                  : 'bg-[#0F2E23] text-[#F4EFE6]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#39C27D] animate-pulse inline-block" />
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
            className={`text-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light leading-[1.12] tracking-tight ${
              light ? 'text-[#F4EFE6]' : 'text-[#0F2E23]'
            } ${titleClassName ?? ''}`}
          >
            {title}
          </h2>

          {description && (
            <p
              className={`mt-3.5 text-sm sm:text-base leading-relaxed font-light ${
                light ? 'text-[#F4EFE6]/70' : 'text-[#0F2E23]/65'
              } ${align === 'center' ? 'mx-auto text-center' : 'max-w-2xl'}`}
            >
              {description}
            </p>
          )}
        </div>
      </Reveal>
    </div>
  );
}
