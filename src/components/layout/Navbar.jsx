import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FiCompass, FiMenu, FiX, FiUser, FiPlusCircle, FiShield, FiMapPin, FiDollarSign, FiFolder, FiCheckSquare, FiSun } from 'react-icons/fi';
import { useAuth } from '../../hooks/useAuth';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (location.pathname === '/') return null;

  const navLinks = [
    { name: 'Home', path: '/home', icon: '🏠' },
    { name: 'Explore', path: '/explore', icon: '🗺️' },
    { name: 'Itinerary', path: '/itinerary', icon: '📅' },
    { name: 'Budget', path: '/budget', icon: '💰' },
    { name: 'Safety', path: '/safety', icon: '🛡️' },
    { name: 'Packing', path: '/packing', icon: '🎒' },
    { name: 'Eco Discovery', path: '/eco-discovery', icon: '🌿' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/90 backdrop-blur-md shadow-xl py-3 border-b border-slate-800' 
        : 'bg-slate-950/80 backdrop-blur-sm py-4 border-b border-slate-800/60'
    }`}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-ocean-600 via-seafoam-500 to-amber-400 p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-xl">
              🧭
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-white leading-none">
              YatraSathi<span className="text-coral-500">.</span>
            </span>
            <span className="text-[9px] font-bold text-amber-400 uppercase tracking-wider leading-none mt-1">
              Smart Tourism Companion
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                  isActive
                    ? 'bg-ocean-600 text-white shadow-md border border-teal-400/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`
              }
            >
              <span className="text-sm">{link.icon}</span>
              <span>{link.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Right Controls: Plan Trip CTA & Profile / Logout */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => navigate('/itinerary')}
            className="btn-bounce px-4 py-2 rounded-xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-heading font-extrabold text-xs shadow-md flex items-center gap-1.5"
          >
            <FiPlusCircle className="text-sm" />
            <span>Plan Trip</span>
          </button>

          {user ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 rounded-xl border border-slate-800">
                <div className="w-6 h-6 rounded-full bg-ocean-600 text-white font-black text-xs flex items-center justify-center">
                  {user.name ? user.name[0].toUpperCase() : 'U'}
                </div>
                <span className="text-xs font-bold text-slate-200 max-w-[90px] truncate">
                  {user.name || 'Traveler'}
                </span>
              </div>
              <button
                onClick={logout}
                className="text-xs font-bold text-slate-400 hover:text-red-400 px-2 py-1.5 transition-colors"
                title="Logout"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate('/')}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors"
              title="Sign In"
            >
              <FiUser size={18} />
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 border border-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950 border-b border-slate-800 px-6 py-6 space-y-3 shadow-2xl animate-fade-in text-white">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-extrabold transition-all ${
                  isActive
                    ? 'bg-ocean-600 text-white shadow-md'
                    : 'text-slate-300 hover:bg-slate-900'
                }`
              }
            >
              <span className="text-base">{link.icon}</span>
              <span>{link.name}</span>
            </NavLink>
          ))}

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); navigate('/itinerary'); }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-heading font-extrabold text-xs shadow-md text-center"
            >
              + Create New Itinerary
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
