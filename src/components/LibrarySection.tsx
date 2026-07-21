import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, Scroll, Award, Globe, HelpCircle, Eye, RefreshCw } from 'lucide-react';
import { libraryItems } from '../data';
import { LibraryItem } from '../types';

export default function LibrarySection() {
  const [selectedBookId, setSelectedBookId] = useState<string>('lib-vashistha');
  const [zoomText, setZoomText] = useState(false);

  const selectedBook = libraryItems.find(item => item.id === selectedBookId) || libraryItems[0];

  return (
    <section id="library" className="relative py-24 px-4 md:px-8 lg:px-16 bg-[#1a1411] overflow-hidden border-b border-bronze-dark/40">
      {/* Heavy Vignette */}
      <div className="absolute inset-0 vignette-heavy pointer-events-none" />

      {/* Sanskrit manuscript watermark overlay */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-5 text-gold-faded font-serif leading-loose tracking-widest text-[9px] pointer-events-none select-none writing-mode-vertical hidden xl:block">
        शिल्पशास्त्रमहोदधिः।
        वेदाङ्ग ज्योतिषाध्यायः।
        रसविद्यारहस्यं गुरुप्रसादात्।
        मण्डलं वर्तुलाकारं भवेत्।
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold-faded uppercase">The Archivist’s Desk</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gold-warm tracking-wide font-medium">
            THE RESEARCH LIBRARY
          </h2>
          <p className="mt-4 text-xs md:text-sm text-ancient-beige/65 font-vintage italic leading-relaxed">
            "We compile ancient scripts and field surveys side-by-side. Click on a volume in the bookshelf to pull it onto the study desk."
          </p>
        </div>

        {/* Library layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Bookshelf Column (5 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            
            {/* Visual Bookshelf Box */}
            <div className="p-6 bg-[#211812] rounded-lg border-2 border-[#120e0c] shadow-[0_20px_45px_rgba(0,0,0,0.8)] relative flex flex-col h-full min-h-[400px]">
              {/* Back wood wall */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                
                {/* Shelf Top Label */}
                <div className="border-b border-gold-faded/25 pb-3 mb-6 text-center">
                  <span className="font-serif text-[11px] text-gold-warm tracking-[0.2em] font-semibold uppercase block">
                    Restricted Manuscripts Shelf
                  </span>
                  <span className="font-mono text-[7px] text-ancient-beige/40 tracking-wider block mt-1 uppercase">
                    Varanasi Collection — Class III
                  </span>
                </div>

                {/* Vertical Book Spines on the Shelf */}
                <div className="flex items-end justify-center gap-4 h-72 border-b-[14px] border-[#34241a] px-4 relative mt-auto pb-0">
                  {/* Shelf Shadow */}
                  <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {libraryItems.map((book, idx) => {
                    const isSelected = book.id === selectedBookId;
                    
                    // Styled colors for book spines
                    const spineColors = [
                      'from-[#5c3e29] to-[#2e1d12] text-amber-100 border-[#c5a880]/30', // Ancient Manuscript
                      'from-[#3c4136] to-[#1e211b] text-emerald-100 border-[#8fa080]/30', // Field Ledger
                      'from-[#4a2e2b] to-[#241514] text-rose-100 border-[#c29895]/30' // Research Journal
                    ];
                    
                    const widthClasses = ['w-12', 'w-10', 'w-11'];
                    const heightClasses = ['h-64', 'h-56', 'h-60'];
                    const tiltClasses = ['-rotate-1', 'rotate-1', '-rotate-2'];

                    return (
                      <motion.div
                        key={book.id}
                        onClick={() => setSelectedBookId(book.id)}
                        animate={{
                          y: isSelected ? -24 : 0,
                          rotate: isSelected ? 0 : idx === 0 ? -1 : idx === 1 ? 1 : -2,
                          boxShadow: isSelected
                            ? '5px 15px 25px rgba(0,0,0,0.9), 0 0 15px rgba(212,175,55,0.2)'
                            : '2px 4px 10px rgba(0,0,0,0.5)',
                        }}
                        transition={{ duration: 0.3 }}
                        className={`cursor-pointer rounded-t border-t border-l border-r flex flex-col justify-between p-3 select-none transition-all relative ${
                          spineColors[idx % spineColors.length]
                        } ${widthClasses[idx % widthClasses.length]} ${heightClasses[idx % heightClasses.length]} bg-gradient-to-r`}
                      >
                        {/* Spine Gold Embossing line */}
                        <div className="absolute inset-y-0 left-1 w-[1.5px] bg-gold-faded/20" />
                        <div className="absolute inset-y-0 right-1 w-[1.5px] bg-gold-faded/20" />

                        {/* Top book volume number */}
                        <span className="font-mono text-[7px] text-center tracking-widest opacity-60">
                          VOL. {idx + 1}
                        </span>

                        {/* Book Title (Rendered vertically or packed small) */}
                        <div className="my-auto flex items-center justify-center">
                          <span className="text-[9px] font-serif font-bold tracking-widest text-center uppercase whitespace-pre-line rotate-180 writing-mode-vertical select-none text-glow-amber">
                            {book.title.replace('The ', '').split(' ')[0]}
                          </span>
                        </div>

                        {/* Shelf Class Label at bottom */}
                        <div className="flex flex-col items-center gap-1">
                          <span className="h-1 w-1 rounded-full bg-gold-warm" />
                          <span className="font-sans text-[6px] tracking-wider uppercase text-center font-bold opacity-75 truncate w-full">
                            {book.category.split(' ')[0]}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Wooden Shelf Base Plaque */}
                <div className="h-4 w-full bg-[#1b120c] rounded-b flex items-center justify-center">
                  <div className="h-1.5 w-12 bg-gold-faded/20 rounded-full" />
                </div>

              </div>

            </div>

          </div>

          {/* Studying Desk Column (8 cols on lg) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBook.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative p-6 md:p-8 bg-[#f5ebd7] text-ancient-dark rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-bronze-light/50 font-sans h-full flex flex-col justify-between paper-grain"
              >
                {/* Antique Desk Items overlay indicators */}
                <div className="absolute top-4 right-4 flex items-center gap-3">
                  {/* Magnifying Glass Toggle */}
                  <button
                    onClick={() => setZoomText(!zoomText)}
                    className={`p-1.5 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${
                      zoomText
                        ? 'bg-[#3a2e24] border-gold-faded text-[#f5ebd7] shadow-inner'
                        : 'bg-transparent border-[#3a2e24]/20 text-[#3a2e24] hover:bg-[#3a2e24]/10'
                    }`}
                    title="Toggle Magnifying Glass Lens"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-[8px] tracking-widest text-[#544338]/60 uppercase">Desk Mode</span>
                </div>

                <div>
                  {/* Category, Origin & Condition Header */}
                  <div className="flex flex-wrap items-center gap-2 border-b border-[#3a2e24]/15 pb-4 mb-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#3a2e24]/10 rounded font-mono text-[9px] uppercase tracking-wider text-[#2c221a] font-semibold">
                      <Scroll className="w-3 h-3" />
                      {selectedBook.category}
                    </span>
                    <span className="font-sans text-[11px] text-[#544338]">
                      Origin: <strong className="font-semibold">{selectedBook.origin}</strong>
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#3a2e24]/40" />
                    <span className="font-mono text-[10px] text-[#544338]/80 uppercase">
                      AGE: {selectedBook.estimatedAge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#2c221a] leading-tight">
                      {selectedBook.title}
                    </h3>
                    <p className="font-sans text-[13px] font-light text-[#413926] mt-2.5 leading-relaxed">
                      {selectedBook.summary}
                    </p>
                  </div>

                  {/* Elegant Parchment Excerpt Panel */}
                  <div className="relative mt-6 p-6 bg-[#ebdcb7] border border-dashed border-[#a38c5f]/40 rounded-lg shadow-inner overflow-hidden">
                    {/* Coffee Stain Splatter */}
                    <div className="absolute top-4 left-4 w-12 h-8 rounded-full bg-[#836d40]/5 blur-md" />

                    <span className="font-mono text-[8.5px] text-[#7a6042] tracking-[0.25em] block mb-2 uppercase font-bold">
                      TRANSLATED SCROLL EXCERPT:
                    </span>

                    {/* Dynamic font sizing if "Magnifying glass" is active */}
                    <p className={`font-vintage italic leading-relaxed text-[#1a110a] transition-all duration-300 ${
                      zoomText ? 'text-lg md:text-xl font-medium tracking-wide text-[#2e1d12]' : 'text-[14.5px]'
                    }`}>
                      {selectedBook.translatedExcerpt}
                    </p>

                    {zoomText && (
                      <span className="absolute bottom-2 right-4 text-[7px] font-mono tracking-widest text-amber-900/40 uppercase font-bold">
                        🔍 Viewing through magnifying lens (1.5x)
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer specs */}
                <div className="mt-8 pt-4 border-t border-[#3a2e24]/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-[#544338]">
                  <div>
                    <span className="block font-mono text-[8.5px] tracking-wider uppercase text-[#7a6042] font-semibold">Languages / Scripts:</span>
                    <span className="font-semibold text-[#2c221a] mt-0.5 inline-block">
                      {selectedBook.languages.join(' , ')}
                    </span>
                  </div>
                  <div>
                    <span className="block font-mono text-[8.5px] tracking-wider uppercase text-[#7a6042] font-semibold">Physical Condition:</span>
                    <span className="text-[#2c221a] mt-0.5 inline-block">
                      {selectedBook.condition}
                    </span>
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
