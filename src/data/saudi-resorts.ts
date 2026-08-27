export interface SaudiResort {
  name: string;
  location: string;
  tagline: string;
  description: string;
  badge?: string;
}

export const saudiResorts: SaudiResort[] = [
  {
    name: 'Our Habitas AlUla',
    location: 'Ashar Valley, AlUla',
    tagline: 'Sustainable Eco-Luxury Sanctuary',
    description: 'Minimalist luxury villas integrated seamlessly into the canyon rocks of Ashar Valley.',
    badge: 'Eco Sanctuary',
  },
  {
    name: 'Banyan Tree AlUla',
    location: 'Ashar Valley, AlUla',
    tagline: 'All-Villa Desert Haven',
    description: 'An elegant villa resort framed by ancient rock formations, offering private pools and world-class spa tranquility.',
    badge: 'Ultra Luxury',
  },
  {
    name: 'The Chedi, Hegra',
    location: 'Hegra Heritage Site, AlUla',
    tagline: 'Boutique Resort at Saudi\'s First UNESCO Site',
    description: 'Restored historic railway station transformed into an exclusive sanctuary right beside the ancient tombs of Hegra.',
    badge: 'UNESCO Heritage',
  },
  {
    name: 'Dar Tantora at Old Town',
    location: 'AlUla Old Town',
    tagline: 'Mud-Brick Heritage Hotel',
    description: 'Hand-restored traditional mud-brick hotel inside AlUla Old Town, powered by candlelit charm and authentic Saudi hospitality.',
    badge: 'Living Heritage',
  },
  {
    name: 'Caravan by Habitas',
    location: 'Ashar Valley, AlUla',
    tagline: 'Nomadic Desert Airstream Glamping',
    description: 'A stylish airstream caravan experience under the AlUla star canopy, complete with outdoor cinema and campfire circles.',
    badge: 'Glamping',
  },
  {
    name: 'Shaden Resort',
    location: 'AlUla Canyons',
    tagline: 'Dramatic Canyon Nesting',
    description: 'Sprawling villas and luxury rooms surrounded by towering sandstone cliffs in a peaceful desert basin.',
    badge: 'Desert Oasis',
  },
  {
    name: 'Cloud 7',
    location: 'AlUla',
    tagline: 'Modern Creative Sanctuary',
    description: 'Vibrant modern hub combining contemporary comfort with local culture for curious digital nomads and explorers.',
    badge: 'Contemporary',
  },
];

export const saudiFleet = [
  {
    title: 'VIP Airport Pick-Up & Drop-Off',
    description: 'Start and end your Saudi journey with complete comfort. Professional chauffeurs, seamless terminal assistance, and 24/7 punctual service.',
  },
  {
    title: 'Modern Transportation Fleet',
    description: 'From executive GMC Yukon / Suburban SUVs to Mercedes V-Class and VIP luxury coaches — meticulously maintained for smooth desert and city travel.',
  },
  {
    title: 'Local Saudi Chauffeurs & Guides',
    description: 'Experienced drivers with multi-generational knowledge of AlUla, Riyadh, Jeddah, and Madinah roads.',
  },
];
