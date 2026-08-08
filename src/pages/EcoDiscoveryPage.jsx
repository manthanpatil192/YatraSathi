import React, { useState, useMemo } from 'react';
import { FiFeather, FiAward, FiVideo, FiUploadCloud, FiGift, FiStar, FiCheck, FiHeart, FiShare2, FiHome, FiVolume2, FiVolumeX, FiPlay, FiPause, FiZap, FiInstagram } from 'react-icons/fi';
import { destinations } from '../data/destinations';
import EcoBadge from '../components/EcoBadge';

// City-Specific Custom Eco Tasks Dictionary for all 20 Cities
const CITY_ECO_TASKS = {
  d1: [ // Goa
    { id: 'goa1', title: 'Participate in Baga Beach Plastic Cleanliness Drive', pts: 150, co2: 30, plastic: 25 },
    { id: 'goa2', title: 'Rent Yellow-Plate Electric E-Scooter in Panaji', pts: 100, co2: 45, plastic: 0 },
    { id: 'goa3', title: 'Stay at Certified Solar Eco Homestay in Netravali', pts: 120, co2: 60, plastic: 0 },
    { id: 'goa4', title: 'Refill Reusable Water Bottle at Beach Shacks', pts: 50, co2: 5, plastic: 15 }
  ],
  d2: [ // Manali
    { id: 'man1', title: 'Carry Thermal Insulated Water Flask on Solang Trek', pts: 80, co2: 10, plastic: 20 },
    { id: 'man2', title: 'Avoid Throwing Plastic Waste in Beas River Stream', pts: 150, co2: 25, plastic: 30 },
    { id: 'man3', title: 'Stay at Kath-Kuni Timber Eco Lodge in Naggar', pts: 120, co2: 50, plastic: 0 },
    { id: 'man4', title: 'Take Electric Volvo Bus for Solang Valley Transit', pts: 100, co2: 40, plastic: 0 }
  ],
  d3: [ // Jaipur
    { id: 'jai1', title: 'Use E-Rickshaw for Johari Bazaar Heritage Tour', pts: 90, co2: 35, plastic: 0 },
    { id: 'jai2', title: 'Refill Water at Heritage Jal Mahal RO Water Kiosk', pts: 50, co2: 5, plastic: 15 },
    { id: 'jai3', title: 'Buy Artisan Handwoven Sanganeri Block Print Cotton', pts: 110, co2: 20, plastic: 10 },
    { id: 'jai4', title: 'Dine at Heritage Organic Thali Dhaba', pts: 70, co2: 15, plastic: 5 }
  ],
  d4: [ // Munnar
    { id: 'mun1', title: 'Walk Guided Tea Plantation Trail on Foot', pts: 100, co2: 40, plastic: 0 },
    { id: 'mun2', title: 'Stay at Solar-Powered High Range Eco Homestay', pts: 130, co2: 55, plastic: 0 },
    { id: 'mun3', title: 'Avoid Plastic Wrappers in Eravikulam Sanctuary', pts: 150, co2: 20, plastic: 25 },
    { id: 'mun4', title: 'Purchase Organic Spices in Biodegradable Bags', pts: 80, co2: 10, plastic: 15 }
  ],
  d6: [ // Udaipur
    { id: 'uda1', title: 'Take Solar-Electric Boat Ride on Lake Pichola', pts: 120, co2: 50, plastic: 0 },
    { id: 'uda2', title: 'Walk Old City Heritage Alleyways on Foot', pts: 80, co2: 30, plastic: 0 },
    { id: 'uda3', title: 'Refill Water Bottle at City Palace Water Station', pts: 50, co2: 5, plastic: 15 }
  ],
  d13: [ // Srinagar
    { id: 'sri1', title: 'Take Hand-Paddled Shikara Ride on Dal Lake', pts: 110, co2: 45, plastic: 0 },
    { id: 'sri2', title: 'Stay at Eco-Certified Wooden Heritage Houseboat', pts: 140, co2: 60, plastic: 0 },
    { id: 'sri3', title: 'Support Local Kashmiri Artisan Cooperative', pts: 100, co2: 15, plastic: 10 }
  ],
  d14: [ // Agra
    { id: 'agr1', title: 'Take Battery-Operated Golf Cart to Taj Mahal Gate', pts: 90, co2: 30, plastic: 0 },
    { id: 'agr2', title: 'Refill Water Bottle at Taj East Gate Kiosk', pts: 50, co2: 5, plastic: 15 },
    { id: 'agr3', title: 'Support Heritage Marble Inlay Artisan Workshops', pts: 100, co2: 10, plastic: 5 }
  ],
  d15: [ // Delhi
    { id: 'del1', title: 'Travel via Delhi Metro Network instead of Cabs', pts: 150, co2: 80, plastic: 0 },
    { id: 'del2', title: 'Use E-Auto for Chandni Chowk Market Exploration', pts: 90, co2: 35, plastic: 0 },
    { id: 'del3', title: 'Dine at Zero-Waste Heritage Community Kitchen', pts: 80, co2: 20, plastic: 10 }
  ],
  d32: [ // Spiti Valley
    { id: 'spi1', title: 'Bring Back All Plastic Waste from Chandratal Lake', pts: 200, co2: 40, plastic: 40 },
    { id: 'spi2', title: 'Stay at Solar-Heated Mud Homestay in Komic', pts: 150, co2: 70, plastic: 0 },
    { id: 'spi3', title: 'Refill Thermos at Key Monastery Spring Kiosk', pts: 60, co2: 5, plastic: 20 }
  ],
  d12: [ // Leh-Ladakh
    { id: 'lad1', title: 'Refill Water Bottle at RO Water Hubs in Leh Market', pts: 80, co2: 10, plastic: 25 },
    { id: 'lad2', title: 'Stay at Passive Solar Heated Ladakhi Homestay', pts: 150, co2: 75, plastic: 0 },
    { id: 'lad3', title: 'Dispose Trash Responsibly in Nubra Sand Dunes', pts: 180, co2: 30, plastic: 30 }
  ]
};

