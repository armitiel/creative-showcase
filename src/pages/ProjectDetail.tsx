import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { withBaseUrl } from '@/lib/utils';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslatedProject } from '@/hooks/useTranslatedProject';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = useTranslatedProject(slug);
  const { t } = useLanguage();
  
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const isDark = project?.theme === 'dark';

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{t.projectDetail.notFound}</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.projectDetail.backToPortfolio}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#141414]' : 'bg-[#f0f0f0]'}`}>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${isDark ? 'bg-[#141414]/80 border-white/10' : 'bg-[#f0f0f0]/80 border-border'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              state={{ scrollToProjects: true }}
              className={`flex items-center gap-2 transition-colors ${isDark ? 'text-white/60 hover:text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">{t.projectDetail.backToPortfolio}</span>
            </Link>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <span className="text-xl font-bold text-primary font-['Poppins']">Portfolio</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`pt-24 pb-12 opacity-0 ${heroVisible ? 'animate-fade-in' : ''}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className={`mb-4 ${isDark ? 'bg-primary/30 text-primary border-primary/40' : 'bg-primary/20 text-primary border-primary/30'}`}>
              {project.category}
            </Badge>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Poppins'] ${isDark ? 'text-white' : 'text-foreground'}`}>
              {project.title}
            </h1>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>
              {project.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Animation (GIF) - if available */}
      {project.heroAnimation && (
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className={`rounded-2xl overflow-hidden border ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-image-card border-border'}`}>
                <img
                  src={withBaseUrl(project.heroAnimation)}
                  alt={`${project.title} - Animation`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Retailer Images - Side by Side */}
      {project.retailerImages && project.retailerImages.length >= 2 && (
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.retailerImages.map((img, index) => (
                  <div 
                    key={index}
                    className={`rounded-2xl overflow-hidden border ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-image-card border-border'}`}
                  >
                    <img
                      src={withBaseUrl(img.src)}
                      alt={img.alt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Thumbnail Grid - for NFT projects */}
      {project.thumbnailGrid && (
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {project.thumbnailGrid.title && (
                <h2 className={`text-3xl font-bold mb-4 font-['Poppins'] text-center ${isDark ? 'text-white' : 'text-foreground'}`}>
                  {project.thumbnailGrid.title}
                </h2>
              )}
              {project.thumbnailGrid.description && (
                <p className={`mb-8 max-w-2xl mx-auto text-center ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {project.thumbnailGrid.description}
                </p>
              )}
              <div className="grid grid-cols-5 gap-2 md:gap-3">
                {project.thumbnailGrid.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`aspect-square overflow-hidden rounded-lg border hover:border-primary/50 transition-all duration-300 hover:scale-105 ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-image-card border-border'}`}
                  >
                    <img
                      src={withBaseUrl(image.src)}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Hero Image */}
      {project.images.length > 0 && (
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className={`aspect-video rounded-2xl overflow-hidden border ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-image-card border-border'}`}>
                <img
                  src={withBaseUrl(project.thumbnail)}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Info */}
      <section 
        ref={infoRef}
        className={`py-12 opacity-0 ${infoVisible ? 'animate-fade-in' : ''} ${isDark ? 'bg-[#1e1e1e]' : 'bg-[#e0e0e0]'}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${isDark ? 'bg-primary/20' : 'bg-foreground/10'}`}>
                  <User className={`h-5 w-5 ${isDark ? 'text-primary' : 'text-foreground'}`} />
                </div>
                <div>
                  <p className={`text-sm mb-1 ${isDark ? 'text-white/70' : 'text-foreground/60'}`}>{t.projectDetail.client}</p>
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-foreground'}`}>{project.client || t.projectDetail.personalProject}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${isDark ? 'bg-primary/20' : 'bg-foreground/10'}`}>
                  <Calendar className={`h-5 w-5 ${isDark ? 'text-primary' : 'text-foreground'}`} />
                </div>
                <div>
                  <p className={`text-sm mb-1 ${isDark ? 'text-white/70' : 'text-foreground/60'}`}>{t.projectDetail.year}</p>
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-foreground'}`}>{project.year}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${isDark ? 'bg-primary/20' : 'bg-foreground/10'}`}>
                  <Wrench className={`h-5 w-5 ${isDark ? 'text-primary' : 'text-foreground'}`} />
                </div>
                <div>
                  <p className={`text-sm mb-1 ${isDark ? 'text-white/70' : 'text-foreground/60'}`}>{t.projectDetail.tools}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className={`text-xs ${isDark ? 'text-white border-white/50' : 'text-foreground border-foreground/50'}`}>
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      {(project.challenge || project.solution) && (
        <section 
          ref={contentRef}
          className={`py-16 opacity-0 ${contentVisible ? 'animate-fade-in' : ''}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {project.challenge && (
                  <div>
                    <h2 className={`text-2xl font-bold mb-4 font-['Poppins'] ${isDark ? 'text-white' : 'text-foreground'}`}>{t.projectDetail.challenge}</h2>
                    <p className={`leading-relaxed ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>{project.challenge}</p>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <h2 className={`text-2xl font-bold mb-4 font-['Poppins'] ${isDark ? 'text-white' : 'text-foreground'}`}>{t.projectDetail.solution}</h2>
                    <p className={`leading-relaxed ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>{project.solution}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Typography Section */}
      {project.typography && (
        <section className={`py-16 ${isDark ? 'bg-[#1a1a1a]' : 'bg-[#e5e5e5]'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-3xl font-bold mb-4 font-['Poppins'] ${isDark ? 'text-white' : 'text-foreground'}`}>{t.projectDetail.typography}</h2>
              <p className={`mb-12 max-w-2xl ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>
                {project.typography.description}
              </p>
              
              <div className="space-y-12">
                {project.typography.fonts.map((font, fontIndex) => (
                  <div key={fontIndex} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl font-semibold text-primary">{font.name}</h3>
                      <span className={`text-sm px-3 py-1 rounded-full bg-primary/10 ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>
                        {font.usage}
                      </span>
                    </div>
                    
                    <div className="grid gap-6">
                      {font.weights.map((weight, weightIndex) => (
                        <div 
                          key={weightIndex}
                          className={`flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-xl border ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-[#f5f5f5] border-border/50'}`}
                        >
                          <div className="md:w-32 flex-shrink-0">
                            <span className={`text-sm ${isDark ? 'text-white/60' : 'text-muted-foreground'}`}>{weight.name}</span>
                          </div>
                          <p 
                            className={`text-2xl md:text-3xl flex-1 ${isDark ? 'text-white' : 'text-foreground'}`}
                            style={{ 
                              fontFamily: font.name === 'Khand' ? 'Khand, sans-serif' : font.name === 'Cabin' ? 'Cabin, sans-serif' : 'Inter, sans-serif',
                              fontWeight: weight.name === 'Bold' ? 700 : weight.name === 'SemiBold' ? 600 : weight.name === 'Medium' ? 500 : weight.name === 'Light' ? 300 : 400
                            }}
                          >
                            {weight.sample}
                          </p>
                          <div className={`text-right font-mono text-sm hidden lg:block ${isDark ? 'text-white/60' : 'text-muted-foreground'}`}>
                            Aa Bb Cc Dd Ee
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Brand Colors Section */}
      {project.colors && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className={`text-3xl font-bold mb-4 font-['Poppins'] ${isDark ? 'text-white' : 'text-foreground'}`}>{t.projectDetail.brandColors}</h2>
              <p className={`mb-12 max-w-2xl ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>
                {project.colors.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {project.colors.palette.map((color, index) => (
                  <div 
                    key={index}
                    className={`group rounded-xl overflow-hidden border hover:border-primary/50 transition-all duration-300 ${isDark ? 'border-white/10 bg-[#1a1a1a]' : 'border-border bg-[#f5f5f5]'}`}
                  >
                    <div 
                      className="aspect-square w-full"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="p-4 space-y-2">
                      <h4 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-foreground'}`}>{color.name}</h4>
                      <div className={`space-y-1 text-xs font-mono ${isDark ? 'text-white/60' : 'text-foreground/70'}`}>
                        <p>HEX: {color.hex}</p>
                        <p>RGB: {color.rgb}</p>
                        {color.cmyk && <p>CMYK: {color.cmyk}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mobile Screens Section - Phone Mockups */}
      {project.mobileScreens && (
        <section className={`py-16 ${isDark ? 'bg-gradient-to-b from-[#141414] to-[#1a1a1a]' : 'bg-gradient-to-b from-[#f0f0f0] to-[#e5e5e5]'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {project.mobileScreens.title && (
                <h2 className={`text-3xl font-bold mb-4 font-['Poppins'] text-center ${isDark ? 'text-white' : 'text-foreground'}`}>
                  {project.mobileScreens.title}
                </h2>
              )}
              {project.mobileScreens.description && (
                <p className={`mb-12 max-w-2xl mx-auto text-center ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {project.mobileScreens.description}
                </p>
              )}
              
              {/* Phone frames grid */}
              <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
                {project.mobileScreens.screens.map((screen, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Phone Frame */}
                    <div className="relative w-[180px] md:w-[220px] lg:w-[240px]">
                      {/* Phone outer bezel */}
                      <div className="relative bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-[2.5rem] p-2 shadow-2xl">
                        {/* Notch */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl z-10" />
                        
                        {/* Screen container */}
                        <div className="bg-black rounded-[2rem] overflow-hidden">
                          <img
                            src={withBaseUrl(screen.src)}
                            alt={screen.alt}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        
                        {/* Home indicator */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-neutral-600 rounded-full" />
                      </div>
                    </div>
                    
                    {/* Caption */}
                    {screen.caption && (
                      <p className={`mt-4 text-sm text-center ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>
                        {screen.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* GIF Pair - Side by Side */}
      {project.gifPair && project.gifPair.length >= 2 && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gifPair.map((gif, index) => (
                  <div 
                    key={index}
                    className={`rounded-2xl overflow-hidden border ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-[#d0e8e4] border-[#c5ddd9]'}`}
                  >
                    <img
                      src={withBaseUrl(gif.src)}
                      alt={gif.alt}
                      className="w-full h-auto object-cover"
                    />
                    {gif.caption && (
                      <div className={`p-4 text-center ${isDark ? 'bg-[#151515]' : 'bg-[#c5c5c5]'}`}>
                        <p className={`text-sm italic ${isDark ? 'text-white/70' : 'text-foreground/70'}`}>{gif.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Gallery */}
      <section className={`py-16 ${isDark ? 'bg-[#0f0f0f]' : 'bg-[#e8e8e8]'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {project.images.map((image, index) => {
              const ImageWrapper = ({ children }: { children: React.ReactNode }) => {
                const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
                return (
                  <div
                    ref={ref}
                    className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {children}
                  </div>
                );
              };

              // Light theme uses mint/teal tint for image background
              const lightImageBg = image.displayMode === 'centered' && image.backgroundColor 
                ? image.backgroundColor 
                : '#d0e8e4';

              return (
                <ImageWrapper key={index}>
                  <div className={`rounded-2xl overflow-hidden border ${isDark ? 'border-white/10 bg-[#1a1a1a]' : 'border-[#c5ddd9]'}`}>
                    <div 
                      className="aspect-video flex items-center justify-center"
                      style={{ 
                        backgroundColor: isDark 
                          ? (image.displayMode === 'centered' && image.backgroundColor ? image.backgroundColor : undefined)
                          : lightImageBg
                      }}
                    >
                      {image.displayMode === 'centered' ? (
                        <img
                          src={withBaseUrl(image.src)}
                          alt={image.alt}
                          className="object-contain"
                          style={{ 
                            maxWidth: `${(image.imageScale || 1) * 100}%`,
                            maxHeight: `${(image.imageScale || 1) * 100}%`
                          }}
                        />
                      ) : (
                        <img
                          src={withBaseUrl(image.src)}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    {image.caption && (
                      <div className={`p-4 text-center ${isDark ? 'bg-[#151515]' : 'bg-[#c5c5c5]'}`}>
                        <p className={`text-sm italic ${isDark ? 'text-white/70' : 'text-foreground/70'}`}>{image.caption}</p>
                      </div>
                    )}
                  </div>
                </ImageWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      {project.results && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={`text-3xl font-bold mb-6 font-['Poppins'] ${isDark ? 'text-white' : 'text-foreground'}`}>
                {t.projectDetail.solution}
              </h2>
              <p className={`text-xl leading-relaxed ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>{project.results}</p>
            </div>
          </div>
        </section>
      )}

      {/* Real Photos 2x2 Grid - at bottom */}
      {project.realPhotos && (
        <section className={`py-16 ${isDark ? 'bg-[#0f0f0f]' : 'bg-[#e5e5e5]'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {project.realPhotos.title && (
                <h2 className={`text-3xl font-bold mb-8 font-['Poppins'] text-center ${isDark ? 'text-white' : 'text-foreground'}`}>
                  {t.projectDetail.realization}
                </h2>
              )}
              <div className="grid grid-cols-2 gap-4">
                {project.realPhotos.images.map((image, index) => (
                  <div 
                    key={index}
                    className="aspect-[4/3] overflow-hidden rounded-2xl"
                  >
                    <img
                      src={withBaseUrl(image.src)}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Portfolio */}
      <section className={`py-16 ${isDark ? 'bg-[#1e1e1e]' : 'bg-[#e0e0e0]'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" state={{ scrollToProjects: true }}>
                <Button variant="outline" size="lg" className={isDark ? 'border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white' : ''}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t.projectDetail.backToPortfolio}
                </Button>
              </Link>
              <Link to="/#contact" state={{ scrollToContact: true }}>
                <Button size="lg" className="glow-cyan">
                  {t.contact.title}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${isDark ? 'border-white/10' : 'border-border'}`}>
        <div className="container mx-auto px-4 text-center">
          <p className={`text-sm ${isDark ? 'text-white/60' : 'text-muted-foreground'}`}>
            © 2025 Amitiel Angelisme. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
