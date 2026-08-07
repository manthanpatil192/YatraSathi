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
  const [selectedIds, setSelectedIds] = useState(['d1', 'd3', 'd6', 'd2']); // Goa, Jaipur, Udaipur, Manali
  const [transportMode, setTransportMode] = useState('train');
  const [isOptimizing, setIsOptimizing] = useState(false);

  const toggleDestination = (id) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length <= 2) return; // Keep min 2
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

  const totalTimeHours = useMemo(() => estimateTime(totalDistance, transportMode), [totalDistance, transportMode]);
  const totalCostINR = useMemo(() => estimateCost(totalDistance, transportMode), [totalDistance, transportMode]);

  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => setIsOptimizing(false), 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-ocean-950 via-ocean-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ocean-500/20 text-ocean-300 border border-ocean-500/30 text-xs font-bold uppercase tracking-wider mb-4">
              <FiNavigation className="text-base" />
              <span>Smart Distance & Cost Calculation Engine</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-3">
              Route & Multi-City Optimizer
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Select destinations across India to calculate the shortest sequence, total travel time, and estimated transportation cost.
            </p>
          </div>
        </div>

        {/* Selection Controls Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 space-y-6">
          
          {/* Mode Selector */}
          <div>
            <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-3">
              1. Choose Preferred Mode of Transport
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {MODES.map(mode => (
                <button
                  key={mode.id}
                  onClick={() => setTransportMode(mode.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${
                    transportMode === mode.id 
                      ? 'border-ocean-500 bg-ocean-50 text-ocean-700 shadow-md scale-105' 
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span className="text-3xl mb-1">{mode.icon}</span>
                  <span className="font-heading font-bold text-sm">{mode.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Destination Selector Tags */}
          <div>
            <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-3">
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
                        ? 'bg-ocean-600 text-white shadow-md scale-105' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={handleOptimize}
              disabled={isOptimizing}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-heading font-bold text-base shadow-lg shadow-coral-200 btn-bounce flex items-center gap-2"
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
              <h3 className="font-heading font-extrabold text-xl text-slate-800 flex items-center gap-2">
                <FiLayers className="text-ocean-500" /> Interactive Route Map
              </h3>
              <span className="text-xs font-bold text-seafoam-700 bg-seafoam-50 px-3 py-1 rounded-full border border-seafoam-200">
                Connected Route Polylines
              </span>
            </div>

            <RouteMap stops={optimizedStops} />
          </div>

          {/* Timeline Sequence & Metrics (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Total Metrics Summary Card */}
            <div className="bg-gradient-to-br from-ocean-600 via-ocean-700 to-seafoam-800 text-white rounded-3xl p-6 shadow-xl space-y-4">
              <h3 className="font-heading font-extrabold text-xl border-b border-white/20 pb-3">
                Route Summary
              </h3>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <span className="text-[10px] text-ocean-100 font-bold uppercase block">Distance</span>
                  <span className="font-heading font-extrabold text-2xl text-white">{totalDistance}</span>
                  <span className="text-[10px] text-ocean-200 block font-bold">km</span>
                </div>

                <div>
                  <span className="text-[10px] text-ocean-100 font-bold uppercase block">Est. Time</span>
                  <span className="font-heading font-extrabold text-2xl text-amber-300">{totalTimeHours}</span>
                  <span className="text-[10px] text-ocean-200 block font-bold">hours</span>
                </div>

                <div>
                  <span className="text-[10px] text-ocean-100 font-bold uppercase block">Est. Cost</span>
                  <span className="font-heading font-extrabold text-2xl text-coral-300">₹{totalCostINR.toLocaleString('en-IN')}</span>
                  <span className="text-[10px] text-ocean-200 block font-bold">total</span>
                </div>
              </div>
            </div>

            {/* Sequence Timeline */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-4">
              <h3 className="font-heading font-extrabold text-lg text-slate-800">
                Optimized Stop Sequence
              </h3>

              <div className="relative pl-6 space-y-6">
                <div className="absolute top-3 bottom-3 left-[15px] w-0.5 bg-ocean-300 rounded-full"></div>

                {optimizedStops.map((stop, idx) => (
                  <div key={stop.id} className="relative flex items-start gap-3">
                    <div className={`absolute -left-[27px] top-0.5 w-6 h-6 rounded-full flex items-center justify-center font-extrabold text-xs text-white shadow-md ${
                      idx === 0 ? 'bg-seafoam-500' : idx === optimizedStops.length - 1 ? 'bg-coral-500' : 'bg-ocean-500'
                    }`}>
                      {idx + 1}
                    </div>

                    <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 flex-1 flex justify-between items-center">
                      <div>
                        <h4 className="font-heading font-bold text-slate-800 text-sm">{stop.name}</h4>
                        <span className="text-[11px] font-semibold text-slate-500">{stop.state}</span>
                      </div>
                      <span className="text-[11px] font-bold text-ocean-700 bg-ocean-50 px-2.5 py-1 rounded-full">
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
