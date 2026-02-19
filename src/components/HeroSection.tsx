import { Suspense, useEffect, useRef } from 'react';
import heroTexture from '@/assets/hero-texture.png';
import { TVNoiseEffect } from './TVNoiseEffect';
import { useLanguage } from '@/i18n/LanguageContext';

export const HeroSection = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>('[data-parallax]');
    let raf = 0;

    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        elements.forEach((el) => {
          const factor = parseFloat(el.dataset.parallax || '0');
          const scale = el.dataset.parallaxScale || '';
          const rotate = el.dataset.parallaxRotate || '';
          el.style.transform = `translateY(${scrollY * factor}px)${scale ? ` scale(${scale})` : ''}${rotate ? ` rotate(${rotate})` : ''}`;
        });
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4 md:px-8 bg-background"
    >
      <div ref={containerRef} className="relative w-full h-[calc(100vh-6rem)] rounded-3xl overflow-hidden bg-[#0a0a0a]">
        {/* Animated textured background layers */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-0 animate-[hero-reveal_2.5s_ease-out_0.8s_forwards]">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform animate-[drift_30s_ease-in-out_infinite]"
            data-parallax="0.4"
            data-parallax-scale="1.2"
            style={{ backgroundImage: `url(${heroTexture})` }}
          />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform opacity-40 mix-blend-overlay animate-[drift-reverse_25s_ease-in-out_infinite]"
            data-parallax="0.2"
            data-parallax-scale="1.3"
            data-parallax-rotate="180deg"
            style={{ backgroundImage: `url(${heroTexture})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-[shimmer_8s_ease-in-out_infinite]" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

        <Suspense fallback={null}>
          <div 
            className="absolute inset-0 will-change-transform"
            data-parallax="0.08"
          >
            <TVNoiseEffect />
          </div>
        </Suspense>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 relative z-10">
            <div 
              className="text-center space-y-8 animate-fade-in will-change-transform mt-16 md:mt-0"
              data-parallax="0.24"
            >
              <div className="relative">
                <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-normal font-['Righteous'] tracking-tight text-white relative z-10 text-center">
                  {t.hero.title}
                </h1>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
                  {t.hero.name}
                </h2>
                <p className="text-base text-white/60 tracking-widest uppercase">
                  {t.hero.role}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-6">
                {t.hero.specializations.map((spec, index) => (
                  <a
                    key={spec}
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="px-5 py-2 border border-white/20 rounded-full text-sm text-white/70 hover:border-primary/50 hover:text-white transition-all duration-500 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {spec}
                  </a>
                ))}
              </div>

              <div className="pt-16">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-xs text-white/40 tracking-[0.3em] uppercase">{t.hero.scroll}</span>
                  <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
