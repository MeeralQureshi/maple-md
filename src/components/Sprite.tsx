import React from 'react';
import { Sprite as SpriteType } from '../context/LevelContext';

interface SpriteProps {
  sprite: SpriteType;
}

const Sprite: React.FC<SpriteProps> = ({ sprite }) => {
  const getAnimationClass = (animation?: string) => {
    switch (animation) {
      case 'walk':
        return 'animate-pulse';
      case 'wave':
        return 'animate-bounce';
      case 'sit':
        return 'animate-pulse';
      default:
        return '';
    }
  };

  const getDirectionClass = (direction?: string) => {
    return direction === 'left' ? 'scale-x-[-1]' : '';
  };

  return (
    <div
      className={`absolute ${getAnimationClass(sprite.animation)} ${getDirectionClass(sprite.direction)}`}
      style={{
        left: sprite.x,
        bottom: sprite.y,
        width: sprite.width,
        height: sprite.height,
        zIndex: sprite.zIndex || 10,
      }}
    >
      <img
        src={sprite.imageSrc}
        alt={sprite.id}
        className="w-full h-full object-contain pixelated"
        style={{
          imageRendering: 'pixelated',
        }}
      />
    </div>
  );
};

export default Sprite; 