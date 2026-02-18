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
  { name: 'Figma', icon: 'figma', color: '#A259FF', bg: '#1E1E1E', level: 4 },
  { name: 'Blender', icon: 'blender', color: '#EA7600', bg: '#1A1A1A', level: 3 },
  { name: 'ZBrush', icon: 'zbrush', color: '#FF6600', bg: '#1A1A1A', level: 5 },
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
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left - Avatar & Info */}
          <div
            ref={leftRef}
            className={`flex flex-col min-w-0 opacity-0 ${leftVisible ? 'animate-fade-in-left' : ''}`}
          >
            <div>
              <img 
                src={withBaseUrl('/avatar.png')} 
                alt="Avatar" 
                className="w-full max-w-xs md:max-w-[280px] lg:max-w-sm rounded-3xl"
              />
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
            className={`space-y-8 min-w-0 opacity-0 ${rightVisible ? 'animate-fade-in-right' : ''}`}
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
              <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-2">
                {t.about.skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`border-border hover:border-primary hover:text-primary transition-colors text-sm px-4 py-2 justify-center shadow-sm opacity-0 ${rightVisible ? 'animate-fade-in-right' : ''}`}
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
              <div className="grid grid-cols-3 md:grid-cols-6 gap-5 justify-items-center">
                {tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className={`flex flex-col items-center gap-2 opacity-0 ${rightVisible ? 'animate-fade-in-right' : ''}`}
                    style={{ animationDelay: rightVisible ? `${500 + index * 100}ms` : '0ms', animationFillMode: 'forwards' }}
                    title={tool.name}
                  >
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-lg font-black tracking-tight cursor-default border border-white/15 shadow-lg transition-transform duration-300 hover:scale-110 bg-white/5 backdrop-blur-sm text-foreground/70"
                    >
                      {tool.icon === 'figma' ? (
                        <svg width="18" height="26" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="currentColor" fillOpacity="0.7"/>
                          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="currentColor" fillOpacity="0.5"/>
                          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="currentColor" fillOpacity="0.6"/>
                          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="currentColor" fillOpacity="0.8"/>
                          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="currentColor" fillOpacity="0.65"/>
                        </svg>
                      ) : tool.icon === 'Ai' ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <text x="12" y="16.5" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Ai</text>
                        </svg>
                      ) : tool.icon === 'Ps' ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <text x="12" y="16.5" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Ps</text>
                        </svg>
                      ) : tool.icon === 'Ae' ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <text x="12" y="16.5" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Ae</text>
                        </svg>
                      ) : tool.icon === 'blender' ? (
                        <svg width="20" height="20" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.3 31.8c0-8.9 7.8-16.1 17.4-16.1 2.1 0 4.1.3 6 1L35.3 8.5c-1-.7-2.3-.7-3.2 0L13.8 22.8h10.8c-1.5 1.4-2.7 3-3.6 4.8L7.5 27.6c-1.2 0-1.8 1-1.2 2l3.3 5.2H20c-.1.6-.1 1.2-.1 1.8 0 4 1.5 7.7 4 10.6L18.5 52c-.7.9-.2 2.2 1 2.4l6.2 1.2c3.3 2.5 7.4 4 11.9 4 9.6 0 17.4-7.2 17.4-16.1S47.2 27.4 37.6 27.4c-2.5 0-4.8.5-7 1.3l9.8-7.5c.6-.5.6-1.4 0-1.9l-3-2.3-14.1 10.8c-.6.5-1.1 1-1.5 1.5.1-.8.2-1.5.5-2.2zm15.3 4.3c6.3 0 11.4 4.7 11.4 10.5S43.9 57.1 37.6 57.1s-11.4-4.7-11.4-10.5 5.1-10.5 11.4-10.5zm0 5.7c-2.9 0-5.2 2.2-5.2 4.8s2.3 4.8 5.2 4.8 5.2-2.2 5.2-4.8-2.3-4.8-5.2-4.8z"/>
                        </svg>
                      ) : tool.icon === 'zbrush' ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <text x="12" y="16.5" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="bold" fontFamily="sans-serif">ZB</text>
                        </svg>
                      ) : tool.icon}
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                          key={dot}
                          className={`w-1.5 h-1.5 rounded-full ${dot <= tool.level ? 'bg-primary' : 'border border-primary/40'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground/70 mt-0.5 whitespace-nowrap">{tool.name}</span>
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
