import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { FiMap, FiDollarSign, FiShield, FiCompass, FiCheckSquare, FiGlobe, FiArrowRight, FiZap } from 'react-icons/fi';
import { destinations } from '../data/destinations';

export default function HomePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const userName = user?.name || "Traveler";

  const quickActions = [
    { title: "Plan Itinerary", desc: "Day-by-day AI travel builder", icon: "🗺️", color: "from-sky-500 to-ocean-600", link: "/itinerary", badge: "Smart Planner" },
    { title: "Budget Tracker", desc: "Monitor daily trip expenses", icon: "💰", color: "from-emerald-500 to-seafoam-600", link: "/budget", badge: "Money Saver" },
    { title: "Safety Radar", desc: "SOS alert & crowd meters", icon: "🛡️", color: "from-rose-500 to-coral-600", link: "/safety", badge: "Live Geolocation" },
    { title: "Route Optimizer", desc: "Transport fare & speed optimizer", icon: "⚡", color: "from-purple-500 to-indigo-600", link: "/route-optimizer", badge: "AI Routing" },
    { title: "Smart Packing", desc: "Category checklist for weather", icon: "🎒", color: "from-amber-500 to-sunset-600", link: "/packing", badge: "Custom List" },
    { title: "Eco Discovery", desc: "Offbeat spots & homestays", icon: "🌿", color: "from-teal-500 to-emerald-700", link: "/eco-discovery", badge: "Sustainable" }
  ];

  return (
    <div className="min-h-screen pt-32 sm:pt-36 pb-32 text-white relative z-10 animate-fade-in">
      
      {/* Full Viewport Screen Background Photo (Covering entire Home Landing Page with perfect transparency) */}
      <img 
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" 
        alt="Full Screen Mountain Travel Background" 
        className="fixed inset-0 w-full h-full object-cover filter brightness-[0.22] pointer-events-none z-0" 
      />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Welcome Header (Fixed Top Padding Alignment for zero navbar cutoff) */}
        <section className="bg-slate-900/85 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-slate-700/80 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full text-xs font-black uppercase tracking-wider">
              <span>✨ Welcome to YatraSathi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white">
              Namaste, <span className="bg-gradient-to-r from-teal-300 via-amber-300 to-coral-400 bg-clip-text text-transparent">{userName}</span> 👋
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed font-medium">
              Explore 20 top destinations across 28 states & 8 UTs of India. Plan day-by-day itineraries, track expenses, and stay safe.
            </p>
          </div>

          <button
            onClick={() => navigate('/itinerary')}
            className="btn-bounce px-6 py-3.5 rounded-2xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-heading font-extrabold text-xs shadow-xl shadow-coral-500/20 flex items-center gap-2 shrink-0"
          >
            <FiZap />
            <span>Start Planning Trip</span>
          </button>
        </section>

        {/* Quick Actions Grid */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-heading font-extrabold text-white">Quick Actions & Smart Tools</h2>
              <p className="text-xs text-slate-400">Launch powerful travel planning features in one click</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, idx) => (
              <div 
                key={idx}
                onClick={() => navigate(action.link)}
                className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 p-6 rounded-3xl shadow-xl cursor-pointer hover:border-teal-400/80 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center text-3xl shadow-md group-hover:scale-110 transition-transform`}>
                    {action.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-slate-950 text-teal-300 border border-slate-800 rounded-full">
                    {action.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-amber-300 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {action.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-teal-300 group-hover:translate-x-1 transition-transform">
                  <span>Open Feature</span>
                  <FiArrowRight />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Top Indian Destinations */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-heading font-extrabold text-white">Popular Destinations</h2>
              <p className="text-xs text-slate-400">Handpicked iconic cities across India</p>
            </div>
            <Link to="/explore" className="text-xs font-extrabold text-amber-400 hover:underline flex items-center gap-1">
              View All 20 Cities →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.slice(0, 4).map((dest) => (
              <div 
                key={dest.id}
                onClick={() => navigate(`/destination/${dest.id}`)}
                className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 rounded-3xl overflow-hidden shadow-xl hover:border-amber-400/80 hover:-translate-y-1.5 transition-all cursor-pointer group"
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
                      <h3 className="font-heading font-extrabold text-lg text-white">{dest.name}</h3>
                      <p className="text-xs text-slate-300 font-bold">{dest.state}</p>
                    </div>
                    <span className="text-xs font-black text-amber-400 bg-slate-950/90 px-2.5 py-1 rounded-lg border border-slate-800">
                      ⭐ {dest.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
