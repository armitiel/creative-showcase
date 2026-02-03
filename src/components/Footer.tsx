import { useLanguage } from '@/i18n/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border bg-card text-card-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-card-foreground/60 text-sm">
            © 2026 Amitiel Angelisme. {t.footer.rights}
          </p>
          <p className="text-card-foreground/60 text-sm">
            {t.footer.madeWith} <span className="text-primary">♥</span> {t.footer.inPoland}
          </p>
        </div>
      </div>
    </footer>
  );
};
