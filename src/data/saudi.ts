export interface SaudiPlace {
  name: string;
  description: string;
  type: 'landmark' | 'hidden-gem' | 'experience' | 'adventure';
  tag?: string;
}

export interface SaudiDestination {
  slug: string;
  name: string;
  arabicName: string;
  tagline: string;
  description: string;
  image: string;
  videoUrl: string;
  places: SaudiPlace[];
}

export const saudiDestinations: SaudiDestination[] = [
  {
    slug: 'alula',
    name: 'AlUla',
    arabicName: 'العلا',
    tagline: 'Where ancient stories meet quiet desert skies',
    description:
      'AlUla is not just a destination; it is a feeling you carry home with you. Guided exclusively by Yalla Voyage local experts, explore Saudi Arabia\'s first UNESCO World Heritage Site, where ancient Nabataean tombs whisper stories carved into timeless sandstone.',
    image: '/images/saudi-hegra.png',
    videoUrl: 'https://cdn.pixabay.com/video/2024/02/23/201535-915411922_large.mp4',
    places: [
      {
        name: 'Hegra (UNESCO World Heritage Site)',
        description: 'Walk through Saudi Arabia\'s first UNESCO World Heritage Site, where 110 carved tombs whisper stories of ancient Nabataean kingdoms written in stone.',
        type: 'landmark',
        tag: 'UNESCO Heritage',
      },
      {
        name: 'The Old Town',
        description: 'Inhabited for 900 years, this mud-brick maze was a living, breathing community built directly from the desert earth.',
        type: 'landmark',
        tag: '900-Year Heritage',
      },
      {
        name: 'Elephant Rock (Jabal AlFil)',
        description: 'A 52-meter sandstone giant shaped by millions of years of wind — nature\'s most breathtaking accidental masterpiece.',
        type: 'landmark',
        tag: 'Natural Wonder',
      },
      {
        name: 'AlUla Oasis',
        description: 'Over 2,000 years of uninterrupted farming, 180 date palm varieties, and ancient falaj water channels still flowing beneath your feet.',
        type: 'landmark',
        tag: 'Living Oasis',
      },
      {
        name: 'Dadan & Jabal Ikmah',
        description: 'Hundreds of ancient inscriptions in forgotten scripts. The oldest open-air library the Arabian Peninsula has ever known.',
        type: 'hidden-gem',
        tag: 'Ancient Library',
      },
      {
        name: 'Shalal Mountain',
        description: 'Nestled quietly between the rocks, Shalal offers more than a view; it offers a moment of pure desert silence just for you.',
        type: 'hidden-gem',
        tag: 'Secret Haven',
      },
      {
        name: 'Harrat Viewpoint',
        description: 'Stand on one of Arabia\'s largest volcanic fields; raw, dramatic, and shaped by eruptions millions of years ago.',
        type: 'hidden-gem',
        tag: 'Volcanic Panorama',
      },
      {
        name: 'Arch Mountain (Jabal Al Qaws)',
        description: 'Millions of years of erosion created this perfect natural sandstone arch, most breathtaking at golden sunrise or sunset with Yalla Voyage.',
        type: 'hidden-gem',
        tag: 'Sunrise Spot',
      },
      {
        name: 'Stargazing in the Desert',
        description: 'As the desert cools, AlUla\'s night magic begins. Lie back on ancient sands to watch the Milky Way stretch across one of the clearest skies on earth.',
        type: 'experience',
        tag: 'Night Canopy',
      },
    ],
  },
  {
    slug: 'jeddah',
    name: 'Jeddah',
    arabicName: 'جدة',
    tagline: 'Stories from the Old City to the Sea',
    description:
      'Jeddah feels like a warm sea breeze — relaxed days, vibrant nights, and memories shaped by the rhythm of the Red Sea. Experience authentic Red Sea trade heritage and ultra-luxury coastlines with Yalla Voyage.',
    image: '/images/saudi-albalad.png',
    videoUrl: 'https://cdn.pixabay.com/video/2020/07/30/45765-444621929_large.mp4',
    places: [
      {
        name: 'Al Balad Historical Town',
        description: 'Jeddah\'s soul wrapped in coral stone. Wander through centuries-old alleys, towering Rawasheen wooden windows, and merchant houses whispering tales of Red Sea trade routes.',
        type: 'landmark',
        tag: 'UNESCO Coral Town',
      },
      {
        name: 'Souq Al Balad',
        description: 'A sensory feast in the old city. Overflowing stalls of spices, frankincense, and gold draw you into a living bazaar where tradition and commerce dance.',
        type: 'landmark',
        tag: 'Heritage Bazaar',
      },
      {
        name: 'Al Rahma Floating Mosque',
        description: 'A vision of serenity rising from the waves. Built on stilts, this iconic mosque appears to float at high tide, beautifully blending spiritual grace with the sea.',
        type: 'landmark',
        tag: 'Architectural Marvel',
      },
      {
        name: 'Masjid Al-Shafei',
        description: 'One of Jeddah\'s oldest and most venerated mosques standing at the heart of Al-Balad. Its ancient walls carry centuries of devotion.',
        type: 'landmark',
        tag: '7th Century Sacred',
      },
      {
        name: 'Jeddah Yacht Club & Marina',
        description: 'Where the city slows down, the Red Sea breeze takes over, and every moment feels tailored just for you.',
        type: 'landmark',
        tag: 'Luxury Marina',
      },
      {
        name: 'Al-Tayebat Museum',
        description: 'Across 300 rooms, this privately curated marvel houses a massive collection of Islamic artifacts, regional costumes, and ancient manuscripts.',
        type: 'hidden-gem',
        tag: '300-Room Treasury',
      },
      {
        name: 'TeamLab Borderless Jeddah',
        description: 'The Middle East\'s first teamLab Borderless. Step into an ever-changing world where digital art flows freely across immersive spaces.',
        type: 'hidden-gem',
        tag: 'Digital Art',
      },
      {
        name: 'Red Sea Museum',
        description: 'Housed in Al-Balad\'s historic Bab Al-Bunt building, featuring 23 halls tracing centuries of human connection along the Red Sea.',
        type: 'hidden-gem',
        tag: 'Pilgrim History',
      },
    ],
  },
  {
    slug: 'riyadh',
    name: 'Riyadh',
    arabicName: 'الرياض',
    tagline: 'Where tradition meets ambition',
    description:
      'In Riyadh, every moment moves between tradition and ambition — a capital full of energy, culture, and unforgettable nights. Discover where the Saudi nation began with Yalla Voyage.',
    image: '/images/saudi-diriyah.png',
    videoUrl: 'https://cdn.pixabay.com/video/2022/06/03/119482-716012395_large.mp4',
    places: [
      {
        name: 'Diriyah & At-Turaif',
        description: 'Two names, one soul: Diriyah is where Saudi Arabia\'s story was written in clay and courage, while Turaif — a UNESCO-crowned jewel of Najdi architecture — whispers royal secrets.',
        type: 'landmark',
        tag: 'Birthplace of Saudi',
      },
      {
        name: 'Al Masmak Fortress',
        description: 'Step into the moment that changed Arabia forever, where thick clay walls and legendary stories bring the founding of a nation to life.',
        type: 'landmark',
        tag: 'Founding Citadel',
      },
      {
        name: 'Souq Al Zal',
        description: 'Lose yourself in the charm of one of Riyadh\'s most beloved traditional markets, where antique daggers, carpet auctions, and incense fill every lane.',
        type: 'landmark',
        tag: 'Vintage Marketplace',
      },
      {
        name: 'National Museum of Saudi Arabia',
        description: 'From the earliest civilisations to the birth of a modern nation, the National Museum tells the full story of Saudi Arabia under one roof.',
        type: 'landmark',
        tag: 'National Treasury',
      },
      {
        name: 'Ushaiqer Heritage Village',
        description: 'Hidden in Saudi Arabia\'s heart, this beautifully preserved mud-brick village is a living testament to Najdi life. Explore with a Yalla Voyage local guide.',
        type: 'hidden-gem',
        tag: 'Mud-Brick Living',
      },
      {
        name: 'Al Murabba Historical Palace',
        description: 'Built by King Abdulaziz himself, Al Murabba Palace is a rare window into the early days of the Saudi state, royal life, and political vision.',
        type: 'hidden-gem',
        tag: 'Royal Residence',
      },
      {
        name: 'Kingdom Centre Sky Bridge',
        description: 'Step onto the Sky Bridge 300 metres above Riyadh and watch the glittering metropolis stretch endlessly beneath you.',
        type: 'landmark',
        tag: 'Skyline Panorama',
      },
      {
        name: 'Bujairi Terrace',
        description: 'Nestled at the foot of UNESCO-listed Turaif — where world-class dining meets golden mud-brick views of Arabia\'s birthplace.',
        type: 'hidden-gem',
        tag: 'Heritage Dining',
      },
    ],
  },
  {
    slug: 'madinah',
    name: 'Madinah',
    arabicName: 'المدينة المنورة',
    tagline: 'Where peace and timeless beauty come together',
    description:
      'A city that touches the heart before the eyes. Madinah is where peace, spirituality, and timeless beauty unite. Yalla Voyage facilitates serene, unhurried cultural journeys through the sacred roads.',
    image: '/images/saudi-madinah.jpg',
    videoUrl: 'https://cdn.pixabay.com/video/2021/10/12/91429-634076599_large.mp4',
    places: [
      {
        name: 'Al Masjid An Nabawi',
        description: 'The Prophet\'s Mosque. The heart of Madinah. One of the most sacred places on earth — where millions gather in prayer, love, and profound tranquility.',
        type: 'landmark',
        tag: 'Sacred Heart',
      },
      {
        name: 'Quba Mosque & Trail',
        description: 'The first mosque in Islam. Connects to the Prophet\'s Mosque via a scenic 3km pedestrian walkway lined with local coffee houses and dates.',
        type: 'landmark',
        tag: 'Historic Walkway',
      },
      {
        name: 'Mount Uhud & Battlefield',
        description: 'A silent witness to one of Islam\'s defining moments. Standing at its base is to feel the weight of sacrifice and devotion in every stone.',
        type: 'landmark',
        tag: 'Sacred History',
      },
      {
        name: 'Sayed Al Shouhada Mosque',
        description: 'Where the martyrs rest in eternal peace — a solemn site carrying deep historical resonance.',
        type: 'landmark',
        tag: 'Remembrance Site',
      },
      {
        name: 'Al Tabbakha Market (Chef\'s Market)',
        description: 'Where 60 restaurants and 40 years of culinary flavor unite. Madinah\'s ultimate food destination serving authentic local dishes.',
        type: 'hidden-gem',
        tag: 'Culinary Hub',
      },
      {
        name: 'Al Hayy Local Quarters',
        description: 'Madinah\'s authentic heartbeat. These warm, unhurried neighbourhood streets offer local flavors and everyday Arabian hospitality.',
        type: 'hidden-gem',
        tag: 'Local Living',
      },
      {
        name: 'Souq Suwaiqah',
        description: 'One of Madinah\'s oldest traditional bazaars. For generations, this market has preserved the timeless soul of the city\'s heritage.',
        type: 'hidden-gem',
        tag: 'Traditional Bazaar',
      },
    ],
  },
  {
    slug: 'wadi-al-disah',
    name: 'Wadi Al Disah',
    arabicName: 'وادي الديسة',
    tagline: 'Where nature slows everything down',
    description:
      'Hidden between towering cliffs and flowing palms in Tabuk, Wadi Al Disah is where nature slows everything down and silence becomes part of the journey. A lush, palm-lined canyon framed by dramatic rose-coloured rock formations, gentle streams, and absolute peace.',
    image: '/images/saudi-disah.png',
    videoUrl: 'https://cdn.pixabay.com/video/2023/08/22/177547-856588498_large.mp4',
    places: [
      {
        name: 'Rose-Coloured Canyon Cliffs',
        description: 'Towering 300-meter cliffs in hues of rose and amber, sculpted by wind over millions of years into majestic natural cathedrals.',
        type: 'landmark',
        tag: 'Rose Canyon',
      },
      {
        name: 'Palm River Valley',
        description: 'Lush natural date palm groves nourished by freshwater springs flowing continuously through the desert canyon floor.',
        type: 'landmark',
        tag: 'Fresh Spring Valley',
      },
      {
        name: 'Nabataean Rock Tombs & Inscriptions',
        description: 'Forgotten inscriptions and carved rock niches hidden high along the canyon walls, revealing ancient Nabataean trade routes.',
        type: 'hidden-gem',
        tag: 'Hidden Ruins',
      },
    ],
  },
  {
    slug: 'red-sea',
    name: 'The Red Sea Project',
    arabicName: 'البحر الأحمر',
    tagline: 'Where pristine heritage meets vibrant reef',
    description:
      'Where pristine Saudi heritage meets the world\'s most vibrant untouched barrier reef. A sanctuary of absolute serenity featuring ultra-luxury overwater villas, regenerative eco-resorts, and crystal clear waters — curated by Yalla Voyage.',
    image: '/images/saudi-redsea.jpg',
    videoUrl: 'https://cdn.pixabay.com/video/2020/10/23/53035-473810705_large.mp4',
    places: [
      {
        name: 'Untouched Coral Reef Barrier',
        description: 'Dive into one of the world\'s most biodiverse coral systems, swimming alongside sea turtles, rays, and thriving marine life.',
        type: 'experience',
        tag: 'Pristine Diving',
      },
      {
        name: 'Ultra-Luxury Overwater Resorts',
        description: 'World-renowned eco-conscious sanctuaries designed to blend seamlessly into island archipelagos and turquoise lagoons.',
        type: 'landmark',
        tag: 'Sustainable Luxury',
      },
      {
        name: 'Starlight Island Sanctuaries',
        description: 'Zero light pollution islands offering private stargazing, wellness retreats, and bespoke yachting expeditions.',
        type: 'hidden-gem',
        tag: 'Private Islands',
      },
    ],
  },
];
