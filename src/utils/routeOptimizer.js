// Simple nearest-neighbor route optimizer
// TODO: Replace with real Maps API for actual distances

function haversineDistance(coord1, coord2) {
  const R = 6371; // km
  const dLat = (coord2.lat - coord1.lat) * Math.PI / 180;
  const dLon = (coord2.lng - coord1.lng) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(coord1.lat * Math.PI / 180) * Math.cos(coord2.lat * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

export function optimizeRoute(destinations, startIndex = 0) {
  if (destinations.length <= 2) return { route: destinations, totalDistance: destinations.length === 2 ? haversineDistance(destinations[0].coordinates, destinations[1].coordinates) : 0 };
  const visited = new Set();
  const route = [];
  let current = destinations[startIndex];
  route.push(current);
  visited.add(current.id);
  let totalDistance = 0;
  while (visited.size < destinations.length) {
    let nearest = null, nearestDist = Infinity;
    for (const dest of destinations) {
      if (visited.has(dest.id)) continue;
      const dist = haversineDistance(current.coordinates, dest.coordinates);
      if (dist < nearestDist) { nearest = dest; nearestDist = dist; }
    }
    if (nearest) { route.push(nearest); visited.add(nearest.id); totalDistance += nearestDist; current = nearest; }
  }
  return { route, totalDistance: Math.round(totalDistance) };
}

export function estimateTime(distanceKm, mode = 'train') {
  const speeds = { flight: 600, train: 60, bus: 45, car: 50 };
  return Math.round(distanceKm / (speeds[mode] || 50) * 10) / 10;
}

export function estimateCost(distanceKm, mode = 'train') {
  const ratesPerKm = { flight: 5, train: 1.2, bus: 1.5, car: 3 };
  return Math.round(distanceKm * (ratesPerKm[mode] || 1.5));
}
