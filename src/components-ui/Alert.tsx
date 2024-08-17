import React from "react";

interface AlertProps {
  type?: "success" | "error" | "info";
  children: React.ReactNode;
}

const Alert = ({ type = "info", children }: AlertProps) => {
  const alertClasses = {
    success: "bg-success text-white border border-green-300",
    error: "bg-error text-white border border-red-300",
    info: "bg-info text-white border border-blue-300",
  };

  return (
    <div className={`p-4 rounded border ${alertClasses[type]}`}>
      {children}
    </div>
  );
};

export default Alert;
