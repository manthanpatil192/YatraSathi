# 🧭 YatraSathi — Smart Tourism Companion for India

YatraSathi is an open-source, full-stack smart travel companion built for domestic Indian travelers, budget backpackers, families, and solo adventurers across 28 States and 8 Union Territories of India.

---

## 🌟 Key Features

- 🗺️ **24+ Major Indian Cities & Destinations**: High-resolution photography, 1-second auto-changing monument tour, inner-city attractions, and UNESCO World Heritage sites.
- 🍲 **Authentic Food & Culture Guides**: Local food specialties, heritage traditions, folk music, dance forms, and festival calendars.
- 🚌 **Comprehensive Transport & Route Optimizer**: Flight, train (Vande Bharat / Shatabdi), and highway driving directions with distance calculation.
- 💰 **Interactive Budget Calculator**: Real-time spending breakdowns with Chart.js charts and YatraAI smart saving tips.
- 🛡️ **Emergency Safety SOS Center**: GPS location broadcasting with direct touch call dialers for Police (100) and Ambulance (108).
- 🎧 **Offline Audio Guides**: Web Speech API voice narrations for landmark tours.
- 🎒 **AI Packing Checklist & Eco Discovery**: Itemized packing lists and eco-certified homestays.

---

## 🚀 Tech Stack

- **Frontend**: React 19, Vite 8, Tailwind CSS v4, Leaflet Maps, Chart.js
- **Backend**: Node.js, Express 5, Open-Source SQLite 3 Database
- **Offline Sync**: Dexie.js (IndexedDB) & Service Worker PWA
- **Deployment**: Railway / Vercel ready (`railway.json`)

---

## 🛠️ Local Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start Backend Server**:
   ```bash
   npm run server
   ```

3. **Start Frontend Dev Server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:5173](http://localhost:5173)

---

## 🌐 Railway Deployment

This project includes a pre-configured `railway.json`. Simply push to GitHub and deploy on [Railway](https://railway.app):
```bash
git add .
git commit -m "Deploy YatraSathi"
git push origin main
```

---

## 📄 License
Licensed under the MIT License. Made with ❤️ for Indian Travelers.
