import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiStar, FiMapPin, FiUsers, FiArrowRight } from 'react-icons/fi';
import { HiShieldCheck } from 'react-icons/hi';

export default function DestinationCard({ destination }) {
  const navigate = useNavigate();
  if (!destination) return null;

  const cost = destination.averageCostPerDay || destination.avgCost || destination.costPerDay || 2500;
  const safety = destination.safetyRating || 'Very Safe';
  
  // Always prioritize real high-resolution photograph URL
  const photoUrl = destination.photo || destination.image || 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80';

  return (
    <div className="group relative bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col h-full w-full">
      
      {/* City Photo Banner */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-900">
        <img 
          src={photoUrl} 
          alt={destination.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = destination.image || 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80';
          }}
        />
        
        {/* Dark Gradient Overlay for sharp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

        {/* Category Pill & Rating Badge */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
          <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md text-amber-300 text-xs font-black rounded-full shadow-md capitalize border border-amber-400/40">
            {destination.category || 'Destination'}
          </span>
          
          <div className="flex items-center gap-1 bg-amber-400 text-slate-950 px-2.5 py-1 rounded-full shadow-md text-xs font-black">
            <FiStar className="fill-current text-slate-950 text-xs" />
            <span>{destination.rating || '4.8'}</span>
          </div>
        </div>

        {/* City Title & State Tag on Photo */}
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <h3 className="text-2xl font-heading font-extrabold text-white drop-shadow-md leading-tight group-hover:translate-x-1 transition-transform">
            {destination.name}
          </h3>
          <p className="text-slate-200 text-xs font-semibold flex items-center gap-1 mt-0.5">
            <FiMapPin className="text-coral-400 shrink-0" />
            <span className="truncate">{destination.state}, India</span>
          </p>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-4 bg-white">
        <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
          {destination.description || 'Explore the beauty, history, and vibrant culture of this top Indian travel destination.'}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Avg Daily Cost</span>
            <span className="font-extrabold text-ocean-700 text-sm mt-0.5">₹{cost.toLocaleString('en-IN')}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Visitors</span>
            <span className="font-extrabold text-slate-800 text-xs mt-0.5 flex items-center gap-1">
              <FiUsers className="text-ocean-500 shrink-0" />
              <span>{destination.visitors || '25K+'}</span>
            </span>
          </div>

          <div className="col-span-2 pt-2 border-t border-slate-200/60 flex items-center justify-between">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Safety Status</span>
            <span className="inline-flex items-center gap-1 font-bold text-seafoam-700 bg-seafoam-50 px-2 py-0.5 rounded-md text-[11px]">
              <HiShieldCheck className="text-seafoam-500 text-sm" />
              <span>{safety}</span>
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <button 
            onClick={() => navigate(`/destination/${destination.id}`)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-ocean-50 text-slate-800 hover:text-ocean-700 font-bold text-xs transition-colors flex items-center justify-center gap-1"
          >
            <span>View Details</span>
          </button>

          <button 
            onClick={() => navigate(`/itinerary?add=${destination.id}`)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-bold text-xs shadow-md shadow-coral-100 btn-bounce flex items-center justify-center gap-1"
          >
            <span>+ Add Trip</span>
            <FiArrowRight className="text-xs" />
          </button>
        </div>

      </div>
    </div>
  );
}
