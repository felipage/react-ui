import TextFieldBase, { TextFieldBaseProps } from './TextFieldBase';
import React, { forwardRef } from 'react';
import { useEffect, useState } from 'react';

export interface SlowTextFieldProps
  extends Omit<TextFieldBaseProps, 'onChange'> {
  value?: string;
  onChange: (value: string) => void;
}

const SlowTextField = forwardRef<HTMLInputElement, SlowTextFieldProps>(
  ({ value, onChange = () => {}, ...rest }: SlowTextFieldProps, ref) => {
    const [localValue, setLocalValue] = useState(value ?? '');

    useEffect(() => {
      const timeout = setTimeout(() => onChange(localValue), 500);
      return () => clearTimeout(timeout);
    }, [localValue, onChange]);

    useEffect(() => setLocalValue(value ?? ''), [value]);

    const onValueChange = (value: string) => {
      setLocalValue(value);
    };

    return (
      <TextFieldBase
        onChange={e => onValueChange((e.target as HTMLInputElement).value)}
        value={localValue}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default SlowTextField;
