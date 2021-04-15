import React, { forwardRef, HTMLProps, ReactNode } from 'react';

export interface TextFieldBaseProps
  extends Omit<HTMLProps<HTMLInputElement>, 'ref' | 'label'> {
  label?: ReactNode;
  fullWidth?: boolean;
}

const TextFieldBase = forwardRef<HTMLInputElement, TextFieldBaseProps>(
  ({ id, label, fullWidth = false, ...rest }, ref) => {
    return (
      <label
        htmlFor={id}
        className={`inline-flex flex-col ${fullWidth ? 'w-full' : ''}`}
      >
        <span className="">{label}</span>
        <input
          className="px-4 py-2 transition bg-gray-200 rounded-md dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800 focus:bg-gray-300 focus:outline-none ring-feli focus:ring-3 overflow-ellipsis"
          id={id}
          ref={ref}
          {...rest}
        />
      </label>
    );
  }
);

export default TextFieldBase;
