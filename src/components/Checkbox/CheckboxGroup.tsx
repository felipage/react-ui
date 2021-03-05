import Checkbox from './Checkbox';
import React, { ReactNode, useEffect, useState } from 'react';

export interface CheckboxGroupOptions {
  value: string;
  label: ReactNode;
}

export interface CheckboxGroupProps {
  options: CheckboxGroupOptions[];
  onChange?: (value: string[]) => void;
}

const CheckboxGroup = ({
  options,
  onChange = () => {},
}: CheckboxGroupProps) => {
  const [fSelectedValues, fSetSelectedValues] = useState([
    ...options.map(option => ({
      value: option.value,
      checked: false,
    })),
  ]);

  useEffect(() => {
    onChange(
      fSelectedValues
        .filter(option => option.checked)
        .map(option => option.value)
    );
  }, [fSelectedValues]);

  const handleChange = (value: string, checked: boolean) => {
    console.log({ value, checked });
    fSetSelectedValues(selectedValues => {
      return selectedValues.map(values => {
        if (values.value === value) return { value: values.value, checked };
        return values;
      });
    });
  };

  return (
    <div className="flex flex-col">
      {options.map(option => {
        const { value, label } = option;
        return (
          <Checkbox
            onChange={checked => handleChange(value, checked)}
            key={value}
            label={label}
          />
        );
      })}
    </div>
  );
};

export default CheckboxGroup;
