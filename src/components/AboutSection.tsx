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
              <span className="font-mono text-[10px] tracking-[0.3em] text-gold-faded uppercase">The Investigator</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif text-gold-warm tracking-wide font-medium">
              Indian Paranormal Investigator & Practitioner of Tantra
            </h2>
            
            <div className="h-[1px] w-full bg-gradient-to-r from-gold-faded/30 to-transparent my-6" />

            {/* Biography block */}
            <div className="space-y-8 text-sm text-ancient-beige/85 leading-relaxed font-sans font-light">
              <p className="text-base">
                <strong className="font-medium text-gold-warm">Ram Ashok Kumar</strong> (often referred to as Ram Ashok Ji) is an Indian paranormal investigator and practitioner of Tantra with over 25 years of experience exploring supernatural phenomena.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4">
                  <h3 className="font-serif text-gold-warm text-lg mb-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gold-faded"></span> Overview & Background
                  </h3>
                  <ul className="space-y-4">
                    <li><strong className="text-gold-faded font-medium">Experience:</strong> Over 25 years in active field investigation, having handled over 1,000 cases of alleged hauntings, possessions, and unexplained occurrences.</li>
                    <li><strong className="text-gold-faded font-medium">Primary Region:</strong> Primarily active across Delhi NCR, investigating abandoned sites, historical havelis, crematoriums, and private residential cases.</li>
                    <li><strong className="text-gold-faded font-medium">Digital Presence:</strong> Content creator and founder behind the YouTube channel @paranormalmechanism, where he breaks down paranormal cases, entity behaviors, and field investigations.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-gold-warm text-lg mb-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gold-faded"></span> Investigative Philosophy
                  </h3>
                  <ul className="space-y-4">
                    <li><strong className="text-gold-faded font-medium">Science & Spiritual Practice:</strong> Combines electronic paranormal detection equipment (video analysis, EMF, temperature tracking) with traditional Indian spiritual and Tantric techniques to evaluate claim evidence.</li>
                    <li><strong className="text-gold-faded font-medium">Focus on Evidence:</strong> Emphasizes analyzing physical evidence, video captures, and psychological/environmental factors rather than relying on sensationalized horror narratives.</li>
                    <li><strong className="text-gold-faded font-medium">Study of Entities:</strong> Discusses entity classifications in traditional contexts—including Munjya (Rakt Pishach), Jinn, poltergeist activity, and house curses.</li>
                  </ul>
                </div>
              </div>

              <div className="h-[1px] w-full bg-gradient-to-r from-bronze-dark/50 to-transparent my-6" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-serif text-gold-warm text-lg mb-3 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gold-faded"></span> Notable Cases
                  </h3>
                  <ul className="space-y-3 list-disc pl-5 marker:text-gold-faded">
                    <li><strong className="text-gold-faded font-medium">The Haunted Teddy Bear Case (Bengaluru/Noida):</strong> One of his frequently cited cases involving reported poltergeist phenomena, electronic disruptions, and movement tied to an object.</li>
                    <li><strong className="text-gold-faded font-medium">Burari Deaths Perspective:</strong> Analysis of the infamous Burari family incident from both psychological and occult/paranormal angles.</li>
                    <li><strong className="text-gold-faded font-medium">Karol Bagh Crematorium Encounter:</strong> Field investigations conducted during night hours in Delhi's crematoriums and abandoned structures.</li>
                    <li><strong className="text-gold-faded font-medium">Goa & NCR Haunted Sites:</strong> Reviews and field reports on well-known haunted locations across India, including abandoned hotels in Goa and sites in Noida/Delhi.</li>
                  </ul>
                </div>
                
                <div className="space-y-4 bg-black/20 p-5 rounded border border-bronze-dark/30">
                  <h3 className="font-serif text-gold-warm text-lg mb-2 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gold-faded"></span> Media & Podcast Appearances
                  </h3>
                  <p className="text-sm text-ancient-beige/70 mb-4">Ram Ashok Kumar has been featured on several popular Hindi podcasts and supernatural shows, including:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-faded" />
                      <span className="text-ancient-beige/90">Rahasya Unfolded</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-faded" />
                      <span className="text-ancient-beige/90">Beyond Mic Show (with Siddharth Chopra)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-faded" />
                      <span className="text-ancient-beige/90">The Young Podcast (with Vikas)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-faded" />
                      <span className="text-ancient-beige/90">Deep Verma Podcast</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
