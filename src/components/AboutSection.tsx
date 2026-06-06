import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, GraduationCap, Mail, Palette, Layers, Box, Monitor, Share2, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { withBaseUrl } from '@/lib/utils';
import { useLanguage } from '@/i18n/LanguageContext';

const serviceIcons = [Palette, Layers, Box, Monitor, Share2, Lightbulb];

const tools = [
  { name: 'Illustrator', icon: 'Ai', color: '#FF9A00', bg: '#330000', level: 5 },
  { name: 'Photoshop', icon: 'Ps', color: '#31A8FF', bg: '#001E36', level: 4 },
  { name: 'After Effects', icon: 'Ae', color: '#9999FF', bg: '#00005B', level: 3 },
  { name: 'Figma', icon: 'figma', color: '#A259FF', bg: '#1E1E1E', level: 4 },
  { name: 'Blender', icon: 'blender', color: '#EA7600', bg: '#1A1A1A', level: 3 },
  { name: 'ZBrush', icon: 'zbrush', color: '#FF6600', bg: '#1A1A1A', level: 5 },
  { name: 'Spine', icon: 'spine', color: '#FF6600', bg: '#1A1A1A', level: 4 },
];

export const AboutSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { ref: toolsRef, isVisible: toolsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.35 });
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
    <section id="about" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left - Avatar & Info */}
          <div ref={leftRef} className="flex flex-col min-w-0">
            <div
              className={`flex justify-center md:justify-start opacity-0 ${leftVisible ? 'animate-fade-in-left' : ''}`}
              style={leftVisible ? { animationDelay: '0ms', animationFillMode: 'both' } : undefined}
            >
              <img
                src={withBaseUrl('/avatar.webp')}
                alt="Avatar"
                className="w-full rounded-xl md:max-w-[280px] lg:max-w-sm"
              />
            </div>

            <div className="mt-8">
              <p
                className={`text-sm text-muted-foreground leading-relaxed ${leftVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={leftVisible ? { animationDelay: '260ms', animationFillMode: 'both' } : undefined}
              >
                {renderDescription()}
              </p>
            </div>

            <div className="space-y-4 mt-8 text-sm">
              <div
                className={`flex items-center gap-3 text-muted-foreground opacity-0 ${leftVisible ? 'animate-fade-in' : ''}`}
                style={leftVisible ? { animationDelay: '460ms', animationFillMode: 'both' } : undefined}
              >
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:armitiel@gmail.com" className="hover:text-primary transition-colors">armitiel@gmail.com</a>
              </div>
              <div
                className={`flex items-center gap-3 text-muted-foreground opacity-0 ${leftVisible ? 'animate-fade-in' : ''}`}
                style={leftVisible ? { animationDelay: '600ms', animationFillMode: 'both' } : undefined}
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span>{t.about.location}</span>
              </div>
              <div
                className={`flex items-start gap-3 text-muted-foreground opacity-0 ${leftVisible ? 'animate-fade-in' : ''}`}
                style={leftVisible ? { animationDelay: '740ms', animationFillMode: 'both' } : undefined}
              >
                <GraduationCap className="w-5 h-5 text-primary mt-0.5" />
                <div className="flex flex-col">
                  {t.about.education.split(', ').map((school, index) => (
                    <span key={index}>{school}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Services & Tools */}
          <div className="space-y-8 min-w-0">
            {/* Services */}
            <div ref={servicesRef}>
              <h3
                className={`text-xl font-semibold mb-4 ${servicesVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={servicesVisible ? { animationDelay: '0ms', animationFillMode: 'both' } : undefined}
              >
                {t.services.title} {t.services.titleHighlight}
              </h3>
              <div className="flex flex-col gap-3">
                {t.services.items.map((service, index) => {
                  const Icon = serviceIcons[index];
                  return (
                    <div
                      key={service.title}
                      className={`flex items-start gap-3 rounded-xl border border-white/30 bg-white/40 backdrop-blur-md px-4 py-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_8px_rgba(0,0,0,0.06)] hover:border-primary/40 hover:bg-white/50 transition-all duration-300 opacity-0 ${servicesVisible ? 'animate-fade-in-right' : ''}`}
                      style={{ animationDelay: servicesVisible ? `${260 + index * 220}ms` : '0ms', animationFillMode: 'both' }}
                    >
                      {Icon && (
                        <Icon
                          className={`w-5 h-5 text-primary shrink-0 mt-0.5 ${servicesVisible ? 'animate-scale-in' : 'opacity-0'}`}
                          style={servicesVisible ? { animationDelay: `${260 + index * 220 + 160}ms`, animationFillMode: 'both' } : undefined}
                        />
                      )}
                      <div className="min-w-0">
                        <h4
                          className={`text-sm font-semibold text-foreground ${servicesVisible ? 'animate-fade-in' : 'opacity-0'}`}
                          style={servicesVisible ? { animationDelay: `${260 + index * 220 + 300}ms`, animationFillMode: 'both' } : undefined}
                        >
                          {service.title}
                        </h4>
                        <p
                          className={`text-xs text-muted-foreground leading-relaxed mt-0.5 ${servicesVisible ? 'animate-fade-in' : 'opacity-0'}`}
                          style={servicesVisible ? { animationDelay: `${260 + index * 220 + 440}ms`, animationFillMode: 'both' } : undefined}
                        >
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tools */}
            <div ref={toolsRef}>
              <h3
                className={`text-xl font-semibold mb-4 ${toolsVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={toolsVisible ? { animationDelay: '0ms', animationFillMode: 'both' } : undefined}
              >
                {t.about.toolsTitle}
              </h3>
              <div className="flex flex-col gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className={`flex items-center gap-3 rounded-xl border border-white/30 bg-white/40 backdrop-blur-md px-4 py-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_8px_rgba(0,0,0,0.06)] hover:border-primary/40 hover:bg-white/50 transition-all duration-300 opacity-0 ${toolsVisible ? 'animate-fade-in-right' : ''}`}
                    style={{ animationDelay: toolsVisible ? `${260 + index * 220}ms` : '0ms', animationFillMode: 'both' }}
                    title={tool.name}
                  >
                    <span
                      className={`text-primary shrink-0 w-6 flex justify-center items-center ${toolsVisible ? 'animate-scale-in' : 'opacity-0'}`}
                      style={toolsVisible ? { animationDelay: `${260 + index * 220 + 160}ms`, animationFillMode: 'both' } : undefined}
                    >
                      {tool.icon === 'figma' ? (
                        <svg width="16" height="23" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="currentColor" fillOpacity="0.7"/>
                          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="currentColor" fillOpacity="0.5"/>
                          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="currentColor" fillOpacity="0.6"/>
                          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="currentColor" fillOpacity="0.8"/>
                          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="currentColor" fillOpacity="0.65"/>
                        </svg>
                      ) : tool.icon === 'Ai' ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <text x="12" y="16.5" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Ai</text>
                        </svg>
                      ) : tool.icon === 'Ps' ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <text x="12" y="16.5" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Ps</text>
                        </svg>
                      ) : tool.icon === 'Ae' ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <text x="12" y="16.5" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Ae</text>
                        </svg>
                      ) : tool.icon === 'blender' ? (
                        <svg width="20" height="16" viewBox="0.499 48.118 511.002 415.763" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M510.003 279.642c-2.998-21.097-10.305-41.104-21.725-59.459-9.959-16.019-22.738-30.266-37.991-42.375l.041-.038L290.133 54.731a4.569 4.569 0 0 0-.361-.287c-5.326-4.08-12.537-6.325-20.297-6.325-7.77 0-15.263 2.25-21.088 6.338-6.263 4.375-9.843 10.18-10.093 16.359-.229 5.765 2.521 11.312 7.764 15.636 10.31 8.135 20.597 16.447 30.898 24.769 9.997 8.08 20.298 16.401 30.549 24.502l-196.213-.133c-22.439 0-37.718 10.537-40.861 28.178-1.381 7.727 1.056 16.223 6.504 22.73 5.78 6.898 14.172 10.703 23.629 10.703l14.958.01c20.664 0 41.419-.051 62.146-.101l19.766-.046-178.08 131.748-.707.517C8.7 336.953 2.188 347.642.783 358.653c-1.065 8.342.881 15.965 5.63 22.053 5.66 7.258 14.497 11.25 24.885 11.25 10.205 0 20.618-3.867 29.334-10.908l96.166-78.7c-.411 3.843-.91 9.481-.853 13.573.108 6.479 2.188 19.479 5.481 30.033 6.804 21.69 18.265 41.535 34.063 58.963 16.438 18.132 36.458 32.509 59.5 42.722 24.36 10.774 50.547 16.243 77.836 16.243h.253c27.376-.066 53.646-5.622 78.085-16.519 23.08-10.334 43.091-24.769 59.467-42.898 15.778-17.517 27.223-37.395 34.014-59.067a151.124 151.124 0 0 0 6.416-33.003c.839-10.83.478-21.85-1.057-32.753zM334.82 383.601c-60.141 0-108.911-43.627-108.911-97.447 0-53.814 48.771-97.441 108.911-97.441 60.142 0 108.907 43.627 108.907 97.441.002 53.82-48.765 97.447-108.907 97.447zm62.807-106.01c.887 16.063-5.529 30.978-16.796 42.019-11.461 11.248-27.815 18.313-46.103 18.313-18.28 0-34.637-7.065-46.102-18.313-11.262-11.041-17.665-25.954-16.783-42.006.864-15.603 8.475-29.376 19.939-39.128 11.273-9.589 26.41-15.439 42.945-15.439 16.537 0 31.67 5.852 42.944 15.439 11.47 9.752 19.083 23.515 19.956 39.115z"/>
                        </svg>
                      ) : tool.icon === 'zbrush' ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <text x="12" y="16.5" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="bold" fontFamily="sans-serif">ZB</text>
                        </svg>
                      ) : tool.icon === 'spine' ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <text x="12" y="16.5" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Sp</text>
                        </svg>
                      ) : tool.icon}
                    </span>
                    <span
                      className={`text-sm font-semibold text-foreground flex-1 min-w-0 ${toolsVisible ? 'animate-fade-in' : 'opacity-0'}`}
                      style={toolsVisible ? { animationDelay: `${260 + index * 220 + 300}ms`, animationFillMode: 'both' } : undefined}
                    >
                      {tool.name}
                    </span>
                    <div className="flex gap-1 shrink-0">
                      {[1, 2, 3, 4, 5].map((dot) => {
                        const filled = dot <= tool.level;
                        return (
                          <div
                            key={dot}
                            className={`w-1.5 h-1.5 rounded-full ${
                              filled
                                ? `bg-primary ${toolsVisible ? 'animate-dot-fill' : 'opacity-0'}`
                                : 'border border-primary/40'
                            }`}
                            style={
                              filled && toolsVisible
                                ? { animationDelay: `${260 + index * 220 + 440 + (dot - 1) * 130}ms` }
                                : undefined
                            }
                          />
                        );
                      })}
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
