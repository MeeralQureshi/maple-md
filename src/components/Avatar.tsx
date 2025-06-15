import React, { useState, useEffect } from 'react';

const SPRITE_WIDTH = 512;  // Each frame is 512x512
const SPRITE_HEIGHT = 512;
const SPRITE_SHEET = '/assets/sprites.png';

const spriteSheetMeta = {
  frameWidth: SPRITE_WIDTH,
  frameHeight: SPRITE_HEIGHT,
  frames: [
    { name: 'idle', x: 0, y: 0 },
    { name: 'walkRight', x: 512, y: 0 },
    { name: 'walkLeft', x: 0, y: 512 },
    { name: 'celebrate', x: 512, y: 512 },
  ],
};

type AvatarState = 'idle' | 'walkRight' | 'walkLeft' | 'celebrate';

const Avatar: React.FC<{ celebrate?: boolean }> = ({ celebrate }) => {
  const [state, setState] = useState<AvatarState>('idle');
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    if (celebrate) {
      setState('celebrate');
      return;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setDirection('left');
        setState('walkLeft');
      } else if (e.key === 'ArrowRight') {
        setDirection('right');
        setState('walkRight');
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setState('idle');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [celebrate]);

  // Find the correct frame
  const frame = spriteSheetMeta.frames.find(f => f.name === state) || spriteSheetMeta.frames[0];

  return (
    <div
      style={{
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
        backgroundImage: `url(${SPRITE_SHEET})`,
        backgroundPosition: `-${frame.x}px -${frame.y}px`,
        backgroundRepeat: 'no-repeat',
        imageRendering: 'pixelated',
        transform: 'scale(0.25)', // Scale down to 128x128
      }}
      className="avatar-sprite"
    />
  );
};

export default Avatar; 