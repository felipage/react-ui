import { HTMLMotionProps, motion } from 'framer-motion';
import React, { forwardRef } from 'react';

export type buttonSizes = 'small' | 'normal' | 'large';

export interface ButtonBaseProps
  extends Omit<HTMLMotionProps<'button'>, 'size' | 'ref'> {
  size?: buttonSizes;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    { className = '', size = 'normal', disabled, ...rest }: ButtonBaseProps,
    ref
  ) => {
    return (
      <motion.button
        className={`px-4 py-2 font-semibold text-black uppercase transition rounded-md select-none focus:outline-none ring-feli focus:ring-3 overflow-ellipsis overflow-hidden whitespace-nowrap ${
          size === 'small'
            ? 'text-xs h-8 tracking-wide'
            : size === 'normal'
            ? 'text-sm h-10 tracking-wider'
            : size === 'large'
            ? 'text-base h-12 tracking-widest'
            : ''
        } ${className}`}
        disabled={disabled}
        animate={{
          opacity: disabled ? 0.5 : 1,
        }}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default Button;
