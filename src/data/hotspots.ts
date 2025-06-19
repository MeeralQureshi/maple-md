export interface HotspotConfig {
  id: string;
  emoji: string;
  xp?: number;
  dialog: string;
}

export const hotspotConfigs: Record<string, HotspotConfig> = {
  hospital: {
    id: 'hospital',
    emoji: '🏥',
    xp: 20,
    dialog: "Welcome to the world! You were born in Family Hospital Lahore"
  },
  parents: {
    id: 'parents',
    emoji: '👨‍👩‍👦',
    xp: 30,
    dialog: "Your parents and older brother are so happy to meet you!"
  },
  first_breath: {
    id: 'first_breath',
    emoji: '💨',
    xp: 50,
    dialog: "Your first breath was at 10pm - the beginning of your journey."
  },
  sleep: {
    id: 'sleep',
    emoji: '😴',
    xp: 40,
    dialog: "You always made sure to get your beauty sleep early! You would even put chairs together at weddings if you had to"
  },
  creative: {
    id: 'creative',
    emoji: '🎨',
    xp: 30,
    dialog: "You were so creative; you once made a man in your room out of all the things lying around"
  },
  song: {
    id: 'song',
    emoji: '🎵',
    xp: 30,
    dialog: "Remember when you improv'ed an entire song about finding your chappals?"
  },
  graduation: {
    id: 'graduation',
    emoji: '🎉',
    xp: 35,
    dialog: "College graduation! Another milestone achieved."
  },
  gifted: {
    id: 'gifted',
    emoji: '🧠',
    xp: 20,
    dialog: "You were so smart you went into the gifted program!"
  },
  AV: {
    id: 'AV',
    emoji: '🎬',
    xp: 20,
    dialog: "You loved doing AV for the school!"
  },
  PSPC: {
    id: 'PSPC',
    emoji: '🦢',
    xp: 20,
    dialog: "You made a bunch of origami art just to go to PSPC a second time!"
  },
  dnd: {
    id: 'dnd',
    emoji: '⚔️',
    xp: 20,
    dialog: "Your first D&D character was so edgy you ran up and died in your 3rd session"
  },
  DOTA: {
    id: 'DOTA',
    emoji: '🎮',
    xp: 20,
    dialog: "Ali Bhai introduced you to DOTA when you went to Pakistan, you spent all day and night playing after that!"
  },
  program: {
    id: 'program',
    emoji: '🧪',
    xp: 25,
    dialog: "You got into Life Science at UofT St. George!"
  },
  meeting: {
    id: 'meeting',
    emoji: '💕',
    xp: 25,
    dialog: "You met a wonderful, amazing, smart, kind, and unforgettable girl - Meeral!"
  },
  game_nights: {
    id: 'game_nights',
    emoji: '🎮',
    xp: 25,
    dialog: "Game nights at Cat's Eye and Bahen Centre were the best! Remember those Super Smash Bros tournaments?"
  },
  lcs: {
    id: 'lcs',
    emoji: '💻',
    xp: 10,
    dialog: "Remember when we got to go watch the LCS finals in Toronto with our friends?"
  },
  eternum: {
    id: 'eternum',
    emoji: '🐉',
    xp: 15,
    dialog: "You started DMing one of your first campaigns with your friends across Life Science and Computer Science - Eternum!"
  },
  ross: {
    id: 'ross',
    emoji: '🏝️',
    xp: 25,
    dialog: "You went to St.Kitts for medical school, at least for a while"
  },
  ship: {
    id: 'ship',
    emoji: '🚢',
    xp: 25,
    dialog: "Unfortunately you were hit by hurricane Maria, but managed to continue your journey on a cruise ship!"
  },
  covid: {
    id: 'covid',
    emoji: '🦠',
    xp: 25,
    dialog: "You even went through the COVID pandemic, the whole world was on lockdown!"
  },
  med_school_grad: {
    id: 'med_school_grad',
    emoji: '🎓',
    xp: 25,
    dialog: "Despite all these challenges, you graduated from med school!"
  },
  wmed: {
    id: 'wmed',
    emoji: '🏥',
    xp: 20,
    dialog: "You did your residency at Western Michigan University, in Kalamazoo, Michigan (yes it sounds fake, but it's real!)"
  },
  life_events: {
    id: 'life_events',
    emoji: '🌟',
    xp: 10,
    dialog: "During your residency you had a bunch of amazing life events (we'll get to those)"
  },
  union: {
    id: 'union',
    emoji: '🤝',
    xp: 70,
    dialog: "Residents aren't always treated the best, but you decided to help form a union and do something about it!"
  },
  marriage: {
    id: 'marriage',
    emoji: '💍',
    xp: 40,
    dialog: "Remember that amazing girl you met in university? You married her!"
  },
  honeymoon: {
    id: 'honeymoon',
    emoji: '✈️',
    xp: 30,
    dialog: "You got a nice break from residency and went on a honeymoon to Mecca for Umrah, then Maldives!"
  },
  vacations: {
    id: 'vacations',
    emoji: '🌍',
    xp: 70,
    dialog: "Since our wedding we've had so many great adventures together! Umrah, Maldives, a cruise, Banff, Detroit, and many more to come!"
  },
  baby: {
    id: 'baby',
    emoji: '👶',
    xp: 30,
    dialog: "You also had an entire mini-human during residency!"
  },
  baby_honeymoon: {
    id: 'baby_honeymoon',
    emoji: '🍼',
    xp: 30,
    dialog: "Remember how tiny he was when you first met him? He used to startle whenever you blew on him!"
  },
  crawling: {
    id: 'crawling',
    emoji: '🐛',
    xp: 40,
    dialog: "Now he's over 6 months, smiling, laughing, rolling (a lot), and almost crawling!"
  },
  diploma: {
    id: 'diploma',
    emoji: '🎓',
    xp: 25,
    dialog: "Your hard work, struggles, and dedication has paid off! Here's your diploma."
  },
  family: {
    id: 'family',
    emoji: '👨‍👩‍👧‍👦',
    xp: 25,
    dialog: "We're all so proud of you!"
  },
  future: {
    id: 'future',
    emoji: '⭐',
    xp: 50,
    dialog: "The future is bright and full of possibilities! Especially since there's a shortage of doctors in Canada!"
  }
};

export const getHotspotEmoji = (hotspotId: string): string => {
  return hotspotConfigs[hotspotId]?.emoji || '⭐';
};

export const getHotspotConfig = (hotspotId: string): HotspotConfig | undefined => {
  return hotspotConfigs[hotspotId];
}; 