import React, { forwardRef, HTMLProps, ReactNode } from 'react';

export interface ListTileProps extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {
  Leading?: ReactNode;
  Trailing?: ReactNode;
  title: string;
  subtitle?: string;
}

const ListTile = forwardRef<HTMLDivElement, ListTileProps>(
  (
    { Leading, Trailing, title, subtitle, onClick, ...rest }: ListTileProps,
    ref
  ) => {
    return (
      <div
        onClick={onClick}
        className={`h-16 flex items-center justify-center py-2 bg-white rounded-md dark:bg-black ${
          onClick
            ? 'cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-900 dark:active:bg-gray-800 transition'
            : ''
        }`}
        ref={ref}
        {...rest}
      >
        {Leading && <span className="ml-4">{Leading}</span>}
        <div className="flex-grow mx-4">
          <div className="text-base line-clamp-1">{title}</div>
          <div className="text-sm line-clamp-1">{subtitle}</div>
        </div>
        {Trailing && <span className="mr-4">{Trailing}</span>}
      </div>
    );
  }
);

export default ListTile;
