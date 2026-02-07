import { useState, useCallback } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import { SurveyPopup } from "@/components/SurveyPopup";
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
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <div className={!showContent ? 'invisible' : 'animate-fade-in'}>
              <ScrollToTop />
              <SurveyPopup />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/project/:slug" element={<ProjectDetail />} />
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