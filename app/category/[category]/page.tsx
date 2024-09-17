import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import slugify from "slugify";

import { PostCard } from "@/components/PostCard";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const cat = slugify(category, { lower: true });

  const posts = allPosts
    .filter((post) => slugify(post.category, { lower: true }) == cat)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="mx-auto w-w-11/12 py-8 space-y-8">
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
