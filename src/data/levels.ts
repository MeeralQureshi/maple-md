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
  backgroundGradient: string;
  backgroundImage: string;
  groundColor: string;
  nextLevel?: string;
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
        width: 120,
        height: 120,
        imageSrc: '/assets/brotherBabySprite.png',
        animation: 'wave',
        zIndex: 21
      }
    ],
    backgroundGradient: 'from-pink-200 to-pink-400',
    backgroundImage: '/assets/hospital.png',
    groundColor: 'bg-green-400',
    nextLevel: 'childhood'
  },
  childhood: {
    id: 'childhood',
    name: 'Childhood',
    hotspots: [
      { id: 'sleep', x: 200, y: 200 },
      { id: 'creative', x: 400, y: 200 },
      { id: 'song', x: 700, y: 200 },
    ],
    backgroundGradient: 'from-blue-400 to-blue-600',
    backgroundImage: '/assets/childhood.png',
    groundColor: 'bg-orange-500',
    nextLevel: 'school'
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
    backgroundGradient: 'from-blue-400 to-blue-600',
    backgroundImage: '/assets/school.png',
    groundColor: 'bg-green-600',
    nextLevel: 'university'
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
    backgroundGradient: 'from-blue-400 to-blue-600',
    backgroundImage: '/assets/university.png',
    groundColor: 'bg-green-600',
    nextLevel: 'med_school'
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
    backgroundGradient: 'from-blue-400 to-blue-600',
    backgroundImage: '/assets/med_school.png',
    groundColor: 'bg-yellow-600',
    nextLevel: 'residency'
  },
  residency: {
    id: 'residency',
    name: 'Residency',
    hotspots: [
      { id: 'wmed', x: 300, y: 200 },
      { id: 'life_events', x: 800, y: 200 },
      { id: 'union', x: 1200, y: 200 },
    ],
    backgroundGradient: 'from-blue-400 to-blue-600',
    backgroundImage: '/assets/residency.png',
    groundColor: 'bg-green-700',
    nextLevel: 'wedding'
  },
  wedding: {
    id: 'wedding',
    name: 'Wedding',
    hotspots: [
      { id: 'marriage', x: 400, y: 200 },
      { id: 'honeymoon', x: 800, y: 200 },
      { id: 'vacations', x: 1400, y: 200 },
    ],
    backgroundGradient: 'from-blue-400 to-blue-600',
    backgroundImage: '/assets/wedding.png',
    groundColor: 'bg-yellow-500',
    nextLevel: 'baby'
  },
  baby: {
    id: 'baby',
    name: 'baby',
    hotspots: [
      { id: 'baby', x: 100, y: 200 },
      { id: 'baby_honeymoon', x: 700, y: 200 },
      { id: 'crawling', x: 1000, y: 200 },
    ],
    backgroundGradient: 'from-blue-400 to-blue-600',
    backgroundImage: '/assets/baby.png',
    groundColor: 'bg-cyan-500',
    nextLevel: 'graduation'
  },
  graduation: {
    id: 'graduation',
    name: 'Graduation',
    hotspots: [
      { id: 'diploma', x: 300, y: 200 },
      { id: 'family', x: 600, y: 200 },
      { id: 'future', x: 900, y: 200 },
    ],
    backgroundGradient: 'from-purple-600 to-blue-800',
    backgroundImage: '/assets/graduation.png',
    groundColor: 'bg-amber-600',
    nextLevel: 'end'
  },
}; 