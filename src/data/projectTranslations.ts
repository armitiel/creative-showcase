import { Language } from '@/i18n/translations';

interface ProjectTranslation {
  title: string;
  description: string;
  fullDescription: string;
  challenge?: string;
  solution?: string;
  results?: string;
  typographyDescription?: string;
  colorsDescription?: string;
  realPhotosTitle?: string;
  mobileScreensTitle?: string;
  mobileScreensDescription?: string;
  deviceMockupTitle?: string;
  deviceMockupDescription?: string;
  thumbnailGridTitle?: string;
  thumbnailGridDescription?: string;
  // Image captions by index
  imageCaptions?: Record<number, string>;
  // Mobile screen captions by index
  mobileScreenCaptions?: Record<number, string>;
  // GIF pair captions by index
  gifPairCaptions?: Record<number, string>;
  // Hero follow image captions by index
  heroFollowImageCaptions?: Record<number, string>;
  // Section image captions by index (in mobileScreens)
  sectionImageCaptions?: Record<number, string>;
  // YouTube video
  youtubeVideoTitle?: string;
  youtubeVideoDescription?: string;
  // Strategic sections
  strategicSections?: { title: string; content: string; images?: { src: string; alt: string; caption?: string }[] }[];
  // Logo concept
  logoConceptTitle?: string;
  logoConceptDescription?: string;
  // Typography font usage labels
  typographyFontUsages?: Record<number, string>;
  // Typography font weight samples
  typographyFontSamples?: Record<string, string>;
}

type ProjectTranslations = Record<string, Record<Language, ProjectTranslation>>;

