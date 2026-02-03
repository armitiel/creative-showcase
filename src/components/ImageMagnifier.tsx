import { useState, useRef } from 'react';
import { Search } from 'lucide-react';

interface ImageMagnifierProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  magnifierSize?: number;
  zoomLevel?: number;
}

export const ImageMagnifier = ({
  src,
  alt,
  className = '',
  imageClassName = 'w-full h-auto object-cover',
  magnifierSize = 150,
  zoomLevel = 2.5,
}: ImageMagnifierProps) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;

    const elem = imgRef.current;
    const { top, left, width, height } = elem.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate position as percentage for background positioning
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    setCursorPosition({ x, y });
    setMagnifierPosition({ x: xPercent, y: yPercent });
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
      style={{ cursor: showMagnifier ? 'none' : 'default' }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={imageClassName}
      />

      {/* Custom cursor with magnifying glass icon */}
      {showMagnifier && (
        <div
          className="pointer-events-none absolute z-20 flex items-center justify-center"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Search className="w-6 h-6 text-primary drop-shadow-lg" />
        </div>
      )}

      {/* Magnifier glass */}
      {showMagnifier && (
        <div
          className="pointer-events-none absolute z-10 rounded-full border-4 border-primary/80 shadow-2xl overflow-hidden"
          style={{
            width: magnifierSize,
            height: magnifierSize,
            left: cursorPosition.x - magnifierSize / 2,
            top: cursorPosition.y - magnifierSize / 2,
            backgroundImage: `url(${src})`,
            backgroundSize: `${zoomLevel * 100}%`,
            backgroundPosition: `${magnifierPosition.x}% ${magnifierPosition.y}%`,
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}
    </div>
  );
};
