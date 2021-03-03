import React, { ReactNode } from 'react';

export interface DialogTitleProps {
  children: ReactNode;
}

const DialogTitle = ({ children }: DialogTitleProps) => {
  return (
    <div className="px-4 pt-3 pb-2 bg-white shadow-md md:px-8 dark:bg-black">
      {children}
    </div>
  );
};

export default DialogTitle;
