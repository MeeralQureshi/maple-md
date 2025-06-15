import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import DialogBox from './DialogBox';
import { useLevel } from '../context/LevelContext';

interface LevelSceneProps {
  levelId: string;
}

interface Hotspot {
  id: string;
  x: number;
  y: number;
  dialog: string;
}

interface LevelConfig {
  hotspots: Hotspot[];
  backgroundGradient: string;
  backgroundImage: string;
}

const JUMP_HEIGHT = 120; // pixels to jump up
const JUMP_DURATION = 400; // ms
const BASE_HEIGHT = -270;
const JUMP_DISTANCE = 60; // pixels to move horizontally during jump

const LevelScene: React.FC<LevelSceneProps> = ({ levelId }) => {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);
  const { addXP, addCollectible, getLevelConfig } = useLevel();

  // Avatar movement and animation state
  const [avatarX, setAvatarX] = useState(0); // Start at far left
  const [avatarY, setAvatarY] = useState(BASE_HEIGHT); // -270 is the normal bottom value
  const [isJumping, setIsJumping] = useState(false);
  const [avatarState, setAvatarState] = useState<'idle' | 'walkLeft' | 'walkRight' | 'celebrate'>('idle');
  const [avatarDirection, setAvatarDirection] = useState<'left' | 'right'>('right');
  const [keysDown, setKeysDown] = useState<{ left: boolean; right: boolean }>({ left: false, right: false });
  const [jumpKeyHeld, setJumpKeyHeld] = useState(false);

  const levelConfig = getLevelConfig(levelId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setKeysDown(k => ({ ...k, left: true }));
      if (e.key === 'ArrowRight') setKeysDown(k => ({ ...k, right: true }));
      if (e.key === 'ArrowUp') setJumpKeyHeld(true);
      if (e.key === 'ArrowLeft' && !isJumping) {
        setAvatarDirection('left');
        setAvatarState('walkLeft');
      } else if (e.key === 'ArrowRight' && !isJumping) {
        setAvatarDirection('right');
        setAvatarState('walkRight');
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setKeysDown(k => ({ ...k, left: false }));
      if (e.key === 'ArrowRight') setKeysDown(k => ({ ...k, right: false }));
      if (e.key === 'ArrowUp') setJumpKeyHeld(false);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setAvatarState('idle');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isJumping, avatarX, keysDown, avatarState]);

  // Auto-jump-on-hold logic
  useEffect(() => {
    if (!isJumping && jumpKeyHeld) {
      setIsJumping(true);
      setAvatarY(BASE_HEIGHT + JUMP_HEIGHT);

      let startX = avatarX;
      let endX = startX;
      if (keysDown.left && !keysDown.right) {
        endX = Math.max(0, startX - JUMP_DISTANCE);
      } else if (keysDown.right && !keysDown.left) {
        endX = Math.min(window.innerWidth - 128, startX + JUMP_DISTANCE);
      }

      // Animate X over jump duration
      const startTime = performance.now();
      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / JUMP_DURATION, 1);
        setAvatarX(startX + (endX - startX) * progress);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);

      setTimeout(() => {
        setAvatarY(BASE_HEIGHT);
        setIsJumping(false);
        // Continue moving if a direction key is still held
        if (keysDown.left && !keysDown.right) {
          setAvatarDirection('left');
          setAvatarState('walkLeft');
        } else if (keysDown.right && !keysDown.left) {
          setAvatarDirection('right');
          setAvatarState('walkRight');
        }
      }, JUMP_DURATION);
    }
  }, [isJumping, jumpKeyHeld, avatarX, keysDown]);

  useEffect(() => {
    if (isJumping) return;

    let animationFrame: number | null = null;

    const move = () => {
      setAvatarX(prev => {
        if (keysDown.left && !keysDown.right) {
          setAvatarDirection('left');
          setAvatarState('walkLeft');
          return Math.max(0, prev - 4); // smaller step for smoothness
        } else if (keysDown.right && !keysDown.left) {
          setAvatarDirection('right');
          setAvatarState('walkRight');
          return Math.min(window.innerWidth - 128, prev + 4);
        } else {
          setAvatarState('idle');
          return prev;
        }
      });
      animationFrame = requestAnimationFrame(move);
    };

    if (keysDown.left || keysDown.right) {
      animationFrame = requestAnimationFrame(move);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [keysDown, isJumping]);

  const handleHotspotClick = (hotspot: Hotspot) => {
    setActiveDialog(hotspot.dialog);
    addXP(10);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div
        className={`relative w-full min-h-screen bg-gradient-to-b ${levelConfig.backgroundGradient}`}
        style={{ 
          backgroundImage: `url(${levelConfig.backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Ground */}
        <div className="absolute bottom-0 w-full h-32 bg-green-600 z-10" />
        
        {/* Hotspots */}
        {levelConfig.hotspots.map((hotspot) => (
          <div
            key={hotspot.id}
            className="absolute w-8 h-8 cursor-pointer animate-bounce-slow z-50"
            style={{ left: hotspot.x, bottom: hotspot.y }}
            onClick={() => handleHotspotClick(hotspot)}
          >
            <div className="w-full h-full bg-yellow-400 rounded-full" />
          </div>
        ))}

        {/* Avatar */}
        <div className="absolute z-30 avatar-jump-transition" style={{ left: avatarX, bottom: avatarY }}>
          <Avatar state={avatarState} direction={avatarDirection} />
        </div>
      </div>

      {/* Dialog Box */}
      {activeDialog && (
        <DialogBox
          message={activeDialog}
          onClose={() => setActiveDialog(null)}
        />
      )}
    </div>
  );
};

export default LevelScene; 