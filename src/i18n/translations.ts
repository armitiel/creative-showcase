export type Language = 'pl' | 'en';

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
    viewProject: string;
  };
  services: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<Language, TranslationsType> = {
  pl: {
    // Navigation
    nav: {
      home: 'Home',
      projects: 'Projekty',
      services: 'Usługi',
      about: 'O mnie',
      contact: 'Kontakt',
    },
    // Hero
    hero: {
      title: 'PORTFOLIO',
      name: 'Amitiel Angelisme',
      role: 'Creative Designer',
      scroll: 'Scroll',
      specializations: ['Logo', 'Branding', 'Modelowanie 3D', 'Web & App', 'Social Media'],
    },
    // Projects section
    projects: {
      title: 'Wybrane Projekty',
      viewProject: 'Zobacz projekt',
    },
    // Services section
    services: {
      title: 'Usługi',
      subtitle: 'Co mogę dla Ciebie zrobić',
    },
    // About section
    about: {
      title: 'O mnie',
    },
    // Contact section
    contact: {
      title: 'Kontakt',
      subtitle: 'Porozmawiajmy o Twoim projekcie',
      name: 'Imię',
      email: 'Email',
      message: 'Wiadomość',
      send: 'Wyślij wiadomość',
      namePlaceholder: 'Twoje imię',
      emailPlaceholder: 'twoj@email.com',
      messagePlaceholder: 'Opisz swój projekt...',
    },
    // Footer
    footer: {
      rights: 'Wszelkie prawa zastrzeżone.',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      projects: 'Projects',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    // Hero
    hero: {
      title: 'PORTFOLIO',
      name: 'Amitiel Angelisme',
      role: 'Creative Designer',
      scroll: 'Scroll',
      specializations: ['Logo', 'Branding', '3D Modeling', 'Web & App', 'Social Media'],
    },
    // Projects section
    projects: {
      title: 'Selected Projects',
      viewProject: 'View project',
    },
    // Services section
    services: {
      title: 'Services',
      subtitle: 'What I can do for you',
    },
    // About section
    about: {
      title: 'About me',
    },
    // Contact section
    contact: {
      title: 'Contact',
      subtitle: "Let's talk about your project",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Describe your project...',
    },
    // Footer
    footer: {
      rights: 'All rights reserved.',
    },
  },
} as const;

export type Translations = typeof translations.pl;
