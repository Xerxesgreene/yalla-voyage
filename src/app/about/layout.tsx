import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Luxury Travel & Bespoke Journeys',
  description:
    'Discover the story behind Yalla Voyage (يلا سفر). Over 20 years of crafting bespoke, luxury travel experiences across Saudi Arabia, GCC, and worldwide.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Yalla Voyage | Luxury Travel & Bespoke Journeys',
    description:
      'Where journeys become stories. Over 20 years of curating luxury travel, private aviation, and extraordinary worldwide expeditions.',
    url: 'https://www.yallavoyage.com/about',
    images: [
      {
        url: '/images/header-real-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Yalla Voyage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Yalla Voyage | Luxury Travel & Bespoke Journeys',
    description:
      'Discover Yalla Voyage. Curating bespoke itineraries and luxury travel across Saudi Arabia and the world.',
    images: ['/images/header-real-about.jpg'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
