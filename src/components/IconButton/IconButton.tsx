import React from 'react';
import { IconType } from 'react-icons/lib';
import { Underlay } from '../Underlay';

// type sizes = 'small' | 'normal' | 'large';

export interface IconButtonProps {
  Icon: IconType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const IconButton = ({ Icon, onClick }: IconButtonProps) => {
  return (
    <Underlay size="large">
      <button
        className="flex items-center justify-center w-full h-full focus:outline-none"
        onClick={onClick}
      >
        <Icon size={24} />
      </button>
    </Underlay>
  );
};

export default IconButton;
