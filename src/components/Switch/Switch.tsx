import React, { ReactNode, useEffect, useState } from 'react';
import { Underlay } from '../Underlay';

export interface SwitchProps {
  onChange?: (value: boolean) => void;
  label?: ReactNode;
  checked?: boolean;
}

const Switch = ({
  onChange = () => {},
  label = '',
  checked = false,
}: SwitchProps) => {
  const [fChecked, fSetChecked] = useState(false);

  useEffect(() => {
    fSetChecked(checked);
  }, [checked]);

  return (
    <label className="inline-flex items-center transition-shadow rounded focus-within:ring-3 ring-feli">
      <input
        type="checkbox"
        className="w-0 h-0 opacity-0 focus:outline-none"
        onChange={e => {
          const { checked } = e.target;
          onChange(checked);
          fSetChecked(checked);
        }}
      ></input>
      <span className="h-9"></span>
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
      <span>{label}</span>
    </label>
  );
};

export default Switch;
