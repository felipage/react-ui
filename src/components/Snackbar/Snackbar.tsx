import React, { forwardRef, useEffect, useState } from 'react';
import SnackbarBase, { SnackbarBaseProps } from './SnackbarBase';

export interface SnackbarProps extends Omit<SnackbarBaseProps, 'show'> {}

const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  ({ actions, ...rest }: SnackbarProps, ref) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShow(false);
      }, 5000);
      return () => {
        timeout && clearTimeout(timeout);
      };
    }, []);

    return <SnackbarBase actions={actions} show={show} ref={ref} {...rest} />;
  }
);

export default Snackbar;
