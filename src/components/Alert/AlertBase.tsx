import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const AlertBase = ({ children, className = '' }: Props) => {
  return (
    <div
      className={`fixed bottom-0 w-full px-4 py-2 transition-colors shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default AlertBase;
