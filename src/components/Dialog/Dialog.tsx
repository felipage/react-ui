import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const Dialog = ({ open, onClose = () => {}, children }: DialogProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={
            'fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50 dark:bg-black dark:bg-opacity-50'
          }
          onClick={() => onClose()}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{
            duration: 0.1,
            damping: 10,
            stiffness: 100,
          }}
        >
          <div
            className="flex flex-col w-full h-full max-w-screen-md max-h-screen divide-y-2 divide-gray-200 shadow-xl md:max-w-screen-sm md:h-auto dark:divide-gray-700 min-h-64 bg-gray-50 dark:bg-dark md:rounded-lg"
            onClick={e => {
              e.stopPropagation();
            }}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dialog;
