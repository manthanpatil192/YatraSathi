import React, { useState } from 'react';
import { FiFeather, FiAward, FiVideo, FiUploadCloud, FiGift, FiStar, FiCheck, FiHeart, FiShare2, FiHome } from 'react-icons/fi';
import EcoBadge from '../components/EcoBadge';

export default function EcoDiscoveryPage() {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [userScore, setUserScore] = useState(650);
  const [uploadedSuccess, setUploadedSuccess] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  const ecoReels = [
    {
      id: 1,
      title: 'Mawlynnong - Cleanest Village in Asia',
      author: '@ananya_travels',
      likes: '12.4K',
      videoBg: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
      tag: '🌿 Zero Waste Village',
      desc: 'Walking past bamboo dustbins and root bridges in Meghalaya!'
    },
    {
      id: 2,
      title: 'Spiti Valley Solar Monastery',
      author: '@rohit_mountains',
      likes: '9.8K',
      videoBg: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80',
      tag: '☀️ Solar Powered',
      desc: 'Experience 100% solar-heated mud homestays in Komic!'
    },
    {
      id: 3,
      title: 'Majuli Island Clay Pottery',
      author: '@priya_heritage',
      likes: '15.1K',
      videoBg: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=600&q=80',
      tag: '🎨 Heritage Craft',
      desc: 'Handmade river mud pottery with Mishing tribal elders.'
    }
  ];

  const scoreboardPerks = [
    { points: 500, offer: '25% OFF Eco-Homestays in Munnar & Goa', unlocked: true, code: 'ECO25STAY' },
    { points: 800, offer: 'Free Organic Breakfast & Herbal Tea at 15+ Destinations', unlocked: false, code: 'FREEBIOBREAKFAST' },
    { points: 1200, offer: 'FLAT ₹1,500 Hotel Cashback Voucher All India', unlocked: false, code: 'YATRAVIPECO' }
  ];

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    setUploadedSuccess(true);
    setUserScore(prev => prev + 150);
    setTimeout(() => {
      setUploadedSuccess(false);
      setUploadModalOpen(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-32 sm:pt-36 pb-32 text-white relative z-10 animate-fade-in">
      
      {/* Full Viewport Screen Background Photo */}
      <img 
        src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80" 
        alt="Emerald Forest Background" 
        className="fixed inset-0 w-full h-full object-cover filter brightness-[0.22] pointer-events-none z-0" 
      />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Header Hero Banner (Fixed Top Alignment for Zero Navbar Overlap) */}
        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
              <span>🌿 SUSTAINABLE TOURISM & REWARDS HUB</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
              Discover Responsibly & Earn Hotel Offers
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm font-medium max-w-2xl">
              Explore offbeat eco-homestays, watch reel stories of hidden gems, and level up your Eco Scoreboard to unlock exclusive hotel discounts across India!
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

        {/* Short Reels Section & Scoreboard Discounts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Reel Short Video Stories (Left 5 Cols) */}
          <div className="lg:col-span-5 bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/80 shadow-xl space-y-4 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h2 className="font-heading font-extrabold text-lg text-white flex items-center gap-2">
                <FiVideo className="text-coral-400" /> Hidden Gem Short Reels
              </h2>
              <button
                onClick={() => setUploadModalOpen(true)}
                className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-xs flex items-center gap-1 shadow-md transition-colors"
              >
                <FiUploadCloud /> Upload Reel (+150 Pts)
              </button>
            </div>

            {/* Active Reel Preview Container */}
            <div className="relative rounded-2xl overflow-hidden h-80 border border-slate-800 group shadow-2xl">
              <img 
                src={ecoReels[activeReelIndex].videoBg} 
                alt="Reel Background" 
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

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

            {/* Reel Selection Thumbnails */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              {ecoReels.map((reel, idx) => (
                <button
                  key={reel.id}
                  onClick={() => setActiveReelIndex(idx)}
                  className={`p-2 rounded-xl border text-left text-[10px] font-bold transition-all ${
                    activeReelIndex === idx ? 'bg-amber-400 text-slate-950 border-amber-400' : 'bg-slate-950 text-slate-300 border-slate-800'
                  }`}
                >
                  Reel {idx + 1}: {reel.author}
                </button>
              ))}
            </div>
          </div>

          {/* Eco Scoreboard & Hotel Discounts Unlocked (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="font-heading font-extrabold text-xl text-white flex items-center gap-2">
                <FiGift className="text-amber-400" /> Eco Scoreboard & Unlocked Hotel Offers
              </h2>
              <p className="text-xs text-slate-400">Perform sustainable travel challenges & upload hidden reels to redeem hotel discounts!</p>
            </div>

            <div className="space-y-4">
              {scoreboardPerks.map((perk, idx) => {
                const isUnlocked = userScore >= perk.points;
                return (
                  <div 
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                      isUnlocked ? 'bg-slate-950 border-emerald-400/50 shadow-md' : 'bg-slate-950/60 border-slate-800 opacity-60'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-amber-300 bg-amber-950 px-2.5 py-0.5 rounded border border-amber-800">
                          {perk.points} PTS REQUIRED
                        </span>
                        {isUnlocked && <span className="text-[10px] font-black text-emerald-400 uppercase">UNLOCKED 🔓</span>}
                      </div>
                      <h4 className="font-extrabold text-sm text-white">{perk.offer}</h4>
                    </div>

                    {isUnlocked ? (
                      <div className="px-4 py-2 bg-emerald-400/20 text-emerald-300 font-mono font-black text-xs rounded-xl border border-emerald-400/40">
                        Voucher: {perk.code}
                      </div>
                    ) : (
                      <span className="text-xs font-bold text-slate-400">Need {perk.points - userScore} more pts</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Upload Reel Modal */}
        {uploadModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <div className="bg-slate-900 border border-slate-700 p-6 rounded-3xl max-w-md w-full space-y-4">
              <h3 className="text-xl font-heading font-extrabold text-white">Upload Hidden Gem Short Reel</h3>
              <p className="text-xs text-slate-300">Share your eco-discovery video story to earn +150 Eco Scoreboard points!</p>
              
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
