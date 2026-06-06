import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { useTranslatedProjects } from '@/hooks/useTranslatedProject';
import { withBaseUrl } from '@/lib/utils';

const MARQUEE = ['Branding', '3D', 'UI / UX', 'Motion', 'Game Art', 'Illustration'];

export const HeroSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const projects = useTranslatedProjects();
  const featured = projects[0];

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero" id="hero">
      <div className="wrap">
        <div className="hero-kicker kicker">{t.hero.kicker}</div>
        <h1>
          <span className="l1">Amitiel</span>
          <span className="l2">
            Angelisme<span className="dot">.</span>
          </span>
        </h1>
        <div className="hero-grid">
          <div className="hero-main">
            <p className="hero-lead">{t.hero.lead}</p>
            <button className="hero-cta" onClick={scrollToWork}>
              <span>{t.hero.cta}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
          {featured && (
            <div className="hero-feature" onClick={() => navigate(`/project/${featured.slug}`)}>
              <div className="fcap">
                <span>{t.hero.featured}</span>
                <span>01 / {String(projects.length).padStart(2, '0')}</span>
              </div>
              <div className="media">
                <img src={withBaseUrl('/projects/hubble/website-presentation.webp')} alt={featured.title} loading="eager" />
              </div>
              <div className="fmeta">
                <strong>HubbleRx</strong>
                <span>Branding · UI</span>
              </div>
            </div>
          )}
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
