import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ThemeProvider } from "@/i18n/ThemeContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import Illustrations from "./pages/Illustrations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Navigation />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/illustrations" element={<Illustrations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
