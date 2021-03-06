import React, { forwardRef, HTMLProps } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface DialogProps
  extends Omit<
    HTMLProps<HTMLDivElement>,
    'ref' | 'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd'
  > {
  open: boolean;
  onClose?: () => void;
}

const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  ({ open, onClose = () => {}, children, ...rest }: DialogProps, ref) => {
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
            ref={ref}
            {...rest}
          >
            <div
              className="flex flex-col w-full h-full max-w-screen-md max-h-screen overflow-hidden shadow-xl md:max-w-screen-sm md:h-auto min-h-64 bg-gray-50 dark:bg-dark md:rounded-lg"
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
  }
);

export default Dialog;
