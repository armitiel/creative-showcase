import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
// Force cache invalidation

const scrollToElement = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "instant" });
  } else {
    // Fallback: if element not yet in DOM, use rAF to catch next paint
    requestAnimationFrame(() => {
      const elRetry = document.getElementById(id);
      if (elRetry) {
        elRetry.scrollIntoView({ behavior: "instant" });
      }
    });
  }
};

export const ScrollToTop = () => {
  const { pathname, state, hash } = useLocation();

  useLayoutEffect(() => {
    if (pathname === "/" && (state as any)?.scrollToProjects) {
      scrollToElement("projects");
    } else if (pathname === "/" && ((state as any)?.scrollToContact || hash === "#contact")) {
      scrollToElement("contact");
    } else if (pathname === "/" && hash === "#projects") {
      scrollToElement("projects");
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, state, hash]);

  return null;
};

