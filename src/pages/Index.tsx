import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { BrandingBanner } from '@/components/BrandingBanner';
import { Footer } from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const el = document.getElementById(state.scrollTo!);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      // Clear the state so it doesn't re-scroll on re-render
      window.history.replaceState({}, '');
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-background bg-noise">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      {/* <BrandingBanner /> */}
      <Footer />
    </div>
  );
};

export default Index;
