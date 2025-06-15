import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LevelScene from './components/LevelScene';
import HUD from './components/HUD';
import { LevelProvider, useLevel } from './context/LevelContext';

const LevelRoutes: React.FC = () => {
  const { levels } = useLevel();
  
  return (
    <Routes>
      {/* Default route redirects to first level */}
      <Route path="/" element={<Navigate to="/birth" replace />} />
      
      {/* Generate routes for each level */}
      {Object.values(levels).map((level) => (
        <Route
          key={level.id}
          path={`/${level.id}`}
          element={<LevelScene levelId={level.id} />}
        />
      ))}
      
      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <LevelProvider>
      <Router>
        <div className="relative w-screen h-screen overflow-hidden bg-maple-blue">
          <LevelRoutes />
          <HUD />
        </div>
      </Router>
    </LevelProvider>
  );
};

export default App; 