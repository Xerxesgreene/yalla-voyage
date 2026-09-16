export type Locale = 'en' | 'ar';

export interface TranslationDictionary {
  nav: {
    home: string;
    exploreSaudi: string;
    kingdomBadge: string;
    destinations: string;
    packages: string;
    services: string;
    about: string;
    contact: string;
    planYourTrip: string;
    language: string;
    english: string;
    arabic: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    titleHighlight: string;
    subtitle: string;
    beginVoyage: string;
  };
  whoWeAre: {
    badge: string;
    title: string;
    para1Prefix: string;
    brandName: string;
    para1Suffix: string;
    para2: string;
    philosophyBtn: string;
  };
  whatSetsUsApart: {
    badge: string;
    title: string;
    subtitle: string;
    expBadge: string;
    narrative1: string;
    narrative2: string;
    narrative3Prefix: string;
    narrative3Suffix: string;
    standardBadge: string;
    masteryTitle: string;
    masteryDesc: string;
    accessTitle: string;
    accessDesc: string;
    legacyTitle: string;
    legacyDesc: string;
    conciergeLabel: string;
    inquireNow: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  services: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    description: string;
    exploreAll: string;
    items: {
      privateJets: string;
      bespokeItineraries: string;
      luxuryFleet: string;
      vipUmrah: string;
      corporateMice: string;
      hotelBuyouts: string;
      yachtCharters: string;
      wellnessRetreats: string;
      vipConcierge: string;
      ladiesTrips: string;
      educationalExpeditions: string;
    };
  };
  exploreSaudi: {
    badge: string;
    title: string;
    subtitle: string;
    seeAll: string;
    discoverBtn: string;
    destinations: {
      alula: { label: string; sublabel: string };
      jeddah: { label: string; sublabel: string };
      riyadh: { label: string; sublabel: string };
      madinah: { label: string; sublabel: string };
      disah: { label: string; sublabel: string };
    };
  };
  topDestinations: {
    badge: string;
    title: string;
    subtitle: string;
    browseAll: string;
    interactiveCue: string;
    items: {
      paris: string;
      mauritius: string;
      egypt: string;
      italy: string;
      switzerland: string;
      uae: string;
      maldives: string;
      japan: string;
      turkey: string;
      bali: string;
      greece: string;
      franceRiviera: string;
      veniceCapri: string;
      ubudBali: string;
    };
  };
  testimonials: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    talkSpecialist: string;
    trustRating: string;
    items: {
      quote1: string;
      name1: string;
      role1: string;
      quote2: string;
      name2: string;
      role2: string;
      quote3: string;
      name3: string;
      role3: string;
      quote4: string;
      name4: string;
      role4: string;
    };
  };
  process: {
    badge: string;
    title: string;
    step1Tab: string;
    step1Title: string;
    step1Desc: string;
    step2Tab: string;
    step2Title: string;
    step2Desc: string;
    step3Tab: string;
    step3Title: string;
    step3Desc: string;
  };
  journal: {
    badge: string;
    title: string;
    subtitle: string;
    exploreBtn: string;
    featuredBadge: string;
    readTime: string;
    featuredTitle: string;
    featuredExcerpt: string;
    editorialLabel: string;
    readMore: string;
  };
  footer: {
    bannerTitle: string;
    bannerSubtitle: string;
    bookDestination: string;
    trustBadge: string;
    aboutBrand: string;
    quickLinks: string;
    destinationsCol: string;
    servicesCol: string;
    contactCol: string;
    addressVal: string;
    copyright: string;
    allRightsReserved: string;
  };
  common: {
    learnMore: string;
    viewDetails: string;
    bookNow: string;
    contactUs: string;
    explore: string;
    back: string;
    days: string;
    nights: string;
  };
  aboutPage: {
    heroTitle: string;
    heroSubtitle: string;
    genesisBadge: string;
    genesisTitle: string;
    genesisQuote: string;
    genesisDesc: string;
    curatorBtn: string;
    standardBadge: string;
    standardQuote: string;
    pillarsBadge: string;
    pillarsTitle: string;
    pillarsDesc: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
  };
  contactPage: {
    heroTitle: string;
    heroSubtitle: string;
    stewardshipBadge: string;
    stewardshipTitle: string;
    stewardshipDesc: string;
    whatsappTitle: string;
    whatsappSub: string;
    phoneTitle: string;
    emailTitle: string;
    locationTitle: string;
    formBadge: string;
    formTitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    destinationLabel: string;
    selectDestination: string;
    saudiGroup: string;
    intlGroup: string;
    serviceLabel: string;
    selectService: string;
    dateLabel: string;
    guestsLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendWhatsAppBtn: string;
    sendEmailBtn: string;
  };
  servicesPage: {
    heroTitle: string;
    heroSubtitle: string;
    advantageBadge: string;
    advantageTitle: string;
    advantageDesc: string;
    advantage1Title: string;
    advantage1Desc: string;
    advantage2Title: string;
    advantage2Desc: string;
    advantage3Title: string;
    advantage3Desc: string;
    showcaseBadge: string;
    showcaseTitle: string;
    showcaseDesc: string;
    filterAll: string;
    filterBespoke: string;
    filterWellness: string;
    filterEducational: string;
    filterLadies: string;
    filterAviation: string;
    filterCorporate: string;
    filterConcierge: string;
    deskBadge: string;
    ctaTitle: string;
    ctaHighlight: string;
    ctaDesc: string;
    consultBtn: string;
    inquireOnlineBtn: string;
  };
  packagesPage: {
    heroTitle: string;
    heroSubtitle: string;
    showcaseBadge: string;
    showcaseTitle: string;
    showcaseDesc: string;
    filterAll: string;
    filterTop: string;
    filterSaudi: string;
    filterSpecial: string;
    studioBadge: string;
    studioTitle: string;
    studioDesc: string;
    studioPill1: string;
    studioPill2: string;
    studioPill3: string;
    chatCuratorBtn: string;
    inquireOnlineBtn: string;
  };
  exploreSaudiPage: {
    heroTitle: string;
    heroSubtitle: string;
    advantageBadge: string;
    advantageTitle: string;
    advantageDesc: string;
    advantage1Title: string;
    advantage1Desc: string;
    advantage2Title: string;
    advantage2Desc: string;
    advantage3Title: string;
    advantage3Desc: string;
    regionalBadge: string;
    regionalTitle: string;
    regionalDesc: string;
    allDestinations: string;
    sanctuaryBadge: string;
    signatureBadge: string;
    signatureTitle: string;
    signatureDesc: string;
    curatedBy: string;
    inquireBtn: string;
    deskBadge: string;
    ctaTitle: string;
    ctaHighlight: string;
    ctaDesc: string;
    consultBtn: string;
    inquireOnlineBtn: string;
  };
}

