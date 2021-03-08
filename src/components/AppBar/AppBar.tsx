import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface AppBarProps {
  title: string;
  Icon?: IconType;
  actions?: ReactNode;
  onTitleClick?: () => void;
  titleHref: string;
}

const AppBar = ({
  title,
  actions = [],
  Icon,
  onTitleClick = () => {},
  titleHref,
}: AppBarProps) => {
  return (
    <header className="flex items-center justify-center px-4 bg-white shadow-md min-h-56 md:min-h-64 dark:bg-black md:px-8">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <a
          onClick={onTitleClick}
          className="flex items-center justify-start space-x-3 overflow-hidden text-gray-900 transition-shadow rounded overflow-ellipsis focus:outline-none focus:ring-3 ring-feli dark:text-gray-50"
          href={titleHref}
        >
          {Icon && <Icon size={28} />}
          <span className="block overflow-hidden text-xl font-bold whitespace-nowrap overflow-ellipsis">
            {title}
          </span>
        </a>
        <div className="flex space-x-2">{actions}</div>
      </div>
    </header>
  );
};

export default AppBar;
