import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

const Button = ({ children, onClick = () => {}, className = '' }: Props) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-semibold tracking-wider text-black uppercase transition rounded shadow select-none hover:shadow-lg focus:outline-none ring-feli focus:ring-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
