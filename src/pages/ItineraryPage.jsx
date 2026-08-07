import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FiPlus, FiTrash2, FiClock, FiMapPin, FiSave, FiCheck, FiCompass, FiInfo, FiLayers } from 'react-icons/fi';
import { destinations } from '../data/destinations';
import { apiService } from '../services/api';

export default function ItineraryPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialAddId = searchParams.get('add');

  const [tripName, setTripName] = useState('My India Adventure');
  const [selectedDestId, setSelectedDestId] = useState(initialAddId || 'd1');
  const [days, setDays] = useState([
    {
      id: 'day-1',
      title: 'Day 1: Arrival, Heritage Landmarks & Sunset Walk',
      stops: [
        { id: 's1', name: 'Hotel Check-in & Rest', time: '10:00 AM', duration: '2 hrs', type: 'stay' },
        { id: 's2', name: 'Historic Heritage Exploration Walk', time: '02:00 PM', duration: '3 hrs', type: 'visit' },
        { id: 's3', name: 'Sunset Promenade & Local Dinner', time: '06:30 PM', duration: '2 hrs', type: 'food' }
      ]
    },
    {
      id: 'day-2',
      title: 'Day 2: Top Attractions & Local Food Tasting Tour',
      stops: [
        { id: 's4', name: 'Famous Cultural Landmark Visit', time: '09:00 AM', duration: '3 hrs', type: 'visit' },
        { id: 's5', name: 'Iconic Regional Food & Street Feast', time: '01:00 PM', duration: '2 hrs', type: 'food' }
      ]
    }
  ]);

  const [savedSuccess, setSavedSuccess] = useState(false);
  const selectedDest = destinations.find(d => String(d.id) === String(selectedDestId)) || destinations[0];

  // Google Travel-Style Smart Non-Repeating Suggestions Engine
  const generateGoogleStyleSuggestions = (destName, dayIndex) => {
    const suggestionsByDay = [
      // Day 1 Suggestions
      [
        { name: `${destName} Airport/Station Pickup & Check-in`, time: '09:00 AM', duration: '2 hrs', type: 'transport' },
        { name: `${destName} Main Heritage Square Walk`, time: '02:00 PM', duration: '2.5 hrs', type: 'visit' },
        { name: `Traditional ${destName} Evening Sunset Viewpoint`, time: '05:30 PM', duration: '1.5 hrs', type: 'visit' },
        { name: `Authentic ${destName} Thali & Regional Dinner`, time: '07:30 PM', duration: '2 hrs', type: 'food' }
      ],
      // Day 2 Suggestions
      [
        { name: `Morning Guided Tour of ${destName} Forts & Temples`, time: '08:30 AM', duration: '3.5 hrs', type: 'visit' },
        { name: `Iconic Street Food & Spice Market Crawl`, time: '01:00 PM', duration: '2 hrs', type: 'food' },
        { name: `${destName} Museum & Cultural Art Gallery`, time: '03:30 PM', duration: '2 hrs', type: 'visit' },
        { name: `Live Folk Music & Cultural Dance Performance`, time: '07:00 PM', duration: '2 hrs', type: 'visit' }
      ],
      // Day 3 Suggestions
      [
        { name: `Early Sunrise Viewpoint & Nature Trek`, time: '06:00 AM', duration: '2.5 hrs', type: 'visit' },
        { name: `Adventure & Water Sports Session`, time: '10:30 AM', duration: '3 hrs', type: 'visit' },
        { name: `Scenic River/Lake Boat Cruise`, time: '04:00 PM', duration: '2 hrs', type: 'visit' },
        { name: `Night Market Souvenir Shopping`, time: '07:30 PM', duration: '2 hrs', type: 'visit' }
      ],
      // Day 4+ Suggestions
      [
        { name: `Offbeat Hidden Gem & Secret Village Tour`, time: '09:30 AM', duration: '3 hrs', type: 'visit' },
        { name: `Organic Farm Visit & Local Cooking Workshop`, time: '01:30 PM', duration: '2.5 hrs', type: 'food' },
        { name: `Souvenir Shopping & Handicrafts Center`, time: '05:00 PM', duration: '2 hrs', type: 'visit' },
        { name: `Pack & Departure Transfer`, time: '08:00 PM', duration: '2 hrs', type: 'transport' }
      ]
    ];

    const poolIndex = Math.min(dayIndex, suggestionsByDay.length - 1);
    return suggestionsByDay[poolIndex];
  };

  const addDay = () => {
    const nextDayNum = days.length + 1;
    const suggestions = generateGoogleStyleSuggestions(selectedDest.name, nextDayNum - 1);

    const newDay = {
      id: `day-${Date.now()}`,
      title: `Day ${nextDayNum}: Google Smart Plan for ${selectedDest.name}`,
      stops: suggestions
    };

    setDays([...days, newDay]);
  };

  const addStopToDay = (dayId) => {
    const existingStops = days.find(d => d.id === dayId)?.stops || [];
    const stopNum = existingStops.length + 1;

    // Pick unique stop name from destination activities or attractions
    let newStopName = `${selectedDest.name} Attraction #${stopNum}`;
    if (selectedDest.travelDestinationsInCity && selectedDest.travelDestinationsInCity[stopNum - 1]) {
      newStopName = selectedDest.travelDestinationsInCity[stopNum - 1].name;
    } else if (selectedDest.activities && selectedDest.activities[stopNum - 1]) {
      newStopName = selectedDest.activities[stopNum - 1].name;
    }

    // Ensure non-repeating name
    const alreadyExists = existingStops.some(s => s.name === newStopName);
    if (alreadyExists) {
      newStopName = `Explore ${selectedDest.name} Scenic Spot #${Date.now().toString().slice(-3)}`;
    }

    const newStop = {
      id: `s-${Date.now()}`,
      name: newStopName,
      time: '03:00 PM',
      duration: '2 hrs',
      type: 'visit'
    };

    setDays(days.map(d => d.id === dayId ? { ...d, stops: [...d.stops, newStop] } : d));
  };

  const deleteStop = (dayId, stopId) => {
    setDays(days.map(d => d.id === dayId ? { ...d, stops: d.stops.filter(s => s.id !== stopId) } : d));
  };

  const deleteDay = (dayId) => {
    if (days.length <= 1) return;
    setDays(days.filter(d => d.id !== dayId));
  };

  const handleSaveItinerary = async () => {
    const itineraryData = {
      name: tripName,
      destinationId: selectedDest.id,
      destinationName: selectedDest.name,
      days: days,
      createdAt: new Date().toISOString()
    };

    await apiService.saveItinerary(itineraryData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-32 text-white relative z-10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Bar */}
        <div className="bg-slate-900/85 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full text-xs font-black uppercase tracking-wider">
              <span>📅 Day-by-Day AI Trip Builder</span>
            </div>
            
            <input 
              type="text"
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
              className="text-2xl sm:text-3xl font-heading font-extrabold bg-transparent text-white border-b border-dashed border-slate-600 focus:border-amber-400 outline-none w-full pb-1"
            />

            <p className="text-xs text-slate-300">
              Customize non-repeating daily schedules inspired by Google Travel itineraries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <select
              value={selectedDestId}
              onChange={(e) => setSelectedDestId(e.target.value)}
              className="w-full sm:w-auto bg-slate-950 border border-slate-700 text-amber-300 rounded-2xl px-4 py-3 text-xs font-extrabold outline-none cursor-pointer"
            >
              {destinations.map(d => (
                <option key={d.id} value={d.id}>📍 {d.name} ({d.state})</option>
              ))}
            </select>

            <button
              onClick={handleSaveItinerary}
              className="w-full sm:w-auto btn-bounce px-6 py-3 rounded-2xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-heading font-extrabold text-xs shadow-lg shadow-coral-500/20 flex items-center justify-center gap-2"
            >
              {savedSuccess ? <FiCheck /> : <FiSave />}
              <span>{savedSuccess ? 'Saved to Offline DB!' : 'Save Itinerary'}</span>
            </button>
          </div>
        </div>

        {/* Days Columns Grid */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-heading font-extrabold text-white flex items-center gap-2">
              <FiLayers className="text-amber-400" />
              <span>Day-Wise Travel Schedule ({days.length} Days)</span>
            </h2>

            <button
              onClick={addDay}
              className="px-4 py-2.5 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs shadow-md flex items-center gap-1.5 transition-colors"
            >
              <FiPlus /> Add Next Day (Google AI Plan)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {days.map((day, idx) => (
              <div 
                key={day.id}
                className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/80 shadow-2xl flex flex-col justify-between space-y-4"
              >
                <div className="flex justify-between items-start border-b border-slate-800 pb-3">
                  <h3 className="font-heading font-extrabold text-base text-amber-300 leading-snug">
                    {day.title}
                  </h3>
                  
                  {days.length > 1 && (
                    <button
                      onClick={() => deleteDay(day.id)}
                      className="text-slate-400 hover:text-red-400 transition-colors p-1"
                      title="Delete Day"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  )}
                </div>

                {/* Stops List */}
                <div className="space-y-3 flex-1">
                  {day.stops.map((stop) => (
                    <div 
                      key={stop.id}
                      className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800/90 flex items-start justify-between gap-3 group hover:border-slate-700 transition-colors"
                    >
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-extrabold text-white">{stop.name}</span>
                        </div>
                        <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400">
                          <span className="flex items-center gap-1 text-teal-400"><FiClock /> {stop.time}</span>
                          <span>({stop.duration})</span>
                        </div>
                      </div>

                      <button
                        onClick={() => deleteStop(day.id, stop.id)}
                        className="text-slate-500 hover:text-red-400 transition-colors p-1 opacity-60 group-hover:opacity-100"
                      >
                        <FiTrash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add Unique Stop Button */}
                <button
                  onClick={() => addStopToDay(day.id)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-1 transition-colors mt-2"
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
