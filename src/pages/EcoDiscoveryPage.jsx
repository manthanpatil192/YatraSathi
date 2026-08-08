import React, { useState } from 'react';
import { FiFeather, FiAward, FiVideo, FiUploadCloud, FiGift, FiStar, FiCheck, FiHeart, FiShare2, FiHome, FiVolume2, FiVolumeX, FiPlay, FiPause, FiZap } from 'react-icons/fi';
import EcoBadge from '../components/EcoBadge';

export default function EcoDiscoveryPage() {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [userScore, setUserScore] = useState(650);
  const [co2SavedKg, setCo2SavedKg] = useState(180);
  const [plasticSavedCount, setPlasticSavedCount] = useState(35);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [uploadedSuccess, setUploadedSuccess] = useState(false);

  // Real working HTML5 Travel Video Reels
  const ecoReels = [
    {
      id: 1,
      title: 'Mawlynnong - Cleanest Village in Asia',
      author: '@ananya_travels',
      likes: '12.4K',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4',
      tag: '🌿 Zero Waste Village',
      desc: 'Walking past bamboo dustbins and living root bridges in Meghalaya!'
    },
    {
      id: 2,
      title: 'Spiti Valley High Altitude Valley',
      author: '@rohit_mountains',
      likes: '9.8K',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-mountain-valley-41537-large.mp4',
      tag: '☀️ Solar Powered',
      desc: 'Experience 100% solar-heated mud homestays in Komic valley!'
    },
    {
      id: 3,
      title: 'Majuli River Island Sunset',
      author: '@priya_heritage',
      likes: '15.1K',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sun-setting-over-the-ocean-1128-large.mp4',
      tag: '🎨 Heritage Craft',
      desc: 'Handmade river mud pottery with Mishing tribal elders.'
    }
  ];

  const [ecoTasks, setEcoTasks] = useState([
    { id: 't1', title: 'Take Vande Bharat / IRCTC Train instead of flight', pts: 150, co2: 120, plastic: 0, done: true },
    { id: 't2', title: 'Stay at Certified Solar Eco Homestay', pts: 100, co2: 45, plastic: 0, done: true },
    { id: 't3', title: 'Carry Reusable Stainless Steel Water Bottle', pts: 50, co2: 5, plastic: 20, done: true },
    { id: 't4', title: 'Rent Eco Bicycle / EV Auto for City Transit', pts: 80, co2: 15, plastic: 0, done: false },
    { id: 't5', title: 'Participate in Local Beach/Hill Cleanliness Drive', pts: 200, co2: 30, plastic: 15, done: false }
  ]);

  const scoreboardPerks = [
    { points: 500, offer: '25% OFF Eco-Homestays in Munnar & Goa', unlocked: userScore >= 500, code: 'ECO25STAY' },
    { points: 800, offer: 'Free Organic Breakfast & Herbal Tea at 15+ Destinations', unlocked: userScore >= 800, code: 'FREEBIOBREAKFAST' },
    { points: 1200, offer: 'FLAT ₹1,500 Hotel Cashback Voucher All India', unlocked: userScore >= 1200, code: 'YATRAVIPECO' }
  ];

  const toggleTask = (taskId) => {
    setEcoTasks(prev => prev.map(task => {
      if (task.id === taskId) {
        const nextDone = !task.done;
        if (nextDone) {
          setUserScore(s => s + task.pts);
          setCo2SavedKg(c => c + task.co2);
          setPlasticSavedCount(p => p + task.plastic);
        } else {
          setUserScore(s => Math.max(0, s - task.pts));
          setCo2SavedKg(c => Math.max(0, c - task.co2));
          setPlasticSavedCount(p => Math.max(0, p - task.plastic));
        }
        return { ...task, done: nextDone };
      }
      return task;
    }));
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
    <div className="min-h-screen pt-36 sm:pt-40 pb-32 text-white relative z-10 animate-fade-in">
      
      {/* Full Viewport Screen Background Photo */}
      <img 
        src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80" 
        alt="Emerald Forest Background" 
        className="fixed inset-0 w-full h-full object-cover filter brightness-[0.22] pointer-events-none z-0" 
      />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Header Hero Banner (Fixed Top Alignment for Zero Navbar Overlap) */}
        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-4 sm:mt-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
              <span>🌿 SUSTAINABLE TOURISM & REWARDS HUB</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
              Discover Responsibly & Earn Hotel Offers
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm font-medium max-w-2xl">
              Track carbon footprint savings, complete eco travel tasks, watch real video reels of hidden gems, and unlock exclusive hotel discounts across India!
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

        {/* Short Reels Section & Tasks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* REAL WORKING HTML5 VIDEO REELS PLAYER (Left 6 Cols) */}
          <div className="lg:col-span-6 bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/80 shadow-xl space-y-4 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h2 className="font-heading font-extrabold text-lg text-white flex items-center gap-2">
                <FiVideo className="text-coral-400" /> Working Hidden Gem Video Reels
              </h2>
              <button
                onClick={() => setUploadModalOpen(true)}
                className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-xs flex items-center gap-1 shadow-md transition-colors"
              >
                <FiUploadCloud /> Upload Reel (+150 Pts)
              </button>
            </div>

            {/* REAL HTML5 VIDEO PLAYER */}
            <div className="relative rounded-2xl overflow-hidden h-80 border border-slate-800 shadow-2xl bg-black group">
              <video 
                key={ecoReels[activeReelIndex].id}
                src={ecoReels[activeReelIndex].videoUrl} 
                autoPlay={isPlaying}
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>

              {/* Video Overlay Controls */}
              <div className="absolute top-3 right-3 flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 bg-slate-950/80 hover:bg-slate-900 text-amber-300 rounded-full border border-slate-700 backdrop-blur"
                >
                  {isMuted ? <FiVolumeX size={14} /> : <FiVolume2 size={14} />}
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 bg-slate-950/80 hover:bg-slate-900 text-white rounded-full border border-slate-700 backdrop-blur"
                >
                  {isPlaying ? <FiPause size={14} /> : <FiPlay size={14} />}
                </button>
              </div>

              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-emerald-300 border border-emerald-400/30">
                {ecoReels[activeReelIndex].tag}
              </div>

              <div className="absolute bottom-3 left-3 right-3 space-y-1">
                <div className="flex items-center justify-between text-xs text-white">
                  <span className="font-extrabold">{ecoReels[activeReelIndex].title}</span>
                  <span className="text-rose-400 font-bold flex items-center gap-1">❤️ {ecoReels[activeReelIndex].likes}</span>
                </div>
                <p className="text-[11px] text-slate-300">{ecoReels[activeReelIndex].desc}</p>
                <span className="text-[10px] text-amber-300 font-bold block">{ecoReels[activeReelIndex].author}</span>
              </div>
            </div>

            {/* Reel Selector Buttons */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              {ecoReels.map((reel, idx) => (
                <button
                  key={reel.id}
                  onClick={() => setActiveReelIndex(idx)}
                  className={`p-2.5 rounded-xl border text-left text-[10px] font-bold transition-all ${
                    activeReelIndex === idx ? 'bg-amber-400 text-slate-950 border-amber-400 font-black' : 'bg-slate-950 text-slate-300 border-slate-800'
                  }`}
                >
                  ▶️ Reel {idx + 1}: {reel.author}
                </button>
              ))}
            </div>
          </div>

          {/* DAILY ECO TASKS & DISCOUNTS HUB (Right 6 Cols) */}
          <div className="lg:col-span-6 bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-xl space-y-6">
            
            {/* Daily Tasks */}
            <div className="space-y-4">
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-white flex items-center gap-2">
                    <FiZap className="text-amber-400" /> Daily Eco Travel Tasks
                  </h3>
                  <p className="text-xs text-slate-400">Complete tasks to earn points & reduce CO2</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {ecoTasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      task.done ? 'bg-slate-950 border-emerald-500/50 text-emerald-300' : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border font-bold text-xs ${
                        task.done ? 'bg-emerald-400 border-emerald-400 text-slate-950' : 'border-slate-700'
                      }`}>
                        {task.done && <FiCheck />}
                      </div>
                      <span className="text-xs font-bold">{task.title}</span>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-black shrink-0">
                      <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded">+{task.pts} Pts</span>
                      {task.co2 > 0 && <span className="bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded">-{task.co2}kg CO2</span>}
                    </div>
                  </div>
                ))}
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
              <h3 className="text-xl font-heading font-extrabold text-white">Upload Hidden Gem Short Reel</h3>
              <p className="text-xs text-slate-300">Share your eco-discovery video story to earn +150 Eco Scoreboard points & reduce CO2!</p>
              
              <form onSubmit={handleUploadSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Reel Title (e.g. Hidden Waterfall in Coorg)..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Your Instagram / Handle..."
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
