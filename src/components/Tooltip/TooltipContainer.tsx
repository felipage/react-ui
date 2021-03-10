import React, { ReactNode } from 'react';

export interface TooltipContainerProps {
  children: ReactNode;
}

const TooltipContainer = ({ children }: TooltipContainerProps) => {
  return (
    <div className="inline-flex items-center justify-center h-8 px-4 bg-gray-500 rounded select-none text-md md:text-xs text-gray-50 md:h-6 md:px-2">
      {children}
    </div>
  );
};

export default TooltipContainer;
