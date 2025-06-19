import type { Sprite } from '../context/LevelContext';

export interface LevelConfig {
  id: string;
  name: string;
  hotspots: Array<{
    id: string;
    x: number;
    y: number;
    dialog: string;
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
  backgroundGradient: string;
  backgroundImage: string;
  nextLevel?: string;
}

export const defaultLevels: Record<string, LevelConfig> = {
  birth: {
    id: 'birth',
    name: 'Birth',
    hotspots: [
      { id: 'hospital', x: 200, y: 250, dialog: "Welcome to the world! You were born in this hospital.", xp: 20 },
      { id: 'parents', x: 500, y: 250, dialog: "Your parents and older brother are so happy to meet you!", xp: 30 },
      { id: 'first_breath', x: 800, y: 250, dialog: "Your first breath - the beginning of your journey.", xp: 50 },
    ],
    sprites: [
      {
        id: 'parents',
        x: 1000,
        y: 50,
        width: 160,
        height: 160,
        imageSrc: '/assets/parentsSprite.png',
        animation: 'wave',
        zIndex: 20
      },
      {
        id: 'brother',
        x: 1120,
        y: 50,
        width: 140,
        height: 140,
        imageSrc: '/assets/brotherBabySprite.png',
        animation: 'wave',
        zIndex: 21
      }
    ],
    backgroundGradient: 'from-pink-250 to-pink-400',
    backgroundImage: '/assets/hospital.png',
    nextLevel: 'childhood'
  },
  childhood: {
    id: 'childhood',
    name: 'Childhood',
    hotspots: [
      { id: 'toy1', x: 200, y: 250, dialog: "Remember your favorite teddy bear?", xp: 15 },
      { id: 'toy2', x: 500, y: 250, dialog: "You loved playing with these blocks!", xp: 15 },
    ],
    backgroundGradient: 'from-blue-400 to-blue-600',
    backgroundImage: '/assets/clouds.png'
  }
}; 