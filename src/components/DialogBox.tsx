import React from 'react';
import { motion } from 'framer-motion';

interface DialogBoxProps {
  message: string;
  onClose: () => void;
}

const DialogBox: React.FC<DialogBoxProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeOut"  }}
      className="fixed bottom-32 left-1/2 transform -translate-x-1/2 w-96 z-50"
    >
      {/* Parchment scroll container */}
      <div className="relative bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-2xl border-4 border-amber-800 p-6" 
           style={{
             backgroundImage: `
               radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.12) 0%, transparent 50%),
               radial-gradient(circle at 80% 70%, rgba(160, 82, 45, 0.12) 0%, transparent 50%),
               linear-gradient(45deg, rgba(210, 180, 140, 0.4) 25%, transparent 25%, transparent 75%, rgba(210, 180, 140, 0.4) 75%)
             `,
             backgroundColor: 'rgba(255, 247, 222, 0.97)',
             backgroundSize: '100% 100%, 100% 100%, 20px 20px',
             boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)'
           }}>
        
        {/* Scroll top decoration */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-amber-800 rounded-full flex items-center justify-center">
          <div className="w-12 h-2 bg-amber-600 rounded-full"></div>
        </div>
        
        {/* Scroll bottom decoration */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-amber-800 rounded-full flex items-center justify-center">
          <div className="w-12 h-2 bg-amber-600 rounded-full"></div>
        </div>
        
        {/* Scroll left decoration */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-16 bg-amber-800 rounded-full flex items-center justify-center">
          <div className="w-2 h-12 bg-amber-600 rounded-full"></div>
        </div>
        
        {/* Scroll right decoration */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-16 bg-amber-800 rounded-full flex items-center justify-center">
          <div className="w-2 h-12 bg-amber-600 rounded-full"></div>
        </div>

        {/* Content area */}
        <div className="relative z-10">
          {/* Quest header */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center space-x-2 bg-amber-200 px-4 py-2 rounded-full border-2 border-amber-700">
              <span className="text-amber-800 text-lg">📜</span>
              <span className="text-amber-800 font-bold text-sm tracking-wider">MILESTONE!</span>
            </div>
          </div>
          
          {/* Message text */}
          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mb-4" 
               style={{
                 background: 'rgba(255, 250, 230, 0.98)',
                 backgroundImage: 'linear-gradient(90deg, rgba(139, 69, 19, 0.07) 0%, transparent 20%, transparent 80%, rgba(139, 69, 19, 0.07) 100%)'
               }}>
            <p className="text-amber-900 text-lg leading-relaxed font-serif" 
               style={{ textShadow: '0 1px 2px rgba(139, 69, 19, 0.1)' }}>
              {message}
            </p>
          </div>
          
          {/* Close button */}
          <div className="flex justify-between items-center">
            <div className="text-amber-700 text-sm font-medium flex items-center space-x-2">
              <span className="text-lg">⌨️</span>
              <span>Press SPACE to continue</span>
            </div>
            <button
              onClick={onClose}
              className="bg-amber-700 hover:bg-amber-800 text-amber-100 px-3 py-1 rounded-full text-sm font-bold transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              ✕
            </button>
          </div>
        </div>
        
        {/* Parchment texture overlay */}
        <div className="absolute inset-0 rounded-lg opacity-10 pointer-events-none"
             style={{
               backgroundImage: `
                 repeating-linear-gradient(
                   45deg,
                   transparent,
                   transparent 2px,
                   rgba(139, 69, 19, 0.08) 2px,
                   rgba(139, 69, 19, 0.08) 4px
                 )
               `
             }}>
        </div>
      </div>
    </motion.div>
  );
};

export default DialogBox; 