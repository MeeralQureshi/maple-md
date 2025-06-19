import React, { useState } from 'react';

interface HotspotProps {
  id: string;
  x: number;
  y: number;
  dialog: string;
  iconSrc?: string;
  onHotspotClick: (hotspot: { id: string; dialog: string }) => void;
}

const Hotspot: React.FC<HotspotProps> = ({ id, x, y, dialog, iconSrc, onHotspotClick }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCollected, setIsCollected] = useState(false);

  const handleClick = () => {
    if (isCollected || isAnimating) return;
    
    setIsAnimating(true);
    onHotspotClick({ id, dialog });
    
    // After animation completes, mark as collected
    setTimeout(() => {
      setIsCollected(true);
    }, 800); // Match the animation duration
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

  // Don't render collected hotspots at all
  if (isCollected) return null;

  const shouldShow = !isCollected && !isAnimating;

  return (
    <div
      className={`absolute w-12 h-12 cursor-pointer z-50 flex items-center justify-center text-2xl ${
        isAnimating ? 'animate-coin-disappear' : shouldShow ? 'animate-bounce-slow' : ''
      }`}
      style={{ 
        left: x, 
        bottom: y,
        pointerEvents: shouldShow ? 'auto' : 'none'
      }}
      onClick={handleClick}
    >
      {iconSrc ? (
        <img
          src={iconSrc}
          alt={id}
          className="w-full h-full object-contain pixelated"
          style={{ imageRendering: 'pixelated' }}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full border-2 border-yellow-700 flex items-center justify-center shadow-lg relative" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.3)' }}>
          <span className="text-2xl">
            {getHotspotEmoji(id)}
          </span>
          {/* Sparkle effects */}
          {shouldShow && (
            <>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-200 rounded-full animate-ping" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-100 rounded-full animate-pulse" />
              <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full animate-bounce" />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Hotspot; 