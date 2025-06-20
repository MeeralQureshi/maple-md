import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LevelScene from './components/LevelScene';
import HUD from './components/HUD';
import StartScreen from './components/StartScreen';
import EndScreen from './components/EndScreen';
import { LevelProvider, useLevel } from './context/LevelContext';

const LevelRoutes: React.FC = () => {
  const { levels } = useLevel();
  
  return (
    <Routes>
      {/* Start screen route */}
      <Route path="/" element={<StartScreen />} />
      
      {/* Generate routes for each level */}
      {Object.values(levels).map((level) => (
        <Route
          key={level.id}
          path={`/${level.id}`}
          element={<LevelScene levelId={level.id} />}
        />
      ))}
      
      {/* End screen route */}
      <Route path="/end" element={<EndScreen />} />
      
      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const AppContent: React.FC<{ onInteraction: () => void; audioRef: React.RefObject<HTMLAudioElement> }> = ({ onInteraction, audioRef }) => {
  const location = useLocation();

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (location.pathname === '/end') {
        audio.pause();
      } else {
        // This will attempt to play if it's paused.
        // It will only succeed if the user has interacted with the page.
        audio.play().catch(() => {});
      }
    }
  }, [location.pathname, audioRef]);

  return (
    <div className="relative w-screen bg-maple-blue" onClick={onInteraction}>
      <LevelRoutes />
      {/* Only show HUD when not on start screen or end screen */}
      {location.pathname !== '/' && location.pathname !== '/end' && <HUD />}
    </div>
  );
};

const App: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleUserInteraction = () => {
    const audio = audioRef.current;
    if (audio && audio.paused) {
      audio.volume = 0.2;
      audio.play().catch(console.error);
    }
  };

  return (
    <LevelProvider>
      <Router>
        <audio ref={audioRef} src="/assets/sounds/game-music.wav" loop />
        <AppContent onInteraction={handleUserInteraction} audioRef={audioRef} />
      </Router>
    </LevelProvider>
  );
};

export default App; 