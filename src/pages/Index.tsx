import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string; scrollToProjects?: boolean } | null;
    const target = state?.scrollTo ?? (state?.scrollToProjects ? 'work' : undefined);
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      window.history.replaceState({}, '');
    }
  }, [location.state]);

  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
