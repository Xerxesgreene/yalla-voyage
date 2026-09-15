'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Compass,
} from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, StaggerReveal } from '@/components/ui/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { services, Service, ServiceCategory } from '@/data/services';
import { siteConfig } from '@/data/site';

type FilterId = 'all' | ServiceCategory;

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');

  const filteredServices =
    activeFilter === 'all'
      ? services
      : services.filter((s) => s.category === activeFilter);

  const filters: { id: FilterId; label: string }[] = [
    { id: 'all', label: 'All Services' },
    { id: 'bespoke', label: 'Signature Journeys' },
    { id: 'wellness', label: 'Wellness & Retreat' },
    { id: 'educational', label: 'Educational Tours' },
    { id: 'ladies', label: 'Ladies Trips' },
    { id: 'aviation', label: 'VIP Mobility' },
    { id: 'corporate', label: 'Corporate & Events' },
    { id: 'concierge', label: 'Concierge & Logistics' },
  ];

  return (
    <main className="bg-[#F4EFE6] text-[#0F2E23] overflow-hidden">
      {/* ── EDITORIAL CINEMATIC HERO BANNER ── */}
      <PageHero
        title="Architected Services"
        subtitle="Bespoke travel curated with precision, discretion, and personalized care."
        image="/images/header-real-services.jpg"
        alt="Lake Como and Bellagio Waterfront, Italy"
        positionClass="object-center"
      />

      {/* ── VALUE PILLARS (Crisp White Background) ── */}
      <section className="py-16 md:py-20 bg-white border-b border-[#0F2E23]/10">
        <div className="container-wide">
          <SectionHeading
            badge="THE YALLA VOYAGE ADVANTAGE"
            title="Native Mastery, Royal Protocol & White-Glove Delivery."
            description="Delivering unparalleled operational perfection, confidential protocol access, and authentic luxury concierge stewardship across every journey."
          />

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.08}>
            <div className="group p-8 rounded-3xl bg-[#0F2E23] border border-[#2E6B57]/40 hover:border-[#39C27D] hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#39C27D]/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10 group-hover:bg-[#39C27D]/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-[#39C27D] flex items-center justify-center mb-5 group-hover:bg-[#39C27D] group-hover:text-[#0F2E23] transition-all duration-300 shadow-sm">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display text-[#F4EFE6] mb-2.5 font-semibold">
                  Tailored Without Templates
                </h3>
                <p className="text-[#F4EFE6]/75 text-xs sm:text-sm leading-relaxed font-light font-sans">
                  Every itinerary operates on zero templates. From private island buyouts to historian-led excavations, each agenda is curated from a blank canvas.
                </p>
              </div>
            </div>

            <div className="group p-8 rounded-3xl bg-[#0F2E23] border border-[#2E6B57]/40 hover:border-[#39C27D] hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#39C27D]/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10 group-hover:bg-[#39C27D]/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-[#39C27D] flex items-center justify-center mb-5 group-hover:bg-[#39C27D] group-hover:text-[#0F2E23] transition-all duration-300 shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display text-[#F4EFE6] mb-2.5 font-semibold">
                  Guaranteed Response SLA
                </h3>
                <p className="text-[#F4EFE6]/75 text-xs sm:text-sm leading-relaxed font-light font-sans">
                  Backed by our direct senior desk. Urgent requests, flight re-routings, and visa fast-tracks receive dedicated priority liaison.
                </p>
              </div>
            </div>

            <div className="group p-8 rounded-3xl bg-[#0F2E23] border border-[#2E6B57]/40 hover:border-[#39C27D] hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#39C27D]/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10 group-hover:bg-[#39C27D]/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-[#39C27D] flex items-center justify-center mb-5 group-hover:bg-[#39C27D] group-hover:text-[#0F2E23] transition-all duration-300 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display text-[#F4EFE6] mb-2.5 font-semibold">
                  VIP Confidentiality & NDA
                </h3>
                <p className="text-[#F4EFE6]/75 text-xs sm:text-sm leading-relaxed font-light font-sans">
                  Diplomats, high-net-worth families, and executive C-suites trust our discreet coordination. All movements are protected with stringent confidentiality protocols.
                </p>
              </div>
            </div>
          </StaggerReveal>
        </div>
      </section>

      {/* ── SERVICES SHOWCASE (Warm Ivory #F4EFE6) ── */}
      <section id="services-list" className="py-16 md:py-24 bg-[#F4EFE6] border-b border-[#0F2E23]/10">
        <div className="container-wide">
          {/* Section Heading */}
          <SectionHeading
            badge="OUR SERVICES"
            title="Distinct Dimensions of Bespoke Luxury."
            description="Specialized travel services engineered to give you complete operational control, absolute privacy, and white-glove delivery."
          />

          {/* Filter Pills Controls Bar (Consistent with Separate Saudi Page) */}
          <div className="flex items-center gap-2 flex-wrap mb-12 pb-8 border-b border-[#0F2E23]/10">
            {filters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#0F2E23] text-[#F4EFE6] shadow-md scale-102 ring-2 ring-[#0F2E23]/20'
                    : 'bg-white text-[#0F2E23]/70 hover:bg-white hover:text-[#0F2E23] border border-[#0F2E23]/10 hover:border-[#2E6B57]/30 shadow-xs'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Service Cards (Matching Exact Sizing & Clean Design of Saudi Page) */}
          <div className="space-y-10">
            {filteredServices.map((service, idx) => (
              <ServiceDivisionCard key={service.slug} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL BUSINESS CTA (Warm Ivory Base) ── */}
      <section className="py-20 md:py-24 bg-[#F4EFE6] text-center relative overflow-hidden">
        <div className="container-wide max-w-2xl mx-auto relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2E23] text-[#F4EFE6] text-[11px] font-mono font-bold tracking-widest uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39C27D] animate-pulse inline-block" />
              <span>YALLA VOYAGE PRIVATE CLIENT DESK</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-[#0F2E23] mb-5 leading-[1.08]">
              Your bespoke journey begins here.
              <br />
              <span className="font-semibold italic text-[#2E6B57] font-serif">
                Crafted by Yalla Voyage.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-[#0F2E23]/70 mb-8 max-w-md mx-auto font-light leading-relaxed font-sans">
              Connect directly with our senior travel designers to architect a seamless, bespoke journey tailored to your exact preferences.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                  'Hello Yalla Voyage! Please help me curate a private luxury itinerary.'
                )}`}
                target="_blank"
                variant="primary"
              >
                Consult With Yalla Voyage <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full border border-[#0F2E23]/20 text-[#0F2E23] text-xs font-semibold uppercase tracking-wider hover:bg-[#0F2E23] hover:text-[#F4EFE6] transition-all font-sans bg-white shadow-xs"
              >
                Inquire Online
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SERVICE CARD — Proportioned Exactly Like the Saudi Page
   (Clean alternating layout, no division numberings, no per-card buttons)
   ═══════════════════════════════════════════════════════════════ */
function ServiceDivisionCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const topHighlights = service.highlights.slice(0, 4);

  return (
    <Reveal>
      <div
        id={service.slug}
        className="scroll-mt-24 bg-white rounded-3xl overflow-hidden border border-[#0F2E23]/10 shadow-lg hover:shadow-2xl transition-shadow duration-500 text-[#0F2E23]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Media Side */}
          <div
            className={`lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] overflow-hidden group bg-[#0F2E23] ${
              !isEven ? 'lg:order-2' : ''
            }`}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Atmospheric Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23]/60 via-transparent to-transparent pointer-events-none" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-white/95 text-[#0F2E23] backdrop-blur-md border border-white/20 shadow-xs">
                {service.badge}
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`lg:col-span-6 p-7 sm:p-9 lg:p-10 flex flex-col justify-center ${
              !isEven ? 'lg:order-1' : ''
            }`}
          >
            {/* Header Kicker (No numbering) */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#2E6B57] font-semibold mb-2.5 uppercase tracking-wider">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#39C27D]" />
              <span>{service.categoryLabel}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-display font-light text-[#0F2E23] mb-2 leading-tight tracking-tight">
              {service.title}
            </h2>

            {/* Tagline */}
            <p className="text-[#2E6B57] font-serif italic text-sm sm:text-base mb-3">
              &ldquo;{service.tagline}&rdquo;
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#0F2E23]/75 font-light leading-relaxed mb-6 font-sans">
              {service.description}
            </p>

            {/* Highlights / Capabilities Pills */}
            <div className="flex flex-wrap gap-2">
              {topHighlights.map((highlight, hIdx) => (
                <span
                  key={hIdx}
                  className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] text-[#0F2E23]/80 text-xs font-medium border border-[#0F2E23]/8 flex items-center gap-1.5 font-sans hover:bg-[#EAE3D5] transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B57] flex-shrink-0" />
                  <span>{highlight}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
