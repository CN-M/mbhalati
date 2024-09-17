import halfsies from "@/public/img/halfsies.jpeg";
import handsomeBlackMan from "@/public/img/handsome-black-man.jpg";

import { socialLinks } from "@/config/socialLinks";
import Image from "next/image";
import Link from "next/link";

export const AboutMe = () => {
  const spotifyLink = socialLinks.filter((link) => link.name == "Spotify")[0]
    .href;
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row h-full w-full justify-center items-center bg-white 2xl:px-32 xl:px-16 lg:px-8 lg:py-16 md:px-24 px-6 py-8 xl:space-x-16 lg:space-x-8 md:space-y-8 space-y-4"
    >
      <div className="text-black-100 space-y-2 text-left 2xl:w-1/3 lg:w-1/2 w-full">
        <h1 className="lg:text-heading-2 text-heading-4 lg:text-left text-center md:text-heading-3 leading-heading font-light">
          About Me
        </h1>
        <div className="md:text-paragraph text-paragraph-sm leading-paragraph align-left space-y-2">
          <p>
            I hail from the <strong>southern most country</strong> on the{" "}
            <strong>content of Africa</strong>. You guessed it! South Africa!
            Creative, right?
          </p>
          <p>
            I have a degree in <strong>Mathematics</strong> and{" "}
            <strong>Statistics</strong>, but quite frankly that&apos;s the least
            interesting thing about me.
          </p>
          <p>
            I have a{" "}
            <Link href="/articles">
              <strong className="text-emerald-500">blog</strong>
            </Link>{" "}
            I haven&apos;t updated in a while.
          </p>
          <p>
            I have a{" "}
            <Link href={spotifyLink} target="_blank">
              <strong className="text-emerald-500">podcast</strong>
            </Link>
            , too. It kind of sucks, but it&apos;ll get better.
          </p>
          <p>
            I&apos;m still trying to figure out <strong>who I am</strong> and{" "}
            <strong>what I want</strong>.
          </p>
          <p className="hidden lg:block">
            By the way. Do you see that photo right there? Next to this wall of
            text? This isn&apos;t a photo of me. I just typed
            <i>“handsome black man”</i> on <Link href="/">Unsplash</Link> and
            this was the first result.{" "}
          </p>
          <p className="block lg:hidden">
            By the way. Do you see that photo right below? That guy right under
            this wall of text? This isn&apos;t a photo of me. I just typed{" "}
            <i>“handsome black man”</i> on <Link href="/">Unsplash</Link> and
            this was the first result.{" "}
          </p>
          <p>I have no idea who this man is...</p>
          <p>
            I don&apos;t know. I thought it would be funny. Anyway. Moving on...
          </p>
          <p>
            I&apos;m interested in <strong>building startups</strong>.
            There&apos;s no doubt in my mind that I&apos;ll die a{" "}
            <strong>billionaire</strong>. But until then, I&apos;ll keep sending
            texts like these:
          </p>
        </div>
        <Image
          className="rounded-2xl w-full h-auto"
          src={halfsies}
          alt="C.N. Mbhalati profile picture Logo"
          priority
        />
      </div>
      <div className="flex flex-col h-full 2xl:w-1/3 lg:w-1/2">
        <Image
          className="rounded-2xl w-full h-auto"
          src={handsomeBlackMan}
          alt="C.N. Mbhalati profile picture Logo"
          priority
        />
      </div>
    </section>
  );
};
