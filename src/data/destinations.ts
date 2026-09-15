export interface Destination {
  slug: string;
  name: string;
  region: 'middle-east' | 'europe' | 'asia-islands' | 'africa-islands';
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
    slug: 'egypt',
    name: 'Cairo, Giza & The Nile',
    country: 'Egypt',
    region: 'middle-east',
    tagline: 'Pyramids of Antiquity & Timeless Nile Dahabiya Cruises',
    description:
      'Private dawn permits to the Great Pyramids, curated tours of the Grand Egyptian Museum, and bespoke private dahabiya sailing between Luxor and Aswan.',
    image: '/images/pkg-egypt.jpg',
    href: '/contact',
    bestSeason: 'Oct – Apr',
    tags: ['Giza Pyramids', 'Private Dahabiya', 'Grand Egyptian Museum'],
  },
  {
    slug: 'italy',
    name: 'Amalfi Coast, Rome & Venice',
    country: 'Italy',
    region: 'europe',
    tagline: 'Cliffside Riviera Glamour & Renaissance Grandeur',
    description:
      'Handcrafted Riva boat charters across Capri sea caves, reserved terrace suites in Ravello, private Vatican night tours, and historic Venetian palazzos.',
    image: '/images/dest-italy.jpg',
    href: '/contact',
    bestSeason: 'May – Oct',
    tags: ['Riva Yacht Charter', 'Positano Suites', 'Renaissance Palazzos'],
  },
  {
    slug: 'switzerland',
    name: 'Swiss Alps & Lake Geneva',
    country: 'Switzerland',
    region: 'europe',
    tagline: 'Glacial Majesty & Ultra-Luxury Alpine Chalets',
    description:
      'Exclusive ski-in / ski-out timber chalets in St. Moritz and Zermatt, panoramic private Glacier Express suites, helicopter glacier landings, and serene alpine wellness.',
    image: '/images/dest-switzerland.jpg',
    href: '/contact',
    bestSeason: 'Dec – Apr & Jun – Sep',
    tags: ['St. Moritz Chalets', 'Alpine Helicopter', 'Glacial Solitude'],
  },
  {
    slug: 'mauritius',
    name: 'Mauritius Island Sanctuary',
    country: 'Mauritius',
    region: 'africa-islands',
    tagline: 'Turquoise Lagoons & Private Peninsula Villas',
    description:
      'Secluded beachfront pool villas under the shadow of iconic Le Morne Brabant, private catamaran coral reef cruising, and world-class Creole gastronomy.',
    image: '/images/dest-mauritius.jpg',
    href: '/contact',
    bestSeason: 'May – Dec',
    tags: ['Le Morne Brabant', 'Private Catamaran', 'Turquoise Lagoons'],
  },
  {
    slug: 'uae',
    name: 'Dubai & Abu Dhabi',
    country: 'UAE',
    region: 'middle-east',
    tagline: 'Futuristic Splendor & Desert Royal Caravans',
    description:
      'Ultra-luxury skyline penthouses, private desert falconry conservation camps, private Louvre Abu Dhabi tours, and bespoke superyacht charters.',
    image: '/images/dest-uae.jpg',
    href: '/contact',
    bestSeason: 'Nov – Mar',
    tags: ['Skyline Penthouses', 'Desert Palaces', 'Superyacht Charter'],
  },
  {
    slug: 'asia-pacific',
    name: 'Asia Pacific & Island Escapes',
    country: 'Indonesia & Bali',
    region: 'asia-islands',
    tagline: 'Rainforest Sanctuaries & Komodo Phinisi Expeditions',
    description:
      'Ubud clifftop pool pavilions, bespoke private liveaboard phinisi yacht charters through the Komodo Archipelago, and sacred cultural immersions.',
    image: '/images/dest-asia.jpg',
    href: '/contact',
    bestSeason: 'Apr – Oct',
    tags: ['Phinisi Yachts', 'Rainforest Retreats', 'Komodo Islands'],
  },
  {
    slug: 'paris',
    name: 'Paris & Côte d’Azur',
    country: 'France',
    region: 'europe',
    tagline: 'City of Light & Timeless French Riviera Elegance',
    description:
      'Private Seine yacht cruises, Michelin-starred gastronomy, exclusive haute couture atelier appointments, and secluded Cap-Ferrat villas.',
    image: '/images/dest-paris.png',
    href: '/contact',
    bestSeason: 'Apr – Oct',
    tags: ['Haute Couture', 'Private Gastronomy', 'Riviera Villas'],
  },
  {
    slug: 'japan',
    name: 'Tokyo & Kyoto',
    country: 'Japan',
    region: 'asia-islands',
    tagline: 'Zen Sanctuaries & Master Artisan Precision',
    description:
      'Private tea ceremonies with 15th-generation masters, secluded ryokans with natural volcanic onsens, and after-hours temple garden contemplations.',
    image: '/images/dest-japan.jpg',
    href: '/contact',
    bestSeason: 'Mar – May & Sep – Nov',
    tags: ['Ryokan Sanctuaries', 'Private Master Tea', 'Michelin Stars'],
  },
  {
    slug: 'maldives',
    name: 'Maldives Archipelago',
    country: 'Maldives',
    region: 'asia-islands',
    tagline: 'Overwater Sanctuaries & Bioluminescent Coral Atolls',
    description:
      'Private island buyouts, multi-level overwater villas with waterslides, dedicated 24/7 thakuru butler service, and private seaplane transfers.',
    image: '/images/dest-maldives.jpg',
    href: '/contact',
    bestSeason: 'Nov – Apr',
    tags: ['Overwater Villas', 'Private Seaplane', 'Island Buyouts'],
  },
  {
    slug: 'turkey',
    name: 'Istanbul & Cappadocia',
    country: 'Turkey',
    region: 'middle-east',
    tagline: 'Bosphorus Waterfront Palaces & Sunrise Balloon Flights',
    description:
      'Private sunrise hot air balloon flights above the fairy chimneys of Cappadocia, historic waterfront Bosphorus Ottoman mansions, and bespoke bazaar tours.',
    image: '/images/dest-turkey.jpg',
    href: '/contact',
    bestSeason: 'Apr – Jun & Sep – Nov',
    tags: ['Sunrise Balloons', 'Bosphorus Palaces', 'Cave Suites'],
  },
  {
    slug: 'greece',
    name: 'Santorini & Cyclades',
    country: 'Greece',
    region: 'europe',
    tagline: 'Caldera Sunsets & Aegean Seclusion',
    description:
      'Cliffside infinity suites suspended over the volcanic caldera, private catamaran archipelago sailing, and private wine tastings at sunset.',
    image: '/images/dest-europe.jpg',
    href: '/contact',
    bestSeason: 'May – Oct',
    tags: ['Caldera Suites', 'Private Catamaran', 'Aegean Dining'],
  },
  {
    slug: 'al-baha',
    name: 'Al Baha & Sarawat Mountains',
    country: 'Saudi Arabia',
    region: 'middle-east',
    tagline: 'Emerald Terraced Ridges & Ancient Marble Citadels',
    description:
      'High-altitude cloud-swept juniper reserves, dramatic granite escarpments, and the iconic 400-year-old multi-story marble stone village of Dhee Ayn rising above lush banana groves.',
    image: '/images/real-albaha.jpg',
    href: '/explore-saudi',
    bestSeason: 'Year-Round',
    tags: ['Dhee Ayn Marble Village', 'Raghadan Forest', 'Sarawat Escarpments'],
  },
];
