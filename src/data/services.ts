export type ServiceCategory = 'bespoke' | 'aviation' | 'corporate' | 'concierge' | 'spiritual';

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  badge: string;
  tagline: string;
  description: string;
  icon: string;
  image: string;
  highlights: string[];
  inclusions: string[];
  responseSpeed?: string;
}

export const services: Service[] = [
  {
    slug: 'bespoke-travel',
    title: 'Bespoke Travel & Adventures',
    category: 'bespoke',
    categoryLabel: 'Signature Journeys',
    badge: 'Signature',
    tagline: 'Tailored itineraries — from desert expeditions to overwater island sanctuaries.',
    description: 'We craft 100% custom journeys: desert canyon expeditions, private island buyouts, island-hopping itineraries, and couple escapes. Every route is built around your pace, your preferences, and zero templates.',
    icon: 'Package',
    image: '/images/pkg-alula-story.jpg',
    highlights: [
      '100% bespoke day-by-day route design',
      'Desert glamping, canyon treks & island hopping',
      'Private overwater villa & resort buyouts',
      'Curated private local master guides',
      '24/7 dedicated travel designer support',
      'All permits, transfers & logistics covered',
    ],
    inclusions: [
      'Custom travel blueprint & pacing',
      'Handpicked luxury accommodations',
      'Private guides & curated excursions',
      'End-to-end trip logistics management',
    ],
  },
  {
    slug: 'private-aviation',
    title: 'Private Aviation & Chauffeurs',
    category: 'aviation',
    categoryLabel: 'VIP Mobility',
    badge: 'VIP Mobility',
    tagline: 'Fly and transfer on your own schedule — zero lines, zero compromises.',
    description: 'Access our global private jet fleet with direct FBO tarmac boarding, bespoke in-flight dining, and discreet professional chauffeur transfers in Maybach, Range Rover, and S-Class fleets.',
    icon: 'PlaneTakeoff',
    image: '/images/service-private-jet.jpg',
    highlights: [
      'Global fleet: Light, Midsize & Heavy Jets',
      'Direct FBO private terminal boarding',
      'Michelin-standard bespoke in-flight catering',
      'Late-model Maybach, Range Rover & S-Class',
      'NDA-signed, diplomatically trained chauffeurs',
      'Flight tracking & guaranteed zero-delay',
    ],
    inclusions: [
      'Flight planning & international permits',
      'Dedicated air-host & executive crew',
      'Tarmac VIP limousine transfer',
      'All fuel, toll & parking fees covered',
    ],
  },
  {
    slug: 'corporate-mice',
    title: 'Corporate MICE & Retreats',
    category: 'corporate',
    categoryLabel: 'Corporate & Events',
    badge: 'Enterprise',
    tagline: 'End-to-end execution for global summits, retreats and large group travel.',
    description: 'From global conferences and executive retreats to incentive group travel and destination management — we deliver turnkey MICE execution with on-ground operational mastery across Saudi Arabia and globally.',
    icon: 'Presentation',
    image: '/images/service-corporate-mice.jpg',
    highlights: [
      'Venue sourcing & contract negotiation',
      'Turnkey AV, stage & booth production',
      'Executive incentive & team-building trips',
      'Group charter flights & hotel blocks',
      'VIP security & government protocol liaison',
      'Post-event analytical debriefs',
    ],
    inclusions: [
      'Dedicated on-site MICE director',
      'Bilingual executive hostesses',
      'Corporate invoicing & GST/VAT reporting',
      'Comprehensive travel insurance for delegates',
    ],
  },
  {
    slug: 'luxury-cruises',
    title: 'Luxury Cruises & Yacht Charters',
    category: 'bespoke',
    categoryLabel: 'Signature Journeys',
    badge: 'Maritime',
    tagline: 'Set sail on the finest vessels across Mediterranean, Red Sea & Arabian Gulf.',
    description: 'From ultra-luxury SilverSea and Ritz-Carlton Yacht voyages to fully private superyacht and catamaran charters — we handle embarkation, shore excursions, and bespoke onboard experiences.',
    icon: 'Ship',
    image: '/images/service-luxury-cruise.jpg',
    highlights: [
      'Ultra-luxury liners: SilverSea, Ritz Yacht',
      'Private superyacht & catamaran charters',
      'Exclusive shore excursions & private guides',
      'Gourmet dining by Michelin-starred teams',
      'Priority embarkation & butler suites',
      'Pre & post-cruise luxury hotel nights',
    ],
    inclusions: [
      'All-inclusive onboard dining & beverages',
      'Port charges, gratuities & permits',
      'Dedicated voyage concierge on call',
      'Inter-island seaplane transfers',
    ],
  },
  {
    slug: 'visa-documentation',
    title: 'Visas, Permits & Documentation',
    category: 'concierge',
    categoryLabel: 'Concierge & Logistics',
    badge: 'Express',
    tagline: 'Hassle-free visa approvals, IDP issuance & travel insurance for any passport.',
    description: 'Our documentation team handles Saudi eVisas, Schengen, UK & US applications, International Driving Permits, and comprehensive worldwide travel insurance — with real-time WhatsApp updates and door-to-door delivery.',
    icon: 'FileCheck',
    image: '/images/service-visa-passport.jpg',
    highlights: [
      'Saudi Tourist & Business eVisa express',
      'Schengen, UK & US appointment assistance',
      'International Driving Permits (IDP), 150+ countries',
      'Up to $1M international emergency medical cover',
      'Document legalization & sworn translations',
      'Door-to-door passport pickup & delivery',
    ],
    inclusions: [
      'Document audit & rejection risk check',
      'Embassy biometric appointment booking',
      'Instant digital policy issuance',
      'Real-time status updates via WhatsApp',
    ],
  },
  {
    slug: 'flights-hotels',
    title: 'Flights & 5-Star Hotel Reservations',
    category: 'concierge',
    categoryLabel: 'Concierge & Logistics',
    badge: 'Preferred Rates',
    tagline: 'Exclusive airfares, VIP room upgrades & preferred hotel partner benefits.',
    description: 'Access our global airline GDS allotments for first & business cabin priority, and our handpicked luxury resort partners with complimentary room upgrades, hotel credits, and flexible cancellation.',
    icon: 'Plane',
    image: '/images/service-luxury-hotel.jpg',
    highlights: [
      'First & business class seat allotments',
      'Complimentary room upgrades at partner hotels',
      'Daily breakfast & up to $100 hotel credits',
      'Virtuoso & luxury hotel preferred benefits',
      'Emergency re-routing & flexible cancellation',
      'Loyalty program logging & special meals',
    ],
    inclusions: [
      'Direct GDS seat reservation',
      'Early check-in & 4PM late checkout priority',
      'Pre-arrival amenity & preference notes',
      '24/7 emergency itinerary support',
    ],
  },
  {
    slug: 'umrah-wellness',
    title: 'Spiritual Umrah & Wellness Retreats',
    category: 'spiritual',
    categoryLabel: 'Spiritual & Wellness',
    badge: 'Spiritual VIP',
    tagline: 'VIP pilgrimages, heritage Ziyarah tours & holistic luxury wellness sanctuaries.',
    description: 'Combine your sacred Umrah journey with curated cultural heritage stops, or escape to world-class holistic wellness sanctuaries — from thermal Alps retreats to Ayurvedic desert resorts in AlUla.',
    icon: 'Star',
    image: '/images/service-umrah-vip.jpg',
    highlights: [
      '5-Star Haram-view suites in Makkah & Madinah',
      'Private Haramain VIP high-speed train',
      'Historian-led Ziyarah heritage walking tours',
      'Tailored wellness & longevity consultations',
      'Private yoga, sound healing & spa rituals',
      'Organic farm-to-table wellness cuisine',
    ],
    inclusions: [
      'Nusuk platform support & permits',
      'Private luxury transfers between Holy Sites',
      'Spiritual guides with theological knowledge',
      'Full retreat admission & wellness agenda',
    ],
  },
];

