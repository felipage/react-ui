import FlatButtonBase, { ButtonBaseProps } from './ButtonBase';
import React, { forwardRef } from 'react';

export interface FlatButtonProps extends ButtonBaseProps {}

const FlatButton = forwardRef<HTMLButtonElement, FlatButtonProps>(
  ({ children, onClick, size }: FlatButtonProps, ref) => {
    return (
      <FlatButtonBase
        size={size}
        onClick={onClick}
        className="text-feli"
        ref={ref}
      >
        {children}
      </FlatButtonBase>
    );
  }
);

export default FlatButton;
