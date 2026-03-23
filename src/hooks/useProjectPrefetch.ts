import { useCallback, useRef } from 'react';
import { projects } from '@/data/projects';
import { withBaseUrl } from '@/lib/utils';

const prefetchedSlugs = new Set<string>();

/**
 * Collects all image URLs for a given project (strategic sections, images, etc.)
 * and preloads them so the detail page loads instantly.
 */
function collectProjectImages(slug: string): string[] {
  const project = projects.find(p => p.slug === slug);
  if (!project) return [];

  const urls = new Set<string>();

  // Main images
  project.images?.forEach(img => urls.add(img.src));

  // Hero animation
  if (project.heroAnimation) urls.add(project.heroAnimation);

  // Strategic section images
  project.strategicSections?.forEach(section => {
    section.images?.forEach(img => urls.add(img.src));
  });

  // GIF pairs
  project.gifPair?.forEach(gif => urls.add(gif.src));

  // Thumbnail grid
  project.thumbnailGrid?.images.forEach(img => urls.add(img.src));

  // Parallax image
  if (project.parallaxImage) {
    urls.add(project.parallaxImage.src);
    if (project.parallaxImage.backgroundImage) urls.add(project.parallaxImage.backgroundImage);
  }

  // Real photos
  project.realPhotos?.images.forEach(img => urls.add(img.src));

  // Mobile screens
  project.mobileScreens?.screens.forEach(s => urls.add(s.src));
  project.mobileScreens?.sectionImages?.forEach(s => urls.add(s.src));

  // Device mockup
  if (project.deviceMockup?.image) urls.add(project.deviceMockup.image);

  return Array.from(urls);
}

export function usePrefetchProject() {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const prefetch = useCallback((slug: string) => {
    if (prefetchedSlugs.has(slug)) return;

    // Small delay to avoid prefetching on quick mouse passes
    timerRef.current = setTimeout(() => {
      prefetchedSlugs.add(slug);
      const urls = collectProjectImages(slug);
      urls.forEach(url => {
        const img = new Image();
        img.src = withBaseUrl(url);
      });
    }, 200);
  }, []);

  const cancel = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  return { prefetch, cancel };
}
