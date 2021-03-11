import ChipBase, { ChipBaseProps } from './ChipBase';
import React, { forwardRef } from 'react';

export interface ChipProps extends ChipBaseProps {
  active?: boolean;
}

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ active = false, ...rest }: ChipProps, ref) => {
    return (
      <ChipBase
        className={`${
          active
            ? 'bg-feli-lighter hover:bg-feli-light active:bg-feli text-black active:text-white'
            : 'bg-gray-200 hover:bg-gray-300 active:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:bg-gray-500 text-black dark:text-white'
        }`}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default Chip;
