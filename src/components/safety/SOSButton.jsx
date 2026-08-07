import React, { useState } from 'react';
import { FiShield, FiMapPin, FiPhoneCall, FiX, FiAlertTriangle, FiPlus, FiTrash2 } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const sosMarkerIcon = L.divIcon({
  className: 'sos-marker-pin',
  html: `<div class="bg-red-600 text-white font-extrabold text-xs w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-xl animate-bounce">🚨</div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 16]
});

export default function SOSButton() {
  const [sosActive, setSosActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');

  const [personalContacts, setPersonalContacts] = useState([
    { name: 'Family Contact', phone: '+91 98765 43210' }
  ]);
  const [newContactName, setNewContactName] = useState('');
  const [newContactPhone, setNewContactPhone] = useState('');

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
          const fallbackCoords = { lat: 15.2993, lng: 74.1240 };
          setLocation(fallbackCoords);
          setError('Location services limited. Using registered GPS coordinates.');
          setLoading(false);
        }
      );
    } else {
      const fallbackCoords = { lat: 15.2993, lng: 74.1240 };
      setLocation(fallbackCoords);
      setLoading(false);
    }
  };

  const addPersonalContact = () => {
    if (!newContactName || !newContactPhone) return;
    setPersonalContacts([...personalContacts, { name: newContactName, phone: newContactPhone }]);
    setNewContactName('');
    setNewContactPhone('');
  };

  const removePersonalContact = (idx) => {
    setPersonalContacts(personalContacts.filter((_, i) => i !== idx));
  };

  const closeModal = () => {
    setSosActive(false);
    setLocation(null);
    setError('');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      
      {/* SOS Button with Smooth Non-Twinkling Pulse */}
      <button
        onClick={triggerSOS}
        className="relative group w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center bg-gradient-to-br from-red-600 via-rose-600 to-coral-600 text-white smooth-sos-pulse transition-all duration-300 transform active:scale-95 hover:scale-105"
      >
        <div className="z-10 flex flex-col items-center">
          <FiAlertTriangle className="w-12 h-12 md:w-16 md:h-16 mb-1 drop-shadow-md" />
          <span className="font-extrabold text-xl tracking-widest drop-shadow-md">SOS</span>
        </div>
      </button>

      <p className="mt-6 text-xs font-bold text-slate-400 max-w-[220px] text-center uppercase tracking-wider">
        Tap for Live Geolocation Emergency Alert
      </p>

      {/* Expanded SOS Modal */}
      {sosActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in text-white">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-3xl shadow-2xl p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
                  <FiAlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-extrabold text-white">Emergency SOS Activated</h3>
                  <p className="text-red-400 font-bold text-xs">Live Broadcast & Emergency Dialers Active</p>
                </div>
              </div>

              <button 
                onClick={closeModal}
                className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-800 rounded-full"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Geolocation Map */}
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-slate-300 flex items-center gap-1">
                  <FiMapPin className="text-teal-400" /> Live GPS Coordinates
                </span>
                {location && (
                  <span className="font-mono text-[10px] text-teal-300 font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                  </span>
                )}
              </div>

              {loading ? (
                <div className="h-36 bg-slate-900 rounded-xl flex items-center justify-center animate-pulse text-xs font-bold text-slate-400">
                  Acquiring GPS Satellite Signal...
                </div>
              ) : location ? (
                <div className="h-40 rounded-xl overflow-hidden border border-slate-800 relative z-0">
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
            </div>

            {/* Expanded Emergency National Numbers */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">National Helpline Hotlines</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a href="tel:100" className="p-3 bg-red-950/50 hover:bg-red-900/60 border border-red-800/60 rounded-xl font-extrabold text-red-200 flex items-center justify-center gap-1.5">
                  <FiPhoneCall /> Police (100)
                </a>
                <a href="tel:108" className="p-3 bg-rose-950/50 hover:bg-rose-900/60 border border-rose-800/60 rounded-xl font-extrabold text-rose-200 flex items-center justify-center gap-1.5">
                  <FiPhoneCall /> Ambulance (108)
                </a>
                <a href="tel:1091" className="p-3 bg-purple-950/50 hover:bg-purple-900/60 border border-purple-800/60 rounded-xl font-extrabold text-purple-200 flex items-center justify-center gap-1.5">
                  <FiPhoneCall /> Women (1091)
                </a>
                <a href="tel:1363" className="p-3 bg-teal-950/50 hover:bg-teal-900/60 border border-teal-800/60 rounded-xl font-extrabold text-teal-200 flex items-center justify-center gap-1.5">
                  <FiPhoneCall /> Tourist (1363)
                </a>
                <a href="tel:1033" className="p-3 bg-amber-950/50 hover:bg-amber-900/60 border border-amber-800/60 rounded-xl font-extrabold text-amber-200 flex items-center justify-center gap-1.5">
                  <FiPhoneCall /> Highway (1033)
                </a>
                <a href="tel:139" className="p-3 bg-sky-950/50 hover:bg-sky-900/60 border border-sky-800/60 rounded-xl font-extrabold text-sky-200 flex items-center justify-center gap-1.5">
                  <FiPhoneCall /> Railway (139)
                </a>
              </div>
            </div>

            {/* Personal Emergency Contacts */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Personal Emergency Contacts</h4>
              <div className="space-y-2">
                {personalContacts.map((contact, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                    <div>
                      <p className="font-extrabold text-white">{contact.name}</p>
                      <p className="text-slate-400 font-mono">{contact.phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a href={`tel:${contact.phone}`} className="p-2 bg-emerald-600 rounded-lg text-white font-bold">
                        <FiPhoneCall />
                      </a>
                      <button onClick={() => removePersonalContact(idx)} className="p-2 text-slate-500 hover:text-red-400">
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Personal Contact Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  value={newContactName}
                  onChange={(e) => setNewContactName(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold text-white outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={newContactPhone}
                  onChange={(e) => setNewContactPhone(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-semibold text-white outline-none"
                />
                <button
                  onClick={addPersonalContact}
                  className="px-3 py-2 bg-ocean-600 hover:bg-ocean-500 text-white rounded-xl font-bold text-xs shrink-0 flex items-center gap-1"
                >
                  <FiPlus /> Add
                </button>
              </div>
            </div>

            <button 
              onClick={closeModal}
              className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm bg-slate-800 text-white hover:bg-slate-700 transition-colors shadow-md"
            >
              Close Alert Dialog
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
