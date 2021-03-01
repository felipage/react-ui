import React, { ReactNode } from 'react';
import ChipBase from './ChipBase';

interface Props {
  children: ReactNode;
  active?: boolean;
}

const Chip = ({ children, active = false }: Props) => {
  return (
    <ChipBase
      className={`${
        active
          ? 'bg-feli-lighter hover:bg-feli-light active:bg-feli text-black active:text-white'
          : 'bg-gray-200 hover:bg-gray-300 active:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:bg-gray-500 text-black dark:text-white'
      }`}
    >
      {children}
    </ChipBase>
  );
};

export default Chip;
