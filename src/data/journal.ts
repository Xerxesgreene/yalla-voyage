export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  readTime: string;
}

export const journalArticles: JournalArticle[] = [
  {
    slug: 'guide-to-alula',
    title: 'A Guide to AlUla — Where Ancient Stories Meet Quiet Desert Skies',
    excerpt:
      'AlUla is not just a destination; it\'s a feeling you carry home with you. From Hegra\'s ancient tombs to Elephant Rock\'s wind-sculpted majesty, discover a land where 200,000 years of human history unfold beneath the clearest skies on earth.',
    category: 'Destination Guide',
    image: '/images/saudi-alula.jpg',
    readTime: '8 min read',
  },
  {
    slug: 'stories-from-jeddah',
    title: 'Stories from Jeddah — From Coral Stone Alleys to the Red Sea',
    excerpt:
      'Jeddah feels like a warm sea breeze. Wander through Al Balad\'s centuries-old alleys, discover the floating mosque, and dive into teamLab Borderless — where the historic and the cutting-edge live side by side.',
    category: 'City Stories',
    image: '/images/saudi-jeddah.jpg',
    readTime: '6 min read',
  },
  {
    slug: 'riyadh-then-and-now',
    title: 'Riyadh Then & Now — From Fortress to Skyline',
    excerpt:
      'From Al Masmak Fortress where a nation was born, to the Sky Bridge 300 metres above the glittering city — Riyadh is where tradition and ambition exist in extraordinary harmony.',
    category: 'Heritage',
    image: '/images/saudi-riyadh.jpg',
    readTime: '7 min read',
  },
  {
    slug: 'sacred-roads-of-madinah',
    title: 'Sacred Roads of Madinah — A Journey of the Heart',
    excerpt:
      'A city that touches the heart before the eyes. Walk the scenic trail from the Prophet\'s Mosque to Quba, discover hidden souqs, and experience the profound peace that has drawn pilgrims for centuries.',
    category: 'Spiritual Travel',
    image: '/images/service-umrah-vip.jpg',
    readTime: '5 min read',
  },
  {
    slug: 'wadi-al-disah',
    title: 'Wadi Al Disah — The Valley Where Silence Speaks',
    excerpt:
      'Hidden between towering cliffs and flowing palms, Wadi Al Disah is where nature slows everything down. Rose-coloured rock formations, gentle streams, and a silence so deep the rest of the world simply doesn\'t exist.',
    category: 'Nature',
    image: '/images/saudi-disah.png',
    readTime: '4 min read',
  },
  {
    slug: 'saudi-local-experiences',
    title: 'Living Heritage — Saudi Experiences That Stay With You',
    excerpt:
      'From farm-to-table breakfasts in AlUla to Sadu weaving workshops, Bedouin campfire nights, and horseback rides through ancient valleys — these are experiences that transform travel into belonging.',
    category: 'Experiences',
    image: '/images/exp-roots-recipes.jpg',
    readTime: '9 min read',
  },
];
