import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import Button from '../Button/Button';
import { TextField } from '../TextField';
import Dialog, { DialogProps } from './Dialog';
import DialogActions from './DialogActions';
import DialogContent from './DialogContent';
import DialogTitle from './DialogTitle';

export interface PromptDialogProps
  extends Omit<DialogProps, 'onClose' | 'title'> {
  title?: ReactNode;
  okButtonText?: string;
  cancelButtonText?: string;
  initialValue?: string;
  onClose?: (value: string) => void;
}

const PromptDialog = forwardRef<HTMLDivElement, PromptDialogProps>(
  (
    {
      children,
      onClose = () => {},
      title = <h1>Prompt</h1>,
      okButtonText = 'Ok',
      cancelButtonText = 'Cancel',
      initialValue = '',
      open,
      ...rest
    }: PromptDialogProps,
    ref
  ) => {
    const [input, setInput] = useState(initialValue);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      setInput(initialValue);
    }, [initialValue]);

    useEffect(() => {
      if (open) inputRef.current?.focus();
    }, [open]);

    return (
      <Dialog
        onClose={() => onClose(initialValue)}
        open={open}
        ref={ref}
        {...rest}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <TextField
            label={children}
            value={input}
            onChange={e => setInput((e.target as HTMLInputElement).value)}
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
  }
);

export default PromptDialog;
