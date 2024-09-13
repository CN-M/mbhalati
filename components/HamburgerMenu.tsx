"use client";

import Link from "next/link";
import { useState } from "react";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-between w-8 h-6 md:hidden z-50"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-full h-1 bg-black-100 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-full h-1 bg-black-100 transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-full h-1 bg-black-100 transition-transform duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      <nav
        className={`absolute top-12 right-0 bg-white text-black-100 p-4 w-40 rounded-lg shadow-md transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="space-y-4">
          <li>
            <Link
              href="#home"
              className="hover:text-primary"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:text-primary"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-primary"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
