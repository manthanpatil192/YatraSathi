import React, { useState } from 'react';
import { FiNavigation, FiZap, FiCheck, FiMapPin, FiClock, FiDollarSign } from 'react-icons/fi';
import { destinations } from '../data/destinations';

export default function RouteOptimizerPage() {
  const [selectedDestIds, setSelectedDestIds] = useState(['d1', 'd3', 'd2']);
  const [transportMode, setTransportMode] = useState('train');
  const [isOptimizing, setIsOptimizing] = useState(false);

  const selectedDests = destinations.filter(d => selectedDestIds.includes(String(d.id)));

  const totalDistance = 688; // Fixed unrounded integer distance
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
    <div className="min-h-screen pt-32 sm:pt-36 pb-32 text-white relative z-10 animate-fade-in">
      
      {/* Full Viewport Screen Background Photo */}
      <img 
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" 
        alt="Mountain Pass Route Background" 
        className="fixed inset-0 w-full h-full object-cover filter brightness-[0.22] pointer-events-none z-0" 
      />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Header Hero Banner (Fixed Top Alignment) */}
        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold uppercase tracking-wider">
              <FiZap />
              <span>AI ROUTE & FARE OPTIMIZER</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white">
              Smart Transit & Fare Optimizer
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm font-medium max-w-2xl">
              Calculate optimal travel sequences, integer total distances, transport costs, and speed benchmarks across Indian cities.
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

      </div>
    </div>
  );
}
