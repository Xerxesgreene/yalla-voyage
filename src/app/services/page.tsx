import type { Metadata } from 'next';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Services | Yalla Voyage',
  description:
    'Discover all travel services offered by Yalla Voyage — custom packages, corporate travel, honeymoon planning, group tours and more.',
};

const SERVICES = [
  {
    num: '01',
    title: 'Custom Packages',
    description:
      'Every itinerary is handcrafted to your preferences. Tell us where you want to go, your budget, and travel style — we design the perfect journey.',
    features: ['Bespoke route planning', 'Hotel & villa selection', 'Private transfers', 'Activity curation'],
  },
  {
    num: '02',
    title: 'Honeymoon Planning',
    description:
      'Make your once-in-a-lifetime trip truly special. We specialize in romantic escapes — from overwater villas in the Maldives to private island retreats.',
    features: ['Romantic room setups', 'Couples spa packages', 'Surprise arrangements', 'Private dinners'],
  },
  {
    num: '03',
    title: 'Group & Family Tours',
    description:
      'Organizing travel for a family reunion, school trip, or corporate outing? We handle the logistics so you can focus on the experience.',
    features: ['Group pricing', 'Coordinated transport', 'Shared itineraries', 'Group activities'],
  },
  {
    num: '04',
    title: 'Corporate Travel',
    description:
      'Streamlined business travel management for companies in Saudi Arabia and the GCC. From executive retreats to team-building trips abroad.',
    features: ['Priority booking', 'Business class upgrades', 'Flexible changes', 'Expense reporting'],
  },
  {
    num: '05',
    title: 'Visa Assistance',
    description:
      'Navigating visa requirements can be stressful. Our team handles the paperwork, applications, and documentation for a smooth travel experience.',
    features: ['Tourist & business visas', 'Document preparation', 'Fast-track processing', 'Multi-country visas'],
  },
  {
    num: '06',
    title: 'Umrah Services',
    description:
      'Meticulously designed pilgrimage travel, featuring premium accommodation options near the Haram in Makkah & Madinah, VIP transportation logistics, and expedited visa processing.',
    features: ['Haram-adjacent luxury hotels', 'VIP airport transfers', 'Expedited Umrah visa assistance', 'Ziyarah guided tours'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero — background image, luxury travel styling */}
        <section className={styles.pageHero}>
          <div className={styles.pageHeroBg} />
          <div className={`container ${styles.pageHeroContent}`}>
            <ScrollAnimator>
              <span className="section-tag" style={{ color: 'rgba(255,255,255,0.7)' }}>What We Offer</span>
              <h1 className={styles.pageTitle}>Our Services</h1>
              <p className={styles.pageSubtitle}>
                From honeymoon planning to corporate travel — we handle every detail so you can focus on the experience.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* Services — Redesigned Interactive Cards Grid */}
        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.servicesGrid}>
              {SERVICES.map((service, i) => (
                <ScrollAnimator key={service.num} delay={i * 60}>
                  <div className={styles.serviceCard}>
                    <div className={styles.cardHeader}>
                      <span className={styles.serviceNum}>{service.num}</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" className={styles.cardIcon}>
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                        <path d="M12 8l1.2 2.8 2.8 1.2-2.8 1.2-1.2 2.8-1.2-2.8-2.8-1.2 2.8-1.2L12 8z" fill="currentColor" />
                      </svg>
                    </div>
                    <div className={styles.cardBody}>
                      <h2 className={styles.serviceTitle}>{service.title}</h2>
                      <p className={styles.serviceDesc}>{service.description}</p>
                      <ul className={styles.serviceFeatures}>
                        {service.features.map(f => (
                          <li key={f}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="10" height="10">
                              <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={`container ${styles.ctaInner}`}>
            <ScrollAnimator type="zoom">
              <span className="eyebrow eyebrow-light">Get Started</span>
              <h2 className={styles.ctaTitle}>
                Ready to plan your<br /><em>next adventure?</em>
              </h2>
              <p className={styles.ctaDesc}>
                Contact our travel experts on WhatsApp and we&apos;ll have your itinerary ready in 24 hours.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/packages" className="btn btn-outline-white btn-lg">View Packages</Link>
                <a
                  href="https://wa.me/966112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-pink btn-lg"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
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
