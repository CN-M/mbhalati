import paperPlane from "@/public/contact/paper-plane-regular 1.svg";
import moneyHand from "@/public/hero/Frame-1.svg";
import arrowDown from "@/public/hero/Frame.svg";

import Image from "next/image";
import Link from "next/link";

export const LetsGetJiggy = () => {
  return (
    <Link
      href="https://youtu.be/3JcmQONgXJM?si=e2uGjnzdI-0AbdcH"
      className="hidden md:block"
      target="_blank"
    >
      <button className="lg:px-8 lg:py-4 md:px-8 md:py-4 px-4 py-2 md:space-x-2 space-x-1 flex items-center justify-center 2xl:space-x-3 xl:space-x-2 2xl:px-8 2xl:py-4 2xl:text-paragraph md:text-paragraph text-paragraph-xs leading-paragraph font-regular bg-secondary text-black-100 rounded-lg">
        <p>Let&apos;s Get Jiggy</p>
        <span role="img">🕺</span>
      </button>
    </Link>
  );
};

export const GetToKnowMe = () => {
  return (
    <Link href="#about">
      <button className="lg:px-8 lg:py-4 md:px-8 md:py-4 px-4 py-2 md:space-x-2 space-x-1 flex items-center justify-center 2xl:space-x-3 xl:space-x-2 2xl:px-8 2xl:py-4 2xl:text-paragraph md:text-paragraph text-paragraph-sm leading-paragraph font-regular bg-white text-black-100 rounded-lg">
        <span>Get to Know Me</span>
        <Image
          src={arrowDown}
          className="lg:h-6 lg:w-6 md:h-4 md:w-4 w-3 h-3"
          alt="Brand"
        />
      </button>
    </Link>
  );
};

export const WinTheLottery = () => {
  return (
    <Link
      href="https://youtu.be/dQw4w9WgXcQ?si=rrpJS7Dx3KyKoG1-"
      target="_blank"
    >
      <button className="lg:px-8 lg:py-4 md:px-8 md:py-4 px-4 py-2 flex items-center justify-center 2xl:space-x-3 md:space-x-2  space-x-1 2xl:px-8 2xl:py-4 2xl:text-paragraph md:text-paragraph text-paragraph-sm leading-paragraph font-regular bg-tertiary text-black-100 rounded-lg">
        <span>Win the Lottery</span>
        <Image
          src={moneyHand}
          alt="Brand"
          className="lg:h-6 lg:w-6 md:h-4 md:w-4 w-3 h-3"
        />
      </button>
    </Link>
  );
};

export const SendMessage = ({ isSubmitting }: { isSubmitting: boolean }) => {
  return (
    <button
      type="submit"
      className="font-regular lg:px-8 lg:py-4 px-4 py-2 flex items-center justify-center w-full md:space-x-4 space-x-2 text-paragraph-sm md:text-paragraph leading-paragraph text-white md:font-normal bg-tertiary rounded-lg"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        "Sending..."
      ) : (
        <>
          <span>Send Message</span>
          <Image
            src={paperPlane}
            alt="Brand"
            className="md:h-5 md:w-5 h-4 w-4"
          />
        </>
      )}
    </button>
  );
};

export const Emojis = () => {
  return <>💁‍♂️ 🥹 ♥ 😂</>;
};
