import type { MetadataRoute } from 'next';
import { journalArticles } from '@/data/journal';
import { BLOG_POSTS } from '@/lib/data/seed';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yallavoyage.com';
  const now = new Date();

  // Core static routes with priorities and update frequencies
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}`,
          ar: `${baseUrl}`,
        },
      },
    },
    {
      url: `${baseUrl}/explore-saudi`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
      alternates: {
        languages: {
          en: `${baseUrl}/explore-saudi`,
          ar: `${baseUrl}/explore-saudi`,
        },
      },
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/destinations`,
          ar: `${baseUrl}/destinations`,
        },
      },
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/services`,
          ar: `${baseUrl}/services`,
        },
      },
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
      alternates: {
        languages: {
          en: `${baseUrl}/packages`,
          ar: `${baseUrl}/packages`,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/about`,
          ar: `${baseUrl}/about`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/contact`,
          ar: `${baseUrl}/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/travel-journal`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
      alternates: {
        languages: {
          en: `${baseUrl}/travel-journal`,
          ar: `${baseUrl}/travel-journal`,
        },
      },
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/blog`,
          ar: `${baseUrl}/blog`,
        },
      },
    },
  ];

  // Dynamic travel journals
  const journalRoutes: MetadataRoute.Sitemap = journalArticles.map((article) => ({
    url: `${baseUrl}/travel-journal/${article.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
    alternates: {
      languages: {
        en: `${baseUrl}/travel-journal/${article.slug}`,
        ar: `${baseUrl}/travel-journal/${article.slug}`,
      },
    },
  }));

  // Dynamic blog posts
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updated_at ? new Date(post.updated_at) : now,
    changeFrequency: 'monthly',
    priority: 0.7,
    alternates: {
      languages: {
        en: `${baseUrl}/blog/${post.slug}`,
        ar: `${baseUrl}/blog/${post.slug}`,
      },
    },
  }));

  return [...staticRoutes, ...journalRoutes, ...blogRoutes];
}
