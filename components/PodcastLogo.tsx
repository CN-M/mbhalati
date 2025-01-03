import Link from "next/link";

export const PodcastLogo = () => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2">
        <h1 className="xl:hidden text-emerald-500 md:text-heading-4 text-heading-5">
          MxM
        </h1>
        <h1 className="text-heading-4 hidden xl:block text-emerald-500 hover:text-emerald-500">
          Monsters and Men
        </h1>
      </div>
    </Link>
  );
};
