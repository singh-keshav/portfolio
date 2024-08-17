import React, { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  console.log(activeTab);

  return (
    <div className="relative">
      {/* Tabs Navigation */}
      <div className="flex mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-primary-900 font-semibold focus:outline-none underline underline-offset-8 ${
              index === activeTab ? "text-red-600" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
