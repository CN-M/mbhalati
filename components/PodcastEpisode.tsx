import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { format, parseISO } from "date-fns";
import { Clock, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { fetchPodcastData, getAccessToken } from "@/lib/server/spotify";

const showId = "2tsu1q7KYNAbPIhCFSgxYL";

export function formatDuration(milliseconds: number): string {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours} hr ${minutes} min`;
  } else {
    return `${minutes} min ${seconds} sec`;
  }
}

export const PodcastEpisodes = async () => {
  const accessToken = await getAccessToken();
  const podcastData = await fetchPodcastData(showId, accessToken);
  const podcastEpisodes = podcastData.episodes.items;

  let episodeData = [];

  for (const e of podcastEpisodes) {
    const ep = {
      title: e.name,
      description: e.description,
      duration: formatDuration(e.duration_ms),
      releaseDate: e.release_date,
      url: e.external_urls["spotify"],
      coverImage: e.images[0]["url"],
    };
    episodeData.push(ep);
  }

  return (
    <section
      id="episodes"
      className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 bg-white text-black-100"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-start space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Latest Episodes
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black-100/90">
            Explore our latest deep dives into the lives of heroes, villains,
            and the lessons they left behind.
          </p>
        </div>
        <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
          {episodeData.map((episode, idx) => (
            <Card
              key={idx}
              className="flex flex-col md:flex-row gap-4 sm:gap-6 p-4 sm:p-6 bg-white border-emerald-500"
            >
              <div className="relative w-full md:w-[280px] lg:w-[320px] xl:w-[400px] aspect-square md:aspect-auto md:h-[280px] lg:h-[320px] xl:h-[400px] flex-shrink-0">
                <Image
                  alt={`${episode.title} cover`}
                  className="rounded-lg object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 280px, (max-width: 1280px) 320px, 400px"
                  src={episode.coverImage}
                />
              </div>
              <div className="flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight text-black-100">
                      {episode.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-black-100/90">
                      <time
                        className="text-black-100 hover:text-black-100/75"
                        dateTime={episode.releaseDate}
                      >
                        {format(parseISO(episode.releaseDate), "LLLL d, yyyy")}
                      </time>
                      <span className="hidden sm:block">
                        <hr className="border-l w-[1px] h-3 border-black-100/90" />
                      </span>
                      <span className="flex items-center">
                        <Clock className="text-emerald-500 w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {episode.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-black-100/90 line-clamp-4 sm:line-clamp-none">
                    {episode.description}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-4">
                  <Link
                    href={episode.url}
                    target="_blank"
                    className="w-full sm:w-auto"
                  >
                    <Button className="w-full sm:w-auto bg-emerald-500 text-white hover:bg-emerald-500/75">
                      <Play className="w-4 h-4 mr-2" />
                      Play Episode
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    // className="w-full sm:w-auto border-emerald-500 border-2 text-black-100 bg-white hover:border-tertiary transition-transform duration-1000 ease-in-out"
                    className="w-full sm:w-auto border-emerald-500 border-2 text-black-100 bg-white hover:border-tertiary transition-transform duration-1000 ease-in-out"
                    disabled={true}
                  >
                    Episode Script
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
