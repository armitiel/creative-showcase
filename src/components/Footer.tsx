import { useLanguage } from '@/i18n/LanguageContext';

interface FooterProps {
  /** Wymusza jasne kolory na ciemnym tle podstron projektow (lokalny motyw `project.theme === 'dark'`). */
  dark?: boolean;
}

export const Footer = ({ dark = false }: FooterProps) => {
  const { t } = useLanguage();

  return (
    <footer className="footer" style={dark ? { borderTopColor: 'rgba(255,255,255,0.15)' } : undefined}>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-big" style={dark ? { color: '#ffffff' } : undefined}>
            Amitiel<span className="dot">.</span>
          </div>
          <div className="footer-meta" style={dark ? { color: 'rgba(255,255,255,0.6)' } : undefined}>
            <div>© {new Date().getFullYear()} Amitiel Angelisme</div>
            <div>{t.footer.rights}</div>
            <div>{t.footer.built}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
