import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Content = ({ children }: Props) => {
  return (
    <main className="flex justify-center w-full px-2 sm:px-4 md:px-8">
      <div className="w-full max-w-6xl">{children}</div>
    </main>
  );
};

export default Content;
