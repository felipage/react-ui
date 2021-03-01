import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const StoryWrap = ({ children }: Props) => {
  return <div className="m-5">{children}</div>;
};

export default StoryWrap;
