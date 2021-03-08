import TextFieldBase, { TextFieldBaseProps } from './TextFieldBase';
import React, { forwardRef } from 'react';

export interface TextFieldProps extends TextFieldBaseProps {}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ ...rest }, ref) => {
    return <TextFieldBase {...rest} ref={ref} />;
  }
);

export default TextField;
