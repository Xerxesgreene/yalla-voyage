export interface TravelPackage {
  slug: string;
  chapter: string;
  title: string;
  category: 'saudi' | 'luxury' | 'adventure' | 'spiritual' | 'corporate';
  regionLabel: string;
  tagline: string;
  route: string[];
  image: string;
  duration: string;
  price: string;
  badge: string;
  tags: string[];
  highlights: string[];
  inclusions: string[];
}

export const packages: TravelPackage[] = [
  {
    slug: 'alula-heritage-luxury',
    chapter: 'CHAPTER 01',
    title: 'AlUla Oasis & The Tombs of Hegra',
    category: 'saudi',
    regionLabel: 'Kingdom Sanctuary',
    tagline: 'Whispering sandstone monoliths, private desert pool villas, and silent stargazing across Ashar Valley.',
    route: ['Riyadh Palace', 'AlUla Monoliths', 'Ashar Sanctuary'],
    image: '/images/pkg-alula-story.jpg',
    duration: '5 Days / 4 Nights',
    price: 'From $4,200',
    badge: 'Saudi Signature',
    tags: ['UNESCO Hegra', 'Banyan Tree Villas', 'Ashar Stargazing'],
    highlights: ['Private Hegra archaeologist permit', 'Ashar Valley pool villa', 'Helicopter desert safari', 'Elephant Rock sunset dinner'],
    inclusions: ['Private 4x4 Chauffeur', 'All UNESCO Permits', 'Curated Farm Dining', '24/7 Concierge'],
  },
  {
    slug: 'red-sea-private-islands',
    chapter: 'CHAPTER 02',
    title: 'The Red Sea Archipelago',
    category: 'saudi',
    regionLabel: 'Pristine Lagoon',
    tagline: 'Untouched azure coral reefs, organic overwater villas at St. Regis, and private catamaran sunset sails.',
    route: ['Jeddah Port', 'Ummahat Island', 'St. Regis Atoll'],
    image: '/images/pkg-redsea-story.jpg',
    duration: '6 Days / 5 Nights',
    price: 'From $5,500',
    badge: 'Eco-Luxury',
    tags: ['Overwater Atoll', 'Catamaran Cruise', 'Coral Diving'],
    highlights: ['Overwater villa buyout', 'Private catamaran reef cruise', 'Bespoke scuba & wellness', 'Seaplane island transfers'],
    inclusions: ['Direct Seaplane Flights', 'Full Board Gourmet Dining', 'Private Dive Master', 'Spa Treatments'],
  },
  {
    slug: 'adventure-journeys',
    chapter: 'CHAPTER 03',
    title: 'Wadi Al Disah Canyon Expedition',
    category: 'adventure',
    regionLabel: 'Northwest Frontier',
    tagline: 'Towering red sandstone spires, freshwater springs through palm groves, and luxury mountain glamping.',
    route: ['Tabuk Air Base', 'Wadi Al Disah', 'NEOM Mountain Glamp'],
    image: '/images/pkg-disah-story.jpg',
    duration: '7 Days / 6 Nights',
    price: 'From $3,900',
    badge: 'Expedition',
    tags: ['Canyon 4x4', 'Desert Springs', 'Luxury Glamping'],
    highlights: ['Wadi Disah off-road expedition', 'Dune buggy desert safari', 'Campfire gourmet cookouts', 'Canyon climbing & trekking'],
    inclusions: ['Equipped Off-Road Fleet', 'Expert Expedition Guides', 'Luxury Glamping Tents', 'Satellite Safety Gear'],
  },
  {
    slug: 'luxury-escapes',
    chapter: 'CHAPTER 04',
    title: 'Private Atoll Sanctuary',
    category: 'luxury',
    regionLabel: 'Maldives Waters',
    tagline: 'Secluded overwater estates, private seaplane transfers, and personal butler service over crystal turquoise lagoons.',
    route: ['Malé FBO Terminal', 'North Malé Atoll', 'Overwater Haven'],
    image: '/images/pkg-maldives-story.jpg',
    duration: '8 Days / 7 Nights',
    price: 'From $6,800',
    badge: 'Ultra Seclusion',
    tags: ['Private Infinity Pool', 'Yacht Charter', 'Dedicated Butler'],
    highlights: ['Overwater villa buyouts', 'Private yacht charters', 'VIP tarmac transfers', '24/7 dedicated butler'],
    inclusions: ['Private FBO Transfers', '5-Star Ultra Luxury Resort', 'Michelin-Star Dining', 'Personal Concierge'],
  },
  {
    slug: 'couples-honeymoon',
    chapter: 'CHAPTER 05',
    title: 'Cappadocia Sunrise & Aegean Seclusion',
    category: 'luxury',
    regionLabel: 'Anatolian Skies',
    tagline: 'Private hot air balloon dawn flights above fairy chimneys, cave terrace breakfasts, and Aegean yacht sails.',
    route: ['Istanbul Bosphorus', 'Cappadocia Skies', 'Bodrum Riviera'],
    image: '/images/pkg-cappadocia-story.jpg',
    duration: '7 Days / 6 Nights',
    price: 'From $4,800',
    badge: 'Romantic Skies',
    tags: ['Dawn Ballooning', 'Cave Suite Terrace', 'Aegean Coast'],
    highlights: ['Private hot air balloon flight', 'Cave suite & panoramic terrace', 'Candlelit canyon dinner', 'Couples spa rituals'],
    inclusions: ['Private Mercedes Chauffeur', '5-Star Luxury Suites', 'All Private Excursions', 'Champagne Welcome'],
  },
  {
    slug: 'cultural-immersions',
    chapter: 'CHAPTER 06',
    title: 'Grand European Châteaux & Riviera',
    category: 'luxury',
    regionLabel: 'French Heritage',
    tagline: 'After-hours access to royal French palaces, private Michelin gastronomic tables, and classic car coastal touring.',
    route: ['Parisian Salons', 'Loire Châteaux', 'Monaco Coast'],
    image: '/images/pkg-chateau-story.jpg',
    duration: '9 Days / 8 Nights',
    price: 'From $7,200',
    badge: 'Grand Royalty',
    tags: ['Château Buyouts', 'Private Museum Tours', 'Michelin Dining'],
    highlights: ['Private after-hours museum tours', 'Château estate stays', 'Michelin-starred chef tables', 'Classic car touring'],
    inclusions: ['Private Concierge Escort', 'Luxury Vehicle Allotment', 'Exclusive Access Badges', 'Daily Gourmet Breakfast'],
  },
];
