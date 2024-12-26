import { fetchPodcastData, getAccessToken } from "@/lib/server/spotify";
import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

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

export function getBlogExcerpt(raw: string, charLimit: number = 3000): string {
  const cleanText = raw
    .replace(/(\*\*|##|`|_|~)/g, "")
    .replace(/#+\s?/g, "")
    .replace(/\s+/g, " ")
    .trim();

  // Return the excerpt up to the specified character limit
  return cleanText.length > charLimit
    ? `${cleanText.slice(0, charLimit).trim()}…`
    : cleanText;
}

const PostListItem = ({
  title,
  category,
  date,
  url,
  coverImage,
  excerpt,
}: {
  title: string;
  category: string;
  date: string;
  url: string;
  coverImage: string;
  excerpt: string;
}) => {
  return (
    // <div className="flex space-x-4 items-start ">
    // <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-center ">
    <div className="flex space-x-4 items-start justify-center ">
      <Link href={url} className="w-fit h-full flex-shrink-0 ">
        <Image
          className="rounded-xl object-cover h-72 w-full"
          src={coverImage}
          alt={title}
          width={2000}
          height={2000}
        />
      </Link>
      <div>
        <Link href={url}>
          <h3 className="text-heading-5 text-emerald-500 hover:text-emerald-400">
            {title}
          </h3>
        </Link>
        <div className="flex items-center space-x-2">
          <Link
            href={`/category/${category}`}
            className="text-heading-6 text-black-100 hover:text-black-100/75"
          >
            {/* {category} */}
            Monsters and Men
          </Link>
          <span>
            <hr className="block border-l w-[1px] h-3 border-black-100/90" />
          </span>
          <time dateTime={date} className="block text-paragraph text-black-100">
            {format(parseISO(date), "LLLL d, yyyy")}
          </time>
        </div>
        <p className="text-paragraph text-black-100/75 line-clamp-6">
          {excerpt}
        </p>
      </div>
    </div>
  );
};

export const HomePageLatestPodcast = async () => {
  const accessToken = await getAccessToken();
  const podcastData = await fetchPodcastData(showId, accessToken);
  console.log(podcastData.description);
  // console.log(podcastData.images[0].url);
  const podcastEpisodes = podcastData.episodes.items;

  // @ts-ignore
  // podcastEpisodes.map((e) => console.log(e));
  let episodeData = [];

  for (const e of podcastEpisodes) {
    const ep = {
      name: e.name,
      description: e.description,
      duration: formatDuration(e.duration_ms),
      releaseDate: e.release_date,
      url: e.external_urls["spotify"],
      coverImage: e.images[0]["url"],
    };
    episodeData.push(ep);
  }

  const featuredPosts = allPosts
    .filter((post) => post.featured === true)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  const topFeatured = featuredPosts.filter(
    (post) => post.url === "/posts/remember-that-you-will-die"
  )[0];

  const featuredPostsList = featuredPosts
    .slice(0, 4)
    .filter((post) => post.url !== "/posts/remember-that-you-will-die");

  return (
    <div className="py-8 max-md:-mt-4">
      <div className=" mx-auto 2xl:w-1/2 xl:w-[90%] w-11/12 flex flex-col items-start gap-4">
        <h2 className="md:text-heading-2 text-heading-4 self-center text-emerald-500 font-thin">
          The Monsters and Men podcast
        </h2>
        <div className="w-full h-full  md:gap-8 gap-4">
          {/* <div className="flex flex-col space-y-4">
          <FeaturedPodcastCard {...topFeatured} />
        </div> */}
          {/* <div className="md:hidden grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:gap-6 gap-5 justify-center items-start">
          {featuredPostsList.map((post, idx) => (
            <PostCard key={idx} featured={true} post={post} />
          ))}
        </div> */}
          <div className="max-md:hidden flex flex-col space-y-2">
            <div className="space-y-4">
              {/* {featuredPostsList.map((post, idx) => ( */}
              {episodeData.slice(0, 3).map((episode, idx) => (
                <PostListItem
                  key={idx}
                  title={episode.name}
                  category={episode.name}
                  date={episode.releaseDate}
                  // url={`/${post.title.toLowerCase().replace(/\s+/g, "-").replace(/:/g, "-")}`}
                  url={episode.url}
                  coverImage={episode.coverImage}
                  excerpt={getBlogExcerpt(episode.description ?? "")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
