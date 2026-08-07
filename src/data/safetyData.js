// TODO: Replace with real emergency services API
export const emergencyNumbers = { 
  police: '100', 
  ambulance: '108', 
  fire: '101', 
  women: '1091', 
  tourist: '1363' 
};

export const nearbyServices = {
  d1: { // Goa
    hospitals: [
      { name: 'Goa Medical College (GMC)', distance: '15 km', phone: '0832-2495000' },
      { name: 'Manipal Hospital', distance: '8 km', phone: '0832-6712345' }
    ],
    policeStations: [
      { name: 'Panaji Police Station', distance: '5 km', phone: '0832-2428111' },
      { name: 'Calangute Police Station', distance: '2 km', phone: '0832-2278284' }
    ]
  },
  d2: { // Manali
    hospitals: [
      { name: 'Lady Willingdon Hospital', distance: '2 km', phone: '01902-252379' }
    ],
    policeStations: [
      { name: 'Manali Police Station', distance: '1 km', phone: '01902-252326' }
    ]
  },
  d3: { // Jaipur
    hospitals: [
      { name: 'SMS Hospital', distance: '4 km', phone: '0141-2560291' },
      { name: 'Fortis Escorts Hospital', distance: '8 km', phone: '0141-2547000' }
    ],
    policeStations: [
      { name: 'Tourist Police Station', distance: '3 km', phone: '0141-2200022' }
    ]
  }
};

export const crowdLevels = {
  d1: { level: 'High', updatedAt: new Date().toISOString(), note: 'Peak tourist season, beaches are very crowded.' },
  d2: { level: 'Medium', updatedAt: new Date().toISOString(), note: 'Moderate crowds in Mall Road, quieter in Old Manali.' },
  d3: { level: 'Low', updatedAt: new Date().toISOString(), note: 'Summer heat keeps daytime crowds minimal.' }
};

export const safetyTips = [
  "Always keep your important documents (passport, ID) safe, and carry digital or physical copies.",
  "Be cautious of overly friendly strangers offering unsolicited help or deals.",
  "Drink only bottled or purified water to avoid water-borne diseases.",
  "Dress appropriately and respectfully, especially when visiting religious or rural areas.",
  "Avoid walking alone in poorly lit or isolated areas late at night.",
  "Use official or app-based taxis (like Ola/Uber) rather than unmetered street cabs.",
  "Keep a small first-aid kit with basic medicines for stomach upsets and minor injuries.",
  "Share your itinerary and stay details with a trusted friend or family member."
];
