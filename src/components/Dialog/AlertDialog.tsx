import React, { ReactNode } from 'react';
import Button from '../Button/Button';
import Dialog, { DialogProps } from './Dialog';
import DialogActions from './DialogActions';
import DialogContent from './DialogContent';
import DialogTitle from './DialogTitle';

export interface AlertDialogProps extends DialogProps {
  title?: ReactNode;
  okButtonText?: string;
}

const AlertDialog = ({
  children,
  onClose,
  title = <h1>Alert</h1>,
  okButtonText = 'Ok',
  ...rest
}: AlertDialogProps) => {
  return (
    <Dialog {...rest} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{okButtonText}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
