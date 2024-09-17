import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/config/navLinks";
import { socialLinks } from "@/config/socialLinks";

export const Footer = () => {
  return (
    <footer className="border-t border-black-10 flex flex-col items-center justify-center w-full bg-white lg:space-y-8 lg:py-16 space-y-6 md:p-8 py-4">
      <nav>
        <ul className="hidden xl:flex text-paragraph text-black-100 font-regular space-x-8">
          {navLinks.map(({ text, href }, idx) => (
            <li key={idx}>
              <Link className="hover:text-emerald-500" href={href}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center justify-center md:flex-row md:space-x-16 space-x-6 text-black-50 ">
        {socialLinks.map(({ name, darkIcon, href }, idx) => (
          <Link key={idx} href={href} target="_blank">
            <Image
              alt={`${name} social icon`}
              src={darkIcon}
              className="md:w-8 md:h-8 h-5 w-5"
            />
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-2 px-8">
        {/* <span className="text-black-75 text-center text-paragraph-xs md:text-paragraph-sm lg:text-paragraph"> */}
        <span className="text-black-75 text-center text-paragraph-xs md:text-paragraph-sm">
          &copy; {new Date().getFullYear()} C.N. Mbhalati. All rights reserved
          (whatever that means).
        </span>
        <hr className="w-1/2 text-black-25" />
        <div className="space-x-1 flex items-center">
          {/* <span className="text-black-75 text-paragraph-xs md:text-paragraph-sm lg:text-paragraph"> */}
          <span className="text-black-75 text-paragraph-xs md:text-paragraph-sm">
            Made with
          </span>
          <span
            role="img"
            className="text-[#FF0000] md:text-md text-sm"
            aria-label="love"
          >
            ❤️
          </span>
          <span className="text-black-75 text-paragraph-xs md:text-paragraph-sm">
            and
          </span>
          <span role="img" className="md:text-md text-sm" aria-label="laughter">
            😂
          </span>
          <span className="text-black-75 text-paragraph-xs md:text-paragraph-sm">
            by{" "}
            <Link href="https://www.instagram.com/marknormand/" target="_blank">
              <strong className="text-emerald-500">Kevin Hart</strong>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};
