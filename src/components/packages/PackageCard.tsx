'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { TravelPackage } from '@/data/packages';

interface PackageCardProps {
  pkg: TravelPackage;
  index: number;
}

import { useLanguage } from '@/context/LanguageContext';

const arabicPackagesMap: Record<string, {
  title: string;
  categoryLabel: string;
  duration: string;
  tagline: string;
  highlights: string[];
}> = {
  cappadocia: {
    title: 'كابادوكيا',
    categoryLabel: 'أبرز الوجهات',
    duration: '6 أيام / 5 ليالٍ',
    tagline: 'رحلات مناطيد خاصة عند الفجر فوق مداخن الجنيات وأجنحة كهفية فاخرة.',
    highlights: ['رحلة منطاد هوائي خاصة عند الفجر', 'جناح كهفي بتراس بانورامي', 'سفاري دبابات صحراوية عند الغروب', 'مرشد محلي خاص معتمد'],
  },
  'amalfi-coast': {
    title: 'ساحل أمالفي',
    categoryLabel: 'أبرز الوجهات',
    duration: '7 أيام / 6 ليالٍ',
    tagline: 'فلل جرف صخري خاصة، وجولات يخوت حول كابري، وعشاء رومانسي في بوزيتانو عند الغروب.',
    highlights: ['استئجار يخت خاص فاخر', 'جناح فيلا على جرف صخري ساحر', 'جولة بحرية خاصة في كابري', 'عشاء راقٍ حائز على نجوم ميشلان'],
  },
  maldives: {
    title: 'المالديف',
    categoryLabel: 'ملاذ جزري',
    duration: '6 أيام / 5 ليالٍ',
    tagline: 'فلل عائمة منعزلة بمسبح خاص، وتنقلات بالطائرات المائية، وعشاء خاص فوق الشعاب الفيروزية.',
    highlights: ['فيلا عائمة بمسبح خاص ممتد', 'رحلات طيران مائي مباشرة', 'غطس خاص في الشعاب المرجانية', 'خدمة خادم شخصي (باتلر) 24/7'],
  },
  bali: {
    title: 'بالي',
    categoryLabel: 'ملاذ استوائي',
    duration: '7 أيام / 6 ليالٍ',
    tagline: 'فلل بمسبح خاص في غابات أوبود، ومراسم تطهير مائية بالمعابد القديمة، وغروب ساحر في أولوواتو.',
    highlights: ['فيلا بمسبح خاص في غابات أوبود', 'زيارة ومباركة معابد خاصة', 'جولة شروق شمس في تيغالالانغ', 'طقوس سبا واستشفاء متكاملة'],
  },
  egypt: {
    title: 'مصر',
    categoryLabel: 'عجائب الحضارات',
    duration: '8 أيام / 7 ليالٍ',
    tagline: 'تصاريح دخول خاصة لكبار الشخصيات لأهرامات الجيزة، ورحلة نيلية فاخرة، وكنوز الفراعنة الملكية.',
    highlights: ['تصريح خاص لأهرامات الجيزة عند الشروق', 'جناح في دهبية نيلية فاخرة', 'زيارة خاصة لوادي الملوك', 'عالم مصريات مرافق خاص'],
  },
  dubai: {
    title: 'دبي',
    categoryLabel: 'واحة عصرية',
    duration: '5 أيام / 4 ليالٍ',
    tagline: 'أجنحة بنتهاوس بإطلالات أفقية خلابة، وسفاري صحراوي بسيارات كلاسيكية، واستئجار يخوت فاخرة.',
    highlights: ['جناح بنتهاوس فاخر في وسط دبي', 'سفاري صحراوي خاص ومميز', 'جولة يخت في مارينا دبي', 'جولة هليكوبتر لكبار الشخصيات'],
  },
  'ladies-trips': {
    title: 'رحلات السيدات',
    categoryLabel: 'رحلات خاصة',
    duration: '6 أيام / 5 ليالٍ',
    tagline: 'مصممة حصرياً للسيدات بفلل استجمام خاصة، وجولات تسوق حصرية، ومرشدات محترفات.',
    highlights: ['فريق استضافة نسائي بالكامل', 'سبا وعافية بخصوصية مطلقة', 'دخول حصري لأرقى دور الأزياء', 'عشاء خاص هادئ عند الغروب'],
  },
  'educational-tours': {
    title: 'الجولات التعليمية',
    categoryLabel: 'تعليم وإثراء',
    duration: '7 أيام / 6 ليالٍ',
    tagline: 'تبادل ثقافي متعمق، ومحاضرات تاريخية ميدانية، ومغامرات قيادية ملهمة للشباب.',
    highlights: ['خبراء تراث وعلوم مرافقون', 'زيارات خاصة للمتاحف والجامعات', 'ورش عمل تفاعلية مبتكرة', 'إشراف ورعاية طلابية شاملة'],
  },
  alula: {
    title: 'العلا',
    categoryLabel: 'ملاذ المملكة',
    duration: '5 أيام / 4 ليالٍ',
    tagline: 'أخاديد صخرية رملية، وفلل بمسبح خاص في وادي عشار، وتأمل النجوم في سكون الحِجر.',
    highlights: ['تصريح خاص لآثار الحِجر (اليونسكو)', 'فيلا بمسبح خاص في وادي عشار', 'سفاري صحراوي بالطائرة المروحية', 'عشاء فاخر عند صخرة الفيل'],
  },
  'red-sea': {
    title: 'البحر الأحمر',
    categoryLabel: 'ملاذ المملكة',
    duration: '6 أيام / 5 ليالٍ',
    tagline: 'جزر بكر ساحرة، وأجنحة سانت ريجيس العائمة، وإبحار كتماران حول الشعاب المرجانية العذراء.',
    highlights: ['فيلا عائمة في منتجع سانت ريجيس', 'إبحار كتماران خاص في الجزر', 'غوص في أصفى شعاب مرجانية', 'تنقلات طيران مائي مباشر'],
  },
};

