import React, { useState, useEffect } from 'react';
import { FiWifiOff } from 'react-icons/fi';

const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-amber-500 text-white py-2 px-4 flex items-center justify-center space-x-2 z-50 animate-slide-up shadow-lg">
      <FiWifiOff className="text-xl" />
      <span className="font-medium text-sm md:text-base">You are offline - cached content available</span>
    </div>
  );
};

export default OfflineIndicator;
