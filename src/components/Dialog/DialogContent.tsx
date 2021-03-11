import React, { forwardRef, HTMLProps } from 'react';

export interface DialogContentProps
  extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {}

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ ...rest }: DialogContentProps, ref) => {
    return (
      <div
        className="flex-grow px-4 pt-3 pb-2 shadow-inner md:px-8"
        ref={ref}
        {...rest}
      ></div>
    );
  }
);

export default DialogContent;
