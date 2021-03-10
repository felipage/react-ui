import React, { ReactNode } from 'react';
import TooltipContainer from './TooltipContainer';

export interface TooltipProps {
  children: ReactNode;
  label: string;
}

const Tooltip = ({ children, label }: TooltipProps) => {
  return (
    <div className="relative inline-block group">
      {children}
      <div className="absolute flex items-center justify-center transition-opacity transform -translate-x-1/2 translate-y-3 opacity-0 pointer-events-none left-1/2 group-hover:opacity-100">
        <TooltipContainer>{label}</TooltipContainer>
      </div>
    </div>
  );
};

export default Tooltip;
