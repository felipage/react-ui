import FlatButtonBase, { buttonSizes } from './ButtonBase';
import React, { ReactNode } from 'react';

export interface FlatButtonProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: buttonSizes;
}

const FlatButton = ({ children, onClick, size }: FlatButtonProps) => {
  return (
    <FlatButtonBase size={size} onClick={onClick} className="text-feli">
      {children}
    </FlatButtonBase>
  );
};

export default FlatButton;
