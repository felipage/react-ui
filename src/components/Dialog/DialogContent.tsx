import React, { ReactNode } from 'react';

export interface DialogContentProps {
  children: ReactNode;
}

const DialogContent = ({ children }: DialogContentProps) => {
  return <div className="px-4 pt-3 pb-2 md:px-8">{children}</div>;
};

export default DialogContent;
