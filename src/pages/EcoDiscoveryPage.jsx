import React, { useState } from 'react';
import { Leaf, MapPin, Heart, Shield, Award, Droplet, Sun, Wind, ChevronRight } from 'lucide-react';
import EcoBadge from '../components/EcoBadge';

const gems = [
  {
    id: 1,
    name: 'Bamboo Homestay',
    location: 'Kerala Backwaters',
    price: '₹2,500/night',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800',
    tags: ['Organic Food', 'Solar Power'],
    ecoLevel: 'Gold'
  },
  {
    id: 2,
    name: 'Pristine Pine Retreat',
    location: 'Himachal Pradesh',
    price: '₹3,200/night',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1518182170546-076616fd63f9?auto=format&fit=crop&q=80&w=800',
    tags: ['Zero Waste', 'Local Community'],
    ecoLevel: 'Platinum'
  },
  {
    id: 3,
    name: 'Desert Eco Camp',
    location: 'Rajasthan',
    price: '₹4,000/night',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1548160410-b9643dcf8b6e?auto=format&fit=crop&q=80&w=800',
    tags: ['Water Conservation', 'Heritage'],
    ecoLevel: 'Silver'
  }
];

const ecoTasks = [
  { id: 1, title: 'Use Public Transport', points: 50, done: true, icon: <Wind className="w-5 h-5 text-teal-400" /> },
  { id: 2, title: 'Carry Reusable Water Bottle', points: 20, done: true, icon: <Droplet className="w-5 h-5 text-sky-400" /> },
  { id: 3, title: 'Eat Local Organic Food', points: 30, done: false, icon: <Sun className="w-5 h-5 text-amber-400" /> },
  { id: 4, title: 'Participate in Beach Cleanup', points: 100, done: false, icon: <Heart className="w-5 h-5 text-rose-400" /> },
];

export default function EcoDiscoveryPage() {
  const [tasks, setTasks] = useState(ecoTasks);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const totalPoints = tasks.filter(t => t.done).reduce((acc, t) => acc + t.points, 0);
  const progress = Math.min((totalPoints / 200) * 100, 100);

  return (
    <div className="min-h-screen pt-28 pb-32 text-white relative z-10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Properly Framed Header Card */}
        <div className="bg-slate-900/85 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span>Sustainable & Responsible Tourism</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight">
            Discover Responsibly • Leave Only Footprints
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm font-medium max-w-2xl leading-relaxed">
            Explore offbeat eco-certified homestays, support local village crafts, and earn traveler badges.
          </p>
        </div>

        {/* Hidden Eco Gems */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-heading font-extrabold text-white">Hidden Eco Gems</h2>
              <p className="text-xs text-slate-400">Verified eco-friendly stays across India</p>
            </div>
            <button className="text-xs font-extrabold text-amber-400 hover:underline flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gems.map(gem => (
              <div 
                key={gem.id} 
                className="bg-slate-900/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl border border-slate-700/80 group hover:-translate-y-1.5 transition-all"
              >
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img src={gem.image} alt={gem.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95" />
                  <div className="absolute top-3 left-3">
                    <EcoBadge level={gem.ecoLevel} />
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-heading font-extrabold text-white group-hover:text-amber-300 transition-colors">{gem.name}</h3>
                    <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded-md text-xs font-black">★ {gem.rating}</span>
                  </div>

                  <div className="flex items-center gap-1 text-slate-400 text-xs font-bold">
                    <MapPin className="w-3.5 h-3.5 text-coral-400" />
                    <span>{gem.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {gem.tags.map((tag, i) => (
                      <span key={i} className="bg-slate-950 text-teal-300 border border-slate-800 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                        🌿 {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-slate-800">
                    <span className="text-base font-extrabold text-amber-300">{gem.price}</span>
                    <button className="bg-ocean-600 hover:bg-ocean-500 text-white px-4 py-2 rounded-xl text-xs font-extrabold shadow-md btn-bounce">
                      Book Homestay
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gamification Section */}
        <section className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-heading font-extrabold text-white flex items-center gap-2">
              <Award className="w-6 h-6 text-amber-400" />
              <span>Earn Your Eco Traveler Badge</span>
            </h2>
            <p className="text-xs text-slate-400">Complete green actions to unlock traveler rank discounts</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-xs font-extrabold">
                  <span className="text-slate-300">Eco Action Progress</span>
                  <span className="text-amber-300 font-mono">{totalPoints} / 200 pts</span>
                </div>
                <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-800">
                  <div className="bg-gradient-to-r from-teal-400 to-amber-400 h-full transition-all duration-700 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {tasks.map(task => (
                <div 
                  key={task.id} 
                  onClick={() => toggleTask(task.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                    task.done ? 'bg-slate-950/80 border-teal-500/50 text-slate-400' : 'bg-slate-950 border-slate-800 text-white hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-900 rounded-xl">
                      {task.icon}
                    </div>
                    <div>
                      <h4 className={`text-xs sm:text-sm font-extrabold ${task.done ? 'line-through text-slate-400' : 'text-white'}`}>{task.title}</h4>
                      <span className="text-[10px] font-bold text-amber-400">+{task.points} pts</span>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${task.done ? 'bg-teal-400 border-teal-400 text-slate-950' : 'border-slate-600'}`}>
                    {task.done && <Shield className="w-3 h-3" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
