import React, { ReactNode } from 'react';
import Button from '../Button/Button';
import Dialog, { DialogProps } from './Dialog';
import DialogActions from './DialogActions';
import DialogContent from './DialogContent';
import DialogTitle from './DialogTitle';

export interface ConfirmDialogProps extends Omit<DialogProps, 'onClose'> {
  title?: ReactNode;
  okButtonText?: string;
  cancelButtonText?: string;
  onClose?: (confirm: boolean) => void;
}

const ConfirmDialog = ({
  children,
  onClose = () => {},
  title = <h1>Confirm</h1>,
  okButtonText = 'Ok',
  cancelButtonText = 'Cancel',
  ...rest
}: ConfirmDialogProps) => {
  return (
    <Dialog {...rest}>
      <DialogTitle>
        <h1>{title}</h1>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={() => onClose(false)}>{cancelButtonText}</Button>
        <Button onClick={() => onClose(true)}>{okButtonText}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
