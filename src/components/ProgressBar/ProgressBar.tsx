import React from 'react';

export interface ProgressBarProps {
  label: string;
  progress: number;
}

const ProgressBar = ({ progress = 0, label }: ProgressBarProps) => {
  return (
    <label className="flex flex-col items-center justify-center">
      <span>
        {label} {(progress * 100).toFixed()}%
      </span>
      <progress
        value={(progress * 100).toFixed()}
        max="100"
        className="w-0 h-0 opacity-0"
      ></progress>
      <span className="relative inline-block w-full h-1 max-w-lg bg-gray-300 rounded-full dark:bg-gray-600">
        <span
          style={{ width: `${progress * 100}%` }}
          className="absolute h-1 bg-feli"
        ></span>
      </span>
    </label>
  );
};

export default ProgressBar;
