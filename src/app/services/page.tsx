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

import { useLanguage } from '@/context/LanguageContext';

type FilterId = 'all' | ServiceCategory;

const arabicServiceMap: Record<string, {
  title: string;
  categoryLabel: string;
  badge: string;
  tagline: string;
  description: string;
  highlights: string[];
}> = {
  'bespoke-travel': {
    title: 'رحلات واستكشافات مخصصة',
    categoryLabel: 'رحلات حصرية',
    badge: 'حصري وفاخر',
    tagline: 'برامج سفر مفصلة — من الاستكشافات الصحراوية إلى الفلل العائمة في الجزر.',
    description: 'نصمم رحلات مخصصة بالكامل: استكشافات الأخاديد الصحراوية، حجز الجزر الخاصة، والتنقل بين الجزر، وملاذات الأزواج. كل مسار مبني على وتيرتك وتفضيلاتك دون أي قوالب مسبقة.',
    highlights: ['تصميم مسار يومي مخصص بالكامل', 'تخييم فاخر ومسارات أودية وجزر خاصة', 'حجوزات حصرية للفلل والمنتجعات العائمة', 'مرشدون محليون وخبراء معتمدون', 'دعم مصمم رحلات خاص على مدار الساعة', 'تغطية شاملة لكافة التصاريح والمواصلات'],
  },
  'private-aviation': {
    title: 'الطيران الخاص والأسطول الفاخر',
    categoryLabel: 'تنقلات النخبة',
    badge: 'طيران وتنقلات',
    tagline: 'سافر وتنقل وفق جدولك الزمني الخاص — بلا انتظار، وبلا أي مساومة.',
    description: 'احصل على طائرات أسطولنا الخاص مع صعود مباشر من صالات الطيران الخاص، ووجبات طيران فاخرة، وتوصيل راقٍ بسيارات مايباخ ورينج روفر والفئة S مع سائقين محترفين.',
    highlights: ['أسطول عالمي: طائرات خفيفة ومتوسطة وثقيلة', 'صعود مباشر من صالات كبار الشخصيات', 'وجبات طيران مخصصة بمعايير ميشلان', 'أحدث سيارات مايباخ ورينج روفر والفئة S', 'سائقون مدربون بروتوكولياً وموقعون على اتفاقيات السرية', 'متابعة مباشرة للرحلات وضمان دقة المواعيد'],
  },
  'wellness-retreat': {
    title: 'ملاذات الصحة والاستجمام',
    categoryLabel: 'ملاذات متكاملة',
    badge: 'استجمام وعافية',
    tagline: 'ملاذات استجمام فاخرة، وعلاجات مياه حرارية، وملاذات متجددة منعزلة.',
    description: 'استرخِ في ملاذات العافية الشاملة ذات المستوى العالمي — من المنتجعات الحرارية في جبال الألب وأجنحة الأيورفيدا في العلا إلى فلل التأمل الخاصة المطلة على المحيط.',
    highlights: ['استشارات عافية وطول عمر خاصة ومنتقاة', 'مراكز سبا حرارية وجلسات استشفاء صوتي', 'برامج طعام عضوي طازج من المزرعة إلى المائدة', 'مدربون خاصون لليوغا والتنفس واستعادة الحيوية', 'جلسات علاج مائي وحمام مغربي فاخر', 'كونسيرج عافية مخصص على مدار الساعة'],
  },
  'educational-tours': {
    title: 'الجولات والاستكشافات التعليمية',
    categoryLabel: 'إثراء معرفي',
    badge: 'تعليم واستكشاف',
    tagline: 'رحلات تعليمية حية للمدارس والجامعات والشباب تفتح آفاق المعرفة والتاريخ.',
    description: 'برامج استكشافية ثقافية وعلمية يقودها نخبة من الأكاديميين والمؤرخين، تركز على الآثار والعلوم البيئية والقيادة.',
    highlights: ['إشراف ومرافقة أكاديمية متخصصة', 'ورش عمل ميدانية في مواقع التراث العالمي', 'أعلى معايير السلامة والرعاية الطلابية', 'أنشطة بناء الشخصية والقيادة الجماعية', 'تصاريح بحثية وزيارات ميدانية خاصة', 'تنسيق لوجستي شامل معتمد'],
  },
  'ladies-trips': {
    title: 'رحلات السيدات الفاخرة',
    categoryLabel: 'رحلات خاصة',
    badge: 'سيدات',
    tagline: 'ملاذات استثنائية مصممة حصرياً للسيدات بخصوصية تامة وأناقة رفيعة.',
    description: 'رحلات فاخرة متكاملة الخصوصية تجمع بين الاسترخاء في أرقى المنتجعات العالمية، وجلسات التسوق الشخصي الحصرية، والاستكشافات الثقافية الراقية.',
    highlights: ['خصوصية مطلقة مع طواقم نسائية متخصصة', 'حجوزات حصرية في أفخم المنتجعات والسبا', 'خدمات تسوق شخصي وتجارب أزياء حصرية', 'تجارب طهي راقية مع شيفات عالميين', 'أنشطة استجمام وتأمل في أجواء ساحرة', 'عناية كونسيرج متكاملة على مدار الساعة'],
  },
  'corporate-mice': {
    title: 'سياحة الأعمال والمؤتمرات (MICE)',
    categoryLabel: 'أعمال وتنظيم',
    badge: 'سياحة أعمال',
    tagline: 'إدارة متكاملة لسفر الشركات والمؤتمرات وحوافز الموظفين بدقة متناهية.',
    description: 'تنظيم قمم الأعمال والاجتماعات رفيعة المستوى لكبار المسؤولين التنفيذيين، مع توفير كافة التسهيلات التقنية واللوجستية والإقامة الفاخرة.',
    highlights: ['إدارة شاملة لوفود المؤتمرات والاجتماعات', 'حجوزات قاعات وفنادق حصرية بأسعار تفضيلية', 'لوجستيات نقل وفود ومسارات مطار سريعة', 'تنظيم فعاليات عشاء واجتماعات تنفيذية راقية', 'تقارير مالية وتتبع مسارات السفر لحظياً', 'مدير حساب مخصص متفرغ ٢٤/٧'],
  },
  'luxury-cruises': {
    title: 'رحلات بحرية فاخرة واستئجار اليخوت',
    categoryLabel: 'رحلات حصرية',
    badge: 'بحري وفاخر',
    tagline: 'أبحر على متن أرقى السفن عبر البحر الأبيض المتوسط والبحر الأحمر والخليج العربي.',
    description: 'من رحلات سيلفرسي وريتز كارلتون اليختية الفائقة الفخامة إلى استئجار السوبر يخت والكاتماران الخاص — نتولى كافة ترتيبات الإبحار والجولات الساحلية والتجارب الحصرية على متن السفينة.',
    highlights: ['خطوط سيلفرسي وريتز يخت الفائقة الفخامة', 'استئجار سوبر يخت وكاتماران خاص', 'جولات ساحلية حصرية مع مرشدين خاصين', 'طهاة ميشلان لإعداد وجبات فاخرة على المتن', 'أولوية الصعود وأجنحة مع خدمة كونسيرج', 'ليالٍ فندقية فاخرة قبل وبعد الرحلة'],
  },
  'flights-hotels': {
    title: 'حجوزات الطيران والفنادق الخمس نجوم',
    categoryLabel: 'كونسيرج ولوجستيات',
    badge: 'أسعار تفضيلية',
    tagline: 'تعريفات جوية حصرية وترقيات VIP للغرف ومزايا شركاء الفنادق المفضلين.',
    description: 'احصل على مقاعد الدرجة الأولى والأعمال من خلال تخصيصات GDS العالمية، وشركاء المنتجعات الفاخرة المنتقاة مع ترقيات مجانية للغرف ورصيد فندقي وإلغاء مرن.',
    highlights: ['مقاعد الدرجة الأولى والأعمال المخصصة', 'ترقيات مجانية للغرف في الفنادق الشريكة', 'إفطار يومي ورصيد فندقي يصل إلى ٣٧٠ دولاراً', 'مزايا الفنادق المفضلة لدى فيرتوسو', 'إعادة توجيه طارئة وإلغاء مرن', 'تسجيل برنامج الولاء ووجبات خاصة'],
  },
  'visa-documentation': {
    title: 'التأشيرات والتصاريح والوثائق الرسمية',
    categoryLabel: 'كونسيرج ولوجستيات',
    badge: 'إصدار سريع',
    tagline: 'الحصول على التأشيرات بدون متاعب وإصدار رخص القيادة الدولية وتأمين السفر لأي جواز سفر.',
    description: 'يتولى فريق الوثائق لدينا التأشيرات الإلكترونية السعودية وطلبات شنغن والمملكة المتحدة والولايات المتحدة، ورخص القيادة الدولية، وتأمين السفر الشامل — مع تحديثات واتساب فورية والتوصيل للباب.',
    highlights: ['التأشيرة الإلكترونية السعودية السياحية والتجارية السريعة', 'المساعدة في مواعيد شنغن والمملكة المتحدة والولايات المتحدة', 'رخص القيادة الدولية في أكثر من ١٥٠ دولة', 'تغطية طبية طارئة دولية تصل إلى مليون دولار', 'توثيق الوثائق والترجمات المعتمدة', 'الاستلام والتسليم من الباب للباب'],
  },
};


