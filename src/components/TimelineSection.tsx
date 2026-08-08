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
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#3a2e24] font-bold uppercase">A quarter-century of unquiet work.</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2e241f] tracking-wide font-bold">
            Chronology
          </h2>
          <p className="mt-4 text-xs md:text-sm text-[#3a2e24]/90 font-vintage italic leading-relaxed">
            "From the cremation grounds of Banaras to the glow of a hundred thousand screens — the long ledger of how Paranormal Mechanism became what it is."
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
                      /* Entry Label Block */
                      <div className="p-4 bg-[#ede2d4] border border-[#a38c5f]/30 rounded flex flex-col items-center md:items-end text-center md:text-right shadow-inner justify-center h-[80px]">
                        <span className="font-mono text-[14px] text-[#544338] tracking-widest uppercase block font-bold">
                          {milestone.sketchLabel}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Right Side (or opposite side spacing) */}
                  <div className="w-full md:w-1/2 pl-12 md:px-8 mt-4 md:mt-0 text-left flex flex-col justify-center">
                    {isEven ? (
                      /* Entry Label Block */
                      <div className="p-4 bg-[#ede2d4] border border-[#a38c5f]/30 rounded flex flex-col items-center md:items-start text-center md:text-left shadow-inner mb-4 md:mb-0 justify-center h-[80px]">
                        <span className="font-mono text-[14px] text-[#544338] tracking-widest uppercase block font-bold">
                          {milestone.sketchLabel}
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
          <div className="mt-16 flex items-center justify-center gap-2 text-[14px] font-mono text-[#544338] uppercase tracking-[0.2em] pt-6 border-t border-[#a38c5f]/20 font-bold">
            <Feather className="w-4 h-4 text-amber-900/60" />
            <span>— the ledger remains open —</span>
          </div>

        </div>

      </div>
    </section>
  );
}
