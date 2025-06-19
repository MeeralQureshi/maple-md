import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from './Avatar';
import DialogBox from './DialogBox';
import Sprite from './Sprite';
import Hotspot from './Hotspot';
import { useLevel, Sprite as SpriteType } from '../context/LevelContext';
import { getHotspotConfig } from '../data/hotspots';

interface LevelSceneProps {
  levelId: string;
}

interface Hotspot {
  id: string;
  x: number;
  y: number;
  dialog?: string;
  iconSrc?: string;
  xp?: number;
}

interface LevelConfig {
  hotspots: Hotspot[];
  sprites?: SpriteType[];
  backgroundImage: string;
  spriteSheet?: string;
  nextLevel?: string;
}

const JUMP_HEIGHT = 120; // pixels to jump up
const JUMP_DURATION = 400; // ms
const BASE_HEIGHT = -360;
const JUMP_DISTANCE = 60; // pixels to move horizontally during jump

const LevelScene: React.FC<LevelSceneProps> = ({ levelId }) => {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);
  const [levelComplete, setLevelComplete] = useState(false);
  const { addXP, addCollectible, getLevelConfig, setCurrentLevel, xp } = useLevel();
  const nextLevelRef = useRef<string | null>(null);
  const navigate = useNavigate();

  // Avatar movement and animation state
  const [avatarX, setAvatarX] = useState(0); // Start at far left
  const [avatarY, setAvatarY] = useState(BASE_HEIGHT);
  const [isJumping, setIsJumping] = useState(false);
  const [avatarState, setAvatarState] = useState<'idle' | 'walkLeft' | 'walkRight' | 'celebrate'>('idle');
  const [keysDown, setKeysDown] = useState<{ left: boolean; right: boolean }>({ left: false, right: false });
  const [jumpKeyHeld, setJumpKeyHeld] = useState(false);

  const levelConfig = getLevelConfig(levelId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setKeysDown(k => ({ ...k, left: true }));
      if (e.key === 'ArrowRight') setKeysDown(k => ({ ...k, right: true }));
      if (e.key === 'ArrowUp') setJumpKeyHeld(true);
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
  }, []);

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
      }, JUMP_DURATION);
    }
  }, [isJumping, jumpKeyHeld, avatarX, keysDown]);

  useEffect(() => {
    if (isJumping) return;

    let animationFrame: number | null = null;

    const move = () => {
      setAvatarX(prev => {
        if (keysDown.left && !keysDown.right) {
          setAvatarState('walkLeft');
          return Math.max(0, prev - 4); // smaller step for smoothness
        } else if (keysDown.right && !keysDown.left) {
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
  
  // Handle dialog close with spacebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && activeDialog) {
        e.preventDefault(); // Prevent page scroll
        setActiveDialog(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDialog]);

  // Transition to next level when avatar reaches far right and has 100+ XP
  useEffect(() => {
    const avatarWidth = 128;
    if (
      avatarX >= window.innerWidth - avatarWidth &&
      levelConfig.nextLevel &&
      xp >= 100 &&
      !levelComplete
    ) {
      setLevelComplete(true);
      nextLevelRef.current = levelConfig.nextLevel;
      setTimeout(() => {
        setLevelComplete(false);
        if (nextLevelRef.current) {
          if (nextLevelRef.current === 'end') {
            // Navigate to end screen
            navigate('/end');
          } else {
            // Navigate to next level
            setCurrentLevel(nextLevelRef.current);
            navigate('/' + nextLevelRef.current);
          }
        }
      }, 1800); // Show message for 1.8s
    }
  }, [avatarX, levelConfig.nextLevel, setCurrentLevel, xp, levelComplete, navigate]);

  // Reset avatar position when level changes
  useEffect(() => {
    setAvatarX(0); // Start at far left
    setAvatarY(BASE_HEIGHT);
  }, [levelId]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Level Complete Overlay */}
      {levelComplete && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-black bg-opacity-60 rounded-2xl px-16 py-12 shadow-2xl border-4 border-yellow-400 flex flex-col items-center">
            <span className="font-press-start text-4xl text-green-300 drop-shadow-lg mb-4" style={{ textShadow: '2px 2px 0 #222, 4px 4px 0 #000' }}>
              Level Complete!
            </span>
            <span className="font-press-start text-xl text-yellow-200">Get ready for the next stage...</span>
          </div>
        </div>
      )}
      <div
        className="relative w-full min-h-screen"
        style={{ 
          backgroundImage: `url(${levelConfig.backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Ground */}
        <div className={`absolute bottom-0 w-full h-8 ${levelConfig.groundColor} z-10`} />
        
        {/* Hotspots */}
        {levelConfig.hotspots.map((hotspot) => {
          const hotspotConfig = getHotspotConfig(hotspot.id);
          return (
            <Hotspot
              key={hotspot.id}
              id={hotspot.id}
              x={hotspot.x}
              y={hotspot.y}
              dialog={hotspotConfig?.dialog || ''}
              iconSrc={hotspot.iconSrc}
              xp={hotspotConfig?.xp}
              onHotspotClick={({ id, dialog, xp }) => {
                setActiveDialog(dialog);
                addXP(xp ?? 10);
                addCollectible();
              }}
            />
          );
        })}

        {/* Sprites */}
        {levelConfig.sprites?.map((sprite) => (
          <Sprite key={sprite.id} sprite={sprite} />
        ))}

        {/* Avatar */}
        <div className="absolute z-30 avatar-jump-transition" style={{ left: avatarX, bottom: avatarY }}>
          <Avatar 
            state={avatarState} 
            spriteSheet={levelConfig.spriteSheet}
          />
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