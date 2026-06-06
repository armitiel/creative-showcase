import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { useTheme } from '@/i18n/ThemeContext';
import logo from '@/assets/logo.webp';

const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
  </svg>
);

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (id: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const links: { id: string; label: string }[] = [
    { id: 'work', label: t.nav.work },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <>
      <header className="nav">
        <a
          className="brand"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname !== '/') navigate('/');
            else window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img className="brand-logo" src={logo} alt="Amitiel Angelisme" />
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a
              key={l.id}
              href={`/#${l.id}`}
              onClick={(e) => {
                e.preventDefault();
                goTo(l.id);
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-tools">
          <button className="pill-btn" onClick={toggleTheme} aria-label="Toggle theme">
            <MoonIcon />
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <a className="pill-btn is-cv" href="https://www.amitiel.cv" target="_blank" rel="noopener noreferrer">
            {t.nav.cv}
          </a>
          <div className="lang-seg" role="group" aria-label="Language">
            <button className={language === 'pl' ? 'active' : ''} onClick={() => setLanguage('pl')}>
              PL
            </button>
            <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>
              EN
            </button>
          </div>
          <button className="pill-btn nav-burger" onClick={() => setMenuOpen(true)} aria-label="Menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <div className={`mmenu ${menuOpen ? 'open' : ''}`}>
        <div className="mmenu-top">
          <span className="brand">
            <img className="brand-logo" src={logo} alt="Amitiel Angelisme" />
          </span>
          <button className="pill-btn" onClick={() => setMenuOpen(false)} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav>
          {links.map((l) => (
            <a
              key={l.id}
              href={`/#${l.id}`}
              onClick={(e) => {
                e.preventDefault();
                goTo(l.id);
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.amitiel.cv"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.cv}
          </a>
        </nav>
      </div>
    </>
  );
};
