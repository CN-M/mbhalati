import { FeaturedPostCard } from "@/components/FeaturedPostCard";

import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { PostCard } from "@/components/PostCard";
import { ArrowRight } from "lucide-react";

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

const categories = [
  "Christian",
  "Short Story",
  "Technology",
  "Philosophical Musings",
];

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
    <div className="flex space-x-4 items-start ">
      <Link href={url} className="w-40 h-32 flex-shrink-0">
        <Image
          className="rounded-xl object-cover h-full w-full"
          src={coverImage}
          alt={title}
          width={2000}
          height={2000}
        />
      </Link>
      <div>
        <Link href={url}>
          <h3 className="text-heading-6 text-emerald-500 hover:text-emerald-400">
            {title}
          </h3>
        </Link>
        <div className="flex items-center space-x-2">
          <Link
            href={`/category/${category}`}
            className="text-paragraph text-black-100 hover:text-black-100/75"
          >
            {category}
          </Link>
          <span>
            <hr className="block border-l w-[1px] h-3 border-black-100/90" />
          </span>
          <time
            dateTime={date}
            className="block text-paragraph-sm text-black-100"
          >
            {format(parseISO(date), "LLLL d, yyyy")}
          </time>
        </div>
        <p className="text-sm text-black-100/90 line-clamp-3">{excerpt}</p>
      </div>
    </div>
  );
};

export default function HomePageLatest() {
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
    <div className="mx-auto 2xl:w-4/5 xl:w-[90%] w-11/12 3xl:py-24 sm:py-16 py-8 flex flex-col items-start gap-4 md:-mt-8 -mt-4">
      <h2 className="md:text-heading-3 text-heading-4 max-md:self-center text-black-100/90 font-thin">
        My Best Writing
      </h2>
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 md:gap-8 gap-4">
        <div className="flex flex-col space-y-4">
          <FeaturedPostCard {...topFeatured} />
        </div>
        <div className="md:hidden grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:gap-6 gap-5 justify-center items-start">
          {featuredPostsList.map((post, idx) => (
            <PostCard key={idx} featured={true} post={post} />
          ))}
          <div className="w-full flex justify-center">
            <Link href="/blog">
              <span className="-mt-2 flex items-center justify-center md:text-paragraph-sm text-paragraph-xs font-medium bg-emerald-500 text-white px-3 py-1 rounded-md space-x-1 hover:scale-105 transition-transform duration-200 ease-in-out">
                <span>All Blog Posts</span>
                <ArrowRight className="h-5 w-5 transition text-white" />
              </span>
            </Link>
          </div>
        </div>
        <div className="max-md:hidden flex flex-col space-y-2">
          <div className="space-y-4">
            {featuredPostsList.map((post, idx) => (
              <PostListItem
                key={idx}
                title={post.title}
                category={post.category}
                date={post.date}
                url={`/${post.title.toLowerCase().replace(/\s+/g, "-").replace(/:/g, "-")}`}
                coverImage={post.coverImage}
                excerpt={getBlogExcerpt(post.excerpt ?? "")}
              />
            ))}
          </div>
          <div className="w-full flex justify-center">
            <Link href="/blog">
              <span className="flex md:text-paragraph-sm text-paragraph-xs font-medium bg-emerald-500 text-white px-3 py-1 rounded-md space-x-1 hover:scale-105 transition-transform duration-200 ease-in-out">
                <span>All Blog Posts</span>
                <ArrowRight className={`h-5 w-5 transition ${"text-white "}`} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
