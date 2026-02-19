import { useEffect, useRef } from 'react';

export const TVNoiseEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationId: number;
    let lastTime = 0;
    const fps = 15; // Lower FPS for more retro feel
    const frameInterval = 1000 / fps;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const drawNoise = (timestamp: number) => {
      if (timestamp - lastTime < frameInterval) {
        animationId = requestAnimationFrame(drawNoise);
        return;
      }
      lastTime = timestamp;

      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      // Generate noise
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;
        data[i] = noise;     // R
        data[i + 1] = noise; // G
        data[i + 2] = noise; // B
        data[i + 3] = 50;    // Alpha - more visible
      }

      ctx.putImageData(imageData, 0, 0);

      // Random horizontal scan lines (glitch effect)
      if (Math.random() > 0.85) {
        const y = Math.random() * canvas.height;
        const height = Math.random() * 12 + 3;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.25})`;
        ctx.fillRect(0, y, canvas.width, height);
      }

      // Occasional horizontal displacement glitch
      if (Math.random() > 0.93) {
        const y = Math.random() * canvas.height;
        const sliceHeight = Math.random() * 40 + 8;
        const displacement = (Math.random() - 0.5) * 40;
        
        const sliceData = ctx.getImageData(0, y, canvas.width, sliceHeight);
        ctx.putImageData(sliceData, displacement, y);
      }

      animationId = requestAnimationFrame(drawNoise);
    };

    animationId = requestAnimationFrame(drawNoise);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none mix-blend-overlay"
        style={{ opacity: 0.6 }}
      />
      {/* Scanlines overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)',
          backgroundSize: '100% 2px',
        }}
      />
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </>
  );
};
