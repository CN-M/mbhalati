import Image from "next/image";
import Link from "next/link";

import xTwitter from "@/public/icons/brands-footer/Frame-1.svg";
import dribbble from "@/public/icons/brands-footer/Frame-2.svg";
import linkedIn from "@/public/icons/brands-footer/Frame-3.svg";
import instagram from "@/public/icons/brands-footer/Frame-4.svg";
import github from "@/public/icons/brands-footer/Frame.svg";
import spotify from "@/public/icons/brands-footer/Vector.svg";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full bg-white space-y-8 py-16">
      <nav>
        <ul className="flex text-paragraph text-black-75 font-regular space-x-12 ">
          <li>
            <Link className="hover:text-primary" href="#home">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary" href="#about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary" href="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex space-x-16 text-black-50 ">
        <Link href="/">
          <Image src={github} alt="Brand" height={38.75} width={40} />
        </Link>
        <Link href="/">
          <Image src={xTwitter} alt="Brand" height={40} width={40} />
        </Link>
        <Link href="/">
          <Image src={linkedIn} alt="Brand" height={35} width={40} />
        </Link>
        <Link href="/">
          <Image src={dribbble} alt="Brand" height={40} width={40} />
        </Link>
        <Link href="/">
          <Image src={instagram} alt="Brand" height={35} width={40} />
        </Link>
        <Link href="/">
          <Image src={spotify} alt="Brand" height={40} width={40} />
        </Link>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <span className="text-black-75 text-paragraph-sm">
          &copy; {new Date().getFullYear()} C.N. Mbhalati. All rights reserved
          (whatever that means).
        </span>
        <hr className="w-1/2 text-black-25" />
        <div className="space-x-1 flex items-center">
          <span className="text-black-75 text-paragraph-xs text-extra">
            Made with
          </span>
          <span role="img" className="text-[#FF0000] text-lg" aria-label="love">
            ❤️
          </span>
          <span className="text-black-75 text-paragraph-xs text-extra">
            and
          </span>
          <span role="img" className="text-lg" aria-label="laughter">
            😂
          </span>
          <span className="text-black-75 text-paragraph-xs text-extra">
            by{" "}
            <Link href="/">
              <strong>Kevin Hart</strong>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};
