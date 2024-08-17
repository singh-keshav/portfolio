import React from "react";

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
}

const Switch = ({ checked, onChange }: SwitchProps) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <span className="mr-2 text-gray-700">{checked ? 'On' : 'Off'}</span>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`block bg-gray-200 w-10 h-6 rounded-full ${checked ? 'bg-primary-500' : ''}`}
        ></div>
        <div
          className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${checked ? 'transform translate-x-4' : ''}`}
        ></div>
      </div>
    </label>
  );
};

export default Switch;
