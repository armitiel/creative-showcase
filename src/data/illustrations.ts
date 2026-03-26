export interface IllustrationItem {
  src: string;
  alt: string;
  captionPl?: string;
  captionEn?: string;
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
    descriptionPl: 'Stylizowane ilustracje wektorowe, od postaci i ikon po pełne sceny. Umiejętność pracy w różnych stylach i adaptacji do specyfiki projektu.',
    descriptionEn: 'Stylized vector illustrations, from characters and icons to full scenes. Ability to work in various styles and adapt to project requirements.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    items: [
      {
        src: '/illustrations/cartoon/atomic-cherry.jpg',
        alt: 'Atomic Cherry, slot machine illustration',
        captionPl: 'Atomic Cherry, grafika do gry slotowej',
        captionEn: 'Atomic Cherry, slot game illustration',
        aspectRatio: 'landscape',
      },
      {
        src: '/illustrations/cartoon/earth-ear.jpg',
        alt: 'Earth Ear, conceptual illustration',
        captionPl: 'Earth Ear, ilustracja koncepcyjna',
        captionEn: 'Earth Ear, conceptual illustration',
        aspectRatio: 'landscape',
      },
      {
        src: '/illustrations/cartoon/explorer-girl.jpg',
        alt: 'Explorer Girl, character illustration',
        captionPl: 'Poszukiwaczka, ilustracja postaci',
        captionEn: 'Explorer Girl, character illustration',
        aspectRatio: 'portrait',
      },
      {
        src: '/illustrations/cartoon/elephant-pencil.jpg',
        alt: 'Elephant with pencil, children book illustration',
        captionPl: 'Słoń z ołówkiem, ilustracja do książki dziecięcej',
        captionEn: 'Elephant with pencil, children\'s book illustration',
        aspectRatio: 'portrait',
      },
      {
        src: '/illustrations/cartoon/game-icons.png',
        alt: 'Game icons set',
        captionPl: 'Zestaw ikon do gry, stylizowane ikony umiejętności',
        captionEn: 'Game icon set, stylized skill icons',
        aspectRatio: 'landscape',
      },
      {
        src: '/illustrations/cartoon/snail-house.jpg',
        alt: 'Snail house, cartoon illustration',
        captionPl: 'Ślimak z domkiem, ilustracja cartoon',
        captionEn: 'Snail house, cartoon illustration',
        aspectRatio: 'landscape',
      },
      {
        src: '/illustrations/cartoon/christmas-card.jpg',
        alt: 'Christmas card, astronaut illustration',
        captionPl: 'Kartka świąteczna, astronauta z prezentami',
        captionEn: 'Christmas card, astronaut with gifts',
        aspectRatio: 'square',
      },
      {
        src: '/illustrations/cartoon/gentleman-portrait.jpg',
        alt: 'Victorian gentleman, engraving style illustration',
        captionPl: 'Portret dżentelmena, styl rycinowy',
        captionEn: 'Gentleman portrait, engraving style',
        aspectRatio: 'square',
      },
      {
        src: '/illustrations/pencil-characters.jpg',
        alt: 'Pencil characters, cartoon illustration',
        captionPl: 'Postacie z ołówkami, ilustracja cartoon',
        captionEn: 'Pencil characters, cartoon illustration',
        aspectRatio: 'landscape',
      },
      {
        src: '/illustrations/join-the-game.jpg',
        alt: 'Join the Game, cartoon illustration',
        captionPl: 'Join the Game, ilustracja cartoon',
        captionEn: 'Join the Game, cartoon illustration',
        aspectRatio: 'portrait',
      },
    ],
  },
];
