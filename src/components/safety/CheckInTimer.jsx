import React, { useState, useEffect } from 'react';
import { FiShield, FiClock, FiChevronDown } from 'react-icons/fi';

const CheckInTimer = () => {
  const [durationStr, setDurationStr] = useState('30m');
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [isActive, setIsActive] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const durationMap = {
    '15m': 15 * 60,
    '30m': 30 * 60,
    '1h': 60 * 60,
    '2h': 120 * 60,
  };

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
      // Trigger notification or alert
      console.log('Safety Check-in Alert!');
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleCheckIn = () => {
    setTimeLeft(durationMap[durationStr]);
    setIsActive(true);
  };

  const handleDurationChange = (val) => {
    setDurationStr(val);
    setTimeLeft(durationMap[val]);
    setShowDropdown(false);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    if (m >= 60) {
      const h = Math.floor(m / 60);
      const remainingM = m % 60;
      return `${h.toString().padStart(2, '0')}:${remainingM.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const totalTime = durationMap[durationStr];
  const percentage = (timeLeft / totalTime) * 100;
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col items-center w-full max-w-sm mx-auto relative overflow-hidden">
      {/* Ambient background blob */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-[#3CBEB5]/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="w-full flex justify-between items-center mb-6">
        <h3 className="font-extrabold text-slate-800 text-xl flex items-center gap-2">
          <FiClock className="w-6 h-6 text-[#2B9EB3]" />
          Safety Timer
        </h3>
        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-full text-sm font-bold transition-colors"
          >
            {durationStr}
            <FiChevronDown className="w-4 h-4" />
          </button>
          {showDropdown && (
            <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-10 min-w-[120px] animate-in fade-in slide-in-from-top-2">
              {Object.keys(durationMap).map((d) => (
                <button
                  key={d}
                  onClick={() => handleDurationChange(d)}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 font-medium text-sm transition-colors border-b border-slate-50 last:border-0"
                >
                  {d}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* SVG Ring Timer */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        <svg className="transform -rotate-90 w-full h-full drop-shadow-lg">
          {/* Background circle */}
          <circle
            cx="128"
            cy="128"
            r={radius}
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            className="text-slate-100"
          />
          {/* Progress circle */}
          <circle
            cx="128"
            cy="128"
            r={radius}
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={`transition-all duration-1000 ease-linear ${timeLeft < 300 ? 'text-red-500' : 'text-[#3CBEB5]'}`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-4xl font-black text-slate-800 tracking-tighter tabular-nums drop-shadow-sm">
            {formatTime(timeLeft)}
          </span>
          <span className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-widest">
            Remaining
          </span>
        </div>
      </div>

      <button
        onClick={handleCheckIn}
        className="mt-8 w-full py-4 rounded-2xl flex items-center justify-center gap-3 bg-gradient-to-r from-[#2A9D8F] to-[#3CBEB5] text-white font-extrabold text-lg shadow-[0_8px_30px_rgba(42,157,143,0.3)] hover:shadow-[0_8px_40px_rgba(42,157,143,0.5)] transform hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
      >
        <FiShield className="w-6 h-6" />
        I'm Safe
      </button>
      
      <p className="mt-4 text-xs font-medium text-slate-400 text-center max-w-[250px]">
        Tap to reset your check-in timer. We'll alert your emergency contacts if it hits zero.
      </p>
    </div>
  );
};

export default CheckInTimer;
