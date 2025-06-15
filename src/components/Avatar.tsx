import React from 'react';

const SPRITE_WIDTH = 512;  // Each frame is 512x512
const SPRITE_HEIGHT = 512;

const ADULT_SPRITE_SHEET = '/assets/adultSprites.png';
const BABY_SPRITE_SHEET = '/assets/babySprites.png';

const babySpriteSheetMeta = {
  frameWidth: SPRITE_WIDTH,
  frameHeight: SPRITE_WIDTH,
  frames: [
    { name: 'idle', x: 0, y: 20 },
    { name: 'walkRight', x: 0, y: 524 },
    { name: 'walkLeft', x: 524, y: 0 },
    { name: 'celebrate', x: 512, y: 512 },
  ],
};

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
  const frame = babySpriteSheetMeta.frames.find(f => f.name === displayState) || babySpriteSheetMeta.frames[0];

  return (
    <div
      style={{
        width: SPRITE_WIDTH,
        height: SPRITE_HEIGHT,
        backgroundImage: `url(${BABY_SPRITE_SHEET})`,
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