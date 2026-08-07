import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { initDatabase } from './db.js';

import destinationsRouter from './routes/destinations.js';
import itinerariesRouter from './routes/itineraries.js';
import budgetsRouter from './routes/budgets.js';
import safetyRouter from './routes/safety.js';
import authRouter from './routes/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Database
initDatabase();

// API Routes
app.use('/api/auth', authRouter);
app.use('/api/destinations', destinationsRouter);
app.use('/api/itineraries', itinerariesRouter);
app.use('/api/budgets', budgetsRouter);
app.use('/api/safety', safetyRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    server: 'YatraSathi Open-Source Backend Server',
    database: 'SQLite',
    timestamp: new Date().toISOString()
  });
});

// Serve static assets from compiled dist directory for Railway production deployment
const distPath = path.resolve(__dirname, '../dist');
if (fs.existsSync(distPath)) {
  console.log('Serving production Vite build from:', distPath);
  app.use(express.static(distPath));
  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
      return res.sendFile(path.resolve(distPath, 'index.html'));
    }
    next();
  });
}

app.listen(PORT, () => {
  console.log(`🚀 YatraSathi Production Server running on port ${PORT}`);
});
