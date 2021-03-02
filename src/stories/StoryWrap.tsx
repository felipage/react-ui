import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const StoryWrap = ({ children }: Props) => {
  return <div className="px-5 py-5">{children}</div>;
};

export default StoryWrap;
