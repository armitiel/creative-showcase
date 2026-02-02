import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { projects, categories } from '@/data/projects';
import { useState } from 'react';
import { withBaseUrl } from '@/lib/utils';

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  const filteredProjects = activeCategory === 'Wszystkie'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center mb-12 opacity-0 ${headerVisible ? 'animate-fade-in' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4 font-['Righteous']">
            Moje <span className="text-gradient">Projekty</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wybrane realizacje z ostatnich lat. Każdy projekt to unikalna historia i wyzwanie.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
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
              className={`group block bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 opacity-0 ${
                gridVisible ? 'animate-scale-in' : ''
              }`}
              style={{ animationDelay: gridVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                <img
                  src={withBaseUrl(project.thumbnail)}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-2 bg-background/90 rounded-full text-sm font-medium">
                    Zobacz projekt
                  </span>
                </div>
              </div>
              <div className="p-4">
                <Badge variant="outline" className="mb-2 text-xs">
                  {project.category}
                </Badge>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
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
