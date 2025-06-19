import React from "react";
import { useNavigate } from "react-router-dom";
import PixelArtCloud from "../art/PixelArtCloud";
import NarrativeBox from "./NarrativeBox";

const babySprite = "/assets/babySprite.png"; 
const graduateSprite = "/assets/graduateSpriteStart.png"; 
const startScreenBanner = "/assets/startScreenBanner.png";

const clouds = [
  { id: 1, left: "10%", top: "15%", duration: "70s", delay: "0s" },
  { id: 2, left: "30%", top: "25%", duration: "60s", delay: "10s" },
  { id: 3, left: "60%", top: "12%", duration: "80s", delay: "5s" },
  { id: 4, left: "80%", top: "20%", duration: "50s", delay: "15s" },
];

export default function StartScreen() {
  const navigate = useNavigate();

  // Typewriter effect for narrative text
  const narrativeFull = "Join Murtaza on an epic adventure through life's milestones, from his very first steps to earning his medical degree!";

  const handleStart = () => {
    navigate('/birth');
  };

  return (
    <div className="relative w-full bg-blue-200 flex flex-col">
      {/* Animated Clouds */}
      {clouds.map(cloud => (
        <div
          key={cloud.id}
          className="absolute"
          style={{
            left: cloud.left,
            top: cloud.top,
            zIndex: 1,
            animation: `moveCloud ${cloud.duration} linear infinite`,
            animationDelay: cloud.delay,
          }}
        >
          <CloudBackground />
        </div>
      ))}

      {/* Foreground (Ground & Floating Islands) */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-green-700 bg-opacity-30" style={{ zIndex: 2 }}>
        {/* Add pixel-art floating islands/foreground if desired */}
      </div>

      {/* Title Banner */}
      <div className="flex flex-col items-center mt-16 z-10 relative">
        <div className="relative flex items-center justify-center" style={{ width: 1000, height: 260 }}>
          <img
            src={startScreenBanner}
            alt="MapleMD Banner"
            className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
            draggable="false"
          />
          <span
            className="font-press-start text-6xl md:text-5xl text-yellow-200 drop-shadow-[0_4px_0_rgba(80,40,0,1)]"
            style={{
              textShadow: `
                2px 2px 0 #5a3a0a,
                4px 4px 0 #2d1a05,
                0 0 8px #fff8b0
              `,
              letterSpacing: '-0.05em',
            }}
          >
            MapleMD
          </span>
        </div>
        <div className="bg-yellow-100 border-2 border-yellow-600 rounded px-6 py-2 shadow-md font-press-start text-md md:text-xl text-yellow-900 mt-2">
          Murtaza's Medical Journey – From Birth to Graduation
        </div>
      </div>

      {/* Characters and Path */}
      <div className="flex flex-row items-center justify-center mt-2 z-10 relative">
        {/* Baby Sprite */}
        <img src={babySprite} alt="Baby Murtaza" className="w-32 h-40 mx-6 pixelated drop-shadow-lg" />
        
        {/* Pixel-art Path */}
        <div className="relative flex items-center">
          {/* Main path */}
          <div className="w-32 h-4 bg-yellow-600 rounded-full border-4 border-yellow-300 relative overflow-hidden">
            {/* Path decorations */}
            <div className="absolute -top-2 left-1/4 w-2 h-2 bg-yellow-300 rounded-full" />
            <div className="absolute -top-2 left-1/2 w-2 h-2 bg-yellow-300 rounded-full" />
            <div className="absolute -top-2 left-3/4 w-2 h-2 bg-yellow-300 rounded-full" />
            
            {/* Path shine */}
            <div className="path-shine" />
          </div>
          
          {/* Path connector */}
          <div className="w-8 h-8 bg-yellow-600 rounded-full border-4 border-yellow-300 flex items-center justify-center relative overflow-hidden">
            <div className="w-4 h-4 bg-yellow-300 rounded-full" />
            <div className="path-shine" />
          </div>
          
          {/* Second path segment */}
          <div className="w-32 h-4 bg-yellow-600 rounded-full border-4 border-yellow-300 relative overflow-hidden">
            {/* Path decorations */}
            <div className="absolute -top-2 left-1/4 w-2 h-2 bg-yellow-300 rounded-full" />
            <div className="absolute -top-2 left-1/2 w-2 h-2 bg-yellow-300 rounded-full" />
            <div className="absolute -top-2 left-3/4 w-2 h-2 bg-yellow-300 rounded-full" />
            
            {/* Path shine */}
            <div className="path-shine" />
          </div>
        </div>
        
        {/* Graduate Sprite */}
        <img src={graduateSprite} alt="Doctor Murtaza" className="w-32 h-40 mx-6 pixelated drop-shadow-lg" />
      </div>

      {/* Narrative Text */}
      <div className="flex justify-center mt-4 z-10 relative">
        <NarrativeBox narrative={narrativeFull} />
      </div>

      {/* Start Button */}
      <div className="flex justify-center my-10 z-10 relative">
        <button
          className="relative px-10 py-4 bg-yellow-300 border-4 border-yellow-800 rounded-xl shadow-lg font-press-start text-xl text-yellow-900 font-bold tracking-wide animate-sparkle focus:outline-none transition active:scale-95"
          onClick={handleStart}
        >
          <SparkleEffect />
          START ADVENTURE
        </button>
      </div>
    </div>
  );
}

// -- Simple Cloud SVG (replace with pixel art if you wish) --
function CloudBackground() {
  return (
    <>
      {/* First cloud group */}
      <PixelArtCloud size={128} style={{ position: 'absolute', top: 40, left: 100 }} />
      <PixelArtCloud size={80} style={{ position: 'absolute', top: 120, left: 260 }} />
      
      {/* Second cloud group */}
      <PixelArtCloud size={96} style={{ position: 'absolute', top: 60, left: 400 }} />
      <PixelArtCloud size={64} style={{ position: 'absolute', top: 140, left: 480 }} />
      
      {/* Third cloud group */}
      <PixelArtCloud size={112} style={{ position: 'absolute', top: 30, left: 700 }} />
      <PixelArtCloud size={72} style={{ position: 'absolute', top: 110, left: 780 }} />
      
      {/* Fourth cloud group */}
      <PixelArtCloud size={88} style={{ position: 'absolute', top: 80, left: 900 }} />
      <PixelArtCloud size={56} style={{ position: 'absolute', top: 160, left: 960 }} />
      
      {/* Fifth cloud group */}
      <PixelArtCloud size={104} style={{ position: 'absolute', top: 50, left: 1100 }} />
      <PixelArtCloud size={68} style={{ position: 'absolute', top: 130, left: 1160 }} />
    </>
  );
}

// -- Sparkle Effect (extra sparkles around the button) --
function SparkleEffect() {
  return (
    <>
      <span className="absolute left-3 top-1 w-3 h-3 bg-yellow-200 rounded-full opacity-70 animate-ping" />
      <span className="absolute right-6 top-2 w-2 h-2 bg-white rounded-full opacity-50 animate-pulse" />
      <span className="absolute right-8 bottom-1 w-2 h-2 bg-yellow-100 rounded-full opacity-80 animate-bounce" />
    </>
  );
}
