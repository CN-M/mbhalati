import logo from "@/public/img/pfp.jpg";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2">
        <Image
          className="rounded-full xl:h-18 xl:w-18 lg:h-18 lg:w-18 md:h-16 md:w-16 h-10 w-10"
          src={logo}
          alt="C.N. Mbhalati profile picture Logo"
          priority
        />
        <p className="hidden xl:block text-paragraph text-black-100 hover:text-emerald-500">
          @cn_mbhalati
        </p>
      </div>
    </Link>
  );
};
