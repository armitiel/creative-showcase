import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useEffect, type ReactNode } from 'react';
import { withBaseUrl } from '@/lib/utils';
import { useLanguage } from '@/i18n/LanguageContext';
import { useTranslatedProjects } from '@/hooks/useTranslatedProject';
import { Paintbrush } from 'lucide-react';
import { usePrefetchProject } from '@/hooks/useProjectPrefetch';

// Each card reveals on its own when it scrolls into view, with a small per-row
// stagger so cards within a row pop in one after another — both on first reveal
// and after a filter change.
const RevealCard = ({ index, children }: { index: number; children: ReactNode }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.25 });
  return (
    <div
      ref={ref}
      className={`h-full opacity-0 ${isVisible ? 'animate-scale-in' : ''}`}
      style={{ animationDelay: isVisible ? `${250 + (index % 3) * 150}ms` : '0ms', animationFillMode: 'both' }}
    >
      {children}
    </div>
  );
};

export const ProjectsSection = () => {
  const { t, language } = useLanguage();
  const projects = useTranslatedProjects();
  // Use 'all' as internal state to avoid language-dependent state issues
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { prefetch, cancel } = usePrefetchProject();

  // Odbior wyboru kategorii z odnosnikow w hero (np. klik "Branding" ustawia
  // aktywny filtr, tak jakby zostal recznie wybrany).
  useEffect(() => {
    const handleSelectCategory = (e: Event) => {
      const category = (e as CustomEvent<string>).detail;
      if (category) setActiveCategory(category);
    };
    window.addEventListener('select-project-category', handleSelectCategory);
    return () => window.removeEventListener('select-project-category', handleSelectCategory);
  }, []);

  // Get unique categories from actual projects data (support comma-separated)
  const projectCategories = [...new Set(projects.flatMap(p => p.category.split(', ').map(c => c.trim())))];
  
  // Create display categories with 'all' as special key
  const categoryOptions = [
    { key: 'all', label: t.projects.categories.all },
    ...projectCategories.map(cat => ({ key: cat, label: cat }))
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category.split(', ').map(c => c.trim()).includes(activeCategory));

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 opacity-0 ${headerVisible ? 'animate-fade-in' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-normal font-['Righteous'] text-center md:text-left">
            {t.projects.title} <span className="text-gradient">{t.projects.titleHighlight}</span>
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2">
            {categoryOptions.map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setActiveCategory(option.key)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === option.key
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <RevealCard key={`${activeCategory}-${project.id}`} index={index}>
            <Link
              to={`/project/${project.slug}`}
              onMouseEnter={() => prefetch(project.slug)}
              onMouseLeave={cancel}
              className="group block h-full bg-secondary rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className={`aspect-[4/3] relative overflow-hidden ${project.slug === 'shadow-tagger' ? 'bg-[#141414] flex items-center justify-center' : 'bg-secondary'}`}>
                <img
                  src={withBaseUrl(project.thumbnail)}
                  alt={project.title}
                  className={`transition-all duration-500 grayscale-[0.4] group-hover:grayscale-0 ${
                    project.slug === 'shadow-tagger'
                      ? 'w-[70%] h-auto object-contain group-hover:scale-110'
                      : 'w-full h-full object-cover group-hover:scale-110'
                  }`}
                />
                {/* Delikatny biały overlay dla ciemnych miniatur */}
                {(project.slug === 'portal-smart-checkout' || project.slug === 'nfc-card') && (
                  <div className="absolute inset-0 bg-white/25 pointer-events-none" />
                )}
                {project.slug === 'selva-rape' && (
                  <div className="absolute inset-0 bg-white/10 pointer-events-none" />
                )}
                {project.slug === 'nft-generative-system' && (
                  <div className="absolute inset-0 bg-white/20 pointer-events-none" />
                )}
                {project.slug === 'aloha-centrum' && (
                  <div className="absolute inset-0 bg-white/20 pointer-events-none" />
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-2 bg-background/90 rounded-xl text-sm font-medium">
                    {t.projects.viewProject}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <Badge variant="outline" className="mb-2 text-xs border-border text-muted-foreground">
                  {project.category}
                </Badge>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
            </RevealCard>
          ))}

          {/* Illustrations card — visible in 'all' or 'Art' category */}
          {(activeCategory === 'all' || activeCategory === 'Art' || activeCategory === 'Ilustracje') && (
            <RevealCard key={`${activeCategory}-illustrations`} index={filteredProjects.length}>
            <Link
              to="/illustrations"
              className="group block h-full bg-secondary rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                <img
                  src={withBaseUrl('/illustrations/cartoon/gentleman-portrait.webp')}
                  alt={language === 'pl' ? 'Ilustracje' : 'Illustrations'}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 grayscale-[0.4] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-2 bg-background/90 rounded-xl text-sm font-medium">
                    {t.projects.viewProject}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <Badge variant="outline" className="mb-2 text-xs border-border text-muted-foreground">
                  <Paintbrush className="w-3 h-3 mr-1" />
                  {language === 'pl' ? 'Ilustracje' : 'Illustrations'}
                </Badge>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {language === 'pl' ? 'Ilustracje' : 'Illustrations'}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {language === 'pl'
                    ? 'Stylizowane ilustracje wektorowe, cartoon i grafiki do gier, praca w różnych stylach.'
                    : 'Stylized vector illustrations, cartoon and game graphics, working in various styles.'}
                </p>
              </div>
            </Link>
            </RevealCard>
          )}
        </div>
      </div>
    </section>
  );
};
