import React, { forwardRef, HTMLProps } from 'react';

interface SideBarItemLabelProps
  extends Omit<HTMLProps<HTMLSpanElement>, 'ref'> {}

const SideBarItemLabel = forwardRef<HTMLSpanElement, SideBarItemLabelProps>(
  ({ ...rest }, ref) => {
    return (
      <span
        className="mx-5.5 mt-6 text-sm font-bold text-gray-600 uppercase line-clamp-1 flex-shrink-0"
        style={{
          marginLeft: '1.375rem',
          marginRight: '1.375rem',
        }}
        {...rest}
        ref={ref}
      ></span>
    );
  }
);

export default SideBarItemLabel;
