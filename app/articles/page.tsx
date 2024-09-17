import { Post, allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

function PostCard(post: Post) {
  const { title, coverImage, category } = post;

  const postUrl = slugify(title, { lower: true }).replaceAll(":", "-");
  const cat = slugify(category, { lower: true });

  return (
    <div className="w-full">
      <Link href={`/${postUrl}`}>
        {coverImage && (
          <div className="h-full w-full mb-4">
            <div className="w-full xl:h-[40vh] lg:h-[30vh] md:h-[25vh] sm:h-[20vh] h-[25vh] flex items-center justify-center">
              <Image
                className="rounded-xl w-full h-full object-cover"
                src={coverImage}
                alt={title}
                width={2000}
                height={2000}
                priority
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
    </div>
  );
}

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="mx-auto w-4/5 py-8 space-y-8">
      <div className=" grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-5 w-full">
        {posts.slice(0, 2).map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:gap-6 gap-5 justify-center items-start">
        {posts.slice(2).map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
