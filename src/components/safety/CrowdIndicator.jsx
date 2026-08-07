import React from 'react';
import { FiUsers, FiInfo } from 'react-icons/fi';

export default function CrowdIndicator({ destinationName, level, note }) {
  const getLevelConfig = (lvl) => {
    switch(lvl?.toLowerCase()) {
      case 'low': return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200', icon: 'text-green-500' };
      case 'medium': return { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200', icon: 'text-amber-500' };
      case 'high': return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200', icon: 'text-red-500' };
      default: return { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-200', icon: 'text-slate-500' };
    }
  };

  const config = getLevelConfig(level);

  return (
    <div className={`p-4 rounded-xl border ${config.border} ${config.bg} flex items-start gap-3 relative overflow-hidden transition-transform hover:scale-[1.02] cursor-default`}>
      <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
      
      <div className={`p-2 rounded-lg bg-white/60 backdrop-blur-sm ${config.icon} shrink-0`}>
        <FiUsers size={24} />
      </div>
      
      <div className="flex-1">
        <h4 className="font-semibold text-slate-800 mb-0.5">{destinationName}</h4>
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/60 ${config.text}`}>
            {level} Crowd
          </span>
          <span className="text-[10px] text-slate-400 bg-white/50 px-1.5 py-0.5 rounded border border-slate-200/50">Demo Data</span>
        </div>
        {note && <p className={`text-xs ${config.text} opacity-80 mt-1 flex items-start gap-1`}>
          <FiInfo className="shrink-0 mt-0.5" /> 
          <span>{note}</span>
        </p>}
      </div>
    </div>
  );
}
