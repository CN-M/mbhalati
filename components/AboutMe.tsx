import halfsies from "@/public/img/halfsies.jpeg";
import handsomeBlackMan from "@/public/img/handsome-black-man.jpg";

import Image from "next/image";
import Link from "next/link";

export const AboutMe = () => {
  return (
    <section className="flex h-full w-full justify-center bg-white px-16 py-32 space-x-16">
      <div className="text-black-100 space-y-4 text-left w-1/3">
        <h1 className="text-heading-3 leading-heading font-light">About Me</h1>
        <div className="text-paragraph leading-paragraph align-left space-y-2">
          <p>
            I hail from the <strong>southern most country</strong> on the{" "}
            <strong>content of Africa</strong>. You guessed it! South Africa!
            Creative, right?
          </p>
          <p>
            I have a degree in <strong>Mathematics</strong> and{" "}
            <strong>Statistics</strong>, but quite frankly that’s the least
            interesting thing about me.
          </p>
          <p>
            I have a{" "}
            <Link href="/">
              <strong>blog</strong>
            </Link>{" "}
            I haven’t updated in a while.
          </p>
          <p>
            I have a{" "}
            <Link href="/">
              <strong>podcast</strong>
            </Link>
            , too. It kind of sucks, but it’ll get better.
          </p>
          <p>
            I’m still trying to figure out <strong>who I am</strong> and{" "}
            <strong>what I want</strong>.
          </p>
          <p>
            By the way. Do you see that photo right there? Next to this
            paragraph? This isn’t a photo of me. I just typed emphasis{" "}
            <i>“handsome black man”</i> on <Link href="/">Unsplash</Link> and
            this was the first result.{" "}
          </p>
          <p>I have no idea who this man is...</p>
          <p>I don’t know. I thought it would be funny. Anyway. Moving on...</p>
          <p>
            I’m interested in <strong>building startups</strong>. There’s no
            doubt in my mind that I’ll die a <strong>billionaire</strong>. But
            until then, I’ll keep sending texts like these:
          </p>
        </div>
        <Image
          className="rounded-2xl w-full h-auto"
          src={halfsies}
          alt="C.N. Mbhalati profile picture Logo"
        />
      </div>
      <div className="flex flex-col h-full  w-1/3">
        <Image
          className="rounded-2xl w-full h-auto"
          src={handsomeBlackMan}
          alt="C.N. Mbhalati profile picture Logo"
        />
      </div>
    </section>
  );
};
