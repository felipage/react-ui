import React, { ReactNode } from 'react';

export type buttonSizes = 'small' | 'normal' | 'large';

export interface ButtonBaseProps {
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  size?: buttonSizes;
}

const Button = ({
  children,
  onClick = () => {},
  className = '',
  size = 'normal',
}: ButtonBaseProps) => {
  return (
    <button
      className={`px-4 py-2 font-semibold text-black uppercase transition rounded select-none focus:outline-none ring-feli focus:ring-3 overflow-ellipsis overflow-hidden whitespace-nowrap ${
        size === 'small'
          ? 'text-xs h-8 tracking-wide'
          : size === 'normal'
          ? 'text-sm h-10 tracking-wider'
          : size === 'large'
          ? 'text-base h-12 tracking-widest'
          : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
