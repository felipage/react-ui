import { HTMLMotionProps } from 'framer-motion';
import React, { forwardRef } from 'react';
import { Anchor } from '../Anchor';

interface Props extends Omit<HTMLMotionProps<'a'>, 'ref'> {}

const FooterLink = forwardRef<HTMLAnchorElement, Props>(
  ({ className = '', ...rest }: Props, ref) => {
    return (
      <Anchor
        className={`py-0.5 px-1 block ${className}`}
        {...rest}
        ref={ref}
      />
    );
  }
);

export default FooterLink;
