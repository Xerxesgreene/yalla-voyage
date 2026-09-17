'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Sparkles,
  Compass,
  Award,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { Reveal, StaggerReveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { PageHero } from '@/components/ui/PageHero';
import { saudiDestinations, SaudiDestination } from '@/data/saudi';
import { experiences } from '@/data/experiences';
import { siteConfig } from '@/data/site';

import { useLanguage } from '@/context/LanguageContext';

const arabicSaudiDestinationsMap: Record<
  string,
  { tagline: string; description: string; places: string[] }
> = {
  alula: {
    tagline: 'حيث تلتقي الحكايات القديمة بسكينة سماء الصحراء',
    description:
      'العلا ليست مجرد وجهة؛ بل هي شعور استثنائي تحمله معك طويلاً. بإشراف حصري من خبراء يلا سفر المحليين، استكشف أول موقع للتراث العالمي لليونسكو في السعودية، حيث تهمس مقابر الأنباط المنحوتة في الصخور بقصص ضاربة في عمق التاريخ.',
    places: [
      'الحِجر (تراث عالمي لليونسكو)',
      'البلدة القديمة',
      'صخرة الفيل (جبل الفيل)',
      'واحة العلا الغنّاء',
      'ددان وجبل عكمة',
      'مطل جبل شلال',
    ],
  },
  diriyah: {
    tagline: 'مهد الدولة وبداية المجد المنحوت في الطين الذهبي',
    description:
      'حيث كُتب تاريخ المملكة بطين وادي حنيفة وشجاعة الأجداد. موطن حي الطريف المسجل باليونسكو، تجمع الدرعية بين عمارة نجد الأصيلة، ومتاحف التراث الحي، وأرقى المطاعم العالمية المطلة على مطل البجيري.',
    places: [
      'حي الطريف التراثي (اليونسكو)',
      'مطل البجيري الفاخر',
      'وادي حنيفة الخصيب',
      'قصر سلوى التاريخي',
    ],
  },
  jeddah: {
    tagline: 'قصص خالدة تمتد من حواري البلد العتيقة إلى نسيم البحر',
    description:
      'جدة بنسيم بحرها الدافئ، وأيامها المريحة، ولياليها النابضة بالحياة وإيقاع البحر الأحمر. استمتع بتراث التجارة العريق، وعمارة الرواشين الخشبية المرجانية الفريدة، وشواطئ المنتجعات الساحلية الفاخرة.',
    places: [
      'منطقة البلد التاريخية',
      'سوق البلد الشعبي',
      'مسجد الرحمة العائم',
      'نادي جدة لليخوت والمارينا',
      'متحف الطيبات الدولي',
    ],
  },
  riyadh: {
    tagline: 'حيث تلتقي أصالة الماضي مع طموح المستقبل العالمي',
    description:
      'في الرياض، يتحرك كل مشهد بين عبق التراث وعظمة الطموح — عاصمة مفعمة بالطاقة والثقافة والأمسيات الراقية. اكتشف مسقط رأس الدولة السعودية ومسرح مستقبلها العالمي الرائد.',
    places: [
      'قلعة قصر المصمك',
      'سوق الزل التراثي',
      'جسر المشاهدة ببرج المملكة',
      'المتحف الوطني السعودي',
      'قصر المربع التاريخي',
    ],
  },
  madinah: {
    tagline: 'واحة السكينة والجمال الروحاني الخالد',
    description:
      'مدينة تأسر القلوب بصفائها ونورها. في المدينة المنورة تلتقي الطمأنينة الروحية والجمال الخالد في رحلات ثقافية هادئة تصممها يلا سفر بكل عناية ووقار.',
    places: [
      'المسجد النبوي الشريف',
      'مسجد وممشى قباء',
      'جبل أحد وساحة الشهداء',
      'سوق السويقة التراثي',
    ],
  },
  kaec: {
    tagline: 'أسلوب حياة عصري فاخر على شواطئ البحر الأحمر النقية',
    description:
      'ملاذ ساحلي معاصر يضم ملاعب جولف للبطولات العالمية، وقنوات مائية هادئة، ومارينا باي لا صن الفاخرة، وشواطئ رملية خلابة تجمع بين الترفيه الراقي والضيافة البحرية الاستثنائية.',
    places: [
      'مارينا ونادي يخوت باي لا صن',
      'نادي رويال غرينز للجولف',
      'حديقة جمان والممشى المائي',
      'شاطئ يام والرياضات البحرية',
    ],
  },
  yanbu: {
    tagline: 'لؤلؤة البحر الأحمر التاريخية وبوابة الشعاب المرجانية البكر',
    description:
      'تشتهر بلقب لؤلؤة البحر الأحمر، وتجمع بين عبق منازل الحجر المرجاني والرواشين الخشبية البديعة التي تعود للقرن التاسع عشر، وبين أنقى مواقع الغوص والشعاب المرجانية في أرخبيل الأخوات السبع.',
    places: [
      'منطقة ينبع التاريخية والرواشين',
      'ميناء ومارينا ينبع البحر',
      'حاجز شعاب الأخوات السبع',
      'كورنيش ومتنزه الفيروز البحري',
    ],
  },
  'al-baha': {
    tagline: 'المدرجات الخضراء والقرى الرخامية الشامخة بين السحاب',
    description:
      'على قمم جبال السروات الباردة، تنعم الباحة بنسيم عليل وغابات العرعر الكثيفة والمنحدرات الجرانيتية المهيبة، بالإضافة إلى قرية ذي عين الرخامية الأثرية الشامخة بين مزارع الموز والنخيل.',
    places: [
      'قرية ذي عين الرخامية التراثية',
      'منتزه وغابة رغدان',
      'محمية جبال شدا الطبيعية',
      'حصون الخلف والخليف الأثرية',
    ],
  },
  amaala: {
    tagline: 'ريفيرا البحر الأحمر فائقة الفخامة وواحة الاستجمام الشامل',
    description:
      'قمة الرفاهية التجديدية والاستشفاء الصحي على الساحل الشمالي الغربي البكر للمملكة. تجمع أمالا بين نادي يخوت تريبل باي، ومراكز استعادة الشباب والنشاط، والعمارة المائية الساحرة.',
    places: [
      'مارينا ونادي يخوت تريبل باي',
      'معهد الحياة البحرية والأبحاث',
      'عيادات كلينيك لا بريري وميرافال',
      'جزر كوراليوم والشواطئ العذراء',
    ],
  },
  'al-ahsa': {
    tagline: 'أكبر واحة نخيل في العالم وعجائب الكهوف الكلسية',
    description:
      'محيط زمردي يضم أكثر من 2.5 مليون نخلة تحيط بها رمال الصحراء الذهبية. موقع تراث عالمي لليونسكو يزخر بالينابيع الحرارية الطبيعية، وكهوف جبل القارة المنحوتة بالرياح، وتاريخ زراعي يمتد لآلاف السنين.',
    places: [
      'كهوف جبل القارة الطبيعية',
      'واحات نخيل الأحساء والعيون',
      'مسجد جواثا التاريخي',
      'سوق القيصرية التراثي المسقوف',
    ],
  },
  abha: {
    tagline: 'قمم الضباب وقرى التراث المعلقة بين غابات العرعر',
    description:
      'على ارتفاع 2200 متر فوق سطح البحر، تمثل أبها الملاذ الأخضر البارد للسعودية. اكتشف قصور رجال ألمع الحجرية التراثية المسجلة باليونسكو، والوديان المغطاة بالغيوم، وكرم الضيافة العسيرية الأصيلة.',
    places: [
      'قرية رجال ألمع التراثية (اليونسكو)',
      'قمة جبل السودة والضباب',
      'قرية الحبلة المعلقة',
      'حي البسطة التراثي وجسور عسير',
    ],
  },
  taif: {
    tagline: 'مدينة الورد العطرية وعاصمة المصايف السعودية الشاهقة',
    description:
      'عاصمة المصايف الصيفية في السعودية، تشتهر بمزارع الورد الجبلي ومعامل تقطير دهن وماء الورد الأغلى عالمياً. استمتع بطرق عقبة الهدا الجبلية، ونسيم الشفا المنعش، وقصور الطائف الملكية التاريخية.',
    places: [
      'مزارع وتقطير ورد الطائف',
      'تلفريك جبل الهدا البانورامي',
      'قصر شبرا الملكي التاريخي',
      'مرتفعات وأودية الشفا',
    ],
  },
  'wadi-al-disah': {
    tagline: 'حيث تهدأ وتيرة الحياة وتتحول السكينة إلى رحلة استثنائية',
    description:
      'وادٍ أسطوري محاط بجبال الحجر الرملي الوردية الشاهقة وجداول المياه العذبة المتدفقة بين أشجار النخيل والبردي، حيث ينساب الهدوء التام وتلتقي الطبيعة البكر بالنقوش النبطية القديمة.',
    places: [
      'جروف الوادي الصخرية الوردية',
      'مجرى العيون ونهر النخيل',
      'النقوش الأثرية النبطية',
    ],
  },
  'red-sea': {
    tagline: 'حيث يلتقي النقاء التراثي بأبهى الشعاب المرجانية وأعذب الجزر',
    description:
      'وجهة سياحية رائدة تجمع بين الاستدامة البيئية والرفاهية المطلقة، مع فلل عائمة فوق المياه الفيروزية النقية، ومنتجعات بيئية فاخرة غير مسبوقة على جزر وأرخبيل البحر الأحمر.',
    places: [
      'حاجز الشعاب المرجانية العذراء',
      'منتجعات الجزر والفلل العائمة',
      'محميات النجوم والجزر الخاصة',
    ],
  },
};

const arabicExperiencesMap: Record<
  string,
  {
    title: string;
    subtitle: string;
    category: string;
    location: string;
    description: string;
    duration: string;
  }
> = {
  'roots-and-recipes': {
    title: 'الجذور والمذاق',
    subtitle: 'من المزرعة إلى المائدة في العلا',
    category: 'تجارب طهي',
    location: 'واحة العلا الغنّاء',
    description:
      'انغمس في مزرعة حية داخل واحة العلا من تنظيم يلا سفر. شاهد كبار طهاة التراث وهم يحضرون فطوراً سعودياً أصيلاً بمحاصيل الواحة الطازجة والقهوة السعودية الفاخرة.',
    duration: '3 ساعات',
  },
  'threads-of-tradition': {
    title: 'خيوط التقاليد',
    subtitle: 'ورشة حياكة السدو التراثية',
    category: 'تراث وثقافة',
    location: 'جدة / العلا',
    description:
      'السدو من أعرق الفنون العربية المسجلة في اليونسكو. عبر ترتيبات يلا سفر الخاصة، اجلس بصحبة أمهر الحرفيات البدويات واكتشف معاني الرموز الهندسية التراثية المتوارثة.',
    duration: 'ساعتان ونصف',
  },
  'palm-leaf-weaving': {
    title: 'من وحي النخيل',
    subtitle: 'ورشة حرفة صناعة السعف',
    category: 'تراث وثقافة',
    location: 'المدينة المنورة / العلا',
    description:
      'من سعف النخيل العريق إلى إبداعات فنية متوارثة. انضم إلى فنانين محليين في ورشة خاصة تصمم خلالها تذكارك السعودي التراثي الخاص بيديك.',
    duration: 'ساعتان',
  },
  'bedouin-paths': {
    title: 'دروب البادية',
    subtitle: 'جلسة سمر وقصص بدوية',
    category: 'مغامرات وأصالة',
    location: 'صحراء العلا',
    description:
      'التف حول موقد النار الهادئ بين جبال العلا الصخرية مع يلا سفر، وتذوق الشاي المهيّل واستمع لحكايات البادية والشعر العربي الأصيل تحت واحدة من أصفى سموات الأرض.',
    duration: 'أمسية كاملة',
  },
};

export default function ExploreSaudiPage() {
  const { t, locale, isRTL } = useLanguage();
  const es = t.exploreSaudiPage;
  const isAr = locale === 'ar';
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredDestinations =
    activeTab === 'all'
      ? saudiDestinations
      : saudiDestinations.filter((dest) => dest.slug === activeTab);

  return (
    <main className="bg-[#F4EFE6] text-[#0F2E23] overflow-hidden">
      {/* ── EDITORIAL CINEMATIC HERO BANNER ── */}
      <PageHero
        title={es.heroTitle}
        subtitle={es.heroSubtitle}
        image="/images/header-real-saudi.jpg"
        alt="AlUla Sandstone Desert Sanctuary, Saudi Arabia"
        positionClass="object-center"
      />

      {/* ── VALUE PILLARS (Crisp White Background) ── */}
      <section className="py-16 md:py-20 bg-white border-b border-[#0F2E23]/10">
        <div className="container-wide">
          <SectionHeading
            badge={es.advantageBadge}
            title={es.advantageTitle}
            description={es.advantageDesc}
          />

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.08}>
            <div className="group p-8 rounded-3xl bg-[#0F2E23] border border-[#2E6B57]/40 hover:border-[#39C27D] hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#39C27D]/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10 group-hover:bg-[#39C27D]/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-[#39C27D] flex items-center justify-center mb-5 group-hover:bg-[#39C27D] group-hover:text-[#0F2E23] transition-all duration-300 shadow-sm">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display text-[#F4EFE6] mb-2.5 font-semibold">
                  {es.advantage1Title}
                </h3>
                <p className="text-sm text-[#F4EFE6]/75 font-light leading-relaxed font-sans">
                  {es.advantage1Desc}
                </p>
              </div>
            </div>

            <div className="group p-8 rounded-3xl bg-[#0F2E23] border border-[#2E6B57]/40 hover:border-[#39C27D] hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#39C27D]/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10 group-hover:bg-[#39C27D]/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 text-[#39C27D] flex items-center justify-center mb-5 group-hover:bg-[#39C27D] group-hover:text-[#0F2E23] transition-all duration-300 shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display text-[#F4EFE6] mb-2.5 font-semibold">
                  {es.advantage2Title}
                </h3>
                <p className="text-sm text-[#F4EFE6]/75 font-light leading-relaxed font-sans">
                  {es.advantage2Desc}
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
                  {es.advantage3Title}
                </h3>
                <p className="text-sm text-[#F4EFE6]/75 font-light leading-relaxed font-sans">
                  {es.advantage3Desc}
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
            badge={es.regionalBadge}
            title={es.regionalTitle}
            description={es.regionalDesc}
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
              <span>{es.allDestinations}</span>
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
                <span>{isAr && dest.arabicName ? dest.arabicName : dest.name}</span>
              </button>
            ))}
          </div>

          {/* Destination Cards */}
          <div className="space-y-10">
            {filteredDestinations.map((dest, idx) => (
              <DestinationVideoCard key={dest.slug} dest={dest} index={idx} locale={locale} sanctuaryBadge={es.sanctuaryBadge} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE EXPERIENCES (Crisp White) ── */}
      <section className="py-16 md:py-24 bg-white border-b border-[#0F2E23]/10 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <SectionHeading
            badge={es.signatureBadge}
            title={es.signatureTitle}
            description={es.signatureDesc}
          />

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-7" stagger={0.08}>
            {experiences.slice(0, 4).map((exp) => {
              const arExp = isAr ? arabicExperiencesMap[exp.slug] : null;
              const expTitle = arExp ? arExp.title : exp.title;
              const expSubtitle = arExp ? arExp.subtitle : exp.subtitle;
              const expCategory = arExp ? arExp.category : exp.category;
              const expLocation = arExp ? arExp.location : exp.location;
              const expDescription = arExp ? arExp.description : exp.description;
              const expDuration = arExp ? arExp.duration : exp.duration;

              return (
                <div
                  key={exp.slug}
                  className="group rounded-3xl overflow-hidden bg-white border border-[#0F2E23]/10 hover:border-[#2E6B57]/40 hover:shadow-2xl transition-all duration-400 flex flex-col justify-between text-[#0F2E23]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0F2E23]/5">
                    <Image
                      src={exp.image}
                      alt={`يلا سفر ${expTitle}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-106"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23]/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-mono font-semibold bg-white/95 text-[#0F2E23] shadow-xs">
                        {expCategory}
                      </span>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-display text-[#0F2E23] mb-1 group-hover:text-[#2E6B57] transition-colors leading-tight font-light">
                      {expTitle}
                    </h3>
                    <p className="text-xs font-mono text-[#2E6B57] font-semibold mt-1 mb-2">
                      {expSubtitle} · {expLocation}
                    </p>
                    <p className="text-sm text-[#0F2E23]/70 font-light leading-relaxed font-sans mb-4">
                      {expDescription}
                    </p>
                    <div className="pt-4 border-t border-[#0F2E23]/8 flex items-center justify-between text-xs font-mono text-[#2E6B57]">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#39C27D]" />
                        <span>{es.curatedBy}</span>
                      </span>
                      <span className="text-[#0F2E23]/60 font-sans">{expDuration}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </StaggerReveal>

          <Reveal delay={0.2}>
            <div className="text-center mt-12">
              <MagneticButton
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                  'Hello يلا سفر, I want to book signature private Saudi experiences with your concierge.'
                )}`}
                target="_blank"
                variant="primary"
              >
                <span>{es.inquireBtn}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
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
              <span>{es.deskBadge}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-[#0F2E23] mb-5 leading-[1.08]">
              {es.ctaTitle}
              <br />
              <span className="font-semibold italic text-[#2E6B57] font-serif">
                {es.ctaHighlight}
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-[#0F2E23]/70 mb-8 max-w-md mx-auto font-light leading-relaxed font-sans">
              {es.ctaDesc}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                  'Hello يلا سفر! Please help me curate a private luxury Saudi itinerary.'
                )}`}
                target="_blank"
                variant="primary"
              >
                <span>{es.consultBtn}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
              </MagneticButton>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full border border-[#0F2E23]/20 text-[#0F2E23] text-xs font-semibold uppercase tracking-wider hover:bg-[#0F2E23] hover:text-[#F4EFE6] transition-all font-sans bg-white shadow-xs"
              >
                {es.inquireOnlineBtn}
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
  locale,
  sanctuaryBadge = 'يلا سفر Sanctuary',
}: {
  dest: SaudiDestination;
  index: number;
  locale?: string;
  sanctuaryBadge?: string;
}) {
  const isEven = index % 2 === 0;
  const topPlaces = dest.places.slice(0, 4);
  const isAr = locale === 'ar';
  const arDest = isAr ? arabicSaudiDestinationsMap[dest.slug] : null;
  const displayName = isAr && dest.arabicName ? dest.arabicName : dest.name;
  const displayTagline = arDest ? arDest.tagline : dest.tagline;
  const displayDescription = arDest ? arDest.description : dest.description;

  return (
    <Reveal>
      <div id={dest.slug} className="bg-white rounded-3xl overflow-hidden border border-[#0F2E23]/10 shadow-lg hover:shadow-2xl transition-shadow duration-500 text-[#0F2E23]">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Authentic Real Photo Side */}
          <div className={`lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden group bg-[#0F2E23] ${!isEven ? 'lg:order-2' : ''}`}>
            <Image
              src={dest.image}
              alt={displayName}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23]/60 via-transparent to-transparent pointer-events-none" />

            {/* Location Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3.5 py-1.5 rounded-full text-[10.5px] font-mono font-semibold uppercase tracking-widest bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-xs">
                {displayName}
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div className={`lg:col-span-6 p-7 sm:p-9 lg:p-11 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#2E6B57] font-semibold mb-3 uppercase tracking-wider">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#39C27D]" />
                <span>{sanctuaryBadge}</span>
                {!isAr && dest.arabicName && (
                  <>
                    <span>•</span>
                    <span className="font-serif font-normal text-sm">{dest.arabicName}</span>
                  </>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-display font-light text-[#0F2E23] mb-2 leading-tight tracking-tight">
                {displayName}
              </h2>

              <p className="text-[#2E6B57] font-serif italic text-base sm:text-lg mb-3">
                &ldquo;{displayTagline}&rdquo;
              </p>

              <p className="text-sm sm:text-[15px] text-[#0F2E23]/75 font-light leading-relaxed mb-6 font-sans">
                {displayDescription}
              </p>

              {/* Highlight Places */}
              <div className="flex flex-wrap gap-2">
                {topPlaces.map((place, pIdx) => {
                  const placeName = arDest && arDest.places[pIdx] ? arDest.places[pIdx] : place.name;
                  return (
                    <span
                      key={place.name}
                      className="px-3 py-1.5 rounded-lg bg-[#F4EFE6] text-[#0F2E23]/80 text-xs font-medium border border-[#0F2E23]/8 flex items-center gap-1.5 font-sans hover:bg-[#EAE3D5] transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#2E6B57]" />
                      {placeName.length > 28 ? placeName.slice(0, 25) + '…' : placeName}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
