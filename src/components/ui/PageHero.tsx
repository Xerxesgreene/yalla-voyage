'use client';

import Image from 'next/image';

export interface PageHeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
  alt?: string;
  heightClass?: string;
  positionClass?: string;
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  image = '/images/header-real-saudi.jpg',
  alt = 'يلا سفر Sanctuary',
  heightClass = 'min-h-[380px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px]',
  positionClass = 'object-center',
  className = '',
}: PageHeroProps) {
  return (
    <section className={`relative w-full ${heightClass} overflow-hidden bg-neutral-950 select-none flex flex-col justify-end ${className}`}>
      {/* Background Image */}
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className={`object-cover ${positionClass}`}
        sizes="100vw"
      />

      {/* Pure Neutral Cinematic Dark Contrast Gradient (True Destination Colors, NO GREEN TINT) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 via-45% to-transparent z-5" />

      {/* Top Navbar Neutral Contrast Fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 via-black/20 to-transparent z-10" />

      {/* Editorial Content: Title on Left, Writings on Right (All in Crisp Pure White) */}
      {title && (
        <div className="relative z-20 w-full container-wide pt-32 pb-14 sm:pb-16 md:pb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 animate-fade-in">
            {/* Left: Title in Pure White Serif */}
            <div className="flex-1">
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                  color: '#FFFFFF',
                }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[78px] !text-white font-normal tracking-tight leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
              >
                {title}
              </h1>
            </div>

            {/* Right: Subtitle / Writings in Crisp White */}
            {subtitle && (
              <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <p
                  style={{ color: 'rgba(255, 255, 255, 0.92)' }}
                  className="text-sm sm:text-base lg:text-lg !text-white/90 font-sans font-light leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
                >
                  {subtitle}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default PageHero;


