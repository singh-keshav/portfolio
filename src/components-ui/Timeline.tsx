import React from "react";

interface TimelineItem {
  date: string;
  content: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative border-l border-gray-300">
      {items.map((item, index) => (
        <div key={index} className="mb-8 ml-4">
          <div className="absolute -left-2 w-4 h-4 bg-primary-500 rounded-full"></div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
            <h4 className="text-sm font-semibold text-gray-800">{item.date}</h4>
            <div className="mt-2">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
