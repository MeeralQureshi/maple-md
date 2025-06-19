import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NarrativeBox from './NarrativeBox';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  speed: number;
}

const EndScreen: React.FC = () => {
  const navigate = useNavigate();
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  const narrativeFull = [
    "Congratulations! You've completed your your medical education!",
    "From your first breath to graduation day.",
    "You've grown, learned, and experienced so much.",
    "Your adventure has been quite a story!",
    "Ready to start a new chapter?"
  ];

  const confettiColors = [
    '#FFD700', // Gold
    '#FF6B6B', // Red
    '#4ECDC4', // Teal
    '#45B7D1', // Blue
    '#96CEB4', // Green
    '#FFEAA7', // Yellow
    '#DDA0DD', // Plum
    '#98D8C8'  // Mint
  ];

  // Generate confetti pieces
  useEffect(() => {
    const generateConfetti = () => {
      const pieces: ConfettiPiece[] = [];
      for (let i = 0; i < 100; i++) {
        pieces.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: -20 - Math.random() * 100,
          color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
          rotation: Math.random() * 360,
          speed: 2 + Math.random() * 3
        });
      }
      setConfetti(pieces);
    };

    generateConfetti();
  }, []);

  // Animate confetti
  useEffect(() => {
    const interval = setInterval(() => {
      setConfetti(prev => 
        prev.map(piece => ({
          ...piece,
          y: piece.y + piece.speed,
          rotation: piece.rotation + 2
        })).filter(piece => piece.y < window.innerHeight + 50)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/assets/graduation.png')" }}
      />

      {/* Confetti */}
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 pointer-events-none"
          style={{
            left: piece.x,
            top: piece.y,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            borderRadius: '50%',
            boxShadow: `0 0 4px ${piece.color}`
          }}
        />
      ))}

      {/* Animated clouds */}
      <div className="absolute top-20 left-0 w-full h-32 overflow-hidden pointer-events-none">
        <div className="animate-moveCloud">
          <div className="text-white text-6xl opacity-20">☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️</div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="font-press-start text-6xl md:text-8xl text-yellow-300 mb-4 drop-shadow-lg" 
              style={{ textShadow: '4px 4px 0 #222, 8px 8px 0 #000' }}>
            🎓 GRADUATION! 🎓
          </h1>
          <div className="text-2xl md:text-4xl text-yellow-200 font-press-start animate-pulse">
            🎉 CONGRATULATIONS! 🎉
          </div>
        </div>

        {/* Banner */}
        <div className="relative mb-8">
          <div className="w-80 h-32 md:w-96 md:h-40 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 border-4 border-yellow-700 rounded-xl shadow-2xl flex items-center justify-center transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="text-center">
              <div className="text-4xl md:text-6xl mb-2">🎓</div>
              <div className="font-press-start text-lg md:text-xl text-yellow-900 font-bold">
                NEXT CHAPTER LOADING...
              </div>
            </div>
          </div>
          {/* Shine effect */}
          <div className="path-shine"></div>
        </div>

        {/* Narrative */}
        <div className="flex justify-center mt-4 z-10 relative">
          <NarrativeBox narrative={narrativeFull.join('\n\n')} />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-10 z-10 relative">
          <button
            className="relative px-8 py-4 bg-green-400 border-4 border-green-700 rounded-xl shadow-lg font-press-start text-lg text-green-900 font-bold tracking-wide animate-sparkle focus:outline-none transition active:scale-95 hover:bg-green-300"
            onClick={handleRestart}
          >
            <div className="absolute inset-0 bg-green-200 rounded-lg opacity-0 hover:opacity-30 transition-opacity"></div>
            <span className="relative z-10">🎮 PLAY AGAIN</span>
          </button>
        </div>

        {/* Floating celebration elements */}
        <div className="absolute top-1/4 left-10 text-4xl animate-bounce">🎊</div>
        <div className="absolute top-1/3 right-10 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>🎉</div>
        <div className="absolute bottom-1/4 left-20 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>🏆</div>
        <div className="absolute bottom-1/3 right-20 text-3xl animate-bounce" style={{ animationDelay: '1.5s' }}>⭐</div>
      </div>
    </div>
  );
};

export default EndScreen; 