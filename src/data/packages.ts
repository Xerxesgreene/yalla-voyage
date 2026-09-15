export interface TravelPackage {
  slug: string;
  title: string;
  category: 'top' | 'saudi' | 'special';
  categoryLabel: string;
  tagline: string;
  image: string;
  duration: string;
  badge?: string;
  highlights: string[];
  tags?: string[];
  inclusions?: string[];
}

export const packages: TravelPackage[] = [
  {
    slug: 'cappadocia',
    title: 'Cappadocia',
    category: 'top',
    categoryLabel: 'Top Destination',
    duration: '6 Days / 5 Nights',
    image: '/images/pkg-cappadocia-story.jpg',
    tagline: 'Private dawn hot air balloon flights above fairy chimneys and luxury cave suites.',
    highlights: ['Dawn Hot Air Ballooning', 'Cave Suite Panoramic Terrace', 'Sunset ATV Safari', 'Private Local Guide'],
  },
  {
    slug: 'amalfi-coast',
    title: 'Amalfi Coast',
    category: 'top',
    categoryLabel: 'Top Destination',
    duration: '7 Days / 6 Nights',
    image: '/images/pkg-italy.jpg',
    tagline: 'Private cliffside villas, yacht cruising along Capri, and sunset dining in Positano.',
    highlights: ['Private Yacht Charter', 'Cliffside Villa Suite', 'Capri Day Cruise', 'Michelin Star Dining'],
  },
  {
    slug: 'maldives',
    title: 'Maldives',
    category: 'top',
    categoryLabel: 'Island Sanctuary',
    duration: '6 Days / 5 Nights',
    image: '/images/pkg-maldives.jpg',
    tagline: 'Secluded overwater pool villas, seaplane transfers, and private turquoise reef dining.',
    highlights: ['Overwater Pool Villa', 'Direct Seaplane Flights', 'Private Coral Reef Snorkel', '24/7 Butler Service'],
  },
  {
    slug: 'bali',
    title: 'Bali',
    category: 'top',
    categoryLabel: 'Tropical Retreat',
    duration: '7 Days / 6 Nights',
    image: '/images/pkg-bali.jpg',
    tagline: 'Private jungle pool estates in Ubud, sacred temple water blessings, and Uluwatu cliffside sunsets.',
    highlights: ['Ubud Jungle Pool Villa', 'Private Temple Blessing', 'Tegalalang Sunrise Walk', 'Holistic Spa Rituals'],
  },
  {
    slug: 'egypt',
    title: 'Egypt',
    category: 'top',
    categoryLabel: 'Ancient Wonder',
    duration: '8 Days / 7 Nights',
    image: '/images/pkg-egypt.jpg',
    tagline: 'Private VIP access to the Pyramids of Giza, luxury Nile cruising, and royal pharaonic treasures.',
    highlights: ['Private Giza Pyramids Permit', 'Luxury Nile Cruise Suite', 'Valley of the Kings', 'Private Egyptologist'],
  },
  {
    slug: 'dubai',
    title: 'Dubai',
    category: 'top',
    categoryLabel: 'Modern Oasis',
    duration: '5 Days / 4 Nights',
    image: '/images/pkg-dubai.jpg',
    tagline: 'Penthouse skyline suites, private desert vintage rover safaris, and luxury yacht charters.',
    highlights: ['Downtown Penthouse Suite', 'Private Desert Safari', 'Yacht Marina Cruise', 'VIP Helicopter Flight'],
  },
  {
    slug: 'ladies-trips',
    title: 'Ladies Trips',
    category: 'special',
    categoryLabel: 'Women’s Getaways',
    duration: '6 Days / 5 Nights',
    image: '/images/service-ladies-trips.jpg',
    tagline: 'Curated exclusively for women with private wellness villas, secret shopping, and female guides.',
    highlights: ['All-Female Host Team', 'Private Spa & Wellness', 'Exclusive Boutique Access', 'Secluded Sunset Dining'],
  },
  {
    slug: 'educational-tours',
    title: 'Educational Tours',
    category: 'special',
    categoryLabel: 'Curated Learning',
    duration: '7 Days / 6 Nights',
    image: '/images/service-educational-tours.jpg',
    tagline: 'Immersive cultural exchanges, historic field lectures, and youth leadership adventures.',
    highlights: ['Heritage & Science Mentors', 'Museum & University Access', 'Interactive Workshops', 'Dedicated Chaperones'],
  },
  {
    slug: 'alula',
    title: 'AlUla',
    category: 'saudi',
    categoryLabel: 'Saudi Sanctuary',
    duration: '5 Days / 4 Nights',
    image: '/images/pkg-alula-story.jpg',
    tagline: 'Sandstone canyons, private Ashar Valley pool villas, and silent stargazing at Hegra.',
    highlights: ['UNESCO Hegra Private Permit', 'Ashar Valley Pool Villa', 'Helicopter Desert Safari', 'Elephant Rock Dinner'],
  },
  {
    slug: 'red-sea',
    title: 'Red Sea',
    category: 'saudi',
    categoryLabel: 'Saudi Sanctuary',
    duration: '6 Days / 5 Nights',
    image: '/images/pkg-redsea-story.jpg',
    tagline: 'Pristine island atolls, St. Regis overwater suites, and untouched coral reef catamaran sailing.',
    highlights: ['St. Regis Overwater Villa', 'Private Catamaran Sail', 'Pristine Coral Diving', 'Seaplane Transfers'],
  },
];
