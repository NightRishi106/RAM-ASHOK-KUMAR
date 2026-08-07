import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderOpen, MapPin, Calendar, Compass, ShieldCheck, Tag, Info, ChevronRight, X } from 'lucide-react';
import { investigations } from '../data';
import { Investigation } from '../types';

export default function InvestigationsSection() {
  const [openDrawerId, setOpenDrawerId] = useState<string | null>('inv-hampi');
  const [selectedCaseDetail, setSelectedCaseDetail] = useState<Investigation | null>(investigations[0]);

  const handleDrawerClick = (id: string) => {
    if (openDrawerId === id) {
      // Toggle off
      setOpenDrawerId(null);
      setSelectedCaseDetail(null);
    } else {
      setOpenDrawerId(id);
      const caseItem = investigations.find(item => item.id === id);
      setSelectedCaseDetail(caseItem || null);
    }
  };

  return (
    <section id="archives" className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden border-b border-bronze-dark/40">
      {/* Background Texture from User */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: "url('/BACKGROUND%201.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }} 
      />
      {/* Background Vignette */}
      <div className="absolute inset-0 vignette-ambient pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold-faded uppercase">Classified Dossiers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gold-warm tracking-wide font-medium">
            FEATURED INVESTIGATIONS
          </h2>
          <p className="mt-4 text-xs md:text-sm text-ancient-beige/65 font-vintage italic leading-relaxed">
            "Every drawer holds a physical trace of an anomaly. Pull a drawer handle to extract the classified field binder."
          </p>
        </div>

        {/* Layout: Filing Cabinet (left/top) vs Extracted Folder Details (right/bottom) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: The Antique Wood Cabinet (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col">
            
            <div className="relative p-6 bg-[#281d16] rounded-lg border-2 border-[#120e0c] shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
              {/* Wood Grain Veneer Background Effect */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#1a120d]/80 pointer-events-none" />
              <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-repeat paper-grain" />
              
              {/* Cabinet Crown Moulding Border */}
              <div className="h-4 w-full bg-[#1c120c] border-b border-[#3a2e24] mb-6 rounded-t flex justify-between items-center px-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-warm/40" />
                <span className="text-[7.5px] font-mono text-gold-faded/50 tracking-widest uppercase">Anomalous Archive Cabinet CAGS-A</span>
                <span className="h-1.5 w-1.5 rounded-full bg-gold-warm/40" />
              </div>

              {/* Cabinet Drawers Container */}
              <div className="space-y-4">
                {investigations.map(item => {
                  const isOpen = openDrawerId === item.id;
                  return (
                    <div
                      key={item.id}
                      className="relative"
                    >
                      {/* Wood Drawer Slab */}
                      <motion.div
                        animate={{
                          y: isOpen ? 6 : 0,
                          scale: isOpen ? 0.98 : 1,
                          boxShadow: isOpen
                            ? 'inset 0 4px 10px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.5)'
                            : '0 8px 16px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.05)',
                        }}
                        transition={{ duration: 0.3 }}
                        onClick={() => handleDrawerClick(item.id)}
                        className={`h-20 w-full rounded relative border border-[#1a120d] cursor-pointer flex items-center justify-between px-6 select-none transition-colors ${
                          isOpen
                            ? 'bg-[#1e1410]'
                            : 'bg-gradient-to-b from-[#3a2b22] to-[#261b15] hover:from-[#433227]'
                        }`}
                      >
                        {/* Drawer Bevel Highlight */}
                        <div className="absolute top-0 inset-x-0 h-[1px] bg-white/5" />
                        
                        {/* Left/Right Metal Screws */}
                        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-bronze-dark/80 border border-gold-faded/20" />
                        <div className="absolute right-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-bronze-dark/80 border border-gold-faded/20" />

                        {/* Centered Antique Brass Plaque Plate */}
                        <div className="mx-auto flex flex-col items-center">
                          
                          <div className="px-4 py-1.5 bg-[#d4af37]/5 border border-gold-faded/30 rounded shadow-inner text-center min-w-32 relative">
                            {/* Paper card tucked inside plate */}
                            <span className="font-mono text-[9px] text-gold-warm tracking-widest font-bold block uppercase leading-none">
                              {item.code}
                            </span>
                            <span className="text-[7.5px] font-sans text-ancient-beige/40 tracking-wider uppercase block mt-1 leading-none">
                              {item.state} — {item.year}
                            </span>
                          </div>

                          {/* Brass Ring Pull */}
                          <div className="mt-1 flex flex-col items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-bronze-light/60" />
                            <div className={`w-5 h-5 rounded-full border-2 border-bronze-light/50 shadow-md ${
                              isOpen ? 'translate-y-0.5 opacity-50' : 'group-hover:scale-105'
                            } transition-transform`} />
                          </div>

                        </div>

                        {/* Right side status */}
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-gold-warm animate-pulse' : 'bg-gold-faded/30'}`} />
                          <ChevronRight className={`w-3.5 h-3.5 text-gold-faded/60 transition-transform ${
                            isOpen ? 'rotate-90' : ''
                          }`} />
                        </div>

                      </motion.div>
                    </div>
                  );
                })}
              </div>

              {/* Cabinet Feet / Plinth */}
              <div className="h-6 w-full bg-[#18100b] border-t border-black/80 mt-6 rounded-b" />
            </div>

          </div>

          {/* Right Side: The Manila Document Folder (7 cols on lg) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {selectedCaseDetail ? (
                <motion.div
                  key={selectedCaseDetail.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative bg-[#decda4] text-[#1c1613] p-6 md:p-8 rounded-tr-lg rounded-b-lg shadow-[0_20px_40px_rgba(0,0,0,0.7)] border-t-[12px] border-[#c0b187] font-sans"
                >
                  {/* Folder Manila Tab */}
                  <div className="absolute -top-[36px] left-0 h-6 px-5 bg-[#c0b187] rounded-t-md text-[10px] font-mono tracking-widest text-[#413926] font-bold uppercase flex items-center shadow-inner">
                    <FolderOpen className="w-3.5 h-3.5 mr-1.5" />
                    FILE: {selectedCaseDetail.code}
                  </div>

                  {/* Coffee Stain Decal */}
                  <div className="absolute right-6 bottom-6 w-32 h-32 rounded-full border-4 border-[#7a6a42]/10 pointer-events-none select-none blur-[1px] rotate-12" />

                  {/* Folder Contents */}
                  <div className="relative z-10 paper-grain">
                    
                    {/* Top Case Label */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#544338]/30 pb-4 mb-6 gap-3">
                      <div>
                        <span className="font-mono text-[9px] tracking-[0.25em] text-amber-900 uppercase font-bold">
                          Center for Anomalous Geological Studies
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl text-[#2c221a] font-bold mt-1">
                          {selectedCaseDetail.title}
                        </h3>
                      </div>
                      <div className="flex flex-col text-right sm:items-end">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-950/10 border border-red-900/25 rounded text-[9.5px] font-mono text-red-900 tracking-wider font-bold uppercase">
                          {selectedCaseDetail.evidenceBadge} Locked
                        </span>
                        <span className="text-[10px] font-mono text-[#544338]/80 mt-1 uppercase">
                          LOG: {selectedCaseDetail.year} EXP
                        </span>
                      </div>
                    </div>

                    {/* Metadata Coordinates Box */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#ebdcb7] border border-[#544338]/15 rounded p-4 mb-6">
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-amber-900" />
                        <div>
                          <span className="block text-[8px] font-mono uppercase text-[#544338]">Coordinates Matrix</span>
                          <span className="font-mono text-[11px] font-medium text-[#2c221a]">{selectedCaseDetail.coordinates}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Calendar className="w-4 h-4 text-amber-900" />
                        <div>
                          <span className="block text-[8px] font-mono uppercase text-[#544338]">Expedition Site</span>
                          <span className="font-sans text-[11px] font-semibold text-[#2c221a]">{selectedCaseDetail.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Full Case Narrative */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-serif text-xs uppercase tracking-wider text-[#544338] font-bold">Investigator’s Summary Journal</h4>
                        <p className="font-vintage text-[14.5px] leading-relaxed text-[#2c221a] italic mt-1.5">
                          "{selectedCaseDetail.fullNarrative}"
                        </p>
                      </div>

                      {/* Scientific Findings Checklist */}
                      <div className="pt-4 border-t border-[#544338]/20">
                        <h4 className="font-serif text-xs uppercase tracking-wider text-[#544338] font-bold mb-2">Conclusive Empirical Findings:</h4>
                        <ul className="space-y-2.5">
                          {selectedCaseDetail.findings.map((finding, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[12.5px] text-[#2c221a] leading-relaxed">
                              <ShieldCheck className="w-4 h-4 text-emerald-850 shrink-0 mt-0.5" />
                              <span>{finding}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Equipment Used tag list */}
                      <div className="pt-4 border-t border-[#544338]/20 flex flex-wrap items-center gap-2">
                        <span className="font-serif text-[10px] uppercase tracking-wider text-[#544338] font-bold mr-1">Towed Equipment:</span>
                        {selectedCaseDetail.equipmentUsed.map((eq, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#1c1613]/10 border border-[#1c1613]/15 rounded font-mono text-[9px] uppercase tracking-wider text-[#2c221a] font-semibold"
                          >
                            <Tag className="w-2.5 h-2.5" />
                            {eq}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Red Ink Stamp */}
                    <div className="mt-8 flex justify-end">
                      <div className="border-[3px] border-double border-red-800/60 text-red-800/60 rounded px-4 py-1.5 rotate-[-8deg] font-serif text-[11px] uppercase tracking-[0.25em] font-bold select-none leading-none">
                        GEOLOGICAL RESOLUTION CONFIRMED
                      </div>
                    </div>

                  </div>
                </motion.div>
              ) : (
                <div className="h-96 rounded-lg border-2 border-dashed border-bronze-dark/40 flex flex-col items-center justify-center text-center p-8 text-ancient-beige/55">
                  <Info className="w-12 h-12 text-gold-faded/50 mb-3" />
                  <p className="font-serif text-lg text-gold-warm">Classified Record Empty</p>
                  <p className="font-sans text-xs text-ancient-beige/40 max-w-xs mt-1">Select one of the file codes on the left filing cabinet to extract the physical field dossier and readings.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
