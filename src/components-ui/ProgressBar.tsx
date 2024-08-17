import React from "react";

interface ProgressBarProps {
  progress: number; // Progress in percentage (0-100)
  color?: string;   // Optional color for the progress bar
}

const ProgressBar = ({ progress, color = 'bg-primary-500' }: ProgressBarProps) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
