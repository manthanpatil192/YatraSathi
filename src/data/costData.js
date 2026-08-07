// TODO: Replace with real pricing API
export const costCategories = ['Transport', 'Food', 'Accommodation', 'Activities', 'Miscellaneous'];

export const averageCosts = {
  // Goa
  d1: { transport: 500, food: 1000, accommodation: 1500, activities: 800, misc: 200 },
  // Manali
  d2: { transport: 400, food: 700, accommodation: 1000, activities: 500, misc: 200 },
  // Jaipur
  d3: { transport: 300, food: 800, accommodation: 1200, activities: 600, misc: 200 },
  // Munnar
  d4: { transport: 400, food: 600, accommodation: 1200, activities: 400, misc: 200 },
  // Rishikesh
  d5: { transport: 200, food: 500, accommodation: 800, activities: 400, misc: 150 },
  // Udaipur
  d6: { transport: 350, food: 900, accommodation: 1400, activities: 500, misc: 250 },
  // Hampi
  d7: { transport: 250, food: 500, accommodation: 800, activities: 300, misc: 150 },
  // Coorg
  d8: { transport: 500, food: 700, accommodation: 1200, activities: 400, misc: 200 },
  // Darjeeling
  d9: { transport: 400, food: 600, accommodation: 1100, activities: 300, misc: 150 },
  // Andaman
  d10: { transport: 800, food: 1200, accommodation: 2000, activities: 1200, misc: 300 },
  // Varanasi
  d11: { transport: 200, food: 400, accommodation: 700, activities: 200, misc: 100 },
  // Leh-Ladakh
  d12: { transport: 1000, food: 800, accommodation: 1200, activities: 600, misc: 300 }
};

export const transportBetweenCities = [
  { from: 'Delhi', to: 'Jaipur', mode: 'Train', cost: 600, duration: '4-5 hrs' },
  { from: 'Mumbai', to: 'Goa', mode: 'Bus', cost: 1200, duration: '12-14 hrs' },
  { from: 'Bangalore', to: 'Coorg', mode: 'Bus', cost: 800, duration: '6 hrs' },
  { from: 'Delhi', to: 'Manali', mode: 'Bus', cost: 1500, duration: '12-14 hrs' },
  { from: 'Jaipur', to: 'Udaipur', mode: 'Train', cost: 800, duration: '7 hrs' }
];

export const budgetTips = [
  "Book train tickets early via IRCTC to secure lower classes and avoid dynamic fare pricing.",
  "Eat at local dhabas and street food stalls rather than touristy restaurants.",
  "Use local public transport or shared autos instead of private cabs.",
  "Travel during the shoulder season (just before or after peak season) for better hotel rates.",
  "Consider staying in hostels or homestays for a more authentic and affordable experience.",
  "Carry a reusable water bottle to save on buying bottled water and reduce plastic waste.",
  "Bargain politely at local markets and unmetered transport.",
  "Look out for free walking tours or explore heritage areas on foot."
];
