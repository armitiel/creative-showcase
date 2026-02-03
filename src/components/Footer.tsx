import { useLanguage } from '@/i18n/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Amitiel Angelisme. {t.footer.rights}
          </p>
          <p className="text-muted-foreground text-sm">
            {t.footer.madeWith} <span className="text-primary">♥</span> {t.footer.inPoland}
          </p>
        </div>
      </div>
    </footer>
  );
};
