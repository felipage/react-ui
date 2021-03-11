import React, { forwardRef, HTMLProps, ReactNode } from 'react';

export interface ChipBaseProps extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {
  children: ReactNode;
  className?: string;
}

const ChipBase = forwardRef<HTMLDivElement, ChipBaseProps>(
  ({ children, className = '', ...rest }: ChipBaseProps, ref) => {
    return (
      <div
        className={`inline-block px-3.5 py-1 font-light rounded-full cursor-pointer transition-colors ${className}`}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

export default ChipBase;
