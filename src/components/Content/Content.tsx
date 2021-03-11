import React, { forwardRef, HTMLProps } from 'react';

export interface ContentProps extends Omit<HTMLProps<HTMLElement>, 'ref'> {}

const Content = forwardRef<HTMLElement, ContentProps>(
  ({ children, ...rest }: ContentProps, ref) => {
    return (
      <main
        className="flex justify-center w-full px-4 md:px-8"
        ref={ref}
        {...rest}
      >
        <div className="w-full max-w-6xl">{children}</div>
      </main>
    );
  }
);

export default Content;
