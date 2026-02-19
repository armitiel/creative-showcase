import { useEffect, useRef, useCallback } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const elementsRef = useRef<Set<HTMLElement>>(new Set());

  const update = useCallback(() => {
    const newOffset = window.scrollY * speed;
    offsetRef.current = newOffset;
    elementsRef.current.forEach((el) => {
      const factor = parseFloat(el.dataset.parallaxFactor || '1');
      el.style.transform = el.dataset.parallaxBase
        ? el.dataset.parallaxBase.replace('OFFSET', String(newOffset * factor))
        : `translateY(${newOffset * factor}px)`;
    });
  }, [speed]);

  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  // Return a simple number for backward compat - but components should use ref-based approach
  return offsetRef.current;
};

// New ref-based approach that avoids re-renders
export const useParallaxRef = (speed: number = 0.5) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let raf = 0;
    const elements = container.querySelectorAll<HTMLElement>('[data-parallax]');

    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        elements.forEach((el) => {
          const factor = parseFloat(el.dataset.parallax || '1') * speed;
          el.style.transform = `translateY(${scrollY * factor}px)`;
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return containerRef;
};
