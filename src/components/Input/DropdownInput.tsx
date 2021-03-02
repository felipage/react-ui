import InputBase, { InputBaseProps } from './InputBase';
import React from 'react';

export interface DropdownInputProps extends InputBaseProps {
  options: string[];
  id: string;
}

const DropdownInput = ({ options = [], id, ...rest }: DropdownInputProps) => {
  const datalistId = `${id}-list`;

  return (
    <>
      <InputBase {...rest} list={datalistId} id={id} />
      <datalist id={datalistId}>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </datalist>
    </>
  );
};

export default DropdownInput;
