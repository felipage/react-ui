import InputBase, { InputBaseProps } from './InputBase';
import React, { forwardRef } from 'react';

export interface InputProps extends InputBaseProps {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...rest }, ref) => {
  return <InputBase {...rest} ref={ref} />;
});

export default Input;
