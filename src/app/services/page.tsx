'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Clock,
  Award,
  Sparkles,
  MessageCircle,
  ArrowUpRight,
  X,
} from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, StaggerReveal } from '@/components/ui/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { services, Service, ServiceCategory } from '@/data/services';
import { siteConfig } from '@/data/site';

type FilterId = 'all' | ServiceCategory;

export default function ServicesPage() {
  const [filter, setFilter] = useState<FilterId>('all');
  const [activeService, setActiveService] = useState<Service | null>(null);

  const filtered = filter === 'all' ? services : services.filter((s) => s.category === filter);

  const filters: { id: FilterId; label: string }[] = [
    { id: 'all', label: 'All Services' },
    { id: 'bespoke', label: 'Signature Journeys' },
    { id: 'aviation', label: 'VIP Mobility' },
    { id: 'corporate', label: 'Corporate & Events' },
    { id: 'concierge', label: 'Concierge & Logistics' },
    { id: 'spiritual', label: 'Spiritual & Wellness' },
  ];

  return (
    <main className="bg-[#F4EFE6] text-[#0F2E23] overflow-hidden">
      <PageHero
        title="Services"
        subtitle="Every journey delivered with precision, privacy, and personalised care."
        image="/images/header-services.jpg"
        alt="Bespoke Travel Services"
        positionClass="object-center"
      />

      {/* ── SERVICE CARDS SECTION ── */}
      <section className="section-pad bg-[#F4EFE6]">
        <div className="container-wide">

          <SectionHeading
            badge="01 • OUR DIVISIONS"
            title="Tailored around your lifestyle."
            description="Seven distinct service divisions — each designed to give you complete control, privacy, and white-glove delivery."
          />

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap mb-12 pb-8 border-b border-[#0F2E23]/10">
            {filters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#0F2E23] text-[#F4EFE6] shadow-md'
                    : 'bg-white text-[#0F2E23]/70 hover:text-[#0F2E23] border border-[#0F2E23]/10 hover:border-[#2E6B57]/30 shadow-xs'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ── Service Card Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {filtered.map((service, idx) => (
              <Reveal key={service.slug} delay={idx * 0.06}>
                <ServiceCard service={service} onOpen={() => setActiveService(service)} />
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── Trust Pillars Strip ── */}
      <section className="py-16 bg-white border-t border-b border-[#0F2E23]/10">
        <div className="container-wide">
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.08}>
            {[
              {
                icon: Shield,
                title: 'VIP Confidentiality',
                body: 'Strict non-disclosure standards for high-profile individuals, diplomats, and executive leadership.',
              },
              {
                icon: Award,
                title: 'Guaranteed Response SLA',
                body: 'Dedicated concierge desks for every service division — responding within guaranteed time windows.',
              },
              {
                icon: Sparkles,
                title: 'White-Glove Delivery',
                body: 'Every journey managed by a senior travel designer on-ground from departure to return.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-[#F4EFE6]/60 border border-[#0F2E23]/8 flex items-start gap-4 text-[#0F2E23]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F2E23] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#39C27D]" />
                </div>
                <div>
                  <h4 className="font-heading text-base text-[#0F2E23] font-semibold mb-1">{title}</h4>
                  <p className="text-xs sm:text-sm text-[#0F2E23]/65 font-light leading-relaxed font-sans">{body}</p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Detail Modal Overlay ── */}
      {activeService && (
        <ServiceDetailModal service={activeService} onClose={() => setActiveService(null)} />
      )}
    </main>
  );
}

/* ── Service Card Component ── */
function ServiceCard({ service, onOpen }: { service: Service; onOpen: () => void }) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-[#0F2E23]/10 hover:border-[#2E6B57]/40 shadow-sm hover:shadow-xl transition-all duration-400 cursor-pointer flex flex-col text-[#0F2E23]">

      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-[#0F2E23]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-600 group-hover:scale-106"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23]/80 via-black/20 to-transparent pointer-events-none" />

        {/* Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-white/95 text-[#0F2E23] shadow-xs border border-black/5">
            {service.badge}
          </span>
        </div>

        {/* Arrow hover cue */}
        <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/25 group-hover:bg-[#39C27D] group-hover:text-[#06150E] transition-all duration-300">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>

        {/* Category kicker at bottom */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className="text-[11px] font-mono text-[#39C27D] font-semibold uppercase tracking-wider">
            {service.categoryLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          <h3
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
            className="text-xl sm:text-2xl font-normal text-[#0F2E23] leading-tight tracking-tight group-hover:text-[#2E6B57] transition-colors mb-2"
          >
            {service.title}
          </h3>
          <p className="text-xs sm:text-[13px] text-[#0F2E23]/70 font-light leading-relaxed font-sans italic">
            &ldquo;{service.tagline}&rdquo;
          </p>
        </div>

        {/* 3 key highlights */}
        <div className="space-y-1.5">
          {service.highlights.slice(0, 3).map((h, i) => (
            <div key={i} className="flex items-center gap-2 text-[11.5px] font-sans text-[#0F2E23]/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39C27D] flex-shrink-0" />
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="pt-4 border-t border-[#0F2E23]/8 flex items-center justify-between">
          <button
            type="button"
            onClick={onOpen}
            className="text-xs font-mono text-[#2E6B57] hover:text-[#0F2E23] font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" /> View Details
          </button>
          <a
            href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
              `Hello Yalla Voyage, I would like to inquire about: ${service.title}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white text-[11px] font-semibold uppercase tracking-wider transition-all font-sans shadow-md"
          >
            <MessageCircle className="w-3 h-3" /> Inquire
          </a>
        </div>
      </div>
    </article>
  );
}

/* ── Service Detail Modal ── */
function ServiceDetailModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const whatsappHref = `${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello Yalla Voyage, I would like to inquire about: ${service.title}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#06150E]/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#0F2E23]/10 z-10 my-8">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero */}
        <div className="relative h-60 sm:h-72 bg-[#0F2E23]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 680px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23] via-[#0F2E23]/40 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-[#39C27D] text-[#0F2E23]">
              {service.badge}
            </span>
          </div>
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <span className="text-xs font-mono uppercase tracking-widest text-[#39C27D] font-semibold block mb-1">
              {service.categoryLabel}
            </span>
            <h3
              style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}
              className="text-2xl sm:text-3xl text-white font-normal leading-tight"
            >
              {service.title}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[55vh] overflow-y-auto text-[#0F2E23]">
          <p className="text-sm sm:text-[15px] text-[#0F2E23]/80 leading-relaxed font-sans font-light">
            {service.description}
          </p>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#2E6B57] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#39C27D]" /> Service Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F4EFE6]/60 border border-[#0F2E23]/6 text-xs text-[#0F2E23] font-sans"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2E6B57] flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div className="space-y-3 pt-3 border-t border-[#0F2E23]/8">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-[#2E6B57] flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#39C27D]" /> What's Included
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.inclusions.map((inc, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#0F2E23]/80 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39C27D]" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-6 bg-[#F4EFE6]/70 border-t border-[#0F2E23]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#0F2E23]/60">
            <Clock className="w-4 h-4 text-[#2E6B57]" />
            <span>24/7 Dedicated Concierge</span>
          </div>
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
    </div>
  );
}
