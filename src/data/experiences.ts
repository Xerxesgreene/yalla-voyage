export interface Experience {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'cultural' | 'adventure' | 'culinary';
  image: string;
  location: string;
  duration?: string;
}

export const experiences: Experience[] = [
  {
    slug: 'roots-and-recipes',
    title: 'Roots & Recipes',
    subtitle: 'A Farm-to-Table in AlUla',
    description:
      'Step into a working AlUla oasis farm curated by Yalla Voyage. Watch local culinary masters prepare a heritage breakfast live using fresh orchard harvest, warm Saudi coffee, and organic desert dates.',
    category: 'culinary',
    image: '/images/exp-roots-recipes.jpg',
    location: 'AlUla Oasis Sanctuary',
    duration: '3 Hours',
  },
  {
    slug: 'threads-of-tradition',
    title: 'Threads of Tradition',
    subtitle: 'A Sadu Weaving Workshop',
    description:
      'Sadu weaving is one of Arabia\'s oldest UNESCO-recognized art forms. Through Yalla Voyage\'s private artisan access, sit alongside master Bedouin weavers and decode centuries of geometric heritage.',
    category: 'cultural',
    image: '/images/exp-sadu-weaving.jpg',
    location: 'Jeddah / AlUla',
    duration: '2.5 Hours',
  },
  {
    slug: 'palm-leaf-weaving',
    title: 'From Nature',
    subtitle: 'A Palm Leaf Weaving Workshop',
    description:
      'From ancient date palms to delicate woven heirlooms. Join a master artisan in an exclusive Yalla Voyage private workshop and craft your own authentic Saudi keepsake.',
    category: 'cultural',
    image: '/images/exp-palm-weaving.jpg',
    location: 'Madinah / AlUla',
    duration: '2 Hours',
  },
  {
    slug: 'bedouin-paths',
    title: 'Bedouin Paths',
    subtitle: 'Desert Campfire & Storytelling',
    description:
      'Gather around a crackling starlit fire deep in AlUla\'s sandstone canyon with Yalla Voyage. Savor traditional spiced tea, live music, and generational desert folklore under one of the clearest night skies on Earth.',
    category: 'culinary',
    image: '/images/exp-bedouin-campfire.jpg',
    location: 'AlUla Desert Sands',
    duration: 'Evening Experience',
  },
  {
    slug: 'alula-doors',
    title: 'AlUla Doors',
    subtitle: 'Painted by You',
    description:
      'Every ancient door here whispers secrets — now it\'s time to paint yours. Guided by legacy patterns passed down through generations, breathe color into a wooden canvas and take home a tangible piece of AlUla\'s soul.',
    category: 'cultural',
    image: '/images/saudi-hegra.png',
    location: 'AlUla Old Town',
    duration: '2 Hours',
  },
  {
    slug: 'the-hijazi-way',
    title: 'The Hijazi Way',
    subtitle: 'A Family Home Dining Experience',
    description:
      'Step into the warmth of a local family home where doors and hearts are open. Dress in traditional attire, help prepare multi-generational family recipes, and gather around the table for true Saudi hospitality. This isn\'t a tour — it\'s family.',
    category: 'culinary',
    image: '/images/saudi-albalad.png',
    location: 'Jeddah Al Balad',
    duration: '3.5 Hours',
  },
  {
    slug: 'alula-horseback',
    title: 'AlUla on Horseback',
    subtitle: 'Desert Canyon Riding Expedition',
    description:
      'Ride through a landscape that has welcomed caravans, kings, and explorers for thousands of years. Rose-coloured cliffs rise on either side as the desert stretches endlessly ahead. Pure freedom only AlUla and Yalla Voyage can offer.',
    category: 'adventure',
    image: '/images/saudi-hegra.png',
    location: 'AlUla Canyons',
    duration: 'Half Day',
  },
  {
    slug: 'jeddah-underwater',
    title: 'Jeddah Underwater',
    subtitle: 'Red Sea Diving & Reef Exploration',
    description:
      'Dive into the Red Sea from Jeddah. Explore pristine coral reefs, swim with marine life, try scuba diving, snorkeling, or reel in your catch on a private fishing boat with Yalla Voyage expert guides.',
    category: 'adventure',
    image: '/images/saudi-redsea.jpg',
    location: 'Red Sea Coast',
    duration: 'Full Day',
  },
  {
    slug: 'hike-the-moon',
    title: 'Hike the Moon',
    subtitle: 'Moon Mountain Trekking in Jeddah',
    description:
      'Some landscapes don\'t feel like they belong to this world — Moon Mountain is one of them. Every step through its sculpted terrain pulls you into something raw, vast, and quietly extraordinary.',
    category: 'adventure',
    image: '/images/saudi-albalad.png',
    location: 'Jeddah Desert',
    duration: 'Half Day',
  },
  {
    slug: 'edge-of-the-world',
    title: 'The Edge of the World',
    subtitle: 'Riyadh Cliff & Cave Expedition',
    description:
      'Trek to the Edge of the World and feel the ground give way to one of Arabia\'s most breathtaking 300m cliff vistas. Venture underground through Maidens Batcave for a spelunking adventure followed by a desert camel trail.',
    category: 'adventure',
    image: '/images/saudi-diriyah.png',
    location: 'Riyadh Escarpment',
    duration: 'Full Day',
  },
  {
    slug: 'red-sand-dunes',
    title: 'Red Sand Dunes',
    subtitle: 'Riyadh Crimson Sands Quad & Safari',
    description:
      'Where the desert glows crimson red under the Arabian sun. Ride quad bikes across towering sand waves and experience sunset tea high above the dunes with Yalla Voyage.',
    category: 'adventure',
    image: '/images/saudi-diriyah.png',
    location: 'Riyadh Desert',
    duration: 'Half Day',
  },
];
