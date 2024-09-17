import { navLinks } from "@/config/navLinks";
import Link from "next/link";
import { LetsGetJiggy } from "./Buttons";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header
      id="home"
      className="flex items-center justify-between xl:justify-around h-full w-full bg-white text-black-100 xl:py-4 xl:px-8 md:py-4 lg:px-24 md:px-20 sm:px-16 py-2 px-8"
    >
      <div>
        <Logo />
      </div>
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

      <LetsGetJiggy />
    </header>
  );
};
