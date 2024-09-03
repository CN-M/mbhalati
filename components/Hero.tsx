import logo from "@/public/img/pfp.jpg";
import Image from "next/image";
import { GetToKnowMe, WinTheLottery } from "./Buttons";

export const Hero = () => {
  return (
    <section className="flex items-center justify-center h-screen w-full bg-primary">
      <div className="text-white space-y-8 text-center">
        <h1 className="text-heading-1 leading-heading font-bold">
          Hey. My name is C.N.
        </h1>
        <div className="text-heading-3 font-light leading-heading">
          <h3>I'm a Software Engineer.</h3>
          <h3>UI/UX Designner.</h3>
          <h3>Founder.</h3>
          <h3>And a Man Loved by Jesus.</h3>
        </div>
        <div className="space-x-4">
          <GetToKnowMe />
          <WinTheLottery />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-paragraph text-white">
        <Image
          className="rounded-full"
          src={logo}
          alt="C.N. Mbhalati profile picture Logo"
          height={50}
          width={50}
        />
        <h4>C.N. Mbhalati</h4>
        <p>Part-Time Astronaut</p>
        <p>I do stuff on the internet. That's about it.</p>
      </div>
    </section>
  );
};
