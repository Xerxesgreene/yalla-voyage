import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Curated Travel Packages | Bespoke Itineraries & Escapes',
  description:
    'Discover signature travel packages handcrafted by Yalla Voyage. From romantic Maldives overwater villas and AlUla desert escapes to Swiss ski chalets and Mediterranean yacht charters.',
  alternates: {
    canonical: '/packages',
  },
  openGraph: {
    title: 'Curated Travel Packages | Yalla Voyage',
    description:
      'Explore hand-designed luxury holiday packages, complete with private transfers, 5-star accommodations, and VIP experiences.',
    url: 'https://www.yallavoyage.com/packages',
    images: [
      {
        url: '/dest-maldives.jpg',
        width: 1200,
        height: 630,
        alt: 'Yalla Voyage Travel Packages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curated Travel Packages | Yalla Voyage',
    description:
      'Handcrafted luxury travel packages and bespoke itineraries by Yalla Voyage.',
    images: ['/dest-maldives.jpg'],
  },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