export default function ServicesPage() {
  const { t, locale, isRTL } = useLanguage();
  const s = t.servicesPage;
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');

  const filteredServices =
    activeFilter === 'all'
      ? services
      : services.filter((svc) => svc.category === activeFilter);

  const filters: { id: FilterId; label: string }[] = [
    { id: 'all', label: s.filterAll },
    { id: 'bespoke', label: s.filterBespoke },
    { id: 'wellness', label: s.filterWellness },
    { id: 'educational', label: s.filterEducational },
    { id: 'ladies', label: s.filterLadies },
    { id: 'aviation', label: s.filterAviation },
    { id: 'corporate', label: s.filterCorporate },
    { id: 'concierge', label: s.filterConcierge },
  ];

  return (
    <main className="bg-[#F4EFE6] text-[#0F2E23] overflow-hidden">
      {/* ── EDITORIAL CINEMATIC HERO BANNER ── */}
      <PageHero
        title={s.heroTitle}
        subtitle={s.heroSubtitle}
        image="/images/header-real-services.jpg"
        alt="Lake Como and Bellagio Waterfront, Italy"
        positionClass="object-center"
      />

      {/* ── VALUE PILLARS (Crisp White Background) ── */}
      <section className="py-16 md:py-20 bg-white border-b border-[#0F2E23]/10">
        <div className="container-wide">
          <SectionHeading
            badge={s.advantageBadge}
            title={s.advantageTitle}
            description={s.advantageDesc}
          />

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.08}>
            <div className="group p-8 rounded-3xl bg-[#0F2E23] border border-[#2E6B57]/40 hover:border-[#39C27D] hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#39C27D]/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10 group-hover:bg-[#39C27D]/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-[#39C27D] flex items-center justify-center mb-5 group-hover:bg-[#39C27D] group-hover:text-[#0F2E23] transition-all duration-300 shadow-sm">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display text-[#F4EFE6] mb-2.5 font-semibold">
                  {s.advantage1Title}
                </h3>
                <p className="text-[#F4EFE6]/75 text-xs sm:text-sm leading-relaxed font-light font-sans">
                  {s.advantage1Desc}
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
                  {s.advantage2Title}
                </h3>
                <p className="text-[#F4EFE6]/75 text-xs sm:text-sm leading-relaxed font-light font-sans">
                  {s.advantage2Desc}
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
                  {s.advantage3Title}
                </h3>
                <p className="text-[#F4EFE6]/75 text-xs sm:text-sm leading-relaxed font-light font-sans">
                  {s.advantage3Desc}
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
            badge={s.showcaseBadge}
            title={s.showcaseTitle}
            description={s.showcaseDesc}
          />

          {/* Filter Pills Controls Bar */}
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

          {/* Service Cards */}
          <div className="space-y-10">
            {filteredServices.map((service, idx) => (
              <ServiceDivisionCard key={service.slug} service={service} index={idx} locale={locale} />
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
              <span>{s.deskBadge}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-[#0F2E23] mb-5 leading-[1.08]">
              {s.ctaTitle}
              <br />
              <span className="font-semibold italic text-[#2E6B57] font-serif">
                {s.ctaHighlight}
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-[#0F2E23]/70 mb-8 max-w-md mx-auto font-light leading-relaxed font-sans">
              {s.ctaDesc}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                  'Hello يلا سفر! Please help me curate a private luxury itinerary.'
                )}`}
                target="_blank"
                variant="primary"
              >
                <span>{s.consultBtn}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
              </MagneticButton>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full border border-[#0F2E23]/20 text-[#0F2E23] text-xs font-semibold uppercase tracking-wider hover:bg-[#0F2E23] hover:text-[#F4EFE6] transition-all font-sans bg-white shadow-xs"
              >
                {s.inquireOnlineBtn}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SERVICE CARD — Proportioned with locale support
   ═══════════════════════════════════════════════════════════════ */
function ServiceDivisionCard({
  service,
  index,
  locale,
}: {
  service: Service;
  index: number;
  locale: string;
}) {
  const isEven = index % 2 === 0;
  const arData = locale === 'ar' ? arabicServiceMap[service.slug] : undefined;

  const displayTitle = arData?.title ?? service.title;
  const displayCategory = arData?.categoryLabel ?? service.categoryLabel;
  const displayBadge = arData?.badge ?? service.badge;
  const displayTagline = arData?.tagline ?? service.tagline;
  const displayDesc = arData?.description ?? service.description;
  const highlightsList = arData?.highlights ?? service.highlights;
  const topHighlights = highlightsList.slice(0, 4);

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
              alt={displayTitle}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Atmospheric Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23]/60 via-transparent to-transparent pointer-events-none" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 z-10">
              <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-white/95 text-[#0F2E23] backdrop-blur-md border border-white/20 shadow-xs">
                {displayBadge}
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`lg:col-span-6 p-7 sm:p-9 lg:p-10 flex flex-col justify-center ${
              !isEven ? 'lg:order-1' : ''
            }`}
          >
            {/* Header Kicker */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#2E6B57] font-semibold mb-2.5 uppercase tracking-wider">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#39C27D]" />
              <span>{displayCategory}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-display font-light text-[#0F2E23] mb-2 leading-tight tracking-tight">
              {displayTitle}
            </h2>

            {/* Tagline */}
            <p className="text-[#2E6B57] font-serif italic text-sm sm:text-base mb-3">
              &ldquo;{displayTagline}&rdquo;
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#0F2E23]/75 font-light leading-relaxed mb-6 font-sans">
              {displayDesc}
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
