// Updated Dataset: Removed Ooty, Jaisalmer, Shillong, Tawang. 20 Active All-India Destinations
export const destinations = [
  // 1. Goa (Beaches)
  {
    id: 'd1',
    name: 'Goa',
    state: 'Goa',
    region: 'West',
    description: 'A coastal paradise known for its pristine beaches, vibrant nightlife, Portuguese heritage churches, spice plantations, and serene backwaters.',
    image: '/images/destinations/goa.svg',
    photo: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    category: 'Beaches',
    rating: 4.8,
    visitors: '500K+',
    bestSeason: 'Nov-Feb',
    averageCostPerDay: 3500,
    safetyRating: 'Very Safe',
    coordinates: { lat: 15.2993, lng: 74.1240 },
    
    fullHistory: `Goa's documented history dates back to the 3rd century BC under the Mauryan Empire. Afonso de Albuquerque conquered Goa in 1510 for the Portuguese crown. For 451 years, Goa served as the capital of the Portuguese Empire in the East until Operation Vijay in December 1961 liberated Goa into India.`,

    culturalInfo: `Indo-Portuguese heritage, Baroque church architecture like Basilica of Bom Jesus, Shigmo & Carnival festivals, Cashew Feni spirit distillation, Goan Mando music, and Fugdi folk dance.`,

    foodSpecialties: [
      { name: 'Goan Fish Curry Rice', desc: 'Tangy coconut and raw mango kingfish curry served with hot local red unpolished rice.' },
      { name: 'Pork Vindaloo', desc: 'Heritage Goan-Portuguese dish marinating pork in palm vinegar, garlic, and fiery Kashmiri chillies.' },
      { name: 'Chicken Xacuti', desc: 'Rich chicken gravy prepared with complex roasted spices, white poppy seeds, and grated coconut.' },
      { name: 'Bebinca', desc: 'Traditional 7-layer baked Goan dessert made from fresh coconut milk, ghee, sugar, and egg yolks.' }
    ],

    howToReachDetails: `• By Air: Manohar International Airport at Mopa (GOX) & Dabolim Airport (GOI).\n• By Rail: Madgaon Junction (MAO) and Thivim (THVM).\n• By Road: NH-66 from Mumbai (580 km) and Bengaluru (560 km).`,

    travelDestinationsInCity: [
      { name: 'Basilica of Bom Jesus', desc: '16th-century UNESCO World Heritage Baroque church.' },
      { name: 'Baga & Calangute Beaches', desc: 'Vibrant beach stretch famous for water sports and shacks.' },
      { name: 'Dudhsagar Waterfalls', desc: 'Four-tiered white milky waterfall standing 310 meters tall.' },
      { name: 'Fort Aguada', desc: '17th-century Portuguese lighthouse and fort overlooking Arabian Sea.' }
    ],

    hiddenGems: ['Kakolem Secret Cove', 'Chorao Island Bird Sanctuary', 'Netravali Bubble Lake'],
    safetyTips: ['Do not swim during red flag warnings.', 'Rent yellow-plate two-wheelers from registered vendors.'],

    audioGuideText: 'Welcome to Goa, the sunshine state of India. Explore sandy shores, water sports, and historic churches in Old Goa.',
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
    description: 'A high-altitude Himalayan resort town known as an adventure center and honeymoon destination. Surrounded by snow-capped peaks and pine forests.',
    image: '/images/destinations/manali.svg',
    photo: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    category: 'Mountains',
    rating: 4.7,
    visitors: '200K+',
    bestSeason: 'Oct-Jun',
    averageCostPerDay: 2500,
    safetyRating: 'Safe',
    coordinates: { lat: 32.2396, lng: 77.1887 },

    fullHistory: `Named after Hindu lawgiver Sage Manu who stepped off his ark at Manali after the cosmic deluge. British officers established apple orchards here in late 19th century.`,

    culturalInfo: `Wood-pagoda Hadimba Devi Temple built in 1553 inside Dhungri Van Vihar forest, Kullu shawls, and Kath-Kuni wooden architecture.`,

    foodSpecialties: [
      { name: 'Himachali Dham', desc: 'Traditional festive feast cooked by Botis.' },
      { name: 'Siddu', desc: 'Steamed wheat flour bread stuffed with spiced poppy seed paste.' }
    ],

    howToReachDetails: `• By Air: Bhuntar Airport (KUU, 50 km).\n• By Road: Volvo buses from Delhi Kashmiri Gate (530 km).`,

    travelDestinationsInCity: [
      { name: 'Solang Valley', desc: 'Adventure sports hub for paragliding and skiing.' },
      { name: 'Rohtang Pass (13,058 ft)', desc: 'High mountain pass offering year-round snow.' },
      { name: 'Hadimba Temple', desc: '16th-century wooden temple inside cedar forest.' }
    ],

    hiddenGems: ['Sethan Igloo Village', 'Jogini Waterfall Trek'],
    safetyTips: ['Check Rohtang Pass permits online.', 'Wear thermals in winter.'],

    audioGuideText: 'Welcome to Manali, the Valley of Gods. Enjoy Himalayan views, ancient temples, and adventure sports.',
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
    description: 'The Pink City of India, known for its royal palaces, majestic forts, and rich Rajputana culture.',
    image: '/images/destinations/jaipur.svg',
    photo: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
    category: 'Heritage',
    rating: 4.6,
    visitors: '400K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 3000,
    safetyRating: 'Moderate',
    coordinates: { lat: 26.9124, lng: 75.7873 },

    fullHistory: `Founded in 1727 by Maharaja Sawai Jai Singh II as India's first grid-planned city. Painted terracotta pink in 1876 for Prince of Wales.`,

    culturalInfo: `Rajput royalty, Ghoomar dance, Block printing, Bandhani silk, and Hawa Mahal with 953 Jharokha windows.`,

    foodSpecialties: [
      { name: 'Dal Baati Churma', desc: 'Crispy baked wheat balls with 5-lentil dal and sweet churma.' },
      { name: 'Laal Maas', desc: 'Fiery Rajput mutton curry cooked with Mathania red chillies.' }
    ],

    howToReachDetails: `• By Air: Jaipur Airport (JAI).\n• By Rail: Jaipur Junction (JP) Vande Bharat.\n• By Road: NH-48 from Delhi (260 km).`,

    travelDestinationsInCity: [
      { name: 'Amer Fort', desc: 'Majestic hilltop fort with Sheesh Mahal mirror palace.' },
      { name: 'Hawa Mahal', desc: 'Palace of Winds with 953 honeycomb windows.' },
      { name: 'City Palace', desc: 'Royal residence with Chandra Mahal museum.' }
    ],

    hiddenGems: ['Panna Meena Stepwell', 'Galtaji Monkey Temple'],
    safetyTips: ['Negotiate auto fares in advance.', 'Drink bottled water.'],

    audioGuideText: 'Welcome to Jaipur, the Pink City. Marvel at Amer Fort and Hawa Mahal.',
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
    photo: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    category: 'Nature',
    rating: 4.8,
    visitors: '150K+',
    bestSeason: 'Sep-Mar',
    averageCostPerDay: 2800,
    safetyRating: 'Very Safe',
    coordinates: { lat: 10.0889, lng: 77.0595 },

    fullHistory: `Summer resort for British Raj officers in South India. Home to Neelakurinji flower blooming once every 12 years.`,

    culturalInfo: `Tea plantation heritage, Kathakali dance, Ayurvedic healing, and Eravikulam National Park.`,

    foodSpecialties: [
      { name: 'Kerala Appam & Stew', desc: 'Lacy rice pancake served with coconut vegetable stew.' }
    ],

    howToReachDetails: `• By Air: Cochin Airport (COK, 110 km).\n• By Road: Drive from Kochi or Madurai up Western Ghats.`,

    travelDestinationsInCity: [
      { name: 'Eravikulam National Park', desc: 'Home to rare Nilgiri Tahr mountain goats.' },
      { name: 'Tea Museum', desc: 'Historic Tata tea processing museum.' },
      { name: 'Mattupetty Dam', desc: 'Scenic lake with speed boating.' }
    ],

    hiddenGems: ['Kolukkumalai Sunrise Point', 'Lockhart Gap'],
    safetyTips: ['Drive slowly on foggy mountain bends.'],

    audioGuideText: 'Welcome to Munnar tea country. Explore rolling green hills and tea gardens.',
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
    photo: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80',
    category: 'Heritage',
    rating: 4.7,
    visitors: '250K+',
    bestSeason: 'Sep-Mar',
    averageCostPerDay: 3200,
    safetyRating: 'Safe',
    coordinates: { lat: 24.5854, lng: 73.7125 },

    fullHistory: `Founded in 1559 by Maharana Udai Singh II as the capital of Mewar Kingdom. City Palace built over 400 years on Lake Pichola.`,

    culturalInfo: `Mewari royalty, miniature paintings, glass mosaic work, and Bagore Ki Haveli folk dance performance.`,

    foodSpecialties: [
      { name: 'Mewari Thali', desc: 'Royal Rajasthani thali served with gatte ki sabzi and churma.' }
    ],

    howToReachDetails: `• By Air: Maharana Pratap Airport (UDR).\n• By Rail: Udaipur City Station.`,

    travelDestinationsInCity: [
      { name: 'City Palace Udaipur', desc: 'Vast palace complex overlooking Lake Pichola.' },
      { name: 'Lake Pichola', desc: 'Romantic lake with boat rides to Jag Mandir.' }
    ],

    hiddenGems: ['Saheliyon Ki Bari', 'Sajjangarh Monsoon Palace'],
    safetyTips: ['Book Lake Pichola sunset boat ride early.'],

    audioGuideText: 'Welcome to Udaipur, City of Lakes. Enjoy royal grandeur at City Palace.',
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
    photo: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80',
    category: 'Mountains',
    rating: 4.8,
    visitors: '350K+',
    bestSeason: 'Apr-Oct',
    averageCostPerDay: 3000,
    safetyRating: 'Safe',
    coordinates: { lat: 34.0837, lng: 74.7973 },

    fullHistory: `Paradise on Earth. Mughal Emperors Jahangir and Shah Jahan built terraced gardens here like Shalimar Bagh and Nishat Bagh.`,

    culturalInfo: `Shikara boat culture on Dal Lake, Pashmina shawls, Walnut wood carving, and Wazwan royal banquet.`,

    foodSpecialties: [
      { name: 'Kashmiri Wazwan Rista', desc: 'Meatballs cooked in red saffron gravy.' },
      { name: 'Kahwa Tea', desc: 'Green tea brewed with saffron, almonds, and cardamom.' }
    ],

    howToReachDetails: `• By Air: Srinagar Sheikh ul-Alam Airport (SXR).`,

    travelDestinationsInCity: [
      { name: 'Dal Lake', desc: 'Famous lake with floating houseboats & Shikaras.' },
      { name: 'Shalimar Bagh', desc: 'Mughal terraced garden built by Jahangir.' }
    ],

    hiddenGems: ['Nigeen Lake', 'Pari Mahal Sunset View'],
    safetyTips: ['Confirm houseboats near Boulevard Road.'],

    audioGuideText: 'Welcome to Srinagar. Glide across Dal Lake in a colorful Shikara boat.',
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
    photo: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    category: 'Heritage',
    rating: 4.9,
    visitors: '800K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 2800,
    safetyRating: 'Safe',
    coordinates: { lat: 27.1751, lng: 78.0421 },

    fullHistory: `Capital of Mughal Empire under Akbar, Jahangir, and Shah Jahan. Shah Jahan commissioned white marble Taj Mahal in 1632.`,

    culturalInfo: `Parchin Kari white marble inlay work, Zardozi embroidery, Mughal architecture, and Agra Petha sweet.`,

    foodSpecialties: [
      { name: 'Agra Petha', desc: 'Traditional sweet made from ash gourd infused with saffron and nuts.' },
      { name: 'Mughlai Biryani', desc: 'Aromatic basmati rice cooked with whole spices.' }
    ],

    howToReachDetails: `• By Air: Delhi Airport (200 km).\n• By Rail: Agra Cantt (AGC) Gatimaan Express.\n• By Road: Yamuna Expressway (2 hours).`,

    travelDestinationsInCity: [
      { name: 'Taj Mahal', desc: 'UNESCO Wonder of the World in white marble.' },
      { name: 'Agra Fort', desc: 'Red sandstone Mughal imperial fortress.' }
    ],

    hiddenGems: ['Mehtab Bagh Taj Sunset View', 'Fatehpur Sikri Royal City'],
    safetyTips: ['Taj Mahal is CLOSED on Fridays.', 'Buy tickets online to skip queues.'],

    audioGuideText: 'Welcome to Agra, home of the majestic Taj Mahal and Agra Fort.',
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
    photo: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
    category: 'Heritage',
    rating: 4.7,
    visitors: '900K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 3000,
    safetyRating: 'Moderate',
    coordinates: { lat: 28.6139, lng: 77.2090 },

    fullHistory: `Inhabited for over 2,500 years across 7 historic cities. Imperial seat of Delhi Sultanate, Mughal Empire, and British Raj.`,

    culturalInfo: `Red Fort, Qutub Minar, Humayun's Tomb, Lotus Temple, Chandni Chowk street markets, and Qawwali at Nizamuddin.`,

    foodSpecialties: [
      { name: 'Butter Chicken & Naan', desc: 'Iconic Delhi dish invented at Moti Mahal in 1947.' },
      { name: 'Chandni Chowk Paranthas', desc: 'Stuffed fried flatbreads served with chutneys.' }
    ],

    howToReachDetails: `• By Air: Indira Gandhi Airport (DEL).\n• By Rail: New Delhi (NDLS).\n• Metro: Delhi Metro network.`,

    travelDestinationsInCity: [
      { name: 'Red Fort', desc: 'Mughal sandstone fortress.' },
      { name: 'Qutub Minar', desc: 'World\'s tallest brick minaret.' },
      { name: 'India Gate', desc: 'War memorial arc.' }
    ],

    hiddenGems: ['Agrasen ki Baoli Stepwell', 'Hauz Khas Village Fort'],
    safetyTips: ['Use Delhi Metro for fast hassle-free transit.'],

    audioGuideText: 'Welcome to Delhi, India\'s capital city filled with centuries of history and food.',
    highlights: ['Red Fort', 'Qutub Minar', 'India Gate'],
    activities: [{ name: 'Old Delhi Chandni Chowk Rickshaw & Street Food Tour', duration: '3 hours', cost: 800 }],
    gettingThere: 'Fly into Indira Gandhi International Airport (DEL) or take trains to New Delhi station.',
    bestTimeToVisit: 'October to March'
  },

  // 9. Shimla (Mountains)
  {
    id: 'd16',
    name: 'Shimla',
    state: 'Himachal Pradesh',
    region: 'North',
    description: 'The Queen of Hill Stations and former summer capital of British India, set amid pine-forested Himalayan hills.',
    image: '/images/destinations/shimla.svg',
    photo: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80',
    category: 'Mountains',
    rating: 4.6,
    visitors: '300K+',
    bestSeason: 'Oct-Jun',
    averageCostPerDay: 2400,
    safetyRating: 'Very Safe',
    coordinates: { lat: 31.1048, lng: 77.1734 },

    fullHistory: `Declared Summer Capital of British India in 1864. UNESCO Kalka-Shimla Railway line built in 1903.`,

    culturalInfo: `Colonial Neo-Gothic architecture like Christ Church on The Ridge and Mall Road pedestrian promenade.`,

    foodSpecialties: [
      { name: 'Chana Khatta', desc: 'Himachali tangy black chickpea curry.' }
    ],

    howToReachDetails: `• By Air: Shimla Airport (22 km).\n• By Rail: UNESCO Kalka-Shimla Toy Train.\n• By Road: Highway from Chandigarh (110 km).`,

    travelDestinationsInCity: [
      { name: 'The Ridge & Christ Church', desc: 'Promenade with Neo-Gothic church.' },
      { name: 'Mall Road', desc: 'Pedestrian shopping avenue.' }
    ],

    hiddenGems: ['Annandale Ground', 'Viceregal Lodge'],
    safetyTips: ['Mall Road is a pedestrian-only zone.'],

    audioGuideText: 'Welcome to Shimla. Walk down historic Mall Road and admire Neo-Gothic architecture.',
    highlights: ['The Ridge', 'Mall Road', 'Jakhu Temple'],
    activities: [{ name: 'Kalka-Shimla Toy Train Scenic Ride', duration: '3 hours', cost: 500 }],
    gettingThere: 'Take UNESCO Kalka-Shimla Toy Train or drive 3.5 hours from Chandigarh.',
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
    photo: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80',
    category: 'Heritage',
    rating: 4.7,
    visitors: '450K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 2000,
    safetyRating: 'Safe',
    coordinates: { lat: 22.5726, lng: 88.3639 },

    fullHistory: `Capital of British India until 1911. Birthplace of Bengal Renaissance producing Rabindranath Tagore and Satyajit Ray.`,

    culturalInfo: `UNESCO Durga Puja festival, Victoria Memorial marble palace, iconic Howrah Bridge over Hooghly River, and vintage trams.`,

    foodSpecialties: [
      { name: 'Kolkata Kathi Roll', desc: 'Flaky paratha rolled with spiced kebabs.' },
      { name: 'Rosogolla & Mishti Doi', desc: 'Spongy sweet balls & sweet baked yogurt.' }
    ],

    howToReachDetails: `• By Air: Kolkata Airport (CCU).\n• By Rail: Howrah (HWH) & Sealdah (SDAH).`,

    travelDestinationsInCity: [
      { name: 'Victoria Memorial', desc: 'Marble palace dedicated to Queen Victoria.' },
      { name: 'Howrah Bridge', desc: 'Iconic cantilever bridge over Hooghly River.' }
    ],

    hiddenGems: ['Kumartuli Clay Artisans', 'College Street Boi Para'],
    safetyTips: ['Ride yellow taxis in North Kolkata.'],

    audioGuideText: 'Welcome to Kolkata, the City of Joy. Walk across Howrah Bridge and savor Rosogolla.',
    highlights: ['Victoria Memorial', 'Howrah Bridge', 'Dakshineswar Temple'],
    activities: [{ name: 'Heritage Tram Ride & College Street Book Walk', duration: '3 hours', cost: 300 }],
    gettingThere: 'Fly into Kolkata Airport (CCU) or take broad-gauge trains to Howrah Junction.',
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
    photo: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80',
    category: 'Heritage',
    rating: 4.8,
    visitors: '350K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 2200,
    safetyRating: 'Very Safe',
    coordinates: { lat: 12.2958, lng: 76.6394 },

    fullHistory: `Capital of Kingdom of Mysore ruled by Wodeyar Dynasty from 1399 to 1947.`,

    culturalInfo: `Mysore Palace illuminated by 100,000 bulbs every Sunday, Mysore Pak, Mysore Silk, and 10-day Dasara procession.`,

    foodSpecialties: [
      { name: 'Mysore Pak', desc: 'Melt-in-mouth golden ghee sweet.' },
      { name: 'Mysore Masala Dosa', desc: 'Crispy crepe with garlic chilli chutney.' }
    ],

    howToReachDetails: `• By Air: Mysuru (MYQ) or Bengaluru (170 km).\n• By Road: 10-lane Expressway from Bengaluru (2 hours).`,

    travelDestinationsInCity: [
      { name: 'Mysore Palace', desc: 'Royal residence illuminated by 100,000 bulbs.' },
      { name: 'Chamundi Hill', desc: 'Temple hill with giant Nandi monolith.' }
    ],

    hiddenGems: ['Jaganmohan Palace Art Gallery', 'St. Philomena\'s Church'],
    safetyTips: ['Visit Mysore Palace on Sunday evening for illumination.'],

    audioGuideText: 'Welcome to Mysore. Marvel at the grand illuminated Mysuru Palace.',
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
    photo: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    category: 'Heritage',
    rating: 4.8,
    visitors: '400K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 1800,
    safetyRating: 'Very Safe',
    coordinates: { lat: 9.9252, lng: 78.1198 },

    fullHistory: `Capital of ancient Pandyan Kingdom since 3rd century BC. Built around Meenakshi Amman Temple.`,

    culturalInfo: `Dravidian temple architecture with 14 Gopuram towers, Sangam literature, and Chithirai Festival.`,

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

    audioGuideText: 'Welcome to Madurai. Marvel at 14 soaring Gopuram towers of Meenakshi Temple.',
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
    photo: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
    category: 'Beaches',
    rating: 4.8,
    visitors: '300K+',
    bestSeason: 'Nov-Feb',
    averageCostPerDay: 3800,
    safetyRating: 'Very Safe',
    coordinates: { lat: 9.4981, lng: 76.3388 },

    fullHistory: `Founded by Raja Kesavadas in 1762 as a major port town for coir and spice trade.`,

    culturalInfo: `Kettuvallam wooden houseboats, Nehru Trophy Snake Boat Race on Punnamada Lake, and backwater lagoons.`,

    foodSpecialties: [
      { name: 'Karimeen Pollichathu', desc: 'Pearl spot fish marinated & fried inside banana leaves.' }
    ],

    howToReachDetails: `• By Air: Cochin Airport (COK, 75 km).\n• By Rail: Alappuzha Railway Station (ALLP).`,

    travelDestinationsInCity: [
      { name: 'Alleppey Backwaters', desc: 'Network of palm-fringed canals.' },
      { name: 'Marari Beach', desc: 'Quiet coconut-palm beach.' }
    ],

    hiddenGems: ['Pathiramanal Bird Island', 'Kuttanad Fields'],
    safetyTips: ['Check government registration license before booking houseboats.'],

    audioGuideText: 'Welcome to Alleppey backwaters. Drift past swaying palms on a traditional Kettuvallam houseboat.',
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
    photo: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    category: 'Beaches',
    rating: 4.6,
    visitors: '220K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 2600,
    safetyRating: 'Very Safe',
    coordinates: { lat: 11.9416, lng: 79.8083 },

    fullHistory: `Capital of French India until 1954. Unique Franco-Tamil architecture and Sri Aurobindo Ashram.`,

    culturalInfo: `French Quarter yellow villas, Matrimandir golden dome in Auroville, and French bakeries.`,

    foodSpecialties: [
      { name: 'French Croissant & Quiche', desc: 'Authentic French bakeries serving pain au chocolat.' }
    ],

    howToReachDetails: `• By Air: Chennai Airport (MAA, 135 km).\n• By Road: 3-hour drive along East Coast Road (ECR).`,

    travelDestinationsInCity: [
      { name: 'Promenade Beach', desc: 'Seaside walking boulevard.' },
      { name: 'French Quarter', desc: 'Pastel yellow colonial homes.' }
    ],

    hiddenGems: ['Paradise Beach Sand Bar', 'Serenity Beach Surfing'],
    safetyTips: ['Rent bicycles to tour French Quarter.'],

    audioGuideText: 'Bienvenue à Pondicherry. Stroll down French Quarter boulevards and experience Auroville.',
    highlights: ['Promenade Beach', 'French Quarter', 'Auroville Matrimandir'],
    activities: [{ name: 'French Town Cycle Heritage Tour', duration: '2 hours', cost: 350 }],
    gettingThere: 'Drive 3 hours along East Coast Road (ECR) from Chennai Airport (MAA).',
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
    photo: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
    category: 'Heritage',
    rating: 4.6,
    visitors: '800K+',
    bestSeason: 'Nov-Feb',
    averageCostPerDay: 4000,
    safetyRating: 'Safe',
    coordinates: { lat: 18.9220, lng: 72.8347 },

    fullHistory: `Originally 7 fishing islands of Koli community. Transformed into India's commercial capital and Bollywood film hub.`,

    culturalInfo: `Gateway of India, CSMT Station (Victorian Gothic UNESCO site), Marine Drive, and Dabbawalas.`,

    foodSpecialties: [
      { name: 'Vada Pav & Pav Bhaji', desc: 'Iconic street food spicy potato patty in soft bread.' }
    ],

    howToReachDetails: `• By Air: Chhatrapati Shivaji Airport (BOM).\n• By Rail: CSMT & Mumbai Central.`,

    travelDestinationsInCity: [
      { name: 'Gateway of India', desc: '1924 waterfront arch monument.' },
      { name: 'Marine Drive', desc: 'Queen\'s Necklace seaside boulevard.' }
    ],

    hiddenGems: ['Elephanta Caves Island', 'Colaba Causeway Bazaar'],
    safetyTips: ['Avoid local train peak rush hours.'],

    audioGuideText: 'Welcome to Mumbai! Stand before Gateway of India and watch sunset along Marine Drive.',
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
    photo: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80',
    category: 'Nature',
    rating: 4.8,
    visitors: '110K+',
    bestSeason: 'Nov-Apr',
    averageCostPerDay: 3000,
    safetyRating: 'Safe',
    coordinates: { lat: 26.5775, lng: 93.1711 },

    fullHistory: `Created as a reserve forest in 1905. UNESCO World Heritage Site protecting endangered Indian One-Horned Rhino.`,

    culturalInfo: `Assamese Bihu folk dance, Mishing tribal culture, elephant grass safari, and Assam tea estates.`,

    foodSpecialties: [
      { name: 'Assamese Thali', desc: 'Traditional rice meal served with Joha rice and Duck curry.' }
    ],

    howToReachDetails: `• By Air: Jorhat Airport (JRH, 95 km) or Guwahati (217 km).\n• By Road: Drive along NH-37 from Guwahati.`,

    travelDestinationsInCity: [
      { name: 'One-Horned Rhino Safari Zone', desc: 'Tall elephant grass wildlife sanctuary.' },
      { name: 'Kaziranga Orchid Park', desc: 'Botanical garden showcasing native Assam orchids.' }
    ],

    hiddenGems: ['Brahmaputra Sunset Viewpoint', 'Mishing River Village'],
    safetyTips: ['Park is closed May to October for monsoon floods.'],

    audioGuideText: 'Welcome to Kaziranga National Park! Take a morning safari to spot the one-horned rhino.',
    highlights: ['One-Horned Rhino Safari', 'Orchid Park', 'Assam Tea Estates'],
    activities: [{ name: 'Kaziranga Morning Elephant & Jeep Safari', duration: '3.5 hours', cost: 2200 }],
    gettingThere: 'Fly to Guwahati (GAU) or Jorhat (JRH) and drive along NH-37 to Kaziranga Kohora gate.',
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
    photo: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    category: 'Beaches',
    rating: 4.7,
    visitors: '160K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 2000,
    safetyRating: 'Very Safe',
    coordinates: { lat: 14.5479, lng: 74.3188 },

    fullHistory: `Mentioned in Hindu epics as the place where Lord Shiva emerged. Home to Atmalinga at Mahabaleshwar Temple.`,

    culturalInfo: `Vedic temple pilgrimage traditions combined with laid-back bohemian cliffside beach culture along Om Beach.`,

    foodSpecialties: [
      { name: 'Coastal Fish Thali', desc: 'Fresh Arabian sea fish fried with spicy Byadgi chillies.' }
    ],

    howToReachDetails: `• By Air: Goa Dabolim Airport (GOI, 140 km).\n• By Rail: Gokarna Road Station (GOK).\n• By Road: Drive along NH-66 from Goa.`,

    travelDestinationsInCity: [
      { name: 'Om Beach', desc: 'Natural beach shaped like holy Om symbol.' },
      { name: 'Kudle Beach', desc: 'Wide sandy beach lined with seafood cafes.' }
    ],

    hiddenGems: ['Half Moon Beach Trail', 'Paradise Beach Boat Ride'],
    safetyTips: ['Hike between cliff beaches during daylight hours.'],

    audioGuideText: 'Welcome to Gokarna. Hike along cliffside paths connecting Kudle and Om beaches.',
    highlights: ['Om Beach', 'Kudle Beach', 'Mahabaleshwar Temple'],
    activities: [{ name: 'Gokarna 5-Beach Cliff Trekking Trail', duration: '4 hours', cost: 500 }],
    gettingThere: 'Fly to Goa (GOI) or take a train to Gokarna Road station (GOK).',
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
    photo: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    category: 'Beaches',
    rating: 4.7,
    visitors: '500K+',
    bestSeason: 'Oct-Mar',
    averageCostPerDay: 2000,
    safetyRating: 'Very Safe',
    coordinates: { lat: 8.0883, lng: 77.5385 },

    fullHistory: `Dedicated to Goddess Kanya Devi. Swami Vivekananda meditated on a rock island here in December 1892.`,

    culturalInfo: `Vivekananda Rock Memorial, 133-foot Thiruvalluvar Statue, and simultaneous sunset and moonrise over three oceans.`,

    foodSpecialties: [
      { name: 'Kanyakumari Fish Curry', desc: 'Spicy Tamil coastal fish curry cooked with tamarind and coconut.' }
    ],

    howToReachDetails: `• By Air: Trivandrum Airport (TRV, 90 km).\n• By Rail: Kanyakumari Station (CAPE).`,

    travelDestinationsInCity: [
      { name: 'Vivekananda Rock Memorial', desc: 'Rock island memorial in middle of 3 oceans.' },
      { name: 'Thiruvalluvar Statue', desc: '133-foot stone statue of Tamil poet.' }
    ],

    hiddenGems: ['Padmanabhapuram Wooden Palace', 'Vattakottai Fort'],
    safetyTips: ['Ferry service to Vivekananda Rock operates weather permitting.'],

    audioGuideText: 'Welcome to Kanyakumari, southernmost tip of India where three oceans meet.',
    highlights: ['Vivekananda Rock', 'Thiruvalluvar Statue', 'Triveni Sangam'],
    activities: [{ name: 'Ferry Ride to Vivekananda Rock Memorial', duration: '2 hours', cost: 150 }],
    gettingThere: 'Fly into Trivandrum Airport (TRV) or take direct train to Kanyakumari station.',
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
    photo: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
    category: 'Mountains',
    rating: 4.9,
    visitors: '40K+',
    bestSeason: 'Jun-Sep',
    averageCostPerDay: 3000,
    safetyRating: 'Safe',
    coordinates: { lat: 32.2461, lng: 78.0349 },

    fullHistory: `Spiti means "The Middle Land" between Tibet and India. Key Monastery (Kye Gompa) was established in 11th century at 13,668 feet.`,

    culturalInfo: `Tibetan Buddhist culture, Tabo Monastery (1000-year-old "Ajanta of Himalayas"), and Hikkim highest post office.`,

    foodSpecialties: [
      { name: 'Spiti Butter Tea & Tsampa', desc: 'Traditional salted yak butter tea served with roasted barley flour.' }
    ],

    howToReachDetails: `• By Road: Accessible in summer via Manali-Atal Tunnel-Kunzum Pass or year-round via Shimla-Kinnaur route.`,

    travelDestinationsInCity: [
      { name: 'Key Monastery', desc: '1,000-year-old fortress monastery on cliff.' },
      { name: 'Chandratal Lake', desc: 'Crescent-shaped high-altitude glacial lake.' },
      { name: 'Hikkim Post Office', desc: 'World\'s highest post office at 14,567 ft.' }
    ],

    hiddenGems: ['Langza Fossil Village', 'Komic Village'],
    safetyTips: ['Travel in 4x4 vehicles with experienced mountain drivers.'],

    audioGuideText: 'Welcome to Spiti Valley. Explore 1,000-year-old Key Monastery perched high above Spiti river.',
    highlights: ['Key Monastery', 'Chandratal Lake', 'Hikkim Post Office'],
    activities: [{ name: 'Chandratal Lake High-Altitude Camping & Stargazing', duration: 'Overnight', cost: 2500 }],
    gettingThere: 'Drive 4x4 SUV from Manali via Atal Tunnel & Kunzum Pass (June to September).',
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
    photo: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
    category: 'Mountains',
    rating: 4.9,
    visitors: '80K+',
    bestSeason: 'May-Sep',
    averageCostPerDay: 3500,
    safetyRating: 'Safe',
    coordinates: { lat: 34.1526, lng: 77.5771 },

    fullHistory: `Known as Little Tibet along ancient Silk Route high passes. Famous for Pangong Tso Lake and cliffside monasteries like Hemis and Thiksey.`,

    culturalInfo: `Tibetan Buddhist culture, Losar New Year, prayer flags, and Nubra Valley double-humped camels.`,

    foodSpecialties: [
      { name: 'Skyu & Thukpa', desc: 'Traditional Ladakhi noodle & vegetable stew.' }
    ],

    howToReachDetails: `• By Air: Leh Kushok Bakula Airport (IXL).\n• By Road: Manali-Leh Highway or Srinagar-Leh Highway.`,

    travelDestinationsInCity: [
      { name: 'Pangong Tso Lake', desc: 'Endorheic salt lake changing colors from blue to emerald.' },
      { name: 'Nubra Valley', desc: 'Cold desert sand dunes with double-humped camels.' }
    ],

    hiddenGems: ['Diskit Monastery', 'Magnetic Hill'],
    safetyTips: ['Acclimate 48 hours in Leh for high altitude.'],

    audioGuideText: 'Welcome to Ladakh, land of high mountain passes and shimmering Pangong Lake.',
    highlights: ['Pangong Lake', 'Nubra Valley', 'Thiksey Monastery'],
    activities: [{ name: 'Nubra Valley Bactrian Camel Safari', duration: '2 hours', cost: 1000 }],
    gettingThere: 'Fly into Leh Airport (IXL) or drive via Manali-Leh Highway in summer.',
    bestTimeToVisit: 'May to September'
  }
];

export const categories = ['All', 'Beaches', 'Mountains', 'Heritage', 'Nature'];
export const regions = ['All Regions', 'North', 'South', 'East', 'West', 'North-East'];
