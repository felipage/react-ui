import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const StoryWrap = ({ children }: Props) => {
  return <div className="m-4">{children}</div>;
};

export default StoryWrap;
