import React, { useState, useEffect } from 'react';
import { speak, stopSpeaking, pauseSpeaking, resumeSpeaking } from '../utils/speechUtils';
import { FiVolume2, FiVolumeX, FiPlay, FiPause, FiSquare } from 'react-icons/fi';

const AudioGuide = ({ 
  title = "Destination Audio Guide",
  text = "Welcome to India! Explore magnificent heritage sites, pristine beaches, and snow-capped Himalayan peaks.",
  location = "India Tourism"
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying && !isPaused) {
      pauseSpeaking();
      setIsPaused(true);
    } else if (isPlaying && isPaused) {
      resumeSpeaking();
      setIsPaused(false);
    } else {
      setIsPlaying(true);
      setIsPaused(false);
      setProgress(10);

      speak(text, {
        rate: speed,
        onStart: () => {
          setIsPlaying(true);
          setIsPaused(false);
          setProgress(25);
        },
        onEnd: () => {
          setIsPlaying(false);
          setIsPaused(false);
          setProgress(100);
        },
        onError: () => {
          setIsPlaying(false);
          setIsPaused(false);
          setProgress(0);
        }
      });
    }
  };

  const handleStop = () => {
    stopSpeaking();
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
  };

  const cycleSpeed = () => {
    const speeds = [0.8, 1, 1.25, 1.5];
    const nextIndex = (speeds.indexOf(speed) + 1) % speeds.length;
    const newSpeed = speeds[nextIndex];
    setSpeed(newSpeed);

    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(true);
      setIsPaused(false);
      speak(text, {
        rate: newSpeed,
        onEnd: () => { setIsPlaying(false); setProgress(100); }
      });
    }
  };

  return (
    <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-100 p-6 shadow-xl max-w-md w-full overflow-hidden space-y-5">
      
      {/* Header Info */}
      <div className="flex justify-between items-start gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-ocean-500 to-seafoam-500 text-white flex items-center justify-center shadow-md shrink-0">
            <FiVolume2 size={24} />
          </div>
          <div>
            <h4 className="font-heading font-extrabold text-slate-800 text-base leading-tight line-clamp-1">
              {title}
            </h4>
            <p className="text-xs text-slate-500 font-semibold mt-0.5">{location}</p>
          </div>
        </div>
        
        <div className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shrink-0 ${
          isPlaying && !isPaused
            ? 'bg-seafoam-100 text-seafoam-800 border border-seafoam-300 animate-pulse' 
            : isPaused 
              ? 'bg-amber-100 text-amber-800 border border-amber-300'
              : 'bg-slate-100 text-slate-600 border border-slate-200'
        }`}>
          {isPlaying && !isPaused ? 'Playing Audio' : isPaused ? 'Paused' : 'Ready'}
        </div>
      </div>

      {/* Text Excerpt Preview */}
      <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
        <p className="text-xs text-slate-700 italic leading-relaxed line-clamp-3">
          "{text}"
        </p>
      </div>

      {/* Visual Equalizer Bars */}
      <div className="h-10 w-full flex items-end justify-between gap-1 px-1">
        {[...Array(24)].map((_, i) => (
          <div 
            key={i} 
            className={`w-full rounded-t-sm transition-all duration-300 ${
              isPlaying && !isPaused ? 'bg-ocean-500' : 'bg-slate-200'
            }`}
            style={{
              height: isPlaying && !isPaused
                ? `${25 + Math.random() * 75}%` 
                : '15%'
            }}
          ></div>
        ))}
      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        
        <button 
          onClick={cycleSpeed} 
          className="text-xs font-extrabold text-slate-700 hover:text-ocean-600 bg-slate-100 px-3 py-1.5 rounded-xl transition-colors border border-slate-200"
          title="Playback speed"
        >
          {speed}x Speed
        </button>
        
        <div className="flex items-center gap-3">
          {isPlaying && (
            <button 
              onClick={handleStop}
              className="p-3 rounded-2xl bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 transition-colors"
              title="Stop audio"
            >
              <FiSquare size={16} />
            </button>
          )}

          <button 
            onClick={handlePlayPause}
            className="btn-bounce px-6 py-3 rounded-2xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-heading font-extrabold text-sm shadow-lg shadow-coral-200 flex items-center gap-2"
          >
            {isPlaying && !isPaused ? (
              <>
                <FiPause size={18} />
                <span>Pause</span>
              </>
            ) : (
              <>
                <FiPlay size={18} />
                <span>{isPaused ? 'Resume' : 'Play Audio Guide'}</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};

export default AudioGuide;
