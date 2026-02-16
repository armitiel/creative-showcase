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
  { name: 'Blender', icon: 'blender', color: '#EA7600', bg: '#1A1A1A', level: 3 },
  { name: 'ZBrush', icon: 'zbrush', color: '#FF6600', bg: '#1A1A1A', level: 3 },
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
                        <svg width="22" height="22" viewBox="0 0 88 88" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M44.5 24.1L26.2 37.5h11.3c5.5-4.2 11-8.4 16.5-12.6L44.5 24.1zM22.5 41.2L10.1 50.7h12.4c3.4-2.6 6.7-5.2 10.1-7.8l-4.4-3.4c-1.8 1.4-3.7 2.8-5.7 1.7zM48.9 39.4c-4.2 0-8.2 1.1-11.6 3.1L24.5 52c-2.5 1.9-4.5 4.3-5.8 7.1-1.4 2.8-2.1 5.9-2.1 9.1 0 5.5 2.2 10.5 5.7 14.1 3.6 3.6 8.5 5.8 14 5.8h25.3c5.5 0 10.4-2.2 14-5.8 3.6-3.6 5.7-8.6 5.7-14.1 0-5.5-2.2-10.4-5.7-14-3.6-3.6-8.5-5.8-14-5.8h-4.3l8.6-6.6c-2-.8-5.6-2.4-7.9-2.4h-9.1zm0 12.2c3.3 0 6.4.9 9 2.4 2.6 1.6 4.7 3.8 6.1 6.4 1.4 2.7 2.2 5.7 2.2 8.9s-.8 6.2-2.2 8.9c-1.4 2.7-3.5 4.9-6.1 6.4-2.6 1.6-5.7 2.4-9 2.4s-6.4-.9-9-2.4c-2.6-1.6-4.7-3.8-6.1-6.4-1.4-2.7-2.2-5.7-2.2-8.9s.8-6.2 2.2-8.9c1.4-2.7 3.5-4.9 6.1-6.4 2.6-1.6 5.7-2.4 9-2.4zm0 7.7c-2.1 0-4 .5-5.7 1.5s-3 2.4-3.9 4.1c-.9 1.7-1.4 3.6-1.4 5.7 0 2 .5 3.9 1.4 5.7.9 1.7 2.2 3.1 3.9 4.1 1.7 1 3.6 1.5 5.7 1.5s4-.5 5.7-1.5c1.7-1 3-2.4 3.9-4.1.9-1.7 1.4-3.6 1.4-5.7 0-2-.5-3.9-1.4-5.7-.9-1.7-2.2-3.1-3.9-4.1-1.7-1-3.6-1.5-5.7-1.5zm0 5.5c1.4 0 2.7.4 3.8 1.1 1.1.7 1.9 1.6 2.5 2.7.6 1.1.9 2.4.9 3.7s-.3 2.6-.9 3.7c-.6 1.1-1.5 2-2.5 2.7-1.1.7-2.4 1.1-3.8 1.1-1.4 0-2.7-.4-3.8-1.1-1.1-.7-1.9-1.6-2.5-2.7-.6-1.1-.9-2.4-.9-3.7s.3-2.6.9-3.7c.6-1.1 1.5-2 2.5-2.7 1.1-.7 2.4-1.1 3.8-1.1z"/>
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
