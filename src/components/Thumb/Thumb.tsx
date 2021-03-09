import React from 'react';

export interface ThumbProps {
  active?: boolean;
}

const Thumb = ({ active = false }: ThumbProps) => {
  return (
    <span
      className={`flex items-center justify-center w-5 h-5 transition rounded-full shadow ${
        active ? 'bg-feli' : 'bg-white'
      }`}
    ></span>
  );
};

export default Thumb;
