import Switch from './Switch';
import React, { ReactNode, useEffect, useState } from 'react';

export interface SwitchGroupOptions {
  value: string;
  label: ReactNode;
}

export interface SwitchGroupProps {
  options: SwitchGroupOptions[];
  onChange?: (value: string[]) => void;
}

const SwitchGroup = ({ options, onChange = () => {} }: SwitchGroupProps) => {
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
          <Switch
            checked={
              fSelectedValues.find(option => option.value === value)!.checked
            }
            onChange={checked => handleChange(value, checked)}
            key={value}
            label={label}
          />
        );
      })}
    </div>
  );
};

export default SwitchGroup;
