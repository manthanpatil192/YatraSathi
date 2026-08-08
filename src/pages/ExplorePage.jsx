import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiFilter, FiMapPin, FiStar, FiCompass, FiGrid, FiMap } from 'react-icons/fi';
import { destinations, categories } from '../data/destinations';

export default function ExplorePage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [selectedMapDest, setSelectedMapDest] = useState(destinations[0]);

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
    <div className="min-h-screen pb-32 text-white relative z-10 animate-fade-in">
      
      {/* Bulletproof Top Spacer to prevent header text cut-off under navbar */}
      <div className="h-28 sm:h-32 md:h-36"></div>

      {/* Full Viewport Screen Background Photo */}
      <img 
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80" 
        alt="Mountain Waterfall Background" 
        className="fixed inset-0 w-full h-full object-cover filter brightness-[0.22] pointer-events-none z-0" 
      />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Explore Hero Banner (Spacious Top Clearance to prevent text cut-off) */}
        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl space-y-6 mt-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="space-y-2">
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

            {/* Small Map Icon Button for viewing India's Map Modal */}
            <button
              onClick={() => setMapModalOpen(true)}
              className="px-4 py-2.5 rounded-2xl bg-teal-400/20 hover:bg-teal-400/30 text-teal-300 border border-teal-400/40 font-heading font-black text-xs flex items-center gap-2 transition-all shadow-lg shrink-0"
            >
              <FiMap className="text-teal-300" />
              <span>View India Map 🗺️</span>
            </button>
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

      {/* INDIA & WORLD GOOGLE MAP MODAL OVERLAY */}
      {mapModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-slate-700 p-6 sm:p-8 rounded-3xl max-w-5xl w-full space-y-6 max-h-[92vh] overflow-y-auto shadow-2xl relative">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-2xl font-heading font-black text-white flex items-center gap-2">
                  <FiMap className="text-teal-400" /> Interactive Google Map — India & World Explorer
                </h3>
                <p className="text-xs text-slate-300 font-medium">Explore live satellite map pins across India and the whole world</p>
              </div>

              <button
                onClick={() => setMapModalOpen(false)}
                className="px-4 py-2 bg-slate-950 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-700 text-xs font-bold"
              >
                ✕ Close Map
              </button>
            </div>

            {/* Live Interactive Google Maps View container */}
            <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950 relative">
              <iframe
                title="Google Maps India & World View"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedMapDest ? selectedMapDest.name + ', ' + selectedMapDest.state + ', India' : 'India')}&t=&z=6&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 filter brightness-95 contrast-105"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-extrabold text-amber-300 border border-amber-400/40 shadow-lg flex items-center gap-2">
                <span>🗺️ Live Google Maps View:</span>
                <span className="text-white font-black">{selectedMapDest ? `${selectedMapDest.name}, ${selectedMapDest.state}` : 'All India'}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* City Pins Grid */}
              <div className="lg:col-span-7 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                <span className="text-xs font-extrabold text-amber-300 block border-b border-slate-900 pb-2">📍 Select Destination to Center Google Map:</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[260px] overflow-y-auto pr-1">
                  {filteredDestinations.map((dest) => (
                    <button
                      key={dest.id}
                      onClick={() => setSelectedMapDest(dest)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        selectedMapDest?.id === dest.id
                          ? 'bg-amber-400 text-slate-950 border-amber-400 font-black scale-105'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>📍 {dest.name}</span>
                        <span className="text-[10px]">⭐{dest.rating}</span>
                      </div>
                      <span className="text-[10px] opacity-75 block mt-0.5">{dest.state}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Destination Preview */}
              <div className="lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                {selectedMapDest && (
                  <>
                    <div className="h-32 relative rounded-xl overflow-hidden bg-slate-900">
                      <img
                        src={selectedMapDest.photo || selectedMapDest.image}
                        alt={selectedMapDest.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2.5 right-2.5 bg-slate-950/85 backdrop-blur px-2.5 py-0.5 rounded-full text-xs font-black text-amber-300">
                        ⭐ {selectedMapDest.rating}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-xl font-heading font-black text-white">{selectedMapDest.name}</h4>
                      <p className="text-xs text-coral-400 font-bold">📍 {selectedMapDest.state}, India</p>
                      <p className="text-xs text-slate-300 line-clamp-2">{selectedMapDest.description}</p>
                    </div>

                    <button
                      onClick={() => {
                        setMapModalOpen(false);
                        navigate(`/destination/${selectedMapDest.id}`);
                      }}
                      className="btn-bounce w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-teal-400 text-slate-950 font-heading font-black text-xs uppercase"
                    >
                      View Destination Guide →
                    </button>
                  </>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
