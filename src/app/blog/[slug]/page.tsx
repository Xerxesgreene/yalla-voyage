import { BLOG_POSTS } from '@/lib/data/seed';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) notFound();

  const date = post.published_at || post.created_at;

  return (
    <>
      <Navbar />
      <main>
        <article>
          {/* Hero */}
          <div className={styles.postHero}>
            <div className={styles.postHeroBg} style={{ backgroundImage: `url(${post.cover_image})` }} />
            <div className={styles.postHeroOverlay} />
            <div className={`container ${styles.postHeroContent}`}>
              {post.category && <span className="badge badge-primary">{post.category}</span>}
              <h1 className={styles.postTitle}>{post.title}</h1>
              <div className={styles.postMeta}>
                <time>{format(new Date(date), 'MMMM d, yyyy')}</time>
                <span>·</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={styles.postContent}>
            <div className={`${styles.contentBody} container-sm`}>
              {post.excerpt && (
                <p className={styles.excerpt}>{post.excerpt}</p>
              )}
              <p>This is a sample article. When connected to Supabase, the full rich-text content will render here using the TipTap renderer.</p>
              <h2>Explore the Destination</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <h2>What to See and Do</h2>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <blockquote>
                &ldquo;Travel is the only thing you buy that makes you richer.&rdquo;
              </blockquote>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.postCta}>
            <div className="container-sm">
              <div className={styles.postCtaCard}>
                <h3>Ready to Visit?</h3>
                <p>Let يلا سفر plan your perfect trip to this destination.</p>
                <a href="/contact" className="btn btn-primary">Plan My Trip</a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }));
}
