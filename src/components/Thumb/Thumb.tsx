import React, { forwardRef, HTMLProps } from 'react';

export interface ThumbProps extends Omit<HTMLProps<HTMLSpanElement>, 'ref'> {
  active?: boolean;
}

const Thumb = forwardRef<HTMLSpanElement, ThumbProps>(
  ({ active = false, ...rest }: ThumbProps, ref) => {
    return (
      <span
        className={`flex items-center justify-center w-5 h-5 transition rounded-full shadow ${
          active ? 'bg-feli' : 'bg-white'
        }`}
        ref={ref}
        {...rest}
      ></span>
    );
  }
);

export default Thumb;
