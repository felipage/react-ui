import Radio from './Radio';
import React, { forwardRef, HTMLProps, ReactNode, useState } from 'react';

export interface RadioGroupOptions {
  value: string;
  label: ReactNode;
}

export interface RadioGroupProps
  extends Omit<HTMLProps<HTMLDivElement>, 'ref' | 'onChange'> {
  name: string;
  options: RadioGroupOptions[];
  onChange?: (value: string) => void;
}

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ options, name, onChange = () => {}, ...rest }: RadioGroupProps, ref) => {
    const [fSelectedValue, fSetSelectedValue] = useState('');

    const handleChange = (newValue: string) => {
      onChange(newValue);
      fSetSelectedValue(newValue);
    };

    return (
      <div className="flex flex-col" ref={ref} {...rest}>
        {options.map(option => {
          const { value, label } = option;
          return (
            <Radio
              key={value}
              name={name}
              checked={fSelectedValue === value}
              onChange={checked => checked && handleChange(value)}
              label={label}
            />
          );
        })}
      </div>
    );
  }
);

export default RadioGroup;
