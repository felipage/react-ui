import React, { forwardRef, HTMLProps, ReactNode } from 'react';

export interface FooterGroupProps
  extends Omit<HTMLProps<HTMLDivElement>, 'ref' | 'label'> {
  children: ReactNode;
  label: ReactNode;
}

const FooterGroup = forwardRef<HTMLDivElement, FooterGroupProps>(
  ({ label, children, className = '', ...rest }: FooterGroupProps, ref) => {
    return (
      <div>
        <div
          className={`p-1 font-bold tracking-wider text-gray-500 uppercase dark:text-gray-400 md:mt-0 ${className}`}
          ref={ref}
          {...rest}
        >
          {label}
        </div>
        <div>{children}</div>
      </div>
    );
  }
);

export default FooterGroup;
