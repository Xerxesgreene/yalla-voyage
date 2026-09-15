'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { YallaLogo } from '@/components/ui/YallaLogo';
import { siteConfig } from '@/data/site';

export function JournalNav() {
  return (
    <header className="w-full bg-[#06160F] border-b border-[#2E6B57]/30 py-4 sm:py-5 text-[#F4EFE6] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        {/* ── Left: Brand Logo ── */}
        <Link
          href="/"
          className="flex items-center group transition-transform duration-300 hover:scale-[1.02] shrink-0"
          aria-label="Yalla Voyage Home"
        >
          <YallaLogo variant="horizontal" theme="dark" size="md" />
        </Link>

        {/* ── Right: Concierge Desk & Contact Us Button ── */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
              'Hello Yalla Voyage, I am browsing your Travel Journal and would like to speak with a bespoke curator.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-[#DAD6CD] hover:text-[#39C27D] transition-colors py-2 px-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#39C27D] animate-pulse" />
            <MessageCircle className="w-3.5 h-3.5 text-[#39C27D]" />
            <span>Concierge Desk</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 sm:pl-5 sm:pr-2 sm:py-2 rounded-full text-xs font-sans font-semibold tracking-wide bg-white text-[#0F2E23] hover:bg-[#39C27D] hover:text-[#06150E] transition-all duration-300 shadow-sm group"
          >
            <span>Contact Us</span>
            <span className="w-6 h-6 rounded-full bg-[#0F2E23] text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default JournalNav;
