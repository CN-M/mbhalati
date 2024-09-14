"use client";

import Link from "next/link";
import { useState } from "react";

export const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center self-center">
        <button onClick={toggleMenu}>
          <div
            className={`${open ? "tham-active" : ""} tham tham-e-spin tham-w-7`}
          >
            <div className="tham-box">
              <div className="tham-inner bg-emerald-500" />
            </div>
          </div>
        </button>
        <div className={`${open ? "" : "hidden"}`}>
          <div
            id="menu"
            className="rounded-xl absolute flex h-48 w-64 flex-col justify-center items-center py-2 mt-2 space-y-6 self-center -left-40 font-bold bg-secondary drop-shadow-md transition-all duration-500"
          >
            <ul className="flex flex-col items-center justify-center space-y-4 text-paragraph text-black-100 font-regular">
              <li>
                <Link className="hover:text-emerald-500" href="#home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-emerald-500" href="/">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-emerald-500" href="#about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-emerald-500" href="#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
