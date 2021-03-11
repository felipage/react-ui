import React from 'react';

export interface ProgressBarProps {
  label: string;
  progress?: number;
}

const ProgressBar = ({ progress, label }: ProgressBarProps) => {
  return (
    <label className="flex flex-col items-center justify-center">
      <span>
        {label} {progress !== undefined && `${(progress * 100).toFixed()}%`}
      </span>
      <progress
        value={progress && (progress * 100).toFixed()}
        max="100"
        className="w-0 h-0 opacity-0"
      ></progress>
      <span className="relative inline-block w-full h-1 max-w-lg overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600">
        <span
          style={
            progress !== undefined
              ? { width: `${progress * 100}%` }
              : { width: '100%' }
          }
          className={`absolute h-1 bg-feli ${
            progress === undefined ? 'animate-pulse' : ''
          }`}
        ></span>
      </span>
    </label>
  );
};

export default ProgressBar;
