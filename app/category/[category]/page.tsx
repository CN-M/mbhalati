import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import slugify from "slugify";

import { PostCard } from "@/components/PostCard";

export const generateStaticParams = async () => {
  const categories = new Set<string>();

  const sortedPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  sortedPosts.forEach(({ category }) => categories.add(category));

  const categoriesArr = Array.from(categories);

  return categoriesArr.map((category) => ({
    category: slugify(category, { lower: true }), // Ensure slugified category
  }));
};

export async function generateMetadata({ params }: { params: any }) {
  const { category } = await params;
  const title = category
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return { title };
}

export default async function CategoryPage({
  params,
}: {
  // params: { category: string };
  params: any;
}) {
  const { category } = await params;
  const cat = slugify(category, { lower: true });

  const posts = allPosts
    .filter((post) => slugify(post.category, { lower: true }) == cat)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="mx-auto xl:w-4/5 w-11/12 py-8 space-y-8">
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
