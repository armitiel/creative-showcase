import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import { withBaseUrl } from '@/lib/utils';
import { useLanguage } from '@/i18n/LanguageContext';
import { useTranslatedProjects } from '@/hooks/useTranslatedProject';

export const ProjectsSection = () => {
  const { t } = useLanguage();
  const projects = useTranslatedProjects();
  // Use 'all' as internal state to avoid language-dependent state issues
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  // Get unique categories from actual projects data
  const projectCategories = [...new Set(projects.map(p => p.category))];
  
  // Create display categories with 'all' as special key
  const categoryOptions = [
    { key: 'all', label: t.projects.categories.all },
    ...projectCategories.map(cat => ({ key: cat, label: cat }))
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-32">
      {/* SVG Filters for glitch effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="accentBlue">
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0.4 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          </filter>
          <filter id="blueChannel">
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" />
          </filter>
        </defs>
      </svg>
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
              className={`group block bg-secondary rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 opacity-0 shadow-sm hover:shadow-md ${
                gridVisible ? 'animate-scale-in' : ''
              }`}
              style={{ animationDelay: gridVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                {/* Main image */}
                <img
                  src={withBaseUrl(project.thumbnail)}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                {/* Red channel offset - animated glitch */}
                <img
                  src={withBaseUrl(project.thumbnail)}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none"
                  style={{ 
                    filter: 'url(#accentBlue)',
                    animation: `glitch-1 ${4 + (index % 3)}s ease-in-out infinite`,
                    animationDelay: `${index * 0.7}s`,
                  }}
                />
                {/* Blue channel offset - animated glitch */}
                <img
                  src={withBaseUrl(project.thumbnail)}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-screen pointer-events-none"
                  style={{ 
                    filter: 'url(#blueChannel)',
                    animation: `glitch-2 ${5 + (index % 2)}s ease-in-out infinite`,
                    animationDelay: `${index * 0.5 + 1}s`,
                  }}
                />
                {/* Animated scanlines */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)',
                    backgroundSize: '100% 2px',
                    animation: `scanline-glitch ${6 + (index % 4)}s ease-in-out infinite`,
                    animationDelay: `${index * 0.3}s`,
                  }}
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
        </div>
      </div>
    </section>
  );
};
