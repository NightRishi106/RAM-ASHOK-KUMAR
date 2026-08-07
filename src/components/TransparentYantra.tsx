import React, { useEffect, useRef, useState } from 'react';

interface TransparentYantraProps {
  src: string;
  className?: string;
  alt?: string;
}

export default function TransparentYantra({ src, className, alt }: TransparentYantraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      ctx.drawImage(img, 0, 0);
      
      try {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // White threshold - if pixel is bright enough and low saturation (whitish), make it transparent
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const diff = max - min;
          
          if (r > 200 && g > 200 && b > 200 && diff < 35) {
            // Calculate how white it is (0 to 1)
            const brightness = (r + g + b) / (3 * 255);
            
            // Map brightness 0.8-1.0 to alpha 255-0
            let alpha = 255;
            if (brightness > 0.8) {
               alpha = Math.floor((1 - brightness) * 5 * 255);
            }
            data[i + 3] = alpha;
          }
        }
        
        ctx.putImageData(imageData, 0, 0);
        setLoaded(true);
      } catch (e) {
        console.error("Canvas image processing failed", e);
        // If it fails, at least show the original image
        setLoaded(true);
      }
    };
    img.src = src;
  }, [src]);

  return (
    <canvas 
      ref={canvasRef} 
      className={className} 
      style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s' }}
      aria-label={alt}
    />
  );
}
