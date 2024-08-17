import React from "react";

interface BadgeProps {
  color?: "primary" | "secondary";
  children: React.ReactNode;
}

const Badge = ({ color = "primary", children }: BadgeProps) => {
  const badgeClasses = {
    primary: "bg-primary-500 text-white",
    secondary: "bg-secondary-500 text-white",
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${badgeClasses[color]}`}>
      {children}
    </span>
  );
};

export default Badge;
