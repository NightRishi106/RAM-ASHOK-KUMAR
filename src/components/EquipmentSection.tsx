import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Eye, Volume2, Wind, Layers, Settings, ShieldAlert, Cpu } from 'lucide-react';
import { equipmentList } from '../data';
import { Equipment } from '../types';

export default function EquipmentSection() {
  const [selectedEqId, setSelectedEqId] = useState<string>('eq-emf');
  const [needleAngle, setNeedleAngle] = useState(0); // For EMF meter fluctuation
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // For infrasound wave
  const [thermalColor, setThermalColor] = useState({ x: 50, y: 50 }); // For thermal camera screen interactive coordinate

  const activeEquipment = equipmentList.find(eq => eq.id === selectedEqId) || equipmentList[0];

  // 1. Simulating EMF needle fluctuation
  useEffect(() => {
    if (selectedEqId !== 'eq-emf') return;
    const interval = setInterval(() => {
      // Base center is 0 deg (pointing straight up). Fluctuate between -35 and +45
      const randomFluctuation = Math.sin(Date.now() / 200) * 15 + (Math.random() * 10 - 5);
      setNeedleAngle(randomFluctuation);
    }, 100);
    return () => clearInterval(interval);
  }, [selectedEqId]);

  // 2. Painting continuous live waveform on HTML5 Canvas for acoustic/seismic
  useEffect(() => {
    if (selectedEqId !== 'eq-acoustic' && selectedEqId !== 'eq-gpr') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = selectedEqId === 'eq-acoustic' ? '#d4af37' : '#b87333';
      ctx.lineWidth = 1.5;
      ctx.beginPath();

      const width = canvas.width;
      const height = canvas.height;
      const midY = height / 2;

      for (let x = 0; x < width; x++) {
        // Compose multiple sine waves for high-fidelity acoustic wave noise look
        const angle1 = (x / 25) + offset;
        const angle2 = (x / 8) + offset * 2;
        const angle3 = (x / 60) + offset * 0.5;
        const amplitude1 = selectedEqId === 'eq-acoustic' ? 12 : 5;
        const amplitude2 = selectedEqId === 'eq-acoustic' ? 3 : 2;
        const amplitude3 = selectedEqId === 'eq-acoustic' ? 6 : 14;

        const y = midY + 
                  Math.sin(angle1) * amplitude1 + 
                  Math.cos(angle2) * amplitude2 + 
                  Math.sin(angle3) * amplitude3;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Draw faint grid behind wave
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.04)';
      ctx.lineWidth = 0.5;
      for (let g = 10; g < width; g += 20) {
        ctx.beginPath();
        ctx.moveTo(g, 0);
        ctx.lineTo(g, height);
        ctx.stroke();
      }
      for (let g = 10; g < height; g += 15) {
        ctx.beginPath();
        ctx.moveTo(0, g);
        ctx.lineTo(width, g);
        ctx.stroke();
      }

      offset += selectedEqId === 'eq-acoustic' ? 0.08 : 0.03;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [selectedEqId]);

  // 3. Handle thermal camera screen hover coordinate trigger
  const handleThermalMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setThermalColor({ x, y });
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity': return Activity;
      case 'Volume2': return Volume2;
      case 'Eye': return Eye;
      case 'Wind': return Wind;
      case 'Layers': return Layers;
      default: return Settings;
    }
  };

  return (
    <section id="equipment" className="relative py-24 px-4 md:px-8 lg:px-16 bg-[#161210] overflow-hidden border-b border-bronze-dark/40">
      {/* Background vignette */}
      <div className="absolute inset-0 vignette-ambient pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold-faded uppercase">The Museum Cabinet</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gold-warm tracking-wide font-medium">
            SCIENTIFIC INSTRUMENTS
          </h2>
          <p className="mt-4 text-xs md:text-sm text-ancient-beige/65 font-vintage italic leading-relaxed">
            "Arranged on our laboratory research table. Select a tool below to power up the physical testing grid and read live subterranean sensors."
          </p>
        </div>

        {/* Layout: Main display card + side list (Museum table feel) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Side List: The Instrument Grid Selection (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="font-mono text-[9px] tracking-widest text-gold-faded/50 uppercase mb-1">
              Select Instrument for Testing:
            </span>
            {equipmentList.map(eq => {
              const isSelected = eq.id === selectedEqId;
              const IconComp = getIcon(eq.iconName);
              return (
                <button
                  key={eq.id}
                  onClick={() => setSelectedEqId(eq.id)}
                  className={`w-full p-4 rounded text-left border transition-all duration-300 flex items-center gap-4 cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#2c1d14] to-[#1a120c] border-gold-warm text-gold-warm shadow-[0_5px_15px_rgba(212,175,55,0.1)]'
                      : 'bg-ancient-charcoal/30 border-bronze-dark/40 text-ancient-beige/65 hover:border-gold-faded/30 hover:text-gold-faded'
                  }`}
                >
                  {/* Subtle inner highlight */}
                  {isSelected && <div className="absolute left-0 inset-y-0 w-[3px] bg-gold-warm" />}

                  <div className={`p-2.5 rounded border transition-colors ${
                    isSelected ? 'bg-gold-warm/10 border-gold-warm/30' : 'bg-bronze-dark/30 border-bronze-dark/60'
                  }`}>
                    <IconComp className="w-4 h-4" />
                  </div>

                  <div className="min-w-0">
                    <span className="block font-serif text-xs font-semibold tracking-wide truncate">{eq.name}</span>
                    <span className="block font-mono text-[8px] tracking-widest text-ancient-beige/40 uppercase mt-0.5">{eq.type}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Center Main testing dashboard panel (8 cols on lg) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEquipment.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative p-6 md:p-8 bg-[#1e1713] rounded-lg border-2 border-bronze-dark/60 shadow-[0_20px_45px_rgba(0,0,0,0.8)] h-full flex flex-col justify-between"
              >
                {/* Copper hardware accents in corners */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold-faded/20" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gold-faded/20" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-gold-faded/20" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold-faded/20" />

                {/* Dashboard top meta */}
                <div className="flex flex-wrap items-center justify-between border-b border-bronze-dark/50 pb-4 mb-6 gap-3">
                  <div>
                    <span className="font-mono text-[8.5px] tracking-[0.25em] text-gold-faded uppercase">Calibration Interface Active</span>
                    <h3 className="font-serif text-lg md:text-xl text-gold-warm font-medium mt-0.5">{activeEquipment.name}</h3>
                  </div>
                  <div>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[9.5px] font-mono uppercase tracking-wider font-semibold ${
                      activeEquipment.status === 'active_field'
                        ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-450'
                        : activeEquipment.status === 'calibrating'
                        ? 'bg-amber-950/40 border border-amber-500/30 text-amber-450'
                        : 'bg-bronze-dark/50 border border-gold-faded/20 text-ancient-beige/60'
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${
                        activeEquipment.status === 'active_field'
                          ? 'bg-emerald-450 animate-pulse'
                          : activeEquipment.status === 'calibrating'
                          ? 'bg-amber-450 animate-pulse'
                          : 'bg-gold-faded'
                      }`} />
                      {activeEquipment.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>

                {/* Grid separating: Description vs Live Visualizer */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-auto">
                  
                  {/* Left: Interactive visual screen */}
                  <div className="flex flex-col items-center justify-center p-4 bg-[#110d0a] rounded border border-bronze-dark/50 shadow-inner h-52 relative overflow-hidden">
                    
                    {/* Retro Green/Amber Graticule Grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                    {/* INTERACTIVE 1: EMF Analog Needle Indicator */}
                    {activeEquipment.id === 'eq-emf' && (
                      <div className="flex flex-col items-center justify-center w-full h-full relative mt-2">
                        {/* Gauge semi-circle arch */}
                        <svg className="w-40 h-24 text-gold-faded/30" viewBox="0 0 100 50" fill="none">
                          <path d="M 10 50 A 40 40 0 0 1 90 50" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
                          <path d="M 20 50 A 30 30 0 0 1 80 50" stroke="currentColor" strokeWidth="1" />
                          
                          {/* Scale tick marks */}
                          <line x1="10" y1="50" x2="15" y2="50" stroke="currentColor" strokeWidth="1.5" />
                          <line x1="50" y1="10" x2="50" y2="15" stroke="currentColor" strokeWidth="1.5" />
                          <line x1="90" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="1.5" />
                          
                          {/* Dynamic Needle */}
                          <line
                            x1="50"
                            y1="50"
                            x2={50 + Math.sin((needleAngle * Math.PI) / 180) * 38}
                            y2={50 - Math.cos((needleAngle * Math.PI) / 180) * 38}
                            stroke="#d4af37"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            className="transition-all duration-100"
                          />
                          <circle cx="50" cy="50" r="3" fill="#d4af37" />
                        </svg>

                        <div className="text-center mt-2 z-10">
                          <span className="block font-mono text-[11px] text-gold-warm font-semibold tracking-widest leading-none">
                            {activeEquipment.currentReading}
                          </span>
                          <span className="block font-mono text-[7px] text-ancient-beige/40 tracking-widest uppercase mt-1">
                            Magnetic Flux Scale Range: 0-100 mG
                          </span>
                        </div>
                      </div>
                    )}

                    {/* INTERACTIVE 2: Live Canvas Waveform (Acoustic & GPR) */}
                    {(activeEquipment.id === 'eq-acoustic' || activeEquipment.id === 'eq-gpr') && (
                      <div className="w-full h-full flex flex-col justify-between">
                        <canvas
                          ref={canvasRef}
                          width={320}
                          height={120}
                          className="w-full h-28 bg-[#0d0907] rounded border border-bronze-dark/20"
                        />
                        <div className="flex justify-between items-center font-mono text-[7.5px] text-ancient-beige/40 px-1 mt-1">
                          <span>TRIGGER: GROUND MOTION</span>
                          <span className="text-gold-faded animate-pulse">{activeEquipment.currentReading}</span>
                        </div>
                      </div>
                    )}

                    {/* INTERACTIVE 3: Thermal Infrared Hover Screen */}
                    {activeEquipment.id === 'eq-thermal' && (
                      <div
                        onMouseMove={handleThermalMouseMove}
                        className="w-full h-full flex flex-col justify-between group cursor-crosshair relative"
                      >
                        {/* Thermal screen background with noise gradient */}
                        <div
                          className="w-full h-28 rounded border border-bronze-dark/30 overflow-hidden relative"
                          style={{
                            background: `radial-gradient(circle at ${thermalColor.x}% ${thermalColor.y}%, rgb(184, 115, 51) 0%, rgb(139, 92, 26) 20%, rgb(42, 18, 12) 50%, rgb(10, 8, 7) 100%)`
                          }}
                        >
                          {/* Crosshair indicator */}
                          <div
                            className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none flex items-center justify-center text-white/40"
                            style={{ left: `${thermalColor.x}%`, top: `${thermalColor.y}%` }}
                          >
                            <div className="w-4 h-[1px] bg-white/40" />
                            <div className="h-4 w-[1px] bg-white/40 absolute" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center font-mono text-[7.5px] text-ancient-beige/40 px-1 mt-1">
                          <span>THERM MATRIX LOCK: CALIBRATING</span>
                          <span className="text-glow-copper font-bold text-copper uppercase">
                            Y: {thermalColor.y.toFixed(0)}% X: {thermalColor.x.toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    )}

                    {/* INTERACTIVE 4: Gas / Ion Geiger ticks counter */}
                    {activeEquipment.id === 'eq-gas' && (
                      <div className="flex flex-col justify-center items-center h-full w-full relative">
                        <div className="w-16 h-16 rounded-full border-2 border-gold-faded/20 flex items-center justify-center relative bg-gradient-to-br from-black to-[#211611]">
                          <Cpu className="w-6 h-6 text-gold-warm/60 animate-pulse" />
                        </div>
                        <div className="text-center mt-3 font-mono">
                          <span className="block text-xs text-gold-warm tracking-wider font-bold">
                            {activeEquipment.currentReading}
                          </span>
                          <span className="block text-[7px] text-ancient-beige/40 tracking-widest uppercase mt-1">
                            RADIUM DECAY RATIO / AIR PRESSURE
                          </span>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Right: Textual Specs & Historical Precedent */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-serif text-xs uppercase tracking-wider text-gold-faded font-bold">Physical Function:</h4>
                      <p className="font-sans text-[12.5px] font-light leading-relaxed text-ancient-beige/80 mt-1">
                        {activeEquipment.description}
                      </p>
                    </div>

                    <div className="p-4 bg-ancient-charcoal/40 border border-bronze-dark/40 rounded">
                      <h5 className="font-mono text-[8.5px] tracking-wider text-gold-faded uppercase font-semibold">Historical Museum Precedent:</h5>
                      <p className="font-vintage text-[12.5px] leading-relaxed italic text-ancient-beige/60 mt-1">
                        "{activeEquipment.historicalPrecedent}"
                      </p>
                    </div>
                  </div>

                </div>

                {/* Technical data footer */}
                <div className="mt-8 pt-4 border-t border-bronze-dark/40 grid grid-cols-2 gap-4 font-mono text-[8px] text-ancient-beige/40 uppercase tracking-widest">
                  <div>
                    <span>Sensor Unit:</span>
                    <strong className="block text-gold-faded font-semibold text-[9.5px] mt-0.5">{activeEquipment.measurementUnit}</strong>
                  </div>
                  <div>
                    <span>Coil Frequency:</span>
                    <strong className="block text-gold-faded font-semibold text-[9.5px] mt-0.5">{activeEquipment.soundFrequency || 'None'}</strong>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
