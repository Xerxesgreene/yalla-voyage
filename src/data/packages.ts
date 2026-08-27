export interface TravelPackage {
  slug: string;
  title: string;
  category: 'luxury' | 'saudi' | 'adventure' | 'corporate' | 'spiritual';
  description: string;
  image: string;
  duration: string;
  price: string;
  badge: string;
  icon: string;
  highlights: string[];
  inclusions: string[];
}

export const packages: TravelPackage[] = [
  {
    slug: 'luxury-escapes',
    title: 'Signature Luxury Escapes',
    category: 'luxury',
    description: 'Indulge in the finest private villas, private jet transfers, and exclusive VIP buyouts curated for those who expect absolute perfection.',
    image: '/images/dest-maldives.jpg',
    duration: '8 Days / 7 Nights',
    price: 'From $6,800 / person',
    badge: 'Bespoke VIP',
    icon: 'Crown',
    highlights: ['Overwater villa buyouts', 'Private yacht charters', 'VIP tarmac transfers', '24/7 dedicated butler'],
    inclusions: ['Private FBO Transfers', '5-Star Ultra Luxury Resort', 'Michelin-Star Dining', 'Personal Concierge'],
  },
  {
    slug: 'alula-heritage-luxury',
    title: 'AlUla Royal Oasis & Hegra',
    category: 'saudi',
    description: 'Discover the ancient Nabataean majesty of Hegra, luxury desert tented villas at Banyan Tree, stargazing in Ashar Valley, and private canyon dining.',
    image: '/images/saudi-hegra.png',
    duration: '5 Days / 4 Nights',
    price: 'From $4,200 / person',
    badge: 'Saudi Signature',
    icon: 'Map',
    highlights: ['Private Hegra archaeologist tour', 'Ashar Valley luxury villa', 'Helicopter desert safari', 'Elephant Rock sunset dinner'],
    inclusions: ['Luxury 4x4 Chauffeur', 'All UNESCO Permits', 'Curated Farm Dining', 'Private Guide'],
  },
  {
    slug: 'red-sea-private-islands',
    title: 'The Red Sea Sanctuary',
    category: 'saudi',
    description: 'Immerse in untouched coral archipelagos, ultra-luxury overwater retreats at St. Regis Red Sea, private catamaran charters, and bespoke marine conservation.',
    image: '/images/saudi-redsea.jpg',
    duration: '6 Days / 5 Nights',
    price: 'From $5,500 / person',
    badge: 'Eco-Luxury',
    icon: 'Compass',
    highlights: ['Overwater island villa', 'Private catamaran reef cruise', 'Bespoke scuba & wellness', 'Seaplane island transfers'],
    inclusions: ['Direct Seaplane Flights', 'Full Board Gourmet Dining', 'Private Dive Master', 'Spa Treatments'],
  },
  {
    slug: 'adventure-journeys',
    title: 'High-Octane Desert & Canyons',
    category: 'adventure',
    description: 'Push boundaries across Wadi Disah canyons, Empty Quarter dune bashing, Red Sea deep-sea excursions, and private mountain glamping.',
    image: '/images/saudi-disah.png',
    duration: '7 Days / 6 Nights',
    price: 'From $3,900 / person',
    badge: 'Expedition',
    icon: 'Mountain',
    highlights: ['Wadi Disah off-road expedition', 'Dune buggy desert safari', 'Campfire gourmet cookouts', 'Canyon climbing & trekking'],
    inclusions: ['Equipped Off-Road Fleet', 'Expert Expedition Guides', 'Luxury Glamping Tents', 'Satellite Safety Gear'],
  },
  {
    slug: 'corporate-retreats',
    title: 'Executive Summits & MICE',
    category: 'corporate',
    description: 'Streamlined boardroom itineraries, private aircraft charters, VIP summit seating, and bespoke networking retreats in Riyadh and global financial capitals.',
    image: '/images/service-corporate-mice.jpg',
    duration: '4 Days / 3 Nights',
    price: 'Custom Corporate Rates',
    badge: 'MICE & Executive',
    icon: 'Briefcase',
    highlights: ['Private FBO jet charters', 'Luxury Maybach fleet', 'Exclusive venue buyouts', 'Dedicated protocol manager'],
    inclusions: ['Dedicated Flight Coordinator', 'VIP Airport Fast-Track', 'High-Security Transport', 'Custom Manifest Support'],
  },
  {
    slug: 'couples-honeymoon',
    title: 'Romantic Sanctuaries',
    category: 'luxury',
    description: 'Intimate escapes crafted for two — from secluded Mediterranean villas and Cappadocia private balloon flights to Red Sea sunset cruises.',
    image: '/images/dest-turkey.jpg',
    duration: '7 Days / 6 Nights',
    price: 'From $4,800 / couple',
    badge: 'Honeymoon & Couples',
    icon: 'Heart',
    highlights: ['Private hot air balloon flight', 'Cave suite & panoramic terrace', 'Candlelit canyon dinner', 'Couples spa rituals'],
    inclusions: ['Private Mercedes Chauffeur', '5-Star Luxury Suites', 'All Private Excursions', 'Champagne Welcome'],
  },
  {
    slug: 'umrah-plus-cultural',
    title: 'Spiritual Umrah + Heritage',
    category: 'spiritual',
    description: 'Harmonize your spiritual journey with VIP Clock Tower suites, private high-speed Haramain rail transfers, and historic exploration of Medina and Old Jeddah Al-Balad.',
    image: '/images/service-umrah-vip.jpg',
    duration: '8 Days / 7 Nights',
    price: 'From $3,400 / person',
    badge: 'Spiritual & Heritage',
    icon: 'Star',
    highlights: ['Front-row Haram view suites', 'Private Haramain VIP train', 'Medina historic heritage walk', 'Jeddah Al-Balad UNESCO tour'],
    inclusions: ['Private Chauffeur Fleet', '5-Star Haramain Hotels', 'Religious Heritage Scholar', 'Visa & Permit Support'],
  },
  {
    slug: 'cultural-immersions',
    title: 'European Palaces & Castles',
    category: 'luxury',
    description: 'Behind-the-scenes access to historic European châteaux, private museum viewings after hours, and bespoke Michelin gastronomic trails.',
    image: '/images/dest-europe.jpg',
    duration: '9 Days / 8 Nights',
    price: 'From $7,200 / person',
    badge: 'Grand Heritage',
    icon: 'Landmark',
    highlights: ['Private after-hours museum tours', 'Château estate stays', 'Michelin-starred chef tables', 'Classic car touring'],
    inclusions: ['Private Concierge Escort', 'Luxury Vehicle Allotment', 'Exclusive Access Badges', 'Daily Gourmet Breakfast'],
  },
];
