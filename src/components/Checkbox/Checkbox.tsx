import React, { forwardRef, HTMLProps, ReactNode, useState } from 'react';
import { HiCheck } from 'react-icons/hi';
import { Underlay } from '../Underlay';

type sizes = 'small' | 'normal' | 'large';

export interface CheckboxProps
  extends Omit<
    HTMLProps<HTMLInputElement>,
    'ref' | 'size' | 'label' | 'onChange'
  > {
  onChange?: (value: boolean) => void;
  size?: sizes;
  label?: ReactNode;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      onChange = () => {},
      size = 'normal',
      label = 'Checkbox',
      ...rest
    }: CheckboxProps,
    ref
  ) => {
    const [checked, setChecked] = useState(false);
    return (
      <label
        className={`inline-flex items-center focus-within:ring-3 transition-shadow rounded ring-feli pr-2 ${
          size === 'small'
            ? 'text-sm'
            : size === 'normal'
            ? 'text-base'
            : size === 'large'
            ? 'text-lg'
            : ''
        }`}
      >
        <input
          type="checkbox"
          className="w-0 h-0 opacity-0 focus:outline-none"
          onChange={e => {
            const { checked } = e.target;
            onChange(checked);
            setChecked(checked);
          }}
          ref={ref}
          {...rest}
        />
        <span className="cursor-pointer">
          <Underlay size={size}>
            <span
              className={`flex items-center justify-center ring-2 transition ${
                checked ? 'ring-feli' : 'ring-gray-500'
              } ${checked ? 'bg-feli' : ''} ${
                size === 'small'
                  ? 'w-3 h-3 rounded-sm'
                  : size === 'normal'
                  ? 'w-4 h-4 rounded-sm'
                  : size === 'large'
                  ? 'w-5 h-5 rounded'
                  : ''
              }`}
            >
              {checked && (
                <HiCheck
                  size={
                    size === 'small'
                      ? 16
                      : size === 'normal'
                      ? 18
                      : size === 'large'
                      ? 20
                      : 0
                  }
                />
              )}
            </span>
          </Underlay>
        </span>
        <span className="ml-2">{label}</span>
      </label>
    );
  }
);

export default Checkbox;
