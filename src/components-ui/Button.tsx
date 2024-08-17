import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...otherProps }: ButtonProps) => {
  return (
    <button
      {...otherProps}
      className={`py-2 px-4 rounded bg-primary-500 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50`}
    >
      {children}
    </button>
  );
};

export default Button;
