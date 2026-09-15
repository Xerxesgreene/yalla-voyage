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
  videoUrl?: string;
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
    image: '/images/real-hegra-alula.jpg',
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
    ],
  },
  {
    slug: 'diriyah',
    name: 'Diriyah',
    arabicName: 'الدرعية',
    tagline: 'The birthplace of a kingdom, carved in golden clay',
    description:
      'Where Saudi history was written in sun-dried mudbrick and timeless courage. Home to the UNESCO World Heritage jewel At-Turaif, Diriyah blends authentic Najdi architecture, living heritage museums, and world-class dining overlooking Wadi Hanifah.',
    image: '/images/saudi-diriyah.png',
    places: [
      {
        name: 'At-Turaif UNESCO World Heritage',
        description: 'The historic mudbrick citadel and seat of the first Saudi state, showcasing remarkable Najdi royal architecture.',
        type: 'landmark',
        tag: 'Birthplace of Saudi',
      },
      {
        name: 'Bujairi Terrace',
        description: 'World-class Michelin-starred dining nestled directly across the golden illuminated ramparts of At-Turaif.',
        type: 'landmark',
        tag: 'Fine Dining',
      },
      {
        name: 'Wadi Hanifah',
        description: 'A fertile 120-kilometer valley lined with lush palm orchards, scenic canals, and serene sunset promenades.',
        type: 'hidden-gem',
        tag: 'Valley Oasis',
      },
      {
        name: 'Salwa Palace',
        description: 'The monumental 10,000-square-meter multi-story residence of the first Saudi rulers, whispering centuries of history.',
        type: 'landmark',
        tag: 'Royal Citadel',
      },
    ],
  },
  {
    slug: 'jeddah',
    name: 'Jeddah',
    arabicName: 'جدة',
    tagline: 'Stories from the Old City to the Sea',
    description:
      'Jeddah feels like a warm sea breeze — relaxed days, vibrant nights, and memories shaped by the rhythm of the Red Sea. Experience authentic Red Sea trade heritage, traditional coral architecture, and luxury coastlines with Yalla Voyage.',
    image: '/images/saudi-albalad.png',
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
    ],
  },
  {
    slug: 'riyadh',
    name: 'Riyadh',
    arabicName: 'الرياض',
    tagline: 'Where tradition meets ambition',
    description:
      'In Riyadh, every moment moves between tradition and ambition — a capital full of energy, culture, and unforgettable nights. Discover where the Saudi nation began and where its bold future is unfolding.',
    image: '/images/saudi-riyadh.jpg',
    places: [
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
        name: 'Kingdom Centre Sky Bridge',
        description: 'Step onto the Sky Bridge 300 metres above Riyadh and watch the glittering metropolis stretch endlessly beneath you.',
        type: 'landmark',
        tag: 'Skyline Panorama',
      },
      {
        name: 'National Museum of Saudi Arabia',
        description: 'From the earliest civilisations to the birth of a modern nation, the National Museum tells the full story of Saudi Arabia under one roof.',
        type: 'landmark',
        tag: 'National Treasury',
      },
      {
        name: 'Al Murabba Historical Palace',
        description: 'Built by King Abdulaziz himself, Al Murabba Palace is a rare window into the early days of the Saudi state, royal life, and political vision.',
        type: 'hidden-gem',
        tag: 'Royal Residence',
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
    image: '/images/place-prophetsmosque.jpg',
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
        name: 'Souq Suwaiqah',
        description: 'One of Madinah\'s oldest traditional bazaars. For generations, this market has preserved the timeless soul of the city\'s heritage.',
        type: 'hidden-gem',
        tag: 'Traditional Bazaar',
      },
    ],
  },
  {
    slug: 'kaec',
    name: 'King Abdullah Economic City',
    arabicName: 'مدينة الملك عبدالله الاقتصادية',
    tagline: 'Modern coastal living on the pristine Red Sea',
    description:
      'A modern coastal haven featuring championship golf greens, tranquil canal waterways, luxury marinas at Bay La Sun, and pristine coastal promenades along the Red Sea. KAEC blends contemporary leisure with world-class seaside hospitality.',
    image: '/images/real-kaec.jpg',
    places: [
      {
        name: 'Bay La Sun Marina & Yacht Club',
        description: 'Serene waterfront promenade, private yacht berths, waterside fine dining, and soothing sunset cruises across the Red Sea.',
        type: 'landmark',
        tag: 'Luxury Marina',
      },
      {
        name: 'Royal Greens Golf & Country Club',
        description: 'An internationally acclaimed 18-hole championship course framed by pristine Red Sea coastlines and tournament-grade greens.',
        type: 'landmark',
        tag: 'Championship Golf',
      },
      {
        name: 'Juman Park & Canal Walk',
        description: 'Lush family parkland featuring scenic waterfront jogging trails, mini-golf, and tranquil canal boat excursions.',
        type: 'experience',
        tag: 'Canal Promenade',
      },
      {
        name: 'Yam Beach & Watersports',
        description: 'Pristine white sand beach offering clear turquoise waters, private cabanas, kayaking, and Red Sea leisure.',
        type: 'adventure',
        tag: 'Seaside Sanctuary',
      },
    ],
  },
  {
    slug: 'yanbu',
    name: 'Yanbu',
    arabicName: 'ينبع',
    tagline: 'The historic pearl of the Red Sea coast',
    description:
      'Known as the Pearl of the Red Sea, Yanbu offers a captivating contrast between its living 19th-century coral-stone historic district with distinctive wooden rawasheen windows, and its untouched coral reef diving sites in the Seven Sisters archipelago.',
    image: '/images/real-yanbu.jpg',
    places: [
      {
        name: 'Historic Yanbu & Rawasheen Alleys',
        description: 'A beautifully restored 19th-century merchant quarter built of coral stone, adorned with intricate teakwood lattice rawasheen balconies.',
        type: 'landmark',
        tag: 'Coral Heritage',
      },
      {
        name: 'Yanbu Al Bahr Port & Marina',
        description: 'A working maritime port where traditional wooden dhows moor alongside modern fishing fleets and seaside seafood bistros.',
        type: 'landmark',
        tag: 'Red Sea Port',
      },
      {
        name: 'Seven Sisters Coral Reef Barrier',
        description: 'World-renowned barrier reef walls offering pristine scuba diving, sea turtle encounters, and untouched marine biodiversity.',
        type: 'experience',
        tag: 'World-Class Diving',
      },
      {
        name: 'Al Fairouz Waterfront Park',
        description: 'A wide green seaside corniche lined with tropical palms, shaded gazebos, and sweeping sunset lookouts over the Red Sea.',
        type: 'hidden-gem',
        tag: 'Sunset Promenade',
      },
    ],
  },
  {
    slug: 'al-baha',
    name: 'Al Baha',
    arabicName: 'الباحة',
    tagline: 'Emerald terraced ridges and ancient marble citadels',
    description:
      'Perched high in the Sarawat mountain range, Al Baha is blessed with cool breezes, dense juniper forests, dramatic granite escarpments, and the legendary 400-year-old multi-story marble stone village of Dhee Ayn rising above lush banana groves.',
    image: '/images/real-albaha.jpg',
    places: [
      {
        name: 'Dhee Ayn Ancient Marble Village',
        description: 'A 400-year-old multi-story fortress village crafted from polished slate stones atop a striking white marble outcrop, encircled by natural palm and banana oases.',
        type: 'landmark',
        tag: 'UNESCO Tentative',
      },
      {
        name: 'Raghadan Forest Reserve',
        description: 'A cool, cloud-swept high-altitude juniper forest with cliffside walking bridges, fresh mountain air, and dramatic valley views.',
        type: 'experience',
        tag: 'Alpine Sanctuary',
      },
      {
        name: 'Shada Mountains Nature Sanctuary',
        description: 'Extraordinary weathered granite monoliths sheltering prehistoric cave dwellings, wild aromatic herbs, and rare endemic wildlife.',
        type: 'adventure',
        tag: 'Granite Canyons',
      },
      {
        name: 'Al Khulaif & Al Khulaf Fortresses',
        description: 'Historic Islamic defensive stone settlements preserving ancient inscriptions and centuries of southern mountain heritage.',
        type: 'hidden-gem',
        tag: 'Historic Citadels',
      },
    ],
  },
  {
    slug: 'amaala',
    name: 'Amaala',
    arabicName: 'أمالا',
    tagline: 'The ultra-luxury Red Sea Riviera and wellness haven',
    description:
      'The pinnacle of regenerative ultra-luxury and holistic wellness on Saudi Arabia’s pristine north-western coast. Amaala is a world-class coastal sanctuary featuring the Triple Bay yacht club, coral reef restoration, world-leading longevity wellness retreats, and sculptural overwater architecture.',
    image: '/images/real-amaala.jpg',
    places: [
      {
        name: 'Triple Bay Marina & Yacht Club',
        description: 'An architectural icon featuring bespoke superyacht berths, private members’ beach clubs, and Michelin-star waterfront gastronomy.',
        type: 'landmark',
        tag: 'Superyacht Riviera',
      },
      {
        name: 'Marine Life Institute',
        description: 'A futuristic oceanic research and visitor center sculpted like a coral head, pioneering Red Sea coral reef conservation.',
        type: 'experience',
        tag: 'Regenerative Eco',
      },
      {
        name: 'Clinique La Prairie & Miraval Wellness',
        description: 'World-leading longevity clinics offering bespoke holistic therapies, cellular wellness, and restorative desert-sea tranquility.',
        type: 'experience',
        tag: 'Holistic Longevity',
      },
      {
        name: 'Corallium Coastal Atolls',
        description: 'Pristine turquoise lagoons and protected turtle sanctuaries reserved for silent private solar-powered yacht excursions.',
        type: 'hidden-gem',
        tag: 'Pristine Atolls',
      },
    ],
  },
  {
    slug: 'al-ahsa',
    name: 'Al Ahsa',
    arabicName: 'الأحساء',
    tagline: 'The world’s largest date palm oasis and subterranean wonder',
    description:
      'A lush emerald ocean of 2.5 million date palms surrounded by dramatic desert sands. Al Ahsa is a UNESCO World Heritage cultural landscape brimming with natural thermal springs, the carved labyrinthine caves of Mount Al Qarah, and millennia of agricultural mastery.',
    image: '/images/real-alahsa.jpg',
    places: [
      {
        name: 'Al Qarah Mountain Caves',
        description: 'Intricate wind-carved limestone caverns with naturally cooled air, offering dramatic desert views from shaded rocky chambers.',
        type: 'landmark',
        tag: 'UNESCO Caves',
      },
      {
        name: 'Al Ahsa Oasis Date Groves',
        description: 'The largest continuous palm oasis on Earth, fed by over 280 artesian springs cultivating world-famed Khalas dates.',
        type: 'landmark',
        tag: '2.5M Palms',
      },
      {
        name: 'Jawatha Mosque',
        description: 'One of the oldest mosques in the Arabian Peninsula, dating back to the seventh century and the early dawn of Islam.',
        type: 'landmark',
        tag: '7th Century Heritage',
      },
      {
        name: 'Souq Al Qaisariyah',
        description: 'A 19th-century atmospheric vaulted covered bazaar offering Arabian perfumes, artisanal fabrics, and regional teas.',
        type: 'hidden-gem',
        tag: 'Heritage Bazaar',
      },
    ],
  },
  {
    slug: 'abha',
    name: 'Abha & Asir',
    arabicName: 'أبها وعسير',
    tagline: 'Misty peaks, hanging villages, and juniper-clad horizons',
    description:
      'Perched 2,200 meters above sea level in the Sarawat Mountains, Abha is Saudi Arabia’s cool green sanctuary. Discover UNESCO-inscribed gingerbread stone towers in Rijal Almaa, cloud-swept valleys, and centuries of vibrant southern hospitality and floral art.',
    image: '/images/real-rijal-almaa.jpg',
    places: [
      {
        name: 'Rijal Almaa Heritage Village',
        description: 'A breathtaking UNESCO-recognized mountain fortress village built from dark stone, white quartz, and brightly colored shutters.',
        type: 'landmark',
        tag: 'UNESCO Village',
      },
      {
        name: 'Jabal Sawda Cloud Peak',
        description: 'Saudi Arabia\'s highest summit, blanketed in cool alpine fog, lush juniper forests, and mountain cable-car crossings.',
        type: 'landmark',
        tag: 'Highest Peak',
      },
      {
        name: 'Al Habala Hanging Village',
        description: 'A cliffside settlement formerly accessible only by rope ladders, suspended dramatically halfway down a sheer mountain cliff.',
        type: 'hidden-gem',
        tag: 'Hanging Village',
      },
      {
        name: 'Al Basta Historic District',
        description: 'Traditional Asiri mud-and-stone architecture with ancient Ottoman bridges crossing serene mountain streams.',
        type: 'hidden-gem',
        tag: 'Traditional Asir',
      },
    ],
  },
  {
    slug: 'taif',
    name: 'Taif',
    arabicName: 'الطائف',
    tagline: 'The fragrant City of Roses atop the Sarawat escarpment',
    description:
      'Known as the summer capital of Saudi Arabia, Taif is famous for its terraced rose farms yielding the world’s most precious rosewater. Experience serpentine mountain roads, crisp alpine breezes, baboon sanctuaries, and historic royal palaces.',
    image: '/images/real-taif.jpg',
    places: [
      {
        name: 'Taif Rose Terraces & Distilleries',
        description: 'Tour blooming mountain terraces during harvest season and discover the centuries-old copper alembic distillation of damask rose oil.',
        type: 'experience',
        tag: 'Fragrant Heritage',
      },
      {
        name: 'Al Hada Mountain Cable Car',
        description: 'Ride across dramatic hairpin escarpments descending into the historic Kar valley with panoramic vistas.',
        type: 'landmark',
        tag: 'Mountain Vista',
      },
      {
        name: 'Shubra Historic Palace',
        description: 'A grand early 20th-century royal summer palace fusing traditional Hejazi and Italian Romanesque architecture.',
        type: 'landmark',
        tag: 'Royal Palace',
      },
      {
        name: 'Al Shafa Highland Ridges',
        description: 'High-altitude juniper ridges offering cool mountain escapes, outdoor fruit markets, and sunset camping spots.',
        type: 'hidden-gem',
        tag: 'Highland Ridge',
      },
    ],
  },
  {
    slug: 'wadi-al-disah',
    name: 'Wadi Al Disah',
    arabicName: 'وادي الديسة',
    tagline: 'Where nature slows everything down',
    description:
      'Hidden between towering cliffs and flowing palms, Wadi Al Disah is where nature slows everything down and silence becomes part of the journey. A lush, palm-lined canyon framed by dramatic rose-coloured rock formations, gentle streams, and absolute peace.',
    image: '/images/saudi-disah.png',
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
        name: 'Nabataean Rock Inscriptions',
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
