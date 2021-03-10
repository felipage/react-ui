import ButtonBase, { buttonSizes } from './ButtonBase';
import React, { ReactNode } from 'react';

type colours = 'red' | 'default';

export interface ButtonProps {
  children: ReactNode;
  colour?: colours;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: buttonSizes;
}

const Button = ({
  children,
  colour = 'default',
  onClick,
  size,
}: ButtonProps) => {
  return (
    <ButtonBase
      size={size}
      onClick={onClick}
      className={`shadow hover:shadow-lg ${
        colour === 'default'
          ? 'text-black bg-gray-200 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-600 dark:active:bg-gray-700 hover:bg-gray-400 active:bg-gray-300'
          : colour === 'red'
          ? 'text-white bg-red-600 hover:bg-red-800 active:bg-red-700'
          : ''
      }`}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;
