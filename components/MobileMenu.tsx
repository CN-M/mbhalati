"use client";

import { navLinks } from "@/config/navLinks";
import Link from "next/link";
import { useState } from "react";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="md:hidden flex items-center justify-center">
        <button onClick={toggleMenu}>
          <div
            className={`${open ? "tham-active" : ""} tham tham-e-spin tham-w-7`}
          >
            <div className="tham-box">
              <div className="tham-inner bg-primary" />
            </div>
          </div>
        </button>

        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-white z-50 transform ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out shadow-lg`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-black-100"
          >
            ✖
          </button>
          <ul className="flex flex-col items-center justify-center space-y-6 h-full text-black-100 font-regular">
            {navLinks.map(({ text, href }, idx) => (
              <li key={idx}>
                <Link
                  onClick={toggleMenu}
                  className="hover:text-emerald-500"
                  href={href}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Backdrop (optional, for a nice effect when the drawer is open) */}
        {open && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleMenu}
          />
        )}
      </div>
    </>
  );
};
