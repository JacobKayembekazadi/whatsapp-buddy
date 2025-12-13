import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Location {
  id: string;
  x: number;
  y: number;
  name: string;
  desc: string;
}

interface ZoneMarker {
  id: string;
  x: number;
  y: number;
  name: string;
  details: string;
  type: 'drill' | 'zone';
}

const locations: Location[] = [
  { id: 'w2', x: 45, y: 35, name: 'W2 Cu-Ni-PGE', desc: 'Ring of Fire Region' },
  { id: 'shining', x: 55, y: 65, name: 'Shining Tree', desc: 'Abitibi Gold Belt' },
  { id: 'heenan', x: 50, y: 68, name: 'Heenan Mallard', desc: 'Swayze Greenstone' },
];

const zones: ZoneMarker[] = [
  { id: 'z1', x: 48, y: 33, name: 'Central Zone', details: 'High-grade Cu-Ni intercepts', type: 'zone' },
  { id: 'z2', x: 42, y: 37, name: 'T-5 Target', details: 'Priority Geophysical Anomaly', type: 'drill' },
  { id: 'z3', x: 58, y: 63, name: 'Ronda Mine', details: 'Historic Producer (Au)', type: 'zone' },
  { id: 'z4', x: 52, y: 67, name: 'Herron Area', details: '12.4 g/t Au Grab Sample', type: 'drill' },
  { id: 'z5', x: 49, y: 69, name: 'Mallard East', details: 'Structural Target', type: 'drill' },
];

export const ProjectMap: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] bg-slate-900 rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
      {/* Background Map Abstract */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
         <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="#0f172a" />
         {/* Simplified Ontario-ish Outline for effect */}
         <path d="M20,90 Q10,50 30,30 T80,20 T90,80 Z" fill="none" stroke="#e56417" strokeWidth="0.5" strokeDasharray="5 5" />
         <circle cx="50" cy="50" r="40" stroke="#334155" strokeWidth="0.5" fill="none" />
         <circle cx="50" cy="50" r="30" stroke="#334155" strokeWidth="0.5" fill="none" />
      </svg>
      
      {/* Legend / Title */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10 pointer-events-none">
        <h3 className="text-white font-serif text-xl md:text-2xl font-bold">Ontario Assets</h3>
        <p className="text-gray-400 text-xs md:text-sm">Tier-1 Mining Jurisdiction</p>
        
        <div className="mt-4 md:mt-6 space-y-2 md:space-y-3 bg-slate-800/50 p-3 md:p-4 rounded-lg backdrop-blur-sm border border-white/10 hidden sm:block">
           <div className="flex items-center text-[10px] md:text-xs text-gray-300">
              <span className="relative flex h-3 w-3 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
              </span>
              Flagship Project
           </div>
           <div className="flex items-center text-[10px] md:text-xs text-gray-300">
              <span className="w-2 h-2 bg-purple-400 mr-3 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></span> Resource Zone
           </div>
           <div className="flex items-center text-[10px] md:text-xs text-gray-300">
              <span className="w-2 h-2 bg-blue-400 rotate-45 mr-3 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span> Drill Target
           </div>
        </div>
      </div>

      {/* Resource Zones & Drill Targets */}
      {zones.map((zone) => (
        <div
            key={zone.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
            style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
            onMouseEnter={() => setActive(zone.id)}
            onMouseLeave={() => setActive(null)}
            // Enable touch toggle on mobile
            onClick={() => setActive(active === zone.id ? null : zone.id)}
        >
             <div className={`transition-all duration-300 ${active === zone.id ? 'scale-150 brightness-125' : 'scale-100 opacity-80 hover:opacity-100'}`}>
                {zone.type === 'drill' ? (
                    <div className="w-2.5 h-2.5 bg-blue-400 rotate-45 shadow-[0_0_10px_rgba(96,165,250,0.6)]"></div>
                ) : (
                    <div className="w-2.5 h-2.5 bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.6)]"></div>
                )}
             </div>

              <AnimatePresence>
                {active === zone.id && (
                <motion.div
                    initial={{ opacity: 0, y: 5, scale: 0.9 }}
                    animate={{ opacity: 1, y: -8, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-48 bg-slate-900/90 border border-slate-600 p-3 rounded shadow-2xl backdrop-blur-md z-40"
                >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-600"></div>
                    <div className="flex items-center justify-between mb-1">
                        <span className={`text-[10px] font-bold px-1.5 rounded ${zone.type === 'zone' ? 'bg-purple-900 text-purple-200' : 'bg-blue-900 text-blue-200'}`}>
                            {zone.type === 'zone' ? 'ZONE' : 'TARGET'}
                        </span>
                    </div>
                    <h4 className="font-bold text-white text-xs uppercase mb-1">{zone.name}</h4>
                    <p className="text-[11px] text-gray-300 leading-tight">{zone.details}</p>
                </motion.div>
                )}
              </AnimatePresence>
        </div>
      ))}

      {/* Main Project Markers */}
      {locations.map((loc) => (
        <div
          key={loc.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-30"
          style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
          onMouseEnter={() => setActive(loc.id)}
          onMouseLeave={() => setActive(null)}
          onClick={() => setActive(active === loc.id ? null : loc.id)}
        >
          {/* Pulsing Beacon */}
          <span className="relative flex h-6 w-6">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75 ${active === loc.id ? 'duration-500' : 'duration-1000'}`}></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-brand-orange border-2 border-white shadow-lg"></span>
          </span>

          {/* Project Tooltip */}
          <AnimatePresence>
            {active === loc.id && (
            <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ 
                opacity: 1,
                y: -10,
                scale: 1
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-56 bg-white p-4 rounded shadow-2xl z-50"
            >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 transform rotate-45 w-4 h-4 bg-white"></div>
                <h4 className="font-bold text-brand-dark text-sm uppercase mb-1">{loc.name}</h4>
                <p className="text-xs text-gray-500">{loc.desc}</p>
                <div className="mt-2 text-[10px] text-brand-orange font-bold uppercase tracking-wider flex items-center">
                    View Project <span className="ml-1">→</span>
                </div>
            </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      
      {/* Footer Controls */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col space-y-2 text-right z-30">
        {locations.map(loc => (
          <button 
            key={loc.id}
            onMouseEnter={() => setActive(loc.id)}
            onMouseLeave={() => setActive(null)}
            className={`text-xs md:text-sm transition-all duration-300 ${active === loc.id ? 'text-brand-orange font-bold translate-x-0' : 'text-gray-500 hover:text-white translate-x-2'}`}
          >
            {loc.name}
          </button>
        ))}
      </div>
    </div>
  );
};
