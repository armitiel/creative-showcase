import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/i18n/LanguageContext';
import logo from '@/assets/logo.png';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { t } = useLanguage();
  const isMobileRef = useRef(window.innerWidth < 768);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const onChange = () => {
      isMobileRef.current = mql.matches;
    };
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const isAtBottom = (winHeight + currentScrollY) >= (docHeight - 300);

    setIsScrolled(currentScrollY > 100);

    // Mobile: always visible
    if (isMobileRef.current) {
      setIsVisible(true);
    } else if (isAtBottom || currentScrollY < 100) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY.current) {
      setIsVisible(true);
    }

    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { href: '#hero', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#services', label: t.nav.services },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30 transition-all duration-500 ease-out ${
        isScrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.25)]' : 'shadow-none'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center ml-4">
            <img src={logo} alt="Amitiel Angelisme" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.amitiel.cv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              CV
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 px-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.amitiel.cv"
              target="_blank"
              rel="noopener noreferrer"
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
