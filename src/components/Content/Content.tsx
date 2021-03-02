import React, { ReactNode } from 'react';

export interface ContentProps {
  children: ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return (
    <main className="flex justify-center w-full px-4 md:px-8">
      <div className="w-full max-w-6xl">{children}</div>
    </main>
  );
};

export default Content;
