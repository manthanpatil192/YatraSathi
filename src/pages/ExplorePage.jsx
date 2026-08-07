import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiGrid, FiMap, FiFilter } from 'react-icons/fi';
import DestinationCard from '../components/cards/DestinationCard';
import IndiaMap from '../components/map/IndiaMap';
import { apiService } from '../services/api';
import { categories, regions } from '../data/destinations';

export default function ExplorePage() {
  const [destinationsList, setDestinationsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeRegion, setActiveRegion] = useState('All Regions');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'map'

  useEffect(() => {
    let isMounted = true;
    apiService.getDestinations().then(data => {
      if (isMounted) {
        setDestinationsList(data || []);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  const categoryIcons = {
    'All': '🌍',
    'Beaches': '🏖️',
    'Mountains': '🏔️',
    'Heritage': '🏰',
    'Nature': '🌿',
    'Adventure': '🪂'
  };

  const filteredDests = destinationsList.filter(d => {
    const matchesCategory = activeCategory === 'All' || d.category?.toLowerCase() === activeCategory.toLowerCase();
    const matchesRegion = activeRegion === 'All Regions' || d.region === activeRegion;
    const matchesSearch = searchQuery === '' || 
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      d.state.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesRegion && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-32 animate-fade-in">
      
      {/* Hero Header & Indian Monuments Collage Banner */}
      <div className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-b-[3rem] shadow-2xl bg-slate-950">
        
        {/* Background Image of Famous Indian Monuments Altogether */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/indian_monuments_hero.png" 
            alt="Famous Indian Monuments (Taj Mahal, Hawa Mahal, Golden Temple, Gateway of India)" 
            className="w-full h-full object-cover object-center opacity-85 transform scale-105"
          />
          {/* Dark gradient overlay for ultra-crisp high-contrast text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/60 backdrop-brightness-75"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-4">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 border border-amber-400/40 text-xs font-black uppercase tracking-wider shadow-lg">
            <span>🇮🇳 28 STATES & 8 UTS COVERED</span>
          </div>

          {/* Banner Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] leading-tight">
            Explore All India Destinations
          </h1>

          {/* Subtitle */}
          <p className="text-slate-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] bg-slate-950/40 backdrop-blur-sm p-3 rounded-2xl border border-white/10">
            Browse multi-city travel destinations across North, South, East, West, North-East, and Islands with city photos & interactive Google-style map views.
          </p>

          {/* Search Bar Overlay */}
          <div className="pt-3 max-w-2xl mx-auto">
            <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-2xl p-2 flex items-center shadow-2xl ring-2 ring-black/20">
              <FiSearch className="text-slate-500 text-xl ml-3 shrink-0" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by destination name, state (e.g. Goa, Ladakh, Kerala, Jaipur)..."
                className="w-full bg-transparent text-slate-900 placeholder-slate-500 px-4 py-2.5 outline-none font-bold text-sm sm:text-base"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-xs text-slate-500 hover:text-slate-800 font-black px-2">
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 space-y-8 mb-20">
        
        {/* Controls Bar: Category Pills + Region Filter + View Switcher */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-100 space-y-4">
          
          {/* Top Row: View Mode Switcher + Region Dropdown */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
            
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <FiFilter /> Filter Region:
              </span>
              <select
                value={activeRegion}
                onChange={(e) => setActiveRegion(e.target.value)}
                className="bg-slate-100 text-slate-800 font-extrabold text-xs px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none cursor-pointer"
              >
                {regions.map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            {/* View Mode Switcher Toggle */}
            <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-heading font-extrabold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-ocean-500 text-white shadow-md'
                    : 'text-slate-700 hover:text-ocean-700'
                }`}
              >
                <FiGrid />
                <span>Grid View 📱</span>
              </button>

              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-heading font-extrabold transition-all ${
                  viewMode === 'map'
                    ? 'bg-ocean-500 text-white shadow-md'
                    : 'text-slate-700 hover:text-ocean-700'
                }`}
              >
                <FiMap />
                <span>Interactive India Map 🗺️</span>
              </button>
            </div>

          </div>

          {/* Bottom Row: Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-800 text-white shadow-md scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{categoryIcons[cat] || '📍'}</span>
                <span>{cat}</span>
              </button>
            ))}
          </div>

        </div>

        {/* View Content Display */}
        {viewMode === 'map' ? (
          <div className="space-y-4">
            <IndiaMap />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center text-xs font-bold text-slate-500">
              <span>Showing {filteredDests.length} city destinations across India</span>
              <span>Sorted by Rating</span>
            </div>

            {loading ? (
              <div className="py-24 text-center">
                <div className="w-10 h-10 border-4 border-ocean-200 border-t-ocean-600 rounded-full animate-spin mx-auto mb-3"></div>
                <p className="text-slate-600 font-bold text-sm">Loading city photos...</p>
              </div>
            ) : filteredDests.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDests.map((dest) => (
                  <DestinationCard key={dest.id} destination={dest} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm max-w-lg mx-auto">
                <span className="text-4xl block mb-3">🏜️</span>
                <h3 className="font-heading font-extrabold text-xl text-slate-800 mb-1">No destinations match your search</h3>
                <p className="text-slate-500 text-xs mb-6">Try clearing your search query or switching regions.</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActiveRegion('All Regions'); setSearchQuery(''); }}
                  className="px-6 py-3 rounded-2xl bg-ocean-500 text-white font-bold text-xs"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
