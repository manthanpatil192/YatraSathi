import React, { useState, useEffect } from 'react';
import { FiX, FiCheckCircle, FiAward } from 'react-icons/fi';

export default function RoyalWelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem('seen_royal_welcome');
    if (!hasSeenWelcome) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('seen_royal_welcome', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in text-white">
      
      {/* Royal Card Container */}
      <div className="relative bg-gradient-to-b from-amber-950 via-slate-950 to-slate-950 border-2 border-amber-400/60 w-full max-w-xl rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 text-center overflow-hidden">
        
        {/* Royal Decorative Mandala Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-amber-300 transition-colors border border-amber-400/30"
        >
          <FiX size={18} />
        </button>

        {/* Royal Crown Header */}
        <div className="space-y-3 relative z-10">
          <div className="w-16 h-16 bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-200 text-slate-950 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-xl border-2 border-amber-300 font-black animate-bounce" style={{ animationDuration: '3s' }}>
            👑
          </div>

          <span className="inline-block text-[11px] font-black uppercase tracking-[0.25em] text-amber-300 bg-amber-950/80 px-4 py-1 rounded-full border border-amber-400/40">
            PADHARO MHARE DESH • ROYAL WELCOME
          </span>

          <h2 className="text-3xl sm:text-4xl font-heading font-black text-amber-200 tracking-tight leading-tight">
            Welcome to YatraSathi
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-medium">
            Your elite tourism companion for safe, budget-friendly, and culturally rich adventures across 20 active all-India destinations.
          </p>
        </div>

        {/* Royal Feature Badges */}
        <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold relative z-10">
          <div className="p-3 bg-slate-900/90 rounded-2xl border border-amber-400/30 text-amber-200 flex items-center justify-center gap-2">
            <span>🗺️</span> 20 Active All-India Cities
          </div>
          <div className="p-3 bg-slate-900/90 rounded-2xl border border-amber-400/30 text-amber-200 flex items-center justify-center gap-2">
            <span>🔊</span> 1.5-Min Web Audio Guides
          </div>
          <div className="p-3 bg-slate-900/90 rounded-2xl border border-amber-400/30 text-amber-200 flex items-center justify-center gap-2">
            <span>⚡</span> Groq AI Travel Assistant
          </div>
          <div className="p-3 bg-slate-900/90 rounded-2xl border border-amber-400/30 text-amber-200 flex items-center justify-center gap-2">
            <span>🛡️</span> Live Safety & Crowd Radar
          </div>
        </div>

        {/* Royal CTA Button */}
        <div className="pt-4 relative z-10">
          <button
            onClick={handleClose}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-heading font-black text-sm uppercase tracking-widest shadow-xl shadow-amber-500/20 btn-bounce"
          >
            Begin Royal Yatra 🏰
          </button>
        </div>

      </div>
    </div>
  );
}
