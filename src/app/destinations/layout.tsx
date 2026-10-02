import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Destinations | Handpicked Worldwide Travel & Retreats',
  description:
    'Explore curated travel destinations with Yalla Voyage. From the ancient deserts of AlUla and tropical Maldives overwater villas to Swiss Alps chalets and vibrant Tokyo.',
  alternates: {
    canonical: '/destinations',
  },
  openGraph: {
    title: 'Curated Worldwide Destinations | Yalla Voyage',
    description:
      'Explore handpicked global sanctuaries and immersive itineraries designed by Yalla Voyage.',
    url: 'https://www.yallavoyage.com/destinations',
    images: [
      {
        url: '/dest-alula.jpg',
        width: 1200,
        height: 630,
        alt: 'Yalla Voyage Destinations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curated Worldwide Destinations | Yalla Voyage',
    description:
      'Explore handpicked global sanctuaries and immersive itineraries designed by Yalla Voyage.',
    images: ['/dest-alula.jpg'],
  },
};

export default function DestinationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
