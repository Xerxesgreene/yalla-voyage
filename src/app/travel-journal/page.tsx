import React from 'react';
import { journalArticles } from '@/data/journal';
import { JournalIndexClient } from '@/components/journal/JournalIndexClient';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Journals | Field Dispatches & Curated Stories',
  description:
    'Curated travel journals, reflections, and field stories from Italy, Dubai, Russia, Switzerland, Saudi Arabia, Japan, and beyond by Yalla Voyage (يلا سفر).',
  alternates: {
    canonical: '/travel-journal',
  },
  openGraph: {
    title: 'Travel Journals | Yalla Voyage (يلا سفر)',
    description:
      'Curated travel journals, reflections, and field stories from the world’s most captivating landscapes and retreats.',
    url: 'https://www.yallavoyage.com/travel-journal',
    images: [
      {
        url: '/images/dest-switzerland.jpg',
        width: 1200,
        height: 630,
        alt: 'Yalla Voyage Travel Journals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Journals | Yalla Voyage',
    description: 'Field dispatches, luxury guides, and curated travel reflections.',
    images: ['/images/dest-switzerland.jpg'],
  },
};

export default function TravelJournalPage() {
  return <JournalIndexClient initialArticles={journalArticles} />;
}
