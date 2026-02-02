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
    slug: 'v17-vision-branding',
    title: 'V17 Vision Branding',
    category: 'Branding',
    thumbnail: '/projects/v17-vision/designing-your-space.jpg',
    description: 'Kompletna identyfikacja wizualna dla studia projektowego specjalizującego się w futurystycznych wnętrzach',
    fullDescription: 'V17 Vision to innowacyjne studio projektowe specjalizujące się w tworzeniu futurystycznych rozwiązań architektonicznych i wnętrzarskich. Marka łączy zaawansowane technologie z organicznymi, płynnymi formami, tworząc przestrzenie wyprzedzające swoją epokę. Projekt brandingowy obejmował logo, identyfikację wizualną, materiały firmowe oraz key visual.',
    client: 'V17 Vision',
    year: '2024',
    tools: ['Illustrator', 'Photoshop', 'Cinema 4D'],
    challenge: 'Klient potrzebował identyfikacji, która komunikuje innowacyjność i przyszłościowe podejście do projektowania przestrzeni. Wyzwaniem było oddanie futurystycznego charakteru przy zachowaniu profesjonalizmu i elegancji.',
    solution: 'Stworzyłem minimalistyczną identyfikację opartą na geometrycznych, trójwymiarowych formach. Logo "V17" wykorzystuje ostre kąty symbolizujące precyzję, a hasło "Designing your space" podkreśla personalizowane podejście do każdego projektu. Biała paleta kolorów z subtelnymi akcentami tworzy wrażenie czystości i nowoczesności.',
    results: 'Branding skutecznie pozycjonuje V17 Vision jako lidera w segmencie premium futurystycznego designu wnętrz. Marka zyskała rozpoznawalność w branży architektonicznej i przyciąga klientów poszukujących innowacyjnych rozwiązań.',
    images: [
      { src: '/projects/v17-vision/designing-your-space.jpg', alt: 'V17 Vision Key Visual', caption: '"Designing your space" - główny motyw reklamowy z double exposure' },
      { src: '/projects/v17-vision/logo.png', alt: 'V17 Vision Logo', caption: 'Minimalistyczne logo tekstowe marki' },
      { src: '/projects/v17-vision/logo-sign.png', alt: 'V17 Vision Znak graficzny', caption: 'Geometryczny symbol marki' },
      { src: '/projects/v17-vision/brand-presentation.jpg', alt: 'V17 Vision Prezentacja brandingu', caption: 'Prezentacja brandingu z ikonami usług' },
      { src: '/projects/v17-vision/interior.png', alt: 'V17 Vision Futurystyczne wnętrze', caption: 'Wizualizacja salonu z organicznymi, płynnymi formami' },
      { src: '/projects/v17-vision/mousepad.png', alt: 'V17 Vision Materiały firmowe', caption: 'Podkładka pod mysz z brandingiem' },
      { src: '/projects/v17-vision/texture.jpg', alt: 'V17 Vision Tekstura 3D', caption: 'Geometryczne tło wykorzystywane w materiałach' },
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
