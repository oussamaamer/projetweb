import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbarLinks } from "../constants";
const Navbar = () => {
  const [activeLink, setActivLink] = useState("/");

  return (
    <nav className="sticky top-0 z-50 bg-gray-950">
      <div className="flex justify-between items-center text-white px-4 py-1 max-w-7xl mx-auto h-[60px]  ">
        <h1 className="text-2xl">
          <Link to="/" onClick={() => setActivLink("/")}>
            <img src="/assets/logo.png" alt="enactus-logo" className="w-20" />
          </Link>
        </h1>
        <div className="flex gap-3 sm:gap-6">
          {navbarLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => {
                setActivLink(link.path);
              }}
              className={`font-bold hover:opacity-60 ${
                activeLink === link.path && "text-amber-400"
              } transition-colors delay-100`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
