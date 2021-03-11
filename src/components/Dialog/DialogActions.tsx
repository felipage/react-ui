import React, { forwardRef, HTMLProps } from 'react';

export interface DialogActionsProps
  extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {}

const DialogActions = forwardRef<HTMLDivElement, DialogActionsProps>(
  ({ ...rest }: DialogActionsProps, ref) => {
    return (
      <div
        className="flex justify-end px-4 py-4 space-x-2 bg-white shadow-md md:px-8 dark:bg-black"
        ref={ref}
        {...rest}
      ></div>
    );
  }
);

export default DialogActions;
