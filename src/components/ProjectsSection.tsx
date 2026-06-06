import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { useTranslatedProjects, TranslatedProject } from '@/hooks/useTranslatedProject';
import { Reveal } from '@/components/Reveal';
import { withBaseUrl } from '@/lib/utils';

type FilterKey = 'all' | 'branding' | 'uiux' | 'threeD' | 'game' | 'art' | 'motion';

/** Maps filter keys to tokens found in project.category strings. */
const CATEGORY_TOKEN: Record<Exclude<FilterKey, 'all'>, string> = {
  branding: 'branding',
  uiux: 'ui/ux',
  threeD: '3d',
  game: 'game',
  art: 'art',
  motion: 'motion',
};

/** Wide (featured) cards. */
const FEATURED_SLUGS = new Set(['hubble-rx', 'olympus-defence']);

/** Thumbnails shown "as before": logos centered on their own background. */
const THUMB_STYLE: Record<string, { background: string; scale?: number }> = {
  'shadow-tagger': { background: '#141414', scale: 0.7 },
};

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

const matchesFilter = (p: TranslatedProject, f: FilterKey) => {
  if (f === 'all') return true;
  return p.category.toLowerCase().includes(CATEGORY_TOKEN[f]);
};

export const ProjectsSection = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const projects = useTranslatedProjects();
  const [filter, setFilter] = useState<FilterKey>('all');

  const filters: { key: FilterKey; label: string }[] = useMemo(
    () => [
      { key: 'all', label: t.work.all },
      { key: 'branding', label: t.work.categories.branding },
      { key: 'uiux', label: t.work.categories.uiux },
      { key: 'threeD', label: t.work.categories.threeD },
      { key: 'game', label: t.work.categories.game },
      { key: 'art', label: t.work.categories.art },
      { key: 'motion', label: t.work.categories.motion },
    ],
    [t]
  );

  const showIllustrations = filter === 'all' || filter === 'art';
  const total = String(projects.length + 1).padStart(2, '0'); // +1 = Illustrations card

  return (
    <section className="sec" id="work">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="kicker" style={{ marginBottom: 14 }}>
              {t.work.kicker}
            </div>
            <h2>{t.work.title}</h2>
          </div>
          <div className="section-num">/ 01 — {total}</div>
        </Reveal>

        <div className="filters">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn ${filter === f.key ? 'active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="work-grid">
          {projects.map((p, i) => {
            if (!matchesFilter(p, filter)) return null;
            const style = THUMB_STYLE[p.slug];
            return (
              <Reveal
                key={p.slug}
                as="article"
                className={`card ${FEATURED_SLUGS.has(p.slug) ? 'feat' : ''}`}
                delay={(i % 2) * 0.09}
                onClick={() => navigate(`/project/${p.slug}`)}
              >
                <div className={`media ${style ? 'pad' : ''}`} style={style ? { background: style.background } : undefined}>
                  <span className="card-idx">
                    {String(i + 1).padStart(2, '0')} / {total}
                  </span>
                  <img
                    src={withBaseUrl(p.thumbnail)}
                    alt={p.title}
                    loading="lazy"
                    style={style?.scale ? { maxWidth: `${style.scale * 100}%`, maxHeight: `${style.scale * 100}%` } : undefined}
                  />
                  <span className="card-go">
                    <ArrowIcon />
                  </span>
                </div>
                <div className="card-body">
                  <div>
                    <div className="card-title">{p.title}</div>
                    <div className="card-sub">{p.description}</div>
                  </div>
                  <div className="card-tags">{p.category}</div>
                </div>
              </Reveal>
            );
          })}

          {/* Illustrations card — as in the previous layout */}
          {showIllustrations && (
            <Reveal as="article" className="card" delay={0.09} onClick={() => navigate('/illustrations')}>
              <div className="media">
                <span className="card-idx">
                  {total} / {total}
                </span>
                <img
                  src={withBaseUrl('/illustrations/cartoon/gentleman-portrait.webp')}
                  alt={t.nav.illustrations}
                  loading="lazy"
                />
                <span className="card-go">
                  <ArrowIcon />
                </span>
              </div>
              <div className="card-body">
                <div>
                  <div className="card-title">{t.nav.illustrations}</div>
                  <div className="card-sub">
                    {language === 'pl'
                      ? 'Stylizowane ilustracje wektorowe, cartoon i grafiki do gier, praca w różnych stylach.'
                      : 'Stylized vector illustrations, cartoon and game graphics, working in various styles.'}
                  </div>
                </div>
                <div className="card-tags">{t.work.categories.art}</div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};
