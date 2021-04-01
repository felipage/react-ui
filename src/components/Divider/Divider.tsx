import React, { forwardRef, HTMLProps } from 'react';

interface DividerProps extends Omit<HTMLProps<HTMLHRElement>, 'ref'> {
  margin?: boolean;
}

const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ margin = false, ...rest }, ref) => {
    return (
      <hr
        className={`h-0.5 flex-shrink-0 ${
          margin ? 'mx-3' : ''
        } border-none rounded-full ring-2 ring-inset ring-gray-300 dark:ring-gray-600 transition-shadow`}
        {...rest}
        ref={ref}
      ></hr>
    );
  }
);

export default Divider;
