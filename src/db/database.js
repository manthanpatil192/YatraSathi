import Dexie from 'dexie';

export const db = new Dexie('YatraSathiDB');

db.version(1).stores({
  trips: '++id, name, createdAt',
  itineraries: '++id, tripId, name',
  budgets: '++id, tripId',
  packingLists: '++id, tripId',
  emergencyContacts: '++id, name',
  userPreferences: 'key',
  cachedDestinations: 'id, category',
  safetyCheckins: '++id, tripId, timestamp'
});

// CRUD helpers
export const tripDB = {
  async addTrip(trip) { return db.trips.add({ ...trip, createdAt: new Date().toISOString() }); },
  async getTrips() { return db.trips.toArray(); },
  async getTrip(id) { return db.trips.get(id); },
  async updateTrip(id, changes) { return db.trips.update(id, changes); },
  async deleteTrip(id) { return db.trips.delete(id); }
};

export const itineraryDB = {
  async save(itinerary) { /* upsert logic */ const existing = await db.itineraries.get(itinerary.id); if (existing) return db.itineraries.update(itinerary.id, itinerary); return db.itineraries.add(itinerary); },
  async getByTrip(tripId) { return db.itineraries.where('tripId').equals(tripId).toArray(); },
  async getAll() { return db.itineraries.toArray(); },
  async delete(id) { return db.itineraries.delete(id); }
};

export const budgetDB = {
  async save(budget) { const existing = await db.budgets.get(budget.id); if (existing) return db.budgets.update(budget.id, budget); return db.budgets.add(budget); },
  async getByTrip(tripId) { return db.budgets.where('tripId').equals(tripId).first(); },
  async getAll() { return db.budgets.toArray(); }
};

export const packingDB = {
  async save(list) { const existing = await db.packingLists.get(list.id); if (existing) return db.packingLists.update(list.id, list); return db.packingLists.add(list); },
  async getByTrip(tripId) { return db.packingLists.where('tripId').equals(tripId).first(); },
  async getAll() { return db.packingLists.toArray(); }
};

export const emergencyDB = {
  async save(contact) { return db.emergencyContacts.add(contact); },
  async getAll() { return db.emergencyContacts.toArray(); },
  async delete(id) { return db.emergencyContacts.delete(id); }
};

export const prefsDB = {
  async set(key, value) { return db.userPreferences.put({ key, value }); },
  async get(key) { const pref = await db.userPreferences.get(key); return pref?.value; }
};
