'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

interface ProcessStepItem {
  id: string;
  tabLabel: string;
  number: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const stepsData: ProcessStepItem[] = [
  {
    id: 'step-consultation',
    tabLabel: 'Consultation',
    number: '01',
    title: 'Consultation',
    description:
      'Share your dream destination, travel style, and preferences. We listen, understand, and begin crafting your story.',
    image: '/images/step-consultation.jpg',
    icon: <MessageCircle className="w-5 h-5 text-[#2E6B57]" />,
  },
  {
    id: 'step-custom-planning',
    tabLabel: 'Custom Planning',
    number: '02',
    title: 'Custom Planning',
    description:
      'Our experts design a bespoke itinerary tailored to your interests, pace, and priorities — no templates, ever.',
    image: '/images/step-plan-together.jpg',
    icon: <Sparkles className="w-5 h-5 text-[#2E6B57]" />,
  },
  {
    id: 'step-booking-support',
    tabLabel: 'Booking & Support',
    number: '03',
    title: 'Booking & 24/7 Support',
    description:
      'We handle every detail — flights, hotels, visas, transfers — with multilingual, around-the-clock assistance and lifelong partnership.',
    image: '/images/step-travel-happy.jpg',
    icon: <ShieldCheck className="w-5 h-5 text-[#2E6B57]" />,
  },
];

export function TraveloProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerY = window.innerHeight * 0.45;
      let currentIdx = 0;

      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        if (rect.top <= triggerY) {
          currentIdx = idx;
        }
      });

      setActiveStep(currentIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (index: number) => {
    setActiveStep(index);
    const target = cardRefs.current[index];
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="section-pad bg-[#F4EFE6] text-[#0F2E23] border-t border-[#0F2E23]/10 relative">
      <div className="container-wide">
        
        {/* ── Top Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl space-y-4">
            {/* Badge */}
            <Reveal>
              <span className="inline-flex items-center gap-3 sm:gap-3.5 px-6 py-3 sm:px-8 sm:py-3.5 md:px-9 md:py-4 rounded-full bg-[#0F2E23] text-[#F4EFE6] text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest uppercase shadow-lg border border-[#2E6B57]/60 w-fit mb-3">
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#39C27D] animate-pulse inline-block shadow-[0_0_14px_#39C27D]" />
                <span>HOW WE WORK</span>
              </span>
            </Reveal>

            {/* Main Title */}
            <Reveal delay={0.06}>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-medium tracking-tight text-[#0F2E23] leading-[1.08]">
                The Art of Seamless Travel, From Vision to Touchdown.
              </h2>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={0.12}>
              <p className="text-base sm:text-lg text-[#0F2E23]/75 font-light max-w-xl leading-relaxed font-sans">
                A dedicated concierge methodology engineered to remove friction, protect your time, and elevate every moment.
              </p>
            </Reveal>
          </div>

          {/* More About Us Pill Button */}
          <Reveal delay={0.15}>
            <Link
              href="/about"
              className="group inline-flex items-center justify-between gap-4 pl-6 pr-2.5 py-2.5 rounded-full bg-white text-[#0F2E23] border border-[#0F2E23]/15 hover:border-[#2E6B57] hover:bg-[#0F2E23] hover:text-[#F4EFE6] transition-all duration-300 shadow-sm text-xs sm:text-sm font-medium self-start lg:self-auto"
            >
              <span>More about us</span>
              <span className="w-8 h-8 rounded-full bg-[#0F2E23] text-white group-hover:bg-[#39C27D] group-hover:text-[#0F2E23] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </Reveal>
        </div>

        {/* ── Two-Column Layout: Sticky Side Tabs + Step Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Side Navigation Tabs (Static on mobile, sticky on desktop) */}
          <div className="lg:col-span-4 relative lg:sticky lg:top-36 z-10 space-y-3">
            <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
              {stepsData.map((step, idx) => {
                // One-by-one highlight: only the currently active card is green
                const isActive = idx === activeStep;
                return (
                  <button
                    key={step.id}
                    onClick={() => scrollToStep(idx)}
                    className={`inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap text-left w-full cursor-pointer ${
                      isActive
                        ? 'bg-[#0F2E23] text-[#F4EFE6] shadow-md border border-[#0F2E23] scale-[1.01]'
                        : 'bg-white/90 text-[#0F2E23]/70 hover:text-[#0F2E23] border border-[#0F2E23]/10 hover:border-[#0F2E23]/25 shadow-xs'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-[2px] transition-all duration-300 ${
                        isActive ? 'bg-[#39C27D] shadow-[0_0_8px_#39C27D]' : 'bg-[#0F2E23]/30'
                      }`}
                    />
                    <span>{step.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Step Cards */}
          <div className="lg:col-span-8 space-y-16 sm:space-y-24">
            {stepsData.map((step, idx) => (
              <div
                key={step.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                data-step-index={idx}
                className="scroll-mt-32 space-y-6"
              >
                <Reveal delay={0.05}>
                  {/* Step Card Container */}
                  <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#0F2E23]/10 hover:border-[#2E6B57]/30 shadow-sm hover:shadow-xl transition-all duration-500">
                    {/* Top Image */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#0F2E23]/5 group">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 65vw"
                      />
                    </div>

                    {/* Content below Image */}
                    <div className="pt-6 sm:pt-8 px-2 sm:px-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#F4EFE6] border border-[#0F2E23]/8 flex items-center justify-center shrink-0">
                          {step.icon}
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0F2E23] tracking-tight">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base text-[#0F2E23]/70 font-light font-sans leading-relaxed pl-12">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
