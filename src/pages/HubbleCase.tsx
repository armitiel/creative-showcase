import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { ImageLightbox, useGalleryLightbox } from '@/components/ImageLightbox';
import { Footer } from '@/components/Footer';
import { withBaseUrl } from '@/lib/utils';
import '@/styles/case-hubble.css';

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

interface HubFigDef {
  src: string;
  ratio: string;
  capPl: string;
  capEn: string;
  col: string;
}

/** HubbleRx — flagship case study (per the dedicated handoff design). */
const HubbleCase = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const L = (pl: string, en: string) => (language === 'pl' ? pl : en);

  /* every zoomable image, in page order */
  const zoomables = useMemo(
    () => [
      { src: '/projects/hubble/logo-variants.webp', alt: 'HubbleRx logo lockup' },
      { src: '/projects/hubble/logo-icon.webp', alt: 'Primary mark' },
      { src: '/projects/hubble/logo-3d-icon.webp', alt: '3D variant' },
      { src: '/projects/hubble/box-mockup-zoom.webp', alt: 'Packaging detail' },
      { src: '/projects/hubble/box-mockup.webp', alt: 'Subscription box' },
      { src: '/projects/hubble/website-presentation.webp', alt: 'Website layout' },
      { src: '/projects/hubble/ui-elements.webp', alt: 'Onboarding' },
      { src: '/projects/hubble/hero-illustration.webp', alt: 'Hero illustration' },
      { src: '/projects/hubble/ad-animation.gif', alt: 'Paid ad animation' },
      { src: '/projects/hubble/ad-animation-2.gif', alt: 'Paid ad animation — Blender' },
      { src: '/projects/hubble/mobile-mockup.gif', alt: 'App interaction' },
      { src: '/projects/hubble/mobile-screens.webp', alt: 'App screens' },
    ],
    []
  );
  const lightboxImages = useMemo(
    () => zoomables.map((z) => ({ src: withBaseUrl(z.src), alt: z.alt })),
    [zoomables]
  );
  const { currentImage, isOpen, openAt, close, prev, next, hasPrev, hasNext } = useGalleryLightbox(lightboxImages);
  const zoom = (src: string) => openAt(zoomables.findIndex((z) => z.src === src));

  const meta: [string, string][] = [
    [L('Rola', 'Role'), 'Brand & Product Designer'],
    [L('Klient', 'Client'), 'HubbleRx'],
    [L('Rok', 'Year'), '2025'],
    [L('Czas', 'Duration'), L('8 tygodni', '8 weeks')],
    [L('Zakres', 'Scope'), L('Branding · UI · Ilustracja', 'Branding · UI · Illustration')],
    [L('Narzędzia', 'Tools'), 'Illustrator · Figma · Photoshop · Blender'],
  ];

  const scope: [string, string][] = [
    [L('Strategia marki', 'Brand strategy'), L('Pozycjonowanie tonu — od „klinicznego" do „opiekuńczego, ale precyzyjnego".', "Tone positioning — from 'clinical' to 'caring but precise'.")],
    [L('Tożsamość wizualna', 'Visual identity'), L('Logo, znak, paleta, typografia i zasady użycia spięte w jeden system.', 'Logo, mark, palette, type and usage rules locked into one system.')],
    [L('System UI', 'UI system'), L('Biblioteka komponentów i kluczowe przepływy produktu — od onboardingu po panel.', 'A component library and the core product flows — from onboarding to dashboard.')],
    [L('Ilustracja i packaging', 'Illustration & packaging'), L('Spójny język ilustracji oraz projekt opakowań subskrypcji.', 'A coherent illustration language and the subscription packaging design.')],
  ];

  const steps: [string, string][] = [
    [L('Audyt kategorii', 'Category audit'), L('Przegląd konkurencji i mapa tonu — szukamy przestrzeni na ciepło i ludzki głos.', 'Competitive review and a tone map — finding room for warmth and a human voice.')],
    [L('System wizualny', 'Visual system'), L('Siatka, skala typograficzna, paleta i ikonografia jako fundament skalowalności.', 'Grid, type scale, palette and iconography as the foundation for scale.')],
    [L('Logo i znak', 'Logo & mark'), L('Motyw orbity / „hubble" łączy ideę opieki i precyzji. Warianty i zasady.', "An orbit / 'hubble' motif fuses care and precision. Variants and rules.")],
    [L('Wdrożenie w produkcie', 'Into the product'), L('System przeniesiony na komponenty UI i realne ekrany subskrypcji.', 'The system carried into UI components and real subscription screens.')],
  ];

  const weights: [string, string, string][] = [
    ['black', 'Black', L('Nieograniczony dostęp do leków', 'Unlimited Access to Your Medications')],
    ['bold', 'Bold', L('Członkostwo indywidualne', 'Individual Membership')],
    ['med', 'Medium', L('Recepty dostarczane co miesiąc', 'Prescriptions delivered every month')],
    ['light', 'Light', L('Darmowe leki — zapas do 21 dni', 'FREE Medications up to 21 Day Supply')],
  ];

  const colors: [string, string, string, string][] = [
    ['Hubble Teal', '#0AAEA3', 'RGB 10 174 163', 'CMYK 94 0 31 0'],
    ['Mint Light', '#EAFBF7', 'RGB 234 251 247', 'CMYK 7 0 3 0'],
    ['Text Grey', '#4D4D4D', 'RGB 77 77 77', 'CMYK 0 0 0 70'],
    ['Pure White', '#FFFFFF', 'RGB 255 255 255', 'CMYK 0 0 0 0'],
  ];

  const anns: [string, string][] = [
    [L('Jeden ton głosu', 'One tone of voice'), L('Branding i interfejs mówią tym samym językiem — ta sama paleta, ten sam rytm.', 'Brand and interface speak one language — same palette, same rhythm.')],
    [L('Decyzja w 1 dotyk', '1-tap decisions'), L('Wybór planu i zamówienie skrócone do minimum kroków i pól.', 'Plan choice and reorder reduced to the fewest steps and fields.')],
    [L('Zaufanie przez czytelność', 'Trust through clarity'), L('Hierarchia, kontrast i mikrokopiowanie obniżające niepokój pacjenta.', 'Hierarchy, contrast and microcopy that lower patient anxiety.')],
  ];

  const Fig = ({ def }: { def: HubFigDef }) => (
    <Reveal as="figure" className="hub-fig" style={{ gridColumn: def.col }}>
      <div className="frame" onClick={() => zoom(def.src)}>
        <img
          src={withBaseUrl(def.src)}
          alt={language === 'pl' ? def.capPl : def.capEn}
          loading="lazy"
          style={{ aspectRatio: def.ratio, objectFit: 'cover' }}
        />
      </div>
      <figcaption className="cap">{language === 'pl' ? def.capPl : def.capEn}</figcaption>
    </Reveal>
  );

  const Head = ({ ix, title, lede }: { ix: string; title: string; lede?: string }) => (
    <Reveal className="hub-sec-head">
      <div className="ix">{ix}</div>
      <h2>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </Reveal>
  );

  return (
    <div className="hub">
      <main className="wrap cs">
        <button className="cs-back" onClick={() => navigate('/', { state: { scrollToProjects: true } })}>
          <BackIcon />
          <span>{L('Wszystkie prace', 'All work')}</span>
        </button>

        {/* hero */}
        <div className="cs-head">
          <div className="kicker">Branding & UI — 2025</div>
          <h1 className="cs-title">HubbleRx</h1>
          <p className="cs-sub">
            {L(
              'Kompletny system marki i interfejsu dla platformy subskrypcji farmaceutycznej — od strategii, przez znak, po realne ekrany produktu.',
              'A complete brand and interface system for a pharmaceutical subscription platform — from strategy through the mark to real product screens.'
            )}
          </p>
        </div>

        {/* meta */}
        <Reveal className="cs-meta" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {meta.map((m) => (
            <div key={m[0]}>
              <div className="lbl">{m[0]}</div>
              <div className="v">{m[1]}</div>
            </div>
          ))}
        </Reveal>

        {/* cover */}
        <Reveal className="hub-cover">
          <img src={withBaseUrl('/projects/hubble/logo-variants.webp')} alt="HubbleRx logo lockup" onClick={() => zoom('/projects/hubble/logo-variants.webp')} style={{ cursor: 'zoom-in' }} />
          <div className="cap">{L('Lockup logo — wersja na tle teal i na bieli', 'Logo lockup — teal and light versions')}</div>
        </Reveal>

        {/* challenge / solution */}
        <section className="hub-sec">
          <div className="hub-cs2">
            <Reveal className="panel">
              <h3>{L('Wyzwanie', 'Challenge')}</h3>
              <p>{L('Start-up z branży zdrowotnej chciał wnieść do swojej kategorii ciepło i ludzki ton.', 'A health start-up wanted to bring warmth and a human tone to its category.')}</p>
              <p>{L('Marka musiała budzić zaufanie regulowanego produktu medycznego, a jednocześnie być na tyle przyjazna, by korzystać z niej co miesiąc.', 'The brand had to carry the trust of a regulated medical product while staying friendly enough to use every month.')}</p>
            </Reveal>
            <Reveal className="panel solution">
              <h3>{L('Rozwiązanie', 'Solution')}</h3>
              <p>{L('Jeden skalowalny język wizualny: paleta, typografia, ikonografia i zasady układu spięte w system.', 'One scalable visual language: palette, type, iconography and layout rules locked into a system.')}</p>
              <p>{L('Logo oparte na motywie orbity łączy opiekę i precyzję — i wraca jako rytm w całym interfejsie.', 'A logo built on an orbit motif fuses care and precision — and returns as a rhythm across the interface.')}</p>
            </Reveal>
          </div>
        </section>

        {/* 01 role & scope */}
        <section className="hub-sec">
          <Head
            ix="01"
            title={L('Rola i zakres', 'Role & scope')}
            lede={L('Prowadziłem projekt od pierwszego szkicu po przekazanie gotowych komponentów.', 'I ran the project from the first sketch to handing over ready components.')}
          />
          <div className="hub-scope">
            {scope.map((s, i) => (
              <Reveal key={s[0]} className="item">
                <div className="n">{String(i + 1).padStart(2, '0')}</div>
                <h4>{s[0]}</h4>
                <p>{s[1]}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 02 decision process */}
        <section className="hub-sec">
          <Head
            ix="02"
            title={L('Proces decyzyjny', 'Decision-making')}
            lede={L('Każda decyzja wizualna była podejmowana w kontekście zaufania, czytelności i skalowania.', 'Every visual decision was made in the context of trust, clarity and scale.')}
          />
          <div className="hub-steps">
            {steps.map((s) => (
              <Reveal key={s[0]} className="hub-step">
                <div className="num" />
                <h4>{s[0]}</h4>
                <p>{s[1]}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* statement */}
        <section className="hub-sec">
          <Reveal>
            <p className="hub-statement">
              {L('Dostarczony system to ', 'The delivered system is a ')}
              <em>{L('kompletny język marki', 'complete brand language')}</em>
              {L(', który zespół produktowy rozwija, zachowując jego charakter.', ' the product team grows while keeping its character.')}
            </p>
          </Reveal>
        </section>

        {/* 03 mark & logo */}
        <section className="hub-sec">
          <Head
            ix="03"
            title={L('Znak i logo', 'Mark & logo')}
            lede={L('Znak nawiązuje do teleskopu — symbolizuje odnajdywanie najlepszego rozwiązania medycznego.', 'The mark references a telescope — it symbolizes finding the best medical solution.')}
          />
          <div className="hub-grid">
            <Fig def={{ src: '/projects/hubble/logo-icon.webp', ratio: '1/1', capPl: 'Znak podstawowy', capEn: 'Primary mark', col: 'span 4' }} />
            <Fig def={{ src: '/projects/hubble/logo-3d-icon.webp', ratio: '16/11', capPl: 'Wariant 3D', capEn: '3D variant', col: 'span 8' }} />
            <Fig def={{ src: '/projects/hubble/box-mockup-zoom.webp', ratio: '16/10', capPl: 'Detal opakowania', capEn: 'Packaging detail', col: 'span 7' }} />
            <Fig def={{ src: '/projects/hubble/box-mockup.webp', ratio: '16/11', capPl: 'Pudełko subskrypcji', capEn: 'Subscription box', col: 'span 5' }} />
          </div>
        </section>

        {/* 04 typography */}
        <section className="hub-sec">
          <Head
            ix="04"
            title={L('Typografia', 'Typography')}
            lede={L('System typograficzny oparty na Gotham — geometryczny, nowoczesny, profesjonalny, ale przystępny.', 'A typographic system built on Gotham — geometric, modern, professional yet approachable.')}
          />
          <div className="hub-type">
            <Reveal>
              <div className="face">
                Aa<small>Gotham · Geometric Sans</small>
              </div>
              <div className="glyphs">
                Aa Bb Cc Dd Ee Ff Gg
                <br />0 1 2 3 4 5 6 7 8 9
              </div>
            </Reveal>
            <Reveal className="hub-weights">
              {weights.map((w) => (
                <div key={w[0]} className={`hub-weight ${w[0]}`}>
                  <div className="w">{w[1]}</div>
                  <div className="s">{w[2]}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* 05 colours */}
        <section className="hub-sec">
          <Head
            ix="05"
            title={L('Kolory marki', 'Brand colours')}
            lede={L('Paleta teal na bieli buduje świeże, medyczne wrażenie czystości i zaufania.', 'A teal-on-white palette builds a fresh, medical feeling of cleanliness and trust.')}
          />
          <div className="hub-colors">
            {colors.map((c) => (
              <Reveal key={c[0]} className="hub-swatch">
                <div className="chip" style={{ background: c[1], border: c[1] === '#FFFFFF' ? '1px solid var(--line)' : undefined }} />
                <div className="meta">
                  <div className="name">{c[0]}</div>
                  <div className="code">
                    HEX {c[1]}
                    <br />
                    {c[2]}
                    <br />
                    {c[3]}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 06 identity in use */}
        <section className="hub-sec">
          <Head
            ix="06"
            title={L('Identyfikacja w użyciu', 'Identity in use')}
            lede={L('System przeniesiony na stronę, materiały onboardingowe i komunikację.', 'The system carried into the website, onboarding materials and communication.')}
          />
          <div className="hub-grid">
            <Fig def={{ src: '/projects/hubble/website-presentation.webp', ratio: '16/7', capPl: 'Layout strony i prezentacja UI', capEn: 'Website layout & UI presentation', col: 'span 12' }} />
            <Fig def={{ src: '/projects/hubble/ui-elements.webp', ratio: '16/10', capPl: 'Onboarding — „Jak zacząć"', capEn: "Onboarding — 'How to start'", col: 'span 12' }} />
          </div>
        </section>

        {/* 07 illustrations */}
        <section className="hub-sec">
          <Head
            ix="07"
            title={L('Ilustracje', 'Illustrations')}
            lede={L('Wspólny, minimalistyczny język ilustracji daje przyjemny, nowoczesny charakter materiałom.', 'A shared, minimalist illustration language gives materials a pleasant, modern character.')}
          />
          <div className="hub-grid">
            <Fig def={{ src: '/projects/hubble/hero-illustration.webp', ratio: '16/9', capPl: 'Ilustracja w sekcjach hero', capEn: 'Illustration used in hero sections', col: 'span 12' }} />
            <Fig def={{ src: '/projects/hubble/ad-animation.gif', ratio: '4/5', capPl: 'Animacja do płatnej reklamy', capEn: 'Paid ad animation', col: 'span 6' }} />
            <Fig def={{ src: '/projects/hubble/ad-animation-2.gif', ratio: '4/5', capPl: 'Animacja do płatnej reklamy — częściowo w Blenderze', capEn: 'Paid ad animation — partly made in Blender', col: 'span 6' }} />
          </div>
        </section>

        {/* 08 product & interface */}
        <section className="hub-sec">
          <Head
            ix="08"
            title={L('Produkt i interfejs', 'Product & interface')}
            lede={L('Mockupy pokazane w realnym kontekście — w dłoni i na urządzeniach — z adnotacjami decyzji UX.', 'Mockups shown in real context — in-hand and across devices — annotated with UX decisions.')}
          />
          <Reveal className="hub-ui-hero hub-fig">
            <div className="frame" onClick={() => zoom('/projects/hubble/mobile-mockup.gif')}>
              <img src={withBaseUrl('/projects/hubble/mobile-mockup.gif')} alt="HubbleRx app in hand" style={{ aspectRatio: '16/12', objectFit: 'cover' }} />
            </div>
          </Reveal>
          <div className="hub-ann-list">
            {anns.map((a, i) => (
              <Reveal key={a[0]} className="hub-ann">
                <div className="dot">{i + 1}</div>
                <h4>{a[0]}</h4>
                <p>{a[1]}</p>
              </Reveal>
            ))}
          </div>
          <div className="hub-grid" style={{ marginTop: 'clamp(28px, 3.4vw, 50px)' }}>
            <Fig def={{ src: '/projects/hubble/mobile-screens.webp', ratio: '16/8', capPl: 'Responsywny design na urządzeniach mobilnych', capEn: 'Responsive design across mobile devices', col: 'span 12' }} />
          </div>
        </section>

        {/* quote */}
        <section className="hub-sec">
          <Reveal className="hub-quote">
            <blockquote>
              {L('Poważny temat zasługuje na ', 'A serious topic deserves a ')}
              <span className="mk">{L('miłą formę', 'friendly form')}</span>
              {L(' — kreskówkowa ilustracja zamienia zdrowie w coś bliskiego.', ' — cartoon illustration turns health into something close.')}
            </blockquote>
            <div className="who">{L('Zasada projektu — HubbleRx', 'Project principle — HubbleRx')}</div>
          </Reveal>
        </section>

        {/* next project */}
        <Reveal className="cs-next" onClick={() => navigate('/project/olympus-defence')}>
          <div>
            <div className="nlbl">{L('Następny projekt', 'Next project')}</div>
            <div className="nname">Olympus Defence</div>
          </div>
          <div className="narrow">
            <ArrowIcon />
          </div>
        </Reveal>
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
    </div>
  );
};

export default HubbleCase;
