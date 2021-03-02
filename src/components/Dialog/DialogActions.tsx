import React, { ReactNode } from 'react';

export interface DialogActionsProps {
  children: ReactNode;
}

const DialogActions = ({ children }: DialogActionsProps) => {
  return (
    <div className="flex justify-end px-4 py-4 space-x-2 md:px-8">
      {children}
    </div>
  );
};

export default DialogActions;
