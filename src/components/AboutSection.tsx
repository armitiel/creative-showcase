import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';

const skills = [
  'Logo Design',
  'Brand Identity',
  'Typography',
  'Color Theory',
  'Print Design',
  'UI/UX',
  'Packaging',
  'Illustration',
];

const tools = [
  { name: 'Adobe Illustrator', icon: 'Ai' },
  { name: 'Adobe Photoshop', icon: 'Ps' },
  { name: 'Figma', icon: 'Fg' },
  { name: 'Adobe InDesign', icon: 'Id' },
  { name: 'After Effects', icon: 'Ae' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Avatar & Info */}
          <div className="space-y-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
              <Avatar className="w-48 h-48 border-4 border-primary glow-cyan relative">
                <AvatarImage src="/placeholder.svg" alt="Jan Kowalski" />
                <AvatarFallback className="text-4xl bg-secondary text-primary">JK</AvatarFallback>
              </Avatar>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Warszawa, Polska</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Briefcase className="w-5 h-5 text-primary" />
                <span>5+ lat doświadczenia</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span>Akademia Sztuk Pięknych</span>
              </div>
            </div>
          </div>

          {/* Right - Description & Skills */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Poppins']">
                O <span className="text-gradient">mnie</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Jestem pasjonatem designu z ponad 5-letnim doświadczeniem w tworzeniu 
                wizualnych identyfikacji marek. Specjalizuję się w projektowaniu logo, 
                materiałów brandingowych oraz opakowań, które wyróżniają się na tle konkurencji.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Umiejętności</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Narzędzia</h3>
              <div className="flex flex-wrap gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center text-sm font-bold text-primary hover:glow-cyan transition-all duration-300 cursor-default"
                    title={tool.name}
                  >
                    {tool.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
