import React, { forwardRef, HTMLProps } from 'react';

export interface AlertBaseProps extends HTMLProps<HTMLDivElement> {
  fixed?: boolean;
}

const AlertBase = forwardRef<HTMLDivElement, AlertBaseProps>(
  (
    { children, className = '', fixed = true, ...rest }: AlertBaseProps,
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`w-full px-4 py-2 transition-colors shadow-md ${
          fixed ? 'fixed bottom-0' : ''
        } ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

export default AlertBase;
