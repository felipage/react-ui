import React, { HTMLProps } from 'react';

export interface AlertBaseProps extends HTMLProps<HTMLDivElement> {
  fixed?: boolean;
}

const AlertBase = ({
  children,
  className = '',
  fixed = true,
  ...rest
}: AlertBaseProps) => {
  return (
    <div
      className={`w-full px-4 py-2 transition-colors shadow-md ${
        fixed ? 'fixed bottom-0' : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default AlertBase;
