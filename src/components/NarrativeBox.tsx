import React, { useState, useEffect } from "react";

interface NarrativeBoxProps {
  narrative: string;
  className?: string;
  variant?: 'default' | 'sidebar';
}

const NarrativeBox: React.FC<NarrativeBoxProps> = ({ narrative, className = "", variant = 'default' }) => {
  const [typedNarrative, setTypedNarrative] = useState("");
  const [blipIndex, setBlipIndex] = useState(-1);

  useEffect(() => {
    setTypedNarrative("");
    setBlipIndex(-1);
    let i = 0;
    const interval = setInterval(() => {
      setTypedNarrative(narrative.slice(0, i + 1));
      setBlipIndex(i);
      i++;
      if (i >= narrative.length) {
        clearInterval(interval);
        setTimeout(() => setBlipIndex(-1), 200); // Remove blip after finish
      }
    }, 24);
    return () => clearInterval(interval);
  }, [narrative]);

  return (
    <div
      className={`bg-yellow-50 border-4 border-yellow-800 rounded-xl shadow-lg font-press-start text-gray-900 ${
        variant === 'sidebar'
          ? 'fixed top-8 right-40 w-64 h-auto max-h-[340px] p-4 z-40 text-sm flex flex-col items-start'
          : 'px-6 py-3 w-full max-w-4xl min-h-[90px] text-base md:text-lg'
      } ${className}`}
    >
      {typedNarrative}
      {blipIndex !== -1 && blipIndex < narrative.length && (
        <span className="inline-block w-3 h-5 align-bottom animate-blip ml-0.5">
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_2)">
              <ellipse cx="8" cy="10" rx="3" ry="4" fill="#ffe066"/>
              <ellipse cx="8" cy="10" rx="1.5" ry="2" fill="#fffbe6"/>
            </g>
            <defs>
              <filter id="filter0_d_1_2" x="0" y="0" width="16" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_1_2"/>
              </filter>
            </defs>
          </svg>
        </span>
      )}
    </div>
  );
};

export default NarrativeBox; 