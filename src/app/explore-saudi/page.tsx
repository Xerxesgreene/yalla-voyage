'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Sparkles,
  Compass,
  Award,
  ShieldCheck,
  Play,
  CheckCircle2,
} from 'lucide-react';
import { Reveal, StaggerReveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { PageHero } from '@/components/ui/PageHero';
import { saudiDestinations, SaudiDestination } from '@/data/saudi';
import { experiences } from '@/data/experiences';
import { siteConfig } from '@/data/site';

export default function ExploreSaudiPage() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredDestinations =
    activeTab === 'all'
      ? saudiDestinations
      : saudiDestinations.filter((dest) => dest.slug === activeTab);

  return (
    <main className="bg-[#F4EFE6] text-[#0F2E23] overflow-hidden">
      {/* ── EDITORIAL CINEMATIC HERO BANNER ── */}
      <PageHero
        title="Explore Saudi"
        subtitle="Uncover the beauty, heritage and wonders of Arabia."
        image="/images/header-explore-saudi.jpg"
        alt="Explore Saudi Arabia Sanctuary"
        positionClass="object-center"
      />

      {/* ── VALUE PILLARS (Crisp White Background) ── */}
      <section className="py-16 md:py-20 bg-white border-b border-[#0F2E23]/10">
        <div className="container-wide">
          <SectionHeading
            badge="01 • THE YALLA VOYAGE ADVANTAGE"
            title="The Yalla Voyage Standard in Saudi Arabia."
            description="Delivering unparalleled operational perfection, royal protocol access, and authentic hospitality across the Kingdom."
          />

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.08}>
            <div className="group p-8 rounded-3xl bg-[#0F2E23] border border-[#2E6B57]/40 hover:border-[#39C27D] hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#39C27D]/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10 group-hover:bg-[#39C27D]/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-[#39C27D] flex items-center justify-center mb-5 group-hover:bg-[#39C27D] group-hover:text-[#0F2E23] transition-all duration-300 shadow-sm">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display text-[#F4EFE6] mb-2.5 font-semibold">
                  Generational Local Mastery
                </h3>
                <p className="text-[#F4EFE6]/75 text-xs sm:text-sm leading-relaxed font-light font-sans">
                  Yalla Voyage maintains deep institutional roots across Saudi Arabia, unlocking private archaeological permits, royal palace dining, and confidential C-suite access.
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
                  Uncompromising Luxury Pacing
                </h3>
                <p className="text-[#F4EFE6]/75 text-xs sm:text-sm leading-relaxed font-light font-sans">
                  Every Yalla Voyage itinerary is precision-engineered to your exact schedule — featuring private helicopter charters, Maybach fleets, and 5-star desert sanctuaries.
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
                  Direct Concierge Stewardship
                </h3>
                <p className="text-[#F4EFE6]/75 text-xs sm:text-sm leading-relaxed font-light font-sans">
                  With a dedicated 24/7 Yalla Voyage concierge on call, every flight connection, VIP baggage escort, and visa fast-track is handled with flawless discretion.
                </p>
              </div>
            </div>
          </StaggerReveal>
        </div>
      </section>

      {/* ── REGIONAL SHOWCASE (Warm Ivory #F4EFE6) ── */}
      <section id="destinations" className="py-16 md:py-24 bg-[#F4EFE6] border-b border-[#0F2E23]/10">
        <div className="container-wide">
          {/* Section Heading */}
          <SectionHeading
            badge="02 • REGIONAL EXPEDITIONS"
            title="Signature Saudi Destinations."
            description="Curated by Yalla Voyage to reveal the profound duality of the Kingdom — timeless heritage and visionary luxury."
          />

          {/* Filter Pills Controls Bar (Consistent with Destinations & Packages) */}
          <div className="flex items-center gap-2 flex-wrap mb-12 pb-8 border-b border-[#0F2E23]/10">
            <button
              onClick={() => setActiveTab('all')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#0F2E23] text-[#F4EFE6] shadow-md scale-102 ring-2 ring-[#0F2E23]/20'
                  : 'bg-white text-[#0F2E23]/70 hover:bg-white hover:text-[#0F2E23] border border-[#0F2E23]/10 hover:border-[#2E6B57]/30 shadow-xs'
              }`}
            >
              <span>All Regions</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium transition-colors ${
                  activeTab === 'all' ? 'bg-[#2E6B57] text-white' : 'bg-[#0F2E23]/6 text-[#0F2E23]/60'
                }`}
              >
                06
              </span>
            </button>
            {saudiDestinations.map((dest) => (
              <button
                key={dest.slug}
                onClick={() => setActiveTab(dest.slug)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === dest.slug
                    ? 'bg-[#0F2E23] text-[#F4EFE6] shadow-md scale-102 ring-2 ring-[#0F2E23]/20'
                    : 'bg-white text-[#0F2E23]/70 hover:bg-white hover:text-[#0F2E23] border border-[#0F2E23]/10 hover:border-[#2E6B57]/30 shadow-xs'
                }`}
              >
                <span>{dest.name}</span>
              </button>
            ))}
          </div>

          {/* Destination Cards */}
          <div className="space-y-10">
            {filteredDestinations.map((dest, idx) => (
              <DestinationVideoCard key={dest.slug} dest={dest} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE EXPERIENCES (Crisp White) ── */}
      <section className="py-16 md:py-24 bg-white border-b border-[#0F2E23]/10 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <SectionHeading
            badge="03 • YALLA VOYAGE INVITATIONS"
            title="Not tours. Private invitations."
            description="Exclusive cultural and culinary immersions unlocked by Yalla Voyage's native relationships."
          />

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-7" stagger={0.08}>
            {experiences.slice(0, 4).map((exp) => (
              <div
                key={exp.slug}
                className="group rounded-3xl overflow-hidden bg-white border border-[#0F2E23]/10 hover:border-[#2E6B57]/40 hover:shadow-2xl transition-all duration-400 flex flex-col justify-between text-[#0F2E23]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0F2E23]/5">
                  <Image
                    src={exp.image}
                    alt={`Yalla Voyage ${exp.title}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23]/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-mono font-semibold bg-white/95 text-[#0F2E23] shadow-xs">
                      {exp.category}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-display text-[#0F2E23] mb-1 group-hover:text-[#2E6B57] transition-colors leading-tight font-light">
                    {exp.title}
                  </h3>
                  <p className="text-xs font-mono text-[#2E6B57] font-semibold mt-1 mb-2">
                    {exp.subtitle} · {exp.location}
                  </p>
                  <p className="text-sm text-[#0F2E23]/70 font-light leading-relaxed font-sans mb-4">
                    {exp.description}
                  </p>
                  <div className="pt-4 border-t border-[#0F2E23]/8 flex items-center justify-between text-xs font-mono text-[#2E6B57]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#39C27D]" />
                      <span>Curated by Yalla Voyage</span>
                    </span>
                    <span className="text-[#0F2E23]/60 font-sans">{exp.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </StaggerReveal>

          <Reveal delay={0.2}>
            <div className="text-center mt-12">
              <MagneticButton
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                  'Hello Yalla Voyage, I want to book signature private Saudi experiences with your concierge.'
                )}`}
                target="_blank"
                variant="primary"
              >
                Inquire With Yalla Voyage <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VIP TRANSPORT & AVIATION PROTOCOL (Deep Forest #0F2E23 Accent Banner) ── */}
      <section className="py-14 bg-white border-b border-[#0F2E23]/10">
        <div className="container-wide">
          <Reveal>
            <div className="bg-[#0F2E23] text-[#F4EFE6] rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#2E6B57]/30">
              <div className="flex-1 space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] font-mono text-[#39C27D] font-semibold">YALLA VOYAGE VIP MOBILITY</p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-light">
                  Airport tarmac to desert oasis. <span className="italic font-serif text-[#39C27D]">Every mile, seamless.</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#DAD6CD]/80 font-sans font-light pt-1">
                  Private jet charters, FBO fast-track clearance, and executive Maybach chauffeuring across Riyadh, Jeddah &amp; AlUla.
                </p>
              </div>
              <MagneticButton
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                  'Hello Yalla Voyage, I would like to request executive transport & private aviation services in Saudi Arabia.'
                )}`}
                target="_blank"
                variant="primary"
                className="bg-[#2E6B57] text-[#F4EFE6] hover:bg-[#39C27D] hover:text-[#0F2E23]"
              >
                Book VIP Transfer <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </Reveal>
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
              Your Kingdom story begins here.
              <br />
              <span className="font-semibold italic text-[#2E6B57] font-serif">
                Crafted by Yalla Voyage.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-[#0F2E23]/70 mb-8 max-w-md mx-auto font-light leading-relaxed font-sans">
              Connect directly with our senior Saudi travel designers to architect a seamless, bespoke journey tailored to your exact preferences.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                  'Hello Yalla Voyage! Please help me curate a private luxury Saudi itinerary.'
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
   DESTINATION VIDEO CARD — Clean, light, professional card
   ═══════════════════════════════════════════════════════════════ */
function DestinationVideoCard({
  dest,
  index,
}: {
  dest: SaudiDestination;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isEven = index % 2 === 0;
  const topPlaces = dest.places.slice(0, 4);

  return (
    <Reveal>
      <div className="bg-white rounded-3xl overflow-hidden border border-[#0F2E23]/10 shadow-lg hover:shadow-2xl transition-shadow duration-500 text-[#0F2E23]">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Video Side */}
          <div className={`lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden group bg-[#0F2E23] ${!isEven ? 'lg:order-2' : ''}`}>
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              poster={dest.image}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src={dest.videoUrl} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23]/60 via-transparent to-transparent" />

            {/* Bottom badge */}
            <div className="absolute bottom-4 left-4 z-10">
              <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-[#0F2E23]/80 text-[#F4EFE6] backdrop-blur-md border border-white/10">
                Chapter {String(index + 1).padStart(2, '0')} • Yalla Voyage
              </span>
            </div>

            {/* Play indicator */}
            <div className="absolute top-4 right-4 z-10">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Play className="w-3.5 h-3.5 text-white fill-current" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between ${!isEven ? 'lg:order-1' : ''}`}>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#2E6B57] font-semibold mb-3 uppercase tracking-wider">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#39C27D]" />
                <span>Yalla Voyage Sanctuary</span>
                <span>•</span>
                <span>Region {String(index + 1).padStart(2, '0')}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-display font-light text-[#0F2E23] mb-2 leading-tight tracking-tight">
                {dest.name}
              </h2>

              <p className="text-[#2E6B57] font-serif italic text-base sm:text-lg mb-4">
                &ldquo;{dest.tagline}&rdquo;
              </p>

              <p className="text-sm sm:text-[15px] text-[#0F2E23]/75 font-light leading-relaxed mb-6 font-sans">
                {dest.description}
              </p>

              {/* Highlight Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {topPlaces.map((place) => (
                  <span
                    key={place.name}
                    className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] text-[#0F2E23]/80 text-xs font-medium border border-[#0F2E23]/8 flex items-center gap-1.5 font-sans hover:bg-[#EAE3D5] transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#2E6B57]" />
                    {place.name.length > 25 ? place.name.slice(0, 22) + '…' : place.name}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <MagneticButton
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                  `Hello Yalla Voyage, I would like to inquire about a custom ${dest.name} trip with your senior curator.`
                )}`}
                target="_blank"
                variant="primary"
              >
                Plan Yalla Voyage to {dest.name} <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
