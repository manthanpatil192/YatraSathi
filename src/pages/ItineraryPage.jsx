import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { FiPlus, FiTrash2, FiClock, FiMapPin, FiCoffee, FiTruck, FiHome, FiSave, FiCheckCircle, FiRefreshCw, FiBookOpen, FiInfo, FiX, FiVolume2 } from 'react-icons/fi';
import { apiService } from '../services/api';
import { destinations } from '../data/destinations';
import { speak, stopSpeaking } from '../utils/speechUtils';

const initialDays = [
  {
    id: 'day-1',
    title: 'Day 1: Old Goa Heritage & Coastal Culture',
    culturalTip: 'Old Goa churches feature 16th-century Portuguese Baroque & Manueline architecture.',
    stops: [
      { 
        id: 'stop-1', 
        destId: 'd1',
        name: 'Basilica of Bom Jesus, Old Goa', 
        type: 'visit', 
        time: '09:30 AM', 
        duration: '2 hrs', 
        notes: 'UNESCO World Heritage site housing the preserved mortal remains of St. Francis Xavier.',
        culturalInfo: 'Built between 1594 and 1605, this basilica is a masterpiece of Indo-Portuguese Baroque architecture. The floor is made of marble, and the carved gilded altars depict scenes from the life of St. Francis Xavier. Dress respectfully covering shoulders and knees.'
      },
      { 
        id: 'stop-2', 
        destId: 'd1',
        name: 'Traditional Goan Catholic Lunch at Fontainhas', 
        type: 'food', 
        time: '01:00 PM', 
        duration: '1.5 hrs', 
        notes: 'Try Fish Curry Rice, Pork Vindaloo, and Bebinca dessert.',
        culturalInfo: 'Fontainhas is Goa\'s historic Latin Quarter established in the late 1800s. The colorful yellow, blue, and mint green Portuguese heritage homes are painted annually after the monsoon season according to traditional Portuguese law.'
      },
      { 
        id: 'stop-3', 
        destId: 'd1',
        name: 'Mandovi River Cultural Sunset Cruise', 
        type: 'visit', 
        time: '05:30 PM', 
        duration: '2 hrs', 
        notes: 'Features live Dekhnni & Fugdi traditional Goan folk dances on board.',
        culturalInfo: 'Fugdi is an ancient Goan folk dance performed by women during religious festivals like Shigmo and Ganesh Chaturthi, celebrating harvest and community unity.'
      }
    ]
  },
  {
    id: 'day-2',
    title: 'Day 2: Jaipur Royal Forts & Rajput Dynasty',
    culturalTip: 'Amer Fort combines Hindu and Mughal architectural elements built with red sandstone and marble.',
    stops: [
      { 
        id: 'stop-4', 
        destId: 'd3',
        name: 'Amer Fort & Sheesh Mahal', 
        type: 'visit', 
        time: '09:00 AM', 
        duration: '3 hrs', 
        notes: 'Admire the Hall of Mirrors (Sheesh Mahal) inlaid with thousands of convex glass mirrors.',
        culturalInfo: 'Constructed by Raja Man Singh I in 1592 overlooking Maota Lake. The Sheesh Mahal was engineered so a single candlelight reflected across thousands of tiny mirrors could illuminate the entire royal chamber.'
      },
      { 
        id: 'stop-5', 
        destId: 'd3',
        name: 'Hawa Mahal & Local Craft Bazaar', 
        type: 'visit', 
        time: '02:00 PM', 
        duration: '2 hrs', 
        notes: 'Shop for authentic Jaipuri Block Print fabrics and Meenakari enamel jewelry.',
        culturalInfo: 'Built in 1799 by Maharaja Sawai Pratap Singh. The 953 honeycomb windows (Jharokhas) were designed so royal purdah women could observe street processions without being seen from the outside.'
      }
    ]
  }
];

