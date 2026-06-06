import { Suspense, lazy, useState, useEffect } from 'react';
import heroTexture from '@/assets/hero-texture.webp';
import { TVNoiseEffect } from './TVNoiseEffect';
import { useParallax } from '@/hooks/useParallax';
import { useLanguage } from '@/i18n/LanguageContext';

const AURORA_STORAGE_KEY = 'portfolio-hero-aurora';

// Lazy-load: chunk Three.js/shadera laduje sie dopiero po wlaczeniu Aurory
const AuroraShader = lazy(() =>
  import('./AuroraShader').then((m) => ({ default: m.AuroraShader }))
);

// Mapowanie specjalizacji z hero (stala kolejnosc w obu jezykach) na kategorie
// filtra w sekcji projektow.
const specializationCategories = ['Branding', '3D', 'UI/UX', 'Art', 'Motion'];

export const HeroSection = () => {
  const parallaxOffset = useParallax(0.4);
  const { t } = useLanguage();

  // Alternatywne tlo "Aurora" (niebiesko-czarne + fiolet), zapamietywane miedzy wizytami
  const [aurora, setAurora] = useState<boolean>(() => {
    try {
      return localStorage.getItem(AURORA_STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(AURORA_STORAGE_KEY, aurora ? '1' : '0');
    } catch {
      /* localStorage niedostepny - ignorujemy */
    }
  }, [aurora]);

  const goToProjectsCategory = (index: number) => {
    const category = specializationCategories[index] ?? 'all';
    window.dispatchEvent(
      new CustomEvent('select-project-category', { detail: category })
    );
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4 md:px-8 bg-background"
    >
      {/* Hero card with rounded corners */}
      <div className="relative w-full h-[calc(100vh-6rem)] rounded-xl overflow-hidden bg-[#0a0a0a]">
        {/* Animated textured background layers */}
        <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 animate-[hero-reveal_2.5s_ease-out_0.8s_forwards]">
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

        {/* Alternatywne tlo: AURORA - shader Simplex Noise (premium, reaguje na myszke). */}
        {/* Ciemna baza pod spodem stanowi fallback gdy WebGL niedostepny / podczas ladowania. */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 rounded-xl overflow-hidden transition-opacity duration-700 ${aurora ? 'opacity-100' : 'opacity-0'}`}
          style={{ background: 'radial-gradient(130% 100% at 50% 4%, #0b1538 0%, #070c20 48%, #03050e 100%)' }}
        >
          {aurora && (
            <Suspense fallback={null}>
              <AuroraShader />
            </Suspense>
          )}
        </div>

        {/* Przelacznik tla: switch typu on/off (szary off -> gradient on) */}
        <button
          type="button"
          role="switch"
          onClick={() => setAurora((v) => !v)}
          aria-checked={aurora ? 'true' : 'false'}
          aria-label="Przelacz tlo Aurora"
          title="Przelacz tlo Aurora"
          className={`absolute top-5 right-5 z-30 inline-flex h-7 w-12 items-center rounded-full p-0.5 backdrop-blur-md transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a855f7]/80 ${
            aurora
              ? 'bg-gradient-to-r from-[#3b82f6] to-[#a855f7] shadow-[0_0_16px_2px_rgba(124,58,237,0.5)]'
              : 'bg-white/25 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]'
          }`}
        >
          <span
            className={`h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
              aurora ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>

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
              className="text-center space-y-8 will-change-transform mt-16 md:mt-0"
              style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}
            >
              {/* Main Title with particle field behind */}
              <div className="relative">
                <h1
                  className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-normal font-['Righteous'] tracking-tight text-white relative z-10 text-center opacity-0 animate-fade-in"
                  style={{ animationDelay: '1100ms', animationFillMode: 'both' }}
                >
                  {t.hero.title}
                </h1>
              </div>

              {/* Name & Title */}
              <div className="space-y-3">
                <h2
                  className="text-2xl md:text-3xl font-semibold text-white tracking-wide opacity-0 animate-fade-in"
                  style={{ animationDelay: '1700ms', animationFillMode: 'both' }}
                >
                  {t.hero.name}
                </h2>
                <p
                  className="text-base text-white/60 tracking-widest uppercase opacity-0 animate-fade-in"
                  style={{ animationDelay: '2150ms', animationFillMode: 'both' }}
                >
                  <span className="hidden md:inline">{t.hero.role}</span>
                  <span className="md:hidden">
                    Senior Graphic Designer
                  </span>
                </p>
              </div>

              {/* Specializations - minimal borders */}
              <div className="flex flex-wrap justify-center gap-3 pt-6">
                {t.hero.specializations.map((spec, index) => (
                  <a
                    key={spec}
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      goToProjectsCategory(index);
                    }}
                    className="px-5 py-2 border border-white/20 rounded-xl text-sm text-white/70 hover:border-primary/50 hover:text-white transition-all duration-500 cursor-pointer opacity-0 animate-fade-in"
                    style={{ animationDelay: `${2600 + index * 200}ms`, animationFillMode: 'both' }}
                  >
                    {spec}
                  </a>
                ))}
              </div>

              {/* Scroll indicator - minimal */}
              <div className="pt-16">
                <div className="flex flex-col items-center gap-2">
                  <span
                    className="text-xs text-white/40 tracking-[0.3em] uppercase opacity-0 animate-fade-in"
                    style={{ animationDelay: `${2600 + t.hero.specializations.length * 200 + 400}ms`, animationFillMode: 'both' }}
                  >
                    {t.hero.scroll}
                  </span>
                  <div
                    className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent opacity-0 animate-fade-in"
                    style={{ animationDelay: `${2600 + t.hero.specializations.length * 200 + 750}ms`, animationFillMode: 'both' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
