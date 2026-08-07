import express from 'express';
import { dbQuery, dbGet } from '../db.js';

const router = express.Router();

function safeParse(val, fallback) {
  if (!val) return fallback;
  try {
    return JSON.parse(val);
  } catch (e) {
    return fallback;
  }
}

function formatDestination(r) {
  if (!r) return null;
  return {
    ...r,
    coordinates: safeParse(r.coordinates, { lat: 20.5937, lng: 78.9629 }),
    highlights: safeParse(r.highlights, []),
    activities: safeParse(r.activities, []),
    foodSpecialties: safeParse(r.foodSpecialties, []),
    travelDestinationsInCity: safeParse(r.travelDestinationsInCity, []),
    hiddenGems: safeParse(r.hiddenGems, []),
    safetyTips: safeParse(r.safetyTips, [])
  };
}

// GET /api/destinations
router.get('/', async (req, res) => {
  try {
    const { category, search } = req.query;
    let sql = 'SELECT * FROM destinations';
    const params = [];

    if (category && category !== 'All') {
      sql += ' WHERE LOWER(category) = ?';
      params.push(category.toLowerCase());
    }

    if (search) {
      sql += (params.length ? ' AND' : ' WHERE') + ' (LOWER(name) LIKE ? OR LOWER(state) LIKE ? OR LOWER(description) LIKE ?)';
      const searchPattern = `%${search.toLowerCase()}%`;
      params.push(searchPattern, searchPattern, searchPattern);
    }

    const rows = await dbQuery(sql, params);
    const formatted = rows.map(formatDestination);

    res.json({ success: true, data: formatted });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/destinations/:id
router.get('/:id', async (req, res) => {
  try {
    const row = await dbGet('SELECT * FROM destinations WHERE id = ?', [req.params.id]);
    if (!row) {
      return res.status(404).json({ success: false, message: 'Destination not found' });
    }

    res.json({ success: true, data: formatDestination(row) });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
