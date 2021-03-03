import React, { ReactNode } from 'react';

type sizes = 'small' | 'normal' | 'large';

export interface UnderlayProps {
  size?: sizes;
  children?: ReactNode;
}

const Underlay = ({ size = 'normal', children }: UnderlayProps) => {
  return (
    <span
      className={`inline-flex items-center justify-center hover:bg-feli-opacity-400 active:bg-feli-opacity-600 focus:bg-feli-opacity-400 rounded-full transition-colors ${
        size === 'small'
          ? 'w-6 h-6'
          : size === 'normal'
          ? 'w-9 h-9'
          : size === 'large'
          ? 'w-12 h-12'
          : ''
      }`}
    >
      {children}
    </span>
  );
};

export default Underlay;
