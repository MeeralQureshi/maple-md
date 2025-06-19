import React from 'react';
import { useLevel } from '../context/LevelContext';

const HUD: React.FC = () => {
  const { xp, currentLevel } = useLevel();

  // Determine if XP is at least 100
  const isXpFull = xp >= 100;

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="flex flex-row items-stretch border-2 border-yellow-700 bg-yellow-400 shadow-pixel rounded-none px-0 py-0" style={{ boxShadow: '2px 2px 0 #a05a00, 4px 4px 0 #000' }}>
        {/* Level Title */}
        <div className="flex items-center justify-center px-4 py-2 border-r-2 border-yellow-700 bg-orange-500" style={{ minWidth: 100 }}>
          <span
            className="font-press-start text-lg text-white"
            style={{
              textShadow: '1px 1px 0 #7a3f00, 2px 2px 0 #000',
              letterSpacing: '-0.05em',
            }}
          >
            {currentLevel.name}
          </span>
        </div>
        {/* XP Bar Section */}
        <div className="flex flex-col justify-center px-4 py-2 bg-blue-300 border-l-2 border-yellow-700" style={{ minWidth: 280, background: 'repeating-linear-gradient(135deg, #5a7fa6 0 8px, #6b97c7 8px 16px)' }}>
          {/* XP Bar */}
          <div className="flex items-center mb-1">
            <div className="relative h-6 w-48 bg-gray-800 border-2 border-gray-900 rounded-none flex items-center" style={{ boxShadow: '1px 1px 0 #222' }}>
              <div
                className={`absolute left-0 top-0 h-full ${isXpFull ? 'bg-green-500 animate-xp-flash' : 'bg-maple-yellow'}`}
                style={{
                  width: `${isXpFull ? 100 : Math.min(xp % 100, 100)}%`,
                  transition: 'width 0.3s',
                  zIndex: 1,
                }}
              />
              {/* Pixel bar ends */}
              <div className="absolute left-0 top-0 h-full w-2 bg-gray-900 z-10" />
              <div className="absolute right-0 top-0 h-full w-2 bg-gray-900 z-10" />
            </div>
            {/* XP Icon */}
            <span className="ml-3 flex items-center">
              <span
                className="font-press-start text-sm text-white px-1"
                style={{ textShadow: '1px 1px 0 #222, 2px 2px 0 #000' }}
              >
                XP:
              </span>
              <span className="inline-block align-middle ml-1" style={{ position: 'relative', top: 1 }}>
                <span className="inline-block w-4 h-4 bg-yellow-300 border-2 border-gray-900" style={{ boxShadow: '1px 1px 0 #222' }} />
              </span>
              <span
                className="font-press-start text-sm text-white ml-1"
                style={{ textShadow: '1px 1px 0 #222, 2px 2px 0 #000' }}
              >
                {xp}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HUD; 