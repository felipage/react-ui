import { HTMLMotionProps, motion } from 'framer-motion';
import React, { forwardRef } from 'react';

export interface ErrorMessageProps
  extends Omit<HTMLMotionProps<'div'>, 'ref'> {}

const ErrorMessage = forwardRef<HTMLDivElement, ErrorMessageProps>(
  ({ className, ...rest }: ErrorMessageProps, ref) => {
    return (
      <motion.div
        className={`transition rounded-md text-red-600 ${className}`}
        {...rest}
        ref={ref}
      />
    );
  }
);

export default ErrorMessage;
