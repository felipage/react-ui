import AlertBase from './AlertBase';
import React, { ReactNode } from 'react';

type colours = 'red' | 'green' | 'default';

export interface AlertProps {
  children: ReactNode;
  className?: string;
  colour?: colours;
}

const Alert = ({ children, colour = 'default' }: AlertProps) => {
  return (
    <AlertBase
      className={
        colour === 'default'
          ? 'text-gray-700 bg-gray-400 dark:bg-gray-900 dark:text-gray-200'
          : colour === 'green'
          ? 'text-green-700 bg-green-400 dark:bg-green-900 dark:text-green-200'
          : colour === 'red'
          ? 'text-red-700 bg-red-400 dark:bg-red-900 dark:text-red-200'
          : ''
      }
    >
      {children}
    </AlertBase>
  );
};

export default Alert;
