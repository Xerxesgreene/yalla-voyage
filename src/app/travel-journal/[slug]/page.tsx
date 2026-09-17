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
    title: `${article.title} | يلا سفر Journal`,
    description: article.excerpt,
    openGraph: {
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

  return <JournalDetailClient article={article} relatedArticles={relatedArticles} />;
}
