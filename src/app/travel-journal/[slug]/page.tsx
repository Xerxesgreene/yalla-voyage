import React from 'react';
import { notFound } from 'next/navigation';
import { journalArticles } from '@/data/journal';
import { JournalDetailClient } from '@/components/journal/JournalDetailClient';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return journalArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = journalArticles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | Yalla Voyage Journal`,
    description: article.excerpt,
    alternates: {
      canonical: `/travel-journal/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://www.yallavoyage.com/travel-journal/${article.slug}`,
      type: 'article',
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function JournalDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = journalArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Related articles (excluding current article)
  const relatedArticles = journalArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Yalla Voyage',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.yallavoyage.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.yallavoyage.com/travel-journal/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <JournalDetailClient article={article} relatedArticles={relatedArticles} />
    </>
  );
}
