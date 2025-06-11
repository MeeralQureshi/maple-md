import React, { useState, useEffect } from 'react';

const Avatar: React.FC = () => {
  const [isWalking, setIsWalking] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setDirection('left');
        setIsWalking(true);
      } else if (e.key === 'ArrowRight') {
        setDirection('right');
        setIsWalking(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setIsWalking(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div 
      className={`w-16 h-16 transition-transform duration-200 ${
        direction === 'left' ? 'scale-x-[-1]' : ''
      }`}
    >
      {/* Placeholder pixel art avatar */}
      <div className="w-full h-full bg-maple-red rounded-lg relative">
        {/* Head */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-200 rounded-full" />
        {/* Body */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded" />
        {/* Legs */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-700 rounded-b" />
      </div>
    </div>
  );
};

export default Avatar; 