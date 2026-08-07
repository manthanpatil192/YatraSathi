import express from 'express';
import { dbQuery, dbRun, dbGet } from '../db.js';

const router = express.Router();

// GET /api/itineraries
router.get('/', async (req, res) => {
  try {
    const rows = await dbQuery('SELECT * FROM itineraries ORDER BY created_at DESC');
    const formatted = rows.map(r => ({
      ...r,
      data: JSON.parse(r.data)
    }));
    res.json({ success: true, data: formatted });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/itineraries/save
router.post('/save', async (req, res) => {
  try {
    const { name, data, user_id } = req.body;
    if (!name || !data) {
      return res.status(400).json({ success: false, message: 'Name and itinerary data are required' });
    }

    const result = await dbRun(
      'INSERT INTO itineraries (name, data, user_id) VALUES (?, ?, ?)',
      [name, JSON.stringify(data), user_id || null]
    );

    res.json({ success: true, id: result.id, message: 'Itinerary saved to backend server database successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
