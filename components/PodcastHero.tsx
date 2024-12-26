import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import coverImage from "@/public/img/mxm-cover.jpg";

export const PodcastHero = () => {
  return (
    <section className="w-full px-4 3xl:px-32 3xl:py-32 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-24 bg-black-100 text-white">
      <div className="container">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 md:space-y-4">
            <div className="flex items-center space-x-2 text-emerald-500">
              <Mic className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-xs md:text-sm font-medium">
                New Episode Every Month
              </span>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-heading-1/none font-thin tracking-tighter leading-heading max-w-[900px]">
                Heroes, Villains, and the Stories That Shape Our World
              </h1>
              <p className="max-w-[750px] text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400">
                From the monstrous to the magnificent, discover the stories of
                founders who shaped the world. Dive deep into their triumphs,
                struggles, and the lessons they left behind.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={"https://open.spotify.com/show/2tsu1q7KYNAbPIhCFSgxYL"}
                target="_blank"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-500/90"
                >
                  Listen Now
                </Button>
              </Link>
              <Link href="#episodes" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-emerald-500 bg-black-100 hover:bg-zinc-950/90"
                >
                  Explore Episodes
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full aspect-square md:aspect-auto md:h-full flex-shrink-0">
            <Image
              className="rounded-md object-cover h-full w-full"
              src={coverImage}
              alt="Monsters and Men podcast cover"
              width={2000}
              height={2000}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
