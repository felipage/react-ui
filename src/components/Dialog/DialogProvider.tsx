import React, { createContext, ReactNode, useContext, useState } from 'react';
import AlertDialog, { AlertDialogProps } from './AlertDialog';
import ConfirmDialog, { ConfirmDialogProps } from './ConfirmDialog';
import PromptDialog, { PromptDialogProps } from './PromptDialog';

export interface DialogProviderProps {
  children: ReactNode;
}

export interface ShowDialogProps {}

export interface ShowAlertDialogProps
  extends ShowDialogProps,
    Omit<AlertDialogProps, 'open' | 'onClose'> {}
export interface ShowConfirmDialogProps
  extends ShowDialogProps,
    Omit<ConfirmDialogProps, 'open' | 'onClose'> {}
export interface ShowPromptDialogProps
  extends ShowDialogProps,
    Omit<PromptDialogProps, 'open' | 'onClose'> {}

export interface IDialogContext {
  showAlertDialog: (props: ShowAlertDialogProps) => Promise<void>;
  showConfirmDialog: (props: ShowConfirmDialogProps) => Promise<boolean>;
  showPromptDialog: (props: ShowPromptDialogProps) => Promise<string>;
}

const DialogContext = createContext<IDialogContext | null>(null);

const DialogProvider = ({ children }: DialogProviderProps) => {
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [
    confirmDialogProps,
    setConfirmDialogProps,
  ] = useState<ShowConfirmDialogProps | null>(null);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [
    alertDialogProps,
    setAlertDialogProps,
  ] = useState<ShowAlertDialogProps | null>(null);
  const [promptDialogOpen, setPromptDialogOpen] = useState(false);
  const [
    promptDialogProps,
    setPromptDialogProps,
  ] = useState<ShowPromptDialogProps | null>(null);

  const [alertResolve, setAlertResolve] = useState<
    (value: void | PromiseLike<void>) => void
  >();
  const [confirmResolve, setConfirmResolve] = useState<
    (value: boolean | PromiseLike<boolean>) => void
  >();
  const [promptResolve, setPromptResolve] = useState<
    (value: string | PromiseLike<string>) => void
  >();

  const showAlertDialog = (props: ShowAlertDialogProps) => {
    return new Promise<void>(resolve => {
      setAlertResolve(() => resolve);
      setAlertDialogProps(props);
      setAlertDialogOpen(true);
    });
  };
  const showConfirmDialog = (props: ShowConfirmDialogProps) => {
    return new Promise<boolean>(resolve => {
      setConfirmResolve(() => resolve);
      setConfirmDialogProps(props);
      setConfirmDialogOpen(true);
    });
  };
  const showPromptDialog = (props: ShowPromptDialogProps) => {
    return new Promise<string>(resolve => {
      setPromptResolve(() => resolve);
      setPromptDialogProps(props);
      setPromptDialogOpen(true);
    });
  };

  const onAlertClose = () => {
    setAlertDialogOpen(false);
    setAlertDialogProps(null);
    alertResolve?.();
  };

  const onConfirmClose = (confirm: boolean) => {
    setConfirmDialogOpen(false);
    setConfirmDialogProps(null);
    confirmResolve?.(confirm);
  };

  const onPromptClose = (value: string) => {
    setPromptDialogOpen(false);
    setPromptDialogProps(null);
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
      <AlertDialog
        open={alertDialogOpen}
        onClose={onAlertClose}
        {...alertDialogProps!}
      />
      <ConfirmDialog
        open={confirmDialogOpen}
        onClose={onConfirmClose}
        {...confirmDialogProps!}
      />
      <PromptDialog
        open={promptDialogOpen}
        onClose={onPromptClose}
        {...promptDialogProps!}
      />
    </DialogContext.Provider>
  );
};

const useDialog = () => useContext(DialogContext);

export default DialogProvider;
export { useDialog };
