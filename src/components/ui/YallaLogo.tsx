'use client';

import React from 'react';
import Image from 'next/image';
import { useOptionalLanguage } from '@/context/LanguageContext';

interface YallaLogoProps {
  className?: string;
  variant?: 'primary' | 'horizontal' | 'compact';
  theme?: 'dark' | 'light' | 'auto';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
  locale?: 'en' | 'ar';
}

export function YallaLogo({
  className = '',
  variant = 'horizontal',
  theme = 'auto',
  showTagline = false,
  size = 'md',
  id,
  locale: propLocale,
}: YallaLogoProps) {
  const langContext = useOptionalLanguage();
  const currentLocale = propLocale || langContext?.locale || 'en';
  const isArabic = currentLocale === 'ar';
  const isDark = theme === 'dark';

  // Sizing matched to trimmed logo aspect ratio 600x369 (~1.626)
  const sizeMap = {
    sm: { width: 92, height: 57, tagline: 'text-[7px]' },
    md: { width: 130, height: 80, tagline: 'text-[8.5px]' },
    lg: { width: 180, height: 111, tagline: 'text-[10px]' },
    xl: { width: 250, height: 154, tagline: 'text-[12px]' },
  }[size];

  const taglineColor = isDark ? '#DAD6CD' : '#6D8377';
  const logoSrc = isArabic
    ? '/yalla-voyage-logo-ar-transparent.png'
    : '/yalla-voyage-logo-transparent.png';

  return (
    <div
      id={id}
      className={`inline-flex flex-col items-start select-none group ${className}`}
    >
      <div
        className="relative transition-all duration-300"
        style={{
          width: sizeMap.width,
          height: sizeMap.height,
        }}
      >
        <Image
          src={logoSrc}
          alt={isArabic ? 'يلا سفر' : 'Yalla Voyage'}
          width={sizeMap.width * 2}
          height={sizeMap.height * 2}
          className="object-contain w-full h-full"
          style={{
            // In dark mode (scrolled navbar or footer), invert to make logo crisp white/light
            filter: isDark
              ? 'brightness(0) invert(1) drop-shadow(0 1px 3px rgba(0,0,0,0.5))'
              : 'none',
            transition: 'filter 0.3s ease',
          }}
          priority
        />
      </div>

      {showTagline && (
        <span
          className={`uppercase font-sans font-bold mt-1 ${sizeMap.tagline} opacity-90 ${
            isArabic ? 'tracking-normal' : 'tracking-[0.22em]'
          }`}
          style={{ color: taglineColor }}
        >
          {isArabic ? 'اكتشف المزيد. اصنع ذكريات لا تُنسى.' : 'EXPLORE MORE. CREATE MEMORIES.'}
        </span>
      )}
    </div>
  );
}

