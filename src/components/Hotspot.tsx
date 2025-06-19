import React, { useState } from 'react';

interface HotspotProps {
  id: string;
  x: number;
  y: number;
  dialog: string;
  iconSrc?: string;
  xp?: number;
  onHotspotClick?: (hotspot: { id: string; dialog: string; xp?: number }) => void;
}

const Hotspot: React.FC<HotspotProps> = ({ id, x, y, dialog, iconSrc, xp, onHotspotClick }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCollected, setIsCollected] = useState(false);

  const handleClick = () => {
    if (isCollected || isAnimating) return;
    setIsAnimating(true);
    onHotspotClick && onHotspotClick({ id, dialog, xp });
    setTimeout(() => {
      setIsCollected(true);
    }, 800);
  };

  const getHotspotEmoji = (hotspotId: string): string => {
    switch (hotspotId) {
      case 'hospital':
        return '🏥';
      case 'parents':
        return '👨‍👩‍👦';
      case 'first_breath':
        return '💨';
      case 'toy1':
        return '🧸';
      case 'toy2':
        return '🧱';
      default:
        return '⭐';
    }
  };

  if (isCollected) return null;
  const shouldShow = !isCollected && !isAnimating;

  return (
    <div
      className={`absolute w-16 h-16 z-50 flex items-center justify-center text-3xl cursor-pointer ${
        isAnimating ? 'animate-coin-disappear' : shouldShow ? 'animate-bounce-slow' : ''
      }`}
      style={{
        left: x,
        bottom: y,
        pointerEvents: shouldShow ? 'auto' : 'none',
      }}
      onClick={handleClick}
    >
      {iconSrc ? (
        <img
          src={iconSrc}
          alt={id}
          className="w-full h-full object-contain pixelated cursor-pointer"
          style={{ imageRendering: 'pixelated' }}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full border-2 border-yellow-700 flex items-center justify-center shadow-lg relative cursor-pointer" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.3)' }}>
          <span className="text-3xl cursor-pointer">
            {getHotspotEmoji(id)}
          </span>
          {/* Sparkle effects */}
          {shouldShow && (
            <>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-200 rounded-full animate-ping cursor-pointer" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-yellow-100 rounded-full animate-pulse cursor-pointer" />
              <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full animate-bounce cursor-pointer" />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Hotspot; 