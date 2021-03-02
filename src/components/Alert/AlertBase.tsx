import React, { ReactNode } from 'react';

export interface AlertBaseProps {
  children: ReactNode;
  className?: string;
  fixed?: boolean;
}

const AlertBase = ({
  children,
  className = '',
  fixed = true,
}: AlertBaseProps) => {
  return (
    <div
      className={`w-full px-4 py-2 transition-colors shadow-md ${
        fixed ? 'fixed bottom-0' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AlertBase;
