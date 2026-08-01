const fs = require('fs');

const cx = 500;
const cy = 500;
const r = 220;

function getX(y) {
  const dy = y - cy;
  const dx2 = r*r - dy*dy;
  if (dx2 < 0) return cx;
  return Math.sqrt(dx2);
}

const tGroup = [];

// Let's define the Y coordinates of the horizontal bases.
// Upward triangles have flat base at the bottom, point at the top.
// Downward triangles have flat base at the top, point at the bottom.

// Base Y coordinates for downward triangles (Shakti) - flat at top
const shaktiBases = [285, 340, 395, 435, 470]; 
// Points Y for downward triangles (bottom point)
const shaktiPoints = [715, 660, 605, 565, 530];

// Base Y coordinates for upward triangles (Shiva) - flat at bottom
const shivaBases = [715, 660, 605, 565];
// Points Y for upward triangles (top point)
const shivaPoints = [285, 340, 395, 435];

// For the outermost triangles, their bases touch the circle, and points touch the circle.
// Wait, a triangle defined by 3 points on a circle:
// Downward 0: base at 285, point at 715.
// Upward 0: base at 715, point at 285.
// Both 285 and 715 are on the circle! (dy = +/- 215)
// dx = sqrt(220^2 - 215^2) = sqrt(48400 - 46225) = sqrt(2175) = 46.6. That's too narrow!

// A classic Sri Yantra doesn't have ALL vertices on the circle.
// Typically, the largest downward triangle (Shakti 1) and largest upward (Shiva 1) have their vertices on the circle.
// Let's use a known set of proportional Y coordinates for Sri Yantra (from center 0,0, radius 1):
// (approximations from research on Sri Yantra geometry)
// Shakti bases (y-coords from top to bottom): +0.31, +0.16, -0.05, -0.19, -0.32
// Shakti points: -1.0, -0.85, -0.66, -0.5, -0.28
// Shiva bases: -0.31, 0, +0.22, +0.35
// Shiva points: +1.0, +0.85, +0.66, +0.52

// Note: y axis in SVG goes DOWN. So positive y is DOWN.
// Let's map these: center=500, r=220.
// SVG Y = 500 - (y_prop * 220)

const shakti_bases_prop = [0.31, 0.16, -0.05, -0.19, -0.32];
const shakti_points_prop = [-1.0, -0.85, -0.66, -0.50, -0.28];

const shiva_bases_prop = [-0.31, 0.0, 0.22, 0.35];
const shiva_points_prop = [1.0, 0.85, 0.66, 0.52];

function makeTriangles() {
  const tris = [];
  
  // Shakti (Downward pointing) -> base is AT TOP (SVG Y is smaller), point is AT BOTTOM (SVG Y is larger)
  // Wait, if mathematical y is UP, then a base at +0.31 is ABOVE the center. SVG Y = 500 - (0.31*220) = 431.
  // The point is at -1.0, which is BELOW the center. SVG Y = 500 - (-1.0*220) = 720.
  // Perfect!
  
  for(let i=0; i<5; i++) {
    const baseY = 500 - (shakti_bases_prop[i] * r);
    const pointY = 500 - (shakti_points_prop[i] * r);
    
    // To find the X width of the base, we use the intersection of the base line with the lines of the other triangles.
    // But to make it simple and perfectly bounded by the circle, we can just use the circle equation for the bases!
    // Wait, not all bases touch the circle. Only the primary ones do.
    // Let's make ALL bases bounded by a slightly wider slope so they look right.
    
    // A simple approach is to calculate the X at the base by assuming an angle, or simply use the circle for all!
    // If we use the circle for all bases:
    let dx = getX(baseY) - cx;
    if (i > 0) dx *= (1 - i*0.1); // shrink inner triangles slightly so they interlock
    
    tris.push({
      pointX: cx, pointY: pointY,
      leftX: cx - dx, leftY: baseY,
      rightX: cx + dx, rightY: baseY
    });
  }

  for(let i=0; i<4; i++) {
    const baseY = 500 - (shiva_bases_prop[i] * r);
    const pointY = 500 - (shiva_points_prop[i] * r);
    
    let dx = getX(baseY) - cx;
    if (i > 0) dx *= (1 - i*0.12);
    
    tris.push({
      pointX: cx, pointY: pointY,
      leftX: cx - dx, leftY: baseY,
      rightX: cx + dx, rightY: baseY
    });
  }
  
  return tris;
}

const triangles = makeTriangles();
let out = '<g strokeWidth="2.5">\n';
triangles.forEach(t => {
  out += `  <polygon points="${t.pointX},${t.pointY} ${t.rightX},${t.rightY} ${t.leftX},${t.leftY}" />\n`;
});
out += '</g>';

const svgContent = fs.readFileSync('src/components/YantraSVG.tsx', 'utf8');
const newSvg = svgContent.replace(/<g strokeWidth="2\.5">\n\s*<polygon[^]*?<\/g>/, out);
fs.writeFileSync('src/components/YantraSVG.tsx', newSvg);

