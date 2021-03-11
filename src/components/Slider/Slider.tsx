import React, {
  ChangeEvent,
  forwardRef,
  HTMLProps,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { IconType } from 'react-icons';

export interface SliderProps
  extends Omit<HTMLProps<HTMLInputElement>, 'ref' | 'label' | 'onChange'> {
  label?: ReactNode;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  LeadingIcon?: IconType;
  TrailingIcon?: IconType;
}

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      label = '',
      min = 0,
      max = 100,
      value = 0,
      onChange = () => {},
      LeadingIcon,
      TrailingIcon,
      ...rest
    }: SliderProps,
    ref
  ) => {
    const [fValue, fSetValue] = useState<number>(value);

    useEffect(() => {
      fSetValue(value);
    }, [value]);

    useEffect(() => {
      onChange(fValue);
    }, [fValue, onChange]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      fSetValue(parseInt(event.target.value));
    };

    return (
      <label className="inline-flex flex-col">
        <span>{label}</span>
        <span className="flex items-center transition-shadow rounded h-9 focus-within:ring-3 ring-feli">
          {LeadingIcon && <LeadingIcon size={18} className="mr-2" />}
          <input
            type="range"
            min={min}
            max={max}
            value={fValue}
            className="h-2 transition-colors bg-gray-200 rounded-md appearance-none input-no-thumb dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800 focus:bg-gray-300 focus:outline-none"
            onChange={handleChange}
            ref={ref}
            {...rest}
          />
          {TrailingIcon && <TrailingIcon size={18} className="ml-2" />}
        </span>
      </label>
    );
  }
);

export default Slider;