export const projectTranslations: ProjectTranslations = {
  'nfc-card': {
    pl: {
      title: 'Digital Card - Wizytówki NFC',
      description: 'Projektowanie logo i animacji dla innowacyjnych wizytówek NFC',
      fullDescription: 'Projekt wizytówek NFC łączących tradycyjny design z nowoczesną technologią. Wizytówki pozwalają na natychmiastowe udostępnianie danych kontaktowych poprzez zbliżenie telefonu. Byłem odpowiedzialny za projektowanie logo, animacji oraz całego brandingu produktu.',
      challenge: 'Stworzenie brandingu dla innowacyjnego produktu technologicznego, który komunikuje nowoczesność i łatwość użycia wizytówek NFC.',
      solution: 'Zaprojektowałem minimalistyczne logo z animacjami podkreślającymi technologiczny charakter produktu. Animacje wizualizują działanie technologii NFC - transfer danych przy zbliżeniu urządzeń.',
      results: 'Branding skutecznie pozycjonuje produkt jako nowoczesne rozwiązanie dla profesjonalistów ceniących innowacje w networkingu.',
      colorsDescription: 'Nowoczesna paleta kolorów oparta na kontrastach - głęboka czerń z akcentami podkreślającymi technologiczny charakter produktu.',
      gifPairCaptions: {
        0: 'Animacja logo z efektem transferu danych',
        1: 'Animacja wizualizująca działanie technologii NFC',
      },
    },
    en: {
      title: 'Digital Card - NFC Business Cards',
      description: 'Logo design and animations for innovative NFC business cards',
      fullDescription: 'NFC business card project combining traditional design with modern technology. The cards allow instant sharing of contact information by tapping a phone. I was responsible for designing the logo, animations, and the entire product branding.',
      challenge: 'Creating branding for an innovative tech product that communicates modernity and ease of use of NFC business cards.',
      solution: 'I designed a minimalist logo with animations emphasizing the technological character of the product. The animations visualize NFC technology - data transfer when devices are brought together.',
      results: 'The branding effectively positions the product as a modern solution for professionals who value innovation in networking.',
      colorsDescription: 'A modern color palette based on contrasts - deep black with accents emphasizing the technological character of the product.',
      gifPairCaptions: {
        0: 'Logo animation with data transfer effect',
        1: 'Animation visualizing NFC technology in action',
      },
    },
  },
  'selva-rape': {
    pl: {
      title: 'Selva Rapé - Sklep z Rapé',
      description: 'Kompleksowy branding i sklep e-commerce oparty o Shopify dla marki tradycyjnego brazylijskiego Rapé',
      fullDescription: 'Selva to marka sprzedająca tradycyjne brazylijskie Rapé - mieszankę tabaki na bazie ziół, kwiatów, kory drzew i tytoniu (Nicotiana rustica). Projekt obejmował stworzenie kompletnej identyfikacji wizualnej połączonej z naturą i dżunglą, serię etykiet produktowych oraz budowę i integrację sklepu internetowego opartego o platformę Shopify. Cały frontend sklepu został zaprojektowany z myślą o responsywności i prezentacji produktów na tle amazońskiej przyrody.',
      challenge: 'Stworzenie brandingu dla produktu z tradycyjnymi korzeniami amazońskimi, który komunikuje autentyczność i połączenie z naturą, jednocześnie będąc nowoczesny i atrakcyjny dla współczesnego odbiorcy.',
      solution: 'Zaprojektowałem identyfikację wizualną opartą na motywach dżungli i natury. Stworzyłem serię kolorowych etykiet produktowych, z których każda reprezentuje inny rodzaj Rapé. Sklep internetowy został zbudowany na platformie Shopify - skonfigurowałem katalog produktów, warianty, płatności i responsywny frontend prezentujący ofertę na tle amazońskiej przyrody.',
      results: 'Marka Selva zyskała rozpoznawalny wygląd, który wyróżnia ją na rynku. Sklep e-commerce z intuicyjną nawigacją i profesjonalnym brandingiem zwiększył konwersję sprzedaży.',
      typographyDescription: 'Typografia Selva łączy czytelność z organicznym charakterem marki, podkreślając jej naturalne korzenie i autentyczność.',
      colorsDescription: 'Paleta kolorów Selva opiera się na naturalnych tonach - głęboka zieleń dżungli, ciepły beż i czysta biel tworzą organiczny, autentyczny wygląd marki.',
      thumbnailGridTitle: 'System etykiet produktowych',
      thumbnailGridDescription: 'Seria kolorowych etykiet dla różnych rodzajów Rapé - każda z unikalną kolorystyką reprezentującą charakter produktu.',
      logoConceptTitle: 'Pomysł na logo',
      logoConceptDescription: 'Dolna część znaku przyjmuje formę ziemi – fundamentu i stabilnej bazy. Z niej wyrasta listek, symbolizujący życie, wzrost i rozwój.',
      typographyFontUsages: { 1: 'Opakowania' },
      typographyFontSamples: {
        'Świeże RAPÉ prosto z Brazylii': 'Świeże RAPÉ prosto z Brazylii',
        'Tradycyjne mieszanki ziołowe': 'Tradycyjne mieszanki ziołowe',
      },
      imageCaptions: {
        0: 'Logo marki Selva z charakterystycznym liściem',
        1: 'Materiały brandingowe z motywami natury',
        2: 'Hero banner z widokiem amazońskiej dżungli - rzeka płynie w kształcie litery "S" jak SELVA',
        3: 'Mockup produktu Yawanawa 10g w ekologicznym opakowaniu',
      },
    },
    en: {
      title: 'Selva Rapé - Rapé Shop',
      description: 'Comprehensive branding and Shopify-based e-commerce store for a traditional Brazilian Rapé brand',
      fullDescription: 'Selva is a brand selling traditional Brazilian Rapé - a tobacco blend based on herbs, flowers, tree bark, and tobacco (Nicotiana rustica). The project included creating a complete visual identity connected with nature and the jungle, a series of product labels, and building a fully integrated e-commerce store powered by the Shopify platform. The entire store frontend was designed with responsiveness in mind, showcasing products against the backdrop of Amazonian nature.',
      challenge: 'Creating branding for a product with traditional Amazonian roots that communicates authenticity and connection with nature while being modern and attractive to contemporary audiences.',
      solution: 'I designed a visual identity based on jungle and nature motifs. I created a series of colorful product labels, each representing a different type of Rapé. The online store was built on the Shopify platform - I configured the product catalog, variants, payments, and a responsive frontend presenting the offer against the backdrop of Amazonian nature.',
      results: 'The Selva brand gained a recognizable look that sets it apart in the market. The e-commerce store with intuitive navigation and professional branding increased sales conversion.',
      typographyDescription: 'Selva\'s typography combines readability with the organic character of the brand, emphasizing its natural roots and authenticity.',
      colorsDescription: 'Selva\'s color palette is based on natural tones - deep jungle green, warm beige, and pure white create an organic, authentic brand look.',
      thumbnailGridTitle: 'Product Label System',
      thumbnailGridDescription: 'A series of colorful labels for different types of Rapé - each with unique colors representing the product\'s character.',
      logoConceptTitle: 'Logo Concept',
      logoConceptDescription: 'The lower part of the mark takes the form of earth – a foundation and stable base. From it grows a leaf, symbolizing life, growth and development.',
      typographyFontUsages: { 1: 'Packaging' },
      typographyFontSamples: {
        'Świeże RAPÉ prosto z Brazylii': 'Fresh RAPÉ straight from Brazil',
        'Tradycyjne mieszanki ziołowe': 'Traditional herbal blends',
      },
      imageCaptions: {
        0: 'Selva brand logo with a distinctive leaf motif',
        1: 'Branding materials with nature-inspired motifs',
        2: 'Hero banner with Amazonian jungle view - the river flows in an "S" shape like SELVA',
        3: 'Yawanawa 10g product mockup in eco-friendly packaging',
      },
    },
  },
  'v17-vision-branding': {
    pl: {
      title: 'V17 Vision - Identyfikacja Wizualna',
      description: 'Kompletna identyfikacja wizualna dla studia projektowego specjalizującego się w futurystycznych wnętrzach',
      fullDescription: 'V17 Vision to innowacyjne studio projektowe specjalizujące się w tworzeniu futurystycznych rozwiązań architektonicznych i wnętrzarskich. Marka łączy zaawansowane technologie z organicznymi, płynnymi formami, tworząc przestrzenie wyprzedzające swoją epokę. Projekt brandingowy obejmował logo, identyfikację wizualną, materiały firmowe oraz key visual.',
      challenge: 'Klient potrzebował identyfikacji, która komunikuje innowacyjność i przyszłościowe podejście do projektowania przestrzeni. Wyzwaniem było oddanie futurystycznego charakteru przy zachowaniu profesjonalizmu i elegancji.',
      solution: 'Stworzyłem minimalistyczną identyfikację opartą na geometrycznych, trójwymiarowych formach. Logo "V17" wykorzystuje ostre kąty symbolizujące precyzję, a hasło "Designing your space" podkreśla personalizowane podejście do każdego projektu. Biała paleta kolorów z subtelnymi akcentami tworzy wrażenie czystości i nowoczesności.',
      results: 'Branding skutecznie pozycjonuje V17 Vision jako lidera w segmencie premium futurystycznego designu wnętrz. Marka zyskała rozpoznawalność w branży architektonicznej i przyciąga klientów poszukujących innowacyjnych rozwiązań.',
      typographyDescription: 'Khand został wybrany dla nagłówków, dodając futurystyczny charakter i technologiczną precyzję. Font podkreśla nowoczesność marki i jej innowacyjne podejście do projektowania przestrzeni.',
      colorsDescription: 'Minimalistyczna paleta kolorów oparta na czystej bieli i głębokich odcieniach szarości, podkreślająca futurystyczny i premium charakter marki.',
      imageCaptions: {
        0: '"Designing your space" - główny motyw reklamowy z double exposure',
        1: 'Minimalistyczne logo tekstowe marki',
        2: 'Geometryczny symbol marki',
        3: 'Prezentacja brandingu z ikonami usług',
        4: 'Wizualizacja salonu z organicznymi, płynnymi formami',
        5: 'Render salonu z futurystyczną ścianą dekoracyjną – mój projekt wizualizacji 3D',
        6: 'Render przestrzeni dziennej z dynamicznymi formami architektonicznymi – mój projekt wizualizacji 3D',
        7: 'Podkładka pod mysz z brandingiem',
        8: 'Geometryczne tło wykorzystywane w materiałach',
      },
      youtubeVideoTitle: 'Prezentacja modelu 3D w Unity',
      youtubeVideoDescription: 'Interaktywna wizualizacja modelu architektonicznego stworzona w silniku Unity – spacer po futurystycznym wnętrzu w czasie rzeczywistym.',
    },
    en: {
      title: 'V17 Vision - Visual Identity',
      description: 'Complete visual identity for a design studio specializing in futuristic interiors',
      fullDescription: 'V17 Vision is an innovative design studio specializing in creating futuristic architectural and interior solutions. The brand combines advanced technologies with organic, fluid forms, creating spaces ahead of their time. The branding project included logo, visual identity, corporate materials, and key visual.',
      challenge: 'The client needed an identity that communicates innovation and a forward-thinking approach to space design. The challenge was to capture the futuristic character while maintaining professionalism and elegance.',
      solution: 'I created a minimalist identity based on geometric, three-dimensional forms. The "V17" logo uses sharp angles symbolizing precision, and the tagline "Designing your space" emphasizes a personalized approach to each project. A white color palette with subtle accents creates an impression of purity and modernity.',
      results: 'The branding effectively positions V17 Vision as a leader in the premium futuristic interior design segment. The brand has gained recognition in the architectural industry and attracts clients seeking innovative solutions.',
      typographyDescription: 'Khand was chosen for headlines, adding futuristic character and technological precision. The font emphasizes the brand\'s modernity and innovative approach to space design.',
      colorsDescription: 'A minimalist color palette based on pure white and deep shades of gray, emphasizing the futuristic and premium character of the brand.',
      imageCaptions: {
        0: '"Designing your space" - main advertising motif with double exposure',
        1: 'Minimalist text logo of the brand',
        2: 'Geometric brand symbol',
        3: 'Branding presentation with service icons',
        4: 'Living room visualization with organic, fluid forms',
        5: 'Living room render with futuristic decorative wall – my 3D visualization project',
        6: 'Living space render with dynamic architectural forms – my 3D visualization project',
        7: 'Mousepad with branding',
        8: 'Geometric background used in materials',
      },
      youtubeVideoTitle: '3D Model Presentation in Unity',
      youtubeVideoDescription: 'Interactive visualization of an architectural model created in the Unity engine – a real-time walkthrough of a futuristic interior.',
    },
  },
  'aloha-centrum-desk': {
    pl: {
      title: 'Aloha Centrum - Biurko Recepcji',
      description: 'Futurystyczny projekt biurka recepcji dla centrum pracy ze świadomością - od wizualizacji 3D po nadzór nad wykonaniem CNC',
      fullDescription: 'Projekt futurystycznego biurka recepcji dla "Aloha Centrum" w Szczecinie - innowacyjnego centrum pracy promującego świadomość i mindfulness w środowisku biurowym. Byłem odpowiedzialny za całość grafiki 3D, wizualizacje oraz nadzór nad wykonaniem fizycznego modelu przez 5-osiowe frezowanie CNC. Organiczne, płynne formy mebla łączą funkcjonalność z estetyką przyszłości, tworząc przyjazną przestrzeń dla pierwszego kontaktu z gośćmi.',
      challenge: 'Stworzenie biurka recepcji, które komunikuje wartości centrum - spokój, świadomość i nowoczesność, jednocześnie będąc w pełni funkcjonalnym stanowiskiem pracy. Projekt musiał być możliwy do wykonania metodą frezowania CNC 5-osiowego.',
      solution: 'Zaprojektowałem organiczną formę z płynnym łukiem osłaniającym stanowisko pracy w programie ZBrush, następnie zoptymalizowałem model pod kątem produkcji CNC w Blenderze. Zintegrowane oświetlenie LED podkreśla futurystyczny charakter, a minimalistyczna kolorystyka w odcieniach bieli i szarości tworzy spokojną atmosferę. Nadzorowałem cały proces wykonania fizycznego modelu.',
      results: 'Projekt został wdrożony jako centralny element recepcji Aloha Centrum, stając się wizytówką przestrzeni i przyciągając uwagę odwiedzających.',
      realPhotosTitle: 'Realizacja projektu',
      imageCaptions: {
        0: 'Widok perspektywiczny biurka z organicznym łukiem osłonowym',
        1: 'Zintegrowane oświetlenie LED w strukturze mebla',
        2: 'Blat roboczy z detalami wykończenia',
        3: 'Widok z góry ukazujący organiczną formę',
      },
    },
    en: {
      title: 'Aloha Centrum - Reception Desk',
      description: 'Futuristic reception desk design for a mindful workspace center - from 3D visualization to CNC manufacturing supervision',
      fullDescription: 'A futuristic reception desk project for "Aloha Centrum" in Szczecin - an innovative work center promoting mindfulness in the office environment. I was responsible for all 3D graphics, visualizations, and supervision of the physical model production through 5-axis CNC milling. The organic, fluid forms of the furniture combine functionality with futuristic aesthetics, creating a welcoming space for first contact with guests.',
      challenge: 'Creating a reception desk that communicates the center\'s values - calm, mindfulness, and modernity, while being a fully functional workstation. The design had to be feasible for 5-axis CNC milling production.',
      solution: 'I designed an organic form with a fluid arc shielding the workstation in ZBrush, then optimized the model for CNC production in Blender. Integrated LED lighting emphasizes the futuristic character, and minimalist coloring in shades of white and gray creates a calm atmosphere. I supervised the entire physical model production process.',
      results: 'The project was implemented as the central element of Aloha Centrum\'s reception, becoming the showcase of the space and attracting visitors\' attention.',
      realPhotosTitle: 'Project Realization',
      imageCaptions: {
        0: 'Perspective view of the desk with organic protective arc',
        1: 'Integrated LED lighting in the furniture structure',
        2: 'Work surface with finishing details',
        3: 'Top view showing the organic form',
      },
    },
  },
  'portal-smart-checkout': {
    pl: {
      title: 'Portal - Inteligentna Kasa',
      description: 'Projektowanie UI/UX wieloplatformowego systemu weryfikacji wieku - urządzenie POS, aplikacja mobilna i panel zarządzania na desktop',
      fullDescription: 'Portal to innowacyjna firma technologiczna specjalizująca się w biometrycznej weryfikacji wieku klientów zakupujących alkohol. Platforma składa się z trzech głównych elementów: dedykowanego urządzenia POS ze skanowaniem twarzy, aplikacji mobilnej dla klientów oraz desktopowego systemu zarządzania dla sprzedawców. Byłem odpowiedzialny za projektowanie interfejsów wszystkich trzech platform, prototypowanie oraz wizualizacje produktu.',
      challenge: 'Zaprojektowanie intuicyjnego interfejsu dla aplikacji obsługującej weryfikację biometryczną, która musi być jednocześnie bezpieczna, szybka i przyjazna dla użytkownika końcowego oraz sprzedawców.',
      solution: 'Stworzyłem ciemny, nowoczesny interfejs z akcentami w kolorze niebieskim, który komunikuje profesjonalizm i bezpieczeństwo. Aplikacja została zaprojektowana z myślą o szybkiej nawigacji i minimalnej liczbie kroków do weryfikacji wieku.',
      results: 'System osiągnął 98% skuteczności wykrywania fałszywych dokumentów tożsamości, znacznie przewyższając średnią branżową wynoszącą 40%.',
      typographyDescription: 'System typograficzny Portal opiera się na foncie Cabin - nowoczesnym, czytelnym kroju pisma, który zapewnia doskonałą czytelność zarówno na urządzeniach mobilnych jak i terminalach POS.',
      colorsDescription: 'Ciemna paleta kolorów z akcentami w odcieniach niebieskiego i żółtego komunikuje bezpieczeństwo, profesjonalizm i nowoczesność technologii.',
      mobileScreensTitle: 'Aplikacja mobilna',
      mobileScreensDescription: 'Projektowałem i prototypowałem interfejs aplikacji mobilnej Portal, umożliwiającej użytkownikom zarządzanie kontem, portfelem i personalizowanymi ofertami.',
      deviceMockupTitle: 'Urządzenie weryfikacyjne',
      deviceMockupDescription: 'Portal Smart Checkout to dedykowane urządzenie POS z wbudowaną kamerą do skanowania twarzy, umożliwiające natychmiastową weryfikację wieku klienta.',
      heroFollowImageCaptions: {
        0: 'Urządzenie Portal Smart Checkout z kamerą do skanowania twarzy',
        1: 'Weryfikacja wieku w punkcie sprzedaży',
      },
      imageCaptions: {
        0: 'Dashboard webowy i aplikacja mobilna Portal',
      },
      mobileScreenCaptions: {
        0: 'Ekran rejestracji',
        1: 'Feed produktów',
        2: 'Panel użytkownika',
        3: 'Ustawienia',
      },
    },
    en: {
      title: 'Portal - Smart Checkout',
      description: 'UI/UX design for a multi-platform age verification system - POS device, mobile app and desktop management panel',
      fullDescription: 'Portal is an innovative technology company specializing in biometric age verification for customers purchasing alcohol. The platform consists of three main components: a dedicated POS device with face scanning, a mobile app for customers, and a desktop management system for retailers. I was responsible for designing the interfaces across all three platforms, prototyping, and product visualizations.',
      challenge: 'Designing an intuitive interface for an application handling biometric verification that must be simultaneously secure, fast, and user-friendly for both end users and retailers.',
      solution: 'I created a dark, modern interface with blue accents that communicates professionalism and security. The application was designed with quick navigation and minimal steps for age verification in mind.',
      results: 'The system achieved 98% effectiveness in detecting fake identity documents, significantly exceeding the industry average of 40%.',
      typographyDescription: 'Portal\'s typographic system is based on the Cabin font - a modern, readable typeface that ensures excellent legibility on both mobile devices and POS terminals.',
      colorsDescription: 'A dark color palette with blue and yellow accents communicates security, professionalism, and technological modernity.',
      mobileScreensTitle: 'Mobile Application',
      mobileScreensDescription: 'I designed and prototyped the Portal mobile application interface, enabling users to manage their account, wallet, and personalized offers.',
      deviceMockupTitle: 'Verification Device',
      deviceMockupDescription: 'Portal Smart Checkout is a dedicated POS device with a built-in face scanning camera, enabling instant customer age verification.',
      heroFollowImageCaptions: {
        0: 'Portal Smart Checkout device with face scanning camera',
        1: 'Age verification at point of sale',
      },
      imageCaptions: {
        0: 'Web dashboard and Portal mobile application',
      },
      mobileScreenCaptions: {
        0: 'Registration screen',
        1: 'Product feed',
        2: 'User dashboard',
        3: 'Settings',
      },
    },
  },
  'nft-generative-system': {
    pl: {
      title: 'System Generatywny NFT',
      description: 'Mój pierwszy proces trenowania modelu AI — dobór stylu obrysów, akcentów i detali na zamówienie klienta',
      fullDescription: 'Był to mój pierwszy proces trenowania własnego modelu AI w Stable Diffusion. Projekt polegał na odpowiednim doborze stylu obrysów, akcentów kolorystycznych i detali graficznych, dostosowanych do wymagań klienta. Dzięki automatyzacji post-produkcji w Photoshopie udało się wygenerować tysiące spójnych stylowo grafik NFT.',
      challenge: 'Wygenerowanie dużej kolekcji unikalnych grafik NFT przy zachowaniu spójności stylistycznej. Każda grafika musiała być wyjątkowa, ale jednocześnie rozpoznawalna jako część tej samej kolekcji.',
      solution: 'Wytrenowałem własne modele AI w Stable Diffusion na specjalnie przygotowanym zbiorze danych. Następnie stworzyłem serię zautomatyzowanych akcji Photoshop do post-produkcji - korekty kolorów, dodawania efektów i finalizacji grafik.',
      results: 'System pozwolił na wygenerowanie ponad 10,000 unikalnych grafik w spójnym stylu, znacznie przyspieszając proces tworzenia kolekcji NFT.',
      thumbnailGridTitle: 'Wygenerowane grafiki',
      thumbnailGridDescription: 'Przykładowe wyniki z systemu generatywnego - każda grafika jest unikalna, ale zachowuje spójność stylistyczną całej kolekcji.',
    },
    en: {
      title: 'NFT Generative System',
      description: 'My first AI model training process — selecting outline styles, accents and details tailored to client requirements',
      fullDescription: 'This was my first experience training a custom AI model in Stable Diffusion. The project focused on carefully selecting outline styles, color accents, and graphic details tailored to the client\'s specific requirements. With automated post-production in Photoshop, the system generated thousands of stylistically consistent NFT graphics.',
      challenge: 'Generating a large collection of unique NFT graphics while maintaining stylistic consistency. Each graphic had to be unique yet recognizable as part of the same collection.',
      solution: 'I trained custom AI models in Stable Diffusion on a specially prepared dataset. Then I created a series of automated Photoshop actions for post-production - color correction, adding effects, and finalizing graphics.',
      results: 'The system enabled the generation of over 10,000 unique graphics in a consistent style, significantly accelerating the NFT collection creation process.',
      thumbnailGridTitle: 'Generated Graphics',
      thumbnailGridDescription: 'Sample results from the generative system - each graphic is unique but maintains stylistic consistency with the entire collection.',
    },
  },
  'hubble-rx': {
    pl: {
      title: 'HubbleRx - Branding i UI',
      description: 'Budowa kompletnego systemu marki od fundamentów dla platformy subskrypcji farmaceutycznych',
      fullDescription: 'HubbleRx to platforma subskrypcji medykamentów wchodząca na konkurencyjny rynek USA. Firma nie miała wcześniej żadnego systemu wizualnego, architektury informacji ani fundamentu marki. Otrzymałem pełną odpowiedzialność za zbudowanie całego systemu od zera: od strategii marki, przez projektowanie logo i ilustracji, po layout strony, animacje reklamowe i materiały produktowe.',
      challenge: 'Platformy medyczne operują w przestrzeni, gdzie każdy element komunikacji wpływa na decyzję użytkownika. Brak spójnego systemu wizualnego oznacza brak zaufania. Brak zaufania oznacza brak konwersji. HubbleRx potrzebował fundamentu, który pozwoli skalować komunikację w wielu kanałach: od strony internetowej, przez reklamy płatne, po materiały produktowe.',
      solution: 'Punkt wyjścia: zbudować fundament zaufania przez spójność. Kolor turkusowy został wybrany strategicznie, kojarzy się z medycyną, czystością i dostępnością. System ilustracji upraszcza złożone procesy (onboarding, subskrypcja) do zrozumiałych kroków wizualnych. Logo nawiązuje do teleskopu Hubble, metafora odkrywania najlepszych rozwiązań medycznych.',
      results: 'Materiały reklamowe z animacjami znacząco poprawiły konwersję kampanii. Spójny system wizualny umożliwił szybkie skalowanie komunikacji do nowych kanałów bez konieczności każdorazowego projektowania od zera.',
      strategicSections: [
        {
          title: 'Moja rola i zakres odpowiedzialności',
          content: 'Pełna odpowiedzialność za budowę systemu wizualnego od podstaw: strategia marki, projektowanie logo, system ilustracji, architektura informacji strony internetowej, layout UI, animacje reklamowe, materiały produktowe. Brak wcześniejszych szkiców, wytycznych ani briefu kreatywnego, wszystkie decyzje projektowe podejmowane samodzielnie.',
        },
        {
          title: 'Proces decyzyjny',
          content: 'Każdy element był projektowany pod kątem konwersji i skalowalności. Typografia (Gotham): geometryczna, czytelna, budująca autorytet. Paleta kolorów: ograniczona do 3 kluczowych barw, zapewniająca rozpoznawalność w każdym kanale. Ilustracje: system modularny, możliwy do rozbudowy bez utraty spójności.',
        },
        {
          title: 'Rozwiązanie systemowe',
          content: 'Dostarczony system obejmuje: kompletny branding (logo, warianty, znak graficzny), system ilustracji UI, responsywny layout strony internetowej, animacje do kampanii płatnych (częściowo realizowane w Blenderze), materiały produktowe (mockupy opakowań) oraz architekturę informacji wspierającą ścieżkę konwersji użytkownika.',
        },
        {
          title: 'Dlaczego to istotne dla biznesu?',
          content: 'Projekt demonstruje zdolność do budowy kompletnego systemu marki od fundamentów, bez istniejących szkiców, wytycznych ani architektury informacji. Każda decyzja projektowa była podejmowana w kontekście wpływu na konwersję, zaufanie użytkownika i skalowalność komunikacji. To podejście systemowe, nie dekoracyjne.',
        },
      ],
      typographyDescription: 'System typograficzny HubbleRx opiera się na foncie Gotham — geometrycznym, nowoczesnym kroju, który łączy profesjonalny charakter z przystępnością komunikacji medycznej.',
      colorsDescription: 'Turkusowa paleta kolorów z białym tłem tworzy świeży, medyczny wygląd budujący zaufanie i komunikujący czystość.',
      heroFollowImageCaptions: {
        0: 'Warianty logo: wersja jasna na turkusowym tle i ciemna na białym tle',
        1: 'Znak graficzny marki nawiązujący do teleskopu, symbolizuje odkrywanie i wyszukiwanie najlepszych rozwiązań medycznych',
        2: 'Mockup pudełka subskrypcyjnego HubbleRx z kapsułkami',
        3: 'Zbliżenie na pudełko subskrypcyjne z detalami brandingu',
        4: 'Trójwymiarowa ikona logo HubbleRx',
        5: 'Kompleksowa prezentacja layoutu strony i elementów UI',
        6: 'Ilustracje procesu onboardingu i badge członkowski',
      },
      imageCaptions: {
        0: 'Responsywny design strony na urządzeniach mobilnych',
        1: 'Interaktywny interfejs wyboru subskrypcji na urządzeniu mobilnym',
      },
      mobileScreenCaptions: {
        0: 'Ilustracja hero z krajobrazem',
        1: 'Ilustracja z miastem przyszłości',
      },
      mobileScreensTitle: 'Minimalistyczne ilustracje',
      mobileScreensDescription: 'Wspólne elementy wszystkich materiałów marketingowych, nadające przyjemny odbiór z nutką nowoczesności.',
      sectionImageCaptions: {
        0: 'Przykład ilustracji używanej w sekcjach hero',
        1: 'Ulotka reklamowa HubbleRx, subskrypcje farmaceutyczne',
      },
      deviceMockupTitle: 'Animowany mockup interfejsu',
      deviceMockupDescription: 'Prezentacja interakcji użytkownika z interfejsem aplikacji mobilnej HubbleRx.',
      gifPairCaptions: {
         0: 'Animacja do płatnej reklamy',
         1: 'Animacja do płatnej reklamy, częściowo wykonana w Blenderze',
      },
    },
    en: {
      title: 'HubbleRx - Branding & UI',
      description: 'Building a complete brand system from the ground up for a pharmaceutical subscription platform',
      fullDescription: 'HubbleRx is a medication subscription platform entering the competitive US market. The company had no prior visual system, information architecture, or brand foundation. I was given full responsibility to build the entire system from scratch: from brand strategy and logo design to illustrations, website layout, ad animations, and product materials.',
      challenge: 'Medical platforms operate in a space where every communication element influences user decisions. No cohesive visual system means no trust. No trust means no conversion. HubbleRx needed a foundation that would allow scaling communication across multiple channels: from website to paid ads to product materials.',
      solution: 'Starting point: build a trust foundation through consistency. Teal was chosen strategically, associated with medicine, cleanliness, and accessibility. The illustration system simplifies complex processes (onboarding, subscription) into comprehensible visual steps. The logo references the Hubble telescope, a metaphor for discovering the best medical solutions.',
      results: 'Ad materials with animations significantly improved campaign conversion. The cohesive visual system enabled rapid communication scaling to new channels without redesigning from scratch each time.',
      strategicSections: [
        {
          title: 'My Role & Scope of Responsibility',
          content: 'Full responsibility for building the visual system from the ground up: brand strategy, logo design, illustration system, website information architecture, UI layout, ad animations, product materials. No prior sketches, guidelines, or creative brief, all design decisions made independently.',
        },
        {
          title: 'Decision-Making Process',
          content: 'Every element was designed for conversion and scalability. Typography (Gotham): geometric, readable, authority-building. Color palette: limited to 3 key colors, ensuring recognition across every channel. Illustrations: modular system, expandable without losing consistency.',
        },
        {
          title: 'Systematic Solution',
          content: 'The delivered system includes: complete branding (logo, variants, graphic mark), UI illustration system, responsive website layout, paid campaign animations (partially executed in Blender), product materials (packaging mockups), and information architecture supporting the user conversion path.',
        },
        {
          title: 'Why Does This Matter for Business?',
          content: 'This project demonstrates the ability to build a complete brand system from the ground up, without existing sketches, guidelines, or information architecture. Every design decision was made in the context of its impact on conversion, user trust, and communication scalability. This is a systematic approach, not decorative.',
        },
      ],
      typographyDescription: 'HubbleRx\'s typographic system is built on Gotham — a geometric, modern typeface that combines professional authority with the accessibility of medical communication.',
      colorsDescription: 'A teal color palette with white background creates a fresh, medical look that builds trust and communicates cleanliness.',
      mobileScreensDescription: 'Common elements across all marketing materials, creating a pleasant feel with a touch of modernity.',
      mobileScreensTitle: 'Minimalist Illustrations',
      heroFollowImageCaptions: {
        0: 'Logo variants: light version on teal background and dark version on white background',
        1: 'Brand graphic mark referencing the telescope, symbolizes discovering and finding the best medical solutions',
        2: 'HubbleRx subscription box mockup with capsules',
        3: 'Close-up of the subscription box with branding details',
        4: '3D HubbleRx logo icon',
        5: 'Comprehensive website layout and UI elements presentation',
        6: 'Onboarding process illustrations and membership badge',
      },
      imageCaptions: {
        0: 'Responsive website design on mobile devices',
        1: 'Interactive subscription selection interface on mobile device',
      },
      mobileScreenCaptions: {
        0: 'Hero illustration with landscape',
        1: 'Illustration with futuristic city',
      },
      sectionImageCaptions: {
        0: 'Example illustration used in hero sections',
        1: 'HubbleRx advertising flyer, Pharmaceutical Subscriptions',
      },
      deviceMockupTitle: 'Animated Interface Mockup',
      deviceMockupDescription: 'Presentation of user interaction with the HubbleRx mobile application interface.',
      gifPairCaptions: {
        0: 'Paid advertisement animation',
        1: 'Paid advertisement animation — partially made in Blender',
      },
    },
  },
  'tsq-portal': {
    pl: {
      title: 'TSQ Portal – Kalkulator inwestycji',
      description: 'Landing page i aplikacja webowa dla TSQ Investment Group: kalkulator inwestycji, symulacje zysków i zarządzanie zespołem',
      fullDescription: 'Projekt łączy stronę promocyjną z panelem użytkownika – od ekranów intro i tutoriali po dashboard z wykresami, chatbotem AI i materiałami szkoleniowymi. Po stronie wizualnej: spójny layout, responsywność, wykresy (Recharts), animacje (Rive) i dopracowany UX (Tailwind CSS). Chatbot AI połączony jest z bazą wiedzy tworzoną na bieżąco ze szkoleń o projekcie.',
      challenge: 'Stworzenie kompleksowej platformy inwestycyjnej z kalkulatorem zysków, systemem zarządzania zespołem, chatbotem AI i modułem szkoleniowym w stylu Instagram Stories.',
      solution: 'Zaprojektowałem spójny interfejs łączący landing page z panelem użytkownika. Stworzyłem interaktywny kalkulator inwestycji z wizualizacjami wykresów. Chatbot AI odpowiada na pytania dzięki integracji z bazą wiedzy. Moduł Stories prowadzi użytkowników przez proces inwestycji.',
      results: 'Platforma skutecznie prezentuje możliwości inwestycyjne i automatyzuje onboarding nowych użytkowników dzięki intuicyjnemu interfejsowi.',
      typographyDescription: 'Nowoczesny system typograficzny z czytelnym fontem bezszeryfowym, zapewniający doskonałą czytelność na wszystkich urządzeniach.',
      colorsDescription: 'Energetyczna paleta kolorów z dominującym niebieskim, budząca zaufanie i komunikująca profesjonalizm w branży finansowej.',
      deviceMockupTitle: 'Landing page',
      deviceMockupDescription: 'Główny ekran strony promocyjnej TSQ Investment Group z dynamicznym hero section i wezwaniem do działania.',
      mobileScreensTitle: 'Aplikacja mobilna',
      mobileScreensDescription: 'Responsywny design na urządzeniach mobilnych - od landing page, przez generator wizytówek, po kalkulator inwestycji.',
      imageCaptions: {
        0: 'Landing page – widok hero section z dynamicznym wezwaniem do działania',
        1: 'Moduł Stories inspirowany Instagramem - prowadzi użytkowników przez proces inwestycji krok po kroku',
        2: 'Asystent AI połączony z bazą wiedzy - odpowiada na pytania dotyczące projektu i inwestycji',
      },
      mobileScreenCaptions: {
        0: 'Stopka - mobilna wersja landing page',
        1: 'Generator wizytówek dla agentów',
        2: 'Kalkulator sygnałów i symulacja zysków',
      },
    },
    en: {
      title: 'TSQ Portal – Investment Calculator',
      description: 'Landing page and web application for TSQ Investment Group: investment calculator, profit simulations, and team management',
      fullDescription: 'The project combines a promotional landing page with a user panel – from intro screens and tutorials to a dashboard with charts, AI chatbot, and training materials. On the visual side: consistent layout, responsiveness, charts (Recharts), animations (Rive), and refined UX (Tailwind CSS). The AI chatbot is connected to a knowledge base created on-the-fly from project training materials.',
      challenge: 'Creating a comprehensive investment platform with a profit calculator, team management system, AI chatbot, and Instagram Stories-style training module.',
      solution: 'I designed a cohesive interface combining the landing page with the user panel. I created an interactive investment calculator with chart visualizations. The AI chatbot answers questions through knowledge base integration. The Stories module guides users through the investment process.',
      results: 'The platform effectively presents investment opportunities and automates onboarding of new users thanks to its intuitive interface.',
      typographyDescription: 'A modern typographic system with a readable sans-serif font, ensuring excellent readability on all devices.',
      colorsDescription: 'An energetic color palette with dominant blue, building trust and communicating professionalism in the financial industry.',
      deviceMockupTitle: 'Landing page',
      deviceMockupDescription: 'Main screen of TSQ Investment Group promotional page with dynamic hero section and call to action.',
      mobileScreensTitle: 'Mobile Application',
      mobileScreensDescription: 'Responsive design on mobile devices - from landing page, through business card generator, to investment calculator.',
      imageCaptions: {
        0: 'Landing page – hero section view with dynamic call to action',
        1: 'Instagram-inspired Stories module - guides users through the investment process step by step',
        2: 'AI Assistant connected to knowledge base - answers questions about the project and investments',
      },
      mobileScreenCaptions: {
        0: 'Footer - mobile landing page version',
        1: 'Business card generator for agents',
        2: 'Signal calculator and profit simulation',
      },
    },
  },
  'olympus-defence': {
    pl: {
      title: 'Olympus Defence',
      description: 'Kompletna oprawa graficzna gry Tower Defence w stylu cartoon. 21 postaci, 36 modeli wieżyczek, 45 map. 3 lata produkcji.',
      fullDescription: 'Olympus Defence to gra typu Tower Defence osadzona w mitologii greckiej, utrzymana w stylizowanym stylu cartoon inspirowanym popularnymi tytułami mobilnymi. Projekt obejmował pełną odpowiedzialność za całość oprawy wizualnej gry: od postaci, przez wieżyczki, mapy, UI, aż po efekty specjalne i przygotowanie assetów do produkcji w Unity.',
      youtubeVideoTitle: 'Gameplay Trailer',
      youtubeVideoDescription: 'Prezentacja rozgrywki Olympus Defence',
      gifPairCaptions: {
        0: 'Warrior',
        1: 'Titan (główny boss)',
        2: 'Rider',
      },
      strategicSections: [
        { title: 'Zakres projektu', content: 'Pełna odpowiedzialność za całość oprawy wizualnej gry: modelowanie 3D, animacje, compositing, efekty specjalne, UI oraz przygotowanie wszystkich assetów do produkcji w Unity. Projekt budowany od zera, bez wcześniejszych szkiców ani systemu wizualnego.' },
        { title: 'Charaktery', content: '21 unikalnych postaci wymodelowanych w 3D, zanimowanych i przygotowanych do produkcji. Każda postać przeszła pełny pipeline: koncept, modelowanie, rigging, animacja, rendering i compositing w Spine/Blender.' },
        { title: 'Wieżyczki', content: '12 typów wieżyczek x 3 poziomy ulepszenia = 36 modeli. Każdy model zanimowany ze złożonymi efektami compositingu przygotowanymi pod produkcję w silniku gry.' },
        { title: 'Mapy', content: '3 środowiska map po 15 poziomów = 45 map z unikatowymi modelami dedykowanymi dla danego środowiska.' },
        { title: 'UI', content: 'Kompletny interfejs użytkownika gry: ekrany menu, HUD rozgrywki, ekrany ulepszeń, sklep, ekrany wyników. Spójny system wizualny utrzymany w cartoon stylizacji.' },
        { title: 'Proces i rozwój', content: 'Projekt realizowany na przestrzeni 3 lat. W tym czasie nabyłem i rozwinąłem umiejętności: animacje 3D, modelowanie pod produkcję, współpraca z developerem przy integracji w Unity, animacje w Spine jako compositing, compositing w Blenderze, tworzenie dokumentacji pod kątem późniejszych edycji. Codzienne spotkania i omawianie poprawek oraz kolejnych działań. Wiele innowacyjnych rozwiązań dla unikalnych efektów.' },
        { title: 'Dlaczego to istotne', content: 'Ten projekt podsumowuje mój dotychczasowy warsztat. Łączy modelowanie 3D, animację, compositing i produkcję w jednym spójnym pipeline. Pokazuje zdolność do samodzielnego prowadzenia kompleksowej produkcji graficznej na skalę pełnej gry, z regularnymi iteracjami i współpracą z zespołem developerskim.' },
      ],
    },
    en: {
      title: 'Olympus Defence',
      description: 'Complete visual production for a cartoon-style Tower Defence game. 21 characters, 36 tower models, 45 maps. 3 years of production.',
      fullDescription: 'Olympus Defence is a Tower Defence game set in Greek mythology, maintained in a stylized cartoon aesthetic inspired by popular mobile titles. The project encompassed full responsibility for the entire visual production: from characters, through towers, maps, UI, to special effects and asset preparation for Unity production.',
      youtubeVideoTitle: 'Gameplay Trailer',
      youtubeVideoDescription: 'Olympus Defence gameplay presentation',
      gifPairCaptions: {
        0: 'Warrior',
        1: 'Titan (main boss)',
        2: 'Rider',
      },
      strategicSections: [
        { title: 'Project Scope', content: 'Full responsibility for the entire visual production: 3D modeling, animation, compositing, special effects, UI and preparation of all assets for Unity production. Built from scratch with no prior sketches or visual system.' },
        { title: 'Characters', content: '21 unique characters modeled in 3D, animated and prepared for production. Each character went through the full pipeline: concept, modeling, rigging, animation, rendering and compositing in Spine/Blender.',
          images: [
            { src: '', alt: '', caption: 'Warrior' },
            { src: '', alt: '', caption: 'Titan (main boss)' },
            { src: '', alt: '', caption: 'Rider' },
          ],
        },
        { title: 'Towers', content: '12 tower types x 3 upgrade levels = 36 models. Each model animated with complex compositing effects prepared for production in the game engine.',
          images: [
            { src: '', alt: '', caption: 'Zeus (lv1)' },
            { src: '', alt: '', caption: 'Burning Oil (lv2)' },
            { src: '', alt: '', caption: 'Archers (lv2)' },
          ],
        },
        { title: 'Maps', content: '3 map environments with 15 levels each = 45 maps with unique models dedicated to each environment.',
          images: [
            { src: '', alt: '', caption: 'Environment 1' },
            { src: '', alt: '', caption: 'Environment 1' },
            { src: '', alt: '', caption: 'Environment 2' },
            { src: '', alt: '', caption: 'Environment 2' },
            { src: '', alt: '', caption: 'Environment 3' },
            { src: '', alt: '', caption: 'Environment 3' },
          ],
        },
        { title: 'UI', content: 'Complete game user interface: menu screens, gameplay HUD, upgrade screens, shop, result screens. Cohesive visual system maintained in cartoon stylization.',
          images: [
            { src: '', alt: '', caption: 'Shop' },
            { src: '', alt: '', caption: 'Leaderboard' },
            { src: '', alt: '', caption: 'Daily Quests' },
            { src: '', alt: '', caption: 'Daily Quests' },
            { src: '', alt: '', caption: 'Daily Quests' },
          ],
        },
        { title: 'Process & Growth', content: '3-year production during which I acquired and developed skills: 3D animation, production-ready modeling, collaboration with a developer for Unity integration, Spine animations as compositing, Blender compositing, creating documentation for future edits. Daily meetings to discuss corrections and next steps. Many innovative solutions for unique effects.' },
        { title: 'Why It Matters', content: 'This project summarizes my craft at that point. It combines 3D modeling, animation, compositing and production in one cohesive pipeline. It demonstrates the ability to independently lead complex visual production at a full game scale, with regular iterations and collaboration with the development team.' },
      ],
    },
  },
  'shadow-tagger': {
    pl: {
      title: 'Shadow Tagger',
      description: 'Gra platformowa stworzona samodzielnie w Phaser z AI-assisted coding. Kolorowanie murali, ucieczka przed przeciwnikami i gra na czas.',
      fullDescription: 'Shadow Tagger to gra platformowa, którą stworzyłem samodzielnie — od koncepcji, przez grafikę 3D i animacje postaci, po kodowanie z wykorzystaniem AI. Gra oparta jest na silniku Phaser i polega na kolorowaniu numerków na ścianach, tworzeniu murali oraz unikaniu przeciwników. Postacie są modelowane w 3D i animowane, co nadaje grze unikalny, cartoon look. Dzięki AI-assisted coding mam pełną kontrolę nad całym procesem produkcji.',
      challenge: 'Stworzenie kompletnej gry platformowej jako solo developer — od grafiki 3D i animacji postaci po programowanie rozgrywki i mechanik gry.',
      solution: 'Wykorzystałem Phaser jako silnik gry, Blender do modelowania i animowania postaci 3D, a AI-assisted coding pozwolił mi na pełną kontrolę nad logiką gry. Połączenie tych narzędzi umożliwiło samodzielną produkcję na poziomie studyjnym.',
      results: 'Gra dostępna online z kilkoma trybami rozgrywki, w pełni grywalny produkt stworzony przez jedną osobę.',
      strategicSections: [
        { title: 'Tryby gry', content: 'Gra oferuje kilka trybów rozgrywki: kolorowanie murali przez numerki, ucieczka przed przeciwnikami, układanie drabin do trudno dostępnych miejsc oraz gra na czas. Każdy tryb wymaga innego podejścia taktycznego.' },
        { title: 'Postacie 3D', content: 'Wszystkie postacie w grze są modelowane w 3D w Blenderze i animowane, co nadaje grze unikalny cartoon look. Pipeline obejmuje modelowanie, rigging, animację i rendering sprite\'ów do silnika Phaser.' },
        { title: 'AI-Assisted Development', content: 'Wykorzystuję AI do wspomagania procesu kodowania, co pozwala mi jako grafikowi mieć pełną kontrolę nad całym procesem produkcji gry — od koncepcji wizualnej po działający kod. To pokazuje, jak AI demokratyzuje game development.' },
      ],
      imageCaptions: {
        1: 'Rozgrywka platformowa — unikaj przeciwników i maluj murale',
        2: 'System kolorowania numerków — maluj mural kolor po kolorze',
        3: 'Eksploracja poziomów z drabinami i muralami do odkrycia',
      },
    },
    en: {
      title: 'Shadow Tagger',
      description: 'A platformer game built solo with Phaser and AI-assisted coding. Paint murals, escape enemies and race against time.',
      fullDescription: 'Shadow Tagger is a platformer game I built entirely on my own — from concept, through 3D graphics and character animation, to coding with AI assistance. The game runs on the Phaser engine and revolves around painting numbers on walls, creating murals, and avoiding enemies. Characters are modeled in 3D and animated, giving the game a unique cartoon look. AI-assisted coding gives me full control over the entire production process.',
      challenge: 'Creating a complete platformer game as a solo developer — from 3D graphics and character animation to gameplay programming and game mechanics.',
      solution: 'I used Phaser as the game engine, Blender for 3D character modeling and animation, and AI-assisted coding gave me full control over game logic. Combining these tools enabled studio-level solo production.',
      results: 'The game is available online with several gameplay modes, a fully playable product created by one person.',
      strategicSections: [
        { title: 'Game Modes', content: 'The game offers several gameplay modes: painting murals by numbers, escaping enemies, placing ladders to hard-to-reach spots, and time-based challenges. Each mode requires a different tactical approach.' },
        { title: '3D Characters', content: 'All characters in the game are modeled in 3D in Blender and animated, giving the game a unique cartoon look. The pipeline includes modeling, rigging, animation, and sprite rendering for the Phaser engine.' },
        { title: 'AI-Assisted Development', content: 'I use AI to assist the coding process, which allows me as an artist to have full control over the entire game production — from visual concept to working code. This showcases how AI democratizes game development.' },
      ],
      imageCaptions: {
        1: 'Platforming gameplay — avoid enemies and paint murals',
        2: 'Number coloring system — paint the mural color by color',
        3: 'Level exploration with ladders and murals to discover',
      },
    },
  },
};

export const getProjectTranslation = (slug: string, language: Language): ProjectTranslation | undefined => {
  return projectTranslations[slug]?.[language];
};
