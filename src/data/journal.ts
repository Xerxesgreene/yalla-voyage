export interface JournalArticle {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: 'Saudi Arabia' | 'Italy' | 'Dubai' | 'Russia' | 'Switzerland' | 'Japan' | 'Maldives' | 'Europe' | 'Turkey';
  destination: string;
  image: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    location: string;
  };
  featured?: boolean;
  pullQuote?: string;
  content: string[];
  keyHighlights: string[];
}

export const journalArticles: JournalArticle[] = [
  {
    slug: 'switzerland-alps-st-moritz',
    title: 'Glacial Grandeur — Private Chalets and Alpine Solitude in St. Moritz',
    subtitle: 'From pristine powder runs on the Corviglia to fireside fondue banquets in hand-hewn Engadin sanctuaries.',
    excerpt:
      'High in the Swiss Engadin valley, St. Moritz remains the gold standard of alpine exclusivity. Sleep in a private timber chalet with panoramic mountain vistas, soak in cedar hot tubs beneath starlit peaks, and ski untracked glacier slopes.',
    category: 'Switzerland',
    destination: 'St. Moritz & Engadin, Switzerland',
    image: '/images/dest-switzerland.jpg',
    readTime: '7 min read',
    date: 'Winter 2026',
    author: {
      name: 'Marc Oberhauser',
      role: 'Alpine Expedition Lead',
      location: 'Zurich & St. Moritz',
    },
    featured: false,
    pullQuote: 'There is a sacred quiet when fresh snow falls over the Engadin peaks at twilight—broken only by the crackle of pine logs in an open hearth.',
    content: [
      'For over a century, St. Moritz has held court as the birthplace of winter alpine luxury. Perched at 1,800 meters beneath sapphire skies that claim over 300 days of sunshine annually, this high valley balances aristocratic tradition with breathtaking natural majesty.',
      'Our travelers arrive via private helicopter charter from Zurich or Milan, landing directly at the private helipad of an exclusive multi-bedroom alpine sanctuary. Heated stone floors, hand-carved Swiss pine timbering, and panoramic floor-to-ceiling glass frame the snow-covered peaks of the Corviglia and Corvatsch.',
      'By day, a private Olympic ski instructor guides you across secluded off-piste powder bowls before the public lifts reach full capacity. Midday dining takes place in a historic 16th-century mountain refuge, where truffle raclette and artisanal Bündnerfleisch are served paired with rare Valais vintages.',
      'Evenings invite complete restoration: private cedar onsen hot tubs steaming in sub-zero alpine air, followed by bespoke five-course dinners curated by private chefs in the warmth of your chalet.',
    ],
    keyHighlights: [
      'Helicopter transfer from Zurich Airport directly to private chalet helipad',
      'Exclusive buyout of a luxury ski-in / ski-out Engadin chalet',
      'Personal private ski master and avalanche guide for off-piste descents',
      'Fireside gourmet dining and private vintage sommelier tastings',
    ],
  },
  {
    slug: 'italy-amalfi-riviera-yacht',
    title: 'Cliffside Reverie — Navigating the Amalfi Coast by Private Riva Yacht',
    subtitle: 'From Positano’s pastel cliff cascades to hidden Capri sea grottoes: the quintessential Mediterranean voyage.',
    excerpt:
      'The Amalfi Coast is a timeless siren song. Board a handcrafted mahogany Riva Aquarama yacht, cruise past sheer limestone cliffs dripping with bougainvillea, and dine in secluded sea coves accessible only by water.',
    category: 'Italy',
    destination: 'Amalfi Coast & Capri, Italy',
    image: '/images/dest-italy.jpg',
    readTime: '7 min read',
    date: 'Summer 2026',
    author: {
      name: 'Matteo Bellini',
      role: 'Mediterranean Fleet Director',
      location: 'Capri & Naples',
    },
    featured: true,
    pullQuote: 'To view Positano from the varnished teak deck of a Riva yacht as sunset paints the cliffs in shades of amber and apricot is sheer Mediterranean poetry.',
    content: [
      'The divine beauty of the Amalfi Coast cannot truly be felt from the congested cliffside roadways—it belongs entirely to the sea. The Tyrrhenian waters, impossibly cobalt and tranquil, lap against dramatic volcanic palisades where lemon orchards cascade down steep terraces.',
      'Our guests depart from the private marina at Amalfi aboard a bespoke Riva 38 Rivamare, gliding past ancient Saracen watchtowers toward the Faraglioni rock formations of Capri. With a private skipper and local maritime historian at the helm, you slip into hidden turquoise sea caves before the tourist catamarans appear on the horizon.',
      'Lunch is served at a discreet family-owned trattoria nestled in a secluded pebble cove near Nerano, where spaghetti alla nerano and freshly harvested sea urchins are served paired with crisp Greco di Tufo wines. The day concludes with an exclusive suite check-in at a cliffside villa in Ravello, 1,000 feet above the shimmering sea.',
    ],
    keyHighlights: [
      'Private charter on a handcrafted Riva 38 Rivamare with skipper',
      'Exclusive access to private sea caves and the Faraglioni of Capri',
      'Helicopter transfer from Naples Capodichino directly to Ravello',
      'Reserved cliffside terrace suite at a legendary 5-star Ravello palazzo',
    ],
  },
  {
    slug: 'dubai-ultra-luxury-caravan',
    title: 'Skyline to Sand Dunes — Penthouse Living and Private Royal Caravans in Dubai',
    subtitle: 'Where futuristic architectural ambition meets the timeless soul of the Arabian desert.',
    excerpt:
      'Dubai is an architectural marvel that continuously rewrites the rulebook of luxury. Experience panoramic skyline penthouses with private infinity pools, followed by an elite desert conservation retreat under velvet night skies.',
    category: 'Dubai',
    destination: 'Dubai & Arabian Desert, UAE',
    image: '/images/dest-uae.jpg',
    readTime: '6 min read',
    date: 'Autumn 2026',
    author: {
      name: 'Rashid Al-Maktoum',
      role: 'Emirates & Gulf Lead Curator',
      location: 'Dubai & Abu Dhabi',
    },
    featured: false,
    pullQuote: 'Dubai bridges tomorrow and yesterday with astonishing grace—from 800-meter architectural spires to the primordial peace of golden desert dunes.',
    content: [
      'Few places on earth contrast bold futurism with ancient desert tranquility quite like the United Arab Emirates. One hour you are sipping single-origin coffee on a private penthouse terrace overlooking the Burj Khalifa and the Palm Jumeirah; the next, you are cruising across the virgin dunes of the Dubai Desert Conservation Reserve.',
      'Our travelers enjoy priority access to Dubai’s most guarded sanctums: private museum buyouts, yacht charters along the Dubai Canal, and exclusive shopping salons with master jewelers. When the desert calls, our team arranges a private convoy of vintage 1950s Land Rovers led by falconry masters.',
      'Nightfall in the private royal desert camp unfolds around fragrant agarwood braziers. While a private Emirati chef prepares seven-hour slow-cooked lamb ouzi and camel milk saffron desserts, stargazers admire planetary rings through high-powered observatory optics.',
    ],
    keyHighlights: [
      'Private sky villa stay with panoramic views of the Arabian Gulf',
      'VIP sunset yacht cruise along the Dubai Marina and Atlantis The Royal',
      'Exclusive desert reserve buyout with royal falconry and majlis dining',
      'Personal chauffeur and concierge liaison in a custom Rolls-Royce Phantom',
    ],
  },
  {
    slug: 'russia-imperial-winter-hermitage',
    title: 'The Imperial Winter — Private Hermitage Nights and Gilded Palaces of St. Petersburg',
    subtitle: 'Experience the grandeur of the Tsars: private palace ballroom concerts, troika rides, and snow-draped canal romance.',
    excerpt:
      'There is no romance quite like St. Petersburg in the depth of winter. Walk the snow-dusted granite embankments of the frozen Neva, tour the State Hermitage Museum after closing hours in complete privacy, and dine in imperial salons.',
    category: 'Russia',
    destination: 'St. Petersburg & Moscow, Russia',
    image: '/images/dest-russia.jpg',
    readTime: '8 min read',
    date: 'Winter 2026',
    author: {
      name: 'Elena Volkova',
      role: 'Eurasian Art & Heritage Director',
      location: 'St. Petersburg',
    },
    featured: false,
    pullQuote: 'To wander through the Winter Palace’s Jordan Staircase and Malachite Room after hours with only the curator’s footsteps echoing is an unforgettable brush with imperial history.',
    content: [
      'Peter the Great envisioned St. Petersburg as his window to Europe, carved from northern marshes with sheer imperial will. In winter, when a pristine blanket of snow silences the city and amber gas lamps reflect off frozen canals, St. Petersburg reveals its truest, most magnificent character.',
      'Our guests experience the State Hermitage Museum as no ordinary visitor can: after public hours, under the soft glow of gilded chandeliers, an exclusive tour guided by the museum’s senior conservator leads you through Da Vinci, Rembrandt, and the Peacock Clock in absolute silence.',
      'By day, private horse-drawn troikas whisk you through the snow-laden birch forests of Pavlovsk and Tsarskoye Selo to view the reconstructed Amber Room. In the evening, attend a private box performance at the Mariinsky Theatre followed by imperial caviar tastings in a historic 19th-century aristocratic mansion.',
    ],
    keyHighlights: [
      'Exclusive after-hours private access to the State Hermitage Museum',
      'VIP royal box seating at the Mariinsky Theatre for premier ballets',
      'Traditional horse-drawn troika excursion across imperial country estates',
      'Private Beluga caviar and artisanal vodka masterclass with a master sommelier',
    ],
  },
  {
    slug: 'guide-to-alula',
    title: 'A Guide to AlUla — Where Ancient Stories Meet Quiet Desert Skies',
    subtitle: 'From Hegra’s UNESCO tombs to starlit sandstone canyons: an insider briefing for the discerning wanderer.',
    excerpt:
      'AlUla is not just a destination; it’s a feeling you carry home with you. From Hegra’s ancient tombs to Elephant Rock’s wind-sculpted majesty, discover a land where 200,000 years of human history unfold beneath the clearest skies on earth.',
    category: 'Saudi Arabia',
    destination: 'AlUla, Saudi Arabia',
    image: '/images/saudi-alula.jpg',
    readTime: '8 min read',
    date: 'Autumn 2026',
    author: {
      name: 'Tariq Al-Mansoor',
      role: 'Head of Cultural Curation',
      location: 'AlUla & Riyadh',
    },
    featured: false,
    pullQuote: 'In AlUla, the desert does not conceal its memories; it carves them directly into monumental rose-gold granite.',
    content: [
      'There is a specific stillness that arrives over the Ashar Valley at twilight. As the afternoon heat surrenders to the cool mountain breeze, the colossal sandstone monoliths shift from burnt sienna to deep plum, casting shadows that have lengthened across this sand for over two hundred millennia.',
      'To stand before the Tomb of Lihyan son of Kuza at Hegra without crowds—arranged through our private off-hours access—is to experience archaeology as intimate contemplation. Here, the Nabataeans carved their eternal residences into bare rock with such surgical symmetry that their chisel marks remain visible after two thousand years of desert wind.',
      'Beyond the monuments lies the hidden oasis: eight million date palms shaded by citrus groves and ancient aqueducts. We recommend reserving an afternoon at a secluded desert tented sanctuary, where local rawi (traditional storytellers) recount the trade journeys that once tied Arabia to Rome, India, and the Levant over cardamom-infused Gahwa.',
      'Nightfall brings the crowning spectacle. With minimal ambient light, AlUla’s skies reveal the Milky Way in high-definition clarity. Paired with a telescope and an astrophysicist guide, an evening under these constellations transforms from simple stargazing into a humbling encounter with deep time.',
    ],
    keyHighlights: [
      'Private dawn entrance to Hegra before general opening hours',
      'Exclusive villa stay tucked into the Ashar Valley sandstone cliffs',
      'Helicopter flight over Elephant Rock and the Maraya mirrored hall',
      'Farm-to-table dining under century-old date palms in the ancient oasis',
    ],
  },
  {
    slug: 'kyoto-slow-elegance',
    title: 'The Art of Slow Elegance — Private Ryokans and Secret Zen Gardens of Kyoto',
    subtitle: 'Behind temple gates closed to the public: moss sanctums, private tea ceremonies, and generational Kaiseki mastery.',
    excerpt:
      'Kyoto does not reveal its soul to the hurried traveler. Step behind hand-hewn cedar gates into private temple courtyards where matcha masterclasses and lantern-lit kaiseki banquets redefine the concept of mindful luxury.',
    category: 'Japan',
    destination: 'Kyoto & Tokyo, Japan',
    image: '/images/dest-japan.jpg',
    readTime: '7 min read',
    date: 'Spring 2026',
    author: {
      name: 'Kenzo Takahashi',
      role: 'East Asia Bespoke Curator',
      location: 'Kyoto & Tokyo',
    },
    featured: false,
    pullQuote: 'In Kyoto, true luxury is measured by the silence between raked pebbles in a 600-year-old rock garden.',
    content: [
      'While millions visit Kyoto annually, only a privileged few ever experience its private sanctums. Through our intimate relationships with hereditary temple abbots, our travelers step past morning ropes into secluded Zen sub-temples in Daitoku-ji before any visitor arrives.',
      'The morning begins with a private chado (tea ceremony) conducted by a 14th-generation tea master, whose family has cultivated Uji matcha since the Edo period. The precision of each gesture, the delicate fragrance of tatami, and the gentle patter of mountain rain on cedar shingles create an atmosphere of profound serenity.',
      'Evenings belong to the culinary sublime: an exclusive twelve-course kaiseki dinner inside a private machiya townhouse overlooking the Shirakawa canal, where hyper-seasonal ingredients—wild mountain herbs, sweet sea bream, and Kyoto heirloom vegetables—are served on centuries-old lacquerware.',
    ],
    keyHighlights: [
      'After-hours private access to UNESCO Zen rock temples',
      'Stay in an exclusive 5-suite heritage ryokan with private cedar onsen',
      'Intimate tea masterclass with hereditary Uji tea masters',
      'Private Shinkansen Gran Class transfers between Tokyo and Kyoto',
    ],
  },
  {
    slug: 'maldives-beyond-overwater',
    title: 'Beyond the Overwater Villa — Private Sandbanks and Starlight Lagoons of Baa Atoll',
    subtitle: 'Why the UNESCO Biosphere Reserve offers the ultimate secluded marine sanctuary on earth.',
    excerpt:
      'The Maldives is renowned for luxury villas, but its true magic awakens when you set sail on a private yacht into pristine UNESCO lagoons, swimming with gentle manta rays under turquoise skies.',
    category: 'Maldives',
    destination: 'Baa Atoll, Maldives',
    image: '/images/dest-maldives.jpg',
    readTime: '6 min read',
    date: 'Year-Round 2026',
    author: {
      name: 'Amira Patel',
      role: 'Private Islands Director',
      location: 'Malé & Dubai',
    },
    featured: false,
    pullQuote: 'To dine alone on an uninhabited sandbank submerged by the incoming starlight tide is the very definition of unscripted romance.',
    content: [
      'While most travelers picture the classic wooden walkway over turquoise shallows, the Baa Atoll UNESCO Biosphere Reserve offers an underwater symphony matched by few places on earth.',
      'Between May and November, lunar tides push massive plankton blooms into Hanifaru Bay, attracting hundreds of graceful reef manta rays and gentle whale sharks. Our private marine biologist escorts our travelers via luxury catamaran, timing arrivals to coincide with tranquil, uncrowded feeding windows.',
      'As night settles over the Indian Ocean, our concierge orchestrates a candlelit dinner set directly onto an uninhabited sandbank miles from any resort, surrounded solely by bioluminescent waves and the soft whisper of the trade winds.',
    ],
    keyHighlights: [
      'Private seaplane arrival directly to your multi-bedroom island residence',
      'Exclusive yacht charter with marine biologist for manta ray encounters',
      'Sunset champagne dinner on an ephemeral private sandbank',
      'Overwater stargazing lounge with in-villa telescope observatory',
    ],
  },
  {
    slug: 'french-chateaux-terroir',
    title: 'Châteaux of the Loire — Private Cellars, Vintage Aviation, and Haute Terroir',
    subtitle: 'A bespoke journey through renaissance fortresses, Grand Cru vintages, and Michelin-starred garden retreats.',
    excerpt:
      'Trade the Parisian bustle for the regal serenity of the Loire Valley. Fly by private helicopter over Chambord’s turrets, taste rare vintages in vaulted limestone caves, and sleep in suites once inhabited by French nobility.',
    category: 'Europe',
    destination: 'Loire Valley & Paris, France',
    image: '/images/pkg-chateau-story.jpg',
    readTime: '8 min read',
    date: 'Summer 2026',
    author: {
      name: 'Édouard Laurent',
      role: 'European Heritage Specialist',
      location: 'Paris & Geneva',
    },
    featured: false,
    pullQuote: 'The Loire Valley is a living fairytale where wine cellars carved into tufa limestone have guarded royal vintages for five centuries.',
    content: [
      'Just fifty minutes southwest of Paris by helicopter, the Loire Valley unfurls like an embroidered green tapestry stitched with meandering rivers and limestone châteaux.',
      'Our travelers bypass queues entirely, landing directly on private estate grounds for exclusive tours led by descendants of the original châtelains. In subterranean cellars carved deep into chalky tufa cliffs, private sommeliers unlock historic Vouvray and Chinon vintages unavailable on any commercial market.',
      'Dinner is hosted in private palace orangeries illuminated by thousands of beeswax candles, where three-star Michelin chefs prepare bespoke degustation menus highlighting produce harvested hours earlier from royal estate permaculture gardens.',
    ],
    keyHighlights: [
      'Helicopter transfer from Paris Le Bourget directly to private château grounds',
      'Private salon buyouts at Château de Chenonceau and Chambord',
      'Rare vintage tastings with generational winemakers in vaulted caves',
      'Bespoke vintage sports car driving route along the Loire riverbanks',
    ],
  },
  {
    slug: 'cappadocia-dawn-balloons',
    title: 'Cappadocia at Dawn — Rose Valley Cave Sanctuaries and Silent Balloon Ascents',
    subtitle: 'Floating above fairy chimneys in a private wicker basket as sunrise ignites the Anatolian plateau.',
    excerpt:
      'Few spectacles on earth rival Cappadocia at dawn, when hundreds of colorful hot air balloons lift into the crisp morning sky above ancient cave churches and honeycombed rock valleys.',
    category: 'Turkey',
    destination: 'Cappadocia & Istanbul, Turkey',
    image: '/images/pkg-cappadocia-story.jpg',
    readTime: '5 min read',
    date: 'Spring 2026',
    author: {
      name: 'Leyla Demir',
      role: 'Anatolian & Bosphorus Specialist',
      location: 'Istanbul',
    },
    featured: false,
    pullQuote: 'Hovering motionless 1,000 feet above volcanic spires as the call to prayer echoes across the valley is unforgettable.',
    content: [
      'Millennia of volcanic eruptions followed by wind erosion carved Cappadocia into an otherworldly moonscape of tuff pinnacles and cave dwellings. But experiencing it in supreme luxury requires meticulous timing and insider knowledge.',
      'Our guests ascend before the crowd in a private four-passenger basket piloted by an elite veteran flier, drifting through the contours of Love Valley and Rose Valley as golden dawn light illuminates ancient Byzantine troglodyte frescoes.',
      'Upon touchdown, a champagne breakfast is laid out in a secluded canyon terrace, followed by private cave spa treatments and evening rooftop dining in Uchisar overlooking the valley.',
    ],
    keyHighlights: [
      'Exclusive private hot air balloon ascent with custom takeoff window',
      'Restored boutique cave suite carved directly into the mountain rock',
      'Private archaeological exploration of Derinkuyu underground city',
      'Direct private jet charter connection between Istanbul and Nevşehir',
    ],
  },
  {
    slug: 'stories-from-jeddah',
    title: 'Stories from Jeddah — From Coral Stone Alleys to Virgin Red Sea Reefs',
    subtitle: 'Wandering the perfume-scented roshan balconies of Al Balad and the avant-garde pulse of the coastal corniche.',
    excerpt:
      'Jeddah feels like a warm sea breeze. Wander through Al Balad’s centuries-old alleys, discover the floating mosque, and dive into teamLab Borderless — where the historic and the cutting-edge live side by side.',
    category: 'Saudi Arabia',
    destination: 'Jeddah & Red Sea, Saudi Arabia',
    image: '/images/saudi-jeddah.jpg',
    readTime: '6 min read',
    date: 'Late 2026',
    author: {
      name: 'Soraya Binladen',
      role: 'Senior Red Sea Specialist',
      location: 'Jeddah',
    },
    featured: false,
    pullQuote: 'Al Balad is a living museum where the aroma of oud, freshly roasted coffee, and sea brine tell the history of global seafaring.',
    content: [
      'Few ports in the Islamic world carry the storied romance of Jeddah. For centuries the maritime gateway to Mecca and Medina, this Red Sea metropolis has nurtured an outward-looking cosmopolitanism reflected in its architecture, cuisine, and warmth.',
      'In Al Balad, the UNESCO-listed historic quarter, multi-tiered coral houses rise into the sky like ornate wooden towers. Their defining feature is the mangour roshan—intricately carved teak bay windows designed to capture maritime breezes while safeguarding household privacy.',
      'Yet Jeddah refuses to be bounded by antiquity. Ten minutes north along the waterfront, the newly inaugurated teamLab Borderless museum introduces an ethereal digital playground of light and interactive art, demonstrating how effortlessly the city pivots from deep heritage to bold tomorrow.',
    ],
    keyHighlights: [
      'Curated private tour of historic merchant mansions in Al Balad',
      'Private sunset cruise along the virgin reef islets of the Red Sea',
      'Reserved VIP access to teamLab Borderless Jeddah',
      'Traditional Hijazi seafood feast prepared by an acclaimed coastal chef',
    ],
  },
];
