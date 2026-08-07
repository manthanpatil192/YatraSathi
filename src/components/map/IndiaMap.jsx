import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import { FiStar, FiMapPin, FiNavigation, FiInfo, FiPlus, FiLayers } from 'react-icons/fi';
import { destinations, regions } from '../../data/destinations';

// Custom Leaflet DivIcon generator
const createCategoryIcon = (category) => {
  const cat = (category || 'beach').toLowerCase();
  let emoji = '📍';
  let colorClass = 'bg-ocean-500 border-ocean-600';

  if (cat.includes('beach')) { emoji = '🏖️'; colorClass = 'bg-[#0284c7] border-[#0369a1]'; }
  else if (cat.includes('mountain')) { emoji = '🏔️'; colorClass = 'bg-[#059669] border-[#047857]'; }
  else if (cat.includes('heritage')) { emoji = '🏰'; colorClass = 'bg-[#d97706] border-[#b45309]'; }
  else if (cat.includes('nature')) { emoji = '🌿'; colorClass = 'bg-[#10b981] border-[#059669]'; }
  else if (cat.includes('adventure')) { emoji = '🪂'; colorClass = 'bg-[#e11d48] border-[#be123c]'; }

  return L.divIcon({
    className: 'custom-map-pin-wrapper',
    html: `
      <div class="custom-map-pin flex items-center justify-center ${colorClass} text-white font-bold text-sm w-9 h-9 rounded-full shadow-lg border-2 transform hover:scale-125 transition-transform duration-200 cursor-pointer">
        <span>${emoji}</span>
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -32]
  });
};

// Map Recenter Helper Component
function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom, { duration: 1.5 });
    }
  }, [center, zoom, map]);
  return null;
}

export default function IndiaMap({ onSelectDestination }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [mapTileStyle, setMapTileStyle] = useState('streets'); // 'streets', 'satellite', 'terrain'
  const [mapCenter, setMapCenter] = useState([22.5937, 78.9629]); // India center
  const [mapZoom, setMapZoom] = useState(5);

  const tileUrls = {
    streets: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    terrain: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
  };

  const tileAttributions = {
    streets: '&copy; <a href="https://carto.com/">CARTO</a> & OpenStreetMap',
    satellite: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    terrain: 'Map data &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap'
  };

  // Filtered list based on controls
  const filteredDestinations = destinations.filter(d => {
    const matchesCat = selectedCategory === 'All' || d.category?.toLowerCase() === selectedCategory.toLowerCase();
    const matchesReg = selectedRegion === 'All Regions' || d.region === selectedRegion;
    return matchesCat && matchesReg && d.coordinates?.lat && d.coordinates?.lng;
  });

  const handleRegionClick = (reg) => {
    setSelectedRegion(reg);
    const regionCenters = {
      'North': [31.5, 77.0],
      'South': [11.5, 77.5],
      'East': [24.0, 87.0],
      'West': [20.0, 73.5],
      'North-East': [26.0, 92.5],
      'Islands': [11.8, 92.7],
      'All Regions': [22.5937, 78.9629]
    };

    if (regionCenters[reg]) {
      setMapCenter(regionCenters[reg]);
      setMapZoom(reg === 'All Regions' ? 5 : 6);
    }
  };

  return (
    <div className="relative w-full h-[650px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
      
      {/* Top Controls Overlay */}
      <div className="absolute top-4 left-4 right-4 z-[1000] flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        
        {/* Left Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-white/40 pointer-events-auto">
          <span className="text-xs font-extrabold text-slate-700 px-2 flex items-center gap-1">
            <span>🗺️</span> India Map
          </span>

          <select
            value={selectedRegion}
            onChange={(e) => handleRegionClick(e.target.value)}
            className="bg-slate-100 text-slate-800 font-bold text-xs px-3 py-1.5 rounded-xl border border-slate-200 focus:outline-none cursor-pointer"
          >
            {regions.map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-100 text-slate-800 font-bold text-xs px-3 py-1.5 rounded-xl border border-slate-200 focus:outline-none cursor-pointer"
          >
            <option value="All">All Categories</option>
            <option value="Beaches">Beaches 🏖️</option>
            <option value="Mountains">Mountains 🏔️</option>
            <option value="Heritage">Heritage 🏰</option>
            <option value="Nature">Nature 🌿</option>
            <option value="Adventure">Adventure 🪂</option>
          </select>
        </div>

        {/* Right Layer Switcher */}
        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl shadow-lg border border-white/40 pointer-events-auto">
          <button
            onClick={() => setMapTileStyle('streets')}
            className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all ${
              mapTileStyle === 'streets'
                ? 'bg-ocean-500 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            Streets 🗺️
          </button>
          <button
            onClick={() => setMapTileStyle('satellite')}
            className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all ${
              mapTileStyle === 'satellite'
                ? 'bg-ocean-500 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            Satellite 🛰️
          </button>
          <button
            onClick={() => setMapTileStyle('terrain')}
            className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all ${
              mapTileStyle === 'terrain'
                ? 'bg-ocean-500 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            Terrain 🏔️
          </button>
        </div>

      </div>

      {/* Actual Leaflet Map Component */}
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        scrollWheelZoom={true}
        zoomControl={false}
        className="w-full h-full z-0"
      >
        <ChangeView center={mapCenter} zoom={mapZoom} />
        <ZoomControl position="bottomright" />

        <TileLayer
          url={tileUrls[mapTileStyle]}
          attribution={tileAttributions[mapTileStyle]}
        />

        {/* Render Destination Pins */}
        {filteredDestinations.map((dest) => (
          <Marker
            key={dest.id}
            position={[dest.coordinates.lat, dest.coordinates.lng]}
            icon={createCategoryIcon(dest.category)}
          >
            <Popup className="custom-leaflet-popup">
              <div className="p-3 w-64 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-extrabold text-ocean-600 uppercase tracking-wider block">
                      {dest.state} • {dest.region || 'India'}
                    </span>
                    <h4 className="font-heading font-extrabold text-slate-800 text-base leading-tight">
                      {dest.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-400 text-slate-900 px-2 py-0.5 rounded-full text-xs font-black">
                    <FiStar className="fill-current text-slate-900 text-xs" />
                    <span>{dest.rating || '4.8'}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                  {dest.description}
                </p>

                <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-100 font-bold">
                  <span className="text-ocean-700">₹{(dest.averageCostPerDay || dest.avgCost || 2500).toLocaleString('en-IN')}/day</span>
                  <span className="text-seafoam-700">{dest.safetyRating || 'Very Safe'}</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => navigate(`/destination/${dest.id}`)}
                    className="flex-1 py-1.5 px-2 rounded-xl bg-slate-100 hover:bg-ocean-50 text-slate-800 font-bold text-xs text-center transition-colors"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => navigate(`/itinerary?add=${dest.id}`)}
                    className="flex-1 py-1.5 px-2 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs text-center shadow-xs transition-colors"
                  >
                    + Add Trip
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Bottom Floating Counter Badge */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-white/40 text-xs font-bold text-slate-800 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-seafoam-500 animate-pulse"></span>
        <span>Showing {filteredDestinations.length} Destinations across India</span>
      </div>

    </div>
  );
}
