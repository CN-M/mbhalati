import paperPlane from "@/public/contact/paper-plane-regular 1.svg";
import moneyHand from "@/public/hero/Frame-1.svg";
import arrowDown from "@/public/hero/Frame.svg";
import Google from "@/public/icons/Google.svg";

import Image from "next/image";
import Link from "next/link";

export const LetsGetJiggy = () => {
  return (
    <Link
      href="https://youtu.be/3JcmQONgXJM?si=e2uGjnzdI-0AbdcH"
      className="hidden md:block"
      target="_blank"
    >
      <button className="lg:px-[28px] lg:py-[14px] md:px-[26px] md:py-[13px] px-4 py-2 flex items-center space-x-1 justify-center md:text-paragraph text-paragraph-sm leading-heading font-regular bg-secondary hover:scale-105 transition-transform duration-200 ease-in-out text-black-100 rounded-lg">
        <p>Let&apos;s Get Jiggy</p>
        <span role="img">🕺</span>
      </button>
    </Link>
  );
};

export const CheckOutPodcast = () => {
  return (
    <Link
      href="https://open.spotify.com/show/2tsu1q7KYNAbPIhCFSgxYL?si=4dd968d522d94e5b"
      className="hidden md:block"
      target="_blank"
    >
      <button className="lg:px-[28px] lg:py-[14px] md:px-[26px] md:py-[13px] px-4 py-2 flex items-center space-x-1 justify-center md:text-paragraph text-paragraph-sm leading-heading font-regular bg-emerald-500 hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-lg">
        Subscribe
      </button>
    </Link>
  );
};

export const GetToKnowMe = () => {
  return (
    <Link href="#about">
      <button className="lg:px-[28px] lg:py-[14px] md:px-[26px] md:py-[13px] px-4 py-2 flex items-center justify-center md:text-paragraph space-x-1 text-paragraph-sm leading-heading font-regular bg-white hover:scale-105 transition-transform duration-200 ease-in-out text-black-100 rounded-lg">
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
      <button className="lg:px-[28px] lg:py-[14px] md:px-[26px] md:py-[13px] px-4 py-2 flex items-center justify-center md:text-paragraph space-x-1 text-paragraph-sm leading-heading font-regular bg-tertiary hover:scale-105 transition-transform duration-200 ease-in-out text-black-100 rounded-lg">
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
      className="lg:px-[28px] lg:py-[14px] md:px-[26px] md:py-[13px] px-4 py-2 flex items-center justify-center md:text-paragraph space-x-1 text-paragraph-sm leading-paragraph font-regular text-white bg-tertiary rounded-lg hover:scale-105 transition-transform duration-200 ease-in-out"
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

export const LoginWithGoogle = () => {
  return (
    <Link href="/login/google">
      <button className="flex items-center justify-center w-[15rem] md:space-x-4 space-x-2 lg:px-[28px] lg:py-[14px] md:px-[26px] md:py-[13px] px-4 py-2 md:text-paragraph text-paragraph-sm leading-heading bg-black-100 hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-lg">
        <Image
          src={Google}
          alt="Google Logo"
          className="md:h-5 md:w-5 h-4 w-4"
        />
        <span>Login with Google</span>
      </button>
    </Link>
  );
};
