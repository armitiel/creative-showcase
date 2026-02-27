import { useLanguage } from '@/i18n/LanguageContext';
import { Project, getProjectBySlug, projects } from '@/data/projects';
import { getProjectTranslation } from '@/data/projectTranslations';

export interface TranslatedProject extends Omit<Project, 'title' | 'description' | 'fullDescription' | 'challenge' | 'solution' | 'results' | 'images' | 'mobileScreens' | 'gifPair' | 'heroFollowImages'> {
  title: string;
  description: string;
  fullDescription: string;
  challenge?: string;
  solution?: string;
  results?: string;
  images: {
    src: string;
    alt: string;
    caption?: string;
    displayMode?: 'cover' | 'centered' | 'laptop';
    backgroundColor?: string;
    backgroundGradient?: string;
    imageScale?: number;
    gridLayout?: '2x2';
    noMagnifier?: boolean;
    fullHeight?: boolean;
  }[];
  typography?: {
    description: string;
    fonts: Project['typography'] extends { fonts: infer F } ? F : never;
    image?: string;
  };
  colors?: {
    description: string;
    palette: Project['colors'] extends { palette: infer P } ? P : never;
  };
  mobileScreens?: {
    title?: string;
    description?: string;
    screens: { src: string; alt: string; caption?: string }[];
    sectionImages?: { src: string; alt: string; caption?: string; backgroundColor?: string }[];
  };
  deviceMockup?: {
    title?: string;
    description?: string;
    image: string;
    alt: string;
  };
  thumbnailGrid?: {
    title?: string;
    description?: string;
    images: NonNullable<Project['thumbnailGrid']>['images'];
  };
  realPhotos?: {
    layout: '2x2';
    title?: string;
    images: { src: string; alt: string; noMagnifier?: boolean }[];
  };
  gifPair?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  strategicSections?: { title: string; content: string }[];
  heroFollowImages?: {
    src: string;
    alt: string;
    caption?: string;
    displayMode?: 'cover' | 'centered';
    backgroundColor?: string;
    imageScale?: number;
  }[];
  youtubeVideo?: {
    url: string;
    title?: string;
    description?: string;
  };
}

export const useTranslatedProject = (slug: string | undefined): TranslatedProject | undefined => {
  const { language } = useLanguage();
  
  if (!slug) return undefined;
  
  const project = getProjectBySlug(slug);
  if (!project) return undefined;
  
  const translation = getProjectTranslation(slug, language);
  
  if (!translation) {
    // Return original project if no translation available
    return project as TranslatedProject;
  }
  
  // Translate image captions
  const translatedImages = project.images.map((img, index) => ({
    ...img,
    caption: translation.imageCaptions?.[index] ?? img.caption,
  }));

  // Translate mobile screen captions
  const translatedMobileScreens = project.mobileScreens ? {
    title: translation.mobileScreensTitle ?? project.mobileScreens.title,
    description: translation.mobileScreensDescription ?? project.mobileScreens.description,
    screens: project.mobileScreens.screens.map((screen, index) => ({
      ...screen,
      caption: translation.mobileScreenCaptions?.[index] ?? screen.caption,
    })),
    sectionImages: project.mobileScreens.sectionImages?.map((img, index) => ({
      ...img,
      caption: translation.sectionImageCaptions?.[index] ?? img.caption,
    })),
  } : undefined;

  // Translate GIF pair captions
  const translatedGifPair = project.gifPair?.map((gif, index) => ({
    ...gif,
    caption: translation.gifPairCaptions?.[index] ?? gif.caption,
  }));
  
  // Translate hero follow image captions
  const translatedHeroFollowImages = project.heroFollowImages?.map((img, index) => ({
    ...img,
    caption: translation.heroFollowImageCaptions?.[index] ?? img.caption,
  }));

  return {
    ...project,
    title: translation.title,
    description: translation.description,
    fullDescription: translation.fullDescription,
    challenge: translation.challenge ?? project.challenge,
    solution: translation.solution ?? project.solution,
    results: translation.results ?? project.results,
    images: translatedImages,
    heroFollowImages: translatedHeroFollowImages,
    strategicSections: translation.strategicSections ?? project.strategicSections,
    typography: project.typography ? {
      description: translation.typographyDescription ?? project.typography.description,
      fonts: project.typography.fonts,
      image: project.typography.image,
    } : undefined,
    colors: project.colors ? {
      description: translation.colorsDescription ?? project.colors.description,
      palette: project.colors.palette,
    } : undefined,
    mobileScreens: translatedMobileScreens,
    deviceMockup: project.deviceMockup ? {
      title: translation.deviceMockupTitle ?? project.deviceMockup.title,
      description: translation.deviceMockupDescription ?? project.deviceMockup.description,
      image: project.deviceMockup.image,
      alt: project.deviceMockup.alt,
    } : undefined,
    thumbnailGrid: project.thumbnailGrid ? {
      title: translation.thumbnailGridTitle ?? project.thumbnailGrid.title,
      description: translation.thumbnailGridDescription ?? project.thumbnailGrid.description,
      images: project.thumbnailGrid.images,
    } : undefined,
    realPhotos: project.realPhotos ? {
      layout: project.realPhotos.layout,
      title: translation.realPhotosTitle ?? project.realPhotos.title,
      images: project.realPhotos.images,
    } : undefined,
    gifPair: translatedGifPair,
    youtubeVideo: project.youtubeVideo ? {
      url: project.youtubeVideo.url,
      title: translation.youtubeVideoTitle ?? project.youtubeVideo.title,
      description: translation.youtubeVideoDescription ?? project.youtubeVideo.description,
    } : undefined,
  };
};

// Hook for getting all translated projects (for listing)
export const useTranslatedProjects = (): TranslatedProject[] => {
  const { language } = useLanguage();
  
  return projects.filter((p: Project) => !p.hidden).map((project: Project) => {
    const translation = getProjectTranslation(project.slug, language);
    
    if (!translation) {
      return project as TranslatedProject;
    }
    
    return {
      ...project,
      title: translation.title,
      description: translation.description,
      fullDescription: translation.fullDescription,
    };
  });
};
