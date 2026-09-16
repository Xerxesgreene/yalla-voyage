'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Phone, Mail } from 'lucide-react';
import { YallaLogo } from '@/components/ui/YallaLogo';
import { siteConfig } from '@/data/site';
import { useLanguage } from '@/context/LanguageContext';

function InstagramIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const pathname = usePathname();
  const { t, locale } = useLanguage();

  return (
    <footer className="relative bg-[#06150E] text-[#F4EFE6] overflow-hidden pt-12 sm:pt-16 pb-8 rounded-t-[36px] sm:rounded-t-[52px] lg:rounded-t-[64px] border-t border-[#2E6B57]/30 shadow-[0_-25px_60px_rgba(6,21,14,0.3)]">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-[#39C27D]/8 blur-[160px] z-0" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#2E6B57]/10 blur-[150px] z-0" />

      <div className="container-wide relative z-10 space-y-12 sm:space-y-16">
        
        {/* ── TOP CTA BANNER WITH PICTURE (Centered Format) ── */}
        <div className="relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-[#2E6B57]/30 shadow-2xl group min-h-[340px] sm:min-h-[420px] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/footer-journey-banner.jpg"
              alt="Your Journey Starts Here"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Dark gradient & atmospheric brand overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#06150E]/80 via-[#06150E]/60 to-[#06150E]/90" />
            <div className="absolute inset-0 bg-[#0F2E23]/30 mix-blend-multiply" />
          </div>

          {/* Banner Content (Centered) */}
          <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
            <div className="space-y-4 sm:space-y-5 flex flex-col items-center">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-[#F4EFE6] leading-[1.12]">
                {t.footer.bannerTitle}
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-[#DAD6CD]/90 font-light max-w-lg leading-relaxed mx-auto">
                {t.footer.bannerSubtitle}
              </p>

              {/* Action & Trust Badges */}
              <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                {/* Book a destination CTA Button (Redirects to Contact Page) */}
                <Link
                  href="/contact"
                  className="group/btn inline-flex items-center gap-3.5 pl-6 pr-2.5 py-2.5 sm:pl-7 sm:pr-3 sm:py-3 rounded-full bg-white text-[#0F2E23] hover:bg-[#39C27D] hover:text-[#06150E] transition-all duration-300 shadow-xl font-medium text-xs sm:text-sm tracking-wide font-sans"
                >
                  <span>{t.footer.bookDestination}</span>
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0F2E23] text-white group-hover/btn:bg-[#06150E] flex items-center justify-center transition-transform duration-300 group-hover/btn:rotate-45 rtl:group-hover/btn:-rotate-45">
                    <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 rtl:rotate-90" />
                  </span>
                </Link>

                {/* Rating & Travelers Trust */}
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#DAD6CD] bg-[#06150E]/40 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10">
                  <span className="font-semibold text-white">4.9/5</span>
                  <div className="flex items-center text-[#F5A623]">
                    {'★'.repeat(5)}
                  </div>
                  <span className="font-light text-[#DAD6CD]/70 hidden xs:inline">
                    {locale === 'ar' ? 'موثوق من أكثر من ١٢٠٠ مسافر' : 'Trusted by 1.2K+ Travelers'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN FOOTER NAVIGATION (Brand, Pages, Socials - 2 Columns on Mobile) ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start pt-2">
          
          {/* Left Column: Brand Logo (Horizontal together on one line) */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-block">
              <YallaLogo variant="horizontal" theme="dark" showTagline={true} size="md" />
            </Link>
            <p className="text-xs sm:text-sm font-light text-[#DAD6CD]/80 leading-relaxed max-w-md font-sans">
              {t.footer.aboutBrand}
            </p>
          </div>

          {/* Right Navigation: 2 Columns Side-by-Side on Mobile and Desktop */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 sm:gap-12">
            {/* Column 1: PAGES */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-semibold tracking-widest uppercase text-[#39C27D]">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-light">
                <li>
                  <Link href="/about" className="text-[#DAD6CD]/85 hover:text-[#39C27D] hover:translate-x-1 rtl:hover:-translate-x-1 inline-block transition-all duration-200">
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link href="/destinations" className="text-[#DAD6CD]/85 hover:text-[#39C27D] hover:translate-x-1 rtl:hover:-translate-x-1 inline-block transition-all duration-200">
                    {t.nav.destinations}
                  </Link>
                </li>
                <li>
                  <Link href="/packages" className="text-[#DAD6CD]/85 hover:text-[#39C27D] hover:translate-x-1 rtl:hover:-translate-x-1 inline-block transition-all duration-200">
                    {t.nav.packages}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-[#DAD6CD]/85 hover:text-[#39C27D] hover:translate-x-1 rtl:hover:-translate-x-1 inline-block transition-all duration-200">
                    {t.nav.services}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/travel-journal"
                    className="text-[#DAD6CD]/85 hover:text-[#39C27D] hover:translate-x-1 rtl:hover:-translate-x-1 inline-block transition-all duration-200"
                  >
                    {locale === 'ar' ? 'مدونة السفر' : 'Travel Journal'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: CONNECT & SOCIAL */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-semibold tracking-widest uppercase text-[#39C27D]">
                {locale === 'ar' ? 'تواصل معنا' : 'CONNECT'}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans font-light">
                <li>
                  <a
                    href="mailto:info@yallavoyage.com"
                    className="text-[#DAD6CD]/85 hover:text-[#39C27D] hover:translate-x-1 rtl:hover:-translate-x-1 inline-flex items-center gap-2 transition-all duration-200"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#39C27D]" />
                    <span>info@yallavoyage.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/yalla__voyage?stkn=dmZnOXkwd3RzMGFm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DAD6CD]/85 hover:text-[#39C27D] hover:translate-x-1 rtl:hover:-translate-x-1 inline-flex items-center gap-2 transition-all duration-200"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-[#39C27D]" />
                    <span>@yalla__voyage</span>
                  </a>
                </li>
              </ul>

              {/* Direct Phone Capsule */}
              <div className="pt-2">
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#F4EFE6] bg-[#13382B] px-3.5 py-1.5 rounded-full border border-[#2E6B57]/40 hover:border-[#39C27D] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#39C27D]" />
                  <span>{locale === 'ar' ? '+٩٦٦ ٥٦ ٧٣٥ ٧٢٥٠' : siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── Sub-Footer: Copyright & Fine Print ── */}
        <div className="pt-8 border-t border-[#2E6B57]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DAD6CD]/60 font-sans">
          <p>
            &copy; {new Date().getFullYear()} {t.footer.allRightsReserved}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#39C27D] transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/contact" className="hover:text-[#39C27D] transition-colors">
              {t.nav.contact}
            </Link>
            <Link href="/explore-saudi" className="hover:text-[#39C27D] transition-colors">
              {t.nav.exploreSaudi}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
