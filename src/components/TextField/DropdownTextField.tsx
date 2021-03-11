import TextFieldBase, { TextFieldBaseProps } from './TextFieldBase';
import React, { forwardRef } from 'react';

export interface DropdownTextFieldProps extends TextFieldBaseProps {
  options: string[];
  id: string;
}

const DropdownTextField = forwardRef<HTMLInputElement, DropdownTextFieldProps>(
  ({ options = [], id, ...rest }: DropdownTextFieldProps, ref) => {
    const datalistId = `${id}-list`;

    return (
      <>
        <TextFieldBase list={datalistId} id={id} ref={ref} {...rest} />
        <datalist id={datalistId}>
          {options.map(option => (
            <option key={option}>{option}</option>
          ))}
        </datalist>
      </>
    );
  }
);

export default DropdownTextField;
