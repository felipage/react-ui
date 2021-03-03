import React, { ReactNode, useState } from 'react';
import Button from '../Button/Button';
import { Input } from '../Input';
import Dialog, { DialogProps } from './Dialog';
import DialogActions from './DialogActions';
import DialogContent from './DialogContent';
import DialogTitle from './DialogTitle';

export interface PromptDialogProps extends Omit<DialogProps, 'onClose'> {
  title?: ReactNode;
  okButtonText?: string;
  cancelButtonText?: string;
  initialValue?: string;
  onClose?: (value: string) => void;
}

const PromptDialog = ({
  children,
  onClose = () => {},
  title = <h1>Prompt</h1>,
  okButtonText = 'Ok',
  cancelButtonText = 'Cancel',
  initialValue = '',
  ...rest
}: PromptDialogProps) => {
  const [input, setInput] = useState(initialValue);

  return (
    <Dialog {...rest} onClose={() => onClose('')}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Input label={children} value={input} onChange={setInput} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose('')}>{cancelButtonText}</Button>
        <Button onClick={() => onClose(input)}>{okButtonText}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PromptDialog;
