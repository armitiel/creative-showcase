import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { withBaseUrl } from '@/lib/utils';

const skills = [
  'Branding',
  'Grafika 3D',
  'Programowanie',
  'Projektowanie przestrzenne',
  'UI/UX Design',
  'Storytelling',
  'AI & Automatyzacja',
  'Kreatywna strategia',
];

const tools = [
  { name: 'Adobe Illustrator', icon: 'Ai' },
  { name: 'Adobe Photoshop', icon: 'Ps' },
  { name: 'Figma', icon: 'Fg' },
  { name: 'Blender', icon: '3D' },
  { name: 'ZBrush', icon: 'Zb' },
  { name: 'Stable Diffusion', icon: 'SD' },
];

export const AboutSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Avatar & Info */}
          <div
            ref={leftRef}
            className={`space-y-8 opacity-0 ${leftVisible ? 'animate-fade-in-left' : ''}`}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
              <Avatar className="w-48 h-48 border-4 border-primary glow-cyan relative">
                <AvatarImage src={withBaseUrl('/avatar.png')} alt="Avatar" className="scale-115 object-cover" />
                <AvatarFallback className="text-4xl bg-secondary text-primary">MK</AvatarFallback>
              </Avatar>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Warszawa, Polska</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Briefcase className="w-5 h-5 text-primary" />
                <span>15+ lat doświadczenia</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span>Southampton Solent University, Middlesex London University</span>
              </div>
            </div>
          </div>

          {/* Right - Description & Skills */}
          <div
            ref={rightRef}
            className={`space-y-8 opacity-0 ${rightVisible ? 'animate-fade-in-right' : ''}`}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-normal mb-4 font-['Righteous']">
                O <span className="text-gradient">mnie</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Jestem projektantem działającym interdyscyplinarnie. Projektuję branding i identyfikacje wizualne, tworzę rozwiązania programistyczne, modeluję grafikę 3D oraz projektuję przestrzenie i narracje storytellingowe. Łączę te kompetencje w spójne, kompleksowe rozwiązania projektowe. Pracuję jako <span className="text-primary font-medium">wielopoziomowy projektant</span>, integrując perspektywy i narzędzia z różnych dziedzin kreatywnych.
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
