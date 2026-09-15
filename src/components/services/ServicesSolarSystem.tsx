'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import {
  Compass,
  PlaneTakeoff,
  Briefcase,
  FileCheck,
  Heart,
  ArrowRight,
  MessageCircle,
  X,
  ChevronRight,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { services, Service, ServiceCategory } from '@/data/services';
import { siteConfig } from '@/data/site';

/* ── Category Config ── */
interface CategoryConfig {
  id: ServiceCategory;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
  iconName: string;
  accentColor: string;
}

const CATEGORIES: CategoryConfig[] = [
  {
    id: 'bespoke',
    number: '01',
    title: 'Bespoke & Luxury',
    subtitle: 'Customized Expeditions & Island Buyouts',
    tagline: 'Tailored itineraries crafted with zero templates',
    description:
      'From custom Saudi desert glamping and private dune bashing to Maldives overwater villa buyouts and luxury island-hopping catamarans.',
    image: '/images/service-bespoke.png',
    badge: 'Signature Curation',
    iconName: 'Compass',
    accentColor: '#2E6B57',
  },
  {
    id: 'aviation',
    number: '02',
    title: 'Aviation & Mobility',
    subtitle: 'VIP Jet Charters & Executive Fleets',
    tagline: 'Direct FBO tarmac access & Maybach chauffeurs',
    description:
      'Charter private jets with custom manifests, executive Maybach fleet transfers, and first/business cabin allotments worldwide.',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80',
    badge: 'VIP Aviation',
    iconName: 'PlaneTakeoff',
    accentColor: '#0F2E23',
  },
  {
    id: 'corporate',
    number: '03',
    title: 'Corporate & MICE',
    subtitle: 'Global Summits & Executive Retreats',
    tagline: 'Turnkey exhibition production & DMC handling',
    description:
      'End-to-end management for global conferences, executive retreats, team-building trips, and on-ground Saudi DMC dispatch control.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80',
    badge: 'Enterprise B2B',
    iconName: 'Briefcase',
    accentColor: '#2E6B57',
  },
  {
    id: 'concierge',
    number: '04',
    title: 'Logistics & Visas',
    subtitle: 'Global Visa & Concierge Services',
    tagline: 'Door-to-door passport routing & 150+ country IDPs',
    description:
      'Express eVisas, Schengen/UK/US appointment assistance, international driving permits, and worldwide insurance policies.',
    image: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=800&q=80',
    badge: 'Express Desk',
    iconName: 'FileCheck',
    accentColor: '#6D8377',
  },
  {
    id: 'wellness',
    number: '05',
    title: 'Spiritual & Wellness',
    subtitle: 'Umrah VIP & Holistic Sanctuaries',
    tagline: '5-Star Haram-view suites & desert thermal spas',
    description:
      'Profound Umrah journeys with historian Ziyarah tours combined with holistic wellness retreats in AlUla and the Swiss Alps.',
    image: '/images/saudi-madinah.jpg',
    badge: 'Spiritual VIP',
    iconName: 'Heart',
    accentColor: '#2E6B57',
  },
];

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5" />,
  PlaneTakeoff: <PlaneTakeoff className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  FileCheck: <FileCheck className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
};

// Build 10-slot array (each category duplicated) for denser cylinder
const SLOTS = [...CATEGORIES, ...CATEGORIES];
const SLOT_COUNT = SLOTS.length;
const SLOT_ANGLE = 360 / SLOT_COUNT; // 36 degrees

