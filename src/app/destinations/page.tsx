import type { Metadata } from 'next';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import DestinationCard from '@/components/public/DestinationCard';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import { DESTINATIONS } from '@/lib/data/seed';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Destinations',
  description: 'Explore all destinations offered by Yalla Voyage — from AlUla and Dubai to Maldives and Istanbul.',
};

export default function DestinationsPage() {
  const regions = ['All', ...Array.from(new Set(DESTINATIONS.map(d => d.region)))];

  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className={styles.pageHero}>
          <div className={styles.pageHeroBg} />
          <div className={`container ${styles.pageHeroContent}`}>
            <ScrollAnimator>
              <span className="section-tag" style={{ color: 'rgba(255,255,255,0.7)' }}>Discover the World</span>
              <h1 className={styles.pageTitle}>Our Destinations</h1>
              <p className={styles.pageSubtitle}>
                From the ancient deserts of Saudi Arabia to tropical island paradises — explore our handpicked collection of extraordinary destinations.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="section">
          <div className="container">
            <ScrollAnimator>
              <div className={styles.filters}>
                {regions.map((r) => (
                  <button key={r} className={`${styles.filterBtn} ${r === 'All' ? styles.active : ''}`}>
                    {r}
                  </button>
                ))}
              </div>
            </ScrollAnimator>

            <div className="grid-3" style={{ marginTop: '32px' }}>
              {DESTINATIONS.map((dest, i) => (
                <ScrollAnimator key={dest.id} delay={i * 80}>
                  <DestinationCard destination={dest} />
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
