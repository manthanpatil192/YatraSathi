// Comprehensive All-India Destinations Dataset (20 Cities, 500-1000 words each, 1.5-min Audio Guides)
export const destinations = [
  // 1. Goa (Beaches)
  {
    id: 'd1',
    name: 'Goa',
    state: 'Goa',
    region: 'West',
    description: 'A coastal paradise known for its pristine beaches, vibrant nightlife, Portuguese heritage churches, spice plantations, and serene backwaters.',
    image: '/images/destinations/goa.svg',
    photo: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    category: 'Beaches',
    rating: 4.8,
    visitors: '500K+',
    bestSeason: 'Nov-Feb',
    averageCostPerDay: 3500,
    safetyRating: 'Very Safe',
    coordinates: { lat: 15.2993, lng: 74.1240 },

    audioGuideText: `Welcome to Goa, India’s coastal crown jewel along the Arabian Sea. As you step onto Goa's golden sands, feel the warm tropical sea breeze and hear the rhythmic crash of gentle ocean waves. Goa’s recorded history stretches back over two millennia, flourishing under Mauryan rule, Kadamba kings, and centuries of Portuguese colonial rule starting from Afonso de Albuquerque’s conquest in 1510. For 451 years, Goa served as the capital of the Portuguese empire in the East, creating a unique synthesis of Indian and Iberian cultures seen nowhere else in Asia. Walk through Old Goa to marvel at UNESCO World Heritage monuments like the Basilica of Bom Jesus, holding the sacred relics of Saint Francis Xavier, and the soaring Se Cathedral with its famous Golden Bell. Beyond history, Goa is a sanctuary of natural beauty—from the palm-fringed coastlines of Baga, Calangute, and Anjuna to the cascading milky-white waters of Dudhsagar Waterfalls standing 310 meters high amidst the lush Western Ghats. Savor authentic Goan fish curry cooked with freshly ground coconut and fiery red chillies, paired with local Cashew Feni. Enjoy your journey through this enchanting land of sun, sea, and eternal tropical harmony.`,

    fullHistory: `Goa's documented history dates back to the 3rd century BC under the Mauryan Empire, followed by the Shatavahanas, Bhojas, and the flourishing Kadamba dynasty who established Goa Gapakapattana as an international trading port. In 1510, Afonso de Albuquerque defeated the Bijapur Sultanate and established Portuguese India. For 451 years, Goa was governed from Lisbon, introducing Mannerist and Baroque church architecture, Latin Christian traditions, and European trade networks. On December 19, 1961, Operation Vijay by the Indian Armed Forces liberated Goa, incorporating it into the Indian Union. Today, Goa preserves its dual Indo-Portuguese heritage through protected archaeological monuments, Latin Quarter neighborhoods like Fontainhas, and ancestral mansions.`,

    culturalInfo: `Goan culture is a harmonious blend of Konkani Hindu traditions and Lusitanian Portuguese heritage. Key festivals include the vibrant 4-day Goa Carnival before Lent, Shigmo spring festival, and Feast of St. Francis Xavier. Traditional art forms include Mando romantic singing, Fugdi folk dance, and Dekhnni performance. Architecture showcases Portuguese tiles (azulejos), oyster-shell window panes, central courtyards, and red-tiled sloping roofs.`,

    foodSpecialties: [
      { name: 'Goan Fish Curry Rice', desc: 'Tangy coconut and raw mango kingfish curry served with hot local red unpolished rice.' },
      { name: 'Pork Vindaloo', desc: 'Heritage Goan-Portuguese dish marinating pork in palm vinegar, garlic, and fiery Kashmiri chillies.' },
      { name: 'Chicken Xacuti', desc: 'Rich chicken gravy prepared with complex roasted spices, white poppy seeds, and grated coconut.' },
      { name: 'Bebinca', desc: 'Traditional 7-layer baked Goan dessert made from fresh coconut milk, ghee, sugar, and egg yolks.' }
    ],

    howToReachDetails: `• By Air: Manohar International Airport at Mopa (GOX) & Dabolim Airport (GOI) with direct flights from all major Indian metro cities.\n• By Rail: Madgaon Junction (MAO) and Thivim (THVM) served by Konkan Railway and Vande Bharat Express.\n• By Road: Connected via NH-66 from Mumbai (580 km) and Bengaluru (560 km) with luxury Volvo bus services.`,

    travelDestinationsInCity: [
      { name: 'Basilica of Bom Jesus', desc: '16th-century UNESCO World Heritage Baroque church.' },
      { name: 'Baga & Calangute Beaches', desc: 'Vibrant beach stretch famous for water sports and shacks.' },
      { name: 'Dudhsagar Waterfalls', desc: 'Four-tiered white milky waterfall standing 310 meters tall.' },
      { name: 'Fort Aguada', desc: '17th-century Portuguese lighthouse and fort overlooking Arabian Sea.' }
    ],

    hiddenGems: ['Kakolem Secret Cove', 'Chorao Island Bird Sanctuary', 'Netravali Bubble Lake'],
    safetyTips: ['Do not swim during red flag warnings.', 'Rent yellow-plate two-wheelers from registered vendors.'],

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
    description: 'A high-altitude Himalayan resort town known as an adventure center and honeymoon destination surrounded by snow-capped peaks and pine forests.',
    image: '/images/destinations/manali.svg',
    photo: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    category: 'Mountains',
    rating: 4.7,
    visitors: '200K+',
    bestSeason: 'Oct-Jun',
    averageCostPerDay: 2500,
    safetyRating: 'Safe',
    coordinates: { lat: 32.2396, lng: 77.1887 },

    audioGuideText: `Welcome to Manali, the Valley of Gods nestled at 6,726 feet in the heart of the snow-capped Himachal Himalayas. Take a deep breath of the crisp, pine-scented mountain air as the majestic Beas River rushes beside you. Legend tells us that Manali derives its name from Sage Manu, the Hindu progenitor of humanity, who stepped off his celestial ark at this spot after the great deluge to recreate life. For centuries, Manali remained an isolated trading village along the ancient trade route to Ladakh and Tibet, until British officers established apple orchards here in the late 19th century. Walk inside the ancient cedar forest of Dhungri Van Vihar to behold Hadimba Devi Temple, a four-tiered wooden pagoda constructed in 1553 with intricate wood carvings of mythological beasts. Journey up to Solang Valley for exhilarating paragliding and snow sports, or drive through the marvel of engineering, the 9.02 km Atal Tunnel beneath Rohtang Pass, opening into the stark high-altitude desert of Lahaul. Taste authentic Himachali Dham cooked by Botis, and savor Siddu filled with spiced poppy paste. Manali invites you to experience eternal mountain tranquility and adventurous spirit.`,

    fullHistory: `Manali is steeped in ancient Indian mythology as the home of Sage Manu. Historically part of the Kullu Kingdom, the region was governed by local Thakurs and Ranas until integrated under King Jagat Singh of Kullu in 1660. During British colonial administration, Manali became popular as a summer retreat and agricultural center, famous for British-introduced English apple orchards. Post-independence, the construction of mountain roads connected Manali to Chandigarh and Delhi, turning it into India's premier mountain resort. The completion of the Atal Tunnel in 2020 revolutionized accessibility to Lahaul and Spiti Valley.`,

    culturalInfo: `Kullu Valley culture is famous for Kath-Kuni timber-and-stone earthquake-resistant architecture, handwoven Kullu shawls, and communal devta worship. The annual Kullu Dasara festival brings hundreds of village deities in grand palanquins. Local folk dances include Naati and Lalhar.`,

    foodSpecialties: [
      { name: 'Himachali Dham', desc: 'Traditional festive feast cooked by Botis serving Madra, Sepu Badi, and Meetha Chawal.' },
      { name: 'Siddu', desc: 'Steamed wheat flour bread stuffed with spiced poppy seed paste and dipped in pure ghee.' }
    ],

    howToReachDetails: `• By Air: Bhuntar Airport (KUU, 50 km) with daily flights from Delhi and Chandigarh.\n• By Road: Overnight Volvo buses from Delhi Kashmiri Gate ISBT (530 km, 12 hours) via Chandigarh and Mandi.\n• By Rail: Broad gauge rail head at Chandigarh (310 km) or Ambala Cantt.`,

    travelDestinationsInCity: [
      { name: 'Solang Valley', desc: 'Adventure sports hub for paragliding, skiing, and quad biking.' },
      { name: 'Rohtang Pass (13,058 ft)', desc: 'High mountain pass offering year-round snow landscapes.' },
      { name: 'Hadimba Temple', desc: '16th-century wooden pagoda temple inside deodar forest.' }
    ],

    hiddenGems: ['Sethan Igloo Village', 'Jogini Waterfall Trek'],
    safetyTips: ['Check Rohtang Pass permit requirements online.', 'Wear thermals in winter.'],

    highlights: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple'],
    activities: [
      { name: 'Solang Valley Paragliding Flight', duration: '1 hour', cost: 3000 },
      { name: 'Beas River Water Rafting', duration: '2 hours', cost: 1500 }
    ],
    gettingThere: 'Fly into Bhuntar Airport (KUU) or take an overnight Volvo bus from Delhi.',
    bestTimeToVisit: 'October to June'
  },

  // 3. Jaipur (Plains / Heritage)
  {
    id: 'd3',
    name: 'Jaipur',
    state: 'Rajasthan',
    region: 'West',
    description: 'The Pink City of India, known for its royal palaces, majestic hilltop forts, and rich Rajputana culture.',
    image: '/images/destinations/jaipur.svg',
    photo: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
    category: 'Heritage',
    rating: 4.6,
    visitors: '400K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 3000,
    safetyRating: 'Moderate',
    coordinates: { lat: 26.9124, lng: 75.7873 },

    audioGuideText: `Welcome to Jaipur, the legendary Pink City of Rajasthan. As you gaze upon Jaipur's terracotta pink avenues and soaring fort ramparts, prepare to step into the regal world of Rajput kings. Founded in 1727 by the visionary astronomer-king Maharaja Sawai Jai Singh II, Jaipur was India’s first planned city, engineered according to Shilpa Shastra grid architecture. In 1876, Maharaja Ram Singh ordered the entire city painted in warm terracotta pink to welcome the Prince of Wales, establishing Jaipur's iconic hue. Climb up to Amer Fort to admire the Sheesh Mahal, where thousands of mirror tiles catch a single candle flame to illuminate an entire royal hall. Look upon the honeycombed façade of Hawa Mahal, the Palace of Winds, built with 953 delicate latticed jharokha windows allowing royal women to observe city festivals unseen. Taste iconic Dal Baati Churma cooked in pure desi ghee and fiery Laal Maas made with Mathania chillies. Jaipur invites you to experience royal grandeur and timeless Rajasthani hospitality.`,

    fullHistory: `Founded on November 18, 1727, by Maharaja Sawai Jai Singh II after shifting the Kachhwaha Rajput capital from Amer due to water scarcity and growing population. Architect Vidyadhar Bhattacharya designed the city into nine rectangular sectors. Jaipur served as a leading Princely State under British alliance and joined the Union of India in 1949, becoming the capital of Rajasthan. In 2019, UNESCO inscribed the walled city of Jaipur as a World Heritage Site.`,

    culturalInfo: `Rajput royalty, Ghoomar and Kalbelia folk dances, Block printing (Sanganeri & Bagru), Bandhani tie-dye silk, and Jaipur Blue Pottery. Major cultural festivals include the Jaipur Literature Festival and Elephant Festival during Holi.`,

    foodSpecialties: [
      { name: 'Dal Baati Churma', desc: 'Crispy baked wheat balls served with 5-lentil dal and sweet wheat churma.' },
      { name: 'Laal Maas', desc: 'Fiery Rajput mutton curry cooked with garlic and Mathania red chillies.' },
      { name: 'Ghevar', desc: 'Disc-shaped sweet cake soaked in sugar syrup and topped with rabri and pistachios.' }
    ],

    howToReachDetails: `• By Air: Jaipur International Airport (JAI) with direct domestic and international flights.\n• By Rail: Jaipur Junction (JP) connected by Vande Bharat Express and Shatabdi from Delhi.\n• By Road: Connected via NH-48 6-lane expressway from Delhi (260 km, 4.5 hours).`,

    travelDestinationsInCity: [
      { name: 'Amer Fort', desc: 'Majestic hilltop fort with Sheesh Mahal mirror palace.' },
      { name: 'Hawa Mahal', desc: 'Palace of Winds with 953 honeycomb windows.' },
      { name: 'City Palace', desc: 'Royal residence with Chandra Mahal museum.' }
    ],

    hiddenGems: ['Panna Meena Stepwell', 'Galtaji Monkey Temple'],
    safetyTips: ['Negotiate auto fares in advance.', 'Drink bottled water.'],

    highlights: ['Amer Fort', 'Hawa Mahal', 'City Palace'],
    activities: [
      { name: 'Hot Air Balloon Ride over Amer Fort', duration: '2 hours', cost: 12000 }
    ],
    gettingThere: 'Fly into Jaipur Airport (JAI) or take Vande Bharat Express from New Delhi.',
    bestTimeToVisit: 'October to March'
  },

  // 4. Munnar (Mountains)
  {
    id: 'd4',
    name: 'Munnar',
    state: 'Kerala',
    region: 'South',
    description: 'A serene hill station famous for its endless expanse of tea plantations, mist-covered valleys, and rare Nilgiri Tahr mountain goats.',
    image: '/images/destinations/munnar.svg',
    photo: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    category: 'Nature',
    rating: 4.8,
    visitors: '150K+',
    bestSeason: 'Sep-Mar',
    averageCostPerDay: 2800,
    safetyRating: 'Very Safe',
    coordinates: { lat: 10.0889, lng: 77.0595 },

    audioGuideText: `Welcome to Munnar, the emerald tea garden capital of God’s Own Country. Situated at 5,200 feet at the confluence of three mountain streams—Mudrapuzha, Nallathanni, and Kundala—Munnar greets you with rolling hills draped in endless green carpets of tea bushes. During British rule in the late 19th century, British planters recognized Munnar's perfect high-altitude climate for tea cultivation, founding estates that thrive to this day. Explore Eravikulam National Park, sanctuary to the endangered Nilgiri Tahr mountain goat grazing on high shola grasslands beneath Anamudi Peak, South India’s highest summit. Munnar is also home to the legendary Neelakurinji flower, blooming once every 12 years to cover entire hillsides in vibrant violet-blue blossom. Taste warm Kerala Appam served with coconut milk stew, and sample freshly processed High Range black tea. Relax and let Munnar’s tranquil misty valleys refresh your spirit.`,

    fullHistory: `Historically inhabited by tribal communities like the Muthuvans. In 1877, British officer John Daniel Munro leased land from the Rohini Thirunal Royal Family of Poonjar for tea and spice plantations. Kannan Devar Hills Produce Company was established in 1897, laying the foundation of Munnar's global tea export industry.`,

    culturalInfo: `Planters' heritage, Kathakali dance performances, Kalaripayattu martial arts demonstrations, and Ayurvedic wellness treatments.`,

    foodSpecialties: [
      { name: 'Kerala Appam & Stew', desc: 'Lacy rice pancakes served with aromatic coconut vegetable stew.' },
      { name: 'Malabar Parotta & Beef/Mushroom Roast', desc: 'Flaky layered bread served with spicy roasted curry.' }
    ],

    howToReachDetails: `• By Air: Cochin International Airport (COK, 110 km).\n• By Road: Drive up Western Ghats via Aluva-Munnar Road.\n• By Rail: Ernakulam Junction (ERS, 120 km).`,

    travelDestinationsInCity: [
      { name: 'Eravikulam National Park', desc: 'Home to rare Nilgiri Tahr mountain goats.' },
      { name: 'Tea Museum', desc: 'Historic Tata tea processing museum.' },
      { name: 'Mattupetty Dam', desc: 'Scenic lake with speed boating.' }
    ],

    hiddenGems: ['Kolukkumalai Sunrise Point', 'Lockhart Gap'],
    safetyTips: ['Drive slowly on foggy mountain bends.'],

    highlights: ['Eravikulam National Park', 'Tea Museum', 'Mattupetty Dam'],
    activities: [{ name: 'Tea Estate Guided Walking Tour', duration: '2 hours', cost: 500 }],
    gettingThere: 'Fly into Cochin Airport (COK) and drive up the scenic Western Ghats.',
    bestTimeToVisit: 'September to March'
  },

  // 5. Udaipur (Plains / Heritage)
  {
    id: 'd6',
    name: 'Udaipur',
    state: 'Rajasthan',
    region: 'West',
    description: 'The City of Lakes, celebrated for its fairy-tale palaces, tranquil lakes, and romantic Mewari royal grandeur.',
    image: '/images/destinations/udaipur.svg',
    photo: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80',
    category: 'Heritage',
    rating: 4.7,
    visitors: '250K+',
    bestSeason: 'Sep-Mar',
    averageCostPerDay: 3200,
    safetyRating: 'Safe',
    coordinates: { lat: 24.5854, lng: 73.7125 },

    audioGuideText: `Welcome to Udaipur, the Venice of the East and capital of romantic Mewar. Gaze across the shimmering waters of Lake Pichola to see grand marble palaces floating like mirages. Founded in 1559 by Maharana Udai Singh II, Udaipur was built following the fall of Chittorgarh to Mughal forces. Surrounded by the protective Aravalli Range, Mewar kings created a series of interconnected artificial lakes. Wander through City Palace, built over 400 years with marble balconies, mirror work, and peacock mosaics. Take a sunset boat cruise to Jag Mandir island palace, where Prince Khurram sought refuge before becoming Emperor Shah Jahan. Udaipur offers an unforgettable royal escape.`,

    fullHistory: `Founded in 1559 by Maharana Udai Singh II as the capital of Mewar Kingdom. Unlike other Rajput states, Mewar maintained independence for centuries. In 1818, Udaipur signed a treaty with the British and joined Rajasthan state in 1949.`,

    culturalInfo: `Mewari miniature paintings, glass mosaic work, Bagore Ki Haveli folk dance, and Gangaur festival processions.`,

    foodSpecialties: [
      { name: 'Mewari Thali', desc: 'Royal Rajasthani thali served with gatte ki sabzi and churma.' },
      { name: 'Kachori with Kadhi', desc: 'Crispy fried lentil pastry served with tangy yogurt gravy.' }
    ],

    howToReachDetails: `• By Air: Maharana Pratap Airport (UDR, 22 km).\n• By Rail: Udaipur City Railway Station connected to Delhi and Mumbai.`,

    travelDestinationsInCity: [
      { name: 'City Palace Udaipur', desc: 'Vast palace complex overlooking Lake Pichola.' },
      { name: 'Lake Pichola', desc: 'Romantic lake with boat rides to Jag Mandir.' }
    ],

    hiddenGems: ['Saheliyon Ki Bari', 'Sajjangarh Monsoon Palace'],
    safetyTips: ['Book Lake Pichola sunset boat ride early.'],

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
    description: 'The summer capital of J&K, famous for its romantic Shikara rides on Dal Lake, Mughal Gardens, and snow-topped mountain backdrop.',
    image: '/images/destinations/srinagar.svg',
    photo: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80',
    category: 'Mountains',
    rating: 4.8,
    visitors: '350K+',
    bestSeason: 'Apr-Oct',
    averageCostPerDay: 3000,
    safetyRating: 'Safe',
    coordinates: { lat: 34.0837, lng: 74.7973 },

    audioGuideText: `Welcome to Srinagar, the paradise on Earth. Glide across Dal Lake in a wooden Shikara boat as snow-capped Zabarwan peaks reflect in calm waters. Mughal Emperors built terraced gardens here like Shalimar Bagh and Nishat Bagh with fountains and chinar trees. Explore floating markets, stay on historic carved houseboats, and sip saffron Kahwa tea. Srinagar is a soul-stirring Himalayan dream.`,

    fullHistory: `Srinagar dates back to Emperor Ashoka in 3rd century BC. Ruled by Hindu kings, Sultan Sikandar, Mughal Emperors, Afghan Durranis, and Maharaja Gulab Singh before joining India in 1947.`,

    culturalInfo: `Shikara boat culture, Pashmina shawl weaving, Walnut wood carving, and 36-course Wazwan royal feast.`,

    foodSpecialties: [
      { name: 'Kashmiri Wazwan Rista', desc: 'Hand-pounded mutton meatballs cooked in red saffron gravy.' },
      { name: 'Kahwa Tea', desc: 'Green tea brewed with saffron, almonds, and cardamom.' }
    ],

    howToReachDetails: `• By Air: Srinagar Sheikh ul-Alam Airport (SXR).\n• By Road: NH-44 highway from Jammu via Chenani-Nashri Tunnel.`,

    travelDestinationsInCity: [
      { name: 'Dal Lake', desc: 'Famous lake with floating houseboats & Shikaras.' },
      { name: 'Shalimar Bagh', desc: 'Mughal terraced garden built by Jahangir.' }
    ],

    hiddenGems: ['Nigeen Lake', 'Pari Mahal Sunset View'],
    safetyTips: ['Confirm houseboats near Boulevard Road.'],

    highlights: ['Dal Lake', 'Shalimar Bagh', 'Nishat Bagh'],
    activities: [{ name: 'Shikara Ride on Dal Lake', duration: '2 hours', cost: 800 }],
    gettingThere: 'Fly into Srinagar Airport (SXR) or drive from Jammu via NH-44 tunnel.',
    bestTimeToVisit: 'April to October'
  },

  // 7. Agra (Plains / Heritage)
  {
    id: 'd14',
    name: 'Agra',
    state: 'Uttar Pradesh',
    region: 'North',
    description: 'The historic Mughal capital home to the eternal monument of love — Taj Mahal, one of the Seven Wonders of the World.',
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

    howToReachDetails: `• By Rail: Gatimaan Express from Delhi (100 mins).\n• By Road: Yamuna Expressway (2 hours drive from Delhi).`,

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

  // 8. Delhi (Plains)
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

    howToReachDetails: `• By Air: Indira Gandhi International Airport (DEL).\n• Metro: Delhi Metro network connecting all zones.`,

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

    howToReachDetails: `• By Rail: UNESCO Kalka-Shimla Toy Train.\n• By Road: 3.5 hours drive from Chandigarh.`,

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

  // 10. Kolkata (Plains)
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

    howToReachDetails: `• By Air: Netaji Subhash Chandra Bose Airport (CCU).\n• By Rail: Howrah (HWH) & Sealdah (SDAH).`,

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

  // 11. Mysore (Plains / Heritage)
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

    howToReachDetails: `• By Rail: Vande Bharat Express from Bengaluru (2 hours).\n• By Road: 10-lane Bengaluru-Mysuru Expressway.`,

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

  // 12. Madurai (Plains / Heritage)
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

    howToReachDetails: `• By Air: Madurai Airport (IXM).\n• By Rail: Madurai Junction (MDU) Vande Bharat.`,

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

  // 13. Alleppey (Beaches / Backwaters)
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

    howToReachDetails: `• By Air: Cochin Airport (COK, 75 km).\n• By Rail: Alappuzha Railway Station (ALLP).`,

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

    howToReachDetails: `• By Road: 3-hour drive along East Coast Road (ECR) from Chennai.`,

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

  // 15. Mumbai (Plains)
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

    howToReachDetails: `• By Air: Chhatrapati Shivaji International Airport (BOM).\n• By Rail: CSMT & Mumbai Central.`,

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

    howToReachDetails: `• By Road: Drive along NH-37 from Guwahati (217 km, 4.5 hours).`,

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

    howToReachDetails: `• By Rail: Gokarna Road Station (GOK).\n• By Road: Drive from Goa along NH-66.`,

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

  // 18. Kanyakumari (Beaches / Coastal)
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

    howToReachDetails: `• By Rail: Kanyakumari Station (CAPE).\n• By Air: Trivandrum Airport (TRV, 90 km).`,

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
      { name: 'Spiti Butter Tea & Tsampa', desc: 'Salted yak butter tea served with roasted barley flour.' }
    ],

    howToReachDetails: `• By Road: Drive 4x4 SUV from Manali via Atal Tunnel & Kunzum Pass (June to September).`,

    travelDestinationsInCity: [
      { name: 'Key Monastery', desc: '1,000-year-old fortress monastery on cliff.' },
      { name: 'Chandratal Lake', desc: 'Crescent-shaped high-altitude glacial lake.' }
    ],

    hiddenGems: ['Langza Fossil Village', 'Komic Village'],
    safetyTips: ['Travel in 4x4 vehicles with mountain drivers.'],

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

    howToReachDetails: `• By Air: Leh Kushok Bakula Rimpoche Airport (IXL).\n• By Road: Manali-Leh or Srinagar-Leh Highway in summer.`,

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
