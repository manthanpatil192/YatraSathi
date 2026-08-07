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
  { id: 1, title: 'Use Public Transport', points: 50, done: true, icon: <Wind className="w-5 h-5" /> },
  { id: 2, title: 'Carry Reusable Water Bottle', points: 20, done: true, icon: <Droplet className="w-5 h-5" /> },
  { id: 3, title: 'Eat Local Organic Food', points: 30, done: false, icon: <Sun className="w-5 h-5" /> },
  { id: 4, title: 'Participate in Beach Cleanup', points: 100, done: false, icon: <Heart className="w-5 h-5" /> },
];

const EcoDiscoveryPage = () => {
  const [tasks, setTasks] = useState(ecoTasks);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const totalPoints = tasks.filter(t => t.done).reduce((acc, t) => acc + t.points, 0);
  const progress = Math.min((totalPoints / 200) * 100, 100);

  return (
    <div className="min-h-screen bg-[#FFF8F0] font-sans pb-24">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-[#2A9D8F] via-[#3CBEB5] to-[#2B9EB3] text-white pt-24 pb-32 px-6 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1A7A8A]/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
              <Leaf className="w-4 h-4" />
              Sustainable Tourism
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-md">
              Discover Responsibly <br/> Leave Only Footprints
            </h1>
            <p className="text-lg md:text-xl text-emerald-50 font-medium leading-relaxed max-w-xl mb-8">
              Explore hidden eco-gems, support local communities, and offset your carbon footprint while traveling.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
                <div className="bg-emerald-400/30 p-3 rounded-full">
                  <Wind className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-emerald-100 font-bold uppercase tracking-wider">Carbon Offset</p>
                  <p className="text-xl font-black text-white">12.5 kg</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
                <div className="bg-amber-400/30 p-3 rounded-full">
                  <Award className="w-6 h-6 text-amber-200" />
                </div>
                <div>
                  <p className="text-xs text-emerald-100 font-bold uppercase tracking-wider">Traveler Level</p>
                  <p className="text-xl font-black text-white">Eco Warrior</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" 
              alt="Nature" 
              className="rounded-3xl shadow-2xl border-4 border-white/20 transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <p className="font-extrabold text-slate-800">100% Eco-friendly</p>
                <p className="text-sm font-medium text-slate-500">Curated stays</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 -mt-16 relative z-20 space-y-16">
        {/* Hidden Eco Gems */}
        <section>
          <div className="flex justify-between items-end mb-8 px-2">
            <div>
              <h2 className="text-3xl font-black text-slate-800">Hidden Eco Gems</h2>
              <p className="text-slate-500 font-medium mt-2">Sustainable stays that love the earth.</p>
            </div>
            <button className="text-[#2B9EB3] font-bold flex items-center gap-1 hover:text-[#1A7A8A] transition-colors">
              View All <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gems.map(gem => (
              <div key={gem.id} className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group transform transition-all hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-56 overflow-hidden">
                  <img src={gem.image} alt={gem.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <EcoBadge level={gem.ecoLevel} />
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-rose-500 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-extrabold text-slate-800 group-hover:text-[#2B9EB3] transition-colors">{gem.name}</h3>
                    <div className="flex items-center gap-1 bg-amber-100 text-amber-700 px-2 py-1 rounded-lg text-xs font-bold">
                      ★ {gem.rating}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-4">
                    <MapPin className="w-4 h-4 text-[#E76F51]" />
                    {gem.location}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {gem.tags.map((tag, i) => (
                      <span key={i} className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Leaf className="w-3 h-3" /> {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <span className="text-lg font-black text-slate-800">{gem.price}</span>
                    <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-md">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gamification Section */}
        <section className="bg-gradient-to-br from-[#FFEFDB] to-[#F4A261]/20 rounded-3xl p-8 md:p-12 border border-[#F4A261]/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E76F51]/10 text-[#E76F51] px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                <Award className="w-4 h-4" />
                Traveler Rewards
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">Earn Your Eco Badge</h2>
              <p className="text-slate-600 font-medium text-lg mb-8 leading-relaxed">
                Complete sustainable actions during your trip to level up your traveler rank and unlock exclusive discounts at eco-certified stays.
              </p>
              
              <div className="bg-white rounded-3xl p-6 shadow-lg mb-8 border border-slate-100">
                <div className="flex justify-between items-end mb-4">
                  <h4 className="font-extrabold text-slate-800 text-lg">Current Progress</h4>
                  <span className="text-[#E76F51] font-black text-xl">{totalPoints} <span className="text-sm text-slate-400">/ 200 pts</span></span>
                </div>
                <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden mb-2">
                  <div 
                    className="h-full bg-gradient-to-r from-[#F4A261] to-[#E76F51] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm font-bold text-slate-500 text-right">{100 - (totalPoints/2)} pts to next level</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {tasks.map(task => (
                <div 
                  key={task.id} 
                  className={`flex items-center justify-between p-5 rounded-2xl transition-all cursor-pointer border-2 ${
                    task.done 
                      ? 'bg-emerald-50 border-emerald-200 shadow-sm' 
                      : 'bg-white border-slate-100 hover:border-[#2B9EB3] shadow-md hover:shadow-lg transform hover:-translate-y-1'
                  }`}
                  onClick={() => toggleTask(task.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      task.done ? 'bg-emerald-200 text-emerald-700' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {task.icon}
                    </div>
                    <div>
                      <h4 className={`font-bold text-lg transition-colors ${task.done ? 'text-emerald-800 line-through opacity-70' : 'text-slate-800'}`}>
                        {task.title}
                      </h4>
                      <p className={`text-sm font-semibold mt-0.5 ${task.done ? 'text-emerald-600' : 'text-[#2B9EB3]'}`}>
                        +{task.points} pts
                      </p>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
                    task.done ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300'
                  }`}>
                    {task.done && <Shield className="w-4 h-4" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EcoDiscoveryPage;
