import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LevelScene from './components/LevelScene';
import HUD from './components/HUD';
import { LevelProvider } from './context/LevelContext';

const App: React.FC = () => {
  return (
    <LevelProvider>
      <Router>
        <div className="relative w-screen h-screen overflow-hidden bg-maple-blue">
          <Routes>
            <Route path="/" element={<LevelScene levelId="childhood" />} />
            {/* Add more routes for other levels */}
          </Routes>
          <HUD />
        </div>
      </Router>
    </LevelProvider>
  );
};

export default App; 