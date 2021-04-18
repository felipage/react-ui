import React, { forwardRef, HTMLProps, useEffect, useState } from 'react';
import { HiOutlineSelector } from 'react-icons/hi';
import { Listbox } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

interface SelectOption {
  disabled?: boolean;
  value: string;
  name: string;
}

export interface SelectProps
  extends Omit<HTMLProps<HTMLDivElement>, 'ref' | 'as' | 'onChange' | 'value'> {
  label: string;
  options: SelectOption[];
  onChange: (option: SelectOption) => void;
  value: SelectOption;
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    { id, label, options, onChange: change, value, ...rest }: SelectProps,
    ref
  ) => {
    const [localValue, setLocalValue] = useState(options[0]);

    useEffect(() => {
      change(localValue);
    }, [localValue, change]);

    useEffect(() => {
      value && setLocalValue(value);
    }, [value]);

    return (
      <Listbox
        value={localValue}
        onChange={option => setLocalValue(option as SelectOption)}
        as="div"
        {...rest}
        ref={ref}
      >
        {({ open }) => (
          <>
            <Listbox.Label>
              <span className="block">{label}</span>
            </Listbox.Label>
            <Listbox.Button className="relative py-2 pl-4 pr-8 transition bg-gray-200 rounded-md dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800 focus:bg-gray-300 focus:outline-none ring-feli focus:ring-3">
              <span className="pr-3 line-clamp-1">{localValue.name}</span>
              <span className="absolute pointer-events-none right-3 top-3">
                <HiOutlineSelector size={16} />
              </span>
            </Listbox.Button>
            <AnimatePresence>
              {open && (
                <motion.div
                  className="absolute"
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    show: { opacity: 1, scale: 1, y: 6 },
                  }}
                >
                  <Listbox.Options
                    static
                    className="py-1.5 bg-white dark:bg-black rounded-md shadow-md focus:outline-none focus:ring-3 ring-feli"
                  >
                    <div className="overflow-y-scroll max-h-72">
                      {options.map(option => {
                        return (
                          <Listbox.Option
                            className={({ active, disabled }) =>
                              `py-1.5 px-3 transition-colors ${
                                active
                                  ? 'bg-feli bg-opacity-20 text-gray-900 dark:text-gray-50'
                                  : ''
                              } ${
                                disabled
                                  ? 'cursor-not-allowed text-gray-300 dark:text-gray-500'
                                  : 'cursor-pointer'
                              }`
                            }
                            key={option.value}
                            value={option}
                            disabled={option.disabled}
                          >
                            {({ selected }) => (
                              <span
                                className={`${
                                  selected ? 'text-feli font-semibold' : ''
                                }`}
                              >
                                {option.name}
                              </span>
                            )}
                          </Listbox.Option>
                        );
                      })}
                    </div>
                  </Listbox.Options>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </Listbox>
    );
  }
);

export default Select;
