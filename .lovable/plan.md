

## Problem

When the `logo-full.png` image was removed from `heroFollowImages` in `projects.ts`, the array shifted from 8 items (index 0-7) to 7 items (index 0-6). However, the `heroFollowImageCaptions` in `projectTranslations.ts` still has 8 entries (index 0-7) with the old mapping. The translation system uses array index to match captions to images, so now every caption is off by one.

### Current misalignment:

| Index | Image (projects.ts) | Caption from translations (index) |
|-------|---------------------|----------------------------------|
| 0 | logo-variants.jpg | "Full version of HubbleRx logo" (OLD index 0 - WRONG) |
| 1 | logo-icon.png | "Logo variants - light/dark" (OLD index 1 - WRONG) |
| 2 | box-mockup.jpg | "Brand graphic mark..." (OLD index 2 - WRONG) |
| 3 | box-mockup-zoom.jpg | "Subscription box mockup..." (OLD index 3 - WRONG) |
| 4 | logo-3d-icon.png | "Close-up subscription box..." (OLD index 4 - WRONG) |
| 5 | website-presentation.jpg | "3D logo icon" (OLD index 5 - WRONG) |
| 6 | ui-elements.png | "Website layout presentation" (OLD index 6 - WRONG) |

## Fix

Shift all `heroFollowImageCaptions` indices down by 1 and remove the deleted logo entry, in both PL and EN translations.

### Corrected mapping:

| Index | Image | Correct PL caption | Correct EN caption |
|-------|-------|--------------------|--------------------|
| 0 | logo-variants.jpg | Warianty logo -- wersja jasna na turkusowym tle i ciemna na bialym tle | Logo variants -- light version on teal background and dark version on white background |
| 1 | logo-icon.png | Znak graficzny marki... | Brand graphic mark referencing the telescope... |
| 2 | box-mockup.jpg | Mockup pudelka subskrypcyjnego HubbleRx z kapsulkami | HubbleRx subscription box mockup with capsules |
| 3 | box-mockup-zoom.jpg | Zblizenie na pudelko subskrypcyjne z detalami brandingu | Close-up of the subscription box with branding details |
| 4 | logo-3d-icon.png | Trojwymiarowa ikona logo HubbleRx | 3D HubbleRx logo icon |
| 5 | website-presentation.jpg | Kompleksowa prezentacja layoutu strony i elementow UI | Comprehensive website layout and UI elements presentation |
| 6 | ui-elements.png | Ilustracje procesu onboardingu i badge czlonkowski | Onboarding process illustrations and membership badge |

### Files to edit

**`src/data/projectTranslations.ts`** -- two changes:
1. PL `heroFollowImageCaptions` (lines 271-279): Remove index 0 ("Pelna wersja logo..."), shift indices 1-7 to 0-6
2. EN `heroFollowImageCaptions` (lines 313-322): Remove index 0 ("Full version of..."), shift indices 1-7 to 0-6

No changes needed in `projects.ts` -- the base captions there are already correct since they were defined inline with each image.

