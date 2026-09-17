export interface JournalArticle {
  slug: string;
  title: string;
  titleAr?: string;
  subtitle: string;
  subtitleAr?: string;
  excerpt: string;
  excerptAr?: string;
  category: 'Saudi Arabia' | 'Italy' | 'Dubai' | 'Russia' | 'Switzerland' | 'Japan' | 'Maldives' | 'Europe' | 'Turkey';
  categoryAr?: string;
  destination: string;
  destinationAr?: string;
  image: string;
  readTime: string;
  readTimeAr?: string;
  date: string;
  dateAr?: string;
  author: {
    name: string;
    nameAr?: string;
    role: string;
    roleAr?: string;
    location: string;
    locationAr?: string;
  };
  featured?: boolean;
  pullQuote?: string;
  pullQuoteAr?: string;
  content: string[];
  contentAr?: string[];
  keyHighlights: string[];
  keyHighlightsAr?: string[];
}

export const journalArticles: JournalArticle[] = [
  {
    slug: 'switzerland-alps-st-moritz',
    title: 'Glacial Grandeur — Private Chalets and Alpine Solitude in St. Moritz',
    titleAr: 'عظمة الجليد — شاليهات خاصة وعزلة ألبية ساحرة في سانت موريتز',
    subtitle: 'From pristine powder runs on the Corviglia to fireside fondue banquets in hand-hewn Engadin sanctuaries.',
    subtitleAr: 'من منحدرات مسحوق الثلج البكر في كورفيغليا إلى مآدب الفوندو بجانب المدفأة في ملاذات إنغادين الخشبية العريقة.',
    excerpt:
      'High in the Swiss Engadin valley, St. Moritz remains the gold standard of alpine exclusivity. Sleep in a private timber chalet with panoramic mountain vistas, soak in cedar hot tubs beneath starlit peaks, and ski untracked glacier slopes.',
    excerptAr:
      'في أعالي وادي إنغادين السويسري، تتربع سانت موريتز كمعيار ذهبي للحصرية الألبية المطلقة. استمتع بالإقامة في شاليه خشبي خاص بإطلالات بانورامية خلابة، واسترخِ في أحواض خشب الأرز الساخنة تحت النجوم، وتزلج على سفوح جليدية بكر.',
    category: 'Switzerland',
    categoryAr: 'سويسرا',
    destination: 'St. Moritz & Engadin, Switzerland',
    destinationAr: 'سانت موريتز وإنغادين، سويسرا',
    image: '/images/dest-switzerland.jpg',
    readTime: '7 min read',
    readTimeAr: '٧ دقائق قراءة',
    date: 'Winter 2026',
    dateAr: 'شتاء ٢٠٢٦',
    author: {
      name: 'Marc Oberhauser',
      nameAr: 'مارك أوبرهاوزر',
      role: 'Alpine Expedition Lead',
      roleAr: 'قائد البعثات الألبية',
      location: 'Zurich & St. Moritz',
      locationAr: 'زيورخ وسانت موريتز',
    },
    featured: false,
    pullQuote: 'There is a sacred quiet when fresh snow falls over the Engadin peaks at twilight—broken only by the crackle of pine logs in an open hearth.',
    pullQuoteAr: 'هناك سكون مقدس يلف قمم إنغادين عند الغسق مع تساقط الثلج البكر—لا يقطعه سوى طقطقة حطب الصنوبر في الموقد المفتوح.',
    content: [
      'For over a century, St. Moritz has held court as the birthplace of winter alpine luxury. Perched at 1,800 meters beneath sapphire skies that claim over 300 days of sunshine annually, this high valley balances aristocratic tradition with breathtaking natural majesty.',
      'Our travelers arrive via private helicopter charter from Zurich or Milan, landing directly at the private helipad of an exclusive multi-bedroom alpine sanctuary. Heated stone floors, hand-carved Swiss pine timbering, and panoramic floor-to-ceiling glass frame the snow-covered peaks of the Corviglia and Corvatsch.',
      'By day, a private Olympic ski instructor guides you across secluded off-piste powder bowls before the public lifts reach full capacity. Midday dining takes place in a historic 16th-century mountain refuge, where truffle raclette and artisanal Bündnerfleisch are served paired with rare Valais vintages.',
      'Evenings invite complete restoration: private cedar onsen hot tubs steaming in sub-zero alpine air, followed by bespoke five-course dinners curated by private chefs in the warmth of your chalet.',
    ],
    contentAr: [
      'لأكثر من قرن، اعتُبرت سانت موريتز المهد الأول لفخامة الشتاء الألبي الرفيعة. تقع على ارتفاع ١٨٠٠ متر تحت سماء لازوردية تتمتع بأكثر من ٣٠٠ يوم مشمس سنوياً، وتوازن هذه البلدة العريقة بين التقاليد الأرستقراطية وجلال الطبيعة الخاطف للأنفاس.',
      'يصل ضيوفنا عبر طائرة هليكوبتر خاصة ومباشرة من زيورخ أو ميلانو، لتهبط مباشرة على المهبط الخاص بشاليه جبلي فسيح ومتعدد الأجنحة. أرضيات حجرية مدفأة، أخشاب صنوبر سويسرية منحوتة يدوياً، وواجهات زجاجية ممتدة من الأرض إلى السقف تؤطر قمم كورفيغليا وكورفاتش الثلجية.',
      'خلال النهار، يرافقك مدرب تزلج أولمبي خاص عبر أودية ومسارات ثلجية منعزلة قبل وصول حشود المتزلجين. أما وجبة الغداء، فتُقدم في ملاذ جبلي تاريخي يعود للقرن السادس عشر، حيث تتذوق أشهى أطباق الراكليت بالكمأة مع اللحوم المجففة الحرفية.',
      'وفي المساء، تستعيد عافيتك بالكامل: أحواض مياه دافئة من خشب الأرز تتصاعد منها الأبخرة في الهواء الألبي المنعش، تليها مأدبة عشاء فاخرة من خمسة أطباق يعدها شيف خاص في دفء شاليهك.',
    ],
    keyHighlights: [
      'Helicopter transfer from Zurich Airport directly to private chalet helipad',
      'Exclusive buyout of a luxury ski-in / ski-out Engadin chalet',
      'Personal private ski master and avalanche guide for off-piste descents',
      'Fireside gourmet dining and private vintage sommelier tastings',
    ],
    keyHighlightsAr: [
      'نقل خاص بالمروحية من مطار زيورخ مباشرة إلى مهبط الشاليه الخاص',
      'حجز حصري كامل لشاليه ألبين فاخر مع إمكانية التزلج المباشر من الباب',
      'مرشد تزلج وخبير ثلوج أولمبي خاص للمنحدرات والمسارات المنعزلة',
      'عشاء فاخر بجانب الموقد الحطبي من إعداد شيف خاص وتذوق أرقى المشروبات',
    ],
  },
  {
    slug: 'italy-amalfi-riviera-yacht',
    title: 'Cliffside Reverie — Navigating the Amalfi Coast by Private Riva Yacht',
    titleAr: 'أحلام المنحدرات الساحلية — إبحار خاص على ساحل أمالفي بيخت ريفا',
    subtitle: 'From Positano’s pastel cliff cascades to hidden Capri sea grottoes: the quintessential Mediterranean voyage.',
    subtitleAr: 'من بيوت بوسيتانو الملونة المتدرجة إلى كهوف كابري البحرية الخفية: الرحلة المتوسطية الأكثر نقاءً وسحراً.',
    excerpt:
      'The Amalfi Coast is a timeless siren song. Board a handcrafted mahogany Riva Aquarama yacht, cruise past sheer limestone cliffs dripping with bougainvillea, and dine in secluded sea coves accessible only by water.',
    excerptAr:
      'ساحل أمالفي سيمفونية أسطورية خالدة. انطلق على متن يخت ريفا أكواراما المصنوع يدوياً من خشب الماهوجني، وأبحر بمحاذاة المنحدرات الجيرية الشاهقة، وتناول طعامك في خلجان بحرية منعزلة لا يمكن الوصول إليها إلا عبر الماء.',
    category: 'Italy',
    categoryAr: 'إيطاليا',
    destination: 'Amalfi Coast & Capri, Italy',
    destinationAr: 'ساحل أمالفي وكابري، إيطاليا',
    image: '/images/dest-italy.jpg',
    readTime: '7 min read',
    readTimeAr: '٧ دقائق قراءة',
    date: 'Summer 2026',
    dateAr: 'صيف ٢٠٢٦',
    author: {
      name: 'Matteo Bellini',
      nameAr: 'ماتيو بيليني',
      role: 'Mediterranean Fleet Director',
      roleAr: 'مدير أسطول البحر المتوسط',
      location: 'Capri & Naples',
      locationAr: 'كابري ونابولي',
    },
    featured: true,
    pullQuote: 'To view Positano from the varnished teak deck of a Riva yacht as sunset paints the cliffs in shades of amber and apricot is sheer Mediterranean poetry.',
    pullQuoteAr: 'مشاهدة بوسيتانو من على ظهر يخت ريفا الخشبي الفاخر بينما تغرب الشمس وتصبغ الجبال بألوان الكهرمان والمشمش، هي قصيدة شعرية متوسطية حقيقية.',
    content: [
      'The divine beauty of the Amalfi Coast cannot truly be felt from the congested cliffside roadways—it belongs entirely to the sea. The Tyrrhenian waters, impossibly cobalt and tranquil, lap against dramatic volcanic palisades where lemon orchards cascade down steep terraces.',
      'Our guests depart from the private marina at Amalfi aboard a bespoke Riva 38 Rivamare, gliding past ancient Saracen watchtowers toward the Faraglioni rock formations of Capri. With a private skipper and local maritime historian at the helm, you slip into hidden turquoise sea caves before the tourist catamarans appear on the horizon.',
      'Lunch is served at a discreet family-owned trattoria nestled in a secluded pebble cove near Nerano, where spaghetti alla nerano and freshly harvested sea urchins are served paired with crisp Greco di Tufo wines. The day concludes with an exclusive suite check-in at a cliffside villa in Ravello, 1,000 feet above the shimmering sea.',
    ],
    contentAr: [
      'الجمال الإلهي لساحل أمالفي لا يمكن الإحساس به حقاً من الطرق البرية المزدحمة—إنه ملك خالص للبحر. مياه البحر التيراني الزرقاء الهادئة ترتطم بالأجراف المهيبة حيث تتدلى بساتين الليمون عبر المنحدرات الحادة.',
      'ينطلق ضيوفنا من المرسى الخاص في أمالفي على متن يخت "ريفا ۳۸ ريفاماري" المصمم حسب الطلب، متجاوزين أبراج المراقبة التاريخية باتجاه تكوينات فاراليوني الصخرية الشهيرة في كابري. برفقة قبطان خاص ومؤرخ بحري محلي، تدخل مغارات بحرية فيروزية خفية قبل أن تظهر سفن السياح في الأفق.',
      'يُقدم الغداء في مطعم عائلي راقٍ ومنعزل في خليج صغير قرب نيرانو، حيث يُقدّم طبق سباغيتي نيرانو الشهير وثمار البحر الطازجة. ويختتم اليوم بالإقامة في جناح خاص داخل قصر تاريخي معلق على منحدرات رافيلو، بارتفاع ألف قدم فوق صفحة البحر المتلألئة.',
    ],
    keyHighlights: [
      'Private charter on a handcrafted Riva 38 Rivamare with skipper',
      'Exclusive access to private sea caves and the Faraglioni of Capri',
      'Helicopter transfer from Naples Capodichino directly to Ravello',
      'Reserved cliffside terrace suite at a legendary 5-star Ravello palazzo',
    ],
    keyHighlightsAr: [
      'يخت خاص مصنوع يدوياً من طراز ريفا ۳۸ مع قبطان وخبير بحري متمرس',
      'دخول حصري للكهوف البحرية الخاصة وتشكيلات فاراليوني الصخرية في كابري',
      'نقل خاص بالمروحية من مطار نابولي كابوديكينو مباشرة إلى رافيلو',
      'جناح تراس فاخر محجوز في قصر تاريخي أسطوري مصنف 5 نجوم يطل على البحر',
    ],
  },
  {
    slug: 'dubai-ultra-luxury-caravan',
    title: 'Skyline to Sand Dunes — Penthouse Living and Private Royal Caravans in Dubai',
    titleAr: 'من أفق السحاب إلى الكثبان الذهبية — بنتهاوس فائق الفخامة وقوافل ملكية في دبي',
    subtitle: 'Where futuristic architectural ambition meets the timeless soul of the Arabian desert.',
    subtitleAr: 'حيث تلتقي الجرأة المعمارية المستقبلية بالروح الأصيلة الخالدة للصحراء العربية.',
    excerpt:
      'Dubai is an architectural marvel that continuously rewrites the rulebook of luxury. Experience panoramic skyline penthouses with private infinity pools, followed by an elite desert conservation retreat under velvet night skies.',
    excerptAr:
      'دبي معجزة معمارية تعيد صياغة معايير الفخامة باستمرار. عش تجربة البنتهاوس البانورامي مع مسبح خاص لا متناهٍ، يليه ملاذ صحراوي ملكي تحت قبة سماء مخملية مرصعة بالنجوم.',
    category: 'Dubai',
    categoryAr: 'دبي',
    destination: 'Dubai & Arabian Desert, UAE',
    destinationAr: 'دبي والصحراء العربية، الإمارات',
    image: '/images/dest-uae.jpg',
    readTime: '6 min read',
    readTimeAr: '٦ دقائق قراءة',
    date: 'Autumn 2026',
    dateAr: 'خريف ٢٠٢٦',
    author: {
      name: 'Rashid Al-Maktoum',
      nameAr: 'راشد المكتوم',
      role: 'Emirates & Gulf Lead Curator',
      roleAr: 'كبير المنسقين لمنطقة الإمارات والخليج',
      location: 'Dubai & Abu Dhabi',
      locationAr: 'دبي وأبوظبي',
    },
    featured: false,
    pullQuote: 'Dubai bridges tomorrow and yesterday with astonishing grace—from 800-meter architectural spires to the primordial peace of golden desert dunes.',
    pullQuoteAr: 'تصل دبي بين الغد والأمس بأناقة مدهشة—من الأبراج الشاهقة بارتفاع ٨٠٠ متر إلى السكينة السرمدية لكثبان الرمال الذهبية.',
    content: [
      'Few places on earth contrast bold futurism with ancient desert tranquility quite like the United Arab Emirates. One hour you are sipping single-origin coffee on a private penthouse terrace overlooking the Burj Khalifa and the Palm Jumeirah; the next, you are cruising across the virgin dunes of the Dubai Desert Conservation Reserve.',
      'Our travelers enjoy priority access to Dubai’s most guarded sanctums: private museum buyouts, yacht charters along the Dubai Canal, and exclusive shopping salons with master jewelers. When the desert calls, our team arranges a private convoy of vintage 1950s Land Rovers led by falconry masters.',
      'Nightfall in the private royal desert camp unfolds around fragrant agarwood braziers. While a private Emirati chef prepares seven-hour slow-cooked lamb ouzi and camel milk saffron desserts, stargazers admire planetary rings through high-powered observatory optics.',
    ],
    contentAr: [
      'أماكن قليلة في العالم تجمع بين الحداثة الجريئة والسكينة الصحراوية مثل دولة الإمارات. في لحظة ترتشف قهوتك المختصة على شرفة بنتهاوس تطل على برج خليفة ونخلة جميرا، وفي اللحظة التالية تعبر الكثبان العذراء في محمية دبي الصحراوية.',
      'يحظى مسافرونا بوصول ذي أولوية مطلقة لأكثر الأماكن حصرية في دبي: جولات خاصة بالمتاحف، يخوت مستأجرة في قناة دبي المائية، وصالونات تسوق مغلقة مع كبار صائغي المجوهرات. وعندما تناديك الصحراء، نوفر أسطولاً خاصاً من سيارات لاند روفر كلاسيكية بقيادة صقّارين محترفين.',
      'حلول الليل في المخيم الملكي الخاص يصحبه عبق العود والبخور المعتق. بينما يحضر شيف إماراتي خاص طبق القوزي المطهو على نار هادئة والحلويات المزينة بالزعفران وحليب الإبل، يستمتع الضيوف برؤية حلقات الكواكب عبر تلسكوبات فلكية متطورة.',
    ],
    keyHighlights: [
      'Private sky villa stay with panoramic views of the Arabian Gulf',
      'VIP sunset yacht cruise along the Dubai Marina and Atlantis The Royal',
      'Exclusive desert reserve buyout with royal falconry and majlis dining',
      'Personal chauffeur and concierge liaison in a custom Rolls-Royce Phantom',
    ],
    keyHighlightsAr: [
      'إقامة في فيلا معلقة بإطلالة بانورامية كاملة على الخليج العربي',
      'رحلة يخت فاخرة عند الغروب بمحاذاة مرسى دبي وأتلانتس ذا رويال',
      'حجز خاص وحصري لمحمية صحراوية مع عروض الصقارة الملكية والمجلس',
      'سيارة رولز رويس فانتوم مخصصة مع سائق خاص وكونسيرج على مدار الساعة',
    ],
  },
  {
    slug: 'russia-imperial-winter-hermitage',
    title: 'The Imperial Winter — Private Hermitage Nights and Gilded Palaces of St. Petersburg',
    titleAr: 'الشتاء الإمبراطوري — ليلة خاصة في متحف الإرميتاج وقصور سانت بطرسبرغ المذهبة',
    subtitle: 'Experience the grandeur of the Tsars: private palace ballroom concerts, troika rides, and snow-draped canal romance.',
    subtitleAr: 'استمتع بعظمة القياصرة: حفلات موسيقية خاصة في قاعات القصور، عربات الترويكا، وسحر القنوات المائية المغطاة بالثلوج.',
    excerpt:
      'There is no romance quite like St. Petersburg in the depth of winter. Walk the snow-dusted granite embankments of the frozen Neva, tour the State Hermitage Museum after closing hours in complete privacy, and dine in imperial salons.',
    excerptAr:
      'لا شيء يضاهي سحر ورومانسية سانت بطرسبرغ في قلب الشتاء. تجول على ضفاف نهر نيفا المتجمد، واستكشف متحف الإرميتاج بعد ساعات الإغلاق في خصوصية تامة، وتناول العشاء في صالونات القياصرة.',
    category: 'Russia',
    categoryAr: 'روسيا',
    destination: 'St. Petersburg & Moscow, Russia',
    destinationAr: 'سانت بطرسبرغ وموسكو، روسيا',
    image: '/images/dest-russia.jpg',
    readTime: '8 min read',
    readTimeAr: '٨ دقائق قراءة',
    date: 'Winter 2026',
    dateAr: 'شتاء ٢٠٢٦',
    author: {
      name: 'Elena Volkova',
      nameAr: 'إيلينا فولكوفا',
      role: 'Eurasian Art & Heritage Director',
      roleAr: 'مديرة الفنون والتراث الأوراسي',
      location: 'St. Petersburg',
      locationAr: 'سانت بطرسبرغ',
    },
    featured: false,
    pullQuote: 'To wander through the Winter Palace’s Jordan Staircase and Malachite Room after hours with only the curator’s footsteps echoing is an unforgettable brush with imperial history.',
    pullQuoteAr: 'التجول في درج الأردن وقاعة الملاكيت في قصر الشتاء بعد ساعات العمل مع صدى خطوات القيّم فقط، هو لقاء استثنائي لا يُنسى مع التاريخ الإمبراطوري.',
    content: [
      'Peter the Great envisioned St. Petersburg as his window to Europe, carved from northern marshes with sheer imperial will. In winter, when a pristine blanket of snow silences the city and amber gas lamps reflect off frozen canals, St. Petersburg reveals its truest, most magnificent character.',
      'Our guests experience the State Hermitage Museum as no ordinary visitor can: after public hours, under the soft glow of gilded chandeliers, an exclusive tour guided by the museum’s senior conservator leads you through Da Vinci, Rembrandt, and the Peacock Clock in absolute silence.',
      'By day, private horse-drawn troikas whisk you through the snow-laden birch forests of Pavlovsk and Tsarskoye Selo to view the reconstructed Amber Room. In the evening, attend a private box performance at the Mariinsky Theatre followed by imperial caviar tastings in a historic 19th-century aristocratic mansion.',
    ],
    contentAr: [
      'رأى بطرس الأكبر في سانت بطرسبرغ نافذته إلى أوروبا، وأنشأها من قلب المستنقعات الشمالية بإرادة إمبراطورية فولاذية. في الشتاء، عندما يكسو الثلج المدينة بسكون ساحر وتنعكس أضواء المصابيح الغازية على القنوات المتجمدة، تكشف المدينة عن أعظم صورها.',
      'يختبر ضيوفنا متحف الإرميتاج الشهير بطريقة لا يحظى بها الزائر العادي: بعد إغلاق الأبواب أمام الجمهور، وتحت البريق الخافت للثريات المذهبة، يقودك كبير أمناء المتحف في جولة خاصة بين روائع دافنشي ورامبرانت وساعة الطاووس الأسطورية في صمت تام.',
      'نهاراً، تأخذك عربات الترويكا التقليدية التي تجرها الخيول عبر غابات البتولا المغطاة بالثلوج في بافلوفسك وتسارسكوي سيلو لمشاهدة غرفة العنبر المعاد بناؤها. وفي المساء، حضور خاص في المقصورة الملكية بمسرح مارينسكي يليه تذوق الكافيار الإمبراطوري الفاخر في قصر أرستقراطي من القرن التاسع عشر.',
    ],
    keyHighlights: [
      'Exclusive after-hours private access to the State Hermitage Museum',
      'VIP royal box seating at the Mariinsky Theatre for premier ballets',
      'Traditional horse-drawn troika excursion across imperial country estates',
      'Private Beluga caviar and artisanal vodka masterclass with a master sommelier',
    ],
    keyHighlightsAr: [
      'دخول خاص وحصري لمتحف الإرميتاج الحكومي بعد ساعات الإغلاق الرسمية',
      'مقاعد كبار الشخصيات في المقصورة الملكية بمسرح مارينسكي للعروض الأولى',
      'جولة تقليدية بعربة الترويكا التي تجرها الخيول عبر الضياع الإمبراطورية التاريخية',
      'جلسة خاصة لتذوق كافيار البيلوغا الفاخر مع خبير تذوق معتمد',
    ],
  },
  {
    slug: 'guide-to-alula',
    title: 'A Guide to AlUla — Where Ancient Stories Meet Quiet Desert Skies',
    titleAr: 'دليل إلى العُلا — حيث تلتقي الحكايات القديمة بهدوء سماء الصحراء',
    subtitle: 'From Hegra’s UNESCO tombs to starlit sandstone canyons: an insider briefing for the discerning wanderer.',
    subtitleAr: 'من مقابر الحِجر النبطية المدرجة باليونسكو إلى أخاديد الحجر الرملي المضاءة بالنجوم: مرجع استثنائي للمسافر المتميز.',
    excerpt:
      'AlUla is not just a destination; it’s a feeling you carry home with you. From Hegra’s ancient tombs to Elephant Rock’s wind-sculpted majesty, discover a land where 200,000 years of human history unfold beneath the clearest skies on earth.',
    excerptAr:
      'العُلا ليست مجرد وجهة؛ بل هي شعور يبقى معك طويلاً. من مقابر الحِجر القديمة إلى شموخ جبل الفيل المنحوت بالرياح، اكتشف أرضاً يمتد فيها التاريخ البشري لمئتي ألف عام تحت أصفى سماء على وجه الأرض.',
    category: 'Saudi Arabia',
    categoryAr: 'السعودية',
    destination: 'AlUla, Saudi Arabia',
    destinationAr: 'العُلا، المملكة العربية السعودية',
    image: '/images/saudi-alula.jpg',
    readTime: '8 min read',
    readTimeAr: '٨ دقائق قراءة',
    date: 'Autumn 2026',
    dateAr: 'خريف ٢٠٢٦',
    author: {
      name: 'Tariq Al-Mansoor',
      nameAr: 'طارق المنصور',
      role: 'Head of Cultural Curation',
      roleAr: 'رئيس التنسيق الثقافي',
      location: 'AlUla & Riyadh',
      locationAr: 'العُلا والرياض',
    },
    featured: false,
    pullQuote: 'In AlUla, the desert does not conceal its memories; it carves them directly into monumental rose-gold granite.',
    pullQuoteAr: 'في العُلا، لا تخفي الصحراء ذكرياتها، بل تنحتها مباشرة على صخور الغرانيت الوردية والذهبية الشامخة.',
    content: [
      'There is a specific stillness that arrives over the Ashar Valley at twilight. As the afternoon heat surrenders to the cool mountain breeze, the colossal sandstone monoliths shift from burnt sienna to deep plum, casting shadows that have lengthened across this sand for over two hundred millennia.',
      'To stand before the Tomb of Lihyan son of Kuza at Hegra without crowds—arranged through our private off-hours access—is to experience archaeology as intimate contemplation. Here, the Nabataeans carved their eternal residences into bare rock with such surgical symmetry that their chisel marks remain visible after two thousand years of desert wind.',
      'Beyond the monuments lies the hidden oasis: eight million date palms shaded by citrus groves and ancient aqueducts. We recommend reserving an afternoon at a secluded desert tented sanctuary, where local rawi (traditional storytellers) recount the trade journeys that once tied Arabia to Rome, India, and the Levant over cardamom-infused Gahwa.',
      'Nightfall brings the crowning spectacle. With minimal ambient light, AlUla’s skies reveal the Milky Way in high-definition clarity. Paired with a telescope and an astrophysicist guide, an evening under these constellations transforms from simple stargazing into a humbling encounter with deep time.',
    ],
    contentAr: [
      'هناك سكينة خاصة تهبط على وادي عشار عند الغسق. ومع انحسار حرارة الظهيرة أمام نسيم الجبال العليل، تتحول كتل الحجر الرملي الهائلة من اللون البني المحمر إلى البرقوقي الداكن، راسمة ظلالاً تمتد عبر هذه الرمال منذ أكثر من مئتي ألف عام.',
      'الوقوف أمام قصر الفريد (مقبرة لحيان بن كوزا) في الحِجر بمفردك بعيداً عن أي حشود—من خلال تصاريحنا الخاصة خارج أوقات الزيارة—هو تجربة تجعل من علم الآثار تأملاً روحياً دافئاً. هنا نحت الأنباط مدافنهم الخالدة في الصخر الصلب بدقة متناهية تجعل آثار أزاميلهم واضحة حتى اليوم رغم مرور ألفي عام من رياح الصحراء.',
      'وراء المعالم الصخرية تكمن الواحة الخفية: أكثر من مليوني نخلة تظللها بساتين الحمضيات وقنوات الري العتيقة. نوصي بقضاء أمسية في مخيم صحراوي منعزل، حيث يروي الرواة المحليون قصص قوافل التجارة القديمة التي ربطت الجزيرة العربية بروما والهند والشام على فنجان من القهوة السعودية المتبلة بالهيل.',
      'ومع حلول الليل يبدأ المشهد الأبهى. مع غياب التلوث الضوئي، تكشف سماء العُلا عن مجرة درب التبانة بنقاء فائق. برفقة تلسكوب فلكي متطور وعالم فلك مرشد، تتحول الأمسية من مجرد تأمل للنجوم إلى لقاء ملهم مع أسرار الكون السحيق.',
    ],
    keyHighlights: [
      'Private dawn entrance to Hegra before general opening hours',
      'Exclusive villa stay tucked into the Ashar Valley sandstone cliffs',
      'Helicopter flight over Elephant Rock and the Maraya mirrored hall',
      'Farm-to-table dining under century-old date palms in the ancient oasis',
    ],
    keyHighlightsAr: [
      'دخول خاص فجراً إلى الحِجر قبل ساعات الافتتاح العامة',
      'إقامة في فيلا خاصة فاخرة بين منحدرات وادي عشار الصخرية',
      'رحلة مروحية خاصة فوق صخرة الفيل ومسرح مرايا العاكس',
      'عشاء فاخر من المزرعة إلى المائدة تحت ظلال نخيل الواحة القديمة',
    ],
  },
  {
    slug: 'kyoto-slow-elegance',
    title: 'The Art of Slow Elegance — Private Ryokans and Secret Zen Gardens of Kyoto',
    titleAr: 'فن الأناقة المتأنية — نزل الريوكان الخاصة وحدائق الزن الخفية في كيوتو',
    subtitle: 'Behind temple gates closed to the public: moss sanctums, private tea ceremonies, and generational Kaiseki mastery.',
    subtitleAr: 'وراء بوابات المعابد المغلقة أمام العامة: ملاذات الطحالب، مراسم الشاي الخاصة، وإتقان فن الكايسيكي المتوارث.',
    excerpt:
      'Kyoto does not reveal its soul to the hurried traveler. Step behind hand-hewn cedar gates into private temple courtyards where matcha masterclasses and lantern-lit kaiseki banquets redefine the concept of mindful luxury.',
    excerptAr:
      'لا تكشف كيوتو عن روحها للمسافر المتعجل. اخطُ وراء بوابات الأرز الخشبية المنحوتة يدوياً إلى باحات المعابد الخاصة، حيث تعيد دروس الماتشا ومآدب الكايسيكي المضاءة بالفوانيس تعريف مفهوم الرفاهية والسكينة.',
    category: 'Japan',
    categoryAr: 'اليابان',
    destination: 'Kyoto & Tokyo, Japan',
    destinationAr: 'كيوتو وطوكيو، اليابان',
    image: '/images/dest-japan.jpg',
    readTime: '7 min read',
    readTimeAr: '٧ دقائق قراءة',
    date: 'Spring 2026',
    dateAr: 'ربيع ٢٠٢٦',
    author: {
      name: 'Kenzo Takahashi',
      nameAr: 'كينزو تاكاهاشي',
      role: 'East Asia Bespoke Curator',
      roleAr: 'منسق رحلات شرق آسيا الخاصة',
      location: 'Kyoto & Tokyo',
      locationAr: 'كيوتو وطوكيو',
    },
    featured: false,
    pullQuote: 'In Kyoto, true luxury is measured by the silence between raked pebbles in a 600-year-old rock garden.',
    pullQuoteAr: 'في كيوتو، تُقاس الفخامة الحقيقية بالسكينة التي تسكن بين الحصى المنسق في حديقة زن عمرها أكثر من ٦٠٠ عام.',
    content: [
      'While millions visit Kyoto annually, only a privileged few ever experience its private sanctums. Through our intimate relationships with hereditary temple abbots, our travelers step past morning ropes into secluded Zen sub-temples in Daitoku-ji before any visitor arrives.',
      'The morning begins with a private chado (tea ceremony) conducted by a 14th-generation tea master, whose family has cultivated Uji matcha since the Edo period. The precision of each gesture, the delicate fragrance of tatami, and the gentle patter of mountain rain on cedar shingles create an atmosphere of profound serenity.',
      'Evenings belong to the culinary sublime: an exclusive twelve-course kaiseki dinner inside a private machiya townhouse overlooking the Shirakawa canal, where hyper-seasonal ingredients—wild mountain herbs, sweet sea bream, and Kyoto heirloom vegetables—are served on centuries-old lacquerware.',
    ],
    contentAr: [
      'بينما يزور الملايين كيوتو سنوياً، قلة قليلة فقط هي من تحظى بالدخول إلى ملاذاتها الخاصة. بفضل علاقاتنا المباشرة مع كهنة المعابد المتوارثين، يعبر ضيوفنا قبل الجميع إلى معابد الزن الفرعية الهادئة في دايتوكو-جي قبل وصول أي زائر.',
      'يبدأ الصباح بمراسم شاي يابانية خاصة (شادو) يقودها معلم شاي من الجيل الرابع عشر، توارثت عائلته زراعة ماتشا أوجي منذ عصر إيدو. دقة كل إيماءة، والرائحة الزكية لحصائر التاتامي، وصوت قطرات المطر اللطيف على ألواح خشب الأرز يخلق أجواء من الصفاء الروحي العميق.',
      'أما الأمسيات فمكرسة للتذوق الرفيع: عشاء كايسيكي خاص من اثني عشر طبقاً داخل منزل تقليدي (ماتشيا) يطل على قناة شيراكاوا، حيث تُقدم أندر المكونات الموسمية الطازجة على أوانٍ خشبية وأثرية مطلية باللاكيه تعود لقرون.',
    ],
    keyHighlights: [
      'After-hours private access to UNESCO Zen rock temples',
      'Stay in an exclusive 5-suite heritage ryokan with private cedar onsen',
      'Intimate tea masterclass with hereditary Uji tea masters',
      'Private Shinkansen Gran Class transfers between Tokyo and Kyoto',
    ],
    keyHighlightsAr: [
      'دخول خاص واستثنائي بعد ساعات العمل لمعابد الزن المدرجة في اليونسكو',
      'إقامة في ريوكان تراثي حصري من 5 أجنحة مع حوض أونسن من خشب الأرز',
      'جلسة خاصة وحصرية لتحضير الشاي مع كبار أساتذة الشاي في أوجي',
      'تنقلات قطار شينكانسن فئة "جران كلاس" الفاخرة بين طوكيو وكيوتو',
    ],
  },
  {
    slug: 'maldives-beyond-overwater',
    title: 'Beyond the Overwater Villa — Private Sandbanks and Starlight Lagoons of Baa Atoll',
    titleAr: 'ما وراء الفيلا العائمة — ضفاف رملية خاصة وبحيرات مضاءة بالنجوم في با أتول',
    subtitle: 'Why the UNESCO Biosphere Reserve offers the ultimate secluded marine sanctuary on earth.',
    subtitleAr: 'لماذا تمثل محمية المحيط الحيوي لليونسكو أرقى ملاذ بحري منعزل على وجه الأرض.',
    excerpt:
      'The Maldives is renowned for luxury villas, but its true magic awakens when you set sail on a private yacht into pristine UNESCO lagoons, swimming with gentle manta rays under turquoise skies.',
    excerptAr:
      'تشتهر المالديف بفيلاتها فوق الماء، لكن سحرها الحقيقي يبدأ عندما تبحر على متن يخت خاص في بحيرات محمية اليونسكو البكر، وتسبح مع أسماك المانتا الرقيقة تحت زرقة السماء.',
    category: 'Maldives',
    categoryAr: 'المالديف',
    destination: 'Baa Atoll, Maldives',
    destinationAr: 'با أتول، جزر المالديف',
    image: '/images/dest-maldives.jpg',
    readTime: '6 min read',
    readTimeAr: '٦ دقائق قراءة',
    date: 'Year-Round 2026',
    dateAr: 'على مدار العام ٢٠٢٦',
    author: {
      name: 'Amira Patel',
      nameAr: 'أميرة باتيل',
      role: 'Private Islands Director',
      roleAr: 'مديرة الجزر الخاصة',
      location: 'Malé & Dubai',
      locationAr: 'ماليه ودبي',
    },
    featured: false,
    pullQuote: 'To dine alone on an uninhabited sandbank submerged by the incoming starlight tide is the very definition of unscripted romance.',
    pullQuoteAr: 'تناول العشاء بمفردك على ضفة رملية غير مأهولة تغمرها مياه المد المتلألئة تحت النجوم هو أقصى درجات الرومانسية الأصيلة.',
    content: [
      'While most travelers picture the classic wooden walkway over turquoise shallows, the Baa Atoll UNESCO Biosphere Reserve offers an underwater symphony matched by few places on earth.',
      'Between May and November, lunar tides push massive plankton blooms into Hanifaru Bay, attracting hundreds of graceful reef manta rays and gentle whale sharks. Our private marine biologist escorts our travelers via luxury catamaran, timing arrivals to coincide with tranquil, uncrowded feeding windows.',
      'As night settles over the Indian Ocean, our concierge orchestrates a candlelit dinner set directly onto an uninhabited sandbank miles from any resort, surrounded solely by bioluminescent waves and the soft whisper of the trade winds.',
    ],
    contentAr: [
      'بينما يتخيل أغلب المسافرين الجسر الخشبي التقليدي فوق المياه الفيروزية الضحلة، تقدم محمية با أتول للمحيط الحيوي التابعة لليونسكو سيمفونية بحرية لا تضاهيها سوى أماكن معدودة حول العالم.',
      'بين شهري مايو ونوفمبر، تدفع حركة المد القمري تيارات غنية بالعوالق إلى خليج هانيفارو، جاذبة المئات من أسماك المانتا راي وأسماك قرش الحوت اللطيفة. يرافق عالم الأحياء البحرية الخاص ضيوفنا على متن قطمران فاخر، مع ضبط أوقات الوصول لتتزامن مع فترات التغذية الهادئة بعيداً عن أي قوارب أخرى.',
      'ومع حلول الليل فوق المحيط الهندي، يرتب الكونسيرج عشاءً رومانسياً على ضوء الشموع على ضفة رملية بيضاء معزولة تماماً في عرض البحر، تحيط بك فقط الأمواج المتلألئة بالضيائية الحيوية وهمس الرياح الاستوائية الهادئة.',
    ],
    keyHighlights: [
      'Private seaplane arrival directly to your multi-bedroom island residence',
      'Exclusive yacht charter with marine biologist for manta ray encounters',
      'Sunset champagne dinner on an ephemeral private sandbank',
      'Overwater stargazing lounge with in-villa telescope observatory',
    ],
    keyHighlightsAr: [
      'وصول بطائرة مائية خاصة مباشرة إلى مقر إقامتك المالديفي الفاخر',
      'يخت خاص مع عالم أحياء بحرية للسباحة الحصرية مع أسماك المانتا',
      'عشاء غروب رومانسي خاص على ضفة رملية منعزلة في قلب المحيط',
      'صالة مراقبة النجوم فوق الماء مع تلسكوب فلكي خاص بالفيلا',
    ],
  },
  {
    slug: 'french-chateaux-terroir',
    title: 'Châteaux of the Loire — Private Cellars, Vintage Aviation, and Haute Terroir',
    titleAr: 'قصور وادي اللوار — أقبية تاريخية، طيران كلاسيكي، وأرقى مزارع فرنسا',
    subtitle: 'A bespoke journey through renaissance fortresses, Grand Cru vintages, and Michelin-starred garden retreats.',
    subtitleAr: 'رحلة مصممة خصيصاً بين قلاع عصر النهضة، وعصائر العنب التاريخية، وملاذات الحدائق الحائزة على نجوم ميشلان.',
    excerpt:
      'Trade the Parisian bustle for the regal serenity of the Loire Valley. Fly by private helicopter over Chambord’s turrets, taste rare vintages in vaulted limestone caves, and sleep in suites once inhabited by French nobility.',
    excerptAr:
      'استبدل صخب باريس بهدوء وادي اللوار الملكي الخالد. حلق بطائرة هليكوبتر خاصة فوق أبراج قصر شامبور، وتذوق خيارات حصرية في كهوف الحجر الجيري العتيقة، ونَم في أجنحة سكنها نبلاء فرنسا.',
    category: 'Europe',
    categoryAr: 'أوروبا',
    destination: 'Loire Valley & Paris, France',
    destinationAr: 'وادي اللوار وباريس، فرنسا',
    image: '/images/pkg-chateau-story.jpg',
    readTime: '8 min read',
    readTimeAr: '٨ دقائق قراءة',
    date: 'Summer 2026',
    dateAr: 'صيف ٢٠٢٦',
    author: {
      name: 'Édouard Laurent',
      nameAr: 'إدوارد لوران',
      role: 'European Heritage Specialist',
      roleAr: 'أخصائي التراث الأوروبي',
      location: 'Paris & Geneva',
      locationAr: 'باريس وجنيف',
    },
    featured: false,
    pullQuote: 'The Loire Valley is a living fairytale where wine cellars carved into tufa limestone have guarded royal vintages for five centuries.',
    pullQuoteAr: 'وادي اللوار حكاية خيالية حية، حيث حفظت أقبية الحجر الجيري المنحوتة كنوز التاريخ الملكي لأكثر من خمسة قرون.',
    content: [
      'Just fifty minutes southwest of Paris by helicopter, the Loire Valley unfurls like an embroidered green tapestry stitched with meandering rivers and limestone châteaux.',
      'Our travelers bypass queues entirely, landing directly on private estate grounds for exclusive tours led by descendants of the original châtelains. In subterranean cellars carved deep into chalky tufa cliffs, private sommeliers unlock historic Vouvray and Chinon vintages unavailable on any commercial market.',
      'Dinner is hosted in private palace orangeries illuminated by thousands of beeswax candles, where three-star Michelin chefs prepare bespoke degustation menus highlighting produce harvested hours earlier from royal estate permaculture gardens.',
    ],
    contentAr: [
      'على بعد خمسين دقيقة فقط جنوب غرب باريس بالمروحية، ينبسط وادي اللوار كنسيج أخضر مطرز بالأنهار المتعرجة والقصور الحجرية المهيبة.',
      'يتجاوز مسافرونا جميع طوابير الانتظار، ويهبطون مباشرة على أراضي القصور الخاصة لجولات حصرية يقودها أحفاد عائلات النبلاء الأصليين. وفي أقبية الكهوف المنحوتة عميقاً في منحدرات الحجر الجيري، يفتح خبراء التذوق أرقى المجموعات التاريخية التي لا تتوفر في أي أسواق تجارية.',
      'ويُقام العشاء في حدائق البرتقال المغلقة للقصر والمضاءة بآلاف من شموع شمع العسل الطبيعي، حيث يُعد طهاة حائزون على 3 نجوم ميشلان قوائم طعام مبتكرة تعتمد على محاصيل طازجة جُمعت قبل ساعات من حدائق القصر الملكي.',
    ],
    keyHighlights: [
      'Helicopter transfer from Paris Le Bourget directly to private château grounds',
      'Private salon buyouts at Château de Chenonceau and Chambord',
      'Rare vintage tastings with generational winemakers in vaulted caves',
      'Bespoke vintage sports car driving route along the Loire riverbanks',
    ],
    keyHighlightsAr: [
      'نقل هليكوبتر خاص من باريس لو بورجيه مباشرة إلى حدائق القصر الخاصة',
      'حجز قاعات وصالونات خاصة في قصر شينونسو وقصر شامبور',
      'جلسات تذوق نادرة مع صانعي المنتجات التراثية في أقبية حجرية تاريخية',
      'مسار قيادة بسيارات كلاسيكية نادرة بمحاذاة ضفاف نهر اللوار الساحر',
    ],
  },
  {
    slug: 'cappadocia-dawn-balloons',
    title: 'Cappadocia at Dawn — Rose Valley Cave Sanctuaries and Silent Balloon Ascents',
    titleAr: 'كابادوكيا عند الفجر — ملاذات كهوف وادي الورد وتحليق المناطيد الصامت',
    subtitle: 'Floating above fairy chimneys in a private wicker basket as sunrise ignites the Anatolian plateau.',
    subtitleAr: 'التحليق فوق مداخن الجنيات في سلة خيزران خاصة بينما يوقظ شروق الشمس هضبة الأناضول الساحرة.',
    excerpt:
      'Few spectacles on earth rival Cappadocia at dawn, when hundreds of colorful hot air balloons lift into the crisp morning sky above ancient cave churches and honeycombed rock valleys.',
    excerptAr:
      'أماكن قليلة على الأرض تضاهي روعة كابادوكيا فجراً، عندما ترتفع مئات المناطيد الملونة في هواء الصباح المنعش فوق الكنائس الصخرية القديمة ووديان الصخور المنحوتة.',
    category: 'Turkey',
    categoryAr: 'تركيا',
    destination: 'Cappadocia & Istanbul, Turkey',
    destinationAr: 'كابادوكيا وإسطنبول، تركيا',
    image: '/images/pkg-cappadocia-story.jpg',
    readTime: '5 min read',
    readTimeAr: '٥ دقائق قراءة',
    date: 'Spring 2026',
    dateAr: 'ربيع ٢٠٢٦',
    author: {
      name: 'Leyla Demir',
      nameAr: 'ليلى دمير',
      role: 'Anatolian & Bosphorus Specialist',
      roleAr: 'أخصائية الأناضول والبوسفور',
      location: 'Istanbul',
      locationAr: 'إسطنبول',
    },
    featured: false,
    pullQuote: 'Hovering motionless 1,000 feet above volcanic spires as the call to prayer echoes across the valley is unforgettable.',
    pullQuoteAr: 'التحليق دون حراك على ارتفاع ألف قدم فوق القمم البركانية بينما يتردد صدى نداء الفجر عبر الوادي، هو شعور لا يمحى من الذاكرة.',
    content: [
      'Millennia of volcanic eruptions followed by wind erosion carved Cappadocia into an otherworldly moonscape of tuff pinnacles and cave dwellings. But experiencing it in supreme luxury requires meticulous timing and insider knowledge.',
      'Our guests ascend before the crowd in a private four-passenger basket piloted by an elite veteran flier, drifting through the contours of Love Valley and Rose Valley as golden dawn light illuminates ancient Byzantine troglodyte frescoes.',
      'Upon touchdown, a champagne breakfast is laid out in a secluded canyon terrace, followed by private cave spa treatments and evening rooftop dining in Uchisar overlooking the valley.',
    ],
    contentAr: [
      'شكّلت ملايين السنين من الانفجارات البركانية وعوامل التعرية كابادوكيا في هيئة تضاريس خيالية تشبه سطح القمر بأبراج الطف البركاني والمساكن الكهفية. لكن خوض هذه التجربة بأقصى درجات الفخامة يتطلب توقيتاً دقيقاً ومعرفة محلية عميقة.',
      'يصعد ضيوفنا قبل الجميع في سلة منطاد خاصة تتسع لأربعة ركاب يقودها طيار متمرس ونخبوي، ليعبروا بين تضاريس وادي الحب ووادي الورد بينما تضيء أشعة الفجر الذهبية الجداريات البيزنطية الأثرية داخل الكهوف.',
      'وعند الهبوط، يُعد إفطار فاخر مع المشروبات الفوارة على تراس وادٍ منعزل، تتبعه جلسات سبا وعناية خاصة داخل الكهوف، وعشاء مسائي ساحر على سطح مبنى في أوتشيسار يطل على امتداد الوادي بأكمله.',
    ],
    keyHighlights: [
      'Exclusive private hot air balloon ascent with custom takeoff window',
      'Restored boutique cave suite carved directly into the mountain rock',
      'Private archaeological exploration of Derinkuyu underground city',
      'Direct private jet charter connection between Istanbul and Nevşehir',
    ],
    keyHighlightsAr: [
      'تحليق خاص وحصري بالمنطاد مع توقيت إقلاع مخصص ومميز',
      'إقامة في جناح كهفي فاخر ومُرمم منحوت مباشرة في صخر الجبل',
      'استكشاف أثري خاص برفقة مرشد لمدينة ديرينكويو تحت الأرض',
      'ربط مباشر بطائرة نفاثة خاصة بين إسطنبول ونوشهر',
    ],
  },
  {
    slug: 'stories-from-jeddah',
    title: 'Stories from Jeddah — From Coral Stone Alleys to Virgin Red Sea Reefs',
    titleAr: 'حكايات من عروس البحر — من أزقة الحجر المنقبي إلى شعاب البحر الأحمر البكر',
    subtitle: 'Wandering the perfume-scented roshan balconies of Al Balad and the avant-garde pulse of the coastal corniche.',
    subtitleAr: 'التجول بين رواشين البلد العطرة بنسيم البحر والنبض العصري لكورنيش جدة الساحلي الفاتن.',
    excerpt:
      'Jeddah feels like a warm sea breeze. Wander through Al Balad’s centuries-old alleys, discover the floating mosque, and dive into teamLab Borderless — where the historic and the cutting-edge live side by side.',
    excerptAr:
      'جدة تشبه نسيم بحر دافئ يلامس الروح. تجول بين أزقة البلد العريقة، واكتشف المسجد العائم، وانغمس في عالم تيم لاب بلا حدود—حيث يعيش التراث الخالد والابتكار المستقبلي جنباً إلى جنب.',
    category: 'Saudi Arabia',
    categoryAr: 'السعودية',
    destination: 'Jeddah & Red Sea, Saudi Arabia',
    destinationAr: 'جدة والبحر الأحمر، المملكة العربية السعودية',
    image: '/images/saudi-jeddah.jpg',
    readTime: '6 min read',
    readTimeAr: '٦ دقائق قراءة',
    date: 'Late 2026',
    dateAr: 'أواخر ٢٠٢٦',
    author: {
      name: 'Soraya Binladen',
      nameAr: 'ثريا بن لادن',
      role: 'Senior Red Sea Specialist',
      roleAr: 'كبيرة أخصائيي البحر الأحمر',
      location: 'Jeddah',
      locationAr: 'جدة',
    },
    featured: false,
    pullQuote: 'Al Balad is a living museum where the aroma of oud, freshly roasted coffee, and sea brine tell the history of global seafaring.',
    pullQuoteAr: 'حي البلد متحف حيّ تفوح منه روائح العود والقهوة المحمصة وعبق البحر، لتروي فصولاً من تاريخ الملاحة والتجارة العالمية.',
    content: [
      'Few ports in the Islamic world carry the storied romance of Jeddah. For centuries the maritime gateway to Mecca and Medina, this Red Sea metropolis has nurtured an outward-looking cosmopolitanism reflected in its architecture, cuisine, and warmth.',
      'In Al Balad, the UNESCO-listed historic quarter, multi-tiered coral houses rise into the sky like ornate wooden towers. Their defining feature is the mangour roshan—intricately carved teak bay windows designed to capture maritime breezes while safeguarding household privacy.',
      'Yet Jeddah refuses to be bounded by antiquity. Ten minutes north along the waterfront, the newly inaugurated teamLab Borderless museum introduces an ethereal digital playground of light and interactive art, demonstrating how effortlessly the city pivots from deep heritage to bold tomorrow.',
    ],
    contentAr: [
      'قلة من موانئ العالم الإسلامي تحمل الرومانسية والتاريخ العريق الذي تحمله جدة. لقرون طويلة كانت البوابة البحرية لمكة المكرمة والمدينة المنورة، ونمت في هذه الحاضرة البحرية ثقافة انفتاح وتنوع تعكسها عمارتها ومطبخها وحفاوة أهلها.',
      'في منطقة البلد التاريخية المدرجة في قائمة اليونسكو، ترتفع المنازل المبنية بالحجر المنقبي والمرجان في السماء كأبراج خشبية مزخرفة. وتميزها الرواشين الخشبية المصنوعة من خشب الساج بتفاصيلها المعقدة والمصممة لاحتواء نسيم البحر وحفظ خصوصية أهل الدار.',
      'ومع ذلك، ترفض جدة أن تتوقف عند حدود الماضي. فعلى بعد عشر دقائق شمالاً بمحاذاة الواجهة البحرية، يفتح متحف تيم لاب بلا حدود (teamLab Borderless) أبوابه كفضاء رقمي ساحر للضوء والفن التفاعلي، ليجسد كيف تنتقل المدينة بسلاسة من أصالة التراث إلى آفاق المستقبل الواعد.',
    ],
    keyHighlights: [
      'Curated private tour of historic merchant mansions in Al Balad',
      'Private sunset cruise along the virgin reef islets of the Red Sea',
      'Reserved VIP access to teamLab Borderless Jeddah',
      'Traditional Hijazi seafood feast prepared by an acclaimed coastal chef',
    ],
    keyHighlightsAr: [
      'جولة خاصة ومنسقة داخل قصور التجار التاريخية في حي البلد',
      'رحلة بحرية خاصة عند الغروب بين جزر وشعاب البحر الأحمر البكر',
      'دخول حصري لكبار الشخصيات إلى متحف تيم لاب بلا حدود جدة',
      'وليمة مأكولات بحرية حجازية تقليدية من إعداد شيف ساحلي شهير',
    ],
  },
];

/**
 * Returns the article localized for the active locale ('en' | 'ar')
 */
export function getLocalizedArticle(article: JournalArticle, locale: 'en' | 'ar'): JournalArticle {
  if (locale === 'ar') {
    return {
      ...article,
      title: article.titleAr || article.title,
      subtitle: article.subtitleAr || article.subtitle,
      excerpt: article.excerptAr || article.excerpt,
      category: (article.categoryAr || article.category) as JournalArticle['category'],
      destination: article.destinationAr || article.destination,
      readTime: article.readTimeAr || article.readTime,
      date: article.dateAr || article.date,
      pullQuote: article.pullQuoteAr || article.pullQuote,
      content: article.contentAr && article.contentAr.length > 0 ? article.contentAr : article.content,
      keyHighlights: article.keyHighlightsAr && article.keyHighlightsAr.length > 0 ? article.keyHighlightsAr : article.keyHighlights,
      author: {
        name: article.author.nameAr || article.author.name,
        role: article.author.roleAr || article.author.role,
        location: article.author.locationAr || article.author.location,
      },
    };
  }
  return article;
}
