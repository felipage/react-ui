import React, { ReactNode, useEffect, useState } from 'react';
import { Underlay } from '../Underlay';

export interface RadioProps {
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
  label?: ReactNode;
}

const Radio = ({
  onChange = () => {},
  name,
  checked = false,
  label = '',
}: RadioProps) => {
  const [fChecked, fSetChecked] = useState(false);

  useEffect(() => {
    fSetChecked(checked);
  }, [checked]);

  return (
    <label className="inline-flex items-center transition-shadow rounded focus-within:ring-3 ring-feli">
      <span className="cursor-pointer">
        <Underlay>
          <span
            className={`w-6 h-6 rounded-full transition ${
              fChecked
                ? 'bg-feli ring-inset ring-3 ring-white dark:ring-black ring-offset-2 ring-offset-feli'
                : 'bg-white dark:bg-black ring-inset ring-3 ring-white dark:ring-black ring-offset-2 ring-offset-gray-500'
            }`}
          ></span>
        </Underlay>
      </span>
      <span className="pr-2 ml-2">{label}</span>
      <input
        name={name}
        type="radio"
        className="w-0 h-0 opacity-0"
        onChange={e => {
          const { checked } = e.target;
          onChange(checked);
          fSetChecked(checked);
        }}
      />
    </label>
  );
};

export default Radio;
