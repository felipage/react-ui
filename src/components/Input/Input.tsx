import React from 'react';
import InputBase, { InputBaseProps } from './InputBase';

export interface InputProps extends InputBaseProps {}

const Input = ({ ...rest }: InputProps) => {
  return <InputBase {...rest} />;
};

export default Input;
