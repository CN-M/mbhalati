import paperPlane from "@/public/icons/paper-plane-regular.svg";
import Image from "next/image";
import Link from "next/link";

export const LetsGetJiggy = () => {
  return (
    <Link href="/">
      <button className="px-8 py-4 text-paragraph font-normal bg-secondary text-black-100 rounded-lg">
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
      <button className="px-8 py-4 text-paragraph font-normal bg-white text-black-100 rounded-lg">
        Get to Know Me
      </button>
    </Link>
  );
};

export const WinTheLottery = () => {
  return (
    <Link href="/">
      <button className="px-8 py-4 text-paragraph font-normal bg-tertiary text-black-100 rounded-lg">
        Win the Lottery
      </button>
    </Link>
  );
};

export const SendMessage = () => {
  return (
    <Link href="/">
      <button className="flex space-x-4 px-8 py-4 text-paragraph text-white font-normal bg-tertiary rounded-lg">
        <span>Send Message</span>
        <Image src={paperPlane} alt="Brand" height={24} width={24} />
      </button>
    </Link>
  );
};

export const Emojis = () => {
  return <>💁‍♂️ 🥹 ♥ 😂</>;
};
