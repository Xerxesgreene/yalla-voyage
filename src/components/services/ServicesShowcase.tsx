'use client';

import {
  Headphones,
  Shield,
  Compass,
  Award,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { useLanguage } from '@/context/LanguageContext';
import { ServicesSolarSystem } from './ServicesSolarSystem';

const servicePillars = [
  {
    icon: <Headphones className="w-5 h-5 text-[#39C27D]" />,
    title: '24/7 Direct Concierge',
    desc: 'Direct line to your personal senior travel designer anytime, anywhere in the world.',
  },
  {
    icon: <Compass className="w-5 h-5 text-[#39C27D]" />,
    title: '100% Bespoke Curation',
    desc: 'Zero generic templates. Every route, transfer, and amenity is tailored to your exact pace.',
  },
  {
    icon: <Award className="w-5 h-5 text-[#39C27D]" />,
    title: 'Global VIP Tier Access',
    desc: 'Preferred cabin rates, room upgrades, private tarmac clearances, and VIP summit seating.',
  },
  {
    icon: <Shield className="w-5 h-5 text-[#39C27D]" />,
    title: 'Guaranteed Discretion',
    desc: 'Strict NDAs, private manifests, and vetted security escorts for executive and VIP travelers.',
  },
];

interface ServicesShowcaseProps {
  showSectionHeading?: boolean;
  headingNumber?: string;
  headingSubtitle?: string;
  headingTitle?: string;
  headingDescription?: string;
  showPillars?: boolean;
  className?: string;
}

export function ServicesShowcase({
  showSectionHeading = true,
  headingNumber = '05',
  headingSubtitle = 'Services & Ecosystem',
  headingTitle = 'Everything you need, expertly handled.',
  headingDescription = 'From private jet charters and bespoke desert expeditions to corporate MICE and global visa concierge — explore our 5 category orbits.',
  showPillars = true,
  className = '',
}: ServicesShowcaseProps) {
  const { t } = useLanguage();

  return (
    <section className={`section-pad relative overflow-hidden bg-[#0F2E23] text-[#F4EFE6] ${className}`}>
      {/* Decorative ambient gradients */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#39C27D]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#2E6B57]/20 blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Section Heading */}
        {showSectionHeading && (
          <SectionHeading
            number={headingNumber}
            subtitle={headingSubtitle}
            title={headingTitle}
            description={headingDescription}
            light={true}
          />
        )}

        {/* ── 3D Animated Orbiting Solar System Gallery ── */}
        <div className="my-6">
          <ServicesSolarSystem />
        </div>

        {/* Service Pillars & Guarantees */}
        {showPillars && (
          <div className="mt-16 pt-16 border-t border-[#2E6B57]/30">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#39C27D] mb-1 block font-mono">
                {t.whatSetsUsApart.standardBadge}
              </span>
              <h3 className="text-display text-2xl sm:text-3xl text-[#F4EFE6] font-light">
                How We Deliver Perfection
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicePillars.map((pillar, idx) => (
                <Reveal key={pillar.title} delay={idx * 0.08}>
                  <div className="p-6 rounded-2xl bg-[#13382B]/60 backdrop-blur-md border border-[#2E6B57]/30 hover:border-[#39C27D]/60 hover:bg-[#1E4B3A]/80 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col justify-between text-[#F4EFE6]">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#2E6B57]/30 flex items-center justify-center mb-4 border border-[#39C27D]/30">
                        {pillar.icon}
                      </div>
                      <h4 className="text-display text-lg text-[#F4EFE6] mb-2 font-semibold">{pillar.title}</h4>
                      <p className="text-[#F4EFE6]/70 text-xs sm:text-sm leading-relaxed font-light font-sans">{pillar.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
