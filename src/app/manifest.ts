import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yalla Voyage — Premium Travel Agency',
    short_name: 'Yalla Voyage',
    description: 'Luxury travel agency in Saudi Arabia crafting bespoke worldwide journeys and extraordinary experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F2E23',
    theme_color: '#0F2E23',
    icons: [
      {
        src: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
