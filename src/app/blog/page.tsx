import type { Metadata } from 'next';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import BlogCard from '@/components/public/BlogCard';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import { BLOG_POSTS } from '@/lib/data/seed';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Travel Blog | Stories, Guides & Tips from Saudi Arabia & GCC',
  description:
    'Travel tips, destination guides, luxury reviews, and cultural stories from Saudi Arabia and the GCC by Yalla Voyage (يلا سفر).',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Yalla Voyage Travel Blog | Stories & Guides',
    description:
      'Travel tips, destination guides, and inspiring field dispatches across Saudi Arabia and the world.',
    url: 'https://www.yallavoyage.com/blog',
    images: [
      {
        url: '/images/header-real-saudi.jpg',
        width: 1200,
        height: 630,
        alt: 'Yalla Voyage Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yalla Voyage Travel Blog',
    description: 'Travel tips and destination guides from Saudi Arabia and beyond.',
    images: ['/images/header-real-saudi.jpg'],
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.pageHero}>
          <div className={styles.pageHeroBg} />
          <div className={`container ${styles.pageHeroContent}`}>
            <ScrollAnimator>
              <span className="section-tag" style={{ color: 'rgba(255,255,255,0.7)' }}>Travel Stories</span>
              <h1 className={styles.pageTitle}>Our Blog</h1>
              <p className={styles.pageSubtitle}>
                Travel tips, destination guides, and stories to inspire your next adventure.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid-3">
              {BLOG_POSTS.map((post, i) => (
                <ScrollAnimator key={post.id} delay={i * 100}>
                  <BlogCard post={post} />
                </ScrollAnimator>
              ))}
            </div>
            {BLOG_POSTS.length === 0 && (
              <div className={styles.empty}>
                <p>No blog posts yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
