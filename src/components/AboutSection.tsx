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
  { name: 'Spine', icon: 'spine', color: '#FF6600', bg: '#1A1A1A', level: 4 },
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
            <div className="flex justify-center md:justify-start">
              <img 
                src={withBaseUrl('/avatar.webp')} 
                alt="Avatar" 
                className="w-full rounded-3xl md:max-w-[280px] lg:max-w-sm"
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
                    className={`border-white/30 bg-white/50 backdrop-blur-md hover:border-primary/50 hover:bg-white/60 hover:shadow-[0_4px_20px_hsl(var(--primary)/0.15)] transition-all duration-300 text-sm px-4 py-2 justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_3px_10px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)] opacity-0 ${rightVisible ? 'animate-fade-in-right' : ''}`}
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
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5 sm:px-0">
                {tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className={`w-full flex flex-col items-center gap-2 opacity-0 ${rightVisible ? 'animate-fade-in-right' : ''}`}
                    style={{ animationDelay: rightVisible ? `${500 + index * 100}ms` : '0ms', animationFillMode: 'forwards' }}
                    title={tool.name}
                  >
                    <div
                       className="w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-black tracking-tight cursor-default border border-white/40 shadow-[inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-110 hover:shadow-[inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)] bg-white/50 backdrop-blur-md text-foreground/70"
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
                        <svg width="22" height="18" viewBox="0.499 48.118 511.002 415.763" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M510.003 279.642c-2.998-21.097-10.305-41.104-21.725-59.459-9.959-16.019-22.738-30.266-37.991-42.375l.041-.038L290.133 54.731a4.569 4.569 0 0 0-.361-.287c-5.326-4.08-12.537-6.325-20.297-6.325-7.77 0-15.263 2.25-21.088 6.338-6.263 4.375-9.843 10.18-10.093 16.359-.229 5.765 2.521 11.312 7.764 15.636 10.31 8.135 20.597 16.447 30.898 24.769 9.997 8.08 20.298 16.401 30.549 24.502l-196.213-.133c-22.439 0-37.718 10.537-40.861 28.178-1.381 7.727 1.056 16.223 6.504 22.73 5.78 6.898 14.172 10.703 23.629 10.703l14.958.01c20.664 0 41.419-.051 62.146-.101l19.766-.046-178.08 131.748-.707.517C8.7 336.953 2.188 347.642.783 358.653c-1.065 8.342.881 15.965 5.63 22.053 5.66 7.258 14.497 11.25 24.885 11.25 10.205 0 20.618-3.867 29.334-10.908l96.166-78.7c-.411 3.843-.91 9.481-.853 13.573.108 6.479 2.188 19.479 5.481 30.033 6.804 21.69 18.265 41.535 34.063 58.963 16.438 18.132 36.458 32.509 59.5 42.722 24.36 10.774 50.547 16.243 77.836 16.243h.253c27.376-.066 53.646-5.622 78.085-16.519 23.08-10.334 43.091-24.769 59.467-42.898 15.778-17.517 27.223-37.395 34.014-59.067a151.124 151.124 0 0 0 6.416-33.003c.839-10.83.478-21.85-1.057-32.753zM334.82 383.601c-60.141 0-108.911-43.627-108.911-97.447 0-53.814 48.771-97.441 108.911-97.441 60.142 0 108.907 43.627 108.907 97.441.002 53.82-48.765 97.447-108.907 97.447zm62.807-106.01c.887 16.063-5.529 30.978-16.796 42.019-11.461 11.248-27.815 18.313-46.103 18.313-18.28 0-34.637-7.065-46.102-18.313-11.262-11.041-17.665-25.954-16.783-42.006.864-15.603 8.475-29.376 19.939-39.128 11.273-9.589 26.41-15.439 42.945-15.439 16.537 0 31.67 5.852 42.944 15.439 11.47 9.752 19.083 23.515 19.956 39.115z"/>
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
