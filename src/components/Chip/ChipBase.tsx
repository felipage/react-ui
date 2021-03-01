import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ChipBase = ({ children, className = '', onClick = () => {} }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`inline-block px-3.5 py-1 font-light rounded-full cursor-pointer transition-colors ${className}`}
    >
      {children}
    </div>
  );
};

export default ChipBase;
