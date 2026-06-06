import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from '@/components/Reveal';
import { withBaseUrl } from '@/lib/utils';

const TOOLS = ['Illustrator', 'Photoshop', 'Figma', 'After Effects', 'Blender', 'ZBrush', 'Spine'];

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="sec sec-alt" id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="kicker">{t.about.kicker}</div>
          </div>
          <div className="section-num">/ 02</div>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-portrait">
            <div className="media">
              <img src={withBaseUrl('/avatar.webp')} alt="Amitiel Angelisme" loading="lazy" />
            </div>
            <div className="pcap">{t.about.location}</div>
          </Reveal>
          <Reveal className="about-text" delay={0.09}>
            <h3 className="about-lead">{t.about.title}</h3>
            <div className="about-bio">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
            </div>
            <div className="about-meta">
              <div>
                <h4>{t.about.eduTitle}</h4>
                <p>{t.about.edu1}</p>
                <p>{t.about.edu2}</p>
              </div>
              <div>
                <h4>{t.about.toolsTitle}</h4>
                <div className="tool-list">
                  {TOOLS.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ marginTop: 28 }}>
              <Link to="/illustrations" className="cs-ext">
                <span>{t.nav.illustrations}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
