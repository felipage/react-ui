import React, { forwardRef, HTMLProps } from 'react';

export interface TooltipContainerProps
  extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {}

const TooltipContainer = forwardRef<HTMLDivElement, TooltipContainerProps>(
  ({ ...rest }: TooltipContainerProps, ref) => {
    return (
      <div
        className="inline-flex items-center justify-center h-8 px-4 bg-gray-500 rounded select-none text-md md:text-xs text-gray-50 md:h-6 md:px-2"
        ref={ref}
        {...rest}
      ></div>
    );
  }
);

export default TooltipContainer;
