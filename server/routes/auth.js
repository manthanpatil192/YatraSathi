import express from 'express';
import { dbGet, dbRun } from '../db.js';

const router = express.Router();

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Name, email, and password required' });
    }

    const existing = await dbGet('SELECT * FROM users WHERE email = ?', [email]);
    if (existing) {
      return res.status(400).json({ success: false, message: 'User with this email already exists' });
    }

    const result = await dbRun('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
    
    res.json({
      success: true,
      user: { id: result.id, name, email },
      token: 'mock_jwt_token_' + result.id,
      message: 'Account created successfully on YatraSathi backend!'
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await dbGet('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    res.json({
      success: true,
      user: { id: user.id, name: user.name, email: user.email },
      token: 'mock_jwt_token_' + user.id,
      message: 'Logged in successfully!'
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
