'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Clock,
  MessageCircle,
  Calendar,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { TravelPackage } from '@/data/packages';
import { siteConfig } from '@/data/site';

interface PackageModalProps {
  pkg: TravelPackage | null;
  onClose: () => void;
}

export function PackageModal({ pkg, onClose }: PackageModalProps) {
  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!pkg) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pkg, onClose]);

  if (!pkg) return null;

  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello Yalla Voyage, I would like to inquire about the "${pkg.title}" package (${pkg.duration}).`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#06150E]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#0F2E23]/10 z-10 my-8 text-[#0F2E23]"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Visual */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0F2E23]">
            <Image
              src={pkg.image}
              alt={pkg.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 680px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23] via-[#0F2E23]/40 to-transparent" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#39C27D] text-[#0F2E23] shadow-md">
                {pkg.badge}
              </span>
              <span className="px-3 py-1.5 rounded-full text-[11px] font-mono font-medium bg-black/50 text-white backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#39C27D]" />
                {pkg.duration}
              </span>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-xs font-mono uppercase tracking-widest text-[#39C27D] font-semibold block mb-1">
                Curated Itinerary
              </span>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                }}
                className="text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight drop-shadow-sm"
              >
                {pkg.title}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Tagline Narrative */}
            <p className="text-sm sm:text-[16px] text-[#0F2E23]/80 leading-relaxed font-serif italic">
              &ldquo;{pkg.tagline}&rdquo;
            </p>

            {/* Price & Duration Quick Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#F4EFE6] border border-[#0F2E23]/8">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0F2E23]">
                <Calendar className="w-4 h-4 text-[#2E6B57]" />
                <span>Pacing: <strong className="font-semibold">{pkg.duration}</strong></span>
              </div>
              <div className="text-xs font-mono text-[#2E6B57] font-semibold">
                {pkg.price}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#2E6B57] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#39C27D]" /> Itinerary Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {pkg.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F4EFE6]/60 border border-[#0F2E23]/6 text-xs text-[#0F2E23] font-sans"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2E6B57] flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included Inclusions */}
            {pkg.inclusions && pkg.inclusions.length > 0 && (
              <div className="space-y-3 pt-3 border-t border-[#0F2E23]/8">
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#2E6B57] flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#39C27D]" /> White-Glove Inclusions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {pkg.inclusions.map((inc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-[#0F2E23]/80 font-sans"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39C27D]" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer CTAs */}
          <div className="p-6 bg-[#F4EFE6]/70 border-t border-[#0F2E23]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#0F2E23]/60 text-center sm:text-left">
              100% Customizable for your schedule
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md font-sans"
              >
                <MessageCircle className="w-4 h-4" /> Inquire on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
