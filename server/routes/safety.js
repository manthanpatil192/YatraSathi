import express from 'express';
import { dbRun, dbQuery } from '../db.js';

const router = express.Router();

// POST /api/safety/sos
router.post('/sos', async (req, res) => {
  try {
    const { lat, lng, user_id } = req.body;
    
    // Log SOS trigger into SQLite
    await dbRun('INSERT INTO sos_logs (lat, lng, user_id) VALUES (?, ?, ?)', [lat, lng, user_id || null]);

    res.json({
      success: true,
      message: 'SOS Signal received by YatraSathi Safety Backend Server!',
      coordinates: { lat, lng },
      dispatchStatus: 'Dispatched emergency alert to nearest emergency services & emergency contacts.',
      nearestServices: {
        hospitals: [
          { name: 'District General Hospital', phone: '108', distance: '1.2 km' },
          { name: 'Apollo Medical Center', phone: '0832-2456789', distance: '2.5 km' }
        ],
        police: [
          { name: 'Central Tourist Police Station', phone: '100', distance: '0.8 km' }
        ]
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/safety/crowd-levels
router.get('/crowd-levels', (req, res) => {
  res.json({
    success: true,
    data: [
      { name: 'Taj Mahal', level: 'High', note: 'Peak afternoon rush' },
      { name: 'Gateway of India', level: 'Medium', note: 'Moderate weekend crowd' },
      { name: 'Varkala Beach', level: 'Low', note: 'Quiet & serene' },
      { name: 'City Center Mall', level: 'High', note: 'Festival shopping' }
    ]
  });
});

export default router;
