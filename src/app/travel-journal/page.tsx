import React from 'react';
import { journalArticles } from '@/data/journal';
import { JournalIndexClient } from '@/components/journal/JournalIndexClient';

export const metadata = {
  title: 'Travel Journals | يلا سفر',
  description:
    'Curated travel journals, reflections, and field stories from Italy, Dubai, Russia, Switzerland, Saudi Arabia, Japan, and beyond.',
};

export default function TravelJournalPage() {
  return <JournalIndexClient initialArticles={journalArticles} />;
}
