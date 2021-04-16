import { HTMLMotionProps, motion } from 'framer-motion';
import React, { forwardRef } from 'react';

export interface AnchorProps extends Omit<HTMLMotionProps<'a'>, 'ref'> {}

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ className, ...rest }: AnchorProps, ref) => {
    return (
      <motion.a
        className={`transition rounded-md hover:text-feli active:text-feli-dark ${className}`}
        {...rest}
        ref={ref}
      />
    );
  }
);

export default Anchor;
