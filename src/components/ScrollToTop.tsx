import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // If navigating to home with scrollToProjects state, scroll to projects section
    if (pathname === "/" && (state as any)?.scrollToProjects) {
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "instant" });
        }
      }, 100);
    } else {
      // Always scroll to top for all other navigations (including project pages)
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
};

