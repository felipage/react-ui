import React, { forwardRef, HTMLProps } from 'react';
import { IconType } from 'react-icons';
import { HiOutlineArrowLeft, HiOutlineMenu } from 'react-icons/hi';
import { IconButton } from '../IconButton';

export interface SideBarHeaderProps
  extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {
  MenuIcon?: IconType;
  CloseMenuIcon?: IconType;
  onToggle: () => void;
}

const SideBarHeader = forwardRef<HTMLDivElement, SideBarHeaderProps>(
  (
    {
      MenuIcon = HiOutlineMenu,
      CloseMenuIcon = HiOutlineArrowLeft,
      onToggle,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className="flex items-center bg-white shadow-md dark:bg-black min-h-56 md:min-h-64"
        {...rest}
        ref={ref}
      >
        <div className="ml-2">
          <span className="hidden md:block">
            <IconButton Icon={MenuIcon} onClick={onToggle} />
          </span>
          <span className="md:hidden">
            <IconButton Icon={CloseMenuIcon} onClick={onToggle} />
          </span>
        </div>
      </div>
    );
  }
);

export default SideBarHeader;
