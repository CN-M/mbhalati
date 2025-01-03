import logo from "@/public/img/pfp.jpg";
import Image from "next/image";
import Link from "next/link";

import { GetToKnowMe, WinTheLottery } from "./Buttons";

import { socialLinks } from "@/config/socialLinks";

export const Hero = async () => {
  return (
    <section className="flex flex-col xl:flex-row lg:space-y-10 2xl:space-x-8 max-xl:space-y-8 max-sm:space-y-4 items-center justify-center h-full md:h-screen w-full 2xl:px-32 lg:px-4 px-2 py-16 bg-primary">
      <div className="text-white md:space-y-2 space-y-1 text-center 2xl:w-4/5 md:w-full md:px-4">
        <h1 className="lg:text-heading-1 text-heading-4 md:text-heading-2 leading-heading font-bold">
          Hey. My name is C.N.
        </h1>
        <div className="text-heading-6 md:text-heading-3 lg:text-heading-3 font-light leading-heading">
          <h3>I&apos;m a Software Engineer.</h3>
          <h3>UI/UX Designer.</h3>
          <h3>Founder.</h3>
          <h3>And a Man Loved by Jesus.</h3>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-center md:pt-2 pt-1 md:space-x-4 sm:space-x-2 max-sm:space-y-2">
          <GetToKnowMe />
          <WinTheLottery />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-paragraph text-white 2xl:w-3/5 xl:w-4/5 lg:w-3/5 w-4/5 space-y-4 lg:space-y-8 md:space-y-6 border lg:p-8 md:px-4 md:py-6 px-2 py-4 rounded-3xl bg-gradient-to-br from-[#FFFFFF]/50 to-[#FFFFFF]/20 backdrop-blur-xl">
        <div className="flex flex-col items-center md:space-y-1 space-y-0.5">
          <Image
            className="rounded-full border border-white lg:h-20 lg:w-20 md:h-14 md:w-14 h-10 w-10"
            src={logo}
            alt="C.N. Mbhalati profile picture Logo"
            priority
            placeholder="blur"
          />
          <div className="text-center">
            <h4 className="font-medium lg:text-heading-6 text-paragraph-sm md:text-paragraph leading-paragraph">
              C.N. Mbhalati
            </h4>
            <p className="text-paragraph-xs lg:text-paragraph md:text-paragraph-sm leading-paragraph text-white/75">
              Part-Time Astronaut
            </p>
          </div>
          <p className="text-paragraph-sm lg:text-heading-6 md:text-paragraph leading-paragraph text-center">
            I do stuff on the internet. That&apos;s about it.
          </p>
        </div>

        <div className="flex items-center justify-center md:flex-row 3xl:space-x-14 2xl:space-x-10 xl:space-x-12 md:space-x-14 space-x-6 text-black-50">
          {socialLinks.map(({ name, lightIcon, href }, idx) => (
            <Link key={idx} href={href} target="_blank">
              <Image
                src={lightIcon}
                alt={`${name} social icon`}
                className="md:w-9 md:h-9 h-5 w-5"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
