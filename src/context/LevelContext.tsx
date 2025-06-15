import React, { createContext, useContext, useState } from 'react';

export interface Hotspot {
  id: string;
  x: number;
  y: number;
  dialog: string;
}

export interface LevelConfig {
  id: string;
  name: string;
  hotspots: Hotspot[];
  backgroundGradient: string;
  backgroundImage: string;
  nextLevel?: string;
  requiredXP?: number;
}

interface LevelContextType {
  // Level progression
  currentLevel: LevelConfig;
  levels: Record<string, LevelConfig>;
  setCurrentLevel: (levelId: string) => void;
  getLevelConfig: (levelId: string) => LevelConfig;
  
  // Player progress
  xp: number;
  collectibles: number;
  addXP: (amount: number) => void;
  addCollectible: () => void;
  
  // Level completion tracking
  completedLevels: Set<string>;
  completeLevel: (levelId: string) => void;
  isLevelCompleted: (levelId: string) => boolean;
}

const defaultLevels: Record<string, LevelConfig> = {
  birth: {
    id: 'birth',
    name: 'Birth',
    hotspots: [
      { id: 'hospital', x: 200, y: 300, dialog: "Welcome to the world! You were born in this hospital." },
      { id: 'parents', x: 500, y: 300, dialog: "Your parents are so happy to meet you!" },
      { id: 'first_breath', x: 800, y: 300, dialog: "Your first breath - the beginning of your journey." },
    ],
    backgroundGradient: 'from-pink-200 to-pink-400',
    backgroundImage: '/assets/hospital.png',
    nextLevel: 'childhood'
  },
  childhood: {
    id: 'childhood',
    name: 'Childhood',
    hotspots: [
      { id: 'toy1', x: 200, y: 300, dialog: "Remember your favorite teddy bear?" },
      { id: 'toy2', x: 500, y: 300, dialog: "You loved playing with these blocks!" },
    ],
    backgroundGradient: 'from-blue-400 to-blue-600',
    backgroundImage: '/assets/clouds.png'
  }
};

const defaultLevel: LevelConfig = {
  id: 'unknown',
  name: 'Unknown Level',
  hotspots: [],
  backgroundGradient: 'from-gray-400 to-gray-600',
  backgroundImage: '/assets/clouds.png'
};

const LevelContext = createContext<LevelContextType | undefined>(undefined);

export const LevelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Level management state
  const [levels] = useState<Record<string, LevelConfig>>(defaultLevels);
  const [currentLevel, setCurrentLevel] = useState<LevelConfig>(defaultLevels.birth);
  const [completedLevels, setCompletedLevels] = useState<Set<string>>(new Set());

  // Player progress state
  const [xp, setXP] = useState(0);
  const [collectibles, setCollectibles] = useState(0);

  const getLevelConfig = (levelId: string): LevelConfig => {
    return levels[levelId] || defaultLevel;
  };

  const handleSetCurrentLevel = (levelId: string) => {
    const level = getLevelConfig(levelId);
    setCurrentLevel(level);
  };

  const addXP = (amount: number) => {
    setXP(prev => prev + amount);
  };

  const addCollectible = () => {
    setCollectibles(prev => prev + 1);
  };

  const completeLevel = (levelId: string) => {
    setCompletedLevels(prev => new Set([...Array.from(prev), levelId]));
  };

  const isLevelCompleted = (levelId: string): boolean => {
    return completedLevels.has(levelId);
  };

  return (
    <LevelContext.Provider value={{
      // Level progression
      currentLevel,
      levels,
      setCurrentLevel: handleSetCurrentLevel,
      getLevelConfig,
      
      // Player progress
      xp,
      collectibles,
      addXP,
      addCollectible,
      
      // Level completion tracking
      completedLevels,
      completeLevel,
      isLevelCompleted,
    }}>
      {children}
    </LevelContext.Provider>
  );
};

export const useLevel = () => {
  const context = useContext(LevelContext);
  if (context === undefined) {
    throw new Error('useLevel must be used within a LevelProvider');
  }
  return context;
}; 