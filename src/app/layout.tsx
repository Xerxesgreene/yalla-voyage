import type { Metadata } from 'next';
import './globals.css';
import BeeCursor from '@/components/ui/BeeCursor';
import SmoothScroll from '@/components/ui/SmoothScroll';
import FloatingContact from '@/components/ui/FloatingContact';

export const metadata: Metadata = {
  title: {
    default: 'Yalla Voyage | Premium Travel Agency — Saudi Arabia & GCC',
    template: '%s | Yalla Voyage',
  },
  description:
    "Yalla Voyage is Saudi Arabia's premier travel agency — crafting deeply personal journeys to GCC destinations, the Maldives, Turkey, and beyond.",
  keywords: ['travel agency', 'Saudi Arabia', 'GCC travel', 'AlUla', 'Dubai packages', 'Maldives', 'luxury travel'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Yalla Voyage',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&family=Noto+Naskh+Arabic:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <BeeCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <FloatingContact />
      </body>
    </html>
  );
}
