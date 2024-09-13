import Link from "next/link";
import { LetsGetJiggy } from "./Buttons";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header
      id="home"
      className="flex items-center justify-around h-full w-full bg-white text-black-100 2xl:py-4 2xl:px-16 md:py-2 md:px-8 py-1 px-4 "
    >
      <div className="">
        <Logo />
      </div>
      <nav className="hidden lg:block">
        <ul className="flex text-paragraph text-black-100 font-regular space-x-8 ">
          <li>
            <Link className="hover:text-emerald-500" href="#home">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-emerald-500" href="#home">
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
      <LetsGetJiggy />
    </header>
  );
};
