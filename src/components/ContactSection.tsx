import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, FileText, CheckCircle, Mail, User, ShieldAlert, Archive, Trash2 } from 'lucide-react';
import { ResearchInquiry } from '../types';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Anomalous Core Reading');
  const [message, setMessage] = useState('');
  const [sealColor, setSealColor] = useState('#8a1c14'); // Red wax default
  const [isSealed, setIsSealed] = useState(false);
  const [sentLetters, setSentLetters] = useState<ResearchInquiry[]>([]);
  const [selectedSentLetter, setSelectedSentLetter] = useState<ResearchInquiry | null>(null);

  // Load sent letters from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('cags_correspondence');
    if (saved) {
      try {
        setSentLetters(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSendLetter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSealed(true);

    setTimeout(() => {
      // Create new inquiry
      const newInquiry: ResearchInquiry = {
        id: `inq-${Date.now()}`,
        senderName: name,
        senderEmail: email,
        subject: subject,
        message: message,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        sealColor: sealColor,
        isRead: false
      };

      const updated = [newInquiry, ...sentLetters];
      setSentLetters(updated);
      localStorage.setItem('cags_correspondence', JSON.stringify(updated));

      // Trigger email client
      const mailtoLink = `mailto:ramashokkumar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `From: ${name} (${email})\n\n${message}`
      )}`;
      window.location.href = mailtoLink;

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setIsSealed(false);
    }, 1500); // 1.5 seconds to watch the seal stamp animation
  };

  const deleteLetter = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = sentLetters.filter(l => l.id !== id);
    setSentLetters(updated);
    localStorage.setItem('cags_correspondence', JSON.stringify(updated));
    if (selectedSentLetter?.id === id) {
      setSelectedSentLetter(null);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Texture from User */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: "url('/BACKGROUND%202.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }} 
      />
      {/* Heavy vignette for ambient reading lighting */}
      <div className="absolute inset-0 vignette-heavy pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold-faded uppercase">Institute Courier</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gold-warm tracking-wide font-medium">
            CORRESPONDENCE DESK
          </h2>
          <p className="mt-4 text-xs md:text-sm text-ancient-beige/65 font-vintage italic leading-relaxed">
            "Address your findings, geological concerns, or text queries directly to the Varanasi main chamber. We read every dispatch."
          </p>
        </div>

        {/* Layout: Letter writing paper vs Archives drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: The Writing Table letter paper (7 cols on lg) */}
          <div className="lg:col-span-7">
            
            <form
              onSubmit={handleSendLetter}
              className="relative p-6 md:p-10 bg-[#FAF5E9] text-ancient-dark rounded-md shadow-[0_25px_50px_rgba(0,0,0,0.85)] border border-[#d2c2a4] paper-grain flex flex-col justify-between min-h-[580px] font-vintage"
            >
              
              {/* Wax Seal Selector (Fountain pen tray look) */}
              <div className="flex justify-between items-center border-b border-[#3a2e24]/15 pb-4 mb-6">
                <div>
                  <span className="font-mono text-[8.5px] tracking-widest text-[#7a6042] uppercase font-bold block">Correspondence Sheet</span>
                  <span className="font-serif text-xs text-[#2a1f18] italic">Addressing: CAGS Institute, Varanasi</span>
                </div>
                
                {/* Custom wax seal color picker tray */}
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[7px] text-[#7a6042] tracking-wider uppercase font-bold">Wax Seal:</span>
                  <div className="flex gap-1.5 bg-[#ebdcb7] p-1 rounded border border-[#3a2e24]/15">
                    {[
                      { color: '#8a1c14', label: 'Varanasi Red' },
                      { color: '#592c13', label: 'Basalt Brown' },
                      { color: '#2b3a1a', label: 'Olive Green' },
                      { color: '#a37e2a', label: 'Bronze Gold' }
                    ].map(wax => (
                      <button
                        key={wax.color}
                        type="button"
                        onClick={() => setSealColor(wax.color)}
                        style={{ backgroundColor: wax.color }}
                        className={`w-3.5 h-3.5 rounded-full border transition-transform cursor-pointer ${
                          sealColor === wax.color ? 'scale-125 border-[#2c221a]' : 'border-transparent hover:scale-110'
                        }`}
                        title={wax.label}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Letter Form Fields */}
              <div className="space-y-5">
                
                {/* Sender Name */}
                <div className="flex flex-col">
                  <label className="font-serif text-[11.5px] uppercase tracking-wider text-[#7a6042] font-semibold mb-1 flex items-center gap-2">
                    <User className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Sender Name / Affiliation
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name or research team..."
                    className="w-full bg-[#f2e6cf] border-b border-[#a38c5f]/40 focus:border-[#544338] text-[13.5px] text-[#1c1613] font-sans font-light py-1.5 px-2.5 rounded focus:outline-none placeholder-[#544338]/40"
                  />
                </div>

                {/* Sender Email */}
                <div className="flex flex-col">
                  <label className="font-serif text-[11.5px] uppercase tracking-wider text-[#7a6042] font-semibold mb-1 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Secure Courier Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email for secure reply logs..."
                    className="w-full bg-[#f2e6cf] border-b border-[#a38c5f]/40 focus:border-[#544338] text-[13.5px] text-[#1c1613] font-sans font-light py-1.5 px-2.5 rounded focus:outline-none placeholder-[#544338]/40"
                  />
                </div>

                {/* Subject Selector */}
                <div className="flex flex-col">
                  <label className="font-serif text-[11.5px] uppercase tracking-wider text-[#7a6042] font-semibold mb-1">
                    Subject of Inquiry
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#f2e6cf] border-b border-[#a38c5f]/40 focus:border-[#544338] text-[13px] text-[#1c1613] font-sans py-1.5 px-2.5 rounded focus:outline-none"
                  >
                    <option value="Anomalous Core Reading">Report Anomalous Field Readings</option>
                    <option value="Manuscript Interpretation">Manuscript Consultation Request</option>
                    <option value="Geophysical Expedition">Collaborative Geophysics Proposal</option>
                    <option value="General Correspondence">General Scholarly Inquiry</option>
                  </select>
                </div>

                {/* Message Body */}
                <div className="flex flex-col">
                  <label className="font-serif text-[11.5px] uppercase tracking-wider text-[#7a6042] font-semibold mb-1">
                    The Message Letter Body
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Inscribe your message or report findings in detail here..."
                    className="w-full bg-[#f2e6cf] border border-[#a38c5f]/30 rounded focus:border-[#544338] text-[13.5px] leading-relaxed text-[#1c1613] font-sans font-light p-3 focus:outline-none placeholder-[#544338]/40 resize-none"
                  />
                </div>

              </div>

              {/* Submit / Stamp Button & Live Wax Stamp Stamp overlay */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#3a2e24]/10">
                <p className="text-[10px] text-[#544338]/60 italic font-sans max-w-xs leading-snug">
                  By sealing this letter, it will be stored locally in your Outbox Correspondence Ledger.
                </p>

                <button
                  type="submit"
                  disabled={isSealed}
                  className="relative px-6 py-3 bg-[#3a2e24] text-[#FAF5E9] hover:bg-[#2c221a] rounded font-serif text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-gold-warm" />
                  {isSealed ? 'Stamping Seal...' : 'Seal & Send Letter'}
                </button>
              </div>

              {/* Tactile Wax Seal Stamping Animation Overlay */}
              <AnimatePresence>
                {isSealed && (
                  <motion.div
                    initial={{ opacity: 0, scale: 2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="absolute inset-0 bg-[#f2e6cf]/80 flex flex-col items-center justify-center z-50 pointer-events-none rounded-md"
                  >
                    {/* The Wax Seal Blob */}
                    <div
                      style={{ backgroundColor: sealColor }}
                      className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg relative border-2 border-black/30 ring-4 ring-offset-2 ring-transparent animate-pulse"
                    >
                      {/* Inner embossed crest design */}
                      <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/20 flex flex-col items-center justify-center">
                        <span className="font-serif text-[11px] font-bold text-white/80 tracking-widest leading-none">CAGS</span>
                        <span className="text-[7px] text-white/50 font-mono uppercase mt-1 leading-none">SEALED</span>
                      </div>
                      
                      {/* Melted wax ripples */}
                      <div className="absolute -inset-1.5 rounded-full border-2 border-white/5 pointer-events-none opacity-40" />
                    </div>
                    
                    <span className="font-serif text-xs text-amber-950 font-bold tracking-widest uppercase mt-4">
                      Pressing Molten Wax Seal
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>

          </div>

          {/* Column 2: The Sent Outbox Archive Tray (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            
            <div className="p-6 bg-[#211915] rounded-lg border-2 border-[#120e0c] shadow-[0_20px_45px_rgba(0,0,0,0.85)] h-full min-h-[580px] flex flex-col justify-between">
              
              <div>
                {/* Header outbox */}
                <div className="border-b border-gold-faded/20 pb-3 mb-6 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Archive className="w-4 h-4 text-gold-warm" />
                    <span className="font-serif text-[12px] text-gold-warm tracking-wider font-semibold">
                      Outbox Courier Ledger
                    </span>
                  </div>
                  <span className="font-mono text-[8px] bg-gold-faded/10 px-2 py-0.5 rounded text-gold-faded font-bold">
                    {sentLetters.length} COURIER LOGS
                  </span>
                </div>

                {/* List of Sent Letters */}
                {sentLetters.length > 0 ? (
                  <div className="space-y-3.5 max-h-[380px] overflow-y-auto pr-1.5 vintage-scrollbar">
                    {sentLetters.map(letter => {
                      const isSelected = selectedSentLetter?.id === letter.id;
                      return (
                        <div
                          key={letter.id}
                          onClick={() => setSelectedSentLetter(isSelected ? null : letter)}
                          className={`p-3.5 rounded border text-left transition-all duration-300 cursor-pointer flex justify-between items-center relative ${
                            isSelected
                              ? 'bg-gradient-to-r from-[#2c1d14] to-[#1a120c] border-gold-warm'
                              : 'bg-ancient-charcoal/40 border-bronze-dark/50 hover:border-gold-faded/20'
                          }`}
                        >
                          <div className="min-w-0 pr-2">
                            <span className="block font-serif text-[11.5px] font-semibold text-gold-warm truncate">
                              {letter.subject}
                            </span>
                            <span className="block font-sans text-[10px] text-ancient-beige/50 truncate mt-0.5">
                              From: {letter.senderName} ({letter.senderEmail})
                            </span>
                            <span className="block font-mono text-[7px] text-ancient-beige/30 uppercase mt-1">
                              Stamped: {letter.date}
                            </span>
                          </div>

                          {/* Wax Seal indicator tag */}
                          <div className="flex items-center gap-2 shrink-0">
                            <div
                              style={{ backgroundColor: letter.sealColor }}
                              className="w-4 h-4 rounded-full border border-black/20 shadow"
                              title="Embossed Seal"
                            />
                            <button
                              onClick={(e) => deleteLetter(letter.id, e)}
                              className="p-1 hover:text-red-400 text-ancient-beige/30 transition-colors"
                              title="Discard Letter Archive"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="h-64 rounded-lg border border-dashed border-bronze-dark/30 flex flex-col items-center justify-center text-center p-6 text-ancient-beige/40">
                    <FileText className="w-10 h-10 text-gold-faded/20 mb-2" />
                    <span className="font-serif text-xs font-semibold text-gold-faded/70">Correspondence Ledger Empty</span>
                    <span className="text-[10px] max-w-xs mt-1">Write your letter on the sheet on the left and stamp the wax seal to populate your local sent transcripts tree.</span>
                  </div>
                )}
              </div>

              {/* Collapsible Selected Sent Letter Detail */}
              <AnimatePresence>
                {selectedSentLetter && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 bg-[#ede2d4] text-ancient-dark rounded border border-gold-faded/20 mt-6 font-vintage relative paper-grain"
                  >
                    <div className="absolute top-2 right-2 flex items-center gap-1">
                      <div
                        style={{ backgroundColor: selectedSentLetter.sealColor }}
                        className="w-3 h-3 rounded-full border border-black/10 shadow"
                      />
                      <span className="font-mono text-[7px] text-[#544338]/60 font-bold uppercase">Archive Record</span>
                    </div>

                    <h4 className="font-serif text-[12.5px] font-bold text-amber-950 mb-1 leading-none">{selectedSentLetter.subject}</h4>
                    <span className="font-mono text-[8px] text-[#544338] block border-b border-[#3a2e24]/10 pb-1.5 mb-2">DATE: {selectedSentLetter.date}</span>
                    <p className="text-[12px] leading-relaxed italic text-[#1c1613]">
                      "{selectedSentLetter.message}"
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
