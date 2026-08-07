import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiX, FiSearch, FiCalendar, FiUsers, FiHome, FiCheck, FiStar, FiShield, FiCompass, FiArrowRight, FiInfo, FiAward } from 'react-icons/fi';
import { useAuth } from '../hooks/useAuth';

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, login, signup } = useAuth();

  const [activeCategory, setActiveCategory] = useState('BEACHES');
  const [selectedDestination, setSelectedDestination] = useState('Goa Beach Resort');
  const [selectedAccommodation, setSelectedAccommodation] = useState('Luxury Beach Resorts');
  const [guestCount, setGuestCount] = useState('2 Adults, 1 Room');
  
  // Login / Signup Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [authError, setAuthError] = useState('');

  // About & Premium Info Modals
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [premiumModalOpen, setPremiumModalOpen] = useState(false);

  // Category-Based 1-Second Auto-Changing City Monument Slideshow Datasets
  const monumentCategorySlides = {
    BEACHES: [
      { city: 'Goa Coast & Palm Shores', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1000&q=80', tag: 'Tropical Sunshine Coast' },
      { city: 'Gokarna Om Beach', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1000&q=80', tag: 'Cliffside Arabian Sea Waves' },
      { city: 'Alleppey Backwaters, Kerala', image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1000&q=80', tag: 'Tranquil Lagoon Houseboat Trail' },
      { city: 'Pondicherry French Promenade', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1000&q=80', tag: 'Franco-Tamil Seaside Boulevard' },
      { city: 'Kanyakumari Triveni Sangam', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=1000&q=80', tag: 'Confluence of 3 Oceans' }
    ],
    PLAINS: [
      { city: 'Taj Mahal, Agra', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1000&q=80', tag: 'UNESCO Wonder of the World' },
      { city: 'Hawa Mahal, Jaipur', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1000&q=80', tag: 'Royal Pink City Architecture' },
      { city: 'Gateway of India, Mumbai', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1000&q=80', tag: 'Arabian Sea Waterfront' },
      { city: 'Victoria Memorial, Kolkata', image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=1000&q=80', tag: 'City of Joy Marble Palace' },
      { city: 'City Palace, Udaipur', image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?w=1000&q=80', tag: 'Venice of the East Lake Fort' }
    ],
    MOUNTAINS: [
      { city: 'Solang Valley, Manali', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1000&q=80', tag: 'Himalayan Snow & Pine Valleys' },
      { city: 'Dal Lake, Srinagar Kashmir', image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1000&q=80', tag: 'Shikara Houseboats & Snow Peaks' },
      { city: 'Pangong Tso Lake, Leh-Ladakh', image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=1000&q=80', tag: 'High-Altitude Himalayan Waters' },
      { city: 'Key Monastery, Spiti Valley', image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=1000&q=80', tag: '1000-Year-Old Cliff Monastery' },
      { city: 'The Ridge, Shimla', image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=1000&q=80', tag: 'Queen of Hill Stations' }
    ]
  };

  const currentCategorySlides = monumentCategorySlides[activeCategory] || monumentCategorySlides.BEACHES;
  const [slideIndex, setSlideIndex] = useState(0);

  // Reset slide index when category changes
  useEffect(() => {
    setSlideIndex(0);
  }, [activeCategory]);

  // 1-Second Auto-Changing Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % currentCategorySlides.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [currentCategorySlides]);

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setAuthError('Please fill in all fields');
      return;
    }
    if (isSignUpMode) {
      signup({ name: name || email.split('@')[0], email });
    } else {
      login({ name: email.split('@')[0], email });
    }
    setIsModalOpen(false);
    navigate('/home');
  };

  const currentSlide = currentCategorySlides[slideIndex] || currentCategorySlides[0];

  return (
    <div className="min-h-screen w-full font-sans bg-[#FFF8F0] relative overflow-x-hidden flex flex-col justify-between">
      
      {/* Split Hero Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen w-full relative">
        
        {/* LEFT SIDE (58%): Sandy Warm Content */}
        <div className="w-full lg:w-[58%] p-6 sm:p-10 lg:p-14 flex flex-col justify-between z-10 space-y-8">
          
          {/* Top Header Bar */}
          <header className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-3xl">🧭</span>
              <span className="font-heading font-black text-2xl tracking-tight text-slate-900">
                YatraSathi<span className="text-coral-500">.</span>
              </span>
            </div>

            {/* Nav Links with Clean Spacing */}
            <nav className="hidden sm:flex items-center gap-6 md:gap-8 font-heading text-sm font-bold text-slate-800">
              <button onClick={() => navigate('/home')} className="hover:text-ocean-600 transition-colors">Home</button>
              <button onClick={() => setAboutModalOpen(true)} className="hover:text-ocean-600 transition-colors flex items-center gap-1">
                <span>About</span>
              </button>
              <button onClick={() => setPremiumModalOpen(true)} className="hover:text-amber-600 transition-colors flex items-center gap-1 text-amber-700">
                <FiAward className="text-amber-500" />
                <span>Premium</span>
              </button>
              <button onClick={() => navigate('/explore')} className="hover:text-ocean-600 transition-colors">Blogs</button>
            </nav>

            {/* Login & Explore Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-bounce px-5 py-2.5 rounded-2xl bg-white border border-slate-300 text-slate-900 font-heading font-extrabold text-sm shadow-sm hover:border-ocean-400 transition-all"
              >
                Sign In
              </button>

              <button
                onClick={() => navigate('/explore')}
                className="btn-bounce px-6 py-2.5 rounded-2xl bg-gradient-to-r from-ocean-600 to-seafoam-600 text-white font-heading font-extrabold text-sm shadow-md shadow-ocean-200 flex items-center gap-1.5"
              >
                <span>Explore</span>
                <FiArrowRight />
              </button>
            </div>

          </header>

          {/* Main Hero Body */}
          <div className="space-y-6 max-w-xl my-auto">
            
            {/* Category Pills (Switches Right-Hand Side Background Slideshow) */}
            <div className="flex items-center gap-4 text-xs font-black tracking-widest text-slate-500 uppercase">
              <button 
                onClick={() => setActiveCategory('MOUNTAINS')}
                className={`pb-1 border-b-2 transition-all ${activeCategory === 'MOUNTAINS' ? 'border-coral-500 text-coral-600 font-extrabold scale-105' : 'border-transparent hover:text-slate-800'}`}
              >
                🏔️ MOUNTAINS
              </button>
              <span>•</span>
              <button 
                onClick={() => setActiveCategory('PLAINS')}
                className={`pb-1 border-b-2 transition-all ${activeCategory === 'PLAINS' ? 'border-coral-500 text-coral-600 font-extrabold scale-105' : 'border-transparent hover:text-slate-800'}`}
              >
                🏛️ PLAINS & HERITAGE
              </button>
              <span>•</span>
              <button 
                onClick={() => setActiveCategory('BEACHES')}
                className={`pb-1 border-b-2 transition-all ${activeCategory === 'BEACHES' ? 'border-coral-500 text-coral-600 font-extrabold scale-105' : 'border-transparent hover:text-slate-800'}`}
              >
                🏖️ BEACHES
              </button>
            </div>

            {/* Big Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Spend your vacation with our activities
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Plan budget-friendly trips, access offline itineraries, track expenses, and stay safe across 20 active all-India destinations.
            </p>

            {/* Most Popular Preview Cards */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-black text-slate-400 uppercase tracking-wider block">FEATURED DESTINATIONS</span>
              <div className="grid grid-cols-3 gap-3">
                
                <div onClick={() => navigate('/destination/d1')} className="glass-card p-3 rounded-2xl cursor-pointer hover:-translate-y-1 transition-all border border-white/60">
                  <div className="h-14 rounded-xl bg-gradient-to-tr from-sky-400 to-teal-500 mb-2 flex items-center justify-center text-white font-bold text-xs">🏖️ Goa</div>
                  <h4 className="font-heading font-bold text-slate-800 text-xs">Goa Beaches</h4>
                  <p className="text-[10px] text-slate-500">500K+ Visited</p>
                </div>

                <div onClick={() => navigate('/destination/d3')} className="glass-card p-3 rounded-2xl cursor-pointer hover:-translate-y-1 transition-all border border-white/60">
                  <div className="h-14 rounded-xl bg-gradient-to-tr from-amber-400 to-rose-500 mb-2 flex items-center justify-center text-white font-bold text-xs">🏰 Jaipur</div>
                  <h4 className="font-heading font-bold text-slate-800 text-xs">Jaipur Forts</h4>
                  <p className="text-[10px] text-slate-500">400K+ Visited</p>
                </div>

                <div onClick={() => navigate('/destination/d4')} className="glass-card p-3 rounded-2xl cursor-pointer hover:-translate-y-1 transition-all border border-white/60">
                  <div className="h-14 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-600 mb-2 flex items-center justify-center text-white font-bold text-xs">🌿 Munnar</div>
                  <h4 className="font-heading font-bold text-slate-800 text-xs">Munnar Tea Hills</h4>
                  <p className="text-[10px] text-slate-500">150K+ Visited</p>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Interactive Search Bar */}
          <div className="bg-white/90 backdrop-blur-xl border border-white/80 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4 my-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Accommodation Type */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Accommodation Type</label>
                <select 
                  value={selectedAccommodation}
                  onChange={(e) => setSelectedAccommodation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-extrabold text-slate-800 outline-none focus:ring-2 focus:ring-ocean-500 cursor-pointer"
                >
                  <option value="Luxury Beach Resorts">🏨 Luxury Beach Resorts</option>
                  <option value="Himalayan Heritage Homestays">🏡 Himalayan Heritage Homestays</option>
                  <option value="Kerala Backwater Houseboats">⛵ Kerala Backwater Houseboats</option>
                  <option value="Royal Rajput Haveli Palaces">🏰 Royal Rajput Haveli Palaces</option>
                  <option value="Thar Desert Tent Camping">🏕️ Thar Desert Tent Camping</option>
                  <option value="Eco Beach Huts & Treehouses">🌴 Eco Beach Huts & Treehouses</option>
                  <option value="Youth Backpacker Hostels">🎒 Youth Backpacker Hostels</option>
                  <option value="Boutique Heritage Hotels">🏛️ Boutique Heritage Hotels</option>
                </select>
              </div>

              {/* Destination City */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Destination City</label>
                <select 
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-extrabold text-slate-800 outline-none focus:ring-2 focus:ring-ocean-500 cursor-pointer"
                >
                  <option value="Goa Beach Resort">Goa Beach Coast</option>
                  <option value="Jaipur Palace">Jaipur Pink City</option>
                  <option value="Kerala Backwaters">Kerala Backwaters</option>
                  <option value="Manali Himalayas">Manali Himalayas</option>
                  <option value="Srinagar Dal Lake">Srinagar Kashmir</option>
                  <option value="Leh Ladakh">Leh Ladakh Desert</option>
                </select>
              </div>

              {/* Guests */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Travelers</label>
                <select 
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-extrabold text-slate-800 outline-none focus:ring-2 focus:ring-ocean-500 cursor-pointer"
                >
                  <option value="1 Solo Traveler">1 Solo Traveler 🎒</option>
                  <option value="2 Adults, 1 Room">2 Adults, 1 Room 👫</option>
                  <option value="Family (2 Adults + 2 Kids)">Family (4 Travelers) 👨‍👩‍👧‍👦</option>
                  <option value="Group (5+ Friends)">Group Tour (5+ Friends) 🚌</option>
                </select>
              </div>

            </div>

            {/* Search Button */}
            <button
              onClick={() => navigate('/explore')}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-heading font-extrabold text-sm shadow-lg shadow-coral-200 btn-bounce flex items-center justify-center gap-2"
            >
              <FiSearch />
              <span>Search Destinations & Stays</span>
            </button>
          </div>

        </div>

        {/* RIGHT SIDE (42%): DYNAMIC CATEGORY-BASED 1-SECOND AUTO-CHANGING SLIDESHOW */}
        <div className="w-full lg:w-[42%] min-h-[450px] lg:min-h-screen relative overflow-hidden bg-slate-950 flex flex-col justify-end p-8">
          
          {/* Slideshow Image with Smooth Crossfade */}
          <div className="absolute inset-0 z-0">
            <img 
              src={currentSlide.image} 
              alt={currentSlide.city} 
              className="w-full h-full object-cover object-center transition-all duration-700 filter brightness-90 transform scale-105"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/20"></div>
          </div>

          {/* 1-Second Category-Synced Landmark Tag */}
          <div className="relative z-10 max-w-md space-y-3 bg-slate-950/85 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl">
            
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-amber-400 text-slate-950 text-[10px] font-black rounded-full uppercase tracking-wider">
                ⚡ 1-Sec Tour • {activeCategory}
              </span>
              <span className="text-xs text-slate-300 font-bold">
                {slideIndex + 1} / {currentCategorySlides.length}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-heading font-extrabold text-white leading-tight">
                📍 {currentSlide.city}
              </h3>
              <p className="text-amber-300 text-xs font-bold">
                {currentSlide.tag}
              </p>
            </div>

            {/* Slide Progress Dots */}
            <div className="flex gap-1.5 pt-2">
              {currentCategorySlides.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === slideIndex ? 'w-8 bg-amber-400' : 'w-2 bg-white/30'
                  }`}
                ></div>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* LOGIN / SIGNUP MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100 relative space-y-6">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <FiX size={18} />
            </button>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-ocean-500 text-white font-black text-2xl flex items-center justify-center mx-auto shadow-md">
                🧭
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-slate-900">
                {isSignUpMode ? 'Create YatraSathi Account' : 'Welcome Back'}
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                {isSignUpMode ? 'Join thousands of domestic Indian travelers' : 'Sign in to access your saved trips & offline guides'}
              </p>
            </div>

            {authError && (
              <div className="bg-red-50 text-red-600 p-3 rounded-xl text-xs font-bold text-center">
                {authError}
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {isSignUpMode && (
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Manthan Sharma"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-ocean-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="traveler@yatrasathi.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-ocean-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-ocean-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-heading font-extrabold text-sm shadow-lg shadow-coral-200 btn-bounce"
              >
                {isSignUpMode ? 'Sign Up Now' : 'Sign In'}
              </button>
            </form>

            <div className="text-center pt-2">
              <button
                onClick={() => setIsSignUpMode(!isSignUpMode)}
                className="text-xs font-bold text-ocean-600 hover:underline"
              >
                {isSignUpMode ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ABOUT MODAL */}
      {aboutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-slate-100 relative space-y-5">
            <button 
              onClick={() => setAboutModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <FiX size={18} />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-ocean-50 text-ocean-600 rounded-2xl text-2xl">
                ℹ️
              </div>
              <div>
                <h3 className="text-2xl font-heading font-extrabold text-slate-900">About YatraSathi</h3>
                <p className="text-xs text-ocean-600 font-bold uppercase tracking-wider">Smart Tourism Companion for India</p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              YatraSathi is an open-source, smart travel companion designed specifically for domestic Indian tourists, budget travelers, students, and solo adventurers across 20 top destinations in India.
            </p>
          </div>
        </div>
      )}

      {/* PREMIUM MODAL */}
      {premiumModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-amber-200 relative space-y-5">
            <button 
              onClick={() => setPremiumModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <FiX size={18} />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl text-2xl">
                👑
              </div>
              <div>
                <h3 className="text-2xl font-heading font-extrabold text-slate-900">YatraSathi Premium Gold</h3>
                <p className="text-xs text-amber-700 font-bold uppercase tracking-wider">Unlock Ultimate Travel Privileges</p>
              </div>
            </div>

            <button
              onClick={() => { setPremiumModalOpen(false); navigate('/explore'); }}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-heading font-extrabold text-sm shadow-lg shadow-amber-200 btn-bounce text-center"
            >
              Start 14-Day Free Gold Trial
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
