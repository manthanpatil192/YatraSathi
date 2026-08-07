// TODO: Partner with local tourism boards for real data
export const hiddenGems = [
  {
    id: 'hg1',
    name: 'Spiti Valley',
    state: 'Himachal Pradesh',
    description: 'A cold desert mountain valley located high in the Himalayas, known for its stunning landscapes and Buddhist culture.',
    image: '/images/destinations/spiti.jpg',
    ecoRating: 5,
    isEcoCertified: true,
    highlights: ['Key Monastery', 'Chandratal Lake', 'Kunzum Pass', 'Kibber Village'],
    averageCostPerDay: 2000,
    bestTimeToVisit: 'June to September',
    sustainablePractices: ['Solar-powered homestays', 'Zero-plastic zones', 'Community-based tourism']
  },
  {
    id: 'hg2',
    name: 'Mawlynnong',
    state: 'Meghalaya',
    description: 'Famed as the cleanest village in Asia, offering a glimpse into sustainable Khasi tribal life and living root bridges.',
    image: '/images/destinations/mawlynnong.jpg',
    ecoRating: 5,
    isEcoCertified: true,
    highlights: ['Living Root Bridge', 'Cleanest Village Walk', 'Balancing Rock', 'Sky View Point'],
    averageCostPerDay: 1500,
    bestTimeToVisit: 'October to April',
    sustainablePractices: ['Community-managed waste disposal', '100% bamboo dustbins', 'Ban on single-use plastics']
  },
  {
    id: 'hg3',
    name: 'Majuli Island',
    state: 'Assam',
    description: 'The world\'s largest river island, known for its unique Vaishnavite culture, satras (monasteries), and rich biodiversity.',
    image: '/images/destinations/majuli.jpg',
    ecoRating: 4,
    isEcoCertified: false,
    highlights: ['Kamalabari Satra', 'Mishing Village Tour', 'Bird Watching', 'Pottery Making'],
    averageCostPerDay: 1200,
    bestTimeToVisit: 'October to March',
    sustainablePractices: ['Bamboo architecture', 'Organic farming', 'Preservation of traditional crafts']
  },
  {
    id: 'hg4',
    name: 'Chettinad',
    state: 'Tamil Nadu',
    description: 'A region famous for its rich cultural heritage, unique and spicy cuisine, and palatial 19th-century mansions.',
    image: '/images/destinations/chettinad.jpg',
    ecoRating: 4,
    isEcoCertified: false,
    highlights: ['Chettinad Mansions', 'Athangudi Tile Factory', 'Local Culinary Tour', 'Thirumayam Fort'],
    averageCostPerDay: 2500,
    bestTimeToVisit: 'October to March',
    sustainablePractices: ['Heritage conservation', 'Promotion of local artisans', 'Traditional rainwater harvesting']
  }
];

export const homestays = [
  {
    id: 'hs1',
    name: 'Spiti Eco Village Homestay',
    location: 'Kaza, Spiti Valley',
    description: 'Experience traditional Spitian hospitality in an eco-friendly mud house.',
    pricePerNight: 1200,
    ecoRating: 5,
    amenities: ['Home-cooked organic food', 'Solar water heater', 'Guided village walks'],
    image: '/images/homestays/spiti-homestay.jpg'
  },
  {
    id: 'hs2',
    name: 'Khasi Heritage Hut',
    location: 'Mawlynnong, Meghalaya',
    description: 'Stay in a traditional bamboo and thatch house built by local artisans.',
    pricePerNight: 1500,
    ecoRating: 5,
    amenities: ['Locally sourced food', 'Composting toilets', 'Cultural exchange'],
    image: '/images/homestays/mawlynnong-homestay.jpg'
  },
  {
    id: 'hs3',
    name: 'Majuli River Retreat',
    location: 'Majuli, Assam',
    description: 'A peaceful stay in a stilt house overlooking the Brahmaputra river.',
    pricePerNight: 1000,
    ecoRating: 4,
    amenities: ['Bicycle rentals', 'Farm-to-table meals', 'Traditional craft workshops'],
    image: '/images/homestays/majuli-homestay.jpg'
  }
];

export const ecoTips = [
  "Carry a reusable water bottle and avoid buying packaged drinking water.",
  "Say no to plastic bags; carry a cloth bag for shopping.",
  "Support the local economy by eating at local eateries and buying local handicrafts.",
  "Respect local culture and traditions, and dress modestly in religious places.",
  "Do not litter; carry your trash back with you, especially on treks and in nature reserves.",
  "Conserve water and electricity in your hotel room.",
  "Choose eco-friendly transport options like walking, cycling, or public transport when possible.",
  "Avoid activities that exploit animals, such as elephant rides or unregulated wildlife encounters."
];

export const ecoBadgeCriteria = [
  "Stayed in a certified eco-friendly accommodation (Homestay/Eco-resort).",
  "Used public transport or shared mobility for the majority of the trip.",
  "Participated in a local community-based tourism activity or workshop.",
  "Visited a designated 'Hidden Gem' or offbeat destination.",
  "Pledged to avoid single-use plastics during the trip."
];
