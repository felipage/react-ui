import React, {
  forwardRef,
  HTMLProps,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { Thumb } from '../Thumb';
import { Underlay } from '../Underlay';

export interface SwitchProps
  extends Omit<HTMLProps<HTMLInputElement>, 'ref' | 'label' | 'onChange'> {
  onChange?: (value: boolean) => void;
  label?: ReactNode;
  checked?: boolean;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    { onChange = () => {}, label = '', checked = false, ...rest }: SwitchProps,
    ref
  ) => {
    const [fChecked, fSetChecked] = useState(false);

    useEffect(() => {
      fSetChecked(checked);
    }, [checked]);

    return (
      <label className="inline-flex items-center pr-2 transition-shadow rounded focus-within:ring-3 ring-feli">
        <input
          type="checkbox"
          className="w-0 h-0 opacity-0 focus:outline-none"
          onChange={e => {
            const { checked } = e.target;
            onChange(checked);
            fSetChecked(checked);
          }}
          ref={ref}
          {...rest}
        ></input>
        <span className="h-9"></span>
        <span
          className={`cursor-pointer relative ml-2 w-5 h-3 mr-4 transition-colors rounded-full ${
            fChecked ? 'bg-feli-light' : 'bg-gray-400'
          }`}
        >
          <span
            className={`absolute inline-flex items-center justify-center transform -left-4 -top-3 transition-transform ${
              fChecked ? 'translate-x-4' : ''
            }`}
          >
            <Underlay>
              <Thumb active={fChecked} />
            </Underlay>
          </span>
        </span>
        <span>{label}</span>
      </label>
    );
  }
);

export default Switch;
