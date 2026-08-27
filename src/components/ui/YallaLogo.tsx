'use client';

import React from 'react';

interface YallaLogoProps {
  className?: string;
  variant?: 'primary' | 'horizontal' | 'compact';
  theme?: 'dark' | 'light' | 'auto';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function YallaLogo({
  className = '',
  variant = 'horizontal',
  theme = 'auto',
  showTagline = false,
  size = 'md',
}: YallaLogoProps) {
  // Brand Guidelines Color Palette:
  // Primary Dark: #0F2D23 (Deep Forest)
  // Accent Green: #39C27D (Emerald)
  // Ivory Light: #F4EFE6 / #FFFFFF
  // Muted: #DAD6CD
  const isDark = theme === 'dark';
  const yallaColor = isDark ? '#FFFFFF' : '#0F2D23';
  const voyageColor = isDark ? '#39C27D' : '#1E4B3A';
  const caretColor = isDark ? '#39C27D' : '#39C27D';
  const taglineColor = isDark ? '#DAD6CD' : '#6D8377';

  // Size scale mappings
  const scale = {
    sm: {
      yallaSize: 'text-[18px]',
      voyageSize: 'text-[18px]',
      caretW: 10,
      caretH: 12,
      taglineSize: 'text-[7px]',
      gap: 'gap-1.5',
    },
    md: {
      yallaSize: 'text-[22px]',
      voyageSize: 'text-[22px]',
      caretW: 12,
      caretH: 14,
      taglineSize: 'text-[8.5px]',
      gap: 'gap-2',
    },
    lg: {
      yallaSize: 'text-[32px]',
      voyageSize: 'text-[32px]',
      caretW: 16,
      caretH: 19,
      taglineSize: 'text-[10px]',
      gap: 'gap-2.5',
    },
    xl: {
      yallaSize: 'text-[44px]',
      voyageSize: 'text-[44px]',
      caretW: 22,
      caretH: 26,
      taglineSize: 'text-[12px]',
      gap: 'gap-3',
    },
  }[size];

  // The iconic Chevron Caret '^' for the letter 'a' in Voy^ge matching the Brand Book
  const ChevronA = () => (
    <svg
      width={scale.caretW}
      height={scale.caretH}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mx-[0.5px] align-baseline transform translate-y-[-1px]"
      aria-hidden="true"
    >
      <path
        d="M2.5 16L8 3.5L13.5 16"
        stroke={caretColor}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // 1. Primary Stacked Logo (from Brand Guidelines 1. LOGO VARIATIONS - PRIMARY LOGO)
  if (variant === 'primary') {
    return (
      <div className={`inline-flex flex-col items-start select-none group ${className}`}>
        <div className="flex flex-col leading-[0.88] tracking-tight">
          {/* Yalla in Montserrat SemiBold */}
          <span
            className={`${scale.yallaSize} font-bold font-sans transition-colors duration-300 tracking-[-0.03em]`}
            style={{
              color: yallaColor,
              fontFamily: '"Montserrat", "Plus Jakarta Sans", sans-serif',
            }}
          >
            Yalla
          </span>

          {/* Voy^ge with styled Chevron and elongated V */}
          <span
            className={`${scale.voyageSize} font-bold font-sans transition-colors duration-300 flex items-center -mt-1 tracking-[-0.03em]`}
            style={{
              color: isDark ? '#39C27D' : '#39C27D',
              fontFamily: '"Montserrat", "Plus Jakarta Sans", sans-serif',
            }}
          >
            Voy<ChevronA />ge
          </span>
        </div>

        {showTagline && (
          <div className="w-full pt-1 mt-1 border-t border-[#39C27D]/30">
            <span
              className={`uppercase font-sans font-bold tracking-[0.24em] block ${scale.taglineSize} opacity-90`}
              style={{ color: taglineColor }}
            >
              EXPLORE MORE. CREATE MEMORIES.
            </span>
          </div>
        )}
      </div>
    );
  }

  // 2. Secondary Horizontal Logo (from Brand Guidelines 1. LOGO VARIATIONS - SECONDARY HORIZONTAL)
  return (
    <div className={`inline-flex flex-col select-none group ${className}`}>
      <div className={`inline-flex items-baseline ${scale.gap} leading-none tracking-tight`}>
        {/* Yalla */}
        <span
          className={`${scale.yallaSize} font-bold font-sans transition-colors duration-300 tracking-[-0.025em]`}
          style={{
            color: yallaColor,
            fontFamily: '"Montserrat", "Plus Jakarta Sans", sans-serif',
          }}
        >
          Yalla
        </span>

        {/* Voy^ge with iconic Chevron caret for 'a' */}
        <span
          className={`${scale.voyageSize} font-bold font-sans transition-colors duration-300 inline-flex items-baseline tracking-[-0.025em]`}
          style={{
            color: isDark ? '#39C27D' : '#39C27D',
            fontFamily: '"Montserrat", "Plus Jakarta Sans", sans-serif',
          }}
        >
          Voy<ChevronA />ge
        </span>
      </div>

      {showTagline && (
        <span
          className={`uppercase font-sans font-bold tracking-[0.22em] mt-1 ${scale.taglineSize} opacity-90`}
          style={{ color: taglineColor }}
        >
          EXPLORE MORE. CREATE MEMORIES.
        </span>
      )}
    </div>
  );
}
