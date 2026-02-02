export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  fullDescription: string;
  client?: string;
  year: string;
  tools: string[];
  images: ProjectImage[];
  challenge?: string;
  solution?: string;
  results?: string;
}

export const categories = ['Wszystkie', 'Logo', 'Branding', 'Packaging', 'Social Media', 'Print'];

export const projects: Project[] = [
  {
    id: 1,
    slug: 'techstart-logo',
    title: 'TechStart Logo',
    category: 'Logo',
    thumbnail: '/placeholder.svg',
    description: 'Nowoczesne logo dla startupu technologicznego',
    fullDescription: 'Projekt logo dla innowacyjnego startupu technologicznego TechStart. Celem było stworzenie nowoczesnej, dynamicznej identyfikacji wizualnej, która odzwierciedla innowacyjność i przyszłościowe podejście firmy.',
    client: 'TechStart Sp. z o.o.',
    year: '2024',
    tools: ['Illustrator', 'Photoshop'],
    challenge: 'Klient potrzebował logo, które będzie wyróżniać się na tle konkurencji w branży tech, jednocześnie pozostając profesjonalne i łatwe do zapamiętania.',
    solution: 'Zaprojektowałem minimalistyczny znak graficzny łączący elementy technologii z dynamicznym ruchem, symbolizującym rozwój i innowacje.',
    results: 'Logo zostało entuzjastycznie przyjęte przez zespół i inwestorów. Firma z powodzeniem wykorzystuje je na wszystkich materiałach marketingowych.',
    images: [
      { src: '/placeholder.svg', alt: 'TechStart Logo - główne', caption: 'Główna wersja logo' },
      { src: '/placeholder.svg', alt: 'TechStart Logo - wariacje', caption: 'Wariacje kolorystyczne' },
      { src: '/placeholder.svg', alt: 'TechStart Logo - mockup', caption: 'Logo na materiałach firmowych' },
      { src: '/placeholder.svg', alt: 'TechStart Logo - aplikacja', caption: 'Aplikacja w digital' },
    ],
  },
  {
    id: 2,
    slug: 'cafebella-branding',
    title: 'CaféBella Branding',
    category: 'Branding',
    thumbnail: '/placeholder.svg',
    description: 'Kompletna identyfikacja wizualna kawiarni',
    fullDescription: 'Kompleksowy projekt identyfikacji wizualnej dla butikowej kawiarni CaféBella. Projekt obejmował logo, typografię, paletę kolorów oraz pełny zestaw materiałów brandingowych.',
    client: 'CaféBella',
    year: '2024',
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
    challenge: 'Kawiarnia potrzebowała spójnej identyfikacji, która odda jej włoski charakter i premium jakość kawy.',
    solution: 'Stworzyłem elegancką identyfikację z elementami vintage, ciepłą paletą kolorów i klasyczną typografią.',
    results: 'Branding pomógł wyróżnić kawiarnię na rynku i przyciągnąć docelową grupę klientów.',
    images: [
      { src: '/placeholder.svg', alt: 'CaféBella Logo', caption: 'Logo kawiarni' },
      { src: '/placeholder.svg', alt: 'CaféBella Menu', caption: 'Projekt menu' },
      { src: '/placeholder.svg', alt: 'CaféBella Kubki', caption: 'Kubki z brandingiem' },
      { src: '/placeholder.svg', alt: 'CaféBella Wnętrze', caption: 'Oznakowanie wnętrza' },
      { src: '/placeholder.svg', alt: 'CaféBella Materiały', caption: 'Materiały drukowane' },
    ],
  },
  {
    id: 3,
    slug: 'ecobox-packaging',
    title: 'EcoBox Packaging',
    category: 'Packaging',
    thumbnail: '/placeholder.svg',
    description: 'Ekologiczne opakowania dla marki kosmetycznej',
    fullDescription: 'Projekt opakowań dla ekologicznej marki kosmetycznej EcoBox. Nacisk na zrównoważony rozwój, naturalne materiały i minimalistyczny design.',
    client: 'EcoBox Cosmetics',
    year: '2024',
    tools: ['Illustrator', 'Photoshop', 'Dimension'],
    challenge: 'Stworzenie opakowań, które komunikują ekologiczne wartości marki przy zachowaniu luksusowego wyglądu.',
    solution: 'Wykorzystałem naturalne kolory, ręcznie rysowane ilustracje botaniczne i ekologiczne materiały.',
    results: 'Opakowania zdobyły uznanie klientów i przyczyniły się do 40% wzrostu sprzedaży.',
    images: [
      { src: '/placeholder.svg', alt: 'EcoBox Opakowanie główne', caption: 'Główne opakowanie produktu' },
      { src: '/placeholder.svg', alt: 'EcoBox Linia produktów', caption: 'Cała linia produktów' },
      { src: '/placeholder.svg', alt: 'EcoBox Detale', caption: 'Detale wykończenia' },
      { src: '/placeholder.svg', alt: 'EcoBox Prezentacja', caption: 'Prezentacja w sklepie' },
    ],
  },
  {
    id: 4,
    slug: 'fitlife-social',
    title: 'FitLife Social',
    category: 'Social Media',
    thumbnail: '/placeholder.svg',
    description: 'Grafiki social media dla klubu fitness',
    fullDescription: 'Kompleksowy projekt grafik do mediów społecznościowych dla sieci klubów fitness FitLife. Dynamiczne, energetyczne wizualizacje promujące zdrowy styl życia.',
    client: 'FitLife Fitness Club',
    year: '2024',
    tools: ['Photoshop', 'Illustrator', 'After Effects'],
    challenge: 'Potrzeba spójnych, angażujących grafik, które przyciągną nowych członków i zmotywują obecnych.',
    solution: 'Stworzyłem energetyczny system wizualny z dynamicznymi kształtami, intensywnymi kolorami i motywacyjnymi hasłami.',
    results: 'Zaangażowanie w social media wzrosło o 150%, liczba zapytań o członkostwo podwoiła się.',
    images: [
      { src: '/placeholder.svg', alt: 'FitLife Post Instagram', caption: 'Posty na Instagram' },
      { src: '/placeholder.svg', alt: 'FitLife Stories', caption: 'Stories templates' },
      { src: '/placeholder.svg', alt: 'FitLife Facebook', caption: 'Grafiki Facebook' },
      { src: '/placeholder.svg', alt: 'FitLife Kampania', caption: 'Kampania promocyjna' },
    ],
  },
  {
    id: 5,
    slug: 'urban-fashion-logo',
    title: 'Urban Fashion Logo',
    category: 'Logo',
    thumbnail: '/placeholder.svg',
    description: 'Minimalistyczne logo dla marki odzieżowej',
    fullDescription: 'Projekt logo dla miejskiej marki odzieżowej Urban Fashion. Minimalistyczne, odważne podejście odzwierciedlające streetwear i kulturę miejską.',
    client: 'Urban Fashion',
    year: '2023',
    tools: ['Illustrator', 'Photoshop'],
    challenge: 'Logo musi być rozpoznawalne zarówno na metkach, jak i w dużym formacie na billboardach.',
    solution: 'Zaprojektowałem bold typograficzne logo z niestandardową literą, która stała się ikoną marki.',
    results: 'Marka zyskała silną rozpoznawalność w segmencie streetwear.',
    images: [
      { src: '/placeholder.svg', alt: 'Urban Fashion Logo', caption: 'Logo główne' },
      { src: '/placeholder.svg', alt: 'Urban Fashion Metka', caption: 'Metki odzieżowe' },
      { src: '/placeholder.svg', alt: 'Urban Fashion Torba', caption: 'Torby zakupowe' },
      { src: '/placeholder.svg', alt: 'Urban Fashion Kampania', caption: 'Kampania wizerunkowa' },
    ],
  },
  {
    id: 6,
    slug: 'artisan-bakery-print',
    title: 'Artisan Bakery Print',
    category: 'Print',
    thumbnail: '/placeholder.svg',
    description: 'Materiały drukowane dla piekarni rzemieślniczej',
    fullDescription: 'Kompleksowy projekt materiałów drukowanych dla tradycyjnej piekarni rzemieślniczej. Menu, ulotki, plakaty i opakowania w spójnym, ciepłym stylu.',
    client: 'Artisan Bakery',
    year: '2023',
    tools: ['InDesign', 'Illustrator', 'Photoshop'],
    challenge: 'Połączenie tradycyjnych wartości rzemiosła z nowoczesną estetyką.',
    solution: 'Wykorzystałem ciepłe kolory, tekstury papieru i ręcznie rysowane elementy.',
    results: 'Materiały wzmocniły pozycję piekarni jako premium lokalu w okolicy.',
    images: [
      { src: '/placeholder.svg', alt: 'Artisan Menu', caption: 'Menu piekarni' },
      { src: '/placeholder.svg', alt: 'Artisan Ulotki', caption: 'Ulotki promocyjne' },
      { src: '/placeholder.svg', alt: 'Artisan Plakat', caption: 'Plakaty' },
      { src: '/placeholder.svg', alt: 'Artisan Opakowania', caption: 'Opakowania pieczywa' },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};
