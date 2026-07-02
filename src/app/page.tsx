import type { Metadata } from 'next';
import HomeClient from './_home';

export const metadata: Metadata = {
  title: 'Yalla Voyage | Premium Travel Agency — Saudi Arabia & GCC',
  description: 'Discover extraordinary destinations with Yalla Voyage — Saudi Arabia\'s premier travel agency offering curated packages to GCC, Maldives, Turkey and beyond.',
};

export default function HomePage() {
  return <HomeClient />;
}
