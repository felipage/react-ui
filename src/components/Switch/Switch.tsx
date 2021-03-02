import React, { useState } from 'react';

export interface SwitchProps {
  onChange: (value: boolean) => void;
  label?: string;
}

const Switch = ({ onChange = () => {}, label }: SwitchProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <label className="inline-flex flex-row-reverse items-center pr-2 transition-shadow rounded focus-within:ring-2 ring-feli">
      {label}
      <input
        type="checkbox"
        className="w-0 h-0 opacity-0 focus:outline-none"
        onChange={e => {
          const { checked } = e.target;
          onChange(checked);
          setChecked(checked);
        }}
      ></input>
      <span
        className={`cursor-pointer relative w-7 h-3 mr-4 transition-colors rounded-full ${
          checked ? 'bg-feli-light' : 'bg-gray-400'
        }`}
      >
        <span
          className={`transform -left-3 absolute inline-flex items-center justify-center w-8 h-8 transition-all rounded-full -top-2.5 hover:bg-feli-opacity-400 active:bg-feli-opacity-600 focus:bg-feli-opacity-400 ${
            checked ? 'translate-x-5' : ''
          }`}
        >
          <span
            className={`flex items-center justify-center w-5 h-5 transition rounded-full shadow ${
              checked ? 'bg-feli' : 'bg-white'
            }`}
          ></span>
        </span>
      </span>
    </label>
  );
};

export default Switch;
