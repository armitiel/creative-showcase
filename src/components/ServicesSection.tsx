import { Palette, Layers, Box, Share2, Building2, Monitor } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/i18n/LanguageContext';

const serviceIcons = [Palette, Layers, Box, Monitor, Share2, Building2];

export const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 });
  const { t } = useLanguage();

  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-6">
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
                className={`bg-card border-transparent hover:border-primary/30 group transition-all duration-300 opacity-0 shadow-xl ${
                  cardsVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: cardsVisible ? `${index * 100}ms` : '0ms' }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-card-foreground/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
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