export const translations: Record<Locale, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      exploreSaudi: 'Explore Saudi',
      kingdomBadge: 'Kingdom',
      destinations: 'Destinations',
      packages: 'Packages',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      planYourTrip: 'Plan Your Trip',
      language: 'Language',
      english: 'English',
      arabic: 'العربية',
    },
    hero: {
      titleLine1: 'Crafting exceptional',
      titleLine2: 'travel',
      titleHighlight: 'experiences.',
      subtitle: 'Yalla Voyage crafts extraordinary travel with precision, passion, and devotion.',
      beginVoyage: 'Begin Your Voyage',
    },
    whoWeAre: {
      badge: 'WHO WE ARE',
      title: 'Who We Are: Crafting Exceptional Travel Experiences.',
      para1Prefix:
        'We understand your need for quality and trust when it comes to providing memorable holiday experiences. That’s why, when you choose ',
      brandName: 'YALLA VOYAGE',
      para1Suffix:
        ', you can be confident that our team of highly experienced, multilingual professionals—with their in-depth knowledge and meticulous planning—will ensure your holiday is one you cherish forever.',
      para2:
        'We go far beyond a simple travel agency; from private jets to bespoke services— we have it all. Our unwavering commitment to customer satisfaction fosters a mutually beneficial, lifelong relationship with our clients. We constantly raise the bar to showcase our passion through the delivery of exceptional travel services.',
      philosophyBtn: 'Our Philosophy',
    },
    whatSetsUsApart: {
      badge: 'WHAT SETS US APART',
      title: 'What Sets Us Apart',
      subtitle: 'The personal touch, seamless execution, and exclusive off-market access that define true luxury.',
      expBadge: '20+ Years of Luxury Travel Experience',
      narrative1:
        'What sets us apart is the personal touch that we bring to every itinerary. With over 20 years of experience in the Luxury Travel Sector, we understand that true luxury isn’t just about the destination—it’s about the seamless execution of your specific desires.',
      narrative2:
        'Whether it’s a private jet experience across continents, a romantic honeymoon on a hidden island, or a secluded villa staffed with a private chef, we handle the complexities so you can focus on the moment.',
      narrative3Prefix: 'At ',
      narrative3Suffix:
        ', we don’t just book trips; we curate legacies. Our global network of exclusive partners ensures that our clients receive priority access, room upgrades, and “off-market” experiences that cannot be found online.',
      standardBadge: 'The Yalla Voyage Standard',
      masteryTitle: '20+ Years Sector Mastery',
      masteryDesc: 'Two decades of fine-tuning logistics for elite global travelers.',
      accessTitle: 'Exclusive Off-Market Access',
      accessDesc: 'Priority upgrades, private villa buyouts, and unlisted experiences.',
      legacyTitle: 'Curating Legacies',
      legacyDesc: 'Every journey is engineered to create lifelong cherished memories.',
      conciergeLabel: 'Bespoke Concierge Network',
      inquireNow: 'Inquire Now',
      pillar1Title: 'Global Expertise, Personal Touch',
      pillar1Desc: 'Our advisors have explored the destinations they recommend — every itinerary comes from real experience, not a brochure.',
      pillar2Title: 'Tailored, Not Templated',
      pillar2Desc: 'Corporate trip or dream vacation — every itinerary is built around you, your pace, and your priorities.',
      pillar3Title: 'Multilingual 24/7 Support',
      pillar3Desc: "From first inquiry to touchdown, our team communicates in the language you're most comfortable in.",
    },
    services: {
      badge: 'SERVICES & CAPABILITIES',
      titleMain: 'Architected Without Limits.',
      titleHighlight: 'Crafted for Uncompromising Travel.',
      description:
        'From private aviation and secluded island sanctuaries to executive summits and VIP concierge logistics — engineered with flawless precision.',
      exploreAll: 'Explore All Service Divisions',
      items: {
        privateJets: 'Private Jet Charters',
        bespokeItineraries: 'Bespoke Itineraries',
        luxuryFleet: 'Luxury Fleet & Chauffeur',
        vipUmrah: 'VIP Umrah & Spiritual Journeys',
        corporateMice: 'Corporate Travel & MICE',
        hotelBuyouts: 'Luxury Hotel & Villa Buyouts',
        yachtCharters: 'Ultra-Luxury Yacht Charters',
        wellnessRetreats: 'Wellness & Healing Retreats',
        vipConcierge: 'Visa, Passport & VIP Concierge',
        ladiesTrips: 'Luxury Ladies Trips',
        educationalExpeditions: 'Educational & Youth Expeditions',
      },
    },
    exploreSaudi: {
      badge: 'EXPLORE SAUDI ARABIA',
      title: 'Discover Saudi Like Never Before',
      subtitle: 'From Ancient Wonders to Modern Marvels',
      seeAll: 'See all destinations',
      discoverBtn: 'Discover Saudi',
      destinations: {
        alula: { label: 'AlUla & Hegra', sublabel: 'Ancient Wonders • UNESCO Heritage' },
        jeddah: { label: 'Jeddah Al-Balad', sublabel: 'Red Sea Coral Architecture' },
        riyadh: { label: 'Riyadh & Diriyah', sublabel: 'Capital Pulse • Royal Palaces' },
        madinah: { label: 'Madinah', sublabel: 'Sacred Peace • Heritage' },
        disah: { label: 'Wadi Al Disah', sublabel: 'Sandstone Oasis Canyon' },
      },
    },
    topDestinations: {
      badge: 'TOP DESTINATIONS',
      title: "Iconic Sanctuaries Across the World's Horizons.",
      subtitle:
        'Where timeless heritage meets rare seclusion — hand-curated private retreats across legendary global destinations.',
      browseAll: 'Browse All Destinations',
      interactiveCue: '✦ Move cursor to steer perspective • Hover & click any destination',
      items: {
        paris: 'Paris, France',
        mauritius: 'Mauritius • Indian Ocean',
        egypt: 'Giza & Nile • Egypt',
        italy: 'Amalfi Coast • Italy',
        switzerland: 'Swiss Alps • Switzerland',
        uae: 'Dubai & Abu Dhabi • UAE',
        maldives: 'Maldives Overwater Lagoon',
        japan: 'Kyoto & Tokyo • Japan',
        turkey: 'Cappadocia • Turkey',
        bali: 'Bali & Komodo • Indonesia',
        greece: 'Santorini & Cyclades • Greece',
        franceRiviera: 'French Riviera & Châteaux',
        veniceCapri: 'Venice & Capri • Italy',
        ubudBali: 'Ubud Rainforest • Bali',
      },
    },
    testimonials: {
      badge: '20+ YEARS EXPERIENCE • TRAVELER STORIES',
      titleMain: 'Real Journeys.',
      titleHighlight: 'Heartfelt Memories.',
      subtitle:
        'Genuine stories and reviews from families, couples, and travelers whose dream holidays were brought to life by Yalla Voyage.',
      talkSpecialist: 'Talk to a Specialist',
      trustRating: '4.9/5 Rating • 1,200+ Discerning Travelers',
      items: {
        quote1:
          'From the private helicopter over the Swiss glaciers to our secluded chalet in Zermatt, Yalla Voyage executed every detail with absolute perfection.',
        name1: 'Dr. Tariq Al-Husseini',
        role1: 'Executive Traveler • Riyadh',
        quote2:
          'Our honeymoon across the Amalfi Coast and Capri was pure magic. The private Riva yacht charter and cliffside suite in Ravello were beyond expectations.',
        name2: 'Sarah & Mansour K.',
        role2: 'Honeymoon Clients • Dubai',
        quote3:
          'Handling 45 VIP delegates across three continents seemed impossible until Yalla Voyage took over. Flawless corporate summit logistics from start to finish.',
        name3: 'Faisal Bin Othman',
        role3: 'Managing Director • Private Equity Group',
        quote4:
          'The private access permits to the Giza Pyramids at sunrise and the bespoke Nile dahabiya cruise created memories our family will treasure forever.',
        name4: 'Laila Al-Ghamdi & Family',
        role4: 'Family Expedition • Jeddah',
      },
    },
    process: {
      badge: 'HOW WE WORK',
      title: 'Your Seamless Journey in Three Curated Steps',
      step1Tab: 'Consultation',
      step1Title: 'Consultation',
      step1Desc:
        'Share your dream destination, travel style, and preferences. We listen, understand, and begin crafting your story.',
      step2Tab: 'Custom Planning',
      step2Title: 'Custom Planning',
      step2Desc:
        'Our experts design a bespoke itinerary tailored to your interests, pace, and priorities — no templates, ever.',
      step3Tab: 'Booking & Support',
      step3Title: 'Booking & 24/7 Support',
      step3Desc:
        'We handle every detail — flights, hotels, visas, transfers — with multilingual, around-the-clock assistance and lifelong partnership.',
    },
    journal: {
      badge: 'TRAVEL JOURNAL & DISPATCHES',
      title: 'Dispatches From the Edges of Luxury & Culture.',
      subtitle:
        'Reflections, insider intelligence, and travel narratives curated by our worldwide specialists across Saudi Arabia and global horizons.',
      exploreBtn: 'Explore Our Journal',
      featuredBadge: 'Featured Story',
      readTime: '5 min read',
      featuredTitle: 'The Complete Luxury Guide to AlUla: Nabataean Echoes & Desert Sanctuaries',
      featuredExcerpt:
        'A journey through Hegra at dawn, Michelin-starred desert dining under starlit sandstone cliffs, and the world’s most secluded luxury canyon villas.',
      editorialLabel: 'Yalla Voyage Editorial',
      readMore: 'Read More',
    },
    footer: {
      bannerTitle: 'Your Journey Starts Here',
      bannerSubtitle:
        'Turn your travel dreams into unforgettable adventures with personalized planning & expert guidance.',
      bookDestination: 'Book a destination',
      trustBadge: '4.9/5 Rating • 1,200+ Travelers Trust',
      aboutBrand:
        'Yalla Voyage crafts exceptional travel experiences — bespoke itineraries, private aviation, luxury retreats, and curated legacies with over 20 years of experience.',
      quickLinks: 'Quick Links',
      destinationsCol: 'Destinations',
      servicesCol: 'Services',
      contactCol: 'Contact Info',
      addressVal: 'Al-Madinah Al-Munawarah road, Al-Ruwais, Jeddah 23214, Saudi Arabia',
      copyright: 'All rights reserved.',
      allRightsReserved: 'Yalla Voyage Travel & Tourism. All rights reserved.',
    },
    common: {
      learnMore: 'Learn More',
      viewDetails: 'View Details',
      bookNow: 'Book Now',
      contactUs: 'Contact Us',
      explore: 'Explore',
      back: 'Back',
      days: 'Days',
      nights: 'Nights',
    },
    aboutPage: {
      heroTitle: 'Our Heritage & Vision',
      heroSubtitle: 'Two decades of devotion, discretion, and extraordinary journeys across Saudi Arabia and beyond.',
      genesisBadge: 'The Genesis',
      genesisTitle: 'Born in the heart of Saudi Arabia, designed for the world.',
      genesisQuote: "At Yalla Voyage, we don't just book trips — we design moments you'll replay for years.",
      genesisDesc: 'With over 20 years of experience in the Luxury Travel Sector, from corporate travel that runs like clockwork to bespoke luxury escapes that feel effortless, we turn logistics into artistry. We fuse deep destination expertise with exclusive off-market access and a human touch that never gets lost in translation.',
      curatorBtn: 'Speak With a Curator',
      standardBadge: 'Our Standard • 20+ Years Mastery',
      standardQuote: '“Every voyage is a bespoke masterpiece — crafted with reverence for local culture and uncompromising elegance.”',
      pillarsBadge: 'OUR PILLARS',
      pillarsTitle: 'The Principles That Define Every Itinerary.',
      pillarsDesc: 'Our compass is set by authenticity, uncompromising privacy, and generational access.',
      pillar1Title: 'Generational Roots',
      pillar1Desc: 'Deep regional access to protected heritage sites and private desert sanctuaries.',
      pillar2Title: 'Strict Discretion',
      pillar2Desc: 'NDA-compliant itineraries, private manifests, and seamless tarmac logistics.',
      pillar3Title: 'Zero Templates',
      pillar3Desc: 'Every voyage engineered from a blank canvas for your personal cadence.',
      pillar4Title: 'Human Touch',
      pillar4Desc: 'Warm Arabian hospitality fused with international white-glove protocol.',
    },
    contactPage: {
      heroTitle: 'Begin Your Journey',
      heroSubtitle: 'Direct concierge access for bespoke itineraries, private aviation, and luxury escapes.',
      stewardshipBadge: 'Direct Stewardship',
      stewardshipTitle: "Let's architect your next journey.",
      stewardshipDesc: "Whether it's a private jet across continents, an AlUla desert buyout, or a multi-destination itinerary, our senior curators are at your disposal.",
      whatsappTitle: 'WhatsApp',
      whatsappSub: 'Quick message response',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
      locationTitle: 'Location',
      formBadge: 'Inquiry Form',
      formTitle: 'Send Us a Message',
      fullNameLabel: 'Full Name *',
      fullNamePlaceholder: 'Your Name',
      emailLabel: 'Email Address *',
      emailPlaceholder: 'your.email@example.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+966 50 000 0000',
      destinationLabel: 'Destination',
      selectDestination: 'Select a Destination',
      saudiGroup: 'Saudi Arabia',
      intlGroup: 'International',
      serviceLabel: 'Service',
      selectService: 'Select Service',
      dateLabel: 'Travel Date',
      guestsLabel: 'Guests',
      messageLabel: 'Message / Notes',
      messagePlaceholder: 'Tell us about your trip dates, preferred activities, or questions...',
      sendWhatsAppBtn: 'Send via WhatsApp',
      sendEmailBtn: 'Send via Email',
    },
    servicesPage: {
      heroTitle: 'Architected Services',
      heroSubtitle: 'Bespoke travel curated with precision, discretion, and personalized care.',
      advantageBadge: 'THE YALLA VOYAGE ADVANTAGE',
      advantageTitle: 'Native Mastery, Royal Protocol & White-Glove Delivery.',
      advantageDesc: 'Delivering unparalleled operational perfection, confidential protocol access, and authentic luxury concierge stewardship across every journey.',
      advantage1Title: 'Tailored Without Templates',
      advantage1Desc: 'Every itinerary operates on zero templates. From private island buyouts to historian-led excavations, each agenda is curated from a blank canvas.',
      advantage2Title: 'Guaranteed Response SLA',
      advantage2Desc: 'Backed by our direct senior desk. Urgent requests, flight re-routings, and visa fast-tracks receive dedicated priority liaison.',
      advantage3Title: 'VIP Confidentiality & NDA',
      advantage3Desc: 'Diplomats, high-net-worth families, and executive C-suites trust our discreet coordination. All movements are protected with stringent confidentiality protocols.',
      showcaseBadge: 'OUR SERVICES',
      showcaseTitle: 'Distinct Dimensions of Bespoke Luxury.',
      showcaseDesc: 'Specialized travel services engineered to give you complete operational control, absolute privacy, and white-glove delivery.',
      filterAll: 'All Services',
      filterBespoke: 'Signature Journeys',
      filterWellness: 'Wellness & Retreat',
      filterEducational: 'Educational Tours',
      filterLadies: 'Ladies Trips',
      filterAviation: 'VIP Mobility',
      filterCorporate: 'Corporate & Events',
      filterConcierge: 'Concierge & Logistics',
      deskBadge: 'YALLA VOYAGE PRIVATE CLIENT DESK',
      ctaTitle: 'Your bespoke journey begins here.',
      ctaHighlight: 'Crafted by Yalla Voyage.',
      ctaDesc: 'Connect directly with our senior travel designers to architect a seamless, bespoke journey tailored to your exact preferences.',
      consultBtn: 'Consult With Yalla Voyage',
      inquireOnlineBtn: 'Inquire Online',
    },
    packagesPage: {
      heroTitle: 'Our Packages',
      heroSubtitle: 'Bespoke luxury itineraries handcrafted across top destinations and timeless horizons.',
      showcaseBadge: 'TOP DESTINATIONS',
      showcaseTitle: 'Our Packages',
      showcaseDesc: 'Handcrafted journeys blending private access, refined pacing, and personalized concierge care.',
      filterAll: 'All Packages',
      filterTop: 'Top Destinations',
      filterSaudi: 'Saudi Sanctuaries',
      filterSpecial: 'Specialty & Retreats',
      studioBadge: 'Bespoke Studio',
      studioTitle: 'Seeking a custom package crafted for your dates?',
      studioDesc: 'Every package can be customized from a blank canvas to fit your private schedule, helicopter transfers, and personal preferences.',
      studioPill1: 'Custom Itineraries',
      studioPill2: '24/7 Concierge',
      studioPill3: 'Private Aviation',
      chatCuratorBtn: 'Chat With Senior Curator',
      inquireOnlineBtn: 'Inquire Online',
    },
    exploreSaudiPage: {
      heroTitle: 'Explore Saudi',
      heroSubtitle: 'Discover Saudi like never before.',
      advantageBadge: 'THE YALLA VOYAGE ADVANTAGE',
      advantageTitle: 'Native Mastery, Royal Protocol & Total Discretion.',
      advantageDesc: 'Delivering unparalleled operational perfection, royal protocol access, and authentic hospitality across the Kingdom.',
      advantage1Title: 'Generational Local Mastery',
      advantage1Desc: 'Yalla Voyage maintains deep institutional roots across Saudi Arabia, unlocking private archaeological permits, royal palace dining, and confidential C-suite access.',
      advantage2Title: 'Uncompromising Luxury Pacing',
      advantage2Desc: 'Every Yalla Voyage itinerary is precision-engineered to your exact schedule — featuring private helicopter charters, Maybach fleets, and 5-star desert sanctuaries.',
      advantage3Title: 'Direct Concierge Stewardship',
      advantage3Desc: 'With a dedicated 24/7 Yalla Voyage concierge on call, every flight connection, VIP baggage escort, and visa fast-track is handled with flawless discretion.',
      regionalBadge: 'REGIONAL EXPEDITIONS',
      regionalTitle: 'Kingdom Horizons: From Red Sea Reefs to Desert Canyons.',
      regionalDesc: 'Curated by Yalla Voyage to reveal the profound duality of the Kingdom — timeless heritage and visionary luxury.',
      allDestinations: 'All Destinations',
      sanctuaryBadge: 'Yalla Voyage Sanctuary',
      signatureBadge: 'YALLA VOYAGE INVITATIONS',
      signatureTitle: 'Not Tours. Rare & Private Invitations.',
      signatureDesc: "Exclusive cultural, archaeological, and culinary immersions unlocked by Yalla Voyage's native relationships.",
      curatedBy: 'Curated by Yalla Voyage',
      inquireBtn: 'Inquire With Yalla Voyage',
      deskBadge: 'YALLA VOYAGE PRIVATE CLIENT DESK',
      ctaTitle: 'Your Kingdom story begins here.',
      ctaHighlight: 'Crafted by Yalla Voyage.',
      ctaDesc: 'Connect directly with our senior Saudi travel designers to architect a seamless, bespoke journey tailored to your exact preferences.',
      consultBtn: 'Consult With Yalla Voyage',
      inquireOnlineBtn: 'Inquire Online',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      exploreSaudi: 'اكتشف السعودية',
      kingdomBadge: 'المملكة',
      destinations: 'الوجهات',
      packages: 'الباقات',
      services: 'الخدمات',
      about: 'من نحن',
      contact: 'تواصل معنا',
      planYourTrip: 'خطط لرحلتك',
      language: 'اللغة',
      english: 'English',
      arabic: 'العربية',
    },
    hero: {
      titleLine1: 'نصنع تجارب',
      titleLine2: 'سفر',
      titleHighlight: 'استثنائية',
      subtitle: 'تصمم يالّا فوياج رحلات فريدة بدقة فائقة، وشغف لا محدود، وعناية مطلقة بكل تفصيلة',
      beginVoyage: 'ابدأ رحلتك',
    },
    whoWeAre: {
      badge: 'من نحن',
      title: 'من نحن: صناعة تجارب سفر استثنائية',
      para1Prefix:
        'ندرك تماماً حاجتكم إلى الجودة والثقة عندما يتعلق الأمر بصنع ذكريات عطلات لا تُنسى. لذا، عندما تختارون ',
      brandName: 'YALLA VOYAGE',
      para1Suffix:
        '، يمكنكم أن تكونوا على ثقة تامة بأن فريقنا من الخبراء المتمرسين متعددي اللغات—بما يملكونه من معرفة متعمقة وتخطيط دقيق ومتقن—سيجعل من إجازتكم تجربة تعتزون بها طوال العمر.',
      para2:
        'نحن نتجاوز مفهوم وكالة السفر التقليدية بمراحل؛ بدءاً من استئجار الطائرات الخاصة وصولاً إلى أرقى الخدمات المصممة خصيصاً لتلائم أدق رغباتكم. التزامنا الراسخ برضا عملائنا يبني علاقة مستدامة قائمة على الثقة المتبادلة والمنفعة المشتركة. ونواصل رفع معايير التميز باستمرار لنبرهن على شغفنا بتقديم خدمات سفر استثنائية تفوق التوقعات.',
      philosophyBtn: 'فلسفتنا في السفر',
    },
    whatSetsUsApart: {
      badge: 'ما يميزنا',
      title: 'ما يميزنا',
      subtitle: 'اللمسة الشخصية الراقية، والتنفيذ السلس، والوصول الحصري الخاص الذي يجسد جوهر الفخامة الحقيقية.',
      expBadge: 'أكثر من 20 عاماً من الخبرة في السفر الفاخر',
      narrative1:
        'ما يميزنا بحق هو اللمسة الشخصية التي نضفيها على كل خط سير. بفضل خبرتنا التي تتجاوز عقدين في قطاع السفر الفاخر، ندرك جيداً أن الفخامة لا تقتصر على مجرد اختيار الوجهة—بل تتجلى في التنفيذ الانسيابي السلس لأدق تفاصيل رغباتكم الخاصة.',
      narrative2:
        'سواء كان ذلك عبر تجربة طيران خاص تجوب القارات، أو شهر عسل رومانسي حالم في جزيرة منعزلة، أو فيلا خاصة بطاقم خدمة كامل وطاهٍ شخصي، نحن نتولى كافة التعقيدات اللوجستية لتتفرغوا تماماً للاستمتاع بكل لحظة.',
      narrative3Prefix: 'في ',
      narrative3Suffix:
        '، نحن لا نكتفي بحجز الرحلات؛ بل نصنع إرثاً من الذكريات الخالدة. وتضمن شبكتنا العالمية الواسعة من الشركاء الحصريين حصول عملائنا على أولوية الدخول، وترقيات فورية للغرف، وتجارب استثنائية غير متاحة للعامة ولا يمكن العثور عليها عبر الإنترنت.',
      standardBadge: 'معايير يالّا فوياج',
      masteryTitle: 'ريادة لأكثر من 20 عاماً',
      masteryDesc: 'عقدان من إتقان العمليات اللوجستية لنخبة المسافرين حول العالم.',
      accessTitle: 'وصول حصري خاص',
      accessDesc: 'ترقيات ذات أولوية، وحجوزات حصرية للفلل، وتجارب نادرة غير معلنة.',
      legacyTitle: 'صناعة إرث خالد',
      legacyDesc: 'كل رحلة مصممة بعناية لتخليد أروع الذكريات طوال العمر.',
      conciergeLabel: 'شبكة كونسيرج مخصصة',
      inquireNow: 'استفسر الآن',
      pillar1Title: 'خبرة عالمية بلمسة شخصية',
      pillar1Desc: 'خبراؤنا زاروا بأنفسهم الوجهات التي يوصون بها — كل خط سير مستوحى من تجربة حقيقية وليس من مجرد كتيبات.',
      pillar2Title: 'مصممة خصيصاً لا قوالب جاهزة',
      pillar2Desc: 'سواء كانت رحلة أعمال تنفيذية أو إجازة الأحلام — نصمم كل برنامج وفق وتيرتكم وأولوياتكم الخاصة.',
      pillar3Title: 'دعم متواصل 24/7 بلغات متعددة',
      pillar3Desc: 'من أول استفسار وحتى العودة بالسلامة، يتواصل معكم فريقنا باللغة التي تفضلونها بكل يسر واهتمام.',
    },
    services: {
      badge: 'الخدمات والإمكانيات',
      titleMain: 'مصممة بلا حدود',
      titleHighlight: 'متقنة لسفر لا يقبل المساومة',
      description:
        'من الطيران الخاص والملاذات الجزرية المنعزلة إلى قمم الأعمال واللوجستيات التنفيذية لكبار الشخصيات — نهندس رحلاتكم بدقة لا تشوبها شائبة.',
      exploreAll: 'استكشف كافة قطاعات الخدمات',
      items: {
        privateJets: 'استئجار الطائرات الخاصة',
        bespokeItineraries: 'برامج سفر مصممة خصيصاً',
        luxuryFleet: 'أسطول سيارات فاخر وسائقون خاصون',
        vipUmrah: 'عمرة كبار الشخصيات ورحلات روحانية',
        corporateMice: 'سياحة الأعمال والمؤتمرات والمعارض',
        hotelBuyouts: 'حجوزات حصرية للفنادق والفلل الفاخرة',
        yachtCharters: 'استئجار اليخوت الفاخرة والسوبر يخت',
        wellnessRetreats: 'منتجعات الاستجمام والصحة والعافية',
        vipConcierge: 'التأشيرات وجوازات السفر والكونسيرج الخاص',
        ladiesTrips: 'رحلات سيدات راقية وحصرية',
        educationalExpeditions: 'رحلات تعليمية واستكشافية للشباب',
      },
    },
    exploreSaudi: {
      badge: 'اكتشف المملكة العربية السعودية',
      title: 'اكتشف السعودية كما لم ترها من قبل',
      subtitle: 'من عجائب التاريخ العريق إلى المعالم الحديثة المذهلة',
      seeAll: 'عرض جميع الوجهات',
      discoverBtn: 'اكتشف السعودية',
      destinations: {
        alula: { label: 'العلا والحِجر', sublabel: 'عجائب الحضارات القديمة • تراث اليونسكو العالمي' },
        jeddah: { label: 'جدة التاريخية (البلد)', sublabel: 'عمارة مرجانية فريدة على ساحل البحر الأحمر' },
        riyadh: { label: 'الرياض والدرعية', sublabel: 'نبض العاصمة المتجدد • القصور الملكية التاريخية' },
        madinah: { label: 'المدينة المنورة', sublabel: 'سكينة روحانية عطرة • معالم تراثية مقدسة' },
        disah: { label: 'وادي الديسة', sublabel: 'واحة الأخاديد الرملية الساحرة والمياه العذبة' },
      },
    },
    topDestinations: {
      badge: 'أبرز الوجهات',
      title: 'ملاذات استثنائية تمتد عبر آفاق العالم.',
      subtitle:
        'حيث يلتقي عبق التاريخ بالعزلة النادرة — ملاذات خاصة منتقاة بعناية عبر أروع الوجهات العالمية الأسطورية.',
      browseAll: 'تصفح جميع الوجهات',
      interactiveCue: '✦ حرك المؤشر لتوجيه زاوية الرؤية • مرر وانقر لاستكشاف أي وجهة',
      items: {
        paris: 'باريس، فرنسا',
        mauritius: 'موريشيوس • المحيط الهندي',
        egypt: 'الجيزة والنيل • مصر',
        italy: 'ساحل أمالفي • إيطاليا',
        switzerland: 'جبال الألب السويسرية • سويسرا',
        uae: 'دبي وأبوظبي • الإمارات',
        maldives: 'بحيرات المالديف وفللها العائمة',
        japan: 'كيوتو وطوكيو • اليابان',
        turkey: 'كابادوكيا • تركيا',
        bali: 'بالي وكومودو • إندونيسيا',
        greece: 'سانتوريني وجزر سيكلاديز • اليونان',
        franceRiviera: 'الريفييرا الفرنسية والقصور التاريخية',
        veniceCapri: 'البندقية وكابري • إيطاليا',
        ubudBali: 'غابات أوبود المطيرة • بالي',
      },
    },
    testimonials: {
      badge: 'خبرة تفوق 20 عاماً • قصص المسافرين',
      titleMain: 'رحلات حقيقية.',
      titleHighlight: 'ذكريات تنبض بالحياة.',
      subtitle:
        'قصص وتجارب صادقة من عائلات وأزواج ونخبة مسافرين تحولت عطلات أحلامهم إلى واقع بديع ومبهر بفضل يالّا فوياج.',
      talkSpecialist: 'تحدث مع مستشار السفر',
      trustRating: 'تقييم 4.9/5 • موثوق من أكثر من 1,200 مسافر من النخبة',
      items: {
        quote1:
          'بدءاً من المروحية الخاصة فوق الأنهار الجليدية السويسرية وحتى شاليهنا المنعزل في زيرمات، نفذت يالّا فوياج كل تفصيلة بكمال واحترافية مطلقة.',
        name1: 'د. طارق الحسيني',
        role1: 'مسافر تنفيذي • الرياض',
        quote2:
          'كان شهر عسلنا على ساحل أمالفي وجزيرة كابري سحراً خالصاً. استئجار يخت ريفا الخاص وجناح الجرف الصخري في رافيلو فاقا كل توقعاتنا.',
        name2: 'سارة ومنصور ك.',
        role2: 'عملاء شهر عسل • دبي',
        quote3:
          'كان تنظيم رحلة لـ 45 شخصية رفيعة المستوى عبر ثلاث قارات يبدو مستحيلاً حتى تولت يالّا فوياج الأمر. لوجستيات قمة أعمال لا تشوبها شائبة من البداية إلى النهاية.',
        name3: 'فيصل بن عثمان',
        role3: 'عضو منتدب • مجموعة استثمار خاص',
        quote4:
          'تصاريح الدخول الخاصة لأهرامات الجيزة عند الشروق ورحلة الدهبية النيلية الفاخرة المصممة لنا صنعت ذكريات ستعتز بها عائلتنا مدى الحياة.',
        name4: 'ليلى الغامدي وعائلتها',
        role4: 'رحلة عائلية خاصة • جدة',
      },
    },
    process: {
      badge: 'كيف نعمل',
      title: 'رحلتكم السلسة في ثلاث خطوات متقنة',
      step1Tab: 'الاستشارة',
      step1Title: 'الاستشارة والرؤية',
      step1Desc:
        'شاركنا وجهة أحلامك، وأسلوب سفرك المفضل، وتطلعاتك الخاصة. ننصت باهتمام لنبدأ معاً في صياغة ملامح قصتك القادمة.',
      step2Tab: 'التخطيط المخصص',
      step2Title: 'التخطيط والتخصيص المتقن',
      step2Desc:
        'يصمم خبراؤنا خط سير فريد ومفصل وفق اهتماماتك وتطلعاتك وسرعتك المفضلة — بلا قوالب مسبقة على الإطلاق.',
      step3Tab: 'الحجز والدعم 24/7',
      step3Title: 'الحجز والدعم الشامل 24/7',
      step3Desc:
        'نتولى كافة التفاصيل — الطيران، الفنادق، التأشيرات، والمواصلات الخاصة — مع دعم متواصل بلغتك على مدار الساعة وشراكة تدوم.',
    },
    journal: {
      badge: 'مدونة السفر والمقالات',
      title: 'إطلالات من آفاق الفخامة والثقافة.',
      subtitle:
        'تأملات ورؤى حصرية وروايات سفر ينسجها خبراؤنا المتخصصون عبر المملكة العربية السعودية ومختلف آفاق العالم.',
      exploreBtn: 'استكشف مدونتنا',
      featuredBadge: 'قصة مميزة',
      readTime: 'قراءة في 5 دقائق',
      featuredTitle: 'الدليل الفاخر الشامل إلى العلا: أصداء الأنباط وملاذات الصحراء الساحرة',
      featuredExcerpt:
        'رحلة استثنائية عبر الحِجر عند الفجر، ومطاعم ميشلان الفاخرة تحت سماء الصحراء المرصعة بالنجوم، وأروع الفلل الصخرية المنعزلة في العالم.',
      editorialLabel: 'فريق تحرير يالّا فوياج',
      readMore: 'اقرأ المزيد',
    },
    footer: {
      bannerTitle: 'رحلتكم الاستثنائية تبدأ من هنا',
      bannerSubtitle:
        'حوّل أحلام سفرك إلى مغامرات لا تُنسى مع تخطيط مخصص بعناية وتوجيه من نخبة خبراء السفر.',
      bookDestination: 'احجز وجهتك الآن',
      trustBadge: 'تقييم 4.9/5 • موثوق من أكثر من 1,200 مسافر',
      aboutBrand:
        'تصمم يالّا فوياج تجارب سفر استثنائية — خطوط سير حصرية، طيران خاص، ملاذات فاخرة، وذكريات تدوم لأجيال بخبرة تزيد عن 20 عاماً.',
      quickLinks: 'روابط سريعة',
      destinationsCol: 'أبرز الوجهات',
      servicesCol: 'خدماتنا',
      contactCol: 'بيانات التواصل',
      addressVal: 'طريق المدينة المنورة، حي الرويس، جدة 23214، المملكة العربية السعودية',
      copyright: 'جميع الحقوق محفوظة.',
      allRightsReserved: 'شركة يالّا فوياج للسفر والسياحة. جميع الحقوق محفوظة.',
    },
    common: {
      learnMore: 'اعرف المزيد',
      viewDetails: 'عرض التفاصيل',
      bookNow: 'احجز الآن',
      contactUs: 'تواصل معنا',
      explore: 'استكشف',
      back: 'رجوع',
      days: 'أيام',
      nights: 'ليالٍ',
    },
    aboutPage: {
      heroTitle: 'عراقتنا ورؤيتنا',
      heroSubtitle: 'عقدان من الشغف والخصوصية والرحلات الاستثنائية عبر المملكة العربية السعودية وآفاق العالم.',
      genesisBadge: 'البداية والنشأة',
      genesisTitle: 'وُلدت في قلب المملكة العربية السعودية، وصُممت للعالم بأكمله.',
      genesisQuote: 'في يالّا فوياج، نحن لا نكتفي بحجز الرحلات — بل نصمم لحظات استثنائية ستتذكرونها لسنوات طويلة.',
      genesisDesc: 'بأكثر من 20 عاماً من الخبرة في قطاع السفر الفاخر، بدءاً من سفر الأعمال المتقن إلى الملاذات الحصرية المريحة، نحول اللوجستيات إلى فن راقٍ. نجمع بين المعرفة العميقة بالوجهات، والوصول الحصري الخاص، واللمسة الإنسانية الأصيلة التي لا تغيب أبداً.',
      curatorBtn: 'تحدث مع مصمم رحلاتنا',
      standardBadge: 'معاييرنا • خبرة تفوق 20 عاماً',
      standardQuote: '«كل رحلة هي تحفة فنية مخصصة — ننسجها باحترام عميق للثقافة المحلية وأناقة مطلقة لا تقبل المساومة.»',
      pillarsBadge: 'ركائزنا الأساسية',
      pillarsTitle: 'المبادئ التي ترسم ملامح كل خط سير.',
      pillarsDesc: 'بوصلتنا موجهة بالأصالة التامة، والخصوصية المطلقة، والوصول المتوارث.',
      pillar1Title: 'جذور متوارثة',
      pillar1Desc: 'وصول إقليمي متوارث وعميق إلى مواقع التراث المحمية والملاذات الصحراوية الخاصة.',
      pillar2Title: 'خصوصية وسرية تامة',
      pillar2Desc: 'برامج سفر متوافقة تماماً مع اتفاقيات السرية، ولوجستيات مدرج مطار خاصة وانسيابية.',
      pillar3Title: 'بلا قوالب جاهزة',
      pillar3Desc: 'كل رحلة تُصمم من صفحة بيضاء لتلائم وتيرتك واهتماماتك الشخصية بدقة.',
      pillar4Title: 'لمسة إنسانية أصيلة',
      pillar4Desc: 'كرم الضيافة العربية الأصيلة ممتزجاً بأرقى بروتوكولات الخدمة العالمية رفيعة المستوى.',
    },
    contactPage: {
      heroTitle: 'ابدأ رحلتك الاستثنائية',
      heroSubtitle: 'تواصل مباشر مع كبار مستشاري السفر لتصميم خطوط سير حصرية، طيران خاص، وملاذات فاخرة.',
      stewardshipBadge: 'تواصل واهتمام مباشر',
      stewardshipTitle: 'دعنا نصمم رحلتك القادمة بكل إتقان.',
      stewardshipDesc: 'سواء كان ذلك طيراناً خاصاً يجوب القارات، أو حجزاً كاملاً لمنتجع صحراوي في العلا، أو خط سير متعدد الوجهات، فإن كبار مصممي رحلاتنا في خدمتكم دائماً.',
      whatsappTitle: 'واتساب',
      whatsappSub: 'استجابة فورية وسريعة',
      phoneTitle: 'الهاتف',
      emailTitle: 'البريد الإلكتروني',
      locationTitle: 'الموقع والمقر',
      formBadge: 'نموذج الاستفسار',
      formTitle: 'أرسل لنا رسالة',
      fullNameLabel: 'الاسم الكامل *',
      fullNamePlaceholder: 'اسمك الكريم',
      emailLabel: 'البريد الإلكتروني *',
      emailPlaceholder: 'your.email@example.com',
      phoneLabel: 'رقم الهاتف',
      phonePlaceholder: '+966 50 000 0000',
      destinationLabel: 'الوجهة المطلوبة',
      selectDestination: 'اختر الوجهة',
      saudiGroup: 'المملكة العربية السعودية',
      intlGroup: 'الوجهات العالمية',
      serviceLabel: 'نوع الخدمة',
      selectService: 'اختر الخدمة',
      dateLabel: 'تاريخ السفر المفضل',
      guestsLabel: 'عدد الضيوف',
      messageLabel: 'تفاصيل وملاحظات الرحلة',
      messagePlaceholder: 'أخبرنا عن مواعيد سفرك، والأنشطة المفضلة، أو أي استفسارات خاصة...',
      sendWhatsAppBtn: 'إرسال عبر واتساب',
      sendEmailBtn: 'إرسال عبر البريد الإلكتروني',
    },
    servicesPage: {
      heroTitle: 'خدماتنا المصممة بدقة',
      heroSubtitle: 'سياحة فاخرة مصممة بعناية فائقة وخصوصية تامة واهتمام شخصي بكل تفصيلة.',
      advantageBadge: 'مزايا يالّا فوياج',
      advantageTitle: 'خبرة محلية متأصلة، بروتوكول رفيع وخدمة بمستوى القفاز الأبيض.',
      advantageDesc: 'نقدم كمالاً تشغيلياً لا مثيل له، ووصولاً بروتوكولياً سرياً، وعناية استثنائية متفانية عبر كل محطة في رحلتكم.',
      advantage1Title: 'مخصصة بالكامل بلا قوالب جاهزة',
      advantage1Desc: 'كل خط سير ينطلق من الصفر دون أي قوالب مسبقة. من الحجز الحصري للجزر الخاصة إلى الاستكشافات التراثية برفقة المؤرخين.',
      advantage2Title: 'استجابة سريعة ومضمونة',
      advantage2Desc: 'مدعومة بمكتبنا التنفيذي المباشر. الطلبات العاجلة، تعديل مسارات الطيران، والمسارات السريعة للتأشيرات تحظى بأولوية قصوى.',
      advantage3Title: 'سرية تامة لكبار الشخصيات',
      advantage3Desc: 'يثق الدبلوماسيون وكبار رجال الأعمال والعائلات العريقة في تنظيمنا السري والمتقن لجميع التنقلات والرحلات.',
      showcaseBadge: 'خدماتنا',
      showcaseTitle: 'أبعاد استثنائية من الفخامة المصممة خصيصاً.',
      showcaseDesc: 'خدمات سفر متخصصة تمنحك السيطرة التشغيلية الكاملة، والخصوصية المطلقة، والتنفيذ الراقي.',
      filterAll: 'جميع الخدمات',
      filterBespoke: 'رحلات حصرية مخصصة',
      filterWellness: 'استجمام واستشفاء',
      filterEducational: 'جولات تعليمية',
      filterLadies: 'رحلات سيدات',
      filterAviation: 'طيران وتنقلات خاصة',
      filterCorporate: 'أعمال وفعاليات',
      filterConcierge: 'كونسيرج ولوجستيات',
      deskBadge: 'مكتب عملاء يالّا فوياج الخاص',
      ctaTitle: 'رحلتك المصممة خصيصاً تبدأ هنا.',
      ctaHighlight: 'بصمة متقنة من يالّا فوياج.',
      ctaDesc: 'تواصل مباشرة مع كبار مصممي رحلاتنا لابتكار برنامج سفر استثنائي يلائم تفضيلاتك الخاصة بدقة متناهية.',
      consultBtn: 'استشر خبراء يالّا فوياج',
      inquireOnlineBtn: 'استفسر عبر الموقع',
    },
    packagesPage: {
      heroTitle: 'باقاتنا المميزة',
      heroSubtitle: 'برامج سفر فاخرة ومصممة يدوياً عبر أرقى الوجهات العالمية وآفاق السحر الخالدة.',
      showcaseBadge: 'أبرز الوجهات',
      showcaseTitle: 'باقاتنا المصممة خصيصاً',
      showcaseDesc: 'رحلات مصممة تجمع بين الوصول الحصري، والوتيرة المريحة، والاهتمام الفردي المتواصل.',
      filterAll: 'جميع الباقات',
      filterTop: 'أبرز الوجهات العالمية',
      filterSaudi: 'ملاذات المملكة',
      filterSpecial: 'رحلات خاصة واستجمام',
      studioBadge: 'أستوديو التصميم الخاص',
      studioTitle: 'تبحث عن باقة خاصة مصممة وفق تواريخك المحددة؟',
      studioDesc: 'يمكن تخصيص كل باقة من البداية لتلائم جدولك الزمني، وتنقلاتك بالطائرات والمروحيات، وأدق تفضيلاتك.',
      studioPill1: 'برامج سفر مخصصة',
      studioPill2: 'كونسيرج 24/7',
      studioPill3: 'طيران خاص',
      chatCuratorBtn: 'تحدث مع خبير السفر',
      inquireOnlineBtn: 'استفسر عبر الموقع',
    },
    exploreSaudiPage: {
      heroTitle: 'اكتشف السعودية',
      heroSubtitle: 'اكتشف أرض المملكة كما لم ترها من قبل.',
      advantageBadge: 'مزايا يالّا فوياج',
      advantageTitle: 'ريادة محلية متأصلة، بروتوكول ملكي وسرية تامة.',
      advantageDesc: 'كمال تشغيلي لا يُضاهى، وصول بروتوكولي مرموق، وكرم ضيافة أصيل يمتد عبر أرجاء المملكة.',
      advantage1Title: 'خبرة محلية عريقة متوارثة',
      advantage1Desc: 'تمتلك يالّا فوياج جذوراً أصيلة عميقة في المملكة، تفتح لك أبواب تصاريح الآثار الحصرية، والضيافة الملكية، والوصول التنفيذي الخاص.',
      advantage2Title: 'وتيرة فخامة لا تقبل المساومة',
      advantage2Desc: 'كل خط سير مصمم بدقة متناهية ليلائم جدولك — متضمناً طائرات الهليكوبتر الخاصة، أساطيل المايباخ، وأرقى الملاذات الصحراوية فئة 5 نجوم.',
      advantage3Title: 'عناية كونسيرج مباشرة وشاملة',
      advantage3Desc: 'مع كونسيرج يالّا فوياج المخصص المتاح على مدار الساعة، تتم متابعة رحلات الطيران ومرافقة الحقائب والمسار السريع للتأشيرات باحترافية وسرية تامة.',
      regionalBadge: 'استكشافات مناطق المملكة',
      regionalTitle: 'آفاق المملكة: من شعاب البحر الأحمر إلى أخاديد الصحراء.',
      regionalDesc: 'تنسيق متقن من يالّا فوياج ليكشف عن التناغم البديع في المملكة — بين عراقة التاريخ ورؤية المستقبل الفاخرة.',
      allDestinations: 'جميع الوجهات',
      sanctuaryBadge: 'ملاذات يالّا فوياج',
      signatureBadge: 'دعوات يالّا فوياج الخاصة',
      signatureTitle: 'ليست مجرد جولات. بل دعوات نادرة وخاصة.',
      signatureDesc: 'تجارب ثقافية وأثرية ومطعمية حصرية تفتحها علاقات يالّا فوياج الوثيقة والمتأصلة.',
      curatedBy: 'تصميم وإشراف يالّا فوياج',
      inquireBtn: 'استفسر مع يالّا فوياج',
      deskBadge: 'مكتب عملاء يالّا فوياج الخاص',
      ctaTitle: 'قصتك في أرض المملكة تبدأ هنا.',
      ctaHighlight: 'بصمة متقنة من يالّا فوياج.',
      ctaDesc: 'تواصل مباشرة مع كبار مصممي رحلاتنا في السعودية لتنسيق رحلة استثنائية تلائم كافة تطلعاتك.',
      consultBtn: 'استشر خبراء يالّا فوياج',
      inquireOnlineBtn: 'استفسر عبر الموقع',
    },
  },
};
