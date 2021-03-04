import React, { ReactNode, useEffect, useRef, useState } from 'react';
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
  open,
  ...rest
}: PromptDialogProps) => {
  const [input, setInput] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInput(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <Dialog onClose={() => onClose(initialValue)} open={open} {...rest}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Input
          label={children}
          value={input}
          onChange={setInput}
          fullWidth
          ref={inputRef}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose(initialValue)}>
          {cancelButtonText}
        </Button>
        <Button onClick={() => onClose(input)}>{okButtonText}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PromptDialog;
