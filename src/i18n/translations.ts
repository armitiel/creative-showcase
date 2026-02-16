export type Language = 'pl' | 'en';

interface ServiceItem {
  title: string;
  description: string;
}

interface TranslationsType {
  nav: {
    home: string;
    projects: string;
    services: string;
    about: string;
    contact: string;
    illustrations: string;
  };
  hero: {
    title: string;
    name: string;
    role: string;
    scroll: string;
    specializations: string[];
  };
  projects: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    viewProject: string;
    categories: {
      all: string;
      branding: string;
      uiux: string;
      threeD: string;
      art: string;
      motion: string;
    };
  };
  services: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: ServiceItem[];
  };
  about: {
    title: string;
    titleHighlight: string;
    description: string;
    location: string;
    experience: string;
    education: string;
    skillsTitle: string;
    toolsTitle: string;
    skills: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    location: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    successTitle: string;
    successDescription: string;
  };
  footer: {
    rights: string;
    madeWith: string;
    inPoland: string;
  };
  projectDetail: {
    backToPortfolio: string;
    notFound: string;
    client: string;
    personalProject: string;
    year: string;
    tools: string;
    challenge: string;
    solution: string;
    typography: string;
    brandColors: string;
    mobileApp: string;
    verificationDevice: string;
    generatedGraphics: string;
    realization: string;
  };
}

