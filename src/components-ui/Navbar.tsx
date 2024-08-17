import React, { useState } from "react";
// import { Link } from "react-router-dom";
import brandInfo from "../../src/config/brand-info.json";
import EnquiryButton from "./EnquiryButton";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav className="">
      <div className="p-1 bg-primary-500 text-left text-white">
        <span className="px-2">{brandInfo.navbarContactNumber}</span>
        <span className="px-2">{brandInfo.navbarEmail}</span>
      </div>

      <div className="container mx-auto flex items-center justify-between p-2">
        <div className="flex items-center">
          <span className="material-symbols-outlined sm:hidden text-5xl" onClick={()=> setIsSidebarOpen(true)}>menu</span>
          <div className="flex items-center h-16">
            <img src={brandInfo.logoUrl} alt="Brand Logo" className="h-16" />
          </div>
        </div>

        <div className="space-x-4 hidden sm:block">
          {brandInfo.navLinks.map((link, index) => (
            <Link key={index} to={link.href} className="text-primary-500 hover:text-primary-700">
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <EnquiryButton>Enquiry</EnquiryButton>
        </div>
      </div>
      <div>
        <Sidebar items={brandInfo.navLinks} isSidebarOpen={isSidebarOpen} onClose={()=> setIsSidebarOpen(false)} />
      </div>
    </nav>
  );
};

export default Navbar;
