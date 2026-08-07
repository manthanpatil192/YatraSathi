import React, { useState } from 'react';
import { FiShield, FiMapPin, FiPhoneCall, FiX, FiAlertTriangle } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const sosMarkerIcon = L.divIcon({
  className: 'sos-marker-pin',
  html: `<div class="bg-red-600 text-white font-extrabold text-xs w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-xl animate-ping">🚨</div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 16]
});

const SOSButton = () => {
  const [sosActive, setSosActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');

  const triggerSOS = () => {
    setLoading(true);
    setSosActive(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(coords);
          setLoading(false);
        },
        (err) => {
          // Fallback to Goa GPS if geolocation is blocked or denied in browser
          const fallbackCoords = { lat: 15.2993, lng: 74.1240 };
          setLocation(fallbackCoords);
          setError('Location services limited. Defaulting to registered region GPS.');
          setLoading(false);
        }
      );
    } else {
      const fallbackCoords = { lat: 15.2993, lng: 74.1240 };
      setLocation(fallbackCoords);
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSosActive(false);
    setLocation(null);
    setError('');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={triggerSOS}
        className="relative group w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center bg-gradient-to-br from-red-600 via-rose-600 to-coral-600 text-white smooth-sos-pulse transition-all duration-300 transform active:scale-95 hover:scale-105"
      >
        <div className="z-10 flex flex-col items-center">
          <FiAlertTriangle className="w-12 h-12 md:w-16 md:h-16 mb-1 drop-shadow-md" />
          <span className="font-extrabold text-xl tracking-widest drop-shadow-md">SOS</span>
        </div>
      </button>
      <p className="mt-6 text-xs font-bold text-slate-500 max-w-[220px] text-center uppercase tracking-wider">
        Tap for Emergency Assistance
      </p>

      {/* SOS Active Modal */}
      {sosActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
          <div className="bg-white border border-slate-100 w-full max-w-md rounded-3xl shadow-2xl p-6 md:p-8 space-y-6">
            
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 animate-pulse">
                  <FiAlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-extrabold text-slate-800">SOS Activated</h3>
                  <p className="text-red-600 font-bold text-xs">Emergency Alert Triggered</p>
                </div>
              </div>

              <button 
                onClick={closeModal}
                className="text-slate-400 hover:text-slate-700 transition-colors p-2 bg-slate-100 rounded-full"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-700 flex items-center gap-1">
                    <FiMapPin className="text-ocean-600" /> Live Geolocation Map
                  </span>
                  {location && (
                    <span className="font-mono text-[10px] text-slate-500 font-bold bg-slate-200 px-2 py-0.5 rounded">
                      {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                    </span>
                  )}
                </div>

                {loading ? (
                  <div className="h-36 bg-slate-200 rounded-xl flex items-center justify-center animate-pulse text-xs font-bold text-slate-500">
                    Acquiring GPS Signal...
                  </div>
                ) : location ? (
                  <div className="h-40 rounded-xl overflow-hidden border border-slate-200 relative z-0">
                    <MapContainer
                      center={[location.lat, location.lng]}
                      zoom={12}
                      scrollWheelZoom={false}
                      zoomControl={false}
                      className="w-full h-full"
                    >
                      <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
                      <Marker position={[location.lat, location.lng]} icon={sosMarkerIcon}>
                        <Popup>
                          <span className="font-bold text-xs">🚨 SOS Active Location</span>
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                ) : null}

                {error && <p className="text-[11px] text-amber-700 font-bold">{error}</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="tel:100" 
                  className="flex items-center justify-center gap-2 bg-ocean-50 hover:bg-ocean-100 border border-ocean-200 p-3.5 rounded-2xl font-extrabold text-xs text-ocean-800 transition-colors"
                >
                  <FiPhoneCall /> Police (100)
                </a>

                <a 
                  href="tel:108" 
                  className="flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 border border-red-200 p-3.5 rounded-2xl font-extrabold text-xs text-red-800 transition-colors"
                >
                  <FiPhoneCall /> Ambulance (108)
                </a>
              </div>
            </div>

            <button 
              onClick={closeModal}
              className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm bg-slate-800 text-white hover:bg-slate-900 transition-colors shadow-md"
            >
              Close Alert Dialog
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default SOSButton;
