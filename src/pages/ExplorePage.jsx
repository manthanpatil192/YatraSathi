import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiFilter, FiMapPin, FiStar, FiCompass, FiGrid, FiMap } from 'react-icons/fi';
import { destinations, categories } from '../data/destinations';

export default function ExplorePage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  const filteredDestinations = useMemo(() => {
    return destinations
      .filter(dest => {
        const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
        const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              dest.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              dest.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'cost-low') return a.averageCostPerDay - b.averageCostPerDay;
        if (sortBy === 'cost-high') return b.averageCostPerDay - a.averageCostPerDay;
        return 0;
      });
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen pt-40 sm:pt-44 md:pt-48 pb-32 text-white relative z-10 animate-fade-in">
      
      {/* Full Viewport Screen Background Photo */}
      <img 
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80" 
        alt="Mountain Waterfall Background" 
        className="fixed inset-0 w-full h-full object-cover filter brightness-[0.22] pointer-events-none z-0" 
      />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Explore Hero Banner (Spacious Top Clearance to prevent text cut-off) */}
        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl space-y-6 mt-4 sm:mt-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <span>🏰 ALL-INDIA EXPLORE HUB</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight leading-normal">
              EXPLORE THE BEAUTY OF INDIA
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm font-medium max-w-2xl leading-relaxed">
              Browse 20 iconic destinations with real-time budget, safety ratings, 1.5-minute web audio guides, and travel highlights.
            </p>
          </div>

          {/* Category Quick Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 text-center">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">THE COASTAL</span>
              <span className="text-sm font-extrabold text-teal-300">Goa, Alleppey, Gokarna</span>
            </div>
            <div className="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 text-center">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">THE HERITAGE</span>
              <span className="text-sm font-extrabold text-amber-300">Jaipur, Udaipur, Agra</span>
            </div>
            <div className="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 text-center">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">THE MOUNTAIN</span>
              <span className="text-sm font-extrabold text-sky-300">Manali, Leh-Ladakh, Spiti</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-slate-900/90 backdrop-blur-xl p-4 sm:p-6 rounded-3xl border border-slate-700/80 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search city, state, or attraction..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-11 pr-4 py-3 text-xs font-semibold text-white outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-2xl text-xs font-heading font-extrabold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-amber-400 text-slate-950 shadow-md font-black scale-105'
                      : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort Selector */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-amber-300 rounded-2xl px-4 py-3 text-xs font-extrabold outline-none cursor-pointer w-full md:w-auto"
            >
              <option value="rating">Sort by: Top Rated ⭐</option>
              <option value="cost-low">Sort by: Price (Low to High)</option>
              <option value="cost-high">Sort by: Price (High to Low)</option>
            </select>

          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDestinations.map(dest => (
            <div
              key={dest.id}
              onClick={() => navigate(`/destination/${dest.id}`)}
              className="bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-700/80 overflow-hidden shadow-xl hover:border-amber-400/80 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="h-48 relative overflow-hidden bg-slate-950">
                <img
                  src={dest.photo || dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                
                <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-amber-300 uppercase tracking-wider border border-amber-400/40">
                  {dest.category}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-white">{dest.name}</h3>
                    <p className="text-xs text-slate-300 font-bold flex items-center gap-1">
                      <FiMapPin className="text-coral-400" /> {dest.state}
                    </p>
                  </div>

                  <div className="bg-slate-950/90 px-2.5 py-1 rounded-xl border border-slate-800 text-xs font-black text-amber-400">
                    ⭐ {dest.rating}
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-medium">
                  {dest.description}
                </p>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-black uppercase">DAILY COST</span>
                    <span className="text-amber-300 font-black">₹{dest.averageCostPerDay?.toLocaleString('en-IN')}</span>
                  </div>

                  <button className="px-3.5 py-1.5 rounded-xl bg-ocean-600 group-hover:bg-ocean-500 text-white font-extrabold text-xs transition-colors shadow-md">
                    Explore →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
