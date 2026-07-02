import type { Metadata } from 'next';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Connect With Us',
  description: 'Get in touch with Yalla Voyage through our social channels. Follow us on Instagram, WhatsApp, Twitter and TikTok.',
};

const SOCIALS = [
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@yallavoyage',
    description: 'Stunning travel photography, destination reels & behind-the-scenes from our trips.',
    href: 'https://instagram.com/yallavoyage',
    color: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    platform: 'WhatsApp',
    handle: '+966 11 234 5678',
    description: 'Chat directly with our travel experts. Quick responses, real people, real trips.',
    href: 'https://wa.me/966112345678',
    color: 'linear-gradient(135deg, #25D366, #128C7E)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    id: 'twitter',
    platform: 'Twitter / X',
    handle: '@yallavoyage',
    description: 'Travel tips, deals & destination inspiration delivered straight to your feed.',
    href: 'https://twitter.com/yallavoyage',
    color: 'linear-gradient(135deg, #1DA1F2, #0d6efd)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    handle: '@yallavoyage',
    description: 'Short travel films, hidden gems & authentic experiences from across the GCC & beyond.',
    href: 'https://tiktok.com/@yallavoyage',
    color: 'linear-gradient(135deg, #010101, #69C9D0, #EE1D52)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.99a8.16 8.16 0 004.77 1.53V7.07a4.85 4.85 0 01-1-.38z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className={styles.pageHero}>
          <div className={styles.pageHeroBg} />
          <div className={`container ${styles.pageHeroContent}`}>
            <ScrollAnimator type="fade">
              <span className={styles.eyebrow}>Connect With Us</span>
            </ScrollAnimator>
            <ScrollAnimator type="fadeUp" delay={100}>
              <h1 className={styles.pageTitle}>Let&apos;s Stay in Touch</h1>
            </ScrollAnimator>
            <ScrollAnimator type="fadeUp" delay={200}>
              <p className={styles.pageSubtitle}>
                Follow our journey, reach out for inquiries, or simply say hello — we&apos;d love to hear from you.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* Social Cards */}
        <section className={`section ${styles.socialsSection}`}>
          <div className="container">
            <div className={styles.socialsGrid}>
              {SOCIALS.map((social, i) => (
                <ScrollAnimator key={social.id} type="zoom" delay={i * 120}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialCard}
                    id={`social-${social.id}`}
                  >
                    <div className={styles.cardGlow} style={{ background: social.color }} />
                    <div className={styles.iconWrap} style={{ background: social.color }}>
                      {social.icon}
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.platform}>{social.platform}</div>
                      <div className={styles.handle}>{social.handle}</div>
                      <p className={styles.desc}>{social.description}</p>
                    </div>
                    <div className={styles.cardArrow}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </a>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* Location Strip */}
        <section className={styles.locationStrip}>
          <div className="container">
            <ScrollAnimator type="fadeUp">
              <div className={styles.locationInner}>
                <div className={styles.locationItem}>
                  <span className={styles.locationIcon}>📍</span>
                  <div>
                    <div className={styles.locationLabel}>Our Office</div>
                    <div className={styles.locationValue}>King Fahd Road, Riyadh, Saudi Arabia</div>
                  </div>
                </div>
                <div className={styles.locationDivider} />
                <div className={styles.locationItem}>
                  <span className={styles.locationIcon}>🕐</span>
                  <div>
                    <div className={styles.locationLabel}>Working Hours</div>
                    <div className={styles.locationValue}>Sun – Thu: 9am – 6pm (AST)</div>
                  </div>
                </div>
                <div className={styles.locationDivider} />
                <div className={styles.locationItem}>
                  <span className={styles.locationIcon}>✉️</span>
                  <div>
                    <div className={styles.locationLabel}>Email</div>
                    <div className={styles.locationValue}>hello@yallavoyage.sa</div>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
