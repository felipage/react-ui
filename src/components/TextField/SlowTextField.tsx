import TextFieldBase, { TextFieldBaseProps } from './TextFieldBase';
import React from 'react';
import { useEffect, useState } from 'react';

export interface SlowTextFieldProps extends TextFieldBaseProps {}

const SlowTextField = ({
  value,
  onChange = () => {},
  ...rest
}: SlowTextFieldProps) => {
  const [localValue, setLocalValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => onChange(localValue), 500);
    return () => clearTimeout(timeout);
  }, [localValue, onChange]);

  useEffect(() => setLocalValue(value ?? ''), [value]);

  const onValueChange = (value: string) => {
    setLocalValue(value);
  };

  return (
    <TextFieldBase onChange={onValueChange} value={localValue} {...rest} />
  );
};

export default SlowTextField;
