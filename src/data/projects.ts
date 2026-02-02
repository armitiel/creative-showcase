export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  displayMode?: 'cover' | 'centered';
  backgroundColor?: string;
  imageScale?: number;
  gridLayout?: '2x2';
}

export interface GridImageGroup {
  layout: '2x2';
  images: { src: string; alt: string }[];
}

export interface ProjectFont {
  name: string;
  usage: string;
  weights: { name: string; sample: string }[];
}

export interface ProjectColor {
  name: string;
  hex: string;
  rgb: string;
  cmyk?: string;
}

export interface RealPhotosGrid {
  layout: '2x2';
  title?: string;
  images: { src: string; alt: string }[];
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
  realPhotos?: RealPhotosGrid;
  challenge?: string;
  solution?: string;
  results?: string;
  typography?: {
    description: string;
    fonts: ProjectFont[];
  };
  colors?: {
    description: string;
    palette: ProjectColor[];
  };
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
      { src: '/projects/v17-vision/logo.png', alt: 'V17 Vision Logo', caption: 'Minimalistyczne logo tekstowe marki', displayMode: 'centered', backgroundColor: '#365065', imageScale: 0.6 },
      { src: '/projects/v17-vision/logo-sign.png', alt: 'V17 Vision Znak graficzny', caption: 'Geometryczny symbol marki', displayMode: 'centered', backgroundColor: '#365065', imageScale: 0.6 },
      { src: '/projects/v17-vision/brand-presentation.jpg', alt: 'V17 Vision Prezentacja brandingu', caption: 'Prezentacja brandingu z ikonami usług' },
      { src: '/projects/v17-vision/interior.png', alt: 'V17 Vision Futurystyczne wnętrze', caption: 'Wizualizacja salonu z organicznymi, płynnymi formami' },
      { src: '/projects/v17-vision/mousepad.png', alt: 'V17 Vision Materiały firmowe', caption: 'Podkładka pod mysz z brandingiem' },
      { src: '/projects/v17-vision/texture.jpg', alt: 'V17 Vision Tekstura 3D', caption: 'Geometryczne tło wykorzystywane w materiałach' },
    ],
    typography: {
      description: 'Khand został wybrany dla nagłówków, dodając futurystyczny charakter i technologiczną precyzję. Font podkreśla nowoczesność marki i jej innowacyjne podejście do projektowania przestrzeni.',
      fonts: [
        {
          name: 'Khand',
          usage: 'Headlines',
          weights: [
            { name: 'Bold', sample: 'Designing Your Space' },
            { name: 'SemiBold', sample: 'V17 Vision Studio' },
            { name: 'Medium', sample: 'Futuristic Interiors' },
          ],
        },
        {
          name: 'Inter',
          usage: 'Body Text',
          weights: [
            { name: 'Regular', sample: 'Innowacyjne rozwiązania architektoniczne' },
            { name: 'Light', sample: 'Przestrzenie wyprzedzające swoją epokę' },
          ],
        },
      ],
    },
    colors: {
      description: 'Minimalistyczna paleta kolorów oparta na czystej bieli i głębokich odcieniach szarości, podkreślająca futurystyczny i premium charakter marki.',
      palette: [
        { name: 'Pure White', hex: '#FFFFFF', rgb: '255 255 255', cmyk: '0 0 0 0' },
        { name: 'Vision Blue', hex: '#365065', rgb: '54 80 101', cmyk: '47 21 0 60' },
        { name: 'Light Gray', hex: '#F5F5F5', rgb: '245 245 245', cmyk: '0 0 0 4' },
        { name: 'Silver', hex: '#C0C0C0', rgb: '192 192 192', cmyk: '0 0 0 25' },
        { name: 'Deep Black', hex: '#0A0A0A', rgb: '10 10 10', cmyk: '0 0 0 96' },
      ],
    },
  },
  {
    id: 2,
    slug: 'aloha-centrum-desk',
    title: 'Aloha Centrum Reception Desk',
    category: 'Branding',
    thumbnail: '/projects/aloha-centrum/desk-front.jpg',
    description: 'Futurystyczny projekt biurka recepcji dla centrum pracy ze świadomością - od wizualizacji 3D po nadzór nad wykonaniem CNC',
    fullDescription: 'Projekt futurystycznego biurka recepcji dla "Aloha Centrum" w Szczecinie - innowacyjnego centrum pracy promującego świadomość i mindfulness w środowisku biurowym. Byłem odpowiedzialny za całość grafiki 3D, wizualizacje oraz nadzór nad wykonaniem fizycznego modelu przez 5-osiowe frezowanie CNC. Organiczne, płynne formy mebla łączą funkcjonalność z estetyką przyszłości, tworząc przyjazną przestrzeń dla pierwszego kontaktu z gośćmi.',
    client: 'Aloha Centrum',
    year: '2022',
    tools: ['Photoshop', 'ZBrush', 'Blender'],
    challenge: 'Stworzenie biurka recepcji, które komunikuje wartości centrum - spokój, świadomość i nowoczesność, jednocześnie będąc w pełni funkcjonalnym stanowiskiem pracy. Projekt musiał być możliwy do wykonania metodą frezowania CNC 5-osiowego.',
    solution: 'Zaprojektowałem organiczną formę z płynnym łukiem osłaniającym stanowisko pracy w programie ZBrush, następnie zoptymalizowałem model pod kątem produkcji CNC w Blenderze. Zintegrowane oświetlenie LED podkreśla futurystyczny charakter, a minimalistyczna kolorystyka w odcieniach bieli i szarości tworzy spokojną atmosferę. Nadzorowałem cały proces wykonania fizycznego modelu.',
    results: 'Projekt został wdrożony jako centralny element recepcji Aloha Centrum, stając się wizytówką przestrzeni i przyciągając uwagę odwiedzających.',
    images: [
      { src: '/projects/aloha-centrum/desk-front.jpg', alt: 'Biurko recepcji - widok główny', caption: 'Widok perspektywiczny biurka z organicznym łukiem osłonowym' },
      { src: '/projects/aloha-centrum/desk-detail.jpg', alt: 'Biurko recepcji - detal LED', caption: 'Zintegrowane oświetlenie LED w strukturze mebla' },
      { src: '/projects/aloha-centrum/desk-close.jpg', alt: 'Biurko recepcji - blat roboczy', caption: 'Blat roboczy z detalami wykończenia' },
      { src: '/projects/aloha-centrum/desk-top.jpg', alt: 'Biurko recepcji - widok z góry', caption: 'Widok z góry ukazujący organiczną formę' },
    ],
    realPhotos: {
      layout: '2x2' as const,
      title: 'Realizacja projektu',
      images: [
        { src: '/projects/aloha-centrum/real-front.jpg', alt: 'Gotowe biurko - widok główny' },
        { src: '/projects/aloha-centrum/real-detail.jpg', alt: 'Gotowe biurko - detal' },
        { src: '/projects/aloha-centrum/real-montage.jpg', alt: 'Montaż biurka' },
        { src: '/projects/aloha-centrum/real-interior.jpg', alt: 'Biurko we wnętrzu' },
      ],
    },
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
