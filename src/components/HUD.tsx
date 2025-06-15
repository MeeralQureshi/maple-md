import React from 'react';
import { useLevel } from '../context/LevelContext';

const HUD: React.FC = () => {
  const { xp, collectibles, currentLevel } = useLevel();

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex flex-row items-stretch border-4 border-yellow-700 bg-yellow-400 shadow-pixel rounded-none px-0 py-0" style={{ boxShadow: '4px 4px 0 #a05a00, 8px 8px 0 #000' }}>
        {/* Level Title */}
        <div className="flex items-center justify-center px-8 py-4 border-r-4 border-yellow-700 bg-orange-500" style={{ minWidth: 160 }}>
          <span
            className="font-press-start text-3xl text-white"
            style={{
              textShadow: '2px 2px 0 #7a3f00, 4px 4px 0 #000',
              letterSpacing: '-0.05em',
            }}
          >
            {currentLevel.name}
          </span>
        </div>
        {/* XP Bar Section */}
        <div className="flex flex-col justify-center px-8 py-4 bg-blue-300 border-l-4 border-yellow-700" style={{ minWidth: 420, background: 'repeating-linear-gradient(135deg, #5a7fa6 0 8px, #6b97c7 8px 16px)' }}>
          {/* XP Bar */}
          <div className="flex items-center mb-2">
            <div className="relative h-8 w-72 bg-gray-800 border-4 border-gray-900 rounded-none flex items-center" style={{ boxShadow: '2px 2px 0 #222' }}>
              <div
                className="absolute left-0 top-0 h-full bg-maple-yellow"
                style={{
                  width: `${Math.min((xp % 100), 100)}%`,
                  transition: 'width 0.3s',
                  zIndex: 1,
                }}
              />
              {/* Pixel bar ends */}
              <div className="absolute left-0 top-0 h-full w-3 bg-gray-900 z-10" />
              <div className="absolute right-0 top-0 h-full w-3 bg-gray-900 z-10" />
            </div>
            {/* XP Icon */}
            <span className="ml-6 flex items-center">
              <span
                className="font-press-start text-2xl text-white px-2"
                style={{ textShadow: '2px 2px 0 #222, 4px 4px 0 #000' }}
              >
                XP:
              </span>
              <span className="inline-block align-middle ml-1" style={{ position: 'relative', top: 2 }}>
                <span className="inline-block w-6 h-6 bg-yellow-300 border-4 border-gray-900" style={{ boxShadow: '2px 2px 0 #222' }} />
              </span>
              <span
                className="font-press-start text-2xl text-white ml-2"
                style={{ textShadow: '2px 2px 0 #222, 4px 4px 0 #000' }}
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