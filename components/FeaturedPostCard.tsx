import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

export const FeaturedPostCard = (post: Post) => {
  const { title, coverImage, category } = post;

  const postUrl = slugify(title, { lower: true })
    .replaceAll(":", "-")
    .replaceAll("'", "");
  const cat = slugify(category, { lower: true });

  return (
    <div className="relative w-full h-full">
      <Link href={`/${postUrl}`}>
        <Image
          className="rounded-xl w-full h-full max-h-[30rem] object-cover"
          src={coverImage}
          alt={title}
          width={2000}
          height={2000}
        />
      </Link>
      <div className="flex z-50 absolute top-3 left-3 gap-2 flex-wrap">
        <span className="md:text-paragraph-sm text-paragraph-xs font-medium bg-white text-black-100 px-3 py-1 rounded-md ">
          Featured
        </span>
        <span className="md:text-paragraph-sm text-paragraph-xs font-medium bg-emerald-500 text-white px-3 py-1 rounded-md ">
          Seriously, You should read this.
        </span>
      </div>
      <div className="absolute md:bottom-5 md:left-5 bottom-3 left-3 z-50">
        <Link href={`/${postUrl}`}>
          <h2 className="md:text-heading-4 text-heading-6 leading-heading font-light text-white hover:scale-105 transition-all duration-200 ease-in-out ">
            {post.title}
          </h2>
        </Link>
        <div className="flex items-center space-x-2">
          <Link
            href={`/category/${cat}`}
            className="md:text-paragraph text-paragraph-sm  font-medium text-white hover:scale-105 transition-all duration-200 ease-in-out"
          >
            {post.category}
          </Link>
          <span>
            <hr className="block border-l w-[1px] h-3 border-white" />
          </span>
          <time
            dateTime={post.date}
            className="block md:text-paragraph-sm text-paragraph-xs font-medium text-white"
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
      </div>
    </div>
  );
};
