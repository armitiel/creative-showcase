import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from './translations';

type Translations = typeof translations.pl;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Detect if user is in Poland based on timezone or locale
const detectDefaultLanguage = (): Language => {
  try {
    // Check localStorage first for manual preference
    const saved = localStorage.getItem('preferred-language');
    if (saved === 'pl' || saved === 'en') {
      return saved;
    }

    // Check timezone - Poland uses Europe/Warsaw
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone === 'Europe/Warsaw') {
      return 'pl';
    }

    // Check browser language as fallback
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('pl')) {
      return 'pl';
    }

    // Default to English for everyone else
    return 'en';
  } catch {
    return 'en';
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>('pl');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const detectedLang = detectDefaultLanguage();
    setLanguageState(detectedLang);
    setIsInitialized(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const t = translations[language];

  // Prevent flash of wrong language
  if (!isInitialized) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
