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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-32 left-1/2 transform -translate-x-1/2 w-96 bg-white rounded-lg shadow-lg p-4 z-50"
    >
      <div className="relative">
        <p className="text-gray-800 text-lg">{message}</p>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      <div className="mt-2 text-sm text-gray-500">
        Press spacebar key to continue...
      </div>
    </motion.div>
  );
};

export default DialogBox; 