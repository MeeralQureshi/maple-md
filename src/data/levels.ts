import type { Sprite } from '../context/LevelContext';

export interface LevelConfig {
  id: string;
  name: string;
  hotspots: Array<{
    id: string;
    x: number;
    y: number;
    dialog?: string;
    iconSrc?: string;
    xp?: number;
  }>;
  sprites?: Array<{
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    imageSrc: string;
    animation?: Sprite['animation'];
    zIndex: number;
  }>;
  backgroundImage: string;
  groundColor: string;
  spriteSheet?: string;
  nextLevel?: string;
  sidebarNarrative?: string;
}

export const defaultLevels: Record<string, LevelConfig> = {
  birth: {
    id: 'birth',
    name: 'Birth',
    hotspots: [
      { id: 'hospital', x: 200, y: 200 },
      { id: 'parents', x: 500, y: 200 },
      { id: 'first_breath', x: 800, y: 200 },
    ],
    sprites: [
      {
        id: 'parents',
        x: 1000,
        y: 0,
        width: 160,
        height: 160,
        imageSrc: '/assets/parentsSprite.png',
        animation: 'wave',
        zIndex: 20
      },
      {
        id: 'brother',
        x: 1120,
        y: 0,
        width: 120,
        height: 120,
        imageSrc: '/assets/brotherBabySprite.png',
        animation: 'wave',
        zIndex: 21
      }
    ],
    backgroundImage: '/assets/hospital.png',
    groundColor: 'bg-green-400',
    spriteSheet: '/assets/babySprites.png',
    nextLevel: 'childhood',
    sidebarNarrative: 'Once upon a wondrous day, a grand announcement came. A baby has been born, with a most magestic name...'
  },
  childhood: {
    id: 'childhood',
    name: 'Childhood',
    hotspots: [
      { id: 'sleep', x: 200, y: 200 },
      { id: 'creative', x: 400, y: 200 },
      { id: 'song', x: 700, y: 200 },
    ],
    backgroundImage: '/assets/childhood.png',
    groundColor: 'bg-orange-500',
    spriteSheet: '/assets/childSprite.png',
    nextLevel: 'school',
    sidebarNarrative: 'The child is growing up, and the world is a magical adventure, filled with wonder and discovery...'
  },
  school: {
    id: 'school',
    name: 'School',
    hotspots: [
      { id: 'gifted', x: 150, y: 200 },
      { id: 'AV', x: 300, y: 200 },
      { id: 'DOTA', x: 500, y: 200 },
      { id: 'PSPC', x: 800, y: 200 },
      { id: 'dnd', x: 1000, y: 200 },

    ],
    backgroundImage: '/assets/school.png',
    groundColor: 'bg-green-600',
    spriteSheet: '/assets/schoolSprite.png',
    nextLevel: 'university',
    sidebarNarrative: 'On to another adventure! Learning, gaming, and slowly becoming an even bigger nerd...'
  },
  university: {
    id: 'university',
    name: 'University',
    hotspots: [
      { id: 'program', x: 200, y: 200 },
      { id: 'meeting', x: 500, y: 200 },
      { id: 'game_nights', x: 800, y: 200 },
      { id: 'lcs', x: 1000, y: 200 },
      { id: 'eternum', x: 1200, y: 200 },
    ],
    sprites: [
      {
        id: 'wife_university',
        x: 500,
        y: 0,
        width: 200,
        height: 200,
        imageSrc: '/assets/wifeUni.png',
        animation: 'wave',
        zIndex: 20
      },
    ],
    backgroundImage: '/assets/university.png',
    groundColor: 'bg-green-600',
    spriteSheet: '/assets/universitySprite.png',
    nextLevel: 'med_school',
    sidebarNarrative: 'Ah university, what a wonderful place! Especially with all the WONDERFUL people you got to meet...'
  },
  med_school: {
    id: 'med_school',
    name: 'Medical School',
    hotspots: [
      { id: 'ross', x: 300, y: 200 },
      { id: 'ship', x: 500, y: 200 },
      { id: 'covid', x: 900, y: 200 },
      { id: 'med_school_grad', x: 1200, y: 200 },
    ],
    backgroundImage: '/assets/med_school.png',
    groundColor: 'bg-yellow-600',
    spriteSheet: '/assets/medSchoolSprite.png',
    nextLevel: 'residency',
    sidebarNarrative: 'This adventure was one worthy of a history book, or even a movie...'
  },
  residency: {
    id: 'residency',
    name: 'Residency',
    hotspots: [
      { id: 'wmed', x: 300, y: 200 },
      { id: 'life_events', x: 800, y: 200 },
      { id: 'union', x: 1200, y: 200 },
    ],
    backgroundImage: '/assets/residency.png',
    groundColor: 'bg-green-700',
    spriteSheet: '/assets/residencySprite.png',
    nextLevel: 'wedding',
    sidebarNarrative: 'The days (and nights) were long, but you stood your ground, and made it through...'
  },
  wedding: {
    id: 'wedding',
    name: 'Wedding',
    hotspots: [
      { id: 'marriage', x: 400, y: 200 },
      { id: 'honeymoon', x: 800, y: 200 },
      { id: 'vacations', x: 1400, y: 200 },
    ],
    sprites: [
      {
        id: 'wife_bride',
        x: 400,
        y: 0,
        width: 200,
        height: 200,
        imageSrc: '/assets/brideSprite.png',
        animation: 'wave',
        zIndex: 20
      },
    ],
    backgroundImage: '/assets/wedding.png',
    groundColor: 'bg-yellow-500',
    spriteSheet: '/assets/weddingSprite.png',
    nextLevel: 'baby',
    sidebarNarrative: 'A celebration of love and new beginnings, and welcoming your player 2 in life...'
  },
  baby: {
    id: 'baby',
    name: 'Baby\'s Birth',
    hotspots: [
      { id: 'baby', x: 100, y: 200 },
      { id: 'baby_honeymoon', x: 700, y: 200 },
      { id: 'crawling', x: 1000, y: 200 },
    ],
    sprites: [
      {
        id: 'wifeBirth',
        x: 100,
        y: 0,
        width: 170,
        height: 170,
        imageSrc: '/assets/wifeBirthSprite.png',
        animation: 'wave',
        zIndex: 21
      },
      {
        id: 'parents',
        x: 1200,
        y: 0,
        width: 170,
        height: 170,
        imageSrc: '/assets/parentsSprite.png',
        animation: 'wave',
        zIndex: 22
      },
      {
        id: 'newborn',
        x: 220,
        y: 0,
        width: 140,
        height: 140,
        imageSrc: '/assets/newbornSprite.png',
        animation: 'wave',
        zIndex: 20
      },
    ],
    backgroundImage: '/assets/baby.png',
    groundColor: 'bg-cyan-500',
    spriteSheet: '/assets/residencySprite.png',
    sidebarNarrative: 'And the circle of life continues with a new little gamer, a bundle of joy for the whole family...'
  },
  graduation: {
    id: 'graduation',
    name: 'Graduation',
    hotspots: [
      { id: 'diploma', x: 300, y: 200 },
      { id: 'family', x: 600, y: 200 },
      { id: 'future', x: 800, y: 200 },
    ],
    sprites: [
      {
        id: 'wifeGrad',
        x: 900,
        y: 0,
        width: 200,
        height: 200,
        imageSrc: '/assets/wifeBirthSprite.png',
        animation: 'wave',
        zIndex: 21
      },
      {
        id: 'baby',
        x: 1000,
        y: 0,
        width: 150,
        height: 150,
        imageSrc: '/assets/babySprite.png',
        animation: 'wave',
        zIndex: 20
      },
      {
        id: 'parents',
        x: 1100,
        y: 0,
        width: 200,
        height: 200,
        imageSrc: '/assets/parentsSprite.png',
        animation: 'wave',
        zIndex: 20
      },
      {
        id: 'olderBrother',
        x: 1250,
        y: 0,
        width: 200,
        height: 200,
        imageSrc: '/assets/olderBrotherSprite.png',
        animation: 'wave',
        zIndex: 20
      },
      {
        id: 'youngerBrotherWife',
        x: 1350,
        y: 0,
        width: 200,
        height: 200,
        imageSrc: '/assets/brotherWifeSprite.png',
        animation: 'wave',
        zIndex: 20
      },
    ],
    backgroundImage: '/assets/graduation.png',
    groundColor: 'bg-amber-600',
    spriteSheet: '/assets/graduateSprite.png',
    sidebarNarrative: 'And finally, today is the day!',
    nextLevel: 'end'
  },
}; 