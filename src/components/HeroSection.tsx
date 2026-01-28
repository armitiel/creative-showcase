import { Badge } from '@/components/ui/badge';

const specializations = [
  'Logo',
  'Branding',
  'Packaging',
  'Social Media',
  'Print Design',
];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Year Badge */}
          <Badge className="bg-primary text-primary-foreground px-4 py-1.5 text-sm font-semibold">
            2025
          </Badge>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-['Poppins'] text-3d tracking-tight">
            PORTFOLIO
          </h1>

          {/* Name & Title */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Jan Kowalski
            </h2>
            <p className="text-lg text-muted-foreground">
              Graphic Designer
            </p>
          </div>

          {/* Specializations */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {specializations.map((spec, index) => (
              <span
                key={spec}
                className="px-4 py-2 border border-border rounded-full text-sm text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {spec}
              </span>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="pt-12">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full mx-auto flex justify-center">
              <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
