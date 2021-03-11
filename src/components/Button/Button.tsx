import ButtonBase, { ButtonBaseProps } from './ButtonBase';
import React, { forwardRef } from 'react';

type colours = 'red' | 'default';

export interface ButtonProps extends ButtonBaseProps {
  colour?: colours;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ colour = 'default', ...rest }: ButtonProps, ref) => {
    return (
      <ButtonBase
        className={`shadow hover:shadow-lg ${
          colour === 'default'
            ? 'text-black bg-gray-200 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-600 dark:active:bg-gray-700 hover:bg-gray-400 active:bg-gray-300'
            : colour === 'red'
            ? 'text-white bg-red-600 hover:bg-red-800 active:bg-red-700'
            : ''
        }`}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default Button;
