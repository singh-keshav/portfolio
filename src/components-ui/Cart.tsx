import React from "react";

interface CardProps {
  title?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

const Card = ({ title, content, footer }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden">
      {title && (
        <div className="bg-primary-500 text-white py-2 px-4">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
      )}
      <div className="p-4">{content}</div>
      {footer && <div className="bg-gray-100 p-4 border-t border-gray-200">{footer}</div>}
    </div>
  );
};

export default Card;
