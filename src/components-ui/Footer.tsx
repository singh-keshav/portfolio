import React from "react";

import brandInfo from "../config/brand-info.json";
import { Link } from "react-router-dom";

type Props = {};
const getMobileNumberWithoutPrefix = (mobileNumber: string) => {
  if (mobileNumber.length === 10) {
    return mobileNumber;
  }
  if (mobileNumber.length === 13) {
    return mobileNumber.slice(3);
  }
  if (mobileNumber.length === 12) {
    return mobileNumber.slice(2);
  }
  return "";
};

const Footer = (props: Props) => {
  return (
    <footer className="relative bottom-0 bg-gray-800 text-white py-12 font-thin ">
      {/* WhatsApp Button */}
      <Link
        to={`https://wa.me/${getMobileNumberWithoutPrefix(brandInfo.navbarContactNumber)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 right-0"
      >
        <img src="/whatsapp-96.png" alt="whatsapp" />
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex flex-col m-auto">
          <Link to="/" className="rounded-lg inline-block m-4">
            <img src={brandInfo.logoUrl} alt="Logo" className="w-24" />
          </Link>

          <div className="flex">
            {brandInfo.footer.socialMedia.map((sm, index) => (
              <Link key={index} to={sm.link}>
                <img src={sm.imageUrl} alt="Logo" className="w-8" />
              </Link>
            ))}
          </div>
        </div>
        <div className="text-left p-4">
          <h3 className="underline underline-offset-8">Address</h3>
          <div className="mt-4 mb-4 px-8 mx-8"></div>
          <div className="flex">
            <span className="material-symbols-outlined w-8 flex-shrink-0">pin_drop</span>
            <span>{brandInfo.address}</span>
          </div>
          <div className="flex">
            <span className="material-symbols-outlined w-8 flex-shrink-0">mail</span>
            <span>{brandInfo.navbarEmail}</span>
          </div>
          <div className="flex">
            <span className="material-symbols-outlined w-8 flex-shrink-0">call</span>
            <span>{brandInfo.navbarContactNumber}</span>
          </div>
        </div>
        <div className="p-4 text-left">
          <h3 className="underline underline-offset-8">Solutions</h3>
          <div className="mt-4 mb-4 px-8 mx-8"></div>
          <ul className="flex flex-col gap-1">
            {brandInfo.navLinks.map((link, index) => (
              <li key={index} className="flex gap-2">
                <span className="material-symbols-outlined">inventory_2</span>
                <Link key={index} target="_blank" to={link.href} className="hover:text-primary-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
