import { AnimatePresence, motion } from 'framer-motion';
import React, { forwardRef, HTMLProps, ReactNode } from 'react';

export interface SideBarProps extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {
  onClose: () => void;
  open: boolean;
  body: ReactNode;
  side: ReactNode;
}

const SideBar = forwardRef<HTMLDivElement, SideBarProps>(
  ({ onClose = () => {}, open, body, side, ...rest }, ref) => {
    return (
      <div className="flex" {...rest} ref={ref}>
        <div
          onClick={() => {}}
          className={`bg-gray-50 dark:bg-dark ${
            open ? 'w-72' : 'w-16 -ml-16 md:ml-0'
          } transition-all fixed inset-y-0 left-0 overflow-y-scroll z-50 shadow-2xl md:shadow-none`}
        >
          <div className="flex flex-col h-full overflow-scroll">{side}</div>
        </div>
        <div
          className={`${
            open ? 'w-72' : 'w-16 -ml-16 md:ml-0'
          } transition-all fixed md:static inset-y-0 left-0 pointer-events-none`}
        ></div>
        <AnimatePresence>
          {open && (
            <motion.div
              className={
                'fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-40 dark:bg-black dark:bg-opacity-50 md:hidden'
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
            />
          )}
        </AnimatePresence>
        <div className="flex-auto">{body}</div>
      </div>
    );
  }
);

export default SideBar;
