import SlowInput, { SlowInputProps } from './SlowInput';
import React from 'react';

export interface SlowDropdownInputProps extends SlowInputProps {
  options: string[];
  id: string;
}

const SlowDropdownInput = ({
  options = [],
  id,
  ...rest
}: SlowDropdownInputProps) => {
  const datalistId = `${id}-list`;

  return (
    <>
      <SlowInput {...rest} list={datalistId} id={id} />
      <datalist id={datalistId}>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </datalist>
    </>
  );
};

export default SlowDropdownInput;
