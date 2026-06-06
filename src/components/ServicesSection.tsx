import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from '@/components/Reveal';

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="sec" id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="kicker" style={{ marginBottom: 14 }}>
              {t.services.kicker}
            </div>
            <h2>{t.services.title}</h2>
          </div>
          <div className="section-num">/ 03</div>
        </Reveal>
        <div className="svc-list">
          {t.services.items.map((s, i) => (
            <Reveal key={s.title} className="svc-row" delay={(i % 3) * 0.06}>
              <div className="svc-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="svc-name">{s.title}</div>
              <div className="svc-desc">{s.description}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
