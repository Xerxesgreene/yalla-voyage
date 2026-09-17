import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react';
import { journalArticles } from '@/data/journal';
import { JournalNav } from '@/components/journal/JournalNav';

export const metadata = {
  title: 'Travel Journals | يلا سفر',
  description:
    'Curated travel journals, reflections, and field stories from Italy, Dubai, Russia, Switzerland, Saudi Arabia, Japan, and beyond.',
};

export default function TravelJournalPage() {
  const [featuredStory, ...otherStories] = journalArticles;

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#0F2E23] flex flex-col font-sans">
      {/* ── Refined Navigation Bar ── */}
      <JournalNav />

      {/* ── Page Header: Our Journals with Quotes ── */}
      <section className="pt-12 sm:pt-16 pb-12 px-4 sm:px-8 border-b border-[#0F2E23]/10">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2E6B57] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#39C27D]" />
              <span>يلا سفر Editorial</span>
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium tracking-tight text-[#0F2E23] leading-none">
              Our Journals
            </h1>
          </div>

          {/* Inspiring Travel Quote Block */}
          <div className="max-w-3xl pt-1 pl-4 sm:pl-6 border-l-2 border-[#2E6B57]/50 space-y-2">
            <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#0F2E23]/85 leading-relaxed">
              &ldquo;We travel not to escape life, but for life not to escape us. To wander is to awaken the soul to moments that linger long after the voyage ends.&rdquo;
            </p>
            <p className="text-xs font-mono text-[#2E6B57] font-semibold tracking-wider uppercase">
              — Curated Field Notes &amp; Global Horizons
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Editorial Feed (Non-Card Alternating Editorial Alignment) ── */}
      <main className="flex-1 py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
          
          {/* ── 1. Featured Lead Story (Expansive Magazine Spread) ── */}
          {featuredStory && (
            <section className="border-b border-[#0F2E23]/10 pb-16 sm:pb-24">
              <Link
                href={`/travel-journal/${featuredStory.slug}`}
                className="group block"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Visual Column */}
                  <div className="lg:col-span-7 relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500 bg-black/5">
                    <Image
                      src={featuredStory.image}
                      alt={featuredStory.title}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-black/65 text-white backdrop-blur-md border border-white/20">
                        Featured Dispatch • {featuredStory.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 text-white text-xs font-mono flex items-center gap-2 opacity-90">
                      <Clock className="w-3.5 h-3.5 text-[#39C27D]" />
                      <span>{featuredStory.readTime}</span>
                    </div>
                  </div>

                  {/* Story Column */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#2E6B57] font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#39C27D]" />
                      <span>{featuredStory.destination}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-medium text-[#0F2E23] leading-snug group-hover:text-[#2E6B57] transition-colors tracking-tight">
                      {featuredStory.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#0F2E23]/75 font-serif italic leading-relaxed">
                      &ldquo;{featuredStory.subtitle}&rdquo;
                    </p>

                    <p className="text-xs sm:text-sm text-[#0F2E23]/70 font-sans font-light leading-relaxed">
                      {featuredStory.excerpt}
                    </p>

                    <div className="pt-4 flex items-center justify-between border-t border-[#0F2E23]/8">
                      <span className="text-xs font-mono text-[#0F2E23]/50">
                        By {featuredStory.author.name}
                      </span>

                      <span className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#2E6B57] group-hover:text-[#0F2E23] transition-colors">
                        <span>Read Full Dispatch</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-[#39C27D]" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* ── 2. Alternating Split Stories (Zig-Zag Layout) ── */}
          <div className="space-y-16 sm:space-y-24">
            {otherStories.map((story, index) => {
              const isEven = index % 2 === 0;

              return (
                <article
                  key={story.slug}
                  className="border-b border-[#0F2E23]/10 pb-16 sm:pb-24 last:border-b-0 last:pb-0"
                >
                  <Link
                    href={`/travel-journal/${story.slug}`}
                    className="group block"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                      
                      {/* Visual (Left on even, Right on odd) */}
                      <div
                        className={`relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs group-hover:shadow-xl transition-all duration-500 bg-black/5 ${
                          isEven
                            ? 'lg:col-span-6 lg:order-1'
                            : 'lg:col-span-6 lg:order-2'
                        }`}
                      >
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-25 transition-opacity" />

                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 rounded-full text-[10.5px] font-mono font-medium uppercase tracking-wider bg-black/60 text-white backdrop-blur-md">
                            {story.category}
                          </span>
                        </div>

                        <div className="absolute bottom-3.5 left-4 text-white text-xs font-mono flex items-center gap-1.5 opacity-90">
                          <Clock className="w-3.5 h-3.5 text-[#39C27D]" />
                          <span>{story.readTime}</span>
                        </div>
                      </div>

                      {/* Editorial Story Content (Right on even, Left on odd) */}
                      <div
                        className={`space-y-4 ${
                          isEven
                            ? 'lg:col-span-6 lg:order-2'
                            : 'lg:col-span-6 lg:order-1'
                        }`}
                      >
                        <div className="flex items-center gap-2 text-xs font-mono text-[#2E6B57] font-semibold">
                          <MapPin className="w-3.5 h-3.5 text-[#39C27D]" />
                          <span>{story.destination}</span>
                        </div>

                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium text-[#0F2E23] leading-snug group-hover:text-[#2E6B57] transition-colors tracking-tight">
                          {story.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#0F2E23]/70 font-sans font-light leading-relaxed line-clamp-3">
                          {story.excerpt}
                        </p>

                        {/* Itinerary Highlight Tags */}
                        {story.keyHighlights && story.keyHighlights.length > 0 && (
                          <div className="pt-2 flex flex-wrap gap-2">
                            {story.keyHighlights.slice(0, 2).map((hl, hIdx) => (
                              <span
                                key={hIdx}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-white border border-[#0F2E23]/10 text-[#0F2E23]/75"
                              >
                                <Sparkles className="w-3 h-3 text-[#39C27D]" />
                                <span className="truncate max-w-[240px]">{hl}</span>
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="pt-4 flex items-center justify-between border-t border-[#0F2E23]/8">
                          <span className="text-xs font-mono text-[#0F2E23]/50">
                            By {story.author.name} • {story.date}
                          </span>

                          <span className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#2E6B57] group-hover:text-[#0F2E23] transition-colors">
                            <span>Read Story</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-[#39C27D]" />
                          </span>
                        </div>
                      </div>

                    </div>
                  </Link>
                </article>
              );
            })}
          </div>

        </div>
      </main>
    </div>
  );
}
