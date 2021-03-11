import React, { forwardRef, HTMLProps } from 'react';
import TooltipContainer from './TooltipContainer';

export interface TooltipProps extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {
  label: string;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, label, ...rest }: TooltipProps, ref) => {
    return (
      <div className="relative inline-block group" ref={ref} {...rest}>
        {children}
        <div className="absolute flex items-center justify-center transition-opacity transform -translate-x-1/2 translate-y-3 opacity-0 pointer-events-none left-1/2 group-hover:opacity-100">
          <TooltipContainer>{label}</TooltipContainer>
        </div>
      </div>
    );
  }
);

export default Tooltip;
