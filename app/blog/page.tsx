import { Post, allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

function PostCard(post: Post) {
  const { title, coverImage } = post;
  return (
    <div className="mb-8 w-full">
      {coverImage && (
        <div className="h-full w-full mb-4">
          <Image
            className="rounded-2xl w-full h-auto"
            src={coverImage}
            alt={title}
            width={2000}
            height={2000}
          />
        </div>
      )}
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-emerald-500 hover:text-emerald-400 "
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-black-75">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <Link href={`/category/${post.category}`} className="text-emerald-500">
        {post.category}
      </Link>
    </div>
  );
}

export default function () {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">
        Next.js + Contentlayer Example
      </h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
