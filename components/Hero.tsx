import logo from "@/public/img/pfp.jpg";
import Image from "next/image";
import { GetToKnowMe, WinTheLottery } from "./Buttons";

import xTwitter from "@/public/icons/brands/Frame-1.svg";
import dribbble from "@/public/icons/brands/Frame-2.svg";
import linkedIn from "@/public/icons/brands/Frame-3.svg";
import instagram from "@/public/icons/brands/Frame-4.svg";
import github from "@/public/icons/brands/Frame.svg";
import spotify from "@/public/icons/brands/Vector.svg";

export const Hero = () => {
  return (
    <section className="flex items-center justify-center h-screen w-full lg:px-4 py-16 bg-primary">
      <div className="text-white space-y-4 text-center w-1/2">
        <h1 className="text-heading-1 leading-heading font-bold">
          Hey. My name is C.N.
        </h1>
        <div className="text-heading-3 font-light leading-heading">
          <h3>I'm a Software Engineer.</h3>
          <h3>UI/UX Designner.</h3>
          <h3>Founder.</h3>
          <h3>And a Man Loved by Jesus.</h3>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <GetToKnowMe />
          <WinTheLottery />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-paragraph text-white w-1/3 space-y-8">
        <div className="flex flex-col items-center space-y-1">
          <Image
            className="rounded-full border border-white"
            src={logo}
            alt="C.N. Mbhalati profile picture Logo"
            height={50}
            width={50}
          />
          <div className="text-center">
            <h4 className="font-medium text-paragraph leading-paragraph">
              C.N. Mbhalati
            </h4>
            <p className="text-paragraph-sm leading-paragraph text-white/75">
              Part-Time Astronaut
            </p>
          </div>
          <p className="text-paragraph leading-paragraph">
            I do stuff on the internet. That's about it.
          </p>
        </div>

        <div className="flex space-x-12 text-black-50 ">
          <Image src={github} alt="Brand" height={38.75} width={40} />
          <Image src={xTwitter} alt="Brand" height={40} width={40} />
          <Image src={linkedIn} alt="Brand" height={35} width={40} />
          <Image src={dribbble} alt="Brand" height={40} width={40} />
          <Image src={instagram} alt="Brand" height={35} width={40} />
          <Image src={spotify} alt="Brand" height={40} width={40} />
        </div>
      </div>
    </section>
  );
};
