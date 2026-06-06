export type Language = 'pl' | 'en';

interface ServiceItem {
  title: string;
  description: string;
}

interface TranslationsType {
  nav: {
    work: string;
    about: string;
    services: string;
    contact: string;
    cv: string;
    illustrations: string;
  };
  hero: {
    kicker: string;
    lead: string;
    cta: string;
    featured: string;
  };
  work: {
    kicker: string;
    title: string;
    all: string;
    categories: {
      branding: string;
      uiux: string;
      threeD: string;
      game: string;
      art: string;
      motion: string;
    };
  };
  about: {
    kicker: string;
    title: string;
    bio1: string;
    bio2: string;
    location: string;
    eduTitle: string;
    edu1: string;
    edu2: string;
    toolsTitle: string;
  };
  services: {
    kicker: string;
    title: string;
    items: ServiceItem[];
  };
  contact: {
    kicker: string;
    title: string;
    lead: string;
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
    built: string;
  };
  projectDetail: {
    backToPortfolio: string;
    notFound: string;
    client: string;
    personalProject: string;
    year: string;
    category: string;
    tools: string;
    challenge: string;
    approach: string;
    solution: string;
    brandColors: string;
    realization: string;
    result: string;
    gallery: string;
    typography: string;
    colors: string;
    video: string;
    next: string;
  };
  illustrations: {
    kicker: string;
    title: string;
    lead: string;
  };
}

