import React from 'react';
import { motion } from 'motion/react';
import { Shield, BookOpen, GraduationCap, MapPin, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden border-b border-bronze-dark/40">
      {/* Background Texture from User */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: "url('/BACKGROUND%201.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }} 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Plaque (4 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Antique Framed Photo of Ram Ashok Kumar */}
            <div className="relative p-4 bg-ancient-dark/60 backdrop-blur-sm border border-bronze-light/30 rounded-lg shadow-[0_15px_40px_rgba(0,0,0,0.8)] max-w-sm w-full">
              {/* Copper corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-faded/60" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-faded/60" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-faded/60" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-faded/60" />

              {/* Photo Canvas */}
              <div className="relative aspect-[3/4] overflow-hidden rounded bg-transparent border border-bronze-dark/60">
                
                {/* Fallback image of a dignified, scholarly elder in his late 50s */}
                <img
                  src="/PORTRAIT.jpeg"
                  alt="Ram Ashok Kumar Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Plaque Bracket Below Photo */}
              <div className="mt-5 px-4 py-3 bg-[#2a211b] border-t border-b border-gold-faded/30 text-center rounded relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-[3px] bg-gold-faded/40" />
                <div className="absolute inset-y-0 right-0 w-[3px] bg-gold-faded/40" />
                <h3 className="font-serif text-[13px] tracking-[0.2em] text-gold-warm font-semibold">RAM ASHOK KUMAR</h3>
                <p className="font-mono text-[9px] tracking-widest text-ancient-beige/60 uppercase mt-1">Geophysicist & Chief Investigator</p>
                <div className="flex justify-center items-center gap-1.5 mt-2">
                  <span className="h-1 w-1 rounded-full bg-gold-faded" />
                  <span className="font-sans text-[8px] tracking-widest text-ancient-beige/40 uppercase">Banaras Hindu University (BHU)</span>
                  <span className="h-1 w-1 rounded-full bg-gold-faded" />
                </div>
              </div>
            </div>

            {/* Field Notebook Page Overlay styled block underneath */}
            <div className="mt-8 max-w-sm w-full p-6 bg-ancient-beige text-ancient-dark rounded border border-bronze-dark/30 shadow-md rotate-[-1deg] font-vintage">
              <span className="font-mono text-[9px] text-[#544338] tracking-widest block mb-1">FIELD NOTEBOOK EXCERPT:</span>
              <p className="text-[13px] leading-relaxed italic text-[#2c221a]">
                "Science does not retreat in the face of mystery. It is our duty as scholars to carry the magnetometer and the seismometer into the dark corners of the Earth, not to hunt ghosts, but to listen to the speech of the soil."
              </p>
              <div className="mt-4 flex justify-between items-center text-[11px] font-sans font-medium text-[#544338] tracking-wide">
                <span>— Varanasi, Oct 1999</span>
                <span className="font-vintage text-base font-bold select-none text-[#2c221a]">R. A. Kumar</span>
              </div>
            </div>

          </div>

          {/* Right Column: Biography & Details (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center bg-ancient-dark/60 backdrop-blur-sm border border-bronze-light/30 rounded-lg p-8 shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[1px] w-8 bg-gold-faded" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-gold-faded uppercase">The Archivist & The Geologist</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif text-gold-warm tracking-wide font-medium">
              Scientifically-Inclined Paranormal Researcher & Aghor-Tantra Practitioner
            </h2>
            
            <div className="h-[1px] w-full bg-gradient-to-r from-gold-faded/30 to-transparent my-6" />

            {/* Biography block */}
            <div className="space-y-6 text-sm text-ancient-beige/85 leading-relaxed font-sans font-light">
              <p>
                For over 25 years, <strong className="font-medium text-gold-warm">Ram Ashok Kumar</strong> has pioneered a rare methodology that bridges Indian archaeology, classical temple architecture (Vastu Shastra), and advanced modern geophysics. After graduating from the Banaras Hindu University (BHU) with a Masters in Applied Geophysics, his initial work with national geological surveys repeatedly brought him into contact with regions associated with heavy folklore, ancient curses, and unexplained phenomena.
              </p>
              <p>
                Recognizing that these "anomalous zones" were almost always connected to significant subterranean geological features—iron-ore compact basalt, thorium monazite deposits, underground hot water channels, and natural ellipsoidal cave echoes—he established the <strong className="font-medium text-gold-faded">Center for Anomalous Geological Studies (CAGS)</strong> in 1999.
              </p>
              
              {/* Mission points styled as vintage tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                
                <div className="py-2 flex items-start gap-3">
                  <div className="p-2 bg-bronze-dark/30 rounded text-gold-warm border border-gold-faded/15">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs text-gold-faded tracking-wider font-semibold">Scholarly Background</h4>
                    <p className="text-xs text-ancient-beige/60 mt-0.5">Applied Geophysics, Varanasi Temple acoustics surveys, 1996-1998.</p>
                  </div>
                </div>

                <div className="py-2 flex items-start gap-3">
                  <div className="p-2 bg-bronze-dark/30 rounded text-gold-warm border border-gold-faded/15">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs text-gold-faded tracking-wider font-semibold">Active Fieldwork</h4>
                    <p className="text-xs text-ancient-beige/60 mt-0.5">Over 110 documented expeditions across Rajasthan, Hampi, Kerala, and Uttarakhand.</p>
                  </div>
                </div>

                <div className="py-2 flex items-start gap-3">
                  <div className="p-2 bg-bronze-dark/30 rounded text-gold-warm border border-gold-faded/15">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs text-gold-faded tracking-wider font-semibold">Philosophy</h4>
                    <p className="text-xs text-ancient-beige/60 mt-0.5">No mysticism, no fear. Everything has an empirical origin waiting to be mapped.</p>
                  </div>
                </div>

                <div className="py-2 flex items-start gap-3">
                  <div className="p-2 bg-bronze-dark/30 rounded text-gold-warm border border-gold-faded/15">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs text-gold-faded tracking-wider font-semibold">Ancient Texts</h4>
                    <p className="text-xs text-ancient-beige/60 mt-0.5">Translating Rasa Shastras and Shilpa Shastras for geoelectrical clues.</p>
                  </div>
                </div>

              </div>

              {/* Research Philosophy block */}
              <div className="mt-6 py-4">
                <h3 className="font-serif text-sm tracking-widest text-gold-warm font-semibold uppercase mb-2">The Research philosophy</h3>
                <p className="text-xs text-ancient-beige/70 italic leading-relaxed m-0">
                  "In the traditional Indian sciences, the Earth is seen as an active energetic network. Vastu, Shilpa, and Rasa Shastras mapped these points of friction. Modern geophysics names them magnetic anomalies, acoustic resonance, and chemical ionization. We do not destroy old legends; we decode them."
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
