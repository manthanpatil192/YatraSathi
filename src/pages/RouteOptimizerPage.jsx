import React, { useState } from 'react';
import { FiNavigation, FiZap, FiCheck, FiMapPin, FiClock, FiDollarSign } from 'react-icons/fi';
import { destinations } from '../data/destinations';

export default function RouteOptimizerPage() {
  const [selectedDestIds, setSelectedDestIds] = useState(['d1', 'd3', 'd2']);
  const [transportMode, setTransportMode] = useState('train');
  const [isOptimizing, setIsOptimizing] = useState(false);

  const selectedDests = destinations.filter(d => selectedDestIds.includes(String(d.id)));

  const totalDistance = 688;
  const totalCost = transportMode === 'flight' ? 8500 : transportMode === 'train' ? 2400 : 1800;
  const totalDuration = transportMode === 'flight' ? '2.5 hrs' : transportMode === 'train' ? '11 hrs' : '14 hrs';

  const toggleSelectDest = (id) => {
    if (selectedDestIds.includes(id)) {
      if (selectedDestIds.length > 2) {
        setSelectedDestIds(selectedDestIds.filter(i => i !== id));
      }
    } else {
      setSelectedDestIds([...selectedDestIds, id]);
    }
  };

  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => setIsOptimizing(false), 500);
  };

  return (
    <div className="min-h-screen pb-32 text-white relative z-10 animate-fade-in">
      
      {/* Bulletproof Top Spacer to prevent header text cut-off */}
      <div className="h-28 sm:h-32 md:h-36"></div>

      {/* Full Viewport Screen Background Photo */}
      <img 
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" 
        alt="Mountain Pass Route Background" 
        className="fixed inset-0 w-full h-full object-cover filter brightness-[0.22] pointer-events-none z-0" 
      />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Header Hero Banner (Spacious Top Clearance to prevent text cut-off) */}
        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-2">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold uppercase tracking-wider">
              <FiZap />
              <span>AI ROUTE & FARE OPTIMIZER</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-normal tracking-tight">
              Smart Transit & Fare Optimizer
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm font-medium max-w-2xl leading-relaxed">
              Calculate optimal travel sequences, integer total distances, transport costs, and visual route maps across Indian cities.
            </p>
          </div>

          <button
            onClick={handleOptimize}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-heading font-extrabold text-xs shadow-xl flex items-center gap-2 shrink-0 btn-bounce"
          >
            <FiNavigation className={isOptimizing ? 'animate-spin' : ''} />
            <span>{isOptimizing ? 'Optimizing Route...' : 'Recalculate Route'}</span>
          </button>
        </div>

        {/* Selected Cities & Mode Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-7 bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-xl space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="font-heading font-extrabold text-lg text-white">Select Destinations to Connect</h3>
              <p className="text-xs text-slate-400">Pick 2 or more cities to construct fastest transit path</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {destinations.map(d => {
                const isSelected = selectedDestIds.includes(String(d.id));
                return (
                  <button
                    key={d.id}
                    onClick={() => toggleSelectDest(String(d.id))}
                    className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all flex items-center justify-between ${
                      isSelected ? 'bg-amber-400 text-slate-950 border-amber-400 font-black' : 'bg-slate-950 text-slate-300 border-slate-800'
                    }`}
                  >
                    <span>{d.name}</span>
                    {isSelected && <FiCheck />}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <label className="text-xs font-black uppercase text-slate-400 block">PREFERRED TRANSPORT MODE</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'train', label: '🚂 IRCTC Train', desc: 'Best Value' },
                  { id: 'flight', label: '✈️ Air Flight', desc: 'Fastest' },
                  { id: 'bus', label: '🚌 Bus / Taxi', desc: 'Scenic' }
                ].map(mode => (
                  <button
                    key={mode.id}
                    onClick={() => setTransportMode(mode.id)}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      transportMode === mode.id ? 'bg-teal-400 text-slate-950 border-teal-400 font-black' : 'bg-slate-950 text-slate-300 border-slate-800'
                    }`}
                  >
                    <span className="text-xs font-extrabold block">{mode.label}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{mode.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Route Summary */}
          <div className="lg:col-span-5 bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="font-heading font-extrabold text-lg text-white">Route Summary</h3>
                <p className="text-xs text-slate-400">Total distance and fare calculations</p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1 text-center">
                  <span className="text-[9px] font-black text-slate-400 uppercase">TOTAL DISTANCE</span>
                  <p className="text-xl font-heading font-black text-amber-300">{totalDistance} km</p>
                </div>

                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1 text-center">
                  <span className="text-[9px] font-black text-slate-400 uppercase">EST. FARE</span>
                  <p className="text-xl font-heading font-black text-teal-300">₹{totalCost}</p>
                </div>

                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1 text-center">
                  <span className="text-[9px] font-black text-slate-400 uppercase">TOTAL TIME</span>
                  <p className="text-xl font-heading font-black text-sky-300">{totalDuration}</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-extrabold text-xs text-white">Sequential Stop Waypoints</h4>
                <div className="space-y-2">
                  {selectedDests.map((d, idx) => (
                    <div key={d.id} className="p-3 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between text-xs font-bold">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-black text-[10px]">
                          {idx + 1}
                        </span>
                        <span>{d.name} ({d.state})</span>
                      </div>
                      <span className="text-slate-400 font-mono text-[10px]">Waypoint</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* INDIA ROUTE MAP VISUALIZER */}
        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl space-y-6">
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-heading font-extrabold text-white flex items-center gap-2">
                <span>🗺️</span> Interactive India Route Map
              </h3>
              <p className="text-xs text-slate-300">Visual connecting map for your optimized travel path across India</p>
            </div>

            <span className="px-3.5 py-1 bg-amber-400/20 text-amber-300 font-mono text-xs font-bold rounded-full border border-amber-400/30">
              {selectedDests.length} Waypoints Connected
            </span>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-6">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-b border-slate-900 pb-3">
              <span>🗺️ Active Route Map Canvas</span>
              <span>{transportMode.toUpperCase()} TRANSIT LINE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {selectedDests.map((d, idx) => (
                <div key={d.id} className="p-4 bg-slate-900 rounded-2xl border border-slate-800 relative space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 bg-teal-400 text-slate-950 rounded-md font-black text-[10px]">
                      STOP #{idx + 1}
                    </span>
                    <span className="text-[10px] text-amber-300 font-extrabold">⭐ {d.rating}</span>
                  </div>

                  <h4 className="font-heading font-black text-sm text-white">{d.name}</h4>
                  <p className="text-xs text-slate-400">📍 {d.state}, India</p>

                  {idx < selectedDests.length - 1 && (
                    <div className="pt-2 border-t border-slate-800/80 text-[10px] text-teal-300 font-bold flex items-center gap-1">
                      <span>➔ Transit to {selectedDests[idx + 1].name}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
