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
      <button className="px-8 py-4 text-paragraph text-white font-normal bg-tertiary rounded-lg">
        Send Message
      </button>
    </Link>
  );
};

export const Emojis = () => {
  return <>💁‍♂️ 🥹 ♥ 😂</>;
};
