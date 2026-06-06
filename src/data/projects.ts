export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  displayMode?: 'cover' | 'centered' | 'laptop';
  backgroundColor?: string;
  backgroundGradient?: string;
  imageScale?: number;
  gridLayout?: '2x2';
  noMagnifier?: boolean;
  fullHeight?: boolean;
  objectPosition?: string;
}

export interface GridImageGroup {
  layout: '2x2';
  images: { src: string; alt: string }[];
}

export interface ProjectFont {
  name: string;
  usage: string;
  weights: { name: string; sample: string }[];
}

export interface ProjectColor {
  name: string;
  hex: string;
  rgb: string;
  cmyk?: string;
}

export interface RealPhotosGrid {
  layout: '2x2';
  title?: string;
  images: { src: string; alt: string; noMagnifier?: boolean }[];
}

export interface MobileScreensSection {
  title?: string;
  description?: string;
  screens: { src: string; alt: string; caption?: string }[];
  sectionImages?: { src: string; alt: string; caption?: string; backgroundColor?: string }[];
}

export interface DeviceMockupSection {
  title?: string;
  description?: string;
  image: string;
  alt: string;
}

export interface ThumbnailGrid {
  title?: string;
  description?: string;
  images: { src: string; alt: string }[];
}

export interface RetailerImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface GifPairItem {
  src: string;
  alt: string;
  caption?: string;
  noMagnifier?: boolean;
}

export type ProjectTheme = 'light' | 'dark';

export interface ParallaxImage {
  src: string;
  alt: string;
  title?: string;
  backgroundImage?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  thumbnail: string;
  description: string;
  fullDescription: string;
  client?: string;
  year: string;
  tools: string[];
  images: ProjectImage[];
  theme?: ProjectTheme;
  realPhotos?: RealPhotosGrid;
  mobileScreens?: MobileScreensSection;
  deviceMockup?: DeviceMockupSection;
  thumbnailGrid?: ThumbnailGrid;
  heroAnimation?: string;
  heroFollowImages?: { src: string; alt: string; caption?: string; displayMode?: 'cover' | 'centered'; backgroundColor?: string; imageScale?: number; gridHalf?: boolean }[];
  retailerImages?: RetailerImage[];
  gifPair?: GifPairItem[];
  parallaxImage?: ParallaxImage;
  challenge?: string;
  solution?: string;
  results?: string;
  strategicSections?: { title: string; content: string; images?: GifPairItem[] }[];
  logoConcept?: {
    title?: string;
    description: string;
    image: string;
    alt: string;
  };
  typography?: {
    description: string;
    fonts: ProjectFont[];
    image?: string;
  };
  colors?: {
    description: string;
    palette: ProjectColor[];
  };
  youtubeVideo?: {
    url: string;
    title?: string;
    description?: string;
  };
  externalLink?: { url: string; label?: string };
  hidden?: boolean;
}

 export const categories = ['Wszystkie', 'Branding', 'UI/UX', '3D', 'Art', 'Motion'];

