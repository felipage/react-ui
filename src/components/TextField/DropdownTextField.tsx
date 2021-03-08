import TextFieldBase, { TextFieldBaseProps } from './TextFieldBase';
import React from 'react';

export interface DropdownTextFieldProps extends TextFieldBaseProps {
  options: string[];
  id: string;
}

const DropdownTextField = ({
  options = [],
  id,
  ...rest
}: DropdownTextFieldProps) => {
  const datalistId = `${id}-list`;

  return (
    <>
      <TextFieldBase {...rest} list={datalistId} id={id} />
      <datalist id={datalistId}>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </datalist>
    </>
  );
};

export default DropdownTextField;
