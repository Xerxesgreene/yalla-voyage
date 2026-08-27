'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { ArrowRight, Clock, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal, StaggerReveal } from '@/components/ui/Reveal';
import { journalArticles } from '@/data/journal';
import { siteConfig } from '@/data/site';

export default function TravelJournalPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(journalArticles.map((a) => a.category)));
    return ['all', ...cats];
  }, []);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'all') return journalArticles;
    return journalArticles.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="bg-[#F4EFE6] text-[#0F2E23] overflow-hidden">
      <PageHero
        title="Journal"
        subtitle="Stories, guides and inspiration from across Saudi Arabia."
        image="/images/header-journal.jpg"
        alt="The Travel Journal"
        positionClass="object-center"
      />

      <section className="section-pad bg-[#F4EFE6]">
        <div className="container-wide">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 flex-wrap mb-14 pb-8 border-b border-[#0F2E23]/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#0F2E23] text-[#F4EFE6] shadow-sm'
                    : 'bg-white text-[#0F2E23]/70 hover:bg-white hover:text-[#0F2E23] border border-[#0F2E23]/8'
                }`}
              >
                {cat === 'all' ? 'All Dispatches' : cat}
              </button>
            ))}
          </div>

          {/* List of All Journal Articles in Large Horizontal Split Card Style */}
          <div className="space-y-12">
            {filteredArticles.map((article, idx) => (
              <Reveal key={article.slug} delay={idx * 0.06}>
                <article className="group bg-white rounded-3xl overflow-hidden border border-[#0F2E23]/10 hover:border-[#2E6B57]/40 shadow-sm hover:shadow-xl transition-all duration-500 text-[#0F2E23]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    {/* Left Image Column */}
                    <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] overflow-hidden bg-[#0F2E23]/5">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                      
                      {/* Top Badge */}
                      <div className="absolute top-5 left-5 z-10">
                        <span className="px-3.5 py-1.5 rounded-full text-[10.5px] font-mono font-semibold uppercase tracking-widest bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-xs">
                          {idx === 0 ? 'Featured Dispatch' : article.category}
                        </span>
                      </div>
                    </div>

                    {/* Right Content Column */}
                    <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                      <div>
                        {/* Top Category & Read Time */}
                        <div className="flex items-center gap-3 mb-4 text-xs font-mono text-[#2E6B57] font-semibold">
                          <span className="uppercase tracking-wider">{article.category}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-[#0F2E23]/50">
                            <Clock className="w-3 h-3 text-[#2E6B57]" /> {article.readTime}
                          </span>
                        </div>

                        {/* Title in Modern Geometric Font */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-medium text-[#0F2E23] mb-4 leading-tight group-hover:text-[#2E6B57] transition-colors tracking-tight">
                          {article.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-[#0F2E23]/70 text-sm sm:text-base leading-relaxed mb-6 font-light font-sans">
                          {article.excerpt}
                        </p>
                      </div>

                      {/* Footer Row */}
                      <div className="pt-6 border-t border-[#0F2E23]/8 flex items-center justify-between">
                        <span className="text-xs font-mono text-[#0F2E23]/50">
                          Yalla Voyage Editorial
                        </span>
                        <a
                          href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                            `Hello Yalla Voyage, I read your article "${article.title}" and would love to plan a similar journey.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2E6B57] group-hover:text-[#0F2E23] transition-colors font-sans"
                        >
                          <span>Plan Similar Journey</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
