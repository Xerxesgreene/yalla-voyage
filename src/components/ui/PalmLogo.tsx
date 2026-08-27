import React from 'react';

interface PalmLogoProps {
  className?: string;
  size?: number;
  textColor?: string;
  showText?: boolean;
  brandName?: string;
  subTitle?: string;
}

export function PalmLogo({
  className = '',
  size = 30,
  textColor = 'currentColor',
  showText = true,
  brandName = 'SAFARAH',
  subTitle = 'TRAVEL',
}: PalmLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Palm Icon */}
      <svg
        width={size}
        height={Math.round(size * 1.15)}
        viewBox="0 0 32 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 text-inherit transition-transform duration-300 group-hover:scale-105"
      >
        {/* Trunk */}
        <path
          d="M16 11V34M15 34H17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Central top frond */}
        <path
          d="M16 12C16 7 16 3 16 2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Left top frond */}
        <path
          d="M16 11C14 7 11 4 7 5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Right top frond */}
        <path
          d="M16 11C18 7 21 4 25 5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Left middle frond */}
        <path
          d="M16 12C12 9 7 9 4 13"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Right middle frond */}
        <path
          d="M16 12C20 9 25 9 28 13"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Left bottom frond */}
        <path
          d="M16 13C13 14 8 16 6 21"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        {/* Right bottom frond */}
        <path
          d="M16 13C19 14 24 16 26 21"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>

      {showText && (
        <div className="flex flex-col text-left select-none">
          <span
            className="font-serif tracking-[0.14em] font-medium text-[18px] leading-tight"
            style={{ color: textColor }}
          >
            {brandName}
          </span>
          <span
            className="text-[9px] tracking-[0.34em] font-semibold uppercase opacity-80 -mt-0.5"
            style={{ color: textColor }}
          >
            {subTitle}
          </span>
        </div>
      )}
    </div>
  );
}
