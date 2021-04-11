import React, { forwardRef, HTMLProps, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { HiOutlineMenu } from 'react-icons/hi';
import { IconButton } from '../IconButton';

export interface AppBarProps extends Omit<HTMLProps<HTMLElement>, 'ref'> {
  title?: string;
  Icon?: IconType;
  actions?: ReactNode;
  onTitleClick?: () => void;
  onMenuIconClick?: () => void;
  titleHref?: string;
  MenuIcon?: IconType;
  useMenu?: boolean;
}

const AppBar = forwardRef<HTMLElement, AppBarProps>(
  (
    {
      title,
      actions = [],
      Icon,
      onTitleClick,
      titleHref,
      MenuIcon = HiOutlineMenu,
      useMenu = false,
      onMenuIconClick,
      ...rest
    }: AppBarProps,
    ref
  ) => {
    return (
      <header
        className={`flex items-center justify-center bg-white shadow-md min-h-56 md:min-h-64 dark:bg-black md:px-8 ${
          useMenu ? 'pl-2 pr-4' : 'pl-4 pr-4'
        }`}
        ref={ref}
        {...rest}
      >
        <div className="flex items-center justify-between w-full max-w-6xl">
          <a
            onClick={onTitleClick}
            className={`flex items-center justify-start space-x-3 overflow-hidden text-gray-900 transition-shadow rounded overflow-ellipsis focus:outline-none focus:ring-3 ring-feli dark:text-gray-50 ${
              onTitleClick ? 'cursor-pointer' : ''
            }`}
            href={titleHref}
          >
            {useMenu && (
              <div className="z-10 md:hidden">
                <IconButton
                  Icon={MenuIcon}
                  onClick={e => {
                    e.stopPropagation();
                    onMenuIconClick && onMenuIconClick();
                  }}
                />
              </div>
            )}
            {Icon && (
              <span className={`w-7 h-7 ${useMenu ? 'hidden md:inline' : ''}`}>
                <Icon size={28} />
              </span>
            )}
            <span className="block overflow-hidden text-xl font-bold whitespace-nowrap overflow-ellipsis">
              {title}
            </span>
          </a>
          <div className="flex space-x-2">{actions}</div>
        </div>
      </header>
    );
  }
);

export default AppBar;
