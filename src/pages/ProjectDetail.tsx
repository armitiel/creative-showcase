import React, { useCallback, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Wrench } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { withBaseUrl } from '@/lib/utils';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslatedProject } from '@/hooks/useTranslatedProject';
import { ImageMagnifier } from '@/components/ImageMagnifier';
import { ImageLightbox, useLightbox, useGalleryLightbox } from '@/components/ImageLightbox';
const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = useTranslatedProject(slug);
  const { t, language } = useLanguage();
  
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { lightboxImage, openLightbox, closeLightbox } = useLightbox();

  // Gallery lightbox for NFT thumbnail grid
  const nftImages = useMemo(() => project?.thumbnailGrid?.images.map((img) => ({
    src: withBaseUrl(img.src),
    alt: img.alt,
  })) || [], [project?.thumbnailGrid?.images]);
  const gallery = useGalleryLightbox(nftImages);

  // Real photos gallery (spójny obiekt + stabilny stan)
  const realGallery = useMemo(() => {
    const items = project?.realPhotos?.images.map((img) => ({
      src: withBaseUrl(img.src),
      alt: img.alt,
    })) || [];

    return {
      items,
      count: items.length,
    };
  }, [project?.realPhotos?.images]);

  const [realGalleryIndex, setRealGalleryIndex] = useState<number | null>(null);
  const openRealGallery = useCallback((index: number) => setRealGalleryIndex(index), []);
  const closeRealGallery = useCallback(() => setRealGalleryIndex(null), []);
  const prevRealGallery = useCallback(() => setRealGalleryIndex((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const nextRealGallery = useCallback(() => setRealGalleryIndex((i) => (i !== null && i < realGallery.count - 1 ? i + 1 : i)), [realGallery.count]);

  const isRealGalleryOpen = realGalleryIndex !== null;
  const realGalleryCurrentImage = realGalleryIndex !== null ? realGallery.items[realGalleryIndex] : null;
  const hasRealGalleryPrev = realGalleryIndex !== null && realGalleryIndex > 0;
  const hasRealGalleryNext = realGalleryIndex !== null && realGalleryIndex < realGallery.count - 1;
  const realGalleryPrevSrc = hasRealGalleryPrev && realGalleryIndex !== null ? realGallery.items[realGalleryIndex - 1]?.src : undefined;
  const realGalleryNextSrc = hasRealGalleryNext && realGalleryIndex !== null ? realGallery.items[realGalleryIndex + 1]?.src : undefined;

  // Strategic section lightbox (maps)
  const [strategicLightbox, setStrategicLightbox] = useState<{ images: { src: string; alt: string }[]; index: number } | null>(null);
  const closeStrategicLightbox = useCallback(() => setStrategicLightbox(null), []);
  const prevStrategicLightbox = useCallback(() => setStrategicLightbox((s) => s && s.index > 0 ? { ...s, index: s.index - 1 } : s), []);
  const nextStrategicLightbox = useCallback(() => setStrategicLightbox((s) => s && s.index < s.images.length - 1 ? { ...s, index: s.index + 1 } : s), []);

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
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-md ${isDark ? 'bg-[#141414]/80 border-white/10 shadow-black/20' : 'bg-[#f0f0f0]/80 border-border shadow-black/5'}`}>
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




      {/* Featured Image above thumbnail grid */}
      {project.thumbnailGrid && project.slug === 'nft-generative-system' && (
        <section className="pb-6 md:pb-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div 
                className="rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-2xl cursor-zoom-in"
                onClick={() => openLightbox(withBaseUrl('/projects/nft-system/neon-rebel-cover.jpg'), 'Neon Rebel - Cover Art')}
              >
                <img
                  src={withBaseUrl('/projects/nft-system/neon-rebel-cover.jpg')}
                  alt="Neon Rebel - Cover Art"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Thumbnail Grid - for NFT projects */}
      {project.thumbnailGrid && (
        <section className="pb-6 md:pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {project.thumbnailGrid.title && (
                <h2 className={`text-3xl font-bold mb-4 font-['Poppins'] text-center ${isDark ? 'text-white' : 'text-foreground'}`}>
                  {project.thumbnailGrid.title}
                </h2>
              )}
              {project.thumbnailGrid.description && (
                <p className={`mb-6 md:mb-8 max-w-2xl mx-auto text-center ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {project.thumbnailGrid.description}
                </p>
              )}
              <div className="flex flex-wrap justify-center gap-2 md:grid md:grid-cols-5 md:gap-4">
                {project.thumbnailGrid.images.map((image, index) => (
                  <div 
                    key={index}
                    className="w-[28%] md:w-auto aspect-square overflow-hidden rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 bg-[#e0e0e0] shadow-md p-1.5 md:p-2 opacity-0 animate-[fall-in_0.6s_ease-out_forwards] cursor-zoom-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                    onClick={() => gallery.openAt(index)}
                  >
                    <img
                      src={withBaseUrl(image.src)}
                      alt={image.alt}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Parallax Image Section */}
      {project.parallaxImage && (
        <section className="py-8 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {project.parallaxImage.title && (
                <h2 className={`text-3xl font-bold mb-8 font-['Poppins'] text-center ${isDark ? 'text-white' : 'text-foreground'}`}>
                  {project.parallaxImage.title}
                </h2>
              )}
              <div className="relative rounded-2xl overflow-hidden">
                {/* Background image (display) */}
                {project.parallaxImage.backgroundImage && (
                  <img
                    src={withBaseUrl(project.parallaxImage.backgroundImage)}
                    alt="Background"
                    className="w-full h-auto object-cover"
                  />
                )}
                
                {/* Parallax box overlay - positioned on the left */}
                <div 
                  className="absolute left-[15%] top-1/2 w-[17%] parallax-scroll-box"
                  style={{ 
                    perspective: '1000px',
                    transform: 'translateY(-50%)',
                  }}
                  ref={(el) => {
                    if (!el) return;
                    const handleScroll = () => {
                      const rect = el.getBoundingClientRect();
                      const windowHeight = window.innerHeight;
                      const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
                      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
                      const yOffset = (clampedProgress - 0.5) * 100; // -50px to +50px movement
                      el.style.transform = `translateY(calc(-50% + ${yOffset}px))`;
                    };
                    window.addEventListener('scroll', handleScroll);
                    handleScroll();
                  }}
                >
                  <div
                    className="transition-transform duration-150 ease-out cursor-pointer"
                    style={{ transformStyle: 'preserve-3d' }}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left - rect.width / 2;
                      const y = e.clientY - rect.top - rect.height / 2;
                      const rotateX = (y / rect.height) * -15;
                      const rotateY = (x / rect.width) * 15;
                      e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
                    }}
                  >
                    <img
                      src={withBaseUrl(project.parallaxImage.src)}
                      alt={project.parallaxImage.alt}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* Centered logo before project info */}
      {project.images?.[0] && project.images[0].displayMode === 'centered' && (
        <section className="py-16" style={{ backgroundColor: project.images[0].backgroundColor || '#1a1a2e' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex justify-center">
              <img
                src={withBaseUrl(project.images[0].src)}
                alt={project.images[0].alt}
                className="max-h-[28rem] object-contain"
              />
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
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
              <div className="flex items-start gap-3 col-span-2 md:col-span-1">
                <div className={`p-2 rounded-lg ${isDark ? 'bg-primary/20' : 'bg-foreground/10'}`}>
                  <Wrench className={`h-5 w-5 ${isDark ? 'text-primary' : 'text-foreground'}`} />
                </div>
                <div className="flex-1">
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

      {/* Strategic Sections */}
      {project.strategicSections && project.strategicSections.length > 0 && (
        <section className={`py-16 ${isDark ? 'bg-[#1a1a1a]' : 'bg-[#e5e5e5]'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {project.strategicSections.map((section, index) => (
                <div key={index}>
                  <h3 className={`text-xl font-bold mb-3 font-['Poppins'] ${isDark ? 'text-white' : 'text-foreground'}`}>
                    {section.title}
                  </h3>
                  <p className={`leading-relaxed ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {section.content}
                  </p>
                  {section.images && section.images.length > 0 && (() => {
                    const isLandscapeSection = section.images!.some(img => img.src.includes('map-'));
                    const isUISection = section.images!.some(img => img.src.includes('ui-'));
                    
                    if (isUISection) {
                      const screens = section.images!.filter(img => !img.src.includes('ui-card'));
                      const cards = section.images!.filter(img => img.src.includes('ui-card'));
                      return (
                        <div className="mt-6 space-y-6">
                          {screens.length > 0 && (
                            <div className="grid grid-cols-1 gap-4">
                              {screens.map((img, imgIndex) => (
                                <div key={imgIndex} className={`rounded-2xl overflow-hidden border ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-[#d0e8e4] border-[#c5ddd9]'}`}>
                                  <img src={withBaseUrl(img.src)} alt={img.alt} className="w-full h-auto" />
                                  {img.caption && (
                                    <div className={`p-3 text-center ${isDark ? 'bg-[#151515]' : 'bg-white'}`}>
                                      <p className={`text-sm italic ${isDark ? 'text-white/70' : 'text-foreground/70'}`}>{img.caption}</p>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                          {cards.length > 0 && (
                            <div className="grid grid-cols-3 gap-4">
                              {cards.map((img, imgIndex) => (
                                <div key={imgIndex} className={`rounded-xl overflow-hidden border flex flex-col ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-[#d0e8e4] border-[#c5ddd9]'}`}>
                                  <div className="p-2">
                                    <img src={withBaseUrl(img.src)} alt={img.alt} className="w-full h-auto object-contain" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    const colsClass = section.images!.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';
                    return (
                    <div className={`grid grid-cols-2 ${colsClass} gap-4 mt-6`}>
                      {section.images!.map((img, imgIndex) => {
                        const isLandscape = img.src.includes('map-');
                        return (
                          <div 
                            key={imgIndex}
                            className={`rounded-2xl overflow-hidden border flex flex-col ${isLandscape ? 'cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all' : ''} ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-[#d0e8e4] border-[#c5ddd9]'}`}
                            onClick={isLandscape ? () => {
                              const mapImages = section.images!.filter(i => i.src.includes('map-'));
                              const mapIndex = mapImages.findIndex(i => i.src === img.src);
                              setStrategicLightbox({ images: mapImages.map(i => ({ src: withBaseUrl(i.src), alt: i.alt })), index: mapIndex });
                            } : undefined}
                          >
                            <div className={`${isLandscape ? 'aspect-video' : 'aspect-square p-4'} flex items-center justify-center`}>
                              <img
                                src={withBaseUrl(img.src)}
                                alt={img.alt}
                                className={`${isLandscape ? 'w-full h-full object-cover' : 'max-w-full max-h-full object-contain'}`}
                              />
                            </div>
                          {img.caption && (
                            <div className={`p-3 text-center mt-auto ${isDark ? 'bg-[#151515]' : 'bg-white'}`}>
                              <p className={`text-sm italic ${isDark ? 'text-white/70' : 'text-foreground/70'}`}>{img.caption}</p>
                            </div>
                          )}
                        </div>
                        );
                      })}
                    </div>
                    );
                  })()}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.typography && (
        <section className={`py-16 ${isDark ? 'bg-[#1a1a1a]' : 'bg-[#e5e5e5]'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-3xl font-bold mb-4 font-['Poppins'] ${isDark ? 'text-white' : 'text-foreground'}`}>{t.projectDetail.typography}</h2>
              <p className={`mb-12 max-w-2xl ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>
                {project.typography.description}
              </p>
              
              {project.typography.image && (
                <div className="mb-12 rounded-xl overflow-hidden">
                  <img 
                    src={withBaseUrl(project.typography.image)} 
                    alt="Typography overview" 
                    className="w-full h-auto"
                  />
                </div>
              )}

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
                              fontFamily: font.name === 'Gotham' ? 'Gotham, sans-serif' : font.name === 'Khand' ? 'Khand, sans-serif' : font.name === 'Cabin' ? 'Cabin, sans-serif' : font.name === 'BowlbyOne Regular' ? '"Bowlby One", sans-serif' : font.name === 'RumRaisin Regular' ? '"Rum Raisin", sans-serif' : font.name === 'Montserrat' ? 'Montserrat, sans-serif' : 'Inter, sans-serif',
                              fontWeight: weight.name === 'Black' ? 900 : weight.name === 'Bold' ? 700 : weight.name === 'SemiBold' ? 600 : weight.name === 'Medium' ? 500 : weight.name === 'Light' ? 300 : 400
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

      {/* First Hero Follow Image - before Mobile Application section */}
      {project.heroFollowImages && project.heroFollowImages.length > 0 && (
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-4">
              {project.heroFollowImages.map((img, index) => (
                <div 
                  key={index}
                  className={index === 0 && project.slug === 'portal-smart-checkout'
                    ? 'rounded-2xl overflow-hidden border-none'
                    : `rounded-2xl overflow-hidden border ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-image-card border-border'}`
                  }
                  style={
                    index === 0 && project.slug === 'portal-smart-checkout'
                      ? { backgroundColor: isDark ? '#141414' : '#f0f0f0' }
                      : img.backgroundColor ? { backgroundColor: img.backgroundColor } : undefined
                  }
                >
                  <div 
                    className={img.displayMode === 'centered' && img.imageScale ? 'flex items-center justify-center' : ''}
                    style={img.displayMode === 'centered' && img.imageScale ? { padding: `${Math.max(4, (1 - img.imageScale) * 12 + 3)}rem 0` } : undefined}
                  >
                    <img
                      src={withBaseUrl(img.src)}
                      alt={img.alt}
                      className={`h-auto ${img.displayMode === 'centered' && !(index === 0 && project.slug === 'portal-smart-checkout') ? 'object-contain mx-auto' : 'w-full object-cover'}`}
                      style={img.imageScale ? { width: `${img.imageScale * 100}%`, display: 'block', margin: '0 auto' } : undefined}
                    />
                  </div>
                  {img.caption && (
                    <div className={`p-4 text-center ${isDark ? 'bg-[#151515]' : 'bg-white'}`}>
                      <p className={`text-sm italic ${isDark ? 'text-white/70' : 'text-foreground/70'}`}>{img.caption}</p>
                    </div>
                  )}
                </div>
              ))}
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
                <p className={`${project.mobileScreens.screens.length > 0 ? 'mb-12' : 'mb-6'} max-w-2xl mx-auto text-center ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {project.mobileScreens.description}
                </p>
              )}
              
              {/* Phone frames grid */}
              {project.mobileScreens.screens.length > 0 && (
              <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
                {project.mobileScreens.screens.map((screen, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Phone Frame */}
                    <div className="relative w-[180px] md:w-[220px] lg:w-[240px]">
                      {/* Blue glow effect for dark theme */}
                      {isDark && (
                        <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-60" />
                      )}
                      
                      {/* Phone outer bezel */}
                      <div className="relative bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-[2.5rem] p-2 shadow-2xl">
                        {/* Notch */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl z-10" />
                        
                        {/* Screen container */}
                        <div className="bg-black rounded-[2rem] overflow-hidden">
                          <ImageMagnifier
                            src={withBaseUrl(screen.src)}
                            alt={screen.alt}
                            magnifierSize={120}
                            zoomLevel={2.5}
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
              )}

              {/* Section images below phone mockups */}
              {project.mobileScreens.sectionImages && project.mobileScreens.sectionImages.length > 0 && (
                <div className={`${project.mobileScreens.screens.length > 0 ? 'mt-12' : 'mt-0'} max-w-5xl mx-auto space-y-8`}>
                  {project.mobileScreens.sectionImages.map((sImg, sIndex) => (
                    <div 
                      key={sIndex}
                      className={`rounded-2xl overflow-hidden border ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'border-border'}`}
                      style={sImg.backgroundColor ? { backgroundColor: sImg.backgroundColor } : undefined}
                    >
                      <img
                        src={withBaseUrl(sImg.src)}
                        alt={sImg.alt}
                        className="w-full h-auto object-cover"
                      />
                      {sImg.caption && (
                        <div className={`p-4 text-center ${isDark ? 'bg-[#151515]' : 'bg-white'}`}>
                          <p className={`text-sm italic ${isDark ? 'text-white/70' : 'text-foreground/70'}`}>{sImg.caption}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Mobile Device Mockup - after Mobile Screens */}
      {project.slug === 'portal-smart-checkout' && (
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className={`rounded-2xl overflow-hidden border ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-image-card border-border'}`}>
                <img
                  src={withBaseUrl('/projects/portal/mobile-mockup.png')}
                  alt="Portal Mobile App Mockup"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Desktop Dashboard Views - after Mobile Mockup */}
      {project.slug === 'portal-smart-checkout' && (
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-4">
              <div className={`rounded-2xl overflow-hidden border ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-image-card border-border'}`}>
                <img
                  src={withBaseUrl('/projects/portal/desktop-dashboard-1.png')}
                  alt="Portal Dashboard - Ad Manager"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className={`rounded-2xl overflow-hidden border ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-image-card border-border'}`}>
                <img
                  src={withBaseUrl('/projects/portal/desktop-dashboard-2.png')}
                  alt="Portal Dashboard - Analytics Overview"
                  className="w-full h-auto object-cover"
                />
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
              <div className={`grid grid-cols-1 ${project.gifPair.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
                {project.gifPair.map((gif, index) => (
                  <div 
                    key={index}
                    className={`rounded-2xl overflow-hidden border flex flex-col ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-[#d0e8e4] border-[#c5ddd9]'}`}
                  >
                    <div className="aspect-square flex items-center justify-center p-4">
                      <img
                        src={withBaseUrl(gif.src)}
                        alt={gif.alt}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    {gif.caption && (
                      <div className={`p-3 text-center mt-auto ${isDark ? 'bg-[#151515]' : 'bg-white'}`}>
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


      {/* Logo Concept Section */}
      {project.logoConcept && (
        <section className={`py-16 ${isDark ? 'bg-[#1a1a1a]' : 'bg-[#e5e5e5]'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className={`text-3xl font-bold mb-4 font-['Poppins'] text-center ${isDark ? 'text-white' : 'text-foreground'}`}>
                {project.logoConcept.title || 'Logo Concept'}
              </h2>
              <p className={`mb-10 max-w-2xl mx-auto text-center leading-relaxed ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>
                {project.logoConcept.description}
              </p>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src={withBaseUrl(project.logoConcept.image)} 
                  alt={project.logoConcept.alt}
                  className="w-full h-auto"
                />
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
                <React.Fragment key={index}>
                  {/* Retailer Images - inserted before the last gallery image */}
                  {project.retailerImages && project.retailerImages.length >= 2 && index === project.images.length - 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.retailerImages.map((img, rIndex) => (
                        <div 
                          key={`retailer-${rIndex}`}
                          className={`rounded-2xl overflow-hidden border ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'border-[#c5ddd9]'}`}
                        >
                          <img
                            src={withBaseUrl(img.src)}
                            alt={img.alt}
                            className="w-full h-auto object-cover"
                          />
                          {img.caption && (
                            <div className={`p-4 text-center ${isDark ? 'bg-[#151515]' : 'bg-white'}`}>
                              <p className={`text-sm italic ${isDark ? 'text-white/70' : 'text-foreground/70'}`}>{img.caption}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                <ImageWrapper key={index}>
                  <div className={`rounded-2xl overflow-hidden border ${isDark ? 'border-white/10 bg-[#1a1a1a]' : 'border-[#c5ddd9]'}`}>
                    <div 
                      className={`flex items-center justify-center ${image.backgroundGradient ? '' : image.displayMode === 'laptop' ? 'py-12 px-8' : image.fullHeight ? '' : 'aspect-video'}`}
                      style={image.backgroundGradient 
                        ? { background: image.backgroundGradient }
                        : { 
                            backgroundColor: isDark 
                              ? (image.displayMode === 'centered' && image.backgroundColor ? image.backgroundColor : image.displayMode === 'laptop' ? '#2a2a2a' : undefined)
                              : image.displayMode === 'laptop' ? '#d5d5d5' : lightImageBg
                          }
                      }
                    >
                      {image.displayMode === 'laptop' ? (
                        <div className="w-full max-w-4xl mx-auto">
                          {/* Laptop frame */}
                          <div className={`relative rounded-t-xl overflow-hidden border-[6px] ${isDark ? 'border-neutral-700 bg-neutral-800' : 'border-neutral-400 bg-neutral-300'}`}>
                            {/* Camera dot */}
                            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full z-10 mt-[-3px] ${isDark ? 'bg-neutral-600' : 'bg-neutral-500'}`} />
                            {/* Screen */}
                            <img
                              src={withBaseUrl(image.src)}
                              alt={image.alt}
                              className="w-full h-auto object-cover cursor-zoom-in"
                              onClick={() => openLightbox(withBaseUrl(image.src), image.alt)}
                            />
                          </div>
                          {/* Laptop base */}
                          <div className={`h-4 rounded-b-lg mx-auto ${isDark ? 'bg-neutral-700' : 'bg-neutral-400'}`} style={{ width: '104%', marginLeft: '-2%' }}>
                            <div className={`h-full w-16 mx-auto rounded-b-md ${isDark ? 'bg-neutral-600' : 'bg-neutral-500'}`} />
                          </div>
                        </div>
                      ) : image.displayMode === 'centered' ? (
                        <div 
                          className="flex items-center justify-center w-full h-full cursor-zoom-in"
                          onClick={() => openLightbox(withBaseUrl(image.src), image.alt)}
                        >
                          <img
                            src={withBaseUrl(image.src)}
                            alt={image.alt}
                            className={image.backgroundGradient ? "w-full h-auto" : "object-contain"}
                            style={image.backgroundGradient ? undefined : { 
                              maxWidth: `${(image.imageScale || 1) * 100}%`,
                              maxHeight: `${(image.imageScale || 1) * 100}%`
                            }}
                          />
                        </div>
                      ) : image.noMagnifier ? (
                        <img
                          src={withBaseUrl(image.src)}
                          alt={image.alt}
                          className="w-full h-full object-cover cursor-zoom-in"
                          onClick={() => openLightbox(withBaseUrl(image.src), image.alt)}
                        />
                      ) : (
                        <div 
                          className="w-full h-full cursor-zoom-in"
                          onClick={() => openLightbox(withBaseUrl(image.src), image.alt)}
                        >
                          <ImageMagnifier
                            src={withBaseUrl(image.src)}
                            alt={image.alt}
                            className="w-full h-full"
                            imageClassName="w-full h-full object-cover"
                            magnifierSize={220}
                            zoomLevel={4}
                          />
                        </div>
                      )}
                    </div>
                    {image.caption && (
                      <div className={`p-4 text-center ${isDark ? 'bg-[#151515]' : 'bg-white'}`}>
                        <p className={`text-sm italic ${isDark ? 'text-white/70' : 'text-foreground/70'}`}>{image.caption}</p>
                      </div>
                    )}
                  </div>
                </ImageWrapper>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      {project.youtubeVideo && (
        <section className={`py-16 ${isDark ? 'bg-[#141414]' : 'bg-[#f0f0f0]'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {project.youtubeVideo.title && (
                <h2 className={`text-3xl font-bold mb-4 font-['Poppins'] text-center ${isDark ? 'text-white' : 'text-foreground'}`}>
                  {project.youtubeVideo.title}
                </h2>
              )}
              {project.youtubeVideo.description && (
                <p className={`mb-8 max-w-2xl mx-auto text-center ${isDark ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {project.youtubeVideo.description}
                </p>
              )}
              <div className={`rounded-2xl overflow-hidden border ${isDark ? 'border-white/10' : 'border-[#c5ddd9]'}`}>
                <div className="aspect-video">
                  <iframe
                    src={project.youtubeVideo.url}
                    title={project.youtubeVideo.title || 'Video'}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
                    className="aspect-[4/3] overflow-hidden rounded-2xl cursor-zoom-in"
                    onClick={() => openRealGallery(index)}
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

      {/* HubbleRx Bottom Illustration - Levitating creature centered */}
      {project.slug === 'hubble-rx' && (
        <section className={`pt-16 pb-8 ${isDark ? 'bg-[#1e1e1e]' : 'bg-[#f0f0f0]'}`}>
          <div className="flex justify-center">
            <div className="w-[14%] animate-[levitate_4s_ease-in-out_infinite]">
              <img
                src={withBaseUrl('/projects/hubble/illustration-b2.svg')}
                alt="HubbleRx Flying Creature"
                className="w-full h-auto"
              />
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

      {/* Lightbox — basic (non-gallery images) */}
      <ImageLightbox
        src={lightboxImage?.src || ''}
        alt={lightboxImage?.alt || ''}
        isOpen={!!lightboxImage}
        onClose={closeLightbox}
      />

      {/* Lightbox — NFT gallery with navigation */}
      <ImageLightbox
        src={gallery.currentImage?.src || ''}
        alt={gallery.currentImage?.alt || ''}
        isOpen={gallery.isOpen}
        onClose={gallery.close}
        onPrev={gallery.prev}
        onNext={gallery.next}
        hasPrev={gallery.hasPrev}
        hasNext={gallery.hasNext}
        prevSrc={gallery.prevImage?.src}
        nextSrc={gallery.nextImage?.src}
      />

      {/* Lightbox — realPhotos gallery with navigation */}
      <ImageLightbox
        src={realGalleryCurrentImage?.src || ''}
        alt={realGalleryCurrentImage?.alt || ''}
        isOpen={isRealGalleryOpen}
        onClose={closeRealGallery}
        onPrev={prevRealGallery}
        onNext={nextRealGallery}
        hasPrev={hasRealGalleryPrev}
        hasNext={hasRealGalleryNext}
        prevSrc={realGalleryPrevSrc}
        nextSrc={realGalleryNextSrc}
      />

      {/* Lightbox — strategic sections (maps) */}
      <ImageLightbox
        src={strategicLightbox?.images[strategicLightbox.index]?.src || ''}
        alt={strategicLightbox?.images[strategicLightbox.index]?.alt || ''}
        isOpen={strategicLightbox !== null}
        onClose={closeStrategicLightbox}
        onPrev={prevStrategicLightbox}
        onNext={nextStrategicLightbox}
        hasPrev={strategicLightbox !== null && strategicLightbox.index > 0}
        hasNext={strategicLightbox !== null && strategicLightbox.index < strategicLightbox.images.length - 1}
        prevSrc={strategicLightbox && strategicLightbox.index > 0 ? strategicLightbox.images[strategicLightbox.index - 1]?.src : undefined}
        nextSrc={strategicLightbox && strategicLightbox.index < strategicLightbox.images.length - 1 ? strategicLightbox.images[strategicLightbox.index + 1]?.src : undefined}
      />
    </div>
  );
};

export default ProjectDetail;
