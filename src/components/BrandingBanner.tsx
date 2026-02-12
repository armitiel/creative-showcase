import { useRef, useState, useEffect } from 'react';
import brandingMouse from '@/assets/branding-mouse.png';

export const BrandingBanner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Only apply when element is in view
      if (rect.bottom > 0 && rect.top < windowH) {
        const progress = (windowH - rect.top) / (windowH + rect.height);
        setOffset((progress - 0.5) * 60); // subtle ±30px shift
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="w-full overflow-hidden relative">
      <img
        src={brandingMouse}
        alt="Branded mouse with logo"
        className="w-full h-[255px] md:h-[340px] object-cover transition-transform duration-100 ease-out object-[70%_bottom] md:object-bottom"
        style={{ transform: `translateY(${offset}px) scale(1.1)` }}
        loading="lazy"
      />
    </div>
  );
};
