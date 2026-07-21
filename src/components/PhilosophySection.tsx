import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Radio, Zap, Thermometer, Droplet, Layers, Eye } from 'lucide-react';

interface MethodologyNode {
  id: string;
  name: string;
  sanskritTerm: string;
  shortDesc: string;
  fullPrinciple: string;
  sanskritVerse: string;
  translation: string;
  scientificConcept: string;
  activeCase: string;
  icon: React.ComponentType<any>;
  angle: number; // For rendering in the circular diagram
}

export default function PhilosophySection() {
  const [selectedNodeId, setSelectedNodeId] = useState('node-acoustic');

  const nodes: MethodologyNode[] = [
    {
      id: 'node-acoustic',
      name: 'Acoustic Resonance',
      sanskritTerm: 'Nada-Shastra',
      shortDesc: 'Acoustic standing waves and elliptical sound amplification in temple sanctums.',
      fullPrinciple: 'Ancient Indian temples were often carved in ellipsoidal or dome shapes using high-quartz granite blocks. When speakers chant deep pitch notes in the center, the vaults mirror frequencies between 110Hz and 130Hz—the exact frequency of a deep male baritone. This creates a powerful acoustic feedback loop, making the space hum as if alive and triggering profound psychological state shifts in subjects.',
      sanskritVerse: 'शब्देनान्तरिक्षं पूरितं। मन्द्रध्वनिः शिलायाः प्रतिश्रुतिं जनयति॥',
      translation: '"By sound is the space filled. The deep low chant produces a heavy resonance in the stone."',
      scientificConcept: 'Standing Wave Acoustics & Ellipsoidal Focal Amplification',
      activeCase: 'The Musical Pillars of Vittala, Hampi',
      icon: Radio,
      angle: 0
    },
    {
      id: 'node-geomagnetic',
      name: 'Geomagnetic Friction',
      sanskritTerm: 'Bhu-Marma',
      shortDesc: 'Subterranean fault line friction inducing high electromagnetic fluxes.',
      fullPrinciple: 'Tectonic friction points and groundwater faults can emit continuous, micro-frequency electromagnetic currents. When a structure sits directly atop a geomagnetic joint (Marma), the intense magnetic field changes affect human temporal lobes, occasionally triggering mild visual shadows in peripheral vision, dizziness, and intense lucid dreaming.',
      sanskritVerse: 'यत्र पृथिव्याः मर्माणि संधीयन्ते तत्र विद्युतप्रवाहो जायते॥',
      translation: '"Where the core joints of the earth are knit, there an invisible current of force is generated."',
      scientificConcept: 'Vapor-Diffusion Magnetic Deflection & Temporal Lobe Stimulation',
      activeCase: 'The Natural Fields of Kuldhara Village',
      icon: Zap,
      angle: 72
    },
    {
      id: 'node-thermal',
      name: 'Thermodynamic Inversion',
      sanskritTerm: 'Ushna-Saman',
      shortDesc: 'Cold-spot formations caused by gaseous seeps and masonry thermal gaps.',
      fullPrinciple: 'Alleged "cold spots" are analyzed through strict thermodynamics. In places built with dry-stone, mortar-less masonry, small cracks seeping deep subterranean radon or compressed carbon dioxide gases create sudden, physical local cooling. Ambient moisture condenses instantly, creating draft currents and visible mist pockets that mimic apparitions.',
      sanskritVerse: 'शिलानां शीतता वायुप्रवाहाच्च जायते मन्दं॥',
      translation: '"The localized chill of the stones is produced slowly by the upward movement of deep air."',
      scientificConcept: 'Adiabatic Gas Expansion & Differential Structural Heat Capacity',
      activeCase: 'The Gateway cold-spots of Bhangarh Fort',
      icon: Thermometer,
      angle: 144
    },
    {
      id: 'node-chemistry',
      name: 'Environmental Chemistry',
      sanskritTerm: 'Rasa-Vijnana',
      shortDesc: 'Ionization currents and trace heavy minerals in groundwater faultlines.',
      fullPrinciple: 'Natural mineral faultlines, heavy metal deposits (such as iron oxide, magnetite, or radioactive thorium-rich monazite) dissolve into local subterranean aquifers. Chronic ingestion or close proximity to these highly ionized water sources leads to distinct physiological changes, including high cell replication rates, altered hormone production, and mild perceptual distortion.',
      sanskritVerse: 'पृथिव्याः रसाः सलिलगताः जीवनप्रक्रियायां प्रभावं कुर्वन्ति॥',
      translation: '"The essences of the earth dissolved in water exert a heavy weight upon the flow of life."',
      scientificConcept: 'Aquifer Mass Spectroscopy & Background Ionizing Radiation',
      activeCase: 'The Thorium Aquifers of Kodinhi',
      icon: Droplet,
      angle: 216
    },
    {
      id: 'node-structural',
      name: 'Architectural Waveguides',
      sanskritTerm: 'Vastu-Mandala',
      shortDesc: 'The geometry of stone layouts focusing low-frequency environmental waves.',
      fullPrinciple: 'Pyramidal, concentric, and square-within-square temple layouts function similarly to modern radio waveguides. By aligning heavy granite structures to cardinal coordinates, these layouts trap and focus low-frequency ambient environmental waves (such as wind friction or microseisms), turning the building itself into a passive energetic resonator.',
      sanskritVerse: 'मण्डलस्य रेखाः वायुतरङ्गान् आकर्षन्ति। मन्दिरं महायन्त्रं भवति॥',
      translation: '"The lines of the sacred mandala draw the waves of the wind. The temple becomes a great machine."',
      scientificConcept: 'Concentric Dielectric Waveguides & Environmental RF Traps',
      activeCase: 'The Ellipsoidal Sanctums of Western Ghats',
      icon: Layers,
      angle: 288
    }
  ];

  const selectedNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];

  return (
    <section id="philosophy" className="relative py-24 px-4 md:px-8 lg:px-16 bg-[#120e0c] overflow-hidden border-b border-bronze-dark/40">
      
      {/* Background grain and vignette */}
      <div className="absolute inset-0 vignette-ambient pointer-events-none" />
      
      {/* Faint blueprint grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(197,168,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(197,168,128,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold-faded uppercase">The Science of Myth</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gold-warm tracking-wide font-medium">
            RESEARCH PHILOSOPHY
          </h2>
          <p className="mt-4 text-xs md:text-sm text-ancient-beige/65 font-vintage italic leading-relaxed">
            "We do not debunk. We do not mythologize. We measure."
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Circular Interactive Diagram (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            <div className="relative w-80 h-80 flex items-center justify-center">
              
              {/* Outer Circular Ring */}
              <div className="absolute inset-0 rounded-full border border-bronze-light/20 border-dashed" />
              <div className="absolute inset-4 rounded-full border border-gold-faded/10" />
              
              {/* Spinning Sanskrit Script Ring */}
              <svg className="absolute inset-6 w-[252px] h-[252px] text-gold-faded/10 animate-[spin_180s_linear_infinite]" viewBox="0 0 100 100">
                <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                <text fontFamily="serif" fontSize="6.5" fill="currentColor" letterSpacing="2">
                  <textPath href="#circlePath">
                    ऋग् वेद यजुर्वेद सामवेद अथर्ववेद वास्तु शास्त्र शिल्प रहस्य रसार्णव मण्डलम् ॥
                  </textPath>
                </text>
              </svg>

              {/* Connecting Bronze Lines (SVGs radiating from core) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
                {nodes.map(node => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x2 = 100 + Math.cos(rad) * 72;
                  const y2 = 100 + Math.sin(rad) * 72;
                  const isSelected = node.id === selectedNodeId;
                  return (
                    <g key={node.id}>
                      <line
                        x1="100"
                        y1="100"
                        x2={x2}
                        y2={y2}
                        stroke={isSelected ? '#d4af37' : '#3a2e24'}
                        strokeWidth={isSelected ? '1.5' : '0.75'}
                        className="transition-all duration-500"
                      />
                      {isSelected && (
                        <circle
                          cx={x2}
                          cy={y2}
                          r="3"
                          fill="#d4af37"
                          className="animate-ping"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Central Core Circle (Gold Medallion) */}
              <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#2a1d15] to-[#0f0a07] border border-gold-warm/40 flex flex-col items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.15)] z-20">
                <span className="font-serif text-[10px] text-gold-warm tracking-widest font-bold">CAGS</span>
                <span className="text-[7px] font-mono text-gold-faded/60 uppercase">Varanasi</span>
              </div>

              {/* Clickable Peripheral Nodes */}
              {nodes.map(node => {
                const rad = (node.angle * Math.PI) / 180;
                // Offset in px based on 320px width/height (radius = 110px)
                const x = 160 + Math.cos(rad) * 110 - 24; // 24 is half of node width (48px)
                const y = 160 + Math.sin(rad) * 110 - 24;
                const IconComponent = node.icon;
                const isSelected = node.id === selectedNodeId;

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    style={{ left: `${x}px`, top: `${y}px` }}
                    className={`absolute w-12 h-12 rounded-full flex flex-col items-center justify-center border transition-all duration-300 z-30 cursor-pointer ${
                      isSelected
                        ? 'bg-gold-warm/20 border-gold-warm text-gold-warm shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-110'
                        : 'bg-[#1a1512] border-bronze-dark text-ancient-beige/50 hover:border-gold-faded/50 hover:text-gold-faded'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-[6.5px] font-mono tracking-wider uppercase mt-1 text-center w-full truncate px-1">
                      {node.sanskritTerm.split('-')[0]}
                    </span>
                  </button>
                );
              })}

            </div>

            <div className="mt-8 flex flex-wrap gap-2 justify-center max-w-sm">
              {nodes.map(node => (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-widest border transition-all duration-300 ${
                    node.id === selectedNodeId
                      ? 'bg-gold-warm/10 border-gold-warm text-gold-warm'
                      : 'bg-ancient-charcoal/30 border-bronze-dark/40 text-ancient-beige/40 hover:border-gold-faded/30 hover:text-gold-faded'
                  }`}
                >
                  {node.name}
                </button>
              ))}
            </div>

          </div>

          {/* Right Side: Ancient Manuscript Sheet (7 cols on lg) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative p-6 md:p-8 rounded bg-ancient-beige text-[#1c1613] shadow-[0_15px_30px_rgba(0,0,0,0.6)] border border-bronze-light/40 overflow-hidden font-vintage paper-grain"
              >
                {/* Vintage Watermarks / Coffee Stains (Faint overlays) */}
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full border border-[#bfa15f]/15 pointer-events-none" />
                <div className="absolute right-4 bottom-4 w-12 h-12 rounded-full border border-dashed border-[#bfa15f]/15 pointer-events-none" />

                {/* Manuscript Header */}
                <div className="flex justify-between items-center border-b border-[#3a2e24]/20 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#544338]">METHODOLOGY CODEX IX</span>
                    <h3 className="text-2xl font-serif text-[#2a1f18] mt-1">{selectedNode.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono tracking-widest font-bold bg-[#3a2e24]/10 px-2.5 py-1 rounded text-[#2a1f18] uppercase">
                      {selectedNode.sanskritTerm}
                    </span>
                  </div>
                </div>

                {/* Sanskrit Inscribed Panel */}
                <div className="p-4 bg-[#ede2d4] border-l-4 border-gold-faded rounded-r mb-6 shadow-inner italic">
                  <p className="text-lg text-[#2a1f18] tracking-wide text-center font-serif leading-relaxed mb-2">
                    {selectedNode.sanskritVerse}
                  </p>
                  <p className="text-[12px] text-[#544338] text-center font-sans tracking-wide">
                    {selectedNode.translation}
                  </p>
                </div>

                {/* Principle Explanation */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-serif text-[12px] uppercase tracking-wider text-[#544338] font-bold">Investigation Principle:</h4>
                    <p className="text-[14px] leading-relaxed text-[#2c221a] mt-1">
                      {selectedNode.fullPrinciple}
                    </p>
                  </div>

                  {/* Split Details Table */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#3a2e24]/15">
                    <div>
                      <h5 className="font-mono text-[9px] tracking-wider text-[#544338] uppercase">Empirical Field Term:</h5>
                      <p className="font-sans text-[12px] font-medium text-[#2c221a] mt-0.5">{selectedNode.scientificConcept}</p>
                    </div>
                    <div>
                      <h5 className="font-mono text-[9px] tracking-wider text-[#544338] uppercase">Benchmark Case Log:</h5>
                      <span className="inline-flex items-center gap-1 font-sans text-[12px] font-semibold text-amber-900 mt-0.5 underline decoration-dotted">
                        <Eye className="w-3.5 h-3.5" />
                        {selectedNode.activeCase}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative Footer */}
                <div className="mt-8 flex justify-between items-center text-[10px] font-mono text-[#544338]/60 uppercase tracking-widest pt-4 border-t border-[#3a2e24]/10">
                  <span>Center for Anomalous Geological Studies</span>
                  <span>Codex No: {selectedNode.id.replace('node-', 'CAGS-0')}</span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
