import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore Saudi Arabia | Heritage, Luxury & Vision 2030 Wonders',
  description:
    'Experience the magic and transformation of Saudi Arabia with Yalla Voyage. UNESCO Hegra in AlUla, Red Sea ultra-luxury resorts, Diriyah, and Edge of the World in Riyadh.',
  alternates: {
    canonical: '/explore-saudi',
  },
  openGraph: {
    title: 'Explore Saudi Arabia | Yalla Voyage (يلا سفر)',
    description:
      'Immerse in the Kingdom’s most extraordinary landscapes, cultural treasures, and groundbreaking luxury resorts.',
    url: 'https://www.yallavoyage.com/explore-saudi',
    images: [
      {
        url: '/images/header-real-saudi.jpg',
        width: 1200,
        height: 630,
        alt: 'Explore Saudi Arabia with Yalla Voyage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore Saudi Arabia | Yalla Voyage',
    description:
      'Immerse in the Kingdom’s most extraordinary landscapes, cultural treasures, and luxury resorts.',
    images: ['/images/header-real-saudi.jpg'],
  },
};

export default function ExploreSaudiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
