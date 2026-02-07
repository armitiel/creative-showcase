import { useState, useEffect, useCallback } from 'react';
import { projects } from '@/data/projects';
import { withBaseUrl } from '@/lib/utils';

/**
 * Collects all image URLs from projects data and critical assets,
 * preloads them in the background, and reports progress.
 */
function collectAllImageUrls(): string[] {
  const urls = new Set<string>();

  // Critical assets
  urls.add('/avatar.png');
  urls.add('/favicon.png');

  for (const project of projects) {
    // Thumbnail
    if (project.thumbnail) urls.add(project.thumbnail);

    // Hero animation
    if (project.heroAnimation) urls.add(project.heroAnimation);

    // Main images
    project.images?.forEach((img) => urls.add(img.src));

    // Real photos
    project.realPhotos?.images?.forEach((img) => urls.add(img.src));

    // Mobile screens
    project.mobileScreens?.screens?.forEach((img) => urls.add(img.src));

    // Device mockup
    if (project.deviceMockup?.image) urls.add(project.deviceMockup.image);

    // Thumbnail grid
    project.thumbnailGrid?.images?.forEach((img) => urls.add(img.src));

    // Retailer images
    project.retailerImages?.forEach((img) => urls.add(img.src));

    // GIF pairs
    project.gifPair?.forEach((img) => urls.add(img.src));

    // Parallax image
    if (project.parallaxImage) {
      urls.add(project.parallaxImage.src);
      if (project.parallaxImage.backgroundImage) {
        urls.add(project.parallaxImage.backgroundImage);
      }
    }
  }

  return Array.from(urls);
}

export function useImagePreloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const preloadImages = useCallback(() => {
    const urls = collectAllImageUrls();
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
