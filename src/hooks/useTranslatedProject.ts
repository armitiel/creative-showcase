import { useLanguage } from '@/i18n/LanguageContext';
import { Project, getProjectBySlug, projects } from '@/data/projects';
import { getProjectTranslation } from '@/data/projectTranslations';

export interface TranslatedProject extends Omit<Project, 'title' | 'description' | 'fullDescription' | 'challenge' | 'solution' | 'results'> {
  title: string;
  description: string;
  fullDescription: string;
  challenge?: string;
  solution?: string;
  results?: string;
  typography?: {
    description: string;
    fonts: Project['typography'] extends { fonts: infer F } ? F : never;
  };
  colors?: {
    description: string;
    palette: Project['colors'] extends { palette: infer P } ? P : never;
  };
  mobileScreens?: {
    title?: string;
    description?: string;
    screens: NonNullable<Project['mobileScreens']>['screens'];
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
    images: NonNullable<Project['realPhotos']>['images'];
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
  
  return {
    ...project,
    title: translation.title,
    description: translation.description,
    fullDescription: translation.fullDescription,
    challenge: translation.challenge ?? project.challenge,
    solution: translation.solution ?? project.solution,
    results: translation.results ?? project.results,
    typography: project.typography ? {
      description: translation.typographyDescription ?? project.typography.description,
      fonts: project.typography.fonts,
    } : undefined,
    colors: project.colors ? {
      description: translation.colorsDescription ?? project.colors.description,
      palette: project.colors.palette,
    } : undefined,
    mobileScreens: project.mobileScreens ? {
      title: translation.mobileScreensTitle ?? project.mobileScreens.title,
      description: translation.mobileScreensDescription ?? project.mobileScreens.description,
      screens: project.mobileScreens.screens,
    } : undefined,
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
  };
};

// Hook for getting all translated projects (for listing)
export const useTranslatedProjects = (): TranslatedProject[] => {
  const { language } = useLanguage();
  
  return projects.map((project: Project) => {
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
