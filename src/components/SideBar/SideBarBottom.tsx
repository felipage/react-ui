import React, { forwardRef, HTMLProps } from 'react';
import { Divider } from '../Divider';

export interface SideBarBottomProps
  extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {}

const SideBarBottom = forwardRef<HTMLDivElement, SideBarBottomProps>(
  ({ children, ...rest }, ref) => {
    return (
      <>
        <div className="flex-grow" {...rest} ref={ref}></div>
        <Divider margin />
        {children}
      </>
    );
  }
);

export default SideBarBottom;
