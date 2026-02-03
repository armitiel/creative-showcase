import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang: Language = language === 'pl' ? 'en' : 'pl';
    setLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 text-sm font-medium border border-border/50 rounded-full hover:border-primary/50 hover:text-foreground transition-all duration-300 text-muted-foreground"
      aria-label={language === 'pl' ? 'Switch to English' : 'Zmień na Polski'}
    >
      {language === 'pl' ? 'EN' : 'PL'}
    </button>
  );
};
