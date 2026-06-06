import { Palette, Layers, Box, Share2, Monitor, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/i18n/LanguageContext';

const serviceIcons = [Palette, Layers, Box, Monitor, Share2, Lightbulb];

export const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 });
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 md:py-20">
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
                  <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl group-hover:scale-105 transition-all duration-300 bg-white/50 backdrop-blur-md border border-white/40 shadow-[inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.08)] group-hover:shadow-[inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.05),0_8px_24px_hsl(var(--primary)/0.15)]">
                    <Icon className={`w-6 h-6 shrink-0 text-primary opacity-0 ${cardsVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: cardsVisible ? `${300 + index * 100}ms` : '0ms', animationFillMode: 'forwards' }} />
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
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
