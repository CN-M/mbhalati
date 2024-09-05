import paperPlane from "@/public/contact/paper-plane-regular 1.svg";
import moneyHand from "@/public/hero/Frame-1.svg";
import arrowDown from "@/public/hero/Frame.svg";

import Image from "next/image";
import Link from "next/link";

export const LetsGetJiggy = () => {
  return (
    <Link href="/">
      <button className="px-8 py-4 text-paragraph leading-paragraph font-normal bg-secondary text-black-100 rounded-lg">
        <div className="flex space-x-4">
          <p>Let's Get Jiggy</p>
          <span role="img">🕺</span>
        </div>
      </button>
    </Link>
  );
};

export const GetToKnowMe = () => {
  return (
    <Link href="/">
      <button className="flex items-center justify-center space-x-4 px-8 py-4 text-paragraph leading-paragraph font-normal bg-white text-black-100 rounded-lg">
        <span>Get to Know Me</span>
        <Image src={arrowDown} alt="Brand" height={20} width={20} />
      </button>
    </Link>
  );
};

export const WinTheLottery = () => {
  return (
    <Link href="/">
      <button className="flex items-center justify-center space-x-4 px-8 py-4 text-paragraph leading-paragraph font-normal bg-tertiary text-black-100 rounded-lg">
        <span>Win the Lottery</span>
        <Image src={moneyHand} alt="Brand" height={24} width={24} />
      </button>
    </Link>
  );
};

export const SendMessage = () => {
  return (
    <Link href="/">
      <button className="flex items-center justify-center w-full space-x-4 px-8 py-4 text-paragraph leading-paragraph text-white font-normal bg-tertiary rounded-lg">
        <span>Send Message</span>
        <Image src={paperPlane} alt="Brand" height={24} width={24} />
      </button>
    </Link>
  );
};

export const Emojis = () => {
  return <>💁‍♂️ 🥹 ♥ 😂</>;
};
