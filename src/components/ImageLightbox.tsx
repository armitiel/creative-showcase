import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxImage {
  src: string;
  alt: string;
}

interface ImageLightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  prevSrc?: string;
  nextSrc?: string;
}

export const ImageLightbox = ({ src, alt, isOpen, onClose, onPrev, onNext, hasPrev, hasNext, prevSrc, nextSrc }: ImageLightboxProps) => {
  const [wasJustOpened, setWasJustOpened] = useState(false);
  const [visible, setVisible] = useState(true);
  const directionRef = useRef<'left' | 'right' | null>(null);

  // Reset visibility when src changes (new image ready)
  useEffect(() => {
    if (!isOpen) return;
    // Brief fade-in for the new image
    setVisible(false);
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
    return () => cancelAnimationFrame(raf);
  }, [src]);

  useEffect(() => {
    if (!isOpen) {
      setWasJustOpened(false);
      document.body.style.overflow = 'unset';
      return;
    }

    setWasJustOpened(true);
    setVisible(true);
    const timer = window.setTimeout(() => setWasJustOpened(false), 250);
    document.body.style.overflow = 'hidden';

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) { directionRef.current = 'right'; onPrev(); }
      if (e.key === 'ArrowRight' && onNext && hasNext) { directionRef.current = 'left'; onNext(); }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

  // Preload adjacent images
  useEffect(() => {
    if (!isOpen) return;
    [prevSrc, nextSrc].forEach((s) => {
      if (s) {
        const img = new Image();
        img.src = s;
      }
    });
  }, [isOpen, prevSrc, nextSrc]);

  if (!isOpen) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    directionRef.current = 'right';
    onPrev?.();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    directionRef.current = 'left';
    onNext?.();
  };

  const slideOffset = !visible
    ? directionRef.current === 'left'
      ? 'translateX(-16px)'
      : directionRef.current === 'right'
        ? 'translateX(16px)'
        : 'scale(0.97)'
    : 'translateX(0)';

  return createPortal(
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out ${wasJustOpened ? 'animate-fade-in' : ''}`}
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
      >
        <X className="w-6 h-6" />
      </button>

      {onPrev && hasPrev && (
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && hasNext && (
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      <img 
        key={src}
        src={src} 
        alt={alt} 
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
        style={{
          opacity: visible ? 1 : 0,
          transform: slideOffset,
          transition: 'opacity 150ms ease-out, transform 150ms ease-out',
        }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  );
};

// Hook do zarządzania lightboxem — basic (bez nawigacji)
export const useLightbox = () => {
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return { lightboxImage, openLightbox, closeLightbox };
};

// Hook do zarządzania lightboxem z nawigacją
export const useGalleryLightbox = (images: LightboxImage[]) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openAt = (index: number) => setCurrentIndex(index);
  const close = () => setCurrentIndex(null);
  const prev = () => setCurrentIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const next = () => setCurrentIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : i));

  const currentImage = currentIndex !== null ? images[currentIndex] : null;
  const hasPrev = currentIndex !== null && currentIndex > 0;
  const hasNext = currentIndex !== null && currentIndex < images.length - 1;
  const prevImage = currentIndex !== null && currentIndex > 0 ? images[currentIndex - 1] : null;
  const nextImage = currentIndex !== null && currentIndex < images.length - 1 ? images[currentIndex + 1] : null;

  return { currentImage, currentIndex, isOpen: currentIndex !== null, openAt, close, prev, next, hasPrev, hasNext, prevImage, nextImage };
};
