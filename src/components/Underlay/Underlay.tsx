import React, { forwardRef, HTMLProps } from 'react';

type sizes = 'small' | 'normal' | 'large';

export interface UnderlayProps
  extends Omit<HTMLProps<HTMLSpanElement>, 'ref' | 'size'> {
  size?: sizes;
}

const Underlay = forwardRef<HTMLSpanElement, UnderlayProps>(
  ({ size = 'normal', ...rest }: UnderlayProps, ref) => {
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
        ref={ref}
        {...rest}
      ></span>
    );
  }
);

export default Underlay;
