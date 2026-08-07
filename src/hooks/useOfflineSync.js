import { useState, useEffect, useCallback } from 'react';
import { db } from '../db/database';
import { destinations } from '../data/destinations';

export function useOfflineSync() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [lastSynced, setLastSynced] = useState(null);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => { window.removeEventListener('online', handleOnline); window.removeEventListener('offline', handleOffline); };
  }, []);

  const cacheDestinations = useCallback(async () => {
    try {
      await db.cachedDestinations.bulkPut(destinations);
      setLastSynced(new Date().toISOString());
    } catch (e) { console.error('Cache failed:', e); }
  }, []);

  const getCachedDestinations = useCallback(async () => {
    return db.cachedDestinations.toArray();
  }, []);

  return { isOnline, lastSynced, cacheDestinations, getCachedDestinations };
}
