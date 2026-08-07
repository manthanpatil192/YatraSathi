import React, { useState } from 'react';

const EcoBadge = ({ rating = 4, label = "Eco-Certified" }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="relative inline-flex flex-col items-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-seafoam-100 to-green-50 border border-seafoam-200 cursor-help shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:animate-[shimmer_1.5s_infinite] skew-x-12"></div>
        
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-seafoam-400 to-green-500 text-white shadow-inner relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0l2 2a1 1 0 01-1.414 1.414l-2-2a1 1 0 010-1.414zM15.707 15.707a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414l2 2a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          {/* We'll use a leaf icon instead */}
          <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-seafoam-400 to-green-500 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
        
        <span className="text-sm font-semibold text-green-800 relative z-10 whitespace-nowrap">{label}</span>
      </div>

      {/* Tooltip */}
      <div 
        className={`absolute bottom-full mb-2 w-48 bg-slate-800 text-white text-xs rounded-xl p-3 shadow-xl transform transition-all duration-200 z-20 ${
          showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="font-semibold text-seafoam-300 mb-1 flex items-center justify-between">
          <span>Sustainability Score</span>
          <span className="bg-white/10 px-1.5 py-0.5 rounded text-[10px]">{rating}/5</span>
        </div>
        <p className="text-slate-300 mb-2 leading-relaxed">This property meets high environmental and social impact standards.</p>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 ${i < rating ? 'text-seafoam-400' : 'text-slate-600'}`} 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
          ))}
        </div>
        
        {/* Tooltip Arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-slate-800 rotate-45"></div>
      </div>
    </div>
  );
};

export default EcoBadge;