export const translations: Record<Language, TranslationsType> = {
  pl: {
    nav: {
      work: 'Prace',
      about: 'O mnie',
      services: 'Usługi',
      contact: 'Kontakt',
      cv: 'CV',
      illustrations: 'Ilustracje',
    },
    hero: {
      kicker: 'Senior Graphic Designer — Branding · 3D · UI',
      lead: 'Buduję systemy wizualne, które wytrzymują kontakt z produkcją — od idei przez 3D po wdrożenie. Marka, interfejs i ruch traktowane jako jeden język.',
      cta: 'Zobacz prace',
      featured: 'Wyróżniony projekt',
    },
    work: {
      kicker: 'Wybrane prace',
      title: 'Projekty',
      all: 'Wszystko',
      categories: {
        branding: 'Branding',
        uiux: 'UI/UX',
        threeD: '3D',
        game: 'Gry',
        art: 'Sztuka',
        motion: 'Motion',
      },
    },
    about: {
      kicker: 'O mnie',
      title: 'Projektant od marki, 3D i interfejsu — w jednej osobie.',
      bio1: 'Multidyscyplinarny twórca z praktycznym, produkcyjnym podejściem. Prowadzę projekty od pierwszego szkicu po finalne wdrożenie, łącząc myślenie wizualne z myśleniem funkcjonalnym.',
      bio2: 'Pracuję na styku brandingu, 3D i UI — i świadomie używam nowych technologii, w tym narzędzi AI w sprawdzonych procesach, żeby pracować szybciej i mądrzej.',
      location: 'Warszawa, Polska',
      eduTitle: 'Edukacja',
      edu1: 'Southampton Solent University',
      edu2: 'Middlesex University London',
      toolsTitle: 'Narzędzia',
    },
    services: {
      kicker: 'Co robię',
      title: 'Usługi',
      items: [
        {
          title: 'Tożsamość wizualna',
          description: 'Kompletny system marki: logo, kolory, typografia i zasady, które trzymają się razem w każdej skali.',
        },
        {
          title: 'Modelowanie 3D',
          description: 'Realistyczne wizualizacje produktów, wnętrz i obiektów — z myślą o produkcji i silnikach gier.',
        },
        {
          title: 'Strony i aplikacje',
          description: 'Projektowanie interfejsów z naciskiem na UX i nowoczesną estetykę — od mobile po desktop.',
        },
        {
          title: 'Ilustracja i concept art',
          description: 'Unikalne ilustracje i assety do gier, aplikacji i materiałów marketingowych.',
        },
        {
          title: 'AI w procesie',
          description: 'Narzędzia AI w sprawdzonych procesach — automatyzacja, prototypowanie i integracje.',
        },
        {
          title: 'Animacja i motion',
          description: 'Animacja w Spine i Blenderze, efekty wizualne i grafika ruchoma.',
        },
      ],
    },
    contact: {
      kicker: 'Kontakt',
      title: 'Zbudujmy coś, co wygląda na przemyślane.',
      lead: 'Otwarty na etat i ciekawe współprace. Napisz — odpowiadam szybko.',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefon',
      locationLabel: 'Lokalizacja',
      location: 'Warszawa, Polska',
      namePlaceholder: 'Twoje imię',
      emailPlaceholder: 'Twój e-mail',
      messagePlaceholder: 'Wiadomość…',
      send: 'Wyślij wiadomość',
      successTitle: 'Wiadomość wysłana!',
      successDescription: 'Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.',
    },
    footer: {
      rights: 'Wszelkie prawa zastrzeżone.',
      built: 'Projekt i kod — Amitiel Angelisme',
    },
    projectDetail: {
      backToPortfolio: 'Wszystkie prace',
      notFound: 'Nie znaleziono projektu',
      client: 'Klient',
      personalProject: 'Projekt własny',
      year: 'Rok',
      category: 'Kategoria',
      tools: 'Narzędzia',
      challenge: 'Wyzwanie',
      approach: 'Podejście',
      solution: 'Rozwiązanie',
      brandColors: 'Kolory marki',
      realization: 'Realizacja',
      result: 'Efekt',
      gallery: 'Galeria',
      typography: 'Typografia',
      colors: 'Kolory',
      video: 'Wideo',
      next: 'Następny projekt',
    },
    illustrations: {
      kicker: 'Ilustracje',
      title: 'Ilustracje',
      lead: 'Grafika wektorowa, stylizowane ilustracje i umiejętność pracy w różnych stylach, od cartoon po realistyczne.',
    },
  },
  en: {
    nav: {
      work: 'Work',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      cv: 'CV',
      illustrations: 'Illustrations',
    },
    hero: {
      kicker: 'Senior Graphic Designer — Branding · 3D · UI',
      lead: 'I build visual systems that survive contact with production — from idea through 3D to launch. Brand, interface and motion treated as one language.',
      cta: 'See the work',
      featured: 'Featured project',
    },
    work: {
      kicker: 'Selected work',
      title: 'Projects',
      all: 'All',
      categories: {
        branding: 'Branding',
        uiux: 'UI/UX',
        threeD: '3D',
        game: 'Game',
        art: 'Art',
        motion: 'Motion',
      },
    },
    about: {
      kicker: 'About',
      title: 'A designer of brand, 3D and interface — in one person.',
      bio1: 'A multidisciplinary creative with a hands-on, production-first approach. I run projects from the first sketch to final delivery, combining visual thinking with functional thinking.',
      bio2: 'I work at the intersection of branding, 3D and UI — and I deliberately use new technology, including AI tools inside proven workflows, to work faster and smarter.',
      location: 'Warsaw, Poland',
      eduTitle: 'Education',
      edu1: 'Southampton Solent University',
      edu2: 'Middlesex University London',
      toolsTitle: 'Toolkit',
    },
    services: {
      kicker: 'What I do',
      title: 'Services',
      items: [
        {
          title: 'Visual Identity',
          description: 'A complete brand system: logo, colours, type and rules that hold together at any scale.',
        },
        {
          title: '3D Modeling',
          description: 'Realistic product, interior and object visualizations — built with production and game engines in mind.',
        },
        {
          title: 'Websites & Apps',
          description: 'Interface design with a focus on UX and modern aesthetics — from mobile to desktop.',
        },
        {
          title: 'Illustration & Concept Art',
          description: 'Unique illustrations and assets for games, apps and marketing materials.',
        },
        {
          title: 'AI in the Workflow',
          description: 'AI tools inside proven workflows — automation, prototyping and integrations.',
        },
        {
          title: 'Animation & Motion',
          description: 'Animation in Spine and Blender, visual effects and motion graphics.',
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: "Let's build something that looks considered.",
      lead: 'Open to full-time roles and interesting collaborations. Write — I reply fast.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      location: 'Warsaw, Poland',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Your message…',
      send: 'Send message',
      successTitle: 'Message sent!',
      successDescription: 'Thank you for reaching out. I will reply as soon as possible.',
    },
    footer: {
      rights: 'All rights reserved.',
      built: 'Designed & built by Amitiel Angelisme',
    },
    projectDetail: {
      backToPortfolio: 'All work',
      notFound: 'Project not found',
      client: 'Client',
      personalProject: 'Personal project',
      year: 'Year',
      category: 'Category',
      tools: 'Tools',
      challenge: 'Challenge',
      approach: 'Approach',
      solution: 'Solution',
      brandColors: 'Brand Colors',
      realization: 'Realization',
      result: 'Result',
      gallery: 'Gallery',
      typography: 'Typography',
      colors: 'Colors',
      video: 'Video',
      next: 'Next project',
    },
    illustrations: {
      kicker: 'Illustrations',
      title: 'Illustrations',
      lead: 'Vector graphics, stylized illustrations and the ability to work in various styles, from cartoon to realistic.',
    },
  },
};
