import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiGrid, FiMapPin, FiCompass, FiCheckCircle, FiStar, FiDollarSign } from 'react-icons/fi';
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
      
      {/* Upper Dashboard: All-India Travel Command Center (Full Width) */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-12">
        
        <div className="bg-slate-900/85 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl space-y-6">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-400/20 text-teal-300 border border-teal-400/30 rounded-full text-xs font-black uppercase tracking-wider">
                <span>🇮🇳 All-India Tourism Command Center</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
                Explore Destinations Across India
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm font-medium max-w-2xl">
                Browse 20 active top cities across North, South, East, West, and North-East India with verified photography, food guides, and routes.
              </p>
            </div>

            {/* View Switcher: Grid vs Interactive Map */}
            <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 shrink-0">
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
                <FiMapPin /> All-India Map
              </button>
            </div>
          </div>

          {/* Search Input Bar */}
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city name, state, landmark, or category (e.g. Goa, Kashmir, Taj Mahal, Beaches)..."
              className="w-full bg-slate-950/90 border border-slate-700/90 rounded-2xl pl-12 pr-4 py-4 text-sm font-semibold text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-teal-400 shadow-inner"
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

          {/* Region & Category Filter Pills */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pt-2 border-t border-slate-800">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide w-full lg:w-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700/60'
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
                className="bg-slate-950 border border-slate-700 text-amber-300 rounded-xl px-4 py-2 text-xs font-extrabold outline-none cursor-pointer"
              >
                {regions.map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

          </div>

        </div>

        {/* Results Counter Bar */}
        <div className="flex justify-between items-center text-xs font-bold text-slate-400 px-2">
          <span>Showing <strong className="text-amber-300 font-extrabold">{filteredDests.length}</strong> active destinations</span>
          <span>Sorted by Highest Rating ⭐</span>
        </div>

        {/* Main Content Area (Utilizing Full Viewport Screen Width) */}
        {viewMode === 'map' ? (
          <div className="bg-slate-900/80 backdrop-blur-xl p-4 rounded-3xl border border-slate-700/80 shadow-2xl">
            <IndiaMap />
          </div>
        ) : loading ? (
          <div className="py-24 text-center">
            <div className="w-12 h-12 border-4 border-slate-700 border-t-amber-400 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-300 font-extrabold text-base animate-pulse">Loading destinations...</p>
          </div>
        ) : filteredDests.length > 0 ? (
          /* Full Viewport Width Grid: 1 col mobile, 2 tablet, 3-4 desktop, 5 wide screen */
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
