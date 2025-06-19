import React, { createContext, useContext, useState } from 'react';
import { defaultLevels, LevelConfig } from '../data/levels';

export interface Hotspot {
  id: string;
  x: number;
  y: number;
  dialog: string;
  iconSrc?: string;
}

export interface Sprite {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  imageSrc: string;
  animation?: 'idle' | 'walk' | 'wave' | 'sit';
  direction?: 'left' | 'right';
  zIndex?: number;
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
    setXP(0);
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