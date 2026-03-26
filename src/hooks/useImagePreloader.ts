import { useState, useEffect, useCallback } from 'react';
import { projects } from '@/data/projects';
import { withBaseUrl } from '@/lib/utils';

const MAX_PRELOAD_WAIT_MS = 2200;
const IMAGE_TIMEOUT_MS = 1800;

/**
 * Collect only lightweight above-the-fold images.
 * Heavy animated GIF thumbnails should not block the initial render.
 */
function collectCriticalImageUrls(): string[] {
  const urls = new Set<string>();

  urls.add('/avatar.webp');

  for (const project of projects) {
    if (project.hidden || !project.thumbnail) continue;
    if (project.thumbnail.toLowerCase().endsWith('.gif')) continue;
    urls.add(project.thumbnail);
  }

  return Array.from(urls);
}

export function useImagePreloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const preloadImages = useCallback(() => {
    const urls = collectCriticalImageUrls();
    const total = urls.length;
    let settled = 0;
    let finished = false;
    const cleanupFns: Array<() => void> = [];

    const finish = () => {
      if (finished) return;
      finished = true;
      setProgress(100);
      setIsLoaded(true);
      cleanupFns.forEach((cleanup) => cleanup());
    };

    if (total === 0) {
      finish();
      return () => undefined;
    }

    const markSettled = () => {
      if (finished) return;
      settled += 1;
      setProgress(Math.round((settled / total) * 100));
      if (settled >= total) finish();
    };

    const globalTimeout = window.setTimeout(finish, MAX_PRELOAD_WAIT_MS);
    cleanupFns.push(() => window.clearTimeout(globalTimeout));

    urls.forEach((url) => {
      const img = new Image();
      let done = false;

      const settleOnce = () => {
        if (done) return;
        done = true;
        img.onload = null;
        img.onerror = null;
        window.clearTimeout(imageTimeout);
        markSettled();
      };

      const imageTimeout = window.setTimeout(settleOnce, IMAGE_TIMEOUT_MS);
      img.onload = settleOnce;
      img.onerror = settleOnce;
      img.src = withBaseUrl(url);
    });

    return () => {
      finished = true;
      cleanupFns.forEach((cleanup) => cleanup());
    };
  }, []);

  useEffect(() => preloadImages(), [preloadImages]);

  return { progress, isLoaded };
}
