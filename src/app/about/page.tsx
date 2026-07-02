import type { Metadata } from 'next';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description: "Learn about Yalla Voyage — Saudi Arabia's premier travel agency, our story, mission and values.",
};

const TEAM = [
  { name: 'Nora Al-Zahrani',   role: 'Founder & CEO',         initials: 'NA' },
  { name: 'Khalid Al-Otaibi',  role: 'Head of Packages',      initials: 'KO' },
  { name: 'Reem Al-Dossary',   role: 'GCC Specialist',        initials: 'RD' },
  { name: 'Omar Al-Ghamdi',    role: 'Customer Success',      initials: 'OG' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className={styles.pageHero}>
          <div className={styles.pageHeroBg} />
          <div className={`container ${styles.pageHeroContent}`}>
            <ScrollAnimator>
              <span className="section-tag" style={{ color: 'rgba(255,255,255,0.7)' }}>Our Story</span>
              <h1 className={styles.pageTitle}>About Yalla Voyage</h1>
              <p className={styles.pageSubtitle}>
                Born out of a desire to design journeys that are deeply personal, meticulously arranged, and utterly unforgettable.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* Mission */}
        <section className="section">
          <div className="container">
            <div className={styles.missionGrid}>
              <ScrollAnimator>
                <div className={styles.missionImage}>
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                    alt="Yalla Voyage team"
                  />
                </div>
              </ScrollAnimator>
              <ScrollAnimator delay={150}>
                <div className={styles.missionContent}>
                  <span className="eyebrow">Who We Are</span>
                  <h2 className={styles.missionTitle}>
                    Saudi Arabia&apos;s Trusted Travel <em>Partner</em>
                  </h2>
                  <p>
                    Founded in Riyadh in 2016, Yalla Voyage was born from a simple belief: every traveler deserves a journey crafted with passion, expertise, and genuine care. We started with a small team of travel enthusiasts and grew into the GCC&apos;s most trusted boutique agency.
                  </p>
                  <p style={{ marginTop: '16px' }}>
                    From weekend escapes to AlUla to two-week adventures in the Maldives and Turkey — our travel consultants craft every detail to perfection. We don&apos;t just sell packages. We design memories.
                  </p>
                  <div className={styles.valueBadges}>
                    {['Authenticity', 'Luxury', 'Trust', 'Care'].map(v => (
                      <span key={v} className={styles.valueBadge}>{v}</span>
                    ))}
                  </div>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </section>

        {/* Stats — dark maroon strip */}
        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.statsGrid}>
              {[
                { num: '10,000+', label: 'Happy Travelers' },
                { num: '8+',      label: 'Years of Excellence' },
                { num: '50+',     label: 'Destinations' },
                { num: '98%',     label: 'Satisfaction Rate' },
              ].map((s, i) => (
                <ScrollAnimator key={i} delay={i * 100}>
                  <div className={styles.stat}>
                    <div className={styles.statNum}>{s.num}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section">
          <div className="container">
            <ScrollAnimator>
              <div style={{ marginBottom: 'var(--space-2xl)' }}>
                <span className="eyebrow">Our People</span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4.5vw,3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', margin: '8px 0' }}>
                  Meet the Team
                </h2>
                <p style={{ maxWidth: 480, marginTop: 8 }}>
                  Passionate travel experts with deep knowledge of Saudi Arabia, GCC, and international destinations.
                </p>
              </div>
            </ScrollAnimator>
            <div className="grid-4">
              {TEAM.map((member, i) => (
                <ScrollAnimator key={i} delay={i * 100}>
                  <div className={styles.teamCard}>
                    <div className={styles.teamAvatar}>{member.initials}</div>
                    <div className={styles.teamName}>{member.name}</div>
                    <div className={styles.teamRole}>{member.role}</div>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--dark)', padding: 'var(--space-3xl) 0', textAlign: 'center' }}>
          <div className="container">
            <ScrollAnimator>
              <span className="eyebrow eyebrow-light">Work With Us</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.8rem)', fontWeight: 400, color: 'var(--cream)', letterSpacing: '-0.03em', margin: '12px 0 32px', lineHeight: 1.2 }}>
                It would be a privilege to<br /><em style={{ fontStyle: 'italic', color: 'var(--hot-pink)' }}>take you somewhere.</em>
              </h2>
              <Link href="/contact" className="btn btn-outline-white btn-lg">Plan My Trip</Link>
            </ScrollAnimator>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
