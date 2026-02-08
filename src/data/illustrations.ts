export interface IllustrationItem {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export interface IllustrationCategory {
  id: string;
  titlePl: string;
  titleEn: string;
  descriptionPl: string;
  descriptionEn: string;
  tools: string[];
  items: IllustrationItem[];
}

export const illustrationCategories: IllustrationCategory[] = [
  {
    id: 'cartoon',
    titlePl: 'Cartoon & Wektorowe',
    titleEn: 'Cartoon & Vector',
    descriptionPl: 'Stylizowane ilustracje wektorowe — od postaci i ikon po pełne sceny. Umiejętność pracy w różnych stylach i adaptacji do specyfiki projektu.',
    descriptionEn: 'Stylized vector illustrations — from characters and icons to full scenes. Ability to work in various styles and adapt to project requirements.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    items: [
      {
        src: '/illustrations/cartoon/atomic-cherry.jpg',
        alt: 'Atomic Cherry — slot machine illustration',
        caption: 'Atomic Cherry — grafika do gry slotowej',
        aspectRatio: 'landscape',
      },
      {
        src: '/illustrations/cartoon/earth-ear.jpg',
        alt: 'Earth Ear — conceptual illustration',
        caption: 'Earth Ear — ilustracja koncepcyjna',
        aspectRatio: 'landscape',
      },
      {
        src: '/illustrations/cartoon/explorer-girl.jpg',
        alt: 'Explorer Girl — character illustration',
        caption: 'Poszukiwaczka — ilustracja postaci',
        aspectRatio: 'portrait',
      },
      {
        src: '/illustrations/cartoon/elephant-pencil.jpg',
        alt: 'Elephant with pencil — children book illustration',
        caption: 'Słoń z ołówkiem — ilustracja do książki dziecięcej',
        aspectRatio: 'portrait',
      },
      {
        src: '/illustrations/cartoon/game-icons.png',
        alt: 'Game icons set',
        caption: 'Zestaw ikon do gry — stylizowane ikony umiejętności',
        aspectRatio: 'landscape',
      },
      {
        src: '/illustrations/cartoon/snail-house.jpg',
        alt: 'Snail house — cartoon illustration',
        caption: 'Ślimak z domkiem — ilustracja cartoon',
        aspectRatio: 'landscape',
      },
      {
        src: '/illustrations/cartoon/christmas-card.jpg',
        alt: 'Christmas card — astronaut illustration',
        caption: 'Kartka świąteczna — astronauta z prezentami',
        aspectRatio: 'square',
      },
      {
        src: '/illustrations/cartoon/gentleman-portrait.jpg',
        alt: 'Victorian gentleman — engraving style illustration',
        caption: 'Portret dżentelmena — styl rycinowy',
        aspectRatio: 'square',
      },
    ],
  },
];
