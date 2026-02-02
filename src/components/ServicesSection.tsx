import { Palette, Layers, Package, Share2, FileText, Monitor } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: Palette,
    title: 'Logo Design',
    description: 'Tworzę unikalne, zapamiętywalne logo, które oddaje charakter Twojej marki i wyróżnia ją na rynku.',
  },
  {
    icon: Layers,
    title: 'Brand Identity',
    description: 'Kompleksowa identyfikacja wizualna: kolory, typografia, wzory i wszystkie elementy budujące spójny wizerunek.',
  },
  {
    icon: Package,
    title: 'Packaging Design',
    description: 'Projektowanie opakowań, które przyciągają wzrok na półce i komunikują wartości produktu.',
  },
  {
    icon: Monitor,
    title: 'Web & App Design',
    description: 'Projektowanie stron internetowych i aplikacji mobilnych z naciskiem na UX/UI i nowoczesną estetykę.',
  },
  {
    icon: Share2,
    title: 'Social Media Graphics',
    description: 'Angażujące grafiki na social media, które budują rozpoznawalność i zwiększają zasięgi.',
  },
  {
    icon: FileText,
    title: 'Print Materials',
    description: 'Wizytówki, ulotki, plakaty i inne materiały drukowane najwyższej jakości.',
  },
];

export const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center mb-12 opacity-0 ${headerVisible ? 'animate-fade-in' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4 font-['Righteous']">
            Moje <span className="text-gradient">Usługi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferuję szeroki zakres usług graficznych dopasowanych do Twoich potrzeb.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`bg-card border-border hover:border-primary group transition-all duration-300 opacity-0 ${
                cardsVisible ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: cardsVisible ? `${index * 100}ms` : '0ms' }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:glow-cyan transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
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
          ))}
        </div>
      </div>
    </section>
  );
};
