'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { homepageServices } from '@/data/services';
import { CardSwap, Card } from '@/components/ui/CardSwap';

import { useLanguage } from '@/context/LanguageContext';

export function HaoqiServicesSection() {
  const router = useRouter();
  const { t, locale } = useLanguage();

  const arabicHomepageServices: Record<
    string,
    { title: string; tagline: string; badge: string }
  > = {
    'Bespoke Travel & Adventures': {
      title: 'السفر والمغامرات المصممة خصيصاً',
      tagline: 'برامج سياحية متفردة بلا قوالب جاهزة، بإشراف كبار المرشدين المحليين.',
      badge: 'رحلات خاصة',
    },
    'Wellness and Retreat': {
      title: 'الاستجمام والملاذات الصحية',
      tagline: 'ملاذات استشفاء صحية شاملة، وينابيع علاجية، وإجازات هادئة لتجديد الطاقة.',
      badge: 'ملاذات صحية',
    },
    'Educational Tours': {
      title: 'الرحلات التعليمية والثقافية',
      tagline: 'دراسات معمارية ومواقع أثرية يقودها نخبة من المؤرخين، وبعثات استكشافية حية.',
      badge: 'ثقافة ومعرفة',
    },
    'Ladies Trips': {
      title: 'رحلات السيدات الخاصة',
      tagline: 'رحلات صممت حصرياً للسيدات بأقصى درجات الفخامة والخصوصية والاستجمام.',
      badge: 'رحلات نسائية',
    },
    'Private Aviation & Chauffeurs': {
      title: 'الطيران الخاص والتنقل الفاخر',
      tagline: 'سافر وفق جدولك الزمني دون انتظار، مع وصول مباشر لصالات كبار الشخصيات.',
      badge: 'طيران خاص',
    },
    'Corporate MICE & Retreats': {
      title: 'سياحة الأعمال والمؤتمرات',
      tagline: 'تنظيم متكامل للقمم العالمية، واستئجار الوجهات بالكامل، والرحلات الجماعية.',
      badge: 'سياحة أعمال',
    },
    'Flights & 5-Star Hotels': {
      title: 'حجوزات الطيران والفنادق الفاخرة',
      tagline: 'ترقيات مجانية للغرف، وتذاكر الدرجة الأولى، وأسعار تفضيلية مرنة.',
      badge: 'أسعار تفضيلية',
    },
    'Visas & Documentation': {
      title: 'التأشيرات والخدمات اللوجستية',
      tagline: 'إصدار تأشيرات الدخول السريعة، والتأشيرات الإلكترونية، واستشارات السفر.',
      badge: 'تأشيرات سريعة',
    },
  };

  return (
    <section
      id="services"
      className="relative bg-[#F4EFE6] text-[#0F2E23] py-20 sm:py-28 overflow-hidden border-t border-[#0F2E23]/10"
    >
      {/* Ambient Lighting Highlights */}
      <div className="pointer-events-none absolute top-1/4 -left-40 w-[36rem] h-[36rem] rounded-full bg-[#2E6B57]/8 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-40 w-[36rem] h-[36rem] rounded-full bg-[#E7E1D8]/40 blur-[140px]" />

      <div className="container max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        
        {/* ── 1. Top Section Badge ── */}
        <div className="pb-6 mb-10 sm:mb-14 border-b border-[#0F2E23]/8 flex items-center justify-between">
          <span className="inline-flex items-center gap-3 sm:gap-3.5 px-6 py-3 sm:px-8 sm:py-3.5 md:px-9 md:py-4 rounded-full bg-[#0F2E23] text-[#F4EFE6] text-sm sm:text-base md:text-lg font-mono font-bold tracking-widest uppercase shadow-lg border border-[#2E6B57]/60 w-fit">
            <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#39C27D] animate-pulse inline-block shadow-[0_0_14px_#39C27D]" />
            <span>{t.services.badge}</span>
          </span>
        </div>

        {/* ── 2. Split 2-Column Showcase (Mobile: Stacked Cards Above Text | Desktop: Side-by-Side) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Service Text & Highlights (order-2 on mobile, order-1 on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-heading font-medium text-[#0F2E23] leading-[1.15] tracking-tight">
              {t.services.titleMain} <span className="text-[#2E6B57]">{t.services.titleHighlight}</span>
            </h2>

            <p className="text-base sm:text-lg text-[#0F2E23]/75 font-light leading-relaxed font-sans">
              {t.services.description}
            </p>

            {/* Service Pillars List -> Links directly to service page */}
            <div className="pt-2 space-y-3">
              {homepageServices.map((svc) => {
                const arData = arabicHomepageServices[svc.title];
                const localizedTitle = locale === 'ar' && arData ? arData.title : svc.title;
                return (
                  <Link
                    key={svc.title}
                    href={svc.href || '/services'}
                    className="group flex items-center justify-between p-3.5 rounded-2xl bg-white/80 hover:bg-white border border-[#0F2E23]/8 hover:border-[#2E6B57]/40 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#39C27D] group-hover:scale-125 transition-transform" />
                      <span className="text-sm font-sans font-medium text-[#0F2E23] group-hover:text-[#2E6B57] transition-colors">
                        {localizedTitle}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#0F2E23]/40 group-hover:text-[#2E6B57] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                );
              })}
            </div>

            {/* CTA Button to Full Services Page */}
            <div className="pt-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0F2E23] hover:bg-[#2E6B57] text-[#F4EFE6] text-xs font-semibold uppercase tracking-wider transition-all shadow-md group font-sans"
              >
                <span>{t.services.exploreAll}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#39C27D]" />
              </Link>
            </div>
          </div>

          {/* 3D Interactive CardSwap Stage (order-1 on mobile, order-2 on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-7 relative w-full h-[460px] sm:h-[540px] lg:h-[600px] flex items-center justify-center">
            
            <div className="relative w-full h-full flex items-center justify-center">
              <CardSwap
                width={440}
                height={500}
                cardDistance={45}
                verticalDistance={40}
                delay={4200}
                pauseOnHover={true}
                skewAmount={4}
                easing="smooth"
                onCardClick={(idx) => {
                  if (homepageServices[idx]) {
                    router.push(homepageServices[idx].href || '/services');
                  }
                }}
              >
                {homepageServices.map((service) => {
                  const arData = arabicHomepageServices[service.title];
                  const localizedTitle = locale === 'ar' && arData ? arData.title : service.title;
                  const localizedTagline = locale === 'ar' && arData ? arData.tagline : service.tagline;
                  return (
                    <Card key={service.title} className="group/card relative w-full h-full select-none cursor-pointer">
                      {/* Background Full-Bleed Image */}
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={service.image}
                          alt={localizedTitle}
                          fill
                          className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                          sizes="(max-width: 768px) 320px, 440px"
                        />
                        {/* Dark Atmospheric Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#06150E]/95 via-[#06150E]/40 to-transparent" />
                        <div className="absolute inset-0 bg-[#0F2E23]/25 mix-blend-multiply" />
                      </div>

                      {/* Bottom Card Content Info */}
                      <div className="absolute bottom-0 inset-x-0 z-10 p-6 sm:p-8 space-y-4">
                        <div>
                          <h3 className="text-2xl sm:text-[28px] font-display font-light text-[#F4EFE6] leading-tight mb-2">
                            {localizedTitle}
                          </h3>

                          <p className="text-xs sm:text-[13px] text-[#DAD6CD]/90 font-light leading-relaxed font-sans line-clamp-2">
                            {localizedTagline}
                          </p>
                        </div>

                        {/* Properly Placed Discover Button */}
                        <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                          <span className="text-xs font-mono font-medium text-[#39C27D] uppercase tracking-wider">
                            {locale === 'ar' ? 'خدمة متميزة' : 'Explore Service'}
                          </span>
                          <Link
                            href={service.href || '/services'}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#39C27D] text-[#0F2E23] hover:text-[#06150E] text-xs font-sans font-semibold uppercase tracking-wider transition-all duration-300 shadow-md group-hover/card:bg-[#39C27D] group-hover/card:text-[#06150E]"
                          >
                            <span>{locale === 'ar' ? 'اكتشف الخدمة' : 'Discover'}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/card:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </CardSwap>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HaoqiServicesSection;

