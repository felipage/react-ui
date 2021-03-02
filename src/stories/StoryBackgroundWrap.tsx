import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const StoryBackgroundWrap = ({ children }: Props) => {
  return (
    <div className="w-full text-gray-700 transition-colors font-display bg-gray-50 dark:bg-dark dark:text-gray-200">
      {children}
    </div>
  );
};

export default StoryBackgroundWrap;
