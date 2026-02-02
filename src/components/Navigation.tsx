import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'O mnie' },
  { id: 'projects', label: 'Projekty' },
  { id: 'services', label: 'Usługi' },
  { id: 'contact', label: 'Kontakt' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="text-lg font-semibold text-foreground tracking-wide"
          >
            Amitiel Angelisme
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                className="block py-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                onClick={() => {
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="/"
              className="block py-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
