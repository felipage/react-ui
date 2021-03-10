import React, { useEffect, useState } from 'react';
import SnackbarBase, { SnackbarBaseProps } from './SnackbarBase';

export interface SnackbarProps extends Omit<SnackbarBaseProps, 'show'> {}

const Snackbar = ({ children, actions }: SnackbarProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 5000);
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, []);

  return (
    <SnackbarBase actions={actions} show={show}>
      {children}
    </SnackbarBase>
  );
};

export default Snackbar;