/* ── Desktop 3D Carousel ── */
function DesktopCarousel({
  onSelectCategory,
}: {
  onSelectCategory: (cat: CategoryConfig) => void;
}) {
  const cylinderRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const rafRef = useRef<number>(0);
  const lastPointerXRef = useRef(0);

  // Animation loop: apply angle + friction
  useEffect(() => {
    const loop = () => {
      if (!isDraggingRef.current) {
        velocityRef.current *= 0.94; // friction
        if (Math.abs(velocityRef.current) < 0.01) velocityRef.current = 0;
      }
      angleRef.current += velocityRef.current;

      if (cylinderRef.current) {
        cylinderRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Pointer drag
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDraggingRef.current = true;
    lastPointerXRef.current = e.clientX;
    velocityRef.current = 0;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastPointerXRef.current;
    lastPointerXRef.current = e.clientX;
    const sens = 0.3;
    angleRef.current += dx * sens;
    velocityRef.current = dx * sens;
  }, []);

  const handlePointerUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  // Wheel → horizontal rotation
  const handleWheel = useCallback((e: React.WheelEvent) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    velocityRef.current += delta * 0.08;
  }, []);

  // Sphere size based on viewport
  const sphereSize = typeof window !== 'undefined' && window.innerWidth < 1024 ? 340 : 440;
  const radius = typeof window !== 'undefined' && window.innerWidth < 1024 ? 580 : 760;

  return (
    <div
      ref={viewportRef}
      className="sphere-carousel-viewport relative w-full cursor-grab active:cursor-grabbing select-none"
      style={{ height: `${sphereSize + 200}px` }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onWheel={handleWheel}
    >
      {/* Pivot — centered */}
      <div
        className="sphere-carousel-pivot absolute"
        style={{
          width: sphereSize,
          height: sphereSize,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Cylinder — rotates around Y */}
        <div ref={cylinderRef} className="sphere-carousel-cylinder w-full h-full">
          {SLOTS.map((cat, i) => (
            <div
              key={`${cat.id}-${i}`}
              className="sphere-item group"
              style={{
                transformOrigin: `50% 50% ${radius}px`,
                transform: `translateZ(${-radius}px) rotateY(${-i * SLOT_ANGLE}deg)`,
              }}
              onClick={() => onSelectCategory(cat)}
            >
              {/* Rim glow */}
              <div className="absolute inset-0 rounded-full sphere-item-rim pointer-events-none z-10 border-2 border-[#0F2E23]/20 group-hover:border-[#2E6B57] transition-colors duration-500" />

              {/* Inner image with animated pulse */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="sphere-item-inner-media w-full h-full object-cover"
                  loading="lazy"
                  draggable={false}
                  style={{ animationDelay: `${-i * 3}s` }}
                />
              </div>

              {/* Dark vignette gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#0F2E23]/75 via-[#0F2E23]/15 to-transparent group-hover:from-[#0F2E23]/55 transition-colors duration-500 pointer-events-none z-20" />

              {/* Badges only — no title inside circle */}
              <div className="absolute inset-0 rounded-full flex flex-col justify-start p-8 z-30 pointer-events-none overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#E7E1D8]/80 bg-[#0F2E23]/50 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                    {cat.number}
                  </span>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#F4EFE6] bg-[#2E6B57]/70 px-3 py-1 rounded-full backdrop-blur-md border border-white/15">
                    {cat.badge}
                  </span>
                </div>
              </div>

              {/* ── Service name BELOW the circle ── */}
              <div
                className="absolute left-0 right-0 text-center pointer-events-none z-40"
                style={{ top: '100%', paddingTop: '14px' }}
              >
                <h3 className="text-base lg:text-lg font-serif font-semibold text-[#0F2E23] leading-tight">
                  {cat.title}
                </h3>
                <p className="text-[11px] text-[#2E6B57] font-sans mt-0.5 line-clamp-1 font-medium">
                  {cat.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drag hint */}
      <div className="absolute bottom-0 left-0 right-0 text-center pb-2">
        <span className="text-xs font-mono text-[#0F2E23]/40 tracking-wider uppercase">
          Drag or scroll to explore
        </span>
      </div>
    </div>
  );
}

/* ── Mobile Snap-Scroll Strip ── */
function MobileCarousel({
  onSelectCategory,
}: {
  onSelectCategory: (cat: CategoryConfig) => void;
}) {
  return (
    <div className="sphere-mobile-track">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          type="button"
          className="sphere-mobile-item relative group flex flex-col items-center"
          style={{ width: 260 }}
          onClick={() => onSelectCategory(cat)}
        >
          {/* Circle container */}
          <div className="relative" style={{ width: 260, height: 260 }}>
            {/* Rim */}
            <div className="absolute inset-0 rounded-full border-2 border-[#0F2E23]/20 group-active:border-[#2E6B57] transition-colors z-10 pointer-events-none" />

            {/* Image */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover sphere-item-inner-media"
                loading="lazy"
                draggable={false}
              />
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#0F2E23]/75 via-[#0F2E23]/15 to-transparent pointer-events-none z-20" />

            {/* Badges only inside circle */}
            <div className="absolute inset-0 rounded-full flex flex-col justify-start p-6 z-30 pointer-events-none overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#E7E1D8]/80 bg-[#0F2E23]/50 px-2 py-0.5 rounded-full backdrop-blur-md">
                  {cat.number}
                </span>
                <span className="text-[9px] font-mono font-semibold uppercase text-[#F4EFE6] bg-[#2E6B57]/70 px-2 py-0.5 rounded-full backdrop-blur-md">
                  {cat.badge}
                </span>
              </div>
            </div>
          </div>

          {/* ── Service name BELOW the circle ── */}
          <div className="mt-3 text-center px-2">
            <h3 className="text-base font-serif font-semibold text-[#0F2E23] leading-tight">
              {cat.title}
            </h3>
            <p className="text-[11px] text-[#2E6B57] font-sans mt-0.5 line-clamp-1 font-medium">
              {cat.tagline}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}

/* ── Category Detail Modal ── */
function CategoryModal({
  category,
  categoryServices,
  onClose,
}: {
  category: CategoryConfig;
  categoryServices: Service[];
  onClose: () => void;
}) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0F2E23]/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#F4EFE6] text-[#0F2E23] shadow-2xl border border-[#0F2E23]/15 z-10 animate-[fadeInScale_0.35s_ease-out]">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#F4EFE6]/95 backdrop-blur-md px-6 sm:px-10 py-6 border-b border-[#0F2E23]/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0F2E23] text-[#F4EFE6] flex items-center justify-center shadow-md">
              {ICON_MAP[category.iconName]}
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#2E6B57] font-semibold block">
                Category {category.number} • {category.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#0F2E23]">
                {category.title}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#0F2E23]/8 hover:bg-[#0F2E23] hover:text-[#F4EFE6] text-[#0F2E23] transition-colors flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-10 space-y-8">
          <p className="text-[#0F2E23]/75 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
            {category.description}
          </p>

          {/* Sub-service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryServices.map((service) => (
              <div
                key={service.slug}
                className="group bg-white rounded-2xl p-6 border border-[#0F2E23]/10 shadow-sm hover:shadow-xl hover:border-[#2E6B57]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0F2E23]/8 text-[#0F2E23]">
                      {service.badge}
                    </span>
                    {service.responseSpeed && (
                      <span className="text-[11px] font-mono text-[#2E6B57] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {service.responseSpeed}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#0F2E23] mb-1 group-hover:text-[#2E6B57] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#2E6B57] font-medium mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#0F2E23]/70 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-[#0F2E23]/8">
                    {service.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#0F2E23]/80">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#2E6B57] flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#0F2E23]/8">
                  <a
                    href={`${siteConfig.whatsapp}?text=${encodeURIComponent(`Inquiry for ${service.title} (${service.categoryLabel})`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#0F2E23] text-[#F4EFE6] text-xs font-medium hover:bg-[#2E6B57] transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Category switcher pills */}
          <div className="pt-8 border-t border-[#0F2E23]/10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0F2E23]/50 block mb-3">
              Switch Category
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((c) => (
                <span
                  key={c.id}
                  className={`px-4 py-2 rounded-full text-xs font-medium ${
                    category.id === c.id
                      ? 'bg-[#0F2E23] text-[#F4EFE6] shadow-md'
                      : 'bg-white text-[#0F2E23]/70'
                  }`}
                >
                  {c.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Export ── */
export function ServicesSolarSystem() {
  const [activeCategory, setActiveCategory] = useState<CategoryConfig | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const categoryServicesMap = useMemo(() => {
    const map: Record<ServiceCategory, Service[]> = {
      bespoke: [],
      aviation: [],
      corporate: [],
      concierge: [],
      wellness: [],
      educational: [],
      ladies: [],
    };
    services.forEach((s) => {
      if (map[s.category]) map[s.category].push(s);
    });
    return map;
  }, []);

  const handleSelect = useCallback((cat: CategoryConfig) => {
    setActiveCategory(cat);
  }, []);

  return (
    <div className="relative w-full overflow-hidden select-none py-8 md:py-12">
      {isMobile ? (
        <MobileCarousel onSelectCategory={handleSelect} />
      ) : (
        <DesktopCarousel onSelectCategory={handleSelect} />
      )}

      {/* Category Detail Modal */}
      {activeCategory && (
        <CategoryModal
          category={activeCategory}
          categoryServices={categoryServicesMap[activeCategory.id] || []}
          onClose={() => setActiveCategory(null)}
        />
      )}
    </div>
  );
}
