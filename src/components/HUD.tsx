import React from 'react';
import { useLevel } from '../context/LevelContext';

const HUD: React.FC = () => {
  const { xp, collectibles, currentLevel } = useLevel();

  return (
    <div className="fixed top-0 left-0 w-full p-4 z-50">
      <div className="max-w-4xl mx-auto bg-black/50 rounded-lg p-4 text-white">
        <div className="flex justify-between items-center">
          {/* Level Title */}
          <div className="text-xl font-bold">
            {currentLevel.name}
          </div>

          {/* XP Bar */}
          <div className="flex-1 mx-4">
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-maple-yellow h-4 rounded-full transition-all duration-300"
                style={{ width: `${Math.min((xp % 100), 100)}%` }}
              />
            </div>
            <div className="text-sm mt-1">XP: {xp}</div>
          </div>

          {/* Collectibles */}
          <div className="flex items-center">
            <span className="mr-2">🌟</span>
            <span>{collectibles}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HUD; 