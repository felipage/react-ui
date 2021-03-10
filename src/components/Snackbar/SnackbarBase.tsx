import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface SnackbarBaseProps {
  actions?: ReactNode;
  children: ReactNode;
  show?: boolean;
}

const SnackbarBase = ({ children, actions, show }: SnackbarBaseProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-0 left-0 max-w-xl p-3 transition transform"
          initial={{ opacity: 0, scale: 0, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 50 }}
          transition={{
            duration: 0.3,
            damping: 10,
            stiffness: 100,
            type: 'string',
          }}
        >
          <div className="flex items-center justify-between px-4 py-2 text-gray-300 bg-gray-800 rounded shadow-md">
            <div className="line-clamp-2">{children}</div>
            <div>{actions}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SnackbarBase;
