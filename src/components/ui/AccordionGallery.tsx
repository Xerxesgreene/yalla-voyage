'use client';

import { useRef, useEffect, useState, useCallback, CSSProperties, KeyboardEvent, MouseEvent } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export interface AccordionGalleryItem {
  image: string;
  label?: string;
  sublabel?: string;
  index?: string;
  link?: string;
  alt?: string;
}

export interface AccordionGalleryProps {
  items?: AccordionGalleryItem[];
  defaultIndex?: number;
  accentColor?: string;
  overlayColor?: string;
  textColor?: string;
  height?: number;
  gap?: number;
  radius?: number;
  expandRatio?: number;
  orientation?: 'horizontal' | 'vertical';
  duration?: number;
  ease?: string;
  parallax?: number;
  tilt?: number;
  stagger?: number;
  trigger?: 'hover' | 'click';
  showLabels?: boolean;
  grayscale?: boolean;
  className?: string;
}

const DEFAULT_ITEMS: AccordionGalleryItem[] = [
  { image: '/images/saudi-alula-proper.png', label: 'AlUla & Hegra', sublabel: 'Ancient Wonders • UNESCO', index: '01', link: '/explore-saudi' },
  { image: '/images/saudi-jeddah-proper.png', label: 'Jeddah Al-Balad', sublabel: 'Red Sea Coral Architecture', index: '02', link: '/explore-saudi' },
  { image: '/images/saudi-diriyah.png', label: 'Riyadh & Diriyah', sublabel: 'Capital Pulse • Royal Palaces', index: '03', link: '/explore-saudi' },
  { image: '/images/saudi-madinah-proper.png', label: 'Madinah', sublabel: 'Sacred Peace • Heritage', index: '04', link: '/explore-saudi' },
  { image: '/images/saudi-disah.png', label: 'Wadi Al Disah', sublabel: 'Sandstone Oasis Canyon', index: '05', link: '/explore-saudi' },
];

