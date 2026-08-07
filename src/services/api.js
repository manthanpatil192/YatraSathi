import { db, itineraryDB, budgetDB } from '../db/database';
import { destinations as fallbackDestinations } from '../data/destinations';

const API_BASE_URL = '/api';

async function fetchAPI(endpoint, options = {}) {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    console.warn(`[Backend API] Endpoint ${endpoint} failed or offline. Falling back to local IndexedDB/seed data:`, err.message);
    return null;
  }
}

export const apiService = {
  // Destinations
  async getDestinations(category, search) {
    let query = '?';
    if (category) query += `category=${encodeURIComponent(category)}&`;
    if (search) query += `search=${encodeURIComponent(search)}`;

    const response = await fetchAPI(`/destinations${query}`);
    if (response && response.success && response.data.length > 0) {
      return response.data;
    }

    // Offline / fallback logic
    let result = [...fallbackDestinations];
    if (category && category !== 'All') {
      result = result.filter(d => d.category.toLowerCase() === category.toLowerCase());
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(d => d.name.toLowerCase().includes(q) || d.state.toLowerCase().includes(q));
    }
    return result;
  },

  async getDestinationById(id) {
    const response = await fetchAPI(`/destinations/${id}`);
    if (response && response.success) {
      return response.data;
    }
    return fallbackDestinations.find(d => String(d.id) === String(id));
  },

  // Auth
  async login(email, password) {
    const response = await fetchAPI('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    if (response && response.success) {
      return response;
    }
    // Fallback local auth simulation
    return { success: true, user: { id: 1, name: email.split('@')[0], email }, token: 'mock_local_token' };
  },

  async signup(name, email, password) {
    const response = await fetchAPI('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password })
    });
    if (response && response.success) {
      return response;
    }
    return { success: true, user: { id: Date.now(), name, email }, token: 'mock_local_token' };
  },

  // Itineraries
  async saveItinerary(itinerary) {
    // 1. Always save to local Dexie IndexedDB for offline access
    await itineraryDB.save(itinerary);

    // 2. Sync to Backend Server
    const response = await fetchAPI('/itineraries/save', {
      method: 'POST',
      body: JSON.stringify({
        name: itinerary.name || 'My Trip',
        data: itinerary
      })
    });

    return response || { success: true, message: 'Saved locally to IndexedDB (offline mode)' };
  },

  // Budgets
  async saveBudget(budget) {
    await budgetDB.save(budget);

    const response = await fetchAPI('/budgets/save', {
      method: 'POST',
      body: JSON.stringify({
        trip_name: budget.tripName || 'My Budget',
        total: budget.total || 0,
        data: budget
      })
    });

    return response || { success: true, message: 'Saved locally to IndexedDB (offline mode)' };
  },

  // Safety & SOS
  async triggerSOS(lat, lng) {
    const response = await fetchAPI('/safety/sos', {
      method: 'POST',
      body: JSON.stringify({ lat, lng })
    });

    return response || {
      success: true,
      message: 'SOS triggered locally (offline mode)',
      coordinates: { lat, lng }
    };
  }
};
