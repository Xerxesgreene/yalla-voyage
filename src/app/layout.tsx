import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { CompassCursor } from '@/components/ui/CompassCursor';

export const metadata: Metadata = {
  title: {
    default: 'Yalla Voyage | Premium Travel Agency — Saudi Arabia & Beyond',
    template: '%s | Yalla Voyage',
  },
  description:
    'Yalla Voyage crafts extraordinary travel — corporate, luxury, cruise, and beyond — with precision, passion, and a team that never settles for ordinary. Where journeys become stories.',
  keywords: [
    'travel agency',
    'Saudi Arabia',
    'luxury travel',
    'AlUla',
    'corporate travel',
    'Maldives',
    'Turkey',
    'Japan',
    'bespoke travel',
    'cruise',
    'visa services',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Yalla Voyage',
    url: 'https://www.yallavoyage.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Outfit:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <CompassCursor />
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <WhatsAppButton />
      </body>
    </html>
  );
}
