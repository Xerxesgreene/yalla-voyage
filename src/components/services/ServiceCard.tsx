'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Package,
  Mountain,
  Car,
  Presentation,
  MapPin,
  Plane,
  FileCheck,
  PlaneTakeoff,
  Crown,
  Users,
  Ship,
  Shield,
  User,
  Star,
  Leaf,
  Palmtree,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Eye,
  MessageCircle,
} from 'lucide-react';
import { Service } from '@/data/services';
import { siteConfig } from '@/data/site';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  Package: <Package className="w-5 h-5" />,
  Mountain: <Mountain className="w-5 h-5" />,
  Car: <Car className="w-5 h-5" />,
  Presentation: <Presentation className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  Plane: <Plane className="w-5 h-5" />,
  FileCheck: <FileCheck className="w-5 h-5" />,
  PlaneTakeoff: <PlaneTakeoff className="w-5 h-5" />,
  Crown: <Crown className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Ship: <Ship className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  User: <User className="w-5 h-5" />,
  Star: <Star className="w-5 h-5" />,
  Leaf: <Leaf className="w-5 h-5" />,
  Palmtree: <Palmtree className="w-5 h-5" />,
};

interface ServiceCardProps {
  service: Service;
  index: number;
  onOpenModal: (service: Service) => void;
}

export function ServiceCard({ service, index, onOpenModal }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 280,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 280,
    damping: 25,
  });

  // Spotlight gradient coordinates
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), {
    stiffness: 300,
    damping: 30,
  });
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), {
    stiffness: 300,
    damping: 30,
  });

  // GSAP 3D Scroll Entrance with rotating perspective
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const angleY = (index % 3 - 1) * 12; // -12deg, 0deg, +12deg based on column
    const angleX = 22; // tilt down initially

    gsap.set(el, {
      opacity: 0,
      y: 75,
      scale: 0.9,
      rotationX: angleX,
      rotationY: angleY,
      transformPerspective: 1100,
      filter: 'blur(8px)',
    });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          filter: 'blur(0px)',
          duration: 0.95,
          delay: (index % 4) * 0.08,
          ease: 'power3.out',
          clearProps: 'filter,transformPerspective',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello Yalla Voyage, I would like to inquire about your "${service.title}" service.`
  )}`;

  return (
    <div
      ref={cardRef}
      className="perspective-1000 group relative h-full"
      style={{ opacity: 0 }} // Initially hidden until GSAP kicks in
    >
      <motion.div
        className="relative h-full rounded-2xl bg-ivory/80 backdrop-blur-md border border-sage/20 hover:border-champagne/60 transition-colors duration-500 overflow-hidden flex flex-col justify-between shadow-[0_4px_24px_-4px_rgba(38,53,31,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(38,53,31,0.18)]"
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Specular Light Cursor Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(400px circle at ${glowX.get()}% ${glowY.get()}%, rgba(201, 185, 139, 0.22), transparent 70%)`,
          }}
        />

        {/* Top Visual Section */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-charcoal/10 flex-shrink-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />

          {/* Badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-ivory/90 backdrop-blur-md text-forest border border-sage/20 shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-champagne" />
              {service.categoryLabel}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-forest/80 backdrop-blur-md text-champagne border border-champagne/30">
              {service.badge}
            </span>
          </div>

          {/* Number & Icon Overlay */}
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-ivory/90 backdrop-blur-md text-forest flex items-center justify-center shadow-md group-hover:bg-champagne group-hover:text-charcoal transition-all duration-300 transform group-hover:scale-105">
                {iconMap[service.icon] || <Package className="w-5 h-5" />}
              </div>
              <span className="text-display text-2xl text-ivory/40 font-light">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            {service.responseSpeed && (
              <span className="text-[11px] text-ivory/70 bg-charcoal/60 backdrop-blur-xs px-2 py-0.5 rounded-md border border-ivory/10">
                {service.responseSpeed}
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-display text-xl sm:text-2xl text-charcoal mb-2 leading-tight group-hover:text-forest transition-colors">
              {service.title}
            </h3>
            <p className="text-charcoal/60 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
              {service.description}
            </p>

            {/* Highlights preview */}
            <div className="space-y-1.5 mb-5">
              {service.highlights.slice(0, 2).map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-charcoal/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage flex-shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-sage/15 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onOpenModal(service)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest hover:text-champagne transition-colors cursor-pointer py-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              Quick View
            </button>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium bg-forest text-ivory px-3.5 py-1.5 rounded-full hover:bg-deep-olive hover:shadow-md transition-all duration-300 group-hover:translate-x-0.5"
            >
              <MessageCircle className="w-3 h-3 text-champagne" />
              Inquire
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
