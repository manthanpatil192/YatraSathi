import React, { useState } from 'react';
import { FiShield, FiPhoneCall, FiClock, FiUsers, FiSun, FiCloudRain, FiWind, FiCheckCircle, FiAlertCircle, FiRefreshCw } from 'react-icons/fi';
import SOSButton from '../components/safety/SOSButton';
import CheckInTimer from '../components/safety/CheckInTimer';
import { destinations } from '../data/destinations';

export default function SafetyPage() {
  const [selectedCityId, setSelectedCityId] = useState('d1');
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
  const [isRefreshing, setIsRefreshing] = useState(false);

  const selectedCity = destinations.find(d => String(d.id) === String(selectedCityId)) || destinations[0];

  const crowdRadarData = {
    d1: { level: 'Moderate', density: '62%', status: '🟡 Moderate Footfall', peakTime: '05:00 PM - 09:00 PM', weather: '28°C Sunny', humidity: '68%', wind: '14 km/h' },
    d2: { level: 'High', density: '85%', status: '🔴 High Tourist Rush', peakTime: '11:00 AM - 04:00 PM', weather: '16°C Clear Mist', humidity: '45%', wind: '10 km/h' },
    d3: { level: 'Moderate', density: '58%', status: '🟡 Moderate Footfall', peakTime: '10:00 AM - 03:00 PM', weather: '32°C Clear Sky', humidity: '40%', wind: '8 km/h' },
    d4: { level: 'Low', density: '25%', status: '🟢 Peaceful & Quiet', peakTime: '09:00 AM - 12:00 PM', weather: '21°C Pleasant Breeze', humidity: '72%', wind: '12 km/h' }
  };

  const currentCrowd = crowdRadarData[selectedCityId] || crowdRadarData.d1;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <div className="min-h-screen pt-28 pb-32 text-white relative z-10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Full-Bleed Coastal Ridge Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden min-h-[240px] border border-slate-700/80 shadow-2xl p-6 sm:p-10 flex flex-col justify-end">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80" 
            alt="Misty Pine Forest Background" 
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.35] transform scale-105 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <span>🛡️ 24/7 TOURIST SAFETY RADAR</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
                Emergency SOS & Live Crowd Radar
              </h1>
              <p className="text-slate-200 text-xs sm:text-sm font-medium max-w-2xl">
                Access instant GPS SOS broadcasting, live real-time crowd density meters, weather status, and national helplines.
              </p>
            </div>

            <button
              onClick={handleRefresh}
              className="px-4 py-2.5 rounded-2xl bg-slate-950/90 hover:bg-slate-900 text-slate-200 font-bold text-xs border border-slate-700 flex items-center gap-2 transition-colors shrink-0 backdrop-blur-md"
            >
              <FiRefreshCw className={isRefreshing ? 'animate-spin' : ''} />
              <span>Updated: {lastUpdated}</span>
            </button>
          </div>
        </div>

        {/* Top SOS & Check-in Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-5 bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/80 shadow-xl flex flex-col items-center justify-center text-center space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-heading font-extrabold text-white">Emergency SOS Alert</h2>
              <p className="text-xs text-slate-400">Broadcast live GPS pin to emergency helplines & family</p>
            </div>

            <SOSButton />
          </div>

          <div className="lg:col-span-7 bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/80 shadow-xl space-y-6">
            <div className="space-y-1 border-b border-slate-800 pb-4">
              <h2 className="text-2xl font-heading font-extrabold text-white">Solo Traveler Check-in Radar</h2>
              <p className="text-xs text-slate-400">Set automated check-in countdown timers while exploring solo</p>
            </div>

            <CheckInTimer />
          </div>

        </div>

        {/* Real-Time Live Crowd & Weather Radar */}
        <div className="bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-xl space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-heading font-extrabold text-white flex items-center gap-2">
                <FiUsers className="text-teal-400" /> Live Real-Time Crowd & Weather Radar
              </h2>
              <p className="text-xs text-slate-400">Monitor footfall density and weather before visiting landmarks</p>
            </div>

            <select
              value={selectedCityId}
              onChange={(e) => setSelectedCityId(e.target.value)}
              className="bg-slate-950 border border-slate-700 text-amber-300 rounded-xl px-4 py-2 text-xs font-extrabold outline-none cursor-pointer"
            >
              {destinations.map(d => (
                <option key={d.id} value={d.id}>📍 {d.name} ({d.state})</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Live Crowd Density</span>
              <p className="text-2xl font-heading font-black text-amber-300">{currentCrowd.density}</p>
              <span className="text-xs font-bold text-slate-300">{currentCrowd.status}</span>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Peak Hours</span>
              <p className="text-xl font-heading font-extrabold text-sky-300">{currentCrowd.peakTime}</p>
              <span className="text-xs font-medium text-slate-400">Avoid during peak rush</span>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Real-Time Weather</span>
              <p className="text-xl font-heading font-extrabold text-teal-300">{currentCrowd.weather}</p>
              <span className="text-xs font-medium text-slate-400">Humidity: {currentCrowd.humidity}</span>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Wind & Atmosphere</span>
              <p className="text-xl font-heading font-extrabold text-emerald-300">{currentCrowd.wind}</p>
              <span className="text-xs font-medium text-slate-400">Optimal exploration status</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
