import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const categories = ['Wszystkie', 'Logo', 'Branding', 'Packaging', 'Social Media', 'Print'];

const projects = [
  { id: 1, title: 'TechStart Logo', category: 'Logo', image: '/placeholder.svg', description: 'Nowoczesne logo dla startupu technologicznego' },
  { id: 2, title: 'CaféBella Branding', category: 'Branding', image: '/placeholder.svg', description: 'Kompletna identyfikacja wizualna kawiarni' },
  { id: 3, title: 'EcoBox Packaging', category: 'Packaging', image: '/placeholder.svg', description: 'Ekologiczne opakowania dla marki kosmetycznej' },
  { id: 4, title: 'FitLife Social', category: 'Social Media', image: '/placeholder.svg', description: 'Grafiki social media dla klubu fitness' },
  { id: 5, title: 'Urban Fashion Logo', category: 'Logo', image: '/placeholder.svg', description: 'Minimalistyczne logo dla marki odzieżowej' },
  { id: 6, title: 'Artisan Bakery Print', category: 'Print', image: '/placeholder.svg', description: 'Materiały drukowane dla piekarni rzemieślniczej' },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'Wszystkie'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Poppins']">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>
              <div className="p-4">
                <Badge variant="outline" className="mb-2 text-xs">
                  {project.category}
                </Badge>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl bg-card border-border">
            <DialogTitle className="sr-only">{selectedProject?.title}</DialogTitle>
            {selectedProject && (
              <div>
                <div className="aspect-video bg-secondary rounded-lg overflow-hidden mb-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Badge variant="outline" className="mb-2">
                  {selectedProject.category}
                </Badge>
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-muted-foreground">{selectedProject.description}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
