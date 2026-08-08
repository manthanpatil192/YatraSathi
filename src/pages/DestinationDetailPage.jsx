import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiStar, FiMapPin, FiClock, FiDollarSign, FiShield, FiVolume2, FiVolumeX, FiCheck, FiArrowRight, FiInfo, FiCompass, FiCalendar, FiBriefcase } from 'react-icons/fi';
import { apiService } from '../services/api';
import AudioGuide from '../components/AudioGuide';

export default function DestinationDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    apiService.getDestinationById(id).then(data => {
      if (isMounted) {
        setDestination(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-44 sm:pt-48 pb-32 flex flex-col items-center justify-center text-white">
        <div className="w-12 h-12 border-4 border-slate-700 border-t-amber-400 rounded-full animate-spin mb-4"></div>
        <p className="font-extrabold text-amber-300 animate-pulse">Loading destination details...</p>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen pt-44 sm:pt-48 pb-32 flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-2xl font-heading font-extrabold mb-4">Destination Not Found</h2>
        <button onClick={() => navigate('/explore')} className="px-6 py-3 bg-ocean-600 rounded-2xl font-bold text-xs">
          Return to Explore
        </button>
      </div>
    );
  }

  const cost = destination.averageCostPerDay || 2500;
  const photoUrl = destination.photo || destination.image || 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80';

  return (
    <div className="min-h-screen pt-44 sm:pt-48 lg:pt-52 pb-32 text-white relative z-10 animate-fade-in">
      
      {/* Full Viewport Background Photo */}
      <img 
        src={photoUrl} 
        alt={destination.name} 
        className="fixed inset-0 w-full h-full object-cover filter brightness-[0.22] pointer-events-none z-0" 
      />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Destination Hero Banner (Fixed Spacious Top Clearance for zero navbar text cut-off) */}
        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl space-y-6 mt-4 sm:mt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-800 pb-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-amber-400 text-slate-950 text-xs font-black rounded-full uppercase tracking-wider">
                  {destination.category}
                </span>
                <span className="text-amber-300 font-extrabold text-sm flex items-center gap-1 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                  ⭐ {destination.rating} Rating
                </span>
              </div>

              {/* Title with generous leading and zero cut-off */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white leading-normal tracking-tight">
                {destination.name}
              </h1>

              <p className="text-slate-300 text-xs sm:text-sm font-bold flex items-center gap-1.5">
                <FiMapPin className="text-coral-400" />
                <span>{destination.state}, India</span>
              </p>
            </div>

            <button
              onClick={() => navigate(`/itinerary?add=${destination.id}`)}
              className="btn-bounce px-8 py-4 rounded-2xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-heading font-extrabold text-sm shadow-xl flex items-center gap-2 shrink-0"
            >
              <span>+ Add to Itinerary Plan</span>
              <FiArrowRight />
            </button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">AVG DAILY COST</span>
              <span className="text-xl sm:text-2xl font-heading font-black text-amber-300 block">₹{cost.toLocaleString('en-IN')}</span>
              <span className="text-[10px] text-slate-400 font-medium">Per traveler rate</span>
            </div>

            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">SAFETY STATUS</span>
              <span className="text-xl sm:text-2xl font-heading font-black text-emerald-400 block">{destination.safetyRating || 'Very Safe'}</span>
              <span className="text-[10px] text-slate-400 font-medium">Verified status</span>
            </div>

            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">BEST SEASON</span>
              <span className="text-xl sm:text-2xl font-heading font-black text-sky-300 block">{destination.bestSeason || 'Oct-Mar'}</span>
              <span className="text-[10px] text-slate-400 font-medium">Optimal climate</span>
            </div>

            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">ANNUAL VISITORS</span>
              <span className="text-xl sm:text-2xl font-heading font-black text-teal-300 block">{destination.visitors || '300K+'}</span>
              <span className="text-[10px] text-slate-400 font-medium">Domestic footfall</span>
            </div>

          </div>
        </div>

        {/* Audio Guide Component */}
        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl">
          <AudioGuide text={destination.audioGuideText} title={`${destination.name} 1.5-Min Audio Narration`} />
        </div>

        {/* High-Contrast Tab Navigation & Content Expansion */}
        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl space-y-6">
          
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide border-b border-slate-800 pb-4">
            {[
              { id: 'overview', label: '📌 Overview & Attractions' },
              { id: 'history', label: '📜 Full History & Heritage' },
              { id: 'food', label: '🎭 Food & Culture' },
              { id: 'reach', label: '🚌 How to Reach' },
              { id: 'offbeat', label: '💎 Offbeat Spots & Safety' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-2xl font-heading font-extrabold text-xs whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-amber-400 text-slate-950 shadow-md font-black scale-105'
                    : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6 text-slate-200 text-sm leading-relaxed">
              <p className="text-base leading-relaxed font-medium">{destination.description}</p>

              <div className="space-y-3">
                <h3 className="font-heading font-extrabold text-lg text-white">Iconic Attractions & Landmarks</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {destination.travelDestinationsInCity?.map((place, idx) => (
                    <div key={idx} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
                      <h4 className="font-extrabold text-amber-300 text-sm">📍 {place.name}</h4>
                      <p className="text-xs text-slate-300">{place.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Full History */}
          {activeTab === 'history' && (
            <div className="space-y-4 text-slate-200 text-sm leading-relaxed">
              <h3 className="font-heading font-extrabold text-xl text-amber-300">Historical Origin & Heritage Legacy</h3>
              <p className="whitespace-pre-line leading-relaxed font-medium">{destination.fullHistory || destination.description}</p>
            </div>
          )}

          {/* Tab 3: Food & Culture */}
          {activeTab === 'food' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-xl text-amber-300">Cultural Identity & Traditions</h3>
                <p className="text-sm text-slate-200 leading-relaxed font-medium">{destination.culturalInfo}</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading font-extrabold text-lg text-white">Famous Regional Culinary Specialties</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {destination.foodSpecialties?.map((food, idx) => (
                    <div key={idx} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
                      <h4 className="font-extrabold text-teal-300 text-sm">🍲 {food.name}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{food.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: How to Reach */}
          {activeTab === 'reach' && (
            <div className="space-y-4 text-slate-200 text-sm leading-relaxed">
              <h3 className="font-heading font-extrabold text-xl text-amber-300">Transportation & Step-by-Step Transit Guide</h3>
              <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 font-mono text-xs whitespace-pre-line leading-relaxed text-slate-200">
                {destination.howToReachDetails || destination.gettingThere}
              </div>
            </div>
          )}

          {/* Tab 5: Offbeat Spots & Safety */}
          {activeTab === 'offbeat' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-heading font-extrabold text-lg text-amber-300">Hidden Secret Offbeat Spots</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {destination.hiddenGems?.map((gem, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-950 border border-slate-800 rounded-2xl text-xs font-extrabold text-amber-200 flex items-center gap-2">
                      <span>💎</span> {gem}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading font-extrabold text-lg text-white">Tourist Safety Rules & Advisory</h3>
                <div className="space-y-2">
                  {destination.safetyTips?.map((tip, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                      <span className="text-emerald-400">🛡️</span> {tip}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
