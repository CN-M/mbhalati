import logo from "@/public/img/pfp.jpg";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2">
        <Image
          className="rounded-full lg:h-12 lg:w-12 h-8 w-8"
          src={logo}
          alt="C.N. Mbhalati profile picture Logo"
        />
        <p className="hidden lg:block text-paragraph text-black-100 hover:text-emerald-500">
          @cn_mbhalati
        </p>
      </div>
    </Link>
  );
};
