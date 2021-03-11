import React from 'react';
import { IconType } from 'react-icons';

type sizes = 'small' | 'normal';

export interface FloatingActionButtonProps {
  Icon: IconType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size: sizes;
}

const FloatingActionButton = ({
  Icon,
  onClick,
  size = 'normal',
}: FloatingActionButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center transition rounded-full bg-feli hover:bg-feli-light active:bg-feli-lighter focus:outline-none ring-feli ring-offset-white hover:shadow-lg active:shadow-md ${
        size === 'small'
          ? 'w-10 h-10 focus:ring-3 ring-offset-1.5'
          : size === 'normal'
          ? 'w-14 h-14 focus:ring-5 ring-offset-2.5'
          : ''
      }`}
      onClick={onClick}
    >
      <Icon size={size === 'small' ? 24 : size === 'normal' ? 32 : 0} />
    </button>
  );
};

export default FloatingActionButton;
