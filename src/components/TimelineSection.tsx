import React from 'react';
import { motion } from 'motion/react';
import { Compass, Clock, MapPin, Feather } from 'lucide-react';
import { timelineMilestones } from '../data';

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden border-b border-bronze-dark/40">
      {/* Background Texture from User */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: "url('/BACKGROUND%201.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }} 
      />
      {/* Vignette */}
      <div className="absolute inset-0 vignette-ambient pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold-faded uppercase">The Ledger of Years</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gold-warm tracking-wide font-medium">
            FIELD WORK TIMELINE
          </h2>
          <p className="mt-4 text-xs md:text-sm text-ancient-beige/65 font-vintage italic leading-relaxed">
            "An chronological registry of empirical milestones, engraved in the parchment annals of the Institute."
          </p>
        </div>

        {/* The Parchment Roll Canvas */}
        <div className="relative p-6 md:p-12 bg-[#ebdcb7] text-[#1c1613] rounded shadow-[0_25px_50px_rgba(0,0,0,0.8)] border border-[#a38c5f]/40 paper-grain">
          
          {/* Vertical Bronze Connector Line */}
          <div className="absolute left-6 md:left-1/2 top-16 bottom-16 w-[1.5px] bg-[#a38c5f]/40 -translate-x-1/2" />

          {/* Timeline Milestones list */}
          <div className="space-y-16 relative">
            {timelineMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={milestone.id}
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? '' : 'md:flex-row-reverse'
                  } relative`}
                >
                  {/* Timeline Central Node Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 w-3.5 h-3.5 rounded-full border border-amber-900 bg-[#ebdcb7] flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-900" />
                  </div>

                  {/* Left Side (or opposite side spacing) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 text-left md:text-right flex flex-col justify-center">
                    {isEven ? (
                      <div>
                        {/* Year Marker */}
                        <span className="font-serif text-3xl md:text-4xl font-bold text-amber-900 leading-none">
                          {milestone.year}
                        </span>
                        <div className="flex items-center gap-1.5 justify-start md:justify-end text-xs font-mono text-[#544338]/80 mt-1 uppercase">
                          <MapPin className="w-3.5 h-3.5" />
                          {milestone.location}
                        </div>
                      </div>
                    ) : (
                      /* Technical Sketch Ink Block */
                      <div className="p-4 bg-[#ede2d4] border border-[#a38c5f]/30 rounded flex flex-col items-center md:items-start text-center md:text-left shadow-inner">
                        <span className="font-mono text-[7px] text-[#544338]/60 tracking-wider uppercase block mb-2">Technical Field Plate</span>
                        
                        {/* Custom Blueprint SVG representing ink sketches */}
                        {milestone.id === 'tl-2005' && (
                          <svg className="w-40 h-20 text-amber-950/40" viewBox="0 0 200 100" fill="none">
                            {/* Harmonic pillars blueprint */}
                            <rect x="20" y="20" width="12" height="70" rx="1" stroke="currentColor" strokeWidth="0.75" />
                            <rect x="40" y="10" width="12" height="80" rx="1" stroke="currentColor" strokeWidth="0.75" />
                            <rect x="60" y="30" width="12" height="60" rx="1" stroke="currentColor" strokeWidth="0.75" />
                            <line x1="10" y1="90" x2="190" y2="90" stroke="currentColor" strokeWidth="0.75" />
                            <circle cx="46" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                            <text x="85" y="45" fontFamily="monospace" fontSize="6.5" fill="currentColor">NADA CORE: 111Hz</text>
                          </svg>
                        )}
                        {milestone.id === 'tl-2019' && (
                          <svg className="w-40 h-20 text-amber-950/40" viewBox="0 0 200 100" fill="none">
                            {/* Dial / Coil assemblies */}
                            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.75" />
                            <circle cx="50" cy="50" r="2" fill="currentColor" />
                            <line x1="50" y1="50" x2="72" y2="35" stroke="currentColor" strokeWidth="1" />
                            <path d="M 20 50 Q 50 10, 80 50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                            <text x="95" y="55" fontFamily="monospace" fontSize="6.5" fill="currentColor">COIL WINDING TYPE-A</text>
                          </svg>
                        )}
                        
                        <span className="font-vintage text-[10.5px] italic text-[#544338] mt-2 block leading-snug">
                          "{milestone.sketchLabel}"
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Right Side (or opposite side spacing) */}
                  <div className="w-full md:w-1/2 pl-12 md:px-8 mt-4 md:mt-0 text-left flex flex-col justify-center">
                    {isEven ? (
                      /* Technical Sketch Ink Block */
                      <div className="p-4 bg-[#ede2d4] border border-[#a38c5f]/30 rounded flex flex-col items-center md:items-start text-center md:text-left shadow-inner mb-4 md:mb-0">
                        <span className="font-mono text-[7px] text-[#544338]/60 tracking-wider uppercase block mb-2">Technical Field Plate</span>
                        
                        {/* Blueprint SVG */}
                        {milestone.id === 'tl-1999' && (
                          <svg className="w-40 h-20 text-amber-950/40" viewBox="0 0 200 100" fill="none">
                            {/* Magnetometer layout */}
                            <rect x="70" y="10" width="60" height="40" rx="2" stroke="currentColor" strokeWidth="0.75" />
                            <line x1="100" y1="50" x2="100" y2="90" stroke="currentColor" strokeWidth="0.75" />
                            <circle cx="100" cy="90" r="4" fill="currentColor" />
                            <line x1="30" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                            <text x="10" y="25" fontFamily="monospace" fontSize="6.5" fill="currentColor">CALIBRATION POINT 0.1</text>
                          </svg>
                        )}
                        {milestone.id === 'tl-2012' && (
                          <svg className="w-40 h-20 text-amber-950/40" viewBox="0 0 200 100" fill="none">
                            {/* Soil profile graph */}
                            <path d="M 10 70 Q 50 10, 100 80 T 190 30" stroke="currentColor" strokeWidth="0.75" />
                            <line x1="10" y1="90" x2="190" y2="90" stroke="currentColor" strokeWidth="0.5" />
                            <text x="110" y="25" fontFamily="monospace" fontSize="6.5" fill="currentColor">THERM INVERSION PT.9</text>
                          </svg>
                        )}
                        
                        <span className="font-vintage text-[10.5px] italic text-[#544338] mt-2 block leading-snug">
                          "{milestone.sketchLabel}"
                        </span>
                      </div>
                    ) : (
                      <div>
                        {/* Year Marker */}
                        <span className="font-serif text-3xl md:text-4xl font-bold text-amber-900 leading-none">
                          {milestone.year}
                        </span>
                        <div className="flex items-center gap-1.5 justify-start text-xs font-mono text-[#544338]/80 mt-1 uppercase">
                          <MapPin className="w-3.5 h-3.5" />
                          {milestone.location}
                        </div>
                      </div>
                    )}

                    {/* Milestone details description */}
                    <div className="mt-2.5 font-vintage">
                      <h4 className="text-base font-bold text-amber-950 leading-snug">
                        {milestone.achievement}
                      </h4>
                      <p className="text-[13px] leading-relaxed text-[#3a2f26] mt-1 font-sans font-light">
                        {milestone.narrative}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Ledger Seal Decal Footer */}
          <div className="mt-16 flex items-center justify-center gap-2 text-[10.5px] font-mono text-[#544338]/55 uppercase tracking-[0.2em] pt-6 border-t border-[#a38c5f]/20">
            <Feather className="w-4 h-4 text-amber-900/60" />
            <span>Engraved Ledger of the Varanasi Institute</span>
          </div>

        </div>

      </div>
    </section>
  );
}
