import logo from "@/public/img/pfp.jpg";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2">
        <Image
          className="rounded-full"
          src={logo}
          alt="C.N. Mbhalati profile picture Logo"
          height={50}
          width={50}
        />
        <p className="text-paragraph text-black-100 hover:text-primary">
          @cn_mbhalati
        </p>
      </div>
    </Link>
  );
};
