import { Palette, Layers, Box, Share2, Monitor, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';

const serviceIcons = [Palette, Layers, Box, Monitor, Share2, Lightbulb];
import type { TargetAndTransition } from 'framer-motion';

// Unique animation variants for each service icon
const iconAnimations: Record<number, TargetAndTransition> = {
  // Palette - gentle continuous rotation
  0: {
    rotate: [0, 10, -10, 5, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
  // Layers - stack bounce
  1: {
    y: [0, -3, 0, -1.5, 0],
    scaleY: [1, 1.05, 0.97, 1.02, 1],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
  // Box - 3D tilt
  2: {
    rotateY: [0, 15, -15, 0],
    rotateX: [0, -8, 8, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
  // Monitor - screen pulse / glow
  3: {
    scale: [1, 1.08, 1, 1.04, 1],
    opacity: [1, 0.85, 1, 0.9, 1],
    transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
  },
  // Share2 - network pulse outward
  4: {
    scale: [1, 1.12, 1],
    rotate: [0, 5, -5, 0],
    transition: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
  },
  // Lightbulb - flicker / glow
  5: {
    scale: [1, 1.1, 0.95, 1.05, 1],
    filter: [
      'drop-shadow(0 0 0px hsl(var(--primary)))',
      'drop-shadow(0 0 6px hsl(var(--primary)))',
      'drop-shadow(0 0 2px hsl(var(--primary)))',
      'drop-shadow(0 0 8px hsl(var(--primary)))',
      'drop-shadow(0 0 0px hsl(var(--primary)))',
    ],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 });
  const { t } = useLanguage();

  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-12 opacity-0 ${headerVisible ? 'animate-fade-in' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4 font-['Righteous']">
            {t.services.title} <span className="text-gradient">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <Card
                key={service.title}
                className={`bg-muted/50 border-border/50 hover:border-primary/30 hover:bg-muted/70 group transition-all duration-300 opacity-0 shadow-sm ${
                  cardsVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: cardsVisible ? `${index * 100}ms` : '0ms' }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <motion.div
                      animate={cardsVisible ? iconAnimations[index] : {}}
                      className={`opacity-0 ${cardsVisible ? 'animate-fade-in' : ''}`}
                      style={{
                        animationDelay: cardsVisible ? `${300 + index * 100}ms` : '0ms',
                        animationFillMode: 'forwards',
                      }}
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
