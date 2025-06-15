import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/birth');
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-maple-blue">
      {/* Placeholder for game title/logo */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-maple-yellow mb-2">Maple MD</h1>
        <p className="text-white text-center">A Life Journey Game</p>
      </div>

      {/* Placeholder image */}
      <div className="w-64 h-64 mb-8 bg-maple-yellow/20 rounded-lg flex items-center justify-center">
        <span className="text-white">Game Image</span>
      </div>

      {/* Start button */}
      <button
        onClick={handleStart}
        className="px-8 py-3 bg-maple-yellow text-maple-blue font-bold rounded-lg
                 transform transition-all duration-200 hover:scale-105 hover:shadow-lg
                 active:scale-95"
      >
        Start Journey
      </button>
    </div>
  );
};

export default StartScreen; 