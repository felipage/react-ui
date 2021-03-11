import React, { forwardRef, ReactNode } from 'react';
import Button from '../Button/Button';
import Dialog, { DialogProps } from './Dialog';
import DialogActions from './DialogActions';
import DialogContent from './DialogContent';
import DialogTitle from './DialogTitle';

export interface AlertDialogProps extends Omit<DialogProps, 'title'> {
  title?: ReactNode;
  okButtonText?: string;
}

const AlertDialog = forwardRef<HTMLDivElement, AlertDialogProps>(
  (
    {
      children,
      onClose,
      title = <h1>Alert</h1>,
      okButtonText = 'Ok',
      ...rest
    }: AlertDialogProps,
    ref
  ) => {
    return (
      <Dialog onClose={onClose} ref={ref} {...rest}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={onClose}>{okButtonText}</Button>
        </DialogActions>
      </Dialog>
    );
  }
);

export default AlertDialog;
