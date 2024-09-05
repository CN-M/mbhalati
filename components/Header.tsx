import Link from "next/link";
import { LetsGetJiggy } from "./Buttons";
import { Logo } from "./Logo";
export const Header = () => {
  return (
    <header
      id="home"
      className="flex items-center justify-around h-full w-full bg-white text-black-100 py-4 px-16"
    >
      <div className="">
        <Logo />
      </div>
      <nav>
        <ul className="flex text-paragraph text-black-100 font-regular space-x-8 ">
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
      <LetsGetJiggy />
    </header>
  );
};