export function AccordionGallery({
  items = DEFAULT_ITEMS,
  defaultIndex = 0,
  accentColor = '#39C27D',
  overlayColor = '#0F2E23',
  textColor = '#F4EFE6',
  height = 480,
  gap = 12,
  radius = 20,
  expandRatio = 0.48,
  orientation = 'horizontal',
  duration = 0.65,
  ease = 'power3.out',
  parallax = 0.5,
  tilt = 6,
  stagger = 0.06,
  trigger = 'hover',
  showLabels = true,
  grayscale = true,
  className = '',
}: AccordionGalleryProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const mediaRefs = useRef<(HTMLElement | null)[]>([]);
  const barRefs = useRef<(HTMLElement | null)[]>([]);
  const textRefs = useRef<(HTMLElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(320);

  const vertical = orientation === 'vertical';
  const count = items.length;
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1));

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const overlayBg = `linear-gradient(180deg, transparent 35%, color-mix(in srgb, ${overlayColor} 80%, transparent) 100%), color-mix(in srgb, ${overlayColor} calc(var(--ag-dim, 0.35) * 100%), transparent)`;

  const applyLayout = useCallback(
    (animate: boolean) => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
      const mediaSize = mediaSizeRef.current;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const media = mediaRefs.current[i];
        const bar = barRefs.current[i];
        const text = textRefs.current[i];

        if (!isMobile) {
          const rot = isActive ? 0 : i < active ? tilt : -tilt;
          const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot };
          tl.to(panel, { flexGrow: isActive ? grow : 1, ...rotProp, duration: dur, ease }, 0);
        } else {
          tl.to(panel, { flexGrow: isActive ? 2.5 : 1, rotateX: 0, rotateY: 0, duration: dur, ease }, 0);
        }

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - i));
          const shift = isMobile ? 0 : drift * parallax * mediaSize * 0.06;
          const gray = grayscale ? (isActive ? 0 : 1) : 0;
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: vertical ? 0 : isActive ? 0 : shift,
              y: vertical ? (isActive ? 0 : shift) : 0,
              '--ag-gray': gray,
              '--ag-dim': isActive ? 0 : 0.35,
              duration: dur,
              ease,
            },
            0
          );
        }

        if (showLabels && bar && text) {
          if (isActive) {
            tl.to([bar, text], { opacity: 1, x: 0, duration: dur, ease, stagger: prefersReduced ? 0 : stagger }, 0);
          } else {
            tl.to([bar, text], { opacity: 0, x: -14, duration: dur * 0.6, ease }, 0);
          }
        }
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      vertical,
      tilt,
      parallax,
      grayscale,
      showLabels,
      stagger,
      prefersReduced,
    ]
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const total = vertical ? rect.height : rect.width;
      const usable = Math.max(total - gap * (count - 1), 120);
      const size = Math.max(140, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22);
      mediaSizeRef.current = size;
      el.style.setProperty('--ag-media-size', `${size}px`);
      applyLayout(!firstRunRef.current);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout, gap, count, expandRatio, vertical]);

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = (i: number) => {
    if (trigger === 'hover') setActive(i);
  };

  const handleClick = (i: number, e: MouseEvent) => {
    if (i !== active) {
      e.preventDefault();
      setActive(i);
    }
  };

  const handleKeyDown = (i: number, e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`flex ${vertical ? 'flex-col' : 'flex-row'} w-full max-w-full [perspective:1400px] max-[640px]:!flex-col max-[640px]:[perspective:none] ${className}`}
      style={{
        gap: `${gap}px`,
        height: vertical ? `${Math.round(height * 1.6)}px` : undefined,
        minHeight: `${height}px`,
      }}
      role="list"
      aria-label="Saudi Destinations Accordion Gallery"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const Tag = item.link ? Link : 'div';
        const tagProps = item.link ? { href: item.link } : {};

        return (
          <Tag
            key={item.label || i}
            ref={(el: HTMLElement | null) => {
              panelRefs.current[i] = el;
            }}
            {...(tagProps as any)}
            className="group relative block min-w-0 min-h-0 flex-[1_1_0] cursor-pointer overflow-hidden bg-[#0D241C] border border-[#2E6B57]/35 hover:border-[#39C27D]/80 no-underline outline-none [transform-style:preserve-3d] [transform-origin:center] shadow-xl hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-[#39C27D] max-[640px]:min-h-[130px] max-[640px]:!transform-none transition-[border-color,box-shadow] duration-300"
            style={
              {
                borderRadius: `${radius}px`,
                '--ag-accent': accentColor,
                willChange: 'flex-grow, transform',
              } as CSSProperties
            }
            onClick={(e: any) => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={(e: any) => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
          >
            {/* Background Media Container (Edge to edge on mobile, accordion on desktop) */}
            <span className="absolute inset-0 overflow-hidden [border-radius:inherit]">
              <span
                ref={(el: HTMLElement | null) => {
                  mediaRefs.current[i] = el;
                }}
                className="absolute top-1/2 left-1/2 [filter:grayscale(var(--ag-gray,1))_contrast(1.08)] group-hover:[filter:grayscale(0)_contrast(1)] transition-[filter] duration-500 max-[640px]:!w-full max-[640px]:!h-full max-[640px]:!left-0 max-[640px]:!top-0 max-[640px]:!transform-none"
                style={{
                  width: vertical ? '100%' : 'var(--ag-media-size, 320px)',
                  height: vertical ? 'var(--ag-media-size, 320px)' : '100%',
                  willChange: 'transform, filter',
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt || item.label || 'Saudi destination preview'}
                  draggable={false}
                  className="block h-full w-full select-none object-cover [-webkit-user-drag:none] scale-105 group-hover:scale-110 transition-transform duration-700"
                />
              </span>

              {/* Atmospheric Dark & Emerald Overlay */}
              <span
                className="pointer-events-none absolute inset-0"
                style={{ background: overlayBg }}
                aria-hidden="true"
              />
            </span>

            {/* Top Minimal Index Tag */}
            {item.index && (
              <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10 font-mono text-xs font-semibold text-[#39C27D] bg-[#0F2E23]/80 px-2.5 py-1 rounded-full border border-[#2E6B57]/40 shadow-xs">
                {item.index}
              </span>
            )}

            {/* Bottom Label and Details */}
            {showLabels && (
              <span
                className="pointer-events-none absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-[2] flex items-end justify-between gap-3"
                aria-hidden="true"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span
                    ref={(el: HTMLElement | null) => {
                      barRefs.current[i] = el;
                    }}
                    className="h-[28px] sm:h-[32px] w-[3.5px] flex-none rounded-[3px] opacity-0"
                    style={{
                      background: accentColor,
                      boxShadow: `0 0 12px color-mix(in srgb, ${accentColor} 60%, transparent)`,
                    }}
                  />
                  <div
                    ref={(el: HTMLElement | null) => {
                      textRefs.current[i] = el;
                    }}
                    className="opacity-0 space-y-0.5"
                  >
                    <span
                      className="block overflow-hidden text-ellipsis whitespace-nowrap text-base sm:text-xl font-heading font-medium tracking-tight text-white"
                      style={{ color: textColor }}
                    >
                      {item.label}
                    </span>
                    {item.sublabel && (
                      <span className="block text-[11px] sm:text-xs font-mono text-[#39C27D] font-normal tracking-wide">
                        {item.sublabel}
                      </span>
                    )}
                  </div>
                </div>

                <span className="font-mono text-[10px] text-[#DAD6CD]/60 flex-shrink-0 hidden sm:inline-block">
                  © 2026
                </span>
              </span>
            )}
          </Tag>
        );
      })}
    </div>
  );
}

export default AccordionGallery;
