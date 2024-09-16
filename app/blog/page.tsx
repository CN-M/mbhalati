import { Post, allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

function PostCard(post: Post) {
  const { title, coverImage } = post;
  return (
    <div className="w-full">
      <Link href={post.url}>
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
        <h2 className="mb-1 text-xl text-emerald-500 hover:text-emerald-400 ">
          {post.title}
        </h2>

        <time dateTime={post.date} className="mb-2 block text-xs text-black-75">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </Link>
      <Link href={`/category/${post.category}`} className="text-emerald-500">
        {post.category}
      </Link>
    </div>
  );
}

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    // <div className="mx-auto max-w-xl py-8">
    <div className="mx-auto w-4/5 py-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-5 w-full">
        {posts.slice(0, 2).map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:gap-6 justify-center items-start">
        {posts.slice(2).map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
