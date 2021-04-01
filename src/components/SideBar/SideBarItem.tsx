import React, { forwardRef, HTMLProps } from 'react';
import { IconType } from 'react-icons/lib';

export interface SideBarItemProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'ref' | 'type' | 'children'> {
  Icon: IconType;
  active?: boolean;
  label?: string;
}

const SideBarItem = forwardRef<HTMLButtonElement, SideBarItemProps>(
  ({ Icon, active = false, label, ...rest }: SideBarItemProps, ref) => {
    return (
      <button
        className={`flex items-center h-10 mx-3 mt-2 overflow-hidden bg-opacity-25 rounded-md hover:bg-opacity-30 transition focus:outline-none focus:ring-3 ring-feli flex-shrink-0 ${
          active ? 'bg-feli' : 'bg-gray-50 dark:bg-dark hover:bg-feli-light'
        }`}
        ref={ref}
        type="button"
        title={label}
        {...rest}
      >
        <span className="m-2">
          <Icon size={24} />
        </span>
        <span className="ml-2 font-bold text-left line-clamp-1">{label}</span>
      </button>
    );
  }
);

export default SideBarItem;
