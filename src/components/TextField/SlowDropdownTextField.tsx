import SlowTextField, { SlowTextFieldProps } from './SlowTextField';
import React from 'react';

export interface SlowDropdownTextFieldProps extends SlowTextFieldProps {
  options: string[];
  id: string;
}

const SlowDropdownTextField = ({
  options = [],
  id,
  ...rest
}: SlowDropdownTextFieldProps) => {
  const datalistId = `${id}-list`;

  return (
    <>
      <SlowTextField {...rest} list={datalistId} id={id} />
      <datalist id={datalistId}>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </datalist>
    </>
  );
};

export default SlowDropdownTextField;
