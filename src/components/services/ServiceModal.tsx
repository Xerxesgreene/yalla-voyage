'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Phone,
  ShieldCheck,
  Clock,
  ArrowRight,
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
} from 'lucide-react';
import { Service } from '@/data/services';
import { siteConfig } from '@/data/site';

const iconMap: Record<string, React.ReactNode> = {
  Package: <Package className="w-6 h-6" />,
  Mountain: <Mountain className="w-6 h-6" />,
  Car: <Car className="w-6 h-6" />,
  Presentation: <Presentation className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
  Plane: <Plane className="w-6 h-6" />,
  FileCheck: <FileCheck className="w-6 h-6" />,
  PlaneTakeoff: <PlaneTakeoff className="w-6 h-6" />,
  Crown: <Crown className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Ship: <Ship className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  User: <User className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
  Palmtree: <Palmtree className="w-6 h-6" />,
};

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  // Close on escape key and lock body scroll
  useEffect(() => {
    if (!service) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello يلا سفر, I am interested in booking or receiving a custom quote for "${service.title}".`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-charcoal/70 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Incursive Pop-Up Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 12, y: 40 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, rotateX: -6, y: 25 }}
          transition={{
            type: 'spring',
            damping: 26,
            stiffness: 280,
          }}
          style={{ transformPerspective: 1200 }}
          className="relative w-full max-w-3xl bg-ivory rounded-3xl shadow-2xl border border-sage/30 overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-charcoal/50 hover:bg-charcoal text-ivory flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer shadow-lg hover:scale-105"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Banner */}
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full flex-shrink-0 bg-charcoal">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-transparent" />

            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-champagne text-charcoal">
                    {service.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-ivory/20 backdrop-blur-md text-ivory">
                    {service.categoryLabel}
                  </span>
                </div>
                <h2 className="text-display text-2xl sm:text-3xl md:text-4xl text-ivory leading-tight">
                  {service.title}
                </h2>
              </div>

              <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-ivory/90 backdrop-blur-md text-forest items-center justify-center shadow-lg flex-shrink-0">
                {iconMap[service.icon] || <Package className="w-6 h-6" />}
              </div>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Tagline & Description */}
            <div>
              <p className="text-forest font-medium text-base mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-champagne" />
                {service.tagline}
              </p>
              <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="bg-mist/30 rounded-2xl p-5 border border-sage/20">
              <h4 className="text-xs font-bold uppercase tracking-widest text-forest mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-forest" />
                Key Highlights & VIP Privileges
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions List */}
            <div className="border border-sage/15 rounded-2xl p-5 bg-ivory">
              <h4 className="text-xs font-bold uppercase tracking-widest text-forest mb-3">
                Included in This Service
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.inclusions.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Guarantee Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-charcoal/60 bg-forest/5 p-4 rounded-xl border border-forest/10">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-forest" />
                <span>Concierge Turnaround: <strong>{service.responseSpeed || '< 15 mins'}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-forest" />
                <span>100% Bespoke Curation Guarantee</span>
              </div>
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="p-6 bg-ivory border-t border-sage/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-charcoal/60 text-center sm:text-left">
              Speak directly with our senior travel designer for this service.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-sage/30 text-charcoal text-xs font-medium hover:bg-forest-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> Call Desk
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20BA5C] shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" /> Inquire via WhatsApp <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
