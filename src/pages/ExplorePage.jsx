import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiFilter, FiGrid, FiMapPin, FiCompass, FiCheckCircle, FiStar, FiDollarSign, FiArrowRight } from 'react-icons/fi';
import DestinationCard from '../components/cards/DestinationCard';
import IndiaMap from '../components/map/IndiaMap';
import { apiService } from '../services/api';
import { categories, regions } from '../data/destinations';

export default function ExplorePage() {
  const navigate = useNavigate();
  const [destinationsList, setDestinationsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeRegion, setActiveRegion] = useState('All Regions');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    apiService.getDestinations().then(data => {
      if (isMounted) {
        setDestinationsList(data || []);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  const filteredDests = destinationsList.filter(d => {
    const matchesCategory = activeCategory === 'All' || d.category?.toLowerCase() === activeCategory.toLowerCase();
    const matchesRegion = activeRegion === 'All Regions' || d.region?.toLowerCase() === activeRegion.toLowerCase();
    const matchesSearch = searchQuery === '' || 
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      d.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesRegion && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-32 text-white relative z-10 animate-fade-in">
      
      {/* Pic 5 Style Full-Bleed Dramatic Travel Hero Header Banner */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-12">
        
        <div className="relative rounded-3xl overflow-hidden min-h-[460px] flex flex-col justify-between p-8 sm:p-12 border border-slate-700/80 shadow-2xl">
          
          {/* High-Resolution Cinematic Mountain Waterfall Background */}
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80" 
            alt="Cinematic Travel Background" 
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.35] transform scale-105 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30"></div>

          {/* Top Tagline & View Switcher */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full text-xs font-black uppercase tracking-wider backdrop-blur-md">
              <span>🇮🇳 ALL-INDIA DESTINATION DIRECTORY</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-950/90 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-md shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all ${
                  viewMode === 'grid' ? 'bg-ocean-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <FiGrid /> Grid View
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all ${
                  viewMode === 'map' ? 'bg-ocean-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <FiMapPin /> Interactive Map
              </button>
            </div>
          </div>

          {/* Pic 5 Central Headline & Search Bar */}
          <div className="relative z-10 max-w-3xl space-y-4 my-auto py-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight uppercase leading-[1.1] drop-shadow-lg">
              EXPLORE THE BEAUTY OF INDIA
            </h1>
            <p className="text-slate-200 text-sm sm:text-base font-semibold max-w-2xl leading-relaxed drop-shadow">
              Discover 20 active cities, ancient UNESCO forts, tropical beach coastlines, and high Himalayan passes.
            </p>

            {/* Integrated Search Input Bar */}
            <div className="relative max-w-2xl pt-2">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city name, state, landmark, or category (e.g. Goa, Kashmir, Taj Mahal, Beaches)..."
                className="w-full bg-slate-950/90 border border-slate-700 rounded-2xl pl-12 pr-4 py-4 text-sm font-semibold text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-amber-400 shadow-2xl backdrop-blur-md"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white bg-slate-800 px-2 py-1 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Pic 5 Style 3 Featured Preview Cards at Bottom of Hero */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            
            <div onClick={() => setActiveCategory('Beaches')} className="bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 hover:border-amber-400 transition-all cursor-pointer group flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">THE COASTAL</span>
                <h4 className="font-heading font-extrabold text-sm text-white group-hover:text-amber-300">Goa & Gokarna Beaches</h4>
              </div>
              <FiArrowRight className="text-amber-400 group-hover:translate-x-1 transition-transform" />
            </div>

            <div onClick={() => setActiveCategory('Heritage')} className="bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 hover:border-amber-400 transition-all cursor-pointer group flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">THE HERITAGE</span>
                <h4 className="font-heading font-extrabold text-sm text-white group-hover:text-amber-300">Jaipur & Udaipur Palaces</h4>
              </div>
              <FiArrowRight className="text-amber-400 group-hover:translate-x-1 transition-transform" />
            </div>

            <div onClick={() => setActiveCategory('Mountains')} className="bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 hover:border-amber-400 transition-all cursor-pointer group flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block">THE MOUNTAIN</span>
                <h4 className="font-heading font-extrabold text-sm text-white group-hover:text-amber-300">Manali & Ladakh Himalayas</h4>
              </div>
              <FiArrowRight className="text-amber-400 group-hover:translate-x-1 transition-transform" />
            </div>

          </div>

        </div>

        {/* Region & Category Filter Pills */}
        <div className="bg-slate-900/90 backdrop-blur-xl p-4 sm:p-6 rounded-3xl border border-slate-700/80 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide w-full lg:w-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-slate-950 shadow-md font-black scale-105'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Region Filter Dropdown */}
          <div className="flex items-center gap-2 w-full lg:w-auto shrink-0">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Region:</span>
            <select
              value={activeRegion}
              onChange={(e) => setActiveRegion(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-amber-300 rounded-xl px-4 py-2 text-xs font-extrabold outline-none cursor-pointer"
            >
              {regions.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Results Counter Bar */}
        <div className="flex justify-between items-center text-xs font-bold text-slate-400 px-2">
          <span>Showing <strong className="text-amber-300 font-extrabold">{filteredDests.length}</strong> destinations</span>
          <span>Sorted by Highest Rating ⭐</span>
        </div>

        {/* Main Content Grid (Full Viewport Width) */}
        {viewMode === 'map' ? (
          <div className="bg-slate-900/90 backdrop-blur-xl p-4 rounded-3xl border border-slate-700/80 shadow-2xl">
            <IndiaMap />
          </div>
        ) : loading ? (
          <div className="py-24 text-center">
            <div className="w-12 h-12 border-4 border-slate-700 border-t-amber-400 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-300 font-extrabold text-base animate-pulse">Loading destinations...</p>
          </div>
        ) : filteredDests.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredDests.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        ) : (
          <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-12 text-center border border-slate-800 shadow-xl max-w-lg mx-auto space-y-4">
            <span className="text-5xl block">🏜️</span>
            <h3 className="font-heading font-extrabold text-xl text-white">No destinations match your filter</h3>
            <p className="text-slate-400 text-xs">Try clearing search or switching region filters.</p>
            <button
              onClick={() => { setActiveCategory('All'); setActiveRegion('All Regions'); setSearchQuery(''); }}
              className="px-6 py-3 rounded-2xl bg-ocean-600 hover:bg-ocean-500 text-white font-extrabold text-xs shadow-md"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
