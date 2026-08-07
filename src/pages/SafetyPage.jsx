import React, { useState } from 'react';
import SOSButton from '../components/safety/SOSButton';
import CheckInTimer from '../components/safety/CheckInTimer';
import CrowdIndicator from '../components/safety/CrowdIndicator';
import { Shield, AlertCircle, Phone, HeartPulse, ShieldCheck, Info, ChevronDown, ChevronUp } from 'lucide-react';

const SafetyPage = () => {
  const [activeTip, setActiveTip] = useState(null);

  const tips = [
    {
      title: 'Scam Avoidance',
      content: 'Always negotiate taxi fares before getting in. Avoid unsolicited tour guides offering "special" discounts.'
    },
    {
      title: 'Local Emergency Numbers',
      content: 'Save local embassy numbers and local equivalents of 911 (like 112) in your phone before traveling.'
    },
    {
      title: 'Secure Your Valuables',
      content: 'Use a money belt or hidden pouch. Never leave bags unattended, especially in transit hubs.'
    },
    {
      title: 'Share Your Itinerary',
      content: 'Always let someone back home know your planned route and accommodation details.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0] font-sans pb-20">
      {/* Hero Header */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#1A7A8A] text-white pt-24 pb-32 px-6 rounded-b-[3rem] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2B9EB3]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E76F51]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Connected to Safety Center
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tight text-white drop-shadow-sm">
              Your Safety is <br className="hidden md:block"/> Our Priority
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
              Real-time monitoring, emergency assistance, and local insights to keep you secure on your journey.
            </p>
          </div>
          
          {/* Emergency Notice Banner */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl max-w-sm shadow-xl">
            <div className="flex items-start gap-4">
              <div className="bg-rose-500/20 p-3 rounded-xl">
                <AlertCircle className="w-8 h-8 text-rose-400" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Active Alert</h4>
                <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                  Heavy rain expected in coastal regions this evening. Please adjust travel plans accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - 3 Column Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: SOS & Quick Calls */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-8 h-full transform transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="text-center">
              <h2 className="text-2xl font-black text-slate-800 mb-2">Emergency Response</h2>
              <p className="text-slate-500 text-sm font-medium">Immediate assistance when you need it</p>
            </div>
            
            <div className="py-4">
              <SOSButton />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <a href="tel:112" className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-rose-50 border border-slate-100 hover:border-rose-200 transition-colors group">
                <Phone className="w-6 h-6 text-slate-400 group-hover:text-rose-500 mb-2 transition-colors" />
                <span className="font-bold text-slate-800 text-sm text-center">National SOS</span>
                <span className="text-xs font-bold text-slate-400">112</span>
              </a>
              <a href="tel:100" className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-colors group">
                <Shield className="w-6 h-6 text-slate-400 group-hover:text-blue-500 mb-2 transition-colors" />
                <span className="font-bold text-slate-800 text-sm text-center">Police</span>
                <span className="text-xs font-bold text-slate-400">100</span>
              </a>
              <a href="tel:108" className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 transition-colors group">
                <HeartPulse className="w-6 h-6 text-slate-400 group-hover:text-emerald-500 mb-2 transition-colors" />
                <span className="font-bold text-slate-800 text-sm text-center">Ambulance</span>
                <span className="text-xs font-bold text-slate-400">108</span>
              </a>
              <a href="tel:1091" className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-purple-50 border border-slate-100 hover:border-purple-200 transition-colors group">
                <ShieldCheck className="w-6 h-6 text-slate-400 group-hover:text-purple-500 mb-2 transition-colors" />
                <span className="font-bold text-slate-800 text-sm text-center">Women Help</span>
                <span className="text-xs font-bold text-slate-400">1091</span>
              </a>
            </div>
          </div>

          {/* Center Column: Timer */}
          <div className="h-full flex flex-col justify-center transform transition-all hover:-translate-y-1">
            <CheckInTimer />
          </div>

          {/* Right Column: Crowd & Tips */}
          <div className="flex flex-col gap-8 h-full">
            {/* Crowd Tracker */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 transform transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-800">Live Crowd Status</h3>
                  <p className="text-slate-500 text-sm font-medium">Avoid heavily congested areas</p>
                </div>
              </div>
              <div className="min-h-[200px]">
                <CrowdIndicator />
              </div>
            </div>

            {/* Travel Safety Tips */}
            <div className="bg-gradient-to-br from-[#2B9EB3] to-[#1A7A8A] rounded-3xl p-6 md:p-8 shadow-xl shadow-cyan-200/50 text-white transform transition-all hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="text-xl font-extrabold mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-cyan-200" />
                Safety Tips
              </h3>
              <div className="space-y-3">
                {tips.map((tip, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setActiveTip(activeTip === index ? null : index)}
                      className="w-full px-5 py-4 flex items-center justify-between font-bold text-left hover:bg-white/5 transition-colors"
                    >
                      {tip.title}
                      {activeTip === index ? (
                        <ChevronUp className="w-5 h-5 text-cyan-200 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-cyan-200 shrink-0" />
                      )}
                    </button>
                    <div 
                      className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${activeTip === index ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-cyan-50 text-sm leading-relaxed">
                        {tip.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SafetyPage;
