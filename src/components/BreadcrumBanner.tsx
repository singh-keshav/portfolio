import React from "react";
import { Link, useLocation } from "react-router-dom";
import brandInfo from "../config/brand-info.json";

type Props = {};

const BreadcrumBanner = (props: Props) => {
  const location = useLocation();
  const navLink = brandInfo.navLinks.find((n) => n.href === location.pathname);
  const currentPathLabel = navLink?.label;
  return (
    <div className="bg-gray-800 text-white py-20 flex justify-center flex-col content-center text-center">
      <h1>About Us</h1>

      <div className="flex m-auto">
        <span className="material-symbols-outlined mr-2">home</span>
        <span className="mr-2">
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </span>
        {currentPathLabel && (
          <>
            <span className="mr-2">/</span>
            <span className="mr-2 text-red-500">
              <Link to="/about" className="hover:underline">
                {currentPathLabel}
              </Link>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default BreadcrumBanner;
