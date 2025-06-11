import React, { createContext, useContext, useState } from 'react';

interface LevelContextType {
  currentLevel: string;
  xp: number;
  collectibles: number;
  setCurrentLevel: (level: string) => void;
  addXP: (amount: number) => void;
  addCollectible: () => void;
}

const LevelContext = createContext<LevelContextType | undefined>(undefined);

export const LevelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState('childhood');
  const [xp, setXP] = useState(0);
  const [collectibles, setCollectibles] = useState(0);

  const addXP = (amount: number) => {
    setXP(prev => prev + amount);
  };

  const addCollectible = () => {
    setCollectibles(prev => prev + 1);
  };

  return (
    <LevelContext.Provider value={{
      currentLevel,
      xp,
      collectibles,
      setCurrentLevel,
      addXP,
      addCollectible,
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