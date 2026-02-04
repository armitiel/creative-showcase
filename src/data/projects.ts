export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  displayMode?: 'cover' | 'centered';
  backgroundColor?: string;
  imageScale?: number;
  gridLayout?: '2x2';
  noMagnifier?: boolean;
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
  retailerImages?: RetailerImage[];
  gifPair?: GifPairItem[];
  parallaxImage?: ParallaxImage;
  challenge?: string;
  solution?: string;
  results?: string;
  typography?: {
    description: string;
    fonts: ProjectFont[];
  };
  colors?: {
    description: string;
    palette: ProjectColor[];
  };
}

export const categories = ['Wszystkie', 'Branding', 'UI/UX', '3D', 'Art'];

export const projects: Project[] = [
  {
    id: 10,
    slug: 'selva-rape',
    title: 'Selva Rapé - Sklep z Rapé',
    category: 'Branding',
    thumbnail: '/projects/selva-rape/devices-mockup.png',
    description: 'Kompleksowy branding i sklep e-commerce dla marki tradycyjnego brazylijskiego Rapé',
    fullDescription: 'Selva to marka sprzedająca tradycyjne brazylijskie Rapé - mieszankę tabaki na bazie ziół, kwiatów, kory drzew i tytoniu (Nicotiana rustica). Projekt obejmował stworzenie kompletnej identyfikacji wizualnej połączonej z naturą i dżunglą, serię etykiet produktowych, integrację sklepu Shopify oraz materiały marketingowe.',
    client: 'Selva',
    year: '2023',
    tools: ['Illustrator', 'Photoshop'],
    theme: 'light',
    challenge: 'Stworzenie brandingu dla produktu z tradycyjnymi korzeniami amazońskimi, który komunikuje autentyczność i połączenie z naturą, jednocześnie będąc nowoczesny i atrakcyjny dla współczesnego odbiorcy.',
    solution: 'Zaprojektowałem identyfikację wizualną opartą na motywach dżungli i natury. Stworzyłem serię kolorowych etykiet produktowych, z których każda reprezentuje inny rodzaj Rapé. Zintegrowałem sklep Shopify z responsywnym designem prezentującym produkty na tle amazońskiej przyrody.',
    results: 'Marka Selva zyskała rozpoznawalny wygląd, który wyróżnia ją na rynku. Sklep e-commerce z intuicyjną nawigacją i profesjonalnym brandingiem zwiększył konwersję sprzedaży.',
    parallaxImage: {
      src: '/projects/selva-rape/box.png',
      alt: 'Selva Yawanawa - Pudełko produktu',
      backgroundImage: '/projects/selva-rape/display.png',
    },
    images: [
      { src: '/projects/selva-rape/logo.png', alt: 'Selva Logo', caption: 'Logo marki Selva z charakterystycznym liściem', displayMode: 'centered', backgroundColor: '#ffffff', imageScale: 0.4 },
      { src: '/projects/selva-rape/brand-elements.png', alt: 'Selva Elementy brandingu', caption: 'Materiały brandingowe z motywami natury', noMagnifier: true },
      { src: '/projects/selva-rape/jungle-banner.png', alt: 'Selva Banner dżungli', caption: 'Hero banner z widokiem amazońskiej dżungli - rzeka płynie w kształcie litery "S" jak SELVA', noMagnifier: true },
    ],
    thumbnailGrid: {
      title: 'System etykiet produktowych',
      description: 'Seria kolorowych etykiet dla różnych rodzajów Rapé - każda z unikalną kolorystyką reprezentującą charakter produktu.',
      images: [
        { src: '/projects/selva-rape/label-yawanawa.png', alt: 'Etykieta Yawanawa' },
        { src: '/projects/selva-rape/label-bobinsana.png', alt: 'Etykieta Bobinsana' },
        { src: '/projects/selva-rape/label-mulatero.png', alt: 'Etykieta Mulatero' },
        { src: '/projects/selva-rape/label-cumaru.png', alt: 'Etykieta Cumaru' },
        { src: '/projects/selva-rape/label-parika.png', alt: 'Etykieta Parika' },
      ],
    },
    typography: {
      description: 'Typografia Selva łączy czytelność z organicznym charakterem marki, podkreślając jej naturalne korzenie i autentyczność.',
      fonts: [
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
        { name: 'Sand Beige', hex: '#D4C5A9', rgb: '212 197 169', cmyk: '0 7 20 17' },
        { name: 'Pure White', hex: '#FFFFFF', rgb: '255 255 255', cmyk: '0 0 0 0' },
      ],
    },
  },
  {
    id: 9,
    slug: 'hubble-rx',
    title: 'HubbleRx - Branding i UI',
    category: 'Branding',
    thumbnail: '/projects/hubble/website-presentation.jpg',
    description: 'Kompleksowy branding i UI design dla platformy subskrypcji medykamentów',
    fullDescription: 'HubbleRx to platforma subskrypcji medykamentów oferująca nielimitowany dostęp do leków w ramach przystępnego abonamentu. Projekt zakładał stworzenie przyjaznego, dostępnego brandingu, który budzi zaufanie użytkowników. Byłem odpowiedzialny za projektowanie serii ilustracji UI, layoutu strony internetowej, animacji do płatnych reklam oraz kompletny branding z logo.',
    client: 'HubbleRx',
    year: '2023',
    tools: ['Illustrator', 'Photoshop', 'Blender', 'Figma', 'After Effects'],
    theme: 'light',
    challenge: 'Stworzenie brandingu dla platformy medycznej, który jednocześnie komunikuje profesjonalizm i bezpieczeństwo, ale pozostaje przyjazny i dostępny dla szerokiego grona użytkowników.',
    solution: 'Zaprojektowałem serię ilustracji w przyjaznym stylu z charakterystycznym turkusowym kolorem marki. Ilustracje przedstawiają proces onboardingu w prosty, zrozumiały sposób. Logo nawiązuje do teleskopu Hubble — symbolizuje odkrywanie i wyszukiwanie najlepszych rozwiązań medycznych dla użytkowników.',
    results: 'Branding skutecznie pozycjonuje HubbleRx jako przyjazną i godną zaufania platformę medyczną. Materiały reklamowe z animacjami znacząco poprawiły konwersję kampanii.',
    images: [
      { src: '/projects/hubble/website-presentation.jpg', alt: 'HubbleRx - Prezentacja strony', caption: 'Kompleksowa prezentacja layoutu strony i elementów UI' },
      { src: '/projects/hubble/logo-full.png', alt: 'HubbleRx Logo', caption: 'Pełna wersja logo marki HubbleRx', displayMode: 'centered', backgroundColor: '#ffffff', imageScale: 0.85 },
      { src: '/projects/hubble/logo-icon.png', alt: 'HubbleRx Logo Icon', caption: 'Znak graficzny marki nawiązujący do teleskopu — symbolizuje odkrywanie i wyszukiwanie najlepszych rozwiązań medycznych', displayMode: 'centered', backgroundColor: '#ffffff', imageScale: 0.5 },
      { src: '/projects/hubble/ui-elements.png', alt: 'HubbleRx UI Elements', caption: 'Ilustracje procesu onboardingu i badge członkowski', displayMode: 'centered', backgroundColor: '#ffffff', imageScale: 0.9 },
      { src: '/projects/hubble/mobile-screens.png', alt: 'HubbleRx Mobile', caption: 'Responsywny design strony na urządzeniach mobilnych' },
    ],
    gifPair: [
      { src: '/projects/hubble/ad-animation.gif', alt: 'HubbleRx Reklama', caption: 'Animacja do płatnej reklamy' },
      { src: '/projects/hubble/ad-animation-2.gif', alt: 'HubbleRx Reklama 2', caption: 'Animacja do płatnej reklamy — częściowo wykonana w Blenderze' },
    ],
    mobileScreens: {
      title: 'Minimalistyczne ilustracje',
      description: 'Seria ilustracji tła z wyspami i miastem przyszłości, tworzących spójną narrację wizualną aplikacji.',
      screens: [
        { src: '/projects/hubble/illustration-1.png', alt: 'HubbleRx Ilustracja 1', caption: 'Ilustracja hero z krajobrazem' },
        { src: '/projects/hubble/illustration-2.png', alt: 'HubbleRx Ilustracja 2', caption: 'Ilustracja z miastem przyszłości' },
      ],
    },
    deviceMockup: {
      title: 'Animowany mockup interfejsu',
      description: 'Prezentacja interakcji użytkownika z interfejsem aplikacji mobilnej HubbleRx.',
      image: '/projects/hubble/mobile-mockup.gif',
      alt: 'HubbleRx App Mockup',
    },
    typography: {
      description: 'System typograficzny HubbleRx wykorzystuje czytelne, zaokrąglone fonty, które podkreślają przyjazny charakter platformy medycznej.',
      fonts: [
        {
          name: 'Nunito',
          usage: 'Headlines & Body',
          weights: [
            { name: 'Bold', sample: 'Unlimited Access to Your Medications' },
            { name: 'SemiBold', sample: 'Individual Membership' },
            { name: 'Regular', sample: 'FREE Medications Up to 21 Day Supply' },
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
    id: 1,
    slug: 'v17-vision-branding',
    title: 'V17 Vision - Identyfikacja Wizualna',
    category: 'Branding',
    thumbnail: '/projects/v17-vision/designing-your-space.jpg',
    description: 'Kompletna identyfikacja wizualna dla studia projektowego specjalizującego się w futurystycznych wnętrzach',
    fullDescription: 'V17 Vision to innowacyjne studio projektowe specjalizujące się w tworzeniu futurystycznych rozwiązań architektonicznych i wnętrzarskich. Marka łączy zaawansowane technologie z organicznymi, płynnymi formami, tworząc przestrzenie wyprzedzające swoją epokę. Projekt brandingowy obejmował logo, identyfikację wizualną, materiały firmowe oraz key visual.',
    client: 'V17 Vision',
    year: '2024',
    tools: ['Illustrator', 'Photoshop', 'Cinema 4D'],
    theme: 'light',
    challenge: 'Klient potrzebował identyfikacji, która komunikuje innowacyjność i przyszłościowe podejście do projektowania przestrzeni. Wyzwaniem było oddanie futurystycznego charakteru przy zachowaniu profesjonalizmu i elegancji.',
    solution: 'Stworzyłem minimalistyczną identyfikację opartą na geometrycznych, trójwymiarowych formach. Logo "V17" wykorzystuje ostre kąty symbolizujące precyzję, a hasło "Designing your space" podkreśla personalizowane podejście do każdego projektu. Biała paleta kolorów z subtelnymi akcentami tworzy wrażenie czystości i nowoczesności.',
    results: 'Branding skutecznie pozycjonuje V17 Vision jako lidera w segmencie premium futurystycznego designu wnętrz. Marka zyskała rozpoznawalność w branży architektonicznej i przyciąga klientów poszukujących innowacyjnych rozwiązań.',
    images: [
      { src: '/projects/v17-vision/designing-your-space.jpg', alt: 'V17 Vision Key Visual', caption: '"Designing your space" - główny motyw reklamowy z double exposure', noMagnifier: true },
      { src: '/projects/v17-vision/logo.png', alt: 'V17 Vision Logo', caption: 'Minimalistyczne logo tekstowe marki', displayMode: 'centered', backgroundColor: '#365065', imageScale: 0.6 },
      { src: '/projects/v17-vision/logo-sign.png', alt: 'V17 Vision Znak graficzny', caption: 'Geometryczny symbol marki', displayMode: 'centered', backgroundColor: '#365065', imageScale: 0.6 },
      { src: '/projects/v17-vision/brand-presentation.jpg', alt: 'V17 Vision Prezentacja brandingu', caption: 'Prezentacja brandingu z ikonami usług', noMagnifier: true },
      { src: '/projects/v17-vision/interior.png', alt: 'V17 Vision Futurystyczne wnętrze', caption: 'Wizualizacja salonu z organicznymi, płynnymi formami', noMagnifier: true },
      { src: '/projects/v17-vision/mousepad.png', alt: 'V17 Vision Materiały firmowe', caption: 'Podkładka pod mysz z brandingiem', noMagnifier: true },
      { src: '/projects/v17-vision/texture.jpg', alt: 'V17 Vision Tekstura 3D', caption: 'Geometryczne tło wykorzystywane w materiałach', noMagnifier: true },
    ],
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
    id: 7,
    slug: 'portal-smart-checkout',
    title: 'Portal - Inteligentna Kasa',
    category: 'UI/UX',
    thumbnail: '/projects/portal/hero-animation.gif',
    description: 'Kompleksowy system weryfikacji wieku klientów z technologią skanowania twarzy - projektowanie UI/UX aplikacji mobilnej i prototypów',
    fullDescription: 'Portal to innowacyjna firma technologiczna specjalizująca się w biometrycznej weryfikacji wieku klientów zakupujących alkohol. System wykorzystuje zaawansowaną technologię skanowania twarzy AI do automatycznej weryfikacji tożsamości. Byłem odpowiedzialny za projektowanie interfejsu użytkownika aplikacji mobilnej, prototypowanie na urządzeniach mobilnych oraz wizualizacje produktu.',
    client: 'Portal',
    year: '2024',
    tools: ['Figma', 'Photoshop', 'After Effects', 'Blender'],
    theme: 'dark',
    challenge: 'Zaprojektowanie intuicyjnego interfejsu dla aplikacji obsługującej weryfikację biometryczną, która musi być jednocześnie bezpieczna, szybka i przyjazna dla użytkownika końcowego oraz sprzedawców.',
    solution: 'Stworzyłem ciemny, nowoczesny interfejs z akcentami w kolorze niebieskim, który komunikuje profesjonalizm i bezpieczeństwo. Aplikacja została zaprojektowana z myślą o szybkiej nawigacji i minimalnej liczbie kroków do weryfikacji wieku.',
    results: 'System osiągnął 98% skuteczności wykrywania fałszywych dokumentów tożsamości, znacznie przewyższając średnią branżową wynoszącą 40%.',
    heroAnimation: '/projects/portal/hero-animation.gif',
    retailerImages: [
      { src: '/projects/portal/retailer-1.png', alt: 'Portal Smart Checkout for Retailers' },
      { src: '/projects/portal/retailer-2.png', alt: 'Portal Integrates with Any Store' },
    ],
    images: [
      { src: '/projects/portal/devices-presentation.png', alt: 'Portal - Prezentacja systemów', caption: 'Dashboard webowy i aplikacja mobilna Portal' },
      { src: '/projects/portal/device-face-scan.png', alt: 'Portal Smart Checkout Device', caption: 'Urządzenie Portal z technologią skanowania twarzy', displayMode: 'centered', backgroundColor: '#0d1117', imageScale: 0.85 },
    ],
    mobileScreens: {
      title: 'Aplikacja mobilna',
      description: 'Projektowałem i prototypowałem interfejs aplikacji mobilnej Portal, umożliwiającej użytkownikom zarządzanie kontem, portfelem i personalizowanymi ofertami.',
      screens: [
        { src: '/projects/portal/app-screen-1.png', alt: 'Portal - Ekran tworzenia profilu', caption: 'Ekran rejestracji' },
        { src: '/projects/portal/app-screen-2.png', alt: 'Portal - Główny feed', caption: 'Feed produktów' },
        { src: '/projects/portal/app-screen-3.png', alt: 'Portal - Dashboard użytkownika', caption: 'Panel użytkownika' },
        { src: '/projects/portal/app-screen-4.png', alt: 'Portal - Ustawienia konta', caption: 'Ustawienia' },
      ],
    },
    deviceMockup: {
      title: 'Urządzenie weryfikacyjne',
      description: 'Portal Smart Checkout to dedykowane urządzenie POS z wbudowaną kamerą do skanowania twarzy, umożliwiające natychmiastową weryfikację wieku klienta.',
      image: '/projects/portal/device-face-scan.png',
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
    id: 2,
    slug: 'aloha-centrum-desk',
    title: 'Aloha Centrum - Biurko Recepcji',
    category: '3D',
    thumbnail: '/projects/aloha-centrum/desk-front.jpg',
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
      { src: '/projects/aloha-centrum/desk-front.jpg', alt: 'Biurko recepcji - widok główny', caption: 'Widok perspektywiczny biurka z organicznym łukiem osłonowym', noMagnifier: true },
      { src: '/projects/aloha-centrum/desk-detail.jpg', alt: 'Biurko recepcji - detal LED', caption: 'Zintegrowane oświetlenie LED w strukturze mebla', noMagnifier: true },
      { src: '/projects/aloha-centrum/desk-close.jpg', alt: 'Biurko recepcji - blat roboczy', caption: 'Blat roboczy z detalami wykończenia', noMagnifier: true },
      { src: '/projects/aloha-centrum/desk-top.jpg', alt: 'Biurko recepcji - widok z góry', caption: 'Widok z góry ukazujący organiczną formę', noMagnifier: true },
    ],
    realPhotos: {
      layout: '2x2' as const,
      title: 'Realizacja projektu',
      images: [
        { src: '/projects/aloha-centrum/real-front.jpg', alt: 'Gotowe biurko - widok główny', noMagnifier: true },
        { src: '/projects/aloha-centrum/real-detail.jpg', alt: 'Gotowe biurko - detal', noMagnifier: true },
        { src: '/projects/aloha-centrum/real-montage.jpg', alt: 'Montaż biurka', noMagnifier: true },
        { src: '/projects/aloha-centrum/real-interior.jpg', alt: 'Biurko we wnętrzu', noMagnifier: true },
      ],
    },
  },
  {
    id: 11,
    slug: 'nfc-card',
    title: 'NFC Card - Wizytówki NFC',
    category: 'Branding',
    thumbnail: '/projects/nfc-card/logo-animation-1.gif',
    description: 'Projektowanie logo i animacji dla innowacyjnych wizytówek NFC',
    fullDescription: 'Projekt wizytówek NFC łączących tradycyjny design z nowoczesną technologią. Wizytówki pozwalają na natychmiastowe udostępnianie danych kontaktowych poprzez zbliżenie telefonu. Byłem odpowiedzialny za projektowanie logo, animacji oraz całego brandingu produktu.',
    client: 'NFC Card',
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
    id: 8,
    slug: 'nft-generative-system',
    title: 'System Generatywny NFT',
    category: 'Art',
    thumbnail: '/projects/nft-system/thumbnail.png',
    description: 'System generowania kolekcji NFT z wykorzystaniem Stable Diffusion i automatyzacji Photoshop',
    fullDescription: 'Projekt polegał na stworzeniu kompleksowego systemu do generowania unikalnych grafik NFT. System opierał się na trenowaniu własnych modeli AI w Stable Diffusion oraz automatyzacji procesu post-produkcji za pomocą akcji Photoshop. Pozwoliło to na szybkie generowanie tysięcy spójnych stylowo grafik.',
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
        { src: '/projects/nft-system/2.png', alt: 'NFT #2' },
        { src: '/projects/nft-system/9.png', alt: 'NFT #9' },
        { src: '/projects/nft-system/14.png', alt: 'NFT #14' },
        { src: '/projects/nft-system/18.png', alt: 'NFT #18' },
        { src: '/projects/nft-system/21.png', alt: 'NFT #21' },
        { src: '/projects/nft-system/22.png', alt: 'NFT #22' },
        { src: '/projects/nft-system/25.png', alt: 'NFT #25' },
        { src: '/projects/nft-system/27.png', alt: 'NFT #27' },
        { src: '/projects/nft-system/34.png', alt: 'NFT #34' },
        { src: '/projects/nft-system/46.png', alt: 'NFT #46' },
      ],
    },
    images: [],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};
