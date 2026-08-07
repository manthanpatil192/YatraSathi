import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const userName = "Explorer";

  return (
    <div className="min-h-screen bg-sand-50 pb-20 relative overflow-hidden">
      {/* Ambient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-ocean-500/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-80 h-80 bg-coral-500/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 relative z-10">
        
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 font-heading mb-2">
                Hello, <span className="gradient-text bg-gradient-to-r from-ocean-500 to-seafoam-500 bg-clip-text text-transparent">{userName}</span> 👋
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Ready for your next adventure? Let YatraSathi guide you to India's most breathtaking destinations.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center bg-white/80 glass-card px-4 py-2 rounded-full shadow-lg border border-ocean-100">
              <span className="text-2xl mr-2">✈️</span>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Live Trips</p>
                <p className="text-ocean-700 font-bold">1,248 Explorers Active</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 font-heading mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { title: "Plan Trip", icon: "🗺️", color: "from-blue-400 to-ocean-500", link: "/plan" },
              { title: "Budget", icon: "💰", color: "from-emerald-400 to-seafoam-500", link: "/budget" },
              { title: "Safety", icon: "🛡️", color: "from-coral-400 to-red-500", link: "/safety" },
              { title: "Routes", icon: "📍", color: "from-purple-400 to-indigo-500", link: "/routes" },
              { title: "Checklist", icon: "🎒", color: "from-amber-400 to-orange-500", link: "/checklist" },
              { title: "Eco", icon: "🌿", color: "from-green-400 to-emerald-600", link: "/eco" }
            ].map((feature, idx) => (
              <Link to={feature.link} key={idx} className="glass-card bg-white/60 backdrop-blur-md border border-white/40 p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:bg-white/80 group">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl shadow-inner mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-slate-800 text-sm md:text-base leading-tight">{feature.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Destinations (Horizontal Scroll) */}
        <section className="mb-16">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-slate-800 font-heading">Popular Destinations</h2>
            <Link to="/explore" className="text-ocean-600 font-semibold hover:text-ocean-700 transition-colors">See All →</Link>
          </div>
          <div className="flex space-x-6 overflow-x-auto pb-6 pt-2 px-2 -mx-2 snap-x scrollbar-hide">
            {[
              { id: 1, name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&q=80", rating: "4.8", tag: "Beach" },
              { id: 2, name: "Manali", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&q=80", rating: "4.9", tag: "Mountain" },
              { id: 3, name: "Jaipur", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500&q=80", rating: "4.7", tag: "Heritage" },
              { id: 4, name: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&q=80", rating: "4.9", tag: "Nature" }
            ].map((dest) => (
              <Link to={`/destination/${dest.id}`} key={dest.id} className="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 snap-start group border border-slate-100">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                    {dest.tag}
                  </div>
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center shadow-sm">
                    <span className="text-yellow-500 text-xs mr-1">⭐</span>
                    <span className="text-xs font-bold text-slate-800">{dest.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{dest.name}</h3>
                  <p className="text-sm text-slate-500 flex items-center">
                    <span className="mr-1">📍</span> India
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Upcoming Trips Card */}
          <section className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-slate-800 font-heading mb-6">Upcoming Trips</h2>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
              <div className="w-24 h-24 bg-sand-50 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🧳</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">No upcoming trips</h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed max-w-[200px]">
                Your itinerary is looking empty. Let's plan your next big adventure!
              </p>
              <Link to="/explore" className="btn-bounce bg-coral-500 hover:bg-coral-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-coral-500/30 transition-all">
                Plan a Trip
              </Link>
            </div>
          </section>

          {/* Trip Stats Banner */}
          <section className="lg:col-span-2 flex flex-col justify-center">
            <div className="bg-gradient-to-br from-ocean-800 via-ocean-600 to-seafoam-600 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden text-white h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <h2 className="text-3xl font-extrabold font-heading mb-4 relative z-10">Why Choose YatraSathi?</h2>
              <p className="text-ocean-50 text-lg mb-8 max-w-lg leading-relaxed relative z-10">
                Experience seamless travel planning with AI-powered insights, offline capabilities, and authentic local guides.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                {[
                  { stat: "12,000+", label: "Destinations" },
                  { stat: "100%", label: "Offline Ready" },
                  { stat: "AI", label: "Route Optimizer" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                    <p className="text-2xl font-black text-white mb-1">{item.stat}</p>
                    <p className="text-ocean-100 text-sm font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
