import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, BookOpen, Compass, Eye, Volume2 } from 'lucide-react';
import benarasImg from '../assets/benaras.jpg';
import yantraImg from '../assets/yantra.jpg';

export default function HeroSection() {

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-between items-center text-center px-4 py-12 overflow-hidden paper-grain bg-gradient-to-b from-[#110e0d] via-[#1a1512] to-[#120e0c] border-b border-bronze-dark/40">
      {/* Cinematic Varanasi Sunset Background */}
      <img
        src={benarasImg}
        alt="Varanasi Sunset Ganges"
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none z-0"
        referrerPolicy="no-referrer"
      />

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/90 pointer-events-none z-1" />

      {/* Sanskrit Text Overlay - Faint Gold & Semi-transparent */}
      <div className="absolute top-10 left-10 w-64 text-[10px] font-serif leading-relaxed text-gold-faded/5 tracking-widest pointer-events-none select-none text-left z-0 hidden lg:block">
        ओं भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्।
        <br />
        तस्माद्यज्ञात्सर्वहुतः ऋचः सामानि जज्ञिरे। छन्दांसि जज्ञिरे तस्माद्यजुस्तस्मादजायत॥
        <br />
        आदित्यवर्णं तमसः परस्तात्।
        <br />
        यन्मनसा न मनुते येनाहुर्मनो मतम्।
        <br />
        तदेव ब्रह्म त्वं विद्धि नेदं यदिदमुपासते॥
      </div>

      <div className="absolute top-20 right-10 w-64 text-[10px] font-serif leading-relaxed text-gold-faded/5 tracking-widest pointer-events-none select-none text-right z-0 hidden lg:block">
        ऋग्वेदे संहितायाम्।
        <br />
        वायुमहान् सरति।
        <br />
        यत्र नाडी संधयः पृथिव्याः।
        <br />
        शिलायाः कम्पनं मन्द्रं श्रूयते।
        <br />
        अनाहत ध्वनिः सूक्ष्मः सर्वगतः।
        <br />
        तत्र विज्ञानं प्रतिष्ठितम्॥
      </div>

      {/* Floating Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-1">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const left = Math.random() * 100;
          const delay = Math.random() * 10;
          const duration = Math.random() * 10 + 10;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-gold-warm/30 dust-particle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                bottom: '-20px',
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>

      {/* Central Hero Block */}
      <div className="z-10 max-w-4xl my-auto px-4 flex flex-col items-center relative py-20">
        {/* Ancient Logo Symbol (Moved behind text) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] md:w-[40rem] md:h-[40rem] lg:w-[48rem] lg:h-[48rem] flex items-center justify-center text-gold-faded pointer-events-none z-[-1]"
        >
          {/* Ornate Circular Border */}
          <svg className="absolute inset-0 m-auto w-1/2 h-1/2 animate-[spin_120s_linear_infinite] opacity-50" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="97" stroke="currentColor" strokeWidth="2.125" fill="none" />
            <circle cx="100" cy="100" r="93" stroke="currentColor" strokeWidth="0.85" fill="none" />
            <circle cx="100" cy="100" r="77" stroke="currentColor" strokeWidth="0.85" fill="none" />
            <circle cx="100" cy="100" r="73" stroke="currentColor" strokeWidth="2.125" fill="none" />
            
            <g stroke="currentColor" fill="none">
              {[...Array(72)].map((_, i) => {
                const isEven = i % 2 === 0;
                const rOut = 93;
                const rIn = 77;
                const aB = i * 5 * Math.PI / 180;
                const aA = (i + 1) * 5 * Math.PI / 180;
                const aC = (i + 2) * 5 * Math.PI / 180;
                const rB = isEven ? rOut : rIn;
                const rA = isEven ? rIn : rOut;
                const rC = isEven ? rOut : rIn;
                
                const B = { x: 100 + rB * Math.sin(aB), y: 100 - rB * Math.cos(aB) };
                const A = { x: 100 + rA * Math.sin(aA), y: 100 - rA * Math.cos(aA) };
                const C = { x: 100 + rC * Math.sin(aC), y: 100 - rC * Math.cos(aC) };
                
                return (
                  <g key={i}>
                    <line x1={B.x} y1={B.y} x2={A.x} y2={A.y} strokeWidth="1.275" />
                    {[0.2, 0.4, 0.6, 0.8].map(s => (
                      <line
                        key={s}
                        x1={(1 - s) * C.x + s * A.x}
                        y1={(1 - s) * C.y + s * A.y}
                        x2={(1 - s) * C.x + s * B.x}
                        y2={(1 - s) * C.y + s * B.y}
                        strokeWidth="0.6375"
                      />
                    ))}
                  </g>
                );
              })}
            </g>
          </svg>
          <img src={yantraImg} alt="Shri Vidya Devi Yantra" className="w-48 h-48 md:w-64 md:h-64 lg:w-[19rem] lg:h-[19rem] opacity-50 object-contain drop-shadow-2xl mix-blend-screen" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-[0.08em] text-gold-warm font-bold leading-tight"
        >
          RAM ASHOK KUMAR
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 text-xs md:text-sm lg:text-base font-sans font-medium tracking-[0.4em] text-ancient-beige/85 uppercase"
        >
          WHERE TANTRA MEETS SCIENCE
        </motion.h2>

        {/* Custom Ornate Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="w-48 h-[1px] bg-gradient-to-r from-transparent via-gold-faded/60 to-transparent my-6"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="text-base md:text-lg text-ancient-beige/70 font-vintage italic leading-relaxed max-w-2xl px-2"
        >
          "To investigate anomalies not as curses or mystical interventions, but as geological fractures, subterranean magnetic friction, and ancient structural acoustics waiting to be mapped."
        </motion.p>

        {/* Call to Scroll Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 flex flex-col md:flex-row items-center gap-4"
        >
          <a
            href="#archives"
            className="group relative px-6 py-3 overflow-hidden rounded bg-bronze-dark/40 border border-gold-faded/40 hover:border-gold-warm transition-all duration-300 text-xs tracking-[0.2em] font-sans font-medium text-gold-warm uppercase"
          >
            <span className="absolute inset-0 bg-gold-warm/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            Explore Case Files
          </a>
        </motion.div>
      </div>

      {/* Background Ambience: Flickering Candle Icon Overlay (Bottom right corner) */}
      <div className="absolute bottom-8 right-8 z-10 opacity-35 hover:opacity-75 transition-opacity duration-500 hidden md:flex items-center gap-3">
        <div className="relative flex flex-col items-center">
          {/* Candle Flame SVG with Flicker Animation */}
          <div className="w-2.5 h-4 bg-gradient-to-t from-gold-warm to-amber-500 rounded-full blur-[1px] animate-flicker relative -bottom-1">
            <div className="absolute top-0.5 left-0.5 w-1 h-2 bg-white/70 rounded-full" />
          </div>
          {/* Candle Wick & Wax */}
          <div className="w-1.5 h-2 bg-bronze-dark rounded-sm" />
          <div className="w-4 h-12 bg-[#c5a880]/90 rounded-t-sm shadow-md border-t border-gold-faded/40" />
        </div>
        <div className="text-left font-sans">
          <p className="text-[9px] font-mono tracking-widest text-gold-faded uppercase m-0 leading-none">Research Candle</p>
          <p className="text-[8px] text-ancient-beige/40 m-0 leading-tight">Flickers with ambient drafts</p>
        </div>
      </div>
    </section>
  );
}
