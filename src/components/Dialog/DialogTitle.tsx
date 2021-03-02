import React, { ReactNode } from 'react';

export interface DialogTitleProps {
  children: ReactNode;
}

const DialogTitle = ({ children }: DialogTitleProps) => {
  return <div className="px-4 pt-3 pb-2 md:px-8">{children}</div>;
};

export default DialogTitle;