export const projects: Project[] = [
  {
    id: 9,
    slug: 'hubble-rx',
    title: 'HubbleRx - Branding i UI',
    category: 'Branding, Art, UI/UX',
    thumbnail: '/projects/hubble/website-presentation.webp',
    description: 'Kompleksowy branding i UI design dla platformy subskrypcji medykamentów',
    fullDescription: 'HubbleRx to platforma subskrypcji medykamentów oferująca nielimitowany dostęp do leków w ramach przystępnego abonamentu. Projekt zakładał stworzenie przyjaznego, dostępnego brandingu, który budzi zaufanie użytkowników. Byłem odpowiedzialny za projektowanie serii ilustracji UI, layoutu strony internetowej, animacji do płatnych reklam oraz kompletny branding z logo.',
    client: 'HubbleRx',
    year: '2023',
    tools: ['Illustrator', 'Photoshop', 'Blender', 'Figma', 'After Effects'],
    theme: 'light',
    challenge: 'Stworzenie brandingu dla platformy medycznej, który jednocześnie komunikuje profesjonalizm i bezpieczeństwo, ale pozostaje przyjazny i dostępny dla szerokiego grona użytkowników.',
    solution: 'Zaprojektowałem serię ilustracji w przyjaznym stylu z charakterystycznym turkusowym kolorem marki. Ilustracje przedstawiają proces onboardingu w prosty, zrozumiały sposób. Logo nawiązuje do teleskopu Hubble, symbolizuje odkrywanie i wyszukiwanie najlepszych rozwiązań medycznych dla użytkowników.',
    results: 'Branding skutecznie pozycjonuje HubbleRx jako przyjazną i godną zaufania platformę medyczną. Materiały reklamowe z animacjami znacząco poprawiły konwersję kampanii.',
    heroFollowImages: [
      { src: '/projects/hubble/logo-variants.webp', alt: 'HubbleRx Logo Versions', caption: 'Warianty logo, wersja jasna na turkusowym tle i ciemna na białym tle' },
      { src: '/projects/hubble/logo-icon.webp', alt: 'HubbleRx Logo Icon', caption: 'Znak graficzny marki nawiązujący do teleskopu, symbolizuje odkrywanie i wyszukiwanie najlepszych rozwiązań medycznych', displayMode: 'centered', backgroundColor: '#ffffff', imageScale: 0.15, gridHalf: true },

      { src: '/projects/hubble/box-mockup.webp', alt: 'HubbleRx Box Mockup', caption: 'HubbleRx subscription box mockup with capsules', backgroundColor: '#f0f0f0', gridHalf: true },
      { src: '/projects/hubble/box-mockup-zoom.webp', alt: 'HubbleRx Box Mockup Close-up', caption: 'Zbliżenie na pudełko subskrypcyjne z detalami brandingu', backgroundColor: '#f0f0f0', gridHalf: true },
      { src: '/projects/hubble/logo-3d-icon.webp', alt: 'HubbleRx 3D Logo Icon', caption: 'Trójwymiarowa ikona logo HubbleRx', gridHalf: true },
      { src: '/projects/hubble/website-presentation.webp', alt: 'HubbleRx - Prezentacja strony', caption: 'Kompleksowa prezentacja layoutu strony i elementów UI' },
      
      { src: '/projects/hubble/ui-elements.webp', alt: 'HubbleRx UI Elements', caption: 'Ilustracje procesu onboardingu i badge członkowski', displayMode: 'centered', backgroundColor: '#ffffff', imageScale: 0.9 },
    ],
    images: [
      { src: '/projects/hubble/mobile-screens.webp', alt: 'HubbleRx Mobile', caption: 'Responsywny design strony na urządzeniach mobilnych' },
      { src: '/projects/hubble/mobile-membership.gif', alt: 'HubbleRx Mobile Membership', caption: 'Interaktywny interfejs wyboru subskrypcji na urządzeniu mobilnym', displayMode: 'centered', backgroundGradient: 'linear-gradient(to bottom, #c5f0ea 0%, #5ec5b5 50%, #2a9d8f 100%)' },
    ],
    gifPair: [
      { src: '/projects/hubble/ad-animation.gif', alt: 'HubbleRx Reklama', caption: 'Animacja do płatnej reklamy' },
      { src: '/projects/hubble/ad-animation-2.gif', alt: 'HubbleRx Reklama 2', caption: 'Animacja do płatnej reklamy, częściowo wykonana w Blenderze' },
    ],
    mobileScreens: {
      title: 'Minimalistyczne ilustracje',
      description: 'Wspólne elementy wszystkich materiałów marketingowych, nadające przyjemny odbiór z nutką nowoczesności.',
      screens: [],
      sectionImages: [
        { src: '/projects/hubble/hero-illustration.webp', alt: 'HubbleRx Hero Illustration', caption: 'Przykład ilustracji używanej w sekcjach hero', backgroundColor: '#ffffff' },
        // { src: '/projects/hubble/flyer-mockup.webp', alt: 'HubbleRx Flyer Mockup', caption: 'Ulotka reklamowa HubbleRx — Pharmaceutical Subscriptions', backgroundColor: '#f0f0f0' },
      ],
    },
    deviceMockup: {
      title: 'Animowany mockup interfejsu',
      description: 'Prezentacja interakcji użytkownika z interfejsem aplikacji mobilnej HubbleRx.',
      image: '/projects/hubble/mobile-mockup.gif',
      alt: 'HubbleRx App Mockup',
    },
    typography: {
      description: 'System typograficzny HubbleRx opiera się na foncie Gotham, geometrycznym, nowoczesnym kroju, który łączy profesjonalny charakter z przystępnością komunikacji medycznej.',
      fonts: [
        {
          name: 'Gotham',
          usage: 'Headlines & Body',
          weights: [
            { name: 'Black', sample: 'Unlimited Access to Your Medications' },
            { name: 'Medium', sample: 'Individual Membership' },
            { name: 'Light', sample: 'FREE Medications Up to 21 Day Supply' },
          ],
        },
      ],
    },
    colors: {
      description: 'Turkusowa paleta kolorów z białym tłem tworzy świeży, medyczny wygląd budujący zaufanie i komunikujący czystość.',
      palette: [
        { name: 'Hubble Teal', hex: '#00B1A9', rgb: '0 177 169', cmyk: '100 0 5 31' },
        { name: 'Mint Light', hex: '#E9FFFD', rgb: '233 255 253', cmyk: '9 0 1 0' },
        { name: 'Text Gray', hex: '#565656', rgb: '86 86 86', cmyk: '0 0 0 66' },
        { name: 'Pure White', hex: '#FFFFFF', rgb: '255 255 255', cmyk: '0 0 0 0' },
      ],
    },
  },
  {
    id: 11,
    slug: 'olympus-defence',
    title: 'Olympus Defence',
    category: 'Game, Art, 3D, UI/UX, Motion',
    thumbnail: '/projects/olympus-defence/logo.webp',
    description: 'Kompletna oprawa graficzna gry Tower Defence w stylu cartoon. 21 postaci, 36 modeli wieżyczek, 45 map. 3 lata produkcji.',
    fullDescription: 'Olympus Defence to gra typu Tower Defence osadzona w mitologii greckiej, utrzymana w stylizowanym stylu cartoon inspirowanym popularnymi tytułami mobilnymi. Projekt obejmował pełną odpowiedzialność za całość oprawy wizualnej gry: od postaci, przez wieżyczki, mapy, UI, aż po efekty specjalne i przygotowanie assetów do produkcji w Unity.',
    client: 'Olympus Defence',
    year: '2020-2023',
    tools: ['Blender', 'Spine', 'Photoshop', 'Unity', 'Figma'],
    images: [
      { src: '/projects/olympus-defence/logo.webp', alt: 'Olympus Defence Logo', displayMode: 'centered' as const, backgroundColor: '#1a1a2e' },
    ],
    gifPair: [],
    youtubeVideo: {
      url: 'https://www.youtube.com/embed/FCE_9G9Rf5s',
      title: 'Gameplay Trailer',
      description: 'Prezentacja rozgrywki Olympus Defence',
    },
    strategicSections: [
      {
        title: 'Zakres projektu',
        content: 'Pełna odpowiedzialność za całość oprawy wizualnej gry: modelowanie 3D, animacje, compositing, efekty specjalne, UI oraz przygotowanie wszystkich assetów do produkcji w Unity. Projekt budowany od zera, bez wcześniejszych szkiców ani systemu wizualnego.',
      },
      {
        title: 'Charaktery',
        content: '21 unikalnych postaci wymodelowanych w 3D, zanimowanych i przygotowanych do produkcji. Każda postać przeszła pełny pipeline: koncept, modelowanie, rigging, animacja, rendering i compositing w Spine/Blender.',
        images: [
          { src: '/projects/olympus-defence/warrior.gif', alt: 'Warrior character animation', caption: 'Warrior', noMagnifier: true },
          { src: '/projects/olympus-defence/titan.gif', alt: 'Titan boss animation', caption: 'Titan (główny boss)', noMagnifier: true },
          { src: '/projects/olympus-defence/rider.gif', alt: 'Rider character animation', caption: 'Rider', noMagnifier: true },
        ],
      },
      {
        title: 'Wieżyczki',
        content: '12 typów wieżyczek x 3 poziomy ulepszenia = 36 modeli. Każdy model zanimowany ze złożonymi efektami compositingu przygotowanymi pod produkcję w silniku gry.',
        images: [
          { src: '/projects/olympus-defence/tower-zeus.gif', alt: 'Zeus tower level 1', caption: 'Zeus (lv1)', noMagnifier: true },
          { src: '/projects/olympus-defence/tower-burning-oil.gif', alt: 'Burning Oil tower level 2', caption: 'Burning Oil (lv2)', noMagnifier: true },
          { src: '/projects/olympus-defence/tower-archers.webp', alt: 'Archers tower level 2', caption: 'Archers (lv2)', noMagnifier: true },
        ],
      },
      {
        title: 'Mapy',
        content: '3 środowiska map po 15 poziomów = 45 map z unikatowymi modelami dedykowanymi dla danego środowiska.',
        images: [
          { src: '/projects/olympus-defence/map-1-1.webp', alt: 'Środowisko 1 - rzeka i mosty', caption: 'Środowisko 1', noMagnifier: true },
          { src: '/projects/olympus-defence/map-1-2.webp', alt: 'Środowisko 1 - wzgórza', caption: 'Środowisko 1', noMagnifier: true },
          { src: '/projects/olympus-defence/map-2-1.webp', alt: 'Środowisko 2 - wioska', caption: 'Środowisko 2', noMagnifier: true },
          { src: '/projects/olympus-defence/map-2-2.webp', alt: 'Środowisko 2 - zagroda', caption: 'Środowisko 2', noMagnifier: true },
          { src: '/projects/olympus-defence/map-3-1.webp', alt: 'Środowisko 3 - jaskinia', caption: 'Środowisko 3', noMagnifier: true },
          { src: '/projects/olympus-defence/map-3-3.webp', alt: 'Środowisko 3 - ruiny', caption: 'Środowisko 3', noMagnifier: true },
        ],
      },
      {
        title: 'UI',
        content: 'Kompletny interfejs użytkownika gry: ekrany menu, HUD rozgrywki, ekrany ulepszeń, sklep, ekrany wyników. Spójny system wizualny utrzymany w cartoon stylizacji.',
        images: [
          { src: '/projects/olympus-defence/ui-shop.webp', alt: 'Shop screen', caption: 'Shop', noMagnifier: true },
          { src: '/projects/olympus-defence/ui-leaderboard.webp', alt: 'Leaderboard screen', caption: 'Leaderboard', noMagnifier: true },
          { src: '/projects/olympus-defence/daily-quest-1.webp', alt: 'Daily Quests - warrior', caption: 'Daily Quests', noMagnifier: true },
          { src: '/projects/olympus-defence/daily-quest-2.webp', alt: 'Daily Quests - chest', caption: 'Daily Quests', noMagnifier: true },
          { src: '/projects/olympus-defence/daily-quest-3.webp', alt: 'Daily Quests - arena', caption: 'Daily Quests', noMagnifier: true },
        ],
      },
      {
        title: 'Proces i rozwój',
        content: 'Projekt realizowany na przestrzeni 3 lat. W tym czasie nabyłem i rozwinąłem umiejętności: animacje 3D, modelowanie pod produkcję, współpraca z developerem przy integracji w Unity, animacje w Spine jako compositing, compositing w Blenderze, tworzenie dokumentacji pod kątem późniejszych edycji. Codzienne spotkania i omawianie poprawek oraz kolejnych działań. Wiele innowacyjnych rozwiązań dla unikalnych efektów.',
      },
      {
        title: 'Dlaczego to istotne',
        content: 'Ten projekt podsumowuje mój dotychczasowy warsztat. Łączy modelowanie 3D, animację, compositing i produkcję w jednym spójnym pipeline. Pokazuje zdolność do samodzielnego prowadzenia kompleksowej produkcji graficznej na skalę pełnej gry, z regularnymi iteracjami i współpracą z zespołem developerskim.',
      },
    ],
  },
  {
    id: 10,
    slug: 'selva-rape',
    title: 'Selva Rapé - Sklep z Rapé',
    category: 'Branding',
    thumbnail: '/projects/selva-rape/devices-mockup.webp',
    description: 'Kompleksowy branding i sklep e-commerce oparty o Shopify dla marki tradycyjnego brazylijskiego Rapé',
    fullDescription: 'Selva to marka sprzedająca tradycyjne brazylijskie Rapé - mieszankę tabaki na bazie ziół, kwiatów, kory drzew i tytoniu (Nicotiana rustica). Projekt obejmował stworzenie kompletnej identyfikacji wizualnej połączonej z naturą i dżunglą, serię etykiet produktowych oraz budowę i integrację sklepu internetowego opartego o platformę Shopify. Cały frontend sklepu został zaprojektowany z myślą o responsywności i prezentacji produktów na tle amazońskiej przyrody.',
    client: 'Selva',
    year: '2023',
    tools: ['Illustrator', 'Photoshop'],
    theme: 'light',
    challenge: 'Stworzenie brandingu dla produktu z tradycyjnymi korzeniami amazońskimi, który komunikuje autentyczność i połączenie z naturą, jednocześnie będąc nowoczesny i atrakcyjny dla współczesnego odbiorcy.',
    solution: 'Zaprojektowałem identyfikację wizualną opartą na motywach dżungli i natury. Stworzyłem serię kolorowych etykiet produktowych, z których każda reprezentuje inny rodzaj Rapé. Sklep internetowy został zbudowany na platformie Shopify - skonfigurowałem katalog produktów, warianty, płatności i responsywny frontend prezentujący ofertę na tle amazońskiej przyrody.',
    results: 'Marka Selva zyskała rozpoznawalny wygląd, który wyróżnia ją na rynku. Sklep e-commerce z intuicyjną nawigacją i profesjonalnym brandingiem zwiększył konwersję sprzedaży.',
    parallaxImage: {
      src: '/projects/selva-rape/box.webp',
      alt: 'Selva Yawanawa - Pudełko produktu',
      backgroundImage: '/projects/selva-rape/display.webp',
    },
    logoConcept: {
      title: 'Pomysł na logo',
      description: 'Dolna część znaku przyjmuje formę ziemi – fundamentu i stabilnej bazy. Z niej wyrasta listek, symbolizujący życie, wzrost i rozwój.',
      image: '/projects/selva-rape/logo-concept.webp',
      alt: 'Selva - Koncepcja logo',
    },
    images: [
      { src: '/projects/selva-rape/logo.webp', alt: 'Selva Logo', caption: 'Logo marki Selva z charakterystycznym liściem', displayMode: 'centered', backgroundColor: '#ffffff', imageScale: 0.4 },
      { src: '/projects/selva-rape/brand-elements.webp', alt: 'Selva Elementy brandingu', caption: 'Materiały brandingowe z motywami natury', noMagnifier: true, fullHeight: true },
      { src: '/projects/selva-rape/jungle-banner.webp', alt: 'Selva Banner dżungli', caption: 'Hero banner z widokiem amazońskiej dżungli - rzeka płynie w kształcie litery "S" jak SELVA', noMagnifier: true },
      { src: '/projects/selva-rape/product-mockup.webp', alt: 'Selva Yawanawa - Mockup produktu', caption: 'Mockup produktu Yawanawa 10g w ekologicznym opakowaniu', noMagnifier: true },
    ],
    thumbnailGrid: {
      title: 'System etykiet produktowych',
      description: 'Seria kolorowych etykiet dla różnych rodzajów Rapé - każda z unikalną kolorystyką reprezentującą charakter produktu.',
      images: [
        { src: '/projects/selva-rape/label-yawanawa.webp', alt: 'Etykieta Yawanawa' },
        { src: '/projects/selva-rape/label-bobinsana.webp', alt: 'Etykieta Bobinsana' },
        { src: '/projects/selva-rape/label-mulatero.webp', alt: 'Etykieta Mulatero' },
        { src: '/projects/selva-rape/label-cumaru.webp', alt: 'Etykieta Cumaru' },
        { src: '/projects/selva-rape/label-parika.webp', alt: 'Etykieta Parika' },
      ],
    },
    typography: {
      description: 'Typografia Selva łączy czytelność z organicznym charakterem marki, podkreślając jej naturalne korzenie i autentyczność.',
      image: '/projects/selva-rape/fonts-overview.webp',
      fonts: [
        {
          name: 'BowlbyOne Regular',
          usage: 'Logo',
          weights: [
            { name: 'Regular', sample: 'SELVA' },
          ],
        },
        {
          name: 'RumRaisin Regular',
          usage: 'Opakowania',
          weights: [
            { name: 'Regular', sample: 'Yawanawa · Bobinsana · Mulatero' },
          ],
        },
        {
          name: 'Montserrat',
          usage: 'Headlines & Body',
          weights: [
            { name: 'Bold', sample: 'SELVA' },
            { name: 'SemiBold', sample: 'Świeże RAPÉ prosto z Brazylii' },
            { name: 'Regular', sample: 'Tradycyjne mieszanki ziołowe' },
          ],
        },
      ],
    },
    colors: {
      description: 'Paleta kolorów Selva opiera się na naturalnych tonach - głęboka zieleń dżungli, ciepły beż i czysta biel tworzą organiczny, autentyczny wygląd marki.',
      palette: [
        { name: 'Selva Green', hex: '#2D8C3C', rgb: '45 140 60', cmyk: '68 0 57 45' },
        { name: 'Selva Yellow', hex: '#FFEB3B', rgb: '255 235 59', cmyk: '0 8 77 0' },
        { name: 'Sand Beige', hex: '#D4C5A9', rgb: '212 197 169', cmyk: '0 7 20 17' },
        { name: 'Pure White', hex: '#FFFFFF', rgb: '255 255 255', cmyk: '0 0 0 0' },
      ],
    },
  },
  {
    id: 7,
    slug: 'portal-smart-checkout',
    title: 'Portal - Inteligentna Kasa',
    category: 'UI/UX',
    thumbnail: '/projects/portal/hero-animation.gif',
    description: 'Projektowanie UI/UX wieloplatformowego systemu weryfikacji wieku - urządzenie POS, aplikacja mobilna i panel zarządzania na desktop',
    fullDescription: 'Portal to innowacyjna firma technologiczna specjalizująca się w biometrycznej weryfikacji wieku klientów zakupujących alkohol. Platforma składa się z trzech głównych elementów: dedykowanego urządzenia POS ze skanowaniem twarzy, aplikacji mobilnej dla klientów oraz desktopowego systemu zarządzania dla sprzedawców. Byłem odpowiedzialny za projektowanie interfejsów wszystkich trzech platform, prototypowanie oraz wizualizacje produktu.',
    client: 'Portal',
    year: '2024',
    tools: ['Figma', 'Photoshop', 'Blender'],
    theme: 'dark',
    challenge: 'Zaprojektowanie intuicyjnego interfejsu dla aplikacji obsługującej weryfikację biometryczną, która musi być jednocześnie bezpieczna, szybka i przyjazna dla użytkownika końcowego oraz sprzedawców.',
    solution: 'Stworzyłem ciemny, nowoczesny interfejs z akcentami w kolorze niebieskim, który komunikuje profesjonalizm i bezpieczeństwo. Aplikacja została zaprojektowana z myślą o szybkiej nawigacji i minimalnej liczbie kroków do weryfikacji wieku.',
    results: 'System osiągnął 98% skuteczności wykrywania fałszywych dokumentów tożsamości, znacznie przewyższając średnią branżową wynoszącą 40%.',
    heroAnimation: '/projects/portal/hero-animation.gif',
    retailerImages: [
      { src: '/projects/portal/retailer-1.webp', alt: 'Portal Smart Checkout for Retailers', caption: 'Selling Sheet - Smart Checkout for Retailers' },
    ],
    heroFollowImages: [
      { src: '/projects/portal/device-front.webp', alt: 'Portal Smart Checkout Device', caption: 'Urządzenie Portal Smart Checkout z kamerą do skanowania twarzy', displayMode: 'centered' },
      { src: '/projects/portal/age-verification.webp', alt: 'Portal Age Verification', caption: 'Weryfikacja wieku w punkcie sprzedaży' },
    ],
    images: [
      { src: '/projects/portal/devices-presentation.webp', alt: 'Portal - Prezentacja systemów', caption: 'Dashboard webowy i aplikacja mobilna Portal' },
    ],
    mobileScreens: {
      title: 'Aplikacja mobilna',
      description: 'Projektowałem i prototypowałem interfejs aplikacji mobilnej Portal, umożliwiającej użytkownikom zarządzanie kontem, portfelem i personalizowanymi ofertami.',
      screens: [
        { src: '/projects/portal/app-screen-1.webp', alt: 'Portal - Ekran tworzenia profilu', caption: 'Ekran rejestracji' },
        { src: '/projects/portal/app-screen-2.webp', alt: 'Portal - Główny feed', caption: 'Feed produktów' },
        { src: '/projects/portal/app-screen-3.webp', alt: 'Portal - Dashboard użytkownika', caption: 'Panel użytkownika' },
        { src: '/projects/portal/app-screen-4.webp', alt: 'Portal - Ustawienia konta', caption: 'Ustawienia' },
      ],
    },
    deviceMockup: {
      title: 'Urządzenie weryfikacyjne',
      description: 'Portal Smart Checkout to dedykowane urządzenie POS z wbudowaną kamerą do skanowania twarzy, umożliwiające natychmiastową weryfikację wieku klienta.',
      image: '/projects/portal/device-face-scan.webp',
      alt: 'Portal Smart Checkout Device',
    },
    typography: {
      description: 'System typograficzny Portal opiera się na foncie Cabin - nowoczesnym, czytelnym kroju pisma, który zapewnia doskonałą czytelność zarówno na urządzeniach mobilnych jak i terminalach POS.',
      fonts: [
        {
          name: 'Cabin',
          usage: 'Headlines & Body',
          weights: [
            { name: 'Bold', sample: 'Smart Checkout for Retailers' },
            { name: 'SemiBold', sample: 'Verify your Identity' },
            { name: 'Medium', sample: 'Biometric verification system' },
            { name: 'Regular', sample: 'Secure and fast age verification' },
          ],
        },
      ],
    },
    colors: {
      description: 'Ciemna paleta kolorów z akcentami w odcieniach niebieskiego i żółtego komunikuje bezpieczeństwo, profesjonalizm i nowoczesność technologii.',
      palette: [
        { name: 'Primary Blue', hex: '#3A6EF2', rgb: '58 110 242', cmyk: '76 55 0 5' },
        { name: 'Background Dark', hex: '#171D26', rgb: '23 29 38', cmyk: '39 24 0 85' },
        { name: 'Signal Yellow', hex: '#E1AD00', rgb: '225 173 0', cmyk: '0 23 100 12' },
        { name: 'Surface Light', hex: '#374962', rgb: '55 73 98', cmyk: '44 26 0 62' },
        { name: 'Text Primary', hex: '#FFFFFF', rgb: '255 255 255', cmyk: '0 0 0 0' },
      ],
    },
  },
  {
    id: 1,
    slug: 'v17-vision-branding',
    title: 'V17 Vision - Identyfikacja Wizualna',
    category: 'Branding, 3D',
    thumbnail: '/projects/v17-vision/designing-your-space.webp',
    description: 'Kompletna identyfikacja wizualna dla studia projektowego specjalizującego się w futurystycznych wnętrzach',
    fullDescription: 'V17 Vision to innowacyjne studio projektowe specjalizujące się w tworzeniu futurystycznych rozwiązań architektonicznych i wnętrzarskich. Marka łączy zaawansowane technologie z organicznymi, płynnymi formami, tworząc przestrzenie wyprzedzające swoją epokę. Projekt brandingowy obejmował logo, identyfikację wizualną, materiały firmowe oraz key visual.',
    client: 'V17 Vision',
    year: '2020',
    tools: ['Illustrator', 'Photoshop', 'Blender'],
    theme: 'light',
    challenge: 'Klient potrzebował identyfikacji, która komunikuje innowacyjność i przyszłościowe podejście do projektowania przestrzeni. Wyzwaniem było oddanie futurystycznego charakteru przy zachowaniu profesjonalizmu i elegancji.',
    solution: 'Stworzyłem minimalistyczną identyfikację opartą na geometrycznych, trójwymiarowych formach. Logo "V17" wykorzystuje ostre kąty symbolizujące precyzję, a hasło "Designing your space" podkreśla personalizowane podejście do każdego projektu. Biała paleta kolorów z subtelnymi akcentami tworzy wrażenie czystości i nowoczesności.',
    results: 'Branding skutecznie pozycjonuje V17 Vision jako lidera w segmencie premium futurystycznego designu wnętrz. Marka zyskała rozpoznawalność w branży architektonicznej i przyciąga klientów poszukujących innowacyjnych rozwiązań.',
    images: [
      { src: '/projects/v17-vision/designing-your-space.webp', alt: 'V17 Vision Key Visual', caption: '"Designing your space" - główny motyw reklamowy z double exposure', noMagnifier: true },
      { src: '/projects/v17-vision/logo.webp', alt: 'V17 Vision Logo', caption: 'Minimalistyczne logo tekstowe marki', displayMode: 'centered', backgroundColor: '#365065', imageScale: 0.6 },
      { src: '/projects/v17-vision/logo-sign.webp', alt: 'V17 Vision Znak graficzny', caption: 'Geometryczny symbol marki', displayMode: 'centered', backgroundColor: '#365065', imageScale: 0.6 },
      { src: '/projects/v17-vision/brand-presentation.webp', alt: 'V17 Vision Prezentacja brandingu', caption: 'Prezentacja brandingu z ikonami usług', noMagnifier: true },
      { src: '/projects/v17-vision/interior.webp', alt: 'V17 Vision Futurystyczne wnętrze', caption: 'Wizualizacja salonu z organicznymi, płynnymi formami', noMagnifier: true },
      { src: '/projects/v17-vision/interior-render-1.webp', alt: 'V17 Vision Render wnętrza 1', caption: 'Render salonu z futurystyczną ścianą dekoracyjną – mój projekt wizualizacji 3D', noMagnifier: true },
      { src: '/projects/v17-vision/interior-render-2.webp', alt: 'V17 Vision Render wnętrza 2', caption: 'Render przestrzeni dziennej z dynamicznymi formami architektonicznymi – mój projekt wizualizacji 3D', noMagnifier: true },
      { src: '/projects/v17-vision/mousepad.webp', alt: 'V17 Vision Materiały firmowe', caption: 'Podkładka pod mysz z brandingiem', noMagnifier: true },
      { src: '/projects/v17-vision/texture.webp', alt: 'V17 Vision Tekstura 3D', caption: 'Geometryczne tło wykorzystywane w materiałach', noMagnifier: true },
    ],
    youtubeVideo: {
      url: 'https://www.youtube.com/embed/mQ0VXxZZyKI',
      title: 'Prezentacja modelu 3D w Unity',
      description: 'Interaktywna wizualizacja modelu architektonicznego stworzona w silniku Unity – spacer po futurystycznym wnętrzu w czasie rzeczywistym.',
    },
    typography: {
      description: 'Khand został wybrany dla nagłówków, dodając futurystyczny charakter i technologiczną precyzję. Font podkreśla nowoczesność marki i jej innowacyjne podejście do projektowania przestrzeni.',
      fonts: [
        {
          name: 'Khand',
          usage: 'Headlines',
          weights: [
            { name: 'Bold', sample: 'Designing Your Space' },
            { name: 'SemiBold', sample: 'V17 Vision Studio' },
            { name: 'Medium', sample: 'Futuristic Interiors' },
          ],
        },
        {
          name: 'Inter',
          usage: 'Body Text',
          weights: [
            { name: 'Regular', sample: 'Innowacyjne rozwiązania architektoniczne' },
            { name: 'Light', sample: 'Przestrzenie wyprzedzające swoją epokę' },
          ],
        },
      ],
    },
    colors: {
      description: 'Minimalistyczna paleta kolorów oparta na czystej bieli i głębokich odcieniach szarości, podkreślająca futurystyczny i premium charakter marki.',
      palette: [
        { name: 'Pure White', hex: '#FFFFFF', rgb: '255 255 255', cmyk: '0 0 0 0' },
        { name: 'Vision Blue', hex: '#365065', rgb: '54 80 101', cmyk: '47 21 0 60' },
        { name: 'Silver', hex: '#C0C0C0', rgb: '192 192 192', cmyk: '0 0 0 25' },
        { name: 'Dark Gray', hex: '#333333', rgb: '51 51 51', cmyk: '0 0 0 80' },
      ],
    },
  },
  {
    id: 2,
    slug: 'aloha-centrum-desk',
    title: 'Aloha Centrum - Biurko Recepcji',
    category: '3D',
    thumbnail: '/projects/aloha-centrum/desk-front.webp',
    description: 'Futurystyczny projekt biurka recepcji dla centrum pracy ze świadomością - od wizualizacji 3D po nadzór nad wykonaniem CNC',
    fullDescription: 'Projekt futurystycznego biurka recepcji dla "Aloha Centrum" w Szczecinie - innowacyjnego centrum pracy promującego świadomość i mindfulness w środowisku biurowym. Byłem odpowiedzialny za całość grafiki 3D, wizualizacje oraz nadzór nad wykonaniem fizycznego modelu przez 5-osiowe frezowanie CNC. Organiczne, płynne formy mebla łączą funkcjonalność z estetyką przyszłości, tworząc przyjazną przestrzeń dla pierwszego kontaktu z gośćmi.',
    client: 'Aloha Centrum',
    year: '2022',
    tools: ['Photoshop', 'ZBrush', 'Blender'],
    theme: 'dark',
    challenge: 'Stworzenie biurka recepcji, które komunikuje wartości centrum - spokój, świadomość i nowoczesność, jednocześnie będąc w pełni funkcjonalnym stanowiskiem pracy. Projekt musiał być możliwy do wykonania metodą frezowania CNC 5-osiowego.',
    solution: 'Zaprojektowałem organiczną formę z płynnym łukiem osłaniającym stanowisko pracy w programie ZBrush, następnie zoptymalizowałem model pod kątem produkcji CNC w Blenderze. Zintegrowane oświetlenie LED podkreśla futurystyczny charakter, a minimalistyczna kolorystyka w odcieniach bieli i szarości tworzy spokojną atmosferę. Nadzorowałem cały proces wykonania fizycznego modelu.',
    results: 'Projekt został wdrożony jako centralny element recepcji Aloha Centrum, stając się wizytówką przestrzeni i przyciągając uwagę odwiedzających.',
    images: [
      { src: '/projects/aloha-centrum/desk-front.webp', alt: 'Biurko recepcji - widok główny', caption: 'Widok perspektywiczny biurka z organicznym łukiem osłonowym', noMagnifier: true },
      { src: '/projects/aloha-centrum/desk-detail.webp', alt: 'Biurko recepcji - detal LED', caption: 'Zintegrowane oświetlenie LED w strukturze mebla', noMagnifier: true },
      { src: '/projects/aloha-centrum/desk-close.webp', alt: 'Biurko recepcji - blat roboczy', caption: 'Blat roboczy z detalami wykończenia', noMagnifier: true },
      { src: '/projects/aloha-centrum/desk-top.webp', alt: 'Biurko recepcji - widok z góry', caption: 'Widok z góry ukazujący organiczną formę', noMagnifier: true },
    ],
    realPhotos: {
      layout: '2x2' as const,
      title: 'Realizacja projektu',
      images: [
        { src: '/projects/aloha-centrum/real-front.webp', alt: 'Gotowe biurko - widok główny', noMagnifier: true },
        { src: '/projects/aloha-centrum/real-detail.webp', alt: 'Gotowe biurko - detal', noMagnifier: true },
        { src: '/projects/aloha-centrum/real-montage.webp', alt: 'Montaż biurka', noMagnifier: true },
        { src: '/projects/aloha-centrum/real-interior.webp', alt: 'Biurko we wnętrzu', noMagnifier: true },
      ],
    },
  },
  {
    id: 14,
    slug: 'shadow-tagger',
    title: 'Shadow Tagger',
    category: 'Game, Art',
    thumbnail: '/projects/shadow-tagger/logo.webp',
    description: 'Gra platformowa stworzona samodzielnie w Phaser z AI-assisted coding. Kolorowanie murali, ucieczka przed przeciwnikami i gra na czas.',
    fullDescription: 'Shadow Tagger to gra platformowa, którą stworzyłem samodzielnie, od koncepcji, przez grafikę 3D i animacje postaci, po kodowanie z wykorzystaniem AI. Gra oparta jest na silniku Phaser i polega na kolorowaniu numerków na ścianach, tworzeniu murali oraz unikaniu przeciwników. Postacie są modelowane w 3D i animowane, co nadaje grze unikalny, cartoon look. Dzięki AI-assisted coding mam pełną kontrolę nad całym procesem produkcji.',
    client: 'Projekt własny',
    year: '2026',
    tools: ['Phaser', 'Blender', 'AI Coding', 'Photoshop'],
    theme: 'dark',
    externalLink: { url: 'https://www.shadow-tagger.online', label: 'Zagraj / Play' },
    challenge: 'Stworzenie kompletnej gry platformowej jako solo developer, od grafiki 3D i animacji postaci po programowanie rozgrywki i mechanik gry.',
    solution: 'Wykorzystałem Phaser jako silnik gry, Blender do modelowania i animowania postaci 3D, a AI-assisted coding pozwolił mi na pełną kontrolę nad logiką gry. Połączenie tych narzędzi umożliwiło samodzielną produkcję na poziomie studyjnym.',
    results: 'Gra dostępna online z kilkoma trybami rozgrywki, w pełni grywalny produkt stworzony przez jedną osobę.',
    images: [
      { src: '/projects/shadow-tagger/logo.webp', alt: 'Shadow Tagger Logo', displayMode: 'centered' as const, backgroundColor: '#141414', imageScale: 0.6 },
      { src: '/projects/shadow-tagger/gameplay-1.webp', alt: 'Shadow Tagger - Gameplay platformowy', caption: 'Rozgrywka platformowa, unikaj przeciwników i maluj murale', noMagnifier: true },
      { src: '/projects/shadow-tagger/gameplay-2.webp', alt: 'Shadow Tagger - Malowanie muralu', caption: 'System kolorowania numerków, maluj mural kolor po kolorze', noMagnifier: true },
      { src: '/projects/shadow-tagger/gameplay-3.webp', alt: 'Shadow Tagger - Eksploracja', caption: 'Eksploracja poziomów z drabinami i muralami do odkrycia', noMagnifier: true },
    ],
    strategicSections: [
      {
        title: 'Tryby gry',
        content: 'Gra oferuje kilka trybów rozgrywki: kolorowanie murali przez numerki, ucieczka przed przeciwnikami, układanie drabin do trudno dostępnych miejsc oraz gra na czas. Każdy tryb wymaga innego podejścia taktycznego.',
      },
      {
        title: 'Postacie 3D',
        content: 'Wszystkie postacie w grze są modelowane w 3D w Blenderze i animowane, co nadaje grze unikalny cartoon look. Pipeline obejmuje modelowanie, rigging, animację i rendering sprite\'ów do silnika Phaser.',
      },
      {
        title: 'AI-Assisted Development',
        content: 'Wykorzystuję AI do wspomagania procesu kodowania, co pozwala mi jako grafikowi mieć pełną kontrolę nad całym procesem produkcji gry, od koncepcji wizualnej po działający kod. To pokazuje, jak AI demokratyzuje game development.',
      },
    ],
  },
  {
    id: 8,
    slug: 'nft-generative-system',
    title: 'System Generatywny NFT',
    category: 'Art',
    thumbnail: '/projects/nft-system/cover-card.webp',
    description: 'Mój pierwszy proces trenowania modelu AI, dobór stylu obrysów, akcentów i detali na zamówienie klienta',
    fullDescription: 'Był to mój pierwszy proces trenowania własnego modelu AI w Stable Diffusion. Projekt polegał na odpowiednim doborze stylu obrysów, akcentów kolorystycznych i detali graficznych, dostosowanych do wymagań klienta. Dzięki automatyzacji post-produkcji w Photoshopie udało się wygenerować tysiące spójnych stylowo grafik NFT.',
    client: 'Projekt NFT',
    year: '2023',
    tools: ['Stable Diffusion', 'Photoshop'],
    theme: 'dark',
    challenge: 'Wygenerowanie dużej kolekcji unikalnych grafik NFT przy zachowaniu spójności stylistycznej. Każda grafika musiała być wyjątkowa, ale jednocześnie rozpoznawalna jako część tej samej kolekcji.',
    solution: 'Wytrenowałem własne modele AI w Stable Diffusion na specjalnie przygotowanym zbiorze danych. Następnie stworzyłem serię zautomatyzowanych akcji Photoshop do post-produkcji - korekty kolorów, dodawania efektów i finalizacji grafik.',
    results: 'System pozwolił na wygenerowanie ponad 10,000 unikalnych grafik w spójnym stylu, znacznie przyspieszając proces tworzenia kolekcji NFT.',
    thumbnailGrid: {
      title: 'Wygenerowane grafiki',
      description: 'Przykładowe wyniki z systemu generatywnego - każda grafika jest unikalna, ale zachowuje spójność stylistyczną całej kolekcji.',
      images: [
        { src: '/projects/nft-system/ee.webp', alt: 'NFT Character #1' },
        { src: '/projects/nft-system/ee2.webp', alt: 'NFT Character #2' },
        { src: '/projects/nft-system/ee4.webp', alt: 'NFT Character #3' },
        { src: '/projects/nft-system/ee5.webp', alt: 'NFT Character #4' },
        { src: '/projects/nft-system/ee6.webp', alt: 'NFT Character #5' },
        { src: '/projects/nft-system/ee7.webp', alt: 'NFT Character #6' },
        { src: '/projects/nft-system/ee8.webp', alt: 'NFT Character #7' },
        { src: '/projects/nft-system/ee9.webp', alt: 'NFT Character #8' },
        { src: '/projects/nft-system/ee10.webp', alt: 'NFT Character #9' },
        { src: '/projects/nft-system/ee11.webp', alt: 'NFT Character #10' },
      ],
    },
    images: [],
  },
  {
    id: 15,
    slug: 'atomic-cherry',
    title: 'Atomic Cherry',
    subtitle: 'Slot Machine',
    category: 'Game, Art',
    thumbnail: '/projects/atomic-cherry/logo.webp',
    description: 'Kompletna oprawa graficzna gry slotowej: animowane symbole, splash screeny i interfejs maszyny.',
    fullDescription: 'Atomic Cherry to gra slotowa typu slot machine z dynamiczną mechaniką i bogatą oprawą wizualną. Projekt obejmował tworzenie wszystkich elementów graficznych gry: animowanych symboli, splash screenów promocyjnych, ekranów bonusowych oraz kompletnego interfejsu maszyny do gry.',
    client: 'Huuge Games',
    year: '2021',
    tools: ['Photoshop', 'Spine', 'Illustrator'],
    logoConcept: {
      title: 'Logo',
      description: 'Logo gry Atomic Cherry łączy klasyczną stylistykę slotów z nowoczesnym, kolorowym designem.',
      image: '/projects/atomic-cherry/logo.webp',
      alt: 'Atomic Cherry Logo',
    },
    images: [
      { src: '/projects/atomic-cherry/splash.webp', alt: 'Atomic Cherry Splash Screen', displayMode: 'cover' as const, noMagnifier: true },
      { src: '/projects/atomic-cherry/slot-machine.webp', alt: 'Atomic Cherry Slot Machine', caption: 'Maszyna slotowa - gameplay', noMagnifier: true },
      { src: '/projects/atomic-cherry/free-spins.webp', alt: 'Atomic Cherry Free Spins', caption: 'Ekran bonusowy Free Spins', noMagnifier: true },
    ],
    gifPair: [
      { src: '/projects/atomic-cherry/cherry-symbol.gif', alt: 'Cherry symbol animation', caption: 'Cherry', noMagnifier: true },
      { src: '/projects/atomic-cherry/seven-symbol.gif', alt: 'Seven symbol animation', caption: 'Siódemka', noMagnifier: true },
      { src: '/projects/atomic-cherry/bar5-symbol.gif', alt: 'BAR 5 symbol animation', caption: 'BAR 5', noMagnifier: true },
    ],
    strategicSections: [
      {
        title: 'Animowane symbole',
        content: 'Każdy symbol gry został zaprojektowany w Illustratorze i zanimowany w Spine. Animacje nadają grze dynamiczny, przyciągający wzrok charakter typowy dla nowoczesnych gier slotowych.',
      },
      {
        title: 'Splash screeny i promocje',
        content: 'Ekrany powitalne i promocyjne zaprojektowane tak, aby natychmiast przyciągnąć uwagę gracza. Splash screen prezentuje logo gry na tle charakterystycznego wzoru z motywem atomu.',
      },
    ],
    youtubeVideo: {
      url: 'https://www.youtube.com/embed/J9SEVBRJBeY',
      title: 'Gameplay',
      description: 'Prezentacja rozgrywki Atomic Cherry',
    },
  },
  {
    id: 6,
    slug: 'nfc-card',
    title: 'Digital Card - Wizytówki NFC',
    category: 'Motion',
    thumbnail: '/projects/nfc-card/logo-animation-1.gif',
    description: 'Projektowanie logo i animacji dla innowacyjnych wizytówek NFC',
    fullDescription: 'Projekt wizytówek NFC łączących tradycyjny design z nowoczesną technologią. Wizytówki pozwalają na natychmiastowe udostępnianie danych kontaktowych poprzez zbliżenie telefonu. Byłem odpowiedzialny za projektowanie logo, animacji oraz całego brandingu produktu.',
    client: 'Digital Card',
    year: '2024',
    tools: ['Illustrator', 'After Effects', 'Photoshop'],
    theme: 'dark',
    challenge: 'Stworzenie brandingu dla innowacyjnego produktu technologicznego, który komunikuje nowoczesność i łatwość użycia wizytówek NFC.',
    solution: 'Zaprojektowałem minimalistyczne logo z animacjami podkreślającymi technologiczny charakter produktu. Animacje wizualizują działanie technologii NFC - transfer danych przy zbliżeniu urządzeń.',
    results: 'Branding skutecznie pozycjonuje produkt jako nowoczesne rozwiązanie dla profesjonalistów ceniących innowacje w networkingu.',
    gifPair: [
      { src: '/projects/nfc-card/logo-animation-1.gif', alt: 'NFC Card Logo Animation', caption: 'Animacja logo z efektem transferu danych', noMagnifier: true },
      { src: '/projects/nfc-card/logo-animation-2.gif', alt: 'NFC Card Animation', caption: 'Animacja wizualizująca działanie technologii NFC', noMagnifier: true },
    ],
    images: [
      { src: '/projects/nfc-card/logo.webp', alt: 'Digital Card Logo', caption: 'Projekt logo Digital Card', noMagnifier: true },
      { src: '/projects/nfc-card/logo-animation-1.gif', alt: 'NFC Card Logo', caption: 'Główna animacja logo marki', noMagnifier: true },
    ],
    colors: {
      description: 'Nowoczesna paleta kolorów oparta na kontrastach - głęboka czerń z akcentami podkreślającymi technologiczny charakter produktu.',
      palette: [
        { name: 'Deep Black', hex: '#0a0a0a', rgb: '10 10 10', cmyk: '0 0 0 96' },
        { name: 'Tech Blue', hex: '#00A3FF', rgb: '0 163 255', cmyk: '100 36 0 0' },
        { name: 'Pure White', hex: '#FFFFFF', rgb: '255 255 255', cmyk: '0 0 0 0' },
      ],
    },
  },
  {
    id: 13,
    slug: 'graffiti',
    title: 'Graffiti',
    subtitle: 'Character Art',
    category: 'Art',
    thumbnail: '/projects/graffiti/doctor.webp',
    description: 'Wieloletnia pasja malowania stylizowanych postaci na ścianach, pojazdach i billboardach w technice graffiti.',
    fullDescription: 'Przez lata moją pasją jest malowanie postaci w technice graffiti pod pseudonimem Mr.Max. Specjalizuję się w stylizacji i malowaniu charakterystycznych postaci, karykaturalnych, dynamicznych i pełnych ekspresji. Każda praca to unikalna kompozycja łącząca cartoon aesthetics z uliczną energią, malowana sprayem na ścianach, ciężarówkach, billboardach i innych powierzchniach.',
    year: '2015-2025',
    tools: ['Spray paint'],
    externalLink: { url: 'https://www.facebook.com/max.oc.crew/', label: 'Mr.Max on Facebook' },
    images: [
      { src: '/projects/graffiti/manners.webp', alt: 'Manners - character mural', caption: 'Manners', noMagnifier: true },
      { src: '/projects/graffiti/graffi-tea.webp', alt: 'Graffi Tea - character mural', caption: 'Graffi Tea', noMagnifier: true, objectPosition: 'center 60%' },
      { src: '/projects/graffiti/max-taste.webp', alt: 'Max Taste - billboard mural', caption: 'Max Taste', noMagnifier: true, objectPosition: 'center 30%' },
      { src: '/projects/graffiti/doctor.webp', alt: 'Doctor character mural', caption: 'Doctor', noMagnifier: true },
      { src: '/projects/graffiti/truck.webp', alt: 'Truck mural', caption: 'Truck piece', noMagnifier: true },
      { src: '/projects/graffiti/architect.webp', alt: 'Architect character mural', caption: 'Architect', noMagnifier: true },
      { src: '/projects/graffiti/trash-king.webp', alt: 'Trash King mural', caption: 'Trash King', noMagnifier: true, objectPosition: 'center 30%' },
      { src: '/projects/graffiti/mural-1.webp', alt: 'Indoor character mural', caption: 'Indoor mural', noMagnifier: true },
      { src: '/projects/graffiti/angel.webp', alt: 'Angel character mural', caption: 'Angel', noMagnifier: true },
    ],
    strategicSections: [
      {
        title: 'Stylizowane postacie',
        content: 'Każda postać to unikalna karykatura z wyrazistymi proporcjami, dynamicznymi pozami i charakterystycznym stylem. Proces twórczy zaczyna się od szkicu koncepcyjnego, a kończy na wielogodzinnym malowaniu sprayem.',
      },
      {
        title: 'Różnorodne powierzchnie',
        content: 'Murale powstają na ścianach budynków, ciężarówkach, billboardach, wnętrzach lokali, każda powierzchnia stawia inne wyzwania techniczne i kompozycyjne.',
      },
    ],
  },
  {
    id: 12,
    slug: 'tsq-portal',
    hidden: true,
    title: 'TSQ Portal – Kalkulator inwestycji',
    category: 'UI/UX',
    thumbnail: '/projects/tsq-portal/thumbnail.webp',
    description: 'Landing page i aplikacja webowa dla TSQ Investment Group: kalkulator inwestycji, symulacje zysków i zarządzanie zespołem',
    fullDescription: 'Projekt łączy stronę promocyjną z panelem użytkownika – od ekranów intro i tutoriali po dashboard z wykresami, chatbotem AI i materiałami szkoleniowymi. Po stronie wizualnej: spójny layout, responsywność, wykresy (Recharts), animacje (Rive) i dopracowany UX (Tailwind CSS). Chatbot AI połączony jest z bazą wiedzy tworzoną na bieżąco ze szkoleń o projekcie.',
    client: 'TSQ Investment Group',
    year: '2025',
    tools: ['React', 'Node.js', 'Express', 'Prisma', 'Supabase', 'JWT', 'Recharts', 'Tailwind CSS', 'Rive', 'Photoshop'],
    theme: 'light',
    challenge: 'Stworzenie kompleksowej platformy inwestycyjnej z kalkulatorem zysków, systemem zarządzania zespołem, chatbotem AI i modułem szkoleniowym w stylu Instagram Stories.',
    solution: 'Zaprojektowałem spójny interfejs łączący landing page z panelem użytkownika. Stworzyłem interaktywny kalkulator inwestycji z wizualizacjami wykresów. Chatbot AI odpowiada na pytania dzięki integracji z bazą wiedzy. Moduł Stories prowadzi użytkowników przez proces inwestycji.',
    results: 'Platforma skutecznie prezentuje możliwości inwestycyjne i automatyzuje onboarding nowych użytkowników dzięki intuicyjnemu interfejsowi.',
    deviceMockup: {
      title: 'Landing page',
      description: 'Główny ekran strony promocyjnej TSQ Investment Group z dynamicznym hero section i wezwaniem do działania.',
      image: '/projects/tsq-portal/screen-desktop.webp',
      alt: 'TSQ Portal Desktop View',
    },
    images: [
      { src: '/projects/tsq-portal/hero-desktop.webp', alt: 'TSQ Portal Hero Desktop', caption: 'Landing page – widok hero section z dynamicznym wezwaniem do działania', noMagnifier: true, displayMode: 'laptop' as const },
      { src: '/projects/tsq-portal/insta-stories.webp', alt: 'TSQ Stories Module', caption: 'Moduł Stories inspirowany Instagramem - prowadzi użytkowników przez proces inwestycji krok po kroku', noMagnifier: true, displayMode: 'centered' as const, backgroundColor: '#d5d5d5', imageScale: 0.85 },
      { src: '/projects/tsq-portal/ai-chat.webp', alt: 'TSQ AI Assistant', caption: 'Asystent AI połączony z bazą wiedzy - odpowiada na pytania dotyczące projektu i inwestycji', displayMode: 'centered' as const, backgroundColor: '#1a1625', imageScale: 0.9 },
    ],
    mobileScreens: {
      title: 'Aplikacja mobilna',
      description: 'Responsywny design na urządzeniach mobilnych - od landing page, przez generator wizytówek, po kalkulator inwestycji.',
      screens: [
        { src: '/projects/tsq-portal/mobile-1.webp', alt: 'TSQ Mobile Footer', caption: 'Stopka - mobilna wersja landing page' },
        { src: '/projects/tsq-portal/mobile-2.webp', alt: 'TSQ Mobile Card Generator', caption: 'Generator wizytówek dla agentów' },
        { src: '/projects/tsq-portal/mobile-3.webp', alt: 'TSQ Mobile Calculator', caption: 'Kalkulator sygnałów i symulacja zysków' },
      ],
    },
    typography: {
      description: 'Nowoczesny system typograficzny z czytelnym fontem bezszeryfowym, zapewniający doskonałą czytelność na wszystkich urządzeniach.',
      fonts: [
        {
          name: 'Inter',
          usage: 'Headlines & Body',
          weights: [
            { name: 'Bold', sample: 'Dobrei Meu Capital de Investimento' },
            { name: 'SemiBold', sample: 'Registre-se Gratuitamente' },
            { name: 'Regular', sample: 'O programa funciona com base em transações reais' },
          ],
        },
      ],
    },
    colors: {
      description: 'Energetyczna paleta kolorów z dominującym niebieskim, budząca zaufanie i komunikująca profesjonalizm w branży finansowej.',
      palette: [
        { name: 'TSQ Blue', hex: '#2563EB', rgb: '37 99 235', cmyk: '84 58 0 8' },
        { name: 'Purple Accent', hex: '#8B5CF6', rgb: '139 92 246', cmyk: '44 63 0 4' },
        { name: 'White', hex: '#FFFFFF', rgb: '255 255 255', cmyk: '0 0 0 0' },
        { name: 'Dark Navy', hex: '#1E3A5F', rgb: '30 58 95', cmyk: '68 39 0 63' },
      ],
    },
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};
