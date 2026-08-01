const fs = require('fs');

const svg = [];
svg.push('import React from "react";\n\nexport default function YantraSVG({ className }: { className?: string }) {\n  return (\n    <svg viewBox="0 0 1000 1000" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">');

// 1. Bhupura (Outer Square with Gates)
const gates = [
  { size: 920, gateW: 160, gateD: 50 },
  { size: 870, gateW: 130, gateD: 50 },
  { size: 820, gateW: 100, gateD: 50 },
];

gates.forEach((g) => {
  const s = g.size;
  const gw = g.gateW;
  const gd = g.gateD;
  const m = (1000 - s) / 2;
  const c = 500;
  const hgw = gw / 2;
  
  const path = `M ${c - hgw},${m} L ${m},${m} L ${m},${c - hgw} L ${m - gd},${c - hgw} L ${m - gd},${c + hgw} L ${m},${c + hgw} L ${m},${1000 - m} L ${c - hgw},${1000 - m} L ${c - hgw},${1000 - m + gd} L ${c + hgw},${1000 - m + gd} L ${c + hgw},${1000 - m} L ${1000 - m},${1000 - m} L ${1000 - m},${c + hgw} L ${1000 - m + gd},${c + hgw} L ${1000 - m + gd},${c - hgw} L ${1000 - m},${c - hgw} L ${1000 - m},${m} L ${c + hgw},${m} L ${c + hgw},${m - gd} L ${c - hgw},${m - gd} Z`;
    
  svg.push(`      <path d="${path.replace(/\s+/g, ' ')}" />`);
});

// 2. The 3 outermost concentric circles
svg.push('      <circle cx="500" cy="500" r="390" />');
svg.push('      <circle cx="500" cy="500" r="375" />');
svg.push('      <circle cx="500" cy="500" r="360" />');

// 3. 16 Petals (from r=290 to r=360)
svg.push('      <g strokeWidth="2">');
for(let i=0; i<16; i++) {
  const angle = i * 22.5;
  // tip is at y=140 (r=360), base is at y=210 (r=290)
  svg.push(`        <path d="M 500,140 Q 525,175 500,210 Q 475,175 500,140 Z" transform="rotate(${angle} 500 500)" />`);
}
svg.push('      </g>');
svg.push('      <circle cx="500" cy="500" r="290" />');

// 4. 8 Petals (from r=220 to r=290)
svg.push('      <g strokeWidth="2.5">');
for(let i=0; i<8; i++) {
  const angle = i * 45;
  // tip is at y=210 (r=290), base is at y=280 (r=220)
  svg.push(`        <path d="M 500,210 Q 545,245 500,280 Q 455,245 500,210 Z" transform="rotate(${angle} 500 500)" />`);
}
svg.push('      </g>');
svg.push('      <circle cx="500" cy="500" r="220" />');

// 5. 9 Triangles (Sri Yantra)
const tGroup = [];
tGroup.push('      <g strokeWidth="2.5">');

// Max radius for triangles is 220, so Y goes from 280 to 720, X goes from 280 to 720.

const tri = [
  // Upward (Shiva)
  { top: 290, left: 300, right: 700, bottom: 650 },
  { top: 350, left: 350, right: 650, bottom: 600 },
  { top: 420, left: 375, right: 625, bottom: 570 },
  { top: 460, left: 400, right: 600, bottom: 540 },
  
  // Downward (Shakti)
  { top: 710, left: 300, right: 700, bottom: 350 },
  { top: 650, left: 350, right: 650, bottom: 400 },
  { top: 580, left: 375, right: 625, bottom: 430 },
  { top: 540, left: 400, right: 600, bottom: 460 },
  { top: 640, left: 425, right: 575, bottom: 500 }, // innermost
];

tri.forEach(t => {
  tGroup.push(`        <polygon points="500,${t.top} ${t.right},${t.bottom} ${t.left},${t.bottom}" />`);
});

tGroup.push('      </g>');
tGroup.push('      <circle cx="500" cy="500" r="4" fill="currentColor" />');

svg.push(tGroup.join('\n'));

svg.push('    </svg>\n  );\n}\n');

fs.writeFileSync('src/components/YantraSVG.tsx', svg.join('\n'));
