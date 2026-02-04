import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { withBaseUrl } from '@/lib/utils';
import { useLanguage } from '@/i18n/LanguageContext';

const tools = [
  { name: 'Adobe Illustrator', icon: 'Ai' },
  { name: 'Adobe Photoshop', icon: 'Ps' },
  { name: 'After Effects', icon: 'Ae' },
  { name: 'Figma', icon: 'Fg' },
  { name: 'Blender', icon: '3D' },
];

export const AboutSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();
  const { t } = useLanguage();

  // Parse description with highlight
  const renderDescription = () => {
    const parts = t.about.description.split(/<highlight>(.*?)<\/highlight>/);
    return parts.map((part, index) => 
      index % 2 === 1 ? (
        <span key={index} className="text-primary font-medium">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left - Avatar & Info */}
          <div
            ref={leftRef}
            className={`flex flex-col opacity-0 ${leftVisible ? 'animate-fade-in-left' : ''}`}
          >
            <div className="relative flex justify-center md:justify-start">
              <div className="w-full max-w-sm md:max-w-none md:w-64 h-72 md:h-64 rounded-3xl overflow-hidden bg-muted/30">
                <img 
                  src={withBaseUrl('/avatar.png')} 
                  alt="Avatar" 
                  className="w-full h-full object-cover object-[center_20%] md:object-top"
                />
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{t.about.location}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Briefcase className="w-5 h-5 text-primary" />
                <span>{t.about.experience}</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-primary mt-0.5" />
                <div className="flex flex-col">
                  {t.about.education.split(', ').map((school, index) => (
                    <span key={index}>{school}</span>
                  ))}
                </div>
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
                {t.about.title} <span className="text-gradient">{t.about.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {renderDescription()}
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.about.skillsTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {t.about.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-border hover:border-primary hover:text-primary transition-colors text-sm px-4 py-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.about.toolsTitle}</h3>
              <div className="flex flex-nowrap gap-4 overflow-x-auto md:flex-wrap">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="w-14 h-14 bg-muted/60 rounded-2xl flex items-center justify-center text-sm font-bold text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default border border-border/50"
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
