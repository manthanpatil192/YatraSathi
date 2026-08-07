import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiChevronRight, FiMapPin, FiCalendar, FiDollarSign, FiUsers, FiCheckCircle, FiClock, FiCompass, FiPlus, FiArrowLeft, FiNavigation, FiBookOpen, FiCoffee, FiShield, FiAlertCircle } from 'react-icons/fi';
import { HiShieldCheck } from 'react-icons/hi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import AudioGuide from '../components/AudioGuide';
import DestinationCard from '../components/cards/DestinationCard';
import { apiService } from '../services/api';

const customPinIcon = L.divIcon({
  className: 'custom-destination-pin',
  html: `<div class="bg-coral-500 text-white font-bold text-base w-10 h-10 rounded-full flex items-center justify-center border-2 border-white shadow-xl animate-bounce">📍</div>`,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function DestinationDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    apiService.getDestinationById(id).then(data => {
      if (isMounted) {
        setDestination(data);
        setLoading(false);
      }
    });

    apiService.getDestinations().then(all => {
      if (isMounted && all) {
        setRelated(all.filter(d => String(d.id) !== String(id)).slice(0, 2));
      }
    });

    return () => { isMounted = false; };
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-ocean-200 border-t-coral-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-800 font-heading font-semibold text-lg animate-pulse">Loading city travel guide...</p>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">Destination Not Found</h2>
        <p className="text-slate-600 mb-6">The place you are looking for could not be loaded.</p>
        <Link to="/explore" className="px-6 py-3 rounded-full bg-ocean-500 text-white font-bold inline-block">Back to Explore</Link>
      </div>
    );
  }

  const categoryGradients = {
    beach: 'from-sky-600 via-teal-700 to-slate-900',
    beaches: 'from-sky-600 via-teal-700 to-slate-900',
    mountain: 'from-emerald-700 via-teal-800 to-slate-950',
    mountains: 'from-emerald-700 via-teal-800 to-slate-950',
    heritage: 'from-amber-600 via-orange-700 to-slate-950',
    nature: 'from-emerald-600 via-seafoam-700 to-slate-950',
    adventure: 'from-coral-600 via-rose-700 to-slate-950'
  };

  const bgGradient = categoryGradients[destination.category?.toLowerCase()] || categoryGradients.beach;
  const cost = destination.averageCostPerDay || destination.avgCost || 2500;
  const safety = destination.safetyRating || 'Very Safe';
  const coords = destination.coordinates || { lat: 20.5937, lng: 78.9629 };
  const displayImage = destination.photo || destination.image;

  return (
    <div className="min-h-screen bg-slate-50 pb-24 pt-16 animate-fade-in">
      
      {/* Hero Header Banner */}
      <div className={`h-[48vh] min-h-[360px] bg-gradient-to-br ${bgGradient} relative flex flex-col justify-end p-6 md:p-12 overflow-hidden shadow-2xl`}>
        
        {/* Background Photo Overlay */}
        {displayImage && (
          <div className="absolute inset-0 z-0">
            <img 
              src={displayImage} 
              alt={destination.name}
              className="w-full h-full object-cover opacity-40 filter brightness-90"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          </div>
        )}

        {/* Navigation Breadcrumb */}
        <div className="absolute top-6 left-6 md:left-12 z-20 flex items-center gap-2 text-white/90 text-xs md:text-sm font-semibold">
          <button onClick={() => navigate(-1)} className="hover:text-white transition-colors flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            <FiArrowLeft /> Back
          </button>
          <span className="text-white/60">/</span>
          <Link to="/explore" className="hover:text-white transition-colors">Explore</Link>
          <FiChevronRight className="text-xs" />
          <span className="text-white font-bold">{destination.name}</span>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full space-y-2">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase shadow-md">
            <span>{destination.category}</span>
            {destination.region && <span>• {destination.region} India</span>}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white drop-shadow-xl tracking-tight">
            {destination.name}
          </h1>

          <div className="flex items-center gap-2 text-white/90 text-base md:text-lg font-medium">
            <FiMapPin className="text-coral-400 shrink-0" />
            <span>{destination.state}, India</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 space-y-8">
        
        {/* Quick Stats Grid */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-ocean-50 text-ocean-600 flex items-center justify-center shrink-0">
              <FiCalendar size={22} />
            </div>
            <div>
              <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Best Season</p>
              <p className="font-extrabold text-slate-800 text-sm mt-0.5">{destination.bestSeason || 'Oct - Mar'}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <FiDollarSign size={22} />
            </div>
            <div>
              <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Avg Daily Cost</p>
              <p className="font-extrabold text-ocean-700 text-sm mt-0.5">₹{cost.toLocaleString('en-IN')}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-seafoam-50 text-seafoam-600 flex items-center justify-center shrink-0">
              <HiShieldCheck size={24} />
            </div>
            <div>
              <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Safety Status</p>
              <p className="font-extrabold text-seafoam-700 text-sm mt-0.5">{safety}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <FiUsers size={22} />
            </div>
            <div>
              <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Annual Visitors</p>
              <p className="font-extrabold text-slate-800 text-sm mt-0.5">{destination.visitors || '100K+'}</p>
            </div>
          </div>

        </div>

        {/* Content Tabs Header */}
        <div className="bg-white rounded-3xl p-2 shadow-md border border-slate-100 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-heading font-extrabold whitespace-nowrap transition-all ${
              activeTab === 'overview' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>📌 Overview & Attractions</span>
          </button>

          <button
            onClick={() => setActiveTab('history')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-heading font-extrabold whitespace-nowrap transition-all ${
              activeTab === 'history' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>📜 Full History</span>
          </button>

          <button
            onClick={() => setActiveTab('culture')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-heading font-extrabold whitespace-nowrap transition-all ${
              activeTab === 'culture' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>🎭 Food & Culture</span>
          </button>

          <button
            onClick={() => setActiveTab('reach')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-heading font-extrabold whitespace-nowrap transition-all ${
              activeTab === 'reach' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>🚌 How to Reach</span>
          </button>

          <button
            onClick={() => setActiveTab('gems')}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-heading font-extrabold whitespace-nowrap transition-all ${
              activeTab === 'gems' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>💎 Offbeat Spots & Safety</span>
          </button>
        </div>

        {/* Content & Sidebar Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Tabbed Content Area */}
          <div className="lg:w-2/3 space-y-8">
            
            {/* TAB 1: OVERVIEW & ATTRACTIONS */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fade-in">
                
                <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
                  <h2 className="text-2xl font-heading font-extrabold text-slate-900">
                    About {destination.name}
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-base md:text-lg font-medium">
                    {destination.description}
                  </p>
                  
                  {destination.highlights && destination.highlights.length > 0 && (
                    <div className="pt-6 border-t border-slate-100">
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Key Must-Visit Highlights</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {destination.highlights.map((hl, i) => (
                          <div key={i} className="flex items-center gap-2.5 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-slate-800 text-sm font-bold">
                            <FiCheckCircle className="text-seafoam-500 shrink-0 text-lg" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </section>

                {/* Top Attractions / Places to Visit inside City */}
                {destination.travelDestinationsInCity && destination.travelDestinationsInCity.length > 0 && (
                  <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
                    <h2 className="text-2xl font-heading font-extrabold text-slate-900 flex items-center gap-2">
                      <span>🏛️</span> Top Places to Visit in {destination.name}
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {destination.travelDestinationsInCity.map((place, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                          <h4 className="font-heading font-bold text-amber-950 text-base">{place.name}</h4>
                          <p className="text-xs text-slate-700 font-medium leading-relaxed">{place.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Web Audio Guide */}
                <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
                  <div>
                    <h2 className="text-2xl font-heading font-extrabold text-slate-900 flex items-center gap-2">
                      <span>🎧</span> Web Audio Guide Narration
                    </h2>
                    <p className="text-slate-600 text-xs mt-1">Listen to voice narration powered by Web Speech API (Works offline)</p>
                  </div>
                  <AudioGuide 
                    title={`${destination.name} Audio Guide`} 
                    text={destination.audioGuideText || destination.description} 
                  />
                </section>

                {/* Recommended Activities */}
                {destination.activities && destination.activities.length > 0 && (
                  <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
                    <h2 className="text-2xl font-heading font-extrabold text-slate-900">
                      Top Guided Activities & Tours
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {destination.activities.map((act, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-ocean-300 transition-colors space-y-2">
                          <h4 className="font-heading font-bold text-slate-800 text-base">{act.name}</h4>
                          <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                            <div className="flex items-center gap-1"><FiClock className="text-ocean-500" /> {act.duration}</div>
                            <div className="text-ocean-700 font-extrabold text-sm">₹{act.cost}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

              </div>
            )}

            {/* TAB 2: HISTORY */}
            {activeTab === 'history' && (
              <div className="space-y-6 animate-fade-in">
                <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-full text-xs font-black uppercase tracking-wider">
                    <span>📜 Historical Timeline & Heritage</span>
                  </div>
                  
                  <h2 className="text-3xl font-heading font-extrabold text-slate-900">
                    History & Origins of {destination.name}
                  </h2>

                  <div className="prose max-w-none text-slate-700 leading-relaxed text-base space-y-4">
                    {destination.fullHistory ? (
                      destination.fullHistory.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        {destination.culturalInfo || destination.description}
                      </p>
                    )}
                  </div>
                </section>
              </div>
            )}

            {/* TAB 3: CULTURE & FOOD */}
            {activeTab === 'culture' && (
              <div className="space-y-6 animate-fade-in">
                
                {/* Cultural Traditions */}
                <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
                  <h2 className="text-2xl font-heading font-extrabold text-slate-900 flex items-center gap-2">
                    <span>🎭</span> Local Culture, Art & Traditions
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-base bg-amber-50 p-5 rounded-2xl border border-amber-200/80 font-semibold">
                    {destination.culturalInfo || 'Rich indigenous art, folk music, architectural monuments, and traditional community life.'}
                  </p>
                </section>

                {/* Food Specialties */}
                {destination.foodSpecialties && destination.foodSpecialties.length > 0 && (
                  <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
                    <h2 className="text-2xl font-heading font-extrabold text-slate-900 flex items-center gap-2">
                      <span>🍲</span> Famous Food Specialties & Cuisine
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {destination.foodSpecialties.map((food, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                          <h4 className="font-heading font-bold text-ocean-900 text-base flex items-center gap-1.5">
                            <FiCoffee className="text-amber-500 shrink-0" />
                            <span>{food.name}</span>
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed font-medium">
                            {food.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

              </div>
            )}

            {/* TAB 4: HOW TO REACH */}
            {activeTab === 'reach' && (
              <div className="space-y-6 animate-fade-in">
                <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
                  <h2 className="text-2xl font-heading font-extrabold text-slate-900 flex items-center gap-2">
                    <span>🚌</span> Comprehensive Transport & Routes Guide
                  </h2>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-slate-800 leading-relaxed text-sm md:text-base space-y-3 font-medium">
                    {destination.howToReachDetails ? (
                      destination.howToReachDetails.split('\n').map((line, idx) => (
                        <p key={idx} className="pb-2 border-b border-slate-200/60 last:border-0 last:pb-0">
                          {line}
                        </p>
                      ))
                    ) : (
                      <p>{destination.gettingThere}</p>
                    )}
                  </div>
                </section>
              </div>
            )}

            {/* TAB 5: GEMS & SAFETY */}
            {activeTab === 'gems' && (
              <div className="space-y-6 animate-fade-in">
                
                {/* Offbeat Spots */}
                {destination.hiddenGems && destination.hiddenGems.length > 0 && (
                  <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
                    <h2 className="text-2xl font-heading font-extrabold text-slate-900 flex items-center gap-2">
                      <span>💎</span> Offbeat & Hidden Spots
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {destination.hiddenGems.map((gem, i) => (
                        <div key={i} className="flex items-center gap-2 bg-emerald-50 p-4 rounded-2xl border border-emerald-100 text-emerald-950 text-sm font-bold">
                          <span className="text-lg">✨</span>
                          <span>{gem}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Safety Advice */}
                {destination.safetyTips && destination.safetyTips.length > 0 && (
                  <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
                    <h2 className="text-2xl font-heading font-extrabold text-slate-900 flex items-center gap-2">
                      <span>💡</span> Tourist Safety Guidelines
                    </h2>
                    <div className="space-y-3">
                      {destination.safetyTips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-3 bg-seafoam-50 p-4 rounded-2xl border border-seafoam-100 text-seafoam-950 text-xs font-semibold">
                          <FiAlertCircle className="text-seafoam-600 shrink-0 text-base mt-0.5" />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="sticky top-24 space-y-6">
              
              {/* Add to Trip CTA Card */}
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 text-center">
                <div className="w-16 h-16 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center mx-auto mb-4">
                  <FiCompass className="text-3xl animate-spin-slow" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-800 mb-2">Plan Your Visit</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Add {destination.name} to your custom day-by-day itinerary and track trip expenses.
                </p>

                <button 
                  onClick={() => navigate(`/itinerary?add=${destination.id}`)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-heading font-bold text-base shadow-lg shadow-coral-200 btn-bounce flex items-center justify-center gap-2"
                >
                  <FiPlus /> Add to Itinerary
                </button>
              </div>

              {/* Interactive Leaflet Map Location Card */}
              <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-100 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-heading font-extrabold text-base text-slate-800 flex items-center gap-1.5">
                    <FiNavigation className="text-ocean-500" /> Interactive Location Map
                  </h3>
                </div>

                <div className="h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative z-0">
                  <MapContainer
                    center={[coords.lat, coords.lng]}
                    zoom={10}
                    scrollWheelZoom={false}
                    zoomControl={false}
                    className="w-full h-full"
                  >
                    <TileLayer
                      url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    />
                    <Marker position={[coords.lat, coords.lng]} icon={customPinIcon}>
                      <Popup>
                        <div className="text-center font-bold text-xs">
                          <span>📍 {destination.name}, {destination.state}</span>
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>

                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <FiChevronRight />
                </a>
              </div>

              {/* Related Destinations */}
              {related.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-lg text-slate-800">You Might Also Like</h3>
                  {related.map(r => (
                    <DestinationCard key={r.id} destination={r} />
                  ))}
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
