import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, state, hash } = useLocation();

  useEffect(() => {
    // If navigating to home with scrollToProjects state, scroll to projects section
    if (pathname === "/" && (state as any)?.scrollToProjects) {
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "instant" });
        }
      }, 100);
    } else if (pathname === "/" && ((state as any)?.scrollToContact || hash === "#contact")) {
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "instant" });
        }
      }, 100);
    } else if (pathname === "/" && hash === "#projects") {
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
  }, [pathname, state, hash]);

  return null;
};

