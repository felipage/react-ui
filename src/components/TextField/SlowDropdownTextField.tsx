import SlowTextField, { SlowTextFieldProps } from './SlowTextField';
import React, { forwardRef } from 'react';

export interface SlowDropdownTextFieldProps extends SlowTextFieldProps {
  options: string[];
  id: string;
}

const SlowDropdownTextField = forwardRef<
  HTMLInputElement,
  SlowDropdownTextFieldProps
>(({ options = [], id, ...rest }: SlowDropdownTextFieldProps, ref) => {
  const datalistId = `${id}-list`;

  return (
    <>
      <SlowTextField list={datalistId} id={id} ref={ref} {...rest} />
      <datalist id={datalistId}>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </datalist>
    </>
  );
});

export default SlowDropdownTextField;
