import { useState, useEffect, useCallback } from 'react';
import { projects } from '@/data/projects';
import { withBaseUrl } from '@/lib/utils';

/**
 * Collects only the images visible on the landing page (hero texture is
 * handled by Vite imports, so we only need project thumbnails + avatar).
 * Project-detail images are loaded lazily when the user navigates.
 */
function collectCriticalImageUrls(): string[] {
  const urls = new Set<string>();

  // Avatar shown in About section
  urls.add('/avatar.webp');

  // Project thumbnails shown in the grid on the landing page
  for (const project of projects) {
    if (project.hidden) continue;
    if (project.thumbnail) urls.add(project.thumbnail);
  }

  return Array.from(urls);
}

export function useImagePreloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const preloadImages = useCallback(() => {
    const urls = collectCriticalImageUrls();
    const total = urls.length;
    let loaded = 0;

    if (total === 0) {
      setProgress(100);
      setIsLoaded(true);
      return;
    }

    const updateProgress = () => {
      loaded++;
      const pct = Math.round((loaded / total) * 100);
      setProgress(pct);
      if (loaded >= total) {
        setIsLoaded(true);
      }
    };

    urls.forEach((url) => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress; // count errors too so we don't block
      img.src = withBaseUrl(url);
    });
  }, []);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  return { progress, isLoaded };
}
