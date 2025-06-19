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
      { id: 'hospital', x: 200, y: 250, dialog: "Welcome to the world! You were born in Family Hospital Lahore", xp: 20 },
      { id: 'parents', x: 500, y: 250, dialog: "Your parents and older brother are so happy to meet you!", xp: 30 },
      { id: 'first_breath', x: 800, y: 250, dialog: "Your first breath was at 10pm - the beginning of your journey.", xp: 50 },
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
    backgroundGradient: 'from-pink-250 to-pink-400',
    backgroundImage: '/assets/hospital.png',
    nextLevel: 'childhood'
  },
  childhood: {
    id: 'childhood',
    name: 'Childhood',
    hotspots: [
      { id: 'sleep', x: 200, y: 250, dialog: "You always slept early! You would put chairs together at weddings if you had to get your sleep!", xp: 40 },
      { id: 'creative', x: 400, y: 250, dialog: "You once made a man in your room out of all the things lying around", xp: 30 },
      { id: 'song', x: 400, y: 250, dialog: "Remember when you improv'ed an entire song about finding your chappals?", xp: 30 },
    ],
    backgroundGradient: 'from-blue-400 to-blue-600',
    backgroundImage: '/assets/playroom.png',
    nextLevel: 'school'
  },
  school: {
    id: 'school',
    name: 'School',
    hotspots: [
      { id: 'gifted', x: 150, y: 250, dialog: "You were so smart you went into the gifted program!", xp: 20 },
      { id: 'AV', x: 200, y: 250, dialog: "You loved doing AV for the school!", xp: 20 },
      { id: 'PSPC', x: 300, y: 250, dialog: "You made a bunch of origigami art just to go to PSPC a second time!", xp: 20 },
      { id: 'dnd', x: 400, y: 250, dialog: "Your first D&D character was so edgy you ran up and died in your 3rd session", xp: 20 },
      { id: 'DOTA', x: 500, y: 250, dialog: "Ali Bhai introduced you to DOTA when you went to Pakistan, you spent all day and night playing after that!", xp: 20 },
    ],
    backgroundGradient: 'from-blue-400 to-blue-600',
    backgroundImage: '/assets/school.png',
    nextLevel: 'university'
  },
  university: {
    id: 'university',
    name: 'University',
    hotspots: [
      { id: 'program', x: 150, y: 250, dialog: "You got into Life Science at UofT St. George!", xp: 25 },
      { id: 'meeting', x: 200, y: 250, dialog: "You met a wonderful, amazing, smart, kind, and unforgettable girl - Meeral!", xp: 25 },
      { id: 'game_nights', x: 300, y: 250, dialog: "Game nights at Cat's Eye and Bahen Centre were the best! Remember those Super Smash Bros tournaments?", xp: 25 },
      { id: 'eternum', x: 400, y: 250, dialog: "You started DMing one of your first campaigns with your friends across Life Science and Computer Science - Eternum!", xp: 25 },
    ],
    backgroundGradient: 'from-blue-400 to-blue-600',
    backgroundImage: '/assets/university.png',
    nextLevel: 'med_school'
  },
  med_school: {
    id: 'medSchool',
    name: 'Medical School',
    hotspots: [
      { id: 'ross', x: 150, y: 250, dialog: "You went to St.Kitts for medical school, at least for a while", xp: 25 },
      { id: 'ship', x: 200, y: 250, dialog: "Unfortunately you were hit by hurricane Maria, but managed to continue med school on a cruise ship!", xp: 25 },
      { id: 'covid', x: 300, y: 250, dialog: "You even went through the COVID pandemic, but managed to finish med school!", xp: 25 },
      { id: 'med_school_grad', x: 400, y: 250, dialog: "Despite all these challenges, you graduated from med school!", xp: 25 },
    ],
    backgroundGradient: 'from-blue-400 to-blue-600',
    backgroundImage: '/assets/med_school.png',
    nextLevel: 'residency'
  },
  residency: {
    id: 'residency',
    name: 'Residency',
    hotspots: [
      { id: 'wmed', x: 150, y: 250, dialog: "You did your residency at Western Michigan University, in Kalamazoo, Michigan (yes it sounds fake, but it's real!)", xp: 20 },
      { id: 'life_events', x: 200, y: 250, dialog: "During your residency you had a bunch of amazing life events (we'll get to those)", xp: 10 },
      { id: 'union', x: 300, y: 250, dialog: "Residents aren't always treated the best, but you decided to help form a union and do something about it!", xp: 70 },
    ],
    backgroundGradient: 'from-blue-400 to-blue-600',
    backgroundImage: '/assets/residency.png',
    nextLevel: 'wedding'
  },
  wedding: {
    id: 'wedding',
    name: 'Wedding',
    hotspots: [
      { id: 'marriage', x: 150, y: 250, dialog: "Remember that amazing girl you met in university? You married her!", xp: 40 },
      { id: 'honeymoon', x: 250, y: 250, dialog: "You got a nice break from residency and went on a honeymoon to Mecca for Umrah, then Maldives!", xp: 30 },
      { id: 'vacations', x: 400, y: 250, dialog: "Since our wedding we've had so many great adventures together! Umrah, Maldives, a cruise, Banff, Detroit, and many more to come!", xp: 70 },
    ],
    backgroundGradient: 'from-blue-400 to-blue-600',
    backgroundImage: '/assets/wedding.png',
    nextLevel: 'baby'
  },
  baby: {
    id: 'baby',
    name: 'baby',
    hotspots: [
      { id: 'baby', x: 150, y: 250, dialog: "You also had an entire mini-human during residency!", xp: 30 },
      { id: 'honeymoon', x: 300, y: 250, dialog: "Remember how tiny he was when you first met him? He used to startle whenever you blew on him@", xp: 30 },
      { id: 'crawling', x: 500, y: 250, dialog: "Now he's over 6 months, smiling, laughing, rolling (a lot), and almost crawling!", xp: 40 },
    ],
    backgroundGradient: 'from-blue-400 to-blue-600',
    backgroundImage: '/assets/baby.png',
    nextLevel: 'residency_grad'
  }
}; 