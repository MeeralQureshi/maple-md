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
    dialog: "Welcome to the world! You were born in this hospital."
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
    dialog: "Your first breath - the beginning of your journey."
  },
  toy1: {
    id: 'toy1',
    emoji: '🧸',
    xp: 15,
    dialog: "Remember your favorite teddy bear?"
  },
  toy2: {
    id: 'toy2',
    emoji: '🧱',
    xp: 15,
    dialog: "You loved playing with these blocks!"
  }
};

export const getHotspotEmoji = (hotspotId: string): string => {
  return hotspotConfigs[hotspotId]?.emoji || '⭐';
};

export const getHotspotConfig = (hotspotId: string): HotspotConfig | undefined => {
  return hotspotConfigs[hotspotId];
}; 