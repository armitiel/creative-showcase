import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefixes static asset paths with Vite BASE_URL.
 * This is required because the portfolio is deployed under /portfolio/dist/
 * (so "/projects/..." would otherwise resolve to the site root).
 */
export function assetUrl(input: string) {
  if (!input) return input;
  // keep absolute URLs and data URIs untouched
  if (/^(https?:)?\/\//i.test(input) || /^data:/i.test(input)) return input;

  const base = (import.meta as any).env?.BASE_URL || "/";
  const baseNorm = String(base).endsWith("/") ? String(base) : `${base}/`;
  const path = input.startsWith("/") ? input.slice(1) : input;
  return `${baseNorm}${path}`;
}
