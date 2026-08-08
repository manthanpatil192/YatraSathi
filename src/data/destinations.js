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
      { name: 'Sanna & Sol Kadi', desc: 'Steamed rice cakes fermented with toddy paired with a digestive pink kokum-coconut drink.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Manohar International Airport at Mopa (GOX) & Dabolim Airport (GOI) connected with direct daily flights from Delhi, Mumbai, Bengaluru, and Hyderabad.\n\n🚆 BY RAILWAY:\n• Madgaon Junction (MAO) and Thivim (THVM) served by Konkan Railway network. Vande Bharat Express runs daily from Mumbai (CSMT) taking just 7.5 hours.\n\n🚌 BY ROAD & HIGHWAY:\n• Connected via 4-lane NH-66 highway from Mumbai (580 km) and Pune (450 km). Luxury sleeper Volvo buses operate overnight from major metros.\n\n🚕 LOCAL TRANSIT:\n• Self-drive rental cars and yellow-plate scooters/bikes are available at airports & railway stations (₹400-800/day). Goa Miles app provides regulated taxi bookings.`,

    travelDestinationsInCity: [
      { name: 'Basilica of Bom Jesus', desc: '16th-century UNESCO World Heritage Baroque church holding St. Francis Xavier relics.' },
      { name: 'Baga & Calangute Beaches', desc: 'Vibrant beach stretch famous for water sports, parasailing, and shacks.' },
      { name: 'Dudhsagar Waterfalls', desc: 'Four-tiered white milky waterfall standing 310 meters tall inside Bhagwan Mahavir Sanctuary.' },
      { name: 'Fort Aguada & Lighthouse', desc: '17th-century Portuguese lighthouse and fort overlooking the Arabian Sea.' }
    ],

    hiddenGems: [
      'Kakolem Secret Cove Beach (Tiger Beach) - Unspoiled golden sands.',
      'Chorao Island Dr. Salim Ali Bird Sanctuary - Rich mangrove wildlife.',
      'Netravali Bubble Lake & Wildlife Sanctuary - Natural bubbling pond.',
      'Fontainhas Latin Quarter Walking Trail - Colorful colonial houses.',
      'Harvalem Rock-Cut Caves & Waterfall - Ancient historic retreat.'
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
      { name: 'Babru', desc: 'Deep-fried stuffed flatbread served with black chickpea curry.' },
      { name: 'Chha Gosht', desc: 'Slow-cooked lamb cooked in yogurt and gram flour gravy with cardamom.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Bhuntar Airport (KUU, 50 km) receives daily flights from New Delhi and Chandigarh.\n\n🚆 BY RAILWAY:\n• Nearest broad gauge rail stations are Chandigarh Railway Station (310 km) and Ambala Cantt (340 km).\n\n🚌 BY ROAD & HIGHWAY:\n• NH-21 connects Manali to Delhi (530 km) and Chandigarh (280 km). Overnight luxury AC Volvo buses run daily from Delhi Kashmiri Gate ISBT (12-14 hours).\n\n🚕 LOCAL TRANSIT:\n• Local auto-rickshaws, taxis, and rental 4x4 vehicles operate from Mall Road auto stand.`,

    travelDestinationsInCity: [
      { name: 'Solang Valley', desc: 'Adventure sports hub for paragliding, skiing, zorbing, and quad biking.' },
      { name: 'Rohtang Pass (13,058 ft)', desc: 'High mountain pass offering year-round snow landscapes.' },
      { name: 'Hadimba Temple', desc: '16th-century wooden pagoda temple surrounded by cedar forest.' },
      { name: 'Atal Tunnel (Lahaul Gateway)', desc: '9.02 km world longest highway tunnel above 10,000 feet.' }
    ],

    hiddenGems: [
      'Sethan Igloo Village & Snow Trek - Cozy winter snow camps.',
      'Jogini Waterfall Trek from Vashisht - Scenic jungle waterfall trail.',
      'Naggar Castle & Roerich Art Gallery - Medieval stone palace.',
      'Sissu Waterfall & Lahaul Valley - Beautiful valley across tunnel.',
      'Hampta Pass Base Camp Trek - Alpine meadows and rock trails.'
    ],

    safetyTips: [
      'Apply online Rohtang Pass permits 24 hours in advance at Himachal Tourism portal.',
      'Wear warm thermal layers and waterproof gloves during winter snow sports.',
      'Acclimate to mountain altitude; avoid heavy alcohol consumption on arrival day.',
      'Check weather advisory during July-August heavy monsoon rainfall.',
      'Drive carefully on mountain hairpin bends; use low gear during downhill descent.',
      'Always hire certified adventure guides for paragliding and river rafting.'
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
      { name: 'Pyaaz Kachori', desc: 'Crispy fried pastry stuffed with spiced onion filling.' },
      { name: 'Mawa Kachori', desc: 'Sweet fried pastry stuffed with milk solids and soaked in cardamom sugar syrup.' },
      { name: 'Ker Sangri', desc: 'Traditional desert vegetable dish cooked with dry berries and local spices.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Jaipur International Airport (JAI, 12 km) operates daily domestic and direct international flights.\n\n🚆 BY RAILWAY:\n• Jaipur Junction (JP) connected by Vande Bharat Express and Shatabdi Express from New Delhi (4.5 hours).\n\n🚌 BY ROAD & HIGHWAY:\n• Connected via 6-lane NH-48 Expressway from Delhi (260 km, 4.5 hours) with regular RSRTC super deluxe buses.`,

    travelDestinationsInCity: [
      { name: 'Amer Fort', desc: 'Majestic hilltop fort with Sheesh Mahal mirror palace.' },
      { name: 'Hawa Mahal', desc: 'Palace of Winds with 953 honeycomb windows.' },
      { name: 'City Palace Jaipur', desc: 'Royal residence with Chandra Mahal museum.' },
      { name: 'Jantar Mantar', desc: 'UNESCO astronomical observatory with world largest stone sundial.' }
    ],

    hiddenGems: [
      'Panna Meena ka Kund Geometric Stepwell - Beautiful structural design.',
      'Galtaji Temple (Monkey Temple & Holy Springs) - Sacred mountain springs.',
      'Nahargarh Fort Sunset View Point - Scenic panoramic view.',
      'Anokhi Museum of Hand Printing - Traditional textile heritage.',
      'Patrika Gate Cultural Mural Arch - Stunning Rajasthani architecture.'
    ],

    safetyTips: [
      'Negotiate e-rickshaw and auto fares before starting your trip.',
      'Beware of unauthorized street guides outside Amer Fort and Hawa Mahal.',
      'Drink bottled water and carry sun umbrellas during sunny afternoons.',
      'Store valuables securely inside crowded Johari Bazaar markets.',
      'Keep tourist helpline numbers saved: Tourist Helpline (1363) and Police (100).',
      'Wear modest clothes inside active religious sites and temples.'
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
      { name: 'Ela Ada', desc: 'Steamed rice parcel stuffed with jaggery and grated coconut inside banana leaf.' },
      { name: 'Puttu and Kadala Curry', desc: 'Steamed rice powder cylinders served with black chickpea curry.' },
      { name: 'Banana Fritters (Pazham Pori)', desc: 'Crispy sweet ripe banana slices dipped in batter and fried.' },
      { name: 'High Range Black Tea', desc: 'Freshly brewed aromatic tea leaves processed directly in local gardens.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Cochin International Airport (COK, 110 km, 3.5 hours drive).\n\n🚆 BY RAILWAY:\n• Ernakulam Junction (ERS, 120 km) or Aluva Railway Station (110 km).\n\n🚌 BY ROAD & HIGHWAY:\n• Drive up Western Ghats via Aluva-Munnar Road (NH-85). Regular KSRTC buses run from Kochi and Madurai.`,

    travelDestinationsInCity: [
      { name: 'Eravikulam National Park', desc: 'Sanctuary for rare Nilgiri Tahr goats and Anamudi Peak.' },
      { name: 'Tata Tea Museum', desc: 'Historic tea processing museum showcasing heritage machinery.' },
      { name: 'Mattupetty Dam & Lake', desc: 'Scenic lake offering speed boating and elephant sightings.' },
      { name: 'Top Station Viewpoint', desc: 'Scenic panoramic valley view of neighboring Tamil Nadu.' }
    ],

    hiddenGems: [
      'Kolukkumalai Sunrise Point - World\'s highest tea estate.',
      'Lockhart Gap Viewpoint & Valley - Quiet forest gorge trail.',
      'Meesapulimala Trekking Peak - Scenic mountain trekking path.',
      'Anayirankal Dam & Spice Gardens - Elephant spotting reservoir.',
      'Attukad Waterfalls Walk - Mountain stream through steep rocks.'
    ],

    safetyTips: [
      'Drive carefully on foggy mountain bends during early morning hours.',
      'Book Eravikulam safari entry tickets online to avoid long ticket counter queues.',
      'Carry light rain jackets as mountain showers occur unannounced.',
      'Avoid walking alone inside tea estates late in the evening due to wildlife activity.',
      'Save local police helpline numbers: Police (100) and Fire Force (101).',
      'Keep hydrated during treks and stick to designated trails.'
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
      { name: 'Kachori with Kadhi', desc: 'Crispy fried lentil pastry served with tasty spicy yogurt gravy.' },
      { name: 'Safed Maas', desc: 'Rich chicken cooked in cashew, almond, coconut, and yogurt white gravy.' },
      { name: 'Dil Jani', desc: 'Traditional orange and dry fruit sweet dessert served cold.' },
      { name: 'Mirchi Vada', desc: 'Fried spicy green peppers stuffed with potato masala.' },
      { name: 'Hari Mirch Ka Maas', desc: 'Spicy Mewari lamb dish cooked with fresh crushed green chillies.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Maharana Pratap Airport (UDR, 22 km) connected to major hubs.\n\n🚆 BY RAILWAY:\n• Udaipur City Railway Station (UDZ) served by express trains from Delhi, Jaipur, and Mumbai.\n\n🚌 BY ROAD:\n• Connected via National Highway 48 with direct deluxe tourist buses from Ahmedabad and Jaipur.\n\n🚕 LOCAL TRANSIT:\n• Uber, local auto-rickshaws, and self-drive rental scooters are available.`,

    travelDestinationsInCity: [
      { name: 'City Palace Udaipur', desc: 'Vast palace complex overlooking Lake Pichola.' },
      { name: 'Lake Pichola', desc: 'Romantic lake with boat rides to Jag Mandir.' },
      { name: 'Jagdish Temple', desc: 'Stunning Indo-Aryan temple built in 1651.' },
      { name: 'Fateh Sagar Lake', desc: 'Scenic artificial lake popular for boating.' }
    ],

    hiddenGems: [
      'Saheliyon Ki Bari - Royal historic garden.',
      'Sajjangarh Monsoon Palace - Hilltop panoramic sunset view.',
      'Ambrai Ghat Sunset View - Stunning palace lake views.',
      'Ahar Cenotaphs - Ancient royal archaeological stone monuments.',
      'Bahubali Hills Badi Lake - Scenic lake trekking spot.'
    ],

    safetyTips: [
      'Pre-book sunset boat rides on Lake Pichola to avoid ticket queues.',
      'Avoid swimming inside lakes due to depth and active boating.',
      'Do not hire unregistered local guides outside City Palace gates.',
      'Keep valuables secure inside busy local markets like Bada Bazaar.',
      'Carry sunglasses and a hat for day sightseeing.',
      'Ensure auto fare is agreed before starting the journey.'
    ],

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
      { name: 'Kahwa Tea', desc: 'Green tea brewed with saffron, almonds, and cardamom.' },
      { name: 'Tabak Maaz', desc: 'Crispy fried mutton ribs cooked in spices and clarified butter.' },
      { name: 'Gushtaba', desc: 'Spiced minced lamb balls cooked in rich yogurt gravy.' },
      { name: 'Nadru Yakhni', desc: 'Lotus stems cooked in aromatic yogurt and mint sauce.' },
      { name: 'Sheermal & Kashmiri Kulcha', desc: 'Traditional saffron flatbread and crispy butter biscuits.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Srinagar Sheikh ul-Alam Airport (SXR) has daily direct flights from Delhi and Mumbai.\n\n🚆 BY RAILWAY:\n• Jammu Tawi Railway Station (270 km) is the closest main railway head.\n\n🚌 BY ROAD:\n• NH-44 highway connects Srinagar to Jammu through Chenani-Nashri Tunnel.\n\n🚕 LOCAL TRANSIT:\n• Shikaras are used on Dal Lake, while local tourist cabs operate for city sightseeing.`,

    travelDestinationsInCity: [
      { name: 'Dal Lake', desc: 'Famous lake with floating houseboats & Shikaras.' },
      { name: 'Shalimar Bagh', desc: 'Mughal terraced garden built by Jahangir.' },
      { name: 'Nishat Bagh', desc: 'Garden of Gladness offering step fountains.' },
      { name: 'Hazratbal Shrine', desc: 'Historic white marble Islamic shrine beside lake.' }
    ],

    hiddenGems: [
      'Nigeen Lake Quiet Haven - Peaceful boating spots.',
      'Pari Mahal Sunset View Point - Historic terraced ruins.',
      'Dachigam National Park - Home of Hangul Kashmiri stag.',
      'Doodhpathri Valley - Rolling green valley pastures.',
      'Yusmarg Hill Meadows - Offbeat pine-forested glades.'
    ],

    safetyTips: [
      'Confirm houseboat booking rates near Boulevard Road in advance.',
      'Check local travel advisories and weather alerts before visiting.',
      'Wear warm woolen clothes during winter visits (Nov-Feb).',
      'Follow local regulations during active festivals or events.',
      'Drink bottled water and purchase local goods from certified state depots.',
      'Respect cultural values at religious shrines and monuments.'
    ],

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
      { name: 'Mughlai Biryani', desc: 'Aromatic basmati rice cooked with whole spices.' },
      { name: 'Bedai Sabzi', desc: 'Crispy fried lentil flatbread served with spicy potato curry.' },
      { name: 'Agra Jalebi', desc: 'Golden loops of sugar-soaked fried batter.' },
      { name: 'Mughlai Chicken', desc: 'Rich chicken curry cooked in almond and onion paste.' },
      { name: 'Seekh Kababs', desc: 'Spiced minced lamb skewered and charcoal grilled.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Kheria Airport (AGR) receives seasonal domestic flights.\n\n🚆 BY RAILWAY:\n• Agra Cantt (AGC) served by Gatimaan Express from Delhi (100 mins).\n\n🚗 BY ROAD:\n• Connected via Yamuna Expressway from Delhi (2 hours drive, 165 km).\n\n🚕 LOCAL TRANSIT:\n• E-rickshaws are mandatory near Taj Mahal boundary to prevent pollution.`,

    travelDestinationsInCity: [
      { name: 'Taj Mahal', desc: 'UNESCO Wonder of the World in white marble.' },
      { name: 'Agra Fort', desc: 'Red sandstone Mughal imperial fortress.' },
      { name: 'Itmad-ud-Daulah', desc: 'Jewel box tomb known as Baby Taj.' },
      { name: 'Fatehpur Sikri', desc: 'Akbar\'s red sandstone royal capital city.' }
    ],

    hiddenGems: [
      'Mehtab Bagh Taj Sunset View - Gardens across Yamuna River.',
      'Taj Nature Walk - Natural forest trails near Taj.',
      'Sikandra Akbar Tomb - Beautiful red sandstone monument.',
      'Chini ka Rauza - Persian style glazed tile tomb.',
      'Sheroes Hangout Café - Inspiring cafe run by acid attack survivors.'
    ],

    safetyTips: [
      'Taj Mahal is closed on Fridays.',
      'Strictly avoid carrying big bags, chargers, and tripods inside Taj Mahal.',
      'Beware of aggressive street vendors and guides; hire through state tourism counters.',
      'Pre-book entrance tickets online at ASI portal to skip long queues.',
      'Drink bottled water and cover your head during sunny afternoons.',
      'Verify taxi and e-rickshaw fares before starting.'
    ],

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
      { name: 'Chandni Chowk Paranthas', desc: 'Stuffed fried flatbreads served with tasty chutneys.' },
      { name: 'Chole Bhature', desc: 'Spiced chickpea curry paired with deep-fried puffy bread.' },
      { name: 'Dahi Bhalla Chat', desc: 'Lentil fritters soaked in sweet yogurt and spicy chutneys.' },
      { name: 'Nihari Beef/Mutton', desc: 'Slow-cooked spiced Mughal stew served with warm Tandoori Roti.' },
      { name: 'Karim\'s Mutton Seekh Kababs', desc: 'Famous street food kababs from Nizamuddin markets.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Indira Gandhi International Airport (DEL) has domestic and international terminals.\n\n🚆 BY RAILWAY:\n• New Delhi (NDLS) & Hazrat Nizamuddin (NZM) served by Rajdhani and Shatabdi trains.\n\n🚇 LOCAL METRO:\n• Delhi Metro runs across the entire NCR region with cards/tokens.\n\n🚕 CABS & AUTOS:\n• Ola, Uber, and local yellow autos available through mobile apps.`,

    travelDestinationsInCity: [
      { name: 'Red Fort', desc: 'Mughal sandstone fortress.' },
      { name: 'Qutub Minar', desc: 'World\'s tallest brick minaret.' },
      { name: 'Humayun\'s Tomb', desc: 'Stunning red sandstone precursor to Taj Mahal.' },
      { name: 'India Gate', desc: 'War memorial arch at Rajpath.' }
    ],

    hiddenGems: [
      'Agrasen ki Baoli Stepwell - Architectural stepwell.',
      'Hauz Khas Village Fort - Historic ruins beside modern cafes.',
      'Sunder Nursery Park - Beautiful restored Mughal park.',
      'Safdarjung Tomb - Red sandstone garden monument.',
      'Majnu Ka Tilla - Vibrant Tibetan community food lanes.'
    ],

    safetyTips: [
      'Use the air-conditioned Delhi Metro network to travel faster and avoid traffic.',
      'Store mobile phones and bags securely inside busy markets like Chandni Chowk.',
      'Drink mineral water and purchase street food from busy, hygienic stalls.',
      'Pre-purchase online entry tickets for Red Fort and Qutub Minar.',
      'Avoid isolated areas late at night; prefer app-based cabs.',
      'Keep local police emergency contact (112) saved.'
    ],

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
      { name: 'Chana Madra', desc: 'Tangy Himachali black chickpea curry cooked in yogurt and ghee.' },
      { name: 'Siddu with Ghee', desc: 'Steamed wheat dough filled with walnuts and poppy seeds.' },
      { name: 'Mash Dal', desc: 'Slow-cooked split black lentils flavored with ginger and garlic.' },
      { name: 'Kullu Trout Fish fry', desc: 'Local river fish fried in mustard oil and fresh spices.' },
      { name: 'Meetha Rice', desc: 'Sweetened saffron rice topped with dry fruits.' },
      { name: 'Sepu Badi Sabzi', desc: 'Spinach and split black lentil dumplings cooked in yogurt gravy.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Jubbarhatti Airport (22 km) offers small aircraft flights from Delhi.\n\n🚆 BY RAILWAY:\n• Kalka Railway Station (KLK) connected to Shimla via UNESCO Toy Train.\n\n🚌 BY ROAD:\n• NH-5 connects Shimla to Chandigarh (115 km) and New Delhi (350 km).\n\n🚕 LOCAL TRANSIT:\n• Local passenger lifts, buses, and walk pathways connect Ridge area.`,

    travelDestinationsInCity: [
      { name: 'The Ridge & Christ Church', desc: 'Promenade with Neo-Gothic church.' },
      { name: 'Mall Road', desc: 'Pedestrian shopping avenue.' },
      { name: 'Viceregal Lodge', desc: 'Neo-Elizabethan colonial palace of Viceroy.' },
      { name: 'Jakhu Temple (8,000 ft)', desc: 'Hilltop Hanuman temple with giant statue.' }
    ],

    hiddenGems: [
      'Annandale Ground & Army Museum - Historic race track glade.',
      'Chadwick Falls Trail - Quiet forest waterfall stream.',
      'Tara Devi Temple Hike - Scenic pine forest hill temple.',
      'Summer Hill Pine Glades - Quiet forest pathways.',
      'Kufri Valley Ski Slopes - Snow adventure spots.'
    ],

    safetyTips: [
      'Vehicles are strictly banned in the Mall Road and Ridge areas.',
      'Watch out for monkeys around Jakhu Temple; avoid keeping food visible.',
      'Book Kalka-Shimla Toy Train tickets well in advance during peak season.',
      'Wear sturdy walking shoes for climbing steep city lanes.',
      'Check road conditions during heavy snow warnings (Jan-Feb).',
      'Drink filtered or bottled mineral water.'
    ],

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
      { name: 'Kolkata Kathi Roll', desc: 'Flaky paratha rolled with spiced grilled meat kababs.' },
      { name: 'Rosogolla & Mishti Doi', desc: 'Spongy sweet syrup balls & sweet baked yogurt.' },
      { name: 'Machher Jhol', desc: 'Traditional Bengali fish curry cooked with mustard oil and spices.' },
      { name: 'Kolkata Biryani', desc: 'Fragrant basmati rice cooked with saffron, meat, and signature spiced potato.' },
      { name: 'Luchi & Alur Dom', desc: 'Puffy deep-fried flatbread paired with spiced potato curry.' },
      { name: 'Sondesh Dessert', desc: 'Traditional sweet dessert made of sweetened fresh cottage cheese.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Netaji Subhash Chandra Bose Airport (CCU) connects all major domestic and international hubs.\n\n🚆 BY RAILWAY:\n• Howrah (HWH) & Sealdah (SDAH) are main train terminals.\n\n🚇 METRO & TRAMS:\n• Kolkata Metro and historic streetcar trams operate daily.\n\n🚕 LOCAL TRANSIT:\n• Iconic yellow Ambassador taxis and app cabs are widely available.`,

    travelDestinationsInCity: [
      { name: 'Victoria Memorial', desc: 'White marble palace dedicated to Queen Victoria.' },
      { name: 'Howrah Bridge', desc: 'Iconic cantilever bridge over Hooghly River.' },
      { name: 'Dakshineswar Kali Temple', desc: '19th-century temple on banks of Hooghly.' },
      { name: 'Indian Museum Kolkata', desc: 'Oldest museum in India established in 1814.' }
    ],

    hiddenGems: [
      'Kumartuli Clay Artisans - Clay idol making potter neighborhood.',
      'College Street Boi Para - Giant historic open-air book market.',
      'Marble Palace Mansion - Private 19th-century art treasure house.',
      'Prinsep Ghat Riverside Walk - Riverfront arches at sunset.',
      'South Park Street Cemetery - 18th-century obelisk structures.'
    ],

    safetyTips: [
      'Confirm taxi fares or use pre-paid taxi booths at airports and railway stations.',
      'Keep alert inside crowded markets like New Market and Burrabazar.',
      'Avoid high-water street lanes during monsoon months (July-Sept).',
      'Wear comfortable clothing during hot humid summer afternoons.',
      'Save emergency helpline number: Kolkata Police (100).',
      'Use the metro network to travel fast across North and South Kolkata.'
    ],

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
      { name: 'Mysore Pak', desc: 'Melt-in-mouth golden sugar and ghee chickpea flour sweet.' },
      { name: 'Mysore Masala Dosa', desc: 'Crispy rice crepe lined with red garlic spicy chutney.' },
      { name: 'Obbattu', desc: 'Traditional sweet flatbread stuffed with jaggery and coconut.' },
      { name: 'Mysore Bonda', desc: 'Deep-fried fluffy lentil flour fritters served with coconut chutney.' },
      { name: 'Ragi Mudde & Saaru', desc: 'Nutritious finger millet balls served with spicy vegetable soup.' },
      { name: 'Mysore Filter Coffee', desc: 'Traditional frothy coffee brewed with roasted chicory beans.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Mysore Airport (MYQ) offers limited flights from Chennai and Bengaluru.\n\n🚆 BY RAILWAY:\n• Mysore Junction (MYS) served by Vande Bharat Express from Bengaluru (2 hours).\n\n🚌 BY ROAD:\n• Connected via 10-lane Bengaluru-Mysuru Expressway (145 km).\n\n🚕 LOCAL TRANSIT:\n• Local KSRTC city buses, auto-rickshaws, and tourist cabs operate daily.`,

    travelDestinationsInCity: [
      { name: 'Mysore Palace', desc: 'Royal residence illuminated by 100,000 bulbs.' },
      { name: 'Chamundi Hill', desc: 'Temple hill with giant Nandi monolith.' },
      { name: 'Brindavan Gardens', desc: 'Terraced musical fountain gardens beside dam.' },
      { name: 'Somnathpur Temple', desc: 'Stunning 13th-century Hoysala stone temple.' }
    ],

    hiddenGems: [
      'Jaganmohan Palace Art Gallery - Historic paintings museum.',
      'St. Philomena\'s Church - Tall Neo-Gothic cathedral.',
      'Karanji Lake Bird Sanctuary - Giant walk-through aviary.',
      'KRS Dam Backwaters - Quiet sunset picnic spots.',
      'Mysore Sand Sculpture Museum - Unique sand art creations.'
    ],

    safetyTips: [
      'Visit Mysore Palace on Sunday evening (07:00 PM - 08:00 PM) for the illumination.',
      'Mobiles are not allowed inside Chamundeshwari Temple inner sanctum.',
      'Use government showrooms to purchase genuine Sandalwood oil and Mysore Silk.',
      'Ensure auto drivers use the meter or fix the rate before starting.',
      'Dress modestly when visiting temples and palaces.',
      'Keep emergency number saved: Police (100).'
    ],

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
      { name: 'Madurai Jigarthanda', desc: 'Cooling dessert milk drink with almond gum & basundi.' },
      { name: 'Kari Dosa', desc: 'Thick local rice pancake topped with spiced minced lamb and eggs.' },
      { name: 'Kothu Parotta', desc: 'Shredded flaky flatbread stir-fried with eggs, meat, and salna gravy.' },
      { name: 'Bun Parotta', desc: 'Fluffy sponge-like bun layered flatbread fried with ghee.' },
      { name: 'Paruthi Paal', desc: 'Traditional warm sweet drink made of cottonseed milk and ginger.' },
      { name: 'Idiyappam & Salna', desc: 'Steamed rice noodles served with spicy vegetable curry.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Madurai International Airport (IXM) has domestic flights from Chennai and Bengaluru.\n\n🚆 BY RAILWAY:\n• Madurai Junction (MDU) is connected to Chennai via Tejas and Vande Bharat trains.\n\n🚌 BY ROAD:\n• Connected by NH-7 highway with frequent government buses from Bengaluru and Chennai.\n\n🚕 LOCAL TRANSIT:\n• Local auto-rickshaws and app cabs are the most convenient transit options.`,

    travelDestinationsInCity: [
      { name: 'Meenakshi Amman Temple', desc: '14-towered Dravidian temple with detailed sculptures.' },
      { name: 'Thirumalai Nayakkar Palace', desc: '17th-century palace with massive white pillars.' },
      { name: 'Alagar Kovil Temple', desc: 'Hillside Vishnu temple with natural springs.' },
      { name: 'Vandiyur Mariamman Teppakulam', desc: 'Huge temple tank popular for float festivals.' }
    ],

    hiddenGems: [
      'Gandhi Memorial Museum - Displays Mahatma Gandhi\'s historic dhoti.',
      'Puthu Mandapam Bazaar - Historic 17th-century stone market hall.',
      'Samamanar Hills Jain Caves - Ancient rock-cut Jain carvings.',
      'Thiruparankundram Cave Temple - Ancient rock-cut Murugan temple.',
      'Keeladi Excavation Site - Ancient Sangam age archeological museum.'
    ],

    safetyTips: [
      'Mobiles, cameras, and leather belts are strictly banned inside Meenakshi Temple.',
      'Dress code: Shoulders and knees must be covered to enter temples.',
      'Use official lockers outside temple gates to store your mobile phones.',
      'Drink bottled water and use sunblock lotion during hot afternoons.',
      'Negotiate auto fares or use ride-hailing apps for local transit.',
      'Respect sacred prayer times and temple custom protocols.'
    ],

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
      { name: 'Karimeen Pollichathu', desc: 'Pearl spot fish marinated and shallow fried inside banana leaves.' },
      { name: 'Kappa and Meen Curry', desc: 'Boiled mashed tapioca served with spicy red fish curry.' },
      { name: 'Kerala Puttu & Kadala', desc: 'Steamed rice cylinders served with spiced chickpea curry.' },
      { name: 'Duck Mappas', desc: 'Tender duck pieces slow-cooked in creamy coconut milk gravy.' },
      { name: 'Payasam', desc: 'Traditional sweet milk pudding made with rice and coconut milk.' },
      { name: 'Toddy Shop Seafood Sabzi', desc: 'Spicy clam stir-fry paired with sweet coconut palm toddy.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Cochin International Airport (COK, 75 km, 2 hours drive).\n\n🚆 BY RAILWAY:\n• Alappuzha Railway Station (ALLP) has daily trains from Kochi and Thiruvananthapuram.\n\n🚌 BY ROAD:\n• Connected by NH-66 with frequent Kerala State (KSRTC) buses from Kochi.\n\n🚕 LOCAL TRANSIT:\n• Local passenger ferry boats operate between villages, while auto-rickshaws serve the town.`,

    travelDestinationsInCity: [
      { name: 'Alleppey Backwaters', desc: 'Network of palm-fringed canals and lagoons.' },
      { name: 'Marari Beach', desc: 'Quiet coconut-palm beach for relaxation.' },
      { name: 'Alappuzha Lighthouse', desc: 'Historic 1862 lighthouse overlooking the sea.' },
      { name: 'Punnamada Lake', desc: 'Scenic venue of the Nehru Trophy Snake Boat Race.' }
    ],

    hiddenGems: [
      'Pathiramanal Bird Island - Quiet sanctuary in Vembanad Lake.',
      'Kuttanad Fields - Scenic farming below sea level.',
      'Andhakaranazhi Beach - Beautiful beach delta area.',
      'Ambalappuzha Krishna Temple - Famous for sweet milk payasam.',
      'Vembanad Lake Sunset Cruise - Wide calm water sunset views.'
    ],

    safetyTips: [
      'Check government registration and safety licenses before booking houseboats.',
      'Always wear life jackets during boating or canoeing tours.',
      'Avoid swimming inside backwater canals due to underwater currents.',
      'Carry mosquito repellent lotions for evening backwater cruises.',
      'Negotiate houseboat rates directly at boarding points.',
      'Ensure drinking water is bottled and purified.'
    ],

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
      { name: 'French Croissant & Quiche', desc: 'Authentic French bakeries serving fresh quiche and pain au chocolat.' },
      { name: 'Mutton Rolls & Samosas', desc: 'Local spicy tea-time snacks served with mint chutney.' },
      { name: 'Pondy Crab Masala', desc: 'Spicy Tamil style crab stir-fry cooked in pepper gravy.' },
      { name: 'Crepe Suzette', desc: 'Thin French sweet pancakes served with orange syrup.' },
      { name: 'Ratatouille vegetable dish', desc: 'Classic French stewed vegetable dish.' },
      { name: 'Filter Kaapi', desc: 'Foamy South Indian coffee served in brass cups.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Puducherry Airport (PNY) offers domestic flights from Hyderabad.\n\n🚆 BY RAILWAY:\n• Puducherry Railway Station (PDY) connected to Chennai and Villupuram.\n\n🚌 BY ROAD:\n• Drive along East Coast Road (ECR) from Chennai (150 km, 3 hours drive).\n\n🚕 LOCAL TRANSIT:\n• Rental bicycles and automatic scooters are popular options for exploring.`,

    travelDestinationsInCity: [
      { name: 'Promenade Beach', desc: 'Seaside walking boulevard along French Quarter.' },
      { name: 'French Quarter', desc: 'Pastel yellow colonial homes with bougainvillea.' },
      { name: 'Auroville Matrimandir', desc: 'Golden spherical meditation sanctuary.' },
      { name: 'Sri Aurobindo Ashram', desc: 'Spiritual ashram founded in 1926.' }
    ],

    hiddenGems: [
      'Paradise Beach Sand Bar - Clean secluded beach island.',
      'Serenity Beach Surfing - Active surfing school waves.',
      'Auroville Forest Trails - Quiet wooded walking paths.',
      'Chunnambar Boating Backwaters - Mangrove boating canal.',
      'Sacred Heart Basilica - Gothic revival church architecture.'
    ],

    safetyTips: [
      'Rent bicycles or scooters to tour the French Quarter streets easily.',
      'Ensure to book Auroville Matrimandir inner chamber entry passes 2-3 days in advance.',
      'Strictly avoid swimming at Promenade Beach due to rocky barriers and depth.',
      'Keep clean and throw trash only inside designated bins.',
      'Follow local traffic rules on narrow heritage lanes.',
      'Enjoy shopping at local boutique shops with verified bills.'
    ],

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
      { name: 'Vada Pav & Pav Bhaji', desc: 'Iconic street food spicy potato patty in soft bread bun.' },
      { name: 'Bhel Puri Chat', desc: 'Crispy puffed rice mixed with tangy tamarind chutney and veggies.' },
      { name: 'Bombay Sandwich', desc: 'Triple layer toast sandwich filled with potatoes, beetroot, and mint chutney.' },
      { name: 'Keema Ghotala', desc: 'Spiced minced mutton cooked with scrambled eggs.' },
      { name: 'Misal Pav', desc: 'Spicy moth bean curry topped with farsan and served with bread.' },
      { name: 'Falooda Sweet', desc: 'Cold dessert drink with vermicelli, rose syrup, and ice cream.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Chhatrapati Shivaji Airport (BOM) has international and domestic terminals.\n\n🚆 BY RAILWAY:\n• Chhatrapati Shivaji Terminus (CSMT) & Mumbai Central (MMCT).\n\n🚇 LOCAL TRANSIT:\n• Local trains and Mumbai Metro connect all parts of the city.\n\n🚕 CABS & AUTOS:\n• App-based cabs and black-and-yellow auto-rickshaws serve commuters daily.`,

    travelDestinationsInCity: [
      { name: 'Gateway of India', desc: '1924 waterfront arch monument.' },
      { name: 'Marine Drive', desc: 'Queen\'s Necklace seaside boulevard.' },
      { name: 'Chhatrapati Shivaji Maharaj Terminus', desc: 'UNESCO Victorian Gothic railway station.' },
      { name: 'Haji Ali Dargah', desc: '15th-century mosque located on an islet.' }
    ],

    hiddenGems: [
      'Elephanta Caves Island - Ancient rock-cut cave temples.',
      'Colaba Causeway Bazaar - Vibrant shopping street.',
      'Sanjay Gandhi National Park - Forest park with Kanheri Caves.',
      'Banganga Tank Walk - Sacred ancient water tank sanctuary.',
      'Global Vipassana Pagoda - Massive golden meditation dome.'
    ],

    safetyTips: [
      'Avoid local train travel during peak rush hours (09:00 AM - 11:00 AM, 06:00 PM - 09:00 PM).',
      'Use the metered rates for yellow-black taxis and auto-rickshaws.',
      'Be careful during high tide warnings near Marine Drive seawalls.',
      'Keep dynamic emergency contacts saved: Police (100).',
      'Purchase tickets online for Elephanta Caves ferry.',
      'Stay hydrated and carry umbrellas during summer and monsoon seasons.'
    ],

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
      { name: 'Assamese Fish Tenga', desc: 'Tangy fish curry cooked with elephant apple or lemon.' },
      { name: 'Aloo Pitika', desc: 'Mashed potatoes flavored with raw onions, green chillies, and mustard oil.' },
      { name: 'Duck Curry with Ash Gourd', desc: 'Tender duck meat cooked with native spices and ash gourd.' },
      { name: 'Pitha Sweets', desc: 'Steamed rice cakes filled with sweet sesame or jaggery.' },
      { name: 'Khar vegetable dish', desc: 'Traditional starter prepared with sun-dried banana ashes.' },
      { name: 'Assam Milk Tea', desc: 'Rich brewed tea made from premium CTC black tea leaves.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Jorhat Airport (97 km) & Guwahati Airport (GAU, 217 km).\n\n🚆 BY RAILWAY:\n• Nearest railway station is Jakhalabandha (19 km) or Guwahati.\n\n🚌 BY ROAD:\n• Drive along National Highway 37 from Guwahati (4.5 hours drive).\n\n🚕 LOCAL TRANSIT:\n• Forest Department safari jeeps and vehicles operate inside zones.`,

    travelDestinationsInCity: [
      { name: 'One-Horned Rhino Safari Zone', desc: 'Tall elephant grass wildlife sanctuary.' },
      { name: 'Kaziranga Orchid Park', desc: 'Botanical garden showcasing native Assam orchids.' },
      { name: 'Brahmaputra River Bank', desc: 'Scenic delta plains home to dolphins.' },
      { name: 'Hathikuli Tea Estate', desc: 'Organic tea estate offering fresh tasting tours.' }
    ],

    hiddenGems: [
      'Brahmaputra River Sunset Point - Scenic dolphin viewing.',
      'Mishing Tribal River Village - Traditional wooden stilt houses.',
      'Kakochang Waterfalls Trail - Mountain stream hike near forest.',
      'Panbari Forest Reserve - Quiet bird watching forest trails.',
      'Deoparbat Ruins - Ancient stone carvings monument.'
    ],

    safetyTips: [
      'The park remains closed from May to October due to monsoon floods.',
      'Book jeep and elephant safari slots online at the official portal.',
      'Do not throw plastic or litter inside wildlife sanctuary zones.',
      'Maintain quietness and wear green/earthy clothes during safari.',
      'Maintain distance from wild animals during safari tours.',
      'Hire a licensed forest guard for all trekking zones.'
    ],

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
      { name: 'Coastal Fish Thali', desc: 'Fresh Arabian sea fish fried with spicy Byadgi chillies.' },
      { name: 'Gokarna Prawn Masala', desc: 'Spicy coastal curry served with hot boiled rice.' },
      { name: 'Neer Dosa & Chutney', desc: 'Lacy thin rice crepes served with coconut chutney.' },
      { name: 'Clam Fry (Tisriya)', desc: 'Stir-fried shellfish cooked in fresh coconut and spices.' },
      { name: 'Banana Buns', desc: 'Sweet fried banana-wheat flour buns popular for breakfast.' },
      { name: 'Kokum Sharbat', desc: 'Refreshing tangy pink drink made of forest kokum fruit extract.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Dabolim Airport (GOI, 140 km) or Mopa Airport (170 km).\n\n🚆 BY RAILWAY:\n• Gokarna Road Railway Station (GOK, 8 km) served by Konkan Express.\n\n🚌 BY ROAD:\n• Connected by NH-66 highway with direct luxury buses from Bengaluru.\n\n🚕 LOCAL TRANSIT:\n• Local auto-rickshaws and rental scooters serve the beaches.`,

    travelDestinationsInCity: [
      { name: 'Om Beach', desc: 'Natural sandy beach shaped like holy Om symbol.' },
      { name: 'Kudle Beach', desc: 'Wide sandy beach lined with beach shacks.' },
      { name: 'Mahabaleshwar Temple', desc: 'Ancient Shiva temple holding the sacred Atmalinga.' },
      { name: 'Paradise Beach', desc: 'Quiet secluded cove beach accessible by boat.' }
    ],

    hiddenGems: [
      'Half Moon Beach Trail - Quiet sandy beach trail.',
      'Paradise Beach Boat Ride - Secluded beach cove.',
      'Mirjan Fort - Stunning 16th-century stone fort.',
      'Nirvana Beach Secluded Cove - Long quiet sandy shore.',
      'Koti Teertha Sacred Tank - Historic temple water tank.'
    ],

    safetyTips: [
      'Hike between cliffside beaches during daylight hours only.',
      'Avoid swimming during high tide at Paradise and Half Moon beaches.',
      'Dress modestly when visiting Mahabaleshwar Temple.',
      'Verify boat ferry charges at Om Beach before boarding.',
      'Carry a flashlight when walking back from Kudle Beach at night.',
      'Drink bottled water and carry sun umbrellas.'
    ],

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
      { name: 'Kanyakumari Fish Curry', desc: 'Spicy Tamil coastal fish curry cooked with tamarind and fresh coconut paste.' },
      { name: 'Nanjil Fish Fry', desc: 'Spicy fish fry prepared with local herbs and fried in coconut oil.' },
      { name: 'Banana Chips (Nendran)', desc: 'Crispy thick chips made of local ripe bananas.' },
      { name: 'Kothu Parotta', desc: 'Shredded flatbread stir-fried with eggs, vegetables, and chicken gravy.' },
      { name: 'Elaneer Payasam', desc: 'Creamy sweet pudding prepared with tender coconut pulp.' },
      { name: 'Ulunthan Kanji', desc: 'Traditional healthy breakfast porridge made of black gram and rice.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Trivandrum Airport (TRV, 90 km) connects to domestic hubs.\n\n🚆 BY RAILWAY:\n• Kanyakumari Railway Station (CAPE) is the Southernmost terminal of Indian Railways.\n\n🚌 BY ROAD:\n• Connected by NH-44 highway with regular luxury sleeper buses from Chennai.\n\n🚕 LOCAL TRANSIT:\n• Local passenger ferries connect rock island, while auto-rickshaws serve the town.`,

    travelDestinationsInCity: [
      { name: 'Vivekananda Rock Memorial', desc: 'Rock island monument in the middle of three oceans.' },
      { name: 'Thiruvalluvar Statue', desc: '133-foot stone statue dedicated to the Tamil poet.' },
      { name: 'Kanyakumari Temple', desc: 'Ancient coastal temple dedicated to Goddess Kanya Kumari.' },
      { name: 'Sunset Point', desc: 'Waterfront promenade offering simultaneous views of sunrise & sunset.' }
    ],

    hiddenGems: [
      'Padmanabhapuram Wooden Palace - Traditional teakwood palace building.',
      'Vattakottai Fort - Seaside brick fort with panoramic ocean views.',
      'Chothavilai Beach Secluded Cove - Secluded sandy beach.',
      'Mathur Hanging Trough Bridge - Scenic elevated concrete aqueduct.',
      'Suchindram Sthanumalayan Temple - Historic musical pillars temple.'
    ],

    safetyTips: [
      'Ferry services to Vivekananda Rock operate only when weather permits.',
      'Avoid entering deep ocean water at Triveni Sangam due to strong currents.',
      'Always stand inside safety barricades at the sunset viewpoint.',
      'Carry hats and sunblock lotion for daylight trips.',
      'Confirm ferry tickets online to skip long morning queues.',
      'Purchase tickets from verified government tourism booths.'
    ],

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
      { name: 'Spiti Butter Tea', desc: 'Salted yak butter tea brewed with local tea leaves.' },
      { name: 'Momo Dumplings', desc: 'Steamed barley flour dumplings stuffed with vegetables.' },
      { name: 'Thukpa Noodle Soup', desc: 'Warm vegetable noodle broth spiced with Himalayan herbs.' },
      { name: 'Tingmo Steamed Bread', desc: 'Fluffy steamed Tibetan bread rolls served with hot stews.' },
      { name: 'Thenthuk Soup', desc: 'Hand-pulled noodle soup prepared with mixed mountain vegetables.' },
      { name: 'Chhurpi Cheese', desc: 'Hard dried cheese made from local yak milk.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Bhuntar Airport near Kullu (240 km) is the closest domestic airport.\n\n🚆 BY RAILWAY:\n• Nearest main broad-gauge station is Chandigarh Railway Station (500 km).\n\n🚗 BY ROAD:\n• Drive 4x4 SUV from Manali via Kunzum Pass (open June-Sept) or through the Shimla-Kinnaur NH-5 highway route year-round.\n\n🚕 LOCAL TRANSIT:\n• 4x4 rental vehicles with experienced mountain drivers are highly recommended.`,

    travelDestinationsInCity: [
      { name: 'Key Monastery', desc: '1,000-year-old fortress monastery on a cliff.' },
      { name: 'Chandratal Lake', desc: 'Crescent-shaped high-altitude glacial lake.' },
      { name: 'Hikkim Post Office (14,567 ft)', desc: 'Highest working post office in the world.' },
      { name: 'Tabo Monastery', desc: '10th-century historic Buddhist monastery complex.' }
    ],

    hiddenGems: [
      'Langza Fossil Village - Ancient marine fossil beds.',
      'Komic Village (15,027 ft) - Highest motorable village in the world.',
      'Dhankar Fort & Lake Trek - Cliffside monastery and lake trek.',
      'Pin Valley National Park - Home of the rare snow leopard.',
      'Gue Mummy Temple - 500-year-old naturally preserved monk mummy.'
    ],

    safetyTips: [
      'Travel only in 4x4 SUV vehicles with experienced mountain drivers.',
      'Acclimate for 36-48 hours in Kaza to prevent Acute Mountain Sickness (AMS).',
      'Carry portable oxygen cylinders for high-altitude treks.',
      'Keep warm thermal clothing layers handy even during summer months.',
      'Strictly avoid littering or dumping plastic waste in glacial lakes.',
      'Verify road conditions at Kunzum Pass before starting your trip.'
    ],

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
      { name: 'Skyu Stew', desc: 'Traditional Ladakhi pasta & vegetable stew.' },
      { name: 'Thukpa Soup', desc: 'Noodle soup prepared with vegetables and spices.' },
      { name: 'Khambir Bread', desc: 'Traditional thick crust sourdough flatbread served with tea.' },
      { name: 'Chhurpi Cheese Soup', desc: 'Warm soup flavored with local dried yak cheese.' },
      { name: 'Gur Gur Cha', desc: 'Butter tea brewed with yak butter, salt, and tea leaves.' },
      { name: 'Momo Dumplings', desc: 'Steamed wheat dumplings filled with local ingredients.' }
    ],

    howToReachDetails: `✈️ BY AIR:\n• Leh Kushok Bakula Rimpoche Airport (IXL) receives domestic flights from Delhi.\n\n🚆 BY ROAD:\n• Drive along Manali-Leh Highway (428 km, via high passes) or Srinagar-Leh highway in summer.\n\n🚕 LOCAL TRANSIT:\n• Inner Line Permit (ILP) is required for tourist transit to Nubra Valley and Pangong Lake.\n\n🚗 LOCAL RENTALS:\n• Local tourist taxis and motorbikes are available for rent in Leh.`,

    travelDestinationsInCity: [
      { name: 'Pangong Tso Lake', desc: 'Endorheic salt lake changing colors from blue to emerald.' },
      { name: 'Nubra Valley', desc: 'Cold desert sand dunes with double-humped camels.' },
      { name: 'Thiksey Monastery', desc: 'Twelve-story Buddhist monastery complex.' },
      { name: 'Khardung La Pass (17,582 ft)', desc: 'Highest motorable mountain pass in the region.' }
    ],

    hiddenGems: [
      'Diskit Monastery - Features a 106-foot statue of Maitreya Buddha.',
      'Magnetic Hill - Optical illusion hill defying gravity.',
      'Tso Moriri Glacial Lake - Peaceful secluded high-altitude lake.',
      'Shanti Stupa - White-domed chorten offering panoramic Leh views.',
      'Hemis National Park - Forest reserve home to snow leopards.'
    ],

    safetyTips: [
      'Acclimate for 48 hours in Leh before traveling to Khardung La or Pangong Lake.',
      'Obtain online Inner Line Permits (ILP) beforehand at the Ladakh portal.',
      'Avoid running or heavy physical activity on arrival days.',
      'Carry warm thermal clothing layers even in summer months.',
      'Bring extra fuel containers if driving along Manali-Leh Highway.',
      'Save local police helpline numbers: Police (100).'
    ],

    highlights: ['Pangong Lake', 'Nubra Valley', 'Thiksey Monastery'],
    activities: [{ name: 'Nubra Valley Bactrian Camel Safari', duration: '2 hours', cost: 1000 }],
    gettingThere: 'Fly into Leh Airport (IXL) or drive via Manali-Leh Highway.',
    bestTimeToVisit: 'May to September'
  }
];

export const categories = ['All', 'Beaches', 'Mountains', 'Heritage', 'Nature'];
export const regions = ['All Regions', 'North', 'South', 'East', 'West', 'North-East'];