export default function EcoDiscoveryPage() {
  const [selectedCityId, setSelectedCityId] = useState('d1');
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [userScore, setUserScore] = useState(650);
  const [co2SavedKg, setCo2SavedKg] = useState(180);
  const [plasticSavedCount, setPlasticSavedCount] = useState(35);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [uploadedSuccess, setUploadedSuccess] = useState(false);
  const [completedTaskIds, setCompletedTaskIds] = useState(new Set(['goa1', 'goa2']));

  // Working Native Instagram Reels Embed
  const ecoReels = [
    {
      id: 1,
      title: 'Goa Coastal Vibe & Sunset',
      author: '@goadiaries',
      likes: '24.8K',
      embedUrl: 'https://www.instagram.com/reel/C57VnKxS_P2/embed/',
      tag: '🏖️ Coastal Vibe',
      desc: 'Exploring quiet sunset cliffs and hidden beach trails of South Goa.'
    },
    {
      id: 2,
      title: 'Himachal & Manali Peaks',
      author: '@himalayan_wanderer',
      likes: '18.4K',
      embedUrl: 'https://www.instagram.com/reel/C7tB62VpP9K/embed/',
      tag: '🏔️ Mountain Escape',
      desc: 'Snow covered pass viewpoints and fresh pine valley streams.'
    },
    {
      id: 3,
      title: 'Spiti Valley Cold Desert Adventure',
      author: '@spiti_diaries',
      likes: '31.2K',
      embedUrl: 'https://www.instagram.com/reel/C-nSw_KSLmI/embed/',
      tag: '🏜️ High Altitude Desert',
      desc: 'Key Monastery perched majestically on the cliffs of Spiti.'
    }
  ];

  // Dynamic City-Specific Eco Tasks
  const currentCityTasks = useMemo(() => {
    return CITY_ECO_TASKS[selectedCityId] || [
      { id: `${selectedCityId}_1`, title: 'Refill Reusable Water Bottle at Local Certified RO Hubs', pts: 50, co2: 5, plastic: 15 },
      { id: `${selectedCityId}_2`, title: 'Stay at Local Certified Solar Homestay', pts: 100, co2: 45, plastic: 0 },
      { id: `${selectedCityId}_3`, title: 'Use Public Transit / E-Rickshaw for City Exploration', pts: 80, co2: 25, plastic: 0 },
      { id: `${selectedCityId}_4`, title: 'Dine at Heritage Organic Farm-to-Table Eatery', pts: 70, co2: 15, plastic: 5 }
    ];
  }, [selectedCityId]);

  const selectedCityObj = destinations.find(d => String(d.id) === String(selectedCityId)) || destinations[0];

  const scoreboardPerks = [
    { points: 500, offer: '25% OFF Eco-Homestays in Munnar & Goa', unlocked: userScore >= 500, code: 'ECO25STAY' },
    { points: 800, offer: 'Free Organic Breakfast & Herbal Tea at 15+ Destinations', unlocked: userScore >= 800, code: 'FREEBIOBREAKFAST' },
    { points: 1200, offer: 'FLAT ₹1,500 Hotel Cashback Voucher All India', unlocked: userScore >= 1200, code: 'YATRAVIPECO' }
  ];

  const toggleTask = (task) => {
    const isDone = completedTaskIds.has(task.id);
    const updated = new Set(completedTaskIds);

    if (isDone) {
      updated.delete(task.id);
      setUserScore(s => Math.max(0, s - task.pts));
      setCo2SavedKg(c => Math.max(0, c - task.co2));
      setPlasticSavedCount(p => Math.max(0, p - task.plastic));
    } else {
      updated.add(task.id);
      setUserScore(s => s + task.pts);
      setCo2SavedKg(c => c + task.co2);
      setPlasticSavedCount(p => p + task.plastic);
    }
    setCompletedTaskIds(updated);
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    setUploadedSuccess(true);
    setUserScore(prev => prev + 150);
    setCo2SavedKg(prev => prev + 25);
    setTimeout(() => {
      setUploadedSuccess(false);
      setUploadModalOpen(false);
    }, 1800);
  };

  return (
    <div className="min-h-screen pb-32 text-white relative z-10 animate-fade-in">
      
      {/* Bulletproof Top Spacer to prevent header text cut-off */}
      <div className="h-28 sm:h-32"></div>

      {/* Full Viewport Screen Background Photo */}
      <img 
        src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80" 
        alt="Emerald Forest Background" 
        className="fixed inset-0 w-full h-full object-cover filter brightness-[0.22] pointer-events-none z-0" 
      />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Header Hero Banner */}
        <div className="bg-slate-900/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-4 sm:mt-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
              <span>🌿 SUSTAINABLE TOURISM & REWARDS HUB</span>
            </div>

            {/* Title with zero cut-off */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-normal tracking-tight pt-2">
              Discover Responsibly & Earn Hotel Offers
            </h1>

            <p className="text-slate-200 text-xs sm:text-sm font-medium max-w-2xl leading-relaxed">
              Track carbon footprint savings, complete city-specific eco tasks, watch Instagram video reels of hidden gems, and unlock exclusive hotel discounts across India!
            </p>
          </div>

          <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-xl shadow-md">
              🏆
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">YOUR ECO SCORE</span>
              <div className="text-2xl font-heading font-black text-amber-300">{userScore} PTS</div>
              <span className="text-[10px] text-emerald-400 font-bold">VIP Green Explorer</span>
            </div>
          </div>
        </div>

        {/* Real-Time Carbon Footprint & Savings Dashboard */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/80 shadow-xl space-y-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">CO2 Emissions Saved</span>
            <div className="text-3xl font-heading font-black text-emerald-400">{co2SavedKg} kg</div>
            <span className="text-xs text-slate-300">Equivalent to planting {Math.round(co2SavedKg / 10)} trees 🌱</span>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/80 shadow-xl space-y-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Single-Use Plastic Prevented</span>
            <div className="text-3xl font-heading font-black text-sky-300">{plasticSavedCount} Bottles</div>
            <span className="text-xs text-slate-300">Stainless refill bottle habit 🍶</span>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/80 shadow-xl space-y-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Sustainable Badge Status</span>
            <div className="text-2xl font-heading font-black text-amber-300">Gold Eco Pioneer 🥇</div>
            <span className="text-xs text-slate-300">Top 5% eco traveler ranking</span>
          </div>
        </div>

        {/* Dynamic City Selector & Eco Tasks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* INSTAGRAM REELS EMBED PLAYER (Left 6 Cols) */}
          <div className="lg:col-span-6 bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/80 shadow-xl space-y-4 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h2 className="font-heading font-extrabold text-lg text-white flex items-center gap-2">
                <FiInstagram className="text-rose-400" /> Instagram Travel Reels
              </h2>
              <button
                onClick={() => setUploadModalOpen(true)}
                className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-xs flex items-center gap-1 shadow-md transition-colors"
              >
                <FiUploadCloud /> Upload Reel (+150 Pts)
              </button>
            </div>

            {/* WORKING OFFICIAL INSTAGRAM REELS EMBED */}
            <div className="relative rounded-2xl overflow-hidden h-96 border border-slate-800 shadow-2xl bg-slate-950 flex items-center justify-center">
              <iframe 
                key={ecoReels[activeReelIndex].id}
                src={ecoReels[activeReelIndex].embedUrl}
                className="w-full h-full border-0"
                allowtransparency="true"
                allow="encrypted-media"
                scrolling="no"
                frameBorder="0"
                title={ecoReels[activeReelIndex].title}
              ></iframe>
            </div>

            {/* Reel Selector Buttons */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              {ecoReels.map((reel, idx) => (
                <button
                  key={reel.id}
                  onClick={() => setActiveReelIndex(idx)}
                  className={`p-2.5 rounded-xl border text-left text-[10px] font-bold transition-all flex items-center gap-1 ${
                    activeReelIndex === idx ? 'bg-amber-400 text-slate-950 border-amber-400 font-black' : 'bg-slate-950 text-slate-300 border-slate-800'
                  }`}
                >
                  <span>🎥</span>
                  <span className="truncate">Reel {idx + 1}: {reel.author}</span>
                </button>
              ))}
            </div>
          </div>

          {/* DYNAMIC CITY ECO TASKS & HOTEL DISCOUNTS HUB (Right 6 Cols) */}
          <div className="lg:col-span-6 bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-xl space-y-6">
            
            {/* City Selector Dropdown for Dynamic Tasks */}
            <div className="space-y-4">
              <div className="border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-white flex items-center gap-2">
                    <FiZap className="text-amber-400" /> Daily Eco Tasks by City
                  </h3>
                  <p className="text-xs text-slate-400">Select destination to view custom local eco challenges</p>
                </div>

                <select
                  value={selectedCityId}
                  onChange={(e) => setSelectedCityId(e.target.value)}
                  className="bg-slate-950 border border-slate-700 text-amber-300 rounded-2xl px-3.5 py-2 text-xs font-extrabold outline-none cursor-pointer"
                >
                  {destinations.map(d => (
                    <option key={d.id} value={d.id}>📍 {d.name} ({d.state})</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2.5">
                {currentCityTasks.map((task) => {
                  const isDone = completedTaskIds.has(task.id);
                  return (
                    <div
                      key={task.id}
                      onClick={() => toggleTask(task)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isDone ? 'bg-slate-950 border-emerald-500/50 text-emerald-300' : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border font-bold text-xs ${
                          isDone ? 'bg-emerald-400 border-emerald-400 text-slate-950' : 'border-slate-700'
                        }`}>
                          {isDone && <FiCheck />}
                        </div>
                        <span className="text-xs font-bold">{task.title}</span>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] font-black shrink-0">
                        <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded">+{task.pts} Pts</span>
                        {task.co2 > 0 && <span className="bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded">-{task.co2}kg CO2</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Scoreboard Hotel Discounts */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h3 className="font-heading font-extrabold text-lg text-white flex items-center gap-2">
                <FiGift className="text-amber-400" /> Unlocked Hotel Perks & Discounts
              </h3>

              <div className="space-y-3">
                {scoreboardPerks.map((perk, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
                      perk.unlocked ? 'bg-slate-950 border-emerald-400/50 shadow-md' : 'bg-slate-950/60 border-slate-800 opacity-60'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-black text-amber-300 uppercase">{perk.points} PTS LEVEL</span>
                      <h4 className="font-extrabold text-xs text-white">{perk.offer}</h4>
                    </div>

                    {perk.unlocked ? (
                      <div className="px-3 py-1 bg-emerald-400/20 text-emerald-300 font-mono font-black text-xs rounded-xl border border-emerald-400/40">
                        {perk.code}
                      </div>
                    ) : (
                      <span className="text-[10px] font-bold text-slate-400">Need {perk.points - userScore} pts</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Upload Reel Modal */}
        {uploadModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <div className="bg-slate-900 border border-slate-700 p-6 rounded-3xl max-w-md w-full space-y-4">
              <h3 className="text-xl font-heading font-extrabold text-white">Upload Hidden Gem Instagram Reel</h3>
              <p className="text-xs text-slate-300">Paste your Instagram Reel link to earn +150 Eco Scoreboard points & reduce CO2!</p>
              
              <form onSubmit={handleUploadSubmit} className="space-y-3">
                <input
                  type="url"
                  required
                  placeholder="https://www.instagram.com/reel/..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Your Instagram Handle (@username)..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-amber-400 text-slate-950 font-black rounded-xl text-xs uppercase"
                >
                  {uploadedSuccess ? 'Uploaded & +150 Pts Added! 🎉' : 'Publish Reel & Claim Points'}
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
