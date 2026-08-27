'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Globe, MessageCircle, Compass, Sparkles } from 'lucide-react';
import { HeroScene } from '@/components/hero/HeroScene';
import { Reveal, StaggerReveal } from '@/components/ui/Reveal';
import { BlurReveal } from '@/components/ui/BlurReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { siteConfig, processSteps } from '@/data/site';
import { journalArticles } from '@/data/journal';
import { HaoqiServicesSection } from '@/components/services/HaoqiServicesSection';
import { DriftWallDestinations } from '@/components/destinations/DriftWallDestinations';
// import { StackedDestinations } from '@/components/destinations/StackedDestinations';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { AccordionGallery } from '@/components/ui/AccordionGallery';
import { TraveloProcessSection } from '@/components/home/TraveloProcessSection';

const whyUsPillars = [

  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Global Expertise, Personal Touch',
    description: 'Our advisors have explored the destinations they recommend — every itinerary comes from real experience, not a brochure.',
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Tailored, Not Templated',
    description: 'Corporate trip or dream vacation — every itinerary is built around you, your pace, and your priorities.',
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: 'Multilingual 24/7 Support',
    description: "From first inquiry to touchdown, our team communicates in the language you're most comfortable in.",
  },
];

/* ── 01 • Brand Story (Warm Ivory #F4EFE6) ── */
function BrandStory() {
  return (
    <section className="section-pad bg-[#F4EFE6] text-[#0F2E23] border-t border-[#0F2E23]/10 relative overflow-hidden">
      <div className="container-wide relative z-10">
        <SectionHeading
          badge="01 • OUR STORY"
          title="Every journey begins with a story worth telling."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Reveal delay={0.1}>
              <p className="text-2xl sm:text-3xl text-[#0F2E23] font-heading font-medium tracking-tight leading-snug">
                At Yalla Voyage, we don&apos;t just book trips — we design moments you&apos;ll replay for years.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[#0F2E23]/70 text-sm sm:text-base leading-relaxed font-light font-sans">
                From corporate travel that runs like clockwork to bespoke luxury escapes that feel effortless, we turn logistics into artistry. Deep destination expertise fused with a human touch that never gets lost in translation.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-2 flex items-center gap-4">
                <MagneticButton href="/about" variant="primary">
                  Our Philosophy <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#0F2E23]/10 group bg-white">
                <Image
                  src="/images/alula-luxury-sanctuary.jpg"
                  alt="AlUla Luxury Sanctuary"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 02 • Why Us (Crisp Light / Green Cards) ── */
function WhyUs() {
  return (
    <section className="section-pad bg-white text-[#0F2E23] border-t border-[#0F2E23]/10 relative">
      <div className="container-wide">
        <SectionHeading
          badge="02 • WHY US"
          title="What sets us apart."
          description="Effortless excellence from first consultation to your safe return."
        />

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.08}>
          {whyUsPillars.map((item) => (
            <div
              key={item.title}
              className="group bg-[#0F2E23] text-[#F4EFE6] rounded-2xl p-7 border border-[#2E6B57]/40 hover:border-[#39C27D] hover:shadow-2xl transition-all duration-400 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#13382B] border border-[#2E6B57]/60 flex items-center justify-center text-[#39C27D] mb-5 group-hover:bg-[#2E6B57] group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl mb-2 text-[#F4EFE6] font-heading font-medium tracking-tight group-hover:text-[#39C27D] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#DAD6CD]/80 text-sm leading-relaxed font-light font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

/* ── Saudi Accordion Gallery Destinations ── */
const saudiAccordionDestinations = [
  {
    image: '/images/saudi-alula-proper.png',
    label: 'AlUla & Hegra',
    sublabel: 'Ancient Wonders • UNESCO Heritage',
    index: '01',
    link: '/explore-saudi',
  },
  {
    image: '/images/saudi-jeddah-proper.png',
    label: 'Jeddah Al-Balad',
    sublabel: 'Red Sea Coral Architecture',
    index: '02',
    link: '/explore-saudi',
  },
  {
    image: '/images/saudi-diriyah.png',
    label: 'Riyadh & Diriyah',
    sublabel: 'Capital Pulse • Royal Palaces',
    index: '03',
    link: '/explore-saudi',
  },
  {
    image: '/images/saudi-madinah-proper.png',
    label: 'Madinah',
    sublabel: 'Sacred Peace • Heritage',
    index: '04',
    link: '/explore-saudi',
  },
  {
    image: '/images/saudi-disah.png',
    label: 'Wadi Al Disah',
    sublabel: 'Sandstone Oasis Canyon',
    index: '05',
    link: '/explore-saudi',
  },
];

/* ── 03 • Explore Saudi Preview Section (🌿 INTERACTIVE ACCORDION) ── */
function ExploreSaudi() {
  return (
    <section className="section-pad bg-[#081812] text-[#F4EFE6] border-t border-[#2E6B57]/30 relative overflow-hidden">
      {/* Ambient Lighting Glows */}
      <div className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-[#39C27D]/8 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full bg-[#2E6B57]/12 blur-[150px]" />

      <div className="container-wide relative z-10">
        <BlurReveal delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E6B57]/50 text-[#F4EFE6] text-[11px] font-mono font-bold tracking-widest uppercase mb-4 border border-[#39C27D]/30 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#39C27D] animate-pulse inline-block" />
                <span>03 • EXPLORE SAUDI ARABIA</span>
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium tracking-tight leading-[1.08] text-[#F4EFE6]">
                Ancient wonders. <span className="text-[#DAD6CD]/50 block sm:inline">Sacred peace and desert sanctuaries.</span>
              </h2>
            </div>

            <Link
              href="/explore-saudi"
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#13382B] border border-[#2E6B57]/50 text-xs font-mono font-semibold uppercase tracking-wider text-[#F4EFE6] hover:border-[#39C27D] hover:bg-[#2E6B57] transition-all self-start md:self-auto flex-shrink-0 font-sans shadow-md"
            >
              <span>See all (06)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#39C27D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </BlurReveal>

        {/* Interactive ReactBits GSAP Accordion Gallery */}
        <BlurReveal delay={0.15}>
          <AccordionGallery
            items={saudiAccordionDestinations}
            defaultIndex={0}
            expandRatio={0.46}
            trigger="hover"
            accentColor="#39C27D"
            overlayColor="#0F2E23"
            textColor="#F4EFE6"
            grayscale={true}
            showLabels={true}
            duration={0.65}
            ease="power3.out"
            parallax={0.5}
            tilt={6}
            stagger={0.06}
            height={480}
            gap={12}
            radius={20}
            orientation="horizontal"
          />
        </BlurReveal>

        <BlurReveal delay={0.25}>
          <div className="text-center mt-12">
            <MagneticButton href="/explore-saudi" variant="primary">
              Discover Saudi <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}

/* ── 08 • Travel Journal (Crisp Light) ── */
function TravelJournal() {
  return (
    <section className="section-pad bg-white text-[#0F2E23] border-t border-[#0F2E23]/10">
      <div className="container-wide">
        <SectionHeading
          badge="08 • JOURNAL"
          title="Stories from the road."
        />

        {/* Featured Journal Dispatch in Horizontal Split Layout */}
        <Reveal>
          <div className="bg-[#F4EFE6] rounded-3xl overflow-hidden border border-[#0F2E23]/10 hover:border-[#2E6B57]/40 shadow-sm hover:shadow-xl transition-all duration-500 text-[#0F2E23] mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Image Column */}
              <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[340px] lg:min-h-[400px] overflow-hidden bg-[#0F2E23]/5">
                <Image
                  src={journalArticles[0].image}
                  alt={journalArticles[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full text-[10.5px] font-mono font-semibold uppercase tracking-widest bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-xs">
                    Featured Dispatch
                  </span>
                </div>
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-xs font-mono text-[#2E6B57] font-semibold">
                    <span className="uppercase tracking-wider">{journalArticles[0].category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#0F2E23]/50">
                      {journalArticles[0].readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#0F2E23] mb-4 leading-tight group-hover:text-[#2E6B57] transition-colors tracking-tight">
                    {journalArticles[0].title}
                  </h3>

                  <p className="text-[#0F2E23]/70 text-sm sm:text-base leading-relaxed mb-6 font-light font-sans">
                    {journalArticles[0].excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#0F2E23]/8 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#0F2E23]/50">Yalla Voyage Editorial</span>
                  <Link
                    href="/travel-journal"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2E6B57] hover:text-[#0F2E23] transition-colors font-sans"
                  >
                    <span>Read Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="text-center mt-8">
            <Link
              href="/travel-journal"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0F2E23] text-[#F4EFE6] hover:bg-[#2E6B57] hover:text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] font-sans"
            >
              <span>Read All Stories</span>
              <ArrowRight className="w-4 h-4 text-[#39C27D]" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Main Home Page Component ── */
export default function HomePage() {
  return (
    <main className="w-full relative overflow-visible bg-[#F4EFE6]">
      <HeroScene />
      <BrandStory />
      <WhyUs />
      <ExploreSaudi />
      <DriftWallDestinations />
      <HaoqiServicesSection />
      <TestimonialsSection />
      <TraveloProcessSection />
      <TravelJournal />
    </main>
  );
}



