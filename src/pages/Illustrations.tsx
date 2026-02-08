import { Link } from 'react-router-dom';
import { ArrowLeft, Paintbrush } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ImageLightbox, useLightbox } from '@/components/ImageLightbox';
import { illustrationCategories } from '@/data/illustrations';
import { withBaseUrl } from '@/lib/utils';
import logo from '@/assets/logo.png';

const Illustrations = () => {
  const { t, language } = useLanguage();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { lightboxImage, openLightbox, closeLightbox } = useLightbox();

  return (
    <div className="min-h-screen bg-background bg-noise">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <img src={logo} alt="Amitiel Angelisme" className="h-8 w-auto" />
            </Link>
            <div className="flex items-center gap-4">
              <h1 className="text-sm font-medium text-foreground hidden sm:block">
                {language === 'pl' ? 'Ilustracje' : 'Illustrations'}
              </h1>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div
          ref={heroRef}
          className={`container mx-auto px-4 md:px-8 text-center opacity-0 ${heroVisible ? 'animate-fade-in' : ''}`}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Paintbrush className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              {language === 'pl' ? 'Ilustracje' : 'Illustrations'}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 font-['Righteous']">
            {language === 'pl' ? 'Ilustracje ' : 'Illustration '}
            <span className="text-gradient">
              {language === 'pl' ? '& Art' : '& Art'}
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {language === 'pl'
              ? 'Grafika wektorowa, stylizowane ilustracje i umiejętność pracy w różnych stylach — od cartoon po realistyczne.'
              : 'Vector graphics, stylized illustrations and the ability to work in various styles — from cartoon to realistic.'}
          </p>
        </div>
      </section>

      {/* Category Sections */}
      {illustrationCategories.map((category) => (
        <IllustrationSection
          key={category.id}
          category={category}
          language={language}
          onImageClick={openLightbox}
        />
      ))}

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

      {/* Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          isOpen={!!lightboxImage}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

interface IllustrationSectionProps {
  category: typeof illustrationCategories[0];
  language: string;
  onImageClick: (src: string, alt: string) => void;
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
              onClick={() => onImageClick(withBaseUrl(item.src), item.alt)}
            >
              <div className="overflow-hidden">
                <img
                  src={withBaseUrl(item.src)}
                  alt={item.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {item.caption && (
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    {item.caption}
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
