"use client";

import Link from "next/link";
import { useState } from "react";

export const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Hamburger Menu */}
      <button
        id="menu-btn"
        // className={`block relative w-6 h-2 transition-all duration-300 focus:outline-none md:hidden ${menuOpen ? "open" : ""}`}
        className={`flex flex-col items-center relative w-6 h-2 transition-all duration-300 focus:outline-none md:hidden ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span
          className={`absolute top-1 left-0 w-6 h-0.5 rounded-lg bg-emerald-500 transition-transform duration-500 ${
            menuOpen ? "rotate-45 " : "translate-y-0"
          }`}
        ></span>
        <span
          className={`absolute left-0 w-6 h-0.5 rounded-lg bg-emerald-500 transition-all duration-500 ${
            menuOpen ? "hidden" : "translate-y-2"
          }`}
        ></span>
        <span
          className={`absolute bottom-0 left-0 w-6 h-0.5 rounded-lg bg-emerald-500 transition-transform duration-500 ${
            menuOpen ? "-rotate-45" : "translate-y-3"
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute flex-col items-center self-end py-8 mt-96 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md md:hidden transition-all duration-500 ${
          menuOpen ? "flex" : "hidden"
        }`}
        id="menu"
      >
        <Link href="#pricing">Pricing</Link>
        <Link href="#product">Product</Link>
        <Link href="#about">About Us</Link>
        <Link href="#careers">Careers</Link>
        <Link href="#community">Community</Link>
      </div>
    </>
  );
};
