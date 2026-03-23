import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import { withBaseUrl } from '@/lib/utils';
import { useLanguage } from '@/i18n/LanguageContext';
import { useTranslatedProjects } from '@/hooks/useTranslatedProject';
import { Paintbrush } from 'lucide-react';
import { usePrefetchProject } from '@/hooks/useProjectPrefetch';

export const ProjectsSection = () => {
  const { t, language } = useLanguage();
  const projects = useTranslatedProjects();
  // Use 'all' as internal state to avoid language-dependent state issues
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });
  const { prefetch, cancel } = usePrefetchProject();

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
    <section id="projects" className="py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-12 opacity-0 ${headerVisible ? 'animate-fade-in' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4 font-['Righteous']">
            {t.projects.title} <span className="text-gradient">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categoryOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setActiveCategory(option.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === option.key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.slug}`}
              onMouseEnter={() => prefetch(project.slug)}
              onMouseLeave={cancel}
              className={`group block bg-secondary rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 opacity-0 shadow-sm hover:shadow-md ${
                gridVisible ? 'animate-scale-in' : ''
              }`}
              style={{ animationDelay: gridVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className={`aspect-[4/3] relative overflow-hidden ${project.slug === 'shadow-tagger' ? 'bg-[#141414] flex items-center justify-center' : 'bg-secondary'}`}>
                <img
                  src={withBaseUrl(project.thumbnail)}
                  alt={project.title}
                  className={`transition-all duration-500 grayscale group-hover:grayscale-0 ${
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
                  <span className="px-4 py-2 bg-background/90 rounded-full text-sm font-medium">
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
          ))}

          {/* Illustrations card — visible in 'all' or 'Art' category */}
          {(activeCategory === 'all' || activeCategory === 'Art' || activeCategory === 'Ilustracje') && (
            <Link
              to="/illustrations"
              className={`group block bg-secondary rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 opacity-0 shadow-sm hover:shadow-md ${
                gridVisible ? 'animate-scale-in' : ''
              }`}
              style={{ animationDelay: gridVisible ? `${filteredProjects.length * 100}ms` : '0ms' }}
            >
              <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                <img
                  src={withBaseUrl('/illustrations/cartoon/gentleman-portrait.jpg')}
                  alt={language === 'pl' ? 'Ilustracje' : 'Illustrations'}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-2 bg-background/90 rounded-full text-sm font-medium">
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
                    ? 'Stylizowane ilustracje wektorowe, cartoon i grafiki do gier — praca w różnych stylach.'
                    : 'Stylized vector illustrations, cartoon and game graphics — working in various styles.'}
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
