import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { CompassCursor } from '@/components/ui/CompassCursor';
import { SplashScreen } from '@/components/ui/SplashScreen';
import { LanguageProvider } from '@/context/LanguageContext';

export const viewport: Viewport = {
  themeColor: '#0F2E23',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yallavoyage.com'),
  title: {
    default: 'Yalla Voyage | Premium Travel Agency — Saudi Arabia & Beyond',
    template: '%s | Yalla Voyage',
  },
  description:
    'Yalla Voyage crafts extraordinary travel — corporate, luxury, cruise, and beyond — with precision, passion, and a team that never settles for ordinary. Where journeys become stories.',
  keywords: [
    'travel agency',
    'Yalla Voyage',
    'يلا سفر',
    'Saudi Arabia travel',
    'luxury travel Saudi Arabia',
    'AlUla luxury tours',
    'corporate travel GCC',
    'Jeddah travel agency',
    'Maldives luxury escapes',
    'bespoke travel itineraries',
    'private aviation charter',
    'Red Sea luxury resorts',
    'cruise packages',
    'visa concierge services',
  ],
  alternates: {
    canonical: '/',
    languages: {
      'en': 'https://www.yallavoyage.com',
      'ar': 'https://www.yallavoyage.com?lang=ar',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    siteName: 'Yalla Voyage',
    url: 'https://www.yallavoyage.com',
    title: 'Yalla Voyage | Premium Travel Agency — Saudi Arabia & Beyond',
    description:
      'Yalla Voyage crafts extraordinary travel — corporate, luxury, cruise, and beyond — with precision, passion, and a team that never settles for ordinary. Where journeys become stories.',
    images: [
      {
        url: '/images/header-real-saudi.jpg',
        width: 1200,
        height: 630,
        alt: 'Yalla Voyage — Premium Travel Agency Saudi Arabia & Worldwide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yalla Voyage | Premium Travel Agency — Saudi Arabia & Beyond',
    description:
      'Bespoke luxury travel, corporate journeys, private aviation, and unforgettable adventures across Saudi Arabia and the world.',
    images: ['/images/header-real-saudi.jpg'],
    creator: '@yallavoyage',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'Yalla Voyage', url: 'https://www.yallavoyage.com' }],
  category: 'travel',
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['TravelAgency', 'LocalBusiness'],
      '@id': 'https://www.yallavoyage.com/#organization',
      name: 'Yalla Voyage',
      alternateName: 'يلا سفر',
      url: 'https://www.yallavoyage.com',
      logo: 'https://www.yallavoyage.com/logo.png',
      image: 'https://www.yallavoyage.com/images/header-real-saudi.jpg',
      description:
        'Yalla Voyage crafts exceptional travel experiences — bespoke itineraries, private aviation, luxury retreats, corporate travel, and curated voyages across Saudi Arabia and worldwide.',
      telephone: '+966 56 341 4649',
      email: 'info@yallavoyage.com',
      priceRange: '$$$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Al-Madinah Al-Munawarah road, Al-Ruwais',
        addressLocality: 'Jeddah',
        postalCode: '23214',
        addressCountry: 'SA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 21.5433,
        longitude: 39.1728,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '21:00',
      },
      sameAs: ['https://wa.me/966563414649'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.yallavoyage.com/#website',
      url: 'https://www.yallavoyage.com',
      name: 'Yalla Voyage',
      alternateName: 'يلا سفر',
      publisher: {
        '@id': 'https://www.yallavoyage.com/#organization',
      },
      inLanguage: ['en-US', 'ar-SA'],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Outfit:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Almarai:wght@300;400;700;800&family=Alexandria:wght@300;400;500;600;700;800&family=El+Messiri:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <LanguageProvider>
          <SplashScreen />
          <CompassCursor />
          <SmoothScroll>
            <ScrollProgress />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
