import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';

const routeStepIcon = (index, total) => {
  const isStart = index === 0;
  const isEnd = index === total - 1;
  let bg = 'bg-ocean-500';
  if (isStart) bg = 'bg-seafoam-500';
  if (isEnd) bg = 'bg-coral-500';

  return L.divIcon({
    className: 'custom-route-node',
    html: `
      <div class="${bg} text-white font-extrabold text-xs w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-xl">
        ${index + 1}
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });
};

function FitBounds({ positions }) {
  const map = useMap();
  useEffect(() => {
    if (positions && positions.length > 0) {
      const bounds = L.latLngBounds(positions);
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [positions, map]);
  return null;
}

export default function RouteMap({ stops = [] }) {
  if (!stops || stops.length === 0) {
    return (
      <div className="w-full h-80 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
        Select 2 or more destinations to view interactive route map
      </div>
    );
  }

  const positions = stops.map(s => [s.coordinates.lat, s.coordinates.lng]);

  return (
    <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 relative">
      <MapContainer
        center={positions[0]}
        zoom={6}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
      >
        <FitBounds positions={positions} />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; CARTO & OpenStreetMap'
        />

        {/* Route Line */}
        <Polyline
          positions={positions}
          color="#0284c7"
          weight={5}
          dashArray="10, 10"
          opacity={0.8}
        />

        {/* Route Nodes */}
        {stops.map((stop, idx) => (
          <Marker
            key={stop.id || idx}
            position={[stop.coordinates.lat, stop.coordinates.lng]}
            icon={routeStepIcon(idx, stops.length)}
          >
            <Popup>
              <div className="p-2 text-center">
                <span className="text-[10px] font-bold text-ocean-600 uppercase block">Stop {idx + 1}</span>
                <h4 className="font-heading font-extrabold text-slate-800 text-sm">{stop.name}</h4>
                <p className="text-xs text-slate-500">{stop.state}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
