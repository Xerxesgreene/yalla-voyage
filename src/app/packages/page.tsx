import type { Metadata } from 'next';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import PackageCard from '@/components/public/PackageCard';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import { PACKAGES } from '@/lib/data/seed';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Travel Packages',
  description: 'Browse all travel packages by Yalla Voyage — GCC, Middle East, Maldives, Turkey and more.',
};

export default function PackagesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.pageHero}>
          <div className={styles.pageHeroBg} />
          <div className={`container ${styles.pageHeroContent}`}>
            <ScrollAnimator>
              <span className="section-tag" style={{ color: 'rgba(255,255,255,0.6)' }}>Curated Journeys</span>
              <h1 className={styles.pageTitle}>Our Packages</h1>
              <p className={styles.pageSubtitle}>
                All-inclusive packages designed for Saudi and GCC travelers.
                Every detail — flights, hotels, transfers, and tours — arranged for you.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <ScrollAnimator>
              <p className={styles.countLabel}>{PACKAGES.length} packages available</p>
            </ScrollAnimator>
            <div className="grid-3" style={{ marginTop: '32px' }}>
              {PACKAGES.map((pkg, i) => (
                <ScrollAnimator key={pkg.id} delay={i * 80}>
                  <PackageCard pkg={pkg} />
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* Custom package CTA */}
        <section className={styles.customCta}>
          <div className="container">
            <ScrollAnimator>
              <div className={styles.customCtaCard}>
                <div className={styles.customCtaIconWrap}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                    <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className={styles.customCtaTitle}>Can&apos;t find what you&apos;re looking for?</h3>
                <p className={styles.customCtaText}>
                  We specialize in custom travel plans. Tell us your dream trip and our consultants
                  will design a bespoke package just for you.
                </p>
                <a href="https://wa.me/966112345678" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                  Talk to an Expert
                </a>
              </div>
            </ScrollAnimator>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
