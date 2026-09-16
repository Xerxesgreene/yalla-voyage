'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useOptionalLanguage } from '@/context/LanguageContext';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '/destinations', label: 'Destinations' },
  { href: '/packages',     label: 'Packages' },
  { href: '/services',     label: 'Services' },
  { href: '/blog',         label: 'Travel Diaries' },
  { href: '/about',        label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();
  const langContext = useOptionalLanguage();
  const isArabic = langContext?.locale === 'ar';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isHome = pathname === '/';

  return (
    <header
      className={[
        styles.header,
        scrolled   ? styles.scrolled : '',
        !isHome    ? styles.solid    : '',
      ].join(' ')}
    >
      <nav className={`${styles.nav} container`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img
            src={isArabic ? "/yalla-voyage-logo-ar-transparent.png" : "/logo.png"}
            alt={isArabic ? "يلا Voyage" : "Yalla Voyage Logo"}
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${pathname === href ? styles.active : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA pill (House of Honey "Get in Touch" style) */}
        <div className={styles.actions}>
          <Link href="/contact" className={styles.ctaPill}>
            Plan My Trip
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
              <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.mobileLink} ${pathname === href ? styles.active : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className={`${styles.mobileCta}`}>
              Plan My Trip →
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
