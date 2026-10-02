import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Start Planning Your Bespoke Journey',
  description:
    'Connect with Yalla Voyage travel designers in Jeddah, Saudi Arabia. Plan your bespoke holiday, corporate travel, private jet charter, or VIP concierge service.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Yalla Voyage | Bespoke Travel Concierge',
    description:
      'Begin your journey with Yalla Voyage. Speak directly with our travel designers in Jeddah or reach out via WhatsApp concierge.',
    url: 'https://www.yallavoyage.com/contact',
    images: [
      {
        url: '/images/header-real-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Yalla Voyage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Yalla Voyage | Bespoke Travel Concierge',
    description:
      'Begin your journey with Yalla Voyage. Speak directly with our travel designers or contact our VIP concierge.',
    images: ['/images/header-real-contact.jpg'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
