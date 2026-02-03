import { Suspense } from 'react';
import heroTexture from '@/assets/hero-texture.png';
import { TVNoiseEffect } from './TVNoiseEffect';
import { useParallax } from '@/hooks/useParallax';
import { useLanguage } from '@/i18n/LanguageContext';

export const HeroSection = () => {
  const parallaxOffset = useParallax(0.4);
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4 md:px-8 bg-background"
    >
      {/* Hero card with rounded corners */}
      <div className="relative w-full h-[calc(100vh-6rem)] rounded-3xl overflow-hidden bg-[#0a0a0a]">
        {/* Animated textured background layers */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {/* Base texture layer */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform animate-[drift_30s_ease-in-out_infinite]"
            style={{ 
              backgroundImage: `url(${heroTexture})`,
              transform: `translateY(${parallaxOffset}px) scale(1.2)`,
            }}
          />
          {/* Second layer - offset and inverted for depth */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform opacity-40 mix-blend-overlay animate-[drift-reverse_25s_ease-in-out_infinite]"
            style={{ 
              backgroundImage: `url(${heroTexture})`,
              transform: `translateY(${parallaxOffset * 0.5}px) scale(1.3) rotate(180deg)`,
            }}
          />
          {/* Painting reveal effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-[shimmer_8s_ease-in-out_infinite]" />
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

        {/* TV Noise/Glitch effect */}
        <Suspense fallback={null}>
          <div 
            className="absolute inset-0 will-change-transform"
            style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
          >
            <TVNoiseEffect />
          </div>
        </Suspense>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 relative z-10">
            <div 
              className="text-center space-y-8 animate-fade-in will-change-transform"
              style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}
            >
              {/* Main Title with particle field behind */}
              <div className="relative">
                <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-normal font-['Righteous'] tracking-tight text-white relative z-10 text-center">
                  {t.hero.title}
                </h1>
              </div>

              {/* Name & Title */}
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
                  {t.hero.name}
                </h2>
                <p className="text-base text-white/60 tracking-widest uppercase">
                  {t.hero.role}
                </p>
              </div>

              {/* Specializations - minimal borders */}
              <div className="flex flex-wrap justify-center gap-3 pt-6">
                {t.hero.specializations.map((spec, index) => (
                  <span
                    key={spec}
                    className="px-5 py-2 border border-white/20 rounded-full text-sm text-white/70 hover:border-primary/50 hover:text-white transition-all duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Scroll indicator - minimal */}
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
