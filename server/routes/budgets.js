import express from 'express';
import { dbQuery, dbRun } from '../db.js';

const router = express.Router();

// GET /api/budgets
router.get('/', async (req, res) => {
  try {
    const rows = await dbQuery('SELECT * FROM budgets ORDER BY created_at DESC');
    const formatted = rows.map(r => ({
      ...r,
      data: JSON.parse(r.data)
    }));
    res.json({ success: true, data: formatted });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/budgets/save
router.post('/save', async (req, res) => {
  try {
    const { trip_name, total, data, user_id } = req.body;
    const result = await dbRun(
      'INSERT INTO budgets (trip_name, total, data, user_id) VALUES (?, ?, ?, ?)',
      [trip_name || 'My Trip', total || 0, JSON.stringify(data || {}), user_id || null]
    );

    res.json({ success: true, id: result.id, message: 'Budget saved to backend server database!' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
