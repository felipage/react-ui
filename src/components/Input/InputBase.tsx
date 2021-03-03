import React, { ReactNode } from 'react';

export interface InputBaseProps {
  onChange?: (value: string) => void;
  value?: string;
  type?: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  label?: ReactNode;
  list?: string;
  fullWidth?: boolean;
}

const InputBase = ({
  onChange = () => {},
  value,
  type,
  id,
  placeholder,
  disabled,
  label,
  list,
  fullWidth = false,
}: InputBaseProps) => {
  return (
    <label
      htmlFor={id}
      className={`inline-flex flex-col ${fullWidth ? 'w-full' : ''}`}
    >
      <span className="">{label}</span>
      <input
        list={list}
        onChange={e => onChange(e.target.value)}
        value={value}
        type={type}
        className="px-4 py-2 transition bg-gray-200 rounded-md dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800 focus:bg-gray-300 focus:outline-none ring-feli focus:ring-3"
        id={id}
        placeholder={placeholder}
        disabled={disabled}
      />
    </label>
  );
};

export default InputBase;
