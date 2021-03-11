import React, { forwardRef, HTMLProps } from 'react';

export interface DialogTitleProps
  extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {}

const DialogTitle = forwardRef<HTMLDivElement, DialogTitleProps>(
  ({ ...rest }: DialogTitleProps, ref) => {
    return (
      <div
        className="px-4 pt-3 pb-2 bg-white shadow-md md:px-8 dark:bg-black"
        ref={ref}
        {...rest}
      ></div>
    );
  }
);

export default DialogTitle;
