import InputBase, { InputBaseProps } from './InputBase';
import React from 'react';

export interface InputProps extends InputBaseProps {}

const Input = ({ ...rest }: InputProps) => {
  return <InputBase {...rest} />;
};

export default Input;
