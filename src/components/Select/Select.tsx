import React, { forwardRef, HTMLProps } from 'react';
import { HiOutlineArrowDown } from 'react-icons/hi';

export interface SelectProps extends Omit<HTMLProps<HTMLSelectElement>, 'ref'> {
  label: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, label, ...rest }: SelectProps, ref) => {
    const onChange = (value: string) => {
      console.log(value);
    };

    return (
      <label htmlFor={id} className="inline-flex flex-col">
        <span className="">{label}</span>
        <span className="relative flex">
          <select
            onChange={e => onChange(e.target.value)}
            className="py-2 pl-4 pr-8 transition bg-gray-200 rounded-md appearance-none dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800 focus:bg-gray-300 focus:outline-none ring-feli focus:ring-3"
            id={id}
            ref={ref}
            {...rest}
          ></select>
          <span className="absolute pointer-events-none right-3 top-3">
            <HiOutlineArrowDown size={16} />
          </span>
        </span>
      </label>
    );
  }
);

export default Select;
