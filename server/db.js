import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { destinations } from '../src/data/destinations.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, 'yatrasathi.sqlite');

let db = null;
let isSqliteConnected = false;

try {
  db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.warn('SQLite unavailable, using in-memory dataset:', err.message);
      isSqliteConnected = false;
    } else {
      console.log('Connected to open-source SQLite database at:', dbPath);
      isSqliteConnected = true;
    }
  });
} catch (e) {
  console.warn('SQLite init skipped, using in-memory dataset');
}

export const dbQuery = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    if (!isSqliteConnected || !db) {
      // In-memory fallback
      return resolve(destinations);
    }
    db.all(sql, params, (err, rows) => {
      if (err) {
        console.warn('SQLite query error, falling back to dataset:', err.message);
        resolve(destinations);
      } else resolve(rows);
    });
  });
};

export const dbGet = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    if (!isSqliteConnected || !db) {
      const id = params[0];
      const found = destinations.find(d => String(d.id) === String(id));
      return resolve(found || destinations[0]);
    }
    db.get(sql, params, (err, row) => {
      if (err || !row) {
        const id = params[0];
        const found = destinations.find(d => String(d.id) === String(id));
        resolve(found || destinations[0]);
      } else resolve(row);
    });
  });
};

export const dbRun = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    if (!isSqliteConnected || !db) {
      return resolve({ id: Date.now(), changes: 1 });
    }
    db.run(sql, params, function (err) {
      if (err) resolve({ id: Date.now(), changes: 0 });
      else resolve({ id: this.lastID, changes: this.changes });
    });
  });
};

export function initDatabase() {
  if (!db) return;
  db.serialize(() => {
    try {
      db.run(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL,
          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      db.run(`DROP TABLE IF EXISTS destinations`);

      db.run(`
        CREATE TABLE destinations (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          state TEXT NOT NULL,
          region TEXT,
          description TEXT,
          image TEXT,
          photo TEXT,
          category TEXT,
          rating REAL,
          visitors TEXT,
          bestSeason TEXT,
          averageCostPerDay INTEGER,
          safetyRating TEXT,
          coordinates TEXT,
          audioGuideText TEXT,
          culturalInfo TEXT,
          fullHistory TEXT,
          gettingThere TEXT,
          howToReachDetails TEXT,
          highlights TEXT,
          activities TEXT,
          foodSpecialties TEXT,
          travelDestinationsInCity TEXT,
          hiddenGems TEXT,
          safetyTips TEXT
        )
      `);

      db.run(`
        CREATE TABLE IF NOT EXISTS itineraries (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER,
          name TEXT NOT NULL,
          data TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      db.run(`
        CREATE TABLE IF NOT EXISTS budgets (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER,
          trip_name TEXT,
          total INTEGER,
          data TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      db.run(`
        CREATE TABLE IF NOT EXISTS sos_logs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER,
          lat REAL,
          lng REAL,
          timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      console.log(`Seeding ${destinations.length} active destinations into SQLite database...`);
      const stmt = db.prepare(`
        INSERT INTO destinations (
          id, name, state, region, description, image, photo, category, rating, visitors, bestSeason, 
          averageCostPerDay, safetyRating, coordinates, audioGuideText, culturalInfo, fullHistory, 
          gettingThere, howToReachDetails, highlights, activities, foodSpecialties, travelDestinationsInCity, hiddenGems, safetyTips
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      destinations.forEach((dest) => {
        stmt.run([
          dest.id,
          dest.name,
          dest.state,
          dest.region || 'North',
          dest.description,
          dest.image,
          dest.photo || dest.image,
          dest.category,
          dest.rating,
          dest.visitors,
          dest.bestSeason,
          dest.averageCostPerDay,
          dest.safetyRating,
          JSON.stringify(dest.coordinates),
          dest.audioGuideText,
          dest.culturalInfo,
          dest.fullHistory,
          dest.gettingThere,
          dest.howToReachDetails,
          JSON.stringify(dest.highlights || []),
          JSON.stringify(dest.activities || []),
          JSON.stringify(dest.foodSpecialties || []),
          JSON.stringify(dest.travelDestinationsInCity || []),
          JSON.stringify(dest.hiddenGems || []),
          JSON.stringify(dest.safetyTips || [])
        ]);
      });

      stmt.finalize();
      console.log('SQLite database synchronized successfully!');
    } catch (e) {
      console.warn('SQLite init warning:', e.message);
    }
  });
}
