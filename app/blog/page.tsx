import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { PostCard } from "@/components/PostCard";

export async function generateMetadata() {
  return {
    title: "Blog",
    description: "View all blog posts.",
  };
}

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="mx-auto xl:w-4/5 w-11/12 py-8 sm:space-y-8 space-y-5">
      <div className=" grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-5 w-full">
        {posts.slice(0, 2).map((post, idx) => (
          <PostCard key={idx} featured={false} post={post} />
        ))}
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:gap-6 gap-5 justify-center items-start">
        {posts.slice(2).map((post, idx) => (
          <PostCard key={idx} featured={false} post={post} />
        ))}
      </div>
    </div>
  );
}
