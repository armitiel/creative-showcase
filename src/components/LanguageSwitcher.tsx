import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang: Language = language === 'pl' ? 'en' : 'pl';
    setLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 text-sm font-semibold bg-primary/10 border border-primary/50 rounded-full hover:bg-primary/20 hover:border-primary transition-all duration-300 text-primary"
      aria-label={language === 'pl' ? 'Switch to English' : 'Zmień na Polski'}
    >
      <Globe className="w-4 h-4" />
      <span>{language.toUpperCase()}</span>
    </button>
  );
};
