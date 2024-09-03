import Image from "next/image";
import Link from "next/link";

import dribbble from "@/public/icons/dribbble-brands-solid.svg";
import github from "@/public/icons/github-brands-solid.svg";
import instagram from "@/public/icons/instagram-brands-solid.svg";
import linkedIn from "@/public/icons/linkedin-in-brands-solid.svg";
import spotify from "@/public/icons/spotify-brands-solid.svg";
import xTwitter from "@/public/icons/x-twitter-brands-solid.svg";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full bg-white space-y-12 py-32">
      <nav>
        <ul className="flex text-paragraph text-black-50 font-regular space-x-16 ">
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
      <div className="flex space-x-24 text-primary ">
        <Image
          className="fill-current"
          src={github}
          alt="Brand"
          height={38.75}
          width={40}
          style={{ color: "Background" }}
        />
        <Image src={xTwitter} alt="Brand" height={40} width={40} />
        <Image src={linkedIn} alt="Brand" height={35} width={40} />
        <Image src={dribbble} alt="Brand" height={40} width={40} />
        <Image src={instagram} alt="Brand" height={35} width={40} />
        <Image src={spotify} alt="Brand" height={40} width={40} />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <span className="text-black-50 text-paragraph-sm">
          &copy; {new Date().getFullYear()} C.N. Mbhalati. All rights reserved
          (whatever that means).
        </span>
        <hr className="w-1/2 text-black-25" />
        <div className="space-x-2">
          <span className="text-black-50 text-paragraph-xs text-extra">
            Made with
          </span>
          <span role="img" className="text-[#FF0000] text-xl" aria-label="love">
            ❤️
          </span>
          <span className="text-black-50 text-paragraph-xs text-extra">
            and
          </span>
          <span role="img" className="text-xl" aria-label="laughter">
            😂
          </span>
          <span className="text-black-50 text-paragraph-xs text-extra">
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
