import React, { useState } from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  items: { label: string; href: string; icon?: React.ReactNode }[];
  isSidebarOpen: boolean;
  onClose: ()=>void
}

const Sidebar = ({ items, isSidebarOpen, onClose }: SidebarProps) => {
  

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-10 h-screen bg-primary-800 text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out w-64`}
      >
        <nav className="h-full flex flex-col">
          <div className="p-4 text-lg font-semibold flex justify-between">
            <span>Menu</span>
            <button onClick={onClose} className="material-symbols-outlined">
              close
            </button>
          </div>
          <ul className="flex-1">
            {items.map((item, index) => (
              <li key={index} className="hover:bg-primary-700">
                <Link to={item.href} className="flex items-center py-2 px-4">
                  {item.icon && <span className="mr-3">{item.icon}</span>}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sidebar Toggle Button */}
      {/* <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-20 p-2 bg-primary-800 text-white rounded-full"
      >
        Menu
      </button> */}
    </>
  );
};

export default Sidebar;
