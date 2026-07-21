import React from 'react';

interface VisualDividerProps {
  variant?: 'bronze-ornate' | 'manuscript-scroll' | 'temple-pillar' | 'thin-classic';
  className?: string;
}

export default function VisualDivider({ variant = 'bronze-ornate', className = '' }: VisualDividerProps) {
  if (variant === 'bronze-ornate') {
    return (
      <div className={`flex items-center justify-center gap-4 py-8 ${className}`}>
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold-faded/40 to-gold-faded" />
        <svg className="w-16 h-8 text-gold-faded/80" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Symmetrical central ornament */}
          <path d="M50 5 L55 15 L65 15 L57 21 L60 30 L50 24 L40 30 L43 21 L35 15 L45 15 Z" fill="currentColor" opacity="0.9" />
          <path d="M30 15 C40 15, 45 12, 50 12 C55 12, 60 15, 70 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <circle cx="20" cy="15" r="2" fill="currentColor" />
          <circle cx="80" cy="15" r="2" fill="currentColor" />
          <path d="M10 15 H18" stroke="currentColor" strokeWidth="0.5" />
          <path d="M82 15 H90" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        <div className="h-[1px] w-24 bg-gradient-to-l from-transparent via-gold-faded/40 to-gold-faded" />
      </div>
    );
  }

  if (variant === 'manuscript-scroll') {
    return (
      <div className={`flex items-center justify-center py-6 ${className}`}>
        <svg className="w-48 h-6 text-bronze-light/50" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10 C50 15, 100 5, 150 10 C200 15, 250 5, 290 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
          {/* Traditional Indian floral/scroll marker */}
          <path d="M140 10 C145 5, 155 5, 160 10 C155 15, 145 15, 140 10 Z" fill="currentColor" />
          <circle cx="150" cy="10" r="4" stroke="currentColor" strokeWidth="1" fill="#1a1614" />
          <circle cx="150" cy="10" r="1.5" fill="currentColor" />
        </svg>
      </div>
    );
  }

  if (variant === 'temple-pillar') {
    return (
      <div className={`flex items-center justify-center py-10 ${className}`}>
        <svg className="w-64 h-8 text-copper/60" viewBox="0 0 400 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Intricate lintel motif */}
          <path d="M10 15 H390" stroke="currentColor" strokeWidth="1" />
          <path d="M20 11 H380" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
          <path d="M30 19 H370" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
          <g transform="translate(180, 5)">
            <rect x="5" y="5" width="30" height="10" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
            <line x1="15" y1="5" x2="15" y2="15" stroke="currentColor" strokeWidth="0.7" />
            <line x1="20" y1="5" x2="20" y2="15" stroke="currentColor" strokeWidth="0.7" />
            <line x1="25" y1="5" x2="25" y2="15" stroke="currentColor" strokeWidth="0.7" />
            <polygon points="20,0 12,5 28,5" fill="currentColor" opacity="0.8" />
          </g>
        </svg>
      </div>
    );
  }

  // thin-classic
  return (
    <div className={`flex items-center justify-center py-4 ${className}`}>
      <div className="h-[0.5px] w-1/3 bg-gradient-to-r from-transparent via-gold-faded/20 to-transparent" />
    </div>
  );
}
