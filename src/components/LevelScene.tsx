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

const LevelScene: React.FC<LevelSceneProps> = ({ levelId }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeDialog, setActiveDialog] = useState<string | null>(null);
  const { addXP, addCollectible } = useLevel();

  // Example hotspots for the childhood level
  const hotspots: Hotspot[] = [
    { id: 'toy1', x: 200, y: 300, dialog: "Remember your favorite teddy bear?" },
    { id: 'toy2', x: 500, y: 300, dialog: "You loved playing with these blocks!" },
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    setScrollPosition(container.scrollLeft);
  };

  const handleHotspotClick = (hotspot: Hotspot) => {
    setActiveDialog(hotspot.dialog);
    addXP(10);
  };

  return (
    <div 
      className="relative w-full h-full overflow-x-auto overflow-y-hidden"
      onScroll={handleScroll}
    >
      <div 
        className="relative w-[2000px] h-full bg-gradient-to-b from-blue-400 to-blue-600"
        style={{ backgroundImage: 'url("/assets/clouds.png")', backgroundRepeat: 'repeat-x' }}
      >
        {/* Ground */}
        <div className="absolute bottom-0 w-full h-32 bg-green-600" />
        
        {/* Hotspots */}
        {hotspots.map((hotspot) => (
          <div
            key={hotspot.id}
            className="absolute w-8 h-8 cursor-pointer animate-bounce-slow"
            style={{ left: hotspot.x, bottom: hotspot.y }}
            onClick={() => handleHotspotClick(hotspot)}
          >
            <div className="w-full h-full bg-yellow-400 rounded-full" />
          </div>
        ))}

        {/* Avatar */}
        <div className="absolute bottom-32" style={{ left: 100 + scrollPosition }}>
          <Avatar />
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