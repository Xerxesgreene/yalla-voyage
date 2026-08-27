import Link from 'next/link';
import { format } from 'date-fns';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    cover_image: string | null;
    category: string | null;
    published_at: string | null;
    created_at: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  const date = post.published_at || post.created_at;

  return (
    <article className={styles.card}>
      <Link href={`/blog/${post.slug}`} className={styles.imageLink}>
        <div className={styles.imageWrap}>
          <img
            src={post.cover_image || 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80'}
            alt={post.title}
            className={styles.image}
          />
          {post.category && (
            <span className={styles.category}>{post.category}</span>
          )}
        </div>
      </Link>
      <div className={styles.body}>
        <time className={styles.date}>{format(new Date(date), 'MMMM d, yyyy')}</time>
        <Link href={`/blog/${post.slug}`}>
          <h3 className={styles.title}>{post.title}</h3>
        </Link>
        {post.excerpt && (
          <p className={styles.excerpt}>{post.excerpt}</p>
        )}
        <Link href={`/blog/${post.slug}`} className={styles.readMore}>
          Read More →
        </Link>
      </div>
    </article>
  );
}
