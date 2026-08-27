'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, CheckCircle2, ShieldCheck, ArrowRight, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { HomepageService, services as fullServicesList } from '@/data/services';
import { siteConfig } from '@/data/site';

interface HaoqiServiceModalProps {
  service: HomepageService | null;
  onClose: () => void;
}

export function HaoqiServiceModal({ service, onClose }: HaoqiServiceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  // Find matching detailed service from full list if available
  const fullDetail = fullServicesList.find(
    (s) => s.title.toLowerCase().includes(service.title.toLowerCase()) || service.title.toLowerCase().includes(s.title.toLowerCase())
  );

  const whatsappMessage = `Hello Yalla Voyage Concierge, I would like to inquire about technical details and bookings for: ${service.title}.`;
  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-[#081510]/85 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content Box */}
      <div className="relative w-full max-w-4xl bg-[#0D241C] border border-[#2E6B57]/50 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.8)] z-10 text-[#F4EFE6] max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A1D16]">
          <div className="flex items-center gap-3 font-mono text-xs text-[#2E6B57]">
            <span className="w-2 h-2 rounded-full bg-[#2E6B57] animate-pulse" />
            <span>SERVICE SPECIFICATION [{service.index}]</span>
            <span className="text-white/30">•</span>
            <span className="text-white/60 uppercase">YALLA VOYAGE ECOSYSTEM</span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors border border-white/10 font-mono text-xs"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Top Banner Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E6B57]/20 border border-[#2E6B57]/40 text-xs font-mono text-[#D4B896] uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{fullDetail?.categoryLabel || 'VIP EXECUTIVE SERVICE'}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-light text-[#F4EFE6] leading-tight mb-3">
                {service.title}
              </h2>

              <p className="text-sm text-[#F4EFE6]/80 font-sans leading-relaxed mb-6">
                {service.tagline}
              </p>

              <div className="flex items-center gap-4 text-xs font-mono text-white/60 border-t border-white/10 pt-4">
                <div className="flex items-center gap-1.5 text-[#2E6B57]">
                  <Clock className="w-4 h-4" />
                  <span>{fullDetail?.responseSpeed || '< 15 MINS RESPONSE'}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4B896]" />
                  <span>GUARANTEED PRIVACY</span>
                </div>
              </div>
            </div>

            {/* Image Preview Box */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 shadow-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D241C] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-black/60 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/10">
                ASSET ID: YV-{service.index}-PROD
              </div>
            </div>
          </div>

          {/* Key Inclusions & Tech Spec Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            {/* Highlights */}
            <div className="bg-[#0A1D16] p-5 rounded-2xl border border-white/10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#D4B896] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4B896]" />
                Executive Highlights
              </h3>
              <ul className="space-y-3 font-sans text-xs text-[#F4EFE6]/80">
                {(fullDetail?.highlights || [
                  '100% custom itinerary & private access',
                  'Dedicated 24/7 personal travel designer',
                  'VIP airport tarmac & lounge privileges',
                  'End-to-end discreet coordination',
                ]).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E6B57] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inclusions */}
            <div className="bg-[#0A1D16] p-5 rounded-2xl border border-white/10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#2E6B57] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E6B57]" />
                Turnkey Inclusions
              </h3>
              <ul className="space-y-3 font-sans text-xs text-[#F4EFE6]/80">
                {(fullDetail?.inclusions || [
                  'Full logistics, permits & insurance documentation',
                  'Multilingual executive hostesses & ground handlers',
                  'Real-time WhatsApp updates & flight tracking',
                  'Flexible re-routing & priority re-booking desk',
                ]).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4B896] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="p-6 bg-[#0A1D16] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-white/50">
            SPEC ID: [YV-SPEC-{service.index}] • STATUS: AVAILABLE
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-black font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-widest transition-colors border border-white/15"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
