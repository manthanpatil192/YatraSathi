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
    <div className="relative bg-slate-950/95 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl w-full overflow-hidden space-y-5">
      
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-900 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-teal-400 text-slate-950 flex items-center justify-center shadow-lg shrink-0 font-black">
            <FiVolume2 size={24} />
          </div>
          <div>
            <h4 className="font-heading font-extrabold text-white text-lg leading-tight">
              {title}
            </h4>
            <p className="text-xs text-amber-300 font-semibold mt-0.5">{location}</p>
          </div>
        </div>
        
        <div className={`px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shrink-0 border ${
          isPlaying && !isPaused
            ? 'bg-emerald-400/20 text-emerald-300 border-emerald-400/40 animate-pulse' 
            : isPaused 
              ? 'bg-amber-400/20 text-amber-300 border-amber-400/40'
              : 'bg-slate-900 text-slate-400 border-slate-800'
        }`}>
          {isPlaying && !isPaused ? '🔊 Playing Audio Narration' : isPaused ? '⏸️ Paused' : 'Ready to Play'}
        </div>
      </div>

      {/* Text Excerpt Preview */}
      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800/80">
        <p className="text-xs text-slate-200 italic leading-relaxed">
          "{text}"
        </p>
      </div>

      {/* Visual Equalizer Bars */}
      <div className="h-10 w-full flex items-end justify-between gap-1 px-1">
        {[...Array(24)].map((_, i) => (
          <div 
            key={i} 
            className={`w-full rounded-t-sm transition-all duration-300 ${
              isPlaying && !isPaused ? 'bg-gradient-to-t from-teal-400 to-amber-300' : 'bg-slate-800'
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
      <div className="flex items-center justify-between pt-3 border-t border-slate-900">
        
        <button 
          onClick={cycleSpeed} 
          className="text-xs font-extrabold text-amber-300 hover:text-white bg-slate-900 px-3.5 py-2 rounded-xl transition-colors border border-slate-800"
          title="Playback speed"
        >
          ⚡ {speed}x Speed
        </button>
        
        <div className="flex items-center gap-3">
          {isPlaying && (
            <button 
              onClick={handleStop}
              className="p-3 rounded-2xl bg-slate-900 hover:bg-rose-950 text-slate-300 hover:text-rose-400 transition-colors border border-slate-800"
              title="Stop audio"
            >
              <FiSquare size={16} />
            </button>
          )}

          <button 
            onClick={handlePlayPause}
            className="btn-bounce px-6 py-3 rounded-2xl bg-gradient-to-r from-coral-500 to-sunset-500 text-white font-heading font-extrabold text-xs shadow-xl flex items-center gap-2"
          >
            {isPlaying && !isPaused ? (
              <>
                <FiPause size={16} />
                <span>Pause Audio</span>
              </>
            ) : (
              <>
                <FiPlay size={16} />
                <span>{isPaused ? 'Resume Narration' : 'Play Web Audio Guide'}</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};

export default AudioGuide;
