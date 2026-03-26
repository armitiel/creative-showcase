import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Paintbrush } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ImageLightbox, useGalleryLightbox } from '@/components/ImageLightbox';
import { illustrationCategories } from '@/data/illustrations';
import { withBaseUrl } from '@/lib/utils';

const Illustrations = () => {
  const { t, language } = useLanguage();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  // Build flat list of all images across all categories for gallery navigation
  const allImages = useMemo(() =>
    illustrationCategories.flatMap(cat =>
      cat.items.map(item => ({ src: withBaseUrl(item.src), alt: item.alt }))
    ), []);

  const { currentImage, isOpen, openAt, close, prev, next, hasPrev, hasNext } = useGalleryLightbox(allImages);

  return (
    <>
      <div className="min-h-screen bg-[#f0f0f0]">
        {/* Navigation Bar — identical to ProjectDetail light theme */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-md bg-[#f0f0f0]/80 border-border shadow-black/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link
                to="/"
                state={{ scrollToProjects: true }}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
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

        {/* Hero Section — matching ProjectDetail style */}
        <section 
          ref={heroRef}
          className={`pt-24 pb-12 opacity-0 ${heroVisible ? 'animate-fade-in' : ''}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                {language === 'pl' ? 'Ilustracje' : 'Illustrations'}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Poppins'] text-foreground">
                {language === 'pl' ? 'Ilustracje' : 'Illustrations'}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {language === 'pl'
                  ? 'Grafika wektorowa, stylizowane ilustracje i umiejętność pracy w różnych stylach, od cartoon po realistyczne.'
                  : 'Vector graphics, stylized illustrations and the ability to work in various styles, from cartoon to realistic.'}
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Paintbrush className="h-4 w-4" />
                  <span>Adobe Illustrator, Adobe Photoshop</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Sections */}
        {(() => {
          let globalIndex = 0;
          return illustrationCategories.map((category) => {
            const startIndex = globalIndex;
            globalIndex += category.items.length;
            return (
              <IllustrationSection
                key={category.id}
                category={category}
                language={language}
                onImageClick={(index) => openAt(startIndex + index)}
              />
            );
          });
        })()}

        {/* Footer */}
        <footer className="py-12 border-t border-border">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <Link to="/">
              <Button variant="outline" size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.projectDetail.backToPortfolio}
              </Button>
            </Link>
          </div>
        </footer>
      </div>

      {/* Lightbox with navigation */}
      {currentImage && (
        <ImageLightbox
          src={currentImage.src}
          alt={currentImage.alt}
          isOpen={isOpen}
          onClose={close}
          onPrev={prev}
          onNext={next}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />
      )}
    </>
  );
};

interface IllustrationSectionProps {
  category: typeof illustrationCategories[0];
  language: string;
  onImageClick: (indexInCategory: number) => void;
}

const IllustrationSection = ({ category, language, onImageClick }: IllustrationSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  const title = language === 'pl' ? category.titlePl : category.titleEn;
  const description = language === 'pl' ? category.descriptionPl : category.descriptionEn;

  return (
    <section className="pb-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-normal mb-3 font-['Righteous']">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {category.tools.map((tool) => (
              <Badge key={tool} variant="outline" className="text-xs border-border text-muted-foreground">
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div
          ref={ref}
          className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
        >
          {category.items.map((item, index) => (
            <div
              key={item.src}
              className={`break-inside-avoid group cursor-zoom-in rounded-2xl overflow-hidden bg-secondary border border-border/50 hover:border-primary/30 transition-all duration-300 opacity-0 shadow-sm hover:shadow-lg ${
                isVisible ? 'animate-scale-in' : ''
              }`}
              style={{ animationDelay: isVisible ? `${index * 80}ms` : '0ms' }}
              onClick={() => onImageClick(index)}
            >
              <div className="overflow-hidden">
                <img loading="lazy"
                  src={withBaseUrl(item.src)}
                  alt={item.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {(language === 'pl' ? item.captionPl : item.captionEn) && (
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    {language === 'pl' ? item.captionPl : item.captionEn}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Illustrations;
