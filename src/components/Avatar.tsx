import React from 'react';

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
type AvatarDirection = 'left' | 'right';

interface AvatarProps {
  state: AvatarState;
  direction: AvatarDirection;
  celebrate?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ state, direction, celebrate }) => {
  // Use celebrate state if true
  const displayState: AvatarState = celebrate ? 'celebrate' : state;
  const frame = spriteSheetMeta.frames.find(f => f.name === displayState) || spriteSheetMeta.frames[0];

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
        transformOrigin: 'top left',
      }}
      className="avatar-sprite"
    />
  );
};

export default Avatar; 