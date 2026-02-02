import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefixes app base URL (Vite `import.meta.env.BASE_URL`) to internal asset paths.
 * Needed when the app is served from a subpath (e.g. /portfolio/ on OVH).
 */
export function withBaseUrl(path: string): string {
  if (!path) return path;
  // leave absolute URLs and data URIs unchanged
  if (/^(https?:)?\/\//i.test(path) || path.startsWith("data:")) return path;

  const base = (import.meta as any).env?.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;

  if (path.startsWith("/")) return normalizedBase + path.slice(1);
  return normalizedBase + path;
}
