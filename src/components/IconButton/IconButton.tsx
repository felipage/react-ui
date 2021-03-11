import React, { forwardRef, HTMLProps } from 'react';
import { IconType } from 'react-icons/lib';
import { Underlay } from '../Underlay';

// type sizes = 'small' | 'normal' | 'large';

export interface IconButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'ref'> {
  Icon: IconType;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ Icon, ...rest }: IconButtonProps, ref) => {
    return (
      <Underlay size="large">
        <button
          className="flex items-center justify-center w-full h-full focus:outline-none"
          ref={ref}
          {...rest}
        >
          <Icon size={24} />
        </button>
      </Underlay>
    );
  }
);

export default IconButton;
