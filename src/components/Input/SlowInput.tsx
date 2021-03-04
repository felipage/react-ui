import InputBase, { InputBaseProps } from './InputBase';
import React from 'react';
import { useEffect, useState } from 'react';

export interface SlowInputProps extends InputBaseProps {}

const SlowInput = ({ value, onChange = () => {}, ...rest }: SlowInputProps) => {
  const [localValue, setLocalValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => onChange(localValue), 500);
    return () => clearTimeout(timeout);
  }, [localValue, onChange]);

  useEffect(() => setLocalValue(value ?? ''), [value]);

  const onValueChange = (value: string) => {
    setLocalValue(value);
  };

  return <InputBase onChange={onValueChange} value={localValue} {...rest} />;
};

export default SlowInput;
