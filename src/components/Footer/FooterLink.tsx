import React, { forwardRef, HTMLProps } from 'react';

interface Props extends Omit<HTMLProps<HTMLAnchorElement>, 'ref'> {}

const FooterLink = forwardRef<HTMLAnchorElement, Props>(
  ({ children, className = '', ...rest }: Props, ref) => {
    return (
      <a
        className={`py-0.5 px-1 block hover:text-feli active:text-feli-dark transition-colors focus:outline-none rounded-md cursor-pointer ${className}`}
        ref={ref}
        {...rest}
      >
        {children}
      </a>
    );
  }
);

export default FooterLink;
