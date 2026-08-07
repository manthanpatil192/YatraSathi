import React, { useState, useMemo } from 'react';
import { FiNavigation, FiClock, FiDollarSign, FiCheck, FiCompass, FiMapPin, FiLayers } from 'react-icons/fi';
import { destinations } from '../data/destinations';
import { optimizeRoute, estimateTime, estimateCost } from '../utils/routeOptimizer';
import RouteMap from '../components/map/RouteMap';

const MODES = [
  { id: 'train', label: 'Express Train', icon: '🚂' },
  { id: 'flight', label: 'Flight', icon: '✈️' },
  { id: 'bus', label: 'Volvo Bus', icon: '🚌' },
  { id: 'car', label: 'Taxi / Car', icon: '🚗' },
];

export default function RouteOptimizerPage() {
  const [selectedIds, setSelectedIds] = useState(['d1', 'd3', 'd6', 'd2']);
  const [transportMode, setTransportMode] = useState('train');
  const [isOptimizing, setIsOptimizing] = useState(false);

  const toggleDestination = (id) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length <= 2) return;
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedDestinations = useMemo(() => {
    return destinations.filter(d => selectedIds.includes(d.id));
  }, [selectedIds]);

  const { route: optimizedStops, totalDistance } = useMemo(() => {
    return optimizeRoute(selectedDestinations);
  }, [selectedDestinations]);

  // Rounded distance figure to avoid unrounded decimals or text overlap
  const formattedDistance = useMemo(() => Math.round(totalDistance || 0), [totalDistance]);
  const totalTimeHours = useMemo(() => estimateTime(totalDistance, transportMode), [totalDistance, transportMode]);
  const totalCostINR = useMemo(() => estimateCost(totalDistance, transportMode), [totalDistance, transportMode]);

  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => setIsOptimizing(false), 600);
  };

  return (
    <div className="min-h-screen pt-28 pb-32 text-white relative z-10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Banner with Clean Travel Background */}
        <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl space-y-3 min-h-[220px] flex flex-col justify-end">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" 
            alt="Mountain Valley Background" 
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.4] transform scale-105 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold uppercase tracking-wider">
              <FiNavigation className="text-base" />
              <span>Smart Intercity Route Engine</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight">
              Route & Multi-City Optimizer
            </h1>

            <p className="text-slate-200 text-xs sm:text-sm font-medium max-w-2xl leading-relaxed">
              Select destinations across India to calculate the shortest sequence, total travel time, and estimated transportation cost.
            </p>
          </div>
        </div>

        {/* Selection Controls Card */}
        <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-700/80 space-y-6">
          
          {/* Mode Selector */}
          <div>
            <h3 className="text-xs font-extrabold text-amber-300 uppercase tracking-wider mb-3">
              1. Choose Preferred Mode of Transport
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {MODES.map(mode => (
                <button
                  key={mode.id}
                  onClick={() => setTransportMode(mode.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${
                    transportMode === mode.id 
                      ? 'border-teal-400 bg-teal-950/60 text-white shadow-md scale-105' 
                      : 'border-slate-800 bg-slate-950/80 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="text-3xl mb-1">{mode.icon}</span>
                  <span className="font-heading font-bold text-xs sm:text-sm">{mode.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Destination Selector Tags */}
          <div>
            <h3 className="text-xs font-extrabold text-amber-300 uppercase tracking-wider mb-3">
              2. Select Destinations ({selectedIds.length} Selected)
            </h3>
            <div className="flex flex-wrap gap-2.5 max-h-48 overflow-y-auto p-1">
              {destinations.map(dest => {
                const isSelected = selectedIds.includes(dest.id);
                return (
                  <button
                    key={dest.id}
                    onClick={() => toggleDestination(dest.id)}
                    className={`px-4 py-2 rounded-2xl font-bold text-xs transition-all flex items-center gap-1.5 ${
                      isSelected 
                        ? 'bg-ocean-600 text-white shadow-md scale-105 border border-teal-400/40' 
                        : 'bg-slate-950 text-slate-400 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    <span>{dest.name}</span>
                    <span className="text-[10px] opacity-80">({dest.state})</span>
                    {isSelected && <FiCheck className="text-xs shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <button
              onClick={handleOptimize}
              disabled={isOptimizing}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-heading font-extrabold text-xs shadow-lg shadow-coral-500/20 btn-bounce flex items-center gap-2"
            >
              <span>{isOptimizing ? 'Recalculating Sequence...' : '✨ Calculate Optimal Route'}</span>
            </button>
          </div>

        </div>

        {/* Map & Results Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Leaflet Interactive Route Map (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex justify-between items-center px-1">
              <h3 className="font-heading font-extrabold text-xl text-white flex items-center gap-2">
                <FiLayers className="text-teal-400" /> Interactive Route Map
              </h3>
              <span className="text-xs font-bold text-teal-300 bg-teal-950 px-3 py-1 rounded-full border border-teal-800">
                Connected Polyline Network
              </span>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl">
              <RouteMap stops={optimizedStops} />
            </div>
          </div>

          {/* Timeline Sequence & Metrics (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Total Metrics Summary Card */}
            <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 text-white rounded-3xl p-6 shadow-2xl space-y-4">
              <h3 className="font-heading font-extrabold text-lg border-b border-slate-800 pb-3 text-amber-300">
                Route Metrics Summary
              </h3>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800">
                  <span className="text-[9px] text-slate-400 font-bold uppercase block">Total Distance</span>
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-teal-300">{formattedDistance}</span>
                  <span className="text-[10px] text-slate-400 block font-bold">km</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800">
                  <span className="text-[9px] text-slate-400 font-bold uppercase block">Est. Time</span>
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-amber-300">{totalTimeHours}</span>
                  <span className="text-[10px] text-slate-400 block font-bold">hours</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800">
                  <span className="text-[9px] text-slate-400 font-bold uppercase block">Est. Fare</span>
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-coral-400">₹{totalCostINR.toLocaleString('en-IN')}</span>
                  <span className="text-[10px] text-slate-400 block font-bold">total</span>
                </div>
              </div>
            </div>

            {/* Sequence Timeline */}
            <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/80 shadow-2xl space-y-4">
              <h3 className="font-heading font-extrabold text-base text-white">
                Optimized Stop Sequence
              </h3>

              <div className="relative pl-6 space-y-4">
                <div className="absolute top-3 bottom-3 left-[15px] w-0.5 bg-teal-500/40 rounded-full"></div>

                {optimizedStops.map((stop, idx) => (
                  <div key={stop.id} className="relative flex items-start gap-3">
                    <div className={`absolute -left-[27px] top-0.5 w-6 h-6 rounded-full flex items-center justify-center font-extrabold text-xs text-white shadow-md ${
                      idx === 0 ? 'bg-seafoam-500' : idx === optimizedStops.length - 1 ? 'bg-coral-500' : 'bg-ocean-600'
                    }`}>
                      {idx + 1}
                    </div>

                    <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex-1 flex justify-between items-center">
                      <div>
                        <h4 className="font-heading font-bold text-white text-xs sm:text-sm">{stop.name}</h4>
                        <span className="text-[10px] font-semibold text-slate-400">{stop.state}</span>
                      </div>
                      <span className="text-[10px] font-bold text-teal-300 bg-teal-950 px-2.5 py-1 rounded-full border border-teal-800">
                        {stop.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
