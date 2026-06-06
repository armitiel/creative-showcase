import { useState, useCallback } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import Illustrations from "./pages/Illustrations";
import NotFound from "./pages/NotFound";
// import { SurveyPopup } from "@/components/SurveyPopup"; // pop-up ankiety wylaczony
import { LoadingScreen } from "@/components/LoadingScreen";
import { useImagePreloader } from "@/hooks/useImagePreloader";

const queryClient = new QueryClient();

const App = () => {
  const { progress, isLoaded } = useImagePreloader();
  const [showContent, setShowContent] = useState(false);

  const handleLoadingFinished = useCallback(() => {
    setShowContent(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {!showContent && (
            <LoadingScreen
              progress={progress}
              isLoaded={isLoaded}
              onFinished={handleLoadingFinished}
            />
          )}
          {/* Pop-up z ankieta wylaczony na zyczenie */}
          {/* <SurveyPopup ready={showContent} /> */}
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            {/* Navigation outside animated wrapper to preserve fixed positioning */}
            {showContent && <Navigation />}
            <div className={!showContent ? 'invisible' : 'animate-fade-in-opacity'}>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/project/:slug" element={<ProjectDetail />} />
                <Route path="/illustrations" element={<Illustrations />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;