import { Suspense } from 'react';
import heroBg from '@/assets/hero-bg.jpg';
import { ParticleField } from './ParticleField';
import { useParallax } from '@/hooks/useParallax';
import { useLanguage } from '@/i18n/LanguageContext';

export const HeroSection = () => {
  const parallaxOffset = useParallax(0.4);
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-card"
    >
      {/* Background image with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform opacity-60"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${parallaxOffset}px) scale(1.1)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-card/50" />

      {/* Particle effect around title */}
      <Suspense fallback={null}>
        <div 
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
        >
          <ParticleField />
        </div>
      </Suspense>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="text-center space-y-8 animate-fade-in will-change-transform"
          style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}
        >
          {/* Main Title with particle field behind */}
          <div className="relative">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal font-['Righteous'] tracking-tight text-foreground relative z-10">
              {t.hero.title}
            </h1>
          </div>

          {/* Name & Title */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-wide">
              {t.hero.name}
            </h2>
            <p className="text-base text-muted-foreground tracking-widest uppercase">
              {t.hero.role}
            </p>
          </div>

          {/* Specializations - minimal borders */}
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            {t.hero.specializations.map((spec, index) => (
              <span
                key={spec}
                className="px-5 py-2 border border-border/50 rounded-full text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {spec}
              </span>
            ))}
          </div>

          {/* Scroll indicator - minimal */}
          <div className="pt-16">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground/50 tracking-[0.3em] uppercase">{t.hero.scroll}</span>
              <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
