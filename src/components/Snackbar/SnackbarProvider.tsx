import { createContext, ReactNode, useContext, useState } from 'react';
import Snackbar from './Snackbar';
import React from 'react';

export interface SnackbarProviderProps {
  children: ReactNode;
}

export interface ShowSnackbarProps {
  children: ReactNode;
}

export interface ISnackbarContext {
  showSnackbar: (props: ShowSnackbarProps) => void;
}

const SnackbarContext = createContext<ISnackbarContext | null>(null);

const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  const [snackbars, setSnackbars] = useState<ReactNode[]>([]);

  const showSnackbar = ({ children }: ShowSnackbarProps) => {
    const id = Math.random().toString();
    setSnackbars(snackbars => {
      return [...snackbars, <Snackbar key={id}>{children}</Snackbar>];
    });
  };

  return (
    <SnackbarContext.Provider
      value={{
        showSnackbar,
      }}
    >
      {children}
      {snackbars}
    </SnackbarContext.Provider>
  );
};

const useSnackbar = () => useContext(SnackbarContext);

export default SnackbarProvider;
export { useSnackbar };
