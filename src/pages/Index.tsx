import { useState, useCallback } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { useImagePreloader } from '@/hooks/useImagePreloader';

const Index = () => {
  const { progress, isLoaded } = useImagePreloader();
  const [showContent, setShowContent] = useState(false);

  const handleLoadingFinished = useCallback(() => {
    setShowContent(true);
  }, []);

  return (
    <>
      {!showContent && (
        <LoadingScreen
          progress={progress}
          isLoaded={isLoaded}
          onFinished={handleLoadingFinished}
        />
      )}
      <div className={`min-h-screen bg-background bg-noise ${!showContent ? 'invisible' : 'animate-fade-in'}`}>
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
