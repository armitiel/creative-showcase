import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { ImageLightbox, useGalleryLightbox } from '@/components/ImageLightbox';
import { Footer } from '@/components/Footer';
import { illustrationCategories } from '@/data/illustrations';
import { withBaseUrl } from '@/lib/utils';

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);

const Illustrations = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const allImages = useMemo(
    () =>
      illustrationCategories.flatMap((cat) =>
        cat.items.map((item) => ({ src: withBaseUrl(item.src), alt: item.alt }))
      ),
    []
  );

  const { currentImage, isOpen, openAt, close, prev, next, hasPrev, hasNext } = useGalleryLightbox(allImages);

  let globalIndex = 0;

  return (
    <>
      <main className="wrap cs">
        <button className="cs-back" onClick={() => navigate('/', { state: { scrollTo: 'work' } })}>
          <BackIcon />
          <span>{t.projectDetail.backToPortfolio}</span>
        </button>

        <div className="cs-head">
          <div className="kicker">{t.illustrations.kicker}</div>
          <h1 className="cs-title">{t.illustrations.title}</h1>
          <p className="cs-sub">{t.illustrations.lead}</p>
        </div>

        {illustrationCategories.map((category) => {
          const startIndex = globalIndex;
          globalIndex += category.items.length;
          const title = language === 'pl' ? category.titlePl : category.titleEn;
          const description = language === 'pl' ? category.descriptionPl : category.descriptionEn;

          return (
            <Reveal key={category.id} className="cs-section">
              <div className="section-head" style={{ marginBottom: 18 }}>
                <h2 style={{ fontSize: 'clamp(26px, 4vw, 52px)' }}>{title}</h2>
                <div className="section-num">{category.tools.join(' · ')}</div>
              </div>
              {description && <p className="cs-section-desc">{description}</p>}
              <div className="masonry">
                {category.items.map((item, index) => {
                  const caption = language === 'pl' ? item.captionPl : item.captionEn;
                  return (
                    <figure className="cs-fig" key={item.src}>
                      <div className="media natural" onClick={() => openAt(startIndex + index)} role="button">
                        <img src={withBaseUrl(item.src)} alt={item.alt} loading="lazy" />
                      </div>
                      {caption && <figcaption>{caption}</figcaption>}
                    </figure>
                  );
                })}
              </div>
            </Reveal>
          );
        })}
      </main>

      <Footer />

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

export default Illustrations;
