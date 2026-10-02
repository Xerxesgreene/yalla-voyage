import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Travel Services | Corporate, Luxury, Cruise & Bespoke',
  description:
    'Comprehensive travel concierge services by Yalla Voyage: bespoke holiday packages, corporate travel management, luxury cruises, private aviation charters, and VIP visa concierge.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Travel Services | Yalla Voyage',
    description:
      'From corporate missions and private aviation to bespoke retreats and Mediterranean cruises — precision travel services engineered for distinction.',
    url: 'https://www.yallavoyage.com/services',
    images: [
      {
        url: '/images/header-real-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Yalla Voyage Travel Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Services | Yalla Voyage',
    description:
      'Corporate travel, bespoke leisure, luxury cruises, and private charters tailored by Yalla Voyage.',
    images: ['/images/header-real-services.jpg'],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
