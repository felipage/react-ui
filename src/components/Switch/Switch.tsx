import React, { useEffect, useState } from 'react';
import { Underlay } from '../Underlay';

export interface SwitchProps {
  onChange: (value: boolean) => void;
  label?: string;
  checked: boolean;
}

const Switch = ({ onChange = () => {}, label, checked }: SwitchProps) => {
  const [fChecked, fSetChecked] = useState(false);

  useEffect(() => {
    fSetChecked(checked);
  }, [checked]);

  return (
    <label className="inline-flex flex-row-reverse items-center pr-2 transition-shadow rounded focus-within:ring-3 ring-feli">
      {label}
      <input
        type="checkbox"
        className="w-0 h-0 opacity-0 focus:outline-none"
        onChange={e => {
          const { checked } = e.target;
          onChange(checked);
          fSetChecked(checked);
        }}
      ></input>
      <span
        className={`cursor-pointer relative w-7 h-3 mr-4 transition-colors rounded-full ${
          fChecked ? 'bg-feli-light' : 'bg-gray-400'
        }`}
      >
        <span
          className={`absolute inline-flex items-center justify-center transform -left-3 -top-3 transition-transform ${
            fChecked ? 'translate-x-5' : ''
          }`}
        >
          <Underlay>
            <span
              className={`flex items-center justify-center w-5 h-5 transition rounded-full shadow ${
                fChecked ? 'bg-feli' : 'bg-white'
              }`}
            ></span>
          </Underlay>
        </span>
      </span>
    </label>
  );
};

export default Switch;