export const serviceCategories: { id: ServiceCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Services' },
  { id: 'bespoke', label: 'Signature Journeys' },
  { id: 'aviation', label: 'VIP Mobility' },
  { id: 'corporate', label: 'Corporate & Events' },
  { id: 'concierge', label: 'Concierge & Logistics' },
  { id: 'spiritual', label: 'Spiritual & Wellness' },
];

export interface HomepageService {
  index: string;
  title: string;
  badge: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  highlights: string[];
  responseSpeed: string;
}

export const homepageServices: HomepageService[] = [
  {
    index: '01',
    title: 'Bespoke Travel & Adventures',
    badge: 'BESPOKE JOURNEY',
    category: 'Signature Journeys',
    tagline: 'Tailored itineraries with zero templates & private local master guides.',
    description: 'Bespoke route curation, handpicked 5-star desert sanctuaries, and 24/7 dedicated travel designer support.',
    image: '/images/pkg-alula-story.jpg',
    href: '/services#bespoke-travel',
    highlights: ['100% custom day-by-day itinerary', 'Private VIP local master guides', 'Handpicked boutique & luxury stays'],
    responseSpeed: '< 15 mins concierge desk',
  },
  {
    index: '02',
    title: 'Private Aviation & Chauffeurs',
    badge: 'VIP AVIATION',
    category: 'VIP Mobility',
    tagline: 'Fly on your own schedule with zero lines & direct FBO tarmac access.',
    description: 'Global light, midsize, and heavy jet fleet access with Michelin-standard in-flight dining and tarmac limousine transfer.',
    image: '/images/service-private-jet.jpg',
    href: '/services#private-aviation',
    highlights: ['Direct FBO private terminal boarding', 'Global jet fleet (Light, Heavy, Executive)', 'Maybach & S-Class chauffeur fleet'],
    responseSpeed: 'Immediate VIP desk',
  },
  {
    index: '03',
    title: 'Corporate MICE & Retreats',
    badge: 'CORPORATE MICE',
    category: 'Corporate & Events',
    tagline: 'Turnkey execution for global summits, venue buyouts & group flights.',
    description: 'Executive retreat planning, high-impact incentive travel, turnkey stage production, and dedicated delegate hospitality.',
    image: '/images/service-corporate-mice.jpg',
    href: '/services#corporate-mice',
    highlights: ['Venue sourcing & stage production', 'Group charter flights & hotel blocks', 'Bilingual executive hostesses'],
    responseSpeed: '< 30 mins concierge desk',
  },
  {
    index: '04',
    title: 'Visa, Permits & Documentation',
    badge: 'EXPRESS VISA',
    category: 'Concierge & Logistics',
    tagline: 'Saudi eVisas, Schengen, UK & US express handling — any passport.',
    description: 'Hassle-free approvals, document audits, embassy biometrics liaison, IDP issuance, and travel insurance under one roof.',
    image: '/images/service-visa-passport.jpg',
    href: '/services#visa-documentation',
    highlights: ['Saudi Tourist & Business eVisa', 'International Driving Permits (150+ countries)', 'Up to $1M emergency medical cover'],
    responseSpeed: '< 15 mins concierge desk',
  },
  {
    index: '05',
    title: 'Flights & 5-Star Hotels',
    badge: 'PREFERRED RATES',
    category: 'Concierge & Logistics',
    tagline: 'VIP room upgrades, first-class cabin allotments & flexible cancellation.',
    description: 'Access exclusive corporate airfares, first/business cabin allotments, and handpicked luxury resorts worldwide with complimentary perks.',
    image: '/images/service-luxury-hotel.jpg',
    href: '/services#flights-hotels',
    highlights: ['First & business class seats', 'Complimentary room upgrades', 'Virtuoso preferred hotel benefits'],
    responseSpeed: '< 15 mins concierge desk',
  },
  {
    index: '06',
    title: 'Umrah & Wellness Retreats',
    badge: 'SPIRITUAL VIP',
    category: 'Spiritual & Wellness',
    tagline: '5-Star Haram suites, Haramain VIP trains & holistic wellness sanctuaries.',
    description: 'Seamless Umrah pilgrimages and luxury wellness escapes crafted for body and soul — from AlUla detox retreats to private spa sanctuaries.',
    image: '/images/service-umrah-vip.jpg',
    href: '/services#umrah-wellness',
    highlights: ['5-star Haram-view luxury suites', 'Haramain VIP high-speed train', 'Private yoga & wellness programs'],
    responseSpeed: '< 15 mins concierge desk',
  },
];
