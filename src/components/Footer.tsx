import { useLanguage } from '@/i18n/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-big">
            Amitiel<span className="dot">.</span>
          </div>
          <div className="footer-meta">
            <div>© {new Date().getFullYear()} Amitiel Angelisme</div>
            <div>{t.footer.rights}</div>
            <div>{t.footer.built}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
