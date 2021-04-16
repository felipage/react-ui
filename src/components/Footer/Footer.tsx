import React, { forwardRef, HTMLProps } from 'react';

export interface FooterProps extends Omit<HTMLProps<HTMLDivElement>, 'ref'> {}

const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ children, ...rest }: FooterProps, ref) => {
    return (
      <div ref={ref} {...rest}>
        <div className="flex justify-center bg-gray-100 dark:bg-black">
          <div className="justify-around w-full max-w-6xl mx-2 my-10 space-y-6 text-center md:space-y-0 md:text-left md:flex">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

export default Footer;
