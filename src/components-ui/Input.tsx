import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...otherProps }: InputProps) => {
  return (
    <input
      {...otherProps}
      className="py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
    />
  );
};

export default Input;
