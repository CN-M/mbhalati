import { navLinks } from "@/config/navLinks";
import Link from "next/link";
import { LetsGetJiggy } from "./Buttons";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <header
      id="home"
      className="border-b border-primary/25 flex items-center justify-between xl:justify-around h-full w-full bg-white text-black-100 xl:py-4 xl:px-8 md:py-4 lg:px-18 md:px-10 sm:px-16 py-2 px-8"
    >
      <Logo />
      {/* <MobileMenu /> */}
      <nav>
        <ul className="hidden md:flex text-paragraph text-black-100 font-regular space-x-8">
          {navLinks.map(({ text, href }, idx) => (
            <li key={idx}>
              <Link className="hover:text-emerald-500" href={href}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex">
        <LetsGetJiggy />
        <MobileMenu />
      </div>
    </header>
  );
};
