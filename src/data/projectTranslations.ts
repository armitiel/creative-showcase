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
}

type ProjectTranslations = Record<string, Record<Language, ProjectTranslation>>;

export const projectTranslations: ProjectTranslations = {
  'selva-rape': {
    pl: {
      title: 'Selva Rapé - Sklep z Rapé',
      description: 'Kompleksowy branding i sklep e-commerce dla marki tradycyjnego brazylijskiego Rapé',
      fullDescription: 'Selva to marka sprzedająca tradycyjne brazylijskie Rapé - mieszankę tabaki na bazie ziół, kwiatów, kory drzew i tytoniu (Nicotiana rustica). Projekt obejmował stworzenie kompletnej identyfikacji wizualnej połączonej z naturą i dżunglą, serię etykiet produktowych, integrację sklepu Shopify oraz materiały marketingowe.',
      challenge: 'Stworzenie brandingu dla produktu z tradycyjnymi korzeniami amazońskimi, który komunikuje autentyczność i połączenie z naturą, jednocześnie będąc nowoczesny i atrakcyjny dla współczesnego odbiorcy.',
      solution: 'Zaprojektowałem identyfikację wizualną opartą na motywach dżungli i natury. Stworzyłem serię kolorowych etykiet produktowych, z których każda reprezentuje inny rodzaj Rapé. Zintegrowałem sklep Shopify z responsywnym designem prezentującym produkty na tle amazońskiej przyrody.',
      results: 'Marka Selva zyskała rozpoznawalny wygląd, który wyróżnia ją na rynku. Sklep e-commerce z intuicyjną nawigacją i profesjonalnym brandingiem zwiększył konwersję sprzedaży.',
      typographyDescription: 'Typografia Selva łączy czytelność z organicznym charakterem marki, podkreślając jej naturalne korzenie i autentyczność.',
      colorsDescription: 'Paleta kolorów Selva czerpie inspirację z amazońskiej dżungli - soczyste zielenie, ciepłe pomarańcze i głębokie fiolety reprezentują różnorodność produktów.',
      thumbnailGridTitle: 'System etykiet produktowych',
      thumbnailGridDescription: 'Seria kolorowych etykiet dla różnych rodzajów Rapé - każda z unikalną kolorystyką reprezentującą charakter produktu.',
    },
    en: {
      title: 'Selva Rapé - Rapé Shop',
      description: 'Comprehensive branding and e-commerce store for a traditional Brazilian Rapé brand',
      fullDescription: 'Selva is a brand selling traditional Brazilian Rapé - a tobacco blend based on herbs, flowers, tree bark, and tobacco (Nicotiana rustica). The project included creating a complete visual identity connected with nature and the jungle, a series of product labels, Shopify store integration, and marketing materials.',
      challenge: 'Creating branding for a product with traditional Amazonian roots that communicates authenticity and connection with nature while being modern and attractive to contemporary audiences.',
      solution: 'I designed a visual identity based on jungle and nature motifs. I created a series of colorful product labels, each representing a different type of Rapé. I integrated the Shopify store with a responsive design showcasing products against the backdrop of Amazonian nature.',
      results: 'The Selva brand gained a recognizable look that sets it apart in the market. The e-commerce store with intuitive navigation and professional branding increased sales conversion.',
      typographyDescription: 'Selva\'s typography combines readability with the organic character of the brand, emphasizing its natural roots and authenticity.',
      colorsDescription: 'Selva\'s color palette draws inspiration from the Amazon jungle - lush greens, warm oranges, and deep purples represent the diversity of products.',
      thumbnailGridTitle: 'Product Label System',
      thumbnailGridDescription: 'A series of colorful labels for different types of Rapé - each with unique colors representing the product\'s character.',
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
    },
    en: {
      title: 'Aloha Centrum - Reception Desk',
      description: 'Futuristic reception desk design for a mindful workspace center - from 3D visualization to CNC manufacturing supervision',
      fullDescription: 'A futuristic reception desk project for "Aloha Centrum" in Szczecin - an innovative work center promoting mindfulness in the office environment. I was responsible for all 3D graphics, visualizations, and supervision of the physical model production through 5-axis CNC milling. The organic, fluid forms of the furniture combine functionality with futuristic aesthetics, creating a welcoming space for first contact with guests.',
      challenge: 'Creating a reception desk that communicates the center\'s values - calm, mindfulness, and modernity, while being a fully functional workstation. The design had to be feasible for 5-axis CNC milling production.',
      solution: 'I designed an organic form with a fluid arc shielding the workstation in ZBrush, then optimized the model for CNC production in Blender. Integrated LED lighting emphasizes the futuristic character, and minimalist coloring in shades of white and gray creates a calm atmosphere. I supervised the entire physical model production process.',
      results: 'The project was implemented as the central element of Aloha Centrum\'s reception, becoming the showcase of the space and attracting visitors\' attention.',
      realPhotosTitle: 'Project Realization',
    },
  },
  'portal-smart-checkout': {
    pl: {
      title: 'Portal - Inteligentna Kasa',
      description: 'Kompleksowy system weryfikacji wieku klientów z technologią skanowania twarzy - projektowanie UI/UX aplikacji mobilnej i prototypów',
      fullDescription: 'Portal to innowacyjna firma technologiczna specjalizująca się w biometrycznej weryfikacji wieku klientów zakupujących alkohol. System wykorzystuje zaawansowaną technologię skanowania twarzy AI do automatycznej weryfikacji tożsamości. Byłem odpowiedzialny za projektowanie interfejsu użytkownika aplikacji mobilnej, prototypowanie na urządzeniach mobilnych oraz wizualizacje produktu.',
      challenge: 'Zaprojektowanie intuicyjnego interfejsu dla aplikacji obsługującej weryfikację biometryczną, która musi być jednocześnie bezpieczna, szybka i przyjazna dla użytkownika końcowego oraz sprzedawców.',
      solution: 'Stworzyłem ciemny, nowoczesny interfejs z akcentami w kolorze niebieskim, który komunikuje profesjonalizm i bezpieczeństwo. Aplikacja została zaprojektowana z myślą o szybkiej nawigacji i minimalnej liczbie kroków do weryfikacji wieku.',
      results: 'System osiągnął 98% skuteczności wykrywania fałszywych dokumentów tożsamości, znacznie przewyższając średnią branżową wynoszącą 40%.',
      typographyDescription: 'System typograficzny Portal opiera się na foncie Cabin - nowoczesnym, czytelnym kroju pisma, który zapewnia doskonałą czytelność zarówno na urządzeniach mobilnych jak i terminalach POS.',
      colorsDescription: 'Ciemna paleta kolorów z akcentami w odcieniach niebieskiego i żółtego komunikuje bezpieczeństwo, profesjonalizm i nowoczesność technologii.',
      mobileScreensTitle: 'Aplikacja mobilna',
      mobileScreensDescription: 'Projektowałem i prototypowałem interfejs aplikacji mobilnej Portal, umożliwiającej użytkownikom zarządzanie kontem, portfelem i personalizowanymi ofertami.',
      deviceMockupTitle: 'Urządzenie weryfikacyjne',
      deviceMockupDescription: 'Portal Smart Checkout to dedykowane urządzenie POS z wbudowaną kamerą do skanowania twarzy, umożliwiające natychmiastową weryfikację wieku klienta.',
    },
    en: {
      title: 'Portal - Smart Checkout',
      description: 'Comprehensive customer age verification system with face scanning technology - mobile app UI/UX design and prototyping',
      fullDescription: 'Portal is an innovative technology company specializing in biometric age verification for customers purchasing alcohol. The system uses advanced AI face scanning technology for automatic identity verification. I was responsible for designing the mobile application user interface, prototyping on mobile devices, and product visualizations.',
      challenge: 'Designing an intuitive interface for an application handling biometric verification that must be simultaneously secure, fast, and user-friendly for both end users and retailers.',
      solution: 'I created a dark, modern interface with blue accents that communicates professionalism and security. The application was designed with quick navigation and minimal steps for age verification in mind.',
      results: 'The system achieved 98% effectiveness in detecting fake identity documents, significantly exceeding the industry average of 40%.',
      typographyDescription: 'Portal\'s typographic system is based on the Cabin font - a modern, readable typeface that ensures excellent legibility on both mobile devices and POS terminals.',
      colorsDescription: 'A dark color palette with blue and yellow accents communicates security, professionalism, and technological modernity.',
      mobileScreensTitle: 'Mobile Application',
      mobileScreensDescription: 'I designed and prototyped the Portal mobile application interface, enabling users to manage their account, wallet, and personalized offers.',
      deviceMockupTitle: 'Verification Device',
      deviceMockupDescription: 'Portal Smart Checkout is a dedicated POS device with a built-in face scanning camera, enabling instant customer age verification.',
    },
  },
  'nft-generative-system': {
    pl: {
      title: 'System Generatywny NFT',
      description: 'System generowania kolekcji NFT z wykorzystaniem Stable Diffusion i automatyzacji Photoshop',
      fullDescription: 'Projekt polegał na stworzeniu kompleksowego systemu do generowania unikalnych grafik NFT. System opierał się na trenowaniu własnych modeli AI w Stable Diffusion oraz automatyzacji procesu post-produkcji za pomocą akcji Photoshop. Pozwoliło to na szybkie generowanie tysięcy spójnych stylowo grafik.',
      challenge: 'Wygenerowanie dużej kolekcji unikalnych grafik NFT przy zachowaniu spójności stylistycznej. Każda grafika musiała być wyjątkowa, ale jednocześnie rozpoznawalna jako część tej samej kolekcji.',
      solution: 'Wytrenowałem własne modele AI w Stable Diffusion na specjalnie przygotowanym zbiorze danych. Następnie stworzyłem serię zautomatyzowanych akcji Photoshop do post-produkcji - korekty kolorów, dodawania efektów i finalizacji grafik.',
      results: 'System pozwolił na wygenerowanie ponad 10,000 unikalnych grafik w spójnym stylu, znacznie przyspieszając proces tworzenia kolekcji NFT.',
      thumbnailGridTitle: 'Wygenerowane grafiki',
      thumbnailGridDescription: 'Przykładowe wyniki z systemu generatywnego - każda grafika jest unikalna, ale zachowuje spójność stylistyczną całej kolekcji.',
    },
    en: {
      title: 'NFT Generative System',
      description: 'NFT collection generation system using Stable Diffusion and Photoshop automation',
      fullDescription: 'The project involved creating a comprehensive system for generating unique NFT graphics. The system was based on training custom AI models in Stable Diffusion and automating the post-production process using Photoshop actions. This allowed for rapid generation of thousands of stylistically consistent graphics.',
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
      description: 'Kompleksowy branding i UI design dla platformy subskrypcji medykamentów',
      fullDescription: 'HubbleRx to platforma subskrypcji medykamentów oferująca nielimitowany dostęp do leków w ramach przystępnego abonamentu. Projekt zakładał stworzenie przyjaznego, dostępnego brandingu, który budzi zaufanie użytkowników. Byłem odpowiedzialny za projektowanie serii ilustracji UI, layoutu strony internetowej, animacji do płatnych reklam oraz kompletny branding z logo.',
      challenge: 'Stworzenie brandingu dla platformy medycznej, który jednocześnie komunikuje profesjonalizm i bezpieczeństwo, ale pozostaje przyjazny i dostępny dla szerokiego grona użytkowników.',
      solution: 'Zaprojektowałem serię ilustracji w przyjaznym stylu z charakterystycznym turkusowym kolorem marki. Ilustracje przedstawiają proces onboardingu w prosty, zrozumiały sposób. Logo nawiązuje do teleskopu Hubble — symbolizuje odkrywanie i wyszukiwanie najlepszych rozwiązań medycznych dla użytkowników.',
      results: 'Branding skutecznie pozycjonuje HubbleRx jako przyjazną i godną zaufania platformę medyczną. Materiały reklamowe z animacjami znacząco poprawiły konwersję kampanii.',
      typographyDescription: 'System typograficzny HubbleRx wykorzystuje czytelne, zaokrąglone fonty, które podkreślają przyjazny charakter platformy medycznej.',
      colorsDescription: 'Turkusowa paleta kolorów z białym tłem tworzy świeży, medyczny wygląd budujący zaufanie i komunikujący czystość.',
    },
    en: {
      title: 'HubbleRx - Branding & UI',
      description: 'Comprehensive branding and UI design for a medication subscription platform',
      fullDescription: 'HubbleRx is a medication subscription platform offering unlimited access to medications under an affordable subscription. The project aimed to create friendly, accessible branding that builds user trust. I was responsible for designing a series of UI illustrations, website layout, animations for paid ads, and complete branding with logo.',
      challenge: 'Creating branding for a medical platform that simultaneously communicates professionalism and security while remaining friendly and accessible to a wide range of users.',
      solution: 'I designed a series of illustrations in a friendly style with the brand\'s characteristic teal color. The illustrations present the onboarding process in a simple, understandable way. The logo references the Hubble telescope — symbolizing discovering and finding the best medical solutions for users.',
      results: 'The branding effectively positions HubbleRx as a friendly and trustworthy medical platform. Advertising materials with animations significantly improved campaign conversion.',
      typographyDescription: 'HubbleRx\'s typographic system uses readable, rounded fonts that emphasize the friendly character of the medical platform.',
      colorsDescription: 'A teal color palette with white background creates a fresh, medical look that builds trust and communicates cleanliness.',
    },
  },
};

export const getProjectTranslation = (slug: string, language: Language): ProjectTranslation | undefined => {
  return projectTranslations[slug]?.[language];
};
