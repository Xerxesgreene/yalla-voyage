'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  MessageCircle,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { StaggerReveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { destinations } from '@/data/destinations';
import { siteConfig } from '@/data/site';

import { useLanguage } from '@/context/LanguageContext';

type RegionFilter = 'all' | 'europe' | 'middle-east' | 'asia-islands';

export default function DestinationsPage() {
  const { locale } = useLanguage();
  const [filter, setFilter] = useState<RegionFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      const matchesFilter =
        filter === 'all'
          ? true
          : filter === 'europe'
          ? d.region === 'europe'
          : filter === 'middle-east'
          ? d.region === 'middle-east'
          : d.region === 'asia-islands' || d.region === 'africa-islands';

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        d.name.toLowerCase().includes(query) ||
        d.country.toLowerCase().includes(query) ||
        d.tagline.toLowerCase().includes(query) ||
        (d.tags && d.tags.some((t) => t.toLowerCase().includes(query)));

      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  const counts = useMemo(() => {
    return {
      all: destinations.length,
      europe: destinations.filter((d) => d.region === 'europe').length,
      'middle-east': destinations.filter((d) => d.region === 'middle-east').length,
      'asia-islands': destinations.filter(
        (d) => d.region === 'asia-islands' || d.region === 'africa-islands'
      ).length,
    };
  }, []);

  const tabs = [
    { id: 'all', label: locale === 'ar' ? 'جميع الوجهات' : 'All Destinations', count: counts.all },
    { id: 'europe', label: locale === 'ar' ? 'أوروبا والمتوسط' : 'Europe & Med', count: counts.europe },
    { id: 'middle-east', label: locale === 'ar' ? 'الشرق الأوسط وشمال إفريقيا' : 'Middle East & North Africa', count: counts['middle-east'] },
    { id: 'asia-islands', label: locale === 'ar' ? 'آسيا والجزر' : 'Asia & Islands', count: counts['asia-islands'] },
  ];

  const arabicDestinationMap: Record<string, { name: string; country: string; tagline: string; bestSeason?: string }> = {
    egypt: {
      name: 'القاهرة والجيزة والنيل',
      country: 'مصر',
      tagline: 'أهرامات الحضارة وإبحار الدهبيات النيلية الفاخرة',
      bestSeason: 'أكتوبر – أبريل',
    },
    italy: {
      name: 'ساحل أمالفي، روما والبندقية',
      country: 'إيطاليا',
      tagline: 'سحر الريفيرا المعلقة وعظمة عصر النهضة',
      bestSeason: 'مايو – أكتوبر',
    },
    switzerland: {
      name: 'جبال الألب السويسرية وبحيرة جنيف',
      country: 'سويسرا',
      tagline: 'شموخ القمم الجليدية والشاليهات الألبية فائقة الفخامة',
      bestSeason: 'ديسمبر – أبريل و يونيو – سبتمبر',
    },
    mauritius: {
      name: 'ملاذ جزيرة موريشيوس',
      country: 'موريشيوس',
      tagline: 'البحيرات الفيروزية وفلل الشواطئ الخاصة',
      bestSeason: 'مايو – ديسمبر',
    },
    uae: {
      name: 'دبي وأبوظبي',
      country: 'الإمارات',
      tagline: 'روعة المستقبل وفخامة القوافل الصحراوية الملكية',
      bestSeason: 'نوفمبر – مارس',
    },
    'asia-pacific': {
      name: 'آسيا باسيفيك وجزر بالي',
      country: 'إندونيسيا وبالي',
      tagline: 'ملاذات الغابات الاستوائية ويخوت الفينيسي في كومودو',
      bestSeason: 'أبريل – أكتوبر',
    },
    paris: {
      name: 'باريس وكوت دازور',
      country: 'فرنسا',
      tagline: 'مدينة النور وأناقة الريفيرا الفرنسية الخالدة',
      bestSeason: 'أبريل – أكتوبر',
    },
    japan: {
      name: 'طوكيو وكيوتو',
      country: 'اليابان',
      tagline: 'سكينة فلسفة الزن ودقة كبار حرفيي الساموراي',
      bestSeason: 'مارس – مايو و سبتمبر – نوفمبر',
    },
    maldives: {
      name: 'أرخبيل جزر المالديف',
      country: 'المالديف',
      tagline: 'الفلل العائمة فوق الماء والشعاب المرجانية المتلألئة',
      bestSeason: 'نوفمبر – أبريل',
    },
    turkey: {
      name: 'إسطنبول وكبادوكيا',
      country: 'تركيا',
      tagline: 'قصور البوسفور التاريخية ومناطيد شروق الشمس الساحرة',
      bestSeason: 'أبريل – يونيو و سبتمبر – نوفمبر',
    },
    greece: {
      name: 'سانتوريني وجزر السيكلاديز',
      country: 'اليونان',
      tagline: 'غروب كالديرا الخلاب وعزلة بحر إيجة الهادئة',
      bestSeason: 'مايو – أكتوبر',
    },
    'al-baha': {
      name: 'الباحة وسلسلة جبال السروات',
      country: 'المملكة العربية السعودية',
      tagline: 'المدرجات الخضراء والقرى الرخامية التراثية الشامخة',
      bestSeason: 'طوال العام',
    },
  };

  return (
    <main className="bg-[#F4EFE6] text-[#0F2E23] overflow-hidden">
      {/* ── CINEMATIC PAGE HERO BANNER ── */}
      <PageHero
        title={locale === 'ar' ? 'أبرز الوجهات العالمية' : 'Top Destinations'}
        subtitle={
          locale === 'ar'
            ? 'استكشف وجهات عالمية ساحرة تم انتقاؤها بعناية لتجمع بين الروعة النادرة والفخامة المريحة.'
            : 'Explore breathtaking global destinations handpicked for rare wonder and unhurried luxury.'
        }
        image="/images/header-real-destinations.jpg"
        alt="Positano, Amalfi Coast, Italy"
        positionClass="object-center"
      />

      {/* ── DESTINATION EXPLORER SECTION ── */}
      <section className="section-pad bg-[#F4EFE6]">
        <div className="container-wide">
          {/* Section Introduction Heading */}
          <SectionHeading
            badge={locale === 'ar' ? 'استكشف العالم' : 'EXPLORE THE WORLD'}
            title={
              locale === 'ar'
                ? 'آفاق عالمية استثنائية، مصممة بلا مساومة.'
                : 'Extraordinary Global Horizons, Curated Without Compromise.'
            }
            description={
              locale === 'ar'
                ? 'من أهرامات الجيزة الخالدة وفلل ساحل أمالفي الساحلية إلى قمم سويسرا وبحيرات موريشيوس الفيروزية، اكتشف وجهات استثنائية للمسافرين من النخبة.'
                : 'From the ancient pyramids of Egypt and the cliffside villas of Italy to alpine Switzerland and the turquoise lagoons of Mauritius, discover hand-tailored global destinations designed for discerning travelers.'
            }
          />

          {/* Controls Bar: Filter Pills & Search */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 pb-8 border-b border-[#0F2E23]/10">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as RegionFilter)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    filter === tab.id
                      ? 'bg-[#0F2E23] text-[#F4EFE6] shadow-lg scale-102 ring-2 ring-[#0F2E23]/20'
                      : 'bg-white text-[#0F2E23]/70 hover:bg-white hover:text-[#0F2E23] border border-[#0F2E23]/10 hover:border-[#2E6B57]/30 shadow-xs'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium transition-colors ${
                      filter === tab.id
                        ? 'bg-[#2E6B57] text-white'
                        : 'bg-[#0F2E23]/6 text-[#0F2E23]/60'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-[#0F2E23]/40 absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder={locale === 'ar' ? 'ابحث بالمدينة أو الدولة أو المعلم...' : 'Search by city, country, or tag...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 rtl:pl-4 rtl:pr-11 py-2.5 rounded-full bg-white border border-[#0F2E23]/15 text-xs text-[#0F2E23] placeholder-[#0F2E23]/45 focus:outline-none focus:border-[#2E6B57] focus:ring-2 focus:ring-[#2E6B57]/20 shadow-xs transition-all font-sans"
              />
            </div>
          </div>

          {/* Clean, Elevated Destination Cards Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-[#0F2E23]/10 shadow-sm max-w-xl mx-auto px-6">
              <div className="w-12 h-12 rounded-full bg-[#0F2E23]/5 text-[#2E6B57] flex items-center justify-center mx-auto mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <p className="text-xl font-display text-[#0F2E23] font-normal mb-2">
                {locale === 'ar' ? 'لم يتم العثور على وجهات' : 'No destinations found'}
              </p>
              <p className="text-xs text-[#0F2E23]/60 font-sans font-light mb-6">
                {locale === 'ar'
                  ? `لم نتمكن من العثور على وجهة تطابق "${searchQuery}". جرب كلمة بحث أخرى أو أعد ضبط الفلاتر.`
                  : `We couldn't find any destination matching "${searchQuery}". Try another search term or reset filters.`}
              </p>
              <button
                onClick={() => {
                  setFilter('all');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 rounded-full bg-[#0F2E23] text-[#F4EFE6] text-xs font-semibold uppercase tracking-wider hover:bg-[#2E6B57] transition-colors cursor-pointer"
              >
                {locale === 'ar' ? 'إعادة ضبط جميع الفلاتر' : 'Reset All Filters'}
              </button>
            </div>
          ) : (
            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.06}>
              {filtered.map((dest) => {
                const arData = arabicDestinationMap[dest.slug];
                const destName = locale === 'ar' && arData ? arData.name : dest.name;
                const destCountry = locale === 'ar' && arData ? arData.country : dest.country;
                const destTagline = locale === 'ar' && arData ? arData.tagline : dest.tagline;
                const destSeason = locale === 'ar' && arData?.bestSeason ? arData.bestSeason : dest.bestSeason;

                return (
                  <Link
                    key={dest.slug}
                    href={dest.href}
                    className="group relative block aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#06150E] cursor-pointer"
                  >
                    {/* Full-Bleed Background Image */}
                    <Image
                      src={dest.image}
                      alt={destName}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Dark Vignette & Bottom Text Contrast Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 via-40% to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent h-24 z-10 pointer-events-none" />

                    {/* Top Right Floating Hover Arrow */}
                    <div className="relative z-20 p-5 sm:p-6 flex items-center justify-end">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/25 group-hover:bg-[#39C27D] group-hover:text-[#06150E] group-hover:border-[#39C27D] transition-all duration-300 shadow-sm">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    {/* Bottom Text Overlay */}
                    <div className="absolute bottom-0 inset-x-0 z-20 p-6 sm:p-8">
                      {/* Line 1: Best Season / Country in Uppercase Mono */}
                      <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] !text-white/90 font-semibold block mb-1 drop-shadow-sm">
                        {destSeason ? `${destSeason} • ${destCountry}` : destCountry}
                      </span>

                      {/* Line 2: Large Serif Destination Title in Pure White */}
                      <h3
                        style={{
                          fontFamily: locale === 'ar' ? "'El Messiri', 'Almarai', sans-serif" : "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                          color: '#FFFFFF',
                        }}
                        className="text-3xl sm:text-4xl lg:text-[38px] !text-white font-normal leading-[1.08] tracking-tight group-hover:text-[#39C27D] transition-colors drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                      >
                        {destName}
                      </h3>

                      {/* Line 3: Subtitle / Curator Experience Tagline in Clean White */}
                      <p
                        style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                        className="text-xs sm:text-[13.5px] font-sans !text-white/85 font-light leading-snug mt-2 line-clamp-1 drop-shadow-sm"
                      >
                        {destTagline}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </StaggerReveal>
          )}

          {/* ── BESPOKE DESTINATION CONSULTATION BANNER ── */}
          <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-[#0F2E23] text-white border border-[#2E6B57]/40 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#39C27D]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#39C27D] font-semibold block">
                  {locale === 'ar' ? 'محفظة الوجهات العالمية الخاصة' : 'Private Global Portfolio'}
                </span>
                <h3 className="text-display text-2xl sm:text-3xl lg:text-4xl text-[#F4EFE6] font-light leading-tight">
                  {locale === 'ar' ? 'هل تبحث عن ملاذ خاص غير معلن؟' : 'Seeking an unlisted private sanctuary?'}
                </h3>
                <p className="text-[#F4EFE6]/75 text-xs sm:text-sm leading-relaxed font-light font-sans max-w-2xl">
                  {locale === 'ar'
                    ? 'بجانب وجهاتنا المميزة، تصمم يلا سفر رحلات سرية واستئجار جزر خاصة ويخوت فاخرة عبر أكثر من 60 دولة وفق أقصى درجات الخصوصية والكتمان.'
                    : 'Beyond our featured destinations, يلا سفر architects confidential journeys, private island buyouts, and remote superyacht charters across 60+ countries under strict NDA protocols.'}
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#39C27D] pt-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {locale === 'ar' ? 'خصوصية تامة' : 'Strict Discretion'}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {locale === 'ar' ? 'كونسيرج 24/7' : '24/7 Concierge'}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {locale === 'ar' ? 'طيران خاص مباشر' : 'Private Jet Access'}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-end">
                <MagneticButton
                  href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                    locale === 'ar'
                      ? 'مرحباً يلا سفر، أود استشارة أحد كبار مصممي الرحلات بخصوص وجهة خاصة مصممة خصيصاً لي.'
                      : 'Hello يلا سفر, I would like to consult with a Senior Travel Designer regarding a private custom destination.'
                  )}`}
                  target="_blank"
                  variant="primary"
                  className="w-full text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" /> {locale === 'ar' ? 'تحدث مع كبير المصممين' : 'Chat With Senior Designer'}
                </MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-[#F4EFE6] hover:bg-white/10 text-xs font-semibold uppercase tracking-wider transition-all duration-300 font-sans text-center"
                >
                  {locale === 'ar' ? 'تقديم طلب رحلة خاصة' : 'Submit Bespoke Request'} <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
