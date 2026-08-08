import React, { useState } from 'react';
import { FiCalendar, FiPlus, FiTrash2, FiClock, FiMapPin, FiSave, FiCheck, FiLayers, FiCompass } from 'react-icons/fi';
import { destinations } from '../data/destinations';

export default function ItineraryPage() {
  const [selectedCityId, setSelectedCityId] = useState('d1');
  const [tripTitle, setTripTitle] = useState('My India Adventure');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const [days, setDays] = useState([
    {
      dayNumber: 1,
      title: 'Arrival, Heritage Landmarks & Sunset Walk',
      stops: [
        { id: 's1', time: '10:00 AM', duration: '2 hrs', title: 'Hotel Check-in & Rest' },
        { id: 's2', time: '02:00 PM', duration: '3 hrs', title: 'Historic Heritage Exploration Walk' },
        { id: 's3', time: '06:30 PM', duration: '2 hrs', title: 'Sunset Promenade & Local Dinner' }
      ]
    },
    {
      dayNumber: 2,
      title: 'Top Attractions & Local Food Tasting Tour',
      stops: [
        { id: 's4', time: '09:00 AM', duration: '3 hrs', title: 'Famous Cultural Landmark Visit' },
        { id: 's5', time: '01:00 PM', duration: '2 hrs', title: 'Iconic Regional Food & Street Feast' }
      ]
    }
  ]);

  const selectedCity = destinations.find(d => String(d.id) === String(selectedCityId)) || destinations[0];

  const handleAddDay = () => {
    const nextDayNum = days.length + 1;
    setDays([...days, {
      dayNumber: nextDayNum,
      title: `Day ${nextDayNum}: Sightseeing & Scenic Exploration`,
      stops: [
        { id: `stop-${Date.now()}-1`, time: '10:00 AM', duration: '2.5 hrs', title: 'Morning Scenic Landmark Visit' },
        { id: `stop-${Date.now()}-2`, time: '02:30 PM', duration: '2 hrs', title: 'Local Cuisine Lunch & Market Stroll' }
      ]
    }]);
  };

  const handleAddStop = (dayIdx) => {
    const updated = [...days];
    updated[dayIdx].stops.push({
      id: `stop-${Date.now()}`,
      time: '04:30 PM',
      duration: '1.5 hrs',
      title: 'Custom Destination Visit'
    });
    setDays(updated);
  };

  const handleDeleteStop = (dayIdx, stopId) => {
    const updated = [...days];
    updated[dayIdx].stops = updated[dayIdx].stops.filter(s => s.id !== stopId);
    setDays(updated);
  };

  const handleSaveTrip = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen pt-44 sm:pt-48 lg:pt-52 pb-32 text-white relative z-10 animate-fade-in">
      
      {/* Full Viewport Screen Background Photo */}
      <img 
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" 
        alt="Mountain Valley Background" 
        className="fixed inset-0 w-full h-full object-cover filter brightness-[0.22] pointer-events-none z-0" 
      />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Header Hero Banner (Spacious Top Clearance to prevent text cut-off) */}
        <div className="bg-slate-900/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-4 sm:mt-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <span>🗺️ GOOGLE TRAVEL STYLE AI ITINERARY</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-normal">
              DISCOVERING THE WORLD
            </h1>

            <input
              type="text"
              value={tripTitle}
              onChange={(e) => setTripTitle(e.target.value)}
              className="bg-transparent text-amber-300 text-xl font-heading font-extrabold outline-none border-b border-amber-400/40 pb-1 w-full max-w-md focus:border-amber-400"
            />
            <p className="text-slate-300 text-xs sm:text-sm font-medium">
              Customize non-repeating daily schedules inspired by Google Travel itineraries for {selectedCity.name}.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <div className="space-y-1 w-full sm:w-auto">
              <label className="text-[10px] font-black uppercase text-slate-400">WHERE YOU WANT TO GO?</label>
              <select
                value={selectedCityId}
                onChange={(e) => setSelectedCityId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-amber-300 rounded-2xl px-4 py-2.5 text-xs font-extrabold outline-none cursor-pointer"
              >
                {destinations.map(d => (
                  <option key={d.id} value={d.id}>📍 {d.name} ({d.state})</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSaveTrip}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-heading font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 btn-bounce shrink-0 mt-4 sm:mt-5"
            >
              {savedSuccess ? <FiCheck /> : <FiSave />}
              <span>{savedSuccess ? 'Package Saved!' : 'SAVE TRAVEL PACKAGE'}</span>
            </button>
          </div>
        </div>

        {/* Days Column Builder Grid */}
        <div className="space-y-6">
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <h2 className="text-xl font-heading font-extrabold text-white flex items-center gap-2">
              <FiLayers className="text-amber-400" /> Day-Wise Travel Schedule ({days.length} Days)
            </h2>

            <button
              onClick={handleAddDay}
              className="px-4 py-2 rounded-2xl bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 text-xs font-extrabold flex items-center gap-1.5 transition-colors"
            >
              <FiPlus /> Add Next Day (Google AI Plan)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {days.map((day, dayIdx) => (
              <div 
                key={day.dayNumber}
                className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/80 shadow-xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="font-heading font-extrabold text-sm text-amber-300">
                      Day {day.dayNumber}: {day.title}
                    </span>
                    <button 
                      onClick={() => setDays(days.filter((_, idx) => idx !== dayIdx))}
                      className="text-slate-500 hover:text-red-400 transition-colors p-1"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {day.stops.map(stop => (
                      <div key={stop.id} className="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 space-y-1.5 relative group">
                        <div className="flex items-center justify-between text-[11px] font-bold text-teal-300">
                          <span className="flex items-center gap-1">
                            <FiClock /> {stop.time} <span className="text-slate-400 font-normal">({stop.duration})</span>
                          </span>
                          <button 
                            onClick={() => handleDeleteStop(dayIdx, stop.id)}
                            className="text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <FiTrash2 size={12} />
                          </button>
                        </div>
                        <h4 className="font-extrabold text-xs text-white">{stop.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleAddStop(dayIdx)}
                  className="w-full py-2.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-2xl text-xs font-bold transition-colors flex items-center justify-center gap-1 mt-2"
                >
                  <FiPlus /> Add Attraction Stop
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
