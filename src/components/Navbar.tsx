'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { YallaLogo } from '@/components/ui/YallaLogo';

export function Navbar() {
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Top header region across all pages: scrollY <= 240px is considered "At Header Top"
      const atTop = currentScrollY <= 240;
      setIsAtTop(atTop);

      if (currentScrollY <= 80) {
        setIsVisible(true);
      } else {
        const delta = currentScrollY - lastScrollY.current;

        // Scrolling DOWN -> Hide navbar
        if (delta > 6 && currentScrollY > 120) {
          setIsVisible(false);
        }
        // Scrolling UP -> Reveal navbar
        else if (delta < -6) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Navbar turns green ONLY after scrolling down past the header across all pages
  const isScrolledDark = !isAtTop;

  const desktopNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'Explore Saudi', href: '/explore-saudi', badge: 'Kingdom' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Packages', href: '/packages' },
    { label: 'Services', href: '/services' },
    { label: 'Journal', href: '/travel-journal' },
    { label: 'About', href: '/about' },
  ];

  const mobileNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'Explore Saudi', href: '/explore-saudi', badge: 'Kingdom' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Packages', href: '/packages' },
    { label: 'Services', href: '/services' },
    { label: 'Journal', href: '/travel-journal' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out transform ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          !isScrolledDark
            ? 'bg-transparent border-transparent py-5 sm:py-6 text-[#0F2E23]'
            : 'bg-[#071912]/92 backdrop-blur-xl border-b border-[#2E6B57]/30 py-3 sm:py-3.5 shadow-lg shadow-black/15 text-[#F4EFE6]'
        }`}
      >
        <div className="container-wide flex items-center justify-between gap-4">
          
          {/* ── Left: Brand Logo ── */}
          <Link
            href="/"
            className="flex items-center group transition-transform duration-300 hover:scale-[1.02] shrink-0"
            aria-label="Yalla Voyage Home"
          >
            <YallaLogo
              variant="horizontal"
              theme={isScrolledDark ? 'dark' : 'light'}
              size="md"
            />
          </Link>

          {/* ── Center: Desktop Nav Links ── */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2" aria-label="Main navigation">
            {desktopNavLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[13.5px] font-sans font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 relative flex items-center gap-2 group ${
                    isScrolledDark
                      ? isActive
                        ? 'bg-[#2E6B57]/60 text-white font-semibold shadow-xs'
                        : 'text-[#F4EFE6]/80 hover:text-white hover:bg-white/8'
                      : isActive
                      ? 'bg-[#0F2E23] text-white font-semibold shadow-xs'
                      : 'text-[#0F2E23]/80 hover:text-[#0F2E23] hover:bg-[#0F2E23]/8'
                  }`}
                >
                  {item.badge ? (
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39C27D] animate-pulse inline-block" />
                      <span>{item.label}</span>
                    </span>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Right: Plan Your Trip CTA (Redirects to Contact Page) ── */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className={`group inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm font-sans ${
                isScrolledDark
                  ? 'bg-white text-[#0F2E23] hover:bg-[#39C27D] hover:text-[#071912]'
                  : 'bg-[#0F2E23] text-[#F4EFE6] hover:bg-[#2E6B57]'
              }`}
            >
              <span>Plan Your Trip</span>
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 ${
                  isScrolledDark ? 'bg-[#0F2E23] text-white' : 'bg-white text-[#0F2E23]'
                }`}
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* ── Mobile Hamburger Button ── */}
          <button
            className={`lg:hidden p-2 transition-colors rounded-xl ${
              isScrolledDark
                ? 'text-[#F4EFE6] hover:text-[#39C27D] bg-white/5'
                : 'text-[#0F2E23] hover:text-[#2E6B57] bg-black/5'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ── Mobile Nav Drawer (Deep Forest #071912 Glass) ── */}
      <div
        className={`fixed inset-0 z-[60] bg-[#071912]/98 backdrop-blur-2xl text-[#F4EFE6] transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6 pt-6 overflow-y-auto">
          {/* Mobile Header (Horizontal logo together on one line) */}
          <div className="flex items-center justify-between border-b border-[#2E6B57]/30 pb-4">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <YallaLogo variant="horizontal" theme="dark" size="md" />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 text-[#F4EFE6]/70 hover:text-[#39C27D] transition-colors rounded-full bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col gap-1.5 my-auto py-6" aria-label="Mobile navigation">
            {mobileNavLinks.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg sm:text-xl font-sans font-medium flex items-center justify-between py-3 px-3.5 rounded-xl transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-[#2E6B57]/40 text-[#39C27D]'
                    : 'text-[#F4EFE6]/85 hover:text-white hover:bg-white/5'
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 20}ms` : '0ms' }}
              >
                <div className="flex items-center gap-2.5">
                  {item.badge && (
                    <span className="w-2 h-2 rounded-full bg-[#39C27D] animate-pulse" />
                  )}
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full bg-[#39C27D]/20 text-[#39C27D] border border-[#39C27D]/30">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
