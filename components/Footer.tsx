import Image from "next/image";
import Link from "next/link";

import xTwitter from "@/public/icons/brands-footer/Frame-1.svg";
import dribbble from "@/public/icons/brands-footer/Frame-2.svg";
import linkedIn from "@/public/icons/brands-footer/Frame-3.svg";
import instagram from "@/public/icons/brands-footer/Frame-4.svg";
import github from "@/public/icons/brands-footer/Frame.svg";
import spotify from "@/public/icons/brands-footer/Vector.svg";

import { socialLinks } from "@/config/socialLinks";

export const Footer = () => {
  return (
    <footer className="border-t border-black-10 flex flex-col items-center justify-center w-full bg-white lg:space-y-8 lg:py-16 space-y-6 md:p-8 py-4">
      <nav>
        <ul className="text-paragraph-sm items-center justify-center flex md:text-paragraph text-black-75 font-regular md:space-x-12 space-x-2">
          <li>
            <Link className="hover:text-emerald-500" href="#home">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-emerald-500" href="/blog">
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
      </nav>
      <div className="flex items-center justify-center md:flex-row md:space-x-16 space-x-6 text-black-50 ">
        <Link href={socialLinks.github} target="_blank">
          <Image src={github} alt="Brand" className="md:w-8 md:h-8 h-5 w-5" />
        </Link>
        <Link href={socialLinks.xTwitter} target="_blank">
          <Image src={xTwitter} alt="Brand" className="md:w-8 md:h-8 h-5 w-5" />
        </Link>
        <Link href={socialLinks.linkedIn} target="_blank">
          <Image src={linkedIn} alt="Brand" className="md:w-8 md:h-8 h-5 w-5" />
        </Link>
        <Link href={socialLinks.dribbble} target="_blank">
          <Image src={dribbble} alt="Brand" className="md:w-8 md:h-8 h-5 w-5" />
        </Link>
        <Link href={socialLinks.instagram} target="_blank">
          <Image
            src={instagram}
            alt="Brand"
            className="md:w-8 md:h-8 h-5 w-5"
          />
        </Link>
        <Link href={socialLinks.spotify} target="_blank">
          <Image src={spotify} alt="Brand" className="md:w-8 md:h-8 h-5 w-5" />
        </Link>
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
            <Link href="/">
              <strong className="text-emerald-500">Kevin Hart</strong>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};
