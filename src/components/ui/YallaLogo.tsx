'use client';

import React from 'react';
import Image from 'next/image';

interface YallaLogoProps {
  className?: string;
  variant?: 'primary' | 'horizontal' | 'compact';
  theme?: 'dark' | 'light' | 'auto';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

export function YallaLogo({
  className = '',
  variant = 'horizontal',
  theme = 'auto',
  showTagline = false,
  size = 'md',
  id,
}: YallaLogoProps) {
  const isDark = theme === 'dark';

  // Sizing matched to trimmed logo aspect ratio 600x369 (~1.626)
  const sizeMap = {
    sm: { width: 92, height: 57, tagline: 'text-[7px]' },
    md: { width: 130, height: 80, tagline: 'text-[8.5px]' },
    lg: { width: 180, height: 111, tagline: 'text-[10px]' },
    xl: { width: 250, height: 154, tagline: 'text-[12px]' },
  }[size];

  const taglineColor = isDark ? '#DAD6CD' : '#6D8377';

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
          src="/yalla-voyage-logo-transparent.png"
          alt="Yalla Voyage"
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
          className={`uppercase font-sans font-bold tracking-[0.22em] mt-1 ${sizeMap.tagline} opacity-90`}
          style={{ color: taglineColor }}
        >
          EXPLORE MORE. CREATE MEMORIES.
        </span>
      )}
    </div>
  );
}
