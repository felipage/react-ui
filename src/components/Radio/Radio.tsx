import React, { ReactNode, useEffect, useState } from 'react';

export interface RadioProps {
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
  label: ReactNode;
  value: string;
}

const Radio = ({
  onChange = () => {},
  name,
  checked = false,
  label,
  value,
}: RadioProps) => {
  const [fChecked, fSetChecked] = useState(false);

  useEffect(() => {
    fSetChecked(checked);
  }, [checked]);

  return (
    <label className="inline-flex items-center rounded focus-within:ring-2 ring-feli">
      <span className="inline-flex items-center justify-center transition-colors rounded-full w-9 h-9 hover:bg-feli-opacity-400 active:bg-feli-opacity-600 focus:bg-feli-opacity-400">
        <span
          className={`w-6 h-6 rounded-full transition ${
            fChecked
              ? 'bg-feli ring-inset ring-3 ring-white ring-offset-2 ring-offset-feli'
              : 'bg-white ring-inset ring-3 ring-white ring-offset-2 ring-offset-gray-500'
          }`}
        ></span>
      </span>
      <span className="ml-2">{label}</span>
      <input
        name={name}
        type="radio"
        value={value}
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
