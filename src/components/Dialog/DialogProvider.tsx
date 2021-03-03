import React, { createContext, ReactNode, useContext, useState } from 'react';
import AlertDialog from './AlertDialog';
import ConfirmDialog from './ConfirmDialog';
import PromptDialog from './PromptDialog';

export interface DialogProviderProps {
  children: ReactNode;
}

export interface ShowDialogProps {
  children: ReactNode;
}

export interface ShowAlertDialogProps extends ShowDialogProps {}
export interface ShowConfirmDialogProps extends ShowDialogProps {}
export interface ShowPromptDialogProps extends ShowDialogProps {}

export interface IDialogContext {
  showAlertDialog?: (props: ShowAlertDialogProps) => Promise<void>;
  showConfirmDialog?: (props: ShowConfirmDialogProps) => Promise<boolean>;
  showPromptDialog?: (props: ShowPromptDialogProps) => Promise<string>;
}

const DialogContext = createContext<IDialogContext>({});

const DialogProvider = ({ children }: DialogProviderProps) => {
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [confirmDialogMessage, setConfirmDialogMessage] = useState<ReactNode>(
    ''
  );
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [alertDialogMessage, setAlertDialogMessage] = useState<ReactNode>('');
  const [promptDialogOpen, setPromptDialogOpen] = useState(false);
  const [promptDialogMessage, setPromptDialogMessage] = useState<ReactNode>('');

  const [alertResolve, setAlertResolve] = useState<
    (value: void | PromiseLike<void>) => void
  >();
  const [confirmResolve, setConfirmResolve] = useState<
    (value: boolean | PromiseLike<boolean>) => void
  >();
  const [promptResolve, setPromptResolve] = useState<
    (value: string | PromiseLike<string>) => void
  >();

  const showAlertDialog = ({ children }: ShowAlertDialogProps) => {
    return new Promise<void>(resolve => {
      setAlertResolve(() => resolve);
      setAlertDialogMessage(children);
      setAlertDialogOpen(true);
    });
  };
  const showConfirmDialog = ({ children }: ShowConfirmDialogProps) => {
    return new Promise<boolean>(resolve => {
      setConfirmResolve(() => resolve);
      setConfirmDialogMessage(children);
      setConfirmDialogOpen(true);
    });
  };
  const showPromptDialog = ({ children }: ShowPromptDialogProps) => {
    return new Promise<string>(resolve => {
      setPromptResolve(() => resolve);
      setPromptDialogMessage(children);
      setPromptDialogOpen(true);
    });
  };

  const onAlertClose = () => {
    setAlertDialogOpen(false);
    setAlertDialogMessage(null);
    alertResolve?.();
  };

  const onConfirmClose = (confirm: boolean) => {
    setConfirmDialogOpen(false);
    setConfirmDialogMessage(null);
    confirmResolve?.(confirm);
  };

  const onPromptClose = (value: string) => {
    setPromptDialogOpen(false);
    setPromptDialogMessage(null);
    promptResolve?.(value);
  };

  return (
    <DialogContext.Provider
      value={{
        showAlertDialog,
        showConfirmDialog,
        showPromptDialog,
      }}
    >
      {children}
      <AlertDialog open={alertDialogOpen} onClose={onAlertClose}>
        {alertDialogMessage}
      </AlertDialog>
      <ConfirmDialog open={confirmDialogOpen} onClose={onConfirmClose}>
        {confirmDialogMessage}
      </ConfirmDialog>
      <PromptDialog open={promptDialogOpen} onClose={onPromptClose}>
        {promptDialogMessage}
      </PromptDialog>
    </DialogContext.Provider>
  );
};

const useDialog = () => useContext(DialogContext);

export default DialogProvider;
export { useDialog };
