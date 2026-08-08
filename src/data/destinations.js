// Comprehensive All-India Destinations Dataset (20 Cities, Massive Google Travel Content Expansion)
export const destinations = [
  // 1. Goa (Beaches)
  {
    id: 'd1',
    name: 'Goa',
    state: 'Goa',
    region: 'West',
    description: 'A tropical coastal paradise known for golden beaches, Portuguese colonial cathedrals, palm-fringed backwaters, vibrant night markets, spice farms, and seafood culinary heritage.',
    image: '/images/destinations/goa.svg',
    photo: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    category: 'Beaches',
    rating: 4.8,
    visitors: '500K+',
    bestSeason: 'Nov-Feb',
    averageCostPerDay: 3500,
    safetyRating: 'Very Safe',
    coordinates: { lat: 15.2993, lng: 74.1240 },

    audioGuideText: `Welcome to Goa, India’s coastal crown jewel along the Arabian Sea. Feel the warm tropical breeze and hear the rhythmic crash of gentle ocean waves. Goa’s recorded history stretches back over two millennia, flourishing under Mauryan rule, Kadamba kings, and 451 years of Portuguese colonial rule starting from Afonso de Albuquerque’s conquest in 1510. Walk through Old Goa to marvel at UNESCO World Heritage monuments like the Basilica of Bom Jesus, holding the sacred relics of Saint Francis Xavier, and the soaring Se Cathedral with its famous Golden Bell. Beyond history, Goa is a sanctuary of natural beauty—from the palm-fringed coastlines of Baga, Calangute, and Anjuna to the cascading milky-white waters of Dudhsagar Waterfalls standing 310 meters high amidst the lush Western Ghats. Savor authentic Goan fish curry cooked with freshly ground coconut and fiery red chillies, paired with local Cashew Feni. Enjoy your journey through this enchanting land of sun, sea, and eternal tropical harmony.`,

    fullHistory: `Goa's documented history dates back to the 3rd century BC under the Mauryan Empire, followed by the Shatavahanas, Bhojas, and the flourishing Kadamba dynasty who established Goa Gapakapattana as an international trading port. In 1510, Afonso de Albuquerque defeated the Bijapur Sultanate and established Portuguese India. For 451 years, Goa was governed from Lisbon, introducing Mannerist and Baroque church architecture, Latin Christian traditions, and European trade networks. On December 19, 1961, Operation Vijay by the Indian Armed Forces liberated Goa, incorporating it into the Indian Union. Today, Goa preserves its dual Indo-Portuguese heritage through protected archaeological monuments, Latin Quarter neighborhoods like Fontainhas, and ancestral mansions.`,

    culturalInfo: `Goan culture is a harmonious blend of Konkani Hindu traditions and Lusitanian Portuguese heritage. Key festivals include the vibrant 4-day Goa Carnival before Lent, Shigmo spring festival, and Feast of St. Francis Xavier. Traditional art forms include Mando romantic singing, Fugdi folk dance, and Dekhnni performance. Architecture showcases Portuguese tiles (azulejos), oyster-shell window panes, central courtyards, and red-tiled sloping roofs.`,

    foodSpecialties: [
      { name: 'Goan Fish Curry Rice', desc: 'Tangy coconut and raw mango kingfish curry served with hot local red unpolished rice.' },
      { name: 'Pork Vindaloo', desc: 'Heritage Goan-Portuguese dish marinating pork in palm vinegar, garlic, and fiery Kashmiri chillies.' },
      { name: 'Chicken Xacuti', desc: 'Rich chicken gravy prepared with complex roasted spices, white poppy seeds, and grated coconut.' },
      { name: 'Bebinca', desc: 'Traditional 7-layer baked Goan dessert made from fresh coconut milk, ghee, sugar, and egg yolks.' },
      { name: 'Prawn Balchão', desc: 'Fiery & tangy prawn pickle dish served with warm local Poi bread.' },
      { name: 'Goan Feni & Sol Kadi', desc: 'Distilled cashew liquor paired with digestive pink kokum-coconut drink.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Manohar International Airport at Mopa (GOX) & Dabolim Airport (GOI) connected with direct daily flights from Delhi, Mumbai, Bengaluru, and Hyderabad.\n\n🚆 BY RAILWAY:\n• Madgaon Junction (MAO) and Thivim (THVM) served by Konkan Railway network. Vande Bharat Express runs daily from Mumbai (CSMT) taking just 7.5 hours.\n\n🚌 BY ROAD & HIGHWAY:\n• Connected via 4-lane NH-66 highway from Mumbai (580 km) and Pune (450 km). Luxury sleeper Volvo buses operate overnight from major metros.\n\n🚕 LOCAL TRANSIT:\n• Self-drive rental cars and yellow-plate scooters/bikes are available at airports & railway stations (₹400-800/day). Goa Miles app provides regulated taxi bookings.`,

    travelDestinationsInCity: [
      { name: 'Basilica of Bom Jesus', desc: '16th-century UNESCO World Heritage Baroque church holding St. Francis Xavier relics.' },
      { name: 'Baga & Calangute Beaches', desc: 'Vibrant beach stretch famous for water sports, parasailing, and shacks.' },
      { name: 'Dudhsagar Waterfalls', desc: 'Four-tiered white milky waterfall standing 310 meters tall inside Bhagwan Mahavir Sanctuary.' },
      { name: 'Fort Aguada & Lighthouse', desc: '17th-century Portuguese lighthouse and fort overlooking the Arabian Sea.' }
    ],

    hiddenGems: [
      'Kakolem Secret Cove Beach (Tiger Beach)',
      'Chorao Island Dr. Salim Ali Bird Sanctuary',
      'Netravali Bubble Lake & Wildlife Sanctuary',
      'Fontainhas Latin Quarter Walking Trail',
      'Harvalem Rock-Cut Caves & Waterfall'
    ],

    safetyTips: [
      'Strictly avoid entering sea waters during red flag warnings or monsoon months (June-Sept).',
      'Always rent yellow-plate commercial two-wheelers with valid helmet and insurance.',
      'Use official GoaMiles taxi app or negotiate fare before boarding local cabs.',
      'Keep emergency helpline numbers saved: Tourist Helpline (1363) and Police (100).',
      'Drink bottled water and purchase sunblock SPF 50+ for beach exposure.',
      'Respect sacred decorum inside Catholic basilicas and Hindu temples.'
    ],

    highlights: ['Baga Beach', 'Dudhsagar Waterfalls', 'Basilica of Bom Jesus', 'Fort Aguada'],
    activities: [
      { name: 'Scuba Diving at Grand Island', duration: '4 hours', cost: 2500 },
      { name: 'Mandovi River Sunset Cruise', duration: '2 hours', cost: 800 }
    ],
    gettingThere: 'Fly into Dabolim Airport (GOI) or Mopa (GOX), or take Konkan Railway to Madgaon (MAO).',
    bestTimeToVisit: 'November to February'
  },

  // 2. Manali (Mountains)
  {
    id: 'd2',
    name: 'Manali',
    state: 'Himachal Pradesh',
    region: 'North',
    description: 'A high-altitude Himalayan resort town known as an adventure hub and honeymoon destination surrounded by snow-capped peaks, pine forests, and Beas river streams.',
    image: '/images/destinations/manali.svg',
    photo: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    category: 'Mountains',
    rating: 4.7,
    visitors: '200K+',
    bestSeason: 'Oct-Jun',
    averageCostPerDay: 2500,
    safetyRating: 'Safe',
    coordinates: { lat: 32.2396, lng: 77.1887 },

    audioGuideText: `Welcome to Manali, the Valley of Gods nestled at 6,726 feet in the heart of the Himachal Himalayas. Take a deep breath of crisp, pine-scented mountain air as the majestic Beas River rushes beside you. Legend tells us that Manali derives its name from Sage Manu, the progenitor of humanity, who stepped off his ark here after the great deluge. Walk inside the ancient deodar forest to behold Hadimba Devi Temple, a four-tiered wooden pagoda constructed in 1553. Solang Valley offers exhilarating paragliding and snow sports, while the 9.02 km Atal Tunnel opens into the high-altitude desert of Lahaul. Taste authentic Himachali Dham and Siddu dipped in pure ghee. Manali invites you to experience eternal mountain tranquility.`,

    fullHistory: `Manali is steeped in ancient Indian mythology as the sacred abode of Sage Manu. Historically part of the Kullu Kingdom, the region was governed by local Thakurs until integrated under King Jagat Singh of Kullu in 1660. British administrators introduced English apple orchards in the late 19th century. Post-independence road connectivity transformed Manali into India's premier mountain gateway, elevated further by the engineering marvel of the Atal Tunnel in 2020.`,

    culturalInfo: `Kullu Valley culture is renowned for Kath-Kuni timber-and-stone earthquake-resistant architecture, handwoven Kullu shawls, and devta god palanquin processions during Kullu Dasara. Folk dances include Naati and Lalhar.`,

    foodSpecialties: [
      { name: 'Himachali Dham', desc: 'Festive vegetarian meal serving Rajma Madra, Sepu Badi, and Meetha Chawal.' },
      { name: 'Siddu', desc: 'Steamed wheat flour dough stuffed with spiced poppy seed paste and dipped in hot ghee.' },
      { name: 'Trout Fish Fry', desc: 'Fresh river trout marinated in local Himalayan herbs and shallow fried.' },
      { name: 'Mittha', desc: 'Sweet rice dessert garnished with dry fruits and saffron.' },
      { name: 'Babru', desc: 'Deep-fried stuffed flatbread served with black chickpea curry.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Bhuntar Airport (KUU, 50 km) receives daily flights from New Delhi and Chandigarh.\n\n🚆 BY RAILWAY:\n• Nearest broad gauge rail stations are Chandigarh Railway Station (310 km) and Ambala Cantt (340 km).\n\n🚌 BY ROAD & HIGHWAY:\n• NH-21 connects Manali to Delhi (530 km) and Chandigarh (280 km). Overnight luxury AC Volvo buses run daily from Delhi Kashmiri Gate ISBT (12-14 hours).\n\n🚕 LOCAL TRANSIT:\n• Local auto-rickshaws, taxis, and rental 4x4 vehicles operate from Mall Road auto stand.`,

    travelDestinationsInCity: [
      { name: 'Solang Valley', desc: 'Adventure sports hub for paragliding, skiing, zorbing, and quad biking.' },
      { name: 'Rohtang Pass (13,058 ft)', desc: 'High mountain pass offering year-round snow landscapes.' },
      { name: 'Hadimba Temple', desc: '16th-century wooden pagoda temple surrounded by cedar forest.' },
      { name: 'Atal Tunnel (Lahaul Gateway)', desc: '9.02 km world longest highway tunnel above 10,000 feet.' }
    ],

    hiddenGems: [
      'Sethan Igloo Village & Snow Trek',
      'Jogini Waterfall Trek from Vashisht',
      'Naggar Castle & Roerich Art Gallery',
      'Sissu Waterfall & Lahaul Valley',
      'Hampta Pass Base Camp Trek'
    ],

    safetyTips: [
      'Apply online Rohtang Pass permits 24 hours in advance at Himachal Tourism portal.',
      'Wear warm thermal layers and waterproof gloves during winter snow sports.',
      'Acclimate to mountain altitude; avoid heavy alcohol consumption on arrival day.',
      'Check weather advisory during July-August heavy monsoon rainfall.',
      'Drive carefully on mountain hairpin bends; use low gear during downhill descent.'
    ],

    highlights: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple'],
    activities: [
      { name: 'Solang Valley Paragliding Flight', duration: '1 hour', cost: 3000 },
      { name: 'Beas River Water Rafting', duration: '2 hours', cost: 1500 }
    ],
    gettingThere: 'Fly into Bhuntar Airport (KUU) or take an overnight Volvo bus from Delhi.',
    bestTimeToVisit: 'October to June'
  },

  // 3. Jaipur (Heritage)
  {
    id: 'd3',
    name: 'Jaipur',
    state: 'Rajasthan',
    region: 'West',
    description: 'The Pink City of India, known for royal Rajputana palaces, hilltop forts, bustling bazaars, and heritage gastronomy.',
    image: '/images/destinations/jaipur.svg',
    photo: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
    category: 'Heritage',
    rating: 4.6,
    visitors: '400K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 3000,
    safetyRating: 'Moderate',
    coordinates: { lat: 26.9124, lng: 75.7873 },

    audioGuideText: `Welcome to Jaipur, the Pink City of Rajasthan. Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was India’s first planned city engineered according to Vastu Shastra grid principles. In 1876, the entire city was painted in terracotta pink to welcome the Prince of Wales. Climb up to Amer Fort to admire the mirror-paneled Sheesh Mahal. Gaze upon Hawa Mahal, the Palace of Winds, constructed with 953 latticed windows allowing royal women to observe city street festivals unseen. Taste iconic Dal Baati Churma and fiery Laal Maas. Jaipur invites you to experience royal grandeur and timeless Rajasthani hospitality.`,

    fullHistory: `Founded on November 18, 1727, by Maharaja Sawai Jai Singh II after shifting the capital from Amer. Designed by architect Vidyadhar Bhattacharya into nine grid sectors. Jaipur joined the Indian Union in 1949 as the capital of Rajasthan and was declared a UNESCO World Heritage Site in 2019.`,

    culturalInfo: `Rajput royalty, Ghoomar & Kalbelia folk dance, Sanganeri block printing, Bandhani silk tie-dye, and Jaipur Blue Pottery craft.`,

    foodSpecialties: [
      { name: 'Dal Baati Churma', desc: 'Hard baked wheat balls served with 5-lentil dal and sweet wheat churma.' },
      { name: 'Laal Maas', desc: 'Fiery Rajput mutton curry cooked with garlic and Mathania red chillies.' },
      { name: 'Ghevar', desc: 'Disc-shaped honeycomb sweet cake soaked in syrup and rabri.' },
      { name: 'Pyaaz Kachori', desc: 'Crispy fried pastry stuffed with spiced onion filling.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Jaipur International Airport (JAI, 12 km) operates daily domestic and direct international flights.\n\n🚆 BY RAILWAY:\n• Jaipur Junction (JP) connected by Vande Bharat Express and Shatabdi Express from New Delhi (4.5 hours).\n\n🚌 BY ROAD & HIGHWAY:\n• Connected via 6-lane NH-48 Expressway from Delhi (260 km, 4.5 hours) with regular RSRTC super deluxe buses.`,

    travelDestinationsInCity: [
      { name: 'Amer Fort', desc: 'Majestic hilltop fort with Sheesh Mahal mirror palace.' },
      { name: 'Hawa Mahal', desc: 'Palace of Winds with 953 honeycomb windows.' },
      { name: 'City Palace Jaipur', desc: 'Royal residence with Chandra Mahal museum.' },
      { name: 'Jantar Mantar', desc: 'UNESCO astronomical observatory with world largest stone sundial.' }
    ],

    hiddenGems: [
      'Panna Meena ka Kund Geometric Stepwell',
      'Galtaji Temple (Monkey Temple & Holy Springs)',
      'Nahargarh Fort Sunset View Point',
      'Anokhi Museum of Hand Printing',
      'Patrika Gate Cultural Mural Arch'
    ],

    safetyTips: [
      'Negotiate e-rickshaw and auto fares before starting your trip.',
      'Beware of unauthorized street guides outside Amer Fort and Hawa Mahal.',
      'Drink bottled water and carry sun umbrellas during sunny afternoons.',
      'Store valuables securely inside crowded Johari Bazaar markets.'
    ],

    highlights: ['Amer Fort', 'Hawa Mahal', 'City Palace'],
    activities: [{ name: 'Hot Air Balloon Ride over Amer Fort', duration: '2 hours', cost: 12000 }],
    gettingThere: 'Fly into Jaipur Airport (JAI) or take Vande Bharat Express from New Delhi.',
    bestTimeToVisit: 'October to March'
  },

  // 4. Munnar (Nature)
  {
    id: 'd4',
    name: 'Munnar',
    state: 'Kerala',
    region: 'South',
    description: 'A serene hill station famous for endless expanses of tea plantations, mist-covered shola valleys, and rare Nilgiri Tahr mountain goats.',
    image: '/images/destinations/munnar.svg',
    photo: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    category: 'Nature',
    rating: 4.8,
    visitors: '150K+',
    bestSeason: 'Sep-Mar',
    averageCostPerDay: 2800,
    safetyRating: 'Very Safe',
    coordinates: { lat: 10.0889, lng: 77.0595 },

    audioGuideText: `Welcome to Munnar, the emerald tea garden capital of God’s Own Country. Situated at 5,200 feet at the confluence of three mountain streams, Munnar greets you with rolling hills draped in green carpets of tea bushes. British planters established tea estates here in the late 19th century. Explore Eravikulam National Park to spot the endangered Nilgiri Tahr mountain goat below Anamudi Peak, South India’s highest summit. Munnar is also home to the Neelakurinji flower, blooming once every 12 years. Taste Kerala Appam with coconut stew, and savor freshly processed High Range black tea.`,

    fullHistory: `Inhabited by indigenous Muthuvan tribes. In 1877, British officer John Daniel Munro leased High Range land from Poonjar Royal Dynasty to start tea plantations. Kannan Devar Hills Produce Company was established in 1897, founding Munnar tea industry.`,

    culturalInfo: `Tea planter heritage, Kathakali dance art, Kalaripayattu martial arts, and Ayurvedic herbal wellness retreats.`,

    foodSpecialties: [
      { name: 'Kerala Appam & Stew', desc: 'Lacy rice pancakes served with aromatic coconut vegetable stew.' },
      { name: 'Malabar Parotta & Mushroom Roast', desc: 'Flaky layered bread served with spicy roasted gravy.' },
      { name: 'Ela Ada', desc: 'Steamed rice parcel stuffed with jaggery and grated coconut inside banana leaf.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Cochin International Airport (COK, 110 km, 3.5 hours drive).\n\n🚆 BY RAILWAY:\n• Ernakulam Junction (ERS, 120 km) or Aluva Railway Station (110 km).\n\n🚌 BY ROAD & HIGHWAY:\n• Drive up Western Ghats via Aluva-Munnar Road (NH-85). Regular KSRTC buses run from Kochi and Madurai.`,

    travelDestinationsInCity: [
      { name: 'Eravikulam National Park', desc: 'Sanctuary for rare Nilgiri Tahr goats and Anamudi Peak.' },
      { name: 'Tata Tea Museum', desc: 'Historic tea processing museum showcasing heritage machinery.' },
      { name: 'Mattupetty Dam & Lake', desc: 'Scenic lake offering speed boating and elephant sightings.' }
    ],

    hiddenGems: [
      'Kolukkumalai Sunrise Point (World Highest Tea Estate)',
      'Lockhart Gap Viewpoint & Valley',
      'Meesapulimala Trekking Peak',
      'Anayirankal Dam & Spice Gardens'
    ],

    safetyTips: [
      'Drive carefully on foggy mountain bends during early morning hours.',
      'Book Eravikulam safari entry tickets online to avoid long ticket counter queues.',
      'Carry light rain jackets as mountain showers occur unannounced.'
    ],

    highlights: ['Eravikulam National Park', 'Tea Museum', 'Mattupetty Dam'],
    activities: [{ name: 'Tea Estate Guided Walking Tour', duration: '2 hours', cost: 500 }],
    gettingThere: 'Fly into Cochin Airport (COK) and drive up the scenic Western Ghats.',
    bestTimeToVisit: 'September to March'
  },

  // 5. Udaipur (Heritage)
  {
    id: 'd6',
    name: 'Udaipur',
    state: 'Rajasthan',
    region: 'West',
    description: 'The City of Lakes, celebrated for fairy-tale marble palaces, tranquil lakes, and romantic Mewari royal heritage.',
    image: '/images/destinations/udaipur.svg',
    photo: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80',
    category: 'Heritage',
    rating: 4.7,
    visitors: '250K+',
    bestSeason: 'Sep-Mar',
    averageCostPerDay: 3200,
    safetyRating: 'Safe',
    coordinates: { lat: 24.5854, lng: 73.7125 },

    audioGuideText: `Welcome to Udaipur, the Venice of the East and capital of Mewar. Gaze across Lake Pichola to see marble palaces floating like mirages. Founded in 1559 by Maharana Udai Singh II, Udaipur was built following the fall of Chittorgarh. Wander through City Palace, built over 400 years with marble balconies, mirror work, and peacock mosaics. Take a boat cruise to Jag Mandir island palace. Udaipur offers an unforgettable royal escape.`,

    fullHistory: `Founded in 1559 by Maharana Udai Singh II as the capital of Mewar Kingdom. Maintained independence for centuries before signing a British treaty in 1818 and joining Rajasthan state in 1949.`,

    culturalInfo: `Mewari miniature paintings, glass mosaic work, Bagore Ki Haveli Dharohar folk dance, and Gangaur festival.`,

    foodSpecialties: [
      { name: 'Mewari Royal Thali', desc: 'Royal meal serving Gatte ki Sabzi, Ker Sangri, and Bajra Roti.' },
      { name: 'Kachori with Kadhi', desc: 'Crispy fried lentil pastry served with tangy spicy yogurt gravy.' }
    ],

    howToReachDetails: `✈️ BY AIR: Maharana Pratap Airport (UDR, 22 km).\n🚆 BY RAILWAY: Udaipur City Railway Station connected to Delhi and Mumbai.`,

    travelDestinationsInCity: [
      { name: 'City Palace Udaipur', desc: 'Vast palace complex overlooking Lake Pichola.' },
      { name: 'Lake Pichola', desc: 'Romantic lake with boat rides to Jag Mandir.' }
    ],

    hiddenGems: ['Saheliyon Ki Bari', 'Sajjangarh Monsoon Palace', 'Ambrai Ghat Sunset View'],
    safetyTips: ['Pre-book sunset boat rides on Lake Pichola.'],

    highlights: ['City Palace', 'Lake Pichola', 'Jag Mandir'],
    activities: [{ name: 'Lake Pichola Sunset Boat Cruise', duration: '1 hour', cost: 500 }],
    gettingThere: 'Fly into Maharana Pratap Airport (UDR) or take a train to Udaipur City.',
    bestTimeToVisit: 'September to March'
  },

  // 6. Srinagar & Kashmir (Mountains)
  {
    id: 'd13',
    name: 'Srinagar & Kashmir',
    state: 'Jammu & Kashmir',
    region: 'North',
    description: 'Paradise on Earth, famous for Shikara rides on Dal Lake, Mughal terraced gardens, houseboats, and snow-capped Zabarwan mountains.',
    image: '/images/destinations/srinagar.svg',
    photo: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80',
    category: 'Mountains',
    rating: 4.8,
    visitors: '350K+',
    bestSeason: 'Apr-Oct',
    averageCostPerDay: 3000,
    safetyRating: 'Safe',
    coordinates: { lat: 34.0837, lng: 74.7973 },

    audioGuideText: `Welcome to Srinagar, paradise on Earth. Glide across Dal Lake in a wooden Shikara boat as snow-capped Zabarwan peaks reflect in calm waters. Mughal Emperors built terraced gardens here like Shalimar Bagh and Nishat Bagh with fountains and chinar trees. Explore floating markets, stay on historic carved houseboats, and sip saffron Kahwa tea.`,

    fullHistory: `Dates back to Emperor Ashoka in 3rd century BC. Ruled by Hindu kings, Sultan Sikandar, Mughal Emperors, Afghan Durranis, and Maharaja Gulab Singh before joining India in 1947.`,

    culturalInfo: `Shikara boat culture, Pashmina shawl weaving, Walnut wood carving, and 36-course Wazwan royal feast.`,

    foodSpecialties: [
      { name: 'Kashmiri Wazwan Rista', desc: 'Hand-pounded mutton meatballs cooked in red saffron gravy.' },
      { name: 'Kahwa Tea', desc: 'Green tea brewed with saffron, almonds, and cardamom.' }
    ],

    howToReachDetails: `✈️ BY AIR: Srinagar Sheikh ul-Alam Airport (SXR).\n🚆 BY ROAD: NH-44 highway from Jammu via Chenani-Nashri Tunnel.`,

    travelDestinationsInCity: [
      { name: 'Dal Lake', desc: 'Famous lake with floating houseboats & Shikaras.' },
      { name: 'Shalimar Bagh', desc: 'Mughal terraced garden built by Jahangir.' }
    ],

    hiddenGems: ['Nigeen Lake Quiet Haven', 'Pari Mahal Sunset View Point'],
    safetyTips: ['Confirm houseboats near Boulevard Road.'],

    highlights: ['Dal Lake', 'Shalimar Bagh', 'Nishat Bagh'],
    activities: [{ name: 'Shikara Ride on Dal Lake', duration: '2 hours', cost: 800 }],
    gettingThere: 'Fly into Srinagar Airport (SXR) or drive from Jammu via NH-44 tunnel.',
    bestTimeToVisit: 'April to October'
  },

  // 7. Agra (Heritage)
  {
    id: 'd14',
    name: 'Agra',
    state: 'Uttar Pradesh',
    region: 'North',
    description: 'The historic Mughal imperial capital home to the eternal monument of love — Taj Mahal, one of the Seven Wonders of the World.',
    image: '/images/destinations/agra.svg',
    photo: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    category: 'Heritage',
    rating: 4.9,
    visitors: '800K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 2800,
    safetyRating: 'Safe',
    coordinates: { lat: 27.1751, lng: 78.0421 },

    audioGuideText: `Welcome to Agra, home of the white marble Taj Mahal. Commissioned in 1632 by Emperor Shah Jahan for his beloved Mumtaz Mahal, it remains an eternal symbol of love. Explore Agra Fort red sandstone palace and Fatehpur Sikri royal city. Agra embodies Mughal artistic peak.`,

    fullHistory: `Mughal capital under Akbar, Jahangir, and Shah Jahan from 1556 to 1648. Taj Mahal took 20,000 artisans 22 years to build.`,

    culturalInfo: `Parchin Kari marble inlay, Zardozi embroidery, Mughal miniature art, and Agra Petha sweet making.`,

    foodSpecialties: [
      { name: 'Agra Petha', desc: 'Ash gourd sweet infused with saffron and nuts.' },
      { name: 'Mughlai Biryani', desc: 'Aromatic basmati rice cooked with whole spices.' }
    ],

    howToReachDetails: `✈️ BY RAIL: Gatimaan Express from Delhi (100 mins).\n🚗 BY ROAD: Yamuna Expressway (2 hours drive from Delhi).`,

    travelDestinationsInCity: [
      { name: 'Taj Mahal', desc: 'UNESCO Wonder of the World in white marble.' },
      { name: 'Agra Fort', desc: 'Red sandstone Mughal imperial fortress.' }
    ],

    hiddenGems: ['Mehtab Bagh Taj Sunset View', 'Fatehpur Sikri Royal City'],
    safetyTips: ['Taj Mahal is CLOSED on Fridays.'],

    highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri'],
    activities: [{ name: 'Sunrise Taj Mahal Guided Tour', duration: '3 hours', cost: 1100 }],
    gettingThere: 'Take Gatimaan Express train or drive via Yamuna Expressway from Delhi (2 hours).',
    bestTimeToVisit: 'October to March'
  },

  // 8. Delhi (Heritage)
  {
    id: 'd15',
    name: 'Delhi',
    state: 'Delhi UT',
    region: 'North',
    description: 'India\'s historic national capital blending ancient empires, UNESCO World Heritage monuments, and modern metropolis culture.',
    image: '/images/destinations/delhi.svg',
    photo: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    category: 'Heritage',
    rating: 4.7,
    visitors: '900K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 3000,
    safetyRating: 'Moderate',
    coordinates: { lat: 28.6139, lng: 77.2090 },

    audioGuideText: `Welcome to Delhi, national capital of India. Inhabited for 2,500 years across 7 ancient cities, Delhi blends Red Fort, Qutub Minar, Humayun’s Tomb, and bustling street markets of Chandni Chowk. Experience the heartbeat of India.`,

    fullHistory: `Seat of Pandavas (Indraprastha), Delhi Sultanate, Mughal Empire under Shah Jahan, and British Raj capital from 1911.`,

    culturalInfo: `Red Fort, Qutub Minar, Lotus Temple, Nizamuddin Qawwali, and street food at Paranthe Wali Gali.`,

    foodSpecialties: [
      { name: 'Butter Chicken & Naan', desc: 'Iconic Delhi dish invented at Moti Mahal in 1947.' },
      { name: 'Chandni Chowk Paranthas', desc: 'Stuffed fried flatbreads served with chutneys.' }
    ],

    howToReachDetails: `✈️ BY AIR: Indira Gandhi International Airport (DEL).\n🚇 METRO: Delhi Metro network connecting all zones.`,

    travelDestinationsInCity: [
      { name: 'Red Fort', desc: 'Mughal sandstone fortress.' },
      { name: 'Qutub Minar', desc: 'World\'s tallest brick minaret.' }
    ],

    hiddenGems: ['Agrasen ki Baoli Stepwell', 'Hauz Khas Village Fort'],
    safetyTips: ['Use Delhi Metro for fast transit.'],

    highlights: ['Red Fort', 'Qutub Minar', 'India Gate'],
    activities: [{ name: 'Old Delhi Chandni Chowk Rickshaw & Street Food Tour', duration: '3 hours', cost: 800 }],
    gettingThere: 'Fly into Indira Gandhi International Airport (DEL).',
    bestTimeToVisit: 'October to March'
  },

  // 9. Shimla (Mountains)
  {
    id: 'd16',
    name: 'Shimla',
    state: 'Himachal Pradesh',
    region: 'North',
    description: 'The Queen of Hill Stations and former summer capital of British India set amid pine-forested Himalayan hills.',
    image: '/images/destinations/shimla.svg',
    photo: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80',
    category: 'Mountains',
    rating: 4.6,
    visitors: '300K+',
    bestSeason: 'Oct-Jun',
    averageCostPerDay: 2400,
    safetyRating: 'Very Safe',
    coordinates: { lat: 31.1048, lng: 77.1734 },

    audioGuideText: `Welcome to Shimla, Queen of Hill Stations. Stroll along historic Mall Road, admire Neo-Gothic Christ Church on The Ridge, and ride the UNESCO Kalka-Shimla Toy Train.`,

    fullHistory: `Declared Summer Capital of British India in 1864. Kalka-Shimla Toy Train built in 1903.`,

    culturalInfo: `Colonial architecture, Christ Church, Viceregal Lodge, and winter ice-skating festival.`,

    foodSpecialties: [
      { name: 'Chana Khatta', desc: 'Tangy Himachali black chickpea curry.' }
    ],

    howToReachDetails: `🚆 BY RAIL: UNESCO Kalka-Shimla Toy Train.\n🚗 BY ROAD: 3.5 hours drive from Chandigarh.`,

    travelDestinationsInCity: [
      { name: 'The Ridge & Christ Church', desc: 'Promenade with Neo-Gothic church.' },
      { name: 'Mall Road', desc: 'Pedestrian shopping avenue.' }
    ],

    hiddenGems: ['Annandale Ground', 'Viceregal Lodge'],
    safetyTips: ['Mall Road is pedestrian-only.'],

    highlights: ['The Ridge', 'Mall Road', 'Jakhu Temple'],
    activities: [{ name: 'Kalka-Shimla Toy Train Scenic Ride', duration: '3 hours', cost: 500 }],
    gettingThere: 'Take UNESCO Kalka-Shimla Toy Train or drive from Chandigarh.',
    bestTimeToVisit: 'October to June'
  },

  // 10. Kolkata (Heritage)
  {
    id: 'd17',
    name: 'Kolkata',
    state: 'West Bengal',
    region: 'East',
    description: 'The City of Joy! Cultural capital of India renowned for colonial grandeur, literary heritage, art, tramways, and Durga Puja festival.',
    image: '/images/destinations/kolkata.svg',
    photo: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80',
    category: 'Heritage',
    rating: 4.7,
    visitors: '450K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 2000,
    safetyRating: 'Safe',
    coordinates: { lat: 22.5726, lng: 88.3639 },

    audioGuideText: `Welcome to Kolkata, City of Joy. Walk across Howrah Bridge, visit white marble Victoria Memorial, ride historic yellow trams, and savor Rosogolla sweets.`,

    fullHistory: `British India capital until 1911. Birthplace of Bengal Renaissance producing Rabindranath Tagore and Swami Vivekananda.`,

    culturalInfo: `UNESCO Durga Puja festival, Howrah Bridge, Victoria Memorial, Rabindra Sangeet, and College Street book bazaar.`,

    foodSpecialties: [
      { name: 'Kolkata Kathi Roll', desc: 'Flaky paratha rolled with spiced kebabs.' },
      { name: 'Rosogolla & Mishti Doi', desc: 'Spongy sweet balls & sweet baked yogurt.' }
    ],

    howToReachDetails: `✈️ BY AIR: Netaji Subhash Chandra Bose Airport (CCU).\n🚆 BY RAIL: Howrah (HWH) & Sealdah (SDAH).`,

    travelDestinationsInCity: [
      { name: 'Victoria Memorial', desc: 'Marble palace dedicated to Queen Victoria.' },
      { name: 'Howrah Bridge', desc: 'Iconic cantilever bridge over Hooghly River.' }
    ],

    hiddenGems: ['Kumartuli Clay Artisans', 'College Street Boi Para'],
    safetyTips: ['Ride yellow taxis in North Kolkata.'],

    highlights: ['Victoria Memorial', 'Howrah Bridge', 'Dakshineswar Temple'],
    activities: [{ name: 'Heritage Tram Ride & College Street Book Walk', duration: '3 hours', cost: 300 }],
    gettingThere: 'Fly into Kolkata Airport (CCU) or take broad-gauge trains to Howrah.',
    bestTimeToVisit: 'October to March'
  },

  // 11. Mysore (Heritage)
  {
    id: 'd18',
    name: 'Mysore',
    state: 'Karnataka',
    region: 'South',
    description: 'The City of Palaces, famed for royal Wodeyar heritage, illuminated Mysuru Palace, sandalwood, silk sarees, and Mysuru Dasara.',
    image: '/images/destinations/mysore.svg',
    photo: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80',
    category: 'Heritage',
    rating: 4.8,
    visitors: '350K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 2200,
    safetyRating: 'Very Safe',
    coordinates: { lat: 12.2958, lng: 76.6394 },

    audioGuideText: `Welcome to Mysore, City of Palaces. Admire grand Mysuru Palace illuminated by 100,000 bulbs every Sunday evening. Taste melt-in-mouth Mysore Pak sweet.`,

    fullHistory: `Capital of Wodeyar Dynasty from 1399 to 1947. Famous for Tipu Sultan resistance and Mysuru Dasara festival.`,

    culturalInfo: `Mysore Palace illumination, Mysore Pak, Mysore Silk sarees, Sandalwood carving, and 10-day Dasara procession.`,

    foodSpecialties: [
      { name: 'Mysore Pak', desc: 'Melt-in-mouth golden ghee sweet.' },
      { name: 'Mysore Masala Dosa', desc: 'Crispy crepe with garlic chilli chutney.' }
    ],

    howToReachDetails: `🚆 BY RAIL: Vande Bharat Express from Bengaluru (2 hours).\n🚗 BY ROAD: 10-lane Bengaluru-Mysuru Expressway.`,

    travelDestinationsInCity: [
      { name: 'Mysore Palace', desc: 'Royal residence illuminated by 100,000 bulbs.' },
      { name: 'Chamundi Hill', desc: 'Temple hill with giant Nandi monolith.' }
    ],

    hiddenGems: ['Jaganmohan Palace Art Gallery', 'St. Philomena\'s Church'],
    safetyTips: ['Visit Mysore Palace on Sunday evening for illumination.'],

    highlights: ['Mysore Palace', 'Chamundi Hill', 'Brindavan Gardens'],
    activities: [{ name: 'Mysore Royal Palace Night Illumination Tour', duration: '2 hours', cost: 200 }],
    gettingThere: 'Drive 2 hours from Bengaluru on 10-lane Expressway or take Vande Bharat Express.',
    bestTimeToVisit: 'October to March'
  },

  // 12. Madurai (Heritage)
  {
    id: 'd22',
    name: 'Madurai',
    state: 'Tamil Nadu',
    region: 'South',
    description: 'The Lotus City and cultural heart of Tamil Nadu, built around the majestic 14-towered Meenakshi Amman Temple complex.',
    image: '/images/destinations/madurai.svg',
    photo: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    category: 'Heritage',
    rating: 4.8,
    visitors: '400K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 1800,
    safetyRating: 'Very Safe',
    coordinates: { lat: 9.9252, lng: 78.1198 },

    audioGuideText: `Welcome to Madurai, the Lotus City of Tamil Nadu. Marvel at 14 soaring gopuram towers of Meenakshi Amman Temple and taste Jigarthanda dessert drink.`,

    fullHistory: `Pandyan Dynasty capital since 3rd century BC. Built around Meenakshi Temple in lotus pattern.`,

    culturalInfo: `Dravidian temple architecture, Sangam Tamil literature, Chithirai Festival, and Thirumalai Nayakkar Palace.`,

    foodSpecialties: [
      { name: 'Madurai Jigarthanda', desc: 'Cooling dessert drink with almond gum & basundi.' }
    ],

    howToReachDetails: `✈️ BY AIR: Madurai Airport (IXM).\n🚆 BY RAIL: Madurai Junction (MDU) Vande Bharat.`,

    travelDestinationsInCity: [
      { name: 'Meenakshi Amman Temple', desc: '14-towered Dravidian temple.' },
      { name: 'Thirumalai Nayakkar Palace', desc: '17th-century palace with soaring pillars.' }
    ],

    hiddenGems: ['Gandhi Memorial Museum', 'Puthu Mandapam Bazaar'],
    safetyTips: ['Mobiles prohibited inside temple inner sanctum.'],

    highlights: ['Meenakshi Temple', 'Thirumalai Palace', 'Jigarthanda Stalls'],
    activities: [{ name: 'Meenakshi Temple Evening Night Ceremony Walk', duration: '2 hours', cost: 0 }],
    gettingThere: 'Fly into Madurai Airport (IXM) or take Vande Bharat Express from Chennai.',
    bestTimeToVisit: 'October to March'
  },

  // 13. Alleppey (Beaches)
  {
    id: 'd24',
    name: 'Alleppey (Alappuzha)',
    state: 'Kerala',
    region: 'South',
    description: 'The Venice of the East, famous for tranquil backwater houseboat cruises, coconut lagoons, and traditional snake boat races.',
    image: '/images/destinations/alleppey.svg',
    photo: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    category: 'Beaches',
    rating: 4.8,
    visitors: '300K+',
    bestSeason: 'Nov-Feb',
    averageCostPerDay: 3800,
    safetyRating: 'Very Safe',
    coordinates: { lat: 9.4981, lng: 76.3388 },

    audioGuideText: `Welcome to Alleppey backwaters. Drift past swaying palm lagoons on a traditional Kettuvallam wooden houseboat and savor Karimeen Pollichathu fish.`,

    fullHistory: `Founded by Raja Kesavadas in 1762 as a major port for coir and spice trade.`,

    culturalInfo: `Kettuvallam houseboats, Nehru Trophy Snake Boat Race on Punnamada Lake, and coconut lagoons.`,

    foodSpecialties: [
      { name: 'Karimeen Pollichathu', desc: 'Pearl spot fish marinated & fried inside banana leaves.' }
    ],

    howToReachDetails: `✈️ BY AIR: Cochin Airport (COK, 75 km).\n🚆 BY RAIL: Alappuzha Railway Station (ALLP).`,

    travelDestinationsInCity: [
      { name: 'Alleppey Backwaters', desc: 'Network of palm-fringed canals.' },
      { name: 'Marari Beach', desc: 'Quiet coconut-palm beach.' }
    ],

    hiddenGems: ['Pathiramanal Bird Island', 'Kuttanad Fields'],
    safetyTips: ['Check government license before booking houseboats.'],

    highlights: ['Alleppey Backwaters', 'Marari Beach', 'Punnamada Lake'],
    activities: [{ name: 'Overnight Private Kettuvallam Houseboat Cruise', duration: 'Overnight', cost: 6000 }],
    gettingThere: 'Fly into Cochin Airport (COK) and take a 2-hour taxi to Alleppey.',
    bestTimeToVisit: 'November to February'
  },

  // 14. Pondicherry (Beaches)
  {
    id: 'd25',
    name: 'Pondicherry',
    state: 'Puducherry',
    region: 'South',
    description: 'A charming coastal town blending French colonial architecture, bohemian yellow villas, seaside promenades, and spiritual Auroville.',
    image: '/images/destinations/pondicherry.svg',
    photo: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    category: 'Beaches',
    rating: 4.6,
    visitors: '220K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 2600,
    safetyRating: 'Very Safe',
    coordinates: { lat: 11.9416, lng: 79.8083 },

    audioGuideText: `Bienvenue à Pondicherry. Stroll past yellow pastel French Quarter villas, walk along Promenade Beach, and visit Auroville golden Matrimandir.`,

    fullHistory: `Capital of French India until 1954. Unique Franco-Tamil culture and Sri Aurobindo Ashram.`,

    culturalInfo: `French Quarter, Matrimandir, Sri Aurobindo Ashram, and French bakeries.`,

    foodSpecialties: [
      { name: 'French Croissant & Quiche', desc: 'Authentic French bakeries serving pain au chocolat.' }
    ],

    howToReachDetails: `🚗 BY ROAD: 3-hour drive along East Coast Road (ECR) from Chennai.`,

    travelDestinationsInCity: [
      { name: 'Promenade Beach', desc: 'Seaside walking boulevard.' },
      { name: 'French Quarter', desc: 'Pastel yellow colonial homes.' }
    ],

    hiddenGems: ['Paradise Beach Sand Bar', 'Serenity Beach Surfing'],
    safetyTips: ['Rent bicycles to tour French Quarter.'],

    highlights: ['Promenade Beach', 'French Quarter', 'Auroville Matrimandir'],
    activities: [{ name: 'French Town Cycle Heritage Tour', duration: '2 hours', cost: 350 }],
    gettingThere: 'Drive 3 hours along East Coast Road (ECR) from Chennai Airport.',
    bestTimeToVisit: 'October to March'
  },

  // 15. Mumbai (Heritage)
  {
    id: 'd26',
    name: 'Mumbai',
    state: 'Maharashtra',
    region: 'West',
    description: 'The City of Dreams! India\'s financial & entertainment capital, featuring Victorian Gothic UNESCO architecture, Marine Drive, and Bollywood.',
    image: '/images/destinations/mumbai.svg',
    photo: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    category: 'Heritage',
    rating: 4.6,
    visitors: '800K+',
    bestSeason: 'Nov-Feb',
    averageCostPerDay: 4000,
    safetyRating: 'Safe',
    coordinates: { lat: 18.9220, lng: 72.8347 },

    audioGuideText: `Welcome to Mumbai, City of Dreams. Stand before Gateway of India arch, watch sunset along Marine Drive Queen's Necklace, and taste Vada Pav street food.`,

    fullHistory: `Transformed from 7 Koli fishing islands into British India commercial capital and Bollywood film hub.`,

    culturalInfo: `Gateway of India, CSMT Station UNESCO site, Marine Drive, Dabbawalas, and Ganesh Chaturthi festival.`,

    foodSpecialties: [
      { name: 'Vada Pav & Pav Bhaji', desc: 'Iconic street food spicy potato patty in soft bread.' }
    ],

    howToReachDetails: `✈️ BY AIR: Chhatrapati Shivaji International Airport (BOM).\n🚆 BY RAIL: CSMT & Mumbai Central.`,

    travelDestinationsInCity: [
      { name: 'Gateway of India', desc: '1924 waterfront arch monument.' },
      { name: 'Marine Drive', desc: 'Queen\'s Necklace seaside boulevard.' }
    ],

    hiddenGems: ['Elephanta Caves Island', 'Colaba Causeway Bazaar'],
    safetyTips: ['Avoid local train peak rush hours.'],

    highlights: ['Gateway of India', 'Marine Drive', 'Elephanta Caves'],
    activities: [{ name: 'Elephanta Caves Boat Tour from Gateway of India', duration: '4 hours', cost: 700 }],
    gettingThere: 'Fly into Mumbai Airport (BOM) or take trains to CSMT.',
    bestTimeToVisit: 'November to February'
  },

  // 16. Kaziranga (Nature)
  {
    id: 'd27',
    name: 'Kaziranga National Park',
    state: 'Assam',
    region: 'North-East',
    description: 'UNESCO World Heritage wildlife sanctuary harboring two-thirds of the world\'s great one-horned rhinoceroses beside Brahmaputra river.',
    image: '/images/destinations/kaziranga.svg',
    photo: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80',
    category: 'Nature',
    rating: 4.8,
    visitors: '110K+',
    bestSeason: 'Nov-Apr',
    averageCostPerDay: 3000,
    safetyRating: 'Safe',
    coordinates: { lat: 26.5775, lng: 93.1711 },

    audioGuideText: `Welcome to Kaziranga National Park, home of the Great One-Horned Rhinoceros. Embark on a morning jeep safari across tall elephant grass wetlands beside Brahmaputra river.`,

    fullHistory: `Created as reserve forest in 1905 by Lord Curzon. UNESCO World Heritage Site protecting endangered rhinos.`,

    culturalInfo: `Assamese Bihu folk dance, Mishing tribal culture, and Assam tea garden plantations.`,

    foodSpecialties: [
      { name: 'Assamese Thali', desc: 'Traditional rice meal served with Joha rice and Duck curry.' }
    ],

    howToReachDetails: `🚗 BY ROAD: Drive along NH-37 from Guwahati (217 km, 4.5 hours).`,

    travelDestinationsInCity: [
      { name: 'One-Horned Rhino Safari Zone', desc: 'Tall elephant grass wildlife sanctuary.' },
      { name: 'Kaziranga Orchid Park', desc: 'Botanical garden showcasing native Assam orchids.' }
    ],

    hiddenGems: ['Brahmaputra Sunset Viewpoint', 'Mishing River Village'],
    safetyTips: ['Park is closed May to October for monsoon floods.'],

    highlights: ['One-Horned Rhino Safari', 'Orchid Park', 'Assam Tea Estates'],
    activities: [{ name: 'Kaziranga Morning Elephant & Jeep Safari', duration: '3.5 hours', cost: 2200 }],
    gettingThere: 'Fly to Guwahati (GAU) and drive along NH-37 to Kaziranga.',
    bestTimeToVisit: 'November to April'
  },

  // 17. Gokarna (Beaches)
  {
    id: 'd30',
    name: 'Gokarna',
    state: 'Karnataka',
    region: 'South',
    description: 'A serene coastal town known for sacred Mahabaleshwar Shiva temple and famous cliffside beaches shaped like holy Om symbol.',
    image: '/images/destinations/gokarna.svg',
    photo: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    category: 'Beaches',
    rating: 4.7,
    visitors: '160K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 2000,
    safetyRating: 'Very Safe',
    coordinates: { lat: 14.5479, lng: 74.3188 },

    audioGuideText: `Welcome to Gokarna. Hike along cliffside coastal trails connecting Kudle Beach, Om Beach, and Paradise Beach, while visiting ancient Mahabaleshwar Temple.`,

    fullHistory: `Ancient Vedic pilgrimage site mentioned in Ramayana epics as Atmalinga seat. Developed into bohemian beach retreat.`,

    culturalInfo: `Atmalinga Shiva pilgrimage traditions combined with laid-back beach cliff culture.`,

    foodSpecialties: [
      { name: 'Coastal Fish Thali', desc: 'Fresh Arabian sea fish fried with spicy Byadgi chillies.' }
    ],

    howToReachDetails: `🚆 BY RAIL: Gokarna Road Station (GOK).\n🚗 BY ROAD: Drive from Goa along NH-66.`,

    travelDestinationsInCity: [
      { name: 'Om Beach', desc: 'Natural beach shaped like holy Om symbol.' },
      { name: 'Kudle Beach', desc: 'Wide sandy beach lined with seafood cafes.' }
    ],

    hiddenGems: ['Half Moon Beach Trail', 'Paradise Beach Boat Ride'],
    safetyTips: ['Hike between cliff beaches during daylight hours.'],

    highlights: ['Om Beach', 'Kudle Beach', 'Mahabaleshwar Temple'],
    activities: [{ name: 'Gokarna 5-Beach Cliff Trekking Trail', duration: '4 hours', cost: 500 }],
    gettingThere: 'Fly to Goa (GOI) or take a train to Gokarna Road station.',
    bestTimeToVisit: 'October to March'
  },

  // 18. Kanyakumari (Beaches)
  {
    id: 'd31',
    name: 'Kanyakumari',
    state: 'Tamil Nadu',
    region: 'South',
    description: 'The southernmost tip of mainland India, where Indian Ocean, Arabian Sea, and Bay of Bengal meet at Triveni Sangam.',
    image: '/images/destinations/kanyakumari.svg',
    photo: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80',
    category: 'Beaches',
    rating: 4.7,
    visitors: '500K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 2000,
    safetyRating: 'Very Safe',
    coordinates: { lat: 8.0883, lng: 77.5385 },

    audioGuideText: `Welcome to Kanyakumari, southernmost tip of mainland India. Take a ferry to Vivekananda Rock Memorial where three oceans meet at Triveni Sangam.`,

    fullHistory: `Dedicated to Goddess Kanya Devi. Swami Vivekananda meditated on the rock island here in December 1892.`,

    culturalInfo: `Vivekananda Rock Memorial, 133-foot Thiruvalluvar Statue, and simultaneous ocean sunrise and sunset.`,

    foodSpecialties: [
      { name: 'Kanyakumari Fish Curry', desc: 'Spicy Tamil coastal fish curry cooked with tamarind and coconut.' }
    ],

    howToReachDetails: `🚆 BY RAIL: Kanyakumari Station (CAPE).\n✈️ BY AIR: Trivandrum Airport (TRV, 90 km).`,

    travelDestinationsInCity: [
      { name: 'Vivekananda Rock Memorial', desc: 'Rock island memorial in middle of 3 oceans.' },
      { name: 'Thiruvalluvar Statue', desc: '133-foot stone statue of Tamil poet.' }
    ],

    hiddenGems: ['Padmanabhapuram Wooden Palace', 'Vattakottai Fort'],
    safetyTips: ['Ferry service operates weather permitting.'],

    highlights: ['Vivekananda Rock', 'Thiruvalluvar Statue', 'Triveni Sangam'],
    activities: [{ name: 'Ferry Ride to Vivekananda Rock Memorial', duration: '2 hours', cost: 150 }],
    gettingThere: 'Fly into Trivandrum Airport (TRV) or take direct train to Kanyakumari.',
    bestTimeToVisit: 'October to March'
  },

  // 19. Spiti Valley (Mountains)
  {
    id: 'd32',
    name: 'Spiti Valley',
    state: 'Himachal Pradesh',
    region: 'North',
    description: 'A cold high-altitude desert mountain valley known for ancient Tibetan monasteries, turquoise rivers, and stark barren Himalayan peaks.',
    image: '/images/destinations/spiti.svg',
    photo: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    category: 'Mountains',
    rating: 4.9,
    visitors: '40K+',
    bestSeason: 'Jun-Sep',
    averageCostPerDay: 3000,
    safetyRating: 'Safe',
    coordinates: { lat: 32.2461, lng: 78.0349 },

    audioGuideText: `Welcome to Spiti Valley, The Middle Land between Tibet and India. Explore 1,000-year-old Key Monastery perched on a cliff and visit Hikkim world's highest post office at 14,567 feet.`,

    fullHistory: `Ancient Buddhist trade region. Key Monastery founded in 11th century. Tabo Monastery preserved as Ajanta of Himalayas.`,

    culturalInfo: `Tibetan Buddhist monasteries, prayer flags, fossil villages, and Yak butter tea.`,

    foodSpecialties: [
      { name: 'Spiti Butter Tea & Tsampa', desc: 'Salted yak butter tea served with roasted barley flour.' },
      { name: 'Momo Dumplings & Thukpa', desc: 'Steamed vegetable dumplings served with hot noodle broth.' }
    ],

    howToReachDetails: `🚗 BY ROAD: Drive 4x4 SUV from Manali via Atal Tunnel & Kunzum Pass (June to September) or Shimla-Kinnaur route year round.`,

    travelDestinationsInCity: [
      { name: 'Key Monastery', desc: '1,000-year-old fortress monastery on cliff.' },
      { name: 'Chandratal Lake', desc: 'Crescent-shaped high-altitude glacial lake.' }
    ],

    hiddenGems: ['Langza Fossil Village', 'Komic Village (World Highest Motorable Village)', 'Dhankar Lake Trek'],
    safetyTips: ['Travel in 4x4 vehicles with mountain drivers.', 'Acclimate for high altitude.'],

    highlights: ['Key Monastery', 'Chandratal Lake', 'Hikkim Post Office'],
    activities: [{ name: 'Chandratal Lake High-Altitude Camping', duration: 'Overnight', cost: 2500 }],
    gettingThere: 'Drive 4x4 SUV from Manali via Atal Tunnel & Kunzum Pass.',
    bestTimeToVisit: 'June to September'
  },

  // 20. Leh-Ladakh (Mountains)
  {
    id: 'd12',
    name: 'Leh-Ladakh',
    state: 'Ladakh',
    region: 'North',
    description: 'A breathtaking high-altitude desert region known for extreme landscapes, Buddhist monasteries, and thrilling mountain passes.',
    image: '/images/destinations/ladakh.svg',
    photo: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    category: 'Mountains',
    rating: 4.9,
    visitors: '80K+',
    bestSeason: 'May-Sep',
    averageCostPerDay: 3500,
    safetyRating: 'Safe',
    coordinates: { lat: 34.1526, lng: 77.5771 },

    audioGuideText: `Welcome to Ladakh, Land of High Passes. Gaze across color-shifting Pangong Tso Lake, cross Khardung La pass at 17,582 feet, and ride double-humped Bactrian camels in Nubra Valley sand dunes.`,

    fullHistory: `Independent Himalayan kingdom on Silk Route. Joined Jammu & Kashmir princely state in 1834. Union Territory created in 2019.`,

    culturalInfo: `Ladakhi Buddhist festivals, Hemis monastery mask dances, prayer wheels, and Thukpa noodle soups.`,

    foodSpecialties: [
      { name: 'Skyu & Thukpa', desc: 'Traditional Ladakhi noodle & vegetable stew.' }
    ],

    howToReachDetails: `✈️ BY AIR: Leh Kushok Bakula Rimpoche Airport (IXL).\n🚗 BY ROAD: Manali-Leh or Srinagar-Leh Highway in summer.`,

    travelDestinationsInCity: [
      { name: 'Pangong Tso Lake', desc: 'Endorheic salt lake changing colors from blue to emerald.' },
      { name: 'Nubra Valley', desc: 'Cold desert sand dunes with double-humped camels.' }
    ],

    hiddenGems: ['Diskit Monastery', 'Magnetic Hill'],
    safetyTips: ['Acclimate 48 hours in Leh for high altitude.'],

    highlights: ['Pangong Lake', 'Nubra Valley', 'Thiksey Monastery'],
    activities: [{ name: 'Nubra Valley Bactrian Camel Safari', duration: '2 hours', cost: 1000 }],
    gettingThere: 'Fly into Leh Airport (IXL) or drive via Manali-Leh Highway.',
    bestTimeToVisit: 'May to September'
  }
];

export const categories = ['All', 'Beaches', 'Mountains', 'Heritage', 'Nature'];
export const regions = ['All Regions', 'North', 'South', 'East', 'West', 'North-East'];
