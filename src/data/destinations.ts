export interface Destination {
  slug: string;
  name: string;
  region: 'international' | 'saudi';
  country: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  bestSeason?: string;
  tags?: string[];
}

export const destinations: Destination[] = [
  {
    slug: 'paris',
    name: 'Paris & Côte d’Azur',
    country: 'France',
    region: 'international',
    tagline: 'City of Light & Timeless Riviera Elegance',
    description:
      'Private Seine yacht sails, Michelin-starred gastronomy, exclusive haute couture salons, and secluded Riviera villas.',
    image: '/images/dest-paris.png',
    href: '/contact',
    bestSeason: 'Apr – Oct',
    tags: ['Haute Couture', 'Private Gastronomy', 'Riviera Villas'],
  },
  {
    slug: 'greece',
    name: 'Santorini & Cyclades',
    country: 'Greece',
    region: 'international',
    tagline: 'Caldera Sunsets & Aegean Seclusion',
    description:
      'Cliffside infinity suites, private catamaran archipelago sailing, and private wine tastings overlooking azure waters.',
    image: '/images/dest-europe.jpg',
    href: '/contact',
    bestSeason: 'May – Oct',
    tags: ['Caldera Suites', 'Private Catamaran', 'Aegean Dining'],
  },
  {
    slug: 'uae',
    name: 'Dubai & Abu Dhabi',
    country: 'UAE',
    region: 'international',
    tagline: 'Futuristic Splendor & Desert Palaces',
    description:
      'Ultra-luxury penthouses, private desert falconry camps, private Louvre tours, and superyacht marina berths.',
    image: '/images/dest-uae.jpg',
    href: '/contact',
    bestSeason: 'Nov – Mar',
    tags: ['Skyline Penthouses', 'Desert Palaces', 'Superyacht Charter'],
  },
  {
    slug: 'japan',
    name: 'Tokyo & Kyoto',
    country: 'Japan',
    region: 'international',
    tagline: 'Zen Sanctuaries & High-Speed Precision',
    description:
      'Private tea ceremonies with master artisans, secluded ryokans with natural onsen, and private Shinkansen suites.',
    image: '/images/dest-japan.jpg',
    href: '/contact',
    bestSeason: 'Mar – May & Sep – Nov',
    tags: ['Ryokan Sanctuaries', 'Private Master Tea', 'Michelin Stars'],
  },
  {
    slug: 'turkey',
    name: 'Istanbul & Cappadocia',
    country: 'Turkey',
    region: 'international',
    tagline: 'Bosphorus Mansions & Sunrise Balloons',
    description:
      'Private sunrise hot air balloon flights above fairy chimneys, historic Bosphorus Ottoman palaces, and bespoke bazaars.',
    image: '/images/dest-turkey.jpg',
    href: '/contact',
    bestSeason: 'Apr – Jun & Sep – Nov',
    tags: ['Sunrise Balloons', 'Bosphorus Palaces', 'Cave Suites'],
  },
  {
    slug: 'maldives',
    name: 'Maldives Archipelago',
    country: 'Maldives',
    region: 'international',
    tagline: 'Overwater Sanctuaries & Bioluminescent Atolls',
    description:
      'Private island buyouts, multi-level overwater villas with waterslides, private seaplane transfers, and coral reef dives.',
    image: '/images/dest-maldives.jpg',
    href: '/contact',
    bestSeason: 'Nov – Apr',
    tags: ['Overwater Villas', 'Private Seaplane', 'Island Buyouts'],
  },
  {
    slug: 'asia-bali',
    name: 'Bali & Komodo Islands',
    country: 'Indonesia',
    region: 'international',
    tagline: 'Jungle Clifftops & Dragon Expeditions',
    description:
      'Ubud rainforest sanctuaries, private luxury phinisi liveaboard charters through Komodo, and secluded volcanic clifftops.',
    image: '/images/dest-asia.jpg',
    href: '/contact',
    bestSeason: 'Apr – Oct',
    tags: ['Phinisi Yachts', 'Rainforest Retreats', 'Komodo Islands'],
  },
];
