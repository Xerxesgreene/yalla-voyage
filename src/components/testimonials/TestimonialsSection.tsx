'use client';

import React from 'react';
import { Star, MessageCircle, CheckCircle2, MapPin } from 'lucide-react';
import { BlurReveal } from '@/components/ui/BlurReveal';
import { testimonials } from '@/data/testimonials';
import { siteConfig } from '@/data/site';
import { useLanguage } from '@/context/LanguageContext';

export function TestimonialsSection() {
  const { t, locale } = useLanguage();

  const trustMetrics = locale === 'ar'
    ? [
        { value: '+20 عاماً', label: 'إتقان السياحة الفاخرة' },
        { value: '4.98 / 5.0', label: 'رضا العملاء' },
        { value: '100% مخصص', label: 'برامج سفر فريدة' },
        { value: '24/7 اهتمام', label: 'كونسيرج متخصص' },
      ]
    : [
        { value: '20+ Years', label: 'Travel Mastery' },
        { value: '4.98 / 5.0', label: 'Client Satisfaction' },
        { value: '100% Bespoke', label: 'Custom Itineraries' },
        { value: '24/7 Care', label: 'Dedicated Concierge' },
      ];

  const localizedTestimonials = [
    {
      id: 'test-1',
      author: locale === 'ar' ? t.testimonials.items.name1 : 'Dr. Tariq Al-Husseini',
      role: locale === 'ar' ? t.testimonials.items.role1 : 'Executive Traveler • Riyadh',
      avatar: '/images/dest-switzerland.jpg',
      rating: 5,
      destination: locale === 'ar' ? 'سويسرا الفاخرة' : 'Swiss Luxury Alps',
      category: locale === 'ar' ? 'شاليهات فاخرة' : 'Alpine Luxury Chalet',
      review: t.testimonials.items.quote1,
    },
    {
      id: 'test-2',
      author: locale === 'ar' ? t.testimonials.items.name2 : 'Sarah & Mansour K.',
      role: locale === 'ar' ? t.testimonials.items.role2 : 'Honeymoon Clients • Dubai',
      avatar: '/images/dest-italy.jpg',
      rating: 5,
      destination: locale === 'ar' ? 'ساحل أمالفي، إيطاليا' : 'Amalfi Coast, Italy',
      category: locale === 'ar' ? 'شهر عسل' : 'Private Honeymoon',
      review: t.testimonials.items.quote2,
    },
    {
      id: 'test-3',
      author: locale === 'ar' ? t.testimonials.items.name3 : 'Faisal Bin Othman',
      role: locale === 'ar' ? t.testimonials.items.role3 : 'Managing Director • Private Equity Group',
      avatar: '/images/dest-uae.jpg',
      rating: 5,
      destination: locale === 'ar' ? 'قمة أعمال عالمية' : 'Global Corporate Summit',
      category: locale === 'ar' ? 'سياحة أعمال' : 'Corporate MICE',
      review: t.testimonials.items.quote3,
    },
    {
      id: 'test-4',
      author: locale === 'ar' ? t.testimonials.items.name4 : 'Laila Al-Ghamdi & Family',
      role: locale === 'ar' ? t.testimonials.items.role4 : 'Family Expedition • Jeddah',
      avatar: '/images/pkg-egypt.jpg',
      rating: 5,
      destination: locale === 'ar' ? 'القاهرة والدهبية النيلية' : 'Cairo & Nile Dahabiya',
      category: locale === 'ar' ? 'رحلة عائلية' : 'Bespoke Family Journey',
      review: t.testimonials.items.quote4,
    },
  ];

  // Quadrupled set for seamless continuous CSS marquee scroll without gaps
  const marqueeItems = [
    ...localizedTestimonials,
    ...localizedTestimonials,
    ...localizedTestimonials,
    ...localizedTestimonials,
  ];

  const waMsg =
    locale === 'ar'
      ? 'مرحباً يلا سفر، أود استشارة أخصائي سفر بشأن التخطيط لرحلتنا القادمة.'
      : 'Hello يلا سفر, I would like to consult with a travel specialist regarding planning our upcoming trip.';

  return (
    <section
      className="section-pad bg-[#0A1A14] text-[#F4EFE6] border-t border-[#2E6B57]/30 relative overflow-hidden"
      aria-label="Traveler Stories & Reviews"
    >
      {/* Ambient Lighting Glow Orbs */}
      <div className="pointer-events-none absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-[#39C27D]/10 blur-[130px] z-0" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 w-[500px] h-[500px] rounded-full bg-[#2E6B57]/15 blur-[130px] z-0" />

      <div className="container-wide relative z-10 mb-10">
        {/* ── Section Header ── */}
        <BlurReveal delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-3 sm:gap-3.5 px-6 py-3 sm:px-8 sm:py-3.5 md:px-9 md:py-4 rounded-full bg-[#13382B] text-[#F4EFE6] text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest uppercase mb-6 border border-[#39C27D]/40 shadow-lg">
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#39C27D] animate-pulse inline-block shadow-[0_0_14px_#39C27D]" />
                <span>{t.testimonials.badge}</span>
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-medium tracking-tight leading-[1.08] text-[#F4EFE6]">
                {t.testimonials.titleMain} <span className="text-[#DAD6CD]/60 block sm:inline">{t.testimonials.titleHighlight}</span>
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#DAD6CD]/80 font-light leading-relaxed font-sans max-w-2xl">
                {t.testimonials.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent(waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#13382B] border border-[#2E6B57]/50 text-xs font-mono font-semibold uppercase tracking-wider text-[#F4EFE6] hover:border-[#39C27D] hover:bg-[#2E6B57] transition-all self-start md:self-auto flex-shrink-0 font-sans shadow-md cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#39C27D]" />
                <span>{t.testimonials.talkSpecialist}</span>
              </a>
            </div>
          </div>
        </BlurReveal>
      </div>

      {/* ── Continuous Infinite Motion Stream (LTR coordinate space ensures gap-free looping) ── */}
      <div dir="ltr" className="relative w-full overflow-hidden select-none py-4">
        {/* Soft edge masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#0A1A14] via-[#0A1A14]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#0A1A14] via-[#0A1A14]/80 to-transparent z-20" />

        {/* Endless Marquee Track */}
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] active:[animation-play-state:paused]">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
              className="flex-shrink-0 w-[300px] sm:w-[380px] lg:w-[420px] mx-2.5 sm:mx-3.5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#0F2E23]/80 backdrop-blur-xl border border-[#2E6B57]/40 hover:border-[#39C27D]/80 hover:bg-[#0F2E23] transition-all duration-300 shadow-xl group cursor-pointer"
            >
              {/* Top: Stars, Category & Destination */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#39C27D]" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#39C27D] bg-[#13382B] px-3 py-1 rounded-full border border-[#39C27D]/30">
                    {item.category}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-[13.5px] sm:text-[14.5px] font-sans font-light leading-relaxed text-[#F4EFE6]/90">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Bottom: Real Traveler Details */}
              <div className="pt-4 mt-5 border-t border-[#2E6B57]/30 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-[#13382B] border border-[#39C27D]/40 flex items-center justify-center text-xs font-bold text-[#39C27D]">
                    {item.author.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-heading text-sm font-medium text-white truncate">
                      {item.author}
                    </p>
                    <p className="font-sans text-[11px] text-[#39C27D] truncate flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#39C27D] flex-shrink-0" />
                      <span>{item.destination}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0A1A14]/70 border border-[#2E6B57]/40 text-[10px] font-mono text-[#39C27D] flex-shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-[#39C27D]" />
                  <span>{locale === 'ar' ? 'مؤكد' : 'Verified'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 20+ Years Experience & Trust Metrics ── */}
      <div className="container-wide relative z-10 mt-10">
        <BlurReveal delay={0.25}>
          <div className="pt-8 border-t border-[#2E6B57]/30 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustMetrics.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <span className="block text-xl sm:text-2xl md:text-3xl font-heading font-medium text-[#39C27D]" dir="ltr">
                  {stat.value}
                </span>
                <span className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-[#DAD6CD]/80 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}

export default TestimonialsSection;