export const translations: Record<Language, TranslationsType> = {
  pl: {
    nav: {
      home: 'Home',
      projects: 'Projekty',
      services: 'Usługi',
      about: 'O mnie',
      contact: 'Kontakt',
      illustrations: 'Ilustracje',
    },
    hero: {
      title: 'PORTFOLIO',
      name: 'Amitiel Angelisme',
      role: 'Senior Graphic Designer | Art & UI Specialist',
      scroll: 'Scroll',
      specializations: ['Branding', 'Modelowanie 3D', 'Web & App', 'Sztuka', 'Motion Design'],
    },
    projects: {
      title: 'Moje',
      titleHighlight: 'Projekty',
      subtitle: 'Wybrane realizacje z ostatnich lat. Każdy projekt to unikalna historia i wyzwanie.',
      viewProject: 'Zobacz projekt',
      categories: {
        all: 'Wszystkie',
        branding: 'Branding',
        uiux: 'UI/UX',
        threeD: '3D',
        art: 'Art',
        motion: 'Motion',
      },
    },
    services: {
      title: 'Moje',
      titleHighlight: 'Usługi',
      subtitle: 'Oferuję szeroki zakres usług graficznych dopasowanych pod dany projekt.',
      items: [
        {
          title: 'Identyfikacja Wizualna',
          description: 'Kompleksowa identyfikacja wizualna: logo, kolory, typografia i wszystkie elementy budujące spójny wizerunek marki.',
        },
        {
          title: 'Modelowanie 3D',
          description: 'Tworzenie realistycznych wizualizacji 3D produktów, wnętrz i obiektów architektonicznych. Modele game-ready z mapami tekstur, UV i optymalizacją pod silniki gier.',
        },
        {
          title: 'Strony i Aplikacje',
          description: 'Projektowanie stron internetowych i aplikacji mobilnych z naciskiem na UX/UI i nowoczesną estetykę.',
        },
        {
          title: 'Ilustracje i Art',
          description: 'Unikalne ilustracje, grafiki koncepcyjne i asety artystyczne do gier, aplikacji i materiałów marketingowych.',
        },
        {
          title: 'AI & Kod',
          description: 'Tworzenie rozwiązań z wykorzystaniem narzędzi AI w sprawdzonym workflow – automatyzacja, prototypowanie i integracje.',
        },
        {
          title: 'Animacje',
          description: 'Animuję w Spine i Blender, tworzę efekty wizualne i motion graphics. Rozwijam się również w kierunku kompozycji video z wykorzystaniem narzędzi AI.',
        },
      ],
    },
    about: {
      title: 'O',
      titleHighlight: 'mnie',
      description: 'Senior Visual Designer & Game Artist działający na styku wizualizacji, systemów i biznesu. Definiuje kierunek wizualny, jednocześnie budując struktury produkcyjne i <highlight>workflow oparte na AI</highlight>, które wspierają strategię produktową, efektywność zespołu i długoterminową skalowalność.',
      location: 'Warszawa, Polska',
      experience: '15+ lat doświadczenia',
      education: 'Southampton Solent University, Middlesex London University',
      skillsTitle: 'Umiejętności',
      toolsTitle: 'Narzędzia',
      skills: ['Branding', 'Grafika 3D', 'Programowanie', 'Ilustracje', 'Animacje', 'UI/UX Design', 'Storytelling', 'AI & Automatyzacja', 'Szybkie uczenie się'],
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Zapraszam do rozmowy',
      emailLabel: 'Email',
      phoneLabel: 'Telefon',
      locationLabel: 'Lokalizacja',
      location: 'Warszawa, Polska',
      namePlaceholder: 'Twoje imię',
      emailPlaceholder: 'Twój email',
      messagePlaceholder: 'Twoja wiadomość...',
      send: 'Wyślij wiadomość',
      successTitle: 'Wiadomość wysłana!',
      successDescription: 'Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.',
    },
    footer: {
      rights: 'Wszelkie prawa zastrzeżone.',
      madeWith: 'Zaprojektowane z',
      inPoland: 'w Polsce',
    },
    projectDetail: {
      backToPortfolio: 'Powrót do portfolio',
      notFound: 'Projekt nie znaleziony',
      client: 'Klient',
      personalProject: 'Projekt osobisty',
      year: 'Rok',
      tools: 'Narzędzia',
      challenge: 'Wyzwanie',
      solution: 'Rozwiązanie',
      typography: 'Typografia',
      brandColors: 'Kolory marki',
      mobileApp: 'Aplikacja mobilna',
      verificationDevice: 'Urządzenie weryfikacyjne',
      generatedGraphics: 'Wygenerowane grafiki',
      realization: 'Realizacja projektu',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      illustrations: 'Illustrations',
    },
    hero: {
      title: 'PORTFOLIO',
      name: 'Amitiel Angelisme',
      role: 'Senior Graphic Designer | Art & UI Specialist',
      scroll: 'Scroll',
      specializations: ['Branding', '3D Modeling', 'Web & App', 'Art', 'Motion Design'],
    },
    projects: {
      title: 'My',
      titleHighlight: 'Projects',
      subtitle: 'Selected works from recent years. Each project is a unique story and challenge.',
      viewProject: 'View project',
      categories: {
        all: 'All',
        branding: 'Branding',
        uiux: 'UI/UX',
        threeD: '3D',
        art: 'Art',
        motion: 'Motion',
      },
    },
    services: {
      title: 'My',
      titleHighlight: 'Services',
      subtitle: 'I offer a wide range of graphic services tailored to your needs.',
      items: [
        {
          title: 'Visual Identity',
          description: 'Comprehensive visual identity: logo, colors, typography and all elements building a cohesive brand image.',
        },
        {
          title: '3D Modeling',
          description: 'Creating realistic 3D visualizations of products, interiors and architectural objects. Game-ready models with texture maps, UV mapping and optimization for game engines.',
        },
        {
          title: 'Websites & Apps',
          description: 'Designing websites and mobile apps with emphasis on UX/UI and modern aesthetics.',
        },
        {
          title: 'Illustrations',
          description: 'Unique illustrations, concept art and artistic assets for games, apps and marketing materials.',
        },
        {
          title: 'AI & Code',
          description: 'Building solutions using AI tools in proven workflows – automation, prototyping and integrations.',
        },
        {
          title: 'Animations',
          description: 'I animate in Spine and Blender, creating visual effects and motion graphics. Also expanding into AI-powered video composition.',
        },
      ],
    },
    about: {
      title: 'About',
      titleHighlight: 'me',
      description: 'Senior Visual Designer & Game Artist operating at the intersection of visuals, systems, and business. Defines visual direction while building production structures and <highlight>AI-driven workflows</highlight> that support product strategy, team efficiency, and long-term scalability.',
      location: 'Warsaw, Poland',
      experience: '15+ years of experience',
      education: 'Southampton Solent University, Middlesex London University',
      skillsTitle: 'Skills',
      toolsTitle: 'Tools',
      skills: ['Branding', '3D Graphics', 'Programming', 'Illustrations', 'Animations', 'UI/UX Design', 'Storytelling', 'AI & Automation', 'Fast Learning'],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have a project in mind? Write to me!',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      location: 'Warsaw, Poland',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Your message...',
      send: 'Send message',
      successTitle: 'Message sent!',
      successDescription: 'Thank you for reaching out. I will respond as soon as possible.',
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Designed with',
      inPoland: 'in Poland',
    },
    projectDetail: {
      backToPortfolio: 'Back to portfolio',
      notFound: 'Project not found',
      client: 'Client',
      personalProject: 'Personal project',
      year: 'Year',
      tools: 'Tools',
      challenge: 'Challenge',
      solution: 'Solution',
      typography: 'Typography',
      brandColors: 'Brand Colors',
      mobileApp: 'Mobile App',
      verificationDevice: 'Verification Device',
      generatedGraphics: 'Generated Graphics',
      realization: 'Project Realization',
    },
  },
};

export type Translations = typeof translations.pl;
