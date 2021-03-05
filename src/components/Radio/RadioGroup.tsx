import Radio from './Radio';
import React, { ReactNode, useState } from 'react';

export interface RadioGroupOptions {
  value: string;
  label: ReactNode;
}

export interface RadioGroupProps {
  name: string;
  options: RadioGroupOptions[];
  onChange?: (value: string) => void;
}

const RadioGroup = ({
  options,
  name,
  onChange = () => {},
}: RadioGroupProps) => {
  const [fSelectedValue, fSetSelectedValue] = useState('');

  const handleChange = (newValue: string) => {
    onChange(newValue);
    fSetSelectedValue(newValue);
  };

  return (
    <div className="flex flex-col">
      {options.map(option => {
        const { value, label } = option;
        return (
          <Radio
            name={name}
            checked={fSelectedValue === value}
            onChange={checked => checked && handleChange(value)}
            label={label}
          />
        );
      })}
    </div>
  );
};

export default RadioGroup;
