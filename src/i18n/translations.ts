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
      web: string;
      threeD: string;
      spatial: string;
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
    },
    hero: {
      title: 'PORTFOLIO',
      name: 'Amitiel Angelisme',
      role: 'Creative Designer',
      scroll: 'Scroll',
      specializations: ['Logo', 'Branding', 'Modelowanie 3D', 'Web & App', 'Ilustracje'],
    },
    projects: {
      title: 'Moje',
      titleHighlight: 'Projekty',
      subtitle: 'Wybrane realizacje z ostatnich lat. Każdy projekt to unikalna historia i wyzwanie.',
      viewProject: 'Zobacz projekt',
      categories: {
        all: 'Wszystkie',
        branding: 'Branding',
        web: 'Web & App',
        threeD: '3D',
        spatial: 'Przestrzenne',
      },
    },
    services: {
      title: 'Moje',
      titleHighlight: 'Usługi',
      subtitle: 'Oferuję szeroki zakres usług graficznych dopasowanych do Twoich potrzeb.',
      items: [
        {
          title: 'Projektowanie Logo',
          description: 'Tworzę unikalne, zapamiętywalne logo, które oddaje charakter Twojej marki i wyróżnia ją na rynku.',
        },
        {
          title: 'Identyfikacja Wizualna',
          description: 'Kompleksowa identyfikacja wizualna: kolory, typografia, wzory i wszystkie elementy budujące spójny wizerunek.',
        },
        {
          title: 'Modelowanie 3D',
          description: 'Tworzenie realistycznych wizualizacji 3D produktów, wnętrz i obiektów architektonicznych.',
        },
        {
          title: 'Strony i Aplikacje',
          description: 'Projektowanie stron internetowych i aplikacji mobilnych z naciskiem na UX/UI i nowoczesną estetykę.',
        },
        {
          title: 'Grafika Social Media',
          description: 'Angażujące grafiki na social media, które budują rozpoznawalność i zwiększają zasięgi.',
        },
        {
          title: 'Projektowanie Przestrzenne',
          description: 'Projektowanie stoisk, ekspozycji i przestrzeni komercyjnych z dbałością o detale.',
        },
      ],
    },
    about: {
      title: 'O',
      titleHighlight: 'mnie',
      description: 'Jestem projektantem działającym interdyscyplinarnie. Projektuję branding i identyfikacje wizualne, tworzę rozwiązania programistyczne, modeluję grafikę 3D oraz projektuję przestrzenie i narracje storytellingowe. Łączę te kompetencje w spójne, kompleksowe rozwiązania projektowe. Pracuję jako <highlight>wielopoziomowy projektant</highlight>, integrując perspektywy i narzędzia z różnych dziedzin kreatywnych.',
      location: 'Warszawa, Polska',
      experience: '15+ lat doświadczenia',
      education: 'Southampton Solent University, Middlesex London University',
      skillsTitle: 'Umiejętności',
      toolsTitle: 'Narzędzia',
      skills: ['Branding', 'Grafika 3D', 'Programowanie', 'Projektowanie przestrzenne', 'UI/UX Design', 'Storytelling', 'AI & Automatyzacja', 'Kreatywna strategia'],
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Masz projekt do realizacji? Napisz do mnie!',
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
    },
    hero: {
      title: 'PORTFOLIO',
      name: 'Amitiel Angelisme',
      role: 'Creative Designer',
      scroll: 'Scroll',
      specializations: ['Logo', 'Branding', '3D Modeling', 'Web & App', 'Illustrations'],
    },
    projects: {
      title: 'My',
      titleHighlight: 'Projects',
      subtitle: 'Selected works from recent years. Each project is a unique story and challenge.',
      viewProject: 'View project',
      categories: {
        all: 'All',
        branding: 'Branding',
        web: 'Web & App',
        threeD: '3D',
        spatial: 'Spatial',
      },
    },
    services: {
      title: 'My',
      titleHighlight: 'Services',
      subtitle: 'I offer a wide range of graphic services tailored to your needs.',
      items: [
        {
          title: 'Logo Design',
          description: 'I create unique, memorable logos that capture your brand\'s character and make it stand out.',
        },
        {
          title: 'Visual Identity',
          description: 'Comprehensive visual identity: colors, typography, patterns and all elements building a cohesive image.',
        },
        {
          title: '3D Modeling',
          description: 'Creating realistic 3D visualizations of products, interiors and architectural objects.',
        },
        {
          title: 'Websites & Apps',
          description: 'Designing websites and mobile apps with emphasis on UX/UI and modern aesthetics.',
        },
        {
          title: 'Social Media Graphics',
          description: 'Engaging social media graphics that build brand recognition and increase reach.',
        },
        {
          title: 'Spatial Design',
          description: 'Designing stands, exhibitions and commercial spaces with attention to detail.',
        },
      ],
    },
    about: {
      title: 'About',
      titleHighlight: 'me',
      description: 'I am an interdisciplinary designer. I design branding and visual identities, create programming solutions, model 3D graphics, and design spaces and storytelling narratives. I combine these competencies into cohesive, comprehensive design solutions. I work as a <highlight>multi-level designer</highlight>, integrating perspectives and tools from various creative fields.',
      location: 'Warsaw, Poland',
      experience: '15+ years of experience',
      education: 'Southampton Solent University, Middlesex London University',
      skillsTitle: 'Skills',
      toolsTitle: 'Tools',
      skills: ['Branding', '3D Graphics', 'Programming', 'Spatial Design', 'UI/UX Design', 'Storytelling', 'AI & Automation', 'Creative Strategy'],
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
