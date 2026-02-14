import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, GraduationCap, Mail } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { withBaseUrl } from '@/lib/utils';
import { useLanguage } from '@/i18n/LanguageContext';

const tools = [
  { name: 'Adobe Illustrator', icon: 'Ai', color: '#FF9A00', bg: '#330000', level: 5 },
  { name: 'Adobe Photoshop', icon: 'Ps', color: '#31A8FF', bg: '#001E36', level: 4 },
  { name: 'After Effects', icon: 'Ae', color: '#9999FF', bg: '#00005B', level: 3 },
  { name: 'Figma', icon: 'figma', color: '#A259FF', bg: '#1E1E1E', level: 3 },
  { name: 'Blender', icon: '3D', color: '#EA7600', bg: '#1A1A1A', level: 3 },
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
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:armitiel@gmail.com" className="hover:text-primary transition-colors">armitiel@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{t.about.location}</span>
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
                {t.about.skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`border-border hover:border-primary hover:text-primary transition-colors text-sm px-4 py-2 opacity-0 ${rightVisible ? 'animate-fade-in-right' : ''}`}
                    style={{ animationDelay: rightVisible ? `${300 + index * 80}ms` : '0ms', animationFillMode: 'forwards' }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.about.toolsTitle}</h3>
              <div className="flex flex-nowrap gap-5 overflow-x-auto md:flex-wrap">
                {tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className={`flex flex-col items-center gap-2 opacity-0 ${rightVisible ? 'animate-fade-in-right' : ''}`}
                    style={{ animationDelay: rightVisible ? `${500 + index * 100}ms` : '0ms', animationFillMode: 'forwards' }}
                    title={tool.name}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-base font-black tracking-tight cursor-default border border-white/15 shadow-lg transition-transform duration-300 hover:scale-110 bg-white/5 backdrop-blur-sm text-foreground/70"
                    >
                      {tool.icon === 'figma' ? (
                        <svg width="18" height="26" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="currentColor" fillOpacity="0.7"/>
                          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="currentColor" fillOpacity="0.5"/>
                          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="currentColor" fillOpacity="0.6"/>
                          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="currentColor" fillOpacity="0.8"/>
                          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="currentColor" fillOpacity="0.65"/>
                        </svg>
                      ) : tool.icon}
                    </div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                          key={dot}
                          className="w-1.5 h-1.5 rounded-full transition-colors"
                          style={{
                            backgroundColor: dot <= tool.level ? tool.color : 'hsl(var(--muted))',
                            opacity: dot <= tool.level ? 1 : 0.3,
                          }}
                        />
                      ))}
                    </div>
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
