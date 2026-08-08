import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, AlertTriangle, Eye, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { mythRealityList } from '../data';
import { MythReality } from '../types';

export default function MythRealitySection() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);

  const activeItem = mythRealityList[selectedIndex] || mythRealityList[0];

  const handlePageChange = (index: number) => {
    if (index === selectedIndex) return;
    setIsFlipping(true);
    setTimeout(() => {
      setSelectedIndex(index);
      setIsFlipping(false);
    }, 250);
  };

  return (
    <section id="myths" className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden border-b border-bronze-dark/40">
      {/* Background Texture from User */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: "url('/BACKGROUND%201.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }} 
      />
      {/* Vignette vignette ambient */}
      <div className="absolute inset-0 vignette-ambient pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#3a2e24] font-bold uppercase">The Ledger of Truth</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2e241f] tracking-wide font-bold">
            MYTH VS REALITY
          </h2>
          <p className="text-[#3a2e24]/90 font-vintage italic leading-[30px] text-[40px] w-[900px] ml-[20px] mr-0 mt-0 pr-[250px]">
            "We do not dismiss local memories; we study them. Every superstition contains the kernel of an unmapped physical phenomenon."
          </p>
        </div>

        {/* The Vintage Wooden Desk Base */}
        <div className="p-4 md:p-8 bg-[#2d221a] rounded-xl border-4 border-[#120e0c] shadow-[0_25px_60px_rgba(0,0,0,0.95)] relative overflow-hidden">
          {/* Wood veneer overlay */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#160f0a]/90 pointer-events-none" />
          
          <div className="relative z-10">
            
            {/* The Open Leather Notebook */}
            <div className="relative bg-[#1a130e] p-2 rounded-lg border border-[#2e2117] shadow-2xl flex flex-col">
              {/* Outer leather binding visible in corners */}
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-[#3e2b1f] via-[#1a110a] to-[#2c1a10] border-2 border-[#120e0c] -z-1" />

              {/* Page Spine Dividers */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[8px] bg-gradient-to-r from-[#1c130d] via-black to-[#1c130d] -translate-x-1/2 z-20 shadow-inner hidden md:block" />

              {/* Notebook Pages Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 bg-[#f2e6d5] rounded-md border border-[#c4b5a2] overflow-hidden paper-grain relative">
                
                {/* Left Page (Myth & Folklore) */}
                <div className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-[#c4b5a2]/60 relative flex flex-col justify-between font-vintage">
                  
                  {/* Subtle red ink outline stamp */}
                  <div className="absolute top-8 right-8 border-2 border-red-900/15 text-red-900/15 font-serif text-[8.5px] uppercase tracking-widest font-bold px-2 py-0.5 rounded rotate-12 pointer-events-none select-none">
                    FOLKLORE RECORD
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      {/* Page title */}
                      <div>
                        <span className="font-mono text-[9px] tracking-[0.25em] text-[#544338] uppercase font-bold block mb-1">
                          CHAPTER {selectedIndex + 1}: Oral History
                        </span>
                        <h3 className="font-serif text-2xl text-[#6b251a] font-bold tracking-wide italic">
                          {activeItem.mythTitle}
                        </h3>
                      </div>

                      {/* Myth Details */}
                      <div>
                        <h4 className="font-serif text-xs uppercase tracking-wider text-[#544338]/80 font-bold mb-1.5 flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-[#6b251a]" />
                          The Legend:
                        </h4>
                        <p className="text-[14px] leading-relaxed text-[#3a2f26] font-normal italic">
                          "{activeItem.mythDetails}"
                        </p>
                      </div>

                      {/* Vastu Shastra or Old Reference text footer */}
                      {activeItem.vashisthaRef && (
                        <div className="pt-4 border-t border-[#3a2e24]/10 mt-auto">
                          <span className="font-mono text-[8px] tracking-wider uppercase text-[#7a6042] font-semibold block">Ancient Text Correspondence:</span>
                          <span className="text-[12px] italic text-[#544338] mt-0.5 inline-block font-serif">
                            {activeItem.vashisthaRef}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                </div>

                {/* Right Page (Scientific Findings) */}
                <div className="p-6 md:p-10 relative flex flex-col justify-between font-sans">
                  
                  {/* Subtle green ink outline stamp */}
                  <div className="absolute top-8 right-8 border-2 border-emerald-900/15 text-emerald-900/15 font-serif text-[8.5px] uppercase tracking-widest font-bold px-2 py-0.5 rounded -rotate-6 pointer-events-none select-none">
                    EMPIRICAL AUDIT
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedIndex}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      {/* Page title */}
                      <div>
                        <span className="font-mono text-[9px] tracking-[0.25em] text-emerald-950 uppercase font-bold block mb-1">
                          PHYSICAL AUDIT RECORD
                        </span>
                        <h3 className="font-serif text-2xl text-emerald-950 font-bold tracking-wide">
                          {activeItem.realityTitle}
                        </h3>
                      </div>

                      {/* Reality Details */}
                      <div>
                        <h4 className="font-serif text-xs uppercase tracking-wider text-[#544338]/80 font-bold mb-1.5 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-800" />
                          Geological Mechanism:
                        </h4>
                        <p className="text-[13px] leading-relaxed text-[#2c221a] font-light">
                          {activeItem.realityDetails}
                        </p>
                      </div>

                      {/* Detailed Scientific Explanation */}
                      <div className="p-4 bg-[#ede2d4] border-l-2 border-emerald-850 rounded">
                        <h5 className="font-mono text-[8.5px] tracking-wider text-[#544338] uppercase font-bold mb-1">Empirical Equation / Explanation:</h5>
                        <p className="text-[12.5px] leading-relaxed text-emerald-900 font-medium font-vintage italic">
                          {activeItem.scientificExplanation}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                </div>

              </div>
            </div>

            {/* Notebook Selector Controls (styled as small labels on wooden desk) */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gold-faded/10 pt-6">
              <span className="font-mono text-[9px] text-gold-faded/60 uppercase tracking-widest">
                Flip to another research entry:
              </span>
              <div className="flex flex-wrap gap-2">
                {mythRealityList.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => handlePageChange(idx)}
                    className={`px-3 py-2 rounded text-[10.5px] font-mono tracking-widest border transition-all duration-300 uppercase cursor-pointer ${
                      idx === selectedIndex
                        ? 'bg-gold-warm/15 border-gold-warm text-gold-warm shadow-[0_0_10px_rgba(212,175,55,0.15)]'
                        : 'bg-ancient-charcoal/40 border-bronze-dark/60 text-ancient-beige/40 hover:border-gold-faded/30 hover:text-gold-faded'
                    }`}
                  >
                    0{idx + 1}. {item.mythTitle.split(' ').slice(0, 2).join(' ')}...
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