export default function ItineraryPage() {
  const [searchParams] = useSearchParams();
  const addDestId = searchParams.get('add');
  const [tripName, setTripName] = useState('Golden Triangle & Coastal India Tour');
  const [days, setDays] = useState(initialDays);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');
  const [selectedCulturalStop, setSelectedCulturalStop] = useState(null);

  useEffect(() => {
    if (addDestId) {
      const targetDest = destinations.find(d => String(d.id) === String(addDestId));
      if (targetDest) {
        setDays(prevDays => {
          const updated = [...prevDays];
          if (updated.length > 0) {
            updated[0].stops.push({
              id: `stop-${Date.now()}`,
              destId: targetDest.id,
              name: `Explore ${targetDest.name}`,
              type: 'visit',
              time: '03:00 PM',
              duration: '2.5 hrs',
              notes: targetDest.description,
              culturalInfo: targetDest.culturalInfo || targetDest.audioGuideText
            });
          }
          return updated;
        });
        setSaveStatus(`Added ${targetDest.name} with cultural notes!`);
        setTimeout(() => setSaveStatus(''), 4000);
      }
    }
  }, [addDestId]);

  const getIcon = (type) => {
    switch(type) {
      case 'food': return <FiCoffee className="text-amber-500 text-base shrink-0" />;
      case 'transport': return <FiTruck className="text-slate-500 text-base shrink-0" />;
      case 'stay': return <FiHome className="text-seafoam-500 text-base shrink-0" />;
      case 'visit': default: return <FiMapPin className="text-ocean-500 text-base shrink-0" />;
    }
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const dayIndex = days.findIndex(d => d.id === source.droppableId);
      const newStops = Array.from(days[dayIndex].stops);
      const [removed] = newStops.splice(source.index, 1);
      newStops.splice(destination.index, 0, removed);

      const newDays = [...days];
      newDays[dayIndex].stops = newStops;
      setDays(newDays);
    } else {
      const sourceDayIdx = days.findIndex(d => d.id === source.droppableId);
      const destDayIdx = days.findIndex(d => d.id === destination.droppableId);
      
      const sourceStops = Array.from(days[sourceDayIdx].stops);
      const destStops = Array.from(days[destDayIdx].stops);
      
      const [removed] = sourceStops.splice(source.index, 1);
      destStops.splice(destination.index, 0, removed);

      const newDays = [...days];
      newDays[sourceDayIdx].stops = sourceStops;
      newDays[destDayIdx].stops = destStops;
      setDays(newDays);
    }
  };

  const handleSaveTrip = async () => {
    setSaving(true);
    setSaveStatus('');
    try {
      const tripObj = {
        id: Date.now(),
        name: tripName,
        days: days,
        savedAt: new Date().toISOString()
      };
      const res = await apiService.saveItinerary(tripObj);
      setSaveStatus(res.message || 'Itinerary saved to backend & IndexedDB!');
    } catch (e) {
      setSaveStatus('Saved locally to IndexedDB');
    } finally {
      setSaving(false);
      setTimeout(() => setSaveStatus(''), 4000);
    }
  };

  const addDay = () => {
    const nextNum = days.length + 1;
    setDays([...days, { 
      id: `day-${Date.now()}`, 
      title: `Day ${nextNum}: Local Heritage & Sightseeing`, 
      culturalTip: 'Respect local customs, remove footwear before entering holy places.',
      stops: [] 
    }]);
  };

  const deleteDay = (dayId) => {
    if (days.length === 1) return;
    setDays(days.filter(d => d.id !== dayId));
  };

  const addStop = (dayId) => {
    const newDays = [...days];
    const dayIdx = newDays.findIndex(d => d.id === dayId);
    newDays[dayIdx].stops.push({
      id: `stop-${Date.now()}`,
      name: 'Historical Monument Sightseeing',
      type: 'visit',
      time: '04:00 PM',
      duration: '2 hrs',
      notes: 'Guided walk exploring ancient architecture.',
      culturalInfo: 'India’s monuments represent architectural styles ranging from Dravidian stone carving to Mughal marble inlay and Rajput fortress design.'
    });
    setDays(newDays);
  };

  const deleteStop = (dayId, stopId) => {
    const newDays = [...days];
    const dayIdx = newDays.findIndex(d => d.id === dayId);
    newDays[dayIdx].stops = newDays[dayIdx].stops.filter(s => s.id !== stopId);
    setDays(newDays);
  };

  const totalStopsCount = days.reduce((acc, d) => acc + d.stops.length, 0);

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Banner & Control Bar */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100 flex flex-col md:flex-row justify-between md:items-center gap-6">
          
          <div className="flex flex-col flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-2 w-fit">
              <span>🏛️ Cultural & Historical Itinerary Planner</span>
            </div>
            <input 
              type="text" 
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
              className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-800 bg-transparent border-b-2 border-slate-200 hover:border-ocean-300 focus:border-ocean-500 focus:outline-none transition-colors pb-1 w-full max-w-xl"
              placeholder="Enter Trip Name..."
            />
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mt-2">
              <span>📅 {days.length} Days</span>
              <span>•</span>
              <span>📍 {totalStopsCount} Stops</span>
              <span>•</span>
              <span className="text-seafoam-600 font-bold">✨ Drag & Drop Reorderable</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button 
              onClick={() => setDays(initialDays)}
              className="px-5 py-3 rounded-2xl font-bold text-xs bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
            >
              <FiRefreshCw /> Reset Sample
            </button>

            <button 
              onClick={handleSaveTrip}
              disabled={saving}
              className="px-6 py-3 rounded-2xl font-heading font-bold text-sm bg-gradient-to-r from-coral-500 to-sunset-500 text-white shadow-lg shadow-coral-200 btn-bounce flex items-center gap-2"
            >
              <FiSave />
              <span>{saving ? 'Saving...' : 'Save Itinerary'}</span>
            </button>
          </div>

        </div>

        {/* Status Toast */}
        {saveStatus && (
          <div className="bg-seafoam-500 text-white px-6 py-3 rounded-2xl shadow-lg font-bold text-sm flex items-center gap-2 animate-slide-up">
            <FiCheckCircle className="text-lg" />
            <span>{saveStatus}</span>
          </div>
        )}

        {/* Drag Drop Context Layout */}
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            
            {days.map((day, dayIndex) => (
              <div key={day.id} className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden flex flex-col max-h-[82vh]">
                
                {/* Day Card Header */}
                <div className="bg-gradient-to-r from-ocean-900 via-ocean-800 to-seafoam-900 p-4 text-white flex justify-between items-center sticky top-0 z-10">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full text-xs font-black shrink-0">
                      Day {dayIndex + 1}
                    </span>
                    <input
                      type="text"
                      value={day.title}
                      onChange={(e) => {
                        const updated = [...days];
                        updated[dayIndex].title = e.target.value;
                        setDays(updated);
                      }}
                      className="font-heading font-bold text-sm bg-transparent border-b border-transparent hover:border-white/40 focus:border-white focus:outline-none text-white truncate w-full"
                    />
                  </div>

                  <button 
                    onClick={() => deleteDay(day.id)} 
                    className="text-white/70 hover:text-white transition-colors p-1 shrink-0 ml-2"
                    title="Delete Day"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>

                {/* Cultural Heritage Banner for the Day */}
                {day.culturalTip && (
                  <div className="bg-amber-50 p-3 border-b border-amber-100 text-amber-900 text-xs font-semibold flex items-start gap-2">
                    <span className="text-base shrink-0">📜</span>
                    <span className="leading-snug">{day.culturalTip}</span>
                  </div>
                )}

                {/* Droppable Stops Column */}
                <Droppable droppableId={day.id}>
                  {(provided, snapshot) => (
                    <div 
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={`p-4 flex-1 overflow-y-auto space-y-3 min-h-[160px] transition-colors ${
                        snapshot.isDraggingOver ? 'bg-ocean-50/40' : ''
                      }`}
                    >
                      {day.stops.map((stop, index) => (
                        <Draggable key={stop.id} draggableId={stop.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`bg-white border p-4 rounded-2xl shadow-sm flex flex-col gap-2 transition-all ${
                                snapshot.isDragging ? 'shadow-2xl border-ocean-400 ring-2 ring-ocean-300 scale-105 z-50' : 'border-slate-100 hover:border-ocean-200'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex items-start gap-2.5 min-w-0 flex-1">
                                  <div className="mt-0.5 p-2 bg-slate-50 rounded-xl shrink-0 border border-slate-100">
                                    {getIcon(stop.type)}
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-heading font-extrabold text-slate-800 text-sm leading-tight truncate">
                                      {stop.name}
                                    </h4>
                                    <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 mt-1">
                                      <span className="flex items-center gap-1"><FiClock className="text-ocean-500" /> {stop.time}</span>
                                      <span>•</span>
                                      <span>{stop.duration}</span>
                                    </div>
                                  </div>
                                </div>

                                <button 
                                  onClick={() => deleteStop(day.id, stop.id)} 
                                  className="text-slate-300 hover:text-red-500 p-1 shrink-0 transition-colors"
                                >
                                  <FiTrash2 size={14} />
                                </button>
                              </div>

                              {/* Stop Notes */}
                              {stop.notes && (
                                <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 leading-relaxed">
                                  {stop.notes}
                                </p>
                              )}

                              {/* Cultural Info Button Trigger */}
                              <button
                                onClick={() => setSelectedCulturalStop(stop)}
                                className="mt-1 py-1.5 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-extrabold text-[11px] flex items-center justify-between border border-amber-200/80 transition-colors"
                              >
                                <span className="flex items-center gap-1.5">
                                  <span>📜</span> Cultural & Historic Info
                                </span>
                                <span className="text-[10px] text-amber-700 underline">Read →</span>
                              </button>

                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>

                {/* Card Footer: Add Stop */}
                <div className="p-3 border-t border-slate-100 bg-slate-50">
                  <button 
                    onClick={() => addStop(day.id)}
                    className="w-full py-2.5 border-2 border-dashed border-slate-300 rounded-2xl text-slate-600 font-bold text-xs hover:border-ocean-400 hover:text-ocean-600 hover:bg-white transition-all flex items-center justify-center gap-1.5"
                  >
                    <FiPlus /> Add Stop
                  </button>
                </div>

              </div>
            ))}

            {/* Add New Day Column Button */}
            <button 
              onClick={addDay}
              className="h-44 border-2 border-dashed border-slate-300 rounded-3xl flex flex-col items-center justify-center text-slate-500 hover:border-ocean-400 hover:text-ocean-600 hover:bg-white transition-all font-heading font-bold text-sm p-6 text-center"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-2 shadow-inner">
                <FiPlus size={24} />
              </div>
              <span>Add Day {days.length + 1}</span>
            </button>

          </div>
        </DragDropContext>

      </div>

      {/* Cultural & Historic Info Drawer / Modal */}
      {selectedCulturalStop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden space-y-6">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 p-6 text-white flex justify-between items-start">
              <div className="space-y-1">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                  📜 Historical & Cultural Heritage
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-white leading-tight">
                  {selectedCulturalStop.name}
                </h3>
              </div>

              <button 
                onClick={() => { setSelectedCulturalStop(null); stopSpeaking(); }}
                className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
              
              <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200 space-y-2">
                <span className="text-xs font-extrabold text-amber-900 uppercase tracking-wider block">
                  Cultural Significance & History
                </span>
                <p className="text-slate-800 text-sm leading-relaxed font-semibold">
                  {selectedCulturalStop.culturalInfo || 'Rich heritage site representing regional Indian art, architecture, and centuries of tradition.'}
                </p>
              </div>

              {selectedCulturalStop.notes && (
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Visitor Tips & Etiquette
                  </span>
                  <p className="text-slate-700 text-xs font-medium leading-relaxed">
                    {selectedCulturalStop.notes}
                  </p>
                </div>
              )}

              {/* Audio Narration Trigger */}
              <div className="pt-2">
                <button
                  onClick={() => speak(selectedCulturalStop.culturalInfo || selectedCulturalStop.notes)}
                  className="w-full py-3.5 rounded-2xl bg-ocean-500 hover:bg-ocean-600 text-white font-heading font-bold text-sm shadow-md flex items-center justify-center gap-2 btn-bounce"
                >
                  <FiVolume2 size={18} />
                  <span>Listen to Audio Guide Narration</span>
                </button>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
              <button
                onClick={() => { setSelectedCulturalStop(null); stopSpeaking(); }}
                className="px-8 py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs hover:bg-slate-900"
              >
                Close Heritage Info
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
