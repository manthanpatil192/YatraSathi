// TODO: Replace with user-generated + API data
export const sampleItineraries = [
  {
    id: 'i1',
    name: 'Goa Beach Escape',
    description: 'A relaxing 4-day trip exploring the best beaches, historical sites, and nightlife of North and South Goa.',
    coverImage: '/images/destinations/goa.jpg',
    destinations: ['d1'],
    totalDays: 4,
    totalBudget: 15000,
    days: [
      {
        dayNumber: 1,
        title: 'Arrival & North Goa Beaches',
        stops: [
          { id: 's1-1', destinationId: 'd1', name: 'Check-in to Hotel', time: '12:00 PM', duration: '1 hr', notes: 'Settle in and freshen up', type: 'stay' },
          { id: 's1-2', destinationId: 'd1', name: 'Baga Beach', time: '02:00 PM', duration: '3 hrs', notes: 'Relax on the beach, try some water sports', type: 'visit' },
          { id: 's1-3', destinationId: 'd1', name: 'Britto\'s Restaurant', time: '07:30 PM', duration: '2 hrs', notes: 'Famous for seafood and Goan delicacies', type: 'food' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Heritage Tour & Sunset',
        stops: [
          { id: 's2-1', destinationId: 'd1', name: 'Basilica of Bom Jesus', time: '10:00 AM', duration: '2 hrs', notes: 'Explore Old Goa churches', type: 'visit' },
          { id: 's2-2', destinationId: 'd1', name: 'Fontainhas Walk', time: '02:00 PM', duration: '2 hrs', notes: 'Latin Quarter of Panjim', type: 'visit' },
          { id: 's2-3', destinationId: 'd1', name: 'Mandovi River Cruise', time: '05:30 PM', duration: '2 hrs', notes: 'Sunset cruise with music and dance', type: 'visit' }
        ]
      },
      {
        dayNumber: 3,
        title: 'South Goa Serenity',
        stops: [
          { id: 's3-1', destinationId: 'd1', name: 'Colva Beach', time: '11:00 AM', duration: '3 hrs', notes: 'Quiet and peaceful beach time', type: 'visit' },
          { id: 's3-2', destinationId: 'd1', name: 'Martin\'s Corner', time: '02:30 PM', duration: '1.5 hrs', notes: 'Authentic Goan lunch', type: 'food' },
          { id: 's3-3', destinationId: 'd1', name: 'Cabo de Rama Fort', time: '05:00 PM', duration: '1.5 hrs', notes: 'Stunning sunset views from the fort', type: 'visit' }
        ]
      },
      {
        dayNumber: 4,
        title: 'Shopping & Departure',
        stops: [
          { id: 's4-1', destinationId: 'd1', name: 'Anjuna Flea Market', time: '10:00 AM', duration: '3 hrs', notes: 'Souvenir shopping', type: 'visit' },
          { id: 's4-2', destinationId: 'd1', name: 'Airport Transfer', time: '02:00 PM', duration: '1 hr', notes: 'Head back home', type: 'transport' }
        ]
      }
    ]
  },
  {
    id: 'i2',
    name: 'Rajasthan Heritage Trail',
    description: 'A 5-day royal journey through Jaipur and Udaipur, experiencing majestic forts, palaces, and vibrant culture.',
    coverImage: '/images/destinations/jaipur.jpg',
    destinations: ['d3', 'd6'],
    totalDays: 5,
    totalBudget: 22000,
    days: [
      {
        dayNumber: 1,
        title: 'Welcome to the Pink City',
        stops: [
          { id: 's1-1', destinationId: 'd3', name: 'Hawa Mahal', time: '03:00 PM', duration: '1 hr', notes: 'Palace of Winds', type: 'visit' },
          { id: 's1-2', destinationId: 'd3', name: 'City Palace', time: '04:30 PM', duration: '2 hrs', notes: 'Royal residence', type: 'visit' },
          { id: 's1-3', destinationId: 'd3', name: 'Chokhi Dhani', time: '07:30 PM', duration: '3 hrs', notes: 'Traditional Rajasthani dinner and cultural show', type: 'food' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Forts & Bazaars',
        stops: [
          { id: 's2-1', destinationId: 'd3', name: 'Amer Fort', time: '09:00 AM', duration: '3 hrs', notes: 'Majestic hilltop fort', type: 'visit' },
          { id: 's2-2', destinationId: 'd3', name: 'Bapu Bazaar', time: '03:00 PM', duration: '2 hrs', notes: 'Shopping for textiles and mojadis', type: 'visit' },
          { id: 's2-3', destinationId: 'd3', name: 'LMB Restaurant', time: '08:00 PM', duration: '1.5 hrs', notes: 'Famous for Rajasthani Thali', type: 'food' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Journey to Udaipur',
        stops: [
          { id: 's3-1', destinationId: 'd3', name: 'Train/Drive to Udaipur', time: '08:00 AM', duration: '6 hrs', notes: 'Scenic route through Rajasthan', type: 'transport' },
          { id: 's3-2', destinationId: 'd6', name: 'Check-in Udaipur Hotel', time: '03:00 PM', duration: '1 hr', notes: 'Settle in', type: 'stay' },
          { id: 's3-3', destinationId: 'd6', name: 'Lake Pichola Boat Ride', time: '05:30 PM', duration: '1.5 hrs', notes: 'Sunset views of City Palace and Jag Mandir', type: 'visit' }
        ]
      },
      {
        dayNumber: 4,
        title: 'City of Lakes',
        stops: [
          { id: 's4-1', destinationId: 'd6', name: 'City Palace Udaipur', time: '10:00 AM', duration: '3 hrs', notes: 'Largest palace complex in Rajasthan', type: 'visit' },
          { id: 's4-2', destinationId: 'd6', name: 'Ambrai Restaurant', time: '01:30 PM', duration: '1.5 hrs', notes: 'Lunch with lakeside views', type: 'food' },
          { id: 's4-3', destinationId: 'd6', name: 'Saheliyon Ki Bari', time: '04:00 PM', duration: '1.5 hrs', notes: 'Garden of the Maidens', type: 'visit' }
        ]
      },
      {
        dayNumber: 5,
        title: 'Farewell Udaipur',
        stops: [
          { id: 's5-1', destinationId: 'd6', name: 'Jagdish Temple', time: '09:00 AM', duration: '1 hr', notes: 'Ancient Hindu temple', type: 'visit' },
          { id: 's5-2', destinationId: 'd6', name: 'Airport Transfer', time: '12:00 PM', duration: '1 hr', notes: 'Departure', type: 'transport' }
        ]
      }
    ]
  },
  {
    id: 'i3',
    name: 'Himalayan Adventure',
    description: 'A 6-day thrilling and scenic trip to Manali and surrounding valleys in the Himalayas.',
    coverImage: '/images/destinations/manali.jpg',
    destinations: ['d2'],
    totalDays: 6,
    totalBudget: 18000,
    days: [
      {
        dayNumber: 1,
        title: 'Arrival in Manali',
        stops: [
          { id: 's1-1', destinationId: 'd2', name: 'Bus from Delhi', time: '08:00 AM', duration: '12 hrs', notes: 'Overnight journey ends', type: 'transport' },
          { id: 's1-2', destinationId: 'd2', name: 'Hadimba Temple', time: '03:00 PM', duration: '1.5 hrs', notes: 'Ancient wooden temple in cedar forest', type: 'visit' },
          { id: 's1-3', destinationId: 'd2', name: 'Mall Road', time: '06:00 PM', duration: '2 hrs', notes: 'Evening stroll and dinner', type: 'visit' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Solang Valley Thrills',
        stops: [
          { id: 's2-1', destinationId: 'd2', name: 'Solang Valley', time: '10:00 AM', duration: '5 hrs', notes: 'Paragliding and zorbing', type: 'visit' },
          { id: 's2-2', destinationId: 'd2', name: 'Cafe 1947', time: '04:00 PM', duration: '1.5 hrs', notes: 'Riverside cafe in Old Manali', type: 'food' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Rohtang Pass Excursion',
        stops: [
          { id: 's3-1', destinationId: 'd2', name: 'Rohtang Pass', time: '08:00 AM', duration: '6 hrs', notes: 'Snow activities and panoramic views', type: 'visit' },
          { id: 's3-2', destinationId: 'd2', name: 'Vashisht Hot Springs', time: '04:00 PM', duration: '1.5 hrs', notes: 'Relaxing dip', type: 'visit' }
        ]
      },
      {
        dayNumber: 4,
        title: 'River Rafting & Kullu',
        stops: [
          { id: 's4-1', destinationId: 'd2', name: 'Kullu Valley', time: '10:00 AM', duration: '2 hrs', notes: 'Shawl factories', type: 'visit' },
          { id: 's4-2', destinationId: 'd2', name: 'Beas River Rafting', time: '01:00 PM', duration: '3 hrs', notes: 'Thrilling white water rafting', type: 'visit' }
        ]
      },
      {
        dayNumber: 5,
        title: 'Trek to Jogini Falls',
        stops: [
          { id: 's5-1', destinationId: 'd2', name: 'Jogini Waterfall Trek', time: '09:00 AM', duration: '4 hrs', notes: 'Scenic short trek', type: 'visit' },
          { id: 's5-2', destinationId: 'd2', name: 'Old Manali Exploration', time: '03:00 PM', duration: '3 hrs', notes: 'Cafes and bohemian vibe', type: 'visit' }
        ]
      },
      {
        dayNumber: 6,
        title: 'Departure',
        stops: [
          { id: 's6-1', destinationId: 'd2', name: 'Tibetan Monasteries', time: '10:00 AM', duration: '1.5 hrs', notes: 'Peaceful morning visit', type: 'visit' },
          { id: 's6-2', destinationId: 'd2', name: 'Volvo to Delhi', time: '04:00 PM', duration: '14 hrs', notes: 'Overnight journey back', type: 'transport' }
        ]
      }
    ]
  }
];
