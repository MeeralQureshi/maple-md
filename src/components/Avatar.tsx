import React from 'react';

const SPRITE_WIDTH = 512;  // Each frame is 512x512
const SPRITE_HEIGHT = 512;

const spriteSheetMeta = {
  frameWidth: SPRITE_WIDTH,
  frameHeight: SPRITE_WIDTH,
  frames: [
    { name: 'idle', x: 0, y: 20 },
    { name: 'walkLeft', x: 524, y: 0 },
  ],
};
type AvatarState = 'idle' | 'walkRight' | 'walkLeft' | 'celebrate';

interface AvatarProps {
  state: AvatarState;
  celebrate?: boolean;
  spriteSheet?: string;
}

const Avatar: React.FC<AvatarProps> = ({ state, celebrate, spriteSheet }) => {
  // Use celebrate state if true
  const displayState: AvatarState = celebrate ? 'celebrate' : state;
  
  // For walkRight, use walkLeft sprite but flip it
  const effectiveState = displayState === 'walkRight' ? 'walkLeft' : displayState;
  const frame = spriteSheetMeta.frames.find(f => f.name === effectiveState) || spriteSheetMeta.frames[0];

  const isFlipped = displayState === 'walkRight';
  const isWalkingRight = state === 'walkRight';

  return (
    <div
      style={{
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
        backgroundImage: `url(${spriteSheet})`,
        backgroundPosition: `-${frame.x}px -${frame.y}px`,
        backgroundRepeat: 'no-repeat',
        imageRendering: 'pixelated',
        transform: `scale(0.25) ${isFlipped ? 'scaleX(-1)' : ''}`,
        transformOrigin: isFlipped ? 'top right' : 'top left',
        marginLeft: isWalkingRight ? '-500px' : '0px',
      }}
      className="avatar-sprite"
    />
  );
};

export default Avatar; 