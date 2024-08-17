import React from "react";

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleSwitch = ({ checked, onChange }: ToggleSwitchProps) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
        <div
          className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full transition-transform ${checked ? 'translate-x-6' : 'translate-x-0'}`}
        ></div>
      </div>
      <span className="ml-3 text-gray-700">{checked ? 'On' : 'Off'}</span>
    </label>
  );
};

export default ToggleSwitch;
