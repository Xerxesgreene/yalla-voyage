'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  MapPin,
  Sparkles,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import { JournalArticle, getLocalizedArticle } from '@/data/journal';
import { siteConfig } from '@/data/site';
import { JournalNav } from '@/components/journal/JournalNav';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  article: JournalArticle;
  relatedArticles: JournalArticle[];
}

export function JournalDetailClient({ article, relatedArticles }: Props) {
  const { t, locale, isRTL } = useLanguage();
  const jt = t.journalPage;

  const currentArticle = getLocalizedArticle(article, locale);
  const currentRelated = relatedArticles.map((rel) =>
    getLocalizedArticle(rel, locale)
  );

  const whatsappMessage =
    locale === 'ar'
      ? `مرحباً يلا سفر، أود الاستفسار بخصوص رحلة خاصة إلى ${currentArticle.destination}.`
      : `Hello Yalla Voyage, I would like to inquire about a journey to ${currentArticle.destination}.`;

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#F4EFE6] text-[#0F2E23] flex flex-col font-sans"
    >
      {/* ── Clean Dedicated Navbar ── */}
      <JournalNav />

      <main className="flex-1 pt-8 sm:pt-12 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-8">
          {/* ── Breadcrumb Navigation ── */}
          <div className="mb-8">
            <Link
              href="/travel-journal"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-[#2E6B57] hover:text-[#0F2E23] transition-colors group"
            >
              {isRTL ? (
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              ) : (
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              )}
              <span>{jt.backToJournals}</span>
            </Link>
          </div>

          {/* ── Article Header ── */}
          <header className="space-y-4 mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-[#0F2E23] text-white uppercase text-[10px] font-semibold tracking-wider">
                {currentArticle.category}
              </span>
              <span className="flex items-center gap-1.5 text-[#2E6B57] font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                {currentArticle.destination}
              </span>
              <span className="text-[#0F2E23]/30">•</span>
              <span className="flex items-center gap-1.5 text-[#0F2E23]/60">
                <Clock className="w-3.5 h-3.5 text-[#2E6B57]" />
                {currentArticle.readTime}
              </span>
              <span className="text-[#0F2E23]/30">•</span>
              <span className="text-[#0F2E23]/60">{currentArticle.date}</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-medium tracking-tight text-[#0F2E23] leading-[1.18]">
              {currentArticle.title}
            </h1>

            <p className="text-base sm:text-lg text-[#0F2E23]/75 font-serif italic leading-relaxed">
              &ldquo;{currentArticle.subtitle}&rdquo;
            </p>

            {/* Author Byline */}
            <div className="pt-4 border-t border-[#0F2E23]/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0F2E23] text-[#39C27D] flex items-center justify-center font-mono font-bold text-sm shadow-xs shrink-0">
                {currentArticle.author.name[0]}
              </div>
              <div>
                <p className="font-heading font-medium text-sm text-[#0F2E23]">
                  {currentArticle.author.name}
                </p>
                <p className="text-xs font-mono text-[#0F2E23]/60">
                  {currentArticle.author.role} • {jt.basedIn} {currentArticle.author.location}
                </p>
              </div>
            </div>
          </header>

          {/* ── Hero Image ── */}
          <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg mb-10 border border-[#0F2E23]/8 bg-black/5">
            <Image
              src={currentArticle.image}
              alt={currentArticle.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          {/* ── Body Content ── */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#0F2E23]/8 shadow-xs space-y-8">
            {/* Story Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-[#0F2E23]/85 font-sans font-light leading-relaxed">
              {currentArticle.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={
                    !isRTL && idx === 0
                      ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#0F2E23] first-letter:leading-none'
                      : ''
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Pull Quote */}
            {currentArticle.pullQuote && (
              <div className="my-8 p-6 sm:p-8 rounded-2xl bg-[#0F2E23] text-[#F4EFE6]">
                <p className="font-serif italic text-lg sm:text-xl leading-relaxed text-[#F4EFE6]">
                  &ldquo;{currentArticle.pullQuote}&rdquo;
                </p>
                <p className="mt-3 text-xs font-mono uppercase tracking-wider text-[#39C27D]">
                  — {currentArticle.author.name}
                </p>
              </div>
            )}

            {/* Key Itinerary Inclusions */}
            {currentArticle.keyHighlights && currentArticle.keyHighlights.length > 0 && (
              <div className="bg-[#F4EFE6] rounded-2xl p-6 sm:p-8 border border-[#0F2E23]/8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-semibold tracking-wider text-[#2E6B57]">
                  <Sparkles className="w-4 h-4 text-[#39C27D]" />
                  <span>{jt.curatedHighlights}</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {currentArticle.keyHighlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#0F2E23]/85 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#39C27D] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Clean Contact CTA */}
            <div className="pt-6 border-t border-[#0F2E23]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading text-lg font-medium text-[#0F2E23]">
                  {jt.planTripTo} {currentArticle.destination}
                </h3>
                <p className="text-xs text-[#0F2E23]/65 font-sans">
                  {jt.planTripDesc}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-full bg-[#0F2E23] text-white hover:bg-[#2E6B57] text-xs font-medium uppercase tracking-wider transition-colors"
                >
                  {jt.contactUs}
                </Link>
                <a
                  href={`${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#2E6B57]/30 text-[#0F2E23] hover:bg-black/5 text-xs font-medium tracking-wider transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#2E6B57]" />
                  <span>{jt.whatsapp}</span>
                </a>
              </div>
            </div>
          </div>

          {/* ── More Journals to Explore ── */}
          <section className="mt-16 pt-10 border-t border-[#0F2E23]/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-xl sm:text-2xl font-medium text-[#0F2E23]">
                {jt.moreJournals}
              </h3>
              <Link
                href="/travel-journal"
                className="text-xs font-mono font-medium uppercase tracking-wider text-[#2E6B57] hover:text-[#0F2E23] flex items-center gap-1"
              >
                <span>{jt.viewAll}</span>
                {isRTL ? (
                  <ArrowLeft className="w-3.5 h-3.5" />
                ) : (
                  <ArrowRight className="w-3.5 h-3.5" />
                )}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentRelated.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/travel-journal/${rel.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#0F2E23]/8 hover:border-[#2E6B57]/30 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-black/5 overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 z-10">
                        <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-medium uppercase bg-black/60 text-white backdrop-blur-md">
                          {rel.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h4 className="font-heading text-base font-medium text-[#0F2E23] group-hover:text-[#2E6B57] transition-colors line-clamp-2 leading-snug mb-1.5">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-[#0F2E23]/60 font-sans line-clamp-2 font-light">
                        {rel.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 pt-0 flex items-center justify-between text-xs font-mono text-[#0F2E23]/50">
                    <span>{rel.readTime}</span>
                    <span className="text-[#2E6B57] font-semibold">{jt.readArrow}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
