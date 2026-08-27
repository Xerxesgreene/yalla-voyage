'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Hero from '@/components/public/Hero';
import PhotoStrip from '@/components/public/PhotoStrip';
import styles from './_home.module.css';

gsap.registerPlugin(ScrollTrigger);

// ── Scroll reveal hook ──────────────────────────────────────────────────────
function useReveal(selector = '.reveal') {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(selector);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ── Destination data ────────────────────────────────────────────────────────
const DESTINATIONS = [
  { name: 'A STUDY IN ANCIENT WONDER',  sub: '26.5° N, 37.9° E',  location: 'AlUla, Saudi Arabia',   img: '/dest-alula.jpg' },
  { name: 'DUBAI CITY FANTASY',         sub: '25.2° N, 55.3° E',  location: 'Dubai, UAE',             img: '/dest-dubai.jpg' },
  { name: 'PARADISE FOUND',             sub: '4.2° N, 73.5° E',   location: 'Maldives',               img: '/dest-maldives.jpg' },
  { name: 'CITY OF EMPIRES',            sub: '41.0° N, 28.9° E',  location: 'Istanbul, Turkey',       img: '/dest-istanbul.jpg' },
  { name: 'ARABIAN COASTAL CANOPY',     sub: '23.6° N, 58.6° E',  location: 'Muscat, Oman',           img: '/dest-muscat.jpg' },
  { name: 'CITY OF LIGHT',              sub: '48.9° N, 2.3° E',   location: 'Paris, France',          img: '/dest-paris.jpg' },
];

const SERVICES = [
  { num: '01', title: 'Custom Packages',     desc: 'Every itinerary handcrafted to your desires — bespoke routes, curated hotels, private transfers.', img: '/dest-istanbul.jpg' },
  { num: '02', title: 'Honeymoon Planning',  desc: 'Once-in-a-lifetime romantic escapes. Overwater villas, private dinners, surprise arrangements.', img: '/dest-maldives.jpg' },
  { num: '03', title: 'Group & Family',      desc: 'Coordinated logistics for family reunions, school trips, and corporate outings.', img: '/dest-alula.jpg' },
  { num: '04', title: 'Corporate Travel',    desc: 'Streamlined business travel for GCC companies — executive retreats, business class, priority booking.', img: '/dest-dubai.jpg' },
  { num: '05', title: 'Visa Assistance',     desc: 'We handle the paperwork. Tourist, business, and multi-country visas, prepared and fast-tracked.', img: '/dest-paris.jpg' },
  { num: '06', title: 'Umrah Services',      desc: 'Meticulously designed pilgrimage travel, featuring luxury hotels close to the Haram, smooth VIP airport transfers, and visa processing.', img: 'https://upload.wikimedia.org/wikipedia/commons/7/79/The_Kaaba_during_Hajj.jpg' },
];

const TESTIMONIALS = [
  { name: 'Fatima Al-Rashid',       loc: 'Riyadh, KSA',    text: 'Yalla Voyage made our AlUla trip absolutely magical. Every detail was perfect — from the hotel to the guided tours. We felt like royalty.' },
  { name: 'Mohammed Al-Mansoori',   loc: 'Abu Dhabi, UAE',  text: 'Booked the Maldives package for our anniversary. The overwater villa exceeded all expectations. Responsive at every step.' },
  { name: 'Sara Al-Otaibi',         loc: 'Jeddah, KSA',    text: 'Istanbul with Yalla Voyage was the best trip of my life. From flights to the Bosphorus cruise — seamlessly arranged.' },
];

// ── Component ──────────────────────────────────────────────────────────────
export default function HomeClient() {
  useReveal();

  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.servCard}`);
    if (cards.length > 0) {
      const anim = gsap.fromTo(cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${styles.servSection}`,
            start: 'top 72%',
            toggleActions: 'play none none none'
          }
        }
      );
      return () => {
        anim.kill();
      };
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* ── 1. HERO ── */}
        <Hero />

        {/* ── 2. ABOUT STRIP (dark maroon — like HoH "studio" intro) ── */}
        <section className={styles.aboutStrip}>
          <div className={`container ${styles.aboutInner}`}>
            <div className={`reveal ${styles.aboutLeft}`}>
              <span className="eyebrow eyebrow-light">Who We Are</span>
            </div>
            <div className={`reveal reveal-delay-2 ${styles.aboutRight}`}>
              <h2 className={styles.aboutHeadline}>
                Yalla Voyage is a collective of{' '}
                <em>passionate travel designers</em>{' '}
                born out of a desire to create meaningful journeys
              </h2>
              <Link href="/about" className={`btn btn-outline-white ${styles.aboutBtn}`}>
                Our Story
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                  <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 2.5 PHOTO STRIP SLIDESHOW ── */}
        <PhotoStrip />

        {/* ── 3. DESTINATIONS (= HoH "Spaces with Story") ── */}
        <section className={styles.destSection}>
          {/* Section header */}
          <div className={styles.destHeader}>
            <div className={styles.destHeaderInner}>
              <span className="eyebrow reveal">Where to Go</span>
              <h2 className={`reveal reveal-delay-1 ${styles.destTitle}`}>Destinations <em>with Story</em></h2>
            </div>
          </div>

          {/* Photo grid (matches HoH horizontal project cards) */}
          <div className={styles.destGrid}>
            {DESTINATIONS.map((d, i) => {
              const serial = String(i + 1).padStart(2, '0');
              return (
                <Link
                  key={i}
                  href="/destinations"
                  className={`${styles.destCard} reveal reveal-delay-${(i % 3) + 1}`}
                >
                  <div className={styles.destImgWrap}>
                    <img src={d.img} alt={d.name} className={styles.destImg} />
                    <div className={styles.destOverlay} />
                  </div>
                  <div className={styles.destMeta}>
                    <div className={styles.destMetaHeader}>
                      <span className={styles.destSerial}>{serial}</span>
                      <span className={styles.destCoords}>{d.sub}</span>
                    </div>
                    <h3 className={styles.destName}>{d.name}</h3>
                    <p className={styles.destLocation}>{d.location}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className={styles.destCta}>
            <Link href="/destinations" className="btn btn-secondary">
              See All Destinations
            </Link>
          </div>
        </section>

        {/* ── 4. SERVICES (redesigned interactive cards grid) ── */}
        <section className={styles.servSection}>
          <div className={styles.servHeader}>
            <span className="eyebrow reveal">What We Do</span>
            <h2 className={`reveal reveal-delay-1 ${styles.servTitle}`}>
              Every trip, <em>crafted for you</em>
            </h2>
          </div>

          <div className={`container ${styles.servGrid}`}>
            {SERVICES.map((s, i) => (
              <div key={s.num} className={styles.servCard}>
                <div className={styles.servCardImageContainer}>
                  <img src={s.img} alt={s.title} className={styles.servCardImg} />
                  <div className={styles.servCardOverlay} />
                </div>
                <div className={styles.servCardContent}>
                  <div className={styles.servCardHeader}>
                    <span className={styles.servNum}>{s.num}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16" className={styles.servCardIcon}>
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                      <path d="M12 8l1.2 2.8 2.8 1.2-2.8 1.2-1.2 2.8-1.2-2.8-2.8-1.2 2.8-1.2L12 8z" fill="currentColor" />
                    </svg>
                  </div>
                  <h4 className={styles.servCardTitle}>{s.title}</h4>
                  <p className={styles.servCardDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.servCta}>
            <Link href="/services" className="btn btn-secondary">
              View All Services
            </Link>
          </div>
        </section>

        {/* ── 5. TRAVEL DIARIES (= HoH "Dear Honey") ── */}
        <section className={styles.diarySection}>
          <div className={styles.diaryHeader}>
            <span className="eyebrow eyebrow-light reveal">A Travel Column, Unfiltered</span>
            <h2 className={`reveal reveal-delay-1 ${styles.diaryTitle}`}>
              Travel <em>Diaries</em>
            </h2>
          </div>

          <div className={`container ${styles.diaryContent}`}>
            {/* Featured article card */}
            <div className={`reveal ${styles.diaryCard}`}>
              <div className={styles.diaryCardMeta}>
                <span className={styles.diaryNum}>N.001</span>
                <span className={styles.diaryDate}>15 · JUN · 26</span>
              </div>
              <h3 className={styles.diaryCardTitle}>AlUla: Where the Desert Tells Stories</h3>
              <p className={styles.diaryCardExcerpt}>
                Standing before Hegra&apos;s carved Nabataean tombs at dawn, I understood something I couldn&apos;t before — ancient doesn&apos;t mean distant.
              </p>
              <Link href="/blog" className={styles.readMore}>
                Read more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                  <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <div className={styles.diaryCta}>
              <Link href="/blog" className="btn btn-outline-white">
                Read More
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. STATS STRIP ── */}
        <section className={styles.statsStrip}>
          <div className={`container ${styles.statsInner}`}>
            {[
              { num: '10,000+', label: 'Happy Travelers' },
              { num: '50+',     label: 'Destinations' },
              { num: '200+',    label: 'Curated Packages' },
              { num: '8+',      label: 'Years of Excellence' },
            ].map((s, i) => (
              <div key={i} className={`${styles.stat} reveal reveal-delay-${i + 1}`}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. TESTIMONIALS ── */}
        <section className={styles.testSection}>
          <div className="container">
            <div className={styles.testHeader}>
              <span className="eyebrow reveal">Reviews</span>
              <h2 className={`reveal reveal-delay-1 ${styles.testTitle}`}>
                What Our <em>Travelers Say</em>
              </h2>
            </div>
            <div className={styles.testGrid}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className={`${styles.testCard} reveal reveal-delay-${i + 1}`}>
                  <div className={styles.stars}>{'★★★★★'}</div>
                  <blockquote className={styles.testText}>
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <div className={styles.testAuthor}>
                    <div className={styles.testAvatar}>{t.name.charAt(0)}</div>
                    <div>
                      <div className={styles.testName}>{t.name}</div>
                      <div className={styles.testLoc}>{t.loc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. CTA SECTION (= HoH "It would be a privilege to hear from you") ── */}
        <section className={styles.ctaSection}>
          <div className={`container ${styles.ctaInner}`}>
            <span className="eyebrow eyebrow-light reveal">Ready to Travel?</span>
            <h2 className={`reveal reveal-delay-1 ${styles.ctaTitle}`}>
              It would be a privilege<br /><em>to take you somewhere.</em>
            </h2>
            <div className={`reveal reveal-delay-2 ${styles.ctaActions}`}>
              <Link href="/contact" className="btn btn-outline-white btn-lg">
                Plan My Trip
              </Link>
              <a
                href="https://wa.me/966112345678"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-pink btn-lg`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
