import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

export const PostCard = ({
  post,
  featured,
}: {
  post: Post;
  featured: boolean;
}) => {
  const { title, coverImage, category } = post;

  const postUrl = slugify(title, { lower: true }).replaceAll(":", "-");
  const cat = slugify(category, { lower: true });

  return (
    <div className="w-full">
      <Link href={`/${postUrl}`}>
        {coverImage && (
          <div className="h-full w-full mb-2">
            <div className="w-full xl:h-[40vh] lg:h-[30vh] md:h-[25vh] sm:h-[20vh] h-[25vh] flex items-center justify-center">
              <Image
                className="rounded-xl w-full h-full object-cover"
                src={coverImage}
                alt={title}
                width={2000}
                height={2000}
              />
            </div>
          </div>
        )}
      </Link>
      <Link href={`/${postUrl}`}>
        <h2 className="text-xl text-emerald-500 hover:text-emerald-400 ">
          {post.title}
        </h2>
      </Link>
      <div className="flex items-center space-x-2">
        <Link
          href={`/category/${cat}`}
          className="text-paragraph-sm font-medium text-black-75"
        >
          {post.category}
        </Link>
        <span>
          <hr className="block border-l w-[1px] h-3 border-black-50" />
        </span>
        <time
          dateTime={post.date}
          className="block text-paragraph-xs font-medium text-black-75"
        >
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      {featured ? (
        <p className="mt-1 text-sm text-black-100/75 line-clamp-3">
          {post.excerpt}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};
