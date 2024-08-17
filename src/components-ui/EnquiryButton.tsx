import React from 'react'

interface EnquiryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const EnquiryButton = ({ children, ...otherProps }: EnquiryButtonProps) => {
  return (
    <button
      {...otherProps}
      className={`py-2 px-4 rounded bg-red-500 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`}
    >
      {children}
    </button>
  );
}

export default EnquiryButton