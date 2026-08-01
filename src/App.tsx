import React from 'react';
import { Compass, Shield, Map, Landmark, Clock, Coffee, BookOpen } from 'lucide-react';

// Modular components import
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PhilosophySection from './components/PhilosophySection';
import InvestigationsSection from './components/InvestigationsSection';
import LibrarySection from './components/LibrarySection';
import MythRealitySection from './components/MythRealitySection';
import EquipmentSection from './components/EquipmentSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import VisualDivider from './components/VisualDivider';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0d0c] text-ancient-beige font-sans selection:bg-gold-warm selection:text-ancient-dark overflow-x-hidden vintage-scrollbar">
      
      {/* Sticky Antique Navigation Ledger */}
      <header className="sticky top-0 z-50 bg-[#110e0d]/90 backdrop-blur-md border-b border-bronze-dark/40 shadow-lg px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Left side: branding */}
        <div className="flex items-center gap-2.5">
          <img src="/yantra.jpg" alt="Yantra" className="w-[26px] h-[26px] opacity-90 object-contain rounded-full mix-blend-screen" />
          <div className="flex flex-col text-left">
            <span className="font-serif text-[12.5px] font-bold tracking-[0.25em] text-gold-warm leading-none uppercase">
              R. A. Kumar
            </span>
            <span className="font-mono text-[7px] tracking-widest text-ancient-beige/40 uppercase mt-0.5 leading-none">
              Paranormal Geophysics Archives
            </span>
          </div>
        </div>

        {/* Right side: quick links resembling a library index */}
        <nav className="hidden xl:flex items-center gap-6 font-mono text-[9px] tracking-widest uppercase">
          <a href="#" className="text-ancient-beige/50 hover:text-gold-warm transition-colors duration-300">
            Home
          </a>
          <a href="#about" className="text-ancient-beige/50 hover:text-gold-warm transition-colors duration-300">
            About
          </a>
          <a href="#philosophy" className="text-ancient-beige/50 hover:text-gold-warm transition-colors duration-300">
            Expertise
          </a>
          <a href="#archives" className="text-ancient-beige/50 hover:text-gold-warm transition-colors duration-300">
            Services
          </a>
          <a href="#library" className="text-ancient-beige/50 hover:text-gold-warm transition-colors duration-300">
            Research
          </a>
          <a href="#myths" className="text-ancient-beige/50 hover:text-gold-warm transition-colors duration-300">
            Blog
          </a>
          <a href="#contact" className="text-ancient-beige/50 hover:text-gold-warm transition-colors duration-300">
            Contact
          </a>
        </nav>

        {/* Small badge for narrow layouts */}
        <div className="xl:hidden flex items-center gap-1.5 px-2.5 py-1 bg-bronze-dark/30 border border-gold-faded/20 rounded">
          <Shield className="w-3.5 h-3.5 text-gold-warm" />
          <span className="font-mono text-[7.5px] tracking-widest text-gold-faded font-bold uppercase">
            EST. 1999
          </span>
        </div>
      </header>

      {/* Main content sections with thematic transitions */}
      <main className="relative">
        
        {/* Section 0: Hero & Entry */}
        <HeroSection />

        {/* Divider 1 */}
        <VisualDivider variant="temple-pillar" />

        {/* Section 1: About / Profile */}
        <AboutSection />

        {/* Divider 2 */}
        <VisualDivider variant="bronze-ornate" />

        {/* Section 2: Research Philosophy / Methodology */}
        <PhilosophySection />

        {/* Divider 3 */}
        <VisualDivider variant="manuscript-scroll" />

        {/* Section 3: Featured Investigations Drawer Filing Cabinet */}
        <InvestigationsSection />

        {/* Divider 4 */}
        <VisualDivider variant="temple-pillar" />

        {/* Section 4: Research Library / Bookshelves */}
        <LibrarySection />

        {/* Divider 5 */}
        <VisualDivider variant="bronze-ornate" />

        {/* Section 5: Myth vs Reality Open Ledger */}
        <MythRealitySection />

        {/* Divider 6 */}
        <VisualDivider variant="manuscript-scroll" />

        {/* Section 6: Scientific Equipment Bench testing */}
        <EquipmentSection />

        {/* Divider 7 */}
        <VisualDivider variant="temple-pillar" />

        {/* Section 7: Chronicle Timeline of Years */}
        <TimelineSection />

        {/* Divider 8 */}
        <VisualDivider variant="bronze-ornate" />

        {/* Section 8: Correspondence desk letter */}
        <ContactSection />

      </main>

      {/* Grand Scholarly Footer */}
      <footer className="bg-[#0b0807] border-t border-bronze-dark/50 py-16 px-4 md:px-8 text-center relative overflow-hidden paper-grain">
        {/* Subtle decorative background outline */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/85 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          
          {/* Logo Crest */}
          <div className="w-10 h-10 rounded-full border border-gold-faded/30 flex items-center justify-center text-gold-warm mb-6 bg-ancient-dark shadow-md">
            <Landmark className="w-4 h-4" strokeWidth={1.5} />
          </div>

          <p className="font-serif text-[15px] font-semibold text-gold-warm tracking-widest uppercase">
            CENTER FOR ANOMALOUS GEOLOGICAL STUDIES
          </p>
          <p className="font-mono text-[8px] tracking-[0.3em] text-ancient-beige/40 uppercase mt-1">
            Official Research Register & Repository — Varanasi, India
          </p>

          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold-faded/30 to-transparent my-6" />

          {/* Licenses & Notices */}
          <p className="text-[12.5px] font-vintage italic text-ancient-beige/50 max-w-xl leading-relaxed">
            "All anomalies listed within these dockets have been recorded via calibrated dual-coil seismometers, barometric infrasound monitors, and spectral bolometers. No metaphysical validation is implied."
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-2xl mt-8 pt-8 border-t border-bronze-dark/20 text-left font-mono text-[8px] text-ancient-beige/40 uppercase tracking-wider">
            <div>
              <span className="block text-gold-faded/60 font-semibold mb-1">Directorate</span>
              <span>Ram Ashok Kumar, M.Sc.</span>
            </div>
            <div>
              <span className="block text-gold-faded/60 font-semibold mb-1">Affiliation</span>
              <span>CAGS Geophysics, Est. 1999</span>
            </div>
            <div>
              <span className="block text-gold-faded/60 font-semibold mb-1">Core Station</span>
              <span>Varanasi Laboratory</span>
            </div>
            <div>
              <span className="block text-gold-faded/60 font-semibold mb-1">Registry Code</span>
              <span>IN-ANM-25-LOGS</span>
            </div>
          </div>

          <p className="font-sans text-[10px] text-ancient-beige/35 mt-12 leading-none">
            © 2026 Ram Ashok Kumar. All rights reserved. Under geological and archaeological treaty archives.
          </p>

        </div>
      </footer>

    </div>
  );
}

