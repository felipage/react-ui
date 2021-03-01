import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface Props {
  title: string;
  Icon?: IconType;
  actions?: ReactNode[];
}

const AppBar = ({ title, actions = [], Icon }: Props) => {
  return (
    <header className="flex items-center justify-center px-2 bg-white shadow-md min-h-56 md:min-h-64 dark:bg-black sm:px-4 md:px-8">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <a
          className="flex items-center justify-start space-x-3 text-gray-900 transition-shadow rounded focus:outline-none focus:ring-2 ring-feli dark:text-gray-50"
          href="/"
        >
          {Icon && <Icon size={28} />}
          <span className="text-xl font-bold">{title}</span>
        </a>
        <div className="flex space-x-2">{actions}</div>
      </div>
    </header>
  );
};

export default AppBar;