export function PackageCard({ pkg, index }: PackageCardProps) {
  const { locale } = useLanguage();
  const isEven = index % 2 === 0;

  const arData = locale === 'ar' ? arabicPackagesMap[pkg.slug] : undefined;
  const displayTitle = arData?.title ?? pkg.title;
  const displayCategory = arData?.categoryLabel ?? pkg.categoryLabel;
  const displayDuration = arData?.duration ?? pkg.duration;
  const displayTagline = arData?.tagline ?? pkg.tagline;
  const highlightsList = arData?.highlights ?? pkg.highlights;

  return (
    <div
      id={pkg.slug}
      className="scroll-mt-24 bg-white rounded-3xl overflow-hidden border border-[#0F2E23]/10 shadow-lg hover:shadow-2xl transition-shadow duration-500 text-[#0F2E23]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Media Side (6 cols) */}
        <div
          className={`lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] overflow-hidden group bg-[#0F2E23] ${
            !isEven ? 'lg:order-2' : ''
          }`}
        >
          <Image
            src={pkg.image}
            alt={displayTitle}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index < 2}
          />
          {/* Subtle Atmospheric Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E23]/60 via-transparent to-transparent pointer-events-none" />

          {/* Clean Duration Pill */}
          <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 z-10">
            <span className="px-3.5 py-1.5 rounded-full text-[11px] font-mono font-medium bg-[#0F2E23]/80 text-[#39C27D] backdrop-blur-md border border-white/10 shadow-xs">
              {displayDuration}
            </span>
          </div>
        </div>

        {/* Content Side (6 cols) */}
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

          {/* Simple One-Line Destination Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-display font-light text-[#0F2E23] mb-2 leading-tight tracking-tight">
            {displayTitle}
          </h2>

          {/* Clean Short Tagline */}
          <p className="text-[#2E6B57] font-serif italic text-sm sm:text-base mb-4">
            &ldquo;{displayTagline}&rdquo;
          </p>

          {/* Highlights / Features Pills */}
          <div className="flex flex-wrap gap-2">
            {highlightsList.map((highlight, hIdx) => (
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
  );
}
