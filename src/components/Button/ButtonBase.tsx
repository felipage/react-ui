import React, { forwardRef, HTMLProps } from 'react';

export type buttonSizes = 'small' | 'normal' | 'large';

export interface ButtonBaseProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'size' | 'ref'> {
  size?: buttonSizes;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ className = '', size = 'normal', ...rest }: ButtonBaseProps, ref) => {
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
        ref={ref}
        {...rest}
      />
    );
  }
);

export default Button;
