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
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Year Badge - minimal style */}
          <Badge className="bg-primary/20 text-foreground border border-primary/30 px-4 py-1.5 text-sm font-medium tracking-wider">
            2025
          </Badge>

          {/* Main Title - clean, no 3D effect */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-['Poppins'] tracking-tight text-foreground">
            PORTFOLIO
          </h1>

          {/* Name & Title */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-wide">
              Amitiel Angelisme
            </h2>
            <p className="text-base text-muted-foreground tracking-widest uppercase">
              Creative Designer
            </p>
          </div>

          {/* Specializations - minimal borders */}
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            {specializations.map((spec, index) => (
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
              <span className="text-xs text-muted-foreground/50 tracking-[0.3em] uppercase">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
